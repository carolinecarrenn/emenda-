import type { Language } from "@/i18n/language";

/**
 * AD-00 access mock records. Raw and untranslated: names, e-mail addresses,
 * phone numbers, the tenant name and the masked password are record data, not
 * UI copy, so they read identically in EN / ID / JA.
 */

/** AD-00B "scope" block, AD-00 step 03 and AD-00D card 3 all name this tenant. */
export const ADMIN_ACCESS_ORG = "PT Sakura Nusantara";

/** The Company Admin drawn in AD-00B (email) and AD-00D card 3 (profile row). */
export const ADMIN_ACCESS_ADMIN = {
  name: "Nadia",
  email: "nadia@sakura.co.id",
  phone: "+62 812-0000-1234",
  preferredLanguage: "Bahasa Indonesia",
};

/** AD-00B / AD-00D draw ten dots; the AD-00 flow card draws eight. */
export const ADMIN_ACCESS_PASSWORD_MASK = "••••••••••";
export const ADMIN_ACCESS_FLOW_PASSWORD_MASK = "••••••••";

/** AD-00A language rows. Endonym + English name are proper names in Figma and
 *  stay constant in every language; the tag feeds AD-00B "Ubah bahasa · ID". */
export interface AdminAccessLanguageRow {
  code: Language;
  name: string;
  english: string;
  tag: string;
}

export const ADMIN_ACCESS_LANGUAGES: AdminAccessLanguageRow[] = [
  { code: "id", name: "Bahasa Indonesia", english: "Indonesia", tag: "ID" },
  { code: "en", name: "English", english: "English", tag: "EN" },
  { code: "ja", name: "日本語", english: "Japanese", tag: "JA" },
];

export const ADMIN_ACCESS_LANGUAGE_TAG: Record<Language, string> = {
  id: "ID",
  en: "EN",
  ja: "JA",
};
