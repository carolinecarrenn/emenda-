import { defineSectionCopy } from "@/i18n/copy";

/** Copy for /organizations — the employer page. More formal in register than
 *  the rest of the site, and deliberately free of invented numbers: it argues
 *  from what the product does, not from statistics nobody can check. */
export interface OrganizationsCopy {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  values: {
    eyebrow: string;
    title: string;
    body: string;
    items: { title: string; body: string }[];
  };
  surfaces: {
    eyebrow: string;
    title: string;
    body: string;
    capabilities: string[];
    note: string;
  };
  fit: {
    eyebrow: string;
    title: string;
    body: string;
    steps: { title: string; body: string }[];
    note: string;
  };
  cta: { title: string; body: string; primary: string; secondary: string };
}

const EN: OrganizationsCopy = {
  hero: {
    eyebrow: "For organizations",
    title: "Better support for international teams.",
    body: "Help foreign workers access clearer information, structured support, and better follow-up throughout their journey in Japan.",
    primaryCta: "Talk to us",
    secondaryCta: "See how EMENDA works",
  },
  values: {
    eyebrow: "Why teams use EMENDA",
    title: "Support that holds together.",
    body: "Most support does not fail because nobody cares. It fails because it is scattered, and because nobody finds out what happened next.",
    items: [
      {
        title: "Centralized support",
        body: "One place to ask, instead of questions spread across chat, email, corridors and whoever happens to be free.",
      },
      {
        title: "Clearer communication",
        body: "Employees read guidance in a language they understand, which removes the step where meaning gets lost on the way.",
      },
      {
        title: "Structured follow-up",
        body: "Support does not disappear after the first answer. EMENDA checks back on the outcome and continues from there.",
      },
      {
        title: "Better visibility",
        body: "Understand where people are still getting stuck, so effort goes to the situations that actually need a person.",
      },
      {
        title: "Employee experience",
        body: "A newcomer who can get an answer at 9pm on a Sunday has a different first month than one who has to wait until Monday.",
      },
    ],
  },
  surfaces: {
    eyebrow: "What your team sees",
    title: "The organization side of the same platform.",
    body: "Reports arrive where they can be answered, what is missing is visible without chasing it, and every response stays attached to the thing it responded to.",
    capabilities: [
      "Worker overview",
      "Daily report visibility",
      "Missing submissions",
      "Report verification",
      "Follow-up",
      "Communication",
      "Unresolved issues",
      "Support status",
    ],
    note: "Built for coordination and accountability — not for watching individuals. Workers see what is shared, and personal conversations stay personal.",
  },
  fit: {
    eyebrow: "How it fits",
    title: "It sits alongside your team, not in front of it.",
    body: "EMENDA handles the questions that have a clear answer, so the people in your organization spend their time on the ones that do not.",
    steps: [
      {
        title: "Employees ask",
        body: "In their own language, whenever the question comes up.",
      },
      {
        title: "EMENDA guides",
        body: "Plain explanations, the documents needed, and the next step.",
      },
      {
        title: "Your team steps in",
        body: "For the cases that genuinely need judgement, context, or authority.",
      },
    ],
    note: "Individual conversations stay with the individual. EMENDA asks before using anything that requires permission.",
  },
  cta: {
    title: "Let's talk about your team.",
    body: "Tell us how you support foreign workers today, and we will show you where EMENDA fits.",
    primary: "Talk to us",
    secondary: "See how it works",
  },
};

const JA: OrganizationsCopy = {
  hero: {
    eyebrow: "法人の方へ",
    title: "国際的なチームを、もっと支えられるように。",
    body: "外国人材が、わかりやすい情報と整った支援、そしてその後のフォローに、日本での歩みを通じてアクセスできるようにします。",
    primaryCta: "相談する",
    secondaryCta: "EMENDAの使い方を見る",
  },
  values: {
    eyebrow: "導入される理由",
    title: "ばらけない支援を。",
    body: "支援がうまくいかないのは、たいてい熱意の問題ではありません。情報が散らばっていて、その後どうなったかが誰にもわからないからです。",
    items: [
      {
        title: "支援の集約",
        body: "チャット、メール、立ち話、手の空いた人。ばらばらに聞かれていた質問を、ひとつの窓口に。",
      },
      {
        title: "伝わるコミュニケーション",
        body: "働く人がわかる言語で案内が届くので、伝わる途中で意味が失われる段階がなくなります。",
      },
      {
        title: "続くフォローアップ",
        body: "最初の回答で終わりません。EMENDAがその後の結果を確認し、続きから支援します。",
      },
      {
        title: "状況の見える化",
        body: "どこでつまずいているのかがわかるので、人が対応すべき場面に力を注げます。",
      },
      {
        title: "働く人の体験",
        body: "日曜の夜9時に答えを得られる人と、月曜まで待つ人とでは、最初の1か月がまったく違います。",
      },
    ],
  },
  surfaces: {
    eyebrow: "チームに見えるもの",
    title: "同じプラットフォームの、組織側。",
    body: "日報は応えられる場所に届き、足りないものは追いかけなくても見え、返答は元の対象につながったまま残ります。",
    capabilities: [
      "働く人の状況",
      "日報の可視化",
      "未提出の把握",
      "日報の確認",
      "フォローアップ",
      "コミュニケーション",
      "未解決の課題",
      "支援の状態",
    ],
    note: "個人を監視するためではなく、連携と説明責任のために。共有される内容は働く人にも見えており、個人的なやりとりは個人のものです。",
  },
  fit: {
    eyebrow: "位置づけ",
    title: "チームの前ではなく、隣に。",
    body: "答えがはっきりしている質問はEMENDAが引き受けます。だからこそ、そうでない質問に人の時間を使えます。",
    steps: [
      {
        title: "働く人が聞く",
        body: "自分の言語で、疑問が生まれたそのときに。",
      },
      {
        title: "EMENDAが案内する",
        body: "やさしい説明、必要な書類、そして次の一歩を。",
      },
      {
        title: "チームが入る",
        body: "判断、背景、権限が本当に必要な場面で。",
      },
    ],
    note: "個人のやりとりは、その人のものです。許可が必要な情報を使う前に、EMENDAは必ず確認します。",
  },
  cta: {
    title: "チームのこと、聞かせてください。",
    body: "いま外国人材をどう支えているかを教えていただければ、EMENDAが入る場所をご説明します。",
    primary: "相談する",
    secondary: "使い方を見る",
  },
};

