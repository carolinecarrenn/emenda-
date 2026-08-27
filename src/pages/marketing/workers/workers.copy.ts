import { defineSectionCopy } from "@/i18n/copy";

/** Copy for /workers — the platform told from the employee's side, as a
 *  journey rather than a feature list. */
export interface WorkersCopy {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  journey: {
    eyebrow: string;
    title: string;
    body: string;
    stages: { title: string; body: string; items: string[] }[];
  };
  cta: { title: string; body: string };
}

const EN: WorkersCopy = {
  hero: {
    eyebrow: "For workers",
    title: "Your life and work in Japan, connected.",
    body: "One account that starts before you arrive and keeps going through your first shift, your first city office visit, and everything that follows.",
    primaryCta: "Try EMENDA",
    secondaryCta: "See the platform",
  },
  journey: {
    eyebrow: "Your journey",
    title: "Six stages, one account.",
    body: "Nothing here restarts. Each stage builds on the record the last one left.",
    stages: [
      {
        title: "Build your EMENDA identity",
        body: "Your profile and EMENDA ID are the thing everything else attaches to — and they stay with you when your employer changes.",
        items: [
          "Personal profile",
          "EMENDA ID",
          "Career & experience",
          "Skills & qualifications",
          "Languages",
        ],
      },
      {
        title: "Prepare for Japan",
        body: "The setup nobody explains in order: what has to be done, what it needs, and what is still outstanding.",
        items: [
          "Japan readiness",
          "Documents",
          "Residence information",
          "Important dates",
        ],
      },
      {
        title: "Connect with your workplace",
        body: "Connect to your organization and see the information that actually applies to your role and your site.",
        items: [
          "Employer connection",
          "What you share, and with whom",
          "Work information",
        ],
      },
      {
        title: "Handle everyday work",
        body: "Submit what your shift requires, and receive what your workplace sends — in one place, in your language.",
        items: ["Daily reports", "Notifications", "Workplace updates", "Tasks"],
      },
      {
        title: "Get support",
        body: "When something is unfamiliar, look it up or ask. Both routes end in a next step rather than an explanation.",
        items: [
          "Knowledge",
          "EMENDA Assistant",
          "Guidance in your language",
          "Contact support",
        ],
      },
      {
        title: "Stay informed",
        body: "See what happened to what you sent — acknowledged, being followed up, or done.",
        items: ["Follow-up", "Verification", "Outcome", "History"],
      },
    ],
  },
  cta: {
    title: "Start with your identity.",
    body: "Everything else in EMENDA attaches to it — and it stays yours.",
  },
};

const JA: WorkersCopy = {
  hero: {
    eyebrow: "働く人へ",
    title: "日本での暮らしと仕事を、ひとつに。",
    body: "来日する前から始まり、初めてのシフト、初めての役所、そしてその先までずっと続く、ひとつのアカウント。",
    primaryCta: "EMENDAを試す",
    secondaryCta: "プラットフォームを見る",
  },
  journey: {
    eyebrow: "あなたの歩み",
    title: "6つの段階を、ひとつのアカウントで。",
    body: "やり直しはありません。それぞれの段階が、前の段階の記録の上に積み重なります。",
    stages: [
      {
        title: "EMENDA IDをつくる",
        body: "プロフィールとEMENDA IDは、ほかのすべてがつながる土台です。雇用主が変わっても、あなたのもとに残ります。",
        items: [
          "プロフィール",
          "EMENDA ID",
          "キャリアと経験",
          "スキルと資格",
          "言語",
        ],
      },
      {
        title: "日本の準備をする",
        body: "誰も順番どおりには教えてくれない準備。何をすべきで、何が必要で、何がまだ残っているか。",
        items: ["日本準備", "書類", "在留情報", "重要な日付"],
      },
      {
        title: "職場とつながる",
        body: "所属する組織とつながり、自分の役割と現場に実際に関係する情報を確認します。",
        items: ["雇用主との接続", "何を、誰と共有するか", "業務情報"],
      },
      {
        title: "日々の仕事を進める",
        body: "シフトで必要なものを提出し、職場からの連絡を受け取る。ひとつの場所で、自分の言語で。",
        items: ["日報", "お知らせ", "職場からの更新", "タスク"],
      },
      {
        title: "支えを得る",
        body: "慣れないことがあれば、調べるか、聞く。どちらも説明ではなく、次の一歩で終わります。",
        items: [
          "ナレッジ",
          "EMENDAアシスタント",
          "自分の言語での案内",
          "サポートへの連絡",
        ],
      },
      {
        title: "その後を知る",
        body: "送ったものがどうなったか——確認されたのか、対応中なのか、完了したのか。",
        items: ["フォローアップ", "確認", "結果", "履歴"],
      },
    ],
  },
  cta: {
    title: "まずは、あなたのIDから。",
    body: "EMENDAのすべてがそこにつながり、そしてそれはあなたのものです。",
  },
};

