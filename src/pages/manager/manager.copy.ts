import { defineSectionCopy } from "@/i18n/copy";

export interface ManagerCopy {
  dashboard: {
    subtitle: string;
    kpis: { label: string; caption: string }[];
    workerActivity: string;
    activityEvents: {
      submitted: string;
      verified: string;
      notSubmitted: string;
      followUpReply: string;
      visaExpires: string;
      unreadComm: string;
    };
    activityStatuses: {
      completed: string;
      review: string;
      admin: string;
      open: string;
    };
    needsAttention: string;
    attentionLines: string[];
    recentCommunication: string;
    readAt: string;
    openMessages: string;
    privacyStrip: string;
  };
  reports: {
    subtitle: string;
    searchPlaceholder: string;
    filters: { today: string; submitted: string; missing: string; needsFollowUp: string };
    metricCompletion: string;
    metricCompletionCaption: string;
    metricWorkerLed: string;
    metricWorkerLedCaption: string;
    metricResponse: string;
    metricResponseCaption: string;
    metricUnreadAging: string;
    metricUnreadAgingCaption: string;
    dailyReports: string;
    rowCaption: string;
    missingCaption: string;
    pendingCaption: string;
    noMatch: string;
    privacyTitle: string;
    privacyBody: string;
    openGenerator: string;
  };
  detail: {
    title: string;
    subtitle: string;
    workerOwned: string;
    metaCaption: string;
    contentView: string;
    original: string;
    translatedId: string;
    fields: {
      reportStatus: string;
      resident: string;
      residentCondition: string;
      meal: string;
      quickNotes: string;
      followUp: string;
    };
    workerTimeline: string;
    timelineActivity: string;
    timelineComm: string;
    timelineSubmitted: string;
    timelineVerified: string;
    timelinePending: string;
    employerAccess: string;
    employerAccessBody: string;
    viewWorker: string;
    workerTimelineBtn: string;
    acknowledge: string;
    verifiedAt: string;
    notFound: string;
    toastTitle: string;
    toastDesc: string;
  };
}

