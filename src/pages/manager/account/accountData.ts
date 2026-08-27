import { EMPLOYER } from "@/data/caregiverReport";
import type { Language } from "@/i18n/language";

/**
 * Manager Navigation & Account + Settings/Support/Session mock data
 * (Figma sections 03 · 759:1280 and 10 · 759:1308, desktop 1192:936).
 *
 * The Figma manager mocks name the employer "Kitahara Healthcare /
 * Kitahara Care Facility"; this app unified the employer as Sakura Care, so
 * every org / facility / manager value reads from EMPLOYER. Everything else
 * (Manager ID, timezone, ticket ids, format specimens) stays raw exactly as
 * the mock prints it.
 */

/* ── MD-MORE / EM-MORE link cards (1223:40…1223:63, 761:1037…761:1065) ── */
export type MoreLinkId =
  | "reports"
  | "alerts"
  | "analytics"
  | "knowledgeOjt"
  | "humanRightsDd"
  | "auditExport"
  | "settings"
  | "support";

export type MoreGroupId = "operations" | "governance";

export interface MoreLink {
  id: MoreLinkId;
  to: string;
  group: MoreGroupId;
}

export const MORE_LINKS: MoreLink[] = [
  { id: "reports", to: "/manager/reports", group: "operations" },
  { id: "alerts", to: "/manager/alerts", group: "operations" },
  { id: "analytics", to: "/manager/analytics", group: "operations" },
  { id: "knowledgeOjt", to: "/manager/knowledge-ojt", group: "operations" },
  { id: "humanRightsDd", to: "/manager/human-rights-dd", group: "governance" },
  { id: "auditExport", to: "/manager/audit-export", group: "governance" },
  { id: "settings", to: "/manager/settings", group: "governance" },
  { id: "support", to: "/manager/support", group: "governance" },
];

export const MORE_GROUPS: MoreGroupId[] = ["operations", "governance"];

/* ── EM-18E Manager Profile identity (761:1097…761:1116) ───────────────── */
export const MANAGER_IDENTITY = {
  name: EMPLOYER.manager,
  /** MD-18E profile hero avatar initials (1223:91). */
  initials: "SK",
  /** MD-18E profile hero email line (1223:93). */
  email: "manager@sakuracare.example",
  role: EMPLOYER.managerRole,
  managerId: "MGR-JP-0024",
  organization: EMPLOYER.name,
  facility: EMPLOYER.facility,
  languages: "日本語 / English / Indonesia",
  timezone: "Asia/Tokyo (UTC+9)",
  timezoneShort: "Asia/Tokyo",
} as const;

export type ProfileRowId =
  | "managerId"
  | "organization"
  | "currentFacility"
  | "language"
  | "timezone";

export interface ValueRow<Id extends string> {
  id: Id;
  /** Raw mock value; when omitted the component renders the copy value. */
  value?: string;
}

export const PROFILE_ROWS: ValueRow<ProfileRowId>[] = [
  { id: "managerId", value: MANAGER_IDENTITY.managerId },
  { id: "organization", value: MANAGER_IDENTITY.organization },
  { id: "currentFacility", value: MANAGER_IDENTITY.facility },
  { id: "language", value: MANAGER_IDENTITY.languages },
  { id: "timezone", value: MANAGER_IDENTITY.timezone },
];

/* ── EM-18 Settings · PREFERENCES rows (761:1184…761:1195) ─────────────── */
export type PreferenceRowId =
  | "language"
  | "timezone"
  | "notifications"
  | "defaultFacility";

export const PREFERENCE_ROWS: ValueRow<PreferenceRowId>[] = [
  { id: "language", value: MANAGER_IDENTITY.languages },
  { id: "timezone", value: MANAGER_IDENTITY.timezone },
  { id: "notifications" },
  { id: "defaultFacility", value: MANAGER_IDENTITY.facility },
];

/* ── EM-18 · ACCESS & ACCOUNT chevron rows (761:1198 / 761:1201) ───────── */
export type SettingsLinkId = "rolePermissions" | "languageLocaleTimezone";

export const SETTINGS_LINKS: { id: SettingsLinkId; to: string }[] = [
  { id: "rolePermissions", to: "/manager/settings/permissions" },
  { id: "languageLocaleTimezone", to: "/manager/settings/locale" },
];

/* ── EM-18C Settings Saved · UPDATED PREFERENCES (761:3107) ────────────── */
export type SavedRowId =
  | "language"
  | "timezone"
  | "notifications"
  | "defaultFacility"
  | "reportDefaults";

export const SAVED_ROWS: ValueRow<SavedRowId>[] = [
  { id: "language", value: "English · 日本語 · Indonesia" },
  { id: "timezone", value: "Asia/Tokyo · JST · 24h" },
  { id: "notifications" },
  { id: "defaultFacility", value: MANAGER_IDENTITY.facility },
  { id: "reportDefaults" },
];

