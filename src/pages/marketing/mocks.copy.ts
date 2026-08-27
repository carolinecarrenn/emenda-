import { defineSectionCopy } from "@/i18n/copy";

/**
 * Content for the product mockups. It lives here rather than with any one page
 * because the same demo conversations appear across the site — the address
 * question in the homepage hero, the document question on /features, the
 * follow-up on /how-it-works — and they have to say the same thing everywhere.
 *
 * All of it is illustrative product content, not marketing claims: what a real
 * answer looks like, in the language the visitor is reading.
 */
export interface MarketingMockCopy {
  assistant: {
    appName: string;
    status: string;
    composer: string;
    composerMultilingual: string;
  };
  /** "I just moved to Japan. How do I register my address?" */
  address: {
    userMessage: string;
    answerLead: string;
    stepsLabel: string;
    steps: string[];
    actionLabel: string;
    actionTitle: string;
    actionMeta: string;
    actionCta: string;
    savedLabel: string;
    savedTitle: string;
    savedMeta: string;
  };
  /** "What does this Japanese document mean?" */
  document: {
    fileName: string;
    userMessage: string;
    answerLead: string;
    answerBody: string;
    sourceChip: string;
    followUp: string;
  };
  voice: {
    listening: string;
    transcriptLabel: string;
    transcript: string;
    useTranscript: string;
  };
  followUp: {
    question: string;
    options: string[];
    reply: string;
    replyAction: string;
  };
  permission: {
    title: string;
    body: string;
    allow: string;
    deny: string;
  };
  phones: {
    ask: { question: string; answer: string; detail: string };
    location: { place: string; meta: string; cta: string };
  };
  context: {
    label: string;
    rows: { label: string; value: string }[];
  };
  actions: {
    question: string;
    items: string[];
  };
}

const EN: MarketingMockCopy = {
  assistant: {
    appName: "EMENDA Assistant",
    status: "Ready to help",
    composer: "Ask EMENDA anything…",
    composerMultilingual: "Ask in English, 日本語, or Bahasa Indonesia…",
  },
  address: {
    userMessage:
      "I just moved to Japan. How do I register my address?",
    answerLead:
      "You need to register your new address at your local city office within 14 days of moving in.",
    stepsLabel: "What to bring",
    steps: [
      "Residence card (在留カード)",
      "Passport",
      "Moving-out certificate, if you moved within Japan",
    ],
    actionLabel: "Recommended next step",
    actionTitle: "Shinjuku City Office · Resident Registration",
    actionMeta: "1.2 km away · Counter open until 17:00",
    actionCta: "Get directions",
    savedLabel: "Saved as a next step",
    savedTitle: "Register your address",
    savedMeta: "Due within 14 days of moving in",
  },
  document: {
    fileName: "hoken-tsuchi.pdf",
    userMessage: "What does this Japanese document mean?",
    answerLead: "This is a National Health Insurance enrolment notice.",
    answerBody:
      "It confirms your enrolment and lists your monthly premium. Nothing is due today — the first payment slip arrives by post next month.",
    sourceChip: "1 source",
    followUp: "Want me to explain how the payment slip works?",
  },
  voice: {
    listening: "Listening…",
    transcriptLabel: "Transcript",
    transcript: "I need to renew my residence card next month.",
    useTranscript: "Use transcript",
  },
  followUp: {
    question: "Were you able to complete your address registration?",
    options: ["Yes, resolved", "Not yet", "I need help"],
    reply:
      "No problem. The counter closes at 17:00 — mornings are usually quieter.",
    replyAction: "Remind me tomorrow at 9:00",
  },
  permission: {
    title: "Use your location?",
    body: "EMENDA would use it once to find the city office closest to you.",
    allow: "Allow",
    deny: "Not now",
  },
  phones: {
    ask: {
      question: "How do I register my address?",
      answer: "Go to your city office within 14 days of moving in.",
      detail: "Bring your residence card and passport.",
    },
    location: {
      place: "Shinjuku City Office",
      meta: "1.2 km · Open until 17:00",
      cta: "Get directions",
    },
  },
  context: {
    label: "Guidance adjusted for",
    rows: [
      { label: "Where you live", value: "Shinjuku, Tokyo" },
      { label: "Your situation", value: "Recently arrived" },
      { label: "Your goal", value: "Start work in April" },
    ],
  },
  actions: {
    question: "What should I do next?",
    items: [
      "Directions to the right counter",
      "A checklist of what to bring",
      "A task with the deadline attached",
      "The contact who can help",
    ],
  },
};

