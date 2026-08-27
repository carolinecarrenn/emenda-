import { defineSectionCopy } from "@/i18n/copy";

/**
 * UI copy for the EMENDA Assistant tab (Figma WD-59 desktop · W-59 mobile).
 * EN strings are the Figma mock text verbatim; ID/JA are faithful translations
 * kept consistent with i18n/common.ts vocabulary. Mock data (chat titles,
 * previews, message content, file names, transcripts, source names/domains)
 * stays raw in assistantMock.ts.
 */
export interface AssistantCopy {
  /** Workspace header + mobile top-bar title. */
  workspaceTitle: string;
  /** Desktop rail title and mobile "Chats" pill button. */
  chats: string;
  /** "New" pill button. */
  newChat: string;
  /** Desktop rail / mobile history search placeholder. */
  searchChats: string;
  /** Relative dates on history rows. */
  today: string;
  yesterday: string;
  /** Empty / new-chat state. */
  greeting: string;
  greetingSub: string;
  promptExplain: string;
  promptPrepare: string;
  promptReply: string;
  /** Composer. */
  askPlaceholder: string;
  addMessagePlaceholder: string;
  sendLabel: string;
  micLabel: string;
  /** Thinking indicator (desktop pill · mobile label). */
  thinking: string;
  thinkingMobile: string;
  /** Source citation. */
  sourceChip: string;
  officialSource: string;
  sourceDisclaimer: string;
  backToChat: string;
  /** Attachment menu. */
  addAttachment: string;
  photoTitle: string;
  photoDesc: string;
  documentTitle: string;
  documentDesc: string;
  pasteTitle: string;
  pasteDesc: string;
  locationTitle: string;
  locationDesc: string;
  /** Attachment ready. */
  attachmentMetaDesktop: string;
  attachmentMetaMobile: string;
  remove: string;
  attachmentHelper: string;
  /** Voice review. */
  voiceTitle: string;
  voiceBody: string;
  useTranscript: string;
  voiceNote: string;
  voiceTranscriptLabel: string;
  voiceTranslatedLabel: string;
  /** Offline. */
  offlineBanner: string;
  /** Send failed. */
  sendFailedBanner: string;
  sendFailedTitle: string;
  sendFailedDesc: string;
  /** Chat history view. */
  historyTitle: string;
  yourChats: string;
  searchConversations: string;
  recent: string;
}

