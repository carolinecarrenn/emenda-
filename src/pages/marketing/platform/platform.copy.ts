import { defineSectionCopy } from "@/i18n/copy";

/** Copy for /platform — the full ecosystem, grouped into five pillars. This
 *  page owns the module-by-module detail; the homepage shows six modules and
 *  links here. */
export interface PlatformCopy {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  pillars: {
    eyebrow: string;
    title: string;
    body: string;
    items: {
      id: string;
      title: string;
      body: string;
      modules: { title: string; body: string }[];
    }[];
  };
  cta: { title: string; body: string };
}

const EN: PlatformCopy = {
  hero: {
    eyebrow: "The platform",
    title: "The EMENDA Platform",
    body: "A connected environment for work, communication, support, and life in Japan — one account, one record, one thread through all of it.",
    primaryCta: "Try EMENDA",
    secondaryCta: "See how it works",
  },
  pillars: {
    eyebrow: "Five pillars",
    title: "What the platform is made of.",
    body: "Grouped by what they do for you, not by which team built them.",
    items: [
      {
        id: "identity",
        title: "Identity",
        body: "Who you are in EMENDA, and the record that travels with you between employers.",
        modules: [
          {
            title: "EMENDA ID",
            body: "One identity across the whole ecosystem.",
          },
          {
            title: "Personal profile",
            body: "Personal information and the records that go with it.",
          },
          {
            title: "Career profile",
            body: "Experience, education, skills, and languages.",
          },
          {
            title: "Japan readiness",
            body: "Track preparation and the setup that living here requires.",
          },
        ],
      },
      {
        id: "work",
        title: "Work",
        body: "The day-to-day: what you submit, what you are asked for, and what has been accepted.",
        modules: [
          {
            title: "Daily reports",
            body: "Submit and review daily workplace reports.",
          },
          {
            title: "Work information",
            body: "Access the workplace information that applies to you.",
          },
          {
            title: "Tasks & follow-up",
            body: "Understand what still requires attention.",
          },
          {
            title: "Verification",
            body: "Organizations review and verify what has come in.",
          },
        ],
      },
      {
        id: "communication",
        title: "Communication",
        body: "Messages that stay attached to the thing they are about, instead of scrolling away.",
        modules: [
          {
            title: "Notifications",
            body: "Important updates in one place.",
          },
          {
            title: "Workplace communication",
            body: "Structured communication between workers and organizations.",
          },
          {
            title: "Follow-up",
            body: "Keep the conversation connected to the original issue or activity.",
          },
        ],
      },
      {
        id: "support",
        title: "Support",
        body: "Help for the moments the rest of the platform cannot answer on its own.",
        modules: [
          {
            title: "Knowledge",
            body: "Relevant guidance and information for life and work here.",
          },
          {
            title: "EMENDA Assistant",
            body: "Ask questions using text or voice, in your own language.",
          },
          {
            title: "Multilingual experience",
            body: "English · 日本語 · Bahasa Indonesia, across the whole product.",
          },
        ],
      },
      {
        id: "continuity",
        title: "Continuity",
        body: "The part most tools are missing: what happened after, and whether it ended.",
        modules: [
          {
            title: "History",
            body: "Keep relevant activity visible rather than buried.",
          },
          {
            title: "Outcome",
            body: "Understand whether something is complete or still needs help.",
          },
          {
            title: "Evidence & resolution",
            body: "Clarity over what happened after an issue or report was raised.",
          },
        ],
      },
    ],
  },
  cta: {
    title: "See the platform from your side of it.",
    body: "The worker's experience and the organization's experience are built as two halves of the same system.",
  },
};

const JA: PlatformCopy = {
  hero: {
    eyebrow: "プラットフォーム",
    title: "EMENDAプラットフォーム",
    body: "仕事、コミュニケーション、支援、そして日本での生活をつなぐ環境。ひとつのアカウント、ひとつの記録、ひとすじの流れで。",
    primaryCta: "EMENDAを試す",
    secondaryCta: "使い方を見る",
  },
  pillars: {
    eyebrow: "5つの柱",
    title: "プラットフォームを構成するもの。",
    body: "つくった部署ではなく、あなたにとっての役割で分けています。",
    items: [
      {
        id: "identity",
        title: "アイデンティティ",
        body: "EMENDAにおけるあなた自身と、雇用主が変わっても持ち歩ける記録。",
        modules: [
          {
            title: "EMENDA ID",
            body: "エコシステム全体で使える、ひとつのID。",
          },
          {
            title: "プロフィール",
            body: "個人情報と、それに紐づく記録。",
          },
          {
            title: "キャリアプロフィール",
            body: "経験、学歴、スキル、言語。",
          },
          {
            title: "日本準備",
            body: "ここで暮らすために必要な準備と設定を管理。",
          },
        ],
      },
      {
        id: "work",
        title: "仕事",
        body: "日々のこと。提出するもの、求められるもの、受理されたもの。",
        modules: [
          {
            title: "日報",
            body: "職場の日報を提出し、確認する。",
          },
          {
            title: "業務情報",
            body: "自分に関係する職場の情報にアクセス。",
          },
          {
            title: "タスクとフォローアップ",
            body: "まだ対応が必要なことを把握。",
          },
          {
            title: "確認",
            body: "組織が届いた内容を確認します。",
          },
        ],
      },
      {
        id: "communication",
        title: "コミュニケーション",
        body: "流れて消えるのではなく、対象につながったままのやりとり。",
        modules: [
          {
            title: "お知らせ",
            body: "大事な更新をひとつの場所に。",
          },
          {
            title: "職場とのやりとり",
            body: "働く人と組織のあいだの、筋道のあるコミュニケーション。",
          },
          {
            title: "フォローアップ",
            body: "元の課題や活動とつながったまま会話を続けます。",
          },
        ],
      },
      {
        id: "support",
        title: "サポート",
        body: "プラットフォームだけでは答えられない場面のための支援。",
        modules: [
          {
            title: "ナレッジ",
            body: "ここでの仕事と生活に役立つ案内と情報。",
          },
          {
            title: "EMENDAアシスタント",
            body: "自分の言語で、テキストでも音声でも質問できます。",
          },
          {
            title: "多言語対応",
            body: "English・日本語・Bahasa Indonesia。プロダクト全体で。",
          },
        ],
      },
      {
        id: "continuity",
        title: "継続性",
        body: "多くの仕組みに欠けている部分。その後どうなり、終わったのかどうか。",
        modules: [
          {
            title: "履歴",
            body: "関係する活動を、埋もれさせずに見えるまま。",
          },
          {
            title: "結果",
            body: "完了したのか、まだ支援が必要なのかがわかります。",
          },
          {
            title: "記録と解決",
            body: "課題や日報が上がったあと、何が起きたかを明確に。",
          },
        ],
      },
    ],
  },
  cta: {
    title: "あなたの側から、プラットフォームを見てみてください。",
    body: "働く人の体験と組織の体験は、同じ仕組みの両側としてつくられています。",
  },
};

