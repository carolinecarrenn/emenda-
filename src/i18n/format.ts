import type { Language } from "./language";

/**
 * Display formatting for the active language. Raw stored data (e.g. the
 * "25 Aug 2026" strings in mock stores) is never mutated — only presentation.
 */
const MONTHS_EN = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];
const MONTHS_ID = [
  "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
  "Jul", "Agu", "Sep", "Okt", "Nov", "Des",
];

/** Formats "25 Aug 2026" / "25 Aug" per language (JA → 2026年8月25日 / 8月25日). */
export function formatDisplayDate(raw: string, language: Language): string {
  const match = raw.match(/^(\d{1,2}) ([A-Za-z]{3})( (\d{4}))?$/);
  if (!match) return raw;
  const day = match[1];
  const monthIndex = MONTHS_EN.indexOf(match[2]);
  const year = match[4];
  if (monthIndex === -1) return raw;

  if (language === "ja") {
    return year
      ? `${year}年${monthIndex + 1}月${day}日`
      : `${monthIndex + 1}月${day}日`;
  }
  const month =
    language === "id" ? MONTHS_ID[monthIndex] : MONTHS_EN[monthIndex];
  return year ? `${day} ${month} ${year}` : `${day} ${month}`;
}
