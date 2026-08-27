import { defineSectionCopy } from "@/i18n/copy";

/** Copy for /features — the capability page. Five capabilities get a product
 *  still each; the remaining four are catalogued compactly, because the
 *  homepage already tells their story and this page only has to be complete. */
export interface FeaturesCopy {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
  };
  detailed: {
    eyebrow: string;
    title: string;
    body: string;
    items: { title: string; body: string; note: string }[];
  };
  compact: {
    eyebrow: string;
    title: string;
    body: string;
    items: { title: string; body: string }[];
  };
  cta: { title: string; body: string };
}

const EN: FeaturesCopy = {
  hero: {
    eyebrow: "Features",
    title: "Everything you need to move forward with confidence.",
    body: "Nine capabilities, all pointed at the same thing: turning a question you cannot answer into a step you can take.",
    primaryCta: "Try EMENDA",
    secondaryCta: "See how it works",
  },
  detailed: {
    eyebrow: "The core",
    title: "Five things you will use every time.",
    body: "Each of these is a real part of the product, shown as it appears.",
    items: [
      {
        title: "EMENDA Assistant",
        body: "Conversational assistance for daily needs. Ask about a document, a procedure, a place, or a rule — and get an answer written for your situation rather than a page of general information.",
        note: "Ask in text, voice, or by sharing a document",
      },
      {
        title: "Multilingual experience",
        body: "Work in English, 日本語, or Bahasa Indonesia. Switching language does not reset the conversation — the thread stays exactly where it was, in the language you just chose.",
        note: "Switch anytime, mid-conversation",
      },
      {
        title: "Voice conversation",
        body: "Speak when typing is slow or awkward. EMENDA shows the transcript first, so you can correct it before anything is sent.",
        note: "Review before you send",
      },
      {
        title: "Action cards",
        body: "Answers end in something you can act on: a location with its opening hours, a checklist of what to bring, a task with its deadline, or the contact who can help.",
        note: "Location · checklist · task · contact",
      },
      {
        title: "Context & memory",
        body: "What you have already told EMENDA shapes what comes next, so you do not repeat your situation every time. You can see what is being taken into account.",
        note: "You can see what it is using",
      },
    ],
  },
  compact: {
    eyebrow: "Also included",
    title: "The rest of what EMENDA does.",
    body: "Quieter capabilities that matter most at the moment you need them.",
    items: [
      {
        title: "Smart guidance",
        body: "Every explanation is paired with the step that follows from it, not left as information.",
      },
      {
        title: "Outcome follow-up",
        body: "Resolved, not yet, or still stuck — EMENDA asks, and the next recommendation follows your answer.",
      },
      {
        title: "Permission control",
        body: "Location, calls, email, messages, calendar and contacts are used only when you allow it, one request at a time.",
      },
      {
        title: "Sources",
        body: "When an answer rests on a specific source, EMENDA shows it so you can check it yourself.",
      },
    ],
  },
  cta: {
    title: "See it working on your own question.",
    body: "The fastest way to understand EMENDA is to ask it something you actually need.",
  },
};

const JA: FeaturesCopy = {
  hero: {
    eyebrow: "機能",
    title: "安心して次へ進むために必要なもの、すべて。",
    body: "9つの機能はすべて同じ目的に向いています。答えられない質問を、実際に踏み出せる一歩に変えること。",
    primaryCta: "EMENDAを試す",
    secondaryCta: "使い方を見る",
  },
  detailed: {
    eyebrow: "中心となる機能",
    title: "毎回使う、5つの機能。",
    body: "どれも実際のプロダクトの一部で、そのままの姿でお見せします。",
    items: [
      {
        title: "EMENDAアシスタント",
        body: "日々の困りごとに、会話で応えます。書類、手続き、場所、ルール。一般的な説明ページではなく、あなたの状況に合わせた答えが返ってきます。",
        note: "テキスト・音声・書類の共有で質問できます",
      },
      {
        title: "多言語対応",
        body: "English・日本語・Bahasa Indonesiaで使えます。言語を切り替えても会話はリセットされません。選んだ言語のまま、同じ場所から続きます。",
        note: "会話の途中でもいつでも切り替え",
      },
      {
        title: "音声での会話",
        body: "打つのが遅いとき、打ちにくいときは話してください。EMENDAはまず文字起こしを表示するので、送る前に直せます。",
        note: "送信前に確認できます",
      },
      {
        title: "アクションカード",
        body: "答えは、実行できるかたちで終わります。受付時間つきの場所、持ち物のチェックリスト、期限つきのタスク、相談できる連絡先。",
        note: "場所・チェックリスト・タスク・連絡先",
      },
      {
        title: "文脈と記憶",
        body: "これまで伝えたことが次の案内に反映されるので、毎回状況を説明し直す必要はありません。何が考慮されているかも確認できます。",
        note: "使われている情報を確認できます",
      },
    ],
  },
  compact: {
    eyebrow: "そのほかの機能",
    title: "EMENDAができること、その他。",
    body: "目立ちませんが、必要な瞬間にいちばん効いてくる機能です。",
    items: [
      {
        title: "実用的な案内",
        body: "説明には必ず、そこから続く一歩が添えられます。情報のままでは終わりません。",
      },
      {
        title: "その後の確認",
        body: "完了・まだ・困っている。EMENDAが尋ね、次の提案はその答えに続きます。",
      },
      {
        title: "許可のコントロール",
        body: "位置情報、通話、メール、メッセージ、カレンダー、連絡先は、あなたが許可したときだけ、その都度使われます。",
      },
      {
        title: "出典",
        body: "特定の情報にもとづく答えには出典を表示します。ご自身で確認できます。",
      },
    ],
  },
  cta: {
    title: "あなた自身の質問で、試してみてください。",
    body: "EMENDAをいちばん早く理解する方法は、本当に必要なことを聞いてみることです。",
  },
};