const ID_COPY: PlatformCopy = {
  hero: {
    eyebrow: "Platformnya",
    title: "Platform EMENDA",
    body: "Lingkungan yang terhubung untuk kerja, komunikasi, dukungan, dan kehidupan di Jepang — satu akun, satu catatan, satu benang yang menyambung semuanya.",
    primaryCta: "Coba EMENDA",
    secondaryCta: "Lihat cara kerjanya",
  },
  pillars: {
    eyebrow: "Lima pilar",
    title: "Apa saja isi platformnya.",
    body: "Dikelompokkan berdasarkan fungsinya bagimu, bukan berdasarkan tim yang membangunnya.",
    items: [
      {
        id: "identity",
        title: "Identitas",
        body: "Siapa kamu di EMENDA, dan catatan yang ikut berpindah bersamamu antar pemberi kerja.",
        modules: [
          {
            title: "EMENDA ID",
            body: "Satu identitas untuk seluruh ekosistem.",
          },
          {
            title: "Profil pribadi",
            body: "Informasi pribadi dan catatan yang menyertainya.",
          },
          {
            title: "Profil karier",
            body: "Pengalaman, pendidikan, keterampilan, dan bahasa.",
          },
          {
            title: "Kesiapan Jepang",
            body: "Pantau persiapan dan hal-hal yang perlu diurus untuk tinggal di sini.",
          },
        ],
      },
      {
        id: "work",
        title: "Kerja",
        body: "Urusan harian: apa yang kamu kirim, apa yang diminta darimu, dan apa yang sudah diterima.",
        modules: [
          {
            title: "Laporan harian",
            body: "Kirim dan tinjau laporan harian tempat kerja.",
          },
          {
            title: "Informasi kerja",
            body: "Akses informasi tempat kerja yang berlaku untukmu.",
          },
          {
            title: "Tugas & tindak lanjut",
            body: "Pahami apa yang masih memerlukan perhatian.",
          },
          {
            title: "Verifikasi",
            body: "Organisasi meninjau dan memverifikasi apa yang masuk.",
          },
        ],
      },
      {
        id: "communication",
        title: "Komunikasi",
        body: "Pesan yang tetap menempel pada hal yang dibicarakan, bukan hilang tergulung ke atas.",
        modules: [
          {
            title: "Notifikasi",
            body: "Pembaruan penting dalam satu tempat.",
          },
          {
            title: "Komunikasi tempat kerja",
            body: "Komunikasi terstruktur antara pekerja dan organisasi.",
          },
          {
            title: "Tindak lanjut",
            body: "Percakapan tetap terhubung dengan masalah atau aktivitas asalnya.",
          },
        ],
      },
      {
        id: "support",
        title: "Dukungan",
        body: "Bantuan untuk momen yang tidak bisa dijawab sendiri oleh bagian lain platform.",
        modules: [
          {
            title: "Pengetahuan",
            body: "Panduan dan informasi yang relevan untuk hidup dan bekerja di sini.",
          },
          {
            title: "EMENDA Assistant",
            body: "Bertanya lewat teks atau suara, dalam bahasamu sendiri.",
          },
          {
            title: "Pengalaman multibahasa",
            body: "English · 日本語 · Bahasa Indonesia, di seluruh produk.",
          },
        ],
      },
      {
        id: "continuity",
        title: "Kesinambungan",
        body: "Bagian yang hilang dari kebanyakan alat: apa yang terjadi setelahnya, dan apakah sudah selesai.",
        modules: [
          {
            title: "Riwayat",
            body: "Aktivitas yang relevan tetap terlihat, tidak terkubur.",
          },
          {
            title: "Hasil",
            body: "Pahami apakah sesuatu sudah tuntas atau masih perlu bantuan.",
          },
          {
            title: "Bukti & penyelesaian",
            body: "Kejelasan tentang apa yang terjadi setelah masalah atau laporan diangkat.",
          },
        ],
      },
    ],
  },
  cta: {
    title: "Lihat platformnya dari sisimu.",
    body: "Pengalaman pekerja dan pengalaman organisasi dibangun sebagai dua sisi dari sistem yang sama.",
  },
};

export const PLATFORM_COPY = defineSectionCopy<PlatformCopy>({
  en: EN,
  ja: JA,
  id: ID_COPY,
});
