import { defineSectionCopy } from "@/i18n/copy";
import type { AdminPrimaryNavKey } from "./adminNav";

/**
 * Per-route shell header, straight from each Company Admin frame.
 *
 * AD-01 was the only Admin frame the first inventory knew about, so the top
 * bar was hard-wired to its heading and the sidebar pinned Dashboard active on
 * every route. Once the rest of the role was built, every area reported the
 * same gap: its own screen was right but the chrome above it still said
 * "Admin Dashboard". The heading, the sub-line and the search placeholder are
 * drawn per frame, so they belong to the route, not to the shell.
 *
 * The org name is record data and is interpolated, never translated.
 */
export interface AdminHeaderCopy {
  title: string;
  /** The clause after "{org} · " on the sub-line. */
  scope: string;
  searchPlaceholder: string;
}

type HeaderKey =
  | "dashboard"
  | "employees"
  | "teams"
  | "reports"
  | "followUp"
  | "dailyReports"
  | "rewards"
  | "activityLog"
  | "settings"
  | "states"
  | "access";

export const ADMIN_HEADER_COPY = defineSectionCopy<
  Record<HeaderKey, AdminHeaderCopy>
>({
  en: {
    dashboard: {
      title: "Admin Dashboard",
      scope: "Company operations",
      searchPlaceholder: "Search employees or reports",
    },
    employees: {
      title: "Employee Management",
      scope: "Company employee control",
      searchPlaceholder: "Search employees",
    },
    teams: {
      title: "Teams & Managers",
      scope: "Team structure and ownership",
      searchPlaceholder: "Search teams",
    },
    reports: {
      title: "Reports Oversight",
      scope: "Company report queue",
      searchPlaceholder: "Search reports",
    },
    followUp: {
      title: "Follow-up & Escalation",
      scope: "Next-action management",
      searchPlaceholder: "Search follow-up",
    },
    dailyReports: {
      title: "Daily Reports",
      scope: "Daily submission health",
      searchPlaceholder: "Search daily reports",
    },
    rewards: {
      title: "Rewards & Coin",
      scope: "Company incentive management",
      searchPlaceholder: "Search reward history",
    },
    activityLog: {
      title: "Activity Log",
      scope: "Company audit trail",
      searchPlaceholder: "Search activity",
    },
    settings: {
      title: "Company Settings",
      scope: "Company configuration",
      searchPlaceholder: "Search settings",
    },
    states: {
      title: "Empty & Access States",
      scope: "Guidance and boundaries",
      searchPlaceholder: "Search guidance",
    },
    access: {
      title: "Admin Access",
      scope: "Sign in and language",
      searchPlaceholder: "Search",
    },
  },
  id: {
    dashboard: {
      title: "Dasbor Admin",
      scope: "Operasional perusahaan",
      searchPlaceholder: "Cari karyawan atau laporan",
    },
    employees: {
      title: "Manajemen Karyawan",
      scope: "Kendali karyawan perusahaan",
      searchPlaceholder: "Cari karyawan",
    },
    teams: {
      title: "Tim & Manajer",
      scope: "Struktur dan kepemilikan tim",
      searchPlaceholder: "Cari tim",
    },
    reports: {
      title: "Pengawasan Laporan",
      scope: "Antrean laporan perusahaan",
      searchPlaceholder: "Cari laporan",
    },
    followUp: {
      title: "Tindak Lanjut & Eskalasi",
      scope: "Pengelolaan tindakan berikutnya",
      searchPlaceholder: "Cari tindak lanjut",
    },
    dailyReports: {
      title: "Laporan Harian",
      scope: "Kesehatan pengiriman harian",
      searchPlaceholder: "Cari laporan harian",
    },
    rewards: {
      title: "Reward & Coin",
      scope: "Pengelolaan insentif perusahaan",
      searchPlaceholder: "Cari riwayat reward",
    },
    activityLog: {
      title: "Log Aktivitas",
      scope: "Jejak audit perusahaan",
      searchPlaceholder: "Cari aktivitas",
    },
    settings: {
      title: "Pengaturan Perusahaan",
      scope: "Konfigurasi perusahaan",
      searchPlaceholder: "Cari pengaturan",
    },
    states: {
      title: "Status Kosong & Akses",
      scope: "Panduan dan batasan",
      searchPlaceholder: "Cari panduan",
    },
    access: {
      title: "Akses Admin",
      scope: "Masuk dan bahasa",
      searchPlaceholder: "Cari",
    },
  },
  ja: {
    dashboard: {
      title: "管理ダッシュボード",
      scope: "全社オペレーション",
      searchPlaceholder: "従業員またはレポートを検索",
    },
    employees: {
      title: "従業員管理",
      scope: "全社の従業員管理",
      searchPlaceholder: "従業員を検索",
    },
    teams: {
      title: "チームとマネージャー",
      scope: "チーム体制と担当",
      searchPlaceholder: "チームを検索",
    },
    reports: {
      title: "レポート監督",
      scope: "全社レポートのキュー",
      searchPlaceholder: "レポートを検索",
    },
    followUp: {
      title: "フォローアップとエスカレーション",
      scope: "次のアクション管理",
      searchPlaceholder: "フォローアップを検索",
    },
    dailyReports: {
      title: "日報",
      scope: "日次提出の状況",
      searchPlaceholder: "日報を検索",
    },
    rewards: {
      title: "リワードとコイン",
      scope: "全社インセンティブ管理",
      searchPlaceholder: "リワード履歴を検索",
    },
    activityLog: {
      title: "アクティビティログ",
      scope: "全社の監査証跡",
      searchPlaceholder: "アクティビティを検索",
    },
    settings: {
      title: "会社設定",
      scope: "全社の構成",
      searchPlaceholder: "設定を検索",
    },
    states: {
      title: "空の状態とアクセス",
      scope: "ガイダンスと境界",
      searchPlaceholder: "ガイダンスを検索",
    },
    access: {
      title: "管理者アクセス",
      scope: "サインインと言語",
      searchPlaceholder: "検索",
    },
  },
});

/** Route → which header the frames draw, and which sidebar item is active. */
const ROUTE_HEADERS: {
  path: string;
  key: HeaderKey;
  nav: AdminPrimaryNavKey | null;
}[] = [
  { path: "/admin/employees", key: "employees", nav: "employees" },
  { path: "/admin/teams", key: "teams", nav: "teamsManagers" },
  { path: "/admin/reports", key: "reports", nav: "reports" },
  { path: "/admin/follow-up", key: "followUp", nav: "followUp" },
  { path: "/admin/daily-reports", key: "dailyReports", nav: "dailyReports" },
  { path: "/admin/rewards", key: "rewards", nav: "rewardsCoin" },
  { path: "/admin/activity-log", key: "activityLog", nav: "activityLog" },
  { path: "/admin/settings", key: "settings", nav: null },
  { path: "/admin/states", key: "states", nav: null },
  // AD-00 is pre-authentication and draws no shell, so no sidebar item owns it.
  { path: "/admin/access", key: "access", nav: null },
  { path: "/admin", key: "dashboard", nav: "dashboard" },
];

export function adminHeaderKeyFor(pathname: string): HeaderKey {
  return ROUTE_HEADERS.find((r) => pathname.startsWith(r.path))?.key ?? "dashboard";
}

export function adminActiveNavKeyFor(
  pathname: string,
): AdminPrimaryNavKey | null {
  return ROUTE_HEADERS.find((r) => pathname.startsWith(r.path))?.nav ?? null;
}
