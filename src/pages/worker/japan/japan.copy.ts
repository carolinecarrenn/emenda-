import { defineSectionCopy } from "@/i18n/copy";

/** UI copy for 06 · Visa, Residence & Japan Preparation (WD-32..WD-33).
 *  EN strings are the Figma mock text verbatim. Record data (status names,
 *  dates, notes) stays raw in japanMock.ts. */

export interface JapanCopy {
  back: string;
  action: {
    add: string;
    preview: string;
    manage: string;
  };
  sheet: {
    keepEditing: string;
    discardChanges: string;
  };
  hub: {
    title: string;
    subtitle: string;
    subtitleLoading: string;
    titleOutside: string;
    subtitleOutside: string;
    subtitleAlready: string;
    subtitleAttention: string;
    subtitleOffline: string;
    residenceStatus: string;
    japanReadiness: string;
    residentRegistration: string;
    importantDates: string;
    validUntil: string;
    readinessSummary: string;
    registrationSummary: string;
    datesNext: string;
    privacyNote: string;
    residenceVisa: string;
    residenceVisaAdd: string;
    beforeArrival: string;
    beforeArrivalSummary: string;
    firstDays: string;
    firstDaysSummary: string;
    datesEmpty: string;
    residenceCurrent: string;
    registrationAlready: string;
    datesUpcoming: string;
    attentionTitle: string;
    attentionBody: string;
    readinessAttention: string;
    datesAttention: string;
    offlineTitle: string;
    offlineBody: string;
    savedLocally: string;
  };
  visaPlan: {
    title: string;
    subtitle: string;
    editTitle: string;
    editSubtitle: string;
    subtitleSaving: string;
    subtitleOffline: string;
    subtitleValidation: string;
    subtitleSaveFailed: string;
    rowEntryDocument: string;
    rowPlannedArrival: string;
    rowPlanningSource: string;
    planningSourceSelfAdded: string;
    plannedStatusTag: string;
    milestoneTitle: string;
    milestoneBody: string;
    manageImportantDates: string;
    disclaimer: string;
    editPlan: string;
    labelPlannedStatus: string;
    labelPlannedArrival: string;
    labelEntryStatus: string;
    labelNote: string;
    helperPlannedArrival: string;
    formDisclaimer: string;
    save: string;
    saving: string;
    tryAgain: string;
    saveWhenOnline: string;
    errorStatus: string;
    errorArrival: string;
    validationHelper: string;
    sheetStatusTitle: string;
    sheetStatusDesc: string;
    sheetEntryTitle: string;
    sheetEntryDesc: string;
    sheetArrivalTitle: string;
    sheetArrivalDesc: string;
    sheetArrivalHint: string;
    discardTitle: string;
    discardBody: string;
  };
  residence: {
    title: string;
    subtitle: string;
    subtitleEmpty: string;
    subtitleExpiry: string;
    subtitleUpdate: string;
    subtitleVerified: string;
    rowValidUntil: string;
    rowWorkPermission: string;
    rowSource: string;
    sourceSelfAdded: string;
    sourceVerifiedCard: string;
    reminderTitle: string;
    reminderBody: string;
    disclaimer: string;
    emptyTitle: string;
    emptyBody: string;
    emptyAction: string;
    addTitle: string;
    addSubtitle: string;
    editTitle: string;
    editSubtitle: string;
    subtitleSaveFailed: string;
    subtitleValidation: string;
    subtitleUnsaved: string;
    /** W-33E `626:680` / WD-33E `1014:1317`. */
    subtitleSaving: string;
    /** W-33G `626:744` / WD-33G `1014:1481`. */
    subtitleOfflineEdit: string;
    /** W-33P `653:139` / WD-33P `1014:2048`. */
    subtitleNoteSaveFailed: string;
    labelStatus: string;
    labelValidUntil: string;
    labelWorkPermission: string;
    labelNote: string;
    helperValidUntil: string;
    formDisclaimer: string;
    save: string;
    errorStatus: string;
    errorValidUntil: string;
    saveFailedTitle: string;
    saveFailedBody: string;
    offlineBody: string;
    expiresTitle: string;
    expiresBody: string;
    reviewSavedDetails: string;
    reminderActive: string;
    updateTitle: string;
    updateBody: string;
    reviewUpdate: string;
    notNow: string;
    reviewTitle: string;
    reviewSubtitle: string;
    currentTitle: string;
    verifiedTitle: string;
    compareStatusLabel: string;
    compareValidLabel: string;
    compareSourceLabel: string;
    compareSourceVerified: string;
    apply: string;
    keep: string;
    verifiedHelper: string;
    addNote: string;
    noteTitle: string;
    noteSubtitle: string;
    noteSubtitleSaving: string;
    noteSubtitleOffline: string;
    noteLabel: string;
    saveNote: string;
    discardEditTitle: string;
    discardEditBody: string;
    discardAddTitle: string;
    discardAddBody: string;
    discardNoteTitle: string;
    discardNoteBody: string;
    sheetStatusTitle: string;
    sheetStatusDesc: string;
    sheetWorkTitle: string;
    sheetWorkDesc: string;
    sheetValidTitle: string;
    sheetValidDesc: string;
    sheetValidHint: string;
  };
}

