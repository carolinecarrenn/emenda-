import { defineSectionCopy } from "@/i18n/copy";

/**
 * UI copy for the CORE caregiver Daily Report loop — the hub's today panel and
 * history, the report form, the review step and the read-only detail
 * (WD-54I / WD-55H / WD-55B / WD-56 and their W-54/55/56 mobile twins).
 *
 * This flow was built before the i18n layer existed and carried hardcoded
 * English; the strings below are that same Figma-verbatim EN text, now with
 * ID/JA so the global language behaviour covers the caregiver loop too.
 *
 * Kept separate from reports.copy.ts (which owns the state variants and the
 * template previews) so each file stays editable on its own.
 *
 * Enum-like DATA values — report status flags, resident conditions, quick
 * notes — are NOT here: they localize through i18n/terms.ts `localizeTerm`,
 * which leaves the stored value English and changes only its display.
 */
export interface CaregiverCopy {
  /** WD-54I hub. */
  hub: {
    /** WD-54I page headline over the today card. */
    headline: string;
    todayNotSubmitted: string;
    todaySubmitted: string;
    todayVerified: string;
    todayBody: string;
    newDailyReport: string;
    recentWorkHistory: string;
    /** "25 Aug · Caregiver report" */
    historyTitle: (date: string) => string;
    verifiedBySupervisor: string;
    submittedAt: (time: string) => string;
    statusSubmitted: string;
    statusVerified: string;
    assignedAutomatically: string;
    templateReady: (employer: string) => string;
  };
  /** WD-55H form. */
  form: {
    crumb: string;
    title: string;
    templateTitle: (employer: string) => string;
    templateBody: string;
    resident: string;
    meal: string;
    careNotes: string;
    careNotesPlaceholder: string;
    residentCondition: string;
    reportStatus: string;
    quickNotes: string;
    employerVisibility: string;
    employerVisibilityBody: string;
    reviewReport: string;
  };
  /** WD-55B review. */
  review: {
    crumb: string;
    title: string;
    readyToSubmit: string;
    readyToSubmitBody: string;
    reportStatusLine: string;
    /** WD-55B status note — Normal vs a flagged report. */
    flagNoteNormal: string;
    flagNoteFlagged: string;
    employerVisibilityBody: string;
    editReport: string;
    submitReport: string;
    /** Sonner toast shown after a successful submit. */
    submittedToast: string;
  };
  /** WD-56 read-only detail. */
  detail: {
    crumb: string;
    title: string;
    notFound: string;
    readOnly: string;
    submitted: string;
    verified: string;
    submittedLine: (when: string) => string;
    resident: string;
    meal: string;
    careNotes: string;
    followUpIssue: string;
    quickNotes: string;
    residentCondition: string;
    /** WD-56 read-only notice body. */
    readOnlyBody: string;
    portableWorkHistory: string;
    portableBody: string;
  };
}

