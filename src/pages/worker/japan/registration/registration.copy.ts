import { defineSectionCopy } from "@/i18n/copy";

export type RegistrationStatusKey = "notStarted" | "inProgress" | "registered";

export interface RegistrationCopy {
  japanPreparation: string;
  pageTitle: string;
  pageSubtitle: string;
  status: Record<RegistrationStatusKey, string>;
  municipalityLabel: string;
  moveInLabel: string;
  registeredOnLabel: string;
  privacyNote: string;
  notStartedTitle: string;
  notStartedBody: string;
  notStartedAction: string;
  editSubtitle: string;
  /** W-35E `628:685` page subtitle. */
  saveFailedSubtitle: string;
  /** W-35D `628:472` / WD-35D `1017:1349` page subtitle. */
  savingSubtitle: string;
  /** W-35F `628:536` / WD-35F `1017:1516` page subtitle. */
  offlineSubtitle: string;
  addTitle: string;
  addSubtitle: string;
  fieldMunicipality: string;
  fieldMoveIn: string;
  fieldRegisteredOn: string;
  fieldStatus: string;
  saveRegistration: string;
  savingEllipsis: string;
  trySavingAgain: string;
  validationMunicipality: string;
  saveFailedTitle: string;
  saveFailedBody: string;
  offlineTitle: string;
  offlineBody: string;
  statusSheetTitle: string;
  statusSheetBody: string;
  moveInSheetTitle: string;
  moveInSheetBody: string;
  registeredSheetTitle: string;
  registeredSheetBody: string;
  registeredSheetOptional: string;
  discardEditTitle: string;
  discardEditBody: string;
  discardAddTitle: string;
  discardAddBody: string;
  keepEditing: string;
  discardChanges: string;
}

