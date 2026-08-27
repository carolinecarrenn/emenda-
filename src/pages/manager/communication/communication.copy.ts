import { defineSectionCopy } from "@/i18n/copy";

/**
 * Manager · Communication section copy
 * (Figma EM-06/07/08/08A/07B/07C · MD-06/07/08/08A/07B/07C).
 * EN is the Figma text verbatim; ID and JA are faithful translations.
 *
 * Message bodies, person names, EMENDA IDs and timestamps live in
 * `communicationData.ts` — they are data and are never translated here.
 * Language names printed as fixed labels inside a block heading
 * ("MANAGER ORIGINAL · 日本語", "TRANSLATED · Bahasa Indonesia") stay in
 * their source script in every dictionary, exactly as the mocks show them.
 */
export interface CommunicationCopy {
  list: {
    subtitle: string;
    subtitleMobile: string;
    kpis: { label: string; caption: string }[];
    tiles: { label: string; caption: string }[];
    searchPlaceholder: string;
    searchPlaceholderMobile: string;
    filters: {
      all: string;
      unread: string;
      needsReply: string;
      broadcast: string;
    };
    mobileFilters: { all: string; unread: string; followUp: string };
    send: string;
    conversations: string;
    meta: { unread: string; followUp: string; read: string };
    noMatch: string;
    preview: {
      workerLine: string;
      managerOriginal: string;
      translated: string;
      workerOriginal: string;
      openConversation: string;
    };
    privacyDesktop: string;
    privacyMobileLine1: string;
    privacyMobileLine2: string;
  };
  thread: {
    title: string;
    subtitle: string;
    contextLine: string;
    translateOn: string;
    desktopMeta: string;
    statusLeft: string;
    statusRight: string;
    conversationsTitle: string;
    miniSearchPlaceholder: string;
    miniMetaUnread: string;
    quickActions: {
      report: string;
      followUp: string;
      worker: string;
      workerDetail: string;
    };
    replyTo: string;
    replyPlaceholder: string;
    recordLabel: string;
    sendLabel: string;
    footnoteMobile: string;
    footnoteDesktop: string;
    privacyMobile: string;
    privacyDesktop: string;
    notFound: string;
    notFoundTitle: string;
    notFoundSubtitle: string;
    notFoundBody: string;
    notFoundBoundary: string;
    notFoundBack: string;
  };
  compose: {
    title: string;
    titleDesktop: string;
    subtitle: string;
    subtitleDesktop: string;
    recipientContext: string;
    templateLabel: string;
    templates: {
      dailyReportReminder: string;
      shiftConfirm: string;
      understanding: string;
    };
    messageLabel: string;
    managerOriginal: string;
    originalPreserved: string;
    messageAriaLabel: string;
    translationPreviewLabel: string;
    translationPreviewDesktop: string;
    previewCaption: string;
    beforeSending: string;
    beforeSendingChecks: string[];
    contextLabel: string;
    contextLine: string;
    sendMessage: string;
    footnote: string;
    context: {
      recipientLabel: string;
      languageLabel: string;
      languageCaption: string;
      messageTypeLabel: string;
      messageTypeValue: string;
      messageTypeCaption: string;
      contextLabel: string;
      contextValue: string;
      contextCaption: string;
    };
    card: {
      title: string;
      recipient: string;
      originalLanguage: string;
      originalLanguageValue: string;
      template: string;
      message: string;
    };
    panel: {
      title: string;
      checks: string[];
      humanReviewTitle: string;
      humanReviewBody: string;
      reviewCta: string;
      backCta: string;
      demoFailureCta: string;
    };
  };
  review: {
    title: string;
    titleDesktop: string;
    subtitle: string;
    subtitleDesktop: string;
    recipient: string;
    recipientLine: string;
    contextLine: string;
    originalLabel: string;
    originalLabelDesktop: string;
    /** EM-08A card heading above the Japanese line (994:2864). */
    originalHeading: string;
    originalCaption: string;
    translationLabel: string;
    /** EM-08A card heading above the Indonesian line (994:2868). */
    translationHeading: string;
    workerPreviewLabel: string;
    workerPreviewCaption: string;
    sendCheck: string;
    sendCheckLines: string[];
    checklistLabel: string;
    /** MD-08A REVIEW CHECKLIST, two-up in reading order (1225:253–256). */
    checklistLines: string[];
    responsibility: string;
    responsibilityDesktop: string;
    sendMessage: string;
    backToEdit: string;
  };
  sent: {
    title: string;
    titleDesktop: string;
    subtitle: string;
    subtitleDesktop: string;
    chip: string;
    badge: string;
    headline: string;
    body: string;
    metrics: { label: string; value: string; caption: string }[];
    deliveredLine1: string;
    deliveredLine2: string;
    deliveryTitle: string;
    deliveryLine1: string;
    deliveryLine2: string;
    recordTitle: string;
    recordBody: string;
    nextStepTitle: string;
    nextStepBody: string;
    openConversation: string;
    createFollowUp: string;
    createFollowUpDesktop: string;
    boundaryDesktop: string;
  };
  failed: {
    title: string;
    titleDesktop: string;
    subtitle: string;
    subtitleDesktop: string;
    chip: string;
    bannerTitle: string;
    bannerBody: string;
    failedTitle: string;
    failedBody: string;
    draftTitle: string;
    draftLabelDesktop: string;
    draftBody: string;
    noSuccessTitle: string;
    noSuccessBody: string;
    beforeRetryTitle: string;
    beforeRetryLabelDesktop: string;
    beforeRetryDesktop: string;
    beforeRetryLine1: string;
    beforeRetryLine2: string;
    retry: string;
    backToConversation: string;
    followUpInstead: string;
    boundaryDesktop: string;
  };
  states: {
    loadingLabel: string;
    offlineTitle: string;
    offlineBody: string;
    offlineNote: string;
    emptyTitle: string;
    emptyBody: string;
    emptyCta: string;
  };
}

