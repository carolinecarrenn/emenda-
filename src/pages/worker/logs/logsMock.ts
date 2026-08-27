import { EMPLOYER, TODAY } from "@/data/caregiverReport";

/**
 * Mock records for Logs & Records (WD-61 family). Only *data* lives here —
 * record titles, note bodies, company names, dates and EMENDA ids stay raw and
 * are never translated. Every label around them comes from logs.copy.ts.
 * The Figma mocks name "ABC Japan Co., Ltd."; per the shared data contract the
 * employer is EMPLOYER.name.
 */

export type WorkRecordKind = "verified" | "personal";

export interface WorkRecord {
  id: string;
  kind: WorkRecordKind;
  /** Row + detail heading (raw mock data). */
  title: string;
  /** Raw "24 Aug 2026" — formatted per language at render time. */
  date?: string;
  /** Raw "Aug 2026" month label for the "Active since …" meta line. */
  sinceMonth?: string;
  /** Verified record detail fields. */
  employer?: string;
  role?: string;
  eventTitle?: string;
  /** Personal career-note fields. */
  category?: string;
  /** WD-61G metadata line — raw "Created … · Updated …" dates. */
  created?: string;
  updated?: string;
  body?: string;
}

export const WORK_RECORDS: WorkRecord[] = [
  {
    id: "wr-employment",
    kind: "verified",
    title: `${EMPLOYER.name} · Caregiver`,
    sinceMonth: "Aug 2026",
    employer: EMPLOYER.name,
    role: "Caregiver",
    eventTitle: "Employment connection verified",
    date: TODAY,
  },
  {
    id: "wr-connection",
    kind: "verified",
    title: "Employment connection verified",
    date: TODAY,
    sinceMonth: "Aug 2026",
    employer: EMPLOYER.name,
    role: "Caregiver",
    eventTitle: "Employment connection verified",
  },
  {
    id: "wn-jlpt",
    kind: "personal",
    title: "Target JLPT N2",
    date: "24 Aug 2026",
    created: "24 Aug 2026",
    updated: "25 Aug 2026",
    category: "Career goal",
    body: "Target JLPT N2 sebelum Desember 2026. Belajar 45 menit setiap hari setelah shift, fokus kanji dan kaiwa.",
  },
];

export type HealthEntryKind = "note" | "stress";

export interface HealthEntry {
  id: string;
  kind: HealthEntryKind;
  /** Raw mock title. */
  title: string;
  /** Raw date; entries dated TODAY render the "Today" label instead. */
  date: string;
  /** W-61K metadata line — raw "Created … · Updated …" dates. */
  created?: string;
  updated?: string;
  category?: string;
  body?: string;
  /** Stress entries link to the stress-check detail screen. */
  checkId?: string;
}

export const HEALTH_ENTRIES: HealthEntry[] = [
  {
    id: "hn-today",
    kind: "note",
    title: "Health note",
    date: TODAY,
    created: TODAY,
    updated: TODAY,
    category: "Wellbeing",
    body: "Punggung pegal setelah shift panjang. Sudah peregangan 10 menit sebelum tidur.",
  },
  {
    id: "hn-stress-24",
    kind: "stress",
    title: "Stress check",
    date: "24 Aug 2026",
    checkId: "sc-24",
  },
];

export interface LifeNote {
  id: string;
  title: string;
  date: string;
  /** W-61P metadata line — raw "Created … · Updated …" dates. */
  created?: string;
  updated?: string;
  category: string;
  body: string;
}

export const LIFE_NOTES: LifeNote[] = [
  {
    id: "ln-personal",
    title: "Personal note",
    date: TODAY,
    created: TODAY,
    updated: TODAY,
    category: "Pribadi",
    body: "Simpan target bulan ini: olahraga dua kali seminggu dan telepon keluarga setiap Minggu.",
  },
  {
    id: "ln-housing",
    title: "Housing note",
    date: "24 Aug 2026",
    created: "22 Aug 2026",
    updated: "24 Aug 2026",
    category: "Tempat tinggal",
    body: "Kontrak apartemen berakhir 30 Sep 2026. Simpan salinan kontrak dan tanya perpanjangan ke agen dua minggu sebelumnya.",
  },
  {
    id: "ln-family",
    title: "Family note",
    date: "22 Aug 2026",
    created: "22 Aug 2026",
    updated: "22 Aug 2026",
    category: "Keluarga",
    body: "Kirim ke rumah setiap tanggal 25. Cek kurs sebelum transfer dan simpan bukti kirim di folder pribadi.",
  },
];

/** Indices into the three stress-check option triplets in logs.copy.ts. */
export interface StressCheckEntry {
  id: string;
  date: string;
  stress: 0 | 1 | 2;
  energy: 0 | 1 | 2;
  sleep: 0 | 1 | 2;
  /** Raw worker note (never translated). */
  note: string;
}

export const STRESS_CHECKS: StressCheckEntry[] = [
  { id: "sc-24", date: "24 Aug 2026", stress: 0, energy: 0, sleep: 1, note: "Tidur lebih baik setelah hari libur." },
  { id: "sc-22", date: "22 Aug 2026", stress: 1, energy: 1, sleep: 2, note: "Shift malam dua hari berturut-turut." },
  { id: "sc-19", date: "19 Aug 2026", stress: 1, energy: 1, sleep: 1, note: "" },
];

/** WD-61M defaults: Sedang / Cukup / Cukup pre-selected. */
export const STRESS_DRAFT = {
  stress: 1 as 0 | 1 | 2,
  energy: 1 as 0 | 1 | 2,
  sleep: 1 as 0 | 1 | 2,
  note: "",
};

export interface HealthProvider {
  id: string;
  /** Raw organisation name. */
  name: string;
  /** Raw provider qualifier printed after the name on the W-61O1 review. */
  role: string;
  /** Raw "01 Sep 2026" end date used by the granted / active states. */
  activeUntil: string;
  /** Raw date used by the expired state. */
  expiredOn: string;
}

export const HEALTH_PROVIDER: HealthProvider = {
  id: "smc",
  name: "Sakura Medical Clinic",
  role: "Official provider",
  activeUntil: "01 Sep 2026",
  expiredOn: "18 Aug 2026",
};

export type DraftSyncKey = "career" | "health" | "life";
export type DraftSyncStatus = "syncing" | "waiting" | "synced" | "failed";

export interface DraftSyncItem {
  key: DraftSyncKey;
  /** Raw draft title (worker content). */
  title: string;
}

export const DRAFT_SYNC_ITEMS: DraftSyncItem[] = [
  { key: "career", title: "Target JLPT N2" },
  { key: "health", title: "Health note" },
  { key: "life", title: "Housing note" },
];

/** Per-state row status matrix for WD-61AR / AS / AT. */
export const DRAFT_SYNC_STATUS: Record<
  "syncing" | "failed" | "done",
  Record<DraftSyncKey, DraftSyncStatus>
> = {
  syncing: { career: "syncing", health: "waiting", life: "waiting" },
  failed: { career: "synced", health: "failed", life: "waiting" },
  done: { career: "synced", health: "synced", life: "synced" },
};

/** Empty seed used by the add-note forms (WD-61H / L / Q). */
export const EMPTY_NOTE_DRAFT = {
  title: "",
  category: "",
  body: "",
};
