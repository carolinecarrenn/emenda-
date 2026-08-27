import type { Language } from "@/i18n/language";

const MONTHS_EN = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const MONTHS_ID = [
  "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
  "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
];

/** Formats a raw month stamp like "Aug 2026" per language
 *  (JA → 2026年8月, ID → Agu 2026). Raw stored data is never mutated. */
export function formatMonthYear(raw: string, language: Language): string {
  const match = raw.match(/^([A-Za-z]{3}) (\d{4})$/);
  if (!match) return raw;
  const monthIndex = MONTHS_EN.indexOf(match[1]);
  if (monthIndex === -1) return raw;
  if (language === "ja") return `${match[2]}年${monthIndex + 1}月`;
  if (language === "id") return `${MONTHS_ID[monthIndex]} ${match[2]}`;
  return raw;
}