export const COMMUNICATION_COPY = defineSectionCopy<CommunicationCopy>({
  en: {
    list: {
      subtitle:
        "Encrypted messaging · original text preserved · translation preview enabled.",
      subtitleMobile: "Worker communication · original + translation preserved",
      kpis: [
        { label: "WORKER-INITIATED", caption: "current facility" },
        { label: "MANAGER RESPONSE", caption: "median" },
        { label: "UNREAD", caption: "1 needs reply" },
        { label: "OPEN FOLLOW-UP", caption: "from messages" },
      ],
      tiles: [
        { label: "WORKER-INITIATED", caption: "worker-led" },
        { label: "MANAGER RESPONSE", caption: "average" },
      ],
      searchPlaceholder: "Search conversations…",
      searchPlaceholderMobile: "Search worker or conversation",
      filters: {
        all: "All",
        unread: "Unread",
        needsReply: "Needs reply",
        broadcast: "Broadcast",
      },
      mobileFilters: {
        all: "All {count}",
        unread: "Unread {count}",
        followUp: "Follow-up {count}",
      },
      send: "Send",
      conversations: "CONVERSATIONS",
      meta: { unread: "{count} unread", followUp: "follow-up", read: "read" },
      noMatch: "No conversations match this filter.",
      preview: {
        workerLine: "Worker · {language} · Translate ON",
        managerOriginal: "MANAGER ORIGINAL · 日本語",
        translated: "TRANSLATED · Bahasa Indonesia",
        workerOriginal: "WORKER ORIGINAL · {language}",
        openConversation: "Open Conversation",
      },
      privacyDesktop:
        "Health / Stress / Life / private eCoin excluded. Original messages remain preserved for audit and translation review.",
      privacyMobileLine1:
        "Encrypted messaging · original + translation preserved",
      privacyMobileLine2:
        "Privacy: Health / Stress / Life / private personal data excluded",
    },
    thread: {
      title: "Conversation Detail",
      subtitle: "Conversation workspace · original + translation preserved.",
      contextLine: "{role} · {language} · {facility}",
      translateOn: "Translate ON",
      desktopMeta:
        "{count} unread · Last worker activity {time} · Response target < 30 min",
      statusLeft: "{count} unread · last activity {time}",
      statusRight: "{pair} · Translate ON",
      conversationsTitle: "Conversations",
      miniSearchPlaceholder: "Search conversations...",
      miniMetaUnread: "{time} · unread",
      quickActions: {
        report: "Report",
        followUp: "Follow-up",
        worker: "Worker",
        workerDetail: "Worker Detail",
      },
      replyTo: "Reply to {name}",
      replyPlaceholder: "メッセージを入力... / Ketik pesan...",
      recordLabel: "Record voice message",
      sendLabel: "Send",
      footnoteMobile:
        "Read · {time} · original preserved · Japanese → Indonesian preview before sending",
      footnoteDesktop:
        "Japanese original → Indonesian preview before sending · original preserved",
      privacyMobile:
        "Workplace communication only · private Health / Stress / Life data excluded",
      privacyDesktop:
        "Privacy boundary · Employer view stays limited to permitted operational / professional records. Health, Stress, Life, family/private data, and private eCoin remain excluded.",
      notFound: "Conversation not found.",
      notFoundTitle: "Conversation Not Found",
      notFoundSubtitle:
        "This conversation is not available in the current facility context.",
      notFoundBody:
        "The requested conversation is outside the current facility scope, or it no longer exists.",
      notFoundBoundary:
        "A missing conversation never reveals worker data. Only conversations inside the permitted facility context are listed.",
      notFoundBack: "Back to Communication",
    },
    compose: {
      title: "Send message",
      titleDesktop: "Send Message",
      subtitle: "{name} · recipient language: Indonesian",
      subtitleDesktop:
        "Compose, review translation, and send within the selected facility context.",
      recipientContext: "{role} · JA → ID",
      templateLabel: "TEMPLATE",
      templates: {
        dailyReportReminder: "Daily report reminder",
        shiftConfirm: "Shift confirm",
        understanding: "Understanding",
      },
      messageLabel: "MESSAGE",
      managerOriginal: "MANAGER ORIGINAL · 日本語",
      originalPreserved: "Original text is preserved.",
      messageAriaLabel: "Manager original message",
      translationPreviewLabel: "TRANSLATION PREVIEW",
      translationPreviewDesktop: "TRANSLATION PREVIEW · Bahasa Indonesia",
      previewCaption: "Bahasa Indonesia · preview",
      beforeSending: "Before sending",
      beforeSendingChecks: [
        "Recipient and language checked",
        "Translation reviewed",
        "No private Health / Stress / Life data",
      ],
      contextLabel: "COMMUNICATION CONTEXT",
      contextLine:
        "Sender: Japanese → Recipient: Bahasa Indonesia · original preserved",
      sendMessage: "Send message",
      footnote: "Human review remains required for translated messages.",
      context: {
        recipientLabel: "RECIPIENT",
        languageLabel: "LANGUAGE",
        languageCaption: "original preserved",
        messageTypeLabel: "MESSAGE TYPE",
        messageTypeValue: "Direct",
        messageTypeCaption: "worker conversation",
        contextLabel: "CONTEXT",
        contextValue: "{count} unread",
        contextCaption: "report submitted",
      },
      card: {
        title: "COMPOSE MESSAGE",
        recipient: "Recipient",
        originalLanguage: "Original language",
        originalLanguageValue: "日本語",
        template: "Template",
        message: "Message",
      },
      panel: {
        title: "BEFORE SENDING",
        checks: [
          "Original text preserved",
          "Translation preview checked",
          "Recipient & facility confirmed",
          "No private worker data",
        ],
        humanReviewTitle: "Human review required",
        humanReviewBody:
          "Translated or important messages require manager review before sending.",
        reviewCta: "Review message",
        backCta: "Back",
        demoFailureCta: "Demo failure",
      },
    },
    review: {
      title: "Review Message",
      titleDesktop: "Message Review",
      subtitle: "Check translation before sending",
      subtitleDesktop:
        "Final human review before translated manager communication is sent.",
      recipient: "Recipient · {name}",
      recipientLine: "Worker · {language}",
      contextLine: "Japanese original → Bahasa Indonesia preview · {facility}",
      originalLabel: "ORIGINAL · 日本語",
      originalLabelDesktop: "MANAGER ORIGINAL · 日本語",
      originalHeading: "Japanese original",
      originalCaption: "Original preserved for audit.",
      translationLabel: "TRANSLATION PREVIEW · Bahasa Indonesia",
      translationHeading: "Indonesian preview",
      workerPreviewLabel: "WORKER PREVIEW · Bahasa Indonesia",
      workerPreviewCaption: "Translation reviewed by manager before send.",
      sendCheck: "Send check",
      sendCheckLines: [
        "Recipient + language confirmed",
        "Original preserved + translation reviewed",
        "Privacy boundary checked",
      ],
      checklistLabel: "REVIEW CHECKLIST",
      checklistLines: [
        "Recipient + language confirmed",
        "Original preserved",
        "Translation reviewed",
        "Privacy boundary checked",
      ],
      responsibility: "Manager remains responsible for final wording.",
      responsibilityDesktop:
        "Manager remains responsible for final wording and operational appropriateness.",
      sendMessage: "Send message",
      backToEdit: "Back to edit",
    },
    sent: {
      title: "Message Sent",
      titleDesktop: "Message Sent",
      subtitle: "Delivery state",
      subtitleDesktop: "Translated message delivered to the selected worker.",
      chip: "Sent",
      badge: "SENT · DELIVERED",
      headline: "Message sent to {name}",
      body: "Original Japanese text was preserved. Indonesian translation was delivered for the worker preview.",
      metrics: [
        { label: "DELIVERED", value: "", caption: "worker preview" },
        { label: "ORIGINAL", value: "Preserved", caption: "日本語" },
        { label: "TRANSLATION", value: "Delivered", caption: "Bahasa Indonesia" },
      ],
      deliveredLine1: "Japanese original preserved",
      deliveredLine2: "Indonesian translation delivered · {time}",
      deliveryTitle: "Delivery",
      deliveryLine1: "Delivered · {time}",
      deliveryLine2: "Read status: waiting for worker receipt",
      recordTitle: "Message record",
      recordBody:
        "Original Japanese + Indonesian translation saved together for transparency and auditability.",
      nextStepTitle: "Next step",
      nextStepBody:
        "Wait for worker reply or create a follow-up only if operationally needed.",
      openConversation: "Open Conversation",
      createFollowUp: "Create Follow-up if operationally needed",
      createFollowUpDesktop: "Create Follow-up if needed",
      boundaryDesktop:
        "No private worker data was included. Delivery state is recorded separately from message content.",
    },
    failed: {
      title: "Message Not Sent",
      titleDesktop: "Message Send Failed",
      subtitle: "No delivery was recorded",
      subtitleDesktop:
        "No success is shown until the message is actually delivered.",
      chip: "Failed",
      bannerTitle: "Message was not sent",
      bannerBody:
        "Connection or validation failed. The draft remains available for retry.",
      failedTitle: "Delivery failed",
      failedBody: "The message was not delivered. Original draft is preserved.",
      draftTitle: "Draft preserved",
      draftLabelDesktop: "DRAFT PRESERVED",
      draftBody:
        "Original message, translation preview, recipient and selected template remain available for retry.",
      noSuccessTitle: "No success recorded",
      noSuccessBody: "Do not mark the message as sent until delivery succeeds.",
      beforeRetryTitle: "Before retry",
      beforeRetryLabelDesktop: "BEFORE RETRY",
      beforeRetryDesktop:
        "Confirm connectivity · recipient/facility · translation preview · no private data.",
      beforeRetryLine1: "Check connection and current facility context.",
      beforeRetryLine2: "Do not duplicate-send while status is unknown.",
      retry: "Retry from draft",
      backToConversation: "Back to Conversation",
      followUpInstead: "Create Follow-up instead",
      boundaryDesktop:
        "Draft preservation does not create a delivery record. Retry only after validation succeeds.",
    },
    states: {
      loadingLabel: "Loading conversations",
      offlineTitle: "Offline · cached conversations shown",
      offlineBody:
        "Cached conversations stay readable. New messages cannot be sent until the connection returns.",
      offlineNote: "Nothing is marked as sent while delivery status is unknown.",
      emptyTitle: "No conversations yet",
      emptyBody:
        "Worker-initiated messages and manager broadcasts appear here once a conversation starts.",
      emptyCta: "Send message",
    },
  },
  id: {
    list: {
      subtitle:
        "Pesan terenkripsi · teks asli dipertahankan · pratinjau terjemahan aktif.",
      subtitleMobile:
        "Komunikasi pekerja · teks asli + terjemahan dipertahankan",
      kpis: [
        { label: "DIMULAI PEKERJA", caption: "fasilitas saat ini" },
        { label: "RESPONS MANAJER", caption: "median" },
        { label: "BELUM DIBACA", caption: "1 perlu balasan" },
        { label: "TINDAK LANJUT TERBUKA", caption: "dari pesan" },
      ],
      tiles: [
        { label: "DIMULAI PEKERJA", caption: "dipimpin pekerja" },
        { label: "RESPONS MANAJER", caption: "rata-rata" },
      ],
      searchPlaceholder: "Cari percakapan…",
      searchPlaceholderMobile: "Cari pekerja atau percakapan",
      filters: {
        all: "Semua",
        unread: "Belum dibaca",
        needsReply: "Perlu balasan",
        broadcast: "Siaran",
      },
      mobileFilters: {
        all: "Semua {count}",
        unread: "Belum dibaca {count}",
        followUp: "Tindak Lanjut {count}",
      },
      send: "Kirim",
      conversations: "PERCAKAPAN",
      meta: {
        unread: "{count} belum dibaca",
        followUp: "tindak lanjut",
        read: "dibaca",
      },
      noMatch: "Tidak ada percakapan yang cocok dengan filter ini.",
      preview: {
        workerLine: "Pekerja · {language} · Terjemahan AKTIF",
        managerOriginal: "ASLI MANAJER · 日本語",
        translated: "DITERJEMAHKAN · Bahasa Indonesia",
        workerOriginal: "ASLI PEKERJA · {language}",
        openConversation: "Buka Percakapan",
      },
      privacyDesktop:
        "Kesehatan / Stres / Kehidupan / eCoin pribadi dikecualikan. Pesan asli tetap dipertahankan untuk audit dan tinjauan terjemahan.",
      privacyMobileLine1:
        "Pesan terenkripsi · teks asli + terjemahan dipertahankan",
      privacyMobileLine2:
        "Privasi: Kesehatan / Stres / Kehidupan / data pribadi dikecualikan",
    },
    thread: {
      title: "Detail Percakapan",
      subtitle:
        "Ruang kerja percakapan · teks asli + terjemahan dipertahankan.",
      contextLine: "{role} · {language} · {facility}",
      translateOn: "Terjemahan AKTIF",
      desktopMeta:
        "{count} belum dibaca · Aktivitas pekerja terakhir {time} · Target respons < 30 mnt",
      statusLeft: "{count} belum dibaca · aktivitas terakhir {time}",
      statusRight: "{pair} · Terjemahan AKTIF",
      conversationsTitle: "Percakapan",
      miniSearchPlaceholder: "Cari percakapan...",
      miniMetaUnread: "{time} · belum dibaca",
      quickActions: {
        report: "Laporan",
        followUp: "Tindak Lanjut",
        worker: "Pekerja",
        workerDetail: "Detail Pekerja",
      },
      replyTo: "Balas ke {name}",
      replyPlaceholder: "メッセージを入力... / Ketik pesan...",
      recordLabel: "Rekam pesan suara",
      sendLabel: "Kirim",
      footnoteMobile:
        "Dibaca · {time} · teks asli dipertahankan · pratinjau Jepang → Indonesia sebelum dikirim",
      footnoteDesktop:
        "Teks asli Jepang → pratinjau Indonesia sebelum dikirim · teks asli dipertahankan",
      privacyMobile:
        "Hanya komunikasi kerja · data pribadi Kesehatan / Stres / Kehidupan dikecualikan",
      privacyDesktop:
        "Batas privasi · Tampilan pemberi kerja terbatas pada catatan operasional / profesional yang diizinkan. Kesehatan, Stres, Kehidupan, data keluarga/pribadi, dan eCoin pribadi tetap dikecualikan.",
      notFound: "Percakapan tidak ditemukan.",
      notFoundTitle: "Percakapan Tidak Ditemukan",
      notFoundSubtitle:
        "Percakapan ini tidak tersedia dalam konteks fasilitas saat ini.",
      notFoundBody:
        "Percakapan yang diminta berada di luar cakupan fasilitas saat ini, atau sudah tidak ada.",
      notFoundBoundary:
        "Percakapan yang tidak ditemukan tidak pernah mengungkap data pekerja. Hanya percakapan dalam konteks fasilitas yang diizinkan yang ditampilkan.",
      notFoundBack: "Kembali ke Komunikasi",
    },
    compose: {
      title: "Kirim pesan",
      titleDesktop: "Kirim Pesan",
      subtitle: "{name} · bahasa penerima: Indonesia",
      subtitleDesktop:
        "Susun, tinjau terjemahan, dan kirim dalam konteks fasilitas terpilih.",
      recipientContext: "{role} · JA → ID",
      templateLabel: "TEMPLAT",
      templates: {
        dailyReportReminder: "Pengingat laporan harian",
        shiftConfirm: "Konfirmasi shift",
        understanding: "Pemahaman",
      },
      messageLabel: "PESAN",
      managerOriginal: "ASLI MANAJER · 日本語",
      originalPreserved: "Teks asli dipertahankan.",
      messageAriaLabel: "Pesan asli manajer",
      translationPreviewLabel: "PRATINJAU TERJEMAHAN",
      translationPreviewDesktop: "PRATINJAU TERJEMAHAN · Bahasa Indonesia",
      previewCaption: "Bahasa Indonesia · pratinjau",
      beforeSending: "Sebelum mengirim",
      beforeSendingChecks: [
        "Penerima dan bahasa diperiksa",
        "Terjemahan ditinjau",
        "Tidak ada data pribadi Kesehatan / Stres / Kehidupan",
      ],
      contextLabel: "KONTEKS KOMUNIKASI",
      contextLine:
        "Pengirim: Jepang → Penerima: Bahasa Indonesia · teks asli dipertahankan",
      sendMessage: "Kirim pesan",
      footnote: "Tinjauan manusia tetap wajib untuk pesan terjemahan.",
      context: {
        recipientLabel: "PENERIMA",
        languageLabel: "BAHASA",
        languageCaption: "teks asli dipertahankan",
        messageTypeLabel: "JENIS PESAN",
        messageTypeValue: "Langsung",
        messageTypeCaption: "percakapan pekerja",
        contextLabel: "KONTEKS",
        contextValue: "{count} belum dibaca",
        contextCaption: "laporan terkirim",
      },
      card: {
        title: "SUSUN PESAN",
        recipient: "Penerima",
        originalLanguage: "Bahasa asli",
        originalLanguageValue: "日本語",
        template: "Templat",
        message: "Pesan",
      },
      panel: {
        title: "SEBELUM MENGIRIM",
        checks: [
          "Teks asli dipertahankan",
          "Pratinjau terjemahan diperiksa",
          "Penerima & fasilitas dikonfirmasi",
          "Tidak ada data pribadi pekerja",
        ],
        humanReviewTitle: "Tinjauan manusia wajib",
        humanReviewBody:
          "Pesan terjemahan atau penting memerlukan tinjauan manajer sebelum dikirim.",
        reviewCta: "Tinjau pesan",
        backCta: "Kembali",
        demoFailureCta: "Demo kegagalan",
      },
    },
    review: {
      title: "Tinjau Pesan",
      titleDesktop: "Tinjauan Pesan",
      subtitle: "Periksa terjemahan sebelum mengirim",
      subtitleDesktop:
        "Tinjauan manusia terakhir sebelum komunikasi manajer terjemahan dikirim.",
      recipient: "Penerima · {name}",
      recipientLine: "Pekerja · {language}",
      contextLine:
        "Teks asli Jepang → pratinjau Bahasa Indonesia · {facility}",
      originalLabel: "ASLI · 日本語",
      originalLabelDesktop: "ASLI MANAJER · 日本語",
      originalHeading: "Asli bahasa Jepang",
      originalCaption: "Teks asli dipertahankan untuk audit.",
      translationLabel: "PRATINJAU TERJEMAHAN · Bahasa Indonesia",
      translationHeading: "Pratinjau bahasa Indonesia",
      workerPreviewLabel: "PRATINJAU PEKERJA · Bahasa Indonesia",
      workerPreviewCaption:
        "Terjemahan ditinjau manajer sebelum dikirim.",
      sendCheck: "Pemeriksaan pengiriman",
      sendCheckLines: [
        "Penerima + bahasa dikonfirmasi",
        "Teks asli dipertahankan + terjemahan ditinjau",
        "Batas privasi diperiksa",
      ],
      checklistLabel: "DAFTAR PERIKSA TINJAUAN",
      checklistLines: [
        "Penerima + bahasa dikonfirmasi",
        "Teks asli dipertahankan",
        "Terjemahan ditinjau",
        "Batas privasi diperiksa",
      ],
      responsibility: "Manajer tetap bertanggung jawab atas kata-kata akhir.",
      responsibilityDesktop:
        "Manajer tetap bertanggung jawab atas kata-kata akhir dan kesesuaian operasional.",
      sendMessage: "Kirim pesan",
      backToEdit: "Kembali mengubah",
    },
    sent: {
      title: "Pesan Terkirim",
      titleDesktop: "Pesan Terkirim",
      subtitle: "Status pengiriman",
      subtitleDesktop: "Pesan terjemahan terkirim ke pekerja terpilih.",
      chip: "Terkirim",
      badge: "TERKIRIM · SAMPAI",
      headline: "Pesan terkirim ke {name}",
      body: "Teks asli Jepang dipertahankan. Terjemahan Indonesia dikirim untuk pratinjau pekerja.",
      metrics: [
        { label: "SAMPAI", value: "", caption: "pratinjau pekerja" },
        { label: "ASLI", value: "Dipertahankan", caption: "日本語" },
        { label: "TERJEMAHAN", value: "Terkirim", caption: "Bahasa Indonesia" },
      ],
      deliveredLine1: "Teks asli Jepang dipertahankan",
      deliveredLine2: "Terjemahan Indonesia terkirim · {time}",
      deliveryTitle: "Pengiriman",
      deliveryLine1: "Terkirim · {time}",
      deliveryLine2: "Status baca: menunggu penerimaan pekerja",
      recordTitle: "Catatan pesan",
      recordBody:
        "Teks asli Jepang + terjemahan Indonesia disimpan bersama untuk transparansi dan keterlacakan audit.",
      nextStepTitle: "Langkah berikutnya",
      nextStepBody:
        "Tunggu balasan pekerja atau buat tindak lanjut hanya jika diperlukan secara operasional.",
      openConversation: "Buka Percakapan",
      createFollowUp: "Buat Tindak Lanjut jika diperlukan secara operasional",
      createFollowUpDesktop: "Buat Tindak Lanjut jika perlu",
      boundaryDesktop:
        "Tidak ada data pribadi pekerja yang disertakan. Status pengiriman dicatat terpisah dari isi pesan.",
    },
    failed: {
      title: "Pesan Tidak Terkirim",
      titleDesktop: "Pengiriman Pesan Gagal",
      subtitle: "Tidak ada pengiriman yang tercatat",
      subtitleDesktop:
        "Tidak ada status berhasil sebelum pesan benar-benar terkirim.",
      chip: "Gagal",
      bannerTitle: "Pesan tidak terkirim",
      bannerBody:
        "Koneksi atau validasi gagal. Draf tetap tersedia untuk dicoba lagi.",
      failedTitle: "Pengiriman gagal",
      failedBody: "Pesan tidak terkirim. Draf asli tetap dipertahankan.",
      draftTitle: "Draf dipertahankan",
      draftLabelDesktop: "DRAF DIPERTAHANKAN",
      draftBody:
        "Pesan asli, pratinjau terjemahan, penerima, dan templat terpilih tetap tersedia untuk dicoba lagi.",
      noSuccessTitle: "Tidak ada keberhasilan tercatat",
      noSuccessBody:
        "Jangan tandai pesan sebagai terkirim sebelum pengiriman berhasil.",
      beforeRetryTitle: "Sebelum mencoba lagi",
      beforeRetryLabelDesktop: "SEBELUM MENCOBA LAGI",
      beforeRetryDesktop:
        "Pastikan koneksi · penerima/fasilitas · pratinjau terjemahan · tanpa data pribadi.",
      beforeRetryLine1: "Periksa koneksi dan konteks fasilitas saat ini.",
      beforeRetryLine2:
        "Jangan mengirim ganda saat status masih belum diketahui.",
      retry: "Coba lagi dari draf",
      backToConversation: "Kembali ke Percakapan",
      followUpInstead: "Buat Tindak Lanjut sebagai gantinya",
      boundaryDesktop:
        "Menyimpan draf tidak membuat catatan pengiriman. Coba lagi hanya setelah validasi berhasil.",
    },
    states: {
      loadingLabel: "Memuat percakapan",
      offlineTitle: "Luring · percakapan tersimpan ditampilkan",
      offlineBody:
        "Percakapan tersimpan tetap dapat dibaca. Pesan baru tidak dapat dikirim sampai koneksi kembali.",
      offlineNote:
        "Tidak ada yang ditandai terkirim selama status pengiriman belum diketahui.",
      emptyTitle: "Belum ada percakapan",
      emptyBody:
        "Pesan yang dimulai pekerja dan siaran manajer muncul di sini setelah percakapan dimulai.",
      emptyCta: "Kirim pesan",
    },
  },
  ja: {
    list: {
      subtitle: "暗号化メッセージ · 原文を保持 · 翻訳プレビュー有効。",
      subtitleMobile: "ワーカーとの連絡 · 原文と翻訳を保持",
      kpis: [
        { label: "ワーカー発信", caption: "現在の施設" },
        { label: "管理者の応答", caption: "中央値" },
        { label: "未読", caption: "1件は返信が必要" },
        { label: "未対応フォローアップ", caption: "メッセージ由来" },
      ],
      tiles: [
        { label: "ワーカー発信", caption: "ワーカー主導" },
        { label: "管理者の応答", caption: "平均" },
      ],
      searchPlaceholder: "会話を検索…",
      searchPlaceholderMobile: "ワーカーまたは会話を検索",
      filters: {
        all: "すべて",
        unread: "未読",
        needsReply: "要返信",
        broadcast: "一斉送信",
      },
      mobileFilters: {
        all: "すべて {count}",
        unread: "未読 {count}",
        followUp: "フォローアップ {count}",
      },
      send: "送信",
      conversations: "会話",
      meta: {
        unread: "未読 {count}件",
        followUp: "フォローアップ",
        read: "既読",
      },
      noMatch: "このフィルターに一致する会話はありません。",
      preview: {
        workerLine: "ワーカー · {language} · 翻訳オン",
        managerOriginal: "管理者の原文 · 日本語",
        translated: "翻訳 · Bahasa Indonesia",
        workerOriginal: "ワーカーの原文 · {language}",
        openConversation: "会話を開く",
      },
      privacyDesktop:
        "健康 / ストレス / 生活 / 非公開eCoinは除外されます。原文メッセージは監査と翻訳確認のために保持されます。",
      privacyMobileLine1: "暗号化メッセージ · 原文と翻訳を保持",
      privacyMobileLine2:
        "プライバシー: 健康 / ストレス / 生活 / 個人データは除外",
    },
    thread: {
      title: "会話の詳細",
      subtitle: "会話ワークスペース · 原文と翻訳を保持。",
      contextLine: "{role} · {language} · {facility}",
      translateOn: "翻訳オン",
      desktopMeta:
        "未読 {count}件 · 最終ワーカー活動 {time} · 応答目標 30分以内",
      statusLeft: "未読 {count}件 · 最終活動 {time}",
      statusRight: "{pair} · 翻訳オン",
      conversationsTitle: "会話",
      miniSearchPlaceholder: "会話を検索...",
      miniMetaUnread: "{time} · 未読",
      quickActions: {
        report: "レポート",
        followUp: "フォローアップ",
        worker: "ワーカー",
        workerDetail: "ワーカー詳細",
      },
      replyTo: "{name} への返信",
      replyPlaceholder: "メッセージを入力... / Ketik pesan...",
      recordLabel: "音声メッセージを録音",
      sendLabel: "送信",
      footnoteMobile:
        "既読 · {time} · 原文を保持 · 送信前に日本語 → インドネシア語のプレビュー",
      footnoteDesktop:
        "日本語の原文 → 送信前にインドネシア語プレビュー · 原文を保持",
      privacyMobile:
        "業務連絡のみ · 非公開の健康 / ストレス / 生活データは除外",
      privacyDesktop:
        "プライバシー境界 · 雇用者の閲覧は許可された業務・職務記録に限定されます。健康、ストレス、生活、家族・私的データ、非公開eCoinは除外されます。",
      notFound: "会話が見つかりません。",
      notFoundTitle: "会話が見つかりません",
      notFoundSubtitle: "この会話は現在の施設コンテキストでは利用できません。",
      notFoundBody:
        "要求された会話は現在の施設スコープ外にあるか、すでに存在しません。",
      notFoundBoundary:
        "会話が見つからない場合でも労働者データは開示されません。許可された施設コンテキスト内の会話のみが表示されます。",
      notFoundBack: "コミュニケーションに戻る",
    },
    compose: {
      title: "メッセージを送信",
      titleDesktop: "メッセージ送信",
      subtitle: "{name} · 受信者の言語: インドネシア語",
      subtitleDesktop:
        "選択した施設のコンテキスト内で作成・翻訳確認・送信を行います。",
      recipientContext: "{role} · JA → ID",
      templateLabel: "テンプレート",
      templates: {
        dailyReportReminder: "日報リマインダー",
        shiftConfirm: "シフト確認",
        understanding: "理解確認",
      },
      messageLabel: "メッセージ",
      managerOriginal: "管理者の原文 · 日本語",
      originalPreserved: "原文は保持されます。",
      messageAriaLabel: "管理者の原文メッセージ",
      translationPreviewLabel: "翻訳プレビュー",
      translationPreviewDesktop: "翻訳プレビュー · Bahasa Indonesia",
      previewCaption: "Bahasa Indonesia · プレビュー",
      beforeSending: "送信前の確認",
      beforeSendingChecks: [
        "受信者と言語を確認",
        "翻訳を確認",
        "非公開の健康 / ストレス / 生活データなし",
      ],
      contextLabel: "コミュニケーション状況",
      contextLine: "送信者: 日本語 → 受信者: Bahasa Indonesia · 原文を保持",
      sendMessage: "メッセージを送信",
      footnote: "翻訳されたメッセージには人による確認が必要です。",
      context: {
        recipientLabel: "受信者",
        languageLabel: "言語",
        languageCaption: "原文を保持",
        messageTypeLabel: "メッセージ種別",
        messageTypeValue: "個別送信",
        messageTypeCaption: "ワーカーとの会話",
        contextLabel: "状況",
        contextValue: "未読 {count}件",
        contextCaption: "レポート提出済み",
      },
      card: {
        title: "メッセージ作成",
        recipient: "受信者",
        originalLanguage: "原文の言語",
        originalLanguageValue: "日本語",
        template: "テンプレート",
        message: "メッセージ",
      },
      panel: {
        title: "送信前の確認",
        checks: [
          "原文を保持",
          "翻訳プレビューを確認",
          "受信者と施設を確定",
          "非公開のワーカーデータなし",
        ],
        humanReviewTitle: "人による確認が必要",
        humanReviewBody:
          "翻訳された、または重要なメッセージは送信前に管理者の確認が必要です。",
        reviewCta: "メッセージを確認",
        backCta: "戻る",
        demoFailureCta: "失敗デモ",
      },
    },
    review: {
      title: "メッセージの確認",
      titleDesktop: "メッセージレビュー",
      subtitle: "送信前に翻訳を確認",
      subtitleDesktop:
        "翻訳された管理者連絡を送信する前の最終的な人による確認です。",
      recipient: "受信者 · {name}",
      recipientLine: "ワーカー · {language}",
      contextLine: "日本語の原文 → Bahasa Indonesia プレビュー · {facility}",
      originalLabel: "原文 · 日本語",
      originalLabelDesktop: "管理者の原文 · 日本語",
      originalHeading: "日本語の原文",
      originalCaption: "原文は監査のため保持されます。",
      translationLabel: "翻訳プレビュー · Bahasa Indonesia",
      translationHeading: "インドネシア語のプレビュー",
      workerPreviewLabel: "ワーカー向けプレビュー · Bahasa Indonesia",
      workerPreviewCaption: "翻訳は送信前に管理者が確認しました。",
      sendCheck: "送信チェック",
      sendCheckLines: [
        "受信者と言語を確定",
        "原文を保持し翻訳を確認",
        "プライバシー境界を確認",
      ],
      checklistLabel: "レビューチェックリスト",
      checklistLines: [
        "受信者と言語を確定",
        "原文を保持",
        "翻訳を確認",
        "プライバシー境界を確認",
      ],
      responsibility: "最終的な文言の責任は管理者にあります。",
      responsibilityDesktop:
        "最終的な文言と業務上の適切さについての責任は管理者にあります。",
      sendMessage: "メッセージを送信",
      backToEdit: "編集に戻る",
    },
    sent: {
      title: "メッセージを送信しました",
      titleDesktop: "メッセージ送信完了",
      subtitle: "配信状況",
      subtitleDesktop: "翻訳されたメッセージを選択したワーカーに配信しました。",
      chip: "送信済み",
      badge: "送信済み · 配信完了",
      headline: "{name} にメッセージを送信しました",
      body: "日本語の原文は保持されました。インドネシア語訳はワーカー向けプレビューとして配信されました。",
      metrics: [
        { label: "配信", value: "", caption: "ワーカー向けプレビュー" },
        { label: "原文", value: "保持", caption: "日本語" },
        { label: "翻訳", value: "配信済み", caption: "Bahasa Indonesia" },
      ],
      deliveredLine1: "日本語の原文を保持",
      deliveredLine2: "インドネシア語訳を配信 · {time}",
      deliveryTitle: "配信",
      deliveryLine1: "配信済み · {time}",
      deliveryLine2: "既読状況: ワーカーの受信待ち",
      recordTitle: "メッセージ記録",
      recordBody:
        "透明性と監査可能性のため、日本語の原文とインドネシア語訳は一緒に保存されます。",
      nextStepTitle: "次のステップ",
      nextStepBody:
        "ワーカーの返信を待つか、業務上必要な場合のみフォローアップを作成してください。",
      openConversation: "会話を開く",
      createFollowUp: "業務上必要な場合はフォローアップを作成",
      createFollowUpDesktop: "必要ならフォローアップを作成",
      boundaryDesktop:
        "非公開のワーカーデータは含まれていません。配信状況はメッセージ内容とは別に記録されます。",
    },
    failed: {
      title: "メッセージは送信されていません",
      titleDesktop: "メッセージ送信失敗",
      subtitle: "配信の記録はありません",
      subtitleDesktop:
        "メッセージが実際に配信されるまで成功は表示されません。",
      chip: "失敗",
      bannerTitle: "メッセージは送信されませんでした",
      bannerBody:
        "接続または検証に失敗しました。下書きは再試行のために保持されています。",
      failedTitle: "配信に失敗しました",
      failedBody:
        "メッセージは配信されませんでした。原文の下書きは保持されています。",
      draftTitle: "下書きを保持",
      draftLabelDesktop: "下書きを保持",
      draftBody:
        "原文メッセージ、翻訳プレビュー、受信者、選択したテンプレートは再試行のために利用できます。",
      noSuccessTitle: "成功は記録されていません",
      noSuccessBody: "配信が成功するまで送信済みとして扱わないでください。",
      beforeRetryTitle: "再試行の前に",
      beforeRetryLabelDesktop: "再試行の前に",
      beforeRetryDesktop:
        "接続 · 受信者と施設 · 翻訳プレビュー · 非公開データなし、を確認してください。",
      beforeRetryLine1: "接続と現在の施設コンテキストを確認してください。",
      beforeRetryLine2: "状況が不明なまま重複送信しないでください。",
      retry: "下書きから再送信",
      backToConversation: "会話に戻る",
      followUpInstead: "代わりにフォローアップを作成",
      boundaryDesktop:
        "下書きの保持は配信記録を作成しません。検証が成功してから再試行してください。",
    },
    states: {
      loadingLabel: "会話を読み込み中",
      offlineTitle: "オフライン · キャッシュされた会話を表示",
      offlineBody:
        "キャッシュされた会話は閲覧できます。接続が回復するまで新しいメッセージは送信できません。",
      offlineNote: "配信状況が不明な間は送信済みとして記録されません。",
      emptyTitle: "会話はまだありません",
      emptyBody:
        "ワーカー発信のメッセージや管理者の一斉送信は、会話が開始されるとここに表示されます。",
      emptyCta: "メッセージを送信",
    },
  },
});

/** Fills `{token}` placeholders in a copy string with display values. */
export function fillCopy(
  template: string,
  values: Record<string, string | number>,
): string {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.split(`{${key}}`).join(String(value)),
    template,
  );
}
