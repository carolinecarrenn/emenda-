import { defineSectionCopy } from "@/i18n/copy";

/**
 * Manager 01 · Entry & Recovery copy (Figma section 751:3 mobile EM-AUTH-00…04
 * and section 1192:928 desktop MD-AUTH-01…04). EN is the Figma text verbatim;
 * ID and JA are faithful translations. Data (emails, names, org names, codes)
 * never passes through here — it lives in managerAuthMock.ts.
 */
/** One MD-AUTH desktop state panel that offers a way forward. */
export interface ManagerAuthPanelCopy {
  title: string;
  subtitle: string;
  cardTitle: string;
  cardBody: string;
  primary: string;
  secondary: string;
}

/** A panel whose work is still in flight — Figma draws no second action. */
export interface ManagerAuthProgressPanelCopy {
  title: string;
  subtitle: string;
  cardTitle: string;
  cardBody: string;
  primary: string;
}

export interface ManagerAuthCopy {
  splash: {
    tagline: string;
    subline: string;
    workspaceLabel: string;
    workspaceCaption: string;
    footer: string;
    /** MD-AUTH-00 (1235:2) brand column + right column, desktop only. */
    desktopBrandLine: string;
    desktopLabel: string;
    desktopHeadline: string;
    desktopBody: string;
    desktopFooter: string;
  };
  login: {
    title: string;
    subtitle: string;
    context: string;
    workEmailLabel: string;
    passwordLabel: string;
    forgot: string;
    signIn: string;
    signingIn: string;
    loadingNote: string;
    tooManyCta: string;
    offlineTitle: string;
    offlineSubtitle: string;
    offlineBannerBody: string;
    backToSignIn: string;
    mobileAccessTitle: string;
    mobileAccessBody: string;
    invalidTitle: string;
    invalidBody: string;
    tooManyTitle: string;
    tooManyBody: string;
    verifiedTitle: string;
    verifiedSubtitle: string;
    verifiedCardTitle: string;
    verifiedCardBody: string;
    verifiedCta: string;
    desktopTitle: string;
    desktopSubtitle: string;
    managerIdLabel: string;
    organizationLabel: string;
    continueCta: string;
    brandTagline: string;
    brandBoundary: string;
  };
  forgot: {
    title: string;
    subtitle: string;
    context: string;
    workEmailLabel: string;
    sendCode: string;
    sending: string;
    backToSignIn: string;
    sentPageTitle: string;
    sentPageSubtitle: string;
    resendCode: string;
    notFoundSubtitle: string;
    tryAnotherEmail: string;
    offlineBannerBody: string;
    securityTitle: string;
    securityBody: string;
    sentTitle: string;
    sentBody: string;
    continueToReset: string;
    notFoundTitle: string;
    notFoundBody: string;
    noEmailTitle: string;
    noEmailSubtitle: string;
    protectedTitle: string;
    protectedBody: string;
    openSupport: string;
    desktopTitle: string;
    desktopSubtitle: string;
    cardTitle: string;
    cardBody: string;
    emailLabel: string;
    sendVerificationCode: string;
    backToLogin: string;
  };
  reset: {
    title: string;
    subtitle: string;
    codeLabel: string;
    newPasswordLabel: string;
    confirmPasswordLabel: string;
    requirementsTitle: string;
    requirementsBody: string;
    updatePassword: string;
    saving: string;
    resendCode: string;
    cancelReset: string;
    invalidCodeHelper: string;
    mismatchHelper: string;
    expiredPageTitle: string;
    expiredPageSubtitle: string;
    sendNewCode: string;
    failedPageTitle: string;
    failedPageSubtitle: string;
    offlineSubtitle: string;
    offlineBannerBody: string;
    resendPendingSubtitle: string;
    resendCountdown: string;
    newCodeSentSubtitle: string;
    backToReset: string;
    tooManyRequestsPageTitle: string;
    tooManyRequestsPageSubtitle: string;
    invalidCodeTitle: string;
    invalidCodeBody: string;
    expiredTitle: string;
    expiredBody: string;
    mismatchTitle: string;
    mismatchBody: string;
    failedTitle: string;
    failedBody: string;
    newCodeSentTitle: string;
    newCodeSentBody: string;
    tooManyRequestsTitle: string;
    tooManyRequestsBody: string;
    desktopTitle: string;
    desktopSubtitle: string;
    desktopErrorSubtitle: string;
    desktopCardTitle: string;
    desktopCardBody: string;
    newPasswordCaps: string;
    verifyCta: string;
    demoInvalidCta: string;
    desktopErrorTitle: string;
    alertTitle: string;
    alertBody: string;
    requestNewCode: string;
    backToLogin: string;
  };
  updated: {
    title: string;
    subtitle: string;
    cardTitle: string;
    cardBody: string;
    backToLogin: string;
    desktopTitle: string;
    desktopSubtitle: string;
    badge: string;
    desktopHeadline: string;
    desktopBody: string;
    desktopCta: string;
  };
  /**
   * MD-AUTH desktop state panels (1235:14 · 47 · 82 · 117 · 152 for the login
   * split, 1235:438 · 464 · 492 · 520 · 548 · 576 · 604 · 634 · 664 · 694 ·
   * 724 · 752 · 782 for the recovery canvas). Every one replaces the form
   * with one panel: page title, one-line status subtitle, a toned card, a
   * primary action, an optional secondary action and a footer scope line.
   */
  desktopStates: {
    loginFooter: string;
    recoveryFooter: string;
    resetFooter: string;
    signingIn: ManagerAuthProgressPanelCopy;
    invalidCredentials: ManagerAuthPanelCopy;
    tooManyAttempts: ManagerAuthPanelCopy;
    loginOffline: ManagerAuthPanelCopy;
    accessVerified: ManagerAuthPanelCopy;
    sendingRequest: ManagerAuthProgressPanelCopy;
    codeSent: ManagerAuthPanelCopy;
    forgotOffline: ManagerAuthPanelCopy;
    emailNotFound: ManagerAuthPanelCopy;
    noWorkEmail: ManagerAuthPanelCopy;
    saving: ManagerAuthProgressPanelCopy;
    codeExpired: ManagerAuthPanelCopy;
    mismatch: ManagerAuthPanelCopy;
    updateFailed: ManagerAuthPanelCopy;
    resetOffline: ManagerAuthPanelCopy;
    resendPending: ManagerAuthProgressPanelCopy;
    newCodeSent: ManagerAuthPanelCopy;
    tooManyRequests: ManagerAuthPanelCopy;
  };
  offline: {
    title: string;
    tryAgain: string;
  };
  languageLabel: string;
}

