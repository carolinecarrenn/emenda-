import { defineSectionCopy } from "@/i18n/copy";

/**
 * Copy for /how-it-works — the EMENDA lifecycle, end to end.
 *
 * Seven stages, of which "get support" is one. An earlier version of this page
 * described the assistant's ask/understand/act loop; that belongs on
 * /assistant, and describing it here made the whole platform look like a chat
 * flow.
 */
export interface HowItWorksCopy {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  steps: {
    eyebrow: string;
    title: string;
    body: string;
    items: { title: string; body: string; actor: string }[];
  };
  cta: { title: string; body: string };
}

const EN: HowItWorksCopy = {
  hero: {
    eyebrow: "How it works",
    title: "How a worker, an organization and EMENDA stay connected.",
    body: "One lifecycle, from creating an identity to closing an issue — with both sides attached to the same thread the whole way through.",
    primaryCta: "Try EMENDA",
    secondaryCta: "See the platform",
  },
  steps: {
    eyebrow: "The lifecycle",
    title: "Seven stages, one thread.",
    body: "Nothing here restarts, and nothing goes quiet at the point where most tools stop.",
    items: [
      {
        actor: "Worker",
        title: "Join EMENDA",
        body: "Create your identity and profile. Your EMENDA ID, career record and readiness live here and stay with you when your employer changes.",
      },
      {
        actor: "Worker & organization",
        title: "Connect",
        body: "Connect to your organization, review exactly what will be shared, and receive the work information that applies to your role.",
      },
      {
        actor: "Worker & organization",
        title: "Work & communicate",
        body: "Daily reports, workplace information, notifications and messages — in one place, in the language each person reads.",
      },
      {
        actor: "Worker",
        title: "Get support",
        body: "When something is unfamiliar, look it up in Knowledge or ask EMENDA Assistant. One of seven stages, not the whole product.",
      },
      {
        actor: "Worker or organization",
        title: "Take action",
        body: "Whoever the next step belongs to takes it: a worker completes a task, or an organization verifies, responds, or asks for more detail.",
      },
      {
        actor: "Both",
        title: "Follow up",
        body: "The thread stays open and visible to both sides until someone can say what happened. Status is shared, not chased.",
      },
      {
        actor: "Both",
        title: "Resolve",
        body: "It closes with a clear history of what was raised, what was done, and by whom — available later without anyone reconstructing it.",
      },
    ],
  },
  cta: {
    title: "See it from your side.",
    body: "The same lifecycle, described for workers and for the teams supporting them.",
  },
};

const JA: HowItWorksCopy = {
  hero: {
    eyebrow: "使い方",
    title: "働く人と組織とEMENDAが、どうつながるか。",
    body: "IDをつくるところから課題が閉じるまで、ひとつのライフサイクル。その間ずっと、両者が同じ流れにつながっています。",
    primaryCta: "EMENDAを試す",
    secondaryCta: "プラットフォームを見る",
  },
  steps: {
    eyebrow: "ライフサイクル",
    title: "7つの段階、ひとすじの流れ。",
    body: "やり直しはなく、多くの仕組みが止まってしまう地点で静かにもなりません。",
    items: [
      {
        actor: "働く人",
        title: "EMENDAに参加する",
        body: "IDとプロフィールをつくります。EMENDA ID、キャリアの記録、準備状況はここにあり、雇用主が変わってもあなたのもとに残ります。",
      },
      {
        actor: "働く人と組織",
        title: "つながる",
        body: "組織と接続し、何が共有されるかを確認したうえで、自分の役割に関係する業務情報を受け取ります。",
      },
      {
        actor: "働く人と組織",
        title: "働く・伝える",
        body: "日報、職場の情報、お知らせ、メッセージ。ひとつの場所で、それぞれが読む言語で。",
      },
      {
        actor: "働く人",
        title: "支えを得る",
        body: "慣れないことがあれば、ナレッジで調べるか、EMENDAアシスタントに聞く。7つのうちのひとつであって、プロダクト全体ではありません。",
      },
      {
        actor: "働く人または組織",
        title: "動く",
        body: "次の一歩を担う側が動きます。働く人がタスクを完了するか、組織が確認し、応答し、詳細を求めます。",
      },
      {
        actor: "両者",
        title: "確認する",
        body: "誰かが結果を言えるまで、流れは開いたまま両者に見えています。状況は共有されるもので、追いかけるものではありません。",
      },
      {
        actor: "両者",
        title: "解決する",
        body: "何が上がり、何が行われ、誰がやったのか。明確な履歴とともに閉じ、あとから誰も再構成せずに確認できます。",
      },
    ],
  },
  cta: {
    title: "あなたの側から見てみてください。",
    body: "同じライフサイクルを、働く人向けと、支えるチーム向けに。",
  },
};

const ID_COPY: HowItWorksCopy = {
  hero: {
    eyebrow: "Cara kerja",
    title: "Bagaimana pekerja, organisasi, dan EMENDA tetap terhubung.",
    body: "Satu siklus, dari membuat identitas sampai menutup sebuah masalah — dengan kedua sisi menempel pada benang yang sama sepanjang jalan.",
    primaryCta: "Coba EMENDA",
    secondaryCta: "Lihat platformnya",
  },
  steps: {
    eyebrow: "Siklusnya",
    title: "Tujuh tahap, satu benang.",
    body: "Tidak ada yang dimulai ulang, dan tidak ada yang jadi sunyi di titik tempat kebanyakan alat berhenti.",
    items: [
      {
        actor: "Pekerja",
        title: "Bergabung dengan EMENDA",
        body: "Buat identitas dan profilmu. EMENDA ID, catatan karier, dan kesiapanmu ada di sini dan tetap bersamamu ketika pemberi kerjamu berganti.",
      },
      {
        actor: "Pekerja & organisasi",
        title: "Terhubung",
        body: "Terhubung dengan organisasimu, tinjau persis apa yang akan dibagikan, dan terima informasi kerja yang berlaku untuk peranmu.",
      },
      {
        actor: "Pekerja & organisasi",
        title: "Bekerja & berkomunikasi",
        body: "Laporan harian, informasi tempat kerja, notifikasi, dan pesan — di satu tempat, dalam bahasa yang dibaca masing-masing orang.",
      },
      {
        actor: "Pekerja",
        title: "Dapatkan dukungan",
        body: "Kalau ada yang asing, cari di Pengetahuan atau tanya EMENDA Assistant. Satu dari tujuh tahap, bukan keseluruhan produk.",
      },
      {
        actor: "Pekerja atau organisasi",
        title: "Ambil tindakan",
        body: "Siapa pun pemilik langkah berikutnya yang mengambilnya: pekerja menyelesaikan tugas, atau organisasi memverifikasi, merespons, atau meminta detail.",
      },
      {
        actor: "Keduanya",
        title: "Tindak lanjut",
        body: "Benangnya tetap terbuka dan terlihat oleh kedua sisi sampai seseorang bisa menyatakan hasilnya. Status dibagikan, bukan dikejar.",
      },
      {
        actor: "Keduanya",
        title: "Selesai",
        body: "Ditutup dengan riwayat yang jelas tentang apa yang diangkat, apa yang dikerjakan, dan oleh siapa — bisa dilihat lagi tanpa ada yang menyusun ulang.",
      },
    ],
  },
  cta: {
    title: "Lihat dari sisimu.",
    body: "Siklus yang sama, dijelaskan untuk pekerja dan untuk tim yang mendukung mereka.",
  },
};

export const HOW_IT_WORKS_COPY = defineSectionCopy<HowItWorksCopy>({
  en: EN,
  ja: JA,
  id: ID_COPY,
});
