import { defineSectionCopy } from "@/i18n/copy";

/**
 * Figma page 06 · Company Admin Experience (1182:5690) — AD-01 Company Admin
 * Dashboard · Overview (1182:5692).
 *
 * EN strings are the Figma text verbatim; ID / JA are faithful translations.
 * DATA never passes through this file: the company name, person names, team
 * names, report IDs (RPT-xxxx), counts and clock times all stay raw in
 * admin.mock.ts.
 *
 * Nav words that already exist app-wide (Dashboard, Reports, Follow-up,
 * Log out) are taken from useCommonCopy() so the admin sidebar stays
 * terminologically identical to the worker and manager shells.
 *
 * Governance (Figma AD-SCOPE board): Company Admin is NOT Super Admin — no
 * cross-tenant, billing or platform-configuration strings belong here.
 */
export interface AdminCopy {
  brand: {
    /** Sidebar eyebrow under the EMENDA wordmark. */
    role: string;
  };
  nav: {
    employees: string;
    teamsManagers: string;
    dailyReports: string;
    rewardsCoin: string;
    activityLog: string;
    companySettings: string;
  };
  shell: {
    title: string;
    /** "{org} · Company operations" */
    subtitle: string;
    searchPlaceholder: string;
    profileRole: string;
    openNavigation: string;
    closeNavigation: string;
    loading: string;
  };
  intro: {
    /** "Good evening, {name}" */
    greeting: string;
    /** Weekday of the dated meta line — the mock frame is dated a Tuesday. */
    weekday: string;
    syncedJustNow: string;
    exportSummary: string;
    inviteEmployee: string;
  };
  kpis: {
    labels: {
      employees: string;
      managers: string;
      openReports: string;
      overdueFollowUp: string;
    };
    captions: {
      employees: string;
      managers: string;
      openReports: string;
      overdueFollowUp: string;
    };
  };
  lifecycle: {
    title: string;
    subtitle: string;
    /** "{count} open" */
    openPill: string;
    stages: {
      new: string;
      inProgress: string;
      needFollowUp: string;
      resolvedToday: string;
    };
    slaLabel: string;
    /** "Target ≥ {target}% · {count} reports exceeded SLA this week" */
    slaCaption: string;
  };
  attention: {
    title: string;
    subtitle: string;
    /** "{count} items" */
    itemsPill: string;
    reasons: {
      /** "Escalation requested · overdue {days}d" */
      escalationOverdue: string;
      noManagerAssigned: string;
      /** "SLA {hours}h" */
      slaRemaining: string;
    };
    priority: {
      high: string;
      medium: string;
    };
  };
  dailyHealth: {
    title: string;
    /** "Today · {count} expected submissions" */
    subtitle: string;
    /** "{count} submitted" */
    submitted: string;
    /** "{count} pending" */
    pending: string;
    legend: {
      onTime: string;
      late: string;
      missing: string;
    };
  };
  activity: {
    title: string;
    /** "Latest changes within {org}" */
    subtitle: string;
    viewLog: string;
    columns: {
      action: string;
      actor: string;
      target: string;
      time: string;
    };
    actions: {
      managerAssigned: string;
      employeeAccountActivated: string;
      reportReassigned: string;
      rewardRuleUpdated: string;
    };
    targets: {
      manager: string;
      companyRewardPolicy: string;
    };
  };
}

