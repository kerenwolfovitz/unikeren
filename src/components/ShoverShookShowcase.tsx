/**
 * The two sides of Shover Shook: a voucher someone won't use, listed for less,
 * and the buyer who gets the code straight away. Drawn rather than screenshotted.
 */

export function ShoverShookShowcase() {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      {/* The listing, as a buyer sees it */}
      <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_24px_50px_-28px_rgba(22,22,30,0.45)]">
        <div className="relative flex h-28 items-end bg-gradient-to-br from-[#8b5cf6] to-[#c084fc] p-4">
          <span className="absolute top-3 left-3 rounded-full bg-white px-2.5 py-1 text-[12px] font-semibold text-[#7c3aed]">
            −34%
          </span>
          <span className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] text-white backdrop-blur">
            Food &amp; restaurants · Digital
          </span>
        </div>
        <div className="px-5 py-4">
          <h3 className="font-display text-[18px]">Family pizza + drinks</h3>
          <p className="mt-1 text-[12.5px] text-ink/55">Listed by a seller who won't use it · added today</p>
          <div className="mt-4 flex items-end justify-between">
            <p className="flex items-baseline gap-2">
              <span className="font-display text-[26px] tabular-nums">₪59</span>
              <span className="text-[13px] text-ink/40 tabular-nums line-through">₪89</span>
            </p>
            <span className="rounded-full bg-[#7c3aed] px-4 py-2 text-[12.5px] text-white">Buy now</span>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="ml-10 h-6 w-px bg-ink/20" />

      {/* What arrives straight after payment */}
      <div className="flex items-center gap-3 rounded-2xl bg-ink px-4 py-3.5 text-white shadow-[0_18px_40px_-20px_rgba(22,22,30,0.6)]">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path d="M20 12v8H4v-8M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7Zm0 0h4.5a2.5 2.5 0 1 0 0-5C13 2 12 7 12 7Z" />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] text-white/90">Voucher code delivered</p>
          <p className="truncate font-mono text-[12px] tracking-wider text-white/55">PZ-7Q4K-2291</p>
        </div>
        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[11px] text-accent">Instant</span>
      </div>
    </div>
  );
}
