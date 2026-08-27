import { defineSectionCopy, useSectionCopy } from "@/i18n/copy";

/** Personal Profile section copy (Figma WD-19..WD-20 / W-19..W-20).
 *  EN strings are verbatim from the mocks. */
export interface ProfileCopy {
  // WD-19 view
  pageTitle: string;
  subtitle: string;
  subtitleIncomplete: string;
  subtitleLoading: string;
  subtitleOffline: string;
  changePhoto: string;
  detailsMissing: string;
  personalInformation: string;
  emailLabel: string;
  currentLocationLabel: string;
  aboutMeLabel: string;
  notAdded: string;
  editPersonalInformation: string;
  addPersonalInformation: string;
  legalIdentityTitle: string;
  legalIdentityBody: string;
  legalIdentityBodyIncomplete: string;
  viewIdentity: string;
  privacyTitle: string;
  privacyBody: string;
  completeProfileTitle: string;
  completeProfileBody: string;
  continueProfile: string;
  identityDocumentsTitle: string;
  identityDocumentsBody: string;
  documents: string;
  emendaCoin: string;
  /** "{count}" is replaced with the raw coin balance. */
  coinSummary: string;
  profileUpdated: string;
  // Avatar overlays (WD-19D..G)
  profilePhotoTitle: string;
  profilePhotoSubtitle: string;
  chooseFromPhotos: string;
  useInitials: string;
  photoAccessOff: string;
  photoAccessBody: string;
  openSettings: string;
  useInitialsInstead: string;
  updatingPhotoTitle: string;
  updatingPhotoBody: string;
  updatingLabel: string;
  photoFailedTitle: string;
  photoFailedBody: string;
  tryAgain: string;
  // WD-20 edit
  editTitle: string;
  editSubtitle: string;
  labelDisplayName: string;
  helperDisplayName: string;
  labelEmail: string;
  labelCountry: string;
  labelCity: string;
  labelAboutMe: string;
  saveChanges: string;
  savingLabel: string;
  errorEmail: string;
  errorCity: string;
  errorCountry: string;
  selectCountryPlaceholder: string;
  saveFailedTitle: string;
  saveFailedBody: string;
  trySavingAgain: string;
  offlineTitle: string;
  offlineBody: string;
  discardTitle: string;
  discardBody: string;
  keepEditing: string;
  discardChanges: string;
  // Country selector overlay
  selectCountryTitle: string;
  selectCountrySubtitle: string;
  searchCountry: string;
}

