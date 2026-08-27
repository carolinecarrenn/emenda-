import { defineSectionCopy } from "@/i18n/copy";

/** Section 01 · Worker Auth & Account Access (WD-01..WD-11 / W-01..W-11).
 *  EN strings are verbatim Figma mock copy (source of truth). */
export interface AuthCopy {
  splash: {
    tagline: string;
    subline: string;
    footerDesktop: string;
    footerMobile: string;
  };
  language: {
    title: string;
    subtitle: string;
    selected: string;
    caption: string;
  };
  welcome: {
    title: string;
    subtitle: string;
    cardTitle: string;
    cardBody: string;
    workerOwned: string;
    createAccount: string;
    footnote: string;
    /** FE-added entry to W-10 Session Expired — see WelcomePage. */
    sessionExpiredLink: string;
  };
  login: {
    subtitle: string;
    countryLabel: string;
    phoneLabel: string;
    pinLabel: string;
    forgotPin: string;
    loggingIn: string;
    invalidPin: string;
    tooManyHelper: string;
    tryAgainIn: string;
  };
  register: {
    title: string;
    subtitle: string;
    primary: string;
    loading: string;
    secondary: string;
    invalidPhone: string;
    alreadyRegistered: string;
    noteTitle: string;
    noteBody: string;
  };
  otp: {
    title: string;
    subtitle: string;
    verify: string;
    verifying: string;
    resend: string;
    changePhone: string;
    invalidCode: string;
    expiredHelper: string;
    expiredLabel: string;
    sendNewCode: string;
    resendAvailableIn: string;
    newCodeSent: string;
    tooManyRequests: string;
    resendLocked: string;
  };
  pin: {
    newPinLabel: string;
    confirmPinLabel: string;
    reqTitle: string;
    reqBody: string;
    mismatch: string;
  };
  createPin: {
    title: string;
    subtitle: string;
    submit: string;
    saving: string;
    failed: string;
    tryAgain: string;
  };
  forgotPin: {
    title: string;
    subtitle: string;
    noPhoneAccess: string;
    whyTitle: string;
    whyBody: string;
    send: string;
    sending: string;
    backToLogin: string;
    phoneNotFound: string;
  };
  recover: {
    title: string;
    subtitle: string;
    noticeTitle: string;
    noticeBody: string;
    start: string;
    footnote: string;
  };
  resetPin: {
    title: string;
    subtitle: string;
    submit: string;
    saving: string;
    cancelRecovery: string;
    successTitle: string;
    successBody: string;
    continueToLogin: string;
    failedTitle: string;
    failedBody: string;
    tryAgain: string;
  };
  sessionExpired: {
    title: string;
    subtitle: string;
    cardTitle: string;
    cardBody: string;
    loginAgain: string;
    backToWelcome: string;
    preservedTitle: string;
    preservedBody: string;
  };
  logout: {
    title: string;
    subtitle: string;
    cardTitle: string;
    cardBody: string;
    loggingOut: string;
    signedOutTitle: string;
    signedOutSubtitle: string;
    pendingTitle: string;
    pendingAction: string;
  };
  offline: {
    title: string;
    tryAgain: string;
  };
}

