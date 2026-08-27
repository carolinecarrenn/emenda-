/**
 * Section 08 · OJT & Human Rights DD mock records (Figma 759:1300).
 * Record content only — module names, draft guidance text, worker names,
 * raw dates and counts. Never translated: UI wording lives in `ojt.copy.ts`.
 */

export type OjtModuleStatus = "needs-review" | "published";

export interface OjtGuidanceSection {
  /** Raw draft heading as authored, e.g. "01 · BEFORE STARTING THE SHIFT". */
  heading: string;
  lines: string[];
}

export interface OjtPublishedGuidance {
  heading: string;
  body: string;
}

export interface OjtModule {
  id: string;
  title: string;
  status: OjtModuleStatus;
  assignedWorkers: number;
  pendingWorkers: number;
  completionRate: string;
  completedWorkers?: number;
  opensThisWeek?: number;
  languages: string;
  /** Raw "11 Aug 2026" — formatted for display via formatDisplayDate. */
  updatedDate: string;
  draftVersion: string;
  /** EM-14A "DRAFT LEARNING GUIDANCE" numbered rules. */
  guidance: string[];
  /** EM-14B "CONTENT EDITOR" sections. */
  editorSections: OjtGuidanceSection[];
  /** EM-14C "PUBLISHED GUIDANCE" cards, final worker-facing wording. */
  publishedGuidance: OjtPublishedGuidance[];
  source: { records: number; conversations: number; dailyReports: number };
  publication: { time: string; assignedNames: string[] };
}

/** EM-14 hub tiles: MODULES 3 active · PENDING 2 workers · COMPLETION 92% · DRAFT REVIEW 1. */
export const OJT_HUB_METRICS = {
  modules: 3,
  pendingWorkers: 2,
  completion: "92%",
  draftReview: 1,
} as const;

export const OJT_MODULES: OjtModule[] = [
  {
    id: "warehouse-safety-ojt",
    title: "Warehouse safety OJT",
    status: "needs-review",
    assignedWorkers: 48,
    pendingWorkers: 2,
    completionRate: "92%",
    languages: "JP / ID / EN",
    updatedDate: "11 Aug 2026",
    draftVersion: "v3",
    guidance: [
      "1. Confirm safety equipment before shift start.",
      "2. Verify forklift area handover with previous team.",
      "3. Escalate blocked access or damaged equipment to supervisor.",
      "4. Never include private worker health information.",
    ],
    editorSections: [
      {
        heading: "01 · BEFORE STARTING THE SHIFT",
        lines: [
          "• Check PPE and forklift-zone safety.",
          "• Confirm handover notes with previous shift.",
          "• Review blocked-access or equipment issues.",
        ],
      },
      {
        heading: "02 · BLOCKED ACCESS / EQUIPMENT",
        lines: [
          "• Stop and contact floor supervisor.",
          "• Do not improvise around restricted areas.",
        ],
      },
      {
        heading: "03 · ESCALATION & REPORTING",
        lines: [
          "Use Communication for urgent clarification and Follow-up for human review.",
        ],
      },
    ],
    publishedGuidance: [
      {
        heading: "01 · Before starting shift",
        body: "Check PPE, confirm handover notes, review blocked-access issues.",
      },
      {
        heading: "02 · Blocked access / equipment",
        body: "Stop and contact supervisor. Do not improvise around restricted areas.",
      },
      {
        heading: "03 · Escalation & reporting",
        body: "Use Communication for urgent clarification and Follow-up for human review.",
      },
    ],
    source: { records: 3, conversations: 2, dailyReports: 1 },
    publication: {
      time: "14:36",
      assignedNames: ["Dewi Anggraini", "Budi Santoso"],
    },
  },
  {
    id: "shift-handover-guide",
    title: "Shift handover guide",
    status: "published",
    assignedWorkers: 48,
    pendingWorkers: 0,
    completionRate: "96%",
    opensThisWeek: 18,
    languages: "JP / ID / EN",
    updatedDate: "06 Aug 2026",
    draftVersion: "v2",
    guidance: [
      "1. Record the outgoing shift summary before leaving the floor.",
      "2. Hand over open equipment issues in writing.",
      "3. Confirm the incoming worker has read the handover note.",
      "4. Never include private worker health information.",
    ],
    editorSections: [
      {
        heading: "01 · CLOSING THE SHIFT",
        lines: [
          "• Record the outgoing shift summary.",
          "• List open equipment issues.",
        ],
      },
      {
        heading: "02 · HANDOVER CONFIRMATION",
        lines: ["• Confirm the incoming worker has read the handover note."],
      },
      {
        heading: "03 · ESCALATION & REPORTING",
        lines: [
          "Use Communication for urgent clarification and Follow-up for human review.",
        ],
      },
    ],
    publishedGuidance: [
      {
        heading: "01 · Closing the shift",
        body: "Record the outgoing shift summary and list open equipment issues.",
      },
      {
        heading: "02 · Handover confirmation",
        body: "Confirm the incoming worker has read the handover note.",
      },
      {
        heading: "03 · Escalation & reporting",
        body: "Use Communication for urgent clarification and Follow-up for human review.",
      },
    ],
    source: { records: 2, conversations: 1, dailyReports: 1 },
    publication: { time: "09:12", assignedNames: ["Dewi Anggraini"] },
  },
  {
    id: "new-worker-orientation",
    title: "New worker orientation",
    status: "published",
    assignedWorkers: 48,
    pendingWorkers: 0,
    completionRate: "92%",
    completedWorkers: 44,
    languages: "JP / ID / EN",
    updatedDate: "01 Aug 2026",
    draftVersion: "v4",
    guidance: [
      "1. Complete the facility walk-through with a supervisor.",
      "2. Confirm locker, uniform and access card assignment.",
      "3. Read the escalation contacts before the first shift.",
      "4. Never include private worker health information.",
    ],
    editorSections: [
      {
        heading: "01 · FIRST DAY WALK-THROUGH",
        lines: [
          "• Complete the facility walk-through with a supervisor.",
          "• Confirm locker, uniform and access card assignment.",
        ],
      },
      {
        heading: "02 · WORKPLACE CONTACTS",
        lines: ["• Read the escalation contacts before the first shift."],
      },
      {
        heading: "03 · ESCALATION & REPORTING",
        lines: [
          "Use Communication for urgent clarification and Follow-up for human review.",
        ],
      },
    ],
    publishedGuidance: [
      {
        heading: "01 · First day walk-through",
        body: "Complete the facility walk-through and confirm locker, uniform and access card.",
      },
      {
        heading: "02 · Workplace contacts",
        body: "Read the escalation contacts before the first shift.",
      },
      {
        heading: "03 · Escalation & reporting",
        body: "Use Communication for urgent clarification and Follow-up for human review.",
      },
    ],
    source: { records: 4, conversations: 3, dailyReports: 1 },
    publication: {
      time: "11:48",
      assignedNames: ["Dewi Anggraini", "Budi Santoso"],
    },
  },
];

