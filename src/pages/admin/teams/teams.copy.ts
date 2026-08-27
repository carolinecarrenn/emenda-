import { defineSectionCopy } from "@/i18n/copy";

/**
 * Copy for the Company Admin Teams & Managers area, Figma page
 * 06 · Company Admin Experience (1182:5690):
 *
 *   AD-03  Teams & Managers — Coverage        (1223:924)   base screen
 *   AD-03B Team Assignment States             (1226:57)    action dialogs
 *   AD-03C Team Lifecycle Flow                (1226:2680)  end-to-end flow
 *   AD-03D Team Detailed States               (1239:274)   detailed states
 *
 * EN strings are the Figma text verbatim; ID / JA are faithful translations.
 * DATA never passes through this file — team names, manager names, member
 * counts, thresholds and report counts all stay raw in teams.mock.ts and are
 * interpolated into the {placeholder} slots below.
 *
 * Governance (Figma AD-SCOPE board): Company Admin is NOT Super Admin. The
 * lifecycle copy states this explicitly — the admin owns ownership structure
 * inside one company, never platform roles or Super Admin accounts.
 */

export interface LifecycleDetailCopy {
  label: string;
  value: string;
}

export interface LifecycleStepCopy {
  title: string;
  subtitle: string;
  details: [LifecycleDetailCopy, LifecycleDetailCopy, LifecycleDetailCopy];
}

export interface AdminteamsCopy {
  /** AD-03 intro row (1223:1200). */
  intro: {
    title: string;
    subtitle: string;
    exportStructure: string;
    assignManager: string;
  };
  /** AD-03 stat row (1223:1207 … 1223:1225). */
  stats: {
    labels: {
      teams: string;
      managers: string;
      unassigned: string;
      workloadAlert: string;
    };
    captions: {
      /** "{count} need coverage" */
      teams: string;
      /** "{count} active today" */
      managers: string;
      unassigned: string;
      /** "managers > {limit}" */
      workloadAlert: string;
    };
  };
  /** AD-03 "Team directory" (1223:1231). */
  directory: {
    title: string;
    subtitle: string;
    /** "{count} members" */
    members: string;
    /** "Manager: {name}" */
    manager: string;
    /** Owner line of the unassigned pool row. */
    noManager: string;
    noOwner: string;
    selectTeam: string;
  };
  /** AD-03 "Manager assignment" (1223:1254). */
  assignment: {
    title: string;
    subtitle: string;
    columns: {
      manager: string;
      primaryTeam: string;
      members: string;
      status: string;
    };
    status: {
      healthy: string;
      lowLoad: string;
    };
    assignManager: string;
    createTeam: string;
  };
  /** AD-03 "Coverage issues" (1223:1286). */
  coverage: {
    title: string;
    subtitle: string;
    unassignedEmployees: string;
    details: {
      /** "{count} people have no team owner" */
      unassignedEmployees: string;
      workloadNearLimit: string;
      noBackupManager: string;
    };
    severity: {
      high: string;
      medium: string;
    };
  };
  /** AD-03 "Selected team" panel (1223:1304). */
  selected: {
    label: string;
    /** "{members} members · {managers} manager · {reports} open reports" */
    meta: string;
    topActions: string;
    actions: {
      /** "Move {count} workers from unassigned pool" */
      movePool: string;
      addBackup: string;
      /** "Review {count} overdue follow-up cases" */
      reviewOverdue: string;
    };
  };
  /** AD-03B "Assign manager" (1226:61). */
  assignDialog: {
    title: string;
    team: string;
    primaryManager: string;
    backupManager: string;
    selectBackup: string;
    capacityWarning: string;
    /** "{name} will manage {count} workers after this assignment." */
    capacityLine: string;
    /** "Recommended limit: {limit}." */
    recommendedLimit: string;
    cancel: string;
    assignAnyway: string;
  };
  /** AD-03B "Reassign employees" (1226:80). */
  reassignDialog: {
    title: string;
    subtitle: string;
    employees: string;
    /** "{count} selected" */
    selected: string;
    newTeam: string;
    newManager: string;
    back: string;
    confirmMove: string;
  };
  /** AD-03C "Team & manager lifecycle" (1226:2680). */
  lifecycle: {
    eyebrow: string;
    title: string;
    subtitle: string;
    rule: string;
    backToTeams: string;
    steps: [
      LifecycleStepCopy,
      LifecycleStepCopy,
      LifecycleStepCopy,
      LifecycleStepCopy,
      LifecycleStepCopy,
    ];
  };
  /** AD-03D "Create team" (1239:278). */
  createDialog: {
    pill: string;
    title: string;
    subtitle: string;
    teamName: string;
    purpose: string;
    primaryManager: string;
    primaryManagerValue: string;
    initialMembers: string;
    /** "{count} selected · can add after creation" */
    initialMembersValue: string;
    noteTitle: string;
    /** "Team names must be unique inside {org}." */
    noteBody: string;
    cancel: string;
    createTeam: string;
    footnote: string;
  };
  /** AD-03D "Assign / change manager" (1239:303). */
  changeManagerDialog: {
    pill: string;
    title: string;
    subtitle: string;
    team: string;
    /** "{team} · {count} members" */
    teamValue: string;
    currentManager: string;
    newManager: string;
    capacityWarning: string;
    /** "{name} will manage {count} workers after assignment. Recommended company threshold: {limit}." */
    capacityBody: string;
    effectiveFrom: string;
    effectiveFromValue: string;
    cancel: string;
    assignAnyway: string;
    footnote: string;
  };
  /** AD-03D "Archive team" (1239:328). */
  archiveDialog: {
    pill: string;
    title: string;
    subtitle: string;
    team: string;
    /** "{team} · {count} members" */
    teamValue: string;
    blockedTitle: string;
    /** "{members} active members and {reports} open report still reference this team. Move/reassign them first." */
    blockedBody: string;
    moveMembersTo: string;
    openReportOwner: string;
    /** "Reassign to {name}" */
    openReportOwnerValue: string;
    reviewDependencies: string;
    archiveTeam: string;
    afterArchiveTitle: string;
    afterArchiveBody: string;
    footnote: string;
  };
  closeDialog: string;
}

