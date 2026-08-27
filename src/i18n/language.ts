import { createContext, useContext } from "react";

export type Language = "en" | "ja" | "id";

export const LANGUAGE_OPTIONS: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
  { code: "id", label: "Bahasa" },
];

export interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(
  null,
);

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
