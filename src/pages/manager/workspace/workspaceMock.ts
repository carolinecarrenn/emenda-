import { EMPLOYER } from "@/data/caregiverReport";

/**
 * Manager 02 · Workspace & Core Ops mock data (Figma MD-02 … MD-05A /
 * EM-02 … EM-05A). Proper nouns, EMENDA IDs, invite codes, residence-status
 * labels and timestamps are DATA — they stay raw and are never translated.
 * The Figma mocks name the employer "Kitahara Healthcare"; this app unified
 * the employer as Sakura Care, so org / facility / manager come from EMPLOYER.
 */

export type FacilityAdminKind = "visaAdmin" | "none" | "alert";

export interface ManagedFacility {
  id: string;
  /** Full facility name shown in the row title. */
  name: string;
  /** Short form used by the KPI "LAST USED" card and the CTA label. */
  shortName: string;
  workers: number;
  reportsPct: number;
  followUp: number;
  admin: { kind: FacilityAdminKind; count: number };
  /** MD-02 marks exactly one facility as the manager's live workspace. */
  isCurrent: boolean;
}

export const FACILITIES: ManagedFacility[] = [
  {
    id: "care-facility",
    name: EMPLOYER.facility,
    shortName: "Care Facility",
    workers: 48,
    reportsPct: 96,
    followUp: 4,
    admin: { kind: "visaAdmin", count: 2 },
    isCurrent: true,
  },
  {
    id: "warehouse-east",
    name: "Sakura Warehouse East",
    shortName: "Warehouse East",
    workers: 26,
    reportsPct: 100,
    followUp: 1,
    admin: { kind: "none", count: 0 },
    isCurrent: false,
  },
  {
    id: "support-center",
    name: "Sakura Support Center",
    shortName: "Support Center",
    workers: 18,
    reportsPct: 94,
    followUp: 2,
    admin: { kind: "alert", count: 1 },
    isCurrent: false,
  },
];

export const CURRENT_FACILITY: ManagedFacility = FACILITIES[0];

/** MD-02 / MD-02A / MD-02B headline figures. */
export const WORKSPACE_SUMMARY = {
  facilities: FACILITIES.length,
  totalWorkers: FACILITIES.reduce((sum, f) => sum + f.workers, 0),
  openWork: 9,
  followUp: 4,
  unread: 3,
  admin: 2,
  reportsPct: 96,
  lastUsedTime: "09:18",
} as const;

/* ------------------------------------------------------------------ roster */

export type WorkerRoleKey = "careWorker" | "support" | "warehouse";
export type ConnectionKey = "connected" | "needsReview" | "disconnected";
export type ReportsKey = "done" | "missing";
export type VisaKey = "clear" | "review" | "expirySoon";

export interface RosterWorker {
  /** Route segment for /manager/workers/:workerId. */
  id: string;
  name: string;
  emendaId: string;
  role: WorkerRoleKey;
  connection: ConnectionKey;
  reports: ReportsKey;
  /** MD-04 FOLLOW-UP column. */
  followUp: number;
  visaAdmin: VisaKey;
  unread: number;
  /** EM-04 card chip "Report 08:42" — undefined when the report is missing. */
  reportTime?: string;
  /** MD-05 "Valid until 2027/04" · MD-05A "VALID UNTIL 2027/04/30". */
  visaValidUntil: string;
  visaValidUntilShort: string;
  /** EM-05A pink "74 days remaining" pill — null when the status is clear. */
  visaDaysRemaining: number | null;
  /** Raw residence-status labels (legal categories — kept verbatim). */
  residenceStatus: string;
  visaStatusLabel: string;
  workLogEntries: number;
  /** MD-05 TODAY SUMMARY — timestamps are data, event labels are copy. */
  timeline: { time: string; event: WorkerTimelineEvent }[];
}

export type WorkerTimelineEvent =
  | "reportSubmitted"
  | "managerAcknowledged"
  | "workerInitiated"
  | "messageRead"
  | "reportMissing";

