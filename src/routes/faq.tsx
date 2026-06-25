import { createFileRoute } from "@tanstack/react-router";
import { FAQ } from "@/components/FAQ";
import { useLang } from "@/hooks/useLang";
import logoCompass from "@/assets/logo_compass.png";

export const Route = createFileRoute("/faq")({
  component: FAQPage,
});

function FAQPage() {
  const lang = useLang();

  const title = lang === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions";
  const subtitle =
    lang === "es"
      ? "Todo lo que necesitas saber sobre la NOVA The Marine Tablet PRO."
      : "Everything you need to know about the NOVA The Marine Tablet PRO.";
  const backLabel = lang === "es" ? "← Volver al inicio" : "← Back to home";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal nav */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          <a href="/" className="flex items-center gap-3">
            <img
              src={logoCompass}
              alt="NOVA The Marine Tablet PRO logo"
              className="h-10 w-auto object-contain"
            />
            <span className="font-display text-lg tracking-tight text-foreground">
              NOVA <span style={{ color: "var(--sand)" }}>Marine</span>
            </span>
          </a>
          <a
            href="/"
            className="text-xs font-medium tracking-widest uppercase text-muted-foreground transition-colors hover:text-primary"
          >
            {backLabel}
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-12 border-b border-border pb-10">
          <p className="eyebrow text-primary mb-4">NOVA The Marine Tablet PRO</p>
          <h1 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </div>

        <FAQ lang={lang} showAll />

        {/* CTA */}
        <div className="mt-16 rounded-xl border border-border bg-secondary/40 px-6 py-8 text-center">
          <p className="font-display text-xl text-foreground md:text-2xl">
            {lang === "es" ? "¿Listo para reservar?" : "Ready to pre-order?"}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {lang === "es"
              ? "Solo 100 unidades al precio de lanzamiento de 595€."
              : "Only 100 units at the launch price of 595€."}
          </p>
          <a
            href="/#contacto"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold tracking-wider text-primary-foreground uppercase transition-transform hover:scale-[1.02]"
          >
            {lang === "es" ? "Reservar por 595€ →" : "Pre-order for 595€ →"}
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} NOVA Marine · Todos los derechos reservados</p>
        <div className="mt-3 flex flex-wrap justify-center gap-x-4 gap-y-1">
          <a href="/legal" className="hover:text-primary transition-colors">Aviso Legal / Legal Notice</a>
          <a href="/privacy" className="hover:text-primary transition-colors">Privacidad / Privacy</a>
          <a href="/terms" className="hover:text-primary transition-colors">Términos / Terms</a>
          <a href="/cookies" className="hover:text-primary transition-colors">Cookies</a>
        </div>
      </footer>
    </div>
  );
}
