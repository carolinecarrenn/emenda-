import { defineSectionCopy } from "@/i18n/copy";

/**
 * Homepage copy.
 *
 * Positioning rule this file exists to enforce: EMENDA is the product and the
 * assistant is one capability inside it. Nothing above the assistant block is
 * allowed to describe EMENDA as a place you ask questions — the platform, the
 * two audiences and the report-to-resolution loop all have to stand on their
 * own first. If every mention of the assistant were deleted, this copy should
 * still describe a complete product.
 *
 * The homepage previews; each block ends with a link to the page that owns the
 * detail. Product-demo strings live in `mocks.copy.ts` and
 * `platformMocks.copy.ts`.
 */
export interface HomeCopy {
  hero: {
    badge: string;
    titleLead: string;
    titleAccent: string;
    titleTail: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    languageNote: string;
  };
  platform: {
    eyebrow: string;
    title: string;
    body: string;
    centerLabel: string;
    centerCaption: string;
    modules: { title: string; body: string }[];
    cta: string;
  };
  why: {
    eyebrow: string;
    title: string;
    body: string;
    sourcesLabel: string;
    sources: string[];
    resultLabel: string;
    results: string[];
    transition: string;
  };
  journey: {
    eyebrow: string;
    title: string;
    body: string;
    steps: { title: string; body: string }[];
    cta: string;
  };
  workers: {
    eyebrow: string;
    title: string;
    body: string;
    highlights: string[];
    cta: string;
  };
  organizations: {
    eyebrow: string;
    title: string;
    body: string;
    highlights: string[];
    cta: string;
  };
  resolution: {
    eyebrow: string;
    title: string;
    body: string;
    steps: { actor: string; label: string }[];
    note: string;
  };
  assistant: {
    eyebrow: string;
    title: string;
    body: string;
    capabilities: string[];
    cta: string;
  };
  moments: {
    eyebrow: string;
    title: string;
    body: string;
    cards: { title: string; body: string }[];
  };
}

