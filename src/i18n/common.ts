import { defineSectionCopy, useSectionCopy } from "./copy";

/** App-wide strings shared across sections: navigation, statuses, actions. */
export interface CommonCopy {
  nav: {
    home: string;
    reports: string;
    chat: string;
    assistant: string;
    profile: string;
    settings: string;
    logOut: string;
    notifications: string;
  };
  managerNav: {
    dashboard: string;
    workers: string;
    communication: string;
    reports: string;
    alerts: string;
    analytics: string;
    knowledgeOjt: string;
    humanRightsDd: string;
    auditExport: string;
    settings: string;
    support: string;
    followUp: string;
    messages: string;
    more: string;
  };
  status: {
    submitted: string;
    verified: string;
    missing: string;
    pending: string;
    connected: string;
    active: string;
    open: string;
    review: string;
  };
  action: {
    save: string;
    cancel: string;
    back: string;
    continue: string;
    retry: string;
    edit: string;
    view: string;
    logIn: string;
    close: string;
    done: string;
  };
  manager: {
    facilityManager: string;
    contextLine: string;
  };
  comingSoon: {
    title: string;
    body: string;
  };
}

export const COMMON_COPY = defineSectionCopy<CommonCopy>({
  en: {
    nav: {
      home: "Home",
      reports: "Reports",
      chat: "Chat",
      assistant: "Assistant",
      profile: "Profile",
      settings: "Settings",
      logOut: "Log out",
      notifications: "Notifications",
    },
    managerNav: {
      dashboard: "Dashboard",
      workers: "Workers",
      communication: "Communication",
      reports: "Reports",
      alerts: "Alerts",
      analytics: "Analytics",
      knowledgeOjt: "Knowledge / OJT",
      humanRightsDd: "Human Rights DD",
      auditExport: "Audit Export",
      settings: "Settings",
      support: "Support",
      followUp: "Follow-up",
      messages: "Messages",
      more: "More",
    },
    status: {
      submitted: "Submitted",
      verified: "Verified",
      missing: "Missing",
      pending: "Pending",
      connected: "Connected",
      active: "Active",
      open: "Open",
      review: "Review",
    },
    action: {
      save: "Save",
      cancel: "Cancel",
      back: "Back",
      continue: "Continue",
      retry: "Retry",
      edit: "Edit",
      view: "View",
      logIn: "Log in",
      close: "Close",
      done: "Done",
    },
    manager: {
      facilityManager: "Facility Manager",
      contextLine: "Operational access only · Profile",
    },
    comingSoon: {
      title: "Coming soon",
      body: "This area is next on the build list.",
    },
  },
  id: {
    nav: {
      home: "Beranda",
      reports: "Laporan",
      chat: "Obrolan",
      assistant: "Asisten",
      profile: "Profil",
      settings: "Pengaturan",
      logOut: "Keluar",
      notifications: "Notifikasi",
    },
    managerNav: {
      dashboard: "Dasbor",
      workers: "Pekerja",
      communication: "Komunikasi",
      reports: "Laporan",
      alerts: "Peringatan",
      analytics: "Analitik",
      knowledgeOjt: "Pengetahuan / OJT",
      humanRightsDd: "Uji Tuntas HAM",
      auditExport: "Ekspor Audit",
      settings: "Pengaturan",
      support: "Dukungan",
      followUp: "Tindak Lanjut",
      messages: "Pesan",
      more: "Lainnya",
    },
    status: {
      submitted: "Terkirim",
      verified: "Terverifikasi",
      missing: "Belum ada",
      pending: "Menunggu",
      connected: "Terhubung",
      active: "Aktif",
      open: "Buka",
      review: "Tinjau",
    },
    action: {
      save: "Simpan",
      cancel: "Batal",
      back: "Kembali",
      continue: "Lanjut",
      retry: "Coba lagi",
      edit: "Ubah",
      view: "Lihat",
      logIn: "Masuk",
      close: "Tutup",
      done: "Selesai",
    },
    manager: {
      facilityManager: "Manajer Fasilitas",
      contextLine: "Akses operasional saja · Profil",
    },
    comingSoon: {
      title: "Segera hadir",
      body: "Area ini berikutnya dalam daftar pengembangan.",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      reports: "レポート",
      chat: "チャット",
      assistant: "アシスタント",
      profile: "プロフィール",
      settings: "設定",
      logOut: "ログアウト",
      notifications: "通知",
    },
    managerNav: {
      dashboard: "ダッシュボード",
      workers: "ワーカー",
      communication: "コミュニケーション",
      reports: "レポート",
      alerts: "アラート",
      analytics: "分析",
      knowledgeOjt: "ナレッジ / OJT",
      humanRightsDd: "人権DD",
      auditExport: "監査エクスポート",
      settings: "設定",
      support: "サポート",
      followUp: "フォローアップ",
      messages: "メッセージ",
      more: "その他",
    },
    status: {
      submitted: "提出済み",
      verified: "確認済み",
      missing: "未提出",
      pending: "保留中",
      connected: "接続済み",
      active: "有効",
      open: "開く",
      review: "確認",
    },
    action: {
      save: "保存",
      cancel: "キャンセル",
      back: "戻る",
      continue: "続行",
      retry: "再試行",
      edit: "編集",
      view: "表示",
      logIn: "ログイン",
      close: "閉じる",
      done: "完了",
    },
    manager: {
      facilityManager: "施設管理者",
      contextLine: "業務アクセスのみ · プロフィール",
    },
    comingSoon: {
      title: "近日公開",
      body: "このエリアは次の開発予定です。",
    },
  },
});

export function useCommonCopy(): CommonCopy {
  return useSectionCopy(COMMON_COPY);
}
