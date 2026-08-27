import { defineSectionCopy } from "@/i18n/copy";

/** Copy for /assistant — the one page where the AI is the subject.
 *
 *  Even here the framing is "part of EMENDA": the page opens with the platform
 *  badge and closes by handing the visitor back to the platform. */
export interface AssistantPageCopy {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  flow: {
    eyebrow: string;
    title: string;
    body: string;
    steps: { title: string; body: string }[];
  };
  detail: {
    eyebrow: string;
    title: string;
    body: string;
    items: { title: string; body: string; note: string }[];
  };
  more: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  belonging: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  cta: { title: string; body: string };
}

const EN: AssistantPageCopy = {
  hero: {
    eyebrow: "Part of the EMENDA platform",
    title: "Guidance when you need it.",
    body: "Ask EMENDA using text or voice and get practical multilingual guidance based on your situation — then carry the answer into the rest of the platform as a task, a location, or a follow-up.",
    primaryCta: "Try EMENDA Assistant",
    secondaryCta: "See the whole platform",
  },
  flow: {
    eyebrow: "How a question moves",
    title: "Discover, understand, act, follow up.",
    body: "The assistant is built to end somewhere, not to keep talking.",
    steps: [
      {
        title: "Discover",
        body: "Ask in your own words, by text or voice, or show a document you cannot read.",
      },
      {
        title: "Understand",
        body: "Get the explanation in plain language, with the parts that actually matter to you called out.",
      },
      {
        title: "Act",
        body: "Receive the step that follows — a place, a checklist, a task with its deadline, or the right contact.",
      },
      {
        title: "Follow up",
        body: "Later, EMENDA asks how it went, and the next suggestion follows your answer.",
      },
    ],
  },
  detail: {
    eyebrow: "What it can do",
    title: "Four capabilities you will use every time.",
    body: "Shown as they appear in the product.",
    items: [
      {
        title: "Text and voice",
        body: "Type when that is easiest, speak when it is not. Voice shows you the transcript first, so nothing is sent before you have checked it.",
        note: "Review before you send",
      },
      {
        title: "Multilingual, end to end",
        body: "English, 日本語 and Bahasa Indonesia — and switching language mid-conversation does not reset the thread or lose your place.",
        note: "Switch anytime, mid-conversation",
      },
      {
        title: "Action cards",
        body: "Answers arrive with something attached: a location with opening hours, a checklist of documents, a task with its deadline, or a contact.",
        note: "Location · checklist · task · contact",
      },
      {
        title: "Context from your journey",
        body: "The assistant works from what the rest of EMENDA already knows — your city, your situation, what you were in the middle of — so you are not re-explaining yourself.",
        note: "You can see what it is using",
      },
    ],
  },
  more: {
    eyebrow: "Also included",
    title: "The quieter parts.",
    items: [
      {
        title: "Sources",
        body: "When an answer rests on a specific source, it is shown so you can check it yourself.",
      },
      {
        title: "Permission control",
        body: "Location, calls, email, messages, calendar and contacts are used only when you allow it, one request at a time.",
      },
      {
        title: "Location guidance",
        body: "Directions to the counter you actually need, with the hours it keeps.",
      },
      {
        title: "Outcome follow-up",
        body: "Resolved, not yet, or still stuck — and the next recommendation follows from that.",
      },
    ],
  },
  belonging: {
    eyebrow: "Where it sits",
    title: "The assistant is one part of EMENDA, not the whole of it.",
    body: "It is useful because the rest of the platform is there: an identity to know you, work and reports to give the question a context, and follow-up to carry the answer to an outcome. On its own it would just be a chat window.",
    cta: "Explore the EMENDA platform",
  },
  cta: {
    title: "Ask it something you actually need.",
    body: "That is the fastest way to see whether any of this holds up.",
  },
};

