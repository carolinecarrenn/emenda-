import { defineSectionCopy } from "@/i18n/copy";

/**
 * Copy for the Company Admin Settings area — Figma page 06 · Company Admin
 * Experience (1182:5690):
 *
 *   AD-09  Company Settings — Preferences   (1225:687)   base screen
 *   AD-09B Settings Save & Reset States     (1226:1175)  save/reset dialogs
 *   AD-09C Settings Change Flow             (1226:3975)  lifecycle board
 *   AD-09D Settings Detailed States         (1239:748)   detailed state panels
 *   AD-09E Language Settings — EN           (1249:4994)  app language screen
 *
 * EN strings are the Figma text verbatim; ID / JA are faithful translations.
 * DATA never passes through this file — the tenant name, people, addresses,
 * phone numbers, clock times and configuration values all stay raw in
 * settings.mock.ts, and enum-like values render through localizeTerm().
 *
 * Governance (AD-09C flow rule, 1226:4069): nothing here may describe global
 * roles, tenants, billing, licenses or platform feature flags.
 */

export interface FlowDetailCopy {
  label: string;
  body: string;
}

export interface FlowStepCopy {
  /** Two-digit chip drawn in the step header. */
  number: string;
  title: string;
  subtitle: string;
  details: FlowDetailCopy[];
}

export interface AdminsettingsCopy {
  /** AD-09 "Screen Content" intro row (1225:963). */
  intro: {
    title: string;
    subtitle: string;
    resetRules: string;
    saveChanges: string;
  };
  /** AD-09 "Company profile" card (1225:970). */
  profile: {
    title: string;
    subtitle: string;
    labels: {
      companyName: string;
      industry: string;
      address: string;
      primaryContact: string;
      timezone: string;
    };
    saveProfile: string;
    cancel: string;
  };
  /** AD-09 "Operational defaults" card (1225:992). */
  operations: {
    title: string;
    subtitle: string;
    labels: {
      defaultReportOwner: string;
      escalationWindow: string;
      dailyReminderTime: string;
      outcomeRequired: string;
      evidenceRequired: string;
    };
  };
  /** AD-09 "Admin access & notifications" card (1225:1010). */
  access: {
    title: string;
    subtitle: string;
    roleLine: { owner: string; manager: string };
    pill: { owner: string; manager: string };
    notifications: string;
    notificationItems: {
      highPriorityReport: string;
      overdueFollowUp: string;
      /** "Missing daily reports > {count} people" */
      missingDailyReports: string;
      manualRewardAdjustment: string;
    };
    addManagerAccess: string;
    resetRules: string;
  };
  /** AD-09 "Global Language" sub-card (1249:4988). */
  languageCard: {
    title: string;
    subtitle: string;
    change: string;
  };
  /** AD-09E "Language settings card" (1249:4995). */
  language: {
    eyebrow: string;
    title: string;
    intro: string;
    behaviorGlobal: string;
    behaviorNoSelector: string;
    cancel: string;
    apply: string;
  };
  /** AD-09B "Save company changes?" (1226:1179). */
  confirmSave: {
    title: string;
    /** "These updates apply to {org} only." */
    subtitle: string;
    escalationWindow: string;
    dailyReminder: string;
    evidenceRequired: string;
    cancel: string;
    saveChanges: string;
  };
  /** AD-09B "Reset operational rules?" (1226:1192). */
  confirmReset: {
    title: string;
    subtitle: string;
    alertTitle: string;
    alertBody: string;
    keepSettings: string;
    resetRules: string;
  };
  /** AD-09D board heading (1239:749-751). */
  statesBoard: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  /** AD-09D "Unsaved settings" (1239:752). */
  unsaved: {
    pill: string;
    title: string;
    subtitle: string;
    escalationWindow: string;
    dailyReminder: string;
    evidenceRequired: string;
    noteTitle: string;
    noteBody: string;
    discard: string;
    saveChanges: string;
    validationLabel: string;
    validationBody: string;
    footnote: string;
  };
  /** AD-09D "Confirm and apply changes" (1239:777). */
  confirmApply: {
    pill: string;
    title: string;
    subtitle: string;
    company: string;
    /** "{org} only" */
    companyValue: string;
    reports: string;
    /** "Escalation checkpoint becomes {hours} hours" */
    reportsValue: string;
    dailyReports: string;
    /** "Reminder scheduler moves to {time}" */
    dailyReportsValue: string;
    resolution: string;
    resolutionValue: string;
    cancel: string;
    confirmSave: string;
    failedTitle: string;
    failedBody: string;
    footnote: string;
  };
  /** AD-09D "Reset operational rules" (1239:802). */
  resetPanel: {
    pill: string;
    title: string;
    subtitle: string;
    resetTarget: string;
    resetTargetValue: string;
    willChangeTitle: string;
    willChangeBody: string;
    willNotDeleteTitle: string;
    willNotDeleteBody: string;
    keepSettings: string;
    resetRules: string;
    afterReset: string;
    afterResetValue: string;
    audit: string;
    auditValue: string;
    footnote: string;
  };
  /** AD-09C "Settings Change Flow" (1226:3975). */
  flow: {
    eyebrow: string;
    title: string;
    subtitle: string;
    rule: string;
    steps: FlowStepCopy[];
  };
}

