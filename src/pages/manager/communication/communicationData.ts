import { EMPLOYER, WORKER } from "@/data/caregiverReport";

/**
 * Manager · Communication mock records
 * (Figma mobile section 759:1284 · desktop section 1192:940).
 *
 * Everything in this file is DATA, not copy: person names, roster roles,
 * language names, timestamps and — critically — every Japanese / Indonesian
 * message string. The i18n layer never touches these; original text is
 * preserved exactly as the worker or manager wrote it, which is the whole
 * point of the EMENDA "original + translation preserved" contract.
 */

/** Which surface a conversation row appears on: MD-06 lists Dewi Anggraini,
 *  EM-06 lists Alex Morgan; the first three rows are shared. */
export type ConversationSurface = "all" | "desktop" | "mobile";

export type ConversationMeta = "unread" | "followUp" | "read";

export interface ConversationSummary {
  id: string;
  name: string;
  initials: string;
  /** Roster role used by thread / compose / recipient headers. */
  role: string;
  /** Worker language, used in thread + recipient context lines. */
  language: string;
  /** EM-06 second line — role, plus language where the mock prints it. */
  mobileRoleLine: string;
  /** EM-08 recipient role, where the 390px mock names a different post than
   *  the desktop roster tag (994:2816 reads "Warehouse Operator"). */
  mobileRole?: string;
  /** MD-06 right-hand language tag. */
  languageTag: string;
  /** Language pair printed on MD-07 / MD-08, e.g. "JA → ID". */
  languagePair: string;
  /** Last message preview — raw content, never translated by the UI. */
  lastMessage: string;
  /** EM-06 timestamp column · MD-06 first half of the meta line. */
  timestamp: string;
  /** MD-06 meta suffix rendered after the timestamp. */
  meta: ConversationMeta;
  unreadCount: number;
  needsReply: boolean;
  broadcast: boolean;
  surface: ConversationSurface;
}

export interface ThreadMessage {
  id: string;
  author: "manager" | "worker";
  authorName: string;
  time: string;
  /** Author's own words, kept verbatim. */
  original: string;
  /** Language label printed beside the author on MD-07 / EM-07. */
  originalLanguage: string;
  /** Embedded translation chip direction, e.g. "JA → ID". */
  direction: string;
  /** Machine translation shown inside the chip — raw content. */
  translation: string;
  /** MD-07 prints the opening manager line and the worker reply only; the
   *  14:21 follow-up bubble appears on EM-07. */
  surface?: ConversationSurface;
}

export interface ConversationThread {
  conversationId: string;
  /** Status strip: "N unread · last activity HH:MM". */
  lastActivity: string;
  unreadCount: number;
  /** Status strip right half, e.g. "JA ↔ ID" (the pair itself is data). */
  languagePair: string;
  messages: ThreadMessage[];
}

export type MessageTemplateId =
  | "daily-report-reminder"
  | "shift-confirm"
  | "understanding";

export interface MessageTemplate {
  id: MessageTemplateId;
  /** MANAGER ORIGINAL · 日本語 body, one entry per rendered line. */
  originalLines: string[];
  /** TRANSLATION PREVIEW · Bahasa Indonesia body, one entry per line. */
  translationLines: string[];
  /** EM-08 (994:2820) drafts the shorter one-line wording the 390px card
   *  carries; MD-08 keeps the two-line desktop draft. */
  mobileOriginalLines?: string[];
  /** EM-08 (994:2825) preview for the mobile draft above. */
  mobileTranslationLines?: string[];
}

