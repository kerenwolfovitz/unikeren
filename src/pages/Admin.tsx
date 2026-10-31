import { useCallback, useEffect, useState } from "react";

type Visit = {
  at: string;
  path: string;
  referrer: string;
  session: string;
  country: string | null;
  countryCode: string | null;
  city: string | null;
  ua: string;
};

/** "https://www.google.com/search?q=..." -> "Google" */
function sourceOf(referrer: string) {
  if (!referrer) return "Direct / bookmark";
  let host: string;
  try {
    host = new URL(referrer).hostname.replace(/^www\./, "");
  } catch {
    return "Unknown";
  }
  if (host.endsWith("unikeren.co.il")) return "Within the site";
  const named: Record<string, string> = {
    "google.com": "Google",
    "linkedin.com": "LinkedIn",
    "lnkd.in": "LinkedIn",
    "facebook.com": "Facebook",
    "instagram.com": "Instagram",
    "t.co": "X / Twitter",
    "bing.com": "Bing",
    "duckduckgo.com": "DuckDuckGo",
  };
  const key = Object.keys(named).find((k) => host === k || host.endsWith(`.${k}`));
  return key ? named[key] : host;
}

function deviceOf(ua: string) {
  const mobile = /Mobile|Android|iPhone|iPad/i.test(ua);
  const browser = /Edg\//.test(ua)
    ? "Edge"
    : /Chrome\//.test(ua) && !/Edg\//.test(ua)
      ? "Chrome"
      : /Safari\//.test(ua) && !/Chrome\//.test(ua)
        ? "Safari"
        : /Firefox\//.test(ua)
          ? "Firefox"
          : "Other";
  return `${mobile ? "Phone" : "Computer"} · ${browser}`;
}

function when(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function countBy(visits: Visit[], pick: (v: Visit) => string) {
  const counts = new Map<string, number>();
  for (const v of visits) {
    const k = pick(v);
    counts.set(k, (counts.get(k) ?? 0) + 1);
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1]);
}

function Breakdown({ title, rows }: { title: string; rows: [string, number][] }) {
  const max = rows[0]?.[1] ?? 1;
  return (
    <div>
      <h2 className="text-[15px] font-medium">{title}</h2>
      <ul className="mt-3 space-y-2">
        {rows.slice(0, 8).map(([label, n]) => (
          <li key={label} className="text-[13px]">
            <div className="flex items-baseline justify-between gap-3">
              <span className="truncate">{label}</span>
              <span className="shrink-0 tabular-nums text-ink/60">{n}</span>
            </div>
            <div className="mt-1 h-1 rounded-full bg-ink/10">
              <div
                className="h-1 rounded-full bg-accent"
                style={{ width: `${Math.max(4, (n / max) * 100)}%` }}
              />
            </div>
          </li>
        ))}
        {rows.length === 0 && <li className="text-[13px] text-ink/60">Nothing yet.</li>}
      </ul>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-ink/12 px-5 py-4">
      <div className="font-display text-[28px] tabular-nums">{value}</div>
      <div className="mt-1 text-[12px] tracking-wide text-ink/60 uppercase">{label}</div>
    </div>
  );
}

export default function Admin() {
  const [password, setPassword] = useState(() => sessionStorage.getItem("unikeren-admin") ?? "");
  const [input, setInput] = useState("");
  const [visits, setVisits] = useState<Visit[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const load = useCallback(async (pw: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/visits", { headers: { "x-admin-password": pw } });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? `Request failed (${res.status})`);
      setVisits(data.visits as Visit[]);
      sessionStorage.setItem("unikeren-admin", pw);
      setPassword(pw);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
      setVisits(null);
      sessionStorage.removeItem("unikeren-admin");
      setPassword("");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (password) void load(password);
  }, [password, load]);

  if (!password || !visits) {
    return (
      <section className="mx-auto max-w-[420px] px-5 py-20">
        <h1 className="text-[26px]">Visitors</h1>
        <p className="mt-2 text-[14px] text-ink/70">Enter the admin password.</p>
        <form
          className="mt-6 flex gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            if (input.trim()) void load(input.trim());
          }}
        >
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            className="min-w-0 flex-1 rounded-full border border-ink/25 px-5 py-2.5 text-[14px] outline-none focus:border-ink"
            placeholder="Password"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-full bg-ink px-6 py-2.5 text-[13px] text-white disabled:opacity-50"
          >
            {loading ? "…" : "Open"}
          </button>
        </form>
        {error && <p className="mt-4 text-[13px] text-red-600">{error}</p>}
      </section>
    );
  }

  const sessions = new Map<string, Visit[]>();
  for (const v of visits) {
    const list = sessions.get(v.session) ?? [];
    list.push(v);
    sessions.set(v.session, list);
  }
  const ordered = [...sessions.values()]
    .map((list) => [...list].sort((a, b) => a.at.localeCompare(b.at)))
    .sort((a, b) => b[0].at.localeCompare(a[0].at));

  const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  const recent = visits.filter((v) => new Date(v.at).getTime() > weekAgo);

  return (
    <section className="mx-auto max-w-[1100px] px-5 py-12 lg:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-[28px]">Visitors</h1>
        <button
          type="button"
          onClick={() => void load(password)}
          className="rounded-full border border-ink/30 px-5 py-2 text-[13px] transition-colors hover:bg-ink hover:text-white"
        >
          Refresh
        </button>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Stat label="Visits (all time)" value={ordered.length} />
        <Stat label="Pages viewed" value={visits.length} />
        <Stat label="Visits this week" value={new Set(recent.map((v) => v.session)).size} />
        <Stat label="Countries" value={new Set(visits.map((v) => v.country ?? "?")).size} />
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        <Breakdown title="How they found you" rows={countBy(visits, (v) => sourceOf(v.referrer))} />
        <Breakdown title="Pages they looked at" rows={countBy(visits, (v) => v.path)} />
        <Breakdown
          title="Where they are"
          rows={countBy(visits, (v) =>
            v.country ? `${v.city ? `${v.city}, ` : ""}${v.country}` : "Unknown",
          )}
        />
      </div>

      <h2 className="mt-14 text-[20px]">Each visit, most recent first</h2>
      <ul className="mt-5 space-y-3">
        {ordered.slice(0, 80).map((list) => {
          const first = list[0];
          return (
            <li key={first.session} className="rounded-xl border border-ink/12 p-4">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[13px]">
                <span className="font-medium">{when(first.at)}</span>
                <span className="text-ink/60">
                  {first.city ? `${first.city}, ` : ""}
                  {first.country ?? "Unknown location"}
                </span>
                <span className="text-ink/60">· via {sourceOf(first.referrer)}</span>
                <span className="text-ink/60">· {deviceOf(first.ua)}</span>
                <span className="ml-auto text-ink/50">
                  {list.length} page{list.length === 1 ? "" : "s"}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-1.5 text-[12px]">
                {list.map((v, i) => (
                  <span key={`${v.at}-${v.path}`} className="flex items-center gap-1.5">
                    {i > 0 && <span className="text-ink/35">→</span>}
                    <span className="rounded-full bg-ink/6 px-2.5 py-1">{v.path}</span>
                  </span>
                ))}
              </div>
            </li>
          );
        })}
        {ordered.length === 0 && (
          <li className="text-[14px] text-ink/60">
            No visits recorded yet. Come back after someone has been to the site.
          </li>
        )}
      </ul>
    </section>
  );
}
