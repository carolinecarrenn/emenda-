import { defineSectionCopy } from "@/i18n/copy";

/** Copy for /worker/career/education (Figma WD-26 A–I · mobile W-26).
 *  WD-26 mirrors WD-25 exactly; EN strings verbatim where fetched. */
export interface EducationCopy {
  backLink: string;
  title: string;
  subtitle: string;
  addEducation: string;
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
  keepRecord: string;
  deleteShort: string;
  labelInstitution: string;
  labelDegree: string;
  labelCountry: string;
  labelFieldOfStudy: string;
  labelStartYear: string;
  labelEndYear: string;
  labelDescription: string;
  saveEducation: string;
  deleteEducation: string;
  saving: string;
  schoolError: string;
  startYearError: string;
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
  placeholderSchool: string;
  placeholderDegree: string;
  placeholderFieldOfStudy: string;
  placeholderCountry: string;
  placeholderStartYear: string;
  placeholderEndYear: string;
  unsavedTitle: string;
  unsavedBody: string;
  keepEditing: string;
  discardChanges: string;
  deleteConfirmTitle: string;
  deleteConfirmBody: string;
}

export const EDUCATION_COPY = defineSectionCopy<EducationCopy>({
  en: {
    backLink: "Career & CV",
    title: "Education",
    subtitle: "Manage education shown in your career profile and CV.",
    addEducation: "Add education",
    editTitle: "Edit education",
    editSubtitle: "Update your education record.",
    addTitle: "Add education",
    addSubtitle: "Add education to your portable career profile.",
    errorSubtitle: "Fix the highlighted fields before saving.",
    savingTitle: "Saving education",
    savingSubtitle: "Saving your education changes.",
    offlineFormSubtitle: "Your edits stay here while you reconnect.",
    offlineBannerTitle: "No internet connection",
    offlineBannerBody: "Reconnect before saving.",
    keepRecord: "Keep record",
    deleteShort: "Delete",
    labelInstitution: "School",
    labelDegree: "Degree",
    labelCountry: "Country",
    labelFieldOfStudy: "Field of study",
    labelStartYear: "Start year",
    labelEndYear: "End year",
    labelDescription: "Description · Optional",
    saveEducation: "Save education",
    deleteEducation: "Delete education",
    saving: "Saving…",
    schoolError: "Enter a school or institution.",
    startYearError: "Start year cannot be after end year.",
    emptySubtitle: "Add education used in your career profile and CV.",
    emptyTitle: "No education added yet",
    emptyBody: "Add a school, university, course or vocational program.",
    offlineTitle: "You're offline",
    offlineBody: "Showing cached education records.",
    saveFailedSubtitle: "Your education changes were not saved.",
    saveFailedTitle: "Couldn’t save your education.",
    saveFailedBody: "Your edits are still here.",
    trySavingAgain: "Try saving again",
    tryAgain: "Try again",
    placeholderSchool: "School or university",
    placeholderDegree: "Degree",
    placeholderFieldOfStudy: "Field of study",
    placeholderCountry: "Country",
    placeholderStartYear: "Start year",
    placeholderEndYear: "End year",
    unsavedTitle: "Discard education changes?",
    unsavedBody: "Your unsaved education edits will be lost.",
    keepEditing: "Keep editing",
    discardChanges: "Discard changes",
    deleteConfirmTitle: "Delete this education entry?",
    deleteConfirmBody:
      "This removes the self-added education record from your career profile.",
  },
  id: {
    backLink: "Karier & CV",
    title: "Pendidikan",
    subtitle:
      "Kelola pendidikan yang ditampilkan di profil karier dan CV Anda.",
    addEducation: "Tambah pendidikan",
    editTitle: "Ubah pendidikan",
    editSubtitle: "Perbarui catatan pendidikan Anda.",
    addTitle: "Tambah pendidikan",
    addSubtitle: "Tambahkan pendidikan ke profil karier portabel Anda.",
    errorSubtitle: "Perbaiki kolom yang ditandai sebelum menyimpan.",
    savingTitle: "Menyimpan pendidikan",
    savingSubtitle: "Menyimpan perubahan pendidikan Anda.",
    offlineFormSubtitle: "Perubahan Anda tersimpan di sini sampai koneksi kembali.",
    offlineBannerTitle: "Tidak ada koneksi internet",
    offlineBannerBody: "Sambungkan kembali sebelum menyimpan.",
    keepRecord: "Simpan catatan",
    deleteShort: "Hapus",
    labelInstitution: "Sekolah",
    labelDegree: "Gelar",
    labelCountry: "Negara",
    labelFieldOfStudy: "Bidang studi",
    labelStartYear: "Tahun mulai",
    labelEndYear: "Tahun selesai",
    labelDescription: "Deskripsi · Opsional",
    saveEducation: "Simpan pendidikan",
    deleteEducation: "Hapus pendidikan",
    saving: "Menyimpan…",
    schoolError: "Masukkan sekolah atau institusi.",
    startYearError: "Tahun mulai tidak boleh setelah tahun selesai.",
    emptySubtitle: "Tambahkan pendidikan yang dipakai di profil karier dan CV Anda.",
    emptyTitle: "Belum ada pendidikan yang ditambahkan",
    emptyBody: "Tambahkan sekolah, universitas, kursus, atau program vokasi.",
    offlineTitle: "Anda sedang offline",
    offlineBody: "Menampilkan catatan pendidikan dari cache.",
    saveFailedSubtitle: "Perubahan pendidikan Anda belum tersimpan.",
    saveFailedTitle: "Tidak dapat menyimpan pendidikan Anda.",
    saveFailedBody: "Perubahan Anda masih ada di sini.",
    trySavingAgain: "Coba simpan lagi",
    tryAgain: "Coba lagi",
    placeholderSchool: "Sekolah atau universitas",
    placeholderDegree: "Gelar",
    placeholderFieldOfStudy: "Bidang studi",
    placeholderCountry: "Negara",
    placeholderStartYear: "Tahun mulai",
    placeholderEndYear: "Tahun selesai",
    unsavedTitle: "Buang perubahan pendidikan?",
    unsavedBody: "Perubahan pendidikan yang belum disimpan akan hilang.",
    keepEditing: "Lanjut mengedit",
    discardChanges: "Buang perubahan",
    deleteConfirmTitle: "Hapus entri pendidikan ini?",
    deleteConfirmBody:
      "Ini menghapus catatan pendidikan yang Anda tambahkan sendiri dari profil karier Anda.",
  },
  ja: {
    backLink: "キャリア & CV",
    title: "学歴",
    subtitle: "キャリアプロフィールとCVに表示する学歴を管理します。",
    addEducation: "学歴を追加",
    editTitle: "学歴を編集",
    editSubtitle: "学歴の記録を更新します。",
    addTitle: "学歴を追加",
    addSubtitle: "持ち運べるキャリアプロフィールに学歴を追加します。",
    errorSubtitle: "保存する前に、ハイライトされた項目を修正してください。",
    savingTitle: "学歴を保存中",
    savingSubtitle: "学歴の変更を保存しています。",
    offlineFormSubtitle: "再接続するまで編集内容はここに保持されます。",
    offlineBannerTitle: "インターネット接続がありません",
    offlineBannerBody: "保存する前に再接続してください。",
    keepRecord: "記録を残す",
    deleteShort: "削除",
    labelInstitution: "学校",
    labelDegree: "学位",
    labelCountry: "国",
    labelFieldOfStudy: "専攻分野",
    labelStartYear: "開始年",
    labelEndYear: "修了年",
    labelDescription: "説明 · 任意",
    saveEducation: "学歴を保存",
    deleteEducation: "学歴を削除",
    saving: "保存中…",
    schoolError: "学校または教育機関を入力してください。",
    startYearError: "開始年は修了年より後にはできません。",
    emptySubtitle: "キャリアプロフィールとCVで使う学歴を追加します。",
    emptyTitle: "学歴はまだ追加されていません",
    emptyBody: "学校、大学、コース、職業訓練プログラムを追加してください。",
    offlineTitle: "オフラインです",
    offlineBody: "キャッシュされた学歴を表示しています。",
    saveFailedSubtitle: "学歴の変更は保存されていません。",
    saveFailedTitle: "学歴を保存できませんでした。",
    saveFailedBody: "編集内容はここに残っています。",
    trySavingAgain: "もう一度保存する",
    tryAgain: "再試行",
    placeholderSchool: "学校または大学",
    placeholderDegree: "学位",
    placeholderFieldOfStudy: "専攻分野",
    placeholderCountry: "国",
    placeholderStartYear: "開始年",
    placeholderEndYear: "修了年",
    unsavedTitle: "学歴の変更を破棄しますか？",
    unsavedBody: "未保存の学歴の編集内容は失われます。",
    keepEditing: "編集を続ける",
    discardChanges: "変更を破棄",
    deleteConfirmTitle: "この学歴を削除しますか？",
    deleteConfirmBody:
      "自分で追加した学歴の記録がキャリアプロフィールから削除されます。",
  },
});
