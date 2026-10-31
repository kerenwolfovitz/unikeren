/**
 * A rendering of what a Marketplace dataset looks like, built from Bright Data's
 * own public product page — real dataset names, real record counts, real endpoint.
 * Drawn rather than screenshotted so nothing here is lifted artwork.
 */

const rows = [
  { name: "LinkedIn people profiles", tag: "Business", records: "132.2K+" },
  { name: "Amazon products", tag: "eCommerce", records: "39.3K+" },
  { name: "Instagram profiles", tag: "Social media", records: "25.2K+" },
  { name: "Google Maps full information", tag: "Business", records: "15.6K+" },
  { name: "Zillow property listings", tag: "Real estate", records: "12.9K+" },
];

export function DatasetShowcase() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
        <span className="ml-2 font-display text-[12px] tracking-wide text-white/50">
          Dataset Marketplace
        </span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-[11px] tracking-[0.12em] text-white/40 uppercase">
            <th className="px-4 py-2.5 font-normal">Dataset</th>
            <th className="hidden px-4 py-2.5 font-normal sm:table-cell">Category</th>
            <th className="px-4 py-2.5 text-right font-normal">Records</th>
          </tr>
        </thead>
        <tbody className="text-[13px]">
          {rows.map((r) => (
            <tr key={r.name} className="border-t border-white/[0.07]">
              <td className="px-4 py-3 text-white/90">{r.name}</td>
              <td className="hidden px-4 py-3 sm:table-cell">
                <span className="rounded-full bg-white/8 px-2.5 py-1 text-[11px] text-white/60">
                  {r.tag}
                </span>
              </td>
              <td className="px-4 py-3 text-right tabular-nums text-white/60">{r.records}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="border-t border-white/10 bg-black/25 px-4 py-3">
        <p className="text-[11px] tracking-[0.12em] text-white/35 uppercase">Delivered by API</p>
        <pre className="mt-2 overflow-x-auto text-[11.5px] leading-[1.7] text-accent">
          <code>{`curl --request GET \\
  --url https://api.brightdata.com/datasets/snapshots/{id}/download \\
  --header 'Authorization: Bearer <token>'`}</code>
        </pre>
      </div>
    </div>
  );
}
