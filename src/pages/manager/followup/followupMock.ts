/**
 * Typed mock records for section 05 · Follow-up & Alerts.
 * Names, message bodies, timestamps and EMENDA ids are DATA — never
 * translated. Sentence structure lives in followup.copy.ts.
 *
 * The Figma desktop (MD-09) and mobile (EM-09) queues list different
 * rosters for the same queue, so every signal declares the surface(s) it
 * appears on and both variants render verbatim.
 */

export type SignalPriority = "HIGH" | "MEDIUM" | "LOW";
export type SignalStatus = "pending" | "sent" | "resolved";
export type SignalSurface = "desktop" | "mobile";
export type SignalKind =
  | "missingReport"
  | "unreadMessage"
  | "visaWindow"
  | "visaAdminWindow"
  | "workLog";
export type SignalCurrentKind =
  | "notSubmitted"
  | "awaitingReply"
  | "windowOpen"
  | "noteRecorded";
export type SignalExpectedKind =
  | "reportAt"
  | "replyWithin"
  | "renewalBefore"
  | "reviewThisWeek";
export type SignalLogKind =
  | "lastReport"
  | "markedMissing"
  | "noWorkerMessage"
  | "messageReceived"
  | "windowOpened"
  | "noteRecorded";
export type TemplateId = "daily" | "checkin" | "documentation";

export interface SignalLogEntry {
  /** Raw timestamp label from the mock ("Yesterday 09:14"). */
  time: string;
  kind: SignalLogKind;
}

export interface FollowUpSignal {
  id: string;
  workerName: string;
  workerRole: string;
  kind: SignalKind;
  /** Figma source label key ("Daily Reports" / "Communication" / …). */
  sourceLabel: string;
  priority: SignalPriority;
  status: SignalStatus;
  surfaces: SignalSurface[];
  /** Value injected into the meta template — "08:00", "18", "74" or "". */
  metaValue: string;
  expectedKind: SignalExpectedKind;
  expectedValue: string;
  currentKind: SignalCurrentKind;
  log: SignalLogEntry[];
  template: TemplateId;
  /** Worker-facing draft — Bahasa Indonesia original, kept raw. */
  originalMessage: string;
  /** 日本語 translation preview, kept raw. */
  translationPreview: string;
  /** Timestamp recorded in the manager note ("08:46"). */
  reviewedAt: string;
  /** Delivery timestamp shown on EM-10 ("Today 09:22"). */
  sentAt: string;
  /** Template name written into the sent record. */
  sentTemplateName: string;
}

/** MD-09 KPI quad — verbatim Figma values. */
export const FOLLOW_UP_KPI_VALUES = ["4", "2", "3", "8"] as const;

/** EM-09 chip counts — verbatim Figma values. */
export const FOLLOW_UP_CHIP_COUNTS = {
  pending: "4",
  high: "2",
  sent: "3",
  resolved: "8",
} as const;

