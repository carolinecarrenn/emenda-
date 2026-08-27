import { defineSectionCopy } from "@/i18n/copy";

/** Copy for /worker/career/experience (Figma WD-25 A–J · mobile W-25).
 *  EN strings are verbatim from the mocks; unlabeled-variant copy follows the
 *  section's documented state patterns. */
export interface ExperienceCopy {
  backLink: string;
  title: string;
  subtitle: string;
  verifiedCaption: string;
  addExperience: string;
  /* form */
  editTitle: string;
  editSubtitle: string;
  addTitle: string;
  addSubtitle: string;
  errorSubtitle: string;
  savingTitle: string;
  savingSubtitle: string;
  offlineFormSubtitle: string;
  offlineBannerTitle: string;
  offlineBannerBody: string;
  offlineBannerRetry: string;
  placeholderRole: string;
  placeholderEmployer: string;
  placeholderCountry: string;
  placeholderStartDate: string;
  placeholderEndDate: string;
  placeholderDescription: string;
  labelRole: string;
  labelEmployer: string;
  labelCountry: string;
  labelStartDate: string;
  labelEndDate: string;
  labelDescription: string;
  saveExperience: string;
  deleteExperience: string;
  saving: string;
  roleError: string;
  endDateError: string;
  /* verified detail */
  verifiedDetailTitle: string;
  verifiedDetailSubtitle: string;
  labelRoleVerified: string;
  labelEmployerVerified: string;
  labelCountryVerified: string;
  labelStartDateVerified: string;
  labelEndDateVerified: string;
  labelPersonalNote: string;
  personalNotePlaceholder: string;
  savePersonalNote: string;
  useInCv: string;
  /* states */
  emptySubtitle: string;
  emptyTitle: string;
  emptyBody: string;
  offlineTitle: string;
  offlineBody: string;
  saveFailedSubtitle: string;
  saveFailedTitle: string;
  saveFailedBody: string;
  trySavingAgain: string;
  tryAgain: string;
  unsavedTitle: string;
  unsavedBody: string;
  keepEditing: string;
  discardChanges: string;
  deleteConfirmTitle: string;
  deleteConfirmBody: string;
  keepRecord: string;
  deleteShort: string;
}