export const CAREGIVER_COPY = defineSectionCopy<CaregiverCopy>({
  en: {
    hub: {
      headline:
        "Submit today's Daily Report and review your portable work history.",
      todayNotSubmitted: "Today · Caregiver report not submitted",
      todaySubmitted: "Today · Report submitted",
      todayVerified: "Today · Report verified",
      todayBody: "Submit today's report when your work summary is ready.",
      newDailyReport: "New Daily Report",
      recentWorkHistory: "Recent work history",
      historyTitle: (date) => `${date} · Caregiver report`,
      verifiedBySupervisor: "Verified · Supervisor",
      submittedAt: (time) => `Submitted · ${time}`,
      statusSubmitted: "Submitted",
      statusVerified: "Verified",
      assignedAutomatically:
        "Assigned automatically from your active employer connection.",
      templateReady: (employer) =>
        `${employer} · Your Caregiver report template is ready for today's shift.`,
    },
    form: {
      crumb: "Reports",
      title: "New Daily Report",
      templateTitle: (employer) => `Caregiver template · ${employer}`,
      templateBody: "Care fields are provided automatically by your employer.",
      resident: "Resident",
      meal: "Meal",
      careNotes: "Care notes",
      careNotesPlaceholder: "Describe the resident's condition and care given.",
      residentCondition: "Resident condition",
      reportStatus: "Report status",
      quickNotes: "Quick notes",
      employerVisibility: "Employer visibility",
      employerVisibilityBody:
        "This Daily Report is shared under your active work-access scope. Private worker-only information remains private.",
      reviewReport: "Review report",
    },
    review: {
      crumb: "Reports",
      title: "Review Daily Report",
      readyToSubmit: "Ready to submit",
      readyToSubmitBody:
        "After submission, the report becomes part of your portable work history.",
      reportStatusLine: "Report status",
      flagNoteNormal: "No attention flag will be added to this report.",
      flagNoteFlagged: "This report will be flagged for manager attention.",
      employerVisibilityBody:
        "Shared with the active employer scope. Private worker-only data stays private.",
      editReport: "Edit report",
      submitReport: "Submit Daily Report",
      submittedToast: "Daily Report submitted",
    },
    detail: {
      crumb: "Reports",
      title: "Daily Report",
      notFound: "Report not found",
      readOnly: "Read-only report",
      submitted: "Submitted",
      verified: "Verified",
      submittedLine: (when) => `Submitted · ${when}`,
      resident: "Resident",
      meal: "Meal",
      careNotes: "Care notes",
      followUpIssue: "Follow-up / issue",
      quickNotes: "Quick notes",
      residentCondition: "Resident condition",
      readOnlyBody:
        "Submitted reports can no longer be edited. Verification may update the status, but your submitted content remains unchanged.",
      portableWorkHistory: "Portable work history",
      portableBody:
        "This report remains in your worker-owned work history across employer connections.",
    },
  },
  id: {
    hub: {
      headline:
        "Kirim Laporan Harian hari ini dan tinjau riwayat kerja portabel Anda.",
      todayNotSubmitted: "Hari ini · Laporan caregiver belum dikirim",
      todaySubmitted: "Hari ini · Laporan terkirim",
      todayVerified: "Hari ini · Laporan terverifikasi",
      todayBody: "Kirim laporan hari ini saat ringkasan kerja Anda siap.",
      newDailyReport: "Laporan Harian Baru",
      recentWorkHistory: "Riwayat kerja terbaru",
      historyTitle: (date) => `${date} · Laporan caregiver`,
      verifiedBySupervisor: "Terverifikasi · Supervisor",
      submittedAt: (time) => `Terkirim · ${time}`,
      statusSubmitted: "Terkirim",
      statusVerified: "Terverifikasi",
      assignedAutomatically:
        "Ditetapkan otomatis dari koneksi pemberi kerja aktif Anda.",
      templateReady: (employer) =>
        `${employer} · Template laporan Caregiver Anda siap untuk shift hari ini.`,
    },
    form: {
      crumb: "Laporan",
      title: "Laporan Harian Baru",
      templateTitle: (employer) => `Template caregiver · ${employer}`,
      templateBody:
        "Kolom perawatan disediakan otomatis oleh pemberi kerja Anda.",
      resident: "Penghuni",
      meal: "Makan",
      careNotes: "Catatan perawatan",
      careNotesPlaceholder:
        "Jelaskan kondisi penghuni dan perawatan yang diberikan.",
      residentCondition: "Kondisi penghuni",
      reportStatus: "Status laporan",
      quickNotes: "Catatan cepat",
      employerVisibility: "Visibilitas pemberi kerja",
      employerVisibilityBody:
        "Laporan Harian ini dibagikan sesuai lingkup akses kerja aktif Anda. Informasi khusus pekerja tetap privat.",
      reviewReport: "Tinjau laporan",
    },
    review: {
      crumb: "Laporan",
      title: "Tinjau Laporan Harian",
      readyToSubmit: "Siap dikirim",
      readyToSubmitBody:
        "Setelah dikirim, laporan menjadi bagian dari riwayat kerja portabel Anda.",
      reportStatusLine: "Status laporan",
      flagNoteNormal:
        "Tidak ada tanda perhatian yang ditambahkan ke laporan ini.",
      flagNoteFlagged: "Laporan ini akan ditandai untuk perhatian manajer.",
      employerVisibilityBody:
        "Dibagikan sesuai lingkup pemberi kerja aktif. Data khusus pekerja tetap privat.",
      editReport: "Ubah laporan",
      submitReport: "Kirim Laporan Harian",
      submittedToast: "Laporan Harian terkirim",
    },
    detail: {
      crumb: "Laporan",
      title: "Laporan Harian",
      notFound: "Laporan tidak ditemukan",
      readOnly: "Laporan hanya-baca",
      submitted: "Terkirim",
      verified: "Terverifikasi",
      submittedLine: (when) => `Terkirim · ${when}`,
      resident: "Penghuni",
      meal: "Makan",
      careNotes: "Catatan perawatan",
      followUpIssue: "Tindak lanjut / masalah",
      quickNotes: "Catatan cepat",
      residentCondition: "Kondisi penghuni",
      readOnlyBody:
        "Laporan yang sudah dikirim tidak dapat diubah lagi. Verifikasi dapat memperbarui statusnya, tetapi isi yang Anda kirim tetap sama.",
      portableWorkHistory: "Riwayat kerja portabel",
      portableBody:
        "Laporan ini tetap berada dalam riwayat kerja milik pekerja Anda di seluruh koneksi pemberi kerja.",
    },
  },
  ja: {
    hub: {
      headline: "本日の日報を提出し、持ち運べる業務履歴を確認しましょう。",
      todayNotSubmitted: "本日 · 介護レポート未提出",
      todaySubmitted: "本日 · レポート提出済み",
      todayVerified: "本日 · レポート確認済み",
      todayBody: "業務のまとめができたら、本日のレポートを提出してください。",
      newDailyReport: "新しい日報",
      recentWorkHistory: "最近の業務履歴",
      historyTitle: (date) => `${date} · 介護レポート`,
      verifiedBySupervisor: "確認済み · 管理者",
      submittedAt: (time) => `提出済み · ${time}`,
      statusSubmitted: "提出済み",
      statusVerified: "確認済み",
      assignedAutomatically:
        "有効な雇用主との連携から自動的に割り当てられます。",
      templateReady: (employer) =>
        `${employer} · 本日のシフト用の介護レポートテンプレートが準備できています。`,
    },
    form: {
      crumb: "レポート",
      title: "新しい日報",
      templateTitle: (employer) => `介護テンプレート · ${employer}`,
      templateBody: "介護項目は雇用主から自動的に提供されます。",
      resident: "入居者",
      meal: "食事",
      careNotes: "介護メモ",
      careNotesPlaceholder: "入居者の状態と行った介護を記入してください。",
      residentCondition: "入居者の状態",
      reportStatus: "レポートの状態",
      quickNotes: "クイックメモ",
      employerVisibility: "雇用主への公開範囲",
      employerVisibilityBody:
        "この日報は、有効な業務アクセス範囲のもとで共有されます。労働者本人のみの情報は非公開のままです。",
      reviewReport: "レポートを確認",
    },
    review: {
      crumb: "レポート",
      title: "日報の確認",
      readyToSubmit: "提出の準備ができました",
      readyToSubmitBody:
        "提出後、このレポートは持ち運べる業務履歴の一部になります。",
      reportStatusLine: "レポートの状態",
      flagNoteNormal: "このレポートに注意フラグは追加されません。",
      flagNoteFlagged: "このレポートは管理者の確認対象としてフラグが付きます。",
      employerVisibilityBody:
        "有効な雇用主の範囲で共有されます。労働者本人のみのデータは非公開のままです。",
      editReport: "レポートを編集",
      submitReport: "日報を提出",
      submittedToast: "日報を提出しました",
    },
    detail: {
      crumb: "レポート",
      title: "日報",
      notFound: "レポートが見つかりません",
      readOnly: "閲覧専用レポート",
      submitted: "提出済み",
      verified: "確認済み",
      submittedLine: (when) => `提出済み · ${when}`,
      resident: "入居者",
      meal: "食事",
      careNotes: "介護メモ",
      followUpIssue: "フォローアップ / 課題",
      quickNotes: "クイックメモ",
      residentCondition: "入居者の状態",
      readOnlyBody:
        "提出済みのレポートは編集できません。確認によって状態が更新されることはありますが、提出した内容はそのまま保持されます。",
      portableWorkHistory: "持ち運べる業務履歴",
      portableBody:
        "このレポートは、雇用主との連携をまたいで労働者本人が所有する業務履歴に残ります。",
    },
  },
});