export const FOLLOW_UP_SIGNALS: FollowUpSignal[] = [
  {
    // EM-09 queue row 1 (peach) + the whole EM-09A/09B/10/09C pipeline.
    id: "sig-missing-report-putri",
    workerName: "Putri Rahayu",
    workerRole: "Warehouse Operator",
    kind: "missingReport",
    sourceLabel: "Daily Reports",
    priority: "HIGH",
    status: "pending",
    surfaces: ["mobile"],
    metaValue: "08:00",
    expectedKind: "reportAt",
    expectedValue: "08:00",
    currentKind: "notSubmitted",
    log: [
      { time: "Yesterday 09:14", kind: "lastReport" },
      { time: "Today 08:30", kind: "markedMissing" },
      { time: "Today 08:46", kind: "noWorkerMessage" },
    ],
    template: "daily",
    originalMessage:
      "Mohon konfirmasi laporan harian hari ini. Jika ada kendala, beri tahu kami.",
    translationPreview:
      "本日の日報をご確認ください。問題があればお知らせください。",
    reviewedAt: "08:46",
    sentAt: "Today 09:22",
    sentTemplateName: "Daily Report Reminder",
  },
  {
    // MD-09 queue row 1 (HIGH, red) + default SELECTED SIGNAL on desktop.
    id: "sig-missing-report-ahmad",
    workerName: "Ahmad Fauzi",
    workerRole: "Care Assistant",
    kind: "missingReport",
    sourceLabel: "Daily Reports",
    priority: "HIGH",
    status: "pending",
    surfaces: ["desktop"],
    metaValue: "08:00",
    expectedKind: "reportAt",
    expectedValue: "08:00",
    currentKind: "notSubmitted",
    log: [
      { time: "Yesterday 09:02", kind: "lastReport" },
      { time: "Today 08:30", kind: "markedMissing" },
      { time: "Today 08:46", kind: "noWorkerMessage" },
    ],
    template: "daily",
    originalMessage:
      "Mohon konfirmasi laporan harian hari ini. Jika ada kendala, beri tahu kami.",
    translationPreview:
      "本日の日報をご確認ください。問題があればお知らせください。",
    reviewedAt: "08:46",
    sentAt: "Today 09:22",
    sentTemplateName: "Daily Report Reminder",
  },
  {
    // EM-09 queue row 2 (MEDIUM).
    id: "sig-unread-ahmad",
    workerName: "Ahmad Fauzi",
    workerRole: "Care Assistant",
    kind: "unreadMessage",
    sourceLabel: "Communication",
    priority: "MEDIUM",
    status: "pending",
    surfaces: ["mobile"],
    metaValue: "18",
    expectedKind: "replyWithin",
    expectedValue: "15",
    currentKind: "awaitingReply",
    log: [
      { time: "Today 14:05", kind: "messageReceived" },
      { time: "Today 14:23", kind: "noWorkerMessage" },
    ],
    template: "checkin",
    originalMessage:
      "Terima kasih atas pesannya. Kami akan menindaklanjuti hari ini.",
    translationPreview: "ご連絡ありがとうございます。本日中に対応いたします。",
    reviewedAt: "14:23",
    sentAt: "Today 14:31",
    sentTemplateName: "Check-in",
  },
  {
    // MD-09 queue row 2 (MEDIUM, olive).
    id: "sig-unread-putri",
    workerName: "Putri Rahayu",
    workerRole: "Warehouse Operator",
    kind: "unreadMessage",
    sourceLabel: "Communication",
    priority: "MEDIUM",
    status: "pending",
    surfaces: ["desktop"],
    metaValue: "18",
    expectedKind: "replyWithin",
    expectedValue: "15",
    currentKind: "awaitingReply",
    log: [
      { time: "Today 14:05", kind: "messageReceived" },
      { time: "Today 14:23", kind: "noWorkerMessage" },
    ],
    template: "checkin",
    originalMessage:
      "Terima kasih atas pesannya. Kami akan menindaklanjuti hari ini.",
    translationPreview: "ご連絡ありがとうございます。本日中に対応いたします。",
    reviewedAt: "14:23",
    sentAt: "Today 14:31",
    sentTemplateName: "Check-in",
  },
  {
    // EM-09 queue row 3 (MEDIUM).
    id: "sig-visa-maria",
    workerName: "Maria Santos",
    workerRole: "Care Assistant",
    kind: "visaAdminWindow",
    sourceLabel: "Visa/Admin",
    priority: "MEDIUM",
    status: "pending",
    surfaces: ["mobile"],
    metaValue: "74",
    expectedKind: "renewalBefore",
    expectedValue: "74",
    currentKind: "windowOpen",
    log: [
      { time: "12 Aug 09:00", kind: "windowOpened" },
      { time: "Today 08:00", kind: "noteRecorded" },
    ],
    template: "documentation",
    originalMessage:
      "Jendela perpanjangan visa Anda sudah terbuka. Mohon siapkan dokumen yang diperlukan.",
    translationPreview:
      "ビザ更新の申請期間が始まりました。必要書類のご準備をお願いします。",
    reviewedAt: "08:12",
    sentAt: "Today 09:40",
    sentTemplateName: "Documentation",
  },
  {
    // MD-09 queue row 3 (MEDIUM).
    id: "sig-visa-budi",
    workerName: "Budi Santoso",
    workerRole: "Care Assistant",
    kind: "visaWindow",
    sourceLabel: "Visa/Admin",
    priority: "MEDIUM",
    status: "pending",
    surfaces: ["desktop"],
    metaValue: "74",
    expectedKind: "renewalBefore",
    expectedValue: "74",
    currentKind: "windowOpen",
    log: [
      { time: "12 Aug 09:00", kind: "windowOpened" },
      { time: "Today 08:00", kind: "noteRecorded" },
    ],
    template: "documentation",
    originalMessage:
      "Jendela perpanjangan visa Anda sudah terbuka. Mohon siapkan dokumen yang diperlukan.",
    translationPreview:
      "ビザ更新の申請期間が始まりました。必要書類のご準備をお願いします。",
    reviewedAt: "08:12",
    sentAt: "Today 09:40",
    sentTemplateName: "Documentation",
  },
  {
    // MD-09 queue row 4 (LOW).
    id: "sig-worklog-dewi",
    workerName: "Dewi Anggraini",
    workerRole: "Care Assistant",
    kind: "workLog",
    sourceLabel: "Work Log",
    priority: "LOW",
    status: "pending",
    surfaces: ["desktop"],
    metaValue: "",
    expectedKind: "reviewThisWeek",
    expectedValue: "",
    currentKind: "noteRecorded",
    log: [
      { time: "Yesterday 17:40", kind: "noteRecorded" },
      { time: "Today 08:05", kind: "noWorkerMessage" },
    ],
    template: "checkin",
    originalMessage:
      "Kami mencatat satu hal pada catatan kerja Anda. Beri tahu kami jika ada koreksi.",
    translationPreview:
      "作業ログに1件の記録があります。訂正があればお知らせください。",
    reviewedAt: "08:05",
    sentAt: "Today 10:02",
    sentTemplateName: "Check-in",
  },
  {
    id: "sig-sent-shift-rina",
    workerName: "Rina Kusuma",
    workerRole: "Care Assistant",
    kind: "unreadMessage",
    sourceLabel: "Communication",
    priority: "MEDIUM",
    status: "sent",
    surfaces: ["desktop", "mobile"],
    metaValue: "42",
    expectedKind: "replyWithin",
    expectedValue: "15",
    currentKind: "awaitingReply",
    log: [{ time: "Today 09:22", kind: "messageReceived" }],
    template: "checkin",
    originalMessage: "Terima kasih, pesan Anda sudah kami terima.",
    translationPreview: "ご連絡ありがとうございます。確かに受け取りました。",
    reviewedAt: "09:18",
    sentAt: "Today 09:22",
    sentTemplateName: "Check-in",
  },
  {
    id: "sig-sent-report-hendra",
    workerName: "Hendra Wijaya",
    workerRole: "Care Assistant",
    kind: "missingReport",
    sourceLabel: "Daily Reports",
    priority: "MEDIUM",
    status: "sent",
    surfaces: ["desktop", "mobile"],
    metaValue: "08:00",
    expectedKind: "reportAt",
    expectedValue: "08:00",
    currentKind: "notSubmitted",
    log: [{ time: "Today 08:55", kind: "markedMissing" }],
    template: "daily",
    originalMessage: "Mohon konfirmasi laporan harian hari ini.",
    translationPreview: "本日の日報をご確認ください。",
    reviewedAt: "08:52",
    sentAt: "Today 08:58",
    sentTemplateName: "Daily Report Reminder",
  },
  {
    id: "sig-sent-doc-sari",
    workerName: "Sari Melati",
    workerRole: "Care Assistant",
    kind: "visaWindow",
    sourceLabel: "Visa/Admin",
    priority: "LOW",
    status: "sent",
    surfaces: ["desktop", "mobile"],
    metaValue: "96",
    expectedKind: "renewalBefore",
    expectedValue: "96",
    currentKind: "windowOpen",
    log: [{ time: "Today 07:40", kind: "windowOpened" }],
    template: "documentation",
    originalMessage: "Mohon periksa kembali dokumen administrasi Anda.",
    translationPreview: "管理書類のご確認をお願いします。",
    reviewedAt: "07:38",
    sentAt: "Today 07:45",
    sentTemplateName: "Documentation",
  },
  {
    id: "sig-resolved-report-agus",
    workerName: "Agus Prasetyo",
    workerRole: "Care Assistant",
    kind: "missingReport",
    sourceLabel: "Daily Reports",
    priority: "MEDIUM",
    status: "resolved",
    surfaces: ["desktop", "mobile"],
    metaValue: "08:00",
    expectedKind: "reportAt",
    expectedValue: "08:00",
    currentKind: "notSubmitted",
    log: [{ time: "22 Aug 08:40", kind: "markedMissing" }],
    template: "daily",
    originalMessage: "Mohon konfirmasi laporan harian hari ini.",
    translationPreview: "本日の日報をご確認ください。",
    reviewedAt: "08:36",
    sentAt: "22 Aug 08:44",
    sentTemplateName: "Daily Report Reminder",
  },
  {
    id: "sig-resolved-unread-lina",
    workerName: "Lina Marlina",
    workerRole: "Care Assistant",
    kind: "unreadMessage",
    sourceLabel: "Communication",
    priority: "LOW",
    status: "resolved",
    surfaces: ["desktop", "mobile"],
    metaValue: "24",
    expectedKind: "replyWithin",
    expectedValue: "15",
    currentKind: "awaitingReply",
    log: [{ time: "21 Aug 11:12", kind: "messageReceived" }],
    template: "checkin",
    originalMessage: "Terima kasih, kami sudah membaca pesan Anda.",
    translationPreview: "メッセージを確認いたしました。ありがとうございます。",
    reviewedAt: "11:14",
    sentAt: "21 Aug 11:18",
    sentTemplateName: "Check-in",
  },
  {
    id: "sig-resolved-visa-tono",
    workerName: "Tono Hartono",
    workerRole: "Care Assistant",
    kind: "visaWindow",
    sourceLabel: "Visa/Admin",
    priority: "LOW",
    status: "resolved",
    surfaces: ["desktop", "mobile"],
    metaValue: "120",
    expectedKind: "renewalBefore",
    expectedValue: "120",
    currentKind: "windowOpen",
    log: [{ time: "19 Aug 10:00", kind: "windowOpened" }],
    template: "documentation",
    originalMessage: "Dokumen perpanjangan sudah kami terima. Terima kasih.",
    translationPreview: "更新書類を受け取りました。ありがとうございます。",
    reviewedAt: "09:58",
    sentAt: "19 Aug 10:06",
    sentTemplateName: "Documentation",
  },
];