export const ROSTER: RosterWorker[] = [
  {
    id: "yuki-tanaka",
    name: "Yuki Tanaka",
    emendaId: "EM-JP-0024",
    role: "careWorker",
    connection: "connected",
    reports: "done",
    followUp: 1,
    visaAdmin: "clear",
    unread: 1,
    reportTime: "08:42",
    visaValidUntil: "2027/04",
    visaValidUntilShort: "2027/04/30",
    visaDaysRemaining: null,
    residenceStatus: "Specified Skilled Worker",
    visaStatusLabel: "Tokutei Ginou",
    workLogEntries: 3,
    timeline: [
      { time: "08:42", event: "reportSubmitted" },
      { time: "10:15", event: "managerAcknowledged" },
      { time: "13:58", event: "workerInitiated" },
      { time: "14:23", event: "messageRead" },
    ],
  },
  {
    id: "rina-sato",
    name: "Rina Sato",
    emendaId: "EM-JP-0031",
    role: "careWorker",
    connection: "connected",
    reports: "done",
    followUp: 2,
    visaAdmin: "review",
    unread: 1,
    reportTime: "08:58",
    visaValidUntil: "2027/01",
    visaValidUntilShort: "2027/01/22",
    visaDaysRemaining: null,
    residenceStatus: "Specified Skilled Worker",
    visaStatusLabel: "Tokutei Ginou",
    workLogEntries: 5,
    timeline: [
      { time: "08:58", event: "reportSubmitted" },
      { time: "11:04", event: "workerInitiated" },
      { time: "11:40", event: "messageRead" },
    ],
  },
  {
    id: "dimas-pratama",
    name: "Dimas Pratama",
    emendaId: "EM-JP-0042",
    role: "support",
    connection: "needsReview",
    reports: "missing",
    followUp: 1,
    visaAdmin: "expirySoon",
    unread: 1,
    visaValidUntil: "2026/09",
    visaValidUntilShort: "2026/09/17",
    visaDaysRemaining: 74,
    residenceStatus: "Specified Skilled Worker",
    visaStatusLabel: "Tokutei Ginou",
    workLogEntries: 2,
    timeline: [
      { time: "08:00", event: "reportMissing" },
      { time: "09:26", event: "workerInitiated" },
    ],
  },
  {
    id: "maya-putri",
    name: "Maya Putri",
    emendaId: "EM-JP-0058",
    role: "careWorker",
    connection: "connected",
    reports: "done",
    followUp: 0,
    visaAdmin: "clear",
    unread: 0,
    reportTime: "09:14",
    visaValidUntil: "2027/11",
    visaValidUntilShort: "2027/11/03",
    visaDaysRemaining: null,
    residenceStatus: "Specified Skilled Worker",
    visaStatusLabel: "Tokutei Ginou",
    workLogEntries: 4,
    timeline: [
      { time: "09:14", event: "reportSubmitted" },
      { time: "10:02", event: "managerAcknowledged" },
    ],
  },
  {
    id: "ken-watanabe",
    name: "Ken Watanabe",
    emendaId: "EM-JP-0067",
    role: "warehouse",
    connection: "disconnected",
    reports: "done",
    followUp: 0,
    visaAdmin: "clear",
    unread: 0,
    reportTime: "07:51",
    visaValidUntil: "2028/02",
    visaValidUntilShort: "2028/02/14",
    visaDaysRemaining: null,
    residenceStatus: "Specified Skilled Worker",
    visaStatusLabel: "Tokutei Ginou",
    workLogEntries: 6,
    timeline: [{ time: "07:51", event: "reportSubmitted" }],
  },
];

export function findWorker(workerId: string | undefined): RosterWorker | undefined {
  return ROSTER.find((worker) => worker.id === workerId);
}

/** MD-04 filter chips — counts are facility-wide, as printed in the mock. */
export const ROSTER_FILTER_COUNTS = {
  all: 48,
  needsReview: 6,
  unread: 3,
  visaAdmin: 2,
  disconnected: 1,
} as const;

/** EM-04 colours the card by exception: mint = ok, peach = needs attention. */
export function needsAttention(worker: RosterWorker): boolean {
  return (
    worker.connection !== "connected" ||
    worker.reports === "missing" ||
    worker.visaAdmin === "expirySoon"
  );
}

/* ------------------------------------------------------------------ invite */

export const INVITE = {
  code: "KIT-CF-24A8",
  activeConnections: 48,
  pendingInvite: 1,
  validityHours: 72,
} as const;

/* ------------------------------------------------------- no-results queries */

/** MD-02C (1213:205) / EM-02C (949:4) paint the FACILITY SEARCH field with a
 *  typed keyword that matches nothing, so ?state=no-results seeds the same
 *  query instead of leaving the placeholder standing. Raw data, never
 *  translated. */
export const NO_RESULT_FACILITY_SEARCH = "North Annex";

/** MD-04A (1213:399) / EM-04A (932:5) do the same on the roster search. */
export const NO_RESULT_ROSTER_SEARCH = "North Annex technician";
