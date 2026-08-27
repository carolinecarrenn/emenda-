import { defineSectionCopy } from "@/i18n/copy";

/**
 * Copy for the Company Admin employees area, Figma page
 * "06 · Company Admin Experience" (1182:5690):
 *   AD-02  Employee Management — Directory        (1223:535)
 *   AD-02B Employee Interaction States            (1226:2)
 *   AD-02C Employee Lifecycle Flow                (1226:2585)
 *   AD-02D Employee Detailed States               (1239:196)
 *
 * EN is Figma-verbatim; ID and JA are faithful translations. Only UI/system
 * text lives here — employee names, teams, EMENDA IDs, emails, phone numbers,
 * report IDs and clock times stay raw in employees.mock.ts, and enum-like
 * status/role values are localized through i18n/terms.ts localizeTerm().
 */

interface LifecycleDetailCopy {
  title: string;
  body: string;
}

interface LifecycleStepCopy {
  title: string;
  caption: string;
  details: LifecycleDetailCopy[];
}

export interface AdminemployeesCopy {
  /** AD-02 header block (1223:811). */
  intro: {
    title: string;
    subtitle: string;
    exportList: string;
    inviteEmployee: string;
  };
  /** AD-02 filter bar (1223:818 – 1223:828). */
  filters: {
    searchPlaceholder: string;
    all: string;
    active: string;
    invited: string;
    incomplete: string;
  };
  /** AD-02 "Employee directory" (1223:829). */
  directory: {
    title: string;
    subtitle: string;
    columns: {
      name: string;
      role: string;
      team: string;
      status: string;
      lastActive: string;
    };
    view: string;
    /** Shown when the live search/pill filter matches no row. */
    noResults: string;
  };
  /** "Last active" wording for the raw relative moments in the mock. */
  lastActive: {
    justNow: string;
    minutesAgo: string;
    hoursAgo: string;
    never: string;
  };
  /** AD-02 stat cards (1223:878, 1223:884). */
  stats: {
    labels: { employees: string; incomplete: string };
    captions: { employees: string; incomplete: string };
  };
  /** AD-02 "Selected employee" (1223:890). */
  selected: {
    title: string;
    subtitle: string;
    assignedManager: string;
    latestDailyReport: string;
    openReports: string;
    dailyReportValue: string;
    openReportsValue: string;
    noneValue: string;
    editEmployee: string;
    resendInvite: string;
  };
  /** AD-02 "Needs admin action" (1223:909). */
  needsAction: {
    title: string;
    subtitle: string;
    reasons: { inviteNotAccepted: string; missingContact: string };
  };
  /** AD-02B "Invite employee modal" (1226:6). */
  inviteModal: {
    title: string;
    subtitle: string;
    fullName: string;
    email: string;
    role: string;
    team: string;
    manager: string;
    managerPlaceholder: string;
    cancel: string;
    sendInvite: string;
  };
  /** AD-02B "Employee detail" (1226:28). */
  detail: {
    title: string;
    emendaId: string;
    manager: string;
    phone: string;
    profile: string;
    dailyReport: string;
    openReport: string;
    profileValue: string;
    editEmployee: string;
    resendInvite: string;
    dangerTitle: string;
    dangerBody: string;
    dangerAction: string;
  };
  /** AD-02D board header (1239:197 – 1239:199). */
  detailedStates: { eyebrow: string; title: string; subtitle: string };
  /** AD-02D "Invite employee form" (1239:200). */
  inviteForm: {
    pill: string;
    title: string;
    subtitle: string;
    fullName: string;
    email: string;
    role: string;
    teamManager: string;
    roleNote: string;
    teamNote: string;
    noteTitle: string;
    noteBody: string;
    cancel: string;
    sendInvite: string;
    outcome: string;
  };
  /** AD-02D "Edit employee detail" (1239:225). */
  editForm: {
    pill: string;
    title: string;
    subtitle: string;
    identity: string;
    phoneLanguage: string;
    team: string;
    manager: string;
    noteTitle: string;
    noteBody: string;
    discard: string;
    saveChanges: string;
    outcome: string;
  };
  /** AD-02D "Deactivate / reactivate" (1239:250). */
  accessForm: {
    pill: string;
    title: string;
    subtitle: string;
    employee: string;
    reason: string;
    reasonValue: string;
    preservedTitle: string;
    preservedBody: string;
    cancel: string;
    deactivate: string;
    afterTitle: string;
    afterBody: string;
    reactivate: string;
    outcome: string;
  };
  /** AD-02C "Employee lifecycle" (1226:2585). */
  lifecycle: {
    eyebrow: string;
    title: string;
    subtitle: string;
    rule: string;
    steps: {
      invite: LifecycleStepCopy;
      pending: LifecycleStepCopy;
      accepts: LifecycleStepCopy;
      assign: LifecycleStepCopy;
      deactivate: LifecycleStepCopy;
    };
  };
  /** Dismiss control for the AD-02B / AD-02D overlays. */
  closeOverlay: string;
}

