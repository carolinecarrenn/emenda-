/**
 * Mock data for the Company Admin Settings area — Figma page 06 · Company
 * Admin Experience (1182:5690):
 *
 *   AD-09  Company Settings — Preferences      (1225:687)
 *   AD-09B Settings Save & Reset States        (1226:1175)
 *   AD-09C Settings Change Flow                (1226:3975)
 *   AD-09D Settings Detailed States            (1239:748)
 *   AD-09E Language Settings — EN              (1249:4994)
 *
 * Everything here is DATA and stays raw in every language: the tenant name,
 * the people who hold access, addresses, phone numbers, clock times and
 * configuration values. Every label around this data comes from
 * settings.copy.ts; enum-like configuration values are rendered through
 * localizeTerm().
 *
 * Scope note (Figma AD-SCOPE board / AD-09C flow rule): Company Admin is not
 * Super Admin — nothing in this file reaches across tenants, billing,
 * licenses or platform feature flags.
 */

/** The company tenant drawn in AD-09. */
export const SETTINGS_ORG = "PT Sakura Nusantara";

/* ------------------------------------------------- AD-09 · left column --- */

export type CompanyProfileKey =
  "companyName" | "industry" | "address" | "primaryContact" | "timezone";

/** "Company profile" inputs (1225:970) — the values Figma types into them. */
export const COMPANY_PROFILE: Record<CompanyProfileKey, string> = {
  companyName: "PT Sakura Nusantara",
  industry: "HR / Overseas placement",
  address: "Jl. Melati No. 8, Purwokerto",
  primaryContact: "Nadia · 0812-0000-1234",
  timezone: "WIB (UTC+7)",
};

export const COMPANY_PROFILE_ORDER: CompanyProfileKey[] = [
  "companyName",
  "industry",
  "address",
  "primaryContact",
  "timezone",
];

/* ----------------------------------------------- AD-09 · middle column --- */

export type OperationalDefaultKey =
  | "defaultReportOwner"
  | "escalationWindow"
  | "dailyReminderTime"
  | "outcomeRequired"
  | "evidenceRequired";

/** "Operational defaults" inputs (1225:992). */
export const OPERATIONAL_DEFAULTS: Record<OperationalDefaultKey, string> = {
  defaultReportOwner: "Assigned manager",
  escalationWindow: "24 hours without update",
  dailyReminderTime: "09:00 WIB",
  outcomeRequired: "Enabled",
  evidenceRequired: "Enabled",
};

export const OPERATIONAL_DEFAULT_ORDER: OperationalDefaultKey[] = [
  "defaultReportOwner",
  "escalationWindow",
  "dailyReminderTime",
  "outcomeRequired",
  "evidenceRequired",
];

/* ------------------------------------------------ AD-09 · right column --- */

export type AdminAccessRole = "owner" | "manager";

export interface AdminAccessRow {
  id: string;
  /** Person's name — raw in every language. */
  name: string;
  role: AdminAccessRole;
}

/** "Admin access & notifications" rows (1225:1013 / 1018 / 1023). */
export const ADMIN_ACCESS_ROWS: AdminAccessRow[] = [
  { id: "acc-nadia", name: "Nadia", role: "owner" },
  { id: "acc-ayu", name: "Ayu Lestari", role: "manager" },
  { id: "acc-teguh", name: "Teguh Saputra", role: "manager" },
];

export type NotificationKey =
  | "highPriorityReport"
  | "overdueFollowUp"
  | "missingDailyReports"
  | "manualRewardAdjustment";

export const NOTIFICATION_ORDER: NotificationKey[] = [
  "highPriorityReport",
  "overdueFollowUp",
  "missingDailyReports",
  "manualRewardAdjustment",
];

/** Threshold interpolated into "Missing daily reports > {count} people". */
export const MISSING_DAILY_REPORTS_THRESHOLD = 10;

/* --------------------------------------------------- AD-09E · language --- */

export type LanguageChoiceCode = "id" | "en" | "ja";

export interface LanguageChoice {
  code: LanguageChoiceCode;
  /** Endonym — identical in every language, so it never goes through copy. */
  label: string;
  /** Two-letter tag drawn under the endonym. */
  tag: string;
}

/** AD-09E "Language choice" rows, in the drawn order ID → EN → JA. */
export const LANGUAGE_CHOICES: LanguageChoice[] = [
  { code: "id", label: "Bahasa Indonesia", tag: "ID" },
  { code: "en", label: "English", tag: "EN" },
  { code: "ja", label: "日本語", tag: "JA" },
];

/** "English (EN)" — the current-language line on the AD-09 language card. */
export function languageSummary(code: LanguageChoiceCode): string {
  const choice =
    LANGUAGE_CHOICES.find((item) => item.code === code) ?? LANGUAGE_CHOICES[1];
  return `${choice.label} (${choice.tag})`;
}

/* ------------------------------- AD-09B / AD-09D · the pending edit set --- */

/**
 * The unsaved edit AD-09B and AD-09D are drawn around: escalation 24h → 12h,
 * daily reminder 09:00 → 08:30 WIB, evidence requirement left enabled.
 */
export const PENDING_CHANGES = {
  escalationWindow: { from: "24h", to: "12h" },
  dailyReminder: { from: "09:00", to: "08:30" },
  dailyReminderWithZone: { from: "09:00", to: "08:30 WIB" },
  evidenceRequired: "Enabled",
  /** Interpolated into the AD-09D consequence lines. */
  escalationHours: 12,
  reminderTime: "08:30 WIB",
} as const;

/** "24h → 12h" style value line. */
export function changeArrow(change: { from: string; to: string }): string {
  return `${change.from} → ${change.to}`;
}
