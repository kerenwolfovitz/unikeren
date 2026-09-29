import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "solid" | "outline" | "outline-dark";

const styles: Record<Variant, string> = {
  solid: "bg-ink text-white border-ink hover:bg-ink-soft",
  outline: "border-white/60 text-white hover:bg-white hover:text-ink",
  "outline-dark": "border-ink/30 text-ink hover:bg-ink hover:text-white",
};

export function Pill({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center rounded-full border px-7 py-2.5 text-[13px] whitespace-nowrap transition-colors ${styles[variant]} ${className}`;

  // Links that stay on this site go through the router; everything else opens in a new tab.
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={classes}>
      {children}
    </a>
  );
}
