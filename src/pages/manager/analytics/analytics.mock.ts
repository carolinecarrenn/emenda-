import { EMPLOYER } from "@/data/caregiverReport";

/**
 * Mock data for Manager 07 · Analytics & Professional Continuity.
 * Names, EMENDA IDs, record titles and record descriptions are DATA — they
 * stay raw here and are never translated. Every label around them comes from
 * analytics.copy.ts. Organisation / facility come from EMPLOYER (this app
 * unified the employer as Sakura Care; the Figma mocks said "Kitahara").
 */

/* ---------------------------------------------------------------- workers */

export interface ManagedWorker {
  id: string;
  name: string;
  /** Raw role string from the roster mock. */
  role: string;
  emendaId: string;
  tenureDays: number;
  employer: string;
  facility: string;
  workRecords: number;
  achievements: number;
  certificates: number;
  skills: number;
}

export const MANAGED_WORKERS: ManagedWorker[] = [
  {
    id: "dewi-anggraini",
    name: "Dewi Anggraini",
    role: "Warehouse Operator",
    emendaId: "EMD-2024-JP-004821",
    tenureDays: 847,
    employer: EMPLOYER.name,
    facility: EMPLOYER.facility,
    workRecords: 42,
    achievements: 12,
    certificates: 3,
    skills: 12,
  },
];

/** Any :workerId resolves to a roster entry so every records route renders. */
export function findManagedWorker(workerId: string | undefined): ManagedWorker {
  return (
    MANAGED_WORKERS.find((worker) => worker.id === workerId) ??
    MANAGED_WORKERS[0]
  );
}

/* ----------------------------------------------------------- work records */

export type RecordStatus = "verified" | "recorded";
export type RecordSource = "dailyReport" | "workLog" | "managerReview";
export type EvidenceEvent =
  | "shiftActivity"
  | "workerCommunication"
  | "dailyReportSubmitted"
  | "managerReviewRecorded"
  | "handoverCompleted";

export interface RecordEvidenceEntry {
  time: string;
  event: EvidenceEvent;
}

export interface WorkLogRecord {
  id: string;
  workerId: string;
  /** Raw "DD Mon YYYY" — formatted for display via formatDisplayDate(). */
  date: string;
  /** Record content — raw, never translated. */
  title: string;
  /** EM-R2-01 uses a shortened label for the RECENT WORK LOG rows. */
  recentTitle?: string;
  source: RecordSource;
  status: RecordStatus;
  /** false = outside the "Last 30 days" chip. */
  withinLast30Days: boolean;
  /** Record content — raw, never translated. */
  description: string;
  evidence: RecordEvidenceEntry[];
  /** Raw person name. */
  recordedBy: string;
}

export const WORK_LOG_RECORDS: WorkLogRecord[] = [
  {
    id: "wr-0808",
    workerId: "dewi-anggraini",
    date: "08 Aug 2026",
    title: "Warehouse receiving",
    source: "dailyReport",
    status: "verified",
    withinLast30Days: true,
    description:
      "Received inbound inventory, checked item counts, and completed warehouse handover documentation.",
    evidence: [
      { time: "08:02", event: "shiftActivity" },
      { time: "09:08", event: "workerCommunication" },
      { time: "09:14", event: "dailyReportSubmitted" },
      { time: "09:20", event: "managerReviewRecorded" },
    ],
    recordedBy: "Dewi Anggraini",
  },
  {
    id: "wr-0708",
    workerId: "dewi-anggraini",
    date: "07 Aug 2026",
    title: "Inventory handover",
    source: "workLog",
    status: "verified",
    withinLast30Days: true,
    description:
      "Completed end-of-shift inventory handover and confirmed stock positions with the incoming team.",
    evidence: [
      { time: "07:58", event: "shiftActivity" },
      { time: "15:42", event: "handoverCompleted" },
      { time: "16:05", event: "managerReviewRecorded" },
    ],
    recordedBy: "Dewi Anggraini",
  },
  {
    id: "wr-0608",
    workerId: "dewi-anggraini",
    date: "06 Aug 2026",
    title: "Shift opening procedure",
    recentTitle: "Shift opening",
    source: "workLog",
    status: "recorded",
    withinLast30Days: true,
    description:
      "Opened the warehouse shift, checked safety equipment, and confirmed the daily task board with the team.",
    evidence: [
      { time: "07:45", event: "shiftActivity" },
      { time: "08:20", event: "workerCommunication" },
    ],
    recordedBy: "Dewi Anggraini",
  },
  {
    id: "wr-0508",
    workerId: "dewi-anggraini",
    date: "05 Aug 2026",
    title: "Stock reconciliation",
    source: "dailyReport",
    status: "verified",
    withinLast30Days: true,
    description:
      "Reconciled counted stock against the system record and reported two variances for review.",
    evidence: [
      { time: "08:10", event: "shiftActivity" },
      { time: "13:30", event: "dailyReportSubmitted" },
      { time: "14:02", event: "managerReviewRecorded" },
    ],
    recordedBy: "Dewi Anggraini",
  },
  {
    id: "wr-0408",
    workerId: "dewi-anggraini",
    date: "04 Aug 2026",
    title: "Safety handover",
    source: "managerReview",
    status: "recorded",
    withinLast30Days: true,
    description:
      "Walked through the safety handover checklist with the shift manager before closing the warehouse floor.",
    evidence: [
      { time: "16:12", event: "handoverCompleted" },
      { time: "16:30", event: "managerReviewRecorded" },
    ],
    recordedBy: "Dewi Anggraini",
  },
  {
    id: "wr-0207",
    workerId: "dewi-anggraini",
    date: "02 Jul 2026",
    title: "Annual safety training",
    source: "managerReview",
    status: "verified",
    withinLast30Days: false,
    description:
      "Completed the annual warehouse safety training module and the practical handling assessment.",
    evidence: [
      { time: "09:00", event: "shiftActivity" },
      { time: "12:40", event: "managerReviewRecorded" },
    ],
    recordedBy: "Dewi Anggraini",
  },
];

