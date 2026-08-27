/**
 * Mock data for Figma AD-05 Follow-up & Escalation (1223:1997) and its
 * companion frames AD-05B (1226:131), AD-05C (1226:2870) and AD-05D
 * (1239:432).
 *
 * Everything here is DATA and stays raw in every language: report IDs
 * (RPT-xxxx), person and team names, dates, clock times and counts. Every
 * label wrapped around this data comes from followup.copy.ts.
 *
 * Scope note (Figma AD-SCOPE board): Company Admin ≠ Super Admin — this file
 * carries one company's own case records only, no cross-tenant data.
 */

/* ------------------------------------------------------------- stat row --- */

/** Pastel tone keys shared with the AD-01 KPI tiles. */
export type FollowUpTone = "amber" | "mint" | "red" | "blue";

export type FollowUpStatKey =
  | "needFollowUp"
  | "inProgress"
  | "escalated"
  | "resolvedToday";

export interface FollowUpStat {
  key: FollowUpStatKey;
  value: string;
  /** Number interpolated into the caption template, when it takes one. */
  captionCount?: number;
  tone: FollowUpTone;
}

/** AD-05 stat strip (1223:2280 … 1223:2298): 8 / 18 / 7 / 11. */
export const FOLLOW_UP_STATS: FollowUpStat[] = [
  { key: "needFollowUp", value: "8", tone: "amber" },
  { key: "inProgress", value: "18", tone: "mint" },
  { key: "escalated", value: "7", captionCount: 3, tone: "red" },
  { key: "resolvedToday", value: "11", captionCount: 82, tone: "blue" },
];

/* --------------------------------------------------------- follow-up board --- */

export type BoardColumnKey = "needFollowUp" | "inProgress" | "escalated";

export type BoardPillKey = "pending" | "inProgress" | "high";

export type BoardReasonKey =
  | "noOwner"
  | "missingEvidence"
  | "ownerAssigned"
  | "waitingEmployee"
  | "harassmentConcern"
  | "repeatedNoProgress";

export interface BoardCase {
  /** Raw EMENDA report id — never translated. */
  id: string;
  reason: BoardReasonKey;
  pill: BoardPillKey;
  /** Hours left on the SLA clock, when the reason line takes one. */
  hoursLeft?: number;
  /** Days left on the SLA clock, when the reason line takes one. */
  daysLeft?: number;
  /** Raw owner name, when the reason line names one. */
  owner?: string;
}

export interface BoardColumn {
  key: BoardColumnKey;
  cases: BoardCase[];
}

/** AD-05 "Follow-up board" columns (1223:2307 / 1223:2319 / 1223:2331). */
export const BOARD_COLUMNS: BoardColumn[] = [
  {
    key: "needFollowUp",
    cases: [
      { id: "RPT-1061", reason: "noOwner", pill: "pending", hoursLeft: 4 },
      {
        id: "RPT-1070",
        reason: "missingEvidence",
        pill: "pending",
        daysLeft: 1,
      },
    ],
  },
  {
    key: "inProgress",
    cases: [
      {
        id: "RPT-1064",
        reason: "ownerAssigned",
        pill: "inProgress",
        owner: "Teguh",
      },
      { id: "RPT-1051", reason: "waitingEmployee", pill: "inProgress" },
    ],
  },
  {
    key: "escalated",
    cases: [
      { id: "RPT-1048", reason: "harassmentConcern", pill: "high" },
      { id: "RPT-1037", reason: "repeatedNoProgress", pill: "high" },
    ],
  },
];

/* ------------------------------------------------------ escalation queue --- */

export type QueuePriority = "high" | "medium";

export type QueueReasonKey =
  | "escalatedFromTeam"
  | "noProgressDays"
  | "awaitingApproval";

export interface QueueCase {
  id: string;
  reason: QueueReasonKey;
  priority: QueuePriority;
  /** Raw team name, when the reason line names one. */
  team?: string;
  /** Day count, when the reason line takes one. */
  days?: number;
}

/** AD-05 "Escalation queue" rows (1223:2346 / 1223:2351 / 1223:2356). */
export const ESCALATION_QUEUE: QueueCase[] = [
  {
    id: "RPT-1048",
    reason: "escalatedFromTeam",
    priority: "high",
    team: "Team Ops A",
  },
  { id: "RPT-1037", reason: "noProgressDays", priority: "high", days: 3 },
  { id: "RPT-1058", reason: "awaitingApproval", priority: "medium" },
];

/* -------------------------------------------------- escalation decision --- */

/**
 * The single case AD-05B (1226:131) and AD-05D (1239:432) are drawn against,
 * plus its pre-filled decision values. Dates stay raw here and are formatted
 * for display via formatDisplayDate().
 */
export const ESCALATION_DRAFT = {
  caseId: "RPT-1048",
  /** Company Admin the case escalates to. */
  destination: "Nadia",
  /** Manager who owns the case before escalation (AD-05D "Current owner"). */
  currentOwner: "Ayu Lestari",
  /** Days the case has sat without progress. */
  stalledDays: 2,
  dueDate: "26 Aug 2026",
  dueTime: "10:00",
  /** Timezone suffix drawn on the AD-05D "Due by *" field. */
  dueTimezone: "WIB",
} as const;

/* ------------------------------------------------------------- lifecycle --- */

export type LifecycleStepKey =
  | "needsFollowUp"
  | "adminIntervention"
  | "escalate"
  | "recoveryAction"
  | "confirmOutcome";

export type LifecycleChipTone = "mint" | "red" | "blue";

export interface LifecycleStep {
  key: LifecycleStepKey;
  /** Ordinal drawn in the step chip — raw, not translated. */
  ordinal: string;
  tone: LifecycleChipTone;
}

/** AD-05C steps 01 … 05 (1226:2875 … 1226:2947). */
export const LIFECYCLE_STEPS: LifecycleStep[] = [
  { key: "needsFollowUp", ordinal: "01", tone: "mint" },
  { key: "adminIntervention", ordinal: "02", tone: "mint" },
  { key: "escalate", ordinal: "03", tone: "red" },
  { key: "recoveryAction", ordinal: "04", tone: "blue" },
  { key: "confirmOutcome", ordinal: "05", tone: "mint" },
];

/** The three detail rows each AD-05C step carries. */
export const LIFECYCLE_DETAIL_KEYS = ["a", "b", "c"] as const;
export type LifecycleDetailKey = (typeof LIFECYCLE_DETAIL_KEYS)[number];