export const ADMINSETTINGS_COPY = defineSectionCopy<AdminsettingsCopy>({
  en: {
    intro: {
      title: "Manage company profile, rules, and access",
      subtitle: "Applies only to this company workspace",
      resetRules: "Reset rules",
      saveChanges: "Save changes",
    },
    profile: {
      title: "Company profile",
      subtitle: "Identity and company details",
      labels: {
        companyName: "Company name",
        industry: "Industry",
        address: "Address",
        primaryContact: "Primary contact",
        timezone: "Timezone",
      },
      saveProfile: "Save profile",
      cancel: "Cancel",
    },
    operations: {
      title: "Operational defaults",
      subtitle: "Rules applied inside this company",
      labels: {
        defaultReportOwner: "Default report owner",
        escalationWindow: "Escalation window",
        dailyReminderTime: "Daily reminder time",
        outcomeRequired: "Outcome required before close",
        evidenceRequired: "Evidence required on resolution",
      },
    },
    access: {
      title: "Admin access & notifications",
      subtitle: "Who can operate this workspace",
      roleLine: {
        owner: "Company Admin · Full access",
        manager: "Manager · report and team access",
      },
      pill: { owner: "Owner", manager: "Manager" },
      notifications: "Notifications",
      notificationItems: {
        highPriorityReport: "New high-priority report",
        overdueFollowUp: "Overdue follow-up",
        missingDailyReports: "Missing daily reports > {count} people",
        manualRewardAdjustment: "Manual reward adjustment",
      },
      addManagerAccess: "Add manager access",
      resetRules: "Reset rules",
    },
    languageCard: {
      title: "App language",
      subtitle: "Global · applies across Admin UI",
      change: "Change language",
    },
    language: {
      eyebrow: "LANGUAGE",
      title: "App language",
      intro:
        "Changing this rerenders the whole Admin interface. User-authored content remains as written.",
      behaviorGlobal:
        "Global setting · persisted to the Admin profile · can be changed again in Settings.",
      behaviorNoSelector: "No per-screen or composer language selector.",
      cancel: "Cancel",
      apply: "Apply language",
    },
    confirmSave: {
      title: "Save company changes?",
      subtitle: "These updates apply to {org} only.",
      escalationWindow: "Escalation window",
      dailyReminder: "Daily reminder",
      evidenceRequired: "Evidence required",
      cancel: "Cancel",
      saveChanges: "Save changes",
    },
    confirmReset: {
      title: "Reset operational rules?",
      subtitle:
        "This restores company defaults. Employee/report history is not deleted.",
      alertTitle: "Destructive configuration change",
      alertBody:
        "Current custom reminder and escalation settings will be lost.",
      keepSettings: "Keep settings",
      resetRules: "Reset rules",
    },
    statesBoard: {
      eyebrow: "CONCRETE OPERATIONAL STATES",
      title: "Company Settings — dirty state, save, reset, failure",
      subtitle:
        "Configuration changes show consequences before applying and preserve user input on failure.",
    },
    unsaved: {
      pill: "EDITING",
      title: "Unsaved settings",
      subtitle: "Dirty state is explicit while Admin edits",
      escalationWindow: "Escalation window",
      dailyReminder: "Daily reminder",
      evidenceRequired: "Evidence required",
      noteTitle: "Unsaved changes",
      noteBody:
        "Navigating away prompts Stay / Discard changes. Validation errors appear inline.",
      discard: "Discard",
      saveChanges: "Save changes",
      validationLabel: "Validation example",
      validationBody: "Reminder time must use company timezone",
      footnote:
        "Dirty state remains until a successful save or explicit discard.",
    },
    confirmApply: {
      pill: "SAVE",
      title: "Confirm and apply changes",
      subtitle: "Summarize high-impact consequences",
      company: "Company",
      companyValue: "{org} only",
      reports: "Reports",
      reportsValue: "Escalation checkpoint becomes {hours} hours",
      dailyReports: "Daily reports",
      dailyReportsValue: "Reminder scheduler moves to {time}",
      resolution: "Resolution",
      resolutionValue: "Evidence requirement stays enabled",
      cancel: "Cancel",
      confirmSave: "Confirm save",
      failedTitle: "Save failed",
      failedBody:
        "Keep all edited values and show retry. Never revert the form silently.",
      footnote:
        "Success shows saved timestamp and creates before/after audit entries.",
    },
    resetPanel: {
      pill: "RESET RULES",
      title: "Reset operational rules",
      subtitle: "Destructive configuration change with preserved history",
      resetTarget: "Reset target",
      resetTargetValue: "Operational defaults only",
      willChangeTitle: "Will change",
      willChangeBody:
        "Custom reminder and escalation settings return to company defaults.",
      willNotDeleteTitle: "Will NOT delete",
      willNotDeleteBody:
        "Employees, reports, daily reports, reward transactions, and Activity Log remain unchanged.",
      keepSettings: "Keep settings",
      resetRules: "Reset rules",
      afterReset: "After reset",
      afterResetValue: "Affected modules immediately use default configuration",
      audit: "Audit",
      auditValue: "Reset actor + previous config snapshot recorded",
      footnote:
        "No Company Admin control can change global tenants, billing, or feature flags.",
    },
    flow: {
      eyebrow: "END-TO-END FLOW",
      title: "Settings: edit → validate → confirm → apply",
      subtitle: "Company Settings affect only the tenant/company workspace.",
      rule: "No Company Admin setting may alter global roles, tenants, billing, licenses, or platform feature flags.",
      steps: [
        {
          number: "01",
          title: "Edit setting",
          subtitle: "Change company profile or defaults",
          details: [
            { label: "Profile", body: "Name, address, contact, timezone" },
            {
              label: "Operations",
              body: "Escalation, reminder, evidence rules",
            },
            { label: "Access", body: "Manager access only" },
          ],
        },
        {
          number: "02",
          title: "Dirty state",
          subtitle: "Unsaved changes are explicit",
          details: [
            { label: "Indicator", body: "Unsaved changes" },
            { label: "Navigate away", body: "Prompt to discard or stay" },
            {
              label: "Validation",
              body: "Required/invalid values shown inline",
            },
          ],
        },
        {
          number: "03",
          title: "Confirm high-impact change",
          subtitle: "Only when consequence is material",
          details: [
            {
              label: "Examples",
              body: "Reset rules / remove manager access",
            },
            { label: "Summary", body: "What will change" },
            { label: "Action", body: "Confirm or cancel" },
          ],
        },
        {
          number: "04",
          title: "Save",
          subtitle: "Persist company configuration",
          details: [
            { label: "Success", body: "Saved timestamp" },
            { label: "Failure", body: "Keep entered values + retry" },
            { label: "Audit", body: "Record actor + before/after" },
          ],
        },
        {
          number: "05",
          title: "Apply downstream",
          subtitle: "Affected modules use new defaults",
          details: [
            { label: "Daily reports", body: "Reminder time" },
            { label: "Reports", body: "Evidence/outcome requirements" },
            { label: "Teams", body: "Access changes reflected" },
          ],
        },
      ],
    },
  },

  id: {
    intro: {
      title: "Kelola profil, aturan, dan akses perusahaan",
      subtitle: "Hanya berlaku untuk ruang kerja perusahaan ini",
      resetRules: "Setel ulang aturan",
      saveChanges: "Simpan perubahan",
    },
    profile: {
      title: "Profil perusahaan",
      subtitle: "Identitas dan detail perusahaan",
      labels: {
        companyName: "Nama perusahaan",
        industry: "Industri",
        address: "Alamat",
        primaryContact: "Kontak utama",
        timezone: "Zona waktu",
      },
      saveProfile: "Simpan profil",
      cancel: "Batal",
    },
    operations: {
      title: "Default operasional",
      subtitle: "Aturan yang berlaku di dalam perusahaan ini",
      labels: {
        defaultReportOwner: "Pemilik laporan default",
        escalationWindow: "Jendela eskalasi",
        dailyReminderTime: "Waktu pengingat harian",
        outcomeRequired: "Hasil wajib sebelum ditutup",
        evidenceRequired: "Bukti wajib saat penyelesaian",
      },
    },
    access: {
      title: "Akses admin & notifikasi",
      subtitle: "Siapa yang dapat mengoperasikan ruang kerja ini",
      roleLine: {
        owner: "Admin Perusahaan · Akses penuh",
        manager: "Manajer · akses laporan dan tim",
      },
      pill: { owner: "Pemilik", manager: "Manajer" },
      notifications: "Notifikasi",
      notificationItems: {
        highPriorityReport: "Laporan prioritas tinggi baru",
        overdueFollowUp: "Tindak lanjut terlambat",
        missingDailyReports: "Laporan harian belum masuk > {count} orang",
        manualRewardAdjustment: "Penyesuaian reward manual",
      },
      addManagerAccess: "Tambah akses manajer",
      resetRules: "Setel ulang aturan",
    },
    languageCard: {
      title: "Bahasa aplikasi",
      subtitle: "Global · berlaku di seluruh UI Admin",
      change: "Ubah bahasa",
    },
    language: {
      eyebrow: "BAHASA",
      title: "Bahasa aplikasi",
      intro:
        "Mengubahnya akan merender ulang seluruh antarmuka Admin. Konten yang ditulis pengguna tetap seperti aslinya.",
      behaviorGlobal:
        "Pengaturan global · disimpan ke profil Admin · dapat diubah lagi di Pengaturan.",
      behaviorNoSelector:
        "Tidak ada pemilih bahasa per layar atau di composer.",
      cancel: "Batal",
      apply: "Terapkan bahasa",
    },
    confirmSave: {
      title: "Simpan perubahan perusahaan?",
      subtitle: "Pembaruan ini hanya berlaku untuk {org}.",
      escalationWindow: "Jendela eskalasi",
      dailyReminder: "Pengingat harian",
      evidenceRequired: "Bukti wajib",
      cancel: "Batal",
      saveChanges: "Simpan perubahan",
    },
    confirmReset: {
      title: "Setel ulang aturan operasional?",
      subtitle:
        "Ini mengembalikan default perusahaan. Riwayat karyawan/laporan tidak dihapus.",
      alertTitle: "Perubahan konfigurasi yang merusak",
      alertBody:
        "Pengaturan pengingat dan eskalasi kustom saat ini akan hilang.",
      keepSettings: "Pertahankan pengaturan",
      resetRules: "Setel ulang aturan",
    },
    statesBoard: {
      eyebrow: "STATUS OPERASIONAL KONKRET",
      title:
        "Pengaturan Perusahaan — status belum disimpan, simpan, setel ulang, gagal",
      subtitle:
        "Perubahan konfigurasi menampilkan konsekuensinya sebelum diterapkan dan mempertahankan masukan pengguna saat gagal.",
    },
    unsaved: {
      pill: "MENGEDIT",
      title: "Pengaturan belum disimpan",
      subtitle: "Status belum disimpan terlihat jelas saat Admin mengedit",
      escalationWindow: "Jendela eskalasi",
      dailyReminder: "Pengingat harian",
      evidenceRequired: "Bukti wajib",
      noteTitle: "Perubahan belum disimpan",
      noteBody:
        "Meninggalkan halaman memunculkan pilihan Tetap / Buang perubahan. Kesalahan validasi tampil inline.",
      discard: "Buang",
      saveChanges: "Simpan perubahan",
      validationLabel: "Contoh validasi",
      validationBody: "Waktu pengingat harus memakai zona waktu perusahaan",
      footnote:
        "Status belum disimpan bertahan sampai berhasil disimpan atau dibuang secara eksplisit.",
    },
    confirmApply: {
      pill: "SIMPAN",
      title: "Konfirmasi dan terapkan perubahan",
      subtitle: "Rangkum konsekuensi berdampak besar",
      company: "Perusahaan",
      companyValue: "Hanya {org}",
      reports: "Laporan",
      reportsValue: "Titik eskalasi menjadi {hours} jam",
      dailyReports: "Laporan harian",
      dailyReportsValue: "Penjadwal pengingat berpindah ke {time}",
      resolution: "Penyelesaian",
      resolutionValue: "Kewajiban bukti tetap aktif",
      cancel: "Batal",
      confirmSave: "Konfirmasi simpan",
      failedTitle: "Gagal menyimpan",
      failedBody:
        "Pertahankan semua nilai yang diedit dan tampilkan coba lagi. Jangan pernah mengembalikan formulir secara diam-diam.",
      footnote:
        "Keberhasilan menampilkan stempel waktu penyimpanan dan membuat entri audit sebelum/sesudah.",
    },
    resetPanel: {
      pill: "SETEL ULANG ATURAN",
      title: "Setel ulang aturan operasional",
      subtitle:
        "Perubahan konfigurasi yang merusak dengan riwayat tetap tersimpan",
      resetTarget: "Target setel ulang",
      resetTargetValue: "Hanya default operasional",
      willChangeTitle: "Akan berubah",
      willChangeBody:
        "Pengaturan pengingat dan eskalasi kustom kembali ke default perusahaan.",
      willNotDeleteTitle: "TIDAK akan dihapus",
      willNotDeleteBody:
        "Karyawan, laporan, laporan harian, transaksi reward, dan Log Aktivitas tetap tidak berubah.",
      keepSettings: "Pertahankan pengaturan",
      resetRules: "Setel ulang aturan",
      afterReset: "Setelah setel ulang",
      afterResetValue:
        "Modul yang terdampak langsung memakai konfigurasi default",
      audit: "Audit",
      auditValue:
        "Pelaku setel ulang + snapshot konfigurasi sebelumnya dicatat",
      footnote:
        "Tidak ada kontrol Admin Perusahaan yang dapat mengubah tenant global, penagihan, atau feature flag.",
    },
    flow: {
      eyebrow: "ALUR MENYELURUH",
      title: "Pengaturan: edit → validasi → konfirmasi → terapkan",
      subtitle:
        "Pengaturan Perusahaan hanya memengaruhi ruang kerja tenant/perusahaan.",
      rule: "Tidak ada pengaturan Admin Perusahaan yang boleh mengubah peran global, tenant, penagihan, lisensi, atau feature flag platform.",
      steps: [
        {
          number: "01",
          title: "Edit pengaturan",
          subtitle: "Ubah profil perusahaan atau default",
          details: [
            { label: "Profil", body: "Nama, alamat, kontak, zona waktu" },
            {
              label: "Operasional",
              body: "Aturan eskalasi, pengingat, bukti",
            },
            { label: "Akses", body: "Hanya akses manajer" },
          ],
        },
        {
          number: "02",
          title: "Status belum disimpan",
          subtitle: "Perubahan belum disimpan ditampilkan jelas",
          details: [
            { label: "Indikator", body: "Perubahan belum disimpan" },
            { label: "Meninggalkan halaman", body: "Tanya buang atau tetap" },
            {
              label: "Validasi",
              body: "Nilai wajib/tidak valid tampil inline",
            },
          ],
        },
        {
          number: "03",
          title: "Konfirmasi perubahan berdampak besar",
          subtitle: "Hanya bila konsekuensinya material",
          details: [
            {
              label: "Contoh",
              body: "Setel ulang aturan / cabut akses manajer",
            },
            { label: "Ringkasan", body: "Apa yang akan berubah" },
            { label: "Tindakan", body: "Konfirmasi atau batal" },
          ],
        },
        {
          number: "04",
          title: "Simpan",
          subtitle: "Simpan konfigurasi perusahaan",
          details: [
            { label: "Berhasil", body: "Stempel waktu tersimpan" },
            {
              label: "Gagal",
              body: "Pertahankan nilai yang diisi + coba lagi",
            },
            { label: "Audit", body: "Catat pelaku + sebelum/sesudah" },
          ],
        },
        {
          number: "05",
          title: "Terapkan ke hilir",
          subtitle: "Modul terdampak memakai default baru",
          details: [
            { label: "Laporan harian", body: "Waktu pengingat" },
            { label: "Laporan", body: "Kewajiban bukti/hasil" },
            { label: "Tim", body: "Perubahan akses tercermin" },
          ],
        },
      ],
    },
  },

  ja: {
    intro: {
      title: "会社プロフィール・ルール・アクセスの管理",
      subtitle: "この会社ワークスペースにのみ適用されます",
      resetRules: "ルールをリセット",
      saveChanges: "変更を保存",
    },
    profile: {
      title: "会社プロフィール",
      subtitle: "会社の識別情報と詳細",
      labels: {
        companyName: "会社名",
        industry: "業種",
        address: "住所",
        primaryContact: "主要連絡先",
        timezone: "タイムゾーン",
      },
      saveProfile: "プロフィールを保存",
      cancel: "キャンセル",
    },
    operations: {
      title: "運用の既定値",
      subtitle: "この会社の中で適用されるルール",
      labels: {
        defaultReportOwner: "レポートの既定の担当者",
        escalationWindow: "エスカレーション期限",
        dailyReminderTime: "毎日のリマインダー時刻",
        outcomeRequired: "クローズ前に結果の入力が必須",
        evidenceRequired: "解決時に証跡が必須",
      },
    },
    access: {
      title: "管理者アクセスと通知",
      subtitle: "このワークスペースを操作できる人",
      roleLine: {
        owner: "会社管理者 · フルアクセス",
        manager: "マネージャー · レポートとチームへのアクセス",
      },
      pill: { owner: "オーナー", manager: "マネージャー" },
      notifications: "通知",
      notificationItems: {
        highPriorityReport: "新しい高優先度レポート",
        overdueFollowUp: "期限超過のフォローアップ",
        missingDailyReports: "日報未提出 > {count}人",
        manualRewardAdjustment: "報酬の手動調整",
      },
      addManagerAccess: "マネージャーアクセスを追加",
      resetRules: "ルールをリセット",
    },
    languageCard: {
      title: "アプリの言語",
      subtitle: "全体設定 · 管理UI全体に適用",
      change: "言語を変更",
    },
    language: {
      eyebrow: "言語",
      title: "アプリの言語",
      intro:
        "変更すると管理インターフェース全体が再描画されます。ユーザーが書いた内容はそのまま残ります。",
      behaviorGlobal:
        "全体設定 · 管理者プロフィールに保存 · 設定でいつでも変更できます。",
      behaviorNoSelector: "画面ごとや作成画面での言語選択はありません。",
      cancel: "キャンセル",
      apply: "言語を適用",
    },
    confirmSave: {
      title: "会社の変更を保存しますか？",
      subtitle: "これらの更新は {org} のみに適用されます。",
      escalationWindow: "エスカレーション期限",
      dailyReminder: "毎日のリマインダー",
      evidenceRequired: "証跡が必須",
      cancel: "キャンセル",
      saveChanges: "変更を保存",
    },
    confirmReset: {
      title: "運用ルールをリセットしますか？",
      subtitle:
        "会社の既定値に戻します。従業員・レポートの履歴は削除されません。",
      alertTitle: "破壊的な設定変更",
      alertBody:
        "現在のカスタムリマインダーとエスカレーション設定は失われます。",
      keepSettings: "設定を維持",
      resetRules: "ルールをリセット",
    },
    statesBoard: {
      eyebrow: "具体的な運用状態",
      title: "会社設定 — 未保存状態・保存・リセット・失敗",
      subtitle:
        "設定変更は適用前に影響を提示し、失敗時も入力内容を保持します。",
    },
    unsaved: {
      pill: "編集中",
      title: "未保存の設定",
      subtitle: "管理者の編集中は未保存状態を明示します",
      escalationWindow: "エスカレーション期限",
      dailyReminder: "毎日のリマインダー",
      evidenceRequired: "証跡が必須",
      noteTitle: "未保存の変更",
      noteBody:
        "画面を離れると「留まる／変更を破棄」の確認が表示されます。検証エラーはその場に表示されます。",
      discard: "破棄",
      saveChanges: "変更を保存",
      validationLabel: "検証の例",
      validationBody: "リマインダー時刻は会社のタイムゾーンを使用してください",
      footnote: "未保存状態は保存が成功するか明示的に破棄するまで続きます。",
    },
    confirmApply: {
      pill: "保存",
      title: "変更を確認して適用",
      subtitle: "影響の大きい結果を要約します",
      company: "会社",
      companyValue: "{org} のみ",
      reports: "レポート",
      reportsValue: "エスカレーションの基準が{hours}時間になります",
      dailyReports: "日報",
      dailyReportsValue: "リマインダーの実行時刻が{time}になります",
      resolution: "解決",
      resolutionValue: "証跡の必須設定は有効のままです",
      cancel: "キャンセル",
      confirmSave: "保存を確定",
      failedTitle: "保存に失敗しました",
      failedBody:
        "編集済みの値をすべて保持し、再試行を表示します。フォームを黙って元に戻すことはありません。",
      footnote: "成功時は保存時刻を表示し、変更前後の監査記録を作成します。",
    },
    resetPanel: {
      pill: "ルールのリセット",
      title: "運用ルールをリセット",
      subtitle: "履歴は保持したままの破壊的な設定変更",
      resetTarget: "リセット対象",
      resetTargetValue: "運用の既定値のみ",
      willChangeTitle: "変更されるもの",
      willChangeBody:
        "カスタムのリマインダーとエスカレーション設定が会社の既定値に戻ります。",
      willNotDeleteTitle: "削除されないもの",
      willNotDeleteBody:
        "従業員、レポート、日報、報酬取引、アクティビティログは変更されません。",
      keepSettings: "設定を維持",
      resetRules: "ルールをリセット",
      afterReset: "リセット後",
      afterResetValue: "影響を受けるモジュールは直ちに既定の設定を使用します",
      audit: "監査",
      auditValue: "リセット実行者と直前の設定スナップショットを記録します",
      footnote:
        "会社管理者のどの操作もグローバルなテナント・請求・機能フラグを変更できません。",
    },
    flow: {
      eyebrow: "エンドツーエンドの流れ",
      title: "設定：編集 → 検証 → 確認 → 適用",
      subtitle:
        "会社設定はそのテナント・会社のワークスペースにのみ影響します。",
      rule: "会社管理者の設定はグローバルなロール・テナント・請求・ライセンス・プラットフォームの機能フラグを変更できません。",
      steps: [
        {
          number: "01",
          title: "設定を編集",
          subtitle: "会社プロフィールや既定値を変更",
          details: [
            {
              label: "プロフィール",
              body: "名称・住所・連絡先・タイムゾーン",
            },
            {
              label: "運用",
              body: "エスカレーション・リマインダー・証跡のルール",
            },
            { label: "アクセス", body: "マネージャーアクセスのみ" },
          ],
        },
        {
          number: "02",
          title: "未保存状態",
          subtitle: "未保存の変更を明示します",
          details: [
            { label: "インジケーター", body: "未保存の変更" },
            { label: "画面を離れる", body: "破棄するか留まるかを確認" },
            { label: "検証", body: "必須・不正な値をその場に表示" },
          ],
        },
        {
          number: "03",
          title: "影響の大きい変更を確認",
          subtitle: "影響が重大な場合のみ",
          details: [
            {
              label: "例",
              body: "ルールのリセット／マネージャーアクセスの削除",
            },
            { label: "サマリー", body: "何が変わるか" },
            { label: "アクション", body: "確定またはキャンセル" },
          ],
        },
        {
          number: "04",
          title: "保存",
          subtitle: "会社の設定を永続化",
          details: [
            { label: "成功", body: "保存時刻" },
            { label: "失敗", body: "入力値を保持して再試行" },
            { label: "監査", body: "実行者と変更前後を記録" },
          ],
        },
        {
          number: "05",
          title: "下流に適用",
          subtitle: "影響を受けるモジュールが新しい既定値を使用",
          details: [
            { label: "日報", body: "リマインダー時刻" },
            { label: "レポート", body: "証跡・結果の必須要件" },
            { label: "チーム", body: "アクセス変更が反映" },
          ],
        },
      ],
    },
  },
});
