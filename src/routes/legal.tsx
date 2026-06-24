import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/hooks/useLang";
import { legalTranslations } from "@/i18n/legalTranslations";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/legal")({
  component: LegalPage,
});

function LegalPage() {
  const lang = useLang();
  const t = legalTranslations[lang].legal;
  return <LegalLayout title={t.title} sections={t.sections} />;
}
