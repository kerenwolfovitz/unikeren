import { Link } from "react-router-dom";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-white py-10">
      <Link to="/" className="mx-auto flex max-w-[1280px] items-center justify-center gap-3 px-5">
        <LogoMark className="h-8 w-8" />
        <span className="font-display text-[17px] tracking-[0.12em] text-ink/80">
          UNIKEREN · KEREN WOLFOVITZ
        </span>
      </Link>
      <p className="mt-4 text-center text-[12px] text-ink/55">
        <Link to="/privacy" className="underline underline-offset-4 hover:text-ink">
          Privacy
        </Link>
      </p>
    </footer>
  );
}