export const ADMINEMPLOYEES_COPY = defineSectionCopy<AdminemployeesCopy>({
  en: {
    intro: {
      title: "Manage employees, status, and profile readiness",
      subtitle: "Company users inside this workspace",
      exportList: "Export list",
      inviteEmployee: "Invite employee",
    },
    filters: {
      searchPlaceholder: "Search employee, email, or EMENDA ID",
      all: "All employees",
      active: "Active",
      invited: "Invited",
      incomplete: "Incomplete",
    },
    directory: {
      title: "Employee directory",
      subtitle: "Manage company employees, status, and profile readiness",
      columns: {
        name: "Name",
        role: "Role",
        team: "Team",
        status: "Status",
        lastActive: "Last active",
      },
      view: "View",
      noResults: "No employees match this filter",
    },
    lastActive: {
      justNow: "Just now",
      minutesAgo: "{n} min ago",
      hoursAgo: "{n} h ago",
      never: "—",
    },
    stats: {
      labels: { employees: "Employees", incomplete: "Incomplete" },
      captions: { employees: "{count} invited", incomplete: "need profile" },
    },
    selected: {
      title: "Selected employee",
      subtitle: "Quick profile summary",
      assignedManager: "Assigned manager",
      latestDailyReport: "Latest daily report",
      openReports: "Open reports",
      dailyReportValue: "Submitted today · {time}",
      openReportsValue: "{count} active · {id}",
      noneValue: "—",
      editEmployee: "Edit employee",
      resendInvite: "Resend invite",
    },
    needsAction: {
      title: "Needs admin action",
      subtitle: "Accounts that need company admin follow-up",
      reasons: {
        inviteNotAccepted: "Invite not accepted after {days} days",
        missingContact: "Missing phone number and address",
      },
    },
    inviteModal: {
      title: "Invite employee",
      subtitle: "Create a company employee invitation.",
      fullName: "Full name",
      email: "Email",
      role: "Role",
      team: "Team",
      manager: "Manager",
      managerPlaceholder: "Select manager",
      cancel: "Cancel",
      sendInvite: "Send invite",
    },
    detail: {
      title: "Employee detail",
      emendaId: "EMENDA ID",
      manager: "Manager",
      phone: "Phone",
      profile: "Profile",
      dailyReport: "Daily report",
      openReport: "Open report",
      profileValue: "{percent}% complete",
      editEmployee: "Edit employee",
      resendInvite: "Resend invite",
      dangerTitle: "Deactivate employee",
      dangerBody: "Blocks login but preserves reports and audit history.",
      dangerAction: "Deactivate",
    },
    detailedStates: {
      eyebrow: "CONCRETE OPERATIONAL STATES",
      title: "Employees — invite, edit, deactivate, reactivate",
      subtitle:
        "Concrete forms include validation, assignment context, destructive confirmation, and post-action state.",
    },
    inviteForm: {
      pill: "INVITE",
      title: "Invite employee form",
      subtitle: "Create a company employee invitation",
      fullName: "Full name *",
      email: "Email *",
      role: "Role *",
      teamManager: "Team / Manager",
      roleNote: "fixed to company roles only",
      teamNote: "can be assigned now or later",
      noteTitle: "Duplicate email validation",
      noteBody:
        "If email already belongs to this company, link to existing employee instead of creating a duplicate.",
      cancel: "Cancel",
      sendInvite: "Send invite",
      outcome:
        "Success → pending invite row with delivery status, expiry date, resend and cancel.",
    },
    editForm: {
      pill: "EDIT",
      title: "Edit employee detail",
      subtitle: "Update profile and operating assignment",
      identity: "Identity",
      phoneLanguage: "Phone / language",
      team: "Team",
      manager: "Manager",
      noteTitle: "Assignment impact",
      noteBody:
        "Changing manager updates team coverage, report ownership context, and Activity Log.",
      discard: "Discard",
      saveChanges: "Save changes",
      outcome:
        "Save error keeps all entered values. Successful edit shows timestamp and actor.",
    },
    accessForm: {
      pill: "ACCESS",
      title: "Deactivate / reactivate",
      subtitle: "Control login without deleting operational history",
      employee: "Employee",
      reason: "Reason *",
      reasonValue: "Contract ended / temporary suspension / other",
      preservedTitle: "Preserved data",
      preservedBody:
        "Reports, daily reports, rewards transactions, EMENDA ID, and audit history stay available.",
      cancel: "Cancel",
      deactivate: "Deactivate employee",
      afterTitle: "After deactivate",
      afterBody:
        "Status becomes Inactive. Login is blocked. A Reactivate action becomes available.",
      reactivate: "Reactivate",
      outcome:
        "Reactivation restores login and prior operating links unless reassigned while inactive.",
    },
    lifecycle: {
      eyebrow: "END-TO-END FLOW",
      title: "Employee lifecycle: invite → active → inactive",
      subtitle:
        "Every employee state must remain linked to company, team, manager, reports, and audit history.",
      rule: "No hard delete for employees in the Admin MVP: deactivate preserves operational history.",
      steps: {
        invite: {
          title: "Invite employee",
          caption: "Create company-scoped account",
          details: [
            { title: "Required fields", body: "Name + email" },
            {
              title: "Optional assignment",
              body: "Team + manager can be set now",
            },
            { title: "Validation", body: "Duplicate email / invalid invite" },
          ],
        },
        pending: {
          title: "Invitation pending",
          caption: "Admin tracks delivery",
          details: [
            { title: "States", body: "Sent / delivered / expired" },
            { title: "Actions", body: "Resend or cancel invite" },
            { title: "Expired", body: "Generate a new invite link" },
          ],
        },
        accepts: {
          title: "Employee accepts",
          caption: "Account becomes available",
          details: [
            {
              title: "Profile",
              body: "Required profile fields may still be incomplete",
            },
            { title: "Status", body: "Pending profile → Active" },
            { title: "Audit", body: "Activation is logged" },
          ],
        },
        assign: {
          title: "Assign ownership",
          caption: "Place employee in operating structure",
          details: [
            { title: "Team", body: "Select or change team" },
            { title: "Manager", body: "Assign responsible manager" },
            {
              title: "Result",
              body: "Team coverage + manager workload update",
            },
          ],
        },
        deactivate: {
          title: "Deactivate / reactivate",
          caption: "Control access without deleting history",
          details: [
            { title: "Deactivate", body: "Confirmation + reason" },
            {
              title: "Preserve",
              body: "Reports, daily reports, rewards, audit",
            },
            {
              title: "Reactivate",
              body: "Restore login and previous ownership",
            },
          ],
        },
      },
    },
    closeOverlay: "Close",
  },

  id: {
    intro: {
      title: "Kelola karyawan, status, dan kelengkapan profil",
      subtitle: "Pengguna perusahaan di dalam ruang kerja ini",
      exportList: "Ekspor daftar",
      inviteEmployee: "Undang karyawan",
    },
    filters: {
      searchPlaceholder: "Cari karyawan, email, atau EMENDA ID",
      all: "Semua karyawan",
      active: "Aktif",
      invited: "Diundang",
      incomplete: "Belum lengkap",
    },
    directory: {
      title: "Direktori karyawan",
      subtitle: "Kelola karyawan perusahaan, status, dan kelengkapan profil",
      columns: {
        name: "Nama",
        role: "Peran",
        team: "Tim",
        status: "Status",
        lastActive: "Terakhir aktif",
      },
      view: "Lihat",
      noResults: "Tidak ada karyawan yang cocok dengan filter ini",
    },
    lastActive: {
      justNow: "Baru saja",
      minutesAgo: "{n} mnt lalu",
      hoursAgo: "{n} jam lalu",
      never: "—",
    },
    stats: {
      labels: { employees: "Karyawan", incomplete: "Belum lengkap" },
      captions: { employees: "{count} diundang", incomplete: "perlu profil" },
    },
    selected: {
      title: "Karyawan terpilih",
      subtitle: "Ringkasan profil singkat",
      assignedManager: "Manajer penanggung jawab",
      latestDailyReport: "Laporan harian terbaru",
      openReports: "Laporan terbuka",
      dailyReportValue: "Dikirim hari ini · {time}",
      openReportsValue: "{count} aktif · {id}",
      noneValue: "—",
      editEmployee: "Ubah karyawan",
      resendInvite: "Kirim ulang undangan",
    },
    needsAction: {
      title: "Perlu tindakan admin",
      subtitle: "Akun yang perlu ditindaklanjuti admin perusahaan",
      reasons: {
        inviteNotAccepted: "Undangan belum diterima setelah {days} hari",
        missingContact: "Nomor telepon dan alamat belum diisi",
      },
    },
    inviteModal: {
      title: "Undang karyawan",
      subtitle: "Buat undangan karyawan perusahaan.",
      fullName: "Nama lengkap",
      email: "Email",
      role: "Peran",
      team: "Tim",
      manager: "Manajer",
      managerPlaceholder: "Pilih manajer",
      cancel: "Batal",
      sendInvite: "Kirim undangan",
    },
    detail: {
      title: "Detail karyawan",
      emendaId: "EMENDA ID",
      manager: "Manajer",
      phone: "Telepon",
      profile: "Profil",
      dailyReport: "Laporan harian",
      openReport: "Laporan terbuka",
      profileValue: "{percent}% lengkap",
      editEmployee: "Ubah karyawan",
      resendInvite: "Kirim ulang undangan",
      dangerTitle: "Nonaktifkan karyawan",
      dangerBody:
        "Memblokir login tetapi menyimpan laporan dan riwayat audit.",
      dangerAction: "Nonaktifkan",
    },
    detailedStates: {
      eyebrow: "STATUS OPERASIONAL KONKRET",
      title: "Karyawan — undang, ubah, nonaktifkan, aktifkan kembali",
      subtitle:
        "Formulir konkret mencakup validasi, konteks penugasan, konfirmasi destruktif, dan status setelah tindakan.",
    },
    inviteForm: {
      pill: "UNDANG",
      title: "Formulir undangan karyawan",
      subtitle: "Buat undangan karyawan perusahaan",
      fullName: "Nama lengkap *",
      email: "Email *",
      role: "Peran *",
      teamManager: "Tim / Manajer",
      roleNote: "hanya peran perusahaan",
      teamNote: "dapat ditetapkan sekarang atau nanti",
      noteTitle: "Validasi email duplikat",
      noteBody:
        "Jika email sudah terdaftar di perusahaan ini, tautkan ke karyawan yang ada alih-alih membuat duplikat.",
      cancel: "Batal",
      sendInvite: "Kirim undangan",
      outcome:
        "Berhasil → baris undangan tertunda dengan status pengiriman, tanggal kedaluwarsa, kirim ulang, dan batal.",
    },
    editForm: {
      pill: "UBAH",
      title: "Ubah detail karyawan",
      subtitle: "Perbarui profil dan penugasan operasional",
      identity: "Identitas",
      phoneLanguage: "Telepon / bahasa",
      team: "Tim",
      manager: "Manajer",
      noteTitle: "Dampak penugasan",
      noteBody:
        "Mengganti manajer memperbarui cakupan tim, konteks kepemilikan laporan, dan Log Aktivitas.",
      discard: "Buang",
      saveChanges: "Simpan perubahan",
      outcome:
        "Kesalahan penyimpanan tetap mempertahankan semua nilai yang dimasukkan. Perubahan yang berhasil menampilkan waktu dan pelakunya.",
    },
    accessForm: {
      pill: "AKSES",
      title: "Nonaktifkan / aktifkan kembali",
      subtitle: "Kendalikan login tanpa menghapus riwayat operasional",
      employee: "Karyawan",
      reason: "Alasan *",
      reasonValue: "Kontrak berakhir / penangguhan sementara / lainnya",
      preservedTitle: "Data yang dipertahankan",
      preservedBody:
        "Laporan, laporan harian, transaksi reward, EMENDA ID, dan riwayat audit tetap tersedia.",
      cancel: "Batal",
      deactivate: "Nonaktifkan karyawan",
      afterTitle: "Setelah dinonaktifkan",
      afterBody:
        "Status menjadi Tidak aktif. Login diblokir. Tindakan Aktifkan kembali menjadi tersedia.",
      reactivate: "Aktifkan kembali",
      outcome:
        "Aktivasi ulang memulihkan login dan tautan operasional sebelumnya kecuali telah dialihkan saat nonaktif.",
    },
    lifecycle: {
      eyebrow: "ALUR MENYELURUH",
      title: "Siklus hidup karyawan: undang → aktif → nonaktif",
      subtitle:
        "Setiap status karyawan harus tetap terhubung dengan perusahaan, tim, manajer, laporan, dan riwayat audit.",
      rule: "Tidak ada penghapusan permanen karyawan pada Admin MVP: nonaktifkan menjaga riwayat operasional.",
      steps: {
        invite: {
          title: "Undang karyawan",
          caption: "Buat akun dalam lingkup perusahaan",
          details: [
            { title: "Kolom wajib", body: "Nama + email" },
            {
              title: "Penugasan opsional",
              body: "Tim + manajer bisa diatur sekarang",
            },
            {
              title: "Validasi",
              body: "Email duplikat / undangan tidak valid",
            },
          ],
        },
        pending: {
          title: "Undangan tertunda",
          caption: "Admin memantau pengiriman",
          details: [
            { title: "Status", body: "Terkirim / sampai / kedaluwarsa" },
            { title: "Tindakan", body: "Kirim ulang atau batalkan undangan" },
            { title: "Kedaluwarsa", body: "Buat tautan undangan baru" },
          ],
        },
        accepts: {
          title: "Karyawan menerima",
          caption: "Akun menjadi tersedia",
          details: [
            {
              title: "Profil",
              body: "Kolom profil wajib mungkin masih kosong",
            },
            { title: "Status", body: "Profil tertunda → Aktif" },
            { title: "Audit", body: "Aktivasi dicatat" },
          ],
        },
        assign: {
          title: "Tetapkan kepemilikan",
          caption: "Tempatkan karyawan dalam struktur operasional",
          details: [
            { title: "Tim", body: "Pilih atau ganti tim" },
            { title: "Manajer", body: "Tetapkan manajer penanggung jawab" },
            {
              title: "Hasil",
              body: "Cakupan tim + beban kerja manajer diperbarui",
            },
          ],
        },
        deactivate: {
          title: "Nonaktifkan / aktifkan kembali",
          caption: "Kendalikan akses tanpa menghapus riwayat",
          details: [
            { title: "Nonaktifkan", body: "Konfirmasi + alasan" },
            {
              title: "Pertahankan",
              body: "Laporan, laporan harian, reward, audit",
            },
            {
              title: "Aktifkan kembali",
              body: "Pulihkan login dan kepemilikan sebelumnya",
            },
          ],
        },
      },
    },
    closeOverlay: "Tutup",
  },

  ja: {
    intro: {
      title: "従業員・ステータス・プロフィール整備状況の管理",
      subtitle: "このワークスペース内の会社ユーザー",
      exportList: "一覧をエクスポート",
      inviteEmployee: "従業員を招待",
    },
    filters: {
      searchPlaceholder: "従業員・メール・EMENDA ID を検索",
      all: "すべての従業員",
      active: "有効",
      invited: "招待済み",
      incomplete: "未完了",
    },
    directory: {
      title: "従業員ディレクトリ",
      subtitle: "会社の従業員・ステータス・プロフィール整備状況を管理",
      columns: {
        name: "氏名",
        role: "役割",
        team: "チーム",
        status: "ステータス",
        lastActive: "最終アクティブ",
      },
      view: "表示",
      noResults: "この条件に一致する従業員はいません",
    },
    lastActive: {
      justNow: "たった今",
      minutesAgo: "{n} 分前",
      hoursAgo: "{n} 時間前",
      never: "—",
    },
    stats: {
      labels: { employees: "従業員", incomplete: "未完了" },
      captions: {
        employees: "招待 {count} 件",
        incomplete: "プロフィール未入力",
      },
    },
    selected: {
      title: "選択中の従業員",
      subtitle: "プロフィール概要",
      assignedManager: "担当マネージャー",
      latestDailyReport: "最新の日報",
      openReports: "対応中の報告",
      dailyReportValue: "本日提出 · {time}",
      openReportsValue: "{count} 件対応中 · {id}",
      noneValue: "—",
      editEmployee: "従業員を編集",
      resendInvite: "招待を再送",
    },
    needsAction: {
      title: "管理者対応が必要",
      subtitle: "会社管理者の対応が必要なアカウント",
      reasons: {
        inviteNotAccepted: "招待が {days} 日間未承諾",
        missingContact: "電話番号と住所が未入力",
      },
    },
    inviteModal: {
      title: "従業員を招待",
      subtitle: "会社の従業員招待を作成します。",
      fullName: "氏名",
      email: "メールアドレス",
      role: "役割",
      team: "チーム",
      manager: "マネージャー",
      managerPlaceholder: "マネージャーを選択",
      cancel: "キャンセル",
      sendInvite: "招待を送信",
    },
    detail: {
      title: "従業員の詳細",
      emendaId: "EMENDA ID",
      manager: "マネージャー",
      phone: "電話番号",
      profile: "プロフィール",
      dailyReport: "日報",
      openReport: "対応中の報告",
      profileValue: "{percent}% 完了",
      editEmployee: "従業員を編集",
      resendInvite: "招待を再送",
      dangerTitle: "従業員を無効化",
      dangerBody: "ログインを停止しますが、報告と監査履歴は保持されます。",
      dangerAction: "無効化",
    },
    detailedStates: {
      eyebrow: "具体的な運用ステート",
      title: "従業員 — 招待・編集・無効化・再有効化",
      subtitle:
        "具体的なフォームには検証、割り当てコンテキスト、破壊的操作の確認、実行後の状態が含まれます。",
    },
    inviteForm: {
      pill: "招待",
      title: "従業員招待フォーム",
      subtitle: "会社の従業員招待を作成",
      fullName: "氏名 *",
      email: "メールアドレス *",
      role: "役割 *",
      teamManager: "チーム / マネージャー",
      roleNote: "会社内の役割に限定",
      teamNote: "今でも後でも割り当て可能",
      noteTitle: "メール重複チェック",
      noteBody:
        "メールアドレスがすでにこの会社に存在する場合は、重複を作らず既存の従業員に紐付けます。",
      cancel: "キャンセル",
      sendInvite: "招待を送信",
      outcome:
        "成功 → 配信状況・有効期限・再送・取消を備えた保留中の招待行が追加されます。",
    },
    editForm: {
      pill: "編集",
      title: "従業員詳細の編集",
      subtitle: "プロフィールと運用上の割り当てを更新",
      identity: "本人情報",
      phoneLanguage: "電話番号 / 言語",
      team: "チーム",
      manager: "マネージャー",
      noteTitle: "割り当ての影響",
      noteBody:
        "マネージャーを変更すると、チームのカバレッジ、報告の担当コンテキスト、アクティビティログが更新されます。",
      discard: "破棄",
      saveChanges: "変更を保存",
      outcome:
        "保存エラー時も入力値はすべて保持されます。編集が成功すると日時と実行者が表示されます。",
    },
    accessForm: {
      pill: "アクセス",
      title: "無効化 / 再有効化",
      subtitle: "運用履歴を削除せずにログインを制御",
      employee: "従業員",
      reason: "理由 *",
      reasonValue: "契約終了 / 一時停止 / その他",
      preservedTitle: "保持されるデータ",
      preservedBody:
        "報告、日報、リワード取引、EMENDA ID、監査履歴は引き続き利用できます。",
      cancel: "キャンセル",
      deactivate: "従業員を無効化",
      afterTitle: "無効化後",
      afterBody:
        "ステータスは「無効」になります。ログインは停止され、再有効化の操作が利用できます。",
      reactivate: "再有効化",
      outcome:
        "再有効化するとログインと以前の運用上の紐付けが復元されます（無効中に再割り当てされた場合を除く）。",
    },
    lifecycle: {
      eyebrow: "エンドツーエンドのフロー",
      title: "従業員のライフサイクル：招待 → 有効 → 無効",
      subtitle:
        "すべての従業員ステートは、会社・チーム・マネージャー・報告・監査履歴と紐付いたままである必要があります。",
      rule: "Admin MVP では従業員の物理削除は行いません。無効化により運用履歴を保持します。",
      steps: {
        invite: {
          title: "従業員を招待",
          caption: "会社スコープのアカウントを作成",
          details: [
            { title: "必須項目", body: "氏名 + メールアドレス" },
            {
              title: "任意の割り当て",
              body: "チームとマネージャーは今設定可能",
            },
            { title: "検証", body: "メール重複 / 無効な招待" },
          ],
        },
        pending: {
          title: "招待保留中",
          caption: "管理者が配信を追跡",
          details: [
            { title: "状態", body: "送信 / 到達 / 期限切れ" },
            { title: "操作", body: "招待の再送または取消" },
            { title: "期限切れ", body: "新しい招待リンクを生成" },
          ],
        },
        accepts: {
          title: "従業員が承諾",
          caption: "アカウントが利用可能に",
          details: [
            {
              title: "プロフィール",
              body: "必須プロフィール項目が未入力の場合があります",
            },
            { title: "ステータス", body: "プロフィール保留 → 有効" },
            { title: "監査", body: "有効化はログに記録" },
          ],
        },
        assign: {
          title: "担当を割り当て",
          caption: "従業員を運用体制に配置",
          details: [
            { title: "チーム", body: "チームの選択・変更" },
            { title: "マネージャー", body: "担当マネージャーを割り当て" },
            {
              title: "結果",
              body: "チームのカバレッジとマネージャーの負荷を更新",
            },
          ],
        },
        deactivate: {
          title: "無効化 / 再有効化",
          caption: "履歴を削除せずアクセスを制御",
          details: [
            { title: "無効化", body: "確認 + 理由" },
            { title: "保持", body: "報告・日報・リワード・監査" },
            { title: "再有効化", body: "ログインと以前の担当を復元" },
          ],
        },
      },
    },
    closeOverlay: "閉じる",
  },
});
