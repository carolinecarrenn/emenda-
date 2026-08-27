import { defineSectionCopy } from "@/i18n/copy";

/**
 * Copy for the Company Admin access area — AD-00 (1226:2426), AD-00A
 * (1249:4862), AD-00B (1249:4928) and AD-00D (1239:45) on Figma page
 * "06 · Company Admin Experience" (1182:5690).
 *
 * Verbatim source per frame:
 *   · AD-00 and AD-00D are drawn in English  → EN is Figma-verbatim.
 *   · AD-00A and AD-00B are drawn in Bahasa Indonesia ("… — Bahasa Indonesia")
 *     → ID is Figma-verbatim for those two frames and EN/JA are faithful
 *     translations of the drawn Indonesian strings.
 *
 * Record data (tenant name, admin name, e-mail, phone, masked password,
 * language endonyms) lives in access.mock.ts and is injected through the
 * {company}, {password}, {name} and {profile} placeholders.
 */

export interface AccessFlowRow {
  label: string;
  value: string;
}

export interface AccessFlowStep {
  index: string;
  title: string;
  subtitle: string;
  rows: AccessFlowRow[];
}

export interface AccessBoardCard {
  pill: string;
  title: string;
  subtitle: string;
  footer: string;
}

export interface AdminAccessCopy {
  /** AD-00A · Choose Language */
  language: {
    title: string;
    subtitle: string;
    note: string;
    continueLabel: string;
  };
  /** AD-00B · Admin Sign In */
  signIn: {
    title: string;
    subtitle: string;
    emailLabel: string;
    passwordLabel: string;
    forgotPassword: string;
    signIn: string;
    changeLanguage: string;
    scopeTitle: string;
    scopeBody: string;
    tenantTitle: string;
    tenantBody: string;
    validationTitle: string;
    validationBody: string;
  };
  /** AD-00D card 2 · Password recovery */
  recovery: {
    title: string;
    subtitle: string;
    accountEmailLabel: string;
    newPasswordLabel: string;
    newPasswordHint: string;
    confirmPasswordLabel: string;
    confirmPasswordHint: string;
    resendLink: string;
    updatePassword: string;
    sentTitle: string;
    sentBody: string;
    expiredTitle: string;
    expiredBody: string;
    successTitle: string;
    successBody: string;
    backToSignIn: string;
    footer: string;
  };
  /** AD-00D card 3 · First-time Admin setup */
  setup: {
    title: string;
    subtitle: string;
    companyLabel: string;
    companyValue: string;
    profileLabel: string;
    notificationLabel: string;
    notificationValue: string;
    termsTitle: string;
    termsBody: string;
    signOut: string;
    completeSetup: string;
    mismatchTitle: string;
    mismatchBody: string;
    footer: string;
  };
  /** AD-00 · Admin Access End-to-End */
  flow: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: AccessFlowStep[];
  };
  /** AD-00D board chrome */
  board: {
    eyebrow: string;
    title: string;
    subtitle: string;
    signIn: AccessBoardCard;
    reset: AccessBoardCard;
    firstLogin: AccessBoardCard;
  };
}

