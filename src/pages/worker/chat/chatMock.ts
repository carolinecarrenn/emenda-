/** Mock data for section 13 · Chat (Figma WD-57..WD-58 / mobile W-57..W-58).
 *  Message bodies, person names, language labels, timestamps and file names are
 *  user/mock DATA — they are never translated by the i18n layer. */

export type ConversationId = "sato" | "support";

/** Language name printed inside the bilingual bubble labels — mock data. */
export const LANG_JA = "日本語";
export const LANG_ID = "Bahasa Indonesia";

export interface ChatMessage {
  id: string;
  /** "manager" = incoming (left) · "worker" = outgoing (right). */
  side: "manager" | "worker";
  originalLanguage: string;
  original: string;
  translatedLanguage: string;
  translated: string;
  time: string;
}

export interface ChatConversation {
  id: ConversationId;
  /** Avatar initials (WD-57A: SK / ES). */
  initials: string;
  /** Person name — raw, never translated. `null` = title comes from copy. */
  personName: string | null;
  /** Language of this contact, printed in the meta line. */
  language: string;
  /** Last message preview — raw message content. */
  preview: string;
  badge: "needs-reply" | "unread";
  messages: ChatMessage[];
}

export const SATO_CONVERSATION: ChatConversation = {
  id: "sato",
  initials: "SK",
  personName: "Sato Kenji",
  language: LANG_JA,
  preview: "明日の朝9時からお願いします。",
  badge: "needs-reply",
  messages: [
    {
      id: "m1",
      side: "manager",
      originalLanguage: LANG_JA,
      original: "明日の朝7時から作業を開始してください。",
      translatedLanguage: LANG_ID,
      translated: "Besok mulai bekerja pukul 07.00.",
      time: "14:29",
    },
    {
      id: "m2",
      side: "worker",
      originalLanguage: LANG_ID,
      original: "Baik, saya mengerti. Besok saya mulai pukul 07.00.",
      translatedLanguage: LANG_JA,
      translated: "はい、わかりました。明日は7時から始めます。",
      time: "14:28",
    },
  ],
};

export const SUPPORT_CONVERSATION: ChatConversation = {
  id: "support",
  initials: "ES",
  personName: null,
  language: LANG_JA,
  preview: "Residence card update received.",
  badge: "unread",
  messages: [
    {
      id: "s1",
      side: "manager",
      originalLanguage: LANG_JA,
      original: "在留カードの更新書類を受け取りました。確認後にご連絡します。",
      translatedLanguage: LANG_ID,
      translated:
        "Dokumen pembaruan kartu izin tinggal sudah kami terima. Kami akan menghubungi Anda setelah diperiksa.",
      time: "10:12",
    },
    {
      id: "s2",
      side: "worker",
      originalLanguage: LANG_ID,
      original: "Terima kasih. Apakah ada dokumen lain yang perlu saya siapkan?",
      translatedLanguage: LANG_JA,
      translated: "ありがとうございます。他に準備が必要な書類はありますか？",
      time: "10:15",
    },
  ],
};

export const CONVERSATIONS: ChatConversation[] = [
  SATO_CONVERSATION,
  SUPPORT_CONVERSATION,
];

export function findConversation(id: string | null): ChatConversation {
  return CONVERSATIONS.find((item) => item.id === id) ?? SATO_CONVERSATION;
}

/** Unsent draft kept in the composer across WD-58A / 58B / 58N. */
export const DRAFT_MESSAGE = "Besok saya bisa datang pukul 9.";

/** WD-58H — voice transcript + its Japanese translation. */
export const VOICE_TRANSCRIPT = {
  transcript: "Besok saya bisa datang pukul 9.",
  translation: "明日は9時に行けます。",
} as const;

/** WD-58F — live recording counter shown next to "Recording". */
export const RECORDING_TIME = "00:12";

/** WD-58J — the important-message translation review gate. */
export const IMPORTANT_REVIEW = {
  original: "Besok saya masuk shift pagi.",
  translation: "明日は朝のシフトです。",
} as const;

/** WD-58M — attachment picked from the WD-58E menu. */
export const READY_ATTACHMENT = {
  fileName: "residence-card.pdf",
  size: "240 KB",
} as const;

/**
 * Stubbed translation engine for the prototype: the mocks ship fixed
 * Indonesian↔Japanese pairs, so a composed message is matched against them and
 * otherwise falls back to the WD-58J pair. Message content is DATA — it is
 * never routed through i18n.
 */
export function stubTranslation(original: string): string {
  const text = original.trim();
  if (text === VOICE_TRANSCRIPT.transcript) return VOICE_TRANSCRIPT.translation;
  if (text === DRAFT_MESSAGE) return VOICE_TRANSCRIPT.translation;
  return IMPORTANT_REVIEW.translation;
}

/** Clock stamp for a message the worker sends in-session (mock data). */
export function nowStamp(): string {
  const now = new Date();
  return `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
}