/** Compose language pair shown on EM-09B ("Language · ID → JA"). */
export const COMPOSE_LANGUAGE_PAIR = "ID → JA";

/** EM-09A/09B/10/09C all follow Putri Rahayu's missing-report signal. */
export const DEFAULT_SIGNAL_ID = "sig-missing-report-putri";

/** MD-09 opens with Ahmad Fauzi selected in the SELECTED SIGNAL rail. */
export const DEFAULT_DESKTOP_SIGNAL_ID = "sig-missing-report-ahmad";

export function findSignal(id: string | undefined): FollowUpSignal | undefined {
  return FOLLOW_UP_SIGNALS.find((signal) => signal.id === id);
}

export function signalsForSurface(surface: SignalSurface): FollowUpSignal[] {
  return FOLLOW_UP_SIGNALS.filter((signal) =>
    signal.surfaces.includes(surface),
  );
}

/* ------------------------------------------------------------------ */
/* Alerts — MD-12 / EM-12                                              */
/* ------------------------------------------------------------------ */

export type AlertSeverity = "HIGH" | "MEDIUM" | "LOW";
export type AlertCategory = "reporting" | "communication" | "admin";
export type AlertKind =
  | "missingReport"
  | "unreadMessage"
  | "visaRenewal"
  | "adminDocument";
