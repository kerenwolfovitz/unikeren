import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { LogoMark } from "./Logo";
import { contact, navLinks } from "../site";

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" className="h-5 w-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink text-white">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center gap-3 px-4 sm:px-5 lg:gap-6 lg:px-10">
        <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
          <span className="truncate font-display text-[14px] tracking-[0.1em] text-white/90 sm:text-[17px] sm:tracking-[0.12em] lg:text-[19px]">
            KEREN WOLFOVITZ
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-[13px] tracking-wide transition-colors hover:text-link ${
                  isActive ? "text-link" : "text-white/80"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-4 lg:ml-0">
          <a href={contact.phoneHref} aria-label="Phone" className="hidden text-white/80 transition-colors hover:text-link sm:block">
            <PhoneIcon />
          </a>
          <a href={contact.mailHref} aria-label="Mail" className="hidden text-white/80 transition-colors hover:text-link sm:block">
            <MailIcon />
          </a>
          <a
            href={contact.cv}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/50 px-4 py-2 text-[13px] whitespace-nowrap text-white transition-colors hover:border-white hover:bg-white hover:text-ink sm:px-6"
          >
            My CV
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-5 pb-5 lg:hidden">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-[15px] ${isActive ? "text-link" : "text-white/85"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
