import { getStore } from "@netlify/blobs";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

/** Constant-time-ish compare, so the response time doesn't leak the password. */
function matches(given: string, expected: string) {
  if (given.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < given.length; i += 1) {
    diff |= given.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

export default async (req: Request) => {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return json({ error: "ADMIN_PASSWORD is not set on this site yet." }, 500);
  }

  const given = req.headers.get("x-admin-password") ?? "";
  if (!matches(given, expected)) {
    return json({ error: "Wrong password." }, 401);
  }

  const store = getStore("visits");
  const { blobs } = await store.list();

  // Keys start with an ISO timestamp, so sorting them sorts by time.
  const keys = blobs
    .map((b) => b.key)
    .sort()
    .reverse()
    .slice(0, 1000);

  const records = await Promise.all(
    keys.map((k) => store.get(k, { type: "json" }).catch(() => null)),
  );

  return json({ visits: records.filter(Boolean) });
};

export const config = { path: "/api/visits" };