/** EM-14 hub CTA + EM-14A/14B default target: the one draft awaiting review. */
export const OJT_DRAFT_MODULE_ID = "warehouse-safety-ojt";

export function findOjtModule(moduleId: string | undefined): OjtModule | undefined {
  return OJT_MODULES.find((module) => module.id === moduleId);
}

/* ---------------------------------------------------------------- HRDD */

/** EM-15 period chip + PERIOD tile value (raw label, not a parsable date). */
export const HRDD_PERIOD = "Aug 2026";

export const HRDD_METRICS = {
  evidence: "88%",
  followUp: "12",
  openGaps: "3",
  period: HRDD_PERIOD,
} as const;

export type HrddCoverageKey =
  | "workerQuestions"
  | "dailyReports"
  | "followUp"
  | "ojtGuidance";

export interface HrddCoverageRow {
  key: HrddCoverageKey;
  value: string;
}

export const HRDD_COVERAGE: HrddCoverageRow[] = [
  { key: "workerQuestions", value: "92%" },
  { key: "dailyReports", value: "46 / 48" },
  { key: "followUp", value: "84%" },
  { key: "ojtGuidance", value: "78%" },
];

/** EM-15 yellow OPEN GAP card. */
export const HRDD_OPEN_GAP = { unlinkedQuestions: 2 } as const;

export const HRDD_EVIDENCE_METRICS = {
  workerQuestions: "18",
  managerResponse: "18",
  twoWayEvidence: "38",
  followUp: "7",
} as const;

export type EvidenceRecordType =
  | "workerQuestion"
  | "managerResponse"
  | "dailyReport"
  | "followUp"
  | "adminVisa";

export type EvidenceSourceKey =
  | "communication"
  | "submitted"
  | "openHumanReview"
  | "openItems";

export type EvidenceStatus = "complete" | "needsReview" | "review";

export interface EvidenceRecord {
  id: string;
  type: EvidenceRecordType;
  /** Roster short name as it appears in the mock, or null. */
  person: string | null;
  /** Raw "11 Aug" — formatted for display via formatDisplayDate. */
  date: string | null;
  source: EvidenceSourceKey;
  openItems?: number;
  status: EvidenceStatus;
}

export const HRDD_EVIDENCE_RECORDS: EvidenceRecord[] = [
  {
    id: "ev-worker-question",
    type: "workerQuestion",
    person: "Putri",
    date: "11 Aug",
    source: "communication",
    status: "complete",
  },
  {
    id: "ev-manager-response",
    type: "managerResponse",
    person: "Sato",
    date: "11 Aug",
    source: "communication",
    status: "complete",
  },
  {
    id: "ev-daily-report",
    type: "dailyReport",
    person: "Dewi",
    date: "11 Aug",
    source: "submitted",
    status: "complete",
  },
  {
    id: "ev-follow-up",
    type: "followUp",
    person: "Andi",
    date: null,
    source: "openHumanReview",
    status: "needsReview",
  },
  {
    id: "ev-admin-visa",
    type: "adminVisa",
    person: null,
    date: null,
    source: "openItems",
    openItems: 2,
    status: "review",
  },
];
