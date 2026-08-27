import { defineSectionCopy } from "@/i18n/copy";

/**
 * Copy for /use-cases — scenarios across the whole platform, not only life in
 * Japan. Three of the seven are organization-side or two-sided, which is the
 * point: EMENDA is used by both ends of the same relationship.
 *
 * Each scenario carries a short relay of actor-labelled steps rather than a
 * chat transcript, so the page does not quietly turn back into an AI demo.
 */
export interface UseCasesCopy {
  hero: { eyebrow: string; title: string; body: string };
  jumpLabel: string;
  flowLabel: string;
  actorLabels: { worker: string; organization: string; both: string };
  categories: {
    id: string;
    actor: "worker" | "organization" | "both";
    title: string;
    body: string;
    examples: string[];
    flow: { actor: "worker" | "organization" | "both"; label: string }[];
  }[];
  cta: { title: string; body: string };
}

const EN: UseCasesCopy = {
  hero: {
    eyebrow: "Use cases",
    title: "What EMENDA is actually used for.",
    body: "Seven situations that run across the platform — some belong to the worker, some to the organization, and the ones that matter most belong to both.",
  },
  jumpLabel: "Jump to",
  flowLabel: "How it runs",
  actorLabels: {
    worker: "Worker",
    organization: "Organization",
    both: "Both",
  },
  categories: [
    {
      id: "starting-journey",
      actor: "worker",
      title: "Starting a journey in Japan",
      body: "Before the first day there is an identity to build and a country's worth of setup to understand.",
      examples: [
        "EMENDA ID and profile",
        "Career, skills and languages",
        "Documents",
        "Japan readiness",
        "Important dates",
      ],
      flow: [
        { actor: "worker", label: "Builds profile and EMENDA ID" },
        { actor: "worker", label: "Works through readiness steps" },
        { actor: "worker", label: "Arrives with the record already in place" },
      ],
    },
    {
      id: "new-workplace",
      actor: "both",
      title: "Starting with a new workplace",
      body: "Connecting to an employer should not mean rebuilding everything you already entered.",
      examples: [
        "Employer connection",
        "What is shared, and with whom",
        "Initial work information",
        "Role and site details",
      ],
      flow: [
        { actor: "worker", label: "Connects to the organization" },
        { actor: "worker", label: "Reviews what will be shared" },
        { actor: "organization", label: "Receives the profile it needs" },
        { actor: "both", label: "Work information becomes available" },
      ],
    },
    {
      id: "daily-work",
      actor: "worker",
      title: "Daily work",
      body: "The ordinary rhythm: what the shift requires, and what the workplace sends back.",
      examples: [
        "Daily reports",
        "Work updates",
        "Notifications",
        "Tasks for the day",
      ],
      flow: [
        { actor: "worker", label: "Submits the daily report" },
        { actor: "organization", label: "Receives it in the queue" },
        { actor: "worker", label: "Sees it acknowledged" },
      ],
    },
    {
      id: "manager-updates",
      actor: "organization",
      title: "A manager needs worker updates",
      body: "Knowing what came in, what did not, and what still needs a person — without chasing anyone.",
      examples: [
        "Report overview",
        "Missing submissions",
        "Verification",
        "Team status",
      ],
      flow: [
        { actor: "organization", label: "Opens the team overview" },
        { actor: "organization", label: "Sees what is outstanding" },
        { actor: "organization", label: "Verifies or asks for detail" },
        { actor: "worker", label: "Receives the response" },
      ],
    },
    {
      id: "worker-support",
      actor: "worker",
      title: "A worker needs support",
      body: "Something is unfamiliar, and the answer is either written down somewhere or it is not.",
      examples: [
        "Knowledge",
        "EMENDA Assistant",
        "Guidance in your language",
        "Contact support",
      ],
      flow: [
        { actor: "worker", label: "Looks it up, or asks EMENDA" },
        { actor: "worker", label: "Gets an explanation and a next step" },
        { actor: "both", label: "Escalates to a person if it needs one" },
      ],
    },
    {
      id: "follow-up",
      actor: "both",
      title: "An issue needs follow-up",
      body: "The case the whole platform is built around: something was raised, and it has to end somewhere.",
      examples: [
        "Request",
        "Response",
        "Status",
        "Evidence",
        "Resolution",
      ],
      flow: [
        { actor: "worker", label: "Raises the issue" },
        { actor: "organization", label: "Responds and opens follow-up" },
        { actor: "both", label: "Status stays visible to both sides" },
        { actor: "both", label: "Closed, with the history intact" },
      ],
    },
    {
      id: "information-changes",
      actor: "both",
      title: "Important information changes",
      body: "A rule, a date or a procedure changes — and everyone it applies to has to actually receive it.",
      examples: [
        "Notification",
        "Acknowledgment",
        "Who has seen it",
        "Follow-up for those who have not",
      ],
      flow: [
        { actor: "organization", label: "Sends the update" },
        { actor: "worker", label: "Receives and acknowledges it" },
        { actor: "organization", label: "Follows up with anyone who has not" },
      ],
    },
  ],
  cta: {
    title: "Your situation is probably one of these.",
    body: "And if it isn't, it still belongs somewhere in EMENDA.",
  },
};

