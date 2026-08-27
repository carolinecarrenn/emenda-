/**
 * Mock data for the Company Admin Rewards & Coin area — Figma AD-07
 * (1223:2737), AD-07B (1226:1116), AD-07C (1226:3785) and AD-07D (1239:590)
 * on page "06 · Company Admin Experience" (1182:5690).
 *
 * Everything here is DATA and stays raw in every language: rule names,
 * employee names, reasons, coin deltas, transaction ids, references and
 * dates. Every label around this data comes from rewards.copy.ts; the
 * enum-like status values resolve through the copy file's `ruleStatus` map,
 * the same way AD-01's attention priorities do.
 *
 * Scope note (Figma AD-SCOPE board): Company Admin ≠ Super Admin. These are
 * one company's own reward rules and its own coin ledger — no cross-tenant or
 * platform-wide economics live here.
 */

/* --------------------------------------------------------- stat row ------ */

export type RewardTone = "mint" | "blue" | "amber" | "red";

export type RewardStatKey =
  | "coinBalance"
  | "earnedToday"
  | "adjustedThisMonth"
  | "flagged";

export interface RewardStat {
  key: RewardStatKey;
  /** Figma draws the raw formatted value, including its sign. */
  value: string;
  tone: RewardTone;
}

/** AD-07 "stat" cards 1223:3020 / 3026 / 3032 / 3038. */
export const REWARD_STATS: RewardStat[] = [
  { key: "coinBalance", value: "2,460", tone: "mint" },
  { key: "earnedToday", value: "+164", tone: "blue" },
  { key: "adjustedThisMonth", value: "18", tone: "amber" },
  { key: "flagged", value: "2", tone: "red" },
];

/* ----------------------------------------------------- earning rules ----- */

export type EarningRuleStatus = "enabled" | "manual" | "noReward";

export interface EarningRule {
  id: string;
  /** Company rule name as stored — never translated. */
  name: string;
  /** Signed coin amount; the "{amount} coin" wrapper comes from copy. */
  amount: string;
  status: EarningRuleStatus;
}

/** AD-07 "Earning rules" rows 1223:3047 → 3067. */
export const EARNING_RULES: EarningRule[] = [
  {
    id: "rule-daily-report",
    name: "Daily report on time",
    amount: "+1",
    status: "enabled",
  },
  {
    id: "rule-complete-profile",
    name: "Complete profile",
    amount: "+5",
    status: "enabled",
  },
  {
    id: "rule-ojt-session",
    name: "Attend OJT session",
    amount: "+3",
    status: "enabled",
  },
  {
    id: "rule-manager-appreciation",
    name: "Manager appreciation",
    amount: "+2",
    status: "manual",
  },
  {
    id: "rule-late-submission",
    name: "Late submission",
    amount: "0",
    status: "noReward",
  },
];

/* ------------------------------------------------ adjustment history ----- */

export interface AdjustmentRecord {
  id: string;
  employee: string;
  reason: string;
  delta: string;
  /** Actor as stored — an admin name or the literal system actor. */
  by: string;
}

/** AD-07 "Adjustment history" rows 1223:3080 → 3099. The first row is the
 *  transaction opened in AD-07D "Transaction detail" (TX-88421). */
export const ADJUSTMENT_HISTORY: AdjustmentRecord[] = [
  {
    id: "TX-88421",
    employee: "Ayu Lestari",
    reason: "Recognition for OJT help",
    delta: "+20",
    by: "Nadia",
  },
  {
    id: "TX-88407",
    employee: "Rina Sato",
    reason: "Correction after duplicate",
    delta: "-2",
    by: "Nadia",
  },
  {
    id: "TX-88396",
    employee: "Team Ops A",
    reason: "Bulk daily check-in sync",
    delta: "+14",
    by: "System",
  },
  {
    id: "TX-88371",
    employee: "Kenji Mori",
    reason: "Profile completion",
    delta: "+5",
    by: "System",
  },
  {
    id: "TX-88340",
    employee: "Budi Haryanto",
    reason: "Invite expired",
    delta: "0",
    by: "System",
  },
];

/* --------------------------------------- AD-07B manual adjustment form --- */

/** Values the AD-07B form (1226:1123 → 1226:1136) is drawn pre-filled with. */
export const ADJUSTMENT_DRAFT = {
  employee: "Ayu Lestari",
  amount: "20",
  reason: "Recognition for OJT help",
  reference: "OJT-2026-0825",
} as const;

/** Employees selectable in the adjustment form — the AD-07 ledger names. */
export const ADJUSTMENT_EMPLOYEES = [
  "Ayu Lestari",
  "Rina Sato",
  "Kenji Mori",
  "Budi Haryanto",
] as const;

/* ------------------------------------------- AD-07D detailed records ----- */

/** AD-07D "Edit earning rule" fields 1239:600 → 1239:609. */
export const RULE_EDIT_RECORD = {
  rule: "Daily report on time",
  amountBefore: "+1",
  amountAfter: "+2",
  eligibility: "Submitted before 09:00 WIB",
  /** Raw date behind "26 Aug 2026 · future events only". */
  effectiveFrom: "26 Aug 2026",
} as const;

/** AD-07D "Manual coin adjustment" fields 1239:625 → 1239:634. */
export const ADJUSTMENT_DETAIL_RECORD = {
  employee: "Ayu Lestari",
  delta: "+20",
  reason: "Recognition for OJT help",
  reference: "OJT-2026-0825",
} as const;

/** AD-07D "Transaction detail" fields 1239:650 → 1239:662. */
export const TRANSACTION_RECORD = {
  id: "TX-88421",
  employee: "Ayu Lestari",
  delta: "+20",
  balanceBefore: "84",
  balanceAfter: "104",
  actor: "Nadia",
  reason: "Recognition for OJT help",
  reference: "OJT-2026-0825",
} as const;