export const ADMIN_COPY = defineSectionCopy<AdminCopy>({
  en: {
    brand: { role: "COMPANY ADMIN" },
    nav: {
      employees: "Employees",
      teamsManagers: "Teams & Managers",
      dailyReports: "Daily Reports",
      rewardsCoin: "Rewards & Coin",
      activityLog: "Activity Log",
      companySettings: "Company Settings",
    },
    shell: {
      title: "Admin Dashboard",
      subtitle: "{org} · Company operations",
      searchPlaceholder: "Search employees or reports",
      profileRole: "Company Admin",
      openNavigation: "Open navigation",
      closeNavigation: "Close navigation",
      loading: "Loading",
    },
    intro: {
      greeting: "Good evening, {name}",
      weekday: "Tuesday",
      syncedJustNow: "synced just now",
      exportSummary: "Export summary",
      inviteEmployee: "Invite employee",
    },
    kpis: {
      labels: {
        employees: "Employees",
        managers: "Managers",
        openReports: "Open reports",
        overdueFollowUp: "Overdue follow-up",
      },
      captions: {
        employees: "{count} invited this month",
        managers: "{count} active today",
        openReports: "{count} need follow-up",
        overdueFollowUp: "{count} high priority",
      },
    },
    lifecycle: {
      title: "Report lifecycle",
      subtitle: "Company report status",
      openPill: "{count} open",
      stages: {
        new: "New",
        inProgress: "In progress",
        needFollowUp: "Need follow-up",
        resolvedToday: "Resolved today",
      },
      slaLabel: "Resolved within SLA",
      slaCaption: "Target ≥ {target}% · {count} reports exceeded SLA this week",
    },
    attention: {
      title: "Needs attention",
      subtitle: "Items needing company admin action",
      itemsPill: "{count} items",
      reasons: {
        escalationOverdue: "Escalation requested · overdue {days}d",
        noManagerAssigned: "No manager assigned",
        slaRemaining: "SLA {hours}h",
      },
      priority: {
        high: "High",
        medium: "Medium",
      },
    },
    dailyHealth: {
      title: "Daily report health",
      subtitle: "Today · {count} expected submissions",
      submitted: "{count} submitted",
      pending: "{count} pending",
      legend: {
        onTime: "On time",
        late: "Late",
        missing: "Missing",
      },
    },
    activity: {
      title: "Recent admin activity",
      subtitle: "Latest changes within {org}",
      viewLog: "View activity log →",
      columns: {
        action: "Action",
        actor: "Actor",
        target: "Target",
        time: "Time",
      },
      actions: {
        managerAssigned: "Manager assigned",
        employeeAccountActivated: "Employee account activated",
        reportReassigned: "Report reassigned",
        rewardRuleUpdated: "Reward rule updated",
      },
      targets: {
        manager: "Manager",
        companyRewardPolicy: "Company reward policy",
      },
    },
  },
  id: {
    brand: { role: "ADMIN PERUSAHAAN" },
    nav: {
      employees: "Karyawan",
      teamsManagers: "Tim & Manajer",
      dailyReports: "Laporan Harian",
      rewardsCoin: "Hadiah & Koin",
      activityLog: "Log Aktivitas",
      companySettings: "Pengaturan Perusahaan",
    },
    shell: {
      title: "Dasbor Admin",
      subtitle: "{org} · Operasional perusahaan",
      searchPlaceholder: "Cari karyawan atau laporan",
      profileRole: "Admin Perusahaan",
      openNavigation: "Buka navigasi",
      closeNavigation: "Tutup navigasi",
      loading: "Memuat",
    },
    intro: {
      greeting: "Selamat malam, {name}",
      weekday: "Selasa",
      syncedJustNow: "baru saja disinkronkan",
      exportSummary: "Ekspor ringkasan",
      inviteEmployee: "Undang karyawan",
    },
    kpis: {
      labels: {
        employees: "Karyawan",
        managers: "Manajer",
        openReports: "Laporan terbuka",
        overdueFollowUp: "Tindak lanjut terlambat",
      },
      captions: {
        employees: "{count} diundang bulan ini",
        managers: "{count} aktif hari ini",
        openReports: "{count} perlu tindak lanjut",
        overdueFollowUp: "{count} prioritas tinggi",
      },
    },
    lifecycle: {
      title: "Siklus laporan",
      subtitle: "Status laporan perusahaan",
      openPill: "{count} terbuka",
      stages: {
        new: "Baru",
        inProgress: "Sedang diproses",
        needFollowUp: "Perlu tindak lanjut",
        resolvedToday: "Selesai hari ini",
      },
      slaLabel: "Selesai dalam SLA",
      slaCaption:
        "Target ≥ {target}% · {count} laporan melewati SLA minggu ini",
    },
    attention: {
      title: "Perlu perhatian",
      subtitle: "Item yang memerlukan tindakan admin perusahaan",
      itemsPill: "{count} item",
      reasons: {
        escalationOverdue: "Eskalasi diminta · terlambat {days} hari",
        noManagerAssigned: "Belum ada manajer ditugaskan",
        slaRemaining: "SLA {hours} jam",
      },
      priority: {
        high: "Tinggi",
        medium: "Sedang",
      },
    },
    dailyHealth: {
      title: "Kesehatan laporan harian",
      subtitle: "Hari ini · {count} pengiriman diharapkan",
      submitted: "{count} terkirim",
      pending: "{count} menunggu",
      legend: {
        onTime: "Tepat waktu",
        late: "Terlambat",
        missing: "Belum ada",
      },
    },
    activity: {
      title: "Aktivitas admin terbaru",
      subtitle: "Perubahan terbaru di {org}",
      viewLog: "Lihat log aktivitas →",
      columns: {
        action: "Tindakan",
        actor: "Pelaku",
        target: "Target",
        time: "Waktu",
      },
      actions: {
        managerAssigned: "Manajer ditugaskan",
        employeeAccountActivated: "Akun karyawan diaktifkan",
        reportReassigned: "Laporan dialihkan",
        rewardRuleUpdated: "Aturan hadiah diperbarui",
      },
      targets: {
        manager: "Manajer",
        companyRewardPolicy: "Kebijakan hadiah perusahaan",
      },
    },
  },
  ja: {
    brand: { role: "企業管理者" },
    nav: {
      employees: "従業員",
      teamsManagers: "チーム＆マネージャー",
      dailyReports: "日報",
      rewardsCoin: "リワード＆コイン",
      activityLog: "アクティビティログ",
      companySettings: "会社設定",
    },
    shell: {
      title: "管理ダッシュボード",
      subtitle: "{org} · 会社運営",
      searchPlaceholder: "従業員またはレポートを検索",
      profileRole: "企業管理者",
      openNavigation: "ナビゲーションを開く",
      closeNavigation: "ナビゲーションを閉じる",
      loading: "読み込み中",
    },
    intro: {
      greeting: "こんばんは、{name}さん",
      weekday: "火曜日",
      syncedJustNow: "たった今同期しました",
      exportSummary: "サマリーをエクスポート",
      inviteEmployee: "従業員を招待",
    },
    kpis: {
      labels: {
        employees: "従業員",
        managers: "マネージャー",
        openReports: "未対応レポート",
        overdueFollowUp: "期限超過のフォローアップ",
      },
      captions: {
        employees: "今月{count}件招待",
        managers: "本日{count}名アクティブ",
        openReports: "{count}件フォローアップが必要",
        overdueFollowUp: "{count}件が高優先度",
      },
    },
    lifecycle: {
      title: "レポートのライフサイクル",
      subtitle: "会社のレポート状況",
      openPill: "未対応{count}件",
      stages: {
        new: "新規",
        inProgress: "対応中",
        needFollowUp: "要フォローアップ",
        resolvedToday: "本日解決",
      },
      slaLabel: "SLA内で解決",
      slaCaption: "目標 ≥ {target}% · 今週{count}件がSLA超過",
    },
    attention: {
      title: "要対応",
      subtitle: "企業管理者の対応が必要な項目",
      itemsPill: "{count}件",
      reasons: {
        escalationOverdue: "エスカレーション要請 · {days}日超過",
        noManagerAssigned: "マネージャー未割り当て",
        slaRemaining: "SLA {hours}時間",
      },
      priority: {
        high: "高",
        medium: "中",
      },
    },
    dailyHealth: {
      title: "日報の状況",
      subtitle: "本日 · 提出予定{count}件",
      submitted: "{count}件提出済み",
      pending: "{count}件保留中",
      legend: {
        onTime: "期限内",
        late: "遅延",
        missing: "未提出",
      },
    },
    activity: {
      title: "最近の管理操作",
      subtitle: "{org} の最新の変更",
      viewLog: "アクティビティログを見る →",
      columns: {
        action: "操作",
        actor: "実行者",
        target: "対象",
        time: "時刻",
      },
      actions: {
        managerAssigned: "マネージャーを割り当て",
        employeeAccountActivated: "従業員アカウントを有効化",
        reportReassigned: "レポートを再割り当て",
        rewardRuleUpdated: "リワードルールを更新",
      },
      targets: {
        manager: "マネージャー",
        companyRewardPolicy: "会社のリワードポリシー",
      },
    },
  },
});