export const ASSISTANT_COPY = defineSectionCopy<AssistantCopy>({
  en: {
    workspaceTitle: "Emenda Assistant",
    chats: "Chats",
    newChat: "New",
    searchChats: "Search chats",
    today: "Today",
    yesterday: "Yesterday",
    greeting: "How can I help you today?",
    greetingSub:
      "Ask about work, life in Japan, documents, messages, or anything else.",
    promptExplain: "Explain this message",
    promptPrepare: "What should I prepare next?",
    promptReply: "Help me write a reply",
    askPlaceholder: "Ask Emenda",
    addMessagePlaceholder: "Add a message…",
    sendLabel: "Send",
    micLabel: "Voice input",
    thinking: "Thinking…",
    thinkingMobile: "Thinking",
    sourceChip: "1 source",
    officialSource: "OFFICIAL SOURCE",
    sourceDisclaimer:
      "Use the original source to verify current requirements and whether they apply to your city or situation.",
    backToChat: "Back to chat",
    addAttachment: "Add attachment",
    photoTitle: "Photo / image",
    photoDesc: "Choose an image from your device",
    documentTitle: "Document / PDF",
    documentDesc: "Attach a document for review",
    pasteTitle: "Paste text",
    pasteDesc: "Add copied text without a file",
    locationTitle: "Location",
    locationDesc: "Share location only when needed",
    attachmentMetaDesktop: "PDF · Ready",
    attachmentMetaMobile: "PDF · ready to send with your next message",
    remove: "Remove",
    attachmentHelper:
      "Attachment ready. Add a message, then send when you’re ready.",
    voiceTitle: "Review voice input",
    voiceBody:
      "Review the transcript before sending it to Emenda. Nothing is sent automatically.",
    useTranscript: "Use transcript",
    voiceNote: "I transcribed your voice. Review or edit it before sending.",
    voiceTranscriptLabel: "VOICE TRANSCRIPT",
    voiceTranslatedLabel: "TRANSLATED · 日本語",
    offlineBanner:
      "You are offline. Cached chats remain available, but new answers require a connection.",
    sendFailedBanner: "Message not sent. Your text remains in the composer.",
    sendFailedTitle: "Message not sent",
    sendFailedDesc:
      "Your draft is preserved. Retry without creating a duplicate request.",
    historyTitle: "Chat history",
    yourChats: "Your chats",
    searchConversations: "Search conversations",
    recent: "RECENT",
  },
  id: {
    workspaceTitle: "Emenda Assistant",
    chats: "Obrolan",
    newChat: "Baru",
    searchChats: "Cari obrolan",
    today: "Hari ini",
    yesterday: "Kemarin",
    greeting: "Ada yang bisa saya bantu hari ini?",
    greetingSub:
      "Tanyakan tentang pekerjaan, kehidupan di Jepang, dokumen, pesan, atau hal lainnya.",
    promptExplain: "Jelaskan pesan ini",
    promptPrepare: "Apa yang harus saya siapkan selanjutnya?",
    promptReply: "Bantu saya menulis balasan",
    askPlaceholder: "Tanya Emenda",
    addMessagePlaceholder: "Tambahkan pesan…",
    sendLabel: "Kirim",
    micLabel: "Input suara",
    thinking: "Berpikir…",
    thinkingMobile: "Berpikir",
    sourceChip: "1 sumber",
    officialSource: "SUMBER RESMI",
    sourceDisclaimer:
      "Gunakan sumber asli untuk memastikan persyaratan terbaru dan apakah berlaku untuk kota atau situasi Anda.",
    backToChat: "Kembali ke obrolan",
    addAttachment: "Tambah lampiran",
    photoTitle: "Foto / gambar",
    photoDesc: "Pilih gambar dari perangkat Anda",
    documentTitle: "Dokumen / PDF",
    documentDesc: "Lampirkan dokumen untuk ditinjau",
    pasteTitle: "Tempel teks",
    pasteDesc: "Tambahkan teks salinan tanpa file",
    locationTitle: "Lokasi",
    locationDesc: "Bagikan lokasi hanya saat diperlukan",
    attachmentMetaDesktop: "PDF · Siap",
    attachmentMetaMobile: "PDF · siap dikirim bersama pesan berikutnya",
    remove: "Hapus",
    attachmentHelper:
      "Lampiran siap. Tambahkan pesan, lalu kirim saat Anda siap.",
    voiceTitle: "Tinjau input suara",
    voiceBody:
      "Tinjau transkrip sebelum mengirimkannya ke Emenda. Tidak ada yang dikirim secara otomatis.",
    useTranscript: "Gunakan transkrip",
    voiceNote:
      "Saya sudah menyalin suara Anda. Tinjau atau ubah sebelum mengirim.",
    voiceTranscriptLabel: "TRANSKRIP SUARA",
    voiceTranslatedLabel: "TERJEMAHAN · 日本語",
    offlineBanner:
      "Anda sedang offline. Obrolan tersimpan tetap tersedia, tetapi jawaban baru membutuhkan koneksi.",
    sendFailedBanner:
      "Pesan tidak terkirim. Teks Anda tetap ada di kolom pesan.",
    sendFailedTitle: "Pesan tidak terkirim",
    sendFailedDesc:
      "Draf Anda tersimpan. Coba lagi tanpa membuat permintaan ganda.",
    historyTitle: "Riwayat obrolan",
    yourChats: "Obrolan Anda",
    searchConversations: "Cari percakapan",
    recent: "TERBARU",
  },
  ja: {
    workspaceTitle: "Emenda Assistant",
    chats: "チャット",
    newChat: "新規",
    searchChats: "チャットを検索",
    today: "今日",
    yesterday: "昨日",
    greeting: "今日は何をお手伝いしましょうか？",
    greetingSub:
      "仕事、日本での生活、書類、メッセージなど、何でも質問してください。",
    promptExplain: "このメッセージを説明して",
    promptPrepare: "次に何を準備すればいい？",
    promptReply: "返信の作成を手伝って",
    askPlaceholder: "Emendaに質問",
    addMessagePlaceholder: "メッセージを追加…",
    sendLabel: "送信",
    micLabel: "音声入力",
    thinking: "考え中…",
    thinkingMobile: "考え中",
    sourceChip: "1件の情報源",
    officialSource: "公式情報源",
    sourceDisclaimer:
      "最新の要件と、お住まいの市区町村や状況に当てはまるかどうかは、必ず元の情報源でご確認ください。",
    backToChat: "チャットに戻る",
    addAttachment: "添付を追加",
    photoTitle: "写真 / 画像",
    photoDesc: "端末から画像を選択",
    documentTitle: "書類 / PDF",
    documentDesc: "確認用に書類を添付",
    pasteTitle: "テキストを貼り付け",
    pasteDesc: "ファイルなしでコピーしたテキストを追加",
    locationTitle: "位置情報",
    locationDesc: "必要なときだけ位置情報を共有",
    attachmentMetaDesktop: "PDF · 準備完了",
    attachmentMetaMobile: "PDF · 次のメッセージと一緒に送信できます",
    remove: "削除",
    attachmentHelper:
      "添付の準備ができました。メッセージを追加して、準備ができたら送信してください。",
    voiceTitle: "音声入力を確認",
    voiceBody:
      "Emendaに送信する前に文字起こしを確認してください。自動では何も送信されません。",
    useTranscript: "文字起こしを使用",
    voiceNote:
      "音声を文字起こししました。送信する前に確認または編集してください。",
    voiceTranscriptLabel: "音声の文字起こし",
    voiceTranslatedLabel: "翻訳 · 日本語",
    offlineBanner:
      "オフラインです。保存済みのチャットは利用できますが、新しい回答には接続が必要です。",
    sendFailedBanner:
      "メッセージは送信されませんでした。テキストは入力欄に残っています。",
    sendFailedTitle: "メッセージ未送信",
    sendFailedDesc:
      "下書きは保持されています。重複リクエストを作らずに再試行できます。",
    historyTitle: "チャット履歴",
    yourChats: "あなたのチャット",
    searchConversations: "会話を検索",
    recent: "最近",
  },
});