export const ADMINTEAMS_COPY = defineSectionCopy<AdminteamsCopy>({
  en: {
    intro: {
      title: "Review teams, managers, and workload coverage",
      subtitle: "Keep ownership and coverage clear",
      exportStructure: "Export structure",
      assignManager: "Assign manager",
    },
    stats: {
      labels: {
        teams: "Teams",
        managers: "Managers",
        unassigned: "Unassigned",
        workloadAlert: "Workload alert",
      },
      captions: {
        teams: "{count} need coverage",
        managers: "{count} active today",
        unassigned: "employees",
        workloadAlert: "managers > {limit}",
      },
    },
    directory: {
      title: "Team directory",
      subtitle: "Teams, owner, and member counts",
      members: "{count} members",
      manager: "Manager: {name}",
      noManager: "Manager: —",
      noOwner: "No owner",
      selectTeam: "Select team",
    },
    assignment: {
      title: "Manager assignment",
      subtitle: "Coverage and team ownership",
      columns: {
        manager: "Manager",
        primaryTeam: "Primary team",
        members: "Members",
        status: "Status",
      },
      status: {
        healthy: "Healthy",
        lowLoad: "Low load",
      },
      assignManager: "Assign manager",
      createTeam: "Create team",
    },
    coverage: {
      title: "Coverage issues",
      subtitle: "Cases that need reassignment",
      unassignedEmployees: "Unassigned employees",
      details: {
        unassignedEmployees: "{count} people have no team owner",
        workloadNearLimit: "Manager workload near limit",
        noBackupManager: "No backup manager configured",
      },
      severity: {
        high: "High",
        medium: "Medium",
      },
    },
    selected: {
      label: "Selected team",
      meta: "{members} members · {managers} manager · {reports} open reports",
      topActions: "Top actions",
      actions: {
        movePool: "Move {count} workers from unassigned pool",
        addBackup: "Add backup manager for leave coverage",
        reviewOverdue: "Review {count} overdue follow-up cases",
      },
    },
    assignDialog: {
      title: "Assign manager",
      team: "Team",
      primaryManager: "Primary manager",
      backupManager: "Backup manager",
      selectBackup: "Select backup",
      capacityWarning: "Capacity warning",
      capacityLine: "{name} will manage {count} workers after this assignment.",
      recommendedLimit: "Recommended limit: {limit}.",
      cancel: "Cancel",
      assignAnyway: "Assign anyway",
    },
    reassignDialog: {
      title: "Reassign employees",
      subtitle:
        "Move selected employees to a new team without losing history.",
      employees: "Employees",
      selected: "{count} selected",
      newTeam: "New team",
      newManager: "New manager",
      back: "Back",
      confirmMove: "Confirm move",
    },
    lifecycle: {
      eyebrow: "END-TO-END FLOW",
      title: "Team & manager lifecycle",
      subtitle:
        "Admin manages ownership structure, but does not create platform roles or Super Admin accounts.",
      rule: "Changing team or manager updates Employee detail, Report ownership context, Dashboard coverage, and Activity Log.",
      backToTeams: "Back to teams",
      steps: [
        {
          title: "Create team",
          subtitle: "Define internal operating group",
          details: [
            { label: "Name", value: "Unique within company" },
            { label: "Optional", value: "Description / purpose" },
            { label: "Initial state", value: "0 members, no manager" },
          ],
        },
        {
          title: "Add members",
          subtitle: "Move employees into team",
          details: [
            {
              label: "Source",
              value: "Employee directory / unassigned pool",
            },
            { label: "Bulk action", value: "Select multiple employees" },
            { label: "Conflict", value: "Employee moves from previous team" },
          ],
        },
        {
          title: "Assign manager",
          subtitle: "Set accountable owner",
          details: [
            { label: "Manager", value: "Choose company manager" },
            { label: "Coverage", value: "Manager becomes primary owner" },
            { label: "Workload", value: "Show capacity warning if high" },
          ],
        },
        {
          title: "Operate team",
          subtitle: "Monitor coverage and workload",
          details: [
            { label: "Signals", value: "Member count + open reports" },
            { label: "Action", value: "Reassign member or add backup" },
            {
              label: "Change manager",
              value: "Confirmation before replacing owner",
            },
          ],
        },
        {
          title: "Archive team",
          subtitle: "Only when structure is safe",
          details: [
            {
              label: "Precondition",
              value: "No active members / unresolved ownership",
            },
            { label: "Move members", value: "Reassign before archive" },
            { label: "History", value: "Archived team remains in audit log" },
          ],
        },
      ],
    },
    createDialog: {
      pill: "CREATE TEAM",
      title: "Create team",
      subtitle: "Define a company operating group",
      teamName: "Team name *",
      purpose: "Purpose",
      primaryManager: "Primary manager",
      primaryManagerValue: "Optional at creation",
      initialMembers: "Initial members",
      initialMembersValue: "{count} selected · can add after creation",
      noteTitle: "Name validation",
      noteBody: "Team names must be unique inside {org}.",
      cancel: "Cancel",
      createTeam: "Create team",
      footnote: "Success creates an empty team card and an audit event.",
    },
    changeManagerDialog: {
      pill: "ASSIGN",
      title: "Assign / change manager",
      subtitle: "Set accountable owner with capacity warning",
      team: "Team",
      teamValue: "{team} · {count} members",
      currentManager: "Current manager",
      newManager: "New manager",
      capacityWarning: "Capacity warning",
      capacityBody:
        "{name} will manage {count} workers after assignment. Recommended company threshold: {limit}.",
      effectiveFrom: "Effective from",
      effectiveFromValue: "Immediately · open report owner context updates",
      cancel: "Cancel",
      assignAnyway: "Assign anyway",
      footnote:
        "Previous manager remains in history; selected reports can be reassigned separately.",
    },
    archiveDialog: {
      pill: "ARCHIVE",
      title: "Archive team",
      subtitle: "Only when ownership is safe",
      team: "Team",
      teamValue: "{team} · {count} members",
      blockedTitle: "Blocked",
      blockedBody:
        "{members} active members and {reports} open report still reference this team. Move/reassign them first.",
      moveMembersTo: "Move members to",
      openReportOwner: "Open report owner",
      openReportOwnerValue: "Reassign to {name}",
      reviewDependencies: "Review dependencies",
      archiveTeam: "Archive team",
      afterArchiveTitle: "After archive",
      afterArchiveBody:
        "Team disappears from active directory but remains visible in employee/report history and audit.",
      footnote:
        "Archive is reversible only if product policy allows; no hard delete in Admin MVP.",
    },
    closeDialog: "Close",
  },

  id: {
    intro: {
      title: "Tinjau tim, manajer, dan cakupan beban kerja",
      subtitle: "Jaga kepemilikan dan cakupan tetap jelas",
      exportStructure: "Ekspor struktur",
      assignManager: "Tetapkan manajer",
    },
    stats: {
      labels: {
        teams: "Tim",
        managers: "Manajer",
        unassigned: "Belum ditugaskan",
        workloadAlert: "Peringatan beban kerja",
      },
      captions: {
        teams: "{count} perlu cakupan",
        managers: "{count} aktif hari ini",
        unassigned: "karyawan",
        workloadAlert: "manajer > {limit}",
      },
    },
    directory: {
      title: "Direktori tim",
      subtitle: "Tim, pemilik, dan jumlah anggota",
      members: "{count} anggota",
      manager: "Manajer: {name}",
      noManager: "Manajer: —",
      noOwner: "Tanpa pemilik",
      selectTeam: "Pilih tim",
    },
    assignment: {
      title: "Penugasan manajer",
      subtitle: "Cakupan dan kepemilikan tim",
      columns: {
        manager: "Manajer",
        primaryTeam: "Tim utama",
        members: "Anggota",
        status: "Status",
      },
      status: {
        healthy: "Sehat",
        lowLoad: "Beban rendah",
      },
      assignManager: "Tetapkan manajer",
      createTeam: "Buat tim",
    },
    coverage: {
      title: "Masalah cakupan",
      subtitle: "Kasus yang perlu penugasan ulang",
      unassignedEmployees: "Karyawan belum ditugaskan",
      details: {
        unassignedEmployees: "{count} orang tidak punya pemilik tim",
        workloadNearLimit: "Beban kerja manajer mendekati batas",
        noBackupManager: "Manajer cadangan belum diatur",
      },
      severity: {
        high: "Tinggi",
        medium: "Sedang",
      },
    },
    selected: {
      label: "Tim terpilih",
      meta: "{members} anggota · {managers} manajer · {reports} laporan terbuka",
      topActions: "Tindakan utama",
      actions: {
        movePool: "Pindahkan {count} pekerja dari kumpulan belum ditugaskan",
        addBackup: "Tambahkan manajer cadangan untuk cakupan cuti",
        reviewOverdue: "Tinjau {count} kasus tindak lanjut yang terlambat",
      },
    },
    assignDialog: {
      title: "Tetapkan manajer",
      team: "Tim",
      primaryManager: "Manajer utama",
      backupManager: "Manajer cadangan",
      selectBackup: "Pilih cadangan",
      capacityWarning: "Peringatan kapasitas",
      capacityLine:
        "{name} akan mengelola {count} pekerja setelah penugasan ini.",
      recommendedLimit: "Batas yang disarankan: {limit}.",
      cancel: "Batal",
      assignAnyway: "Tetap tetapkan",
    },
    reassignDialog: {
      title: "Tugaskan ulang karyawan",
      subtitle:
        "Pindahkan karyawan terpilih ke tim baru tanpa kehilangan riwayat.",
      employees: "Karyawan",
      selected: "{count} dipilih",
      newTeam: "Tim baru",
      newManager: "Manajer baru",
      back: "Kembali",
      confirmMove: "Konfirmasi pemindahan",
    },
    lifecycle: {
      eyebrow: "ALUR MENYELURUH",
      title: "Siklus hidup tim & manajer",
      subtitle:
        "Admin mengelola struktur kepemilikan, tetapi tidak membuat peran platform atau akun Super Admin.",
      rule: "Mengubah tim atau manajer memperbarui detail karyawan, konteks kepemilikan laporan, cakupan dasbor, dan Log Aktivitas.",
      backToTeams: "Kembali ke tim",
      steps: [
        {
          title: "Buat tim",
          subtitle: "Tentukan grup operasional internal",
          details: [
            { label: "Nama", value: "Unik dalam perusahaan" },
            { label: "Opsional", value: "Deskripsi / tujuan" },
            { label: "Kondisi awal", value: "0 anggota, tanpa manajer" },
          ],
        },
        {
          title: "Tambah anggota",
          subtitle: "Pindahkan karyawan ke dalam tim",
          details: [
            {
              label: "Sumber",
              value: "Direktori karyawan / kumpulan belum ditugaskan",
            },
            { label: "Aksi massal", value: "Pilih beberapa karyawan" },
            { label: "Konflik", value: "Karyawan pindah dari tim sebelumnya" },
          ],
        },
        {
          title: "Tetapkan manajer",
          subtitle: "Tetapkan pemilik yang bertanggung jawab",
          details: [
            { label: "Manajer", value: "Pilih manajer perusahaan" },
            { label: "Cakupan", value: "Manajer menjadi pemilik utama" },
            {
              label: "Beban kerja",
              value: "Tampilkan peringatan kapasitas jika tinggi",
            },
          ],
        },
        {
          title: "Operasikan tim",
          subtitle: "Pantau cakupan dan beban kerja",
          details: [
            { label: "Sinyal", value: "Jumlah anggota + laporan terbuka" },
            {
              label: "Tindakan",
              value: "Tugaskan ulang anggota atau tambah cadangan",
            },
            {
              label: "Ganti manajer",
              value: "Konfirmasi sebelum mengganti pemilik",
            },
          ],
        },
        {
          title: "Arsipkan tim",
          subtitle: "Hanya jika struktur aman",
          details: [
            {
              label: "Prasyarat",
              value: "Tidak ada anggota aktif / kepemilikan belum selesai",
            },
            {
              label: "Pindahkan anggota",
              value: "Tugaskan ulang sebelum diarsipkan",
            },
            {
              label: "Riwayat",
              value: "Tim yang diarsipkan tetap ada di log audit",
            },
          ],
        },
      ],
    },
    createDialog: {
      pill: "BUAT TIM",
      title: "Buat tim",
      subtitle: "Tentukan grup operasional perusahaan",
      teamName: "Nama tim *",
      purpose: "Tujuan",
      primaryManager: "Manajer utama",
      primaryManagerValue: "Opsional saat pembuatan",
      initialMembers: "Anggota awal",
      initialMembersValue: "{count} dipilih · bisa ditambah setelah dibuat",
      noteTitle: "Validasi nama",
      noteBody: "Nama tim harus unik di dalam {org}.",
      cancel: "Batal",
      createTeam: "Buat tim",
      footnote:
        "Keberhasilan membuat kartu tim kosong dan satu peristiwa audit.",
    },
    changeManagerDialog: {
      pill: "TETAPKAN",
      title: "Tetapkan / ganti manajer",
      subtitle:
        "Tetapkan pemilik yang bertanggung jawab dengan peringatan kapasitas",
      team: "Tim",
      teamValue: "{team} · {count} anggota",
      currentManager: "Manajer saat ini",
      newManager: "Manajer baru",
      capacityWarning: "Peringatan kapasitas",
      capacityBody:
        "{name} akan mengelola {count} pekerja setelah penugasan. Ambang batas perusahaan yang disarankan: {limit}.",
      effectiveFrom: "Berlaku sejak",
      effectiveFromValue:
        "Segera · konteks pemilik laporan terbuka diperbarui",
      cancel: "Batal",
      assignAnyway: "Tetap tetapkan",
      footnote:
        "Manajer sebelumnya tetap ada di riwayat; laporan terpilih dapat ditugaskan ulang secara terpisah.",
    },
    archiveDialog: {
      pill: "ARSIP",
      title: "Arsipkan tim",
      subtitle: "Hanya jika kepemilikan aman",
      team: "Tim",
      teamValue: "{team} · {count} anggota",
      blockedTitle: "Diblokir",
      blockedBody:
        "{members} anggota aktif dan {reports} laporan terbuka masih merujuk tim ini. Pindahkan/tugaskan ulang lebih dulu.",
      moveMembersTo: "Pindahkan anggota ke",
      openReportOwner: "Pemilik laporan terbuka",
      openReportOwnerValue: "Tugaskan ulang ke {name}",
      reviewDependencies: "Tinjau dependensi",
      archiveTeam: "Arsipkan tim",
      afterArchiveTitle: "Setelah diarsipkan",
      afterArchiveBody:
        "Tim hilang dari direktori aktif tetapi tetap terlihat di riwayat karyawan/laporan dan audit.",
      footnote:
        "Pengarsipan hanya dapat dibatalkan jika kebijakan produk mengizinkan; tidak ada penghapusan permanen di Admin MVP.",
    },
    closeDialog: "Tutup",
  },

  ja: {
    intro: {
      title: "チーム・マネージャー・業務負荷のカバレッジを確認",
      subtitle: "担当とカバレッジを明確に保つ",
      exportStructure: "構成をエクスポート",
      assignManager: "マネージャーを割り当て",
    },
    stats: {
      labels: {
        teams: "チーム",
        managers: "マネージャー",
        unassigned: "未割り当て",
        workloadAlert: "業務負荷アラート",
      },
      captions: {
        teams: "{count} 件がカバレッジ不足",
        managers: "本日 {count} 名が稼働中",
        unassigned: "名の従業員",
        workloadAlert: "マネージャー > {limit}",
      },
    },
    directory: {
      title: "チームディレクトリ",
      subtitle: "チーム・担当者・メンバー数",
      members: "メンバー {count} 名",
      manager: "マネージャー: {name}",
      noManager: "マネージャー: —",
      noOwner: "担当者なし",
      selectTeam: "チームを選択",
    },
    assignment: {
      title: "マネージャー割り当て",
      subtitle: "カバレッジとチームの担当",
      columns: {
        manager: "マネージャー",
        primaryTeam: "主担当チーム",
        members: "メンバー",
        status: "ステータス",
      },
      status: {
        healthy: "適正",
        lowLoad: "負荷低",
      },
      assignManager: "マネージャーを割り当て",
      createTeam: "チームを作成",
    },
    coverage: {
      title: "カバレッジの課題",
      subtitle: "再割り当てが必要な案件",
      unassignedEmployees: "未割り当ての従業員",
      details: {
        unassignedEmployees: "{count} 名にチーム担当者がいません",
        workloadNearLimit: "マネージャーの負荷が上限に近い",
        noBackupManager: "バックアップマネージャー未設定",
      },
      severity: {
        high: "高",
        medium: "中",
      },
    },
    selected: {
      label: "選択中のチーム",
      meta: "メンバー {members} 名 · マネージャー {managers} 名 · 未対応レポート {reports} 件",
      topActions: "優先アクション",
      actions: {
        movePool: "未割り当てプールから {count} 名を移動",
        addBackup: "休暇時のカバーのためバックアップマネージャーを追加",
        reviewOverdue: "期限超過のフォローアップ {count} 件を確認",
      },
    },
    assignDialog: {
      title: "マネージャーを割り当て",
      team: "チーム",
      primaryManager: "主担当マネージャー",
      backupManager: "バックアップマネージャー",
      selectBackup: "バックアップを選択",
      capacityWarning: "キャパシティ警告",
      capacityLine: "この割り当て後、{name} は {count} 名を担当します。",
      recommendedLimit: "推奨上限: {limit}。",
      cancel: "キャンセル",
      assignAnyway: "それでも割り当てる",
    },
    reassignDialog: {
      title: "従業員を再割り当て",
      subtitle: "履歴を失わずに、選択した従業員を新しいチームへ移動します。",
      employees: "従業員",
      selected: "{count} 名を選択",
      newTeam: "新しいチーム",
      newManager: "新しいマネージャー",
      back: "戻る",
      confirmMove: "移動を確定",
    },
    lifecycle: {
      eyebrow: "エンドツーエンドの流れ",
      title: "チームとマネージャーのライフサイクル",
      subtitle:
        "管理者は担当構造を管理しますが、プラットフォームのロールやスーパー管理者アカウントは作成しません。",
      rule: "チームまたはマネージャーの変更は、従業員詳細・レポートの担当コンテキスト・ダッシュボードのカバレッジ・アクティビティログに反映されます。",
      backToTeams: "チーム一覧へ戻る",
      steps: [
        {
          title: "チームを作成",
          subtitle: "社内の運用グループを定義",
          details: [
            { label: "名称", value: "社内で一意" },
            { label: "任意", value: "説明 / 目的" },
            { label: "初期状態", value: "メンバー0名、マネージャーなし" },
          ],
        },
        {
          title: "メンバーを追加",
          subtitle: "従業員をチームへ移動",
          details: [
            {
              label: "取得元",
              value: "従業員ディレクトリ / 未割り当てプール",
            },
            { label: "一括操作", value: "複数の従業員を選択" },
            { label: "競合", value: "従業員は前のチームから移動" },
          ],
        },
        {
          title: "マネージャーを割り当て",
          subtitle: "責任者を設定",
          details: [
            { label: "マネージャー", value: "社内マネージャーを選択" },
            { label: "カバレッジ", value: "マネージャーが主担当になる" },
            { label: "業務負荷", value: "高い場合はキャパシティ警告を表示" },
          ],
        },
        {
          title: "チームを運用",
          subtitle: "カバレッジと業務負荷を監視",
          details: [
            { label: "シグナル", value: "メンバー数＋未対応レポート" },
            {
              label: "アクション",
              value: "メンバーの再割り当てまたはバックアップ追加",
            },
            { label: "マネージャー変更", value: "担当者の交代前に確認" },
          ],
        },
        {
          title: "チームをアーカイブ",
          subtitle: "構造が安全な場合のみ",
          details: [
            {
              label: "前提条件",
              value: "アクティブなメンバーや未解決の担当がないこと",
            },
            { label: "メンバーを移動", value: "アーカイブ前に再割り当て" },
            { label: "履歴", value: "アーカイブ後も監査ログに残る" },
          ],
        },
      ],
    },
    createDialog: {
      pill: "チーム作成",
      title: "チームを作成",
      subtitle: "会社の運用グループを定義",
      teamName: "チーム名 *",
      purpose: "目的",
      primaryManager: "主担当マネージャー",
      primaryManagerValue: "作成時は任意",
      initialMembers: "初期メンバー",
      initialMembersValue: "{count} 名を選択 · 作成後に追加可能",
      noteTitle: "名称の検証",
      noteBody: "チーム名は {org} 内で一意である必要があります。",
      cancel: "キャンセル",
      createTeam: "チームを作成",
      footnote: "成功すると空のチームカードと監査イベントが作成されます。",
    },
    changeManagerDialog: {
      pill: "割り当て",
      title: "マネージャーの割り当て / 変更",
      subtitle: "キャパシティ警告付きで責任者を設定",
      team: "チーム",
      teamValue: "{team} · メンバー {count} 名",
      currentManager: "現在のマネージャー",
      newManager: "新しいマネージャー",
      capacityWarning: "キャパシティ警告",
      capacityBody:
        "割り当て後、{name} は {count} 名を担当します。会社の推奨しきい値: {limit}。",
      effectiveFrom: "適用開始",
      effectiveFromValue: "即時 · 未対応レポートの担当コンテキストを更新",
      cancel: "キャンセル",
      assignAnyway: "それでも割り当てる",
      footnote:
        "前任のマネージャーは履歴に残り、選択したレポートは個別に再割り当てできます。",
    },
    archiveDialog: {
      pill: "アーカイブ",
      title: "チームをアーカイブ",
      subtitle: "担当が安全な場合のみ",
      team: "チーム",
      teamValue: "{team} · メンバー {count} 名",
      blockedTitle: "ブロック中",
      blockedBody:
        "アクティブなメンバー {members} 名と未対応レポート {reports} 件がこのチームを参照しています。先に移動 / 再割り当てしてください。",
      moveMembersTo: "メンバーの移動先",
      openReportOwner: "未対応レポートの担当",
      openReportOwnerValue: "{name} に再割り当て",
      reviewDependencies: "依存関係を確認",
      archiveTeam: "チームをアーカイブ",
      afterArchiveTitle: "アーカイブ後",
      afterArchiveBody:
        "チームはアクティブなディレクトリから消えますが、従業員・レポートの履歴と監査には残ります。",
      footnote:
        "アーカイブの取り消しは製品ポリシーが許す場合のみ可能です。管理者MVPでは完全削除はありません。",
    },
    closeDialog: "閉じる",
  },
});
