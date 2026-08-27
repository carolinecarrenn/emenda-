import { defineSectionCopy } from "@/i18n/copy";

/** Slugs with a per-task detail screen (Figma WD-34G..M). */
export const READINESS_DETAIL_SLUGS = [
  "health-insurance",
  "my-number",
  "bank-payment",
  "mobile-contact",
  "passport-identity",
  "arrival-address",
  "pension-tax",
] as const;
export type ReadinessDetailSlug = (typeof READINESS_DETAIL_SLUGS)[number];

interface TaskDetailCopy {
  pageTitle: string;
  title: string;
  body: string;
}

export interface ReadinessCopy {
  japanPreparation: string;
  pageTitle: string;
  pageSubtitle: string;
  /** Per-state page subtitles (W-34A `628:255`, W-34C `628:322`,
   *  W-34E `628:338`). */
  subtitleOutside: string;
  subtitleUpdating: string;
  subtitleOffline: string;
  /** W-34D `628:162` / WD-34D `1017:272`. */
  subtitleUpdateFailed: string;
  statusComplete: string;
  statusNeedsAction: string;
  statusAfterArrival: string;
  checklistNote: string;
  taskTitles: {
    residentRegistration: string;
    healthInsurance: string;
    myNumber: string;
    bankPayment: string;
    mobileContact: string;
    pensionTax: string;
    confirmPassport: string;
    confirmVisaPlan: string;
    arrivalAddress: string;
  };
  detailSubtitle: string;
  statusLabel: string;
  details: Record<ReadinessDetailSlug, TaskDetailCopy>;
  addNote: string;
  markComplete: string;
  markNotComplete: string;
  updatingTitle: string;
  updatingBody: string;
  updatingTag: string;
  updateFailedTitle: string;
  updateFailedBody: string;
  tryAgain: string;
  backToChecklist: string;
  offlineTitle: string;
  offlineBody: string;
  noteTitle: string;
  noteSubtitle: string;
  noteSubtitleOffline: string;
  noteSubtitleSaving: string;
  noteLabel: string;
  saveNote: string;
  savingEllipsis: string;
  trySavingAgain: string;
  saveWhenOnline: string;
  discardNoteTitle: string;
  discardNoteBody: string;
  keepEditing: string;
  discardChanges: string;
}

