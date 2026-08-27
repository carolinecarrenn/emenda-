/**
 * Mock records for the Company Admin Reports Oversight area — Figma
 * AD-04 (1223:1317), AD-04B (1226:96), AD-04C (1226:2775), AD-04D (1239:353).
 *
 * Everything here is DATA and stays raw in every language: report IDs,
 * reporter and owner names, team names, typed report content, dates, clock
 * times and counts. Every label wrapped around this data comes from
 * reports.copy.ts; enum-like stored values (report `type`) are localized for
 * display via src/i18n/terms.ts `localizeTerm`.
 *
 * Scope note (Figma AD-SCOPE board): Company Admin ≠ Super Admin — these are
 * one company's own reports, with no cross-tenant or platform records.
 */

/* ------------------------------------------------------------- queue ----- */

/** Priority as stored on the report; the pill label comes from copy. */
export type ReportPriority = "high" | "medium" | "low";

/**
 * SLA is kept structural rather than as a pre-baked string so the queue can
 * render "Overdue 2d" / "4h left" / "Resolved" from copy templates in every
 * language. AD-04 draws exactly these four shapes.
 */
export type ReportSla =
  | { kind: "overdueDays"; value: number }
  | { kind: "hoursLeft"; value: number }
  | { kind: "daysLeft"; value: number }
  | { kind: "resolved" };

export interface QueueReport {
  id: string;
  /** Reporter short name as drawn in the Reporter column. */
  reporter: string;
  /** Enum-like stored report type → localizeTerm at render time. */
  type: string;
  priority: ReportPriority;
  /** `null` renders the em dash AD-04 draws for RPT-1061. */
  owner: string | null;
  sla: ReportSla;
}

/** AD-04 "Report queue" rows (1223:1613), top to bottom. */
export const REPORT_QUEUE: QueueReport[] = [
  {
    id: "RPT-1048",
    reporter: "Dimas P.",
    type: "Harassment",
    priority: "high",
    owner: "Ayu",
    sla: { kind: "overdueDays", value: 2 },
  },
  {
    id: "RPT-1061",
    reporter: "Rina S.",
    type: "Work schedule",
    priority: "high",
    owner: null,
    sla: { kind: "hoursLeft", value: 4 },
  },
  {
    id: "RPT-1064",
    reporter: "Kenji M.",
    type: "Document support",
    priority: "medium",
    owner: "Teguh",
    sla: { kind: "hoursLeft", value: 3 },
  },
  {
    id: "RPT-1051",
    reporter: "Ayu L.",
    type: "Housing issue",
    priority: "medium",
    owner: "Mira",
    sla: { kind: "daysLeft", value: 1 },
  },
  {
    id: "RPT-1039",
    reporter: "Salsa A.",
    type: "Payroll",
    priority: "low",
    owner: "Ayu",
    sla: { kind: "resolved" },
  },
];

/* ------------------------------------------------------------- stats ----- */

/** AD-04 stat pair (1223:1664 / 1223:1670). `glyph` is the tile letter. */
export const REPORT_STATS = {
  open: { glyph: "O", value: 34, followUpCount: 8 },
  resolved: { glyph: "R", value: 61 },
} as const;

/* ----------------------------------------------- priority distribution --- */

export interface PriorityBar {
  key: ReportPriority;
  openCount: number;
}

/** AD-04 "Priority distribution" (1223:1676) — current open report mix. */
export const PRIORITY_DISTRIBUTION: PriorityBar[] = [
  { key: "high", openCount: 7 },
  { key: "medium", openCount: 15 },
  { key: "low", openCount: 12 },
];

/* --------------------------------------------------- the focused report -- */

/**
 * RPT-1061 is the report AD-04 keeps selected, AD-04B expands, and AD-04D
 * runs its three action states against.
 */
export const FOCUS_REPORT = {
  id: "RPT-1061",
  issue: "Work schedule dispute",
  priority: "high" as ReportPriority,
  reporter: "Rina Sato",
  team: "Team Ops B",
  /** Typed report content — user-generated, never translated. */
  summary: "Employee reports repeated shift changes without advance notice.",
  owner: null as string | null,
  createdDate: "25 Aug 2026",
  createdTime: "13:10",
  slaHoursRemaining: 4,
  evidenceAttachments: 2,
  evidenceConversations: 1,
} as const;

/** AD-04B "Resolution history" entries (1226:117); `event` keys into copy. */
export type ResolutionEvent = "created" | "managerNotified" | "evidenceAdded";

export interface ResolutionEntry {
  time: string;
  event: ResolutionEvent;
}

export const RESOLUTION_HISTORY: ResolutionEntry[] = [
  { time: "13:10", event: "created" },
  { time: "13:18", event: "managerNotified" },
  { time: "14:05", event: "evidenceAdded" },
];

/* -------------------------------------------- AD-04D detailed states ----- */

/** AD-04D "Assign report owner" (1239:357) — the owner being assigned. */
export const ASSIGN_OWNER_CANDIDATE = "Ayu Lestari · Team Ops A";

/** AD-04D "Request evidence" (1239:382) — typed request content. */
export const EVIDENCE_REQUEST = {
  evidenceNeeded: "Shift schedule screenshot + manager notice",
  dueBy: "26 Aug 2026 · 10:00 WIB",
  message: "Please upload the relevant schedule and notice.",
} as const;

/** AD-04D "Resolve / reopen report" (1239:407) — typed closure content. */
export const RESOLUTION_DRAFT = {
  summary: "Schedule corrected and worker notified",
  evidenceAttachments: 2,
} as const;
