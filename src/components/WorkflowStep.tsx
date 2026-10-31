import type { ReactNode } from "react";

/** Icons are stroke-based so they inherit colour and stay legible when small. */
const icons: Record<string, ReactNode> = {
  customers: (
    <>
      <path d="M8.5 13.5h7M8.5 9.5h7" />
      <path d="M4 4h16v12H9l-5 4V4Z" />
    </>
  ),
  problem: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  build: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <path d="M10.5 10.5h3v3h-3zM12 3v4M12 17v4M3 12h4M17 12h4M7.5 3.5v2M16.5 3.5v2M7.5 18.5v2M16.5 18.5v2" />
    </>
  ),
  test: (
    <>
      <path d="M9.5 3v6L4.8 17.4A2 2 0 0 0 6.5 20.5h11a2 2 0 0 0 1.7-3.1L14.5 9V3" />
      <path d="M8 3h8M7.6 14h8.8" />
    </>
  ),
  measure: (
    <>
      <path d="M3 20h18" />
      <rect x="5" y="12" width="3.4" height="5" rx="0.6" />
      <rect x="10.3" y="8" width="3.4" height="9" rx="0.6" />
      <rect x="15.6" y="4.5" width="3.4" height="12.5" rx="0.6" />
    </>
  ),
  deal: (
    <>
      <path d="M3 9.5 7 6l4 2.5 3-1 6 4.5-3 4-3.5-2.5-2.5 2L7 12.5 3 15.5V9.5Z" />
      <path d="m11 15.5 2 1.8M14 13.6l2.2 1.9" />
    </>
  ),
};

export type Step = {
  icon: keyof typeof icons | string;
  title: string;
  body: string;
};

export function WorkflowStep({ step }: { step: Step }) {
  return (
    <li className="flex min-w-0 flex-col items-center text-center lg:flex-1 lg:basis-[200px]">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          aria-hidden="true"
        >
          {icons[step.icon]}
        </svg>
      </span>
      <h3 className="mt-4 font-display text-[16px]">{step.title}</h3>
      <p className="mt-1.5 text-[13px] leading-[1.7] text-ink/75">{step.body}</p>
    </li>
  );
}

/** Points right on wide screens, down once the flow stacks. */
export function FlowArrow() {
  return (
    <li aria-hidden="true" className="flex shrink-0 items-center justify-center self-center py-2">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 rotate-90 text-ink/35 lg:mt-[-52px] lg:rotate-0"
      >
        <path d="M4 12h15M13 6l6 6-6 6" />
      </svg>
    </li>
  );
}
