import type { Language } from "@/i18n/language";

/**
 * Display-only formatting for the Coin section. Raw mock values are never
 * mutated — only how they are rendered per active language.
 */

const NUMBER_LOCALE: Record<Language, string> = {
  en: "en-US",
  id: "id-ID",
  ja: "ja-JP",
};

/** 1240 → "1,240" (en) · "1.240" (id) · "1,240" (ja). */
export function formatCoinNumber(value: number, language: Language): string {
  return new Intl.NumberFormat(NUMBER_LOCALE[language]).format(value);
}

/** Signed ledger amount: "+20" / "−100" (U+2212 minus, as in the mock). */
export function formatSignedCoin(value: number, language: Language): string {
  const sign = value < 0 ? "−" : "+";
  return `${sign}${formatCoinNumber(Math.abs(value), language)}`;
}

const MONTHS_EN = [
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER",
];
const MONTHS_ID = [
  "JANUARI", "FEBRUARI", "MARET", "APRIL", "MEI", "JUNI",
  "JULI", "AGUSTUS", "SEPTEMBER", "OKTOBER", "NOVEMBER", "DESEMBER",
];
const MONTHS_KEY = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** WD-60A ledger group label: "Aug 2026" → "AUGUST 2026" / "2026年8月". */
export function formatLedgerMonth(raw: string, language: Language): string {
  const match = raw.match(/^([A-Za-z]{3}) (\d{4})$/);
  if (!match) return raw;
  const index = MONTHS_KEY.indexOf(match[1]);
  if (index === -1) return raw;
  if (language === "ja") return `${match[2]}年${index + 1}月`;
  const months = language === "id" ? MONTHS_ID : MONTHS_EN;
  return `${months[index]} ${match[2]}`;
}
