/**
 * Mock records for Figma AD-08 Activity Log — Audit (1225:345) and its
 * companion frames AD-08B (1226:1144), AD-08C (1226:3880), AD-08D (1239:669).
 *
 * Everything here is DATA and stays raw in every language: person names, team
 * names, report IDs (RPT-xxxx), audit request IDs (ACT-xxxxx), dates, clock
 * times, time-zone abbreviations and counts. Every label wrapped around this
 * data comes from activity-log.copy.ts; enum-like values are keys resolved
 * against that copy so they translate without mutating the record.
 *
 * Scope note (Figma AD-SCOPE board): Company Admin ≠ Super Admin. AD-08C's
 * flow rule is explicit — the audit trail is append-only and company-scoped,
 * so nothing here carries a cross-company or platform event.
 */

/** Category pills across the AD-08 filter bar (1225:631–1225:640). */
export type ActivityCategory = "people" | "reports" | "rewards" | "settings";

/** Action names drawn in the AD-08 "Action" column. */
export type ActivityActionKey =
  | "managerAssigned"
  | "employeeAccountActivated"
  | "reportReassigned"
  | "rewardRuleUpdated"
  | "companyProfileEdited"
  | "reminderSentToMissingEmployees";

/** AD-08 "Actor" column — a named person, or the system itself (row 1225:675). */
export type ActivityActor =
  | { kind: "person"; name: string }
  | { kind: "system" };

/** AD-08 "Target" column — the object the action landed on. */
export type ActivityTarget =
  | { kind: "person"; name: string }
  | { kind: "managerTeam"; team: string }
  | { kind: "companyRewardPolicy" }
  | { kind: "company"; name: string }
  | { kind: "employeeCount"; count: number };

/** AD-08C step 3 "Related object — Open employee/report/policy". */
export type ActivityRelatedObject = "employee" | "report" | "policy";

/** AD-08C step 4 "Source — UI action / system event"; AD-08B names one area. */
export type ActivitySourceKey = "uiAction" | "systemEvent" | "reportsOversight";

/** Field whose value changed, shown as the AD-08B "Before"/"After" pair. */
export type ActivityChangeField =
  | "owner"
  | "accountStatus"
  | "teamManager"
  | "rewardRule"
  | "companyProfile"
  | "reminderRecipients";

/**
 * One side of the AD-08B change pair. `unassigned` is an enum-like value that
 * has to translate ("Owner: Unassigned"); everything else is raw record text.
 */
export type ActivityChangeValue =
  | { kind: "unassigned" }
  | { kind: "raw"; text: string };

/** AD-08C step 3: "Reason — When the action required one" (hence optional). */
export type ActivityReasonKey = "coverageReassignment";

export interface ActivityChange {
  field: ActivityChangeField;
  before: ActivityChangeValue;
  after: ActivityChangeValue;
  reason?: ActivityReasonKey;
}

export interface ActivityLogRow {
  /** Audit request ID — AD-08B "Request ID · ACT-20981". */
  id: string;
  action: ActivityActionKey;
  /** Raw suffix after the action name ("Team Ops A", "RPT-1061"). */
  detail?: string;
  category: ActivityCategory;
  actor: ActivityActor;
  target: ActivityTarget;
  /** Raw clock time, rendered after the "Today" label. */
  time: string;
  /** Raw calendar date behind the AD-08B "Time" row. */
  date: string;
  /** Raw time-zone abbreviation drawn in AD-08B / AD-08D. */
  timeZone: string;
  source: ActivitySourceKey;
  relatedObject: ActivityRelatedObject;
  change: ActivityChange;
}

