import { defineSectionCopy } from "@/i18n/copy";

/**
 * Unified Landing & Access — sign in + post-auth routing copy.
 * EN strings are the Figma text verbatim (LP-05 node 1060:43, LP-06 node
 * 1053:981, LP-07 node 1053:1012, LP-08 node 1107:50). Data (person names,
 * org names, EMENDA IDs) never lives here — see accessMock.ts.
 *
 * Exception, documented on purpose: signIn.createAccount /
 * signIn.createAccountNote are verbatim from the CANONICAL mobile flow's
 * W-03 Welcome (421:11) — LP-05 draws no account-creation CTA at all, so the
 * canonical-mobile rule requires the capability to exist here with W-03's
 * wording rather than newly invented copy. ID/JA match auth.copy.ts welcome.
 */
export interface AccessCopy {
  signIn: {
    eyebrow: string;
    headline: string;
    body: string;
    infoTitle: string;
    infoBody: string;
    helpLine: string;
    cardTitle: string;
    cardSubtitle: string;
    accountIdLabel: string;
    accountIdPlaceholder: string;
    passwordLabel: string;
    passwordAria: string;
    forgot: string;
    footer: string;
    /** W-03 Welcome (421:11) secondary button — LP-05 draws no sign-up CTA. */
    createAccount: string;
    /** W-03 Welcome (421:11) footnote under the same button. */
    createAccountNote: string;
  };
  routing: {
    recognized: string;
    greeting: (name: string) => string;
    subline: string;
    myEmendaId: string;
    workerOwned: string;
    status: {
      headless: string;
      work: string;
      employee: string;
    };
    managerLabel: string;
    headless: {
      title: string;
      body: string;
      pill: string;
      primary: string;
      secondary: string;
      footnote: string;
    };
    work: {
      title: string;
      pill: string;
      primary: string;
      secondary: string;
      footnote: string;
    };
    employee: {
      title: string;
      subline: string;
      pill: string;
      primary: string;
      secondary: string;
      footnote: string;
    };
  };
}

