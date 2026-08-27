import { defineSectionCopy } from "@/i18n/copy";

/**
 * Section 05 · Follow-up & Alerts copy.
 * EN is the Figma text verbatim (mobile EM-09/09A/09B/09C/10/12,
 * desktop MD-09/MD-12). Person, facility and message content stay in
 * followupMock.ts — only UI/system strings live here.
 */
export interface FollowUpCopy {
  center: {
    titleDesktop: string;
    subtitleMobile: string;
    subtitleDesktop: string;
    kpis: { label: string; caption: string }[];
    queueTitle: string;
    selectedTitle: string;
    reviewButton: string;
    reviewLink: string;
    factSource: string;
    factExpected: string;
    factCurrent: string;
    humanReviewTitle: string;
    humanReviewDesktop: string;
    humanReviewMobile: string;
    reviewSignal: string;
    composeButton: string;
    footerDesktop: string;
    footerMobile: string;
  };
  filters: {
    pending: string;
    sent: string;
    resolved: string;
    highPriority: string;
  };
  chipCounts: {
    pending: string;
    high: string;
    sent: string;
    resolved: string;
  };
  /** Relative-day words used by the mini-log and the sent record. */
  time: { today: string; yesterday: string };
  priority: { high: string; medium: string; low: string };
  /** EM-09B writes the priority in title case ("Priority · High"). */
  priorityTitle: { high: string; medium: string; low: string };
  signalTitles: {
    missingReport: string;
    unreadMessage: string;
    visaWindow: string;
    visaAdminWindow: string;
    workLog: string;
  };
  signalMetaDesktop: {
    missingReport: string;
    unreadMessage: string;
    visaWindow: string;
    visaAdminWindow: string;
    workLog: string;
  };
  signalMetaMobile: {
    missingReport: string;
    unreadMessage: string;
    visaWindow: string;
    visaAdminWindow: string;
    workLog: string;
  };
  signalCurrent: {
    notSubmitted: string;
    awaitingReply: string;
    windowOpen: string;
    noteRecorded: string;
  };
  /** EM-09A writes the same fact in lower case ("Current · not submitted"). */
  signalCurrentLower: {
    notSubmitted: string;
    awaitingReply: string;
    windowOpen: string;
    noteRecorded: string;
  };
  signalExpected: {
    reportAt: string;
    replyWithin: string;
    renewalBefore: string;
    reviewThisWeek: string;
  };
  states: {
    loadingTitle: string;
    loadingBody: string;
    emptyTitle: string;
    emptyBody: string;
    offlineTitle: string;
    offlineBody: string;
  };
  review: {
    breadcrumb: string;
    title: string;
    subtitle: string;
    headerMeta: string;
    contextTitle: string;
    expectedLabel: string;
    currentLabel: string;
    logLabels: {
      lastReport: string;
      markedMissing: string;
      noWorkerMessage: string;
      messageReceived: string;
      windowOpened: string;
      noteRecorded: string;
    };
    relatedTitle: string;
    relatedRecords: string;
    decisionTitle: string;
    decisionBody: string;
    checks: string[];
    composeCta: string;
    backCta: string;
    footer: string;
    notFound: string;
  };
  compose: {
    breadcrumb: string;
    title: string;
    subtitle: string;
    recipientLabel: string;
    reasonLabel: string;
    languageLabel: string;
    priorityLabel: string;
    priorityValue: string;
    /** "Reason · Missing report" value. */
    reasonsShort: {
      missingReport: string;
      unreadMessage: string;
      visaWindow: string;
      visaAdminWindow: string;
      workLog: string;
    };
    /** Subtitle tail — "Putri Rahayu · missing Daily Report". */
    reasonsLong: {
      missingReport: string;
      unreadMessage: string;
      visaWindow: string;
      visaAdminWindow: string;
      workLog: string;
    };
    templateLabel: string;
    templates: { daily: string; checkin: string; documentation: string };
    originalLabel: string;
    translationLabel: string;
    managerNoteLabel: string;
    managerNoteBody: string;
    beforeSendingTitle: string;
    beforeSendingChecks: string[];
    sendCta: string;
    backCta: string;
    footer: string;
  };
  sent: {
    title: string;
    subtitle: string;
    /** MD-10 (1226:1465) desktop subtitle. */
    subtitleDesktop: string;
    pill: string;
    signalLabel: string;
    templateLabel: string;
    sentLabel: string;
    managerLabel: string;
    statusLabel: string;
    statusValue: string;
    historyTitle: string;
    historyBody: string;
    privacyTitle: string;
    privacyBody: string;
    backCta: string;
    /** MD-10 success hero (1226:1470/1471). */
    heroTitle: string;
    heroBody: string;
    /** MD-10 metric quad labels (1226:1473/1476/1479/1482). */
    metrics: {
      template: string;
      sent: string;
      manager: string;
      status: string;
    };
    /** MD-10 FOLLOW-UP HISTORY card (1226:1485). */
    historyTitleDesktop: string;
    historySignals: {
      dailyReportReview: string;
      missingReport: string;
      clarification: string;
    };
    historyStatus: { sent: string; handled: string };
    historyNext: { awaitReply: string; reviewLater: string };
    /** MD-10 boundary strip beside the CTA (1226:1504). */
    boundaryDesktop: string;
    /** MD-10 closing privacy strip (1255:2908). */
    privacyStripDesktop: string;
  };
  notSent: {
    title: string;
    subtitle: string;
    /** MD-09C (1226:1523) desktop subtitle. */
    subtitleDesktop: string;
    pill: string;
    reviewRequired: string;
    failedLine: string;
    draftTitle: string;
    draftBody: string;
    retryTitle: string;
    retryBody: string;
    returnCta: string;
    backCta: string;
    footer: string;
    /** MD-09C peach banner (1226:1529/1530). */
    bannerTitle: string;
    bannerBody: string;
    /** MD-09C card blocks (1226:1534/1535) — caps labels. */
    draftTitleDesktop: string;
    retryTitleDesktop: string;
    retryBodyDesktop: string;
    /** MD-09C boundary strip (1226:1541). */
    boundaryDesktop: string;
    /** MD-09C closing privacy strip (1255:2910). */
    privacyStripDesktop: string;
  };
  alerts: {
    subtitleMobile: string;
    subtitleDesktop: string;
    kpis: { label: string; caption: string }[];
    filters: {
      open: string;
      urgent: string;
      reporting: string;
      admin: string;
    };
    chipCounts: {
      open: string;
      urgent: string;
      reporting: string;
      admin: string;
    };
    summaryHighLabel: string;
    summaryHighValue: string;
    summaryDueLabel: string;
    summaryDueValue: string;
    queueTitle: string;
    openAlertsTitle: string;
    reviewButton: string;
    selectedTitle: string;
    factExpected: string;
    factStatus: string;
    factRecommended: string;
    recommendedValue: string;
    /** MD-12 SELECTED ALERT fact values, keyed by alert kind. */
    expectedValues: {
      missingReport: string;
      unreadMessage: string;
      visaRenewal: string;
      adminDocument: string;
    };
    statusValues: {
      missingReport: string;
      unreadMessage: string;
      visaRenewal: string;
      adminDocument: string;
    };
    noteTitle: string;
    noteBody: string;
    openReports: string;
    createFollowUp: string;
    footer: string;
    privacyTitle: string;
    privacyBody: string;
    resolvedLine: string;
    openFollowUpCenter: string;
    viewAllWorkers: string;
    titles: {
      missingReport: string;
      unreadMessage: string;
      visaRenewal: string;
      adminDocument: string;
    };
    metaDesktop: {
      missingReport: string;
      unreadMessage: string;
      visaRenewal: string;
      adminDocument: string;
    };
    metaMobile: {
      missingReport: string;
      unreadMessage: string;
      visaRenewal: string;
      adminDocument: string;
    };
    severity: { high: string; medium: string; low: string };
    actions: {
      reviewReports: string;
      openCommunication: string;
      reviewWorker: string;
      openWorkerDetail: string;
    };
    emptyTitle: string;
    emptyBody: string;
  };
}

