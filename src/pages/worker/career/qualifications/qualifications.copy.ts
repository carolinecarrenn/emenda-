import { defineSectionCopy } from "@/i18n/copy";

/** Copy for /worker/career/qualifications (Figma WD-28 A–R · mobile W-28).
 *  EN strings verbatim from the fetched WD-28 / 28B / 28E / 28N frames and
 *  the base screenshot; unlabeled-variant copy follows the state patterns. */
export interface QualificationsCopy {
  backLink: string;
  title: string;
  subtitle: string;
  eyebrowExternal: string;
  eyebrowCompany: string;
  eyebrowEmployerVerified: string;
  addedByYou: string;
  proofAttached: string;
  internalQualification: string;
  companyIssuedRecord: string;
  completedOn: (date: string) => string;
  verifiedBy: (employer: string) => string;
  addButton: string;
  selfAddedNote: string;
  /* add / edit form */
  addTitle: string;
  addSubtitle: string;
  editTitle: string;
  editSubtitle: string;
  labelRecordType: string;
  labelName: string;
  labelIssuer: string;
  labelIssuedDate: string;
  labelExpiryDate: string;
  labelProof: string;
  addProof: string;
  proofHelper: string;
  saveRecord: string;
  saving: string;
  removeRecord: string;
  recordTypeExternal: string;
  recordTypeCompany: string;
  recordTypeTraining: string;
  recordTypeCertification: string;
  recordTypeOther: string;
  recordTypePlaceholder: string;
  recordTypeSheetTitle: string;
  recordTypeSheetSubtitle: string;
  /* proof upload */
  proofFileTitle: string;
  proofFileMeta: string;
  chooseFile: string;
  uploadingProof: string;
  removeProofLabel: string;
  uploadFailedTitle: string;
  uploadFailedBody: string;
  retryUpload: string;
  retryProofUpload: string;
  uploadFailedHelper: string;
  unsupportedTitle: string;
  unsupportedBody: string;
  /* employer credential */
  credentialAvailableTitle: string;
  credentialAvailableBody: (employer: string, training: string) => string;
  reviewTitle: string;
  reviewSubtitle: (employer: string) => string;
  labelType: string;
  labelTraining: string;
  labelProvider: string;
  labelCompleted: string;
  typeValueEmployerTraining: string;
  sourceNote: (employer: string) => string;
  addToRecord: string;
  notNow: string;
  reportIncorrect: string;
  /* report issue */
  reportTitle: string;
  reportSubtitle: string;
  whatIncorrect: string;
  reasonTrainingName: string;
  reasonCompletionDate: string;
  reasonNotMyTraining: string;
  reasonOther: string;
  noteLabel: string;
  notePlaceholder: string;
  submitIssue: string;
  issueSubmittedTitle: string;
  issueSubmittedBody: string;
  backToQualifications: string;
  /* remove / states */
  removeConfirmTitle: string;
  removeConfirmBody: (name: string) => string;
  emptySubtitle: string;
  emptyTitle: string;
  emptyBody: string;
  emptyHint: string;
  savingSubtitle: string;
  saveFailedSubtitle: string;
  trySavingAgain: string;
  offlineFormSubtitle: string;
  offlineBannerTitle: string;
  offlineBannerBody: string;
  offlineBannerRetry: string;
  keepRecord: string;
  removeShort: string;
  summaryProofAttached: string;
  summaryNotVerified: string;
  summarySelfAdded: string;
  proofReady: (file: string) => string;
  chooseAnotherFile: string;
  unsupportedLine: string;
  addProofSheetTitle: string;
  addProofSheetBody: string;
  choosePhoto: string;
  reportReceivedTitle: string;
  reportReceivedBody: string;
  offlineTitle: string;
  offlineBody: string;
  saveFailedTitle: string;
  saveFailedBody: string;
  tryAgain: string;
  unsavedTitle: string;
  unsavedBody: string;
  keepEditing: string;
  discardChanges: string;
}

