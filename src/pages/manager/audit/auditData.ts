/**
 * Section 09 · Audit & Resilience mock data (Figma 759:1304).
 *
 * Numbers, file names and roster names are DATA — never translated. Every UI
 * word around them lives in `audit.copy.ts` and is composed with `fill()`.
 * Organization / facility / manager identity always comes from EMPLOYER: the
 * Figma mocks say "Kitahara Healthcare / Kitahara Care Facility", this app
 * unified the employer as Sakura Care.
 */

/** EM-16 / EM-16A / EM-17 / EM-16B — the one prototype export package. */
export interface AuditPackage {
  records: number;
  workers: number;
  formats: string;
  /** Raw dates; presented through formatDisplayDate per language. */
  periodStart: string;
  periodEnd: string;
  /** Year-less end used by the compact "01–11 Aug" PERIOD tile on EM-16A. */
  periodEndShort: string;
  fileName: string;
  workerScopeLead: string;
  workerScopeExtra: number;
}

export const AUDIT_PACKAGE: AuditPackage = {
  records: 128,
  workers: 5,
  formats: "PDF / CSV",
  periodStart: "01 Aug",
  periodEnd: "11 Aug 2026",
  periodEndShort: "11 Aug",
  fileName: "EMENDA_Audit_Sakura_2026-08.zip",
  workerScopeLead: "Dewi Anggraini",
  workerScopeExtra: 5,
};

/** Record groups shown on EM-16A (PACKAGE CONTENTS) and EM-17 (SUMMARY). */
export type PackageGroupKey =
  | "communication"
  | "dailyReports"
  | "followUp"
  | "support";

export interface PackageGroup {
  key: PackageGroupKey;
  /** Counts injected into the copy templates for both screens. */
  counts: Record<string, number>;
}

export const PACKAGE_GROUPS: PackageGroup[] = [
  { key: "communication", counts: { count: 42 } },
  { key: "dailyReports", counts: { submitted: 46, missing: 2 } },
  { key: "followUp", counts: { count: 12 } },
  { key: "support", counts: { count: 3 } },
];

/** EM-STATE-01 offline snapshot. */
export const OFFLINE_SNAPSHOT = {
  cachedWorkers: 48,
  pendingActions: 3,
} as const;

/** EM-STATE-01 "UNAVAILABLE WHILE OFFLINE" blocked verbs. */
export const OFFLINE_BLOCKED_KEYS = [
  "sendMessage",
  "saveSettings",
  "generateOperationalReport",
  "generateAuditExport",
  "resolveFollowUp",
] as const;
export type OfflineBlockedKey = (typeof OFFLINE_BLOCKED_KEYS)[number];

/** EM-STATE-02 "PENDING ACTION REVIEW" rows. */
export type PendingActionKey =
  | "followUpDraft"
  | "settingsChanges"
  | "reportGeneration";

export interface PendingActionRow {
  key: PendingActionKey;
  tone: "mint" | "caution";
}

export const PENDING_ACTIONS: PendingActionRow[] = [
  { key: "followUpDraft", tone: "mint" },
  { key: "settingsChanges", tone: "mint" },
  { key: "reportGeneration", tone: "caution" },
];

/** EM-STATE-03 "CURRENT ACCESS CONTEXT" rows. */
export type AccessContextKey =
  | "managerRole"
  | "organization"
  | "facility"
  | "accessScope";

export const ACCESS_CONTEXT_KEYS: AccessContextKey[] = [
  "managerRole",
  "organization",
  "facility",
  "accessScope",
];