/** Tiny template helper: replaces {key} placeholders in copy strings. */
export function fill(
  template: string,
  vars: Record<string, string>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => vars[k] ?? `{${k}}`);
}

export const JAPAN_COPY = defineSectionCopy<JapanCopy>({
  en: {
    back: "Japan preparation",
    action: { add: "Add", preview: "Preview", manage: "Manage" },
    sheet: { keepEditing: "Keep editing", discardChanges: "Discard changes" },
    hub: {
      title: "Japan preparation",
      subtitle:
        "Keep your residence status, arrival tasks and important dates organized.",
      subtitleLoading: "Loading your Japan preparation details.",
      titleOutside: "Prepare for Japan",
      subtitleOutside:
        "Track what you need before arrival and what to do after landing.",
      subtitleAlready: "Your current residence and local setup at a glance.",
      subtitleAttention: "A few items need your attention.",
      subtitleOffline: "Your saved information is still available offline.",
      residenceStatus: "Residence status",
      japanReadiness: "Japan readiness",
      residentRegistration: "Resident registration",
      importantDates: "Important dates",
      validUntil: "Valid until {date}",
      readinessSummary: "3 of 6 setup tasks complete",
      registrationSummary: "Registered · {city}",
      datesNext: "Next: residence expiry · {date}",
      privacyNote:
        "Private by default. Nothing here is automatically shared with an employer.",
      residenceVisa: "Residence / visa",
      residenceVisaAdd:
        "Add your planned status and important validity dates",
      beforeArrival: "Before arrival",
      beforeArrivalSummary: "2 of 3 before-arrival tasks complete",
      firstDays: "First days in Japan",
      firstDaysSummary: "Resident registration and local setup",
      datesEmpty: "No reminders added yet",
      residenceCurrent: "Current status saved · Valid until {date}",
      registrationAlready: "{city} · Registered",
      datesUpcoming: "1 upcoming reminder",
      attentionTitle: "Residence status expires in 60 days",
      attentionBody: "Review your saved date and plan your next step.",
      readinessAttention: "3 tasks still need action",
      datesAttention: "Expiry reminder is active",
      offlineTitle: "No internet connection",
      offlineBody: "Reconnect to refresh status and guidance.",
      savedLocally: "Saved locally · Last updated {date}",
    },
    visaPlan: {
      title: "Visa & entry plan",
      subtitle:
        "Plan your immigration and arrival milestones before entering Japan.",
      editTitle: "Edit visa & entry plan",
      editSubtitle:
        "Track your intended status and entry-document progress before arrival.",
      subtitleSaving: "Saving your visa and entry-plan changes.",
      subtitleOffline: "Your edits stay here while you reconnect.",
      subtitleValidation: "Check the required information before saving.",
      subtitleSaveFailed: "Your changes were not saved. Your edits are still here.",
      rowEntryDocument: "Visa / entry document",
      rowPlannedArrival: "Planned arrival",
      rowPlanningSource: "Planning source",
      planningSourceSelfAdded: "Self-added plan",
      plannedStatusTag: "PLANNED STATUS",
      milestoneTitle: "Important milestone",
      milestoneBody: "Track COE / visa / arrival dates in Important dates.",
      manageImportantDates: "Manage important dates",
      disclaimer:
        "Planning only. This is not an immigration application or official status record.",
      editPlan: "Edit plan",
      labelPlannedStatus: "PLANNED STATUS OF RESIDENCE",
      labelPlannedArrival: "PLANNED ARRIVAL",
      labelEntryStatus: "VISA / ENTRY DOCUMENT STATUS",
      labelNote: "NOTE · OPTIONAL",
      helperPlannedArrival: "Enter your actual planned arrival date.",
      formDisclaimer:
        "Private planning record only. Check official immigration guidance for requirements.",
      save: "Save visa plan",
      saving: "Saving…",
      tryAgain: "Try saving again",
      saveWhenOnline: "Save when online",
      errorStatus: "Select the status you plan to use.",
      errorArrival: "Add your planned arrival date.",
      validationHelper: "Select the status you plan to use.",
      sheetStatusTitle: "Planned status of residence",
      sheetStatusDesc:
        "Choose the status you plan to use when entering Japan.",
      sheetEntryTitle: "Visa / entry document status",
      sheetEntryDesc: "Choose the current progress of your entry documents.",
      sheetArrivalTitle: "Planned arrival",
      sheetArrivalDesc:
        "Enter the date you currently plan to arrive in Japan.",
      sheetArrivalHint:
        "Use any valid date — this is not limited to preset choices.",
      discardTitle: "Discard visa-plan changes?",
      discardBody: "Your unsaved pre-arrival planning edits will be lost.",
    },
    residence: {
      title: "Residence status",
      subtitle: "Keep a private record of your current status in Japan.",
      subtitleEmpty: "No residence status has been added yet.",
      subtitleExpiry: "Your saved status needs attention soon.",
      subtitleUpdate:
        "A verified identity document has newer residence details.",
      subtitleVerified:
        "Verified residence details linked from your identity record.",
      rowValidUntil: "Valid until",
      rowWorkPermission: "Work permission",
      rowSource: "Source",
      sourceSelfAdded: "Self-added",
      sourceVerifiedCard: "Verified residence card",
      reminderTitle: "Expiry reminder",
      reminderBody: "Remind me 90 days before expiry.",
      disclaimer:
        "This private record does not replace an official immigration document.",
      emptyTitle: "Add your residence status",
      emptyBody:
        "Save your current or planned status, validity date and work-permission note.",
      emptyAction: "Add residence status",
      addTitle: "Add residence status",
      addSubtitle: "Add your current or planned residence details.",
      editTitle: "Edit residence status",
      editSubtitle: "Update details you entered yourself.",
      subtitleSaveFailed: "Your changes were not saved.",
      subtitleValidation: "Fix the highlighted fields before saving.",
      subtitleUnsaved: "Your edits have not been saved yet.",
      subtitleSaving: "Saving your residence details.",
      subtitleOfflineEdit: "Your edits stay here while you reconnect.",
      subtitleNoteSaveFailed: "Your note was not saved. Your text is still here.",
      labelStatus: "STATUS OF RESIDENCE",
      labelValidUntil: "VALID UNTIL",
      labelWorkPermission: "WORK PERMISSION",
      labelNote: "RESTRICTION / NOTE · OPTIONAL",
      helperValidUntil:
        "Enter the expiry date exactly as shown on your residence document.",
      formDisclaimer:
        "Private planning record only. Check official sources for legal requirements.",
      save: "Save residence status",
      errorStatus: "Select a status of residence.",
      errorValidUntil: "Enter a valid expiry date.",
      saveFailedTitle: "Couldn’t save your changes",
      saveFailedBody: "Your edits are still here.",
      offlineBody: "Reconnect before saving.",
      expiresTitle: "Expires in 60 days",
      expiresBody:
        "Saved expiry date: {date}. Check official requirements before taking action.",
      reviewSavedDetails: "Review saved details",
      reminderActive: "90 days before expiry · Active",
      updateTitle: "Verified update available",
      updateBody:
        "Residence-card details from identity verification differ from this private record.",
      reviewUpdate: "Review update",
      notNow: "Not now",
      reviewTitle: "Review residence update",
      reviewSubtitle:
        "Confirm before replacing your saved residence details.",
      currentTitle: "Current saved details",
      verifiedTitle: "From verified residence card",
      compareStatusLabel: "Status:",
      compareValidLabel: "Valid until:",
      compareSourceLabel: "Source:",
      compareSourceVerified: "Verified identity document",
      apply: "Apply verified update",
      keep: "Keep current details",
      verifiedHelper:
        "Verified source details are read-only here. Check official documents for legal use.",
      addNote: "Add personal note",
      noteTitle: "Residence note",
      noteSubtitle:
        "Add a private note without changing verified residence fields.",
      noteSubtitleSaving: "Saving your private residence note.",
      noteSubtitleOffline: "Your note stays here while you reconnect.",
      noteLabel: "NOTE · OPTIONAL",
      saveNote: "Save note",
      discardEditTitle: "Discard residence changes?",
      discardEditBody: "Your unsaved residence-status edits will be lost.",
      discardAddTitle: "Discard new residence status?",
      discardAddBody: "The residence status you started adding will be lost.",
      discardNoteTitle: "Discard residence-note changes?",
      discardNoteBody: "Your unsaved private residence note will be lost.",
      sheetStatusTitle: "Status of residence",
      sheetStatusDesc:
        "Choose the status shown on your current residence document.",
      sheetWorkTitle: "Work permission",
      sheetWorkDesc:
        "Choose the work-permission state that matches your residence record.",
      sheetValidTitle: "Valid until",
      sheetValidDesc:
        "Enter the exact expiry date shown on your residence document.",
      sheetValidHint: "Use the actual expiry date from the residence card.",
    },
  },
  id: {
    back: "Persiapan Jepang",
    action: { add: "Tambah", preview: "Pratinjau", manage: "Kelola" },
    sheet: { keepEditing: "Lanjut mengedit", discardChanges: "Buang perubahan" },
    hub: {
      title: "Persiapan Jepang",
      subtitle:
        "Jaga status izin tinggal, tugas kedatangan, dan tanggal penting Anda tetap teratur.",
      subtitleLoading: "Memuat detail persiapan Jepang Anda.",
      titleOutside: "Bersiap ke Jepang",
      subtitleOutside:
        "Pantau apa yang Anda perlukan sebelum kedatangan dan yang harus dilakukan setelah mendarat.",
      subtitleAlready:
        "Ringkasan status izin tinggal dan penyiapan lokal Anda saat ini.",
      subtitleAttention: "Beberapa hal memerlukan perhatian Anda.",
      subtitleOffline:
        "Informasi tersimpan Anda tetap tersedia secara offline.",
      residenceStatus: "Status izin tinggal",
      japanReadiness: "Kesiapan Jepang",
      residentRegistration: "Registrasi penduduk",
      importantDates: "Tanggal penting",
      validUntil: "Berlaku hingga {date}",
      readinessSummary: "3 dari 6 tugas penyiapan selesai",
      registrationSummary: "Terdaftar · {city}",
      datesNext: "Berikutnya: masa berlaku izin tinggal · {date}",
      privacyNote:
        "Privat secara default. Tidak ada yang dibagikan otomatis kepada pemberi kerja.",
      residenceVisa: "Izin tinggal / visa",
      residenceVisaAdd:
        "Tambahkan status yang direncanakan dan tanggal berlaku penting",
      beforeArrival: "Sebelum kedatangan",
      beforeArrivalSummary: "2 dari 3 tugas pra-kedatangan selesai",
      firstDays: "Hari-hari pertama di Jepang",
      firstDaysSummary: "Registrasi penduduk dan penyiapan lokal",
      datesEmpty: "Belum ada pengingat",
      residenceCurrent: "Status saat ini tersimpan · Berlaku hingga {date}",
      registrationAlready: "{city} · Terdaftar",
      datesUpcoming: "1 pengingat mendatang",
      attentionTitle: "Status izin tinggal berakhir dalam 60 hari",
      attentionBody:
        "Tinjau tanggal tersimpan Anda dan rencanakan langkah berikutnya.",
      readinessAttention: "3 tugas masih perlu tindakan",
      datesAttention: "Pengingat masa berlaku aktif",
      offlineTitle: "Tidak ada koneksi internet",
      offlineBody:
        "Sambungkan kembali untuk memperbarui status dan panduan.",
      savedLocally: "Tersimpan lokal · Terakhir diperbarui {date}",
    },
    visaPlan: {
      title: "Rencana visa & masuk",
      subtitle:
        "Rencanakan tahapan imigrasi dan kedatangan Anda sebelum masuk ke Jepang.",
      editTitle: "Ubah rencana visa & masuk",
      editSubtitle:
        "Pantau status yang Anda tuju dan progres dokumen masuk sebelum kedatangan.",
      subtitleSaving: "Menyimpan perubahan rencana visa & masuk Anda.",
      subtitleOffline: "Perubahan Anda tersimpan di sini sampai Anda terhubung lagi.",
      subtitleValidation: "Periksa informasi yang wajib diisi sebelum menyimpan.",
      subtitleSaveFailed: "Perubahan Anda belum tersimpan. Hasil edit Anda masih ada di sini.",
      rowEntryDocument: "Visa / dokumen masuk",
      rowPlannedArrival: "Kedatangan yang direncanakan",
      rowPlanningSource: "Sumber perencanaan",
      planningSourceSelfAdded: "Rencana ditambahkan sendiri",
      plannedStatusTag: "STATUS RENCANA",
      milestoneTitle: "Tonggak penting",
      milestoneBody:
        "Pantau tanggal COE / visa / kedatangan di Tanggal penting.",
      manageImportantDates: "Kelola tanggal penting",
      disclaimer:
        "Hanya perencanaan. Ini bukan permohonan imigrasi atau catatan status resmi.",
      editPlan: "Ubah rencana",
      labelPlannedStatus: "STATUS IZIN TINGGAL YANG DIRENCANAKAN",
      labelPlannedArrival: "KEDATANGAN DIRENCANAKAN",
      labelEntryStatus: "STATUS VISA / DOKUMEN MASUK",
      labelNote: "CATATAN · OPSIONAL",
      helperPlannedArrival:
        "Masukkan tanggal kedatangan yang benar-benar Anda rencanakan.",
      formDisclaimer:
        "Hanya catatan perencanaan pribadi. Periksa panduan imigrasi resmi untuk persyaratan.",
      save: "Simpan rencana visa",
      saving: "Menyimpan…",
      tryAgain: "Coba simpan lagi",
      saveWhenOnline: "Simpan saat online",
      errorStatus: "Pilih status yang Anda rencanakan.",
      errorArrival: "Tambahkan tanggal kedatangan yang direncanakan.",
      validationHelper: "Pilih status yang Anda rencanakan.",
      sheetStatusTitle: "Status izin tinggal yang direncanakan",
      sheetStatusDesc:
        "Pilih status yang akan Anda gunakan saat masuk ke Jepang.",
      sheetEntryTitle: "Status visa / dokumen masuk",
      sheetEntryDesc: "Pilih progres dokumen masuk Anda saat ini.",
      sheetArrivalTitle: "Kedatangan yang direncanakan",
      sheetArrivalDesc:
        "Masukkan tanggal Anda berencana tiba di Jepang saat ini.",
      sheetArrivalHint:
        "Gunakan tanggal valid apa pun — tidak terbatas pada pilihan yang tersedia.",
      discardTitle: "Buang perubahan rencana visa?",
      discardBody:
        "Perubahan perencanaan pra-kedatangan yang belum disimpan akan hilang.",
    },
    residence: {
      title: "Status izin tinggal",
      subtitle:
        "Simpan catatan pribadi tentang status Anda saat ini di Jepang.",
      subtitleEmpty: "Belum ada status izin tinggal yang ditambahkan.",
      subtitleExpiry: "Status tersimpan Anda segera memerlukan perhatian.",
      subtitleUpdate:
        "Dokumen identitas terverifikasi memiliki detail izin tinggal yang lebih baru.",
      subtitleVerified:
        "Detail izin tinggal terverifikasi yang tertaut dari catatan identitas Anda.",
      rowValidUntil: "Berlaku hingga",
      rowWorkPermission: "Izin kerja",
      rowSource: "Sumber",
      sourceSelfAdded: "Ditambahkan sendiri",
      sourceVerifiedCard: "Kartu izin tinggal terverifikasi",
      reminderTitle: "Pengingat masa berlaku",
      reminderBody: "Ingatkan saya 90 hari sebelum berakhir.",
      disclaimer:
        "Catatan pribadi ini tidak menggantikan dokumen imigrasi resmi.",
      emptyTitle: "Tambahkan status izin tinggal Anda",
      emptyBody:
        "Simpan status saat ini atau yang direncanakan, tanggal berlaku, dan catatan izin kerja.",
      emptyAction: "Tambah status izin tinggal",
      addTitle: "Tambah status izin tinggal",
      addSubtitle:
        "Tambahkan detail izin tinggal saat ini atau yang direncanakan.",
      editTitle: "Ubah status izin tinggal",
      editSubtitle: "Perbarui detail yang Anda masukkan sendiri.",
      subtitleSaveFailed: "Perubahan Anda belum tersimpan.",
      subtitleValidation: "Perbaiki kolom yang ditandai sebelum menyimpan.",
      subtitleUnsaved: "Perubahan Anda belum disimpan.",
      subtitleSaving: "Menyimpan detail izin tinggal Anda.",
      subtitleOfflineEdit:
        "Perubahan Anda tersimpan di sini sampai Anda terhubung lagi.",
      subtitleNoteSaveFailed:
        "Catatan Anda belum tersimpan. Teks Anda masih ada di sini.",
      labelStatus: "STATUS IZIN TINGGAL",
      labelValidUntil: "BERLAKU HINGGA",
      labelWorkPermission: "IZIN KERJA",
      labelNote: "PEMBATASAN / CATATAN · OPSIONAL",
      helperValidUntil:
        "Masukkan tanggal berakhir persis seperti tertera pada dokumen izin tinggal Anda.",
      formDisclaimer:
        "Hanya catatan perencanaan pribadi. Periksa sumber resmi untuk persyaratan hukum.",
      save: "Simpan status izin tinggal",
      errorStatus: "Pilih status izin tinggal.",
      errorValidUntil: "Masukkan tanggal berakhir yang valid.",
      saveFailedTitle: "Tidak dapat menyimpan perubahan Anda",
      saveFailedBody: "Perubahan Anda masih ada di sini.",
      offlineBody: "Sambungkan kembali sebelum menyimpan.",
      expiresTitle: "Berakhir dalam 60 hari",
      expiresBody:
        "Tanggal berakhir tersimpan: {date}. Periksa persyaratan resmi sebelum mengambil tindakan.",
      reviewSavedDetails: "Tinjau detail tersimpan",
      reminderActive: "90 hari sebelum berakhir · Aktif",
      updateTitle: "Pembaruan terverifikasi tersedia",
      updateBody:
        "Detail kartu izin tinggal dari verifikasi identitas berbeda dengan catatan pribadi ini.",
      reviewUpdate: "Tinjau pembaruan",
      notNow: "Nanti saja",
      reviewTitle: "Tinjau pembaruan izin tinggal",
      reviewSubtitle:
        "Konfirmasi sebelum mengganti detail izin tinggal tersimpan Anda.",
      currentTitle: "Detail tersimpan saat ini",
      verifiedTitle: "Dari kartu izin tinggal terverifikasi",
      compareStatusLabel: "Status:",
      compareValidLabel: "Berlaku hingga:",
      compareSourceLabel: "Sumber:",
      compareSourceVerified: "Dokumen identitas terverifikasi",
      apply: "Terapkan pembaruan terverifikasi",
      keep: "Pertahankan detail saat ini",
      verifiedHelper:
        "Detail dari sumber terverifikasi hanya-baca di sini. Periksa dokumen resmi untuk penggunaan hukum.",
      addNote: "Tambah catatan pribadi",
      noteTitle: "Catatan izin tinggal",
      noteSubtitle:
        "Tambahkan catatan pribadi tanpa mengubah kolom izin tinggal terverifikasi.",
      noteSubtitleSaving: "Menyimpan catatan izin tinggal pribadi Anda.",
      noteSubtitleOffline: "Catatan Anda tersimpan di sini sampai Anda terhubung lagi.",
      noteLabel: "CATATAN · OPSIONAL",
      saveNote: "Simpan catatan",
      discardEditTitle: "Buang perubahan izin tinggal?",
      discardEditBody:
        "Perubahan status izin tinggal yang belum disimpan akan hilang.",
      discardAddTitle: "Buang status izin tinggal baru?",
      discardAddBody:
        "Status izin tinggal yang mulai Anda tambahkan akan hilang.",
      discardNoteTitle: "Buang perubahan catatan izin tinggal?",
      discardNoteBody:
        "Catatan izin tinggal pribadi yang belum disimpan akan hilang.",
      sheetStatusTitle: "Status izin tinggal",
      sheetStatusDesc:
        "Pilih status yang tertera pada dokumen izin tinggal Anda saat ini.",
      sheetWorkTitle: "Izin kerja",
      sheetWorkDesc:
        "Pilih kondisi izin kerja yang sesuai dengan catatan izin tinggal Anda.",
      sheetValidTitle: "Berlaku hingga",
      sheetValidDesc:
        "Masukkan tanggal berakhir persis seperti pada dokumen izin tinggal Anda.",
      sheetValidHint:
        "Gunakan tanggal berakhir yang sebenarnya dari kartu izin tinggal.",
    },
  },
  ja: {
    back: "来日準備",
    action: { add: "追加", preview: "プレビュー", manage: "管理" },
    sheet: { keepEditing: "編集を続ける", discardChanges: "変更を破棄" },
    hub: {
      title: "来日準備",
      subtitle: "在留資格、到着後のタスク、重要な日付を整理して管理しましょう。",
      subtitleLoading: "来日準備の詳細を読み込んでいます。",
      titleOutside: "日本への備え",
      subtitleOutside:
        "到着前に必要な準備と、到着後にやることを確認しましょう。",
      subtitleAlready: "現在の在留状況と生活セットアップの概要です。",
      subtitleAttention: "確認が必要な項目がいくつかあります。",
      subtitleOffline: "保存済みの情報はオフラインでも利用できます。",
      residenceStatus: "在留資格",
      japanReadiness: "日本での生活準備",
      residentRegistration: "住民登録",
      importantDates: "重要な日付",
      validUntil: "{date}まで有効",
      readinessSummary: "設定タスク6件中3件完了",
      registrationSummary: "登録済み · {city}",
      datesNext: "次回: 在留期限 · {date}",
      privacyNote:
        "初期設定で非公開です。ここにある情報が雇用主へ自動共有されることはありません。",
      residenceVisa: "在留資格 / ビザ",
      residenceVisaAdd: "予定している在留資格と重要な有効期限を追加しましょう",
      beforeArrival: "到着前",
      beforeArrivalSummary: "到着前タスク3件中2件完了",
      firstDays: "来日後の最初の数日",
      firstDaysSummary: "住民登録と生活セットアップ",
      datesEmpty: "リマインダーはまだありません",
      residenceCurrent: "現在の資格を保存済み · {date}まで有効",
      registrationAlready: "{city} · 登録済み",
      datesUpcoming: "今後のリマインダー1件",
      attentionTitle: "在留資格の期限まで60日",
      attentionBody: "保存した日付を確認し、次のステップを計画しましょう。",
      readinessAttention: "3件のタスクが未対応です",
      datesAttention: "期限リマインダーが有効です",
      offlineTitle: "インターネット接続がありません",
      offlineBody: "再接続すると状況とガイダンスが更新されます。",
      savedLocally: "端末に保存済み · 最終更新 {date}",
    },
    visaPlan: {
      title: "ビザ・入国プラン",
      subtitle:
        "入国前に、入管手続きと到着までのマイルストーンを計画しましょう。",
      editTitle: "ビザ・入国プランを編集",
      editSubtitle:
        "到着前に、予定の在留資格と入国書類の進捗を管理しましょう。",
      subtitleSaving: "ビザ・入国プランの変更を保存しています。",
      subtitleOffline: "再接続するまで、編集内容はこの端末に保存されます。",
      subtitleValidation: "保存する前に、必須項目を確認してください。",
      subtitleSaveFailed: "変更は保存されませんでした。編集内容はこのまま残っています。",
      rowEntryDocument: "ビザ / 入国書類",
      rowPlannedArrival: "到着予定",
      rowPlanningSource: "計画の情報源",
      planningSourceSelfAdded: "自分で追加したプラン",
      plannedStatusTag: "予定ステータス",
      milestoneTitle: "重要なマイルストーン",
      milestoneBody:
        "COE・ビザ・到着日は「重要な日付」で管理しましょう。",
      manageImportantDates: "重要な日付を管理",
      disclaimer:
        "これは計画用の記録であり、入管への申請や公的な在留記録ではありません。",
      editPlan: "プランを編集",
      labelPlannedStatus: "予定の在留資格",
      labelPlannedArrival: "到着予定日",
      labelEntryStatus: "ビザ / 入国書類の状況",
      labelNote: "メモ · 任意",
      helperPlannedArrival: "実際に予定している到着日を入力してください。",
      formDisclaimer:
        "個人の計画記録です。要件は必ず公式の入管情報で確認してください。",
      save: "ビザプランを保存",
      saving: "保存中…",
      tryAgain: "もう一度保存する",
      saveWhenOnline: "オンライン時に保存",
      errorStatus: "利用予定の在留資格を選択してください。",
      errorArrival: "到着予定日を追加してください。",
      validationHelper: "利用予定の在留資格を選択してください。",
      sheetStatusTitle: "予定の在留資格",
      sheetStatusDesc: "入国時に利用する予定の在留資格を選択してください。",
      sheetEntryTitle: "ビザ / 入国書類の状況",
      sheetEntryDesc: "入国書類の現在の進捗を選択してください。",
      sheetArrivalTitle: "到着予定",
      sheetArrivalDesc: "現在予定している日本への到着日を入力してください。",
      sheetArrivalHint:
        "任意の日付を入力できます。プリセットの選択肢に限定されません。",
      discardTitle: "ビザプランの変更を破棄しますか？",
      discardBody: "保存していない渡航前計画の編集内容は失われます。",
    },
    residence: {
      title: "在留資格",
      subtitle:
        "日本での現在の在留資格を、非公開の記録として保管しましょう。",
      subtitleEmpty: "在留資格はまだ追加されていません。",
      subtitleExpiry: "保存した在留資格はまもなく対応が必要です。",
      subtitleUpdate:
        "確認済みの本人確認書類に、より新しい在留情報があります。",
      subtitleVerified:
        "本人確認記録から連携された確認済みの在留情報です。",
      rowValidUntil: "有効期限",
      rowWorkPermission: "就労許可",
      rowSource: "情報源",
      sourceSelfAdded: "自分で追加",
      sourceVerifiedCard: "確認済みの在留カード",
      reminderTitle: "期限リマインダー",
      reminderBody: "期限の90日前に通知します。",
      disclaimer:
        "この非公開の記録は、公的な在留書類の代わりにはなりません。",
      emptyTitle: "在留資格を追加",
      emptyBody:
        "現在または予定の在留資格、有効期限、就労許可のメモを保存しましょう。",
      emptyAction: "在留資格を追加する",
      addTitle: "在留資格を追加",
      addSubtitle: "現在または予定の在留情報を追加してください。",
      editTitle: "在留資格を編集",
      editSubtitle: "自分で入力した内容を更新します。",
      subtitleSaveFailed: "変更は保存されませんでした。",
      subtitleValidation: "保存する前に、ハイライトされた項目を修正してください。",
      subtitleUnsaved: "編集内容はまだ保存されていません。",
      subtitleSaving: "在留資格の内容を保存しています。",
      subtitleOfflineEdit: "再接続するまで、編集内容はこの端末に保存されます。",
      subtitleNoteSaveFailed:
        "メモは保存されませんでした。入力内容はここに残っています。",
      labelStatus: "在留資格",
      labelValidUntil: "有効期限",
      labelWorkPermission: "就労許可",
      labelNote: "制限 / メモ · 任意",
      helperValidUntil:
        "在留書類に記載のとおり正確に有効期限を入力してください。",
      formDisclaimer:
        "個人の計画記録です。法的な要件は公式情報で確認してください。",
      save: "在留資格を保存",
      errorStatus: "在留資格を選択してください。",
      errorValidUntil: "有効な期限日を入力してください。",
      saveFailedTitle: "変更を保存できませんでした",
      saveFailedBody: "編集内容はここに残っています。",
      offlineBody: "保存する前に再接続してください。",
      expiresTitle: "期限まで60日",
      expiresBody:
        "保存済みの期限: {date}。対応の前に公式の要件を確認してください。",
      reviewSavedDetails: "保存した詳細を確認",
      reminderActive: "期限の90日前 · 有効",
      updateTitle: "確認済みの更新があります",
      updateBody:
        "本人確認で取得した在留カードの情報が、この非公開記録と異なります。",
      reviewUpdate: "更新を確認",
      notNow: "今はしない",
      reviewTitle: "在留情報の更新を確認",
      reviewSubtitle:
        "保存済みの在留情報を置き換える前に確認してください。",
      currentTitle: "現在保存されている情報",
      verifiedTitle: "確認済み在留カードの情報",
      compareStatusLabel: "在留資格:",
      compareValidLabel: "有効期限:",
      compareSourceLabel: "情報源:",
      compareSourceVerified: "確認済みの本人確認書類",
      apply: "確認済みの更新を適用",
      keep: "現在の情報を維持",
      verifiedHelper:
        "確認済み情報はここでは読み取り専用です。法的な用途では公的書類を確認してください。",
      addNote: "個人メモを追加",
      noteTitle: "在留メモ",
      noteSubtitle:
        "確認済みの在留情報を変えずに、非公開のメモを追加できます。",
      noteSubtitleSaving: "非公開の在留メモを保存しています。",
      noteSubtitleOffline: "再接続するまで、メモはこの端末に保存されます。",
      noteLabel: "メモ · 任意",
      saveNote: "メモを保存",
      discardEditTitle: "在留情報の変更を破棄しますか？",
      discardEditBody: "保存していない在留資格の編集内容は失われます。",
      discardAddTitle: "新しい在留資格を破棄しますか？",
      discardAddBody: "追加し始めた在留資格の内容は失われます。",
      discardNoteTitle: "在留メモの変更を破棄しますか？",
      discardNoteBody: "保存していない非公開の在留メモは失われます。",
      sheetStatusTitle: "在留資格",
      sheetStatusDesc:
        "現在の在留書類に記載されている在留資格を選択してください。",
      sheetWorkTitle: "就労許可",
      sheetWorkDesc:
        "在留記録に一致する就労許可の状態を選択してください。",
      sheetValidTitle: "有効期限",
      sheetValidDesc:
        "在留書類に記載された正確な有効期限を入力してください。",
      sheetValidHint: "在留カードに記載の実際の有効期限を使用してください。",
    },
  },
});
