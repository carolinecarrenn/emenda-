import { useSyncExternalStore } from "react";
import { TODAY } from "@/data/caregiverReport";

/**
 * Emenda Coin mock data (Figma section 15 · WD-60…WD-60V).
 * Numbers, dates and reward ids are DATA — never translated. All labels for
 * these ids live in coin.copy.ts.
 */

/* ── Earning rules (WD-60 "Ways to earn" · WD-60B rule rows) ─────────────── */

export type EarnRuleId =
  | "dailyCheckIn"
  | "eligibleDailyReport"
  | "profileMilestone"
  | "identityVerified";

export interface EarnRule {
  id: EarnRuleId;
  amount: number;
}

export const EARN_RULES: EarnRule[] = [
  { id: "dailyCheckIn", amount: 10 },
  { id: "eligibleDailyReport", amount: 20 },
  { id: "profileMilestone", amount: 50 },
  { id: "identityVerified", amount: 100 },
];

/** WD-60U "Ways to earn now" — headless mode drops the employer-tied rule. */
export const PERSONAL_EARN_RULE_IDS: EarnRuleId[] = [
  "dailyCheckIn",
  "profileMilestone",
  "identityVerified",
];

/** Rules that are added once per EMENDA account — they open W-60R. */
export const ONE_TIME_EARN_RULE_IDS: EarnRuleId[] = [
  "profileMilestone",
  "identityVerified",
];

export const DAILY_CHECK_IN_REWARD = 10;

/* ── Daily check-in (WD-60F…WD-60I) ─────────────────────────────────────── */

/** "Today · 25 Aug" — the shared TODAY string without its year. */
export const CHECK_IN_DATE = TODAY.replace(/ \d{4}$/, "");
export const STREAK_LENGTH = 7;

/* ── Ledger (WD-60A) ────────────────────────────────────────────────────── */

export type LedgerKind = "earned" | "pending" | "used";
export type LedgerFilter = "all" | "earned" | "pending" | "used";
export const LEDGER_FILTERS: LedgerFilter[] = [
  "all",
  "earned",
  "pending",
  "used",
];

export type LedgerTitleId =
  | "dailyReport"
  | "dailyCheckIn"
  | "dailyReportCompleted"
  | "profileMilestone"
  | "rewardUsed"
  | "identityVerified";

export type LedgerMetaId =
  | "pendingEligibility"
  | "streak"
  | "employer"
  | "personalProfile"
  | "partnerBenefit"
  | "emendaId";

export interface LedgerEntry {
  id: string;
  titleId: LedgerTitleId;
  /** Employer name is appended to the row title ("Daily report · Sakura Care"). */
  titleEmployer?: boolean;
  /** Raw date, formatted for display per language. */
  date: string;
  metaId: LedgerMetaId;
  /** Streak length for the "4 day streak" meta line. */
  metaValue?: number;
  /** Signed: positive = earned/pending, negative = used. */
  amount: number;
  kind: LedgerKind;
  /** WD-60A's shorter 52px trailing row. */
  compact?: boolean;
}

export const LEDGER_MONTH = "Aug 2026";

export const COIN_LEDGER: LedgerEntry[] = [
  {
    id: "led-1",
    titleId: "dailyReport",
    titleEmployer: true,
    date: "25 Aug",
    metaId: "pendingEligibility",
    amount: 20,
    kind: "pending",
    compact: true,
  },
  {
    id: "led-2",
    titleId: "dailyCheckIn",
    date: "24 Aug",
    metaId: "streak",
    metaValue: 4,
    amount: 10,
    kind: "earned",
  },
  {
    id: "led-3",
    titleId: "dailyReportCompleted",
    date: "20 Aug",
    metaId: "employer",
    amount: 20,
    kind: "earned",
  },
  {
    id: "led-4",
    titleId: "profileMilestone",
    date: "24 Aug",
    metaId: "personalProfile",
    amount: 50,
    kind: "earned",
  },
  {
    id: "led-5",
    titleId: "rewardUsed",
    date: "23 Aug",
    metaId: "partnerBenefit",
    amount: -100,
    kind: "used",
  },
  {
    id: "led-5b",
    titleId: "dailyReportCompleted",
    date: "22 Aug",
    metaId: "employer",
    amount: 20,
    kind: "earned",
  },
  {
    id: "led-6",
    titleId: "identityVerified",
    date: "21 Aug",
    metaId: "emendaId",
    amount: 100,
    kind: "earned",
  },
];