export const CONVERSATIONS: ConversationSummary[] = [
  {
    id: "putri-rahayu",
    name: WORKER.name,
    initials: "PR",
    role: WORKER.role,
    language: "Bahasa Indonesia",
    /* EM-06 (994:2698) / EM-07 (994:2751) / EM-08 (994:2816) print Putri's
       post as "Warehouse Operator"; the desktop roster tag keeps WORKER.role. */
    mobileRoleLine: "Warehouse Operator · Bahasa Indonesia",
    mobileRole: "Warehouse Operator",
    languageTag: "Bahasa Indonesia",
    languagePair: "JA → ID",
    lastMessage: "Ya, saya mengerti. Saya akan datang.",
    timestamp: "14:23",
    meta: "unread",
    unreadCount: 1,
    needsReply: true,
    broadcast: false,
    surface: "all",
  },
  {
    id: "ahmad-fauzi",
    name: "Ahmad Fauzi",
    initials: "AF",
    role: "Warehouse Operator",
    language: "Bahasa Indonesia",
    /* EM-06 prints Ahmad's role without the language clause. */
    mobileRoleLine: "Warehouse Operator",
    languageTag: "Bahasa Indonesia",
    languagePair: "JA → ID",
    lastMessage: "Permintaan tukar shift Senin depan",
    timestamp: "13 Jan",
    meta: "followUp",
    unreadCount: 0,
    needsReply: false,
    broadcast: false,
    surface: "all",
  },
  {
    id: "maria-santos",
    name: "Maria Santos",
    initials: "MS",
    role: "Care Assistant",
    language: "English",
    /* EM-06 prints Maria's second line as "Care Assistant · Bahasa
       Indonesia" even though her thread language tag is English. */
    mobileRoleLine: "Care Assistant · Bahasa Indonesia",
    languageTag: "English",
    languagePair: "JA → EN",
    lastMessage: "Inventory count selesai",
    timestamp: "12 Jan",
    meta: "read",
    unreadCount: 0,
    needsReply: false,
    broadcast: false,
    surface: "all",
  },
  {
    id: "alex-morgan",
    name: "Alex Morgan",
    initials: "AM",
    role: "Care Assistant",
    language: "English",
    /* EM-06 prints Alex's role without the language clause. */
    mobileRoleLine: "Care Assistant",
    languageTag: "English",
    languagePair: "JA → EN",
    lastMessage: "Daily Report submitted · no unread",
    timestamp: "11 Jan",
    meta: "read",
    unreadCount: 0,
    needsReply: false,
    broadcast: true,
    surface: "mobile",
  },
  {
    id: "dewi-anggraini",
    name: "Dewi Anggraini",
    initials: "DA",
    role: "Care Assistant",
    language: "Bahasa Indonesia",
    mobileRoleLine: "Care Assistant · Bahasa Indonesia",
    languageTag: "Bahasa Indonesia",
    languagePair: "JA → ID",
    lastMessage: "Laporan sudah saya kirim",
    timestamp: "09:15",
    meta: "read",
    unreadCount: 0,
    needsReply: false,
    broadcast: true,
    surface: "desktop",
  },
];

export const THREADS: ConversationThread[] = [
  {
    conversationId: "putri-rahayu",
    lastActivity: "14:23",
    unreadCount: 1,
    languagePair: "JA ↔ ID",
    messages: [
      {
        id: "pr-1",
        author: "manager",
        authorName: EMPLOYER.manager,
        time: "14:20",
        original: "明日の朝9時のシフトを担当できますか？",
        originalLanguage: "日本語",
        direction: "JA → ID",
        translation: "Besok bisa menangani shift pagi mulai jam 9?",
      },
      {
        id: "pr-2",
        author: "manager",
        authorName: EMPLOYER.manager,
        time: "14:21",
        original: "フォークリフトエリアをお願いします。",
        originalLanguage: "日本語",
        direction: "JA → ID",
        translation: "Tolong tangani area forklift.",
        surface: "mobile",
      },
      {
        id: "pr-3",
        author: "worker",
        authorName: WORKER.name,
        time: "14:23",
        original: "Ya, saya mengerti. Saya akan datang.",
        originalLanguage: "Bahasa Indonesia",
        direction: "ID → JA",
        translation: "はい、わかりました。伺います。",
      },
    ],
  },
  {
    conversationId: "ahmad-fauzi",
    lastActivity: "13 Jan",
    unreadCount: 0,
    languagePair: "JA ↔ ID",
    messages: [
      {
        id: "af-1",
        author: "worker",
        authorName: "Ahmad Fauzi",
        time: "09:40",
        original: "Permintaan tukar shift Senin depan",
        originalLanguage: "Bahasa Indonesia",
        direction: "ID → JA",
        translation: "来週の月曜日のシフト交換をお願いします。",
      },
      {
        id: "af-2",
        author: "manager",
        authorName: EMPLOYER.manager,
        time: "10:05",
        original: "確認しました。担当者と調整します。",
        originalLanguage: "日本語",
        direction: "JA → ID",
        translation:
          "Sudah saya cek. Akan saya koordinasikan dengan penanggung jawab.",
      },
    ],
  },
  {
    conversationId: "maria-santos",
    lastActivity: "12 Jan",
    unreadCount: 0,
    languagePair: "JA ↔ EN",
    messages: [
      {
        id: "ms-1",
        author: "worker",
        authorName: "Maria Santos",
        time: "16:12",
        original: "Inventory count selesai",
        originalLanguage: "Bahasa Indonesia",
        direction: "ID → JA",
        translation: "在庫カウントが完了しました。",
      },
      {
        id: "ms-2",
        author: "manager",
        authorName: EMPLOYER.manager,
        time: "16:30",
        original: "ありがとうございます。記録を確認します。",
        originalLanguage: "日本語",
        direction: "JA → ID",
        translation: "Terima kasih. Saya akan memeriksa catatannya.",
      },
    ],
  },
  {
    conversationId: "alex-morgan",
    lastActivity: "11 Jan",
    unreadCount: 0,
    languagePair: "JA ↔ EN",
    messages: [
      {
        id: "am-1",
        author: "worker",
        authorName: "Alex Morgan",
        time: "18:02",
        original: "Daily report submitted for today.",
        originalLanguage: "English",
        direction: "EN → JA",
        translation: "本日の日報を提出しました。",
      },
    ],
  },
  {
    conversationId: "dewi-anggraini",
    lastActivity: "09:15",
    unreadCount: 0,
    languagePair: "JA ↔ ID",
    messages: [
      {
        id: "da-1",
        author: "worker",
        authorName: "Dewi Anggraini",
        time: "09:15",
        original: "Laporan sudah saya kirim",
        originalLanguage: "Bahasa Indonesia",
        direction: "ID → JA",
        translation: "レポートを送信しました。",
      },
      {
        id: "da-2",
        author: "manager",
        authorName: EMPLOYER.manager,
        time: "09:20",
        original: "確認しました。ありがとうございます。",
        originalLanguage: "日本語",
        direction: "JA → ID",
        translation: "Sudah saya periksa. Terima kasih.",
      },
    ],
  },
];

