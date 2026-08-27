import { defineSectionCopy } from "@/i18n/copy";

/** Replaces {name}-style tokens in a copy template. */
export function fill(
  template: string,
  vars: Record<string, string>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => vars[key] ?? match);
}

/** UI copy for section 13 · Chat (WD-57..WD-58 / mobile W-57..W-58).
 *  EN strings are verbatim from the Figma mocks. Message content, names,
 *  employer names, file names and timestamps live in chatMock.ts (data). */
export interface ChatCopy {
  hub: {
    title: string;
    /** "{employer} · Work communication" */
    subtitle: string;
    headlessSubtitle: string;
    headlessCardTitle: string;
    headlessCardBody: string;
    connectEmployer: string;
    conversationsLabel: string;
    conversationsTitle: string;
    needsReply: string;
    oneUnread: string;
    employerSupportDesk: string;
    workAdminSupport: string;
    noteTitle: string;
    noteBody: string;
    emptyTitle: string;
    emptyBody: string;
    emptyHelper: string;
    messageManager: string;
    employerSupport: string;
    readOnlyHistory: string;
    loadingSubtitle: string;
    headlessOfflineSubtitle: string;
    pastConversationsLabel: string;
    /** "{employer} · Employer support" */
    subtitleSupport: string;
  };
  banner: {
    offlineTitle: string;
    offlineBody: string;
    accessEnded: string;
    readOnlyTitle: string;
    readOnlyBody: string;
    offlineThreadBody: string;
    offlineSupportBody: string;
    offlineHeadlessBody: string;
    threadAccessEndedTitle: string;
    threadAccessEndedBody: string;
    /** WD-58C/58L page banner over the two panes. */
    threadOfflineBanner: string;
    /** WD-58D page banner over the two panes. */
    threadAccessEndedBanner: string;
    /** WD-57F third banner line. */
    offlineHeadlessDetail: string;
  };
  thread: {
    title: string;
    labelManager: string;
    labelWorker: string;
    labelEmployerSupport: string;
    labelOriginal: string;
    labelTranslated: string;
    labelTranslation: string;
    labelTranscript: string;
    autoTranslation: string;
    read: string;
    notSent: string;
    cached: string;
    accessEndedContext: string;
  };
  composer: {
    /** "Message {name}" */
    messagePlaceholder: string;
    messageSupportPlaceholder: string;
    addMessagePlaceholder: string;
    draftPreserved: string;
    messagingUnavailable: string;
    recordVoice: string;
    send: string;
  };
  attach: {
    menuTitle: string;
    photoTitle: string;
    photoBody: string;
    documentTitle: string;
    documentBody: string;
    pasteTitle: string;
    pasteBody: string;
    locationTitle: string;
    locationBody: string;
    readyToSend: string;
    remove: string;
  };
  voice: {
    recording: string;
    stopRecording: string;
    transcribingTitle: string;
    transcribingBody: string;
    processing: string;
    translationReady: string;
    review: string;
    tryAgain: string;
    readyCaption: string;
    reviewBeforeSending: string;
    reviewGateBody: string;
    failedTitle: string;
    failedBody: string;
    recordingPreserved: string;
    failedHelper: string;
  };
  sendFailed: {
    title: string;
    body: string;
    retrySend: string;
  };
  review: {
    title: string;
    body: string;
    editOriginal: string;
    sendTranslated: string;
  };
  unavailable: {
    title: string;
    originalKept: string;
    draftPreserved: string;
    subtitle: string;
    body: string;
    retryTranslation: string;
  };
}