export const QUALIFICATIONS_COPY = defineSectionCopy<QualificationsCopy>({
  en: {
    backLink: "Career & CV",
    title: "Qualifications & Training",
    subtitle:
      "Keep qualifications, licenses and completed training in your portable career record.",
    eyebrowExternal: "External qualification",
    eyebrowCompany: "Company-issued qualification",
    eyebrowEmployerVerified: "Employer-verified training",
    addedByYou: "Added by you",
    proofAttached: "Proof attached",
    internalQualification: "Internal qualification",
    companyIssuedRecord: "Company-issued record",
    completedOn: (date) => `Completed ${date}`,
    verifiedBy: (employer) => `Verified by ${employer}`,
    addButton: "Add qualification or training",
    selfAddedNote:
      "Self-added records are never shown as verified unless an issuer or connected employer confirms them.",
    addTitle: "Add qualification or training",
    addSubtitle:
      "Add a record yourself. Verified status can only come from an issuer or connected employer.",
    editTitle: "Edit qualification or training",
    editSubtitle: "You can edit records you added yourself.",
    labelRecordType: "Record type",
    labelName: "Name",
    labelIssuer: "Issuer / Provider",
    labelIssuedDate: "Issued / Completed date",
    labelExpiryDate: "Expiry date · Optional",
    labelProof: "Proof · Optional",
    addProof: "Add proof",
    proofHelper:
      "Attaching proof supports the record but does not make it verified.",
    saveRecord: "Save record",
    saving: "Saving…",
    removeRecord: "Remove record",
    recordTypeExternal: "External qualification / license",
    recordTypeCompany: "Company-issued qualification",
    recordTypeTraining: "Training completion",
    recordTypeCertification: "Certification",
    recordTypeOther: "Other qualification",
    recordTypePlaceholder: "Select qualification or training",
    recordTypeSheetTitle: "Select record type",
    recordTypeSheetSubtitle:
      "Choose how this self-added record should be categorized.",
    proofFileTitle: "Proof file",
    proofFileMeta: "PDF, JPG or PNG · up to 10 MB",
    chooseFile: "Choose file",
    uploadingProof: "Uploading proof…",
    removeProofLabel: "Remove",
    uploadFailedTitle: "Proof upload failed",
    uploadFailedBody:
      "The file did not upload. Check your connection and try again.",
    retryUpload: "Retry upload",
    retryProofUpload: "Try proof upload again",
    uploadFailedHelper:
      "Couldn’t upload proof. Your qualification details are still here.",
    unsupportedTitle: "Unsupported file",
    unsupportedBody:
      "This file type is not supported. Upload PDF, JPG or PNG.",
    credentialAvailableTitle: "Employer credential available",
    credentialAvailableBody: (employer, training) =>
      `${employer} recorded ${training} for you. Review it before it joins your career record.`,
    reviewTitle: "Review work credential",
    reviewSubtitle: (employer) =>
      `Confirm what ${employer} recorded before it becomes part of your portable career profile.`,
    labelType: "Type",
    labelTraining: "Training",
    labelProvider: "Provider",
    labelCompleted: "Completed",
    typeValueEmployerTraining: "Employer-verified training",
    sourceNote: (employer) =>
      `${employer} is the source of this verification. It is not presented as a national license unless an external licensing body issued it.`,
    addToRecord: "Add to my work record",
    notNow: "Not now",
    reportIncorrect: "Report incorrect information",
    reportTitle: "Report credential issue",
    reportSubtitle:
      "Tell EMENDA what looks wrong. This does not edit the employer record directly.",
    whatIncorrect: "What is incorrect?",
    reasonTrainingName: "Training name",
    reasonCompletionDate: "Completion date",
    reasonNotMyTraining: "This is not my training",
    reasonOther: "Other information",
    noteLabel: "Note · Optional",
    notePlaceholder: "Add context for EMENDA support.",
    submitIssue: "Submit issue",
    issueSubmittedTitle: "Issue submitted",
    issueSubmittedBody:
      "EMENDA recorded your concern without changing the employer credential.",
    backToQualifications: "Back to Qualifications & Training",
    removeConfirmTitle: "Remove this record?",
    removeConfirmBody: () =>
      "This removes only the self-added qualification or training record.",
    emptySubtitle:
      "Add qualifications, licenses or training you want to keep in your career record.",
    emptyTitle: "No qualifications or training yet",
    emptyBody:
      "Add your own qualification now. A certificate or proof file is optional.",
    emptyHint:
      "Employer-verified training can also appear here after you review and accept it.",
    savingSubtitle: "Saving this qualification or training record.",
    saveFailedSubtitle: "Your edits are still here.",
    trySavingAgain: "Try saving again",
    offlineFormSubtitle: "Your record stays here while you reconnect.",
    offlineBannerTitle: "No internet connection",
    offlineBannerBody: "Reconnect before saving.",
    offlineBannerRetry: "Retry",
    keepRecord: "Keep record",
    removeShort: "Remove",
    summaryProofAttached: "Proof attached",
    summaryNotVerified: "Not marked verified",
    summarySelfAdded: "External qualification · Self-added",
    proofReady: (file) => `${file} · Ready`,
    chooseAnotherFile: "Choose another file",
    unsupportedLine: "Unsupported file. Use PDF, JPG or PNG.",
    addProofSheetTitle: "Add proof",
    addProofSheetBody:
      "Attach proof if you have it. Proof is optional and does not make a record verified.",
    choosePhoto: "Choose photo",
    reportReceivedTitle: "Report received",
    reportReceivedBody:
      "The credential stays pending in your portable record until you choose what to do.",
    offlineTitle: "You're offline",
    offlineBody: "Showing cached qualifications and training.",
    saveFailedTitle: "Couldn’t save this record",
    saveFailedBody: "Try again. Nothing was lost.",
    tryAgain: "Try saving again",
    unsavedTitle: "Discard record changes?",
    unsavedBody:
      "Your unsaved qualification or training edits will be lost.",
    keepEditing: "Keep editing",
    discardChanges: "Discard changes",
  },
  id: {
    backLink: "Karier & CV",
    title: "Kualifikasi & Pelatihan",
    subtitle:
      "Simpan kualifikasi, lisensi, dan pelatihan yang selesai dalam catatan karier portabel Anda.",
    eyebrowExternal: "Kualifikasi eksternal",
    eyebrowCompany: "Kualifikasi dari perusahaan",
    eyebrowEmployerVerified: "Pelatihan terverifikasi pemberi kerja",
    addedByYou: "Ditambahkan oleh Anda",
    proofAttached: "Bukti terlampir",
    internalQualification: "Kualifikasi internal",
    companyIssuedRecord: "Catatan dari perusahaan",
    completedOn: (date) => `Selesai ${date}`,
    verifiedBy: (employer) => `Diverifikasi oleh ${employer}`,
    addButton: "Tambah kualifikasi atau pelatihan",
    selfAddedNote:
      "Catatan yang ditambahkan sendiri tidak pernah ditampilkan sebagai terverifikasi kecuali penerbit atau pemberi kerja yang terhubung mengonfirmasinya.",
    addTitle: "Tambah kualifikasi atau pelatihan",
    addSubtitle:
      "Tambahkan catatan sendiri. Status terverifikasi hanya dapat berasal dari penerbit atau pemberi kerja yang terhubung.",
    editTitle: "Ubah kualifikasi atau pelatihan",
    editSubtitle: "Perbarui catatan yang Anda tambahkan sendiri.",
    labelRecordType: "Jenis catatan",
    labelName: "Nama",
    labelIssuer: "Penerbit / Penyelenggara",
    labelIssuedDate: "Tanggal terbit / selesai",
    labelExpiryDate: "Tanggal kedaluwarsa · Opsional",
    labelProof: "Bukti · Opsional",
    addProof: "Tambah bukti",
    proofHelper:
      "Melampirkan bukti mendukung catatan tetapi tidak membuatnya terverifikasi.",
    saveRecord: "Simpan catatan",
    saving: "Menyimpan…",
    removeRecord: "Hapus catatan",
    recordTypeExternal: "Kualifikasi / lisensi eksternal",
    recordTypeCompany: "Kualifikasi dari perusahaan",
    recordTypeTraining: "Penyelesaian pelatihan",
    recordTypeCertification: "Sertifikasi",
    recordTypeOther: "Kualifikasi lainnya",
    recordTypePlaceholder: "Pilih kualifikasi atau pelatihan",
    recordTypeSheetTitle: "Pilih jenis catatan",
    recordTypeSheetSubtitle:
      "Pilih bagaimana catatan tambahan Anda ini dikategorikan.",
    proofFileTitle: "Berkas bukti",
    proofFileMeta: "PDF, JPG, atau PNG · hingga 10 MB",
    chooseFile: "Pilih berkas",
    uploadingProof: "Mengunggah bukti…",
    removeProofLabel: "Hapus",
    uploadFailedTitle: "Unggah bukti gagal",
    uploadFailedBody:
      "Berkas tidak terunggah. Periksa koneksi lalu coba lagi.",
    retryUpload: "Ulangi unggah",
    retryProofUpload: "Coba unggah bukti lagi",
    uploadFailedHelper:
      "Bukti gagal diunggah. Detail kualifikasi Anda masih tersimpan di sini.",
    unsupportedTitle: "Berkas tidak didukung",
    unsupportedBody:
      "Jenis berkas ini tidak didukung. Unggah PDF, JPG, atau PNG.",
    credentialAvailableTitle: "Kredensial pemberi kerja tersedia",
    credentialAvailableBody: (employer, training) =>
      `${employer} mencatat ${training} untuk Anda. Tinjau sebelum masuk ke catatan karier Anda.`,
    reviewTitle: "Tinjau kredensial kerja",
    reviewSubtitle: (employer) =>
      `Konfirmasi apa yang dicatat ${employer} sebelum menjadi bagian dari profil karier portabel Anda.`,
    labelType: "Jenis",
    labelTraining: "Pelatihan",
    labelProvider: "Penyelenggara",
    labelCompleted: "Selesai",
    typeValueEmployerTraining: "Pelatihan terverifikasi pemberi kerja",
    sourceNote: (employer) =>
      `${employer} adalah sumber verifikasi ini. Ini tidak ditampilkan sebagai lisensi nasional kecuali diterbitkan oleh lembaga lisensi eksternal.`,
    addToRecord: "Tambahkan ke catatan kerja saya",
    notNow: "Nanti saja",
    reportIncorrect: "Laporkan informasi yang salah",
    reportTitle: "Laporkan masalah kredensial",
    reportSubtitle:
      "Beri tahu EMENDA apa yang tampak salah. Ini tidak mengubah catatan pemberi kerja secara langsung.",
    whatIncorrect: "Apa yang salah?",
    reasonTrainingName: "Nama pelatihan",
    reasonCompletionDate: "Tanggal penyelesaian",
    reasonNotMyTraining: "Ini bukan pelatihan saya",
    reasonOther: "Informasi lainnya",
    noteLabel: "Catatan · Opsional",
    notePlaceholder: "Tambahkan konteks untuk dukungan EMENDA.",
    submitIssue: "Kirim laporan",
    issueSubmittedTitle: "Laporan terkirim",
    issueSubmittedBody:
      "Dukungan EMENDA akan meninjau laporan Anda. Catatan pemberi kerja tetap tidak berubah selama peninjauan berlangsung.",
    backToQualifications: "Kembali ke Kualifikasi & Pelatihan",
    removeConfirmTitle: "Hapus catatan ini?",
    removeConfirmBody: () =>
      "Ini hanya menghapus catatan kualifikasi atau pelatihan yang Anda tambahkan sendiri.",
    emptySubtitle:
      "Tambahkan kualifikasi, lisensi, atau pelatihan yang ingin Anda simpan di catatan karier.",
    emptyTitle: "Belum ada kualifikasi atau pelatihan",
    emptyBody:
      "Tambahkan kualifikasi Anda sendiri sekarang. Sertifikat atau berkas bukti bersifat opsional.",
    emptyHint:
      "Pelatihan terverifikasi pemberi kerja juga dapat muncul di sini setelah Anda meninjau dan menerimanya.",
    savingSubtitle: "Menyimpan catatan kualifikasi atau pelatihan ini.",
    saveFailedSubtitle: "Perubahan Anda masih ada di sini.",
    trySavingAgain: "Coba simpan lagi",
    offlineFormSubtitle: "Catatan Anda tersimpan di sini sampai koneksi kembali.",
    offlineBannerTitle: "Tidak ada koneksi internet",
    offlineBannerBody: "Sambungkan kembali sebelum menyimpan.",
    offlineBannerRetry: "Coba lagi",
    keepRecord: "Simpan catatan",
    removeShort: "Hapus",
    summaryProofAttached: "Bukti terlampir",
    summaryNotVerified: "Tidak ditandai terverifikasi",
    summarySelfAdded: "Kualifikasi eksternal · Ditambahkan sendiri",
    proofReady: (file) => `${file} · Siap`,
    chooseAnotherFile: "Pilih berkas lain",
    unsupportedLine: "Berkas tidak didukung. Gunakan PDF, JPG, atau PNG.",
    addProofSheetTitle: "Tambah bukti",
    addProofSheetBody:
      "Lampirkan bukti jika Anda punya. Bukti bersifat opsional dan tidak membuat catatan terverifikasi.",
    choosePhoto: "Pilih foto",
    reportReceivedTitle: "Laporan diterima",
    reportReceivedBody:
      "Kredensial tetap tertunda di catatan portabel Anda sampai Anda memutuskan tindakannya.",
    offlineTitle: "Anda sedang offline",
    offlineBody: "Menampilkan kualifikasi dan pelatihan dari cache.",
    saveFailedTitle: "Catatan ini tidak dapat disimpan",
    saveFailedBody: "Coba lagi. Tidak ada yang hilang.",
    tryAgain: "Coba simpan lagi",
    unsavedTitle: "Buang perubahan catatan?",
    unsavedBody:
      "Perubahan kualifikasi atau pelatihan yang belum disimpan akan hilang.",
    keepEditing: "Lanjut mengedit",
    discardChanges: "Buang perubahan",
  },
  ja: {
    backLink: "キャリア & CV",
    title: "資格・研修",
    subtitle:
      "資格・免許・修了した研修をポータブルなキャリア記録に保管します。",
    eyebrowExternal: "外部資格",
    eyebrowCompany: "会社発行の資格",
    eyebrowEmployerVerified: "雇用主確認済み研修",
    addedByYou: "本人追加",
    proofAttached: "証明書添付済み",
    internalQualification: "社内資格",
    companyIssuedRecord: "会社発行の記録",
    completedOn: (date) => `修了 ${date}`,
    verifiedBy: (employer) => `${employer} による確認済み`,
    addButton: "資格・研修を追加",
    selfAddedNote:
      "本人が追加した記録は、発行元または接続中の雇用主が確認しない限り、確認済みとして表示されることはありません。",
    addTitle: "資格・研修を追加",
    addSubtitle:
      "自分で記録を追加します。確認済みステータスは発行元または接続中の雇用主からのみ付与されます。",
    editTitle: "資格・研修を編集",
    editSubtitle: "自分で追加した記録を更新します。",
    labelRecordType: "記録の種類",
    labelName: "名称",
    labelIssuer: "発行元 / 提供元",
    labelIssuedDate: "発行日 / 修了日",
    labelExpiryDate: "有効期限 · 任意",
    labelProof: "証明書 · 任意",
    addProof: "証明書を追加",
    proofHelper:
      "証明書の添付は記録の裏付けにはなりますが、確認済みにはなりません。",
    saveRecord: "記録を保存",
    saving: "保存中…",
    removeRecord: "記録を削除",
    recordTypeExternal: "外部資格 / 免許",
    recordTypeCompany: "会社発行の資格",
    recordTypeTraining: "研修の修了",
    recordTypeCertification: "認定資格",
    recordTypeOther: "その他の資格",
    recordTypePlaceholder: "資格または研修を選択",
    recordTypeSheetTitle: "記録の種類を選択",
    recordTypeSheetSubtitle: "この本人追加の記録をどの種類に分類するか選んでください。",
    proofFileTitle: "証明書ファイル",
    proofFileMeta: "PDF・JPG・PNG · 最大10MB",
    chooseFile: "ファイルを選択",
    uploadingProof: "証明書をアップロード中…",
    removeProofLabel: "削除",
    uploadFailedTitle: "証明書のアップロードに失敗しました",
    uploadFailedBody:
      "ファイルはアップロードされていません。接続を確認して再試行してください。",
    retryUpload: "再アップロード",
    retryProofUpload: "証明書を再アップロード",
    uploadFailedHelper:
      "証明書をアップロードできませんでした。資格の入力内容は残っています。",
    unsupportedTitle: "対応していないファイルです",
    unsupportedBody:
      "このファイル形式には対応していません。PDF・JPG・PNGをアップロードしてください。",
    credentialAvailableTitle: "雇用主のクレデンシャルがあります",
    credentialAvailableBody: (employer, training) =>
      `${employer} があなたの「${training}」を記録しました。キャリア記録に追加する前に確認してください。`,
    reviewTitle: "職務クレデンシャルの確認",
    reviewSubtitle: (employer) =>
      `ポータブルなキャリアプロフィールに反映する前に、${employer} が記録した内容を確認してください。`,
    labelType: "種類",
    labelTraining: "研修",
    labelProvider: "提供元",
    labelCompleted: "修了日",
    typeValueEmployerTraining: "雇用主確認済み研修",
    sourceNote: (employer) =>
      `この確認の出所は ${employer} です。外部の資格発行機関が発行したものでない限り、国家資格として表示されることはありません。`,
    addToRecord: "職務記録に追加",
    notNow: "今はしない",
    reportIncorrect: "誤った情報を報告",
    reportTitle: "クレデンシャルの問題を報告",
    reportSubtitle:
      "何が誤っているかをEMENDAに伝えてください。雇用主の記録が直接編集されることはありません。",
    whatIncorrect: "何が誤っていますか？",
    reasonTrainingName: "研修名",
    reasonCompletionDate: "修了日",
    reasonNotMyTraining: "自分の研修ではない",
    reasonOther: "その他の情報",
    noteLabel: "メモ · 任意",
    notePlaceholder: "EMENDAサポートへの補足を追加してください。",
    submitIssue: "報告を送信",
    issueSubmittedTitle: "報告を送信しました",
    issueSubmittedBody:
      "EMENDAサポートが報告内容を確認します。確認が完了するまで雇用主の記録は変更されません。",
    backToQualifications: "資格・研修に戻る",
    removeConfirmTitle: "この記録を削除しますか？",
    removeConfirmBody: () =>
      "自分で追加した資格・研修の記録のみが削除されます。",
    emptySubtitle:
      "キャリア記録に残したい資格・免許・研修を追加してください。",
    emptyTitle: "資格・研修はまだありません",
    emptyBody:
      "まず自分の資格を追加しましょう。証明書や証跡ファイルは任意です。",
    emptyHint:
      "雇用主が確認した研修も、内容を確認して承認するとここに表示されます。",
    savingSubtitle: "この資格・研修の記録を保存しています。",
    saveFailedSubtitle: "編集内容はここに残っています。",
    trySavingAgain: "もう一度保存する",
    offlineFormSubtitle: "再接続するまで記録はここに保持されます。",
    offlineBannerTitle: "インターネット接続がありません",
    offlineBannerBody: "保存する前に再接続してください。",
    offlineBannerRetry: "再試行",
    keepRecord: "記録を残す",
    removeShort: "削除",
    summaryProofAttached: "証跡あり",
    summaryNotVerified: "確認済みではありません",
    summarySelfAdded: "外部資格 · 自己申告",
    proofReady: (file) => `${file} · 準備完了`,
    chooseAnotherFile: "別のファイルを選ぶ",
    unsupportedLine: "対応していないファイルです。PDF・JPG・PNG を使用してください。",
    addProofSheetTitle: "証跡を追加",
    addProofSheetBody:
      "証跡があれば添付してください。証跡は任意で、記録が確認済みになるわけではありません。",
    choosePhoto: "写真を選ぶ",
    reportReceivedTitle: "報告を受け付けました",
    reportReceivedBody:
      "対応を選ぶまで、この資格は持ち運べる記録の中で保留のままです。",
    offlineTitle: "オフラインです",
    offlineBody: "キャッシュされた資格・研修を表示しています。",
    saveFailedTitle: "この記録を保存できませんでした",
    saveFailedBody: "再試行してください。内容は失われていません。",
    tryAgain: "もう一度保存する",
    unsavedTitle: "記録の変更を破棄しますか？",
    unsavedBody: "未保存の資格・研修の変更は失われます。",
    keepEditing: "編集を続ける",
    discardChanges: "変更を破棄",
  },
});
