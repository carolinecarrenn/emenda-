import { defineSectionCopy } from "@/i18n/copy";

/** Copy for /about — why EMENDA exists. Human-centric and short; it makes no
 *  product claims that the other pages have not already earned. */
export interface AboutCopy {
  hero: { eyebrow: string; title: string; body: string };
  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  mission: {
    eyebrow: string;
    title: string;
    body: string;
  };
  beliefs: {
    eyebrow: string;
    title: string;
    items: { title: string; body: string }[];
  };
  cta: { title: string; body: string };
}

const EN: AboutCopy = {
  hero: {
    eyebrow: "About EMENDA",
    title: "Making life in Japan easier to navigate.",
    body: "We build the thing we wished existed on the first week — something that answers in your language and tells you what to do next.",
  },
  story: {
    eyebrow: "Why we exist",
    title: "The hard part is rarely the task.",
    paragraphs: [
      "Moving to or living in another country means dealing with unfamiliar systems, language barriers, documents, and procedures — usually all at once, and usually while you are also starting a job, finding a home, and learning where to buy groceries.",
      "Most of the information you need already exists. It is written down somewhere official, and it is correct. But it is written for someone who already knows how the system works, in a language you may still be learning, and it stops at explaining.",
      "EMENDA exists to make those moments easier to understand and easier to act on. Not by knowing more than the official sources, but by meeting you where you are: in your language, with your situation in mind, and with the next step attached.",
    ],
  },
  mission: {
    eyebrow: "Our mission",
    title: "Help people access practical support, regardless of language or background.",
    body: "Everyone dealing with an unfamiliar system deserves to understand what is being asked of them, and to know what to do about it.",
  },
  beliefs: {
    eyebrow: "What we believe",
    title: "Four things we design around.",
    items: [
      {
        title: "Information should be understandable",
        body: "If an answer needs a second explanation, it was not an answer yet.",
      },
      {
        title: "Support should be actionable",
        body: "Knowing what a document says is only half of it. Knowing what to do about it is the rest.",
      },
      {
        title: "Users should remain in control",
        body: "You decide what EMENDA can use and when. Saying no should never cost you the answer.",
      },
      {
        title: "Technology should reduce complexity",
        body: "Not add another system to learn, another account to manage, another place to check.",
      },
    ],
  },
  cta: {
    title: "Try it on something you actually need.",
    body: "That is the honest test of whether any of this is true.",
  },
};

const JA: AboutCopy = {
  hero: {
    eyebrow: "EMENDAについて",
    title: "日本での暮らしを、進みやすく。",
    body: "最初の1週間に「あったらよかった」と思うものをつくっています。あなたの言語で答え、次にすることを教えてくれるもの。",
  },
  story: {
    eyebrow: "私たちがいる理由",
    title: "むずかしいのは、手続きそのものではありません。",
    paragraphs: [
      "他の国に移り住むということは、慣れない制度、言葉の壁、書類、手続きと向き合うということです。しかもたいてい同時に、仕事を始め、住まいを探し、どこで食料品を買えばいいかを覚えながら。",
      "必要な情報の多くは、すでに存在しています。どこかの公式なページに書かれていて、内容も正しい。けれどそれは、制度をすでに知っている人に向けて、あなたがまだ学んでいる言語で書かれていて、説明したところで終わっています。",
      "EMENDAは、そういう場面を理解しやすく、動きやすくするためにあります。公式の情報より詳しいからではなく、あなたのいる場所に合わせるからです。あなたの言語で、あなたの状況をふまえて、次の一歩を添えて。",
    ],
  },
  mission: {
    eyebrow: "ミッション",
    title: "言語や背景にかかわらず、実際に役立つ支援に手が届くように。",
    body: "慣れない制度に向き合うすべての人に、何を求められているのかを理解し、それにどう対応すればいいかを知る権利があります。",
  },
  beliefs: {
    eyebrow: "大切にしていること",
    title: "設計の土台にある、4つの考え。",
    items: [
      {
        title: "情報は、わかるものであるべき",
        body: "答えにもう一段の説明が必要なら、それはまだ答えになっていません。",
      },
      {
        title: "支援は、行動につながるべき",
        body: "書類の意味がわかるのは半分。それにどう対応するかまでが、残りの半分です。",
      },
      {
        title: "決めるのは、いつも利用者",
        body: "EMENDAが何を使えるか、いつ使えるかを決めるのはあなたです。断っても、答えを失わないこと。",
      },
      {
        title: "技術は、複雑さを減らすためにある",
        body: "覚える仕組みや、管理するアカウントや、確認する場所を、増やすためではありません。",
      },
    ],
  },
  cta: {
    title: "本当に必要なことで、試してみてください。",
    body: "ここに書いたことが本当かどうかを確かめる、いちばん正直な方法です。",
  },
};