const ID_COPY: WorkersCopy = {
  hero: {
    eyebrow: "Untuk pekerja",
    title: "Hidup dan kerjamu di Jepang, terhubung.",
    body: "Satu akun yang dimulai sebelum kamu tiba dan terus berjalan melewati sif pertamamu, kunjungan pertama ke kantor kota, dan semua yang menyusul.",
    primaryCta: "Coba EMENDA",
    secondaryCta: "Lihat platformnya",
  },
  journey: {
    eyebrow: "Perjalananmu",
    title: "Enam tahap, satu akun.",
    body: "Tidak ada yang dimulai ulang. Tiap tahap berdiri di atas catatan yang ditinggalkan tahap sebelumnya.",
    stages: [
      {
        title: "Bangun identitas EMENDA-mu",
        body: "Profil dan EMENDA ID adalah tempat semua hal lain menempel — dan keduanya tetap bersamamu ketika pemberi kerjamu berganti.",
        items: [
          "Profil pribadi",
          "EMENDA ID",
          "Karier & pengalaman",
          "Keterampilan & kualifikasi",
          "Bahasa",
        ],
      },
      {
        title: "Bersiap untuk Jepang",
        body: "Persiapan yang tidak pernah dijelaskan berurutan: apa yang harus dilakukan, apa syaratnya, dan apa yang masih tersisa.",
        items: [
          "Kesiapan Jepang",
          "Dokumen",
          "Informasi izin tinggal",
          "Tanggal penting",
        ],
      },
      {
        title: "Terhubung dengan tempat kerjamu",
        body: "Terhubung dengan organisasimu dan lihat informasi yang benar-benar berlaku untuk peran dan lokasimu.",
        items: [
          "Koneksi pemberi kerja",
          "Apa yang kamu bagikan, dan dengan siapa",
          "Informasi kerja",
        ],
      },
      {
        title: "Jalani kerja sehari-hari",
        body: "Kirim apa yang dibutuhkan sifmu, dan terima apa yang dikirim tempat kerjamu — di satu tempat, dalam bahasamu.",
        items: [
          "Laporan harian",
          "Notifikasi",
          "Pembaruan tempat kerja",
          "Tugas",
        ],
      },
      {
        title: "Dapatkan dukungan",
        body: "Kalau ada yang asing, cari atau tanyakan. Keduanya berakhir pada langkah berikutnya, bukan sekadar penjelasan.",
        items: [
          "Pengetahuan",
          "EMENDA Assistant",
          "Panduan dalam bahasamu",
          "Hubungi dukungan",
        ],
      },
      {
        title: "Tetap tahu kabarnya",
        body: "Lihat apa yang terjadi pada yang kamu kirim — sudah dikonfirmasi, sedang ditindaklanjuti, atau selesai.",
        items: ["Tindak lanjut", "Verifikasi", "Hasil", "Riwayat"],
      },
    ],
  },
  cta: {
    title: "Mulai dari identitasmu.",
    body: "Semua hal lain di EMENDA menempel padanya — dan itu tetap milikmu.",
  },
};

export const WORKERS_COPY = defineSectionCopy<WorkersCopy>({
  en: EN,
  ja: JA,
  id: ID_COPY,
});