export type AlertActionKind =
  | "reviewReports"
  | "openCommunication"
  | "reviewWorker"
  | "openWorkerDetail";

export interface ManagerAlert {
  id: string;
  /** MD-12 row primary line. */
  workerName: string;
  /** EM-12 card title suffix ("Missing Daily Report · Andi"). */
  mobileWorker: string;
  kind: AlertKind;
  severity: AlertSeverity;
  category: AlertCategory;
  urgent: boolean;
  /** Value injected into the meta template — "08:00", "18", "74" or "". */
  metaValue: string;
  action: AlertActionKind;
  actionTo: string;
}

/** MD-12 KPI quad — verbatim Figma values. */
export const ALERT_KPI_VALUES = ["5", "1", "2", "2"] as const;

/** EM-12 chip counts + summary tiles — verbatim Figma values. */
export const ALERT_CHIP_COUNTS = {
  open: "5",
  urgent: "1",
  reporting: "2",
  admin: "2",
} as const;

export const ALERT_SUMMARY = { high: "2", dueSoon: "3" } as const;

/** EM-12 footer line value. */
export const ALERT_RESPONSE_AGING = "10:12";

/** MD-12 ALERT QUEUE order. */
export const MANAGER_ALERTS: ManagerAlert[] = [
  {
    id: "alert-missing-report",
    workerName: "Ahmad Fauzi",
    mobileWorker: "Andi",
    kind: "missingReport",
    severity: "HIGH",
    category: "reporting",
    urgent: true,
    metaValue: "08:00",
    action: "reviewReports",
    actionTo: "/manager/reports",
  },
  {
    id: "alert-visa-renewal",
    workerName: "Budi Santoso",
    mobileWorker: "Dewi",
    kind: "visaRenewal",
    severity: "MEDIUM",
    category: "admin",
    urgent: false,
    metaValue: "74",
    action: "reviewWorker",
    actionTo: "/manager/workers",
  },
  {
    id: "alert-unread-message",
    workerName: "Putri Rahayu",
    mobileWorker: "Putri",
    kind: "unreadMessage",
    severity: "MEDIUM",
    category: "communication",
    urgent: false,
    metaValue: "18",
    action: "openCommunication",
    actionTo: "/manager/communication",
  },
  {
    id: "alert-admin-document",
    workerName: "Maria Santos",
    mobileWorker: "Budi",
    kind: "adminDocument",
    severity: "LOW",
    category: "admin",
    urgent: false,
    metaValue: "",
    action: "openWorkerDetail",
    actionTo: "/manager/workers",
  },
];

