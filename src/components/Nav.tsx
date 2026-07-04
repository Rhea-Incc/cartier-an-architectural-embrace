import { useEffect, useState } from "react";

const wordmarkUrl = "/media/wordmark.png";

const links = [
  { label: "Collection", href: "#collection" },
  { label: "Editions", href: "#editions" },
  { label: "Residence", href: "#residence" },
  { label: "Estate", href: "#estate" },
  { label: "Availability", href: "#availability" },
  { label: "Reservation", href: "#reservation" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 80);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,padding] duration-700"
        style={{
          padding: scrolled ? "0.85rem 1.2rem" : "1.2rem 1.2rem",
          background: scrolled
            ? "color-mix(in oklab, var(--background) 70%, transparent)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
          <a href="#top" className="min-w-0" data-hover>
            <img src={wordmarkUrl} alt="Cartier" className="h-4 w-auto max-w-full opacity-90 md:h-[18px]" loading="eager" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono-caps text-foreground/70 transition-colors duration-500 hover:text-accent"
                data-hover
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:items-center">
            <a
              href="#reservation"
              className="justify-self-end whitespace-nowrap border-b border-accent/40 pb-1 font-mono-caps text-accent transition-colors duration-500 hover:border-accent"
              data-hover
            >
              Enquire
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
              className="grid h-9 w-9 shrink-0 place-items-center border border-border text-foreground/80 lg:hidden"
              data-hover
            >
              <span className="font-mono-caps text-[0.55rem] tracking-[0.24em]">{open ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-background/92 backdrop-blur-md lg:hidden">
          <div className="flex h-full flex-col justify-center px-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-5 font-display text-3xl italic text-foreground"
                data-hover
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