const JA: UseCasesCopy = {
  hero: {
    eyebrow: "活用シーン",
    title: "EMENDAが実際に使われる場面。",
    body: "プラットフォーム全体にまたがる7つの場面。働く人のものもあれば、組織のものもあり、いちばん大事なものは両者のものです。",
  },
  jumpLabel: "移動",
  flowLabel: "流れ",
  actorLabels: {
    worker: "働く人",
    organization: "組織",
    both: "両者",
  },
  categories: [
    {
      id: "starting-journey",
      actor: "worker",
      title: "日本での歩みを始める",
      body: "初日の前に、つくるべきIDと、理解すべき国ひとつぶんの準備があります。",
      examples: [
        "EMENDA IDとプロフィール",
        "キャリア、スキル、言語",
        "書類",
        "日本準備",
        "重要な日付",
      ],
      flow: [
        { actor: "worker", label: "プロフィールとEMENDA IDをつくる" },
        { actor: "worker", label: "準備のステップを進める" },
        { actor: "worker", label: "記録が整った状態で来日する" },
      ],
    },
    {
      id: "new-workplace",
      actor: "both",
      title: "新しい職場で働きはじめる",
      body: "雇用主とつながることが、入力し直しを意味する必要はありません。",
      examples: [
        "雇用主との接続",
        "何を、誰と共有するか",
        "最初の業務情報",
        "役割と現場の詳細",
      ],
      flow: [
        { actor: "worker", label: "組織と接続する" },
        { actor: "worker", label: "共有される内容を確認する" },
        { actor: "organization", label: "必要なプロフィールを受け取る" },
        { actor: "both", label: "業務情報が使えるようになる" },
      ],
    },
    {
      id: "daily-work",
      actor: "worker",
      title: "日々の仕事",
      body: "いつものリズム。シフトで必要なことと、職場から返ってくること。",
      examples: ["日報", "業務の更新", "お知らせ", "その日のタスク"],
      flow: [
        { actor: "worker", label: "日報を提出する" },
        { actor: "organization", label: "一覧で受け取る" },
        { actor: "worker", label: "確認されたことがわかる" },
      ],
    },
    {
      id: "manager-updates",
      actor: "organization",
      title: "管理者が状況を知りたい",
      body: "何が届き、何が届いていないか、そして何に人が必要か。誰も追いかけずに。",
      examples: ["日報の一覧", "未提出", "確認", "チームの状態"],
      flow: [
        { actor: "organization", label: "チーム状況を開く" },
        { actor: "organization", label: "未対応のものを見る" },
        { actor: "organization", label: "確認するか、詳細を依頼する" },
        { actor: "worker", label: "返答を受け取る" },
      ],
    },
    {
      id: "worker-support",
      actor: "worker",
      title: "働く人が助けを必要とする",
      body: "慣れないことがある。答えはどこかに書かれているか、書かれていないか。",
      examples: [
        "ナレッジ",
        "EMENDAアシスタント",
        "自分の言語での案内",
        "サポートへの連絡",
      ],
      flow: [
        { actor: "worker", label: "調べる、またはEMENDAに聞く" },
        { actor: "worker", label: "説明と次の一歩を受け取る" },
        { actor: "both", label: "人が必要なら引き継ぐ" },
      ],
    },
    {
      id: "follow-up",
      actor: "both",
      title: "課題にフォローアップが必要",
      body: "プラットフォーム全体が支えている場面。何かが上がり、それはどこかで終わらなければなりません。",
      examples: ["依頼", "返答", "状況", "記録", "解決"],
      flow: [
        { actor: "worker", label: "課題を上げる" },
        { actor: "organization", label: "応答し、フォローを開始する" },
        { actor: "both", label: "状況は両者に見えたまま" },
        { actor: "both", label: "履歴を残して完了" },
      ],
    },
    {
      id: "information-changes",
      actor: "both",
      title: "大事な情報が変わる",
      body: "ルールや日付や手続きが変わる。関係する全員に、実際に届く必要があります。",
      examples: [
        "お知らせ",
        "確認の記録",
        "誰が見たか",
        "見ていない人へのフォロー",
      ],
      flow: [
        { actor: "organization", label: "更新を送る" },
        { actor: "worker", label: "受け取り、確認する" },
        { actor: "organization", label: "未確認の人にフォローする" },
      ],
    },
  ],
  cta: {
    title: "あなたの状況も、きっとこの中にあります。",
    body: "もしなくても、EMENDAのどこかに居場所があります。",
  },
};