export const ACCESS_COPY = defineSectionCopy<AccessCopy>({
  en: {
    signIn: {
      eyebrow: "SIGN IN",
      headline: "Log in to EMENDA",
      body: "Enter your account credentials to continue.",
      infoTitle: "Welcome back",
      infoBody:
        "Your EMENDA account gives you access to the information and tools available to you.",
      helpLine:
        "Need help signing in? Use account recovery or contact your administrator.",
      cardTitle: "Sign in",
      cardSubtitle: "Enter your account credentials.",
      accountIdLabel: "ACCOUNT ID",
      accountIdPlaceholder: "Enter your account ID",
      passwordLabel: "PASSWORD / PIN",
      passwordAria: "Password or PIN",
      forgot: "Forgot your password or PIN?",
      footer: "Secure access to your EMENDA account.",
      createAccount: "Create new account",
      createAccountNote:
        "You can connect an employer later. Creating an account does not require an employer.",
    },
    routing: {
      recognized: "ACCOUNT RECOGNIZED",
      greeting: (name) => `Welcome back, ${name}`,
      subline: "Your EMENDA ID and worker-owned history are ready.",
      myEmendaId: "MY EMENDA ID",
      workerOwned: "WORKER-OWNED",
      status: {
        headless: "No active employer connection found.",
        work: "Active employer connection found.",
        employee: "Employee / organization account recognized.",
      },
      managerLabel: "Manager",
      headless: {
        title: "Open Headless Home",
        body: "Career, CV, documents, Japan preparation, and your worker-owned history stay available without an employer.",
        pill: "NO ACTIVE EMPLOYER",
        primary: "Open Headless Home",
        secondary: "Connect an employer",
        footnote:
          "Headless uses the same EMENDA ID. No new account is created.",
      },
      work: {
        title: "Open Work Home",
        pill: "WORK MODE · CONNECTED",
        primary: "Open Work Home",
        secondary: "Review employer access",
        footnote:
          "Employer access remains limited to the consented work scope.",
      },
      employee: {
        title: "Open employee workspace",
        subline: "Organization access recognized",
        pill: "EMPLOYEE ACCOUNT",
        primary: "Open employee workspace",
        secondary: "Review employer access",
        footnote:
          "Access follows the role and organization scope assigned to this work ID.",
      },
    },
  },
  id: {
    signIn: {
      eyebrow: "MASUK",
      headline: "Masuk ke EMENDA",
      body: "Masukkan kredensial akun Anda untuk melanjutkan.",
      infoTitle: "Selamat datang kembali",
      infoBody:
        "Akun EMENDA Anda memberi akses ke informasi dan alat yang tersedia untuk Anda.",
      helpLine:
        "Butuh bantuan untuk masuk? Gunakan pemulihan akun atau hubungi administrator Anda.",
      cardTitle: "Masuk",
      cardSubtitle: "Masukkan kredensial akun Anda.",
      accountIdLabel: "ID AKUN",
      accountIdPlaceholder: "Masukkan ID akun Anda",
      passwordLabel: "KATA SANDI / PIN",
      passwordAria: "Kata sandi atau PIN",
      forgot: "Lupa kata sandi atau PIN Anda?",
      footer: "Akses aman ke akun EMENDA Anda.",
      createAccount: "Buat akun baru",
      createAccountNote:
        "Anda dapat menghubungkan pemberi kerja nanti. Membuat akun tidak memerlukan pemberi kerja.",
    },
    routing: {
      recognized: "AKUN DIKENALI",
      greeting: (name) => `Selamat datang kembali, ${name}`,
      subline: "EMENDA ID dan riwayat milik pekerja Anda sudah siap.",
      myEmendaId: "EMENDA ID SAYA",
      workerOwned: "MILIK PEKERJA",
      status: {
        headless: "Tidak ada koneksi pemberi kerja aktif yang ditemukan.",
        work: "Koneksi pemberi kerja aktif ditemukan.",
        employee: "Akun karyawan / organisasi dikenali.",
      },
      managerLabel: "Manajer",
      headless: {
        title: "Buka Beranda Headless",
        body: "Karier, CV, dokumen, persiapan Jepang, dan riwayat milik pekerja Anda tetap tersedia tanpa pemberi kerja.",
        pill: "TIDAK ADA PEMBERI KERJA AKTIF",
        primary: "Buka Beranda Headless",
        secondary: "Hubungkan pemberi kerja",
        footnote:
          "Headless menggunakan EMENDA ID yang sama. Tidak ada akun baru yang dibuat.",
      },
      work: {
        title: "Buka Beranda Kerja",
        pill: "MODE KERJA · TERHUBUNG",
        primary: "Buka Beranda Kerja",
        secondary: "Tinjau akses pemberi kerja",
        footnote:
          "Akses pemberi kerja tetap terbatas pada cakupan kerja yang Anda setujui.",
      },
      employee: {
        title: "Buka ruang kerja karyawan",
        subline: "Akses organisasi dikenali",
        pill: "AKUN KARYAWAN",
        primary: "Buka ruang kerja karyawan",
        secondary: "Tinjau akses pemberi kerja",
        footnote:
          "Akses mengikuti peran dan cakupan organisasi yang ditetapkan untuk ID kerja ini.",
      },
    },
  },
  ja: {
    signIn: {
      eyebrow: "サインイン",
      headline: "EMENDAにログイン",
      body: "続行するにはアカウント情報を入力してください。",
      infoTitle: "おかえりなさい",
      infoBody:
        "EMENDAアカウントでは、あなたが利用できる情報とツールにアクセスできます。",
      helpLine:
        "サインインでお困りですか？アカウント復旧を利用するか、管理者にお問い合わせください。",
      cardTitle: "サインイン",
      cardSubtitle: "アカウント情報を入力してください。",
      accountIdLabel: "アカウントID",
      accountIdPlaceholder: "アカウントIDを入力",
      passwordLabel: "パスワード / PIN",
      passwordAria: "パスワードまたはPIN",
      forgot: "パスワードまたはPINをお忘れですか？",
      footer: "EMENDAアカウントへの安全なアクセス。",
      createAccount: "新しいアカウントを作成",
      createAccountNote:
        "雇用主は後から接続できます。アカウント作成に雇用主は必要ありません。",
    },
    routing: {
      recognized: "アカウントを確認しました",
      greeting: (name) => `おかえりなさい、${name}さん`,
      subline: "EMENDA IDと労働者所有の履歴の準備ができました。",
      myEmendaId: "マイEMENDA ID",
      workerOwned: "労働者所有",
      status: {
        headless: "有効な雇用主との接続は見つかりませんでした。",
        work: "有効な雇用主との接続が見つかりました。",
        employee: "従業員 / 組織アカウントを確認しました。",
      },
      managerLabel: "マネージャー",
      headless: {
        title: "ヘッドレスホームを開く",
        body: "キャリア、CV、書類、日本での準備、そして労働者所有の履歴は、雇用主がいなくても引き続き利用できます。",
        pill: "有効な雇用主なし",
        primary: "ヘッドレスホームを開く",
        secondary: "雇用主と接続",
        footnote:
          "ヘッドレスでも同じEMENDA IDを使用します。新しいアカウントは作成されません。",
      },
      work: {
        title: "ワークホームを開く",
        pill: "ワークモード · 接続済み",
        primary: "ワークホームを開く",
        secondary: "雇用主のアクセスを確認",
        footnote:
          "雇用主のアクセスは、あなたが同意した業務範囲に限定されます。",
      },
      employee: {
        title: "従業員ワークスペースを開く",
        subline: "組織アクセスを確認しました",
        pill: "従業員アカウント",
        primary: "従業員ワークスペースを開く",
        secondary: "雇用主のアクセスを確認",
        footnote:
          "アクセスは、この業務IDに割り当てられた役割と組織の範囲に従います。",
      },
    },
  },
});
