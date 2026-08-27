import { defineSectionCopy } from "@/i18n/copy";

/**
 * UI copy for the Reports remaining states (WD-54/55/56 state variants and
 * template previews). EN strings are the Figma mock text verbatim; ID/JA are
 * faithful translations kept consistent with i18n/common.ts vocabulary
 * (Laporan Harian / 日報, employer / 雇用主). Mock data (employer names,
 * template field values, dates, times) stays raw in reportsStatesMock.ts.
 */

/** Replaces "{key}" placeholders in a copy template. */
export function fillCopy(
  template: string,
  vars: Record<string, string>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? vars[key] : match,
  );
}

export interface ReportsStatesCopy {
  newDailyReport: string;
  /** W-54 / W-54H headless hub action. */
  connectEmployer: string;
  /** Mobile hub micro-labels above a record list (rendered uppercase). */
  hubLabels: {
    workHistory: string;
    cachedWorkHistory: string;
  };
  /** Report status / safety status / resident condition chip labels. */
  options: {
    normal: string;
    needsAttention: string;
    urgent: string;
    stable: string;
  };
  headless: {
    title: string;
    subtitle: string;
    cardTitle: string;
    cardBody: string;
    portableTitle: string;
    portableLine1: string;
    portableLine2: string;
  };
  loading: {
    title: string;
    subtitle: string;
  };
  /** W-54H — headless behind the offline banner. */
  headlessOffline: {
    subtitle: string;
    bannerTitle: string;
    bannerBody: string;
  };
  empty: {
    title: string;
    subtitle: string;
    emptyTitle: string;
    emptyBody: string;
    noteTitle: string;
    noteLine1: string;
    noteLine2: string;
  };
  offline: {
    title: string;
    subtitle: string;
    banner: string;
    todayTitle: string;
    todayBody: string;
    cachedNote: string;
    /** W-54D record meta line: "Cached · Submitted · 17:42". */
    cachedMeta: (line: string) => string;
  };
  accessEnded: {
    title: string;
    subtitle: string;
    banner: string;
    /** W-54E mobile notice body (972:504). */
    noticeBody: string;
    retainedLabel: string;
    todayTitle: string;
    todayBody: string;
  };
  generalForm: {
    title: string;
    templateTitle: string;
    templateBody: string;
    reportStatusLabel: string;
    workSummaryLabel: string;
    followUpLabel: string;
    visibilityLabel: string;
    visibilityBody: string;
    reviewReport: string;
  };
  validationError: {
    fieldError: string;
    helper: string;
  };
  submitting: {
    banner: string;
    /** W-55C mobile screen (node 973:207) — H1 and the report-context card. */
    title: string;
    contextTitle: string;
    contextBody: string;
    noteTitle: string;
    noteLine1: string;
    noteLine2: string;
    noteLine3: string;
  };
  submitFailed: {
    banner: string;
    /** W-55E mobile card title (node 973:316). */
    title: string;
    noteTitle: string;
    noteBody: string;
  };
  offlineDraft: {
    banner: string;
    noteTitle: string;
    noteBody: string;
  };
  unsaved: {
    title: string;
    body: string;
    keepEditing: string;
    discard: string;
  };
  submitted: {
    title: string;
    subtitle: string;
    cardTitle: string;
    cardBody: string;
    /** W-55D mobile card (node 973:266) — shorter title/body pair. */
    cardTitleShort: string;
    cardBodyShort: string;
    backToReports: string;
    viewReport: string;
  };
  review: {
    title: string;
    statusDescription: string;
    statusFlagged: string;
    readyTitle: string;
    readyBody: string;
    visibilityBody: string;
    submit: string;
    /** W-55Q — submission waits for the connection to come back. */
    submitOffline: string;
    /** W-55Q amber note under the submit pair. */
    offlineNote: string;
    editReport: string;
  };
  templates: {
    warehouseTitle: string;
    warehouseBody: string;
    foodTitle: string;
    foodBody: string;
    workAreaLabel: string;
    safetyStatusLabel: string;
    quantityLabel: string;
    operationalNotesLabel: string;
    quickNotesLabel: string;
    stationAreaLabel: string;
    serviceConditionLabel: string;
    stockStatusLabel: string;
    handoverNotesLabel: string;
    residentLabel: string;
    residentConditionLabel: string;
    mealLabel: string;
    careNotesLabel: string;
    caregiverTitle: string;
    caregiverBody: string;
  };
  /** Display name of each employer-assigned template (W-54I/J/K, W-55H/J/L). */
  templateNames: {
    general: string;
    caregiver: string;
    warehouse: string;
    food: string;
  };
  /** W-54J / W-54K hub variants: today card + assignment strip. */
  templateHub: {
    todayTitle: string;
    todayBody: string;
    assignedNote: string;
  };
  /** Hub entry points into each employer-assigned template flow. */
  templateExamples: {
    label: string;
    body: string;
    reportOf: string;
    current: string;
  };
  /** W-55B / 55I / 55K / 55M review step of a template report. */
  templateReview: {
    appliedNote: string;
    readyLabel: string;
    readyBody: string;
  };
  detail: {
    title: string;
    readOnlyLabel: string;
    readOnlyBody: string;
    workSummaryLabel: string;
    followUpLabel: string;
    portableTitle: string;
    portableBody: string;
    offlineBanner: string;
    offlineNote: string;
    /** W-56B mobile top card (node 975:158 twin) — title + body. */
    cachedTitle: string;
    cachedBody: string;
    /** W-56C / 56E mobile top card. */
    cachedVerifiedTitle: string;
    cachedVerifiedBody: string;
  };
}

