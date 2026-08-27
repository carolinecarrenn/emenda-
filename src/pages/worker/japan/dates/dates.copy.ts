import { defineSectionCopy } from "@/i18n/copy";

export interface DatesCopy {
  japanPreparation: string;
  pageTitle: string;
  pageSubtitle: string;
  linkedTitle: string;
  linkedMeta: string;
  manage: string;
  personalReminder: string;
  addImportantDate: string;
  remindersNote: string;
  subtitleEmpty: string;
  emptyTitle: string;
  emptyBody: string;
  addTitle: string;
  addSubtitle: string;
  subtitleOffline: string;
  /** W-36F `628:937` / WD-36F `1017:2123` swap the form subtitle. */
  subtitleSaveFailed: string;
  /** W-36H `628:1001` / W-36J `638:206` head the unsaved-changes frames
   *  with the edit title and this line. */
  subtitleUnsaved: string;
  /** W-36E `628:905` / W-36G `628:969` swap the form subtitle. */
  subtitleSaving: string;
  editTitle: string;
  fieldTitle: string;
  fieldDate: string;
  fieldRemind: string;
  fieldNote: string;
  saveImportantDate: string;
  deleteReminder: string;
  savingEllipsis: string;
  trySavingAgain: string;
  validationTitle: string;
  validationDate: string;
  saveFailedTitle: string;
  saveFailedBody: string;
  offlineTitle: string;
  offlineBody: string;
  datePickerTitle: string;
  datePickerBody: string;
  remindSheetTitle: string;
  remindSheetBody: string;
  remindOnDate: string;
  /** "{n} days before" template — used for presets and custom values. */
  daysBeforeTemplate: string;
  customReminderLabel: string;
  customSuffix: string;
  useCustomReminder: string;
  deleteTitle: string;
  deleteSubtitle: string;
  deleteConfirmTitle: string;
  deleteConfirmBody: string;
  keepReminder: string;
  discardEditTitle: string;
  discardEditBody: string;
  discardAddTitle: string;
  discardAddBody: string;
  keepEditing: string;
  discardChanges: string;
  notifOffTitle: string;
  notifOffBody: string;
  managePermission: string;
}