export const READINESS_COPY = defineSectionCopy<ReadinessCopy>({
  en: {
    japanPreparation: "Japan preparation",
    pageTitle: "Japan readiness",
    pageSubtitle: "Track key setup tasks for living and working in Japan.",
    subtitleOutside:
      "Prepare before arrival and preview your first local tasks.",
    subtitleUpdating: "Updating your checklist.",
    subtitleOffline: "Saved checklist items are still available offline.",
    subtitleUpdateFailed: "Your checklist change was not saved.",
    statusComplete: "Complete",
    statusNeedsAction: "Needs action",
    statusAfterArrival: "After arrival",
    checklistNote:
      "Checklist status is your own planning record, not proof of government completion.",
    taskTitles: {
      residentRegistration: "Resident registration",
      healthInsurance: "Health insurance setup",
      myNumber: "My Number setup",
      bankPayment: "Bank / payment setup",
      mobileContact: "Mobile / contact setup",
      pensionTax: "Pension / tax setup",
      confirmPassport: "Confirm passport / identity",
      confirmVisaPlan: "Confirm residence / visa plan",
      arrivalAddress: "Arrival address",
    },
    detailSubtitle: "Track this task for your own preparation.",
    statusLabel: "STATUS",
    details: {
      "health-insurance": {
        pageTitle: "Health insurance setup",
        title: "Enroll in the appropriate health-insurance system",
        body: "Keep your completion status and optional note here. Check your municipality or employer guidance for the exact process.",
      },
      "my-number": {
        pageTitle: "My Number setup",
        title: "Confirm your My Number notification / card steps",
        body: "Track the steps you need after residence registration. Keep sensitive numbers out of this checklist note.",
      },
      "bank-payment": {
        pageTitle: "Bank / payment setup",
        title: "Prepare a bank or payment method you can use in Japan",
        body: "Track whether you have the identity/address documents a provider asks for.",
      },
      "mobile-contact": {
        pageTitle: "Mobile / contact setup",
        title: "Set up a reachable phone number or contact method",
        body: "Track a reliable contact method for daily life, employers and local procedures.",
      },
      "passport-identity": {
        pageTitle: "Passport / identity",
        title: "Confirm your passport and identity details are ready",
        body: "Check expiry and document readiness before travel. Official identity data remains in your EMENDA ID.",
      },
      "arrival-address": {
        pageTitle: "Arrival address",
        title: "Confirm where you will stay after arriving in Japan",
        body: "Keep only the planning status here. Full private address belongs in Personal Profile / Documents.",
      },
      "pension-tax": {
        pageTitle: "Pension / tax setup",
        title: "Check pension and tax-related setup after arrival",
        body: "Use this as a planning reminder. Exact obligations depend on your situation and official guidance.",
      },
    },
    addNote: "Add note",
    markComplete: "Mark complete",
    markNotComplete: "Mark not complete",
    updatingTitle: "Saving task status…",
    updatingBody: "Keep EMENDA open for a moment.",
    updatingTag: "Updating…",
    updateFailedTitle: "Couldn’t update this task",
    updateFailedBody: "Your previous status is unchanged.",
    tryAgain: "Try again",
    backToChecklist: "Back to checklist",
    offlineTitle: "No internet connection",
    offlineBody: "Reconnect before changing task status.",
    noteTitle: "Task note",
    noteSubtitle: "Add a private note to your Japan-readiness task.",
    noteSubtitleOffline: "Your note stays here while you reconnect.",
    noteSubtitleSaving: "Saving your private task note.",
    noteLabel: "NOTE · OPTIONAL",
    saveNote: "Save note",
    savingEllipsis: "Saving…",
    trySavingAgain: "Try saving again",
    saveWhenOnline: "Save when online",
    discardNoteTitle: "Discard task-note changes?",
    discardNoteBody: "Your unsaved private task note will be lost.",
    keepEditing: "Keep editing",
    discardChanges: "Discard changes",
  },
  id: {
    japanPreparation: "Persiapan Jepang",
    pageTitle: "Kesiapan Jepang",
    pageSubtitle:
      "Pantau tugas persiapan utama untuk tinggal dan bekerja di Jepang.",
    subtitleOutside:
      "Bersiap sebelum tiba dan lihat pratinjau tugas awal Anda di Jepang.",
    subtitleUpdating: "Memperbarui daftar tugas Anda.",
    subtitleOffline: "Item daftar tugas tersimpan tetap tersedia offline.",
    subtitleUpdateFailed: "Perubahan daftar tugas Anda belum tersimpan.",
    statusComplete: "Selesai",
    statusNeedsAction: "Perlu tindakan",
    statusAfterArrival: "Setelah tiba",
    checklistNote:
      "Status daftar periksa adalah catatan perencanaan Anda sendiri, bukan bukti penyelesaian resmi pemerintah.",
    taskTitles: {
      residentRegistration: "Registrasi penduduk",
      healthInsurance: "Pengaturan asuransi kesehatan",
      myNumber: "Pengaturan My Number",
      bankPayment: "Pengaturan bank / pembayaran",
      mobileContact: "Pengaturan ponsel / kontak",
      pensionTax: "Pengaturan pensiun / pajak",
      confirmPassport: "Konfirmasi paspor / identitas",
      confirmVisaPlan: "Konfirmasi rencana izin tinggal / visa",
      arrivalAddress: "Alamat kedatangan",
    },
    detailSubtitle: "Pantau tugas ini untuk persiapan Anda sendiri.",
    statusLabel: "STATUS",
    details: {
      "health-insurance": {
        pageTitle: "Pengaturan asuransi kesehatan",
        title: "Daftar ke sistem asuransi kesehatan yang sesuai",
        body: "Simpan status penyelesaian dan catatan opsional di sini. Periksa panduan kotamadya atau pemberi kerja Anda untuk proses pastinya.",
      },
      "my-number": {
        pageTitle: "Pengaturan My Number",
        title: "Konfirmasi langkah pemberitahuan / kartu My Number Anda",
        body: "Pantau langkah yang Anda perlukan setelah registrasi penduduk. Jangan simpan nomor sensitif di catatan daftar periksa ini.",
      },
      "bank-payment": {
        pageTitle: "Pengaturan bank / pembayaran",
        title: "Siapkan bank atau metode pembayaran yang dapat dipakai di Jepang",
        body: "Pantau apakah Anda memiliki dokumen identitas/alamat yang diminta penyedia layanan.",
      },
      "mobile-contact": {
        pageTitle: "Pengaturan ponsel / kontak",
        title: "Siapkan nomor telepon atau metode kontak yang dapat dihubungi",
        body: "Pantau metode kontak yang andal untuk kehidupan sehari-hari, pemberi kerja, dan prosedur setempat.",
      },
      "passport-identity": {
        pageTitle: "Paspor / identitas",
        title: "Pastikan paspor dan detail identitas Anda siap",
        body: "Periksa masa berlaku dan kesiapan dokumen sebelum perjalanan. Data identitas resmi tetap tersimpan di EMENDA ID Anda.",
      },
      "arrival-address": {
        pageTitle: "Alamat kedatangan",
        title: "Konfirmasi tempat tinggal Anda setelah tiba di Jepang",
        body: "Simpan hanya status perencanaan di sini. Alamat pribadi lengkap disimpan di Profil Pribadi / Dokumen.",
      },
      "pension-tax": {
        pageTitle: "Pengaturan pensiun / pajak",
        title: "Periksa pengaturan pensiun dan pajak setelah tiba",
        body: "Gunakan ini sebagai pengingat perencanaan. Kewajiban pasti tergantung pada situasi Anda dan panduan resmi.",
      },
    },
    addNote: "Tambah catatan",
    markComplete: "Tandai selesai",
    markNotComplete: "Tandai belum selesai",
    updatingTitle: "Menyimpan status tugas…",
    updatingBody: "Biarkan EMENDA tetap terbuka sebentar.",
    updatingTag: "Memperbarui…",
    updateFailedTitle: "Tugas ini tidak dapat diperbarui",
    updateFailedBody: "Status Anda sebelumnya tidak berubah.",
    tryAgain: "Coba lagi",
    backToChecklist: "Kembali ke daftar periksa",
    offlineTitle: "Tidak ada koneksi internet",
    offlineBody: "Sambungkan kembali sebelum mengubah status tugas.",
    noteTitle: "Catatan tugas",
    noteSubtitle: "Tambahkan catatan pribadi ke tugas kesiapan Jepang Anda.",
    noteSubtitleOffline:
      "Catatan Anda tersimpan di sini sampai Anda terhubung lagi.",
    noteSubtitleSaving: "Menyimpan catatan tugas pribadi Anda.",
    noteLabel: "CATATAN · OPSIONAL",
    saveNote: "Simpan catatan",
    savingEllipsis: "Menyimpan…",
    trySavingAgain: "Coba simpan lagi",
    saveWhenOnline: "Simpan saat online",
    discardNoteTitle: "Buang perubahan catatan tugas?",
    discardNoteBody:
      "Catatan tugas pribadi yang belum disimpan akan hilang.",
    keepEditing: "Lanjut mengedit",
    discardChanges: "Buang perubahan",
  },
  ja: {
    japanPreparation: "日本の準備",
    pageTitle: "日本での準備状況",
    pageSubtitle: "日本で暮らし働くための主要な準備タスクを管理しましょう。",
    subtitleOutside: "渡航前の準備と、到着後の最初のタスクを確認しましょう。",
    subtitleUpdating: "チェックリストを更新しています。",
    subtitleOffline: "保存済みのチェックリスト項目はオフラインでも表示できます。",
    subtitleUpdateFailed: "チェックリストの変更は保存されませんでした。",
    statusComplete: "完了",
    statusNeedsAction: "要対応",
    statusAfterArrival: "到着後",
    checklistNote:
      "チェックリストの状態はあなた自身の計画記録であり、行政手続き完了の証明ではありません。",
    taskTitles: {
      residentRegistration: "住民登録",
      healthInsurance: "健康保険の手続き",
      myNumber: "マイナンバーの手続き",
      bankPayment: "銀行 / 支払いの準備",
      mobileContact: "携帯 / 連絡手段の準備",
      pensionTax: "年金 / 税金の手続き",
      confirmPassport: "パスポート / 本人確認の確認",
      confirmVisaPlan: "在留 / ビザ計画の確認",
      arrivalAddress: "到着後の住所",
    },
    detailSubtitle: "自分の準備のためにこのタスクを管理します。",
    statusLabel: "ステータス",
    details: {
      "health-insurance": {
        pageTitle: "健康保険の手続き",
        title: "適切な健康保険制度に加入する",
        body: "完了状況と任意のメモをここに保存します。正確な手続きは市区町村または雇用主の案内で確認してください。",
      },
      "my-number": {
        pageTitle: "マイナンバーの手続き",
        title: "マイナンバー通知 / カードの手順を確認する",
        body: "住民登録後に必要な手順を管理します。機微な番号はこのチェックリストのメモに残さないでください。",
      },
      "bank-payment": {
        pageTitle: "銀行 / 支払いの準備",
        title: "日本で使える銀行または支払い方法を準備する",
        body: "提供事業者が求める本人確認/住所の書類が揃っているか管理します。",
      },
      "mobile-contact": {
        pageTitle: "携帯 / 連絡手段の準備",
        title: "連絡のつく電話番号や連絡手段を用意する",
        body: "日常生活・雇用主・地域の手続きに使える確実な連絡手段を管理します。",
      },
      "passport-identity": {
        pageTitle: "パスポート / 本人確認",
        title: "パスポートと本人確認情報の準備を確認する",
        body: "渡航前に有効期限と書類の準備状況を確認しましょう。正式な本人確認データはEMENDA IDに保管されます。",
      },
      "arrival-address": {
        pageTitle: "到着後の住所",
        title: "日本到着後の滞在先を確認する",
        body: "ここには計画上の状態のみを保存します。正確な住所は個人プロフィール / 書類に保管してください。",
      },
      "pension-tax": {
        pageTitle: "年金 / 税金の手続き",
        title: "到着後の年金・税金関連の手続きを確認する",
        body: "計画のためのリマインダーとして使ってください。正確な義務は状況と公式の案内によって異なります。",
      },
    },
    addNote: "メモを追加",
    markComplete: "完了にする",
    markNotComplete: "未完了にする",
    updatingTitle: "タスク状態を保存中…",
    updatingBody: "しばらくEMENDAを開いたままにしてください。",
    updatingTag: "更新中…",
    updateFailedTitle: "このタスクを更新できませんでした",
    updateFailedBody: "以前の状態は変更されていません。",
    tryAgain: "もう一度試す",
    backToChecklist: "チェックリストに戻る",
    offlineTitle: "インターネット接続がありません",
    offlineBody: "タスク状態を変更する前に再接続してください。",
    noteTitle: "タスクメモ",
    noteSubtitle: "日本準備タスクにプライベートなメモを追加します。",
    noteSubtitleOffline: "再接続するまで、メモはこの端末に保存されます。",
    noteSubtitleSaving: "プライベートなタスクメモを保存しています。",
    noteLabel: "メモ · 任意",
    saveNote: "メモを保存",
    savingEllipsis: "保存中…",
    trySavingAgain: "もう一度保存する",
    saveWhenOnline: "オンライン時に保存",
    discardNoteTitle: "タスクメモの変更を破棄しますか？",
    discardNoteBody: "保存されていないプライベートなタスクメモは失われます。",
    keepEditing: "編集を続ける",
    discardChanges: "変更を破棄",
  },
});