const EN: HomeCopy = {
  hero: {
    badge: "The EMENDA platform",
    titleLead: "One connected platform for ",
    titleAccent: "life and work",
    titleTail: " in Japan.",
    body: "EMENDA helps international workers stay informed, connected, supported, and on track — while giving organizations a clearer way to communicate, follow up, and provide support.",
    primaryCta: "Explore EMENDA",
    secondaryCta: "Try EMENDA",
    languageNote: "English · 日本語 · Bahasa Indonesia",
  },

  platform: {
    eyebrow: "The platform",
    title: "Everything connected in one EMENDA experience.",
    body: "Six parts of working and living in Japan that usually sit in separate places — joined so that what happens in one is visible in the others.",
    centerLabel: "EMENDA",
    centerCaption:
      "One identity, one place, one thread running through the whole journey.",
    modules: [
      {
        title: "Work & reports",
        body: "Daily reports, work updates, and the records that go with them.",
      },
      {
        title: "Communication",
        body: "Stay connected with your workplace and the people supporting you.",
      },
      {
        title: "Follow-up",
        body: "Know what is still open, what needs action, and what has been resolved.",
      },
      {
        title: "Life in Japan",
        body: "Guidance and preparation for the procedures that come with living here.",
      },
      {
        title: "Identity & career",
        body: "EMENDA ID, personal profile, skills, experience, and readiness in one record.",
      },
      {
        title: "EMENDA Assistant",
        body: "Guidance when something is hard to understand or the next step is unclear.",
      },
    ],
    cta: "Explore the EMENDA platform",
  },

  why: {
    eyebrow: "Why EMENDA",
    title: "Work and support shouldn't live in disconnected places.",
    body: "Right now the information a worker needs is spread across everything at once.",
    sourcesLabel: "Where it lives today",
    sources: [
      "Chat applications",
      "Supervisors",
      "Documents",
      "Paper forms",
      "Websites",
      "Workplace systems",
      "Verbal instructions",
    ],
    resultLabel: "What that costs",
    results: [
      "Missed information",
      "Unclear responsibilities",
      "The same questions asked again",
      "Language barriers",
      "Incomplete follow-up",
      "No idea what happens next",
    ],
    transition: "EMENDA brings those experiences together.",
  },

  journey: {
    eyebrow: "The lifecycle",
    title: "Connect, work, communicate, get support, follow up.",
    body: "EMENDA covers the whole arc, not a single moment in it.",
    steps: [
      {
        title: "Connect",
        body: "Create your EMENDA identity and connect with your organization.",
      },
      {
        title: "Work",
        body: "Access work information, submit reports, and manage what belongs to your day.",
      },
      {
        title: "Communicate",
        body: "Receive updates and stay connected with the people supporting you.",
      },
      {
        title: "Get support",
        body: "Find information, or ask EMENDA when you need guidance.",
      },
      {
        title: "Follow up",
        body: "See what happens next, until the issue, report, or request is resolved.",
      },
    ],
    cta: "See how EMENDA works",
  },

  workers: {
    eyebrow: "For workers",
    title: "One place for your journey in Japan.",
    body: "From preparing for Japan to handling daily work and getting support when you need it, EMENDA keeps the important parts of your journey connected.",
    highlights: [
      "Home & EMENDA ID",
      "Personal profile",
      "Career & CV",
      "Japan readiness",
      "Daily reports",
      "Knowledge & support",
      "Notifications",
      "EMENDA Assistant",
    ],
    cta: "Explore EMENDA for workers",
  },

  organizations: {
    eyebrow: "For organizations",
    title: "Support your people with better visibility and follow-through.",
    body: "EMENDA helps organizations move beyond fragmented communication by giving teams a structured way to receive information, respond, follow up, and close the loop.",
    highlights: [
      "Worker overview",
      "Daily report visibility",
      "Report verification",
      "Follow-up",
      "Notifications",
      "Communication",
      "Unresolved issues",
      "Support status",
    ],
    cta: "Explore EMENDA for organizations",
  },

  resolution: {
    eyebrow: "The difference",
    title: "From information to resolution.",
    body: "Most tools stop when something has been submitted. That is the moment where things usually go quiet — and where they usually go wrong.",
    steps: [
      { actor: "Worker", label: "Submits a report" },
      { actor: "Organization", label: "Receives it" },
      { actor: "Organization", label: "Reviews and verifies" },
      { actor: "Both", label: "Follow-up is created if needed" },
      { actor: "Worker", label: "Receives the status" },
      { actor: "Both", label: "Reaches resolution" },
    ],
    note: "EMENDA doesn't stop when information is submitted. It keeps both sides connected through what happens next.",
  },

  assistant: {
    eyebrow: "EMENDA Assistant",
    title: "And when you don't know what to do, ask EMENDA.",
    body: "EMENDA Assistant provides multilingual guidance using the context of your journey, and helps turn questions into practical next steps.",
    capabilities: [
      "Text and voice",
      "English · 日本語 · Bahasa Indonesia",
      "Explains information",
      "Suggests next steps",
      "Location guidance",
      "Continues previous context",
      "Outcome follow-up",
    ],
    cta: "Meet EMENDA Assistant",
  },

  moments: {
    eyebrow: "In practice",
    title: "One platform. Different moments.",
    body: "The same account, doing a different job depending on where you are.",
    cards: [
      {
        title: "Before arriving in Japan",
        body: "Prepare your profile, career information, documents, and Japan readiness.",
      },
      {
        title: "Starting work",
        body: "Connect with your organization and access the information that applies to you.",
      },
      {
        title: "Everyday work",
        body: "Submit daily reports and receive the updates that matter to your shift.",
      },
      {
        title: "Something needs attention",
        body: "Receive notifications and structured follow-up instead of a message that disappears.",
      },
      {
        title: "Need help",
        body: "Access knowledge, or ask EMENDA Assistant when the answer is not obvious.",
      },
      {
        title: "After action is taken",
        body: "See whether something has been completed, verified, or still requires follow-up.",
      },
    ],
  },
};