/** The six rows drawn in AD-08 "Company activity log" (1225:641). */
export const ACTIVITY_LOG_ROWS: ActivityLogRow[] = [
  {
    id: "ACT-20984",
    action: "managerAssigned",
    detail: "Team Ops A",
    category: "people",
    actor: { kind: "person", name: "Nadia" },
    target: { kind: "person", name: "Dimas Pratama" },
    time: "20:12",
    date: "25 Aug 2026",
    timeZone: "WIB",
    source: "uiAction",
    relatedObject: "employee",
    change: {
      field: "teamManager",
      before: { kind: "unassigned" },
      after: { kind: "raw", text: "Team Ops A" },
    },
  },
  {
    id: "ACT-20983",
    action: "employeeAccountActivated",
    category: "people",
    actor: { kind: "person", name: "Nadia" },
    target: { kind: "person", name: "Rina Sato" },
    time: "19:48",
    date: "25 Aug 2026",
    timeZone: "WIB",
    source: "uiAction",
    relatedObject: "employee",
    change: {
      field: "accountStatus",
      before: { kind: "raw", text: "Invited" },
      after: { kind: "raw", text: "Active" },
    },
  },
  {
    id: "ACT-20981",
    action: "reportReassigned",
    detail: "RPT-1061",
    category: "reports",
    actor: { kind: "person", name: "Nadia" },
    target: { kind: "managerTeam", team: "Team Ops A" },
    time: "18:35",
    date: "25 Aug 2026",
    timeZone: "WIB",
    source: "reportsOversight",
    relatedObject: "report",
    change: {
      field: "owner",
      before: { kind: "unassigned" },
      after: { kind: "raw", text: "Team Ops A" },
      reason: "coverageReassignment",
    },
  },
  {
    id: "ACT-20978",
    action: "rewardRuleUpdated",
    detail: "Daily check-in",
    category: "rewards",
    actor: { kind: "person", name: "Nadia" },
    target: { kind: "companyRewardPolicy" },
    time: "17:10",
    date: "25 Aug 2026",
    timeZone: "WIB",
    source: "uiAction",
    relatedObject: "policy",
    change: {
      field: "rewardRule",
      before: { kind: "raw", text: "5 coins" },
      after: { kind: "raw", text: "8 coins" },
    },
  },
  {
    id: "ACT-20975",
    action: "companyProfileEdited",
    category: "settings",
    actor: { kind: "person", name: "Nadia" },
    target: { kind: "company", name: "PT Sakura Nusantara" },
    time: "16:40",
    date: "25 Aug 2026",
    timeZone: "WIB",
    source: "uiAction",
    relatedObject: "policy",
    change: {
      field: "companyProfile",
      before: { kind: "raw", text: "Jakarta Selatan" },
      after: { kind: "raw", text: "Jakarta Selatan · Kebayoran Baru" },
    },
  },
  {
    id: "ACT-20960",
    action: "reminderSentToMissingEmployees",
    category: "reports",
    actor: { kind: "system" },
    target: { kind: "employeeCount", count: 22 },
    time: "10:00",
    date: "25 Aug 2026",
    timeZone: "WIB",
    source: "systemEvent",
    relatedObject: "report",
    change: {
      field: "reminderRecipients",
      before: { kind: "raw", text: "0" },
      after: { kind: "raw", text: "22" },
    },
  },
];

/** The row AD-08B and AD-08D both inspect: "Report reassigned · RPT-1061". */
export const ACTIVITY_DETAIL_ROW_ID = "ACT-20981";

/** AD-08D "Advanced activity filters" — the concrete range in the frame. */
export const ADVANCED_FILTER_RANGE = {
  date: "25 Aug 2026",
  from: "00:00",
  to: "23:59",
  timeZone: "WIB",
} as const;

/** AD-08D "Target · RPT-1061 / employee / team / policy". */
export const ADVANCED_FILTER_TARGET_SAMPLE = "RPT-1061";

/** AD-08D "Range · Current filtered results · 84 events". */
export const EXPORT_EVENT_COUNT = 84;

/**
 * The query seeded into `?state=no-results` so AD-08D's rule stays observable:
 * the filter the admin typed remains visible above the empty trail.
 */
export const NO_RESULTS_QUERY = "RPT-9999";
