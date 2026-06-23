import { useState, useEffect } from "react";
import type { Lang } from "@/i18n/translations";

export function useLang(): Lang {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    if (/^es/i.test(navigator.language)) {
      setLang("es");
    }
  }, []);

  return lang;
}