const ID: AboutCopy = {
  hero: {
    eyebrow: "Tentang EMENDA",
    title: "Membuat hidup di Jepang lebih mudah dijalani.",
    body: "Kami membangun hal yang kami harap ada di minggu pertama — sesuatu yang menjawab dalam bahasamu dan memberi tahu apa langkah berikutnya.",
  },
  story: {
    eyebrow: "Kenapa kami ada",
    title: "Yang sulit jarang urusannya itu sendiri.",
    paragraphs: [
      "Pindah ke atau tinggal di negara lain berarti berhadapan dengan sistem asing, hambatan bahasa, dokumen, dan prosedur — biasanya sekaligus, dan biasanya sambil memulai pekerjaan, mencari tempat tinggal, dan belajar di mana membeli bahan makanan.",
      "Sebagian besar informasi yang kamu butuhkan sudah ada. Tertulis di suatu tempat resmi, dan isinya benar. Tapi ditulis untuk orang yang sudah paham cara kerja sistemnya, dalam bahasa yang mungkin masih kamu pelajari, dan berhenti pada penjelasan.",
      "EMENDA ada untuk membuat momen-momen itu lebih mudah dipahami dan lebih mudah ditindaklanjuti. Bukan karena tahu lebih banyak dari sumber resmi, tapi karena menemuimu di tempatmu berada: dalam bahasamu, dengan situasimu dalam pertimbangan, dan dengan langkah berikutnya yang menyertainya.",
    ],
  },
  mission: {
    eyebrow: "Misi kami",
    title: "Membantu orang mengakses dukungan praktis, apa pun bahasa dan latar belakangnya.",
    body: "Setiap orang yang berhadapan dengan sistem asing berhak memahami apa yang diminta darinya, dan tahu apa yang harus dilakukan.",
  },
  beliefs: {
    eyebrow: "Yang kami yakini",
    title: "Empat hal yang menjadi dasar rancangan kami.",
    items: [
      {
        title: "Informasi harus bisa dipahami",
        body: "Kalau sebuah jawaban masih butuh penjelasan kedua, berarti itu belum jawaban.",
      },
      {
        title: "Dukungan harus bisa dijalankan",
        body: "Tahu isi dokumen baru separuhnya. Tahu apa yang harus dilakukan adalah sisanya.",
      },
      {
        title: "Kendali tetap pada pengguna",
        body: "Kamu yang menentukan apa yang boleh dipakai EMENDA dan kapan. Menolak tidak boleh berarti kehilangan jawaban.",
      },
      {
        title: "Teknologi harus mengurangi kerumitan",
        body: "Bukan menambah satu lagi sistem untuk dipelajari, akun untuk diurus, tempat untuk diperiksa.",
      },
    ],
  },
  cta: {
    title: "Coba dengan sesuatu yang benar-benar kamu butuhkan.",
    body: "Itu ujian paling jujur untuk semua yang tertulis di sini.",
  },
};

export const ABOUT_COPY = defineSectionCopy<AboutCopy>({
  en: EN,
  ja: JA,
  id: ID,
});
