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
    </footer>
  );
}
