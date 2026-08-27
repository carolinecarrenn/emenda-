import { defineSectionCopy } from "@/i18n/copy";

/**
 * Content for the PLATFORM product stills — worker home, EMENDA ID, daily
 * report, notifications, the manager overview, verification and the follow-up
 * trail.
 *
 * Separate from `mocks.copy.ts`, which holds the assistant conversations. The
 * split is deliberate: the assistant is one capability, and the marketing site
 * has to be able to show the rest of the platform without reaching for a chat
 * bubble. Names match the app's own mock data (Sakura Care, Putri Rahayu,
 * Tanaka-san) so the stills read as the real product.
 */
export interface PlatformMockCopy {
  /** Labels for the two sides of the ecosystem composition. */
  sides: { worker: string; organization: string };
  worker: {
    greeting: string;
    subtitle: string;
    idLabel: string;
    idValue: string;
    idStatus: string;
    viewId: string;
    nextLabel: string;
    nextTitle: string;
    nextCta: string;
    exploreLabel: string;
    exploreTiles: string[];
  };
  report: {
    label: string;
    title: string;
    statusLabel: string;
    statusValue: string;
    rows: { label: string; value: string }[];
    submitted: string;
  };
  notifications: {
    label: string;
    items: { title: string; meta: string }[];
  };
  manager: {
    label: string;
    title: string;
    kpis: { label: string; value: string; caption: string }[];
    attentionLabel: string;
    attentionItems: string[];
  };
  review: {
    label: string;
    worker: string;
    meta: string;
    primary: string;
    secondary: string;
  };
  lifecycle: {
    label: string;
    steps: { label: string; meta: string }[];
    activeIndex: number;
  };
  readiness: {
    label: string;
    title: string;
    progress: string;
    items: { label: string; done: boolean }[];
  };
  career: {
    label: string;
    title: string;
    rows: { label: string; value: string }[];
  };
}

const EN: PlatformMockCopy = {
  sides: { worker: "WORKER", organization: "ORGANIZATION" },
  worker: {
    greeting: "Good morning, Putri",
    subtitle: "Sakura Care · Care Assistant",
    idLabel: "MY EMENDA ID",
    idValue: "EMD-JP-402913",
    idStatus: "Identity verified",
    viewId: "View ID",
    nextLabel: "NEXT ACTION",
    nextTitle: "Submit today's daily report",
    nextCta: "Open report",
    exploreLabel: "EXPLORE",
    exploreTiles: ["Career", "Japan", "Documents", "Knowledge"],
  },
  report: {
    label: "DAILY REPORT",
    title: "Morning shift · Floor 2",
    statusLabel: "Status",
    statusValue: "Submitted",
    rows: [
      { label: "Resident", value: "Tanaka-san" },
      { label: "Shift", value: "07:00 – 15:00" },
      { label: "Handover", value: "Mobility exercise completed" },
    ],
    submitted: "Sent to Sakura Care · 15:12",
  },
  notifications: {
    label: "NOTIFICATIONS",
    items: [
      { title: "Your report was acknowledged", meta: "Sato Kenji · 1h ago" },
      { title: "Residence card renewal in 30 days", meta: "Reminder · today" },
      { title: "New workplace notice", meta: "Sakura Care · yesterday" },
    ],
  },
  manager: {
    label: "TEAM OVERVIEW",
    title: "Sakura Care · Floor 2",
    kpis: [
      { label: "REPORTS TODAY", value: "3/4", caption: "1 outstanding" },
      { label: "NEEDS REVIEW", value: "2", caption: "awaiting response" },
      { label: "OPEN FOLLOW-UP", value: "1", caption: "in progress" },
      { label: "RESOLVED", value: "12", caption: "this week" },
    ],
    attentionLabel: "NEEDS ATTENTION",
    attentionItems: [
      "1 daily report not submitted",
      "1 follow-up awaiting your response",
      "2 residence dates within 60 days",
    ],
  },
  review: {
    label: "AWAITING REVIEW",
    worker: "Putri Rahayu · Morning shift",
    meta: "Submitted 15:12 · Floor 2",
    primary: "Acknowledge",
    secondary: "Request detail",
  },
  lifecycle: {
    label: "STATUS",
    steps: [
      { label: "Submitted", meta: "by worker" },
      { label: "Reviewed", meta: "by manager" },
      { label: "Follow-up", meta: "in progress" },
      { label: "Resolved", meta: "closed" },
    ],
    activeIndex: 2,
  },
  readiness: {
    label: "JAPAN READINESS",
    title: "4 of 6 steps complete",
    progress: "67%",
    items: [
      { label: "Address registration", done: true },
      { label: "Health insurance", done: true },
      { label: "Bank account", done: true },
      { label: "Residence card renewal", done: false },
    ],
  },
  career: {
    label: "CAREER PROFILE",
    title: "Putri Rahayu",
    rows: [
      { label: "Experience", value: "3 years · Care work" },
      { label: "Qualification", value: "Kaigo Shokuin" },
      { label: "Languages", value: "ID · EN · JA N3" },
    ],
  },
};

