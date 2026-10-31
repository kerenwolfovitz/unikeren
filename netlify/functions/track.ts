import { getStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

/**
 * Records one page view.
 *
 * Deliberately does not store the IP address: Netlify resolves it to a
 * country/city for us at the edge, and the raw address never gets written
 * down. That keeps the log useful without holding onto the one field that
 * makes it properly identifying.
 */
export default async (req: Request, context: Context) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const str = (v: unknown, max: number) => String(v ?? "").slice(0, max);

  const path = str(body.path, 200);
  if (path.startsWith("/admin")) {
    return new Response(null, { status: 204 }); // don't log Keren checking her own stats
  }

  const now = new Date();
  const record = {
    at: now.toISOString(),
    path,
    referrer: str(body.referrer, 300),
    session: str(body.session, 40),
    country: context.geo?.country?.name ?? null,
    countryCode: context.geo?.country?.code ?? null,
    city: context.geo?.city ?? null,
    ua: str(req.headers.get("user-agent"), 300),
  };

  // One blob per view, so concurrent visitors can never overwrite each other.
  const key = `${now.toISOString()}-${Math.random().toString(36).slice(2, 8)}`;
  await getStore("visits").setJSON(key, record);

  return new Response(null, { status: 204 });
};

export const config = { path: "/api/track" };