/** W-60W "Cached balance" — the clock time of the last successful sync. */
export const LAST_SYNCED_TIME = "18:42";

/** W-60W "Cached recent activity" (1258:279 / 1258:284) — the two personal
 *  ledger rows that survive offline, newest first. */
export const CACHED_ACTIVITY_IDS = ["led-6", "led-4"];

export function cachedActivityEntries(): LedgerEntry[] {
  return CACHED_ACTIVITY_IDS.map((id) =>
    COIN_LEDGER.find((entry) => entry.id === id),
  ).filter((entry): entry is LedgerEntry => entry !== undefined);
}

/* ── Pending reward (WD-60 strip · WD-60K pipeline) ─────────────────────── */

/** W-60R (1186:461) — the day the one-time identity reward landed. */
export const ONE_TIME_EARNED_DATE = "21 Aug 2026";

/** W-60K (1179:535) — the day the pending daily report was submitted. */
export const PENDING_SUBMITTED_DATE = "25 Aug 2026";

/** W-60Q (1186:432) — the balance the insufficient-balance frame is drawn at. */
export const INSUFFICIENT_BALANCE = 60;

export const PENDING_REWARD = {
  amount: 20,
  /** Row copy is "Daily report · <employer> · Submitted today · eligibility check". */
  fromEmployer: true,
} as const;

export type PendingStepId = "submitted" | "eligibility" | "added";
export type PendingStepStatus = "done" | "current" | "next";

export interface PendingStep {
  id: PendingStepId;
  status: PendingStepStatus;
}

export const PENDING_PIPELINE: PendingStep[] = [
  { id: "submitted", status: "done" },
  { id: "eligibility", status: "current" },
  { id: "added", status: "next" },
];

/* ── Rewards catalog (WD-60L / WD-60M) ──────────────────────────────────── */

export type RewardId = "partner-benefit" | "transport-voucher";

export interface CoinReward {
  id: RewardId;
  /** null = no price shown ("—" in the mock). */
  cost: number | null;
  available: boolean;
  /** Provider line uses the connected employer name. */
  fromEmployer: boolean;
}

export const COIN_REWARDS: CoinReward[] = [
  { id: "partner-benefit", cost: 100, available: true, fromEmployer: true },
  {
    id: "transport-voucher",
    cost: null,
    available: false,
    fromEmployer: false,
  },
];

export function findReward(id: string | undefined): CoinReward | undefined {
  return COIN_REWARDS.find((reward) => reward.id === id);
}

/* ── Balance store ──────────────────────────────────────────────────────── */

export interface CoinState {
  balance: number;
  earnedThisMonth: number;
  streak: number;
  checkedInToday: boolean;
}

const INITIAL_STATE: CoinState = {
  balance: 1240,
  earnedThisMonth: 180,
  streak: 4,
  checkedInToday: false,
};

let snapshot: CoinState = INITIAL_STATE;
const listeners = new Set<() => void>();

function emit(): void {
  for (const listener of listeners) listener();
}

export function subscribeCoin(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getCoinSnapshot(): CoinState {
  return snapshot;
}

/** WD-60G — a successful check-in adds +10 instantly and grows the streak. */
export function claimDailyCheckIn(): CoinState {
  if (snapshot.checkedInToday) return snapshot;
  snapshot = {
    balance: snapshot.balance + DAILY_CHECK_IN_REWARD,
    earnedThisMonth: snapshot.earnedThisMonth + DAILY_CHECK_IN_REWARD,
    streak: Math.min(snapshot.streak + 1, STREAK_LENGTH),
    checkedInToday: true,
  };
  emit();
  return snapshot;
}

/** WD-60O — Coin is deducted only after the redeem confirmation. */
export function spendCoin(amount: number): CoinState {
  snapshot = { ...snapshot, balance: snapshot.balance - amount };
  emit();
  return snapshot;
}

export function useCoinState(): CoinState {
  return useSyncExternalStore(subscribeCoin, getCoinSnapshot, getCoinSnapshot);
}