const JA: HomeCopy = {
  hero: {
    badge: "EMENDAプラットフォーム",
    titleLead: "日本での",
    titleAccent: "暮らしと仕事",
    titleTail: "を、ひとつにつなぐ。",
    body: "EMENDAは、海外から働きに来た人が必要な情報を受け取り、つながり、支えられ、進み続けられるように。そして組織には、伝え、追いかけ、支えるための明確な手段を。",
    primaryCta: "EMENDAを見る",
    secondaryCta: "EMENDAを試す",
    languageNote: "English・日本語・Bahasa Indonesia",
  },

  platform: {
    eyebrow: "プラットフォーム",
    title: "すべてがつながる、ひとつのEMENDA。",
    body: "日本で働き、暮らすうえでばらばらになりがちな6つの領域を、ひとつの場所でつなぎます。",
    centerLabel: "EMENDA",
    centerCaption:
      "ひとつのID、ひとつの場所、旅路を貫くひとすじの流れ。",
    modules: [
      {
        title: "仕事と日報",
        body: "日報、業務の更新、そしてそれに紐づく記録。",
      },
      {
        title: "コミュニケーション",
        body: "職場と、支えてくれる人たちとつながり続ける。",
      },
      {
        title: "フォローアップ",
        body: "何が未対応で、何に対応が必要で、何が完了したかがわかる。",
      },
      {
        title: "日本での生活",
        body: "ここで暮らすうえで必要な手続きの案内と準備。",
      },
      {
        title: "ID とキャリア",
        body: "EMENDA ID、プロフィール、スキル、経験、準備状況をひとつの記録に。",
      },
      {
        title: "EMENDAアシスタント",
        body: "わかりにくいとき、次の一歩が見えないときの案内役。",
      },
    ],
    cta: "EMENDAプラットフォームを見る",
  },

  why: {
    eyebrow: "EMENDAが必要な理由",
    title: "仕事と支援が、別々の場所にある必要はない。",
    body: "いま、働く人に必要な情報は、あらゆる場所に散らばっています。",
    sourcesLabel: "いまの情報のありか",
    sources: [
      "チャットアプリ",
      "上司",
      "書類",
      "紙の用紙",
      "ウェブサイト",
      "職場のシステム",
      "口頭の指示",
    ],
    resultLabel: "そのために起きること",
    results: [
      "情報の見落とし",
      "責任の所在が曖昧",
      "同じ質問の繰り返し",
      "言葉の壁",
      "フォローの途切れ",
      "次に何が起きるかわからない",
    ],
    transition: "EMENDAは、それらをひとつにまとめます。",
  },

  journey: {
    eyebrow: "ライフサイクル",
    title: "つながる、働く、伝える、支えを得る、確認する。",
    body: "EMENDAが担うのは一場面ではなく、流れ全体です。",
    steps: [
      {
        title: "つながる",
        body: "EMENDA IDをつくり、所属する組織とつながります。",
      },
      {
        title: "働く",
        body: "業務情報を確認し、日報を提出し、その日の仕事を管理します。",
      },
      {
        title: "伝える",
        body: "更新を受け取り、支えてくれる人たちとつながり続けます。",
      },
      {
        title: "支えを得る",
        body: "情報を探す。わからなければ、EMENDAに聞く。",
      },
      {
        title: "確認する",
        body: "その後どうなったかを、完了するまで見届けます。",
      },
    ],
    cta: "EMENDAの仕組みを見る",
  },

  workers: {
    eyebrow: "働く人へ",
    title: "日本での歩みを、ひとつの場所に。",
    body: "来日の準備から、日々の仕事、そして困ったときの支援まで。EMENDAはあなたの歩みの大事な部分をつなぎ続けます。",
    highlights: [
      "ホームとEMENDA ID",
      "プロフィール",
      "キャリアとCV",
      "日本準備",
      "日報",
      "ナレッジとサポート",
      "お知らせ",
      "EMENDAアシスタント",
    ],
    cta: "働く人向けEMENDAを見る",
  },

  organizations: {
    eyebrow: "組織の方へ",
    title: "見えるから、最後まで支えられる。",
    body: "情報を受け取り、応え、追いかけ、締めくくる。EMENDAは、ばらばらのやりとりから抜け出すための構造をチームに提供します。",
    highlights: [
      "働く人の状況",
      "日報の可視化",
      "日報の確認",
      "フォローアップ",
      "お知らせ",
      "コミュニケーション",
      "未解決の課題",
      "支援の状態",
    ],
    cta: "組織向けEMENDAを見る",
  },

  resolution: {
    eyebrow: "EMENDAの違い",
    title: "情報で終わらせず、解決まで。",
    body: "多くの仕組みは、提出された時点で止まります。けれど、静かになるのも、うまくいかなくなるのも、たいていその後です。",
    steps: [
      { actor: "働く人", label: "日報を提出する" },
      { actor: "組織", label: "受け取る" },
      { actor: "組織", label: "確認する" },
      { actor: "両者", label: "必要ならフォローアップが生まれる" },
      { actor: "働く人", label: "状況を受け取る" },
      { actor: "両者", label: "解決に至る" },
    ],
    note: "EMENDAは、情報が提出された時点で終わりません。その後に何が起きるかを、両者につなぎ続けます。",
  },

  assistant: {
    eyebrow: "EMENDAアシスタント",
    title: "どうすればいいかわからないときは、EMENDAに。",
    body: "EMENDAアシスタントは、あなたの状況をふまえた多言語の案内で、質問を実際の次の一歩に変えます。",
    capabilities: [
      "テキストと音声",
      "English・日本語・Bahasa Indonesia",
      "情報をやさしく説明",
      "次の一歩を提案",
      "場所の案内",
      "前回の続きから",
      "その後の確認",
    ],
    cta: "EMENDAアシスタントを見る",
  },

  moments: {
    eyebrow: "実際の場面",
    title: "ひとつのプラットフォーム、さまざまな場面。",
    body: "同じアカウントが、あなたのいる場所によって役割を変えます。",
    cards: [
      {
        title: "来日する前",
        body: "プロフィール、キャリア情報、書類、日本の準備を整えます。",
      },
      {
        title: "働きはじめるとき",
        body: "組織とつながり、自分に関係する情報にアクセスします。",
      },
      {
        title: "日々の仕事",
        body: "日報を提出し、シフトに関わる更新を受け取ります。",
      },
      {
        title: "対応が必要なとき",
        body: "流れて消えるメッセージではなく、お知らせと筋道のあるフォローを。",
      },
      {
        title: "助けが必要なとき",
        body: "ナレッジを見る。答えが見えなければ、EMENDAアシスタントに聞く。",
      },
      {
        title: "動いたあと",
        body: "完了したのか、確認されたのか、まだ対応が必要なのかがわかります。",
      },
    ],
  },
};

