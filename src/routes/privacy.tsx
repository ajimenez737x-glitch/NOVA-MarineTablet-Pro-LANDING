import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/hooks/useLang";
import { legalTranslations } from "@/i18n/legalTranslations";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  const lang = useLang();
  const t = legalTranslations[lang].privacy;
  return <LegalLayout title={t.title} sections={t.sections} />;
}