const JA: MarketingMockCopy = {
  assistant: {
    appName: "EMENDAアシスタント",
    status: "いつでも相談できます",
    composer: "EMENDAに聞いてみる…",
    composerMultilingual: "English・日本語・Bahasa Indonesiaで質問できます…",
  },
  address: {
    userMessage:
      "日本に引っ越してきました。住所の登録はどうすればいいですか？",
    answerLead:
      "引っ越した日から14日以内に、お住まいの市区町村の役所で住所を登録してください。",
    stepsLabel: "持ち物",
    steps: [
      "在留カード",
      "パスポート",
      "転出証明書（日本国内から転居した場合）",
    ],
    actionLabel: "おすすめの次の一歩",
    actionTitle: "新宿区役所・住民登録の窓口",
    actionMeta: "1.2 km・窓口は17:00まで",
    actionCta: "経路を見る",
    savedLabel: "次の一歩に追加しました",
    savedTitle: "住所を登録する",
    savedMeta: "引っ越しから14日以内",
  },
  document: {
    fileName: "hoken-tsuchi.pdf",
    userMessage: "この書類には何と書いてある？",
    answerLead: "国民健康保険の加入通知です。",
    answerBody:
      "加入したことと、毎月の保険料が書かれています。今日の支払いはありません。最初の納付書は来月、郵送で届きます。",
    sourceChip: "出典1件",
    followUp: "納付書の使い方も説明しましょうか？",
  },
  voice: {
    listening: "聞き取り中…",
    transcriptLabel: "文字起こし",
    transcript: "来月、在留カードを更新したいです。",
    useTranscript: "この文字起こしを使う",
  },
  followUp: {
    question: "住所の登録は終わりましたか？",
    options: ["完了しました", "まだです", "手伝ってほしい"],
    reply:
      "大丈夫です。窓口は17:00まで。午前中のほうが空いていることが多いです。",
    replyAction: "明日9:00にリマインドする",
  },
  permission: {
    title: "位置情報を使いますか？",
    body: "いちばん近い役所を探すために、一度だけ使います。",
    allow: "許可する",
    deny: "今はしない",
  },
  phones: {
    ask: {
      question: "住所の登録はどうすればいい？",
      answer: "引っ越しから14日以内に役所へ。",
      detail: "在留カードとパスポートを持って行きましょう。",
    },
    location: {
      place: "新宿区役所",
      meta: "1.2 km・17:00まで",
      cta: "経路を見る",
    },
  },
  context: {
    label: "案内に反映されていること",
    rows: [
      { label: "お住まい", value: "東京・新宿" },
      { label: "現在の状況", value: "来日したばかり" },
      { label: "目標", value: "4月から働きはじめる" },
    ],
  },
  actions: {
    question: "次は何をすればいい？",
    items: [
      "窓口までの経路",
      "持ち物のチェックリスト",
      "期限つきのタスク",
      "相談できる連絡先",
    ],
  },
};

const ID: MarketingMockCopy = {
  assistant: {
    appName: "EMENDA Assistant",
    status: "Siap membantu",
    composer: "Tanya apa saja ke EMENDA…",
    composerMultilingual: "Tanya dalam English, 日本語, atau Bahasa Indonesia…",
  },
  address: {
    userMessage:
      "Saya baru pindah ke Jepang. Bagaimana cara mendaftarkan alamat saya?",
    answerLead:
      "Kamu perlu mendaftarkan alamat baru di kantor kota setempat dalam 14 hari setelah pindah.",
    stepsLabel: "Yang perlu dibawa",
    steps: [
      "Kartu izin tinggal (在留カード)",
      "Paspor",
      "Surat keterangan pindah, jika kamu pindah dari kota lain di Jepang",
    ],
    actionLabel: "Langkah berikutnya yang disarankan",
    actionTitle: "Kantor Kota Shinjuku · Pendaftaran Penduduk",
    actionMeta: "1,2 km · Loket buka sampai 17.00",
    actionCta: "Lihat rute",
    savedLabel: "Disimpan sebagai langkah berikutnya",
    savedTitle: "Daftarkan alamatmu",
    savedMeta: "Batas waktu 14 hari sejak pindah",
  },
  document: {
    fileName: "hoken-tsuchi.pdf",
    userMessage: "Apa arti dokumen berbahasa Jepang ini?",
    answerLead:
      "Ini surat pemberitahuan kepesertaan Asuransi Kesehatan Nasional.",
    answerBody:
      "Isinya konfirmasi kepesertaanmu dan besaran iuran bulanan. Tidak ada yang perlu dibayar hari ini — slip pembayaran pertama dikirim lewat pos bulan depan.",
    sourceChip: "1 sumber",
    followUp: "Mau saya jelaskan cara memakai slip pembayarannya?",
  },
  voice: {
    listening: "Mendengarkan…",
    transcriptLabel: "Transkrip",
    transcript: "Saya perlu memperpanjang kartu izin tinggal bulan depan.",
    useTranscript: "Pakai transkrip",
  },
  followUp: {
    question: "Apakah pendaftaran alamatmu sudah selesai?",
    options: ["Sudah selesai", "Belum", "Saya butuh bantuan"],
    reply:
      "Tidak masalah. Loket tutup pukul 17.00 — pagi hari biasanya lebih sepi.",
    replyAction: "Ingatkan besok pukul 9.00",
  },
  permission: {
    title: "Gunakan lokasimu?",
    body: "EMENDA memakainya sekali saja untuk mencari kantor kota terdekat.",
    allow: "Izinkan",
    deny: "Nanti saja",
  },
  phones: {
    ask: {
      question: "Bagaimana cara mendaftarkan alamat?",
      answer: "Datang ke kantor kota dalam 14 hari setelah pindah.",
      detail: "Bawa kartu izin tinggal dan paspormu.",
    },
    location: {
      place: "Kantor Kota Shinjuku",
      meta: "1,2 km · Buka sampai 17.00",
      cta: "Lihat rute",
    },
  },
  context: {
    label: "Panduan disesuaikan dengan",
    rows: [
      { label: "Tempat tinggal", value: "Shinjuku, Tokyo" },
      { label: "Situasimu", value: "Baru tiba" },
      { label: "Tujuanmu", value: "Mulai bekerja bulan April" },
    ],
  },
  actions: {
    question: "Apa langkah saya berikutnya?",
    items: [
      "Rute ke loket yang tepat",
      "Daftar dokumen yang perlu dibawa",
      "Tugas lengkap dengan tenggatnya",
      "Kontak yang bisa membantu",
    ],
  },
};

export const MOCKS_COPY = defineSectionCopy<MarketingMockCopy>({
  en: EN,
  ja: JA,
  id: ID,
});
