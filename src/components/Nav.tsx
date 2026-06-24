import { useEffect, useState } from "react";
import logoCompass from "@/assets/logo_compass.png";
import { useLang } from "@/hooks/useLang";
import { translations } from "@/i18n/translations";

export function CompassIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" strokeWidth="1" className="opacity-30" />
      <circle cx="12" cy="12" r="3" strokeWidth="1" />
      {/* North pointer */}
      <path d="M12 2L14 9H10L12 2Z" fill="currentColor" />
      {/* South pointer */}
      <path d="M12 22L10 15H14L12 22Z" fill="currentColor" className="opacity-80" />
      {/* East pointer */}
      <path d="M22 12L15 10V14L22 12Z" fill="currentColor" className="opacity-90" />
      {/* West pointer */}
      <path d="M2 12L9 14V10L2 12Z" fill="currentColor" className="opacity-70" />
      {/* Intercardinal lines */}
      <path d="M5 5L10 10M19 19L14 14M19 5L14 10M5 19L10 14" strokeWidth="1" className="opacity-50" />
    </svg>
  );
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lang = useLang();
  const t = translations[lang].nav;

  const links = [
    { href: "#caracteristicas", label: t.features },
    { href: "#testimonios", label: t.testimonials },
    { href: "#especificaciones", label: t.specifications },
    { href: "#faq", label: t.faq },
  ];

  useEffect(() => {
    const check = () => {
      // Mobile hero is 150dvh (50dvh scroll distance); desktop hero is 265dvh (165dvh scroll).
      const threshold = window.innerWidth < 768
        ? window.innerHeight * 0.45
        : window.innerHeight * 1.65;
      setScrolled(window.scrollY >= threshold);
    };

    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    check();

    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled || open
            ? "bg-background/90 backdrop-blur-md border-border"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoCompass}
              alt="NOVA The Marine Tablet PRO — nautical tablet brand logo"
              className="h-10 w-auto object-contain transition-transform duration-700 hover:rotate-6"
            />
            <span className={`font-display text-xl tracking-tight transition-colors duration-500 ${
              scrolled || open ? "text-foreground" : "text-white"
            }`}>
              NOVA <span style={{ color: "var(--sand)" }}>Marine</span>
              <span className="ml-1.5 hidden text-[10px] tracking-[0.24em] uppercase opacity-70 lg:inline">
                Tablet Pro
              </span>
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className={`hidden gap-9 md:flex ${scrolled ? "text-foreground" : "text-white/90"}`}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="link-underline text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold tracking-wider text-primary-foreground uppercase transition-transform hover:scale-[1.02]"
            >
              {t.preOrder}
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={`relative h-10 w-10 md:hidden ${scrolled || open ? "text-foreground" : "text-white"}`}
          >
            <span
              className={`absolute top-1/2 left-1/2 block h-px w-6 -translate-x-1/2 bg-current transition-all duration-500 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute top-1/2 left-1/2 block h-px w-6 -translate-x-1/2 bg-current transition-all duration-500 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-foreground text-background transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-8 pt-28 pb-12">
          <nav className="flex flex-col gap-7">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl leading-none tracking-tight transition-transform duration-500"
                style={{
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  opacity: open ? 1 : 0,
                  transitionDelay: `${0.1 + i * 0.06}s`,
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto space-y-4">
            <div className="hairline bg-background/20" />
            <a
              href="tel:+34688631200"
              className="block text-sm tracking-widest uppercase opacity-80"
            >
              +34 688 63 12 00
            </a>
            <a
              href="https://wa.me/34688631200"
              className="inline-flex w-full items-center justify-center rounded-full bg-background px-6 py-4 text-sm font-medium tracking-wider text-foreground uppercase"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