export const MANAGER_COPY = defineSectionCopy<ManagerCopy>({
  en: {
    dashboard: {
      subtitle: "Manager operations · {facility} · Today",
      kpis: [
        { label: "WORKERS", caption: "Active" },
        { label: "REPORTS", caption: "Completion" },
        { label: "FOLLOW-UP", caption: "Pending" },
        { label: "UNREAD", caption: "Messages" },
        { label: "VISA/ADMIN", caption: "Need review" },
        { label: "WORKER INITIATED", caption: "Communication" },
        { label: "RESPONSE", caption: "Manager median" },
        { label: "OJT", caption: "Active modules" },
      ],
      workerActivity: "WORKER ACTIVITY",
      activityEvents: {
        submitted: "Daily report submitted",
        verified: "Daily report verified",
        notSubmitted: "Daily report not submitted yet",
        followUpReply: "Follow-up reply received",
        visaExpires: "Visa document expires soon",
        unreadComm: "Unread communication",
      },
      activityStatuses: {
        completed: "Completed",
        review: "Review",
        admin: "Admin",
        open: "Open",
      },
      needsAttention: "NEEDS ATTENTION",
      attentionLines: [
        "4 Follow-up pending",
        "2 Visa/Admin review",
        "3 unread worker messages",
      ],
      recentCommunication: "RECENT COMMUNICATION",
      readAt: "Read · 14:23",
      openMessages: "Open Messages",
      privacyStrip:
        "Operational access only · Private Health / Stress / Life and private eCoin remain unavailable.",
    },
    reports: {
      subtitle: "Daily Reports · operational reporting · generated manager output",
      searchPlaceholder: "Search worker / report…",
      filters: {
        today: "Today",
        submitted: "Submitted",
        missing: "Missing",
        needsFollowUp: "Needs follow-up",
      },
      metricCompletion: "COMPLETION",
      metricCompletionCaption: "{count} / 4 submitted",
      metricWorkerLed: "WORKER-LED",
      metricWorkerLedCaption: "of conversations",
      metricResponse: "MANAGER RESPONSE",
      metricResponseCaption: "median",
      metricUnreadAging: "UNREAD AGING",
      metricUnreadAgingCaption: "older than 15 min",
      dailyReports: "Daily Reports",
      rowCaption: "Daily Report · Caregiver",
      missingCaption: "Expected 08:00 · no submission",
      pendingCaption: "Expected before end of shift · no submission",
      noMatch: "No reports match this filter.",
      privacyTitle: "Privacy-safe operational records only",
      privacyBody:
        "Health / Stress / Life / private personal data excluded. Audit Export stays separate.",
      openGenerator: "Open report generator",
    },
    detail: {
      title: "Daily Report Detail",
      subtitle: "Operational employer workspace · privacy-safe access",
      workerOwned: "Worker-Owned",
      metaCaption: "Daily Report · Caregiver",
      contentView: "Content view",
      original: "Original",
      translatedId: "Translated · Bahasa Indonesia",
      fields: {
        reportStatus: "Report status",
        resident: "Resident",
        residentCondition: "Resident condition",
        meal: "Meal",
        quickNotes: "Quick notes",
        followUp: "Follow-up / issue",
      },
      workerTimeline: "Worker timeline",
      timelineActivity: "Work activity recorded",
      timelineComm: "Worker communication",
      timelineSubmitted: "Daily Report submitted",
      timelineVerified: "Manager verified report",
      timelinePending: "Manager review pending",
      employerAccess: "Employer access",
      employerAccessBody:
        "Operational / professional record only. Private Health / Life / Stress data excluded.",
      viewWorker: "View Worker",
      workerTimelineBtn: "Worker Timeline",
      acknowledge: "Acknowledge",
      verifiedAt: "Verified",
      notFound: "Report not found",
      toastTitle: "Report acknowledged",
      toastDesc: "verification recorded",
    },
  },
  id: {
    dashboard: {
      subtitle: "Operasional manajer · {facility} · Hari ini",
      kpis: [
        { label: "PEKERJA", caption: "Aktif" },
        { label: "LAPORAN", caption: "Penyelesaian" },
        { label: "TINDAK LANJUT", caption: "Menunggu" },
        { label: "BELUM DIBACA", caption: "Pesan" },
        { label: "VISA/ADMIN", caption: "Perlu tinjauan" },
        { label: "INISIATIF PEKERJA", caption: "Komunikasi" },
        { label: "RESPONS", caption: "Median manajer" },
        { label: "OJT", caption: "Modul aktif" },
      ],
      workerActivity: "AKTIVITAS PEKERJA",
      activityEvents: {
        submitted: "Laporan harian terkirim",
        verified: "Laporan harian terverifikasi",
        notSubmitted: "Laporan harian belum dikirim",
        followUpReply: "Balasan tindak lanjut diterima",
        visaExpires: "Dokumen visa segera kedaluwarsa",
        unreadComm: "Komunikasi belum dibaca",
      },
      activityStatuses: {
        completed: "Selesai",
        review: "Tinjau",
        admin: "Admin",
        open: "Buka",
      },
      needsAttention: "PERLU PERHATIAN",
      attentionLines: [
        "4 tindak lanjut menunggu",
        "2 tinjauan Visa/Admin",
        "3 pesan pekerja belum dibaca",
      ],
      recentCommunication: "KOMUNIKASI TERBARU",
      readAt: "Dibaca · 14:23",
      openMessages: "Buka Pesan",
      privacyStrip:
        "Akses operasional saja · Health / Stress / Life pribadi dan eCoin pribadi tetap tidak tersedia.",
    },
    reports: {
      subtitle: "Laporan Harian · pelaporan operasional · keluaran manajer",
      searchPlaceholder: "Cari pekerja / laporan…",
      filters: {
        today: "Hari ini",
        submitted: "Terkirim",
        missing: "Belum ada",
        needsFollowUp: "Perlu tindak lanjut",
      },
      metricCompletion: "PENYELESAIAN",
      metricCompletionCaption: "{count} / 4 terkirim",
      metricWorkerLed: "INISIATIF PEKERJA",
      metricWorkerLedCaption: "dari percakapan",
      metricResponse: "RESPONS MANAJER",
      metricResponseCaption: "median",
      metricUnreadAging: "UMUR BELUM DIBACA",
      metricUnreadAgingCaption: "lebih dari 15 mnt",
      dailyReports: "Laporan Harian",
      rowCaption: "Laporan Harian · Caregiver",
      missingCaption: "Diharapkan 08:00 · belum ada kiriman",
      pendingCaption: "Diharapkan sebelum akhir shift · belum ada kiriman",
      noMatch: "Tidak ada laporan yang cocok dengan filter ini.",
      privacyTitle: "Hanya catatan operasional yang aman-privasi",
      privacyBody:
        "Health / Stress / Life / data pribadi dikecualikan. Ekspor Audit tetap terpisah.",
      openGenerator: "Buka generator laporan",
    },
    detail: {
      title: "Detail Laporan Harian",
      subtitle: "Ruang kerja employer operasional · akses aman-privasi",
      workerOwned: "Milik Pekerja",
      metaCaption: "Laporan Harian · Caregiver",
      contentView: "Tampilan konten",
      original: "Asli",
      translatedId: "Terjemahan · Bahasa Indonesia",
      fields: {
        reportStatus: "Status laporan",
        resident: "Penghuni",
        residentCondition: "Kondisi penghuni",
        meal: "Makan",
        quickNotes: "Catatan cepat",
        followUp: "Tindak lanjut / masalah",
      },
      workerTimeline: "Linimasa pekerja",
      timelineActivity: "Aktivitas kerja tercatat",
      timelineComm: "Komunikasi pekerja",
      timelineSubmitted: "Laporan Harian terkirim",
      timelineVerified: "Manajer memverifikasi laporan",
      timelinePending: "Menunggu tinjauan manajer",
      employerAccess: "Akses employer",
      employerAccessBody:
        "Hanya catatan operasional / profesional. Data Health / Life / Stress pribadi dikecualikan.",
      viewWorker: "Lihat Pekerja",
      workerTimelineBtn: "Linimasa Pekerja",
      acknowledge: "Konfirmasi",
      verifiedAt: "Terverifikasi",
      notFound: "Laporan tidak ditemukan",
      toastTitle: "Laporan dikonfirmasi",
      toastDesc: "verifikasi tercatat",
    },
  },
  ja: {
    dashboard: {
      subtitle: "マネージャー業務 · {facility} · 本日",
      kpis: [
        { label: "ワーカー", caption: "稼働中" },
        { label: "レポート", caption: "提出率" },
        { label: "フォローアップ", caption: "保留中" },
        { label: "未読", caption: "メッセージ" },
        { label: "ビザ/管理", caption: "要確認" },
        { label: "ワーカー発信", caption: "コミュニケーション" },
        { label: "応答", caption: "マネージャー中央値" },
        { label: "OJT", caption: "有効モジュール" },
      ],
      workerActivity: "ワーカーアクティビティ",
      activityEvents: {
        submitted: "日報が提出されました",
        verified: "日報が確認されました",
        notSubmitted: "日報は未提出です",
        followUpReply: "フォローアップの返信を受信",
        visaExpires: "ビザ書類の期限が近づいています",
        unreadComm: "未読のコミュニケーション",
      },
      activityStatuses: {
        completed: "完了",
        review: "確認",
        admin: "管理",
        open: "開く",
      },
      needsAttention: "要対応",
      attentionLines: [
        "フォローアップ保留 4件",
        "ビザ/管理の確認 2件",
        "未読ワーカーメッセージ 3件",
      ],
      recentCommunication: "最近のコミュニケーション",
      readAt: "既読 · 14:23",
      openMessages: "メッセージを開く",
      privacyStrip:
        "業務アクセスのみ · 個人のHealth / Stress / Lifeデータと個人eCoinは利用できません。",
    },
    reports: {
      subtitle: "日報 · 業務レポート · マネージャー出力",
      searchPlaceholder: "ワーカー / レポートを検索…",
      filters: {
        today: "本日",
        submitted: "提出済み",
        missing: "未提出",
        needsFollowUp: "要フォローアップ",
      },
      metricCompletion: "提出率",
      metricCompletionCaption: "{count} / 4 提出済み",
      metricWorkerLed: "ワーカー発信",
      metricWorkerLedCaption: "会話のうち",
      metricResponse: "マネージャー応答",
      metricResponseCaption: "中央値",
      metricUnreadAging: "未読経過",
      metricUnreadAgingCaption: "15分以上",
      dailyReports: "日報",
      rowCaption: "日報 · ケアギバー",
      missingCaption: "予定 08:00 · 未提出",
      pendingCaption: "シフト終了までに提出予定 · 未提出",
      noMatch: "このフィルターに一致するレポートはありません。",
      privacyTitle: "プライバシー保護された業務記録のみ",
      privacyBody:
        "Health / Stress / Life / 個人データは除外。監査エクスポートは別管理です。",
      openGenerator: "レポートジェネレーターを開く",
    },
    detail: {
      title: "日報詳細",
      subtitle: "業務用雇用主ワークスペース · プライバシー保護アクセス",
      workerOwned: "労働者所有",
      metaCaption: "日報 · ケアギバー",
      contentView: "コンテンツ表示",
      original: "原文",
      translatedId: "翻訳 · Bahasa Indonesia",
      fields: {
        reportStatus: "レポートステータス",
        resident: "入居者",
        residentCondition: "入居者の状態",
        meal: "食事",
        quickNotes: "クイックノート",
        followUp: "フォローアップ / 問題",
      },
      workerTimeline: "ワーカータイムライン",
      timelineActivity: "作業活動を記録",
      timelineComm: "ワーカーのコミュニケーション",
      timelineSubmitted: "日報を提出",
      timelineVerified: "マネージャーがレポートを確認",
      timelinePending: "マネージャー確認待ち",
      employerAccess: "雇用主アクセス",
      employerAccessBody:
        "業務 / 職務記録のみ。個人のHealth / Life / Stressデータは除外。",
      viewWorker: "ワーカーを見る",
      workerTimelineBtn: "タイムライン",
      acknowledge: "承認",
      verifiedAt: "確認済み",
      notFound: "レポートが見つかりません",
      toastTitle: "レポートを承認しました",
      toastDesc: "確認が記録されました",
    },
  },
});