export const PROFILE_COPY = defineSectionCopy<ProfileCopy>({
  en: {
    pageTitle: "Personal profile",
    subtitle: "Manage your personal details used across EMENDA.",
    subtitleIncomplete: "Finish the personal details used across EMENDA.",
    subtitleLoading: "Loading your profile",
    subtitleOffline: "Offline · cached profile · editing requires internet.",
    changePhoto: "Change photo",
    detailsMissing: "2 details missing",
    personalInformation: "Personal information",
    emailLabel: "Email",
    currentLocationLabel: "Current location",
    aboutMeLabel: "About me",
    notAdded: "Not added",
    editPersonalInformation: "Edit personal information",
    addPersonalInformation: "Add personal information",
    legalIdentityTitle: "Legal identity is managed separately",
    legalIdentityBody:
      "Legal name and identity documents stay in EMENDA ID & Identity.",
    legalIdentityBodyIncomplete:
      "Verified legal name and identity documents stay in EMENDA ID & Identity.",
    viewIdentity: "View identity",
    privacyTitle: "You control what is shared",
    privacyBody: "Employers only receive profile data you explicitly approve.",
    completeProfileTitle: "Complete your personal profile",
    completeProfileBody:
      "Add email and current location to finish your personal profile.",
    continueProfile: "Continue profile",
    identityDocumentsTitle: "Identity & documents",
    identityDocumentsBody:
      "Identity stays in EMENDA ID. Personal files stay in Documents.",
    documents: "Documents",
    emendaCoin: "Emenda Coin",
    coinSummary: "{count} coins · View rewards",
    profileUpdated: "Profile updated",
    profilePhotoTitle: "Profile photo",
    profilePhotoSubtitle: "Choose how you want to appear in EMENDA.",
    chooseFromPhotos: "Choose from photos",
    useInitials: "Use initials",
    photoAccessOff: "Photo access is off",
    photoAccessBody:
      "Allow Photos access in Settings, or keep using your initials.",
    openSettings: "Open settings",
    useInitialsInstead: "Use initials instead",
    updatingPhotoTitle: "Updating profile photo",
    updatingPhotoBody:
      "Uploading your new photo. Keep EMENDA open for a moment.",
    updatingLabel: "Updating…",
    photoFailedTitle: "Couldn’t update profile photo",
    photoFailedBody:
      "Your current profile photo is unchanged. You can try again or keep using your initials.",
    tryAgain: "Try again",
    editTitle: "Edit personal profile",
    editSubtitle: "Update the personal details shown across EMENDA.",
    labelDisplayName: "PROFILE · DISPLAY NAME",
    helperDisplayName: "Shown across EMENDA. Your legal name stays unchanged.",
    labelEmail: "CONTACT · EMAIL",
    labelCountry: "LOCATION · CURRENT COUNTRY",
    labelCity: "CITY / PREFECTURE",
    labelAboutMe: "ABOUT ME · OPTIONAL",
    saveChanges: "Save changes",
    savingLabel: "Saving…",
    errorEmail: "Enter a valid email address.",
    errorCity: "Enter your city or prefecture.",
    errorCountry: "Select your current country.",
    selectCountryPlaceholder: "Select country",
    saveFailedTitle: "Couldn’t save your changes.",
    saveFailedBody: "Your edits are still here. Try saving again.",
    trySavingAgain: "Try saving again",
    offlineTitle: "No internet connection",
    offlineBody: "Changes can’t be saved until you reconnect.",
    discardTitle: "Discard changes?",
    discardBody: "Your unsaved profile changes will be lost.",
    keepEditing: "Keep editing",
    discardChanges: "Discard changes",
    selectCountryTitle: "Select country",
    selectCountrySubtitle: "Choose your current country of residence.",
    searchCountry: "Search country",
  },
  id: {
    pageTitle: "Profil pribadi",
    subtitle: "Kelola data pribadi Anda yang digunakan di seluruh EMENDA.",
    subtitleIncomplete:
      "Lengkapi data pribadi yang digunakan di seluruh EMENDA.",
    subtitleLoading: "Memuat profil Anda",
    subtitleOffline:
      "Offline · profil tersimpan · pengeditan memerlukan internet.",
    changePhoto: "Ubah foto",
    detailsMissing: "2 data belum lengkap",
    personalInformation: "Informasi pribadi",
    emailLabel: "Email",
    currentLocationLabel: "Lokasi saat ini",
    aboutMeLabel: "Tentang saya",
    notAdded: "Belum diisi",
    editPersonalInformation: "Ubah informasi pribadi",
    addPersonalInformation: "Tambah informasi pribadi",
    legalIdentityTitle: "Identitas legal dikelola secara terpisah",
    legalIdentityBody:
      "Nama legal dan dokumen identitas tersimpan di EMENDA ID & Identitas.",
    legalIdentityBodyIncomplete:
      "Nama legal terverifikasi dan dokumen identitas tersimpan di EMENDA ID & Identitas.",
    viewIdentity: "Lihat identitas",
    privacyTitle: "Anda mengontrol apa yang dibagikan",
    privacyBody:
      "Pemberi kerja hanya menerima data profil yang Anda setujui secara eksplisit.",
    completeProfileTitle: "Lengkapi profil pribadi Anda",
    completeProfileBody:
      "Tambahkan email dan lokasi saat ini untuk melengkapi profil pribadi Anda.",
    continueProfile: "Lanjutkan profil",
    identityDocumentsTitle: "Identitas & dokumen",
    identityDocumentsBody:
      "Identitas tersimpan di EMENDA ID. Berkas pribadi tersimpan di Dokumen.",
    documents: "Dokumen",
    emendaCoin: "Emenda Coin",
    coinSummary: "{count} koin · Lihat hadiah",
    profileUpdated: "Profil diperbarui",
    profilePhotoTitle: "Foto profil",
    profilePhotoSubtitle: "Pilih bagaimana Anda ingin tampil di EMENDA.",
    chooseFromPhotos: "Pilih dari foto",
    useInitials: "Gunakan inisial",
    photoAccessOff: "Akses foto tidak aktif",
    photoAccessBody:
      "Izinkan akses Foto di Pengaturan, atau tetap gunakan inisial Anda.",
    openSettings: "Buka pengaturan",
    useInitialsInstead: "Gunakan inisial saja",
    updatingPhotoTitle: "Memperbarui foto profil",
    updatingPhotoBody:
      "Mengunggah foto baru Anda. Biarkan EMENDA tetap terbuka sebentar.",
    updatingLabel: "Memperbarui…",
    photoFailedTitle: "Tidak dapat memperbarui foto profil",
    photoFailedBody:
      "Foto profil Anda saat ini tidak berubah. Anda dapat mencoba lagi atau tetap menggunakan inisial.",
    tryAgain: "Coba lagi",
    editTitle: "Ubah profil pribadi",
    editSubtitle:
      "Perbarui data pribadi yang ditampilkan di seluruh EMENDA.",
    labelDisplayName: "PROFIL · NAMA TAMPILAN",
    helperDisplayName:
      "Ditampilkan di seluruh EMENDA. Nama legal Anda tidak berubah.",
    labelEmail: "KONTAK · EMAIL",
    labelCountry: "LOKASI · NEGARA SAAT INI",
    labelCity: "KOTA / PREFEKTUR",
    labelAboutMe: "TENTANG SAYA · OPSIONAL",
    saveChanges: "Simpan perubahan",
    savingLabel: "Menyimpan…",
    errorEmail: "Masukkan alamat email yang valid.",
    errorCity: "Masukkan kota atau prefektur Anda.",
    errorCountry: "Pilih negara Anda saat ini.",
    selectCountryPlaceholder: "Pilih negara",
    saveFailedTitle: "Tidak dapat menyimpan perubahan Anda.",
    saveFailedBody:
      "Perubahan Anda masih tersimpan di sini. Coba simpan lagi.",
    trySavingAgain: "Coba simpan lagi",
    offlineTitle: "Tidak ada koneksi internet",
    offlineBody:
      "Perubahan tidak dapat disimpan sampai Anda terhubung kembali.",
    discardTitle: "Buang perubahan?",
    discardBody: "Perubahan profil yang belum disimpan akan hilang.",
    keepEditing: "Lanjutkan mengedit",
    discardChanges: "Buang perubahan",
    selectCountryTitle: "Pilih negara",
    selectCountrySubtitle: "Pilih negara tempat tinggal Anda saat ini.",
    searchCountry: "Cari negara",
  },
  ja: {
    pageTitle: "個人プロフィール",
    subtitle: "EMENDA全体で使用される個人情報を管理します。",
    subtitleIncomplete: "EMENDA全体で使用される個人情報を完成させましょう。",
    subtitleLoading: "プロフィールを読み込んでいます",
    subtitleOffline:
      "オフライン · キャッシュされたプロフィール · 編集にはインターネット接続が必要です。",
    changePhoto: "写真を変更",
    detailsMissing: "未入力の項目が2件",
    personalInformation: "個人情報",
    emailLabel: "メール",
    currentLocationLabel: "現在の所在地",
    aboutMeLabel: "自己紹介",
    notAdded: "未登録",
    editPersonalInformation: "個人情報を編集",
    addPersonalInformation: "個人情報を追加",
    legalIdentityTitle: "法的身元情報は別に管理されます",
    legalIdentityBody:
      "法的氏名と身分証明書はEMENDA ID・本人確認に保管されます。",
    legalIdentityBodyIncomplete:
      "確認済みの法的氏名と身分証明書はEMENDA ID・本人確認に保管されます。",
    viewIdentity: "本人確認を見る",
    privacyTitle: "共有する情報はあなたが管理します",
    privacyBody:
      "雇用主はあなたが明示的に承認したプロフィールデータのみを受け取ります。",
    completeProfileTitle: "個人プロフィールを完成させましょう",
    completeProfileBody:
      "メールと現在の所在地を追加して個人プロフィールを完成させてください。",
    continueProfile: "プロフィールを続ける",
    identityDocumentsTitle: "本人確認と書類",
    identityDocumentsBody:
      "身元情報はEMENDA IDに、個人ファイルは書類に保管されます。",
    documents: "書類",
    emendaCoin: "Emenda Coin",
    coinSummary: "{count}コイン · 特典を見る",
    profileUpdated: "プロフィールを更新しました",
    profilePhotoTitle: "プロフィール写真",
    profilePhotoSubtitle: "EMENDAでの表示方法を選択してください。",
    chooseFromPhotos: "写真から選ぶ",
    useInitials: "イニシャルを使う",
    photoAccessOff: "写真へのアクセスがオフです",
    photoAccessBody:
      "設定で写真へのアクセスを許可するか、引き続きイニシャルをご利用ください。",
    openSettings: "設定を開く",
    useInitialsInstead: "代わりにイニシャルを使う",
    updatingPhotoTitle: "プロフィール写真を更新しています",
    updatingPhotoBody:
      "新しい写真をアップロードしています。しばらくEMENDAを開いたままにしてください。",
    updatingLabel: "更新中…",
    photoFailedTitle: "プロフィール写真を更新できませんでした",
    photoFailedBody:
      "現在のプロフィール写真は変更されていません。もう一度試すか、引き続きイニシャルをご利用ください。",
    tryAgain: "もう一度試す",
    editTitle: "個人プロフィールを編集",
    editSubtitle: "EMENDA全体で表示される個人情報を更新します。",
    labelDisplayName: "プロフィール · 表示名",
    helperDisplayName: "EMENDA全体で表示されます。法的氏名は変更されません。",
    labelEmail: "連絡先 · メール",
    labelCountry: "所在地 · 現在の国",
    labelCity: "市区町村 / 都道府県",
    labelAboutMe: "自己紹介 · 任意",
    saveChanges: "変更を保存",
    savingLabel: "保存中…",
    errorEmail: "有効なメールアドレスを入力してください。",
    errorCity: "市区町村または都道府県を入力してください。",
    errorCountry: "現在の国を選択してください。",
    selectCountryPlaceholder: "国を選択",
    saveFailedTitle: "変更を保存できませんでした。",
    saveFailedBody: "編集内容は残っています。もう一度保存してください。",
    trySavingAgain: "もう一度保存する",
    offlineTitle: "インターネット接続がありません",
    offlineBody: "再接続するまで変更を保存できません。",
    discardTitle: "変更を破棄しますか？",
    discardBody: "保存されていないプロフィールの変更は失われます。",
    keepEditing: "編集を続ける",
    discardChanges: "変更を破棄",
    selectCountryTitle: "国を選択",
    selectCountrySubtitle: "現在お住まいの国を選択してください。",
    searchCountry: "国を検索",
  },
});

export function useProfileCopy(): ProfileCopy {
  return useSectionCopy(PROFILE_COPY);
}