export const REGISTRATION_COPY = defineSectionCopy<RegistrationCopy>({
  en: {
    japanPreparation: "Japan preparation",
    pageTitle: "Resident registration",
    pageSubtitle: "Keep a private record of your local registration status.",
    status: {
      notStarted: "Not started",
      inProgress: "In progress",
      registered: "Registered",
    },
    municipalityLabel: "Municipality / area",
    moveInLabel: "Move-in date",
    registeredOnLabel: "Registered on",
    privacyNote:
      "Your full residential address belongs in private profile/documents, not this summary.",
    notStartedTitle: "Track resident registration",
    notStartedBody:
      "Save the municipality/area, move-in date and your completion date for your own record.",
    notStartedAction: "Add registration status",
    editSubtitle: "Update your saved local registration record.",
    saveFailedSubtitle: "Your changes were not saved.",
    savingSubtitle: "Saving your registration status.",
    offlineSubtitle: "Your edits stay here while you reconnect.",
    addTitle: "Add resident registration",
    addSubtitle: "Add your own local registration record.",
    fieldMunicipality: "MUNICIPALITY / AREA",
    fieldMoveIn: "MOVE-IN DATE",
    fieldRegisteredOn: "REGISTERED ON · OPTIONAL",
    fieldStatus: "STATUS",
    saveRegistration: "Save registration",
    savingEllipsis: "Saving…",
    trySavingAgain: "Try saving again",
    validationMunicipality: "Enter a municipality or area.",
    saveFailedTitle: "Couldn’t save registration",
    saveFailedBody: "Your edits are still here.",
    offlineTitle: "No internet connection",
    offlineBody: "Reconnect before saving.",
    statusSheetTitle: "Registration status",
    statusSheetBody:
      "Choose the status that matches your registration progress.",
    moveInSheetTitle: "Move-in date",
    moveInSheetBody: "Enter the actual date you moved into this municipality.",
    registeredSheetTitle: "Registered on",
    registeredSheetBody:
      "Enter the actual date your resident registration was completed.",
    registeredSheetOptional:
      "Optional — leave blank if you have not registered yet.",
    discardEditTitle: "Discard registration changes?",
    discardEditBody: "Your unsaved local-registration edits will be lost.",
    discardAddTitle: "Discard new registration?",
    discardAddBody: "The registration record you started adding will be lost.",
    keepEditing: "Keep editing",
    discardChanges: "Discard changes",
  },
  id: {
    japanPreparation: "Persiapan Jepang",
    pageTitle: "Registrasi penduduk",
    pageSubtitle:
      "Simpan catatan pribadi tentang status registrasi lokal Anda.",
    status: {
      notStarted: "Belum dimulai",
      inProgress: "Sedang berjalan",
      registered: "Terdaftar",
    },
    municipalityLabel: "Kotamadya / area",
    moveInLabel: "Tanggal pindah",
    registeredOnLabel: "Terdaftar pada",
    privacyNote:
      "Alamat tempat tinggal lengkap Anda disimpan di profil/dokumen pribadi, bukan di ringkasan ini.",
    notStartedTitle: "Catat registrasi penduduk",
    notStartedBody:
      "Simpan kotamadya/area, tanggal pindah, dan tanggal penyelesaian untuk catatan Anda sendiri.",
    notStartedAction: "Tambah status registrasi",
    editSubtitle: "Perbarui catatan registrasi lokal yang tersimpan.",
    saveFailedSubtitle: "Perubahan Anda belum tersimpan.",
    savingSubtitle: "Menyimpan status registrasi Anda.",
    offlineSubtitle:
      "Perubahan Anda tersimpan di sini sampai Anda terhubung lagi.",
    addTitle: "Tambah registrasi penduduk",
    addSubtitle: "Tambahkan catatan registrasi lokal Anda sendiri.",
    fieldMunicipality: "KOTAMADYA / AREA",
    fieldMoveIn: "TANGGAL PINDAH",
    fieldRegisteredOn: "TERDAFTAR PADA · OPSIONAL",
    fieldStatus: "STATUS",
    saveRegistration: "Simpan registrasi",
    savingEllipsis: "Menyimpan…",
    trySavingAgain: "Coba simpan lagi",
    validationMunicipality: "Masukkan kotamadya atau area.",
    saveFailedTitle: "Registrasi tidak dapat disimpan",
    saveFailedBody: "Perubahan Anda masih ada di sini.",
    offlineTitle: "Tidak ada koneksi internet",
    offlineBody: "Sambungkan kembali sebelum menyimpan.",
    statusSheetTitle: "Status registrasi",
    statusSheetBody:
      "Pilih status yang sesuai dengan progres registrasi Anda.",
    moveInSheetTitle: "Tanggal pindah",
    moveInSheetBody:
      "Masukkan tanggal Anda benar-benar pindah ke kotamadya ini.",
    registeredSheetTitle: "Terdaftar pada",
    registeredSheetBody:
      "Masukkan tanggal registrasi penduduk Anda benar-benar selesai.",
    registeredSheetOptional:
      "Opsional — kosongkan jika Anda belum terdaftar.",
    discardEditTitle: "Buang perubahan registrasi?",
    discardEditBody:
      "Perubahan registrasi lokal yang belum disimpan akan hilang.",
    discardAddTitle: "Buang registrasi baru?",
    discardAddBody:
      "Catatan registrasi yang mulai Anda tambahkan akan hilang.",
    keepEditing: "Lanjut mengedit",
    discardChanges: "Buang perubahan",
  },
  ja: {
    japanPreparation: "日本の準備",
    pageTitle: "住民登録",
    pageSubtitle: "地域での登録状況を自分だけの記録として残しましょう。",
    status: {
      notStarted: "未着手",
      inProgress: "手続き中",
      registered: "登録済み",
    },
    municipalityLabel: "市区町村 / エリア",
    moveInLabel: "転入日",
    registeredOnLabel: "登録日",
    privacyNote:
      "正確な住所は個人プロフィール/書類に保管するもので、この概要には含めません。",
    notStartedTitle: "住民登録を記録する",
    notStartedBody:
      "市区町村/エリア、転入日、完了日を自分の記録として保存します。",
    notStartedAction: "登録状況を追加",
    editSubtitle: "保存済みの住民登録記録を更新します。",
    saveFailedSubtitle: "変更は保存されませんでした。",
    savingSubtitle: "住民登録の状況を保存しています。",
    offlineSubtitle: "再接続するまで、編集内容はこの端末に保存されます。",
    addTitle: "住民登録を追加",
    addSubtitle: "自分の住民登録記録を追加します。",
    fieldMunicipality: "市区町村 / エリア",
    fieldMoveIn: "転入日",
    fieldRegisteredOn: "登録日 · 任意",
    fieldStatus: "ステータス",
    saveRegistration: "登録を保存",
    savingEllipsis: "保存中…",
    trySavingAgain: "もう一度保存する",
    validationMunicipality: "市区町村またはエリアを入力してください。",
    saveFailedTitle: "登録を保存できませんでした",
    saveFailedBody: "編集内容はここに残っています。",
    offlineTitle: "インターネット接続がありません",
    offlineBody: "保存する前に再接続してください。",
    statusSheetTitle: "登録ステータス",
    statusSheetBody: "登録の進み具合に合うステータスを選んでください。",
    moveInSheetTitle: "転入日",
    moveInSheetBody: "この市区町村に実際に転入した日を入力してください。",
    registeredSheetTitle: "登録日",
    registeredSheetBody: "住民登録が完了した実際の日付を入力してください。",
    registeredSheetOptional:
      "任意 — まだ登録していない場合は空欄のままにしてください。",
    discardEditTitle: "登録の変更を破棄しますか？",
    discardEditBody: "保存されていない住民登録の編集内容は失われます。",
    discardAddTitle: "新しい登録を破棄しますか？",
    discardAddBody: "追加を始めた登録記録は失われます。",
    keepEditing: "編集を続ける",
    discardChanges: "変更を破棄",
  },
});