/** EM-12 OPEN ALERTS order (missing · unread · visa · admin). */
export const MOBILE_ALERT_ORDER = [
  "alert-missing-report",
  "alert-unread-message",
  "alert-visa-renewal",
  "alert-admin-document",
];

export const MOBILE_ALERTS: ManagerAlert[] = MOBILE_ALERT_ORDER.map(
  (id) => MANAGER_ALERTS.find((alert) => alert.id === id)!,
);

/* ------------------------------------------------------------------ */
/* MD-10 FOLLOW-UP HISTORY table (1226:1486 / 1491 / 1496)             */
/* ------------------------------------------------------------------ */

export type HistorySignalKind =
  | "dailyReportReview"
  | "missingReport"
  | "clarification";
export type HistoryStatusKind = "sent" | "handled";
export type HistoryNextKind = "awaitReply" | "reviewLater";

export interface FollowUpHistoryRow {
  id: string;
  /** Worker name is DATA — never translated. */
  workerName: string;
  signalKind: HistorySignalKind;
  statusKind: HistoryStatusKind;
  nextKind: HistoryNextKind;
}

/** MD-10 desktop history rows, verbatim Figma order. */
export const FOLLOW_UP_HISTORY: FollowUpHistoryRow[] = [
  {
    id: "hist-dewi-anggraini",
    workerName: "Dewi Anggraini",
    signalKind: "dailyReportReview",
    statusKind: "sent",
    nextKind: "awaitReply",
  },
  {
    id: "hist-andi-pratama",
    workerName: "Andi Pratama",
    signalKind: "missingReport",
    statusKind: "handled",
    nextKind: "reviewLater",
  },
  {
    id: "hist-putri-rahayu",
    workerName: "Putri Rahayu",
    signalKind: "clarification",
    statusKind: "sent",
    nextKind: "awaitReply",
  },
];