export const CHAT_COPY = defineSectionCopy<ChatCopy>({
  en: {
    hub: {
      title: "Chat",
      subtitle: "{employer} · Work communication",
      headlessSubtitle:
        "Work messages are available when an employer connection is active.",
      headlessCardTitle: "No active employer connection",
      headlessCardBody:
        "Connect an employer to message your manager or employer support. Community/forum messaging is not part of this MVP.",
      connectEmployer: "Connect employer",
      conversationsLabel: "CONVERSATIONS",
      conversationsTitle: "Conversations",
      needsReply: "Needs reply",
      oneUnread: "1 unread",
      employerSupportDesk: "Employer support desk",
      workAdminSupport: "Work/admin support",
      noteTitle: "Original messages are always preserved",
      noteBody:
        "Translations help both sides communicate across languages without replacing the source message.",
      emptyTitle: "No conversations yet",
      emptyBody:
        "Work conversations will appear here when your employer starts a supported conversation.",
      emptyHelper:
        "Start with your manager or employer support. You can only message work contacts available through your active employer connection.",
      messageManager: "Message manager",
      employerSupport: "Employer support",
      readOnlyHistory: "read-only history",
      loadingSubtitle: "Loading your work conversations…",
      headlessOfflineSubtitle:
        "You’re offline. Employer connection is required before work messaging becomes available.",
      pastConversationsLabel: "PAST CONVERSATIONS",
      subtitleSupport: "{employer} · Employer support",
    },
    banner: {
      offlineTitle: "You’re offline",
      offlineBody:
        "You can read cached messages and keep a draft. New messages send only after you reconnect.",
      accessEnded: "Employer access has ended.",
      offlineThreadBody:
        "Cached messages remain visible. Your draft will not send until you reconnect.",
      offlineSupportBody:
        "Cached support messages remain visible. Drafts send after reconnecting.",
      offlineHeadlessBody:
        "Reconnect before starting an employer connection or work conversation.",
      threadAccessEndedTitle: "Work access ended",
      threadAccessEndedBody:
        "Conversation history remains available, but new messages are disabled.",
      readOnlyTitle: "Work messaging is read-only",
      readOnlyBody:
        "You can review existing conversation history from this employer, but you can no longer send new work messages.",
      threadOfflineBanner: "You are offline. Cached messages remain visible.",
      threadAccessEndedBanner:
        "Employer access ended. This conversation is read-only.",
      offlineHeadlessDetail:
        "You are offline. Chat requires an active employer connection and internet access.",
    },
    thread: {
      title: "Conversation",
      labelManager: "MANAGER",
      labelEmployerSupport: "EMPLOYER SUPPORT",
      labelWorker: "WORKER",
      labelOriginal: "ORIGINAL",
      labelTranslated: "TRANSLATED",
      labelTranslation: "TRANSLATION",
      labelTranscript: "TRANSCRIPT",
      autoTranslation: "auto translation",
      read: "Read",
      notSent: "Not sent",
      cached: "Cached",
      accessEndedContext: "employer access ended · read-only",
    },
    composer: {
      messagePlaceholder: "Message {name}",
      messageSupportPlaceholder: "Message employer support",
      addMessagePlaceholder: "Add a message…",
      draftPreserved: "Draft preserved",
      messagingUnavailable: "Messaging unavailable",
      recordVoice: "Record voice message",
      send: "Send",
    },
    attach: {
      menuTitle: "Add attachment",
      photoTitle: "Photo / image",
      photoBody: "Choose an image from your device",
      documentTitle: "Document / PDF",
      documentBody: "Attach a document for review",
      pasteTitle: "Paste text",
      pasteBody: "Add copied text without a file",
      locationTitle: "Location",
      locationBody: "Share location only when needed",
      readyToSend: "Ready to send",
      remove: "Remove",
    },
    voice: {
      recording: "Recording",
      stopRecording: "Stop recording",
      transcribingTitle: "Transcribing audio",
      transcribingBody: "Recording saved while we process it",
      processing: "Processing…",
      translationReady: "Translation ready",
      review: "Review",
      tryAgain: "Try again",
      readyCaption:
        "Review before sending. Transcript + translation must be reviewed first. Nothing is sent automatically.",
      reviewBeforeSending: "Review before sending",
      reviewGateBody:
        "Transcript + translation must be reviewed first. Nothing is sent automatically.",
      failedTitle: "Couldn’t process audio",
      failedBody: "Recording saved — retry when ready",
      recordingPreserved: "Recording preserved",
      failedHelper: "Retry processing without losing the recording.",
    },
    sendFailed: {
      title: "Message not sent",
      body: "Original and translation are preserved. Retry will not duplicate the message.",
      retrySend: "Retry send",
    },
    review: {
      title: "Important translated message",
      body: "Original remains canonical. Confirm the Japanese translation before sending.",
      editOriginal: "Edit original",
      sendTranslated: "Send translated",
    },
    unavailable: {
      title: "Translation unavailable",
      originalKept: "Translation unavailable · original kept",
      draftPreserved: "Draft preserved",
      subtitle: "Couldn’t translate yet",
      body: "Your original message is safe. Retry translation before sending this translated work message.",
      retryTranslation: "Retry translation",
    },
  },
  id: {
    hub: {
      title: "Obrolan",
      subtitle: "{employer} · Komunikasi kerja",
      headlessSubtitle:
        "Pesan kerja tersedia saat koneksi pemberi kerja aktif.",
      headlessCardTitle: "Tidak ada koneksi pemberi kerja aktif",
      headlessCardBody:
        "Hubungkan pemberi kerja untuk mengirim pesan ke manajer atau dukungan pemberi kerja. Pesan komunitas/forum bukan bagian dari MVP ini.",
      connectEmployer: "Hubungkan pemberi kerja",
      conversationsLabel: "PERCAKAPAN",
      conversationsTitle: "Percakapan",
      needsReply: "Perlu balasan",
      oneUnread: "1 belum dibaca",
      employerSupportDesk: "Meja dukungan pemberi kerja",
      workAdminSupport: "Dukungan kerja/administrasi",
      noteTitle: "Pesan asli selalu disimpan",
      noteBody:
        "Terjemahan membantu kedua pihak berkomunikasi lintas bahasa tanpa menggantikan pesan sumber.",
      emptyTitle: "Belum ada percakapan",
      emptyBody:
        "Percakapan kerja akan muncul di sini saat pemberi kerja memulai percakapan yang didukung.",
      emptyHelper:
        "Mulai dengan manajer atau dukungan pemberi kerja Anda. Anda hanya dapat mengirim pesan ke kontak kerja yang tersedia melalui koneksi pemberi kerja aktif.",
      messageManager: "Kirim pesan ke manajer",
      employerSupport: "Dukungan pemberi kerja",
      readOnlyHistory: "riwayat hanya-baca",
      loadingSubtitle: "Memuat percakapan kerja Anda…",
      headlessOfflineSubtitle:
        "Anda sedang offline. Koneksi pemberi kerja diperlukan sebelum pesan kerja tersedia.",
      pastConversationsLabel: "PERCAKAPAN SEBELUMNYA",
      subtitleSupport: "{employer} · Dukungan pemberi kerja",
    },
    banner: {
      offlineTitle: "Anda sedang offline",
      offlineBody:
        "Anda dapat membaca pesan tersimpan dan menyimpan draf. Pesan baru terkirim hanya setelah Anda tersambung kembali.",
      accessEnded: "Akses pemberi kerja telah berakhir.",
      offlineThreadBody:
        "Pesan tersimpan tetap terlihat. Draf Anda tidak akan terkirim sampai Anda tersambung kembali.",
      offlineSupportBody:
        "Pesan dukungan tersimpan tetap terlihat. Draf terkirim setelah tersambung kembali.",
      offlineHeadlessBody:
        "Sambungkan kembali sebelum memulai koneksi pemberi kerja atau percakapan kerja.",
      threadAccessEndedTitle: "Akses kerja berakhir",
      threadAccessEndedBody:
        "Riwayat percakapan tetap tersedia, tetapi pesan baru dinonaktifkan.",
      readOnlyTitle: "Pesan kerja hanya-baca",
      readOnlyBody:
        "Anda dapat meninjau riwayat percakapan dari pemberi kerja ini, tetapi tidak dapat lagi mengirim pesan kerja baru.",
      threadOfflineBanner:
        "Anda sedang offline. Pesan tersimpan tetap terlihat.",
      threadAccessEndedBanner:
        "Akses pemberi kerja berakhir. Percakapan ini hanya-baca.",
      offlineHeadlessDetail:
        "Anda sedang offline. Obrolan memerlukan koneksi pemberi kerja aktif dan akses internet.",
    },
    thread: {
      title: "Percakapan",
      labelManager: "MANAJER",
      labelEmployerSupport: "DUKUNGAN PEMBERI KERJA",
      labelWorker: "PEKERJA",
      labelOriginal: "ASLI",
      labelTranslated: "TERJEMAHAN",
      labelTranslation: "TERJEMAHAN",
      labelTranscript: "TRANSKRIP",
      autoTranslation: "terjemahan otomatis",
      read: "Dibaca",
      notSent: "Belum terkirim",
      cached: "Tersimpan",
      accessEndedContext: "akses pemberi kerja berakhir · hanya-baca",
    },
    composer: {
      messagePlaceholder: "Kirim pesan ke {name}",
      messageSupportPlaceholder: "Kirim pesan ke dukungan pemberi kerja",
      addMessagePlaceholder: "Tambahkan pesan…",
      draftPreserved: "Draf tersimpan",
      messagingUnavailable: "Pesan tidak tersedia",
      recordVoice: "Rekam pesan suara",
      send: "Kirim",
    },
    attach: {
      menuTitle: "Tambah lampiran",
      photoTitle: "Foto / gambar",
      photoBody: "Pilih gambar dari perangkat Anda",
      documentTitle: "Dokumen / PDF",
      documentBody: "Lampirkan dokumen untuk ditinjau",
      pasteTitle: "Tempel teks",
      pasteBody: "Tambahkan teks salinan tanpa file",
      locationTitle: "Lokasi",
      locationBody: "Bagikan lokasi hanya saat diperlukan",
      readyToSend: "Siap dikirim",
      remove: "Hapus",
    },
    voice: {
      recording: "Merekam",
      stopRecording: "Hentikan rekaman",
      transcribingTitle: "Mentranskripsi audio",
      transcribingBody: "Rekaman disimpan selama kami memprosesnya",
      processing: "Memproses…",
      translationReady: "Terjemahan siap",
      review: "Tinjau",
      tryAgain: "Coba lagi",
      readyCaption:
        "Tinjau sebelum mengirim. Transkrip + terjemahan harus ditinjau lebih dulu. Tidak ada yang dikirim otomatis.",
      reviewBeforeSending: "Tinjau sebelum mengirim",
      reviewGateBody:
        "Transkrip + terjemahan harus ditinjau lebih dulu. Tidak ada yang dikirim otomatis.",
      failedTitle: "Audio tidak dapat diproses",
      failedBody: "Rekaman disimpan — coba lagi saat siap",
      recordingPreserved: "Rekaman tetap tersimpan",
      failedHelper: "Coba proses lagi tanpa kehilangan rekaman.",
    },
    sendFailed: {
      title: "Pesan tidak terkirim",
      body: "Pesan asli dan terjemahan tetap tersimpan. Mencoba lagi tidak akan menggandakan pesan.",
      retrySend: "Kirim ulang",
    },
    review: {
      title: "Pesan terjemahan penting",
      body: "Pesan asli tetap menjadi acuan. Konfirmasi terjemahan bahasa Jepang sebelum mengirim.",
      editOriginal: "Ubah pesan asli",
      sendTranslated: "Kirim terjemahan",
    },
    unavailable: {
      title: "Terjemahan tidak tersedia",
      originalKept: "Terjemahan tidak tersedia · pesan asli disimpan",
      draftPreserved: "Draf tersimpan",
      subtitle: "Belum dapat menerjemahkan",
      body: "Pesan asli Anda aman. Coba terjemahkan lagi sebelum mengirim pesan kerja terjemahan ini.",
      retryTranslation: "Coba terjemahkan lagi",
    },
  },
  ja: {
    hub: {
      title: "チャット",
      subtitle: "{employer} · 業務コミュニケーション",
      headlessSubtitle:
        "業務メッセージは雇用主との接続が有効なときに利用できます。",
      headlessCardTitle: "有効な雇用主接続がありません",
      headlessCardBody:
        "雇用主と接続すると、マネージャーや雇用主サポートにメッセージを送れます。コミュニティ/フォーラムのメッセージはこのMVPには含まれません。",
      connectEmployer: "雇用主と接続",
      conversationsLabel: "会話",
      conversationsTitle: "会話",
      needsReply: "要返信",
      oneUnread: "未読1件",
      employerSupportDesk: "雇用主サポートデスク",
      workAdminSupport: "業務・事務サポート",
      noteTitle: "原文メッセージは常に保存されます",
      noteBody:
        "翻訳は原文を置き換えることなく、言語をこえた双方のコミュニケーションを助けます。",
      emptyTitle: "まだ会話がありません",
      emptyBody:
        "雇用主が対応する会話を開始すると、ここに業務の会話が表示されます。",
      emptyHelper:
        "マネージャーまたは雇用主サポートから始めましょう。メッセージを送れるのは、有効な雇用主接続を通じて利用できる業務上の連絡先のみです。",
      messageManager: "マネージャーにメッセージ",
      employerSupport: "雇用主サポート",
      readOnlyHistory: "閲覧のみの履歴",
      loadingSubtitle: "業務の会話を読み込み中…",
      headlessOfflineSubtitle:
        "オフラインです。業務メッセージを利用するには雇用主との接続が必要です。",
      pastConversationsLabel: "過去の会話",
      subtitleSupport: "{employer} · 雇用主サポート",
    },
    banner: {
      offlineTitle: "オフラインです",
      offlineBody:
        "保存済みのメッセージを読み、下書きを保持できます。新しいメッセージは再接続後に送信されます。",
      accessEnded: "雇用主のアクセスは終了しました。",
      offlineThreadBody:
        "保存済みのメッセージは表示されます。再接続するまで下書きは送信されません。",
      offlineSupportBody:
        "保存済みのサポートメッセージは表示されます。下書きは再接続後に送信されます。",
      offlineHeadlessBody:
        "雇用主との接続や業務の会話を始める前に再接続してください。",
      threadAccessEndedTitle: "業務アクセスが終了しました",
      threadAccessEndedBody:
        "会話履歴は引き続き確認できますが、新しいメッセージは送信できません。",
      readOnlyTitle: "業務メッセージは閲覧のみです",
      readOnlyBody:
        "この雇用主との会話履歴は確認できますが、新しい業務メッセージは送信できません。",
      threadOfflineBanner:
        "オフラインです。保存済みのメッセージは表示されます。",
      threadAccessEndedBanner:
        "雇用主のアクセスが終了しました。この会話は閲覧のみです。",
      offlineHeadlessDetail:
        "オフラインです。チャットには有効な雇用主との接続とインターネット接続が必要です。",
    },
    thread: {
      title: "会話",
      labelManager: "マネージャー",
      labelEmployerSupport: "雇用主サポート",
      labelWorker: "ワーカー",
      labelOriginal: "原文",
      labelTranslated: "翻訳",
      labelTranslation: "翻訳",
      labelTranscript: "文字起こし",
      autoTranslation: "自動翻訳",
      read: "既読",
      notSent: "未送信",
      cached: "保存済み",
      accessEndedContext: "雇用主のアクセス終了 · 閲覧のみ",
    },
    composer: {
      messagePlaceholder: "{name}にメッセージ",
      messageSupportPlaceholder: "雇用主サポートにメッセージ",
      addMessagePlaceholder: "メッセージを追加…",
      draftPreserved: "下書きは保存済み",
      messagingUnavailable: "メッセージを利用できません",
      recordVoice: "音声メッセージを録音",
      send: "送信",
    },
    attach: {
      menuTitle: "添付を追加",
      photoTitle: "写真 / 画像",
      photoBody: "端末から画像を選択",
      documentTitle: "書類 / PDF",
      documentBody: "確認用の書類を添付",
      pasteTitle: "テキストを貼り付け",
      pasteBody: "ファイルなしでコピーしたテキストを追加",
      locationTitle: "位置情報",
      locationBody: "必要なときのみ位置情報を共有",
      readyToSend: "送信準備完了",
      remove: "削除",
    },
    voice: {
      recording: "録音中",
      stopRecording: "録音を停止",
      transcribingTitle: "音声を文字起こし中",
      transcribingBody: "処理中も録音は保存されています",
      processing: "処理中…",
      translationReady: "翻訳が完了しました",
      review: "確認",
      tryAgain: "再試行",
      readyCaption:
        "送信前に確認してください。文字起こしと翻訳は必ず確認が必要です。自動では何も送信されません。",
      reviewBeforeSending: "送信前に確認",
      reviewGateBody:
        "文字起こしと翻訳は必ず確認が必要です。自動では何も送信されません。",
      failedTitle: "音声を処理できませんでした",
      failedBody: "録音は保存済み — 準備ができたら再試行してください",
      recordingPreserved: "録音は保持されています",
      failedHelper: "録音を失わずに処理を再試行できます。",
    },
    sendFailed: {
      title: "メッセージが送信されませんでした",
      body: "原文と翻訳は保存されています。再試行してもメッセージは重複しません。",
      retrySend: "再送信",
    },
    review: {
      title: "重要な翻訳メッセージ",
      body: "原文が正となります。送信前に日本語訳を確認してください。",
      editOriginal: "原文を編集",
      sendTranslated: "翻訳を送信",
    },
    unavailable: {
      title: "翻訳を利用できません",
      originalKept: "翻訳を利用できません · 原文を保持",
      draftPreserved: "下書きは保存済み",
      subtitle: "まだ翻訳できません",
      body: "原文メッセージは安全です。この翻訳付き業務メッセージを送る前に、翻訳を再試行してください。",
      retryTranslation: "翻訳を再試行",
    },
  },
});