const JA: PlatformMockCopy = {
  sides: { worker: "働く人", organization: "組織" },
  worker: {
    greeting: "おはようございます、Putriさん",
    subtitle: "Sakura Care ・ 介護アシスタント",
    idLabel: "マイEMENDA ID",
    idValue: "EMD-JP-402913",
    idStatus: "本人確認済み",
    viewId: "IDを見る",
    nextLabel: "次のアクション",
    nextTitle: "今日の日報を提出",
    nextCta: "日報を開く",
    exploreLabel: "メニュー",
    exploreTiles: ["キャリア", "日本準備", "書類", "ナレッジ"],
  },
  report: {
    label: "日報",
    title: "早番 ・ 2階",
    statusLabel: "状態",
    statusValue: "提出済み",
    rows: [
      { label: "入居者", value: "田中さん" },
      { label: "シフト", value: "07:00 – 15:00" },
      { label: "申し送り", value: "リハビリ運動を実施" },
    ],
    submitted: "Sakura Careへ送信 ・ 15:12",
  },
  notifications: {
    label: "お知らせ",
    items: [
      { title: "日報が確認されました", meta: "佐藤健二 ・ 1時間前" },
      { title: "在留カードの更新まで30日", meta: "リマインド ・ 今日" },
      { title: "職場からの新しい連絡", meta: "Sakura Care ・ 昨日" },
    ],
  },
  manager: {
    label: "チーム状況",
    title: "Sakura Care ・ 2階",
    kpis: [
      { label: "本日の日報", value: "3/4", caption: "未提出1件" },
      { label: "確認待ち", value: "2", caption: "対応待ち" },
      { label: "対応中", value: "1", caption: "進行中" },
      { label: "完了", value: "12", caption: "今週" },
    ],
    attentionLabel: "要対応",
    attentionItems: [
      "日報の未提出が1件",
      "あなたの返信待ちが1件",
      "60日以内の在留期限が2件",
    ],
  },
  review: {
    label: "確認待ち",
    worker: "Putri Rahayu ・ 早番",
    meta: "15:12提出 ・ 2階",
    primary: "確認する",
    secondary: "詳細を依頼",
  },
  lifecycle: {
    label: "ステータス",
    steps: [
      { label: "提出", meta: "働く人から" },
      { label: "確認", meta: "管理者が" },
      { label: "対応", meta: "進行中" },
      { label: "完了", meta: "クローズ" },
    ],
    activeIndex: 2,
  },
  readiness: {
    label: "日本準備",
    title: "6件中4件が完了",
    progress: "67%",
    items: [
      { label: "住所の登録", done: true },
      { label: "健康保険", done: true },
      { label: "銀行口座", done: true },
      { label: "在留カードの更新", done: false },
    ],
  },
  career: {
    label: "キャリアプロフィール",
    title: "Putri Rahayu",
    rows: [
      { label: "経験", value: "3年 ・ 介護" },
      { label: "資格", value: "介護職員" },
      { label: "言語", value: "ID ・ EN ・ 日本語N3" },
    ],
  },
};

