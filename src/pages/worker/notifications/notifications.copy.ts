import { defineSectionCopy } from "@/i18n/copy";
import type { NotificationKind } from "./notificationsMock";

/** {title, body} of one notification card; employer names stay data. */
export interface NotificationItemCopy {
  title: (employer: string) => string;
  body: (employer: string) => string;
}

/**
 * Notifications (WD-53 base + A..I / mobile W-53). One key per Figma string;
 * EN copy is verbatim from the mocks. The page title ("Notifications") and
 * the breadcrumb ("Home") reuse common nav copy.
 */
export interface NotificationsCopy {
  subtitle: string;
  subtitleOffline: string;
  subtitleLoading: string;
  unreadCount: (count: number) => string;
  cachedUnreadCount: (count: number) => string;
  allRead: string;
  markAllRead: string;
  loadingLabel: string;
  groupToday: string;
  groupEarlier: string;
  offlineBanner: string;
  privacyNote: string;
  empty: {
    title: string;
    body: string;
    caption: string;
  };
  items: Record<NotificationKind, NotificationItemCopy>;
}

export const NOTIFICATIONS_COPY = defineSectionCopy<NotificationsCopy>({
  en: {
    subtitle: "Updates from EMENDA and items that may need your attention.",
    subtitleOffline: "Cached updates remain visible while you reconnect.",
    subtitleLoading: "Loading your latest updates…",
    unreadCount: (count) => `${count} unread`,
    cachedUnreadCount: (count) => `Cached · ${count} unread`,
    allRead: "All read",
    markAllRead: "Mark all as read",
    loadingLabel: "Loading notifications…",
    groupToday: "TODAY",
    groupEarlier: "EARLIER",
    offlineBanner:
      "You’re offline. Read status changes will sync after reconnecting.",
    privacyNote:
      "Notification previews avoid sensitive identity, document, emergency-contact, and private support details.",
    empty: {
      title: "No notifications yet",
      body: "Updates from EMENDA will appear here.",
      caption:
        "Important account, Japan-preparation, and employer-access updates will appear here.",
    },
    items: {
      employerInvite: {
        title: (employer) => `Employer invite · ${employer}`,
        body: () => "Review what will be shared before connecting.",
      },
      employerAccessActive: {
        title: () => "Employer access · Active",
        body: (employer) =>
          `${employer} is connected with your approved work-access scope.`,
      },
      employerAccessEnded: {
        title: () => "Employer access · Ended",
        body: (employer) =>
          `${employer} no longer has work access. Review the retained access history.`,
      },
      residenceExpiry: {
        title: () => "Residence status · Expiring soon",
        body: () => "60 days remaining · review your saved details.",
      },
      identityVerified: {
        title: () => "EMENDA · Identity verified",
        body: () => "Your verified identity is linked to your EMENDA ID.",
      },
      municipalReminder: {
        title: () => "Reminder · Municipal follow-up",
        body: () => "Tomorrow · open your private important dates.",
      },
    },
  },
  id: {
    subtitle:
      "Pembaruan dari EMENDA dan hal yang mungkin perlu perhatian Anda.",
    subtitleOffline:
      "Pembaruan tersimpan tetap terlihat saat Anda menyambung kembali.",
    subtitleLoading: "Memuat pembaruan terbaru Anda…",
    unreadCount: (count) => `${count} belum dibaca`,
    cachedUnreadCount: (count) => `Tersimpan · ${count} belum dibaca`,
    allRead: "Semua telah dibaca",
    markAllRead: "Tandai semua telah dibaca",
    loadingLabel: "Memuat notifikasi…",
    groupToday: "HARI INI",
    groupEarlier: "SEBELUMNYA",
    offlineBanner:
      "Anda sedang offline. Perubahan status baca akan disinkronkan setelah tersambung kembali.",
    privacyNote:
      "Pratinjau notifikasi tidak menampilkan detail sensitif identitas, dokumen, kontak darurat, dan dukungan pribadi.",
    empty: {
      title: "Belum ada notifikasi",
      body: "Pembaruan dari EMENDA akan muncul di sini.",
      caption:
        "Pembaruan penting tentang akun, persiapan ke Jepang, dan akses pemberi kerja akan muncul di sini.",
    },
    items: {
      employerInvite: {
        title: (employer) => `Undangan pemberi kerja · ${employer}`,
        body: () => "Tinjau apa yang akan dibagikan sebelum terhubung.",
      },
      employerAccessActive: {
        title: () => "Akses pemberi kerja · Aktif",
        body: (employer) =>
          `${employer} terhubung dengan cakupan akses kerja yang Anda setujui.`,
      },
      employerAccessEnded: {
        title: () => "Akses pemberi kerja · Berakhir",
        body: (employer) =>
          `${employer} tidak lagi memiliki akses kerja. Tinjau riwayat akses yang tersimpan.`,
      },
      residenceExpiry: {
        title: () => "Status tinggal · Segera berakhir",
        body: () => "Sisa 60 hari · tinjau detail tersimpan Anda.",
      },
      identityVerified: {
        title: () => "EMENDA · Identitas terverifikasi",
        body: () => "Identitas terverifikasi Anda tertaut ke EMENDA ID Anda.",
      },
      municipalReminder: {
        title: () => "Pengingat · Tindak lanjut kotamadya",
        body: () => "Besok · buka tanggal penting pribadi Anda.",
      },
    },
  },
  ja: {
    subtitle: "EMENDAからの更新と、ご確認が必要な項目のお知らせです。",
    subtitleOffline: "再接続するまで、キャッシュされた更新は表示されたままです。",
    subtitleLoading: "最新の更新を読み込んでいます…",
    unreadCount: (count) => `未読${count}件`,
    cachedUnreadCount: (count) => `キャッシュ済み · 未読${count}件`,
    allRead: "すべて既読",
    markAllRead: "すべて既読にする",
    loadingLabel: "通知を読み込んでいます…",
    groupToday: "今日",
    groupEarlier: "それ以前",
    offlineBanner:
      "オフラインです。既読ステータスの変更は再接続後に同期されます。",
    privacyNote:
      "通知プレビューには、本人確認・書類・緊急連絡先・プライベートなサポートに関する機密情報は表示されません。",
    empty: {
      title: "通知はまだありません",
      body: "EMENDAからの更新がここに表示されます。",
      caption:
        "アカウント、日本渡航準備、雇用主アクセスに関する重要な更新がここに表示されます。",
    },
    items: {
      employerInvite: {
        title: (employer) => `雇用主からの招待 · ${employer}`,
        body: () => "接続する前に、共有される内容を確認してください。",
      },
      employerAccessActive: {
        title: () => "雇用主アクセス · 有効",
        body: (employer) =>
          `${employer}は、承認された業務アクセス範囲で接続されています。`,
      },
      employerAccessEnded: {
        title: () => "雇用主アクセス · 終了",
        body: (employer) =>
          `${employer}の業務アクセスは終了しました。保存されたアクセス履歴を確認してください。`,
      },
      residenceExpiry: {
        title: () => "在留資格 · まもなく期限",
        body: () => "残り60日 · 保存した情報を確認してください。",
      },
      identityVerified: {
        title: () => "EMENDA · 本人確認済み",
        body: () => "確認済みの本人情報はEMENDA IDに紐づいています。",
      },
      municipalReminder: {
        title: () => "リマインダー · 自治体手続きのフォローアップ",
        body: () => "明日 · プライベートな重要日程を開いてください。",
      },
    },
  },
});
