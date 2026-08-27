import { defineSectionCopy } from "@/i18n/copy";
import type { DocTypeKey } from "./documentsMock";

/** Section copy for 07 · Documents & Emergency Information
 *  (Figma WD-37..WD-40 / W-37..W-40). EN mirrors the mocks verbatim. */

export interface DocumentsCopy {
  shared: {
    headlessHome: string;
    myDocuments: string;
    offlineTitle: string;
    saving: string;
    keepEditing: string;
    discardChanges: string;
    leaveTitle: string;
  };
  hub: {
    title: string;
    subtitle: string;
    subtitleNeedsAttention: string;
    subtitleLoading: string;
    subtitleEmpty: string;
    subtitleOffline: string;
    subtitleLoadFailed: string;
    needsAttentionBanner: string; // {date} placeholder
    verifiedIdentitySource: string;
    linkedFromResidenceStatus: string;
    selfAdded: string;
    expires: string;
    addDocument: string;
    emergencyShortcutTitle: string;
    emergencyShortcutBody: string;
    emergencyShortcutBodyEmpty: string;
    privacyFootnote: string;
    emptyTitle: string;
    emptyBody: string;
    offlineBody: string;
    loadFailedTitle: string;
    loadFailedBody: string;
  };
  docType: Record<DocTypeKey, string>;
  add: {
    title: string;
    subtitle: string;
    labelType: string;
    labelName: string;
    labelNumber: string;
    labelIssueDate: string;
    labelExpiryDate: string;
    labelFile: string;
    labelNote: string;
    noFileSelected: string;
    noDate: string;
    noExpiry: string;
    save: string;
    nameError: string;
    fileError: string;
    typeOverlayTitle: string;
    typeOverlayHelper: string;
    issueDateOverlayTitle: string;
    expiryDateOverlayTitle: string;
    dateOverlayHelper: string;
    fileSourceOverlayTitle: string;
    fileSourceOverlayHelper: string;
    fileSourceCamera: string;
    fileSourcePhotos: string;
    fileSourceFiles: string;
    uploadingFile: string; // {file} placeholder
    fileUploadFailed: string;
    unsupportedSuffix: string;
    uploadFailed: string;
    unsupportedFile: string;
    permissionTitle: string;
    permissionSubtitle: string;
    permissionCardTitle: string;
    permissionBody: string;
    permissionSettings: string;
    permissionChooseFile: string;
    saveFailed: string;
    trySavingAgain: string;
    subtitleOffline: string;
    offlineBody: string;
    discardTitle: string;
    unsavedBody: string;
    existingVerifiedTitle: string;
    existingVerifiedSubtitle: string;
    existingVerifiedLabel: string;
    existingVerifiedBody: string;
    chooseAnotherType: string;
    savedPageTitle: string;
    savedPageSubtitle: string;
    savedTitle: string;
    savedBody: string;
    viewDocument: string;
    backToDocuments: string;
  };
  detail: {
    subtitleSelf: string;
    subtitleVerified: string;
    subtitleLinked: string;
    rowType: string;
    rowNumber: string;
    rowIssued: string;
    rowExpiry: string;
    rowNote: string;
    rowValidUntil: string;
    rowSource: string;
    passportRecord: string;
    residenceRecord: string;
    linkedFromEmendaId: string;
    linkedFromResidenceStatus: string;
    sourceVerifiedIdentity: string;
    sourceResidenceStatus: string;
    added: string;
    editDetails: string;
    replaceFile: string;
    deleteDocument: string;
    saveChanges: string;
    readOnlyTitle: string;
    readOnlyBody: string;
    reportIncorrect: string;
    deleteModalTitle: string;
    deleteModalBody: string;
    keepDocument: string;
    unsavedTitle: string;
    unsavedBody: string;
    editSaveFailed: string;
    editOfflineBody: string;
    offlineBody: string;
    replacing: string;
    replaceFailed: string;
    replacementRejected: string;
    fileReplacedTitle: string;
    fileReplacedBody: string;
    replaceSourceTitle: string;
    replaceSourceHelper: string;
    replacePermissionBody: string;
    filePreviewTitle: string;
    filePreviewBody: string;
    issueLabel: string;
    issuePlaceholder: string;
    issueSubmit: string;
    issueSubmitting: string;
    issueSubmitFailed: string;
    issueOfflineBody: string;
    issueSubmittedTitle: string;
    issueSubmittedBody: string;
    backToDocument: string;
    deletedTitle: string;
    deletedBody: string;
    backToDocuments: string;
    notFound: string;
    backDocumentDetail: string;
    backVerifiedDocument: string;
    editTitle: string;
    editSubtitle: string;
    labelPrivateNote: string;
    trySavingAgain: string;
    offlineSubtitle: string;
    replacingTitle: string;
    replacingSubtitle: string;
    replacingCardTitle: string;
    replacingHelper: string;
    issueRefNumber: string;
    issueRefValidUntil: string;
    replaceFailedTitle: string;
    replaceFailedSubtitle: string;
    tryAgain: string;
    rejectedTitle: string;
    rejectedSubtitle: string;
    rejectedCardTitle: string;
    rejectedMeta: string;
    chooseAnotherFile: string;
    replacePermissionTitle: string;
    replacePermissionSubtitle: string;
    replacePermissionCardTitle: string;
    replacePermissionSettings: string;
    chooseExistingFile: string;
    filePreviewSubtitle: string;
    issueSubtitle: string;
    issueNoteLabel: string;
    issueNotePlaceholder: string;
    issueSubmittedSubtitle: string;
    issueSubmittedPanelTitle: string;
    fileReplacedSubtitle: string;
    fileReplacedPanelTitle: string;
    deletedSubtitle: string;
    deletedPanelTitle: string;
    editSavingSubtitle: string;
    cachedPrefix: string;
    issueRecordLine: string; // {number} / {date} placeholders
    detailTypeOverlayHelper: string;
  };
  emergency: {
    title: string;
    subtitle: string;
    primaryContact: string;
    preferredLanguage: string;
    editButton: string;
    privacyTitle: string;
    privacyBody: string;
    removeButton: string;
    emptySubtitle: string;
    emptyTitle: string;
    emptyBody: string;
    addButton: string;
    addTitle: string;
    addSubtitle: string;
    editTitle: string;
    labelName: string;
    labelRelationship: string;
    labelCountryCode: string;
    labelPhone: string;
    labelLanguage: string;
    labelNote: string;
    placeholderName: string;
    placeholderRelationship: string;
    placeholderPhone: string;
    placeholderLanguage: string;
    placeholderNote: string;
    save: string;
    nameError: string;
    phoneError: string;
    saveFailed: string;
    trySavingAgain: string;
    offlineBody: string;
    unsavedTitle: string;
    unsavedBody: string;
    addUnsavedTitle: string;
    addUnsavedBody: string;
    removeModalTitle: string;
    removeModalBody: string;
    removeConfirmButton: string;
    offlineSubtitle: string;
    keepContact: string;
    removedTitle: string;
    removedSubtitle: string;
    removedPanelTitle: string;
    removedBody: string;
    backToEmergency: string;
  };
}

