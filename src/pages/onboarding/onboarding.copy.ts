import { defineSectionCopy } from "@/i18n/copy";

/** Section 02 · EMENDA ID & Identity (WD-12..WD-17 / W-12..W-17).
 *  EN strings are verbatim Figma mock copy — do not edit casually. */
export interface OnboardingIdCopy {
  emendaIdLabel: string;
  ready: {
    title: string;
    subtitle: string;
    createdFor: string; // "{name}" placeholder
    staysWithYouTitle: string;
    staysWithYouBody: string;
    continueIdentitySetup: string;
    doThisLater: string;
  };
  details: {
    title: string;
    subtitle: string;
    legalNameLabel: string;
    dobLabel: string;
    nationalityLabel: string;
    legalNameError: string;
  };
  reference: {
    title: string;
    subtitle: string;
    permissionTitle: string;
    permissionSubtitle: string;
    documentTypeLabel: string;
    passport: string;
    selectedMeta: string;
    residenceCard: string;
    japanMeta: string;
    documentNumberLabel: string;
    expiryDateLabel: string;
    addPhotoRequiredTitle: string;
    addPhotoRequiredBody: string;
    chooseFile: string;
    addPhotoTitle: string;
    photoSpecBody: string;
    uploadingAction: string;
    uploadingButton: string;
    retryUpload: string;
    uploadFailedHelper: string;
    invalidDocHelper: string;
    chooseAnotherDocument: string;
    documentReadyTitle: string;
    readyToReview: string;
    replaceDocument: string;
    addDocToContinue: string;
    photoAccessOffTitle: string;
    photoAccessOffBody: string;
    chooseAnotherMethod: string;
    openSettings: string;
  };
  review: {
    title: string;
    subtitle: string;
    personalDetails: string;
    legalNameRow: string;
    dobRow: string;
    nationalityRow: string;
    identityDocument: string;
    documentTypeRow: string;
    documentNumberRow: string;
    expiryDateRow: string;
    documentPhotoRow: string;
    addedValue: string;
    privateByDefaultTitle: string;
    privateByDefaultBody: string;
    submitForVerification: string;
    editIdentityDetails: string;
  };
  verification: {
    gateTitle: string;
    gateSubtitle: string;
    whatYoullNeedTitle: string;
    whatYoullNeedBody: string;
    startVerification: string;
    backToEmendaId: string;
    title: string;
    submittingSubtitle: string;
    submittingButton: string;
    submittingHeading: string;
    submittingBody: string;
    pendingSubtitle: string;
    pendingHeading: string;
    pendingBody: string;
    continueToMyId: string;
    verifiedSubtitle: string;
    verifiedHeading: string;
    verifiedBody: string;
    viewMyId: string;
    needsReviewSubtitle: string;
    needsReviewHeading: string;
    needsReviewBody: string;
    reviewDocument: string;
    failedSubtitle: string;
    failedHeading: string;
    failedBody: string;
    tryAgain: string;
    offlineSubtitle: string;
    offlineTitle: string;
    offlineBody: string;
  };
  myId: {
    title: string;
    pendingSubtitle: string;
    verifiedSubtitle: string;
    notVerifiedSubtitle: string;
    loadingSubtitle: string;
    needsReviewSubtitle: string;
    failedSubtitle: string;
    identityVerified: string;
    createdLabel: string;
    showQr: string;
    shareId: string;
    privateDocsTitle: string;
    privateDocsBody: string;
    continueToHome: string;
    verifyIdentity: string;
    reviewDocument: string;
    tryVerificationAgain: string;
  };
  qr: {
    title: string;
    subtitle: string;
    idOnly: string;
  };
  share: {
    title: string;
    subtitle: string;
    youllShare: string;
    verificationResult: string;
    staysPrivate: string;
    staysPrivateBody: string;
    shareEmendaId: string;
  };
  shared: {
    title: string;
    subtitle: string;
    successTitle: string;
    successBody: string;
  };
}