const ID_COPY: PlatformMockCopy = {
  sides: { worker: "PEKERJA", organization: "ORGANISASI" },
  worker: {
    greeting: "Selamat pagi, Putri",
    subtitle: "Sakura Care · Asisten Perawat",
    idLabel: "EMENDA ID SAYA",
    idValue: "EMD-JP-402913",
    idStatus: "Identitas terverifikasi",
    viewId: "Lihat ID",
    nextLabel: "LANGKAH BERIKUTNYA",
    nextTitle: "Kirim laporan harian hari ini",
    nextCta: "Buka laporan",
    exploreLabel: "JELAJAHI",
    exploreTiles: ["Karier", "Jepang", "Dokumen", "Pengetahuan"],
  },
  report: {
    label: "LAPORAN HARIAN",
    title: "Sif pagi · Lantai 2",
    statusLabel: "Status",
    statusValue: "Terkirim",
    rows: [
      { label: "Penghuni", value: "Tanaka-san" },
      { label: "Sif", value: "07.00 – 15.00" },
      { label: "Serah terima", value: "Latihan mobilitas selesai" },
    ],
    submitted: "Terkirim ke Sakura Care · 15.12",
  },
  notifications: {
    label: "NOTIFIKASI",
    items: [
      { title: "Laporanmu sudah dikonfirmasi", meta: "Sato Kenji · 1 jam lalu" },
      {
        title: "Perpanjangan kartu izin tinggal 30 hari lagi",
        meta: "Pengingat · hari ini",
      },
      { title: "Pengumuman baru dari tempat kerja", meta: "Sakura Care · kemarin" },
    ],
  },
  manager: {
    label: "RINGKASAN TIM",
    title: "Sakura Care · Lantai 2",
    kpis: [
      { label: "LAPORAN HARI INI", value: "3/4", caption: "1 belum masuk" },
      { label: "PERLU DITINJAU", value: "2", caption: "menunggu respons" },
      { label: "TINDAK LANJUT", value: "1", caption: "berjalan" },
      { label: "SELESAI", value: "12", caption: "minggu ini" },
    ],
    attentionLabel: "PERLU PERHATIAN",
    attentionItems: [
      "1 laporan harian belum dikirim",
      "1 tindak lanjut menunggu responsmu",
      "2 tanggal izin tinggal dalam 60 hari",
    ],
  },
  review: {
    label: "MENUNGGU TINJAUAN",
    worker: "Putri Rahayu · Sif pagi",
    meta: "Dikirim 15.12 · Lantai 2",
    primary: "Konfirmasi",
    secondary: "Minta detail",
  },
  lifecycle: {
    label: "STATUS",
    steps: [
      { label: "Dikirim", meta: "oleh pekerja" },
      { label: "Ditinjau", meta: "oleh manajer" },
      { label: "Tindak lanjut", meta: "berjalan" },
      { label: "Selesai", meta: "ditutup" },
    ],
    activeIndex: 2,
  },
  readiness: {
    label: "KESIAPAN JEPANG",
    title: "4 dari 6 langkah selesai",
    progress: "67%",
    items: [
      { label: "Pendaftaran alamat", done: true },
      { label: "Asuransi kesehatan", done: true },
      { label: "Rekening bank", done: true },
      { label: "Perpanjangan kartu izin tinggal", done: false },
    ],
  },
  career: {
    label: "PROFIL KARIER",
    title: "Putri Rahayu",
    rows: [
      { label: "Pengalaman", value: "3 tahun · Perawatan" },
      { label: "Kualifikasi", value: "Kaigo Shokuin" },
      { label: "Bahasa", value: "ID · EN · JA N3" },
    ],
  },
};

export const PLATFORM_MOCKS_COPY = defineSectionCopy<PlatformMockCopy>({
  en: EN,
  ja: JA,
  id: ID_COPY,
});