export const AUTH_COPY = defineSectionCopy<AuthCopy>({
  en: {
    splash: {
      tagline: "WORK · IDENTITY · RECORDS",
      subline: "A privacy-first work companion",
      footerDesktop: "Worker Desktop Experience",
      footerMobile: "Worker Mobile Experience",
    },
    language: {
      title: "Choose your language",
      subtitle:
        "Select the language used across EMENDA. You can change this later in Settings.",
      selected: "Selected",
      caption: "This setting changes the app interface language.",
    },
    welcome: {
      title: "Welcome to EMENDA",
      subtitle: "One worker account. Your records stay with you.",
      cardTitle: "Already have an EMENDA ID?",
      cardBody: "Sign in with your verified phone number.",
      workerOwned: "WORKER-OWNED",
      createAccount: "Create new account",
      footnote:
        "You can connect an employer later. Creating an account does not require an employer.",
      sessionExpiredLink: "Signed out unexpectedly?",
    },
    login: {
      subtitle: "Use your verified phone number and PIN.",
      countryLabel: "Country",
      phoneLabel: "Phone number",
      pinLabel: "PIN",
      forgotPin: "Forgot PIN?",
      loggingIn: "Logging in…",
      invalidPin: "Incorrect PIN. Check the PIN and try again.",
      tooManyHelper: "Too many attempts. Try again in {time}.",
      tryAgainIn: "Try again in {time}",
    },
    register: {
      title: "Create your account",
      subtitle: "Start your EMENDA ID before or after arriving in Japan.",
      primary: "Continue to verification",
      loading: "Sending code…",
      secondary: "Already have an account? Log in",
      invalidPhone: "Enter a valid phone number.",
      alreadyRegistered: "This number is already linked to an EMENDA ID.",
      noteTitle: "Your account belongs to you.",
      noteBody: "An employer can be connected later with your consent.",
    },
    otp: {
      title: "Verify your phone",
      subtitle: "We sent a 6-digit code to {phone}.",
      verify: "Verify",
      verifying: "Verifying…",
      resend: "Resend code",
      changePhone: "Change phone number",
      invalidCode: "Incorrect code. Check the 6 digits and try again.",
      expiredHelper: "This code has expired. Request a new code to continue.",
      expiredLabel: "Code expired",
      sendNewCode: "Send new code",
      resendAvailableIn: "Resend available in {time}",
      newCodeSent: "New code sent. Use the latest code from your phone.",
      tooManyRequests:
        "Too many code requests. Wait before requesting another code.",
      resendLocked: "Resend locked · {time}",
    },
    pin: {
      newPinLabel: "NEW PIN",
      confirmPinLabel: "CONFIRM PIN",
      reqTitle: "PIN requirements",
      reqBody:
        "Use 6 digits. Avoid repeated or sequential numbers that are easy to guess.",
      mismatch: "PINs do not match.",
    },
    createPin: {
      title: "Create PIN",
      subtitle: "Create a 6-digit PIN for future sign-ins.",
      submit: "Create PIN",
      saving: "Saving PIN…",
      failed: "PIN wasn’t saved. Check your connection and try again.",
      tryAgain: "Try again",
    },
    forgotPin: {
      title: "Forgot PIN",
      subtitle: "Verify your phone before creating a new PIN.",
      noPhoneAccess: "I can’t access this phone",
      whyTitle: "Why verify again?",
      whyBody:
        "PIN recovery changes account access, so EMENDA confirms the verified phone first.",
      send: "Send verification code",
      sending: "Sending code…",
      backToLogin: "Back to log in",
      phoneNotFound: "No account found for this phone number.",
    },
    recover: {
      title: "Recover account access",
      subtitle:
        "Use official recovery if you can’t receive a code on your verified phone.",
      noticeTitle: "Your EMENDA ID stays protected",
      noticeBody:
        "Changing the verified phone requires identity checks. EMENDA will not create a new ID or silently replace your account.",
      start: "Start account recovery",
      footnote:
        "You may be asked to confirm identity details before phone access can be changed.",
    },
    resetPin: {
      title: "Reset PIN",
      subtitle: "Choose a new 6-digit PIN after phone verification.",
      submit: "Reset PIN",
      saving: "Saving new PIN…",
      cancelRecovery: "Cancel recovery",
      successTitle: "PIN updated",
      successBody: "Use your new PIN the next time you sign in.",
      continueToLogin: "Continue to log in",
      failedTitle: "Couldn’t update PIN",
      failedBody: "Nothing changed. Check your connection and try again.",
      tryAgain: "Try again",
    },
    sessionExpired: {
      title: "Session expired",
      subtitle: "For your security, sign in again to continue.",
      cardTitle: "You were signed out",
      cardBody:
        "Your EMENDA ID, saved records, and confirmed work data were not changed.",
      loginAgain: "Log in again",
      backToWelcome: "Back to welcome",
      preservedTitle: "Your data is preserved",
      preservedBody:
        "Drafts and confirmed records remain available after you authenticate again.",
    },
    logout: {
      title: "Log out?",
      subtitle: "Sign out of this device and return to the welcome screen.",
      cardTitle: "Before you log out",
      cardBody:
        "Confirmed work is already safe. Unsynced drafts stay on this device until they can sync.",
      loggingOut: "Logging out…",
      signedOutTitle: "You’re signed out",
      signedOutSubtitle:
        "This device session is closed. Server sign-out will finish when you’re back online.",
      pendingTitle: "Offline · server sign-out pending",
      pendingAction: "Auto retry",
    },
    offline: {
      title: "No internet connection",
      tryAgain: "Try again",
    },
  },
  id: {
    splash: {
      tagline: "KERJA · IDENTITAS · CATATAN",
      subline: "Pendamping kerja yang mengutamakan privasi",
      footerDesktop: "Pengalaman Desktop Pekerja",
      footerMobile: "Pengalaman Seluler Pekerja",
    },
    language: {
      title: "Pilih bahasa Anda",
      subtitle:
        "Pilih bahasa yang digunakan di seluruh EMENDA. Anda dapat mengubahnya nanti di Pengaturan.",
      selected: "Dipilih",
      caption: "Pengaturan ini mengubah bahasa antarmuka aplikasi.",
    },
    welcome: {
      title: "Selamat datang di EMENDA",
      subtitle: "Satu akun pekerja. Catatan Anda tetap bersama Anda.",
      cardTitle: "Sudah punya EMENDA ID?",
      cardBody: "Masuk dengan nomor telepon terverifikasi Anda.",
      workerOwned: "MILIK PEKERJA",
      createAccount: "Buat akun baru",
      footnote:
        "Anda dapat menghubungkan pemberi kerja nanti. Membuat akun tidak memerlukan pemberi kerja.",
      sessionExpiredLink: "Keluar secara tidak terduga?",
    },
    login: {
      subtitle: "Gunakan nomor telepon terverifikasi dan PIN Anda.",
      countryLabel: "Negara",
      phoneLabel: "Nomor telepon",
      pinLabel: "PIN",
      forgotPin: "Lupa PIN?",
      loggingIn: "Sedang masuk…",
      invalidPin: "PIN salah. Periksa PIN dan coba lagi.",
      tooManyHelper: "Terlalu banyak percobaan. Coba lagi dalam {time}.",
      tryAgainIn: "Coba lagi dalam {time}",
    },
    register: {
      title: "Buat akun Anda",
      subtitle: "Mulai EMENDA ID Anda sebelum atau sesudah tiba di Jepang.",
      primary: "Lanjut ke verifikasi",
      loading: "Mengirim kode…",
      secondary: "Sudah punya akun? Masuk",
      invalidPhone: "Masukkan nomor telepon yang valid.",
      alreadyRegistered: "Nomor ini sudah tertaut ke EMENDA ID.",
      noteTitle: "Akun Anda milik Anda.",
      noteBody:
        "Pemberi kerja dapat dihubungkan nanti dengan persetujuan Anda.",
    },
    otp: {
      title: "Verifikasi telepon Anda",
      subtitle: "Kami mengirim kode 6 digit ke {phone}.",
      verify: "Verifikasi",
      verifying: "Memverifikasi…",
      resend: "Kirim ulang kode",
      changePhone: "Ubah nomor telepon",
      invalidCode: "Kode salah. Periksa 6 digit dan coba lagi.",
      expiredHelper:
        "Kode ini telah kedaluwarsa. Minta kode baru untuk melanjutkan.",
      expiredLabel: "Kode kedaluwarsa",
      sendNewCode: "Kirim kode baru",
      resendAvailableIn: "Kirim ulang tersedia dalam {time}",
      newCodeSent: "Kode baru terkirim. Gunakan kode terbaru dari telepon Anda.",
      tooManyRequests:
        "Terlalu banyak permintaan kode. Tunggu sebelum meminta kode lagi.",
      resendLocked: "Kirim ulang terkunci · {time}",
    },
    pin: {
      newPinLabel: "PIN BARU",
      confirmPinLabel: "KONFIRMASI PIN",
      reqTitle: "Persyaratan PIN",
      reqBody:
        "Gunakan 6 digit. Hindari angka berulang atau berurutan yang mudah ditebak.",
      mismatch: "PIN tidak cocok.",
    },
    createPin: {
      title: "Buat PIN",
      subtitle: "Buat PIN 6 digit untuk masuk berikutnya.",
      submit: "Buat PIN",
      saving: "Menyimpan PIN…",
      failed:
        "PIN belum tersimpan. Periksa koneksi Anda dan coba lagi.",
      tryAgain: "Coba lagi",
    },
    forgotPin: {
      title: "Lupa PIN",
      subtitle: "Verifikasi telepon Anda sebelum membuat PIN baru.",
      noPhoneAccess: "Saya tidak dapat mengakses telepon ini",
      whyTitle: "Mengapa verifikasi lagi?",
      whyBody:
        "Pemulihan PIN mengubah akses akun, jadi EMENDA mengonfirmasi telepon terverifikasi terlebih dahulu.",
      send: "Kirim kode verifikasi",
      sending: "Mengirim kode…",
      backToLogin: "Kembali ke halaman masuk",
      phoneNotFound: "Tidak ada akun untuk nomor telepon ini.",
    },
    recover: {
      title: "Pulihkan akses akun",
      subtitle:
        "Gunakan pemulihan resmi jika Anda tidak dapat menerima kode di telepon terverifikasi Anda.",
      noticeTitle: "EMENDA ID Anda tetap terlindungi",
      noticeBody:
        "Mengubah telepon terverifikasi memerlukan pemeriksaan identitas. EMENDA tidak akan membuat ID baru atau diam-diam mengganti akun Anda.",
      start: "Mulai pemulihan akun",
      footnote:
        "Anda mungkin diminta mengonfirmasi detail identitas sebelum akses telepon dapat diubah.",
    },
    resetPin: {
      title: "Atur ulang PIN",
      subtitle: "Pilih PIN 6 digit baru setelah verifikasi telepon.",
      submit: "Atur ulang PIN",
      saving: "Menyimpan PIN baru…",
      cancelRecovery: "Batalkan pemulihan",
      successTitle: "PIN diperbarui",
      successBody: "Gunakan PIN baru Anda saat masuk berikutnya.",
      continueToLogin: "Lanjut ke halaman masuk",
      failedTitle: "Tidak dapat memperbarui PIN",
      failedBody: "Tidak ada yang berubah. Periksa koneksi Anda dan coba lagi.",
      tryAgain: "Coba lagi",
    },
    sessionExpired: {
      title: "Sesi berakhir",
      subtitle: "Demi keamanan Anda, masuk lagi untuk melanjutkan.",
      cardTitle: "Anda telah keluar",
      cardBody:
        "EMENDA ID, catatan tersimpan, dan data kerja terkonfirmasi Anda tidak berubah.",
      loginAgain: "Masuk lagi",
      backToWelcome: "Kembali ke sambutan",
      preservedTitle: "Data Anda tetap tersimpan",
      preservedBody:
        "Draf dan catatan terkonfirmasi tetap tersedia setelah Anda masuk kembali.",
    },
    logout: {
      title: "Keluar?",
      subtitle: "Keluar dari perangkat ini dan kembali ke layar sambutan.",
      cardTitle: "Sebelum Anda keluar",
      cardBody:
        "Pekerjaan terkonfirmasi sudah aman. Draf yang belum tersinkron tetap di perangkat ini sampai dapat disinkronkan.",
      loggingOut: "Sedang keluar…",
      signedOutTitle: "Anda telah keluar",
      signedOutSubtitle:
        "Sesi perangkat ini telah ditutup. Keluar dari server akan selesai saat Anda kembali online.",
      pendingTitle: "Offline · keluar dari server tertunda",
      pendingAction: "Coba otomatis",
    },
    offline: {
      title: "Tidak ada koneksi internet",
      tryAgain: "Coba lagi",
    },
  },
  ja: {
    splash: {
      tagline: "仕事 · アイデンティティ · 記録",
      subline: "プライバシー第一の仕事のパートナー",
      footerDesktop: "ワーカーデスクトップ体験",
      footerMobile: "ワーカーモバイル体験",
    },
    language: {
      title: "言語を選択",
      subtitle:
        "EMENDA全体で使用する言語を選択します。後で設定から変更できます。",
      selected: "選択中",
      caption: "この設定はアプリの表示言語を変更します。",
    },
    welcome: {
      title: "EMENDAへようこそ",
      subtitle: "ひとつのワーカーアカウント。記録はあなたのもとに残ります。",
      cardTitle: "すでにEMENDA IDをお持ちですか？",
      cardBody: "認証済みの電話番号でサインインします。",
      workerOwned: "ワーカー所有",
      createAccount: "新しいアカウントを作成",
      footnote:
        "雇用主は後から接続できます。アカウント作成に雇用主は必要ありません。",
      sessionExpiredLink: "予期せずサインアウトされましたか？",
    },
    login: {
      subtitle: "認証済みの電話番号とPINを使用します。",
      countryLabel: "国",
      phoneLabel: "電話番号",
      pinLabel: "PIN",
      forgotPin: "PINをお忘れですか？",
      loggingIn: "ログイン中…",
      invalidPin: "PINが正しくありません。PINを確認してもう一度お試しください。",
      tooManyHelper: "試行回数が多すぎます。{time}後にもう一度お試しください。",
      tryAgainIn: "{time}後に再試行",
    },
    register: {
      title: "アカウントを作成",
      subtitle: "来日前でも来日後でもEMENDA IDを始められます。",
      primary: "認証に進む",
      loading: "コードを送信中…",
      secondary: "すでにアカウントをお持ちですか？ログイン",
      invalidPhone: "有効な電話番号を入力してください。",
      alreadyRegistered:
        "この番号はすでにEMENDA IDにリンクされています。",
      noteTitle: "アカウントはあなたのものです。",
      noteBody: "雇用主はあなたの同意のもと、後から接続できます。",
    },
    otp: {
      title: "電話番号を認証",
      subtitle: "{phone} に6桁のコードを送信しました。",
      verify: "認証",
      verifying: "認証中…",
      resend: "コードを再送信",
      changePhone: "電話番号を変更",
      invalidCode:
        "コードが正しくありません。6桁を確認してもう一度お試しください。",
      expiredHelper:
        "このコードは期限切れです。新しいコードをリクエストして続行してください。",
      expiredLabel: "コード期限切れ",
      sendNewCode: "新しいコードを送信",
      resendAvailableIn: "再送信まで {time}",
      newCodeSent:
        "新しいコードを送信しました。携帯電話の最新のコードを使用してください。",
      tooManyRequests:
        "コードのリクエストが多すぎます。次のリクエストまでお待ちください。",
      resendLocked: "再送信ロック中 · {time}",
    },
    pin: {
      newPinLabel: "新しいPIN",
      confirmPinLabel: "PINの確認",
      reqTitle: "PINの要件",
      reqBody:
        "6桁を使用してください。推測されやすい同じ数字や連続する数字は避けてください。",
      mismatch: "PINが一致しません。",
    },
    createPin: {
      title: "PINを作成",
      subtitle: "今後のサインイン用に6桁のPINを作成します。",
      submit: "PINを作成",
      saving: "PINを保存中…",
      failed: "PINを保存できませんでした。接続を確認して再試行してください。",
      tryAgain: "再試行",
    },
    forgotPin: {
      title: "PINを忘れた場合",
      subtitle: "新しいPINを作成する前に電話番号を認証します。",
      noPhoneAccess: "この電話にアクセスできません",
      whyTitle: "なぜ再認証が必要ですか？",
      whyBody:
        "PINの再設定はアカウントへのアクセスを変更するため、EMENDAはまず認証済みの電話を確認します。",
      send: "認証コードを送信",
      sending: "コードを送信中…",
      backToLogin: "ログインに戻る",
      phoneNotFound: "この電話番号のアカウントが見つかりません。",
    },
    recover: {
      title: "アカウントアクセスの回復",
      subtitle:
        "認証済みの電話でコードを受け取れない場合は、公式の回復手続きをご利用ください。",
      noticeTitle: "あなたのEMENDA IDは保護されています",
      noticeBody:
        "認証済み電話の変更には本人確認が必要です。EMENDAが新しいIDを作成したり、アカウントを無断で置き換えたりすることはありません。",
      start: "アカウント回復を開始",
      footnote:
        "電話のアクセスを変更する前に、本人確認の詳細を求められる場合があります。",
    },
    resetPin: {
      title: "PINをリセット",
      subtitle: "電話認証後に新しい6桁のPINを選択します。",
      submit: "PINをリセット",
      saving: "新しいPINを保存中…",
      cancelRecovery: "回復をキャンセル",
      successTitle: "PINを更新しました",
      successBody: "次回のサインインから新しいPINを使用してください。",
      continueToLogin: "ログインに進む",
      failedTitle: "PINを更新できませんでした",
      failedBody:
        "何も変更されていません。接続を確認してもう一度お試しください。",
      tryAgain: "再試行",
    },
    sessionExpired: {
      title: "セッションの有効期限が切れました",
      subtitle: "セキュリティのため、続行するには再度サインインしてください。",
      cardTitle: "サインアウトされました",
      cardBody:
        "EMENDA ID、保存された記録、確認済みの勤務データは変更されていません。",
      loginAgain: "再度ログイン",
      backToWelcome: "ようこそ画面に戻る",
      preservedTitle: "データは保持されています",
      preservedBody:
        "下書きと確認済みの記録は、再認証後も引き続き利用できます。",
    },
    logout: {
      title: "ログアウトしますか？",
      subtitle: "このデバイスからサインアウトし、ようこそ画面に戻ります。",
      cardTitle: "ログアウトする前に",
      cardBody:
        "確認済みの作業はすでに安全です。未同期の下書きは、同期できるまでこのデバイスに残ります。",
      loggingOut: "ログアウト中…",
      signedOutTitle: "サインアウトしました",
      signedOutSubtitle:
        "このデバイスのセッションは終了しました。サーバーからのサインアウトはオンラインに戻り次第完了します。",
      pendingTitle: "オフライン · サーバーサインアウト保留中",
      pendingAction: "自動再試行",
    },
    offline: {
      title: "インターネット接続がありません",
      tryAgain: "再試行",
    },
  },
});

/** Fills `{name}` placeholders in a copy template (e.g. countdown times, phone). */
export function fillCopy(
  template: string,
  params: Record<string, string>,
): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => params[key] ?? "");
}