export function findWorkLogRecord(
  recordId: string | undefined,
): WorkLogRecord | undefined {
  return WORK_LOG_RECORDS.find((record) => record.id === recordId);
}

/** EM-R2-01 "RECENT WORK LOG" — the three most recent permitted records. */
export const RECENT_WORK_LOG_IDS = ["wr-0808", "wr-0708", "wr-0608"];

/** EM-R2-01 / EM-R2-05 print day + month only ("08 Aug"); EM-R2-02 and
 *  EM-R2-03 print the full "08 Aug 2026". Both go through
 *  formatDisplayDate() afterwards. */
export function withoutYear(raw: string): string {
  return raw.replace(/\s\d{4}$/, "");
}

/* ---------------------------------------------------------- career assets */

export type AssetStatus = "verified" | "active";
export type AssetKey = "certificates" | "skills" | "currentRole" | "continuity";

export interface CareerAssetRow {
  key: AssetKey;
  /** Used by the counted rows (certificates / skills). */
  count?: number;
  /** Raw value for the role row — role names are data, not copy. */
  rawValue?: string;
  status: AssetStatus;
  /** EM-R2-05 highlights the career continuity row in mint. */
  highlighted: boolean;
}

export const CAREER_ASSET_ROWS: CareerAssetRow[] = [
  { key: "certificates", count: 3, status: "verified", highlighted: false },
  { key: "skills", count: 12, status: "verified", highlighted: false },
  {
    key: "currentRole",
    rawValue: "Warehouse Operator",
    status: "active",
    highlighted: false,
  },
  { key: "continuity", status: "active", highlighted: true },
];

/** EM-R2-05 "VERIFIED PROFESSIONAL EVIDENCE" list. The mock renders all three
 *  entries with a Verified tag — including 06 Aug, which the EM-R2-01 /
 *  EM-R2-02 work-log rows show as Recorded. Kept verbatim from Figma. */
export const CAREER_EVIDENCE_IDS = ["wr-0808", "wr-0708", "wr-0608"];

/* -------------------------------------------------------------- analytics */

export type AnalyticsScope = "sevenDays" | "thisFacility" | "allWorkers";

export interface AnalyticsSnapshot {
  scope: AnalyticsScope;
  /** D1 */
  questions: number;
  /** D2 */
  understanding: string;
  /** D4 */
  workerLed: string;
  /** D5 — rendered as "{value} min". */
  responseMinutes: number;
  /** D6 */
  templateUsage: string;
  /** D7 — rendered as "{count} cases". */
  reworkCases: number;
  /** D8 — rendered as "{days} d · {retention}". */
  tenureDays: number;
  retention: string;
  /** D9 — rendered as "{count} workers". */
  followUpWorkers: number;
  trendReportRate: string;
  trendWorkerLed: string;
  trendResponse: "improving" | "steady";
}

export const ANALYTICS_SNAPSHOTS: Record<AnalyticsScope, AnalyticsSnapshot> = {
  sevenDays: {
    scope: "sevenDays",
    questions: 18,
    understanding: "92%",
    workerLed: "41%",
    responseMinutes: 18,
    templateUsage: "57%",
    reworkCases: 7,
    tenureDays: 847,
    retention: "92%",
    followUpWorkers: 4,
    trendReportRate: "+2%",
    trendWorkerLed: "+6%",
    trendResponse: "improving",
  },
  thisFacility: {
    scope: "thisFacility",
    questions: 63,
    understanding: "94%",
    workerLed: "38%",
    responseMinutes: 21,
    templateUsage: "61%",
    reworkCases: 12,
    tenureDays: 792,
    retention: "89%",
    followUpWorkers: 6,
    trendReportRate: "+3%",
    trendWorkerLed: "+4%",
    trendResponse: "improving",
  },
  allWorkers: {
    scope: "allWorkers",
    questions: 148,
    understanding: "90%",
    workerLed: "44%",
    responseMinutes: 24,
    templateUsage: "53%",
    reworkCases: 19,
    tenureDays: 731,
    retention: "87%",
    followUpWorkers: 11,
    trendReportRate: "+1%",
    trendWorkerLed: "+6%",
    trendResponse: "steady",
  },
};

export const ANALYTICS_SCOPES: AnalyticsScope[] = [
  "sevenDays",
  "thisFacility",
  "allWorkers",
];
