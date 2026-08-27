import { useEffect, useState } from "react";
import { LanguageContext, type Language } from "./language";

const STORAGE_KEY = "emenda-language";

function loadLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ja" || stored === "id") return stored;
  } catch {
    // storage unavailable — use default
  }
  return "en";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(loadLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // storage unavailable — selection stays in memory
    }
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: setLanguageState }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