const ID: OrganizationsCopy = {
  hero: {
    eyebrow: "Untuk organisasi",
    title: "Dukungan yang lebih baik untuk tim internasional.",
    body: "Bantu pekerja asing mengakses informasi yang lebih jelas, dukungan yang terstruktur, dan tindak lanjut yang lebih baik sepanjang perjalanan mereka di Jepang.",
    primaryCta: "Hubungi kami",
    secondaryCta: "Lihat cara kerja EMENDA",
  },
  values: {
    eyebrow: "Alasan tim memakai EMENDA",
    title: "Dukungan yang tidak tercerai-berai.",
    body: "Dukungan biasanya gagal bukan karena tidak ada yang peduli, tapi karena tersebar — dan karena tidak ada yang tahu apa yang terjadi setelahnya.",
    items: [
      {
        title: "Dukungan terpusat",
        body: "Satu tempat untuk bertanya, bukan pertanyaan yang tersebar di chat, email, lorong kantor, dan siapa pun yang kebetulan senggang.",
      },
      {
        title: "Komunikasi yang lebih jelas",
        body: "Karyawan membaca panduan dalam bahasa yang mereka pahami, sehingga tidak ada tahap di mana maknanya hilang di jalan.",
      },
      {
        title: "Tindak lanjut yang terstruktur",
        body: "Dukungan tidak hilang setelah jawaban pertama. EMENDA menanyakan hasilnya dan melanjutkan dari sana.",
      },
      {
        title: "Visibilitas yang lebih baik",
        body: "Pahami di mana orang masih tersendat, supaya tenaga tim tercurah ke situasi yang memang butuh manusia.",
      },
      {
        title: "Pengalaman karyawan",
        body: "Pendatang baru yang bisa mendapat jawaban pukul sembilan malam di hari Minggu menjalani bulan pertama yang berbeda dari yang harus menunggu Senin.",
      },
    ],
  },
  surfaces: {
    eyebrow: "Yang dilihat timmu",
    title: "Sisi organisasi dari platform yang sama.",
    body: "Laporan tiba di tempat yang bisa meresponsnya, apa yang kurang terlihat tanpa perlu dikejar, dan setiap respons tetap menempel pada hal yang direspons.",
    capabilities: [
      "Ringkasan pekerja",
      "Visibilitas laporan harian",
      "Laporan yang belum masuk",
      "Verifikasi laporan",
      "Tindak lanjut",
      "Komunikasi",
      "Masalah yang belum selesai",
      "Status dukungan",
    ],
    note: "Dibuat untuk koordinasi dan akuntabilitas — bukan untuk mengawasi orang. Pekerja tahu apa yang dibagikan, dan percakapan pribadi tetap pribadi.",
  },
  fit: {
    eyebrow: "Posisinya",
    title: "Berdiri di samping timmu, bukan di depannya.",
    body: "EMENDA menangani pertanyaan yang jawabannya jelas, supaya orang-orang di organisasimu punya waktu untuk yang tidak.",
    steps: [
      {
        title: "Karyawan bertanya",
        body: "Dalam bahasa mereka sendiri, kapan pun pertanyaannya muncul.",
      },
      {
        title: "EMENDA memandu",
        body: "Penjelasan sederhana, dokumen yang dibutuhkan, dan langkah berikutnya.",
      },
      {
        title: "Tim kamu turun tangan",
        body: "Untuk kasus yang benar-benar butuh pertimbangan, konteks, atau wewenang.",
      },
    ],
    note: "Percakapan pribadi tetap milik individu. EMENDA meminta izin sebelum memakai apa pun yang membutuhkannya.",
  },
  cta: {
    title: "Mari bicara soal timmu.",
    body: "Ceritakan bagaimana kamu mendukung pekerja asing saat ini, dan kami tunjukkan di mana EMENDA cocok masuk.",
    primary: "Hubungi kami",
    secondary: "Lihat cara kerjanya",
  },
};

export const ORGANIZATIONS_COPY = defineSectionCopy<OrganizationsCopy>({
  en: EN,
  ja: JA,
  id: ID,
});