export const DATES_COPY = defineSectionCopy<DatesCopy>({
  en: {
    japanPreparation: "Japan preparation",
    pageTitle: "Important dates",
    pageSubtitle: "Keep private reminders for residence and Japan procedures.",
    linkedTitle: "Residence status expiry",
    linkedMeta: "Linked to Residence status · 90 days before",
    manage: "Manage",
    personalReminder: "Personal reminder",
    addImportantDate: "Add important date",
    remindersNote:
      "Reminders are personal planning tools and do not change official deadlines.",
    subtitleEmpty: "No personal reminders have been added yet.",
    emptyTitle: "Add an important date",
    emptyBody: "Track an expiry, appointment or personal follow-up date.",
    addTitle: "Add important date",
    addSubtitle: "Create a personal reminder for a date you want to track.",
    subtitleOffline: "Your reminder stays here while you reconnect.",
    subtitleSaveFailed: "Your reminder was not saved.",
    subtitleUnsaved: "Your reminder edits have not been saved yet.",
    subtitleSaving: "Saving your reminder.",
    editTitle: "Edit important date",
    fieldTitle: "TITLE",
    fieldDate: "DATE",
    fieldRemind: "REMIND ME",
    fieldNote: "NOTE · OPTIONAL",
    saveImportantDate: "Save important date",
    deleteReminder: "Delete reminder",
    savingEllipsis: "Saving…",
    trySavingAgain: "Try saving again",
    validationTitle: "Enter a reminder title.",
    validationDate: "Enter a valid date.",
    saveFailedTitle: "Couldn’t save reminder",
    saveFailedBody: "Your edits are still here.",
    offlineTitle: "No internet connection",
    offlineBody: "Reconnect before saving.",
    datePickerTitle: "Important date",
    datePickerBody: "Enter any date you want EMENDA to track.",
    remindSheetTitle: "Remind me",
    remindSheetBody:
      "Choose a common reminder or set your own number of days before the date.",
    remindOnDate: "On the date",
    daysBeforeTemplate: "{n} days before",
    customReminderLabel: "CUSTOM REMINDER",
    customSuffix: "days before",
    useCustomReminder: "Use custom reminder",
    deleteTitle: "Delete important date",
    deleteSubtitle: "Remove this personal reminder?",
    deleteConfirmTitle: "Delete reminder?",
    deleteConfirmBody:
      "Deleting this reminder does not change your saved residence status.",
    keepReminder: "Keep reminder",
    discardEditTitle: "Discard reminder changes?",
    discardEditBody: "Your unsaved reminder edits will be lost.",
    discardAddTitle: "Discard new important date?",
    discardAddBody: "The important date you started adding will be lost.",
    keepEditing: "Keep editing",
    discardChanges: "Discard changes",
    notifOffTitle: "Reminder saved · notifications are off",
    notifOffBody:
      "The date is saved, but EMENDA cannot send a device reminder yet.",
    managePermission: "Manage permission",
  },
  id: {
    japanPreparation: "Persiapan Jepang",
    pageTitle: "Tanggal penting",
    pageSubtitle:
      "Simpan pengingat pribadi untuk izin tinggal dan prosedur di Jepang.",
    linkedTitle: "Masa berlaku status izin tinggal",
    linkedMeta: "Terhubung ke Status izin tinggal · 90 hari sebelumnya",
    manage: "Kelola",
    personalReminder: "Pengingat pribadi",
    addImportantDate: "Tambah tanggal penting",
    remindersNote:
      "Pengingat adalah alat perencanaan pribadi dan tidak mengubah tenggat resmi.",
    subtitleEmpty: "Belum ada pengingat pribadi yang ditambahkan.",
    emptyTitle: "Tambahkan tanggal penting",
    emptyBody:
      "Pantau tanggal kedaluwarsa, janji temu, atau tindak lanjut pribadi.",
    addTitle: "Tambah tanggal penting",
    subtitleOffline:
      "Pengingat Anda tersimpan di sini sampai Anda terhubung lagi.",
    addSubtitle:
      "Buat pengingat pribadi untuk tanggal yang ingin Anda pantau.",
    subtitleSaveFailed: "Pengingat Anda belum tersimpan.",
    subtitleUnsaved: "Perubahan pengingat Anda belum tersimpan.",
    subtitleSaving: "Menyimpan pengingat Anda.",
    editTitle: "Ubah tanggal penting",
    fieldTitle: "JUDUL",
    fieldDate: "TANGGAL",
    fieldRemind: "INGATKAN SAYA",
    fieldNote: "CATATAN · OPSIONAL",
    saveImportantDate: "Simpan tanggal penting",
    deleteReminder: "Hapus pengingat",
    savingEllipsis: "Menyimpan…",
    trySavingAgain: "Coba simpan lagi",
    validationTitle: "Masukkan judul pengingat.",
    validationDate: "Masukkan tanggal yang valid.",
    saveFailedTitle: "Pengingat tidak dapat disimpan",
    saveFailedBody: "Perubahan Anda masih ada di sini.",
    offlineTitle: "Tidak ada koneksi internet",
    offlineBody: "Sambungkan kembali sebelum menyimpan.",
    datePickerTitle: "Tanggal penting",
    datePickerBody:
      "Masukkan tanggal apa pun yang ingin dipantau EMENDA.",
    remindSheetTitle: "Ingatkan saya",
    remindSheetBody:
      "Pilih pengingat umum atau atur sendiri jumlah hari sebelum tanggal tersebut.",
    remindOnDate: "Pada tanggalnya",
    daysBeforeTemplate: "{n} hari sebelumnya",
    customReminderLabel: "PENGINGAT KUSTOM",
    customSuffix: "hari sebelumnya",
    useCustomReminder: "Gunakan pengingat kustom",
    deleteTitle: "Hapus tanggal penting",
    deleteSubtitle: "Hapus pengingat pribadi ini?",
    deleteConfirmTitle: "Hapus pengingat?",
    deleteConfirmBody:
      "Menghapus pengingat ini tidak mengubah status izin tinggal yang tersimpan.",
    keepReminder: "Pertahankan pengingat",
    discardEditTitle: "Buang perubahan pengingat?",
    discardEditBody:
      "Perubahan pengingat yang belum disimpan akan hilang.",
    discardAddTitle: "Buang tanggal penting baru?",
    discardAddBody:
      "Tanggal penting yang mulai Anda tambahkan akan hilang.",
    keepEditing: "Lanjut mengedit",
    discardChanges: "Buang perubahan",
    notifOffTitle: "Pengingat tersimpan · notifikasi nonaktif",
    notifOffBody:
      "Tanggal sudah tersimpan, tetapi EMENDA belum dapat mengirim pengingat ke perangkat.",
    managePermission: "Kelola izin",
  },
  ja: {
    japanPreparation: "日本の準備",
    pageTitle: "重要な日付",
    pageSubtitle:
      "在留と日本での手続きに関するプライベートなリマインダーを保存しましょう。",
    linkedTitle: "在留資格の有効期限",
    linkedMeta: "在留ステータスに連携 · 90日前",
    manage: "管理",
    personalReminder: "個人リマインダー",
    addImportantDate: "重要な日付を追加",
    remindersNote:
      "リマインダーは個人の計画ツールであり、公式な期限を変更するものではありません。",
    subtitleEmpty: "個人のリマインダーはまだ追加されていません。",
    emptyTitle: "重要な日付を追加する",
    emptyBody: "有効期限、予約、個人的なフォローアップの日付を管理します。",
    addTitle: "重要な日付を追加",
    addSubtitle: "追跡したい日付の個人リマインダーを作成します。",
    subtitleOffline: "再接続するまで、リマインダーはこの端末に保存されます。",
    subtitleSaveFailed: "リマインダーは保存されませんでした。",
    subtitleUnsaved: "リマインダーの編集内容はまだ保存されていません。",
    subtitleSaving: "リマインダーを保存しています。",
    editTitle: "重要な日付を編集",
    fieldTitle: "タイトル",
    fieldDate: "日付",
    fieldRemind: "リマインド",
    fieldNote: "メモ · 任意",
    saveImportantDate: "重要な日付を保存",
    deleteReminder: "リマインダーを削除",
    savingEllipsis: "保存中…",
    trySavingAgain: "もう一度保存する",
    validationTitle: "リマインダーのタイトルを入力してください。",
    validationDate: "有効な日付を入力してください。",
    saveFailedTitle: "リマインダーを保存できませんでした",
    saveFailedBody: "編集内容はここに残っています。",
    offlineTitle: "インターネット接続がありません",
    offlineBody: "保存する前に再接続してください。",
    datePickerTitle: "重要な日付",
    datePickerBody: "EMENDAで管理したい日付を入力してください。",
    remindSheetTitle: "リマインド",
    remindSheetBody:
      "一般的なリマインダーを選ぶか、日付の何日前に通知するかを自分で設定してください。",
    remindOnDate: "当日",
    daysBeforeTemplate: "{n}日前",
    customReminderLabel: "カスタムリマインダー",
    customSuffix: "日前",
    useCustomReminder: "カスタムリマインダーを使用",
    deleteTitle: "重要な日付を削除",
    deleteSubtitle: "この個人リマインダーを削除しますか？",
    deleteConfirmTitle: "リマインダーを削除しますか？",
    deleteConfirmBody:
      "このリマインダーを削除しても、保存済みの在留ステータスは変わりません。",
    keepReminder: "リマインダーを残す",
    discardEditTitle: "リマインダーの変更を破棄しますか？",
    discardEditBody: "保存されていないリマインダーの編集内容は失われます。",
    discardAddTitle: "新しい重要な日付を破棄しますか？",
    discardAddBody: "追加を始めた重要な日付は失われます。",
    keepEditing: "編集を続ける",
    discardChanges: "変更を破棄",
    notifOffTitle: "リマインダー保存済み · 通知はオフです",
    notifOffBody:
      "日付は保存されましたが、EMENDAはまだ端末に通知を送れません。",
    managePermission: "権限を管理",
  },
});
