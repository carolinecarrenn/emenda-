import { defineSectionCopy, useSectionCopy } from "@/i18n/copy";
import type {
  ChangeCardKey,
  FeatureKey,
  FlowKey,
  JapanCardKey,
  PrincipleKey,
  PublicNavKey,
  StepKey,
} from "./publicMock";

/**
 * Copy for the public inner pages (Figma section 1147:2 — LP-02 About,
 * LP-03 Features, LP-04 How it works). EN is the Figma text verbatim.
 */
export interface PublicCopy {
  nav: Record<PublicNavKey, string>;
  footer: { tagline: string; links: string[]; copyright: string };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    idLabel: string;
    idCaption: string;
    idNote: string;
    whyEyebrow: string;
    whyTitle: string;
    whyBody: string;
    principles: Record<PrincipleKey, { title: string; body: string }>;
    continuityEyebrow: string;
    continuityTitle: string;
    staysTitle: string;
    staysItems: string[];
    changesTitle: string;
    changesItems: string[];
    japanEyebrow: string;
    japanTitle: string;
    japanBody: string;
    japanCards: Record<JapanCardKey, { title: string; body: string }>;
    ctaTitle: string;
    ctaBody: string;
  };
  features: {
    eyebrow: string;
    title: string;
    body: string;
    sectionEyebrow: string;
    sectionTitle: string;
    learnMore: string;
    cards: Record<FeatureKey, { title: string; body: string }>;
    connectedEyebrow: string;
    connectedTitle: string;
    connectedBody: string;
    flow: Record<FlowKey, string>;
    privacyTitle: string;
    privacyBody: string;
  };
  how: {
    eyebrow: string;
    title: string;
    body: string;
    journeyEyebrow: string;
    journeyTitle: string;
    steps: Record<StepKey, { title: string; body: string; tag: string }>;
    changesEyebrow: string;
    changesTitle: string;
    changesBody: string;
    changeCards: Record<ChangeCardKey, { title: string; body: string }>;
    ctaTitle: string;
    ctaBody: string;
  };
}