/* ── EM-18D Settings Save Failed · unsaved rows (761:3148) ─────────────── */
export type FailedRowId =
  | "languageTimezone"
  | "notifications"
  | "defaultFacility"
  | "reportDefaults";

export const SAVE_FAILED_ROWS: ValueRow<FailedRowId>[] = [
  {
    id: "languageTimezone",
    value: `${MANAGER_IDENTITY.languages} · ${MANAGER_IDENTITY.timezoneShort}`,
  },
  { id: "notifications" },
  { id: "defaultFacility", value: MANAGER_IDENTITY.facility },
  { id: "reportDefaults" },
];

/* ── EM-18A Role & Permissions · ALLOWED checklist (761:1221…761:1225) ── */
export type AllowedItemId =
  | "workers"
  | "communication"
  | "reports"
  | "records"
  | "governance";

export const ALLOWED_ITEMS: AllowedItemId[] = [
  "workers",
  "communication",
  "reports",
  "records",
  "governance",
];

/* ── MD-18E Manager Profile desktop cards (1223:95…1223:116) ──────────── */
export type ProfileCardId = ProfileRowId | "openWork" | "session";

export interface ProfileCard {
  id: ProfileCardId;
  /** Figma card width on the two desktop rows. */
  widthClass: string;
}

export const PROFILE_DESKTOP_ROW_1: ProfileCard[] = [
  { id: "managerId", widthClass: "w-[250px]" },
  { id: "organization", widthClass: "w-[250px]" },
  { id: "currentFacility", widthClass: "w-[250px]" },
  { id: "openWork", widthClass: "w-[250px]" },
];

export const PROFILE_DESKTOP_ROW_2: ProfileCard[] = [
  { id: "language", widthClass: "w-[330px]" },
  { id: "timezone", widthClass: "w-[330px]" },
  { id: "session", widthClass: "w-[360px]" },
];

/* ── EM-18B Language · Locale · Timezone rows (761:1245…761:1259) ─────── */
export type LocaleRowId =
  | "language"
  | "timezone"
  | "dateFormat"
  | "timeFormat"
  | "phoneFormat";

/**
 * The Language row on EM-18B is the manager-side global language selector.
 * Labels are language names — raw data, never translated — printed in the
 * mock's own order ("日本語 / English / Indonesia").
 */
export const LOCALE_LANGUAGE_OPTIONS: { code: Language; label: string }[] = [
  { code: "ja", label: "日本語" },
  { code: "en", label: "English" },
  { code: "id", label: "Indonesia" },
];

export const LOCALE_ROWS: ValueRow<LocaleRowId>[] = [
  { id: "language" },
  { id: "timezone", value: MANAGER_IDENTITY.timezone },
  { id: "dateFormat", value: "2026/08/11" },
  { id: "timeFormat" },
  { id: "phoneFormat", value: "Japan +81 / Indonesia +62" },
];

/* ── EM-19 Support (1133:56…1133:87) ───────────────────────────────────── */
export type HelpTopicId =
  | "communication"
  | "dailyReports"
  | "followUp"
  | "auditExport";

export const HELP_TOPICS: { id: HelpTopicId; to: string }[] = [
  { id: "communication", to: "/manager/communication" },
  { id: "dailyReports", to: "/manager/reports" },
  { id: "followUp", to: "/manager/follow-up" },
  { id: "auditExport", to: "/manager/audit-export" },
];

export const RECENT_SUPPORT_REQUEST = {
  ticketId: "SUP-2026-0811-04",
  sentAt: "10:32",
} as const;

export type SupportTopicId =
  | "accessWorkflow"
  | "operationalSupport"
  | "reportingWorkflow";

export const SUPPORT_TOPICS: SupportTopicId[] = [
  "accessWorkflow",
  "operationalSupport",
  "reportingWorkflow",
];

/* ── EM-19A Support Request Sent · REQUEST DETAILS (761:3285) ──────────── */
export type SentRowId =
  | "topic"
  | "subject"
  | "organization"
  | "facility"
  | "managerRole";

export const SENT_SUPPORT_TICKET = {
  ticketId: "SUP-DEMO-2026-021",
} as const;

export const SENT_ROWS: ValueRow<SentRowId>[] = [
  { id: "topic" },
  { id: "subject" },
  { id: "organization", value: MANAGER_IDENTITY.organization },
  { id: "facility", value: MANAGER_IDENTITY.facility },
  { id: "managerRole", value: MANAGER_IDENTITY.role },
];

/* ── EM-19B "PRESERVED REQUEST" rows (1133:121…1133:133) ───────────────── */
export type PreservedRowId = "topic" | "subject" | "context" | "privacy";

export const PRESERVED_ROWS: PreservedRowId[] = [
  "topic",
  "subject",
  "context",
  "privacy",
];