/** EM-08 / MD-08 TEMPLATE chips. Chip labels localize (copy); the drafted
 *  Japanese and its Indonesian preview never do. */
export const MESSAGE_TEMPLATES: MessageTemplate[] = [
  {
    id: "daily-report-reminder",
    originalLines: [
      "明日の朝9時からのシフトを担当できますか？",
      "フォークリフトエリアもお願いします。",
    ],
    translationLines: [
      "Besok bisa menangani shift pagi mulai jam 9?",
      "Tolong tangani area forklift juga.",
    ],
    mobileOriginalLines: ["明日の朝9時のシフトを担当できますか？"],
    mobileTranslationLines: ["Besok bisa menangani shift pagi mulai jam 9?"],
  },
  {
    id: "shift-confirm",
    originalLines: ["明日のシフト時間を確認してください。"],
    translationLines: ["Mohon konfirmasi jam shift Anda besok."],
  },
  {
    id: "understanding",
    originalLines: ["内容を理解できたか教えてください。"],
    translationLines: ["Tolong beri tahu apakah Anda sudah memahami isinya."],
  },
];

export const DEFAULT_TEMPLATE_ID: MessageTemplateId = "daily-report-reminder";

/** MD-06 KPI row values (1225:23 · 27 · 31 · 35) and EM-06 stat tiles. */
export const COMMUNICATION_METRICS = {
  workerInitiated: "41%",
  managerResponse: "18 min",
  unread: "3",
  openFollowUp: "2",
} as const;

/** MD-08 context quad (1225:165 · 169 · 173 · 177). "Direct" and the unread
 *  count come from copy; the recipient, role and pair are data. */
export const COMPOSE_CONTEXT = {
  unreadCount: 1,
} as const;

/** EM-07B (797:237) and MD-07B (1225:288) delivery record timestamps. */
export const DELIVERY_RECORD = {
  /** EM-07B mobile record card. */
  deliveredAt: "14:24",
  /** MD-07B DELIVERED metric. */
  deliveredAtDesktop: "14:25",
} as const;

export const DEFAULT_CONVERSATION_ID = "putri-rahayu";

export function findConversation(
  id: string | undefined,
): ConversationSummary | undefined {
  if (!id) return undefined;
  return CONVERSATIONS.find((conversation) => conversation.id === id);
}

export function findThread(
  id: string | undefined,
): ConversationThread | undefined {
  if (!id) return undefined;
  return THREADS.find((thread) => thread.conversationId === id);
}

export function findTemplate(id: MessageTemplateId): MessageTemplate {
  return (
    MESSAGE_TEMPLATES.find((template) => template.id === id) ??
    MESSAGE_TEMPLATES[0]
  );
}

/** Reads a `?template=` value carried between compose → review → outcome. */
export function parseTemplateId(value: string | null): MessageTemplateId {
  const match = MESSAGE_TEMPLATES.find((template) => template.id === value);
  return match ? match.id : DEFAULT_TEMPLATE_ID;
}

export function conversationsFor(
  surface: Exclude<ConversationSurface, "all">,
): ConversationSummary[] {
  return CONVERSATIONS.filter(
    (conversation) =>
      conversation.surface === "all" || conversation.surface === surface,
  );
}