export const ADMINACCESS_COPY = defineSectionCopy<AdminAccessCopy>({
  en: {
    language: {
      title: "Choose language",
      subtitle: "This language is used across the whole Admin experience.",
      note: "Language is global. User-written content is not translated automatically.",
      continueLabel: "Continue",
    },
    signIn: {
      title: "Sign in as Company Admin",
      subtitle: "Access is limited to your company only.",
      emailLabel: "Email",
      passwordLabel: "Password",
      forgotPassword: "Forgot password",
      signIn: "Sign in",
      changeLanguage: "Change language",
      scopeTitle: "{company} · Company Admin access",
      scopeBody: "No tenant switcher and no Super Admin controls.",
      tenantTitle: "Tenant context",
      tenantBody:
        "{company} is derived from the account and cannot be switched.",
      validationTitle: "Validation state",
      validationBody:
        "Wrong password keeps the email value and shows retry without clearing the form.",
    },
    recovery: {
      title: "Password recovery",
      subtitle: "Request, link validation, reset, and expiry",
      accountEmailLabel: "Account email",
      newPasswordLabel: "New password",
      newPasswordHint: "Minimum 8 chars · strength indicator",
      confirmPasswordLabel: "Confirm password",
      confirmPasswordHint: "Matches new password",
      resendLink: "Resend link",
      updatePassword: "Update password",
      sentTitle: "Reset email sent",
      sentBody:
        "Secure link is time-limited; resend is available without exposing account existence.",
      expiredTitle: "Expired link",
      expiredBody:
        "Show expired state and keep a single clear path to request a new link.",
      successTitle: "Success",
      successBody: "Return to sign in",
      backToSignIn: "Return to sign in",
      footer:
        "Success returns to sign-in; no dashboard session is created automatically.",
    },
    setup: {
      title: "First-time Admin setup",
      subtitle: "Complete identity before operating the company workspace",
      companyLabel: "Company",
      companyValue: "{company} · read-only",
      profileLabel: "Admin profile",
      notificationLabel: "Notification preference",
      notificationValue:
        "High-priority reports + overdue follow-up + daily-report alerts",
      termsTitle: "Terms & consent",
      termsBody:
        "Admin terms must be explicitly accepted before entering the workspace.",
      signOut: "Sign out",
      completeSetup: "Complete setup",
      mismatchTitle: "Permission mismatch",
      mismatchBody:
        "If the account loses Admin permission, deny access without showing company data.",
      footer:
        "Completion is persisted and future sessions land directly on AD-01.",
    },
    flow: {
      eyebrow: "END-TO-END FLOW",
      title: "Company Admin access & first-login flow",
      subtitle:
        "Tenant context is fixed to the company. No tenant switcher and no Super Admin controls.",
      steps: [
        {
          index: "01",
          title: "Sign in",
          subtitle: "Existing Company Admin account",
          rows: [
            { label: "Email", value: "Company admin email" },
            { label: "Password", value: "{password}" },
            { label: "Secondary path", value: "Forgot password → reset email" },
          ],
        },
        {
          index: "02",
          title: "Verify / reset",
          subtitle: "Only when required",
          rows: [
            {
              label: "Password reset",
              value: "Open secure link → new password",
            },
            { label: "Expired link", value: "Show expired state + resend" },
            { label: "Success", value: "Return to sign in" },
          ],
        },
        {
          index: "03",
          title: "First-time setup",
          subtitle: "Complete required admin profile",
          rows: [
            { label: "Company context", value: "{company} (read-only)" },
            { label: "Admin profile", value: "Name, phone, preferred language" },
            { label: "Consent", value: "Accept company-admin terms" },
          ],
        },
        {
          index: "04",
          title: "Enter workspace",
          subtitle: "Land on Admin Dashboard",
          rows: [
            { label: "Scope", value: "Company-only data" },
            { label: "First action", value: "Review attention queue" },
            { label: "Persistent state", value: "Session keeps company context" },
          ],
        },
      ],
    },
    board: {
      eyebrow: "CONCRETE OPERATIONAL STATES",
      title: "Admin access — actual screens & edge states",
      subtitle:
        "Sign-in, password recovery, first-login setup, and invalid-access handling are represented as executable UI states.",
      signIn: {
        pill: "SIGN IN",
        title: "Company Admin sign in",
        subtitle: "Existing tenant-bound Admin account",
        footer: "Success → AD-01 Dashboard. Security event is recorded.",
      },
      reset: {
        pill: "RESET",
        title: "Password recovery",
        subtitle: "Request, link validation, reset, and expiry",
        footer:
          "Success returns to sign-in; no dashboard session is created automatically.",
      },
      firstLogin: {
        pill: "FIRST LOGIN",
        title: "First-time Admin setup",
        subtitle: "Complete identity before operating the company workspace",
        footer:
          "Completion is persisted and future sessions land directly on AD-01.",
      },
    },
  },

  id: {
    language: {
      title: "Pilih bahasa",
      subtitle: "Bahasa ini digunakan untuk seluruh tampilan Admin.",
      note: "Bahasa bersifat global. Konten yang ditulis pengguna tidak diterjemahkan otomatis.",
      continueLabel: "Lanjutkan",
    },
    signIn: {
      title: "Masuk sebagai Company Admin",
      subtitle: "Akses hanya untuk perusahaan Anda.",
      emailLabel: "Email",
      passwordLabel: "Kata sandi",
      forgotPassword: "Lupa kata sandi",
      signIn: "Masuk",
      changeLanguage: "Ubah bahasa",
      scopeTitle: "{company} · akses Company Admin",
      scopeBody: "Tidak ada tenant switcher atau kontrol Super Admin.",
      tenantTitle: "Konteks tenant",
      tenantBody:
        "{company} diambil dari akun dan tidak dapat diganti.",
      validationTitle: "Status validasi",
      validationBody:
        "Kata sandi salah tetap mempertahankan nilai email dan menampilkan percobaan ulang tanpa mengosongkan formulir.",
    },
    recovery: {
      title: "Pemulihan kata sandi",
      subtitle: "Permintaan, validasi tautan, pengaturan ulang, dan kedaluwarsa",
      accountEmailLabel: "Email akun",
      newPasswordLabel: "Kata sandi baru",
      newPasswordHint: "Minimal 8 karakter · indikator kekuatan",
      confirmPasswordLabel: "Konfirmasi kata sandi",
      confirmPasswordHint: "Sama dengan kata sandi baru",
      resendLink: "Kirim ulang tautan",
      updatePassword: "Perbarui kata sandi",
      sentTitle: "Email pengaturan ulang terkirim",
      sentBody:
        "Tautan aman berlaku terbatas; kirim ulang tersedia tanpa mengungkap keberadaan akun.",
      expiredTitle: "Tautan kedaluwarsa",
      expiredBody:
        "Tampilkan status kedaluwarsa dan sediakan satu jalur jelas untuk meminta tautan baru.",
      successTitle: "Berhasil",
      successBody: "Kembali ke halaman masuk",
      backToSignIn: "Kembali ke halaman masuk",
      footer:
        "Keberhasilan mengembalikan ke halaman masuk; sesi dasbor tidak dibuat otomatis.",
    },
    setup: {
      title: "Pengaturan Admin pertama kali",
      subtitle:
        "Lengkapi identitas sebelum mengoperasikan ruang kerja perusahaan",
      companyLabel: "Perusahaan",
      companyValue: "{company} · hanya baca",
      profileLabel: "Profil admin",
      notificationLabel: "Preferensi notifikasi",
      notificationValue:
        "Laporan prioritas tinggi + tindak lanjut terlambat + peringatan laporan harian",
      termsTitle: "Ketentuan & persetujuan",
      termsBody:
        "Ketentuan admin harus disetujui secara eksplisit sebelum masuk ke ruang kerja.",
      signOut: "Keluar",
      completeSetup: "Selesaikan pengaturan",
      mismatchTitle: "Izin tidak sesuai",
      mismatchBody:
        "Jika akun kehilangan izin Admin, tolak akses tanpa menampilkan data perusahaan.",
      footer:
        "Penyelesaian disimpan dan sesi berikutnya langsung menuju AD-01.",
    },
    flow: {
      eyebrow: "ALUR MENYELURUH",
      title: "Alur akses & login pertama Company Admin",
      subtitle:
        "Konteks tenant terkunci pada perusahaan. Tidak ada tenant switcher dan tidak ada kontrol Super Admin.",
      steps: [
        {
          index: "01",
          title: "Masuk",
          subtitle: "Akun Company Admin yang sudah ada",
          rows: [
            { label: "Email", value: "Email admin perusahaan" },
            { label: "Kata sandi", value: "{password}" },
            {
              label: "Jalur sekunder",
              value: "Lupa kata sandi → email pengaturan ulang",
            },
          ],
        },
        {
          index: "02",
          title: "Verifikasi / atur ulang",
          subtitle: "Hanya bila diperlukan",
          rows: [
            {
              label: "Pengaturan ulang kata sandi",
              value: "Buka tautan aman → kata sandi baru",
            },
            {
              label: "Tautan kedaluwarsa",
              value: "Tampilkan status kedaluwarsa + kirim ulang",
            },
            { label: "Berhasil", value: "Kembali ke halaman masuk" },
          ],
        },
        {
          index: "03",
          title: "Pengaturan pertama kali",
          subtitle: "Lengkapi profil admin yang diwajibkan",
          rows: [
            { label: "Konteks perusahaan", value: "{company} (hanya baca)" },
            {
              label: "Profil admin",
              value: "Nama, telepon, bahasa pilihan",
            },
            { label: "Persetujuan", value: "Terima ketentuan company admin" },
          ],
        },
        {
          index: "04",
          title: "Masuk ruang kerja",
          subtitle: "Mendarat di Dasbor Admin",
          rows: [
            { label: "Cakupan", value: "Hanya data perusahaan" },
            { label: "Tindakan pertama", value: "Tinjau antrean perhatian" },
            {
              label: "Status persisten",
              value: "Sesi mempertahankan konteks perusahaan",
            },
          ],
        },
      ],
    },
    board: {
      eyebrow: "STATUS OPERASIONAL KONKRET",
      title: "Akses admin — layar nyata & status tepi",
      subtitle:
        "Masuk, pemulihan kata sandi, pengaturan login pertama, dan penanganan akses tidak sah direpresentasikan sebagai status UI yang dapat dijalankan.",
      signIn: {
        pill: "MASUK",
        title: "Masuk Company Admin",
        subtitle: "Akun Admin terikat tenant yang sudah ada",
        footer: "Berhasil → Dasbor AD-01. Peristiwa keamanan dicatat.",
      },
      reset: {
        pill: "ATUR ULANG",
        title: "Pemulihan kata sandi",
        subtitle:
          "Permintaan, validasi tautan, pengaturan ulang, dan kedaluwarsa",
        footer:
          "Keberhasilan mengembalikan ke halaman masuk; sesi dasbor tidak dibuat otomatis.",
      },
      firstLogin: {
        pill: "LOGIN PERTAMA",
        title: "Pengaturan Admin pertama kali",
        subtitle:
          "Lengkapi identitas sebelum mengoperasikan ruang kerja perusahaan",
        footer:
          "Penyelesaian disimpan dan sesi berikutnya langsung menuju AD-01.",
      },
    },
  },

  ja: {
    language: {
      title: "言語を選択",
      subtitle: "この言語は管理者画面全体に適用されます。",
      note: "言語設定は全体に適用されます。ユーザーが入力した内容は自動翻訳されません。",
      continueLabel: "続ける",
    },
    signIn: {
      title: "Company Admin としてサインイン",
      subtitle: "アクセスは自社に限定されます。",
      emailLabel: "メールアドレス",
      passwordLabel: "パスワード",
      forgotPassword: "パスワードをお忘れの方",
      signIn: "サインイン",
      changeLanguage: "言語を変更",
      scopeTitle: "{company} · Company Admin アクセス",
      scopeBody: "テナント切り替えや Super Admin の操作はありません。",
      tenantTitle: "テナントコンテキスト",
      tenantBody:
        "{company} はアカウントから決まり、切り替えられません。",
      validationTitle: "検証状態",
      validationBody:
        "パスワードが誤っている場合もメールアドレスは保持され、フォームを消さずに再試行を表示します。",
    },
    recovery: {
      title: "パスワードの再設定",
      subtitle: "申請、リンク検証、再設定、有効期限",
      accountEmailLabel: "アカウントのメールアドレス",
      newPasswordLabel: "新しいパスワード",
      newPasswordHint: "8文字以上 · 強度インジケーター",
      confirmPasswordLabel: "パスワードの確認",
      confirmPasswordHint: "新しいパスワードと一致",
      resendLink: "リンクを再送",
      updatePassword: "パスワードを更新",
      sentTitle: "再設定メールを送信しました",
      sentBody:
        "安全なリンクには有効期限があります。アカウントの有無を明かさずに再送できます。",
      expiredTitle: "リンクの有効期限切れ",
      expiredBody:
        "有効期限切れの状態を表示し、新しいリンクを申請する明確な導線を1つだけ残します。",
      successTitle: "成功",
      successBody: "サインインに戻る",
      backToSignIn: "サインインに戻る",
      footer:
        "成功するとサインインに戻ります。ダッシュボードのセッションは自動作成されません。",
    },
    setup: {
      title: "初回の管理者セットアップ",
      subtitle: "会社ワークスペースを操作する前に本人情報を完了してください",
      companyLabel: "会社",
      companyValue: "{company} · 読み取り専用",
      profileLabel: "管理者プロフィール",
      notificationLabel: "通知設定",
      notificationValue:
        "高優先度レポート + 期限超過のフォローアップ + 日報アラート",
      termsTitle: "規約と同意",
      termsBody:
        "ワークスペースに入る前に管理者規約への明示的な同意が必要です。",
      signOut: "サインアウト",
      completeSetup: "セットアップを完了",
      mismatchTitle: "権限の不一致",
      mismatchBody:
        "アカウントが管理者権限を失った場合は、会社データを表示せずにアクセスを拒否します。",
      footer:
        "完了状態は保存され、次回以降のセッションは直接 AD-01 に移動します。",
    },
    flow: {
      eyebrow: "エンドツーエンドのフロー",
      title: "Company Admin のアクセスと初回ログインの流れ",
      subtitle:
        "テナントコンテキストは会社に固定されます。テナント切り替えも Super Admin の操作もありません。",
      steps: [
        {
          index: "01",
          title: "サインイン",
          subtitle: "既存の Company Admin アカウント",
          rows: [
            { label: "メールアドレス", value: "会社管理者のメールアドレス" },
            { label: "パスワード", value: "{password}" },
            {
              label: "副次的な経路",
              value: "パスワードをお忘れの方 → 再設定メール",
            },
          ],
        },
        {
          index: "02",
          title: "確認 / 再設定",
          subtitle: "必要な場合のみ",
          rows: [
            {
              label: "パスワード再設定",
              value: "安全なリンクを開く → 新しいパスワード",
            },
            {
              label: "リンクの有効期限切れ",
              value: "期限切れ状態を表示 + 再送",
            },
            { label: "成功", value: "サインインに戻る" },
          ],
        },
        {
          index: "03",
          title: "初回セットアップ",
          subtitle: "必須の管理者プロフィールを完了",
          rows: [
            { label: "会社コンテキスト", value: "{company}（読み取り専用）" },
            { label: "管理者プロフィール", value: "氏名、電話番号、優先言語" },
            { label: "同意", value: "company admin 規約に同意" },
          ],
        },
        {
          index: "04",
          title: "ワークスペースへ",
          subtitle: "管理者ダッシュボードに到着",
          rows: [
            { label: "範囲", value: "自社データのみ" },
            { label: "最初の操作", value: "要対応キューを確認" },
            {
              label: "永続状態",
              value: "セッションは会社コンテキストを保持",
            },
          ],
        },
      ],
    },
    board: {
      eyebrow: "具体的な運用状態",
      title: "管理者アクセス — 実際の画面とエッジ状態",
      subtitle:
        "サインイン、パスワード再設定、初回ログインのセットアップ、不正アクセスの処理を、実行可能な UI 状態として表現します。",
      signIn: {
        pill: "サインイン",
        title: "Company Admin のサインイン",
        subtitle: "テナントに紐づく既存の管理者アカウント",
        footer:
          "成功 → AD-01 ダッシュボード。セキュリティイベントが記録されます。",
      },
      reset: {
        pill: "再設定",
        title: "パスワードの再設定",
        subtitle: "申請、リンク検証、再設定、有効期限",
        footer:
          "成功するとサインインに戻ります。ダッシュボードのセッションは自動作成されません。",
      },
      firstLogin: {
        pill: "初回ログイン",
        title: "初回の管理者セットアップ",
        subtitle: "会社ワークスペースを操作する前に本人情報を完了してください",
        footer:
          "完了状態は保存され、次回以降のセッションは直接 AD-01 に移動します。",
      },
    },
  },
});