export const EXPERIENCE_COPY = defineSectionCopy<ExperienceCopy>({
  en: {
    backLink: "Career & CV",
    title: "Experience",
    subtitle: "Manage work history used in your career profile and CV.",
    verifiedCaption: "Employer verified in EMENDA",
    addExperience: "Add experience",
    editTitle: "Edit experience",
    editSubtitle: "Update your own work-history record.",
    addTitle: "Add experience",
    addSubtitle: "Add a work-history record you manage yourself.",
    errorSubtitle: "Fix the highlighted fields before saving.",
    savingTitle: "Saving experience",
    savingSubtitle: "Saving your work-history changes.",
    offlineFormSubtitle: "Your edits stay here while you reconnect.",
    offlineBannerTitle: "No internet connection",
    offlineBannerBody: "Reconnect before saving.",
    offlineBannerRetry: "Retry",
    placeholderRole: "Your role",
    placeholderEmployer: "Employer",
    placeholderCountry: "Country",
    placeholderStartDate: "Start date",
    placeholderEndDate: "End date",
    placeholderDescription: "What did you work on?",
    labelRole: "Role",
    labelEmployer: "Employer",
    labelCountry: "Country",
    labelStartDate: "Start date",
    labelEndDate: "End date",
    labelDescription: "Description · Optional",
    saveExperience: "Save experience",
    deleteExperience: "Delete experience",
    saving: "Saving…",
    roleError: "Enter a role.",
    endDateError: "End date must be after the start date.",
    verifiedDetailTitle: "Verified experience",
    verifiedDetailSubtitle:
      "Employer-verified fields are locked to protect the record.",
    labelRoleVerified: "Role · Verified",
    labelEmployerVerified: "Employer · Verified",
    labelCountryVerified: "Country · Verified",
    labelStartDateVerified: "Start date · Verified",
    labelEndDateVerified: "End date · Verified",
    labelPersonalNote: "Personal note · Optional",
    personalNotePlaceholder:
      "Add your own context without changing verified employer data.",
    savePersonalNote: "Save personal note",
    useInCv: "Use in CV",
    emptySubtitle:
      "Add work history to strengthen your career profile and CV.",
    emptyTitle: "No experience added yet",
    emptyBody:
      "Add internships, part-time work, projects or full-time roles. Verified EMENDA work can be added later without retyping it.",
    offlineTitle: "You're offline",
    offlineBody: "Showing cached experience records.",
    saveFailedSubtitle: "Your experience changes were not saved.",
    saveFailedTitle: "Couldn't save your experience.",
    saveFailedBody: "Your edits are still here.",
    trySavingAgain: "Try saving again",
    tryAgain: "Try again",
    unsavedTitle: "Discard experience changes?",
    unsavedBody: "Your unsaved experience edits will be lost.",
    keepEditing: "Keep editing",
    discardChanges: "Discard changes",
    deleteConfirmTitle: "Delete this experience?",
    deleteConfirmBody: "This removes only your self-added work-history record.",
    keepRecord: "Keep record",
    deleteShort: "Delete",
  },
  id: {
    backLink: "Karier & CV",
    title: "Pengalaman",
    subtitle: "Kelola riwayat kerja yang digunakan di profil karier dan CV Anda.",
    verifiedCaption: "Diverifikasi pemberi kerja di EMENDA",
    addExperience: "Tambah pengalaman",
    editTitle: "Ubah pengalaman",
    editSubtitle: "Perbarui catatan riwayat kerja milik Anda sendiri.",
    addTitle: "Tambah pengalaman",
    addSubtitle: "Tambahkan catatan riwayat kerja yang Anda kelola sendiri.",
    errorSubtitle: "Perbaiki kolom yang ditandai sebelum menyimpan.",
    savingTitle: "Menyimpan pengalaman",
    savingSubtitle: "Menyimpan perubahan riwayat kerja Anda.",
    offlineFormSubtitle: "Perubahan Anda tersimpan di sini sampai koneksi kembali.",
    offlineBannerTitle: "Tidak ada koneksi internet",
    offlineBannerBody: "Sambungkan kembali sebelum menyimpan.",
    offlineBannerRetry: "Coba lagi",
    placeholderRole: "Posisi Anda",
    placeholderEmployer: "Pemberi kerja",
    placeholderCountry: "Negara",
    placeholderStartDate: "Tanggal mulai",
    placeholderEndDate: "Tanggal selesai",
    placeholderDescription: "Apa yang Anda kerjakan?",
    labelRole: "Posisi",
    labelEmployer: "Pemberi kerja",
    labelCountry: "Negara",
    labelStartDate: "Tanggal mulai",
    labelEndDate: "Tanggal selesai",
    labelDescription: "Deskripsi · Opsional",
    saveExperience: "Simpan pengalaman",
    deleteExperience: "Hapus pengalaman",
    saving: "Menyimpan…",
    roleError: "Masukkan posisi.",
    endDateError: "Tanggal selesai harus setelah tanggal mulai.",
    verifiedDetailTitle: "Pengalaman terverifikasi",
    verifiedDetailSubtitle:
      "Kolom yang diverifikasi pemberi kerja dikunci untuk melindungi catatan.",
    labelRoleVerified: "Posisi · Terverifikasi",
    labelEmployerVerified: "Pemberi kerja · Terverifikasi",
    labelCountryVerified: "Negara · Terverifikasi",
    labelStartDateVerified: "Tanggal mulai · Terverifikasi",
    labelEndDateVerified: "Tanggal selesai · Terverifikasi",
    labelPersonalNote: "Catatan pribadi · Opsional",
    personalNotePlaceholder:
      "Tambahkan konteks Anda sendiri tanpa mengubah data terverifikasi pemberi kerja.",
    savePersonalNote: "Simpan catatan pribadi",
    useInCv: "Gunakan di CV",
    emptySubtitle:
      "Tambahkan riwayat kerja untuk memperkuat profil karier dan CV Anda.",
    emptyTitle: "Belum ada pengalaman yang ditambahkan",
    emptyBody:
      "Tambahkan magang, kerja paruh waktu, proyek, atau posisi penuh waktu. Pekerjaan terverifikasi EMENDA bisa ditambahkan nanti tanpa mengetik ulang.",
    offlineTitle: "Anda sedang offline",
    offlineBody: "Menampilkan catatan pengalaman dari cache.",
    saveFailedSubtitle: "Perubahan pengalaman Anda belum tersimpan.",
    saveFailedTitle: "Pengalaman Anda gagal disimpan.",
    saveFailedBody: "Perubahan Anda masih ada di sini.",
    trySavingAgain: "Coba simpan lagi",
    tryAgain: "Coba lagi",
    unsavedTitle: "Buang perubahan pengalaman?",
    unsavedBody: "Perubahan pengalaman yang belum disimpan akan hilang.",
    keepEditing: "Lanjut mengedit",
    discardChanges: "Buang perubahan",
    deleteConfirmTitle: "Hapus pengalaman ini?",
    deleteConfirmBody:
      "Ini hanya menghapus catatan riwayat kerja yang Anda tambahkan sendiri.",
    keepRecord: "Simpan catatan",
    deleteShort: "Hapus",
  },
  ja: {
    backLink: "キャリア & CV",
    title: "職歴",
    subtitle: "キャリアプロフィールとCVで使う職歴を管理します。",
    verifiedCaption: "EMENDAで雇用主確認済み",
    addExperience: "職歴を追加",
    editTitle: "職歴を編集",
    editSubtitle: "自分で追加した職歴を更新します。",
    addTitle: "職歴を追加",
    addSubtitle: "自分で管理する職歴を追加します。",
    errorSubtitle: "保存する前に、ハイライトされた項目を修正してください。",
    savingTitle: "職歴を保存中",
    savingSubtitle: "職歴の変更を保存しています。",
    offlineFormSubtitle: "再接続するまで編集内容はここに保持されます。",
    offlineBannerTitle: "インターネット接続がありません",
    offlineBannerBody: "保存する前に再接続してください。",
    offlineBannerRetry: "再試行",
    placeholderRole: "職種",
    placeholderEmployer: "雇用主",
    placeholderCountry: "国",
    placeholderStartDate: "開始日",
    placeholderEndDate: "終了日",
    placeholderDescription: "どんな業務を担当しましたか？",
    labelRole: "職種",
    labelEmployer: "雇用主",
    labelCountry: "国",
    labelStartDate: "開始日",
    labelEndDate: "終了日",
    labelDescription: "説明 · 任意",
    saveExperience: "職歴を保存",
    deleteExperience: "職歴を削除",
    saving: "保存中…",
    roleError: "職種を入力してください。",
    endDateError: "終了日は開始日より後にしてください。",
    verifiedDetailTitle: "確認済みの職歴",
    verifiedDetailSubtitle:
      "雇用主確認済みの項目は記録保護のためロックされています。",
    labelRoleVerified: "職種 · 確認済み",
    labelEmployerVerified: "雇用主 · 確認済み",
    labelCountryVerified: "国 · 確認済み",
    labelStartDateVerified: "開始日 · 確認済み",
    labelEndDateVerified: "終了日 · 確認済み",
    labelPersonalNote: "個人メモ · 任意",
    personalNotePlaceholder:
      "確認済みの雇用主データを変えずに、自分の補足を追加できます。",
    savePersonalNote: "個人メモを保存",
    useInCv: "CVで使用",
    emptySubtitle:
      "職歴を追加して、キャリアプロフィールとCVを充実させましょう。",
    emptyTitle: "職歴はまだ追加されていません",
    emptyBody:
      "インターン、アルバイト、プロジェクト、フルタイムの職歴を追加できます。EMENDAで確認済みの就業は、後から入力し直さずに追加できます。",
    offlineTitle: "オフラインです",
    offlineBody: "キャッシュされた職歴を表示しています。",
    saveFailedSubtitle: "職歴の変更は保存されませんでした。",
    saveFailedTitle: "職歴を保存できませんでした。",
    saveFailedBody: "入力内容はそのまま残っています。",
    trySavingAgain: "もう一度保存する",
    tryAgain: "再試行",
    unsavedTitle: "職歴の変更を破棄しますか？",
    unsavedBody: "未保存の職歴の変更は失われます。",
    keepEditing: "編集を続ける",
    discardChanges: "変更を破棄",
    deleteConfirmTitle: "この職歴を削除しますか？",
    deleteConfirmBody: "自分で追加した職歴のみが削除されます。",
    keepRecord: "記録を残す",
    deleteShort: "削除",
  },
});