export const PUBLIC_COPY = defineSectionCopy<PublicCopy>({
  en: {
    nav: {
      about: "About EMENDA",
      features: "Features",
      how: "How it works",
    },
    footer: {
      tagline: "Worker-owned identity for work, life, and future in Japan.",
      links: ["Privacy policy", "Terms of use", "Contact"],
      copyright: "© 2026 EMENDA",
    },
    about: {
      eyebrow: "ABOUT EMENDA",
      title: "A portable identity built to stay with you.",
      body: "EMENDA keeps your identity, career history, preparation, and personal records useful even when your work situation changes.",
      idLabel: "YOUR EMENDA ID",
      idCaption: "Worker-owned identity",
      idNote:
        "Your core identity remains yours. Work access can change without replacing your account.",
      whyEyebrow: "WHY EMENDA",
      whyTitle: "Work changes. Your identity should not.",
      whyBody:
        "EMENDA separates the information you own from the access a workplace may temporarily receive.",
      principles: {
        identity: {
          title: "Your identity stays yours",
          body: "Your EMENDA ID, profile, and portable history remain under your control.",
        },
        permission: {
          title: "Access is permission-based",
          body: "You review what an employer can access before a work connection becomes active.",
        },
        records: {
          title: "Records stay useful",
          body: "Career, documents, and preparation remain available when work access changes.",
        },
      },
      continuityEyebrow: "BUILT FOR CONTINUITY",
      continuityTitle: "What stays with you—and what can change safely.",
      staysTitle: "Stays with you",
      staysItems: [
        "EMENDA ID and personal profile",
        "Career, skills, CV, and qualifications",
        "Documents and personal preparation",
      ],
      changesTitle: "Can change over time",
      changesItems: [
        "Current employer connection",
        "Work-specific permissions",
        "Active workplace context",
      ],
      japanEyebrow: "BUILT FOR LIFE IN JAPAN",
      japanTitle: "Keep work and everyday preparation connected.",
      japanBody:
        "Career, residence preparation, important dates, documents, and support can live alongside your worker-owned identity.",
      japanCards: {
        career: {
          title: "Career",
          body: "Portable CV, skills, and work history.",
        },
        japan: {
          title: "Japan preparation",
          body: "Residence, readiness, and important dates.",
        },
        records: {
          title: "Records",
          body: "Personal documents and emergency information.",
        },
      },
      ctaTitle: "Ready to continue with EMENDA?",
      ctaBody: "Use your existing account to continue.",
    },
    features: {
      eyebrow: "FEATURES",
      title: "Everything you need around one portable identity.",
      body: "EMENDA brings identity, career, preparation, records, support, and employer access together without giving up ownership.",
      sectionEyebrow: "WHAT YOU CAN DO",
      sectionTitle: "Six connected areas, one account.",
      learnMore: "Learn more",
      cards: {
        emendaId: {
          title: "EMENDA ID",
          body: "A persistent worker-owned identity that stays with you.",
        },
        career: {
          title: "Career & CV",
          body: "Build experience, education, skills, qualifications, and a portable CV.",
        },
        japan: {
          title: "Japan preparation",
          body: "Track readiness, residence information, registration, and important dates.",
        },
        documents: {
          title: "Documents & records",
          body: "Keep personal and worker-owned documents organized in one place.",
        },
        knowledge: {
          title: "Knowledge & Q&A",
          body: "Find guidance and answers for work and everyday life in Japan.",
        },
        employer: {
          title: "Employer connection",
          body: "Connect work access only when needed and review what is shared.",
        },
      },
      connectedEyebrow: "DESIGNED TO WORK TOGETHER",
      connectedTitle: "Your information stays connected across the product.",
      connectedBody:
        "Update your profile once, keep your records portable, and use the same foundation across career, preparation, and work access.",
      flow: {
        identity: "Identity & profile",
        records: "Records & preparation",
        work: "Work connection when needed",
      },
      privacyTitle: "Private by default",
      privacyBody:
        "Personal records stay private unless a flow explicitly asks you to share them. Employer access follows the scope you review.",
    },
    how: {
      eyebrow: "HOW IT WORKS",
      title: "Start once. Keep your history with you.",
      body: "EMENDA starts with your identity and records, then lets work access come and go without replacing the account underneath.",
      journeyEyebrow: "YOUR EMENDA JOURNEY",
      journeyTitle: "A simple flow built around continuity.",
      steps: {
        create: {
          title: "Create or restore your EMENDA ID",
          body: "Start from one worker-owned identity.",
          tag: "Worker-owned flow",
        },
        build: {
          title: "Build your profile and records",
          body: "Add career, CV, documents, and preparation at your pace.",
          tag: "Worker-owned flow",
        },
        prepare: {
          title: "Prepare for work and life in Japan",
          body: "Keep readiness, residence information, and important dates together.",
          tag: "Worker-owned flow",
        },
        connect: {
          title: "Connect an employer when needed",
          body: "Review the access scope before a work connection becomes active.",
          tag: "Permission-aware",
        },
        continue: {
          title: "Continue when work access changes",
          body: "Your identity and portable records remain available to you.",
          tag: "Portable history",
        },
      },
      changesEyebrow: "WHEN WORK CHANGES",
      changesTitle: "Ending access does not end your account.",
      changesBody:
        "Work-specific access can end while your EMENDA ID, personal profile, and portable history remain yours.",
      changeCards: {
        keep: {
          title: "You keep",
          body: "Identity, profile, career history, and personal records.",
        },
        end: {
          title: "What can end",
          body: "Employer-specific access and the current workplace context.",
        },
      },
      ctaTitle: "Continue to your EMENDA account",
      ctaBody: "Log in to pick up where you left off.",
    },
  },

  id: {
    nav: {
      about: "Tentang EMENDA",
      features: "Fitur",
      how: "Cara kerja",
    },
    footer: {
      tagline:
        "Identitas milik pekerja untuk kerja, hidup, dan masa depan di Jepang.",
      links: ["Kebijakan privasi", "Ketentuan penggunaan", "Kontak"],
      copyright: "© 2026 EMENDA",
    },
    about: {
      eyebrow: "TENTANG EMENDA",
      title: "Identitas portabel yang dibuat untuk tetap bersamamu.",
      body: "EMENDA menjaga identitas, riwayat karier, persiapan, dan catatan pribadimu tetap berguna meski situasi kerjamu berubah.",
      idLabel: "EMENDA ID KAMU",
      idCaption: "Identitas milik pekerja",
      idNote:
        "Identitas intimu tetap milikmu. Akses kerja bisa berubah tanpa mengganti akunmu.",
      whyEyebrow: "MENGAPA EMENDA",
      whyTitle: "Pekerjaan berubah. Identitasmu tidak.",
      whyBody:
        "EMENDA memisahkan informasi yang kamu miliki dari akses yang mungkin diterima tempat kerja untuk sementara.",
      principles: {
        identity: {
          title: "Identitasmu tetap milikmu",
          body: "EMENDA ID, profil, dan riwayat portabelmu tetap dalam kendalimu.",
        },
        permission: {
          title: "Akses berbasis izin",
          body: "Kamu meninjau apa yang bisa diakses employer sebelum koneksi kerja aktif.",
        },
        records: {
          title: "Catatan tetap berguna",
          body: "Karier, dokumen, dan persiapan tetap tersedia saat akses kerja berubah.",
        },
      },
      continuityEyebrow: "DIBANGUN UNTUK KESINAMBUNGAN",
      continuityTitle:
        "Yang tetap bersamamu—dan yang bisa berubah dengan aman.",
      staysTitle: "Tetap bersamamu",
      staysItems: [
        "EMENDA ID dan profil pribadi",
        "Karier, keterampilan, CV, dan kualifikasi",
        "Dokumen dan persiapan pribadi",
      ],
      changesTitle: "Bisa berubah seiring waktu",
      changesItems: [
        "Koneksi employer saat ini",
        "Izin khusus pekerjaan",
        "Konteks tempat kerja yang aktif",
      ],
      japanEyebrow: "DIBANGUN UNTUK HIDUP DI JEPANG",
      japanTitle: "Jaga pekerjaan dan persiapan sehari-hari tetap terhubung.",
      japanBody:
        "Karier, persiapan tempat tinggal, tanggal penting, dokumen, dan dukungan bisa berada bersama identitas milik pekerjamu.",
      japanCards: {
        career: {
          title: "Karier",
          body: "CV portabel, keterampilan, dan riwayat kerja.",
        },
        japan: {
          title: "Persiapan Jepang",
          body: "Tempat tinggal, kesiapan, dan tanggal penting.",
        },
        records: {
          title: "Catatan",
          body: "Dokumen pribadi dan informasi darurat.",
        },
      },
      ctaTitle: "Siap melanjutkan dengan EMENDA?",
      ctaBody: "Gunakan akun yang sudah kamu miliki untuk melanjutkan.",
    },
    features: {
      eyebrow: "FITUR",
      title: "Semua yang kamu butuhkan di sekitar satu identitas portabel.",
      body: "EMENDA menyatukan identitas, karier, persiapan, catatan, dukungan, dan akses employer tanpa melepaskan kepemilikan.",
      sectionEyebrow: "YANG BISA KAMU LAKUKAN",
      sectionTitle: "Enam area yang terhubung, satu akun.",
      learnMore: "Selengkapnya",
      cards: {
        emendaId: {
          title: "EMENDA ID",
          body: "Identitas milik pekerja yang bertahan dan selalu bersamamu.",
        },
        career: {
          title: "Karier & CV",
          body: "Bangun pengalaman, pendidikan, keterampilan, kualifikasi, dan CV portabel.",
        },
        japan: {
          title: "Persiapan Jepang",
          body: "Pantau kesiapan, informasi tempat tinggal, registrasi, dan tanggal penting.",
        },
        documents: {
          title: "Dokumen & catatan",
          body: "Simpan dokumen pribadi dan milik pekerja secara rapi di satu tempat.",
        },
        knowledge: {
          title: "Pengetahuan & Tanya Jawab",
          body: "Temukan panduan dan jawaban untuk kerja dan kehidupan sehari-hari di Jepang.",
        },
        employer: {
          title: "Koneksi employer",
          body: "Hubungkan akses kerja hanya saat dibutuhkan dan tinjau apa yang dibagikan.",
        },
      },
      connectedEyebrow: "DIRANCANG UNTUK BEKERJA BERSAMA",
      connectedTitle: "Informasimu tetap terhubung di seluruh produk.",
      connectedBody:
        "Perbarui profilmu sekali, jaga catatanmu tetap portabel, dan gunakan fondasi yang sama untuk karier, persiapan, dan akses kerja.",
      flow: {
        identity: "Identitas & profil",
        records: "Catatan & persiapan",
        work: "Koneksi kerja saat dibutuhkan",
      },
      privacyTitle: "Privat secara default",
      privacyBody:
        "Catatan pribadi tetap privat kecuali sebuah alur secara eksplisit memintamu membagikannya. Akses employer mengikuti cakupan yang kamu tinjau.",
    },
    how: {
      eyebrow: "CARA KERJA",
      title: "Mulai sekali. Bawa riwayatmu bersamamu.",
      body: "EMENDA dimulai dari identitas dan catatanmu, lalu membiarkan akses kerja datang dan pergi tanpa mengganti akun di baliknya.",
      journeyEyebrow: "PERJALANAN EMENDA-MU",
      journeyTitle: "Alur sederhana yang dibangun di sekitar kesinambungan.",
      steps: {
        create: {
          title: "Buat atau pulihkan EMENDA ID-mu",
          body: "Mulai dari satu identitas milik pekerja.",
          tag: "Alur milik pekerja",
        },
        build: {
          title: "Bangun profil dan catatanmu",
          body: "Tambah karier, CV, dokumen, dan persiapan sesuai ritmemu.",
          tag: "Alur milik pekerja",
        },
        prepare: {
          title: "Bersiap untuk kerja dan hidup di Jepang",
          body: "Simpan kesiapan, informasi tempat tinggal, dan tanggal penting bersama-sama.",
          tag: "Alur milik pekerja",
        },
        connect: {
          title: "Hubungkan employer saat dibutuhkan",
          body: "Tinjau cakupan akses sebelum koneksi kerja menjadi aktif.",
          tag: "Sadar izin",
        },
        continue: {
          title: "Lanjutkan saat akses kerja berubah",
          body: "Identitas dan catatan portabelmu tetap tersedia untukmu.",
          tag: "Riwayat portabel",
        },
      },
      changesEyebrow: "SAAT PEKERJAAN BERUBAH",
      changesTitle: "Mengakhiri akses tidak mengakhiri akunmu.",
      changesBody:
        "Akses khusus pekerjaan bisa berakhir sementara EMENDA ID, profil pribadi, dan riwayat portabelmu tetap milikmu.",
      changeCards: {
        keep: {
          title: "Kamu simpan",
          body: "Identitas, profil, riwayat karier, dan catatan pribadi.",
        },
        end: {
          title: "Yang bisa berakhir",
          body: "Akses khusus employer dan konteks tempat kerja saat ini.",
        },
      },
      ctaTitle: "Lanjutkan ke akun EMENDA-mu",
      ctaBody: "Masuk untuk melanjutkan dari tempat kamu berhenti.",
    },
  },

  ja: {
    nav: {
      about: "EMENDAについて",
      features: "機能",
      how: "仕組み",
    },
    footer: {
      tagline: "日本での仕事、生活、未来のための労働者所有ID。",
      links: ["プライバシーポリシー", "利用規約", "お問い合わせ"],
      copyright: "© 2026 EMENDA",
    },
    about: {
      eyebrow: "EMENDAについて",
      title: "あなたと共にあり続ける、ポータブルなID。",
      body: "EMENDAは、仕事の状況が変わっても、あなたのID、キャリア履歴、準備、個人記録を役立つ状態のまま保ちます。",
      idLabel: "あなたのEMENDA ID",
      idCaption: "労働者所有のID",
      idNote:
        "中核となるIDはあなたのものです。就労アクセスは、アカウントを置き換えることなく変更できます。",
      whyEyebrow: "EMENDAが選ばれる理由",
      whyTitle: "仕事は変わる。あなたのIDは変わらない。",
      whyBody:
        "EMENDAは、あなたが所有する情報と、職場が一時的に受け取るアクセスを分けています。",
      principles: {
        identity: {
          title: "IDはあなたのもの",
          body: "EMENDA ID、プロフィール、ポータブルな履歴はあなたの管理下に残ります。",
        },
        permission: {
          title: "アクセスは許可ベース",
          body: "就労接続が有効になる前に、雇用主がアクセスできる範囲を確認できます。",
        },
        records: {
          title: "記録は役立ち続ける",
          body: "就労アクセスが変わっても、キャリア、書類、準備は利用できます。",
        },
      },
      continuityEyebrow: "継続性のための設計",
      continuityTitle: "あなたに残るもの、そして安全に変えられるもの。",
      staysTitle: "あなたに残るもの",
      staysItems: [
        "EMENDA IDと個人プロフィール",
        "キャリア、スキル、CV、資格",
        "書類と個人の準備",
      ],
      changesTitle: "時間とともに変わるもの",
      changesItems: [
        "現在の雇用主との接続",
        "就労固有の権限",
        "現在の職場コンテキスト",
      ],
      japanEyebrow: "日本での生活のために",
      japanTitle: "仕事と日々の準備をつなげたままに。",
      japanBody:
        "キャリア、在留準備、重要な日付、書類、サポートを、労働者所有のIDと並べて管理できます。",
      japanCards: {
        career: {
          title: "キャリア",
          body: "ポータブルなCV、スキル、職務履歴。",
        },
        japan: {
          title: "日本準備",
          body: "在留、準備状況、重要な日付。",
        },
        records: {
          title: "記録",
          body: "個人の書類と緊急時の情報。",
        },
      },
      ctaTitle: "EMENDAをつづけますか？",
      ctaBody: "お持ちのアカウントでそのまま続けられます。",
    },
    features: {
      eyebrow: "機能",
      title: "ひとつのポータブルIDを中心に、必要なすべてを。",
      body: "EMENDAは、所有権を手放すことなく、ID、キャリア、準備、記録、サポート、雇用主アクセスをひとつにまとめます。",
      sectionEyebrow: "できること",
      sectionTitle: "つながる6つの領域、ひとつのアカウント。",
      learnMore: "詳しく見る",
      cards: {
        emendaId: {
          title: "EMENDA ID",
          body: "あなたと共にあり続ける、労働者所有の永続的なID。",
        },
        career: {
          title: "キャリア & CV",
          body: "経験、学歴、スキル、資格、そしてポータブルなCVを構築。",
        },
        japan: {
          title: "日本準備",
          body: "準備状況、在留情報、登録、重要な日付を管理。",
        },
        documents: {
          title: "書類 & 記録",
          body: "個人と労働者所有の書類をひとつの場所で整理。",
        },
        knowledge: {
          title: "ナレッジ & Q&A",
          body: "日本での仕事と日常生活のためのガイドと回答を探せます。",
        },
        employer: {
          title: "雇用主との接続",
          body: "必要なときだけ就労アクセスを接続し、共有内容を確認できます。",
        },
      },
      connectedEyebrow: "連携するための設計",
      connectedTitle: "あなたの情報はプロダクト全体でつながり続けます。",
      connectedBody:
        "プロフィールを一度更新すれば、記録はポータブルなまま、キャリア・準備・就労アクセスで同じ土台を使えます。",
      flow: {
        identity: "ID & プロフィール",
        records: "記録 & 準備",
        work: "必要なときの就労接続",
      },
      privacyTitle: "デフォルトで非公開",
      privacyBody:
        "個人の記録は、共有を明示的に求めるフロー以外では非公開のままです。雇用主のアクセスは、あなたが確認した範囲に従います。",
    },
    how: {
      eyebrow: "仕組み",
      title: "一度始めれば、履歴はあなたと共に。",
      body: "EMENDAはあなたのIDと記録から始まり、その下にあるアカウントを置き換えることなく、就労アクセスの開始と終了を可能にします。",
      journeyEyebrow: "あなたのEMENDAジャーニー",
      journeyTitle: "継続性を軸にしたシンプルな流れ。",
      steps: {
        create: {
          title: "EMENDA IDを作成・復元",
          body: "ひとつの労働者所有IDから始めます。",
          tag: "労働者所有のフロー",
        },
        build: {
          title: "プロフィールと記録を構築",
          body: "キャリア、CV、書類、準備を自分のペースで追加。",
          tag: "労働者所有のフロー",
        },
        prepare: {
          title: "日本での仕事と生活に備える",
          body: "準備状況、在留情報、重要な日付をまとめて管理。",
          tag: "労働者所有のフロー",
        },
        connect: {
          title: "必要なときに雇用主と接続",
          body: "就労接続が有効になる前にアクセス範囲を確認。",
          tag: "許可ベース",
        },
        continue: {
          title: "就労アクセスが変わっても続けられる",
          body: "あなたのIDとポータブルな記録は引き続き利用できます。",
          tag: "ポータブルな履歴",
        },
      },
      changesEyebrow: "仕事が変わるとき",
      changesTitle: "アクセスの終了はアカウントの終了ではありません。",
      changesBody:
        "就労固有のアクセスは終了しても、EMENDA ID、個人プロフィール、ポータブルな履歴はあなたのものとして残ります。",
      changeCards: {
        keep: {
          title: "あなたが保持するもの",
          body: "ID、プロフィール、キャリア履歴、個人記録。",
        },
        end: {
          title: "終了しうるもの",
          body: "雇用主固有のアクセスと、現在の職場コンテキスト。",
        },
      },
      ctaTitle: "EMENDAアカウントへ進む",
      ctaBody: "ログインして、続きから再開しましょう。",
    },
  },
});

export function usePublicCopy(): PublicCopy {
  return useSectionCopy(PUBLIC_COPY);
}