export const DOCUMENTS_COPY = defineSectionCopy<DocumentsCopy>({
  en: {
    shared: {
      headlessHome: "Headless home",
      myDocuments: "My documents",
      offlineTitle: "No internet connection",
      saving: "Saving…",
      keepEditing: "Keep editing",
      discardChanges: "Discard changes",
      leaveTitle: "Leave without saving?",
    },
    hub: {
      title: "My documents",
      subtitle:
        "Keep personal documents and linked verified records in one private place.",
      subtitleNeedsAttention:
        "One linked document needs attention before it expires.",
      subtitleLoading: "Loading your private documents and linked records.",
      subtitleEmpty:
        "Keep important personal documents ready when you need them.",
      subtitleOffline: "Cached records stay visible while you reconnect.",
      subtitleLoadFailed: "We couldn't load your documents right now.",
      needsAttentionBanner:
        "Residence card expires {date}. Review the linked residence record.",
      verifiedIdentitySource: "Verified identity source",
      linkedFromResidenceStatus: "Linked from Residence Status",
      selfAdded: "Self-added",
      expires: "Expires",
      addDocument: "Add document",
      emergencyShortcutTitle: "Emergency information",
      emergencyShortcutBody: "Private contact details for emergencies.",
      emergencyShortcutBodyEmpty: "Add a private emergency contact.",
      privacyFootnote:
        "Private by default. Employers cannot access these documents or emergency details without explicit consent.",
      emptyTitle: "No personal documents yet",
      emptyBody:
        "Add a document yourself. Verified identity or residence records can appear here automatically.",
      offlineBody:
        "No internet connection. Some document details may be out of date.",
      loadFailedTitle: "Couldn't load documents",
      loadFailedBody:
        "Your documents were not changed. Try again when the connection is stable.",
    },
    docType: {
      passport: "Passport",
      residenceCard: "Residence card",
      visaCoe: "Visa / COE",
      employment: "Employment document",
      qualification: "Qualification / certificate",
      other: "Other",
    },
    add: {
      title: "Add document",
      subtitle: "Add a private document to your worker-owned records.",
      labelType: "DOCUMENT TYPE",
      labelName: "DOCUMENT NAME",
      labelNumber: "DOCUMENT NUMBER · OPTIONAL",
      labelIssueDate: "ISSUE DATE · OPTIONAL",
      labelExpiryDate: "EXPIRY DATE · OPTIONAL",
      labelFile: "FILE",
      labelNote: "NOTE · OPTIONAL",
      noFileSelected: "No file selected",
      noDate: "No date",
      noExpiry: "No expiry",
      save: "Save document",
      nameError: "Enter a document name.",
      fileError: "Add a document file or photo.",
      typeOverlayTitle: "Document type",
      typeOverlayHelper:
        "Choose a category. Use Other for documents outside these common types.",
      issueDateOverlayTitle: "Issue date",
      expiryDateOverlayTitle: "Expiry date",
      dateOverlayHelper:
        "Enter any valid date. This field is not limited to preset options.",
      fileSourceOverlayTitle: "Add document file",
      fileSourceOverlayHelper: "Choose where to add the document from.",
      fileSourceCamera: "Take a photo",
      fileSourcePhotos: "Photo library",
      fileSourceFiles: "Files / PDF",
      uploadingFile: "Uploading {file}…",
      fileUploadFailed: "Upload failed",
      unsupportedSuffix: "Unsupported",
      uploadFailed: "Upload failed. Try again or choose another file.",
      unsupportedFile: "Use PDF, JPG, PNG, or HEIC under 10 MB.",
      permissionTitle: "Camera permission needed",
      permissionSubtitle:
        "Allow camera access to take a document photo, or choose an existing file instead.",
      permissionCardTitle: "Camera access is off",
      permissionBody:
        "EMENDA only uses the camera when you choose to capture a document.",
      permissionSettings: "Open settings",
      permissionChooseFile: "Choose existing file",
      saveFailed:
        "Couldn't save this document. Your selected file and form details are still here.",
      trySavingAgain: "Try saving again",
      subtitleOffline: "Your form stays here while you reconnect.",
      offlineBody:
        "No internet connection. You can review this form, but upload and save are unavailable.",
      discardTitle: "Discard this document?",
      unsavedBody:
        "Your unsaved document details and selected file will be lost.",
      existingVerifiedTitle: "Already linked",
      existingVerifiedSubtitle:
        "You don't need to upload another copy of a verified document.",
      existingVerifiedLabel: "VERIFIED DOCUMENT",
      existingVerifiedBody:
        "This document is already linked from your verified EMENDA identity/residence record.",
      chooseAnotherType: "Choose another document type",
      savedPageTitle: "Document saved",
      savedPageSubtitle:
        "Your private document has been added to My documents.",
      savedTitle: "Saved to My documents",
      savedBody: "The document is private by default and ready to view.",
      viewDocument: "View document",
      backToDocuments: "Back to My documents",
    },
    detail: {
      subtitleSelf: "Self-added document · Private by default.",
      subtitleVerified: "Verified identity source · Read-only verified data.",
      subtitleLinked: "Linked from Residence Status · Read-only verified data.",
      rowType: "TYPE",
      rowNumber: "DOCUMENT NO.",
      rowIssued: "ISSUED",
      rowExpiry: "EXPIRY",
      rowNote: "PRIVATE NOTE",
      rowValidUntil: "VALID UNTIL",
      rowSource: "SOURCE",
      passportRecord: "Passport record",
      residenceRecord: "Residence record",
      linkedFromEmendaId: "Linked from EMENDA ID verification",
      linkedFromResidenceStatus: "Linked from Residence Status",
      sourceVerifiedIdentity: "Verified identity reference",
      sourceResidenceStatus: "Residence Status",
      added: "Added",
      editDetails: "Edit details",
      replaceFile: "Replace file",
      deleteDocument: "Delete document",
      saveChanges: "Save changes",
      readOnlyTitle: "Verified data is read-only",
      readOnlyBody:
        "If something is wrong, report it instead of editing the verified record.",
      reportIncorrect: "Report incorrect information",
      deleteModalTitle: "Delete this document?",
      deleteModalBody:
        "This removes the self-added document from your private records. Verified source records cannot be deleted here.",
      keepDocument: "Keep document",
      unsavedTitle: "Discard document changes?",
      unsavedBody:
        "Edits you made to this self-added document will be lost.",
      editSaveFailed:
        "Couldn't save these changes. Your edits are still here.",
      editOfflineBody:
        "No internet connection. Your edits stay here, but saving is unavailable.",
      offlineBody:
        "No internet connection. Editing and file replacement are unavailable.",
      replacing: "Replacing file…",
      replaceFailed: "Upload failed. Check your connection and try again.",
      replacementRejected: "Choose a PDF, JPG, PNG, or HEIC file under 10 MB.",
      fileReplacedTitle: "File replaced",
      fileReplacedBody:
        "The previous file is no longer shown in this self-added record.",
      replaceSourceTitle: "Replace document file",
      replaceSourceHelper:
        "Choose a new file source. Your current document stays unchanged until replacement succeeds.",
      replacePermissionBody:
        "EMENDA only uses the camera when you choose to capture a document.",
      filePreviewTitle: "Document preview",
      filePreviewBody:
        "Document preview placeholder for prototype. The production app opens the actual uploaded file.",
      issueLabel: "WHAT IS INCORRECT?",
      issuePlaceholder: "Describe what is wrong with this verified record.",
      issueSubmit: "Submit issue",
      issueSubmitting: "Submitting…",
      issueSubmitFailed:
        "Couldn't submit the issue. Your report is still here.",
      issueOfflineBody:
        "No internet connection. Your report can't be submitted yet.",
      issueSubmittedTitle: "Issue submitted",
      issueSubmittedBody:
        "We'll keep the current verified data visible until a corrected source is confirmed.",
      backToDocument: "Back to document",
      deletedTitle: "Document deleted",
      deletedBody: "Verified source records are not affected.",
      backToDocuments: "Back to My documents",
      notFound: "Document not found",
      backDocumentDetail: "Document detail",
      backVerifiedDocument: "Verified document",
      editTitle: "Edit document",
      editSubtitle: "Update details for a document you added yourself.",
      labelPrivateNote: "PRIVATE NOTE · OPTIONAL",
      trySavingAgain: "Try saving again",
      offlineSubtitle:
        "Cached document details are available while you reconnect.",
      replacingTitle: "Replacing document file",
      replacingSubtitle:
        "Your existing document stays available until the new file is ready.",
      replacingCardTitle: "Uploading new file…",
      replacingHelper: "Keep EMENDA open while the file is being uploaded.",
      issueRefNumber: "Document no.",
      issueRefValidUntil: "Valid until",
      replaceFailedTitle: "Couldn't replace file",
      replaceFailedSubtitle: "The current document is unchanged.",
      tryAgain: "Try again",
      rejectedTitle: "Replacement file rejected",
      rejectedSubtitle: "Your current document is unchanged.",
      rejectedCardTitle: "This file can't be used",
      rejectedMeta: "Current document remains available.",
      chooseAnotherFile: "Choose another file",
      replacePermissionTitle: "Camera permission needed",
      replacePermissionSubtitle:
        "Allow camera access to capture the replacement file, or choose an existing file instead.",
      replacePermissionCardTitle: "Camera access is off",
      replacePermissionSettings: "Open settings",
      chooseExistingFile: "Choose existing file",
      filePreviewSubtitle:
        "Preview the self-added file without changing the document record.",
      issueSubtitle:
        "Tell us what looks wrong in this verified document reference.",
      issueNoteLabel: "ADDITIONAL NOTE · OPTIONAL",
      issueNotePlaceholder: "Anything else that helps us check this record.",
      issueSubmittedSubtitle:
        "Your verified record has not been changed automatically.",
      issueSubmittedPanelTitle: "Report received",
      fileReplacedSubtitle: "The new file is now attached to this document.",
      fileReplacedPanelTitle: "Replacement complete",
      deletedSubtitle:
        "The self-added document was removed from My documents.",
      deletedPanelTitle: "Document removed",
      editSavingSubtitle: "Saving your document changes.",
      cachedPrefix: "Cached",
      issueRecordLine: "Document no. {number} · Valid until {date}",
      detailTypeOverlayHelper:
        "Choose the category for this self-added document.",
    },
    emergency: {
      title: "Emergency information",
      subtitle: "Private contact details you can keep ready for emergencies.",
      primaryContact: "PRIMARY CONTACT",
      preferredLanguage: "Preferred language",
      editButton: "Edit emergency information",
      privacyTitle: "Private by default",
      privacyBody:
        "Employers cannot see this contact automatically. Emergency information is not a medical record.",
      removeButton: "Remove emergency contact",
      emptySubtitle:
        "Add one private emergency contact for situations where it may be needed.",
      emptyTitle: "No emergency contact yet",
      emptyBody: "This information stays private by default.",
      addButton: "Add emergency contact",
      addTitle: "Add emergency contact",
      addSubtitle: "Keep one private contact ready for emergencies.",
      editTitle: "Edit emergency information",
      labelName: "CONTACT NAME",
      labelRelationship: "RELATIONSHIP",
      labelCountryCode: "COUNTRY CODE",
      labelPhone: "PHONE NUMBER",
      labelLanguage: "PREFERRED LANGUAGE · OPTIONAL",
      labelNote: "EMERGENCY NOTE · OPTIONAL",
      placeholderName: "Full name",
      placeholderRelationship: "Relationship",
      placeholderPhone: "Phone number",
      placeholderLanguage: "Select language",
      placeholderNote: "Optional note",
      save: "Save emergency information",
      nameError: "Enter a contact name.",
      phoneError: "Enter a valid phone number.",
      saveFailed:
        "Couldn't save emergency information. Your edits are still here.",
      trySavingAgain: "Try saving again",
      offlineBody:
        "No internet connection. You can review this form, but changes cannot be saved.",
      unsavedTitle: "Discard emergency changes?",
      unsavedBody: "Your edits to the saved emergency contact will be lost.",
      addUnsavedTitle: "Discard new emergency contact?",
      addUnsavedBody: "The contact details you entered will be lost.",
      removeModalTitle: "Remove emergency contact?",
      removeModalBody:
        "This removes the saved emergency contact from your private information. You can add another contact later.",
      removeConfirmButton: "Remove contact",
      offlineSubtitle: "Your saved contact stays visible while you reconnect.",
      keepContact: "Keep contact",
      removedTitle: "Emergency contact removed",
      removedSubtitle: "The private emergency contact was removed.",
      removedPanelTitle: "Contact removed",
      removedBody: "You can add another emergency contact at any time.",
      backToEmergency: "Back to emergency information",
    },
  },
  id: {
    shared: {
      headlessHome: "Beranda headless",
      myDocuments: "Dokumen saya",
      offlineTitle: "Tidak ada koneksi internet",
      saving: "Menyimpan…",
      keepEditing: "Lanjutkan mengedit",
      discardChanges: "Buang perubahan",
      leaveTitle: "Keluar tanpa menyimpan?",
    },
    hub: {
      title: "Dokumen saya",
      subtitle:
        "Simpan dokumen pribadi dan catatan terverifikasi yang tertaut di satu tempat privat.",
      subtitleNeedsAttention:
        "Satu dokumen tertaut perlu perhatian sebelum masa berlakunya habis.",
      subtitleLoading: "Memuat dokumen privat dan catatan tertaut Anda.",
      subtitleEmpty:
        "Simpan dokumen pribadi penting agar siap saat Anda membutuhkannya.",
      subtitleOffline:
        "Catatan tersimpan tetap terlihat saat Anda menyambung kembali.",
      subtitleLoadFailed: "Kami tidak dapat memuat dokumen Anda saat ini.",
      needsAttentionBanner:
        "Kartu izin tinggal berakhir {date}. Tinjau catatan izin tinggal yang tertaut.",
      verifiedIdentitySource: "Sumber identitas terverifikasi",
      linkedFromResidenceStatus: "Tertaut dari Status Izin Tinggal",
      selfAdded: "Ditambahkan sendiri",
      expires: "Berakhir",
      addDocument: "Tambah dokumen",
      emergencyShortcutTitle: "Informasi darurat",
      emergencyShortcutBody: "Detail kontak privat untuk keadaan darurat.",
      emergencyShortcutBodyEmpty: "Tambahkan kontak darurat privat.",
      privacyFootnote:
        "Privat secara default. Pemberi kerja tidak dapat mengakses dokumen atau detail darurat ini tanpa persetujuan eksplisit.",
      emptyTitle: "Belum ada dokumen pribadi",
      emptyBody:
        "Tambahkan dokumen sendiri. Catatan identitas atau izin tinggal terverifikasi dapat muncul di sini secara otomatis.",
      offlineBody:
        "Tidak ada koneksi internet. Beberapa detail dokumen mungkin sudah tidak berlaku.",
      loadFailedTitle: "Tidak dapat memuat dokumen",
      loadFailedBody:
        "Dokumen Anda tidak berubah. Coba lagi saat koneksi stabil.",
    },
    docType: {
      passport: "Paspor",
      residenceCard: "Kartu izin tinggal",
      visaCoe: "Visa / COE",
      employment: "Dokumen kerja",
      qualification: "Kualifikasi / sertifikat",
      other: "Lainnya",
    },
    add: {
      title: "Tambah dokumen",
      subtitle: "Tambahkan dokumen privat ke catatan milik Anda sebagai pekerja.",
      labelType: "JENIS DOKUMEN",
      labelName: "NAMA DOKUMEN",
      labelNumber: "NOMOR DOKUMEN · OPSIONAL",
      labelIssueDate: "TANGGAL TERBIT · OPSIONAL",
      labelExpiryDate: "TANGGAL BERAKHIR · OPSIONAL",
      labelFile: "BERKAS",
      labelNote: "CATATAN · OPSIONAL",
      noFileSelected: "Belum ada berkas dipilih",
      noDate: "Tanpa tanggal",
      noExpiry: "Tanpa masa berlaku",
      save: "Simpan dokumen",
      nameError: "Masukkan nama dokumen.",
      fileError: "Tambahkan berkas atau foto dokumen.",
      typeOverlayTitle: "Jenis dokumen",
      typeOverlayHelper:
        "Pilih kategori. Gunakan Lainnya untuk dokumen di luar jenis umum ini.",
      issueDateOverlayTitle: "Tanggal terbit",
      expiryDateOverlayTitle: "Tanggal berakhir",
      dateOverlayHelper:
        "Masukkan tanggal apa pun yang valid. Kolom ini tidak terbatas pada pilihan yang tersedia.",
      fileSourceOverlayTitle: "Tambahkan berkas dokumen",
      fileSourceOverlayHelper: "Pilih dari mana dokumen akan ditambahkan.",
      fileSourceCamera: "Ambil foto",
      fileSourcePhotos: "Galeri foto",
      fileSourceFiles: "Berkas / PDF",
      uploadingFile: "Mengunggah {file}…",
      fileUploadFailed: "Unggahan gagal",
      unsupportedSuffix: "Tidak didukung",
      uploadFailed: "Unggahan gagal. Coba lagi atau pilih berkas lain.",
      unsupportedFile: "Gunakan PDF, JPG, PNG, atau HEIC di bawah 10 MB.",
      permissionTitle: "Izin kamera diperlukan",
      permissionSubtitle:
        "Izinkan akses kamera untuk memotret dokumen, atau pilih berkas yang sudah ada.",
      permissionCardTitle: "Akses kamera nonaktif",
      permissionBody:
        "EMENDA hanya menggunakan kamera saat Anda memilih untuk memotret dokumen.",
      permissionSettings: "Buka pengaturan",
      permissionChooseFile: "Pilih berkas yang ada",
      saveFailed:
        "Tidak dapat menyimpan dokumen ini. Berkas dan detail formulir Anda masih tersimpan di sini.",
      trySavingAgain: "Coba simpan lagi",
      subtitleOffline: "Formulir Anda tetap ada selama Anda menyambung kembali.",
      offlineBody:
        "Tidak ada koneksi internet. Anda dapat meninjau formulir ini, tetapi unggah dan simpan tidak tersedia.",
      discardTitle: "Buang dokumen ini?",
      unsavedBody:
        "Detail dokumen dan berkas pilihan Anda yang belum disimpan akan hilang.",
      existingVerifiedTitle: "Sudah tertaut",
      existingVerifiedSubtitle:
        "Anda tidak perlu mengunggah salinan lain dari dokumen terverifikasi.",
      existingVerifiedLabel: "DOKUMEN TERVERIFIKASI",
      existingVerifiedBody:
        "Dokumen ini sudah tertaut dari catatan identitas/izin tinggal EMENDA Anda yang terverifikasi.",
      chooseAnotherType: "Pilih jenis dokumen lain",
      savedPageTitle: "Dokumen tersimpan",
      savedPageSubtitle:
        "Dokumen privat Anda telah ditambahkan ke Dokumen saya.",
      savedTitle: "Tersimpan ke Dokumen saya",
      savedBody: "Dokumen bersifat privat secara default dan siap dilihat.",
      viewDocument: "Lihat dokumen",
      backToDocuments: "Kembali ke Dokumen saya",
    },
    detail: {
      subtitleSelf: "Dokumen yang ditambahkan sendiri · Privat secara default.",
      subtitleVerified:
        "Sumber identitas terverifikasi · Data terverifikasi hanya-baca.",
      subtitleLinked:
        "Tertaut dari Status Izin Tinggal · Data terverifikasi hanya-baca.",
      rowType: "JENIS",
      rowNumber: "NO. DOKUMEN",
      rowIssued: "DITERBITKAN",
      rowExpiry: "BERAKHIR",
      rowNote: "CATATAN PRIVAT",
      rowValidUntil: "BERLAKU HINGGA",
      rowSource: "SUMBER",
      passportRecord: "Catatan paspor",
      residenceRecord: "Catatan izin tinggal",
      linkedFromEmendaId: "Tertaut dari verifikasi EMENDA ID",
      linkedFromResidenceStatus: "Tertaut dari Status Izin Tinggal",
      sourceVerifiedIdentity: "Referensi identitas terverifikasi",
      sourceResidenceStatus: "Status Izin Tinggal",
      added: "Ditambahkan",
      editDetails: "Ubah detail",
      replaceFile: "Ganti berkas",
      deleteDocument: "Hapus dokumen",
      saveChanges: "Simpan perubahan",
      readOnlyTitle: "Data terverifikasi hanya-baca",
      readOnlyBody:
        "Jika ada yang salah, laporkan alih-alih mengedit catatan terverifikasi.",
      reportIncorrect: "Laporkan informasi yang salah",
      deleteModalTitle: "Hapus dokumen ini?",
      deleteModalBody:
        "Ini menghapus dokumen yang ditambahkan sendiri dari catatan privat Anda. Catatan sumber terverifikasi tidak dapat dihapus di sini.",
      keepDocument: "Pertahankan dokumen",
      unsavedTitle: "Buang perubahan dokumen?",
      unsavedBody:
        "Perubahan yang Anda buat pada dokumen ini akan hilang.",
      editSaveFailed:
        "Tidak dapat menyimpan perubahan ini. Perubahan Anda masih ada di sini.",
      editOfflineBody:
        "Tidak ada koneksi internet. Anda dapat terus mengedit dan menyimpan saat tersambung kembali.",
      offlineBody:
        "Tidak ada koneksi internet. Pengeditan dan penggantian berkas tidak tersedia.",
      replacing: "Mengganti berkas…",
      replaceFailed: "Unggahan gagal. Periksa koneksi Anda dan coba lagi.",
      replacementRejected:
        "Berkas ini tidak dapat digunakan. Pilih berkas lain.",
      fileReplacedTitle: "Berkas diganti",
      fileReplacedBody:
        "Berkas sebelumnya tidak lagi ditampilkan pada catatan yang Anda tambahkan sendiri.",
      replaceSourceTitle: "Ganti berkas dokumen",
      replaceSourceHelper:
        "Pilih sumber berkas baru. Dokumen Anda saat ini tidak berubah sampai penggantian berhasil.",
      replacePermissionBody:
        "EMENDA memerlukan izin untuk mengakses kamera atau berkas Anda guna mengganti berkas ini.",
      filePreviewTitle: "Pratinjau dokumen",
      filePreviewBody:
        "Placeholder pratinjau dokumen untuk prototipe. Aplikasi produksi membuka berkas asli yang diunggah.",
      issueLabel: "APA YANG SALAH?",
      issuePlaceholder:
        "Jelaskan apa yang salah pada catatan terverifikasi ini.",
      issueSubmit: "Kirim masalah",
      issueSubmitting: "Mengirim…",
      issueSubmitFailed:
        "Tidak dapat mengirim masalah. Laporan Anda masih ada di sini.",
      issueOfflineBody:
        "Tidak ada koneksi internet. Laporan Anda belum dapat dikirim.",
      issueSubmittedTitle: "Laporan terkirim",
      issueSubmittedBody:
        "Kami akan menampilkan data terverifikasi saat ini sampai sumber yang dikoreksi dikonfirmasi.",
      backToDocument: "Kembali ke dokumen",
      deletedTitle: "Dokumen dihapus",
      deletedBody: "Catatan sumber terverifikasi tidak terpengaruh.",
      backToDocuments: "Kembali ke Dokumen saya",
      notFound: "Dokumen tidak ditemukan",
      backDocumentDetail: "Detail dokumen",
      backVerifiedDocument: "Dokumen terverifikasi",
      editTitle: "Ubah dokumen",
      editSubtitle: "Perbarui detail dokumen yang Anda tambahkan sendiri.",
      labelPrivateNote: "CATATAN PRIVAT · OPSIONAL",
      trySavingAgain: "Coba simpan lagi",
      offlineSubtitle:
        "Detail dokumen tersimpan tersedia sementara Anda menyambung kembali.",
      replacingTitle: "Mengganti berkas dokumen",
      replacingSubtitle:
        "Dokumen Anda yang ada tetap tersedia hingga berkas baru siap.",
      replacingCardTitle: "Mengunggah berkas baru…",
      replacingHelper: "Biarkan EMENDA terbuka selama berkas diunggah.",
      issueRefNumber: "No. dokumen",
      issueRefValidUntil: "Berlaku sampai",
      replaceFailedTitle: "Tidak dapat mengganti berkas",
      replaceFailedSubtitle: "Dokumen saat ini tidak berubah.",
      tryAgain: "Coba lagi",
      rejectedTitle: "Berkas pengganti ditolak",
      rejectedSubtitle: "Dokumen Anda saat ini tidak berubah.",
      rejectedCardTitle: "Berkas ini tidak dapat digunakan",
      rejectedMeta: "Dokumen saat ini tetap tersedia.",
      chooseAnotherFile: "Pilih berkas lain",
      replacePermissionTitle: "Izin kamera diperlukan",
      replacePermissionSubtitle:
        "Izinkan akses kamera untuk memotret berkas pengganti, atau pilih berkas yang sudah ada.",
      replacePermissionCardTitle: "Akses kamera nonaktif",
      replacePermissionSettings: "Buka pengaturan",
      chooseExistingFile: "Pilih berkas yang ada",
      filePreviewSubtitle:
        "Lihat pratinjau berkas yang Anda tambahkan tanpa mengubah catatan dokumen.",
      issueSubtitle:
        "Beri tahu kami apa yang tampak salah pada rujukan dokumen terverifikasi ini.",
      issueNoteLabel: "CATATAN TAMBAHAN · OPSIONAL",
      issueNotePlaceholder:
        "Hal lain yang membantu kami memeriksa catatan ini.",
      issueSubmittedSubtitle:
        "Catatan terverifikasi Anda tidak diubah secara otomatis.",
      issueSubmittedPanelTitle: "Laporan diterima",
      fileReplacedSubtitle: "Berkas baru kini terlampir pada dokumen ini.",
      fileReplacedPanelTitle: "Penggantian selesai",
      deletedSubtitle:
        "Dokumen yang Anda tambahkan sendiri dihapus dari Dokumen saya.",
      deletedPanelTitle: "Dokumen dihapus",
      editSavingSubtitle: "Menyimpan perubahan dokumen Anda.",
      cachedPrefix: "Tersimpan",
      issueRecordLine: "No. dokumen {number} · Berlaku hingga {date}",
      detailTypeOverlayHelper:
        "Pilih kategori untuk dokumen yang Anda tambahkan sendiri ini.",
    },
    emergency: {
      title: "Informasi darurat",
      subtitle:
        "Detail kontak privat yang dapat Anda siapkan untuk keadaan darurat.",
      primaryContact: "KONTAK UTAMA",
      preferredLanguage: "Bahasa pilihan",
      editButton: "Ubah informasi darurat",
      privacyTitle: "Privat secara default",
      privacyBody:
        "Pemberi kerja tidak dapat melihat kontak ini secara otomatis. Informasi darurat bukan rekam medis.",
      removeButton: "Hapus kontak darurat",
      emptySubtitle:
        "Tambahkan satu kontak darurat privat untuk situasi yang mungkin membutuhkannya.",
      emptyTitle: "Belum ada kontak darurat",
      emptyBody: "Informasi ini tetap privat secara default.",
      addButton: "Tambah kontak darurat",
      addTitle: "Tambah kontak darurat",
      addSubtitle: "Siapkan satu kontak privat untuk keadaan darurat.",
      editTitle: "Ubah informasi darurat",
      labelName: "NAMA KONTAK",
      labelRelationship: "HUBUNGAN",
      labelCountryCode: "KODE NEGARA",
      labelPhone: "NOMOR TELEPON",
      labelLanguage: "BAHASA PILIHAN · OPSIONAL",
      labelNote: "CATATAN DARURAT · OPSIONAL",
      placeholderName: "Nama lengkap",
      placeholderRelationship: "Hubungan",
      placeholderPhone: "Nomor telepon",
      placeholderLanguage: "Pilih bahasa",
      placeholderNote: "Catatan opsional",
      save: "Simpan informasi darurat",
      nameError: "Masukkan nama kontak.",
      phoneError: "Masukkan nomor telepon yang valid.",
      saveFailed:
        "Tidak dapat menyimpan informasi darurat. Perubahan Anda masih ada di sini.",
      trySavingAgain: "Coba simpan lagi",
      offlineBody:
        "Tidak ada koneksi internet. Anda dapat meninjau formulir ini, tetapi perubahan tidak dapat disimpan.",
      unsavedTitle: "Buang perubahan darurat?",
      unsavedBody:
        "Perubahan Anda pada kontak darurat yang tersimpan akan hilang.",
      addUnsavedTitle: "Buang kontak darurat baru?",
      addUnsavedBody: "Detail kontak yang Anda masukkan akan hilang.",
      removeModalTitle: "Hapus kontak darurat?",
      removeModalBody:
        "Ini menghapus kontak darurat yang tersimpan dari informasi privat Anda. Anda dapat menambahkan kontak lain nanti.",
      removeConfirmButton: "Hapus kontak",
      offlineSubtitle:
        "Kontak tersimpan Anda tetap terlihat saat Anda menyambung kembali.",
      keepContact: "Pertahankan kontak",
      removedTitle: "Kontak darurat dihapus",
      removedSubtitle: "Kontak darurat privat telah dihapus.",
      removedPanelTitle: "Kontak dihapus",
      removedBody: "Anda dapat menambahkan kontak darurat lain kapan saja.",
      backToEmergency: "Kembali ke informasi darurat",
    },
  },
  ja: {
    shared: {
      headlessHome: "ヘッドレスホーム",
      myDocuments: "マイドキュメント",
      offlineTitle: "インターネットに接続されていません",
      saving: "保存中…",
      keepEditing: "編集を続ける",
      discardChanges: "変更を破棄",
      leaveTitle: "保存せずに離れますか？",
    },
    hub: {
      title: "マイドキュメント",
      subtitle:
        "個人の書類とリンクされた確認済み記録を、ひとつのプライベートな場所に保管します。",
      subtitleNeedsAttention:
        "リンクされた書類が1件、有効期限前に対応が必要です。",
      subtitleLoading: "プライベートな書類とリンクされた記録を読み込んでいます。",
      subtitleEmpty:
        "必要なときにすぐ使えるよう、大切な個人書類を用意しておきましょう。",
      subtitleOffline: "再接続するまで、キャッシュされた記録が表示されます。",
      subtitleLoadFailed: "現在、書類を読み込めませんでした。",
      needsAttentionBanner:
        "在留カードの有効期限は{date}です。リンクされた在留記録を確認してください。",
      verifiedIdentitySource: "確認済みの本人確認ソース",
      linkedFromResidenceStatus: "在留ステータスからリンク",
      selfAdded: "自己追加",
      expires: "有効期限",
      addDocument: "書類を追加",
      emergencyShortcutTitle: "緊急連絡情報",
      emergencyShortcutBody: "緊急時のためのプライベートな連絡先情報。",
      emergencyShortcutBodyEmpty: "プライベートな緊急連絡先を追加しましょう。",
      privacyFootnote:
        "デフォルトで非公開。雇用主は明示的な同意なしに、これらの書類や緊急連絡先情報にアクセスできません。",
      emptyTitle: "個人の書類はまだありません",
      emptyBody:
        "自分で書類を追加できます。確認済みの本人確認記録や在留記録は自動的にここに表示されます。",
      offlineBody:
        "インターネット接続がありません。一部の書類情報が最新でない可能性があります。",
      loadFailedTitle: "書類を読み込めませんでした",
      loadFailedBody:
        "書類は変更されていません。接続が安定してから再試行してください。",
    },
    docType: {
      passport: "パスポート",
      residenceCard: "在留カード",
      visaCoe: "ビザ / COE",
      employment: "雇用関係書類",
      qualification: "資格・証明書",
      other: "その他",
    },
    add: {
      title: "書類を追加",
      subtitle: "ワーカー所有の記録にプライベートな書類を追加します。",
      labelType: "書類の種類",
      labelName: "書類名",
      labelNumber: "書類番号 · 任意",
      labelIssueDate: "発行日 · 任意",
      labelExpiryDate: "有効期限 · 任意",
      labelFile: "ファイル",
      labelNote: "メモ · 任意",
      noFileSelected: "ファイルが選択されていません",
      noDate: "日付なし",
      noExpiry: "期限なし",
      save: "書類を保存",
      nameError: "書類名を入力してください。",
      fileError: "書類のファイルまたは写真を追加してください。",
      typeOverlayTitle: "書類の種類",
      typeOverlayHelper:
        "カテゴリーを選択してください。一般的な種類に当てはまらない書類は「その他」を使用してください。",
      issueDateOverlayTitle: "発行日",
      expiryDateOverlayTitle: "有効期限",
      dateOverlayHelper:
        "任意の有効な日付を入力できます。この項目はプリセットの選択肢に限定されません。",
      fileSourceOverlayTitle: "書類ファイルを追加",
      fileSourceOverlayHelper: "書類の追加元を選択してください。",
      fileSourceCamera: "写真を撮る",
      fileSourcePhotos: "フォトライブラリ",
      fileSourceFiles: "ファイル / PDF",
      uploadingFile: "{file}をアップロード中…",
      fileUploadFailed: "アップロードに失敗しました",
      unsupportedSuffix: "非対応",
      uploadFailed:
        "アップロードに失敗しました。再試行するか、別のファイルを選択してください。",
      unsupportedFile:
        "10MB未満のPDF、JPG、PNG、またはHEICを使用してください。",
      permissionTitle: "カメラの許可が必要です",
      permissionSubtitle:
        "書類を撮影するにはカメラへのアクセスを許可するか、既存のファイルを選択してください。",
      permissionCardTitle: "カメラのアクセスがオフです",
      permissionBody:
        "EMENDAは、書類を撮影する場合にのみカメラを使用します。",
      permissionSettings: "設定を開く",
      permissionChooseFile: "既存のファイルを選択",
      saveFailed:
        "この書類を保存できませんでした。選択したファイルと入力内容はそのまま残っています。",
      trySavingAgain: "もう一度保存する",
      subtitleOffline: "再接続するまでフォームの内容はここに残ります。",
      offlineBody:
        "インターネット接続がありません。フォームの確認はできますが、アップロードと保存は利用できません。",
      discardTitle: "この書類を破棄しますか？",
      unsavedBody:
        "保存されていない書類の詳細と選択したファイルは失われます。",
      existingVerifiedTitle: "すでにリンクされています",
      existingVerifiedSubtitle:
        "確認済み書類のコピーを改めてアップロードする必要はありません。",
      existingVerifiedLabel: "確認済みの書類",
      existingVerifiedBody:
        "この書類は、確認済みのEMENDA本人確認／在留記録からすでにリンクされています。",
      chooseAnotherType: "別の書類の種類を選ぶ",
      savedPageTitle: "書類を保存しました",
      savedPageSubtitle:
        "プライベートな書類がマイドキュメントに追加されました。",
      savedTitle: "マイドキュメントに保存しました",
      savedBody:
        "この書類はデフォルトで非公開に設定され、いつでも閲覧できます。",
      viewDocument: "書類を表示",
      backToDocuments: "マイドキュメントに戻る",
    },
    detail: {
      subtitleSelf: "自己追加の書類 · デフォルトで非公開。",
      subtitleVerified: "確認済みの本人確認ソース · 読み取り専用の確認済みデータ。",
      subtitleLinked: "在留ステータスからリンク · 読み取り専用の確認済みデータ。",
      rowType: "種類",
      rowNumber: "書類番号",
      rowIssued: "発行日",
      rowExpiry: "有効期限",
      rowNote: "プライベートメモ",
      rowValidUntil: "有効期限",
      rowSource: "ソース",
      passportRecord: "パスポート記録",
      residenceRecord: "在留記録",
      linkedFromEmendaId: "EMENDA ID認証からリンク",
      linkedFromResidenceStatus: "在留ステータスからリンク",
      sourceVerifiedIdentity: "確認済みの本人確認リファレンス",
      sourceResidenceStatus: "在留ステータス",
      added: "追加日",
      editDetails: "詳細を編集",
      replaceFile: "ファイルを差し替え",
      deleteDocument: "書類を削除",
      saveChanges: "変更を保存",
      readOnlyTitle: "確認済みデータは読み取り専用です",
      readOnlyBody:
        "誤りがある場合は、確認済み記録を編集するのではなく報告してください。",
      reportIncorrect: "誤った情報を報告",
      deleteModalTitle: "この書類を削除しますか？",
      deleteModalBody:
        "自己追加の書類がプライベートな記録から削除されます。確認済みのソース記録はここでは削除できません。",
      keepDocument: "書類を残す",
      unsavedTitle: "書類の変更を破棄しますか？",
      unsavedBody:
        "この自己追加の書類に加えた変更は失われます。",
      editSaveFailed:
        "この変更を保存できませんでした。入力内容はここに残っています。",
      editOfflineBody:
        "インターネットに接続されていません。編集を続けて、再接続後に保存できます。",
      offlineBody: "再接続してこの書類を更新してください。",
      replacing: "ファイルを差し替え中…",
      replaceFailed: "ファイルを差し替えられませんでした。再試行してください。",
      replacementRejected:
        "このファイルは使用できません。別のファイルを選択してください。",
      fileReplacedTitle: "ファイルを差し替えました",
      fileReplacedBody: "書類ファイルがプライベートな記録で更新されました。",
      replaceSourceTitle: "書類ファイルを差し替え",
      replaceSourceHelper:
        "新しいファイルの取得元を選択してください。差し替えが成功するまで現在の書類は変わりません。",
      replacePermissionBody:
        "このファイルを差し替えるには、EMENDAがカメラまたはファイルへのアクセス許可を必要とします。",
      filePreviewTitle: "書類のプレビュー",
      filePreviewBody:
        "プロトタイプ用のプレビュー表示です。本番アプリでは実際にアップロードしたファイルを開きます。",
      issueLabel: "何が誤っていますか？",
      issuePlaceholder: "この確認済み記録の誤りを説明してください。",
      issueSubmit: "問題を送信",
      issueSubmitting: "送信中…",
      issueSubmitFailed:
        "問題を送信できませんでした。報告内容はここに残っています。",
      issueOfflineBody:
        "インターネットに接続されていません。報告はまだ送信できません。",
      issueSubmittedTitle: "報告を送信しました",
      issueSubmittedBody:
        "修正されたソースが確認されるまで、現在の確認済みデータを表示し続けます。",
      backToDocument: "書類に戻る",
      deletedTitle: "書類を削除しました",
      deletedBody: "確認済みのソース記録には影響しません。",
      backToDocuments: "マイドキュメントに戻る",
      notFound: "書類が見つかりません",
      backDocumentDetail: "書類の詳細",
      backVerifiedDocument: "確認済みの書類",
      editTitle: "書類を編集",
      editSubtitle: "自分で追加した書類の詳細を更新します。",
      labelPrivateNote: "プライベートメモ · 任意",
      trySavingAgain: "もう一度保存する",
      offlineSubtitle:
        "再接続するまでキャッシュされた書類の詳細を表示できます。",
      replacingTitle: "書類ファイルを差し替え中",
      replacingSubtitle:
        "新しいファイルの準備ができるまで、既存の書類は利用できます。",
      replacingCardTitle: "新しいファイルをアップロード中…",
      replacingHelper:
        "アップロード中は EMENDA を開いたままにしてください。",
      issueRefNumber: "書類番号",
      issueRefValidUntil: "有効期限",
      replaceFailedTitle: "ファイルを差し替えられませんでした",
      replaceFailedSubtitle: "現在の書類は変更されていません。",
      tryAgain: "再試行",
      rejectedTitle: "差し替えファイルは使用できません",
      rejectedSubtitle: "現在の書類は変更されていません。",
      rejectedCardTitle: "このファイルは使用できません",
      rejectedMeta: "現在の書類は引き続き利用できます。",
      chooseAnotherFile: "別のファイルを選ぶ",
      replacePermissionTitle: "カメラの許可が必要です",
      replacePermissionSubtitle:
        "差し替えファイルを撮影するにはカメラへのアクセスを許可するか、既存のファイルを選んでください。",
      replacePermissionCardTitle: "カメラのアクセスがオフです",
      replacePermissionSettings: "設定を開く",
      chooseExistingFile: "既存のファイルを選ぶ",
      filePreviewSubtitle:
        "書類の記録を変更せずに、追加したファイルをプレビューします。",
      issueSubtitle:
        "この確認済み書類の参照で、どこが誤っているか教えてください。",
      issueNoteLabel: "追加メモ · 任意",
      issueNotePlaceholder:
        "確認の助けになる情報があれば入力してください。",
      issueSubmittedSubtitle:
        "確認済みの記録は自動的には変更されていません。",
      issueSubmittedPanelTitle: "報告を受け付けました",
      fileReplacedSubtitle:
        "新しいファイルがこの書類に添付されました。",
      fileReplacedPanelTitle: "差し替えが完了しました",
      deletedSubtitle:
        "自分で追加した書類が「マイ書類」から削除されました。",
      deletedPanelTitle: "書類を削除しました",
      editSavingSubtitle: "書類の変更を保存しています。",
      cachedPrefix: "キャッシュ済み",
      issueRecordLine: "書類番号 {number} · 有効期限 {date}",
      detailTypeOverlayHelper:
        "自分で追加したこの書類のカテゴリーを選択してください。",
    },
    emergency: {
      title: "緊急連絡情報",
      subtitle: "緊急時に備えて用意できるプライベートな連絡先情報。",
      primaryContact: "主要連絡先",
      preferredLanguage: "希望言語",
      editButton: "緊急連絡情報を編集",
      privacyTitle: "デフォルトで非公開",
      privacyBody:
        "雇用主はこの連絡先を自動的に見ることはできません。緊急連絡情報は医療記録ではありません。",
      removeButton: "緊急連絡先を削除",
      emptySubtitle:
        "必要になるかもしれない場面に備えて、プライベートな緊急連絡先を1件追加します。",
      emptyTitle: "緊急連絡先はまだありません",
      emptyBody: "この情報はデフォルトで非公開のままです。",
      addButton: "緊急連絡先を追加",
      addTitle: "緊急連絡先を追加",
      addSubtitle: "緊急時に備えてプライベートな連絡先を1件用意します。",
      editTitle: "緊急連絡情報を編集",
      labelName: "連絡先の名前",
      labelRelationship: "続柄",
      labelCountryCode: "国番号",
      labelPhone: "電話番号",
      labelLanguage: "希望言語 · 任意",
      labelNote: "緊急メモ · 任意",
      placeholderName: "氏名",
      placeholderRelationship: "続柄",
      placeholderPhone: "電話番号",
      placeholderLanguage: "言語を選択",
      placeholderNote: "任意のメモ",
      save: "緊急連絡情報を保存",
      nameError: "連絡先の名前を入力してください。",
      phoneError: "有効な電話番号を入力してください。",
      saveFailed: "緊急連絡情報を保存できませんでした。入力内容はここに残っています。",
      trySavingAgain: "もう一度保存する",
      offlineBody:
        "インターネット接続がありません。フォームの確認はできますが、変更は保存できません。",
      unsavedTitle: "緊急連絡先の変更を破棄しますか？",
      unsavedBody: "保存済みの緊急連絡先への変更は失われます。",
      addUnsavedTitle: "新しい緊急連絡先を破棄しますか？",
      addUnsavedBody: "入力した連絡先の内容は失われます。",
      removeModalTitle: "緊急連絡先を削除しますか？",
      removeModalBody:
        "保存済みの緊急連絡先をプライベート情報から削除します。あとで別の連絡先を追加できます。",
      removeConfirmButton: "連絡先を削除",
      offlineSubtitle: "再接続するまで保存済みの連絡先は表示されたままです。",
      keepContact: "連絡先を残す",
      removedTitle: "緊急連絡先を削除しました",
      removedSubtitle: "プライベートな緊急連絡先を削除しました。",
      removedPanelTitle: "連絡先を削除しました",
      removedBody: "緊急連絡先はいつでも再度追加できます。",
      backToEmergency: "緊急連絡情報に戻る",
    },
  },
});
