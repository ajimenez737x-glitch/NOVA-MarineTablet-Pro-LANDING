import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/hooks/useLang";
import { legalTranslations } from "@/i18n/legalTranslations";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
});

function CookiesPage() {
  const lang = useLang();
  const t = legalTranslations[lang].cookies;
  return <LegalLayout title={t.title} intro={t.intro} sections={t.sections} />;
}
