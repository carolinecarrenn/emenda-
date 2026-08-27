import { defineSectionCopy } from "@/i18n/copy";

/** Copy for /help — the support page. It carries the FAQ, the privacy
 *  explanation the homepage links to (#privacy), and the contact route the
 *  organizations page links to (#contact). */
export interface HelpCopy {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    searchLabel: string;
    searchPlaceholder: string;
  };
  topics: {
    eyebrow: string;
    title: string;
    body: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    body: string;
    resultsLabel: string;
    noResultsTitle: string;
    noResultsBody: string;
    clearSearch: string;
    groups: {
      id: string;
      title: string;
      summary: string;
      items: { q: string; a: string }[];
    }[];
  };
  privacy: {
    eyebrow: string;
    title: string;
    body: string;
    points: { title: string; body: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    channels: { title: string; body: string; action: string }[];
  };
}

const EN: HelpCopy = {
  hero: {
    eyebrow: "Help centre",
    title: "How can we help?",
    body: "Search the answers below, or jump straight to the topic you need.",
    searchLabel: "Search help articles",
    searchPlaceholder: "Search for a question…",
  },
  topics: {
    eyebrow: "Browse",
    title: "Start with a topic.",
    body: "Six areas cover almost everything people ask us.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions people actually ask.",
    body: "Short answers. If one raises another question, EMENDA can take it from there.",
    resultsLabel: "matching answers",
    noResultsTitle: "No answers matched that.",
    noResultsBody:
      "Try a shorter phrase, or ask EMENDA directly — it can answer questions this page does not cover.",
    clearSearch: "Clear search",
    groups: [
      {
        id: "getting-started",
        title: "Getting started",
        summary: "Your first conversation, and what to expect from it.",
        items: [
          {
            q: "What is EMENDA?",
            a: "EMENDA is a support platform for living and working in Japan. You ask a question in your own language, and it explains the situation and tells you what to do next — where to go, what to bring, and by when.",
          },
          {
            q: "Do I need to prepare anything before I start?",
            a: "No. Start with whatever question is on your mind. EMENDA will ask for anything else it needs, such as which city you live in, only when that changes the answer.",
          },
          {
            q: "Is EMENDA only for people already in Japan?",
            a: "No. It is just as useful before you arrive — understanding what a visa requires, what to bring, and what the first weeks will ask of you.",
          },
        ],
      },
      {
        id: "using-assistant",
        title: "Using EMENDA Assistant",
        summary: "Asking, speaking, and sharing documents.",
        items: [
          {
            q: "Can I ask by voice instead of typing?",
            a: "Yes. Hold to speak and EMENDA shows the transcript before anything is sent, so you can correct it first.",
          },
          {
            q: "Can I show EMENDA a document I don't understand?",
            a: "Yes. Share the document in the conversation and EMENDA explains what it says, what it is asking of you, and which parts matter.",
          },
          {
            q: "Will it remember what we talked about last time?",
            a: "Yes, so you do not have to explain your situation again. You can see what is being taken into account, and you can ask EMENDA to disregard it.",
          },
        ],
      },
      {
        id: "account",
        title: "Account",
        summary: "Signing in and managing your account.",
        items: [
          {
            q: "Do I need an account to try EMENDA?",
            a: "You can explore the demo without one. An account is what lets EMENDA keep your context between conversations and follow up on what you were doing.",
          },
          {
            q: "Can I use EMENDA on more than one device?",
            a: "Yes. Sign in on any device and your conversations continue where you left them.",
          },
        ],
      },
      {
        id: "languages",
        title: "Languages",
        summary: "Which languages are supported, and how switching works.",
        items: [
          {
            q: "Which languages does EMENDA support?",
            a: "English, 日本語, and Bahasa Indonesia — across the whole product, not only the assistant.",
          },
          {
            q: "What happens if I switch language mid-conversation?",
            a: "Nothing is lost. The conversation stays exactly where it was and continues in the language you just chose.",
          },
        ],
      },
      {
        id: "privacy-permissions",
        title: "Privacy & permissions",
        summary: "What EMENDA can access, and when it asks.",
        items: [
          {
            q: "What does EMENDA need permission for?",
            a: "Location, calls, email, messages, calendar and contacts. Each is requested separately, at the moment it would be used, and explained before you decide.",
          },
          {
            q: "What happens if I say no?",
            a: "You still get an answer. EMENDA falls back to a version that does not need that permission — for example asking which area you are in instead of using your location.",
          },
          {
            q: "Can I change my mind later?",
            a: "Yes. Permissions can be withdrawn at any time, and withdrawing one never removes your account or your history.",
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Troubleshooting",
        summary: "When something did not work as described.",
        items: [
          {
            q: "The guidance didn't match what happened at the counter.",
            a: "Tell EMENDA what you were told. It will work from the new information rather than repeating the original answer — offices and requirements do vary.",
          },
          {
            q: "I can't find an answer to my question here.",
            a: "Ask EMENDA directly. This page covers the common questions; the assistant is built for the ones that are specific to you.",
          },
        ],
      },
    ],
  },
  privacy: {
    eyebrow: "Privacy & permissions",
    title: "You decide what EMENDA can use.",
    body: "Permission is asked at the moment it matters, for one thing at a time, with the reason attached.",
    points: [
      {
        title: "Asked, not assumed",
        body: "Nothing that needs your permission is used before you have given it.",
      },
      {
        title: "One request at a time",
        body: "Each permission is separate. Allowing one does not allow the rest.",
      },
      {
        title: "Declining still gets an answer",
        body: "EMENDA falls back to a route that does not need the permission you refused.",
      },
      {
        title: "Reversible",
        body: "Withdraw a permission whenever you like. Your account and history stay intact.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Still need a person?",
    body: "Some situations need judgement, authority, or simply someone to talk to.",
    channels: [
      {
        title: "Ask EMENDA first",
        body: "Fastest for anything with a documented answer — available in all three languages, at any hour.",
        action: "Open EMENDA",
      },
      {
        title: "Contact support",
        body: "For account problems, or when guidance did not match what you found in practice.",
        action: "Contact support",
      },
      {
        title: "Organizations",
        body: "If you support foreign workers and want to see where EMENDA fits, we would like to hear about your team.",
        action: "For organizations",
      },
    ],
  },
};

const JA: HelpCopy = {
  hero: {
    eyebrow: "ヘルプセンター",
    title: "何かお困りですか？",
    body: "下の回答を検索するか、必要なトピックへ直接どうぞ。",
    searchLabel: "ヘルプを検索",
    searchPlaceholder: "質問を検索…",
  },
  topics: {
    eyebrow: "カテゴリ",
    title: "トピックから探す。",
    body: "6つの分野で、よくいただく質問のほとんどをカバーしています。",
  },
  faq: {
    eyebrow: "よくある質問",
    title: "実際に寄せられる質問。",
    body: "答えは短く。そこから次の疑問が出てきたら、EMENDAが引き継ぎます。",
    resultsLabel: "件の該当",
    noResultsTitle: "該当する回答が見つかりませんでした。",
    noResultsBody:
      "短い言葉でお試しください。もしくはEMENDAに直接お尋ねください。このページにない質問にも答えられます。",
    clearSearch: "検索をクリア",
    groups: [
      {
        id: "getting-started",
        title: "はじめに",
        summary: "最初の会話と、そこで起きること。",
        items: [
          {
            q: "EMENDAとは何ですか？",
            a: "日本での暮らしと仕事を支えるサポートです。自分の言語で質問すると、状況を説明し、次にすべきこと——どこへ行き、何を持ち、いつまでに——を教えてくれます。",
          },
          {
            q: "始める前に準備は必要ですか？",
            a: "いいえ。気になっていることから始めてください。お住まいの市区町村など、答えが変わる情報だけ、必要なときにお尋ねします。",
          },
          {
            q: "すでに日本にいる人向けですか？",
            a: "いいえ。来日前でも役立ちます。ビザに必要なもの、持って行くもの、最初の数週間に何が求められるかを知ることができます。",
          },
        ],
      },
      {
        id: "using-assistant",
        title: "アシスタントの使い方",
        summary: "質問する、話す、書類を見せる。",
        items: [
          {
            q: "入力せずに音声で聞けますか？",
            a: "はい。長押しで話すと、送信前に文字起こしが表示されるので、その場で直せます。",
          },
          {
            q: "わからない書類を見せられますか？",
            a: "はい。会話の中で共有すると、何が書かれていて、何を求められていて、どこが大事かを説明します。",
          },
          {
            q: "前回の内容を覚えていますか？",
            a: "はい。毎回状況を説明し直す必要はありません。何が考慮されているかは確認でき、使わないように指定することもできます。",
          },
        ],
      },
      {
        id: "account",
        title: "アカウント",
        summary: "ログインとアカウントの管理。",
        items: [
          {
            q: "試すのにアカウントは必要ですか？",
            a: "デモはアカウントなしでご覧いただけます。アカウントがあると、会話のあいだで文脈が保たれ、その後の確認まで続けられます。",
          },
          {
            q: "複数の端末で使えますか？",
            a: "はい。どの端末でもログインすれば、会話は続きから再開できます。",
          },
        ],
      },
      {
        id: "languages",
        title: "言語",
        summary: "対応言語と、切り替えの仕組み。",
        items: [
          {
            q: "どの言語に対応していますか？",
            a: "English・日本語・Bahasa Indonesia。アシスタントだけでなく、プロダクト全体で対応しています。",
          },
          {
            q: "会話の途中で言語を変えたらどうなりますか？",
            a: "何も失われません。会話はそのままの場所で、選んだ言語のまま続きます。",
          },
        ],
      },
      {
        id: "privacy-permissions",
        title: "プライバシーと許可",
        summary: "EMENDAが使えるもの、そして確認するタイミング。",
        items: [
          {
            q: "どんな許可が必要になりますか？",
            a: "位置情報、通話、メール、メッセージ、カレンダー、連絡先です。それぞれ別々に、実際に使う場面で、理由を添えてお尋ねします。",
          },
          {
            q: "断ったらどうなりますか？",
            a: "答えは受け取れます。その許可を使わない方法に切り替えます。たとえば位置情報の代わりに、どのあたりにいるかをお尋ねします。",
          },
          {
            q: "あとから変更できますか？",
            a: "はい。いつでも取り消せます。取り消しても、アカウントや履歴が消えることはありません。",
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "うまくいかないとき",
        summary: "案内どおりにならなかった場合に。",
        items: [
          {
            q: "窓口で言われたことが案内と違いました。",
            a: "言われた内容をEMENDAに伝えてください。同じ答えを繰り返すのではなく、新しい情報をもとに考え直します。役所や要件は場所によって異なることがあります。",
          },
          {
            q: "ここに答えが見つかりません。",
            a: "EMENDAに直接お尋ねください。このページはよくある質問を扱っています。個別の事情は、アシスタントの得意分野です。",
          },
        ],
      },
    ],
  },
  privacy: {
    eyebrow: "プライバシーと許可",
    title: "何を使うかは、あなたが決めます。",
    body: "許可は、必要になったその場面で、ひとつずつ、理由を添えてお尋ねします。",
    points: [
      {
        title: "勝手に使いません",
        body: "許可が必要なものは、あなたが許可するまで使われません。",
      },
      {
        title: "ひとつずつ",
        body: "許可は個別です。ひとつ許可しても、ほかが許可されることはありません。",
      },
      {
        title: "断っても答えは届きます",
        body: "その許可を必要としない方法に切り替えて案内します。",
      },
      {
        title: "取り消せます",
        body: "いつでも取り消せます。アカウントも履歴もそのままです。",
      },
    ],
  },
  contact: {
    eyebrow: "お問い合わせ",
    title: "人に相談したいときは。",
    body: "判断や権限が要る場面、ただ誰かと話したい場面もあります。",
    channels: [
      {
        title: "まずEMENDAに",
        body: "答えのある事柄はいちばん早く解決します。3言語対応、時間を問わず。",
        action: "EMENDAを開く",
      },
      {
        title: "サポートに連絡",
        body: "アカウントの問題や、案内と実際が違っていた場合に。",
        action: "サポートに連絡",
      },
      {
        title: "法人の方",
        body: "外国人材を支える立場で導入をご検討でしたら、チームのことをお聞かせください。",
        action: "法人の方へ",
      },
    ],
  },
};

const ID: HelpCopy = {
  hero: {
    eyebrow: "Pusat bantuan",
    title: "Ada yang bisa kami bantu?",
    body: "Cari jawabannya di bawah, atau langsung menuju topik yang kamu butuhkan.",
    searchLabel: "Cari artikel bantuan",
    searchPlaceholder: "Cari pertanyaan…",
  },
  topics: {
    eyebrow: "Jelajahi",
    title: "Mulai dari sebuah topik.",
    body: "Enam area mencakup hampir semua yang ditanyakan orang kepada kami.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Pertanyaan yang benar-benar ditanyakan.",
    body: "Jawaban singkat. Kalau satu jawaban memunculkan pertanyaan baru, EMENDA bisa melanjutkannya.",
    resultsLabel: "jawaban cocok",
    noResultsTitle: "Tidak ada jawaban yang cocok.",
    noResultsBody:
      "Coba kata yang lebih pendek, atau tanya langsung ke EMENDA — ia bisa menjawab hal yang tidak tercakup di halaman ini.",
    clearSearch: "Hapus pencarian",
    groups: [
      {
        id: "getting-started",
        title: "Memulai",
        summary: "Percakapan pertamamu, dan apa yang bisa diharapkan.",
        items: [
          {
            q: "Apa itu EMENDA?",
            a: "EMENDA adalah platform pendukung untuk hidup dan bekerja di Jepang. Kamu bertanya dalam bahasamu sendiri, lalu ia menjelaskan situasinya dan memberi tahu langkah berikutnya — ke mana pergi, apa yang dibawa, dan kapan batasnya.",
          },
          {
            q: "Perlu menyiapkan sesuatu sebelum mulai?",
            a: "Tidak. Mulai saja dengan pertanyaan yang ada di kepalamu. EMENDA akan menanyakan hal lain, misalnya kota tempat tinggalmu, hanya kalau itu mengubah jawabannya.",
          },
          {
            q: "Apakah EMENDA hanya untuk yang sudah di Jepang?",
            a: "Tidak. Sama bergunanya sebelum kamu tiba — memahami syarat visa, apa yang perlu dibawa, dan apa yang menanti di minggu-minggu pertama.",
          },
        ],
      },
      {
        id: "using-assistant",
        title: "Memakai EMENDA Assistant",
        summary: "Bertanya, bicara, dan membagikan dokumen.",
        items: [
          {
            q: "Bisakah bertanya lewat suara?",
            a: "Bisa. Tekan untuk bicara, dan EMENDA menampilkan transkripnya sebelum apa pun terkirim, jadi kamu bisa memperbaikinya dulu.",
          },
          {
            q: "Bisakah menunjukkan dokumen yang tidak saya pahami?",
            a: "Bisa. Bagikan dokumennya dalam percakapan, dan EMENDA menjelaskan isinya, apa yang diminta darimu, dan bagian mana yang penting.",
          },
          {
            q: "Apakah ia mengingat percakapan sebelumnya?",
            a: "Ya, supaya kamu tidak perlu menjelaskan situasimu lagi. Kamu bisa melihat apa saja yang dipakai, dan meminta EMENDA mengabaikannya.",
          },
        ],
      },
      {
        id: "account",
        title: "Akun",
        summary: "Masuk dan mengelola akunmu.",
        items: [
          {
            q: "Perlu akun untuk mencoba EMENDA?",
            a: "Kamu bisa melihat demonya tanpa akun. Akun diperlukan agar EMENDA menyimpan konteksmu antar percakapan dan menindaklanjuti apa yang sedang kamu kerjakan.",
          },
          {
            q: "Bisa dipakai di lebih dari satu perangkat?",
            a: "Bisa. Masuk di perangkat mana pun dan percakapanmu berlanjut dari titik terakhir.",
          },
        ],
      },
      {
        id: "languages",
        title: "Bahasa",
        summary: "Bahasa yang didukung, dan cara berpindahnya.",
        items: [
          {
            q: "Bahasa apa saja yang didukung EMENDA?",
            a: "English, 日本語, dan Bahasa Indonesia — di seluruh produk, bukan hanya di asistennya.",
          },
          {
            q: "Apa yang terjadi kalau saya ganti bahasa di tengah percakapan?",
            a: "Tidak ada yang hilang. Percakapan tetap di tempatnya dan berlanjut dalam bahasa yang baru kamu pilih.",
          },
        ],
      },
      {
        id: "privacy-permissions",
        title: "Privasi & izin",
        summary: "Apa yang bisa diakses EMENDA, dan kapan ia bertanya.",
        items: [
          {
            q: "Untuk apa saja EMENDA meminta izin?",
            a: "Lokasi, panggilan, email, pesan, kalender, dan kontak. Masing-masing diminta terpisah, tepat saat akan dipakai, dan dijelaskan sebelum kamu memutuskan.",
          },
          {
            q: "Bagaimana kalau saya menolak?",
            a: "Kamu tetap mendapat jawaban. EMENDA beralih ke cara yang tidak membutuhkan izin itu — misalnya menanyakan kamu ada di daerah mana alih-alih memakai lokasimu.",
          },
          {
            q: "Bisa berubah pikiran nanti?",
            a: "Bisa. Izin dapat ditarik kapan saja, dan menarik satu izin tidak pernah menghapus akun atau riwayatmu.",
          },
        ],
      },
      {
        id: "troubleshooting",
        title: "Kalau ada masalah",
        summary: "Ketika sesuatu tidak berjalan seperti dijelaskan.",
        items: [
          {
            q: "Panduannya tidak sesuai dengan yang terjadi di loket.",
            a: "Ceritakan apa yang dikatakan petugas. EMENDA akan bekerja dari informasi baru itu, bukan mengulang jawaban sebelumnya — kantor dan persyaratan memang bisa berbeda.",
          },
          {
            q: "Saya tidak menemukan jawabannya di sini.",
            a: "Tanya langsung ke EMENDA. Halaman ini mencakup pertanyaan umum; asistennya dibuat untuk hal yang khusus bagimu.",
          },
        ],
      },
    ],
  },
  privacy: {
    eyebrow: "Privasi & izin",
    title: "Kamu yang menentukan apa yang boleh dipakai EMENDA.",
    body: "Izin diminta tepat saat dibutuhkan, satu per satu, dengan alasannya.",
    points: [
      {
        title: "Ditanyakan, bukan diasumsikan",
        body: "Apa pun yang butuh izinmu tidak dipakai sebelum kamu memberikannya.",
      },
      {
        title: "Satu permintaan pada satu waktu",
        body: "Setiap izin terpisah. Mengizinkan satu tidak berarti mengizinkan yang lain.",
      },
      {
        title: "Menolak tetap dapat jawaban",
        body: "EMENDA beralih ke jalur yang tidak membutuhkan izin yang kamu tolak.",
      },
      {
        title: "Bisa dibatalkan",
        body: "Tarik izin kapan pun kamu mau. Akun dan riwayatmu tetap utuh.",
      },
    ],
  },
  contact: {
    eyebrow: "Kontak",
    title: "Masih butuh bicara dengan orang?",
    body: "Sebagian situasi butuh pertimbangan, wewenang, atau sekadar teman bicara.",
    channels: [
      {
        title: "Tanya EMENDA dulu",
        body: "Paling cepat untuk apa pun yang jawabannya sudah terdokumentasi — tersedia dalam tiga bahasa, kapan saja.",
        action: "Buka EMENDA",
      },
      {
        title: "Hubungi dukungan",
        body: "Untuk masalah akun, atau ketika panduan tidak sesuai dengan kenyataan di lapangan.",
        action: "Hubungi dukungan",
      },
      {
        title: "Organisasi",
        body: "Kalau kamu mendampingi pekerja asing dan ingin tahu di mana EMENDA cocok masuk, ceritakan soal timmu.",
        action: "Untuk organisasi",
      },
    ],
  },
};

export const HELP_COPY = defineSectionCopy<HelpCopy>({ en: EN, ja: JA, id: ID });