const JA: AssistantPageCopy = {
  hero: {
    eyebrow: "EMENDAプラットフォームの一部",
    title: "必要なときに、必要な案内を。",
    body: "テキストでも音声でも、あなたの状況に合わせた多言語の案内が届きます。そしてその答えは、タスクや場所やフォローアップとして、プラットフォームの中へ持ち込めます。",
    primaryCta: "アシスタントを試す",
    secondaryCta: "プラットフォーム全体を見る",
  },
  flow: {
    eyebrow: "質問がたどる道",
    title: "見つける、わかる、動く、確認する。",
    body: "話し続けるためではなく、どこかにたどり着くためのアシスタントです。",
    steps: [
      {
        title: "見つける",
        body: "自分の言葉で、テキストでも音声でも。読めない書類を見せることもできます。",
      },
      {
        title: "わかる",
        body: "やさしい言葉での説明と、あなたにとって本当に大事な部分を示します。",
      },
      {
        title: "動く",
        body: "続く一歩を受け取ります。場所、持ち物リスト、期限つきのタスク、適切な連絡先。",
      },
      {
        title: "確認する",
        body: "あとからその後を尋ね、次の提案はあなたの答えに続きます。",
      },
    ],
  },
  detail: {
    eyebrow: "できること",
    title: "毎回使う、4つの機能。",
    body: "プロダクトでの見え方そのままに。",
    items: [
      {
        title: "テキストと音声",
        body: "打ちやすいときは打つ、そうでないときは話す。音声はまず文字起こしを表示するので、確認してから送れます。",
        note: "送信前に確認できます",
      },
      {
        title: "最初から最後まで多言語",
        body: "English・日本語・Bahasa Indonesia。会話の途中で切り替えても、スレッドはリセットされず、場所も失われません。",
        note: "会話の途中でもいつでも切り替え",
      },
      {
        title: "アクションカード",
        body: "答えには何かがついてきます。受付時間つきの場所、書類のチェックリスト、期限つきのタスク、連絡先。",
        note: "場所・チェックリスト・タスク・連絡先",
      },
      {
        title: "歩みからの文脈",
        body: "EMENDAの他の部分がすでに知っていること——お住まい、状況、途中だったこと——をふまえて答えるので、説明し直す必要はありません。",
        note: "使われている情報を確認できます",
      },
    ],
  },
  more: {
    eyebrow: "そのほか",
    title: "目立たない部分。",
    items: [
      {
        title: "出典",
        body: "特定の情報にもとづく答えには出典を表示します。ご自身で確認できます。",
      },
      {
        title: "許可のコントロール",
        body: "位置情報、通話、メール、メッセージ、カレンダー、連絡先は、許可したときだけ、その都度。",
      },
      {
        title: "場所の案内",
        body: "本当に必要な窓口までの経路を、受付時間とともに。",
      },
      {
        title: "その後の確認",
        body: "完了・まだ・困っている。次の提案はその答えから続きます。",
      },
    ],
  },
  belonging: {
    eyebrow: "位置づけ",
    title: "アシスタントはEMENDAの一部であって、すべてではありません。",
    body: "役に立つのは、まわりにプラットフォームがあるからです。あなたを知っているID、質問に文脈を与える仕事と日報、答えを結果まで運ぶフォローアップ。単体なら、ただのチャット画面です。",
    cta: "EMENDAプラットフォームを見る",
  },
  cta: {
    title: "本当に必要なことを、聞いてみてください。",
    body: "ここに書いたことが本当かどうかを確かめる、いちばん早い方法です。",
  },
};

