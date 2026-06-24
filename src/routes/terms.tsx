import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/hooks/useLang";
import { legalTranslations } from "@/i18n/legalTranslations";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  const lang = useLang();
  const t = legalTranslations[lang].terms;
  return <LegalLayout title={t.title} sections={t.sections} />;
}