const ID: FeaturesCopy = {
  hero: {
    eyebrow: "Fitur",
    title: "Semua yang kamu butuhkan untuk melangkah dengan yakin.",
    body: "Sembilan kemampuan, semuanya mengarah ke hal yang sama: mengubah pertanyaan yang tidak bisa kamu jawab menjadi langkah yang bisa kamu ambil.",
    primaryCta: "Coba EMENDA",
    secondaryCta: "Lihat cara kerjanya",
  },
  detailed: {
    eyebrow: "Yang utama",
    title: "Lima hal yang akan kamu pakai setiap kali.",
    body: "Semuanya bagian nyata dari produk, ditampilkan apa adanya.",
    items: [
      {
        title: "EMENDA Assistant",
        body: "Bantuan percakapan untuk kebutuhan harian. Tanyakan soal dokumen, prosedur, tempat, atau aturan — dan dapatkan jawaban yang ditulis untuk situasimu, bukan halaman informasi umum.",
        note: "Tanya lewat teks, suara, atau dengan membagikan dokumen",
      },
      {
        title: "Pengalaman multibahasa",
        body: "Gunakan English, 日本語, atau Bahasa Indonesia. Berganti bahasa tidak mengulang percakapan — utasnya tetap di tempatnya, dalam bahasa yang baru kamu pilih.",
        note: "Ganti kapan saja, bahkan di tengah percakapan",
      },
      {
        title: "Percakapan suara",
        body: "Bicara saat mengetik terasa lambat atau merepotkan. EMENDA menampilkan transkripnya dulu, jadi kamu bisa memperbaiki sebelum apa pun terkirim.",
        note: "Periksa dulu sebelum dikirim",
      },
      {
        title: "Kartu tindakan",
        body: "Jawaban berakhir pada sesuatu yang bisa dikerjakan: lokasi beserta jam bukanya, daftar dokumen yang perlu dibawa, tugas dengan tenggatnya, atau kontak yang bisa membantu.",
        note: "Lokasi · daftar · tugas · kontak",
      },
      {
        title: "Konteks & ingatan",
        body: "Apa yang sudah kamu sampaikan ikut membentuk jawaban berikutnya, jadi kamu tidak perlu menjelaskan situasimu berulang kali. Kamu juga bisa melihat apa saja yang dipakai.",
        note: "Kamu bisa melihat apa yang dipakai",
      },
    ],
  },
  compact: {
    eyebrow: "Termasuk juga",
    title: "Sisa dari yang EMENDA lakukan.",
    body: "Kemampuan yang lebih senyap, tapi paling terasa saat kamu membutuhkannya.",
    items: [
      {
        title: "Panduan yang tepat guna",
        body: "Setiap penjelasan disertai langkah yang mengikutinya, bukan dibiarkan sebagai informasi saja.",
      },
      {
        title: "Tindak lanjut hasil",
        body: "Selesai, belum, atau masih terhambat — EMENDA menanyakannya, dan rekomendasi berikutnya mengikuti jawabanmu.",
      },
      {
        title: "Kendali izin",
        body: "Lokasi, panggilan, email, pesan, kalender, dan kontak hanya dipakai ketika kamu mengizinkan, satu permintaan pada satu waktu.",
      },
      {
        title: "Sumber",
        body: "Ketika sebuah jawaban bersandar pada sumber tertentu, EMENDA menampilkannya supaya kamu bisa memeriksanya sendiri.",
      },
    ],
  },
  cta: {
    title: "Lihat cara kerjanya lewat pertanyaanmu sendiri.",
    body: "Cara tercepat memahami EMENDA adalah menanyakan sesuatu yang benar-benar kamu butuhkan.",
  },
};

export const FEATURES_COPY = defineSectionCopy<FeaturesCopy>({
  en: EN,
  ja: JA,
  id: ID,
});