const ID_COPY: HomeCopy = {
  hero: {
    badge: "Platform EMENDA",
    titleLead: "Satu platform terhubung untuk ",
    titleAccent: "hidup dan bekerja",
    titleTail: " di Jepang.",
    body: "EMENDA membantu pekerja internasional tetap terinformasi, terhubung, didukung, dan berada di jalur — sekaligus memberi organisasi cara yang lebih jelas untuk berkomunikasi, menindaklanjuti, dan memberi dukungan.",
    primaryCta: "Jelajahi EMENDA",
    secondaryCta: "Coba EMENDA",
    languageNote: "English · 日本語 · Bahasa Indonesia",
  },

  platform: {
    eyebrow: "Platformnya",
    title: "Semuanya terhubung dalam satu pengalaman EMENDA.",
    body: "Enam bagian dari bekerja dan hidup di Jepang yang biasanya terpisah — disatukan supaya apa yang terjadi di satu bagian terlihat di bagian lain.",
    centerLabel: "EMENDA",
    centerCaption:
      "Satu identitas, satu tempat, satu benang yang menyambung seluruh perjalanan.",
    modules: [
      {
        title: "Kerja & laporan",
        body: "Laporan harian, pembaruan kerja, dan catatan yang menyertainya.",
      },
      {
        title: "Komunikasi",
        body: "Tetap terhubung dengan tempat kerja dan orang-orang yang mendukungmu.",
      },
      {
        title: "Tindak lanjut",
        body: "Tahu apa yang masih terbuka, apa yang perlu tindakan, dan apa yang sudah selesai.",
      },
      {
        title: "Hidup di Jepang",
        body: "Panduan dan persiapan untuk prosedur yang menyertai kehidupan di sini.",
      },
      {
        title: "Identitas & karier",
        body: "EMENDA ID, profil, keterampilan, pengalaman, dan kesiapan dalam satu catatan.",
      },
      {
        title: "EMENDA Assistant",
        body: "Panduan ketika sesuatu sulit dipahami atau langkah berikutnya belum jelas.",
      },
    ],
    cta: "Jelajahi platform EMENDA",
  },

  why: {
    eyebrow: "Kenapa EMENDA",
    title: "Kerja dan dukungan seharusnya tidak tersebar di tempat terpisah.",
    body: "Saat ini informasi yang dibutuhkan pekerja tersebar di mana-mana sekaligus.",
    sourcesLabel: "Di mana informasinya sekarang",
    sources: [
      "Aplikasi chat",
      "Atasan",
      "Dokumen",
      "Formulir kertas",
      "Situs web",
      "Sistem tempat kerja",
      "Instruksi lisan",
    ],
    resultLabel: "Akibatnya",
    results: [
      "Informasi terlewat",
      "Tanggung jawab tidak jelas",
      "Pertanyaan yang sama berulang",
      "Hambatan bahasa",
      "Tindak lanjut yang tidak tuntas",
      "Tidak tahu apa yang terjadi berikutnya",
    ],
    transition: "EMENDA menyatukan pengalaman-pengalaman itu.",
  },

  journey: {
    eyebrow: "Siklusnya",
    title: "Terhubung, bekerja, berkomunikasi, dapat dukungan, tindak lanjut.",
    body: "EMENDA menemani seluruh alurnya, bukan satu momen di dalamnya.",
    steps: [
      {
        title: "Terhubung",
        body: "Buat identitas EMENDA-mu dan terhubung dengan organisasimu.",
      },
      {
        title: "Bekerja",
        body: "Akses informasi kerja, kirim laporan, dan kelola apa yang jadi bagian harimu.",
      },
      {
        title: "Berkomunikasi",
        body: "Terima pembaruan dan tetap terhubung dengan orang yang mendukungmu.",
      },
      {
        title: "Dapat dukungan",
        body: "Cari informasinya, atau tanya EMENDA saat kamu butuh panduan.",
      },
      {
        title: "Tindak lanjut",
        body: "Lihat apa yang terjadi berikutnya, sampai masalah atau permintaannya selesai.",
      },
    ],
    cta: "Lihat cara kerja EMENDA",
  },

  workers: {
    eyebrow: "Untuk pekerja",
    title: "Satu tempat untuk perjalananmu di Jepang.",
    body: "Dari persiapan berangkat sampai urusan kerja harian dan dukungan saat kamu membutuhkannya, EMENDA menjaga bagian-bagian penting perjalananmu tetap terhubung.",
    highlights: [
      "Beranda & EMENDA ID",
      "Profil pribadi",
      "Karier & CV",
      "Kesiapan Jepang",
      "Laporan harian",
      "Pengetahuan & dukungan",
      "Notifikasi",
      "EMENDA Assistant",
    ],
    cta: "Jelajahi EMENDA untuk pekerja",
  },

  organizations: {
    eyebrow: "Untuk organisasi",
    title: "Dukung timmu dengan visibilitas dan tindak lanjut yang lebih baik.",
    body: "EMENDA membantu organisasi keluar dari komunikasi yang terpecah dengan memberi tim cara terstruktur untuk menerima informasi, merespons, menindaklanjuti, dan menutup lingkarannya.",
    highlights: [
      "Ringkasan pekerja",
      "Visibilitas laporan harian",
      "Verifikasi laporan",
      "Tindak lanjut",
      "Notifikasi",
      "Komunikasi",
      "Masalah yang belum selesai",
      "Status dukungan",
    ],
    cta: "Jelajahi EMENDA untuk organisasi",
  },

  resolution: {
    eyebrow: "Bedanya",
    title: "Dari informasi ke penyelesaian.",
    body: "Kebanyakan alat berhenti ketika sesuatu sudah dikirim. Padahal di situlah biasanya semuanya jadi sunyi — dan di situ pula biasanya melenceng.",
    steps: [
      { actor: "Pekerja", label: "Mengirim laporan" },
      { actor: "Organisasi", label: "Menerimanya" },
      { actor: "Organisasi", label: "Meninjau dan memverifikasi" },
      { actor: "Keduanya", label: "Tindak lanjut dibuat bila perlu" },
      { actor: "Pekerja", label: "Menerima statusnya" },
      { actor: "Keduanya", label: "Sampai pada penyelesaian" },
    ],
    note: "EMENDA tidak berhenti saat informasi dikirim. Ia menjaga kedua sisi tetap terhubung melalui apa yang terjadi berikutnya.",
  },

  assistant: {
    eyebrow: "EMENDA Assistant",
    title: "Dan saat kamu tidak tahu harus apa, tanya EMENDA.",
    body: "EMENDA Assistant memberi panduan multibahasa dengan mempertimbangkan konteks perjalananmu, dan mengubah pertanyaan menjadi langkah nyata berikutnya.",
    capabilities: [
      "Teks dan suara",
      "English · 日本語 · Bahasa Indonesia",
      "Menjelaskan informasi",
      "Menyarankan langkah berikutnya",
      "Panduan lokasi",
      "Melanjutkan konteks sebelumnya",
      "Menindaklanjuti hasil",
    ],
    cta: "Kenali EMENDA Assistant",
  },

  moments: {
    eyebrow: "Dalam praktik",
    title: "Satu platform. Momen yang berbeda-beda.",
    body: "Akun yang sama, mengerjakan hal berbeda tergantung di mana kamu berada.",
    cards: [
      {
        title: "Sebelum tiba di Jepang",
        body: "Siapkan profil, informasi karier, dokumen, dan kesiapan Jepangmu.",
      },
      {
        title: "Mulai bekerja",
        body: "Terhubung dengan organisasimu dan akses informasi yang berlaku untukmu.",
      },
      {
        title: "Kerja sehari-hari",
        body: "Kirim laporan harian dan terima pembaruan yang penting bagi sifmu.",
      },
      {
        title: "Ada yang perlu perhatian",
        body: "Terima notifikasi dan tindak lanjut terstruktur, bukan pesan yang lalu hilang.",
      },
      {
        title: "Butuh bantuan",
        body: "Buka pengetahuan, atau tanya EMENDA Assistant saat jawabannya tidak jelas.",
      },
      {
        title: "Setelah tindakan diambil",
        body: "Lihat apakah sesuatu sudah selesai, sudah diverifikasi, atau masih perlu tindak lanjut.",
      },
    ],
  },
};

export const HOME_COPY = defineSectionCopy<HomeCopy>({
  en: EN,
  ja: JA,
  id: ID_COPY,
});