export const REPORTS_STATES_COPY = defineSectionCopy<ReportsStatesCopy>({
  en: {
    newDailyReport: "New Daily Report",
    connectEmployer: "Connect employer",
    hubLabels: {
      workHistory: "Work history",
      cachedWorkHistory: "Cached work history",
    },
    options: {
      normal: "Normal",
      needsAttention: "Needs attention",
      urgent: "Urgent",
      stable: "Stable",
    },
    headless: {
      title:
        "Daily Reports are available when an employer connection is active.",
      subtitle: "No active employer connection",
      cardTitle: "Daily Reports become available with an employer connection.",
      cardBody:
        "Your existing portable work history stays with you. Connect an employer when you are ready to use work reporting.",
      portableTitle: "Your history stays portable",
      portableLine1:
        "Connect an employer before submitting Daily Reports. Your worker-owned history remains with you across employers.",
      portableLine2:
        "Previously submitted or verified work records remain worker-owned even after employer access ends.",
    },
    loading: {
      title:
        "Submit today's Daily Report and review your portable work history.",
      subtitle: "Loading your Daily Reports and work history…",
    },
    headlessOffline: {
      subtitle:
        "You’re offline. Employer connection is required before Daily Reports can be submitted.",
      bannerTitle: "You’re offline",
      bannerBody: "Reconnect before starting an employer connection.",
    },
    empty: {
      title: "{employer} · Your Daily Report history starts here.",
      subtitle: "Today · No report submitted yet",
      emptyTitle: "No reports yet",
      emptyBody:
        "Submit your first Daily Report when your work summary is ready.",
      noteTitle: "No work history yet",
      noteLine1: "Create your first Daily Report for this employer connection.",
      noteLine2:
        "Submitted and verified Daily Reports will appear here in chronological order.",
    },
    offline: {
      title: "Cached work history remains available while you reconnect.",
      subtitle: "You’re offline",
      banner: "You’re offline",
      todayTitle: "Today · No report submitted yet",
      todayBody: "Submit today’s report when your work summary is ready.",
      cachedNote:
        "You can review cached reports and keep an existing draft. New submissions wait until you reconnect.",
      cachedMeta: (line) => `Cached · ${line}`,
    },
    accessEnded: {
      title:
        "Employer access has ended. Your worker-owned work history remains available.",
      subtitle: "{employer} · Work access ended",
      banner:
        "Employer access ended. Your submitted portable work history remains available.",
      noticeBody:
        "You cannot submit new Daily Reports for this employer. Existing submitted and verified records remain in your history.",
      retainedLabel: "Retained work history",
      todayTitle: "Today · No report submitted yet",
      todayBody: "{employer} · Work access ended",
    },
    generalForm: {
      title: "New Daily Report",
      templateTitle: "General work report",
      templateBody:
        "This report template is provided automatically by {employer}. No template selection is required.",
      reportStatusLabel: "Report status",
      workSummaryLabel: "Work summary · Required",
      followUpLabel: "Follow-up / issue · Optional",
      visibilityLabel: "Employer visibility",
      visibilityBody:
        "This Daily Report is shared under your active work-access scope. Private worker-only information remains private.",
      reviewReport: "Review report",
    },
    validationError: {
      fieldError: "Enter your work summary.",
      helper: "Add a work summary before continuing.",
    },
    submitting: {
      banner: "Submitting your Daily Report…",
      title: "Submitting Daily Report",
      contextTitle: "Current report context",
      contextBody:
        "{date} · Current employer connection · Employer-provided template",
      noteTitle: "Submitting…",
      noteLine1:
        "Your employer-provided report template is being submitted securely.",
      noteLine2:
        "The report content and all template-specific fields are preserved until submission completes.",
      noteLine3:
        "Current report context · {date} · Current employer connection · Employer-provided template",
    },
    submitFailed: {
      banner: "Couldn’t submit this Daily Report. Your draft is still here.",
      title: "Couldn’t submit Daily Report",
      noteTitle: "Try again",
      noteBody:
        "Your draft is still preserved. Retry will not create a duplicate submission.",
    },
    offlineDraft: {
      banner:
        "You are offline. Your draft stays here and can be reviewed. Submission waits until you reconnect.",
      noteTitle: "You’re offline",
      noteBody: "Your draft stays on this device. Continue after reconnecting.",
    },
    unsaved: {
      title: "Discard unsaved changes?",
      body: "Changes made to this report will be lost if you leave now.",
      keepEditing: "Keep editing",
      discard: "Discard changes",
    },
    submitted: {
      title: "Daily Report submitted",
      subtitle: "Your report is now part of your portable work history.",
      cardTitle: "Daily Report submitted",
      cardBody:
        "Your report is now part of your portable work history and is shared under the active employer scope.",
      cardTitleShort: "Submitted",
      cardBodyShort:
        "Daily Report submitted. Your work history remains portable across employers.",
      backToReports: "Back to Reports",
      viewReport: "View submitted report",
    },
    review: {
      title: "Review Daily Report",
      statusDescription: "No attention flag will be added to this report.",
      statusFlagged: "This report will be flagged for manager attention.",
      readyTitle: "Ready to submit",
      readyBody:
        "After submission, the report becomes part of your portable work history.",
      visibilityBody:
        "Shared with the active employer scope. Private worker-only data stays private.",
      submit: "Submit Daily Report",
      submitOffline: "Submit after reconnecting",
      offlineNote:
        "Review is available, but submission is disabled until you reconnect. Your report content stays preserved.",
      editReport: "Edit report",
    },
    templates: {
      warehouseTitle: "Warehouse template · {employer}",
      warehouseBody:
        "Warehouse fields are provided automatically by your employer.",
      foodTitle: "Food service template · {employer}",
      foodBody:
        "Food service fields are provided automatically by your employer.",
      workAreaLabel: "Work area / station",
      safetyStatusLabel: "Safety status",
      quantityLabel: "Quantity handled",
      operationalNotesLabel: "Work / operational notes",
      quickNotesLabel: "Quick notes",
      stationAreaLabel: "Station / area",
      serviceConditionLabel: "Service condition",
      stockStatusLabel: "Stock status",
      handoverNotesLabel: "Handover / operational notes",
      residentLabel: "Resident",
      residentConditionLabel: "Resident condition",
      mealLabel: "Meal",
      careNotesLabel: "Care notes",
      caregiverTitle: "Caregiver template · {employer}",
      caregiverBody: "Care fields are provided automatically by your employer.",
    },
    templateNames: {
      general: "General",
      caregiver: "Caregiver",
      warehouse: "Warehouse",
      food: "Food service",
    },
    templateHub: {
      todayTitle: "Today · {template} report not submitted",
      todayBody:
        "{employer} · Your {template} report template is ready for today’s shift.",
      assignedNote:
        "Assigned automatically from your active employer connection.",
    },
    templateExamples: {
      label: "Employer-assigned templates",
      body: "Your employer assigns the report template for your work type. Open a template to see its Daily Report flow.",
      reportOf: "{template} report",
      current: "Assigned to you",
    },
    templateReview: {
      appliedNote:
        "Applied automatically from your active employer connection.",
      readyLabel: "Ready to submit · Employer visibility",
      readyBody:
        "This report will be shared with {employer} under your active work-access scope. Private worker-only data stays private.",
    },
    detail: {
      title: "Daily Report",
      readOnlyLabel: "Read-only report",
      readOnlyBody:
        "Submitted reports can no longer be edited. Verification may update the status, but your submitted content remains unchanged.",
      workSummaryLabel: "Work summary",
      followUpLabel: "Follow-up / issue",
      portableTitle: "Portable work history",
      portableBody:
        "This report remains in your worker-owned work history across employer connections.",
      offlineBanner: "You’re offline",
      offlineNote:
        "Cached report content stays available offline. Status updates appear after you reconnect.",
      cachedTitle: "Cached report",
      cachedBody:
        "This submitted report is available offline. Verification updates sync after reconnecting.",
      cachedVerifiedTitle: "Cached verified report",
      cachedVerifiedBody: "This verified record remains available offline.",
    },
  },
  id: {
    newDailyReport: "Laporan Harian Baru",
    connectEmployer: "Hubungkan employer",
    hubLabels: {
      workHistory: "Riwayat kerja",
      cachedWorkHistory: "Riwayat kerja tersimpan",
    },
    options: {
      normal: "Normal",
      needsAttention: "Perlu perhatian",
      urgent: "Mendesak",
      stable: "Stabil",
    },
    headless: {
      title: "Laporan Harian tersedia saat koneksi employer aktif.",
      subtitle: "Tidak ada koneksi employer aktif",
      cardTitle: "Laporan Harian tersedia setelah ada koneksi employer.",
      cardBody:
        "Riwayat kerja portabel Anda tetap milik Anda. Hubungkan employer saat Anda siap menggunakan pelaporan kerja.",
      portableTitle: "Riwayat Anda tetap portabel",
      portableLine1:
        "Hubungkan employer sebelum mengirim Laporan Harian. Riwayat milik pekerja tetap bersama Anda lintas employer.",
      portableLine2:
        "Catatan kerja yang sudah terkirim atau terverifikasi tetap milik pekerja meski akses employer berakhir.",
    },
    loading: {
      title:
        "Kirim Laporan Harian hari ini dan tinjau riwayat kerja portabel Anda.",
      subtitle: "Memuat Laporan Harian dan riwayat kerja Anda…",
    },
    headlessOffline: {
      subtitle:
        "Anda sedang offline. Koneksi employer diperlukan sebelum Laporan Harian dapat dikirim.",
      bannerTitle: "Anda sedang offline",
      bannerBody: "Hubungkan kembali sebelum memulai koneksi employer.",
    },
    empty: {
      title: "{employer} · Riwayat Laporan Harian Anda dimulai di sini.",
      subtitle: "Hari ini · Belum ada laporan terkirim",
      emptyTitle: "Belum ada laporan",
      emptyBody: "Kirim Laporan Harian pertama Anda saat ringkasan kerja siap.",
      noteTitle: "Belum ada riwayat kerja",
      noteLine1: "Buat Laporan Harian pertama untuk koneksi employer ini.",
      noteLine2:
        "Laporan Harian yang terkirim dan terverifikasi akan tampil di sini secara kronologis.",
    },
    offline: {
      title:
        "Riwayat kerja tersimpan tetap tersedia selama Anda menghubungkan ulang.",
      subtitle: "Anda sedang offline",
      banner: "Anda sedang offline",
      todayTitle: "Hari ini · Belum ada laporan terkirim",
      todayBody: "Kirim laporan hari ini saat ringkasan kerja Anda siap.",
      cachedNote:
        "Anda dapat meninjau laporan tersimpan dan menyimpan draf yang ada. Pengiriman baru menunggu sampai Anda terhubung kembali.",
      cachedMeta: (line) => `Tersimpan · ${line}`,
    },
    accessEnded: {
      title:
        "Akses employer telah berakhir. Riwayat kerja milik Anda tetap tersedia.",
      subtitle: "{employer} · Akses kerja berakhir",
      banner:
        "Akses employer berakhir. Riwayat kerja portabel yang sudah terkirim tetap tersedia.",
      noticeBody:
        "Anda tidak dapat mengirim Laporan Harian baru untuk employer ini. Catatan yang sudah terkirim dan terverifikasi tetap ada di riwayat Anda.",
      retainedLabel: "Riwayat kerja tersimpan",
      todayTitle: "Hari ini · Belum ada laporan terkirim",
      todayBody: "{employer} · Akses kerja berakhir",
    },
    generalForm: {
      title: "Laporan Harian Baru",
      templateTitle: "Laporan kerja umum",
      templateBody:
        "Templat laporan ini disediakan otomatis oleh {employer}. Tidak perlu memilih templat.",
      reportStatusLabel: "Status laporan",
      workSummaryLabel: "Ringkasan kerja · Wajib",
      followUpLabel: "Tindak lanjut / masalah · Opsional",
      visibilityLabel: "Visibilitas employer",
      visibilityBody:
        "Laporan Harian ini dibagikan sesuai cakupan akses kerja aktif Anda. Informasi pribadi milik pekerja tetap privat.",
      reviewReport: "Tinjau laporan",
    },
    validationError: {
      fieldError: "Isi ringkasan kerja Anda.",
      helper: "Tambahkan ringkasan kerja sebelum melanjutkan.",
    },
    submitting: {
      banner: "Mengirim Laporan Harian Anda…",
      title: "Mengirim Laporan Harian",
      contextTitle: "Konteks laporan saat ini",
      contextBody: "{date} · Koneksi employer saat ini · Templat dari employer",
      noteTitle: "Mengirim…",
      noteLine1:
        "Templat laporan dari employer Anda sedang dikirim dengan aman.",
      noteLine2:
        "Isi laporan dan semua bidang templat tetap tersimpan sampai pengiriman selesai.",
      noteLine3:
        "Konteks laporan saat ini · {date} · Koneksi employer saat ini · Templat dari employer",
    },
    submitFailed: {
      banner:
        "Tidak dapat mengirim Laporan Harian ini. Draf Anda masih ada di sini.",
      title: "Tidak dapat mengirim Laporan Harian",
      noteTitle: "Coba lagi",
      noteBody:
        "Draf Anda tetap tersimpan. Mencoba lagi tidak akan membuat pengiriman ganda.",
    },
    offlineDraft: {
      banner:
        "Anda offline. Draf Anda tetap di sini dan dapat ditinjau. Pengiriman menunggu sampai Anda terhubung kembali.",
      noteTitle: "Anda sedang offline",
      noteBody:
        "Draf Anda tetap di perangkat ini. Lanjutkan setelah terhubung kembali.",
    },
    unsaved: {
      title: "Buang perubahan yang belum disimpan?",
      body: "Perubahan pada laporan ini akan hilang jika Anda keluar sekarang.",
      keepEditing: "Tetap mengedit",
      discard: "Buang perubahan",
    },
    submitted: {
      title: "Laporan Harian terkirim",
      subtitle:
        "Laporan Anda kini menjadi bagian dari riwayat kerja portabel Anda.",
      cardTitle: "Laporan Harian terkirim",
      cardBody:
        "Laporan Anda kini menjadi bagian dari riwayat kerja portabel dan dibagikan sesuai cakupan employer aktif.",
      cardTitleShort: "Terkirim",
      cardBodyShort:
        "Laporan Harian terkirim. Riwayat kerja Anda tetap portabel lintas employer.",
      backToReports: "Kembali ke Laporan",
      viewReport: "Lihat laporan terkirim",
    },
    review: {
      title: "Tinjau Laporan Harian",
      statusDescription:
        "Tidak ada penanda perhatian yang akan ditambahkan ke laporan ini.",
      statusFlagged: "Laporan ini akan ditandai untuk perhatian manajer.",
      readyTitle: "Siap dikirim",
      readyBody:
        "Setelah pengiriman, laporan menjadi bagian dari riwayat kerja portabel Anda.",
      visibilityBody:
        "Dibagikan dengan cakupan employer aktif. Data pribadi milik pekerja tetap privat.",
      submit: "Kirim Laporan Harian",
      submitOffline: "Kirim setelah tersambung kembali",
      offlineNote:
        "Peninjauan tersedia, tetapi pengiriman dinonaktifkan sampai Anda tersambung kembali. Isi laporan Anda tetap tersimpan.",
      editReport: "Ubah laporan",
    },
    templates: {
      warehouseTitle: "Templat gudang · {employer}",
      warehouseBody: "Bidang gudang disediakan otomatis oleh employer Anda.",
      foodTitle: "Templat layanan makanan · {employer}",
      foodBody:
        "Bidang layanan makanan disediakan otomatis oleh employer Anda.",
      workAreaLabel: "Area kerja / stasiun",
      safetyStatusLabel: "Status keselamatan",
      quantityLabel: "Jumlah ditangani",
      operationalNotesLabel: "Catatan kerja / operasional",
      quickNotesLabel: "Catatan cepat",
      stationAreaLabel: "Stasiun / area",
      serviceConditionLabel: "Kondisi layanan",
      stockStatusLabel: "Status stok",
      handoverNotesLabel: "Catatan serah terima / operasional",
      residentLabel: "Penghuni",
      residentConditionLabel: "Kondisi penghuni",
      mealLabel: "Makan",
      careNotesLabel: "Catatan perawatan",
      caregiverTitle: "Templat perawat · {employer}",
      caregiverBody: "Bidang perawatan disediakan otomatis oleh employer Anda.",
    },
    templateNames: {
      general: "Umum",
      caregiver: "Perawat",
      warehouse: "Gudang",
      food: "Layanan makanan",
    },
    templateHub: {
      todayTitle: "Hari ini · Laporan {template} belum terkirim",
      todayBody:
        "{employer} · Templat laporan {template} Anda siap untuk shift hari ini.",
      assignedNote: "Ditetapkan otomatis dari koneksi employer aktif Anda.",
    },
    templateExamples: {
      label: "Templat dari employer",
      body: "Employer Anda menetapkan templat laporan sesuai jenis pekerjaan Anda. Buka sebuah templat untuk melihat alur Laporan Hariannya.",
      reportOf: "Laporan {template}",
      current: "Ditetapkan untuk Anda",
    },
    templateReview: {
      appliedNote: "Diterapkan otomatis dari koneksi employer aktif Anda.",
      readyLabel: "Siap dikirim · Visibilitas employer",
      readyBody:
        "Laporan ini akan dibagikan dengan {employer} sesuai cakupan akses kerja aktif Anda. Data pribadi milik pekerja tetap privat.",
    },
    detail: {
      title: "Laporan Harian",
      readOnlyLabel: "Laporan hanya-baca",
      readOnlyBody:
        "Laporan yang sudah terkirim tidak dapat diubah lagi. Verifikasi dapat memperbarui status, tetapi isi yang Anda kirim tetap sama.",
      workSummaryLabel: "Ringkasan kerja",
      followUpLabel: "Tindak lanjut / masalah",
      portableTitle: "Riwayat kerja portabel",
      portableBody:
        "Laporan ini tetap ada dalam riwayat kerja milik Anda lintas koneksi employer.",
      offlineBanner: "Anda sedang offline",
      offlineNote:
        "Isi laporan tersimpan tetap tersedia offline. Pembaruan status muncul setelah Anda terhubung kembali.",
      cachedTitle: "Laporan tersimpan",
      cachedBody:
        "Laporan terkirim ini tersedia offline. Pembaruan verifikasi tersinkron setelah Anda terhubung kembali.",
      cachedVerifiedTitle: "Catatan terverifikasi tersimpan",
      cachedVerifiedBody: "Catatan terverifikasi ini tetap tersedia offline.",
    },
  },
  ja: {
    newDailyReport: "新しい日報",
    connectEmployer: "雇用主と接続",
    hubLabels: {
      workHistory: "職歴",
      cachedWorkHistory: "保存済みの職歴",
    },
    options: {
      normal: "通常",
      needsAttention: "要注意",
      urgent: "緊急",
      stable: "安定",
    },
    headless: {
      title: "日報は、雇用主接続が有効なときに利用できます。",
      subtitle: "有効な雇用主接続がありません",
      cardTitle: "日報は雇用主接続によって利用可能になります。",
      cardBody:
        "既存のポータブルな職歴はあなたのもとに残ります。業務報告を使う準備ができたら雇用主と接続してください。",
      portableTitle: "履歴はポータブルのまま保たれます",
      portableLine1:
        "日報を提出する前に雇用主と接続してください。ワーカー所有の履歴は雇用主が変わっても引き継がれます。",
      portableLine2:
        "提出済み・確認済みの業務記録は、雇用主のアクセス終了後もワーカー所有のまま残ります。",
    },
    loading: {
      title: "今日の日報を提出し、ポータブルな職歴を確認しましょう。",
      subtitle: "日報と職歴を読み込んでいます…",
    },
    headlessOffline: {
      subtitle: "オフラインです。日報を提出するには雇用主接続が必要です。",
      bannerTitle: "オフラインです",
      bannerBody: "雇用主接続を開始する前に再接続してください。",
    },
    empty: {
      title: "{employer} · 日報の履歴はここから始まります。",
      subtitle: "今日 · まだ日報は提出されていません",
      emptyTitle: "まだレポートがありません",
      emptyBody: "業務のまとめができたら、最初の日報を提出しましょう。",
      noteTitle: "まだ職歴がありません",
      noteLine1: "この雇用主接続で最初の日報を作成しましょう。",
      noteLine2: "提出済み・確認済みの日報は、ここに時系列で表示されます。",
    },
    offline: {
      title: "再接続するまで、保存済みの職歴を引き続き確認できます。",
      subtitle: "オフラインです",
      banner: "オフラインです",
      todayTitle: "今日 · まだ日報は提出されていません",
      todayBody: "業務のまとめができたら今日のレポートを提出してください。",
      cachedNote:
        "保存済みのレポートの確認と既存の下書きの保持ができます。新しい提出は再接続後に行われます。",
      cachedMeta: (line) => `保存済み · ${line}`,
    },
    accessEnded: {
      title:
        "雇用主のアクセスが終了しました。ワーカー所有の職歴は引き続き利用できます。",
      subtitle: "{employer} · 業務アクセス終了",
      banner:
        "雇用主のアクセスが終了しました。提出済みのポータブルな職歴は引き続き利用できます。",
      noticeBody:
        "この雇用主に新しい日報を提出することはできません。提出済み・確認済みの記録は履歴に残ります。",
      retainedLabel: "保持された職歴",
      todayTitle: "今日 · まだ日報は提出されていません",
      todayBody: "{employer} · 業務アクセス終了",
    },
    generalForm: {
      title: "新しい日報",
      templateTitle: "一般業務レポート",
      templateBody:
        "このレポートテンプレートは{employer}から自動的に提供されます。テンプレートの選択は不要です。",
      reportStatusLabel: "レポートステータス",
      workSummaryLabel: "業務サマリー · 必須",
      followUpLabel: "フォローアップ / 問題 · 任意",
      visibilityLabel: "雇用主への公開範囲",
      visibilityBody:
        "この日報は有効な業務アクセス範囲のもとで共有されます。ワーカーのみの個人情報は非公開のままです。",
      reviewReport: "レポートを確認",
    },
    validationError: {
      fieldError: "業務サマリーを入力してください。",
      helper: "続行する前に業務サマリーを追加してください。",
    },
    submitting: {
      banner: "日報を送信しています…",
      title: "日報を送信中",
      contextTitle: "現在のレポートコンテキスト",
      contextBody: "{date} · 現在の雇用主接続 · 雇用主提供テンプレート",
      noteTitle: "送信中…",
      noteLine1: "雇用主提供のレポートテンプレートを安全に送信しています。",
      noteLine2:
        "レポートの内容とテンプレート固有の項目は、送信が完了するまで保持されます。",
      noteLine3:
        "現在のレポートコンテキスト · {date} · 現在の雇用主接続 · 雇用主提供テンプレート",
    },
    submitFailed: {
      banner: "この日報を送信できませんでした。下書きはここに残っています。",
      title: "日報を送信できませんでした",
      noteTitle: "もう一度試す",
      noteBody:
        "下書きは保持されています。再試行しても重複して提出されることはありません。",
    },
    offlineDraft: {
      banner:
        "オフラインです。下書きはここに残り、確認できます。送信は再接続後に行われます。",
      noteTitle: "オフラインです",
      noteBody:
        "下書きはこの端末に保存されています。再接続後に続けてください。",
    },
    unsaved: {
      title: "未保存の変更を破棄しますか？",
      body: "今離れると、このレポートへの変更は失われます。",
      keepEditing: "編集を続ける",
      discard: "変更を破棄",
    },
    submitted: {
      title: "日報を提出しました",
      subtitle: "レポートはポータブルな職歴の一部になりました。",
      cardTitle: "日報を提出しました",
      cardBody:
        "レポートはポータブルな職歴の一部となり、有効な雇用主範囲のもとで共有されます。",
      cardTitleShort: "提出済み",
      cardBodyShort:
        "日報を提出しました。職歴は雇用主をまたいでポータブルなままです。",
      backToReports: "レポートに戻る",
      viewReport: "提出済みレポートを表示",
    },
    review: {
      title: "日報を確認",
      statusDescription: "このレポートに注意フラグは追加されません。",
      statusFlagged:
        "このレポートはマネージャーの確認が必要としてフラグが付きます。",
      readyTitle: "提出の準備ができました",
      readyBody: "提出後、レポートはポータブルな職歴の一部になります。",
      visibilityBody:
        "有効な雇用主範囲で共有されます。ワーカーのみの個人データは非公開のままです。",
      submit: "日報を提出",
      submitOffline: "再接続後に提出",
      offlineNote:
        "内容の確認はできますが、再接続するまで提出はできません。レポートの内容はそのまま保持されます。",
      editReport: "レポートを編集",
    },
    templates: {
      warehouseTitle: "倉庫テンプレート · {employer}",
      warehouseBody: "倉庫の項目は雇用主から自動的に提供されます。",
      foodTitle: "フードサービステンプレート · {employer}",
      foodBody: "フードサービスの項目は雇用主から自動的に提供されます。",
      workAreaLabel: "作業エリア / ステーション",
      safetyStatusLabel: "安全ステータス",
      quantityLabel: "取扱数量",
      operationalNotesLabel: "業務 / 運用メモ",
      quickNotesLabel: "クイックメモ",
      stationAreaLabel: "ステーション / エリア",
      serviceConditionLabel: "サービス状況",
      stockStatusLabel: "在庫状況",
      handoverNotesLabel: "引き継ぎ / 運用メモ",
      residentLabel: "入居者",
      residentConditionLabel: "入居者の状態",
      mealLabel: "食事",
      careNotesLabel: "ケアメモ",
      caregiverTitle: "介護テンプレート · {employer}",
      caregiverBody: "ケア項目は雇用主から自動的に提供されます。",
    },
    templateNames: {
      general: "一般",
      caregiver: "介護",
      warehouse: "倉庫",
      food: "フードサービス",
    },
    templateHub: {
      todayTitle: "今日 · {template}レポートは未提出です",
      todayBody:
        "{employer} · 本日のシフト用の{template}レポートテンプレートが利用できます。",
      assignedNote: "有効な雇用主接続から自動的に割り当てられます。",
    },
    templateExamples: {
      label: "雇用主が割り当てたテンプレート",
      body: "レポートテンプレートは職種に応じて雇用主が割り当てます。テンプレートを開くと、その日報の流れを確認できます。",
      reportOf: "{template}レポート",
      current: "あなたに割り当て済み",
    },
    templateReview: {
      appliedNote: "有効な雇用主接続から自動的に適用されます。",
      readyLabel: "提出の準備完了 · 雇用主への公開範囲",
      readyBody:
        "このレポートは、有効な業務アクセス範囲のもとで{employer}と共有されます。ワーカーのみの個人データは非公開のままです。",
    },
    detail: {
      title: "日報",
      readOnlyLabel: "閲覧専用レポート",
      readOnlyBody:
        "提出済みのレポートは編集できません。確認によりステータスが更新される場合がありますが、提出した内容は変更されません。",
      workSummaryLabel: "業務サマリー",
      followUpLabel: "フォローアップ / 問題",
      portableTitle: "ポータブルな職歴",
      portableBody:
        "このレポートは、雇用主の接続をまたいでワーカー所有の職歴に残ります。",
      offlineBanner: "オフラインです",
      offlineNote:
        "保存済みのレポート内容はオフラインでも利用できます。ステータスの更新は再接続後に表示されます。",
      cachedTitle: "保存済みレポート",
      cachedBody:
        "この提出済みレポートはオフラインでも利用できます。承認の更新は再接続後に同期されます。",
      cachedVerifiedTitle: "保存済みの承認記録",
      cachedVerifiedBody: "この承認済み記録はオフラインでも利用できます。",
    },
  },
});
