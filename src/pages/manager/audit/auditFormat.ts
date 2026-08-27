import type { Language } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";

/**
 * Section 09 formatting helpers.
 *
 * `fill` performs placeholder substitution so counts stay DATA while the
 * surrounding sentence stays translatable (JA word order differs from EN):
 *   fill("{count} permitted operational records", { count: 128 })
 */
export function fill(
  template: string,
  values: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}

/** "01 Aug" + "11 Aug 2026" → "01 Aug — 11 Aug 2026" (EM-16 Date range). */
export function formatFullRange(
  startRaw: string,
  endRaw: string,
  language: Language,
): string {
  return `${formatDisplayDate(startRaw, language)} — ${formatDisplayDate(endRaw, language)}`;
}

/** Compact tile form "01–11 Aug" (EM-16A PERIOD tile, EM-16B saved config). */
export function formatCompactRange(
  startRaw: string,
  endRaw: string,
  language: Language,
): string {
  const startDay = startRaw.split(" ")[0];
  const end = formatDisplayDate(endRaw, language);
  if (language === "ja") {
    return end.replace(/(\d+)日$/, `${startDay}–$1日`);
  }
  const [endDay, ...rest] = end.split(" ");
  return `${startDay}–${endDay} ${rest.join(" ")}`.trim();
}
