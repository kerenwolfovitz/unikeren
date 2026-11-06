/**
 * What a business owner actually sees from NeverMiss: a missed call turned into a
 * tidy lead email. Drawn rather than screenshotted, using the example from the
 * NeverMiss landing page.
 */

export function NeverMissShowcase() {
  return (
    <div className="relative">
      {/* The call that would have gone to voicemail */}
      <div className="flex items-center gap-3 rounded-2xl bg-ink px-4 py-3.5 text-white shadow-[0_18px_40px_-20px_rgba(22,22,30,0.6)]">
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
          <span className="absolute inset-0 animate-ping rounded-full bg-accent/25 motion-reduce:hidden" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative h-5 w-5"
            aria-hidden="true"
          >
            <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[13px] text-white/90">Incoming call · 23:40</p>
          <p className="text-[12px] text-white/50">Office closed — NeverMiss is answering</p>
        </div>
        <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[11px] text-accent">Live</span>
      </div>

      <div aria-hidden="true" className="ml-9 h-6 w-px bg-ink/20" />

      {/* The email the team gets afterwards */}
      <div className="overflow-hidden rounded-2xl border border-ink/12 bg-white shadow-[0_24px_50px_-28px_rgba(22,22,30,0.45)]">
        <div className="flex items-center justify-between border-b border-ink/8 px-5 py-3">
          <span className="font-display text-[12px] tracking-[0.14em] text-ink/45 uppercase">
            New lead
          </span>
          <span className="text-[11.5px] text-ink/40">sent to your team · 23:43</span>
        </div>
        <div className="px-5 py-4">
          <h3 className="font-display text-[18px]">John Smith — Plumbing emergency</h3>
          <dl className="mt-4 grid gap-3 text-[13px]">
            <div>
              <dt className="text-[11px] tracking-[0.12em] text-ink/45 uppercase">Summary</dt>
              <dd className="mt-1 leading-[1.65] text-ink/80">
                Leak under the kitchen sink, needs a repair visit. Available tomorrow 9am–12pm.
              </dd>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <dt className="text-[11px] tracking-[0.12em] text-ink/45 uppercase">Customer</dt>
                <dd className="mt-1 text-ink/80">New</dd>
              </div>
              <div>
                <dt className="text-[11px] tracking-[0.12em] text-ink/45 uppercase">Next step</dt>
                <dd className="mt-1 text-ink/80">Call back first thing</dd>
              </div>
            </div>
          </dl>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-band-workflows/70 px-3 py-1.5 text-[12px] text-ink">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path d="m5 12 4.5 4.5L19 7" />
            </svg>
            Action required: callback requested
          </p>
        </div>
      </div>
    </div>
  );
}