export const FOLLOW_UP_COPY = defineSectionCopy<FollowUpCopy>({
  en: {
    center: {
      titleDesktop: "Follow-up Center",
      subtitleMobile: "Human-reviewed operational queue",
      subtitleDesktop:
        "Human-reviewed operational follow-up queue · pending first.",
      kpis: [
        { label: "OPEN", caption: "pending review" },
        { label: "HIGH PRIORITY", caption: "manager review" },
        { label: "SENT TODAY", caption: "worker notified" },
        { label: "RESOLVED", caption: "last 7 days" },
      ],
      queueTitle: "FOLLOW-UP QUEUE",
      selectedTitle: "SELECTED SIGNAL",
      reviewButton: "Review",
      reviewLink: "Review ›",
      factSource: "Source · {value}",
      factExpected: "Expected · {value}",
      factCurrent: "Current · {value}",
      humanReviewTitle: "Human review only",
      humanReviewDesktop:
        "Manager decides whether follow-up is appropriate. No automatic discipline.",
      humanReviewMobile:
        "Signals prompt manager attention. They never trigger automatic discipline or use private Health / Stress / Life data.",
      reviewSignal: "Review signal",
      composeButton: "Compose",
      footerDesktop:
        "Private Health / Stress / Life data never enters follow-up signals.",
      footerMobile:
        "Pending first · manager decides whether follow-up is appropriate",
    },
    filters: {
      pending: "Pending",
      sent: "Sent",
      resolved: "Resolved",
      highPriority: "High priority",
    },
    chipCounts: {
      pending: "Pending {count}",
      high: "High {count}",
      sent: "Sent {count}",
      resolved: "Resolved {count}",
    },
    time: { today: "Today", yesterday: "Yesterday" },
    priority: { high: "HIGH", medium: "MEDIUM", low: "LOW" },
    priorityTitle: { high: "High", medium: "Medium", low: "Low" },
    signalTitles: {
      missingReport: "Missing Daily Report",
      unreadMessage: "Unread worker message",
      visaWindow: "Visa renewal window",
      visaAdminWindow: "Visa / admin window",
      workLog: "Work Log signal",
    },
    signalMetaDesktop: {
      missingReport: "Missing Daily Report · expected {value}",
      unreadMessage: "Unread worker message · {value} min",
      visaWindow: "Visa renewal window · {value} days",
      visaAdminWindow: "Visa / admin window · {value} days",
      workLog: "Work Log signal · manager note",
    },
    signalMetaMobile: {
      missingReport: "Expected {value} · source: Daily Reports",
      unreadMessage: "{value} min · source: Communication",
      visaWindow: "{value} days remaining · source: Visa/Admin",
      visaAdminWindow: "{value} days remaining · source: Visa/Admin",
      workLog: "manager note · source: Work Log",
    },
    signalCurrent: {
      notSubmitted: "Not submitted",
      awaitingReply: "Awaiting manager reply",
      windowOpen: "Renewal window open",
      noteRecorded: "Manager note recorded",
    },
    signalCurrentLower: {
      notSubmitted: "not submitted",
      awaitingReply: "awaiting manager reply",
      windowOpen: "renewal window open",
      noteRecorded: "manager note recorded",
    },
    signalExpected: {
      reportAt: "{value} today",
      replyWithin: "Reply within 15 min",
      renewalBefore: "Renewal within {value} days",
      reviewThisWeek: "Review this week",
    },
    states: {
      loadingTitle: "Loading follow-up queue…",
      loadingBody: "Signals are read-only until the queue finishes loading.",
      emptyTitle: "No follow-up signals in this view",
      emptyBody:
        "Nothing needs manager review right now. New signals appear here first.",
      offlineTitle: "Offline · queue shown from last sync",
      offlineBody:
        "Follow-up cannot be sent while offline. Queue items remain open.",
    },
    review: {
      breadcrumb: "Follow-up",
      title: "Review follow-up",
      subtitle: "Decide whether worker contact is appropriate",
      headerMeta: "{title} · {priority} · expected {value}",
      contextTitle: "SIGNAL CONTEXT",
      expectedLabel: "Expected · {value}",
      currentLabel: "Current · {value}",
      logLabels: {
        lastReport: "last report",
        markedMissing: "marked missing",
        noWorkerMessage: "no worker message",
        messageReceived: "worker message received",
        windowOpened: "renewal window opened",
        noteRecorded: "manager note recorded",
      },
      relatedTitle: "RELATED RECORDS",
      relatedRecords: "Daily Report history · Communication · Work Log",
      decisionTitle: "Manager decision",
      decisionBody:
        "Send a neutral Daily Report reminder. Do not infer misconduct from a missing submission alone.",
      checks: [
        "Source verified",
        "Facility confirmed",
        "No private Health / Stress / Life data",
      ],
      composeCta: "Compose follow-up",
      backCta: "Back to queue",
      footer: "Human review required · signals are operational prompts only.",
      notFound: "Signal not found",
    },
    compose: {
      breadcrumb: "Follow-up",
      title: "Compose follow-up",
      subtitle: "{worker} · {reason}",
      recipientLabel: "Recipient · {value}",
      reasonLabel: "Reason · {value}",
      languageLabel: "Language · {value}",
      priorityLabel: "Priority · {value}",
      priorityValue: "{priority} · human review",
      reasonsShort: {
        missingReport: "Missing report",
        unreadMessage: "Unread message",
        visaWindow: "Visa renewal",
        visaAdminWindow: "Visa / admin",
        workLog: "Work Log note",
      },
      reasonsLong: {
        missingReport: "missing Daily Report",
        unreadMessage: "unread worker message",
        visaWindow: "visa renewal window",
        visaAdminWindow: "visa / admin window",
        workLog: "Work Log signal",
      },
      templateLabel: "TEMPLATE",
      templates: {
        daily: "Daily Report",
        checkin: "Check-in",
        documentation: "Documentation",
      },
      originalLabel: "ORIGINAL MESSAGE · Bahasa Indonesia",
      translationLabel: "TRANSLATION PREVIEW · 日本語",
      managerNoteLabel: "Manager note · not sent to worker",
      managerNoteBody: "Reason recorded: missing report signal reviewed at {value}.",
      beforeSendingTitle: "Before sending",
      beforeSendingChecks: [
        "Recipient confirmed",
        "Signal reviewed",
        "Translation reviewed",
        "Neutral wording",
        "No private data",
      ],
      sendCta: "Send follow-up",
      backCta: "Back to review",
      footer:
        "Original + translation preserved · worker controls response and private data.",
    },
    sent: {
      title: "Follow-up Sent",
      subtitle: "Saved to follow-up history",
      subtitleDesktop:
        "Human follow-up history · records reflect manager action.",
      pill: "Sent",
      signalLabel: "Signal · {value}",
      templateLabel: "Template · {value}",
      sentLabel: "Sent · {value}",
      managerLabel: "Manager · {value}",
      statusLabel: "Status · {value}",
      statusValue: "Await reply",
      historyTitle: "Follow-up history updated",
      historyBody:
        "Original and translated message were preserved. The action is reflected in operational history; no automatic decision is implied.",
      privacyTitle: "Privacy boundary",
      privacyBody:
        "Private Health / Stress / Life data remains unavailable to Manager.",
      backCta: "Back to Follow-up",
      heroTitle: "Follow-up sent · {worker}",
      heroBody: "Saved to worker follow-up history and operational timeline.",
      metrics: {
        template: "TEMPLATE",
        sent: "SENT",
        manager: "MANAGER",
        status: "STATUS",
      },
      historyTitleDesktop: "FOLLOW-UP HISTORY",
      historySignals: {
        dailyReportReview: "Daily Report review",
        missingReport: "Missing report",
        clarification: "Clarification",
      },
      historyStatus: { sent: "Sent", handled: "Handled" },
      historyNext: { awaitReply: "Await reply", reviewLater: "Review later" },
      boundaryDesktop:
        "Human follow-up activity only; no automatic decision or disciplinary outcome is implied.",
      privacyStripDesktop:
        "Privacy boundary · Employer view stays limited to permitted operational / professional records. Health, Stress, Life, family/private data, and private eCoin remain excluded.",
    },
    notSent: {
      title: "Follow-up Not Sent",
      subtitle: "Pending action remains open",
      subtitleDesktop:
        "Pending action remains open until a valid manager action succeeds.",
      pill: "Not sent",
      reviewRequired: "{title} · human review required",
      failedLine: "Delivery failed · queue item remains open",
      draftTitle: "Draft preserved",
      draftBody:
        "Recipient, reviewed signal, selected template, original message and translation preview remain available.",
      retryTitle: "Safe retry",
      retryBody:
        "Revalidate worker + facility context before sending again. Do not duplicate-send while status is unknown.",
      returnCta: "Return to Compose",
      backCta: "Back to Queue",
      footer: "No success state is shown until delivery succeeds.",
      bannerTitle: "Follow-up was not sent",
      bannerBody:
        "No success is recorded. Keep the queue item open and preserve reviewed context.",
      draftTitleDesktop: "DRAFT PRESERVED",
      retryTitleDesktop: "SAFE RETRY",
      retryBodyDesktop:
        "Revalidate worker and facility context, preserve neutral wording, and retry only after connectivity/validation succeeds.",
      boundaryDesktop:
        "Pending action remains open. Failure never creates a follow-up history record.",
      privacyStripDesktop:
        "Privacy boundary · Employer view stays limited to permitted operational / professional records. Health, Stress, Life, family/private data, and private eCoin remain excluded.",
    },
    alerts: {
      subtitleMobile: "Action queue · visa / reporting / admin",
      subtitleDesktop:
        "Actionable operational reminders · human review before intervention.",
      kpis: [
        { label: "OPEN", caption: "current facility" },
        { label: "URGENT", caption: "requires review" },
        { label: "REPORTING", caption: "missing / late" },
        { label: "ADMIN", caption: "visa / document" },
      ],
      filters: {
        open: "Open",
        urgent: "Urgent",
        reporting: "Reporting",
        admin: "Admin",
      },
      chipCounts: {
        open: "Open {count}",
        urgent: "Urgent {count}",
        reporting: "Reporting {count}",
        admin: "Admin {count}",
      },
      summaryHighLabel: "HIGH PRIORITY",
      summaryHighValue: "{count} · needs review",
      summaryDueLabel: "DUE SOON",
      summaryDueValue: "{count} · next 7 days",
      queueTitle: "ALERT QUEUE",
      openAlertsTitle: "OPEN ALERTS",
      reviewButton: "Review",
      selectedTitle: "SELECTED ALERT",
      factExpected: "Expected · {value}",
      factStatus: "Status · {value}",
      factRecommended: "Recommended · {value}",
      recommendedValue: "Review report context",
      expectedValues: {
        missingReport: "{value} today",
        unreadMessage: "Reply within 15 min",
        visaRenewal: "Renewal within {value} days",
        adminDocument: "Review this week",
      },
      statusValues: {
        missingReport: "Not submitted",
        unreadMessage: "Worker waiting",
        visaRenewal: "Window open",
        adminDocument: "Document pending",
      },
      noteTitle: "Attention, not punishment",
      noteBody:
        "Alerts never trigger automatic discipline or private-data access.",
      openReports: "Open Reports",
      createFollowUp: "Create follow-up",
      footer:
        "Resolved alerts remain in audit history; private Health / Stress / Life data never appears here.",
      privacyTitle: "Privacy boundary",
      privacyBody:
        "Only operational alerts. Health / Stress / Life data never appears here.",
      resolvedLine:
        "Resolved today · manager response aging {value} · within target",
      openFollowUpCenter: "Open Follow-up Center",
      viewAllWorkers: "View all workers",
      titles: {
        missingReport: "Missing Daily Report",
        unreadMessage: "Unread message",
        visaRenewal: "Visa renewal",
        adminDocument: "Admin document",
      },
      metaDesktop: {
        missingReport: "Missing Daily Report · Expected {value} · no submission",
        unreadMessage: "Unread message · {value} min · worker waiting",
        visaRenewal: "Visa renewal window · {value} days remaining",
        adminDocument: "Admin document · Review due this week",
      },
      metaMobile: {
        missingReport: "Expected {value} · no submission",
        unreadMessage: "{value} min · worker waiting for response",
        visaRenewal: "{value} days remaining · renewal window",
        adminDocument: "Review due this week · facility record",
      },
      severity: { high: "HIGH", medium: "MEDIUM", low: "LOW" },
      actions: {
        reviewReports: "Review Reports ›",
        openCommunication: "Open Communication ›",
        reviewWorker: "Review worker ›",
        openWorkerDetail: "Open worker detail ›",
      },
      emptyTitle: "No alerts in this view",
      emptyBody: "Operational alerts appear here when they need manager review.",
    },
  },
  id: {
    center: {
      titleDesktop: "Pusat Tindak Lanjut",
      subtitleMobile: "Antrean operasional yang ditinjau manusia",
      subtitleDesktop:
        "Antrean tindak lanjut operasional yang ditinjau manusia · menunggu lebih dulu.",
      kpis: [
        { label: "TERBUKA", caption: "menunggu tinjauan" },
        { label: "PRIORITAS TINGGI", caption: "tinjauan manajer" },
        { label: "TERKIRIM HARI INI", caption: "pekerja diberi tahu" },
        { label: "SELESAI", caption: "7 hari terakhir" },
      ],
      queueTitle: "ANTREAN TINDAK LANJUT",
      selectedTitle: "SINYAL TERPILIH",
      reviewButton: "Tinjau",
      reviewLink: "Tinjau ›",
      factSource: "Sumber · {value}",
      factExpected: "Diharapkan · {value}",
      factCurrent: "Saat ini · {value}",
      humanReviewTitle: "Hanya tinjauan manusia",
      humanReviewDesktop:
        "Manajer memutuskan apakah tindak lanjut pantas dilakukan. Tanpa sanksi otomatis.",
      humanReviewMobile:
        "Sinyal hanya memicu perhatian manajer. Sinyal tidak pernah memicu sanksi otomatis atau menggunakan data pribadi Health / Stress / Life.",
      reviewSignal: "Tinjau sinyal",
      composeButton: "Tulis",
      footerDesktop:
        "Data pribadi Health / Stress / Life tidak pernah masuk ke sinyal tindak lanjut.",
      footerMobile:
        "Menunggu lebih dulu · manajer memutuskan apakah tindak lanjut pantas dilakukan",
    },
    filters: {
      pending: "Menunggu",
      sent: "Terkirim",
      resolved: "Selesai",
      highPriority: "Prioritas tinggi",
    },
    chipCounts: {
      pending: "Menunggu {count}",
      high: "Tinggi {count}",
      sent: "Terkirim {count}",
      resolved: "Selesai {count}",
    },
    time: { today: "Hari ini", yesterday: "Kemarin" },
    priority: { high: "TINGGI", medium: "SEDANG", low: "RENDAH" },
    priorityTitle: { high: "Tinggi", medium: "Sedang", low: "Rendah" },
    signalTitles: {
      missingReport: "Laporan Harian belum ada",
      unreadMessage: "Pesan pekerja belum dibaca",
      visaWindow: "Jendela perpanjangan visa",
      visaAdminWindow: "Jendela visa / admin",
      workLog: "Sinyal Catatan Kerja",
    },
    signalMetaDesktop: {
      missingReport: "Laporan Harian belum ada · diharapkan {value}",
      unreadMessage: "Pesan pekerja belum dibaca · {value} mnt",
      visaWindow: "Jendela perpanjangan visa · {value} hari",
      visaAdminWindow: "Jendela visa / admin · {value} hari",
      workLog: "Sinyal Catatan Kerja · catatan manajer",
    },
    signalMetaMobile: {
      missingReport: "Diharapkan {value} · sumber: Laporan Harian",
      unreadMessage: "{value} mnt · sumber: Komunikasi",
      visaWindow: "{value} hari tersisa · sumber: Visa/Admin",
      visaAdminWindow: "{value} hari tersisa · sumber: Visa/Admin",
      workLog: "catatan manajer · sumber: Catatan Kerja",
    },
    signalCurrent: {
      notSubmitted: "Belum dikirim",
      awaitingReply: "Menunggu balasan manajer",
      windowOpen: "Jendela perpanjangan terbuka",
      noteRecorded: "Catatan manajer tercatat",
    },
    signalCurrentLower: {
      notSubmitted: "belum dikirim",
      awaitingReply: "menunggu balasan manajer",
      windowOpen: "jendela perpanjangan terbuka",
      noteRecorded: "catatan manajer tercatat",
    },
    signalExpected: {
      reportAt: "{value} hari ini",
      replyWithin: "Balas dalam 15 mnt",
      renewalBefore: "Perpanjangan dalam {value} hari",
      reviewThisWeek: "Tinjau minggu ini",
    },
    states: {
      loadingTitle: "Memuat antrean tindak lanjut…",
      loadingBody:
        "Sinyal bersifat baca-saja sampai antrean selesai dimuat.",
      emptyTitle: "Tidak ada sinyal tindak lanjut di tampilan ini",
      emptyBody:
        "Tidak ada yang perlu ditinjau manajer sekarang. Sinyal baru muncul di sini lebih dulu.",
      offlineTitle: "Luring · antrean dari sinkronisasi terakhir",
      offlineBody:
        "Tindak lanjut tidak dapat dikirim saat luring. Item antrean tetap terbuka.",
    },
    review: {
      breadcrumb: "Tindak Lanjut",
      title: "Tinjau tindak lanjut",
      subtitle: "Putuskan apakah menghubungi pekerja itu pantas",
      headerMeta: "{title} · {priority} · diharapkan {value}",
      contextTitle: "KONTEKS SINYAL",
      expectedLabel: "Diharapkan · {value}",
      currentLabel: "Saat ini · {value}",
      logLabels: {
        lastReport: "laporan terakhir",
        markedMissing: "ditandai belum ada",
        noWorkerMessage: "tidak ada pesan pekerja",
        messageReceived: "pesan pekerja diterima",
        windowOpened: "jendela perpanjangan dibuka",
        noteRecorded: "catatan manajer tercatat",
      },
      relatedTitle: "CATATAN TERKAIT",
      relatedRecords: "Riwayat Laporan Harian · Komunikasi · Catatan Kerja",
      decisionTitle: "Keputusan manajer",
      decisionBody:
        "Kirim pengingat Laporan Harian yang netral. Jangan menyimpulkan pelanggaran hanya dari satu laporan yang belum dikirim.",
      checks: [
        "Sumber terverifikasi",
        "Fasilitas dikonfirmasi",
        "Tanpa data pribadi Health / Stress / Life",
      ],
      composeCta: "Tulis tindak lanjut",
      backCta: "Kembali ke antrean",
      footer:
        "Tinjauan manusia wajib · sinyal hanya berupa petunjuk operasional.",
      notFound: "Sinyal tidak ditemukan",
    },
    compose: {
      breadcrumb: "Tindak Lanjut",
      title: "Tulis tindak lanjut",
      subtitle: "{worker} · {reason}",
      recipientLabel: "Penerima · {value}",
      reasonLabel: "Alasan · {value}",
      languageLabel: "Bahasa · {value}",
      priorityLabel: "Prioritas · {value}",
      priorityValue: "{priority} · tinjauan manusia",
      reasonsShort: {
        missingReport: "Laporan belum ada",
        unreadMessage: "Pesan belum dibaca",
        visaWindow: "Perpanjangan visa",
        visaAdminWindow: "Visa / admin",
        workLog: "Catatan Kerja",
      },
      reasonsLong: {
        missingReport: "Laporan Harian belum ada",
        unreadMessage: "pesan pekerja belum dibaca",
        visaWindow: "jendela perpanjangan visa",
        visaAdminWindow: "jendela visa / admin",
        workLog: "sinyal Catatan Kerja",
      },
      templateLabel: "TEMPLAT",
      templates: {
        daily: "Laporan Harian",
        checkin: "Check-in",
        documentation: "Dokumentasi",
      },
      originalLabel: "PESAN ASLI · Bahasa Indonesia",
      translationLabel: "PRATINJAU TERJEMAHAN · 日本語",
      managerNoteLabel: "Catatan manajer · tidak dikirim ke pekerja",
      managerNoteBody:
        "Alasan tercatat: sinyal laporan belum ada ditinjau pukul {value}.",
      beforeSendingTitle: "Sebelum mengirim",
      beforeSendingChecks: [
        "Penerima dikonfirmasi",
        "Sinyal ditinjau",
        "Terjemahan ditinjau",
        "Kata-kata netral",
        "Tanpa data pribadi",
      ],
      sendCta: "Kirim tindak lanjut",
      backCta: "Kembali ke tinjauan",
      footer:
        "Teks asli + terjemahan disimpan · pekerja mengendalikan respons dan data pribadinya.",
    },
    sent: {
      title: "Tindak Lanjut Terkirim",
      subtitle: "Disimpan ke riwayat tindak lanjut",
      subtitleDesktop:
        "Riwayat tindak lanjut manusia · catatan mencerminkan tindakan manajer.",
      pill: "Terkirim",
      signalLabel: "Sinyal · {value}",
      templateLabel: "Templat · {value}",
      sentLabel: "Terkirim · {value}",
      managerLabel: "Manajer · {value}",
      statusLabel: "Status · {value}",
      statusValue: "Menunggu balasan",
      historyTitle: "Riwayat tindak lanjut diperbarui",
      historyBody:
        "Pesan asli dan terjemahannya disimpan. Tindakan ini tercermin dalam riwayat operasional; tidak ada keputusan otomatis yang tersirat.",
      privacyTitle: "Batas privasi",
      privacyBody:
        "Data pribadi Health / Stress / Life tetap tidak tersedia bagi Manajer.",
      backCta: "Kembali ke Tindak Lanjut",
      heroTitle: "Tindak lanjut terkirim · {worker}",
      heroBody:
        "Disimpan ke riwayat tindak lanjut pekerja dan lini masa operasional.",
      metrics: {
        template: "TEMPLAT",
        sent: "TERKIRIM",
        manager: "MANAJER",
        status: "STATUS",
      },
      historyTitleDesktop: "RIWAYAT TINDAK LANJUT",
      historySignals: {
        dailyReportReview: "Tinjauan Laporan Harian",
        missingReport: "Laporan tidak ada",
        clarification: "Klarifikasi",
      },
      historyStatus: { sent: "Terkirim", handled: "Ditangani" },
      historyNext: {
        awaitReply: "Menunggu balasan",
        reviewLater: "Tinjau nanti",
      },
      boundaryDesktop:
        "Hanya aktivitas tindak lanjut oleh manusia; tidak ada keputusan otomatis atau sanksi yang tersirat.",
      privacyStripDesktop:
        "Batas privasi · Tampilan pemberi kerja tetap terbatas pada catatan operasional / profesional yang diizinkan. Data Health, Stress, Life, keluarga/pribadi, dan eCoin pribadi tetap dikecualikan.",
    },
    notSent: {
      title: "Tindak Lanjut Tidak Terkirim",
      subtitle: "Tindakan yang menunggu tetap terbuka",
      subtitleDesktop:
        "Tindakan yang menunggu tetap terbuka sampai tindakan manajer yang sah berhasil.",
      pill: "Tidak terkirim",
      reviewRequired: "{title} · perlu tinjauan manusia",
      failedLine: "Pengiriman gagal · item antrean tetap terbuka",
      draftTitle: "Draf tersimpan",
      draftBody:
        "Penerima, sinyal yang ditinjau, templat terpilih, pesan asli dan pratinjau terjemahan tetap tersedia.",
      retryTitle: "Coba lagi dengan aman",
      retryBody:
        "Validasi ulang konteks pekerja + fasilitas sebelum mengirim lagi. Jangan mengirim ganda saat status belum diketahui.",
      returnCta: "Kembali ke Penulisan",
      backCta: "Kembali ke Antrean",
      footer:
        "Tidak ada status berhasil yang ditampilkan sampai pengiriman berhasil.",
      bannerTitle: "Tindak lanjut tidak terkirim",
      bannerBody:
        "Tidak ada keberhasilan yang dicatat. Biarkan item antrean tetap terbuka dan pertahankan konteks yang sudah ditinjau.",
      draftTitleDesktop: "DRAF TERSIMPAN",
      retryTitleDesktop: "COBA LAGI DENGAN AMAN",
      retryBodyDesktop:
        "Validasi ulang konteks pekerja dan fasilitas, pertahankan bahasa yang netral, dan coba lagi hanya setelah koneksi/validasi berhasil.",
      boundaryDesktop:
        "Tindakan yang menunggu tetap terbuka. Kegagalan tidak pernah membuat catatan riwayat tindak lanjut.",
      privacyStripDesktop:
        "Batas privasi · Tampilan pemberi kerja tetap terbatas pada catatan operasional / profesional yang diizinkan. Data Health, Stress, Life, keluarga/pribadi, dan eCoin pribadi tetap dikecualikan.",
    },
    alerts: {
      subtitleMobile: "Antrean tindakan · visa / pelaporan / admin",
      subtitleDesktop:
        "Pengingat operasional yang dapat ditindaklanjuti · tinjauan manusia sebelum intervensi.",
      kpis: [
        { label: "TERBUKA", caption: "fasilitas saat ini" },
        { label: "MENDESAK", caption: "perlu tinjauan" },
        { label: "PELAPORAN", caption: "belum ada / terlambat" },
        { label: "ADMIN", caption: "visa / dokumen" },
      ],
      filters: {
        open: "Terbuka",
        urgent: "Mendesak",
        reporting: "Pelaporan",
        admin: "Admin",
      },
      chipCounts: {
        open: "Terbuka {count}",
        urgent: "Mendesak {count}",
        reporting: "Pelaporan {count}",
        admin: "Admin {count}",
      },
      summaryHighLabel: "PRIORITAS TINGGI",
      summaryHighValue: "{count} · perlu tinjauan",
      summaryDueLabel: "SEGERA JATUH TEMPO",
      summaryDueValue: "{count} · 7 hari ke depan",
      queueTitle: "ANTREAN PERINGATAN",
      openAlertsTitle: "PERINGATAN TERBUKA",
      reviewButton: "Tinjau",
      selectedTitle: "PERINGATAN TERPILIH",
      factExpected: "Diharapkan · {value}",
      factStatus: "Status · {value}",
      factRecommended: "Disarankan · {value}",
      recommendedValue: "Tinjau konteks laporan",
      expectedValues: {
        missingReport: "{value} hari ini",
        unreadMessage: "Balas dalam 15 mnt",
        visaRenewal: "Perpanjangan dalam {value} hari",
        adminDocument: "Tinjau minggu ini",
      },
      statusValues: {
        missingReport: "Belum dikirim",
        unreadMessage: "Pekerja menunggu",
        visaRenewal: "Jendela terbuka",
        adminDocument: "Dokumen tertunda",
      },
      noteTitle: "Perhatian, bukan hukuman",
      noteBody:
        "Peringatan tidak pernah memicu sanksi otomatis atau akses data pribadi.",
      openReports: "Buka Laporan",
      createFollowUp: "Buat tindak lanjut",
      footer:
        "Peringatan yang selesai tetap ada di riwayat audit; data pribadi Health / Stress / Life tidak pernah muncul di sini.",
      privacyTitle: "Batas privasi",
      privacyBody:
        "Hanya peringatan operasional. Data Health / Stress / Life tidak pernah muncul di sini.",
      resolvedLine:
        "Selesai hari ini · umur respons manajer {value} · sesuai target",
      openFollowUpCenter: "Buka Pusat Tindak Lanjut",
      viewAllWorkers: "Lihat semua pekerja",
      titles: {
        missingReport: "Laporan Harian belum ada",
        unreadMessage: "Pesan belum dibaca",
        visaRenewal: "Perpanjangan visa",
        adminDocument: "Dokumen admin",
      },
      metaDesktop: {
        missingReport:
          "Laporan Harian belum ada · Diharapkan {value} · belum ada kiriman",
        unreadMessage: "Pesan belum dibaca · {value} mnt · pekerja menunggu",
        visaRenewal: "Jendela perpanjangan visa · {value} hari tersisa",
        adminDocument: "Dokumen admin · Tinjauan jatuh tempo minggu ini",
      },
      metaMobile: {
        missingReport: "Diharapkan {value} · belum ada kiriman",
        unreadMessage: "{value} mnt · pekerja menunggu respons",
        visaRenewal: "{value} hari tersisa · jendela perpanjangan",
        adminDocument: "Tinjauan jatuh tempo minggu ini · catatan fasilitas",
      },
      severity: { high: "TINGGI", medium: "SEDANG", low: "RENDAH" },
      actions: {
        reviewReports: "Tinjau Laporan ›",
        openCommunication: "Buka Komunikasi ›",
        reviewWorker: "Tinjau pekerja ›",
        openWorkerDetail: "Buka detail pekerja ›",
      },
      emptyTitle: "Tidak ada peringatan di tampilan ini",
      emptyBody:
        "Peringatan operasional muncul di sini saat memerlukan tinjauan manajer.",
    },
  },
  ja: {
    center: {
      titleDesktop: "フォローアップセンター",
      subtitleMobile: "人によるレビュー前提の業務キュー",
      subtitleDesktop: "人がレビューする業務フォローアップキュー · 保留を優先。",
      kpis: [
        { label: "未対応", caption: "レビュー待ち" },
        { label: "高優先度", caption: "マネージャー確認" },
        { label: "本日送信", caption: "ワーカーへ通知済み" },
        { label: "解決済み", caption: "過去7日間" },
      ],
      queueTitle: "フォローアップキュー",
      selectedTitle: "選択中のシグナル",
      reviewButton: "確認",
      reviewLink: "確認 ›",
      factSource: "ソース · {value}",
      factExpected: "予定 · {value}",
      factCurrent: "現状 · {value}",
      humanReviewTitle: "人によるレビューのみ",
      humanReviewDesktop:
        "フォローアップが適切かはマネージャーが判断します。自動的な懲戒はありません。",
      humanReviewMobile:
        "シグナルはマネージャーの注意を促すだけです。自動的な懲戒を発動したり、個人のHealth / Stress / Lifeデータを使うことはありません。",
      reviewSignal: "シグナルを確認",
      composeButton: "作成",
      footerDesktop:
        "個人のHealth / Stress / Lifeデータがフォローアップシグナルに入ることはありません。",
      footerMobile:
        "保留を優先 · フォローアップが適切かはマネージャーが判断します",
    },
    filters: {
      pending: "保留中",
      sent: "送信済み",
      resolved: "解決済み",
      highPriority: "高優先度",
    },
    chipCounts: {
      pending: "保留中 {count}",
      high: "高 {count}",
      sent: "送信済み {count}",
      resolved: "解決済み {count}",
    },
    time: { today: "本日", yesterday: "昨日" },
    priority: { high: "高", medium: "中", low: "低" },
    priorityTitle: { high: "高", medium: "中", low: "低" },
    signalTitles: {
      missingReport: "日報未提出",
      unreadMessage: "未読のワーカーメッセージ",
      visaWindow: "ビザ更新期間",
      visaAdminWindow: "ビザ / 管理期間",
      workLog: "作業ログのシグナル",
    },
    signalMetaDesktop: {
      missingReport: "日報未提出 · 予定 {value}",
      unreadMessage: "未読のワーカーメッセージ · {value}分",
      visaWindow: "ビザ更新期間 · {value}日",
      visaAdminWindow: "ビザ / 管理期間 · {value}日",
      workLog: "作業ログのシグナル · マネージャーメモ",
    },
    signalMetaMobile: {
      missingReport: "予定 {value} · ソース: 日報",
      unreadMessage: "{value}分 · ソース: コミュニケーション",
      visaWindow: "残り{value}日 · ソース: ビザ/管理",
      visaAdminWindow: "残り{value}日 · ソース: ビザ/管理",
      workLog: "マネージャーメモ · ソース: 作業ログ",
    },
    signalCurrent: {
      notSubmitted: "未提出",
      awaitingReply: "マネージャーの返信待ち",
      windowOpen: "更新期間が開始",
      noteRecorded: "マネージャーメモを記録",
    },
    signalCurrentLower: {
      notSubmitted: "未提出",
      awaitingReply: "マネージャーの返信待ち",
      windowOpen: "更新期間が開始",
      noteRecorded: "マネージャーメモを記録",
    },
    signalExpected: {
      reportAt: "本日 {value}",
      replyWithin: "15分以内に返信",
      renewalBefore: "{value}日以内に更新",
      reviewThisWeek: "今週中に確認",
    },
    states: {
      loadingTitle: "フォローアップキューを読み込み中…",
      loadingBody: "キューの読み込みが終わるまでシグナルは閲覧のみです。",
      emptyTitle: "このビューにフォローアップシグナルはありません",
      emptyBody:
        "現在マネージャーの確認が必要な項目はありません。新しいシグナルはまずここに表示されます。",
      offlineTitle: "オフライン · 最終同期時点のキューを表示",
      offlineBody:
        "オフライン中はフォローアップを送信できません。キュー項目は開いたままです。",
    },
    review: {
      breadcrumb: "フォローアップ",
      title: "フォローアップの確認",
      subtitle: "ワーカーへの連絡が適切かを判断します",
      headerMeta: "{title} · {priority} · 予定 {value}",
      contextTitle: "シグナルの背景",
      expectedLabel: "予定 · {value}",
      currentLabel: "現状 · {value}",
      logLabels: {
        lastReport: "前回の日報",
        markedMissing: "未提出として記録",
        noWorkerMessage: "ワーカーからの連絡なし",
        messageReceived: "ワーカーのメッセージを受信",
        windowOpened: "更新期間が開始",
        noteRecorded: "マネージャーメモを記録",
      },
      relatedTitle: "関連レコード",
      relatedRecords: "日報履歴 · コミュニケーション · 作業ログ",
      decisionTitle: "マネージャーの判断",
      decisionBody:
        "中立的な日報リマインダーを送信します。未提出だけを理由に不正行為を推測しないでください。",
      checks: [
        "ソース確認済み",
        "施設確認済み",
        "個人のHealth / Stress / Lifeデータなし",
      ],
      composeCta: "フォローアップを作成",
      backCta: "キューに戻る",
      footer: "人によるレビューが必須 · シグナルは業務上の手がかりにすぎません。",
      notFound: "シグナルが見つかりません",
    },
    compose: {
      breadcrumb: "フォローアップ",
      title: "フォローアップの作成",
      subtitle: "{worker} · {reason}",
      recipientLabel: "宛先 · {value}",
      reasonLabel: "理由 · {value}",
      languageLabel: "言語 · {value}",
      priorityLabel: "優先度 · {value}",
      priorityValue: "{priority} · 人によるレビュー",
      reasonsShort: {
        missingReport: "日報未提出",
        unreadMessage: "未読メッセージ",
        visaWindow: "ビザ更新",
        visaAdminWindow: "ビザ / 管理",
        workLog: "作業ログ",
      },
      reasonsLong: {
        missingReport: "日報未提出",
        unreadMessage: "未読のワーカーメッセージ",
        visaWindow: "ビザ更新期間",
        visaAdminWindow: "ビザ / 管理期間",
        workLog: "作業ログのシグナル",
      },
      templateLabel: "テンプレート",
      templates: {
        daily: "日報",
        checkin: "チェックイン",
        documentation: "書類",
      },
      originalLabel: "原文メッセージ · Bahasa Indonesia",
      translationLabel: "翻訳プレビュー · 日本語",
      managerNoteLabel: "マネージャーメモ · ワーカーには送信されません",
      managerNoteBody: "記録した理由: 未提出シグナルを{value}に確認。",
      beforeSendingTitle: "送信前の確認",
      beforeSendingChecks: [
        "宛先を確認",
        "シグナルを確認",
        "翻訳を確認",
        "中立的な表現",
        "個人データなし",
      ],
      sendCta: "フォローアップを送信",
      backCta: "確認に戻る",
      footer:
        "原文 + 翻訳を保持 · 返信と個人データはワーカーが管理します。",
    },
    sent: {
      title: "フォローアップ送信済み",
      subtitle: "フォローアップ履歴に保存しました",
      subtitleDesktop:
        "人によるフォローアップ履歴 · 記録はマネージャーの対応を反映します。",
      pill: "送信済み",
      signalLabel: "シグナル · {value}",
      templateLabel: "テンプレート · {value}",
      sentLabel: "送信 · {value}",
      managerLabel: "マネージャー · {value}",
      statusLabel: "ステータス · {value}",
      statusValue: "返信待ち",
      historyTitle: "フォローアップ履歴を更新しました",
      historyBody:
        "原文と翻訳文は保持されました。この操作は業務履歴に反映されますが、自動的な判断は一切含まれません。",
      privacyTitle: "プライバシー境界",
      privacyBody:
        "個人のHealth / Stress / Lifeデータはマネージャーには引き続き非公開です。",
      backCta: "フォローアップに戻る",
      heroTitle: "フォローアップ送信済み · {worker}",
      heroBody:
        "ワーカーのフォローアップ履歴と業務タイムラインに保存しました。",
      metrics: {
        template: "テンプレート",
        sent: "送信",
        manager: "マネージャー",
        status: "ステータス",
      },
      historyTitleDesktop: "フォローアップ履歴",
      historySignals: {
        dailyReportReview: "日報の確認",
        missingReport: "日報未提出",
        clarification: "確認連絡",
      },
      historyStatus: {
        sent: "送信済み",
        handled: "対応済み",
      },
      historyNext: {
        awaitReply: "返信待ち",
        reviewLater: "後で確認",
      },
      boundaryDesktop:
        "人によるフォローアップ活動のみです。自動的な判断や懲戒処分は一切含みません。",
      privacyStripDesktop:
        "プライバシー境界 · 雇用者の閲覧は許可された業務・専門記録に限定されます。Health、Stress、Life、家族/私的データ、個人のeCoinは対象外のままです。",
    },
    notSent: {
      title: "フォローアップ未送信",
      subtitle: "保留中の対応は開いたままです",
      subtitleDesktop:
        "有効なマネージャーの操作が成功するまで、保留中の対応は開いたままです。",
      pill: "未送信",
      reviewRequired: "{title} · 人によるレビューが必要",
      failedLine: "配信に失敗 · キュー項目は開いたままです",
      draftTitle: "下書きを保持",
      draftBody:
        "宛先、確認済みシグナル、選択したテンプレート、原文メッセージと翻訳プレビューはそのまま利用できます。",
      retryTitle: "安全な再試行",
      retryBody:
        "再送信の前にワーカーと施設の状況を再確認してください。状態が不明なまま重複送信しないでください。",
      returnCta: "作成に戻る",
      backCta: "キューに戻る",
      footer: "配信が成功するまで成功状態は表示されません。",
      bannerTitle: "フォローアップは送信されませんでした",
      bannerBody:
        "成功は記録されません。キュー項目を開いたままにし、確認済みの文脈を保持してください。",
      draftTitleDesktop: "下書きを保持",
      retryTitleDesktop: "安全な再試行",
      retryBodyDesktop:
        "ワーカーと施設の状況を再確認し、中立的な表現を保ち、接続と検証が成功してから再試行してください。",
      boundaryDesktop:
        "保留中の対応は開いたままです。失敗がフォローアップ履歴の記録を作ることはありません。",
      privacyStripDesktop:
        "プライバシー境界 · 雇用者の閲覧は許可された業務・専門記録に限定されます。Health、Stress、Life、家族/私的データ、個人のeCoinは対象外のままです。",
    },
    alerts: {
      subtitleMobile: "対応キュー · ビザ / レポート / 管理",
      subtitleDesktop: "対応可能な業務リマインダー · 介入前に人がレビュー。",
      kpis: [
        { label: "未対応", caption: "現在の施設" },
        { label: "緊急", caption: "要確認" },
        { label: "レポート", caption: "未提出 / 遅延" },
        { label: "管理", caption: "ビザ / 書類" },
      ],
      filters: {
        open: "未対応",
        urgent: "緊急",
        reporting: "レポート",
        admin: "管理",
      },
      chipCounts: {
        open: "未対応 {count}",
        urgent: "緊急 {count}",
        reporting: "レポート {count}",
        admin: "管理 {count}",
      },
      summaryHighLabel: "高優先度",
      summaryHighValue: "{count}件 · 要確認",
      summaryDueLabel: "期限が近い",
      summaryDueValue: "{count}件 · 今後7日間",
      queueTitle: "アラートキュー",
      openAlertsTitle: "未対応アラート",
      reviewButton: "確認",
      selectedTitle: "選択中のアラート",
      factExpected: "予定 · {value}",
      factStatus: "ステータス · {value}",
      factRecommended: "推奨 · {value}",
      recommendedValue: "レポートの背景を確認",
      expectedValues: {
        missingReport: "本日 {value}",
        unreadMessage: "15分以内に返信",
        visaRenewal: "{value}日以内に更新",
        adminDocument: "今週中に確認",
      },
      statusValues: {
        missingReport: "未提出",
        unreadMessage: "ワーカーが待機中",
        visaRenewal: "更新期間が開始",
        adminDocument: "書類が保留中",
      },
      noteTitle: "注意喚起であり、罰則ではありません",
      noteBody:
        "アラートが自動的な懲戒や個人データへのアクセスを引き起こすことはありません。",
      openReports: "レポートを開く",
      createFollowUp: "フォローアップを作成",
      footer:
        "解決済みアラートは監査履歴に残ります。個人のHealth / Stress / Lifeデータがここに現れることはありません。",
      privacyTitle: "プライバシー境界",
      privacyBody:
        "業務アラートのみ。Health / Stress / Lifeデータがここに現れることはありません。",
      resolvedLine: "本日解決 · マネージャー応答経過 {value} · 目標内",
      openFollowUpCenter: "フォローアップセンターを開く",
      viewAllWorkers: "すべてのワーカーを表示",
      titles: {
        missingReport: "日報未提出",
        unreadMessage: "未読メッセージ",
        visaRenewal: "ビザ更新",
        adminDocument: "管理書類",
      },
      metaDesktop: {
        missingReport: "日報未提出 · 予定 {value} · 提出なし",
        unreadMessage: "未読メッセージ · {value}分 · ワーカーが待機中",
        visaRenewal: "ビザ更新期間 · 残り{value}日",
        adminDocument: "管理書類 · 今週確認期限",
      },
      metaMobile: {
        missingReport: "予定 {value} · 提出なし",
        unreadMessage: "{value}分 · ワーカーが返信を待っています",
        visaRenewal: "残り{value}日 · 更新期間",
        adminDocument: "今週確認期限 · 施設記録",
      },
      severity: { high: "高", medium: "中", low: "低" },
      actions: {
        reviewReports: "レポートを確認 ›",
        openCommunication: "コミュニケーションを開く ›",
        reviewWorker: "ワーカーを確認 ›",
        openWorkerDetail: "ワーカー詳細を開く ›",
      },
      emptyTitle: "このビューにアラートはありません",
      emptyBody:
        "マネージャーの確認が必要になると、業務アラートがここに表示されます。",
    },
  },
});
