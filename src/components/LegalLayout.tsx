import { useLang } from "@/hooks/useLang";
import { legalTranslations } from "@/i18n/legalTranslations";
import { CompassIcon } from "@/components/Nav";

interface Section {
  heading: string;
  content: string[];
  isList?: boolean;
}

interface LegalLayoutProps {
  title: string;
  intro?: string;
  sections: Section[];
}

export function LegalLayout({ title, intro, sections }: LegalLayoutProps) {
  const lang = useLang();
  const t = legalTranslations[lang];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Minimal nav header */}
      <header className="border-b border-border bg-background/90 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          <a href="/" className="flex items-center gap-3">
            <CompassIcon className="h-8 w-8 text-primary" />
            <span className="font-display text-lg tracking-tight text-foreground">
              NOVA <span style={{ color: "var(--sand)" }}>Marine</span>
            </span>
          </a>
          <a
            href="/"
            className="text-xs font-medium tracking-widest uppercase text-muted-foreground transition-colors hover:text-primary"
          >
            {t.backHome}
          </a>
        </div>
      </header>

      {/* Page content */}
      <main className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-12 border-b border-border pb-10">
          <p className="eyebrow text-primary mb-4">NOVA Advanced Tech for the Sea</p>
          <h1 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {intro}
            </p>
          )}
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl text-foreground mb-4 md:text-2xl">
                {section.heading}
              </h2>
              <div className="hairline mb-5" />
              {section.isList ? (
                <ul className="space-y-2">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary text-[9px]" aria-hidden>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="space-y-3">
                  {section.content.map((para, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Contact block */}
        <div className="mt-16 rounded-xl border border-border bg-secondary/40 px-6 py-8">
          <p className="eyebrow text-primary mb-3">Contact</p>
          <p className="text-sm text-muted-foreground">{t.company}</p>
          <p className="text-sm text-muted-foreground">{t.address}</p>
          <a
            href={`mailto:${t.email}`}
            className="mt-2 inline-block text-sm text-primary hover:underline"
          >
            {t.email}
          </a>
        </div>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} NOVA Advanced Tech for the Sea (Arcoiris Habitat SL) · B06-9449-61</p>
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
