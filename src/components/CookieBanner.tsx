import { useEffect, useState } from "react";
import { useLang } from "@/hooks/useLang";
import { legalTranslations } from "@/i18n/legalTranslations";

const STORAGE_KEY = "nova-cookies-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const lang = useLang();
  const t = legalTranslations[lang].cookieBanner;

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // localStorage not available (SSR or restricted)
    }
  }, []);

  function accept() {
    try { localStorage.setItem(STORAGE_KEY, "accepted"); } catch { /* noop */ }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-50 border-t border-border bg-background/95 backdrop-blur-md shadow-2xl"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between md:gap-10 md:px-10">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {t.text}{" "}
          <a
            href="/cookies"
            className="underline underline-offset-2 text-primary hover:text-foreground transition-colors"
          >
            {t.linkLabel}
          </a>
        </p>
        <div className="flex shrink-0 gap-3">
          <a
            href="/cookies"
            className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase transition-colors hover:border-primary hover:text-primary"
          >
            {t.configure}
          </a>
          <button
            onClick={accept}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-xs font-semibold tracking-wide text-primary-foreground uppercase transition-all hover:scale-[1.02] hover:bg-foreground"
          >
            {t.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
}