const ID_COPY: AssistantPageCopy = {
  hero: {
    eyebrow: "Bagian dari platform EMENDA",
    title: "Panduan saat kamu membutuhkannya.",
    body: "Tanya EMENDA lewat teks atau suara dan dapatkan panduan multibahasa yang praktis sesuai situasimu — lalu bawa jawabannya ke bagian lain platform sebagai tugas, lokasi, atau tindak lanjut.",
    primaryCta: "Coba EMENDA Assistant",
    secondaryCta: "Lihat seluruh platform",
  },
  flow: {
    eyebrow: "Perjalanan sebuah pertanyaan",
    title: "Temukan, pahami, lakukan, tindak lanjuti.",
    body: "Asistennya dibuat untuk sampai ke suatu tempat, bukan untuk terus mengobrol.",
    steps: [
      {
        title: "Temukan",
        body: "Bertanya dengan kata-katamu sendiri, lewat teks atau suara, atau tunjukkan dokumen yang tidak bisa kamu baca.",
      },
      {
        title: "Pahami",
        body: "Dapatkan penjelasan dalam bahasa sederhana, dengan bagian yang benar-benar penting bagimu ditandai.",
      },
      {
        title: "Lakukan",
        body: "Terima langkah yang mengikutinya — tempat, daftar periksa, tugas dengan tenggatnya, atau kontak yang tepat.",
      },
      {
        title: "Tindak lanjuti",
        body: "Beberapa waktu kemudian EMENDA menanyakan hasilnya, dan saran berikutnya mengikuti jawabanmu.",
      },
    ],
  },
  detail: {
    eyebrow: "Apa yang bisa dilakukan",
    title: "Empat kemampuan yang akan kamu pakai setiap kali.",
    body: "Ditampilkan seperti wujudnya di produk.",
    items: [
      {
        title: "Teks dan suara",
        body: "Ketik saat itu paling mudah, bicara saat tidak. Mode suara menampilkan transkripnya dulu, jadi tidak ada yang terkirim sebelum kamu memeriksanya.",
        note: "Periksa dulu sebelum dikirim",
      },
      {
        title: "Multibahasa dari ujung ke ujung",
        body: "English, 日本語, dan Bahasa Indonesia — dan berganti bahasa di tengah percakapan tidak mengulang utasnya atau menghilangkan posisimu.",
        note: "Ganti kapan saja, bahkan di tengah percakapan",
      },
      {
        title: "Kartu tindakan",
        body: "Jawaban datang dengan sesuatu yang menempel: lokasi beserta jam bukanya, daftar dokumen, tugas dengan tenggatnya, atau kontak.",
        note: "Lokasi · daftar · tugas · kontak",
      },
      {
        title: "Konteks dari perjalananmu",
        body: "Asistennya bekerja dari apa yang sudah diketahui bagian lain EMENDA — kotamu, situasimu, apa yang sedang kamu kerjakan — jadi kamu tidak menjelaskan ulang.",
        note: "Kamu bisa melihat apa yang dipakai",
      },
    ],
  },
  more: {
    eyebrow: "Termasuk juga",
    title: "Bagian yang lebih senyap.",
    items: [
      {
        title: "Sumber",
        body: "Ketika jawaban bersandar pada sumber tertentu, sumbernya ditampilkan supaya bisa kamu periksa sendiri.",
      },
      {
        title: "Kendali izin",
        body: "Lokasi, panggilan, email, pesan, kalender, dan kontak hanya dipakai saat kamu mengizinkan, satu per satu.",
      },
      {
        title: "Panduan lokasi",
        body: "Rute ke loket yang benar-benar kamu butuhkan, lengkap dengan jam bukanya.",
      },
      {
        title: "Tindak lanjut hasil",
        body: "Selesai, belum, atau masih terhambat — dan rekomendasi berikutnya mengikuti dari situ.",
      },
    ],
  },
  belonging: {
    eyebrow: "Posisinya",
    title: "Asistennya satu bagian dari EMENDA, bukan keseluruhannya.",
    body: "Ia berguna justru karena sisa platformnya ada: identitas yang mengenalmu, kerja dan laporan yang memberi konteks pada pertanyaan, dan tindak lanjut yang membawa jawaban sampai ke hasil. Berdiri sendiri, ia hanya jendela chat.",
    cta: "Jelajahi platform EMENDA",
  },
  cta: {
    title: "Tanyakan sesuatu yang benar-benar kamu butuhkan.",
    body: "Itu cara tercepat melihat apakah semua ini memang berlaku.",
  },
};

export const ASSISTANT_PAGE_COPY = defineSectionCopy<AssistantPageCopy>({
  en: EN,
  ja: JA,
  id: ID_COPY,
});