export const ONBOARDING_ID_COPY = defineSectionCopy<OnboardingIdCopy>({
  en: {
    emendaIdLabel: "EMENDA ID",
    ready: {
      title: "Your EMENDA ID is ready",
      subtitle: "Your worker-owned EMENDA ID is ready.",
      createdFor: "Created for {name}",
      staysWithYouTitle: "This ID stays with you",
      staysWithYouBody: "Use the same EMENDA ID even when your employer changes.",
      continueIdentitySetup: "Continue identity setup",
      doThisLater: "Do this later",
    },
    details: {
      title: "Identity details",
      subtitle:
        "Enter the legal identity details used to protect your EMENDA ID.",
      legalNameLabel: "LEGAL NAME",
      dobLabel: "DATE OF BIRTH",
      nationalityLabel: "NATIONALITY",
      legalNameError:
        "Use the legal name exactly as shown on your identity document.",
    },
    reference: {
      title: "Identity reference",
      subtitle: "Choose a document that can support identity verification.",
      permissionTitle: "Add identity document",
      permissionSubtitle:
        "EMENDA needs access only when you choose a photo or camera source.",
      documentTypeLabel: "DOCUMENT TYPE",
      passport: "Passport",
      selectedMeta: "Selected",
      residenceCard: "Residence card",
      japanMeta: "Japan",
      documentNumberLabel: "DOCUMENT NUMBER",
      expiryDateLabel: "EXPIRY DATE",
      addPhotoRequiredTitle: "Add document photo (required)",
      addPhotoRequiredBody:
        "A clear document photo is required for identity verification.",
      chooseFile: "Choose file",
      addPhotoTitle: "Add document photo",
      photoSpecBody: "Clear photo · all corners visible · JPG/PNG/PDF",
      uploadingAction: "Uploading… 68%",
      uploadingButton: "Uploading…",
      retryUpload: "Retry upload",
      uploadFailedHelper: "Upload failed. Check your connection and try again.",
      invalidDocHelper:
        "This document is expired or cannot be used for verification.",
      chooseAnotherDocument: "Choose another document",
      documentReadyTitle: "Document ready",
      readyToReview: "Ready to review",
      replaceDocument: "Replace document",
      addDocToContinue: "Add document to continue",
      photoAccessOffTitle: "Photo access is off",
      photoAccessOffBody: "Allow camera or photo access to add your document.",
      chooseAnotherMethod: "Choose another method",
      openSettings: "Open settings",
    },
    review: {
      title: "Review identity",
      subtitle: "Confirm the details before submitting them for verification.",
      personalDetails: "Personal details",
      legalNameRow: "Legal name",
      dobRow: "Date of birth",
      nationalityRow: "Nationality",
      identityDocument: "Identity document",
      documentTypeRow: "Document type",
      documentNumberRow: "Document number",
      expiryDateRow: "Expiry date",
      documentPhotoRow: "Document photo",
      addedValue: "Added",
      privateByDefaultTitle: "Private by default",
      privateByDefaultBody:
        "Identity documents are used to verify and protect your EMENDA ID. They are not automatically shared with an employer.",
      submitForVerification: "Submit for verification",
      editIdentityDetails: "Edit identity details",
    },
    verification: {
      gateTitle: "Verify your identity",
      gateSubtitle:
        "Confirm your identity to strengthen your worker-owned EMENDA ID.",
      whatYoullNeedTitle: "What you’ll need",
      whatYoullNeedBody:
        "Basic identity details and one supported identity document.",
      startVerification: "Start verification",
      backToEmendaId: "Back to EMENDA ID",
      title: "Identity verification",
      submittingSubtitle: "Securely sending your identity details.",
      submittingButton: "Submitting…",
      submittingHeading: "Submitting verification…",
      submittingBody: "Keep EMENDA open for a moment while this is sent.",
      pendingSubtitle: "Your identity was submitted successfully.",
      pendingHeading: "You can continue using EMENDA",
      pendingBody:
        "We’ll update your EMENDA ID when the verification review is complete.",
      continueToMyId: "Continue to My EMENDA ID",
      verifiedSubtitle: "Verification complete.",
      verifiedHeading: "Identity verified",
      verifiedBody: "Your verified identity is now linked to your EMENDA ID.",
      viewMyId: "View My EMENDA ID",
      needsReviewSubtitle: "We need one more action from you.",
      needsReviewHeading: "Review your identity document",
      needsReviewBody:
        "Some details couldn’t be confirmed. Check your document information, then submit again.",
      reviewDocument: "Review document",
      failedSubtitle: "We couldn’t complete verification this time.",
      failedHeading: "Try verification again",
      failedBody:
        "Your identity record wasn’t changed. You can retry now or return to your EMENDA ID.",
      tryAgain: "Try again",
      offlineSubtitle: "Verification needs an internet connection.",
      offlineTitle: "No internet connection",
      offlineBody: "Reconnect to continue identity verification.",
    },
    myId: {
      title: "My EMENDA ID",
      pendingSubtitle: "You can use this ID while verification is being reviewed.",
      verifiedSubtitle: "Your EMENDA ID is ready to show or share.",
      notVerifiedSubtitle: "Your EMENDA ID is ready to use.",
      loadingSubtitle:
        "Use this ID across employers while keeping private identity data under your control.",
      needsReviewSubtitle:
        "Your identity needs a quick review before verification can continue.",
      failedSubtitle:
        "We couldn’t complete identity verification. You can try again without creating a new EMENDA ID.",
      identityVerified: "Identity verified",
      createdLabel: "Created",
      showQr: "Show QR",
      shareId: "Share ID",
      privateDocsTitle: "Private documents stay private",
      privateDocsBody:
        "Showing or sharing this ID does not include passport images, emergency contacts, or private records.",
      continueToHome: "Continue to Home",
      verifyIdentity: "Verify identity",
      reviewDocument: "Review document",
      tryVerificationAgain: "Try verification again",
    },
    qr: {
      title: "Show EMENDA ID",
      subtitle: "Let someone scan this QR to receive your EMENDA ID.",
      idOnly: "ID only",
    },
    share: {
      title: "Share EMENDA ID",
      subtitle: "Review what the other person will receive before you share.",
      youllShare: "You'll share",
      verificationResult: "Verification result",
      staysPrivate: "Stays private",
      staysPrivateBody:
        "Passport image, emergency contacts, private records, and work history are not included.",
      shareEmendaId: "Share EMENDA ID",
    },
    shared: {
      title: "EMENDA ID shared",
      subtitle: "Your EMENDA ID was shared successfully.",
      successTitle: "Shared successfully",
      successBody:
        "Only your EMENDA ID, name, and verification result were shared. Your private identity documents remain protected.",
    },
  },
  id: {
    emendaIdLabel: "EMENDA ID",
    ready: {
      title: "EMENDA ID Anda sudah siap",
      subtitle: "EMENDA ID milik Anda sebagai pekerja sudah siap.",
      createdFor: "Dibuat untuk {name}",
      staysWithYouTitle: "ID ini tetap bersama Anda",
      staysWithYouBody:
        "Gunakan EMENDA ID yang sama meski pemberi kerja Anda berganti.",
      continueIdentitySetup: "Lanjutkan pengaturan identitas",
      doThisLater: "Lakukan nanti",
    },
    details: {
      title: "Detail identitas",
      subtitle:
        "Masukkan detail identitas legal yang digunakan untuk melindungi EMENDA ID Anda.",
      legalNameLabel: "NAMA LEGAL",
      dobLabel: "TANGGAL LAHIR",
      nationalityLabel: "KEWARGANEGARAAN",
      legalNameError:
        "Gunakan nama legal persis seperti yang tertera pada dokumen identitas Anda.",
    },
    reference: {
      title: "Referensi identitas",
      subtitle: "Pilih dokumen yang dapat mendukung verifikasi identitas.",
      permissionTitle: "Tambahkan dokumen identitas",
      permissionSubtitle:
        "EMENDA memerlukan akses hanya saat Anda memilih sumber foto atau kamera.",
      documentTypeLabel: "JENIS DOKUMEN",
      passport: "Paspor",
      selectedMeta: "Dipilih",
      residenceCard: "Kartu izin tinggal",
      japanMeta: "Jepang",
      documentNumberLabel: "NOMOR DOKUMEN",
      expiryDateLabel: "TANGGAL KEDALUWARSA",
      addPhotoRequiredTitle: "Tambahkan foto dokumen (wajib)",
      addPhotoRequiredBody:
        "Foto dokumen yang jelas diperlukan untuk verifikasi identitas.",
      chooseFile: "Pilih file",
      addPhotoTitle: "Tambahkan foto dokumen",
      photoSpecBody: "Foto jelas · semua sudut terlihat · JPG/PNG/PDF",
      uploadingAction: "Mengunggah… 68%",
      uploadingButton: "Mengunggah…",
      retryUpload: "Coba unggah lagi",
      uploadFailedHelper:
        "Unggahan gagal. Periksa koneksi Anda dan coba lagi.",
      invalidDocHelper:
        "Dokumen ini kedaluwarsa atau tidak dapat digunakan untuk verifikasi.",
      chooseAnotherDocument: "Pilih dokumen lain",
      documentReadyTitle: "Dokumen siap",
      readyToReview: "Siap ditinjau",
      replaceDocument: "Ganti dokumen",
      addDocToContinue: "Tambahkan dokumen untuk melanjutkan",
      photoAccessOffTitle: "Akses foto nonaktif",
      photoAccessOffBody:
        "Izinkan akses kamera atau foto untuk menambahkan dokumen Anda.",
      chooseAnotherMethod: "Pilih metode lain",
      openSettings: "Buka pengaturan",
    },
    review: {
      title: "Tinjau identitas",
      subtitle: "Konfirmasi detail sebelum mengirimkannya untuk verifikasi.",
      personalDetails: "Detail pribadi",
      legalNameRow: "Nama legal",
      dobRow: "Tanggal lahir",
      nationalityRow: "Kewarganegaraan",
      identityDocument: "Dokumen identitas",
      documentTypeRow: "Jenis dokumen",
      documentNumberRow: "Nomor dokumen",
      expiryDateRow: "Tanggal kedaluwarsa",
      documentPhotoRow: "Foto dokumen",
      addedValue: "Ditambahkan",
      privateByDefaultTitle: "Privat secara default",
      privateByDefaultBody:
        "Dokumen identitas digunakan untuk memverifikasi dan melindungi EMENDA ID Anda. Dokumen tidak dibagikan secara otomatis kepada pemberi kerja.",
      submitForVerification: "Kirim untuk verifikasi",
      editIdentityDetails: "Ubah detail identitas",
    },
    verification: {
      gateTitle: "Verifikasi identitas Anda",
      gateSubtitle:
        "Konfirmasi identitas Anda untuk memperkuat EMENDA ID milik Anda sebagai pekerja.",
      whatYoullNeedTitle: "Yang Anda perlukan",
      whatYoullNeedBody:
        "Detail identitas dasar dan satu dokumen identitas yang didukung.",
      startVerification: "Mulai verifikasi",
      backToEmendaId: "Kembali ke EMENDA ID",
      title: "Verifikasi identitas",
      submittingSubtitle: "Mengirim detail identitas Anda dengan aman.",
      submittingButton: "Mengirim…",
      submittingHeading: "Mengirim verifikasi…",
      submittingBody:
        "Biarkan EMENDA tetap terbuka sebentar selagi data dikirim.",
      pendingSubtitle: "Identitas Anda berhasil dikirim.",
      pendingHeading: "Anda dapat terus menggunakan EMENDA",
      pendingBody:
        "Kami akan memperbarui EMENDA ID Anda saat tinjauan verifikasi selesai.",
      continueToMyId: "Lanjut ke EMENDA ID Saya",
      verifiedSubtitle: "Verifikasi selesai.",
      verifiedHeading: "Identitas terverifikasi",
      verifiedBody:
        "Identitas terverifikasi Anda kini tertaut ke EMENDA ID Anda.",
      viewMyId: "Lihat EMENDA ID Saya",
      needsReviewSubtitle: "Kami memerlukan satu tindakan lagi dari Anda.",
      needsReviewHeading: "Tinjau dokumen identitas Anda",
      needsReviewBody:
        "Beberapa detail tidak dapat dikonfirmasi. Periksa informasi dokumen Anda, lalu kirim lagi.",
      reviewDocument: "Tinjau dokumen",
      failedSubtitle: "Kami tidak dapat menyelesaikan verifikasi kali ini.",
      failedHeading: "Coba verifikasi lagi",
      failedBody:
        "Catatan identitas Anda tidak berubah. Anda dapat mencoba lagi sekarang atau kembali ke EMENDA ID Anda.",
      tryAgain: "Coba lagi",
      offlineSubtitle: "Verifikasi memerlukan koneksi internet.",
      offlineTitle: "Tidak ada koneksi internet",
      offlineBody: "Sambungkan kembali untuk melanjutkan verifikasi identitas.",
    },
    myId: {
      title: "EMENDA ID Saya",
      pendingSubtitle:
        "Anda dapat menggunakan ID ini selagi verifikasi sedang ditinjau.",
      verifiedSubtitle:
        "EMENDA ID Anda siap untuk ditunjukkan atau dibagikan.",
      notVerifiedSubtitle: "EMENDA ID Anda siap digunakan.",
      loadingSubtitle:
        "Gunakan ID ini lintas pemberi kerja sambil menjaga data identitas privat tetap dalam kendali Anda.",
      needsReviewSubtitle:
        "Identitas Anda memerlukan tinjauan singkat sebelum verifikasi dapat dilanjutkan.",
      failedSubtitle:
        "Kami tidak dapat menyelesaikan verifikasi identitas. Anda dapat mencoba lagi tanpa membuat EMENDA ID baru.",
      identityVerified: "Identitas terverifikasi",
      createdLabel: "Dibuat",
      showQr: "Tampilkan QR",
      shareId: "Bagikan ID",
      privateDocsTitle: "Dokumen privat tetap privat",
      privateDocsBody:
        "Menunjukkan atau membagikan ID ini tidak menyertakan gambar paspor, kontak darurat, atau catatan privat.",
      continueToHome: "Lanjut ke Beranda",
      verifyIdentity: "Verifikasi identitas",
      reviewDocument: "Tinjau dokumen",
      tryVerificationAgain: "Coba verifikasi lagi",
    },
    qr: {
      title: "Tampilkan EMENDA ID",
      subtitle:
        "Biarkan seseorang memindai QR ini untuk menerima EMENDA ID Anda.",
      idOnly: "Hanya ID",
    },
    share: {
      title: "Bagikan EMENDA ID",
      subtitle:
        "Tinjau apa yang akan diterima orang lain sebelum Anda membagikannya.",
      youllShare: "Yang akan Anda bagikan",
      verificationResult: "Hasil verifikasi",
      staysPrivate: "Tetap privat",
      staysPrivateBody:
        "Gambar paspor, kontak darurat, catatan privat, dan riwayat kerja tidak disertakan.",
      shareEmendaId: "Bagikan EMENDA ID",
    },
    shared: {
      title: "EMENDA ID dibagikan",
      subtitle: "EMENDA ID Anda berhasil dibagikan.",
      successTitle: "Berhasil dibagikan",
      successBody:
        "Hanya EMENDA ID, nama, dan hasil verifikasi Anda yang dibagikan. Dokumen identitas privat Anda tetap terlindungi.",
    },
  },
  ja: {
    emendaIdLabel: "EMENDA ID",
    ready: {
      title: "EMENDA IDの準備ができました",
      subtitle: "あなたが所有するEMENDA IDの準備ができました。",
      createdFor: "{name} のために作成",
      staysWithYouTitle: "このIDはあなたとともに",
      staysWithYouBody: "雇用主が変わっても同じEMENDA IDを使えます。",
      continueIdentitySetup: "本人確認の設定を続ける",
      doThisLater: "あとで行う",
    },
    details: {
      title: "本人情報",
      subtitle:
        "EMENDA IDを保護するために使用する法的な本人情報を入力してください。",
      legalNameLabel: "法的氏名",
      dobLabel: "生年月日",
      nationalityLabel: "国籍",
      legalNameError:
        "身分証明書に記載されているとおりの法的氏名を入力してください。",
    },
    reference: {
      title: "本人確認書類",
      subtitle: "本人確認に使用できる書類を選択してください。",
      permissionTitle: "本人確認書類を追加",
      permissionSubtitle:
        "EMENDAが写真やカメラにアクセスするのは、あなたが選択したときだけです。",
      documentTypeLabel: "書類の種類",
      passport: "パスポート",
      selectedMeta: "選択中",
      residenceCard: "在留カード",
      japanMeta: "日本",
      documentNumberLabel: "書類番号",
      expiryDateLabel: "有効期限",
      addPhotoRequiredTitle: "書類の写真を追加（必須）",
      addPhotoRequiredBody: "本人確認には鮮明な書類の写真が必要です。",
      chooseFile: "ファイルを選択",
      addPhotoTitle: "書類の写真を追加",
      photoSpecBody: "鮮明な写真 · 四隅がすべて見える · JPG/PNG/PDF",
      uploadingAction: "アップロード中… 68%",
      uploadingButton: "アップロード中…",
      retryUpload: "再アップロード",
      uploadFailedHelper:
        "アップロードに失敗しました。接続を確認してもう一度お試しください。",
      invalidDocHelper:
        "この書類は期限切れか、本人確認に使用できません。",
      chooseAnotherDocument: "別の書類を選ぶ",
      documentReadyTitle: "書類の準備完了",
      readyToReview: "確認の準備完了",
      replaceDocument: "書類を差し替える",
      addDocToContinue: "続行するには書類を追加",
      photoAccessOffTitle: "写真へのアクセスがオフです",
      photoAccessOffBody:
        "書類を追加するには、カメラまたは写真へのアクセスを許可してください。",
      chooseAnotherMethod: "別の方法を選ぶ",
      openSettings: "設定を開く",
    },
    review: {
      title: "本人情報の確認",
      subtitle: "本人確認の申請前に、内容を確認してください。",
      personalDetails: "個人情報",
      legalNameRow: "法的氏名",
      dobRow: "生年月日",
      nationalityRow: "国籍",
      identityDocument: "本人確認書類",
      documentTypeRow: "書類の種類",
      documentNumberRow: "書類番号",
      expiryDateRow: "有効期限",
      documentPhotoRow: "書類の写真",
      addedValue: "追加済み",
      privateByDefaultTitle: "初期設定で非公開",
      privateByDefaultBody:
        "本人確認書類はEMENDA IDの確認と保護のために使用されます。雇用主に自動的に共有されることはありません。",
      submitForVerification: "本人確認を申請",
      editIdentityDetails: "本人情報を編集",
    },
    verification: {
      gateTitle: "本人確認を行う",
      gateSubtitle:
        "本人確認を行い、あなたが所有するEMENDA IDをより確かなものにしましょう。",
      whatYoullNeedTitle: "必要なもの",
      whatYoullNeedBody:
        "基本的な本人情報と、対応している本人確認書類1点。",
      startVerification: "本人確認を開始",
      backToEmendaId: "EMENDA IDに戻る",
      title: "本人確認",
      submittingSubtitle: "本人情報を安全に送信しています。",
      submittingButton: "送信中…",
      submittingHeading: "本人確認を送信中…",
      submittingBody:
        "送信が完了するまで、EMENDAをしばらく開いたままにしてください。",
      pendingSubtitle: "本人情報が正常に送信されました。",
      pendingHeading: "EMENDAは引き続き利用できます",
      pendingBody: "確認の審査が完了したら、EMENDA IDを更新します。",
      continueToMyId: "マイEMENDA IDへ進む",
      verifiedSubtitle: "本人確認が完了しました。",
      verifiedHeading: "本人確認済み",
      verifiedBody: "確認済みの本人情報がEMENDA IDに紐付けられました。",
      viewMyId: "マイEMENDA IDを見る",
      needsReviewSubtitle: "もう1つの対応が必要です。",
      needsReviewHeading: "本人確認書類を確認してください",
      needsReviewBody:
        "一部の内容を確認できませんでした。書類の情報を確認して、もう一度申請してください。",
      reviewDocument: "書類を確認",
      failedSubtitle: "今回は本人確認を完了できませんでした。",
      failedHeading: "もう一度本人確認を行う",
      failedBody:
        "本人情報の記録は変更されていません。今すぐ再試行するか、EMENDA IDに戻れます。",
      tryAgain: "もう一度試す",
      offlineSubtitle: "本人確認にはインターネット接続が必要です。",
      offlineTitle: "インターネットに接続されていません",
      offlineBody: "再接続して本人確認を続けてください。",
    },
    myId: {
      title: "マイEMENDA ID",
      pendingSubtitle: "確認の審査中も、このIDを使用できます。",
      verifiedSubtitle: "EMENDA IDを提示・共有する準備ができました。",
      notVerifiedSubtitle: "EMENDA IDを使用する準備ができました。",
      loadingSubtitle:
        "非公開の本人情報を自分の管理下に置いたまま、雇用主が変わってもこのIDを使えます。",
      needsReviewSubtitle:
        "確認を続けるには、本人情報の簡単な見直しが必要です。",
      failedSubtitle:
        "本人確認を完了できませんでした。新しいEMENDA IDを作成せずに再試行できます。",
      identityVerified: "本人確認済み",
      createdLabel: "作成日",
      showQr: "QRを表示",
      shareId: "IDを共有",
      privateDocsTitle: "非公開の書類は非公開のまま",
      privateDocsBody:
        "このIDの提示や共有に、パスポートの画像、緊急連絡先、非公開の記録は含まれません。",
      continueToHome: "ホームへ進む",
      verifyIdentity: "本人確認を行う",
      reviewDocument: "書類を確認",
      tryVerificationAgain: "もう一度本人確認する",
    },
    qr: {
      title: "EMENDA IDを提示",
      subtitle:
        "このQRをスキャンしてもらうと、相手にEMENDA IDが伝わります。",
      idOnly: "IDのみ",
    },
    share: {
      title: "EMENDA IDを共有",
      subtitle: "共有する前に、相手が受け取る内容を確認してください。",
      youllShare: "共有される情報",
      verificationResult: "確認結果",
      staysPrivate: "非公開のまま",
      staysPrivateBody:
        "パスポートの画像、緊急連絡先、非公開の記録、職務履歴は含まれません。",
      shareEmendaId: "EMENDA IDを共有",
    },
    shared: {
      title: "EMENDA IDを共有しました",
      subtitle: "EMENDA IDが正常に共有されました。",
      successTitle: "共有が完了しました",
      successBody:
        "共有されたのはEMENDA ID、氏名、確認結果のみです。非公開の本人確認書類は保護されたままです。",
    },
  },
});
