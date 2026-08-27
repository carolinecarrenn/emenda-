import type { Language } from "./language";
import { useLanguage } from "./language";

/**
 * Section copy pattern: each feature folder owns a `<section>.copy.ts` file
 * declaring an interface for its keys and one object per language. TypeScript
 * enforces that every language provides every key (missing translations fail
 * the build — the dev-time detection required by the localization DoD).
 * Runtime fallback: English.
 *
 *   interface ReportsCopy { title: string; ... }
 *   export const REPORTS_COPY = defineSectionCopy<ReportsCopy>({
 *     en: { title: "Reports", ... },
 *     id: { title: "Laporan", ... },
 *     ja: { title: "レポート", ... },
 *   });
 *
 *   const c = useSectionCopy(REPORTS_COPY);  // → active-language object
 *
 * Only UI/system text goes through copy. User-generated content, names,
 * company names, EMENDA IDs, and mock record data stay raw.
 */
export type SectionCopy<T> = Record<Language, T>;

export function defineSectionCopy<T>(copy: SectionCopy<T>): SectionCopy<T> {
  return copy;
}

export function useSectionCopy<T>(copy: SectionCopy<T>): T {
  const { language } = useLanguage();
  return copy[language] ?? copy.en;
}