export const MANAGER_AUTH_COPY = defineSectionCopy<ManagerAuthCopy>({
  en: {
    splash: {
      tagline: "WORK · IDENTITY · RECORDS",
      subline: "A privacy-first work companion",
      workspaceLabel: "MANAGER WORKSPACE",
      workspaceCaption: "Facility management workspace",
      desktopBrandLine: "Manager operations, without surveillance.",
      desktopLabel: "MANAGER DESKTOP",
      desktopHeadline: "Operational work data only",
      desktopBody:
        "Privacy boundary enforced across facility-scoped workflows.",
      desktopFooter: "Manager Desktop Experience",
      footer: "Manager Mobile Experience",
    },
    login: {
      title: "Manager sign in",
      subtitle: "Use your organization account.",
      context: "{org} · Manager access",
      workEmailLabel: "Work email",
      passwordLabel: "Password",
      forgot: "Forgot password?",
      signIn: "Sign in",
      signingIn: "Signing in…",
      loadingNote: "Verifying organization and facility access.",
      tooManyCta: "Try again in {time}",
      offlineTitle: "No connection",
      offlineSubtitle:
        "Login needs a connection to verify your facility scope.",
      offlineBannerBody: "Reconnect to continue signing in.",
      backToSignIn: "Back to sign in",
      mobileAccessTitle: "Mobile access",
      mobileAccessBody:
        "Same manager permissions as desktop. Operational access only; private worker health/life data stays inaccessible.",
      invalidTitle: "Email or password is incorrect.",
      invalidBody: "Check your credentials and try again.",
      tooManyTitle: "Too many attempts",
      tooManyBody: "Try again in {time}.",
      verifiedTitle: "Welcome back",
      verifiedSubtitle: "Your manager access has been verified.",
      verifiedCardTitle: "Access verified",
      verifiedCardBody:
        "{org} · manager scope confirmed. Next, choose a permitted facility.",
      verifiedCta: "Continue to facility selection",
      desktopTitle: "Manager Login",
      desktopSubtitle:
        "Organization / Company access for the selected facility",
      managerIdLabel: "Manager / HR ID",
      organizationLabel: "Organization / Company",
      continueCta: "Continue to Organization Access",
      brandTagline: "Employer operations, without surveillance.",
      brandBoundary: "Operational work data only · privacy boundary enforced",
    },
    forgot: {
      title: "Reset password",
      subtitle: "We’ll send a reset code to your work email.",
      context: "Manager access recovery · {org}",
      workEmailLabel: "Work email",
      sendCode: "Send reset code",
      sending: "Sending code…",
      backToSignIn: "Back to sign in",
      sentPageTitle: "Check your work email",
      sentPageSubtitle: "A reset code was sent to {email}.",
      resendCode: "Resend code",
      notFoundSubtitle:
        "Use the work email connected to your manager account.",
      tryAnotherEmail: "Try another email",
      offlineBannerBody: "Reconnect before requesting a reset code.",
      securityTitle: "Security",
      securityBody:
        "Reset codes are demo states in the prototype. Production delivery method is not implied.",
      sentTitle: "Reset code sent",
      sentBody: "Use the latest code from your work email.",
      continueToReset: "Continue to reset password",
      notFoundTitle: "Work email not found",
      notFoundBody: "This email can’t be used for password recovery.",
      noEmailTitle: "Can’t access work email?",
      noEmailSubtitle:
        "Use the official recovery path for your organization account.",
      protectedTitle: "Your access stays protected",
      protectedBody:
        "Changing recovery access requires identity and organization checks.",
      openSupport: "Open Support",
      desktopTitle: "Forgot Password",
      desktopSubtitle:
        "Recover Manager access using the registered organization email.",
      cardTitle: "Reset your password",
      cardBody:
        "We will send a verification code to the registered Manager email.",
      emailLabel: "EMAIL",
      sendVerificationCode: "Send verification code",
      backToLogin: "Back to login",
    },
    reset: {
      title: "Reset password",
      subtitle: "Enter the verification code and choose a new password.",
      codeLabel: "Verification code",
      newPasswordLabel: "New password",
      confirmPasswordLabel: "Confirm password",
      requirementsTitle: "Password requirements",
      requirementsBody:
        "Use at least 8 characters. Avoid easy-to-guess passwords.",
      updatePassword: "Update password",
      saving: "Updating password…",
      resendCode: "Resend code",
      cancelReset: "Cancel reset",
      invalidCodeHelper: "Incorrect code. Check the 6 digits and try again.",
      mismatchHelper: "Passwords do not match.",
      expiredPageTitle: "Reset code expired",
      expiredPageSubtitle: "Request a new code to continue.",
      sendNewCode: "Send new code",
      failedPageTitle: "Couldn’t update password",
      failedPageSubtitle:
        "Nothing changed. Your previous password is still active.",
      offlineSubtitle:
        "A connection is required to update your account access.",
      offlineBannerBody: "Reconnect before updating your password.",
      resendPendingSubtitle: "Enter the latest verification code.",
      resendCountdown: "Resend available in {time}",
      newCodeSentSubtitle: "Use the latest reset code from your work email.",
      backToReset: "Back to reset password",
      tooManyRequestsPageTitle: "Reset request paused",
      tooManyRequestsPageSubtitle: "Too many reset code requests were made.",
      invalidCodeTitle: "Incorrect verification code.",
      invalidCodeBody: "Check the 6 digits and try again.",
      expiredTitle: "This code has expired",
      expiredBody: "Your account and password are unchanged.",
      mismatchTitle: "Passwords do not match.",
      mismatchBody: "Re-enter the new password to confirm.",
      failedTitle: "Update failed",
      failedBody: "Check your connection and try again.",
      newCodeSentTitle: "New code sent",
      newCodeSentBody: "Older reset codes will no longer work.",
      tooManyRequestsTitle: "Wait before requesting again",
      tooManyRequestsBody: "Resend is locked for {time}.",
      desktopTitle: "Verify Reset Code",
      desktopSubtitle:
        "Enter the verification code sent to your registered email.",
      desktopErrorSubtitle:
        "Recovery state for expired or incorrect verification codes.",
      desktopCardTitle: "Verification code",
      desktopCardBody: "Code sent to {email}",
      newPasswordCaps: "NEW PASSWORD",
      verifyCta: "Verify & update password",
      demoInvalidCta: "Demo invalid / expired code",
      desktopErrorTitle: "Reset Code Invalid / Expired",
      alertTitle: "Code could not be verified",
      alertBody:
        "The code is invalid or has expired. Request a new code and try again.",
      requestNewCode: "Request new code",
      backToLogin: "Back to login",
    },
    updated: {
      title: "Password updated",
      subtitle: "Your manager access is ready to use.",
      cardTitle: "Update complete",
      cardBody:
        "Sign in again with your new password. Existing permissions are unchanged.",
      backToLogin: "Back to Manager Login",
      desktopTitle: "Password Updated",
      desktopSubtitle: "Manager password recovery completed.",
      badge: "UPDATED",
      desktopHeadline: "Password updated",
      desktopBody: "Sign in again using the new password.",
      desktopCta: "Return to Manager Login",
    },
    desktopStates: {
      loginFooter: "Manager access · {org} · operational scope only",
      recoveryFooter: "Manager access recovery · {org}",
      resetFooter: "Manager access recovery · original organization scope preserved",
      signingIn: {
        title: "Signing in",
        subtitle: "Verifying manager access and organization context.",
        cardTitle: "Checking credentials…",
        cardBody:
          "Please wait while EMENDA verifies your account and permitted facility scope.",
        primary: "Verifying…",
      },
      invalidCredentials: {
        title: "Manager Login",
        subtitle: "Credentials could not be verified.",
        cardTitle: "Invalid credentials",
        cardBody:
          "Manager / HR ID or password is incorrect. No workspace access has been granted.",
        primary: "Try again",
        secondary: "Forgot password?",
      },
      tooManyAttempts: {
        title: "Manager Login",
        subtitle: "Temporary access protection is active.",
        cardTitle: "Too many attempts",
        cardBody:
          "Sign-in is temporarily limited after repeated failed attempts. Existing sessions are not expanded.",
        primary: "Try later",
        secondary: "Recover password",
      },
      loginOffline: {
        title: "Manager Login",
        subtitle: "Network access is unavailable.",
        cardTitle: "You are offline",
        cardBody:
          "Sign-in requires a connection. No cached private worker data is exposed before authentication.",
        primary: "Retry connection",
        secondary: "Back",
      },
      accessVerified: {
        title: "Access Verified",
        subtitle: "Manager identity and organization access were verified.",
        cardTitle: "Ready for facility selection",
        cardBody:
          "{manager} · {role} · {org}. Choose the facility context before entering operational modules.",
        primary: "Continue to Facility Selection",
        secondary: "Back to login",
      },
      sendingRequest: {
        title: "Forgot Password",
        subtitle: "Sending verification request to the registered organization email.",
        cardTitle: "Sending request…",
        cardBody:
          "Keep this screen open while EMENDA validates the account and recovery channel.",
        primary: "Sending…",
      },
      codeSent: {
        title: "Verification Code Sent",
        subtitle: "Recovery email was accepted.",
        cardTitle: "Code sent",
        cardBody:
          "A verification code was sent to {email}. Continue to the reset form.",
        primary: "Continue to Reset Password",
        secondary: "Back to login",
      },
      forgotOffline: {
        title: "Forgot Password",
        subtitle: "Recovery request could not be sent.",
        cardTitle: "You are offline",
        cardBody:
          "The reset request remains unsent. Reconnect before requesting a verification code.",
        primary: "Retry connection",
        secondary: "Back to login",
      },
      emailNotFound: {
        title: "Forgot Password",
        subtitle: "Registered recovery email could not be matched.",
        cardTitle: "Email not found",
        cardBody:
          "The entered email is not linked to an active Manager account in this organization.",
        primary: "Try another email",
        secondary: "Back to login",
      },
      noWorkEmail: {
        title: "Recovery Help",
        subtitle: "Registered work email is unavailable.",
        cardTitle: "No access to work email",
        cardBody:
          "Use organization support or an authorized account recovery process. Do not bypass role verification.",
        primary: "Contact Support",
        secondary: "Back to login",
      },
      saving: {
        title: "Updating Password",
        subtitle: "Verification succeeded. Saving the new password.",
        cardTitle: "Updating…",
        cardBody:
          "Do not leave this screen until the update succeeds or fails.",
        primary: "Saving…",
      },
      codeExpired: {
        title: "Reset Password",
        subtitle: "The verification code can no longer be used.",
        cardTitle: "Code expired",
        cardBody:
          "Request a new verification code. The current password change has not been applied.",
        primary: "Request new code",
        secondary: "Back to login",
      },
      mismatch: {
        title: "Reset Password",
        subtitle: "Password confirmation does not match.",
        cardTitle: "Passwords do not match",
        cardBody:
          "Re-enter the new password and confirmation before trying again.",
        primary: "Update password",
        secondary: "Cancel reset",
      },
      updateFailed: {
        title: "Reset Password",
        subtitle: "The password could not be updated.",
        cardTitle: "Update failed",
        cardBody:
          "The previous password remains active. Retry only after the failure is resolved.",
        primary: "Retry update",
        secondary: "Back to login",
      },
      resetOffline: {
        title: "Reset Password",
        subtitle: "The update cannot complete without a connection.",
        cardTitle: "You are offline",
        cardBody:
          "Entered values remain local to this recovery state. No success is shown until the server confirms the update.",
        primary: "Retry connection",
        secondary: "Cancel reset",
      },
      resendPending: {
        title: "Resend Verification Code",
        subtitle: "A new code request is being processed.",
        cardTitle: "Request pending",
        cardBody:
          "Wait for the current request to finish before requesting another code.",
        primary: "Sending…",
      },
      newCodeSent: {
        title: "Verification Code Sent",
        subtitle: "A replacement code is ready.",
        cardTitle: "New code sent",
        cardBody:
          "Use the newest code from {email}. Older codes are no longer valid.",
        primary: "Return to Reset Password",
        secondary: "Back to login",
      },
      tooManyRequests: {
        title: "Resend Verification Code",
        subtitle: "Recovery requests are temporarily limited.",
        cardTitle: "Too many requests",
        cardBody:
          "Wait before requesting another code. This does not grant or change workspace access.",
        primary: "Try later",
        secondary: "Back to login",
      },
    },
    offline: {
      title: "No internet connection",
      tryAgain: "Try again",
    },
    languageLabel: "Language",
  },
  id: {
    splash: {
      tagline: "KERJA · IDENTITAS · CATATAN",
      subline: "Pendamping kerja yang mengutamakan privasi",
      workspaceLabel: "RUANG KERJA MANAJER",
      workspaceCaption: "Ruang kerja manajemen fasilitas",
      desktopBrandLine: "Operasi pemberi kerja, tanpa pengawasan berlebih.",
      desktopLabel: "DESKTOP MANAJER",
      desktopHeadline: "Hanya data kerja operasional",
      desktopBody:
        "Batas privasi diberlakukan di seluruh alur kerja lingkup fasilitas.",
      desktopFooter: "Pengalaman Desktop Manajer",
      footer: "Pengalaman Seluler Manajer",
    },
    login: {
      title: "Masuk sebagai manajer",
      subtitle: "Gunakan akun organisasi Anda.",
      context: "{org} · Akses manajer",
      workEmailLabel: "Email kerja",
      passwordLabel: "Kata sandi",
      forgot: "Lupa kata sandi?",
      signIn: "Masuk",
      signingIn: "Sedang masuk…",
      loadingNote: "Memverifikasi akses organisasi dan fasilitas.",
      tooManyCta: "Coba lagi dalam {time}",
      offlineTitle: "Tidak ada koneksi",
      offlineSubtitle:
        "Masuk memerlukan koneksi untuk memverifikasi cakupan fasilitas Anda.",
      offlineBannerBody: "Sambungkan kembali untuk melanjutkan proses masuk.",
      backToSignIn: "Kembali ke masuk",
      mobileAccessTitle: "Akses seluler",
      mobileAccessBody:
        "Izin manajer sama dengan desktop. Hanya akses operasional; data kesehatan/kehidupan pribadi pekerja tetap tidak dapat diakses.",
      invalidTitle: "Email atau kata sandi salah.",
      invalidBody: "Periksa kredensial Anda dan coba lagi.",
      tooManyTitle: "Terlalu banyak percobaan",
      tooManyBody: "Coba lagi dalam {time}.",
      verifiedTitle: "Selamat datang kembali",
      verifiedSubtitle: "Akses manajer Anda telah diverifikasi.",
      verifiedCardTitle: "Akses terverifikasi",
      verifiedCardBody:
        "{org} · cakupan manajer dikonfirmasi. Selanjutnya, pilih fasilitas yang diizinkan.",
      verifiedCta: "Lanjut ke pemilihan fasilitas",
      desktopTitle: "Login Manajer",
      desktopSubtitle:
        "Akses organisasi / perusahaan untuk fasilitas yang dipilih",
      managerIdLabel: "ID Manajer / HRD",
      organizationLabel: "Organisasi / Perusahaan",
      continueCta: "Lanjut ke Akses Organisasi",
      brandTagline: "Operasi pemberi kerja, tanpa pengawasan berlebih.",
      brandBoundary:
        "Hanya data kerja operasional · batas privasi diberlakukan",
    },
    forgot: {
      title: "Atur ulang kata sandi",
      subtitle: "Kami akan mengirim kode atur ulang ke email kerja Anda.",
      context: "Pemulihan akses manajer · {org}",
      workEmailLabel: "Email kerja",
      sendCode: "Kirim kode atur ulang",
      sending: "Mengirim kode…",
      backToSignIn: "Kembali ke masuk",
      sentPageTitle: "Periksa email kerja Anda",
      sentPageSubtitle: "Kode atur ulang dikirim ke {email}.",
      resendCode: "Kirim ulang kode",
      notFoundSubtitle:
        "Gunakan email kerja yang terhubung dengan akun manajer Anda.",
      tryAnotherEmail: "Coba email lain",
      offlineBannerBody:
        "Sambungkan kembali sebelum meminta kode atur ulang.",
      securityTitle: "Keamanan",
      securityBody:
        "Kode atur ulang adalah status demo dalam prototipe. Metode pengiriman produksi tidak tersirat.",
      sentTitle: "Kode atur ulang terkirim",
      sentBody: "Gunakan kode terbaru dari email kerja Anda.",
      continueToReset: "Lanjut ke atur ulang kata sandi",
      notFoundTitle: "Email kerja tidak ditemukan",
      notFoundBody:
        "Email ini tidak dapat digunakan untuk pemulihan kata sandi.",
      noEmailTitle: "Tidak bisa mengakses email kerja?",
      noEmailSubtitle:
        "Gunakan jalur pemulihan resmi untuk akun organisasi Anda.",
      protectedTitle: "Akses Anda tetap terlindungi",
      protectedBody:
        "Mengubah akses pemulihan memerlukan pemeriksaan identitas dan organisasi.",
      openSupport: "Buka Dukungan",
      desktopTitle: "Lupa Kata Sandi",
      desktopSubtitle:
        "Pulihkan akses Manajer menggunakan email organisasi terdaftar.",
      cardTitle: "Atur ulang kata sandi Anda",
      cardBody:
        "Kami akan mengirim kode verifikasi ke email Manajer terdaftar.",
      emailLabel: "EMAIL",
      sendVerificationCode: "Kirim kode verifikasi",
      backToLogin: "Kembali ke login",
    },
    reset: {
      title: "Atur ulang kata sandi",
      subtitle: "Masukkan kode verifikasi dan pilih kata sandi baru.",
      codeLabel: "Kode verifikasi",
      newPasswordLabel: "Kata sandi baru",
      confirmPasswordLabel: "Konfirmasi kata sandi",
      requirementsTitle: "Persyaratan kata sandi",
      requirementsBody:
        "Gunakan minimal 8 karakter. Hindari kata sandi yang mudah ditebak.",
      updatePassword: "Perbarui kata sandi",
      saving: "Memperbarui kata sandi…",
      resendCode: "Kirim ulang kode",
      cancelReset: "Batalkan atur ulang",
      invalidCodeHelper:
        "Kode salah. Periksa 6 digit tersebut dan coba lagi.",
      mismatchHelper: "Kata sandi tidak cocok.",
      expiredPageTitle: "Kode atur ulang kedaluwarsa",
      expiredPageSubtitle: "Minta kode baru untuk melanjutkan.",
      sendNewCode: "Kirim kode baru",
      failedPageTitle: "Tidak dapat memperbarui kata sandi",
      failedPageSubtitle:
        "Tidak ada yang berubah. Kata sandi lama Anda masih aktif.",
      offlineSubtitle:
        "Koneksi diperlukan untuk memperbarui akses akun Anda.",
      offlineBannerBody:
        "Sambungkan kembali sebelum memperbarui kata sandi Anda.",
      resendPendingSubtitle: "Masukkan kode verifikasi terbaru.",
      resendCountdown: "Kirim ulang tersedia dalam {time}",
      newCodeSentSubtitle:
        "Gunakan kode atur ulang terbaru dari email kerja Anda.",
      backToReset: "Kembali ke atur ulang kata sandi",
      tooManyRequestsPageTitle: "Permintaan atur ulang dijeda",
      tooManyRequestsPageSubtitle:
        "Terlalu banyak permintaan kode atur ulang.",
      invalidCodeTitle: "Kode verifikasi salah.",
      invalidCodeBody: "Periksa 6 digit tersebut dan coba lagi.",
      expiredTitle: "Kode ini telah kedaluwarsa",
      expiredBody: "Akun dan kata sandi Anda tidak berubah.",
      mismatchTitle: "Kata sandi tidak cocok.",
      mismatchBody: "Masukkan ulang kata sandi baru untuk konfirmasi.",
      failedTitle: "Pembaruan gagal",
      failedBody: "Periksa koneksi Anda dan coba lagi.",
      newCodeSentTitle: "Kode baru terkirim",
      newCodeSentBody: "Kode atur ulang lama tidak lagi berfungsi.",
      tooManyRequestsTitle: "Tunggu sebelum meminta lagi",
      tooManyRequestsBody: "Kirim ulang terkunci selama {time}.",
      desktopTitle: "Verifikasi Kode Atur Ulang",
      desktopSubtitle:
        "Masukkan kode verifikasi yang dikirim ke email terdaftar Anda.",
      desktopErrorSubtitle:
        "Status pemulihan untuk kode verifikasi yang kedaluwarsa atau salah.",
      desktopCardTitle: "Kode verifikasi",
      desktopCardBody: "Kode dikirim ke {email}",
      newPasswordCaps: "KATA SANDI BARU",
      verifyCta: "Verifikasi & perbarui kata sandi",
      demoInvalidCta: "Demo kode tidak valid / kedaluwarsa",
      desktopErrorTitle: "Kode Atur Ulang Tidak Valid / Kedaluwarsa",
      alertTitle: "Kode tidak dapat diverifikasi",
      alertBody:
        "Kode tidak valid atau telah kedaluwarsa. Minta kode baru dan coba lagi.",
      requestNewCode: "Minta kode baru",
      backToLogin: "Kembali ke login",
    },
    updated: {
      title: "Kata sandi diperbarui",
      subtitle: "Akses manajer Anda siap digunakan.",
      cardTitle: "Pembaruan selesai",
      cardBody:
        "Masuk lagi dengan kata sandi baru Anda. Izin yang ada tidak berubah.",
      backToLogin: "Kembali ke Login Manajer",
      desktopTitle: "Kata Sandi Diperbarui",
      desktopSubtitle: "Pemulihan kata sandi Manajer selesai.",
      badge: "DIPERBARUI",
      desktopHeadline: "Kata sandi diperbarui",
      desktopBody: "Masuk lagi menggunakan kata sandi baru.",
      desktopCta: "Kembali ke Login Manajer",
    },
    desktopStates: {
      loginFooter: "Akses manajer · {org} · hanya cakupan operasional",
      recoveryFooter: "Pemulihan akses manajer · {org}",
      resetFooter: "Pemulihan akses manajer · cakupan organisasi awal dipertahankan",
      signingIn: {
        title: "Sedang masuk",
        subtitle: "Memverifikasi akses manajer dan konteks organisasi.",
        cardTitle: "Memeriksa kredensial…",
        cardBody:
          "Tunggu sementara EMENDA memverifikasi akun Anda dan cakupan fasilitas yang diizinkan.",
        primary: "Memverifikasi…",
      },
      invalidCredentials: {
        title: "Login Manajer",
        subtitle: "Kredensial tidak dapat diverifikasi.",
        cardTitle: "Kredensial tidak valid",
        cardBody:
          "ID Manajer / HR atau kata sandi salah. Tidak ada akses ruang kerja yang diberikan.",
        primary: "Coba lagi",
        secondary: "Lupa kata sandi?",
      },
      tooManyAttempts: {
        title: "Login Manajer",
        subtitle: "Perlindungan akses sementara sedang aktif.",
        cardTitle: "Terlalu banyak percobaan",
        cardBody:
          "Masuk dibatasi sementara setelah percobaan gagal berulang. Sesi yang ada tidak diperluas.",
        primary: "Coba nanti",
        secondary: "Pulihkan kata sandi",
      },
      loginOffline: {
        title: "Login Manajer",
        subtitle: "Akses jaringan tidak tersedia.",
        cardTitle: "Anda sedang offline",
        cardBody:
          "Masuk memerlukan koneksi. Tidak ada data pekerja pribadi tersimpan yang ditampilkan sebelum autentikasi.",
        primary: "Coba sambungkan lagi",
        secondary: "Kembali",
      },
      accessVerified: {
        title: "Akses Terverifikasi",
        subtitle: "Identitas manajer dan akses organisasi telah diverifikasi.",
        cardTitle: "Siap untuk pemilihan fasilitas",
        cardBody:
          "{manager} · {role} · {org}. Pilih konteks fasilitas sebelum masuk ke modul operasional.",
        primary: "Lanjut ke Pemilihan Fasilitas",
        secondary: "Kembali ke login",
      },
      sendingRequest: {
        title: "Lupa Kata Sandi",
        subtitle: "Mengirim permintaan verifikasi ke email organisasi terdaftar.",
        cardTitle: "Mengirim permintaan…",
        cardBody:
          "Biarkan layar ini terbuka sementara EMENDA memvalidasi akun dan kanal pemulihan.",
        primary: "Mengirim…",
      },
      codeSent: {
        title: "Kode Verifikasi Terkirim",
        subtitle: "Email pemulihan diterima.",
        cardTitle: "Kode terkirim",
        cardBody:
          "Kode verifikasi telah dikirim ke {email}. Lanjutkan ke formulir atur ulang.",
        primary: "Lanjut ke Atur Ulang Kata Sandi",
        secondary: "Kembali ke login",
      },
      forgotOffline: {
        title: "Lupa Kata Sandi",
        subtitle: "Permintaan pemulihan tidak dapat dikirim.",
        cardTitle: "Anda sedang offline",
        cardBody:
          "Permintaan atur ulang belum terkirim. Sambungkan kembali sebelum meminta kode verifikasi.",
        primary: "Coba sambungkan lagi",
        secondary: "Kembali ke login",
      },
      emailNotFound: {
        title: "Lupa Kata Sandi",
        subtitle: "Email pemulihan terdaftar tidak cocok.",
        cardTitle: "Email tidak ditemukan",
        cardBody:
          "Email yang dimasukkan tidak terhubung dengan akun Manajer aktif di organisasi ini.",
        primary: "Coba email lain",
        secondary: "Kembali ke login",
      },
      noWorkEmail: {
        title: "Bantuan Pemulihan",
        subtitle: "Email kerja terdaftar tidak tersedia.",
        cardTitle: "Tidak ada akses ke email kerja",
        cardBody:
          "Gunakan dukungan organisasi atau proses pemulihan akun yang berwenang. Jangan lewati verifikasi peran.",
        primary: "Hubungi Dukungan",
        secondary: "Kembali ke login",
      },
      saving: {
        title: "Memperbarui Kata Sandi",
        subtitle: "Verifikasi berhasil. Menyimpan kata sandi baru.",
        cardTitle: "Memperbarui…",
        cardBody:
          "Jangan tinggalkan layar ini sampai pembaruan berhasil atau gagal.",
        primary: "Menyimpan…",
      },
      codeExpired: {
        title: "Atur Ulang Kata Sandi",
        subtitle: "Kode verifikasi tidak dapat digunakan lagi.",
        cardTitle: "Kode kedaluwarsa",
        cardBody:
          "Minta kode verifikasi baru. Perubahan kata sandi saat ini belum diterapkan.",
        primary: "Minta kode baru",
        secondary: "Kembali ke login",
      },
      mismatch: {
        title: "Atur Ulang Kata Sandi",
        subtitle: "Konfirmasi kata sandi tidak cocok.",
        cardTitle: "Kata sandi tidak cocok",
        cardBody:
          "Masukkan kembali kata sandi baru dan konfirmasinya sebelum mencoba lagi.",
        primary: "Perbarui kata sandi",
        secondary: "Batalkan atur ulang",
      },
      updateFailed: {
        title: "Atur Ulang Kata Sandi",
        subtitle: "Kata sandi tidak dapat diperbarui.",
        cardTitle: "Pembaruan gagal",
        cardBody:
          "Kata sandi sebelumnya tetap aktif. Coba lagi hanya setelah kegagalan teratasi.",
        primary: "Coba perbarui lagi",
        secondary: "Kembali ke login",
      },
      resetOffline: {
        title: "Atur Ulang Kata Sandi",
        subtitle: "Pembaruan tidak dapat selesai tanpa koneksi.",
        cardTitle: "Anda sedang offline",
        cardBody:
          "Nilai yang dimasukkan tetap lokal pada status pemulihan ini. Tidak ada keberhasilan yang ditampilkan sampai server mengonfirmasi pembaruan.",
        primary: "Coba sambungkan lagi",
        secondary: "Batalkan atur ulang",
      },
      resendPending: {
        title: "Kirim Ulang Kode Verifikasi",
        subtitle: "Permintaan kode baru sedang diproses.",
        cardTitle: "Permintaan tertunda",
        cardBody:
          "Tunggu permintaan saat ini selesai sebelum meminta kode lain.",
        primary: "Mengirim…",
      },
      newCodeSent: {
        title: "Kode Verifikasi Terkirim",
        subtitle: "Kode pengganti sudah siap.",
        cardTitle: "Kode baru terkirim",
        cardBody:
          "Gunakan kode terbaru dari {email}. Kode lama tidak berlaku lagi.",
        primary: "Kembali ke Atur Ulang Kata Sandi",
        secondary: "Kembali ke login",
      },
      tooManyRequests: {
        title: "Kirim Ulang Kode Verifikasi",
        subtitle: "Permintaan pemulihan dibatasi sementara.",
        cardTitle: "Terlalu banyak permintaan",
        cardBody:
          "Tunggu sebelum meminta kode lain. Ini tidak memberikan atau mengubah akses ruang kerja.",
        primary: "Coba nanti",
        secondary: "Kembali ke login",
      },
    },
    offline: {
      title: "Tidak ada koneksi internet",
      tryAgain: "Coba lagi",
    },
    languageLabel: "Bahasa",
  },
  ja: {
    splash: {
      tagline: "仕事 · アイデンティティ · 記録",
      subline: "プライバシー第一の仕事のパートナー",
      workspaceLabel: "マネージャーワークスペース",
      workspaceCaption: "施設管理ワークスペース",
      desktopBrandLine: "監視のないマネージャー業務。",
      desktopLabel: "マネージャーデスクトップ",
      desktopHeadline: "運用上の業務データのみ",
      desktopBody: "施設スコープの業務全体でプライバシー境界を適用します。",
      desktopFooter: "マネージャーデスクトップ体験",
      footer: "マネージャーモバイル体験",
    },
    login: {
      title: "マネージャーサインイン",
      subtitle: "組織アカウントでサインインしてください。",
      context: "{org} · マネージャーアクセス",
      workEmailLabel: "勤務先メールアドレス",
      passwordLabel: "パスワード",
      forgot: "パスワードをお忘れですか？",
      signIn: "サインイン",
      signingIn: "サインインしています…",
      loadingNote: "組織と施設のアクセスを確認しています。",
      tooManyCta: "{time} 後に再試行",
      offlineTitle: "接続がありません",
      offlineSubtitle:
        "施設の権限範囲を確認するには接続が必要です。",
      offlineBannerBody:
        "再接続してサインインを続けてください。",
      backToSignIn: "サインインに戻る",
      mobileAccessTitle: "モバイルアクセス",
      mobileAccessBody:
        "デスクトップと同じマネージャー権限です。業務アクセスのみで、ワーカーの健康・生活に関する非公開データにはアクセスできません。",
      invalidTitle: "メールアドレスまたはパスワードが正しくありません。",
      invalidBody: "認証情報を確認してもう一度お試しください。",
      tooManyTitle: "試行回数が多すぎます",
      tooManyBody: "{time} 後にもう一度お試しください。",
      verifiedTitle: "おかえりなさい",
      verifiedSubtitle: "マネージャーアクセスが確認されました。",
      verifiedCardTitle: "アクセス確認済み",
      verifiedCardBody:
        "{org} · マネージャー権限を確認しました。次に、許可された施設を選択してください。",
      verifiedCta: "施設選択に進む",
      desktopTitle: "マネージャーログイン",
      desktopSubtitle: "選択した施設の組織 / 企業アクセス",
      managerIdLabel: "マネージャー / 人事ID",
      organizationLabel: "組織 / 企業",
      continueCta: "組織アクセスに進む",
      brandTagline: "監視のない、雇用主のオペレーション。",
      brandBoundary: "業務データのみ · プライバシー境界を厳守",
    },
    forgot: {
      title: "パスワードのリセット",
      subtitle: "勤務先メールアドレスにリセットコードを送信します。",
      context: "マネージャーアクセスの復旧 · {org}",
      workEmailLabel: "勤務先メールアドレス",
      sendCode: "リセットコードを送信",
      sending: "コードを送信しています…",
      backToSignIn: "サインインに戻る",
      sentPageTitle: "勤務先メールをご確認ください",
      sentPageSubtitle:
        "{email} にリセットコードを送信しました。",
      resendCode: "コードを再送信",
      notFoundSubtitle:
        "マネージャーアカウントに登録された勤務先メールをご利用ください。",
      tryAnotherEmail: "別のメールアドレスを試す",
      offlineBannerBody:
        "リセットコードをリクエストする前に再接続してください。",
      securityTitle: "セキュリティ",
      securityBody:
        "リセットコードはプロトタイプ上のデモ状態です。実運用の配信方法を示すものではありません。",
      sentTitle: "リセットコードを送信しました",
      sentBody: "勤務先メールの最新のコードをご利用ください。",
      continueToReset: "パスワードのリセットに進む",
      notFoundTitle: "勤務先メールが見つかりません",
      notFoundBody:
        "このメールアドレスはパスワード復旧に使用できません。",
      noEmailTitle: "勤務先メールにアクセスできませんか？",
      noEmailSubtitle: "組織アカウントの正式な復旧手順をご利用ください。",
      protectedTitle: "アクセスは保護されたままです",
      protectedBody:
        "復旧アクセスの変更には、本人確認と組織の確認が必要です。",
      openSupport: "サポートを開く",
      desktopTitle: "パスワードをお忘れですか",
      desktopSubtitle:
        "登録済みの組織メールアドレスでマネージャーアクセスを復旧します。",
      cardTitle: "パスワードをリセット",
      cardBody:
        "登録済みのマネージャーメールアドレスに確認コードを送信します。",
      emailLabel: "メールアドレス",
      sendVerificationCode: "確認コードを送信",
      backToLogin: "ログインに戻る",
    },
    reset: {
      title: "パスワードのリセット",
      subtitle: "確認コードを入力し、新しいパスワードを設定してください。",
      codeLabel: "確認コード",
      newPasswordLabel: "新しいパスワード",
      confirmPasswordLabel: "パスワードの確認",
      requirementsTitle: "パスワードの要件",
      requirementsBody:
        "8文字以上を使用してください。推測されやすいパスワードは避けてください。",
      updatePassword: "パスワードを更新",
      saving: "パスワードを更新しています…",
      resendCode: "コードを再送信",
      cancelReset: "リセットを中止",
      invalidCodeHelper:
        "コードが正しくありません。6桁を確認してもう一度お試しください。",
      mismatchHelper: "パスワードが一致しません。",
      expiredPageTitle: "リセットコードの有効期限切れ",
      expiredPageSubtitle:
        "続けるには新しいコードをリクエストしてください。",
      sendNewCode: "新しいコードを送信",
      failedPageTitle: "パスワードを更新できませんでした",
      failedPageSubtitle:
        "変更はありません。以前のパスワードが引き続き有効です。",
      offlineSubtitle:
        "アカウントアクセスを更新するには接続が必要です。",
      offlineBannerBody:
        "パスワードを更新する前に再接続してください。",
      resendPendingSubtitle: "最新の確認コードを入力してください。",
      resendCountdown: "再送信は {time} 後に可能",
      newCodeSentSubtitle:
        "勤務先メールの最新のリセットコードをご利用ください。",
      backToReset: "パスワードのリセットに戻る",
      tooManyRequestsPageTitle: "リセットのリクエストを一時停止しました",
      tooManyRequestsPageSubtitle:
        "リセットコードのリクエストが多すぎます。",
      invalidCodeTitle: "確認コードが正しくありません。",
      invalidCodeBody: "6桁を確認してもう一度お試しください。",
      expiredTitle: "このコードは有効期限が切れています",
      expiredBody: "アカウントとパスワードは変更されていません。",
      mismatchTitle: "パスワードが一致しません。",
      mismatchBody: "確認のため新しいパスワードを再入力してください。",
      failedTitle: "更新に失敗しました",
      failedBody: "接続を確認してもう一度お試しください。",
      newCodeSentTitle: "新しいコードを送信しました",
      newCodeSentBody: "以前のリセットコードは使用できなくなります。",
      tooManyRequestsTitle: "再リクエストの前にお待ちください",
      tooManyRequestsBody: "再送信は {time} の間ロックされています。",
      desktopTitle: "リセットコードの確認",
      desktopSubtitle:
        "登録済みのメールアドレスに送信された確認コードを入力してください。",
      desktopErrorSubtitle:
        "期限切れまたは誤った確認コードの復旧状態です。",
      desktopCardTitle: "確認コード",
      desktopCardBody: "コード送信先: {email}",
      newPasswordCaps: "新しいパスワード",
      verifyCta: "確認してパスワードを更新",
      demoInvalidCta: "無効 / 期限切れコードのデモ",
      desktopErrorTitle: "リセットコードが無効 / 期限切れ",
      alertTitle: "コードを確認できませんでした",
      alertBody:
        "コードが無効か、有効期限が切れています。新しいコードをリクエストしてもう一度お試しください。",
      requestNewCode: "新しいコードをリクエスト",
      backToLogin: "ログインに戻る",
    },
    updated: {
      title: "パスワードを更新しました",
      subtitle: "マネージャーアクセスをご利用いただけます。",
      cardTitle: "更新完了",
      cardBody:
        "新しいパスワードで再度サインインしてください。既存の権限は変更されません。",
      backToLogin: "マネージャーログインに戻る",
      desktopTitle: "パスワード更新完了",
      desktopSubtitle: "マネージャーのパスワード復旧が完了しました。",
      badge: "更新済み",
      desktopHeadline: "パスワードを更新しました",
      desktopBody: "新しいパスワードで再度サインインしてください。",
      desktopCta: "マネージャーログインに戻る",
    },
    desktopStates: {
      loginFooter: "マネージャーアクセス · {org} · 運用範囲のみ",
      recoveryFooter: "マネージャーアクセス復旧 · {org}",
      resetFooter: "マネージャーアクセス復旧 · 元の組織スコープを維持",
      signingIn: {
        title: "サインイン中",
        subtitle: "マネージャーアクセスと組織コンテキストを確認しています。",
        cardTitle: "認証情報を確認中…",
        cardBody:
          "EMENDA がアカウントと許可された施設範囲を確認するまでお待ちください。",
        primary: "確認中…",
      },
      invalidCredentials: {
        title: "マネージャーログイン",
        subtitle: "認証情報を確認できませんでした。",
        cardTitle: "認証情報が無効です",
        cardBody:
          "マネージャー / HR ID またはパスワードが正しくありません。ワークスペースへのアクセスは許可されていません。",
        primary: "再試行",
        secondary: "パスワードをお忘れですか？",
      },
      tooManyAttempts: {
        title: "マネージャーログイン",
        subtitle: "一時的なアクセス保護が有効です。",
        cardTitle: "試行回数が多すぎます",
        cardBody:
          "失敗が続いたため、サインインは一時的に制限されています。既存のセッションが拡張されることはありません。",
        primary: "後で再試行",
        secondary: "パスワードを復旧",
      },
      loginOffline: {
        title: "マネージャーログイン",
        subtitle: "ネットワークに接続できません。",
        cardTitle: "オフラインです",
        cardBody:
          "サインインには接続が必要です。認証前にキャッシュされた個人の労働者データが表示されることはありません。",
        primary: "接続を再試行",
        secondary: "戻る",
      },
      accessVerified: {
        title: "アクセス確認済み",
        subtitle: "マネージャー本人確認と組織アクセスを確認しました。",
        cardTitle: "施設選択の準備が整いました",
        cardBody:
          "{manager} · {role} · {org}。運用モジュールに入る前に施設コンテキストを選択してください。",
        primary: "施設選択へ進む",
        secondary: "ログインに戻る",
      },
      sendingRequest: {
        title: "パスワードをお忘れですか",
        subtitle: "登録済みの組織メールに確認リクエストを送信しています。",
        cardTitle: "リクエストを送信中…",
        cardBody:
          "EMENDA がアカウントと復旧チャネルを検証する間、この画面を開いたままにしてください。",
        primary: "送信中…",
      },
      codeSent: {
        title: "確認コードを送信しました",
        subtitle: "復旧メールを受け付けました。",
        cardTitle: "コードを送信しました",
        cardBody:
          "{email} に確認コードを送信しました。リセットフォームへ進んでください。",
        primary: "パスワードのリセットへ進む",
        secondary: "ログインに戻る",
      },
      forgotOffline: {
        title: "パスワードをお忘れですか",
        subtitle: "復旧リクエストを送信できませんでした。",
        cardTitle: "オフラインです",
        cardBody:
          "リセットリクエストは未送信のままです。確認コードを要求する前に再接続してください。",
        primary: "接続を再試行",
        secondary: "ログインに戻る",
      },
      emailNotFound: {
        title: "パスワードをお忘れですか",
        subtitle: "登録済みの復旧メールが一致しませんでした。",
        cardTitle: "メールが見つかりません",
        cardBody:
          "入力されたメールは、この組織の有効なマネージャーアカウントに紐づいていません。",
        primary: "別のメールを試す",
        secondary: "ログインに戻る",
      },
      noWorkEmail: {
        title: "復旧サポート",
        subtitle: "登録済みの勤務先メールが利用できません。",
        cardTitle: "勤務先メールにアクセスできません",
        cardBody:
          "組織のサポート、または認可されたアカウント復旧手順をご利用ください。役割確認を回避しないでください。",
        primary: "サポートに連絡",
        secondary: "ログインに戻る",
      },
      saving: {
        title: "パスワードを更新中",
        subtitle: "確認に成功しました。新しいパスワードを保存しています。",
        cardTitle: "更新中…",
        cardBody:
          "更新が完了または失敗するまでこの画面を離れないでください。",
        primary: "保存中…",
      },
      codeExpired: {
        title: "パスワードのリセット",
        subtitle: "この確認コードは使用できなくなりました。",
        cardTitle: "コードの有効期限切れ",
        cardBody:
          "新しい確認コードを要求してください。現在のパスワード変更は適用されていません。",
        primary: "新しいコードを要求",
        secondary: "ログインに戻る",
      },
      mismatch: {
        title: "パスワードのリセット",
        subtitle: "パスワードの確認が一致しません。",
        cardTitle: "パスワードが一致しません",
        cardBody:
          "新しいパスワードと確認用パスワードを入力し直してから再試行してください。",
        primary: "パスワードを更新",
        secondary: "リセットを中止",
      },
      updateFailed: {
        title: "パスワードのリセット",
        subtitle: "パスワードを更新できませんでした。",
        cardTitle: "更新に失敗しました",
        cardBody:
          "以前のパスワードが有効なままです。問題が解決してから再試行してください。",
        primary: "更新を再試行",
        secondary: "ログインに戻る",
      },
      resetOffline: {
        title: "パスワードのリセット",
        subtitle: "接続がないと更新を完了できません。",
        cardTitle: "オフラインです",
        cardBody:
          "入力した値はこの復旧状態内にのみ保持されます。サーバーが更新を確認するまで成功は表示されません。",
        primary: "接続を再試行",
        secondary: "リセットを中止",
      },
      resendPending: {
        title: "確認コードの再送",
        subtitle: "新しいコードのリクエストを処理しています。",
        cardTitle: "リクエスト処理中",
        cardBody:
          "別のコードを要求する前に、現在のリクエストの完了をお待ちください。",
        primary: "送信中…",
      },
      newCodeSent: {
        title: "確認コードを送信しました",
        subtitle: "差し替えのコードを用意しました。",
        cardTitle: "新しいコードを送信しました",
        cardBody:
          "{email} に届いた最新のコードをご利用ください。古いコードは無効です。",
        primary: "パスワードのリセットに戻る",
        secondary: "ログインに戻る",
      },
      tooManyRequests: {
        title: "確認コードの再送",
        subtitle: "復旧リクエストは一時的に制限されています。",
        cardTitle: "リクエストが多すぎます",
        cardBody:
          "別のコードを要求する前にお待ちください。これによりワークスペースへのアクセスが付与または変更されることはありません。",
        primary: "後で再試行",
        secondary: "ログインに戻る",
      },
    },
    offline: {
      title: "インターネット接続がありません",
      tryAgain: "再試行",
    },
    languageLabel: "言語",
  },
});

/** Fills `{token}` placeholders (org / email) with raw, untranslated data. */
export function fillManagerAuthCopy(
  template: string,
  values: Record<string, string>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? values[key] : match,
  );
}
