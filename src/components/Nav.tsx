import { useEffect, useState } from "react";
import wordmark from "@/assets/wordmark.png.asset.json";

const links = [
  { label: "Architecture", href: "#architecture" },
  { label: "Residences", href: "#residences" },
  { label: "Grounds", href: "#grounds" },
  { label: "Reserve", href: "#reserve" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 80);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,padding] duration-700"
      style={{
        padding: scrolled ? "1rem 2.5rem" : "1.75rem 2.5rem",
        background: scrolled
          ? "color-mix(in oklab, var(--background) 60%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
      }}
    >
      <div className="flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3" data-hover>
          <img src={wordmark.url} alt="Cartier" className="h-4 md:h-[18px] w-auto opacity-90" />
        </a>
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono-caps text-foreground/70 hover:text-accent transition-colors duration-500"
              data-hover
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#reserve"
          className="font-mono-caps text-accent border-b border-accent/40 pb-1 hover:border-accent transition-colors duration-500"
          data-hover
        >
          Enquire
        </a>
      </div>
    </header>
  );
}