const ID_COPY: UseCasesCopy = {
  hero: {
    eyebrow: "Contoh penggunaan",
    title: "Untuk apa EMENDA benar-benar dipakai.",
    body: "Tujuh situasi yang melintasi seluruh platform — sebagian milik pekerja, sebagian milik organisasi, dan yang paling penting milik keduanya.",
  },
  jumpLabel: "Lompat ke",
  flowLabel: "Alurnya",
  actorLabels: {
    worker: "Pekerja",
    organization: "Organisasi",
    both: "Keduanya",
  },
  categories: [
    {
      id: "starting-journey",
      actor: "worker",
      title: "Memulai perjalanan di Jepang",
      body: "Sebelum hari pertama, ada identitas yang harus dibangun dan persiapan sebesar satu negara yang harus dipahami.",
      examples: [
        "EMENDA ID dan profil",
        "Karier, keterampilan, dan bahasa",
        "Dokumen",
        "Kesiapan Jepang",
        "Tanggal penting",
      ],
      flow: [
        { actor: "worker", label: "Membangun profil dan EMENDA ID" },
        { actor: "worker", label: "Menjalani langkah-langkah kesiapan" },
        { actor: "worker", label: "Tiba dengan catatan yang sudah siap" },
      ],
    },
    {
      id: "new-workplace",
      actor: "both",
      title: "Memulai di tempat kerja baru",
      body: "Terhubung dengan pemberi kerja seharusnya tidak berarti mengisi ulang semua yang sudah kamu masukkan.",
      examples: [
        "Koneksi pemberi kerja",
        "Apa yang dibagikan, dan dengan siapa",
        "Informasi kerja awal",
        "Detail peran dan lokasi",
      ],
      flow: [
        { actor: "worker", label: "Terhubung dengan organisasi" },
        { actor: "worker", label: "Meninjau apa yang akan dibagikan" },
        { actor: "organization", label: "Menerima profil yang dibutuhkan" },
        { actor: "both", label: "Informasi kerja mulai tersedia" },
      ],
    },
    {
      id: "daily-work",
      actor: "worker",
      title: "Kerja sehari-hari",
      body: "Irama biasa: apa yang dibutuhkan sif, dan apa yang dikirim balik tempat kerja.",
      examples: [
        "Laporan harian",
        "Pembaruan kerja",
        "Notifikasi",
        "Tugas hari itu",
      ],
      flow: [
        { actor: "worker", label: "Mengirim laporan harian" },
        { actor: "organization", label: "Menerimanya di antrean" },
        { actor: "worker", label: "Melihatnya dikonfirmasi" },
      ],
    },
    {
      id: "manager-updates",
      actor: "organization",
      title: "Manajer butuh kabar dari tim",
      body: "Tahu apa yang masuk, apa yang tidak, dan apa yang masih butuh orang — tanpa mengejar siapa pun.",
      examples: [
        "Ringkasan laporan",
        "Laporan yang belum masuk",
        "Verifikasi",
        "Status tim",
      ],
      flow: [
        { actor: "organization", label: "Membuka ringkasan tim" },
        { actor: "organization", label: "Melihat apa yang tertunggak" },
        { actor: "organization", label: "Memverifikasi atau meminta detail" },
        { actor: "worker", label: "Menerima responsnya" },
      ],
    },
    {
      id: "worker-support",
      actor: "worker",
      title: "Pekerja butuh dukungan",
      body: "Ada yang asing, dan jawabannya entah tertulis di suatu tempat atau tidak.",
      examples: [
        "Pengetahuan",
        "EMENDA Assistant",
        "Panduan dalam bahasamu",
        "Hubungi dukungan",
      ],
      flow: [
        { actor: "worker", label: "Mencarinya, atau bertanya ke EMENDA" },
        { actor: "worker", label: "Mendapat penjelasan dan langkah berikutnya" },
        { actor: "both", label: "Diteruskan ke orang bila memang perlu" },
      ],
    },
    {
      id: "follow-up",
      actor: "both",
      title: "Sebuah masalah butuh tindak lanjut",
      body: "Kasus yang menjadi alasan seluruh platform ini ada: sesuatu diangkat, dan harus berakhir di suatu tempat.",
      examples: ["Permintaan", "Respons", "Status", "Bukti", "Penyelesaian"],
      flow: [
        { actor: "worker", label: "Mengangkat masalahnya" },
        { actor: "organization", label: "Merespons dan membuka tindak lanjut" },
        { actor: "both", label: "Status tetap terlihat oleh kedua sisi" },
        { actor: "both", label: "Ditutup, dengan riwayat yang utuh" },
      ],
    },
    {
      id: "information-changes",
      actor: "both",
      title: "Informasi penting berubah",
      body: "Sebuah aturan, tanggal, atau prosedur berubah — dan semua yang terkena harus benar-benar menerimanya.",
      examples: [
        "Notifikasi",
        "Konfirmasi terbaca",
        "Siapa yang sudah melihat",
        "Tindak lanjut bagi yang belum",
      ],
      flow: [
        { actor: "organization", label: "Mengirim pembaruan" },
        { actor: "worker", label: "Menerima dan mengonfirmasinya" },
        { actor: "organization", label: "Menindaklanjuti yang belum" },
      ],
    },
  ],
  cta: {
    title: "Situasimu kemungkinan salah satu dari ini.",
    body: "Dan kalau bukan, tetap ada tempatnya di EMENDA.",
  },
};

export const USE_CASES_COPY = defineSectionCopy<UseCasesCopy>({
  en: EN,
  ja: JA,
  id: ID_COPY,
});
