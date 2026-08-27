import { defineSectionCopy } from "@/i18n/copy";

/** Section copy for Knowledge & Q&A (Figma WD-41..WD-46 / mobile W-41..W-46).
 *  EN strings are verbatim from the mocks; ID/JA are faithful translations.
 *  Article bodies, question text and answers are mock DATA and live in
 *  knowledgeMock.ts untranslated. */
export interface KnowledgeCopy {
  crumbHome: string;
  crumbKnowledge: string;
  crumbMyQuestions: string;
  updatedMeta: (date: string) => string;
  officialGuidance: string;
  topics: {
    visaResidence: string;
    japanPreparation: string;
    documentsIdentity: string;
    workEmployment: string;
    other: string;
  };
  searchCategory: {
    japanPreparation: string;
    residence: string;
    documents: string;
    visaResidence: string;
  };
  hub: {
    title: string;
    subtitle: string;
    loadingSubtitle: string;
    searchPlaceholder: string;
    askTitle: string;
    askBody: string;
    myQuestionsTitle: string;
    myQuestionsBody: string;
    popularGuidance: string;
    privacyFooter: string;
    offlineSubtitle: string;
    offlineBanner: string;
    cachedGuidance: string;
    cachedArticle: string;
  };
  search: {
    baseTitle: string;
    baseSubtitle: string;
    resultsTitle: string;
    resultsFor: (count: number, query: string) => string;
    searchButton: string;
    searchingSubtitle: string;
    tipTitle: string;
    tipBody: string;
    noResultsTitle: string;
    noResultsBody: string;
    noMatchTitle: string;
    noMatchSubtitle: string;
    offlineSubtitle: string;
    askEscape: string;
    offlineBanner: string;
    backToKnowledge: string;
  };
  article: {
    emendaGuidance: string;
    headings: {
      whatToDo: string;
      whatToPrepare: string;
      whatItMeans: string;
      whatToCheck: string;
      whenToAct: string;
      commonItems: string;
      beforeYouGo: string;
    };
    disclaimers: {
      localGovernment: string;
      immigration: string;
      timing: string;
      documentList: string;
    };
    railLabel: string;
    railBody: string;
    askQuestion: string;
    stillUnsure: string;
    offlineSubtitle: string;
    offlineBanner: string;
    cachedVersion: string;
    offlineDisclaimer: string;
    notFound: string;
  };
  ask: {
    title: string;
    subtitle: string;
    topicLabel: string;
    questionLabel: string;
    detailsLabel: string;
    submit: string;
    submitting: string;
    validationError: string;
    failedBanner: string;
    tryAgain: string;
    offlineBanner: string;
    privacyEyebrow: string;
    privacyTitle: string;
    privacyBody: string;
    privacyMobile: string;
    overlayTitle: string;
    overlayHelper: string;
    unsavedTitle: string;
    unsavedBody: string;
    keepEditing: string;
    discardChanges: string;
    submittedTitle: string;
    submittedSubtitle: string;
    submittedCardTitle: string;
    submittedCardBody: string;
    viewMyQuestions: string;
  };
  questions: {
    title: string;
    subtitle: string;
    loadingSubtitle: string;
    emptySubtitle: string;
    offlineSubtitle: string;
    waiting: string;
    answered: string;
    emptyTitle: string;
    emptyBody: string;
    askButton: string;
    offlineBanner: string;
    cachedStatus: (status: string) => string;
  };
  detail: {
    title: string;
    waitingSubtitle: string;
    answeredSubtitle: string;
    offlineSubtitle: string;
    yourQuestion: string;
    answerLabel: string;
    waitingMeta: (date: string, topic: string) => string;
    answeredMeta: (date: string, topic: string) => string;
    basedOn: (month: string) => string;
    viewRelated: string;
    askAnother: string;
    offlineBanner: string;
    cachedAnswer: string;
    backToMyQuestions: string;
    notFound: string;
  };
}

export const KNOWLEDGE_COPY = defineSectionCopy<KnowledgeCopy>({
  en: {
    crumbHome: "Headless home",
    crumbKnowledge: "Knowledge & Q&A",
    crumbMyQuestions: "My questions",
    updatedMeta: (date) => `Updated ${date}`,
    officialGuidance: "Official guidance",
    topics: {
      visaResidence: "Visa & residence",
      japanPreparation: "Japan preparation",
      documentsIdentity: "Documents & identity",
      workEmployment: "Work & employment",
      other: "Other",
    },
    searchCategory: {
      japanPreparation: "Japan preparation",
      residence: "Residence",
      documents: "Documents",
      visaResidence: "Visa & residence",
    },
    hub: {
      title: "Knowledge & Q&A",
      subtitle:
        "Find official guidance or ask a private question when you cannot find an answer.",
      loadingSubtitle: "Loading official guidance and your question status.",
      searchPlaceholder: "Search visa, residence, work, documents…",
      askTitle: "Ask a question",
      askBody: "Send a private question to the support/knowledge team.",
      myQuestionsTitle: "My questions",
      myQuestionsBody: "Check questions you already submitted.",
      popularGuidance: "POPULAR GUIDANCE",
      privacyFooter:
        "Questions are private. They are not posted to a public community.",
      offlineSubtitle: "Cached guidance stays available while you reconnect.",
      offlineBanner:
        "No internet connection. Search and new questions are unavailable.",
      cachedGuidance: "CACHED GUIDANCE",
      cachedArticle: "Cached article",
    },
    search: {
      baseTitle: "Search knowledge",
      baseSubtitle:
        "Search official worker guidance before sending a new question.",
      resultsTitle: "Search results",
      resultsFor: (count, query) =>
        `${count} result${count === 1 ? "" : "s"} for “${query}”.`,
      searchButton: "Search",
      searchingSubtitle: "Searching official guidance…",
      tipTitle: "Search official guidance first",
      tipBody:
        "Try keywords such as residence status, address registration, documents, or work.",
      noResultsTitle: "No results found",
      noResultsBody:
        "We could not find official guidance matching this search.",
      noMatchTitle: "No matching guidance",
      noMatchSubtitle: "Try another search or send a private question.",
      offlineSubtitle: "Search needs an internet connection.",
      askEscape: "Can’t find it? Ask a question",
      offlineBanner:
        "No internet connection. Cached articles remain available from Knowledge & Q&A.",
      backToKnowledge: "Back to Knowledge & Q&A",
    },
    article: {
      emendaGuidance: "EMENDA guidance",
      headings: {
        whatToDo: "What to do",
        whatToPrepare: "What to prepare",
        whatItMeans: "What it means",
        whatToCheck: "What to check",
        whenToAct: "When to act",
        commonItems: "Common items",
        beforeYouGo: "Before you go",
      },
      disclaimers: {
        localGovernment:
          "Use local government guidance for the final requirement. EMENDA does not replace official instructions.",
        immigration:
          "Use official immigration guidance for the final requirement. EMENDA does not replace official instructions.",
        timing:
          "Use local government guidance for the final timing and required documents. EMENDA does not replace official instructions.",
        documentList:
          "Use local government guidance for the final document list. EMENDA does not replace official instructions.",
      },
      railLabel: "OFFICIAL GUIDANCE",
      railBody: "Use current official guidance for final requirements.",
      askQuestion: "Ask a question",
      stillUnsure: "Still unsure? Ask a question",
      offlineSubtitle: "Cached official guidance",
      offlineBanner:
        "You are offline. This cached version may not include the latest update.",
      cachedVersion: "Cached version",
      offlineDisclaimer: "Use official local guidance when you are back online.",
      notFound: "Article not found",
    },
    ask: {
      title: "Ask a question",
      subtitle: "Send a private question to the support/knowledge team.",
      topicLabel: "TOPIC",
      questionLabel: "QUESTION",
      detailsLabel: "DETAILS · OPTIONAL",
      submit: "Submit question",
      submitting: "Submitting…",
      validationError: "Enter your question.",
      failedBanner:
        "Couldn’t submit your question. Your draft is still here.",
      tryAgain: "Try again",
      offlineBanner:
        "No internet connection. You can review your draft, but it cannot be submitted yet.",
      privacyEyebrow: "PRIVATE QUESTION",
      privacyTitle: "Your question stays private.",
      privacyBody:
        "It is not posted publicly. Do not include passwords or unrelated sensitive information.",
      privacyMobile:
        "Your question is private and is not posted publicly. Do not include passwords or unrelated sensitive information.",
      overlayTitle: "Question topic",
      overlayHelper: "Choose the topic that best matches your question.",
      unsavedTitle: "Discard this question?",
      unsavedBody: "Your unsaved question and details will be lost.",
      keepEditing: "Keep editing",
      discardChanges: "Discard changes",
      submittedTitle: "Question submitted",
      submittedSubtitle:
        "Your question is private and has been added to My questions.",
      submittedCardTitle: "We received your question",
      submittedCardBody:
        "You can leave this screen. The answer will appear in My questions when it is available.",
      viewMyQuestions: "View my questions",
    },
    questions: {
      title: "My questions",
      subtitle: "Private questions you submitted through Knowledge & Q&A.",
      loadingSubtitle: "Loading your private question history.",
      emptySubtitle: "Questions you submit will appear here.",
      offlineSubtitle:
        "Cached question status is available while you reconnect.",
      waiting: "Waiting for answer",
      answered: "Answered",
      emptyTitle: "No questions yet",
      emptyBody:
        "Search official guidance first, or ask a private question if you still need help.",
      askButton: "Ask a question",
      offlineBanner:
        "No internet connection. New answers may not appear until you reconnect.",
      cachedStatus: (status) => `${status} · cached`,
    },
    detail: {
      title: "Question detail",
      waitingSubtitle:
        "Waiting for an answer from the support/knowledge team.",
      answeredSubtitle: "Answered by the support/knowledge team.",
      offlineSubtitle: "Cached question information",
      yourQuestion: "YOUR QUESTION",
      answerLabel: "ANSWER",
      waitingMeta: (date, topic) => `Submitted ${date} · ${topic}`,
      answeredMeta: (date, topic) => `Answered ${date} · ${topic}`,
      basedOn: (month) => `Based on EMENDA guidance · Updated ${month}`,
      viewRelated: "View related guidance",
      askAnother: "Ask another question",
      offlineBanner:
        "You are offline. This status may not include a newer answer.",
      cachedAnswer: "Cached answer",
      backToMyQuestions: "Back to My questions",
      notFound: "Question not found",
    },
  },
  id: {
    crumbHome: "Beranda headless",
    crumbKnowledge: "Pengetahuan & Q&A",
    crumbMyQuestions: "Pertanyaan saya",
    updatedMeta: (date) => `Diperbarui ${date}`,
    officialGuidance: "Panduan resmi",
    topics: {
      visaResidence: "Visa & izin tinggal",
      japanPreparation: "Persiapan Jepang",
      documentsIdentity: "Dokumen & identitas",
      workEmployment: "Kerja & pekerjaan",
      other: "Lainnya",
    },
    searchCategory: {
      japanPreparation: "Persiapan Jepang",
      residence: "Izin tinggal",
      documents: "Dokumen",
      visaResidence: "Visa & izin tinggal",
    },
    hub: {
      title: "Pengetahuan & Q&A",
      subtitle:
        "Temukan panduan resmi atau ajukan pertanyaan pribadi saat Anda tidak menemukan jawaban.",
      loadingSubtitle:
        "Memuat panduan resmi dan status pertanyaan Anda.",
      searchPlaceholder: "Cari visa, izin tinggal, kerja, dokumen…",
      askTitle: "Ajukan pertanyaan",
      askBody: "Kirim pertanyaan pribadi ke tim dukungan/pengetahuan.",
      myQuestionsTitle: "Pertanyaan saya",
      myQuestionsBody: "Periksa pertanyaan yang sudah Anda kirim.",
      popularGuidance: "PANDUAN POPULER",
      privacyFooter:
        "Pertanyaan bersifat pribadi. Tidak diposting ke komunitas publik.",
      offlineSubtitle:
        "Panduan tersimpan tetap tersedia selama Anda menyambung kembali.",
      offlineBanner:
        "Tidak ada koneksi internet. Pencarian dan pertanyaan baru tidak tersedia.",
      cachedGuidance: "PANDUAN TERSIMPAN",
      cachedArticle: "Artikel tersimpan",
    },
    search: {
      baseTitle: "Cari pengetahuan",
      baseSubtitle:
        "Cari panduan resmi untuk pekerja sebelum mengirim pertanyaan baru.",
      resultsTitle: "Hasil pencarian",
      resultsFor: (count, query) =>
        `${count} hasil untuk “${query}”.`,
      searchButton: "Cari",
      searchingSubtitle: "Mencari panduan resmi…",
      tipTitle: "Cari panduan resmi lebih dulu",
      tipBody:
        "Coba kata kunci seperti status izin tinggal, registrasi alamat, dokumen, atau kerja.",
      noResultsTitle: "Tidak ada hasil",
      noResultsBody:
        "Kami tidak menemukan panduan resmi yang cocok dengan pencarian ini.",
      noMatchTitle: "Tidak ada panduan yang cocok",
      noMatchSubtitle:
        "Coba pencarian lain atau kirim pertanyaan pribadi.",
      offlineSubtitle: "Pencarian memerlukan koneksi internet.",
      askEscape: "Tidak menemukannya? Ajukan pertanyaan",
      offlineBanner:
        "Tidak ada koneksi internet. Artikel tersimpan tetap tersedia dari Pengetahuan & Q&A.",
      backToKnowledge: "Kembali ke Pengetahuan & Q&A",
    },
    article: {
      emendaGuidance: "Panduan EMENDA",
      headings: {
        whatToDo: "Yang harus dilakukan",
        whatToPrepare: "Yang perlu disiapkan",
        whatItMeans: "Apa artinya",
        whatToCheck: "Yang perlu diperiksa",
        whenToAct: "Kapan harus bertindak",
        commonItems: "Item yang umum diminta",
        beforeYouGo: "Sebelum Anda pergi",
      },
      disclaimers: {
        localGovernment:
          "Gunakan panduan pemerintah setempat untuk persyaratan final. EMENDA tidak menggantikan instruksi resmi.",
        immigration:
          "Gunakan panduan imigrasi resmi untuk persyaratan final. EMENDA tidak menggantikan instruksi resmi.",
        timing:
          "Gunakan panduan pemerintah setempat untuk waktu dan dokumen final yang diperlukan. EMENDA tidak menggantikan instruksi resmi.",
        documentList:
          "Gunakan panduan pemerintah setempat untuk daftar dokumen final. EMENDA tidak menggantikan instruksi resmi.",
      },
      railLabel: "PANDUAN RESMI",
      railBody:
        "Gunakan panduan resmi terbaru untuk persyaratan final.",
      askQuestion: "Ajukan pertanyaan",
      stillUnsure: "Masih ragu? Ajukan pertanyaan",
      offlineSubtitle: "Panduan resmi tersimpan",
      offlineBanner:
        "Anda sedang offline. Versi tersimpan ini mungkin belum memuat pembaruan terbaru.",
      cachedVersion: "Versi tersimpan",
      offlineDisclaimer:
        "Gunakan panduan resmi setempat saat Anda kembali online.",
      notFound: "Artikel tidak ditemukan",
    },
    ask: {
      title: "Ajukan pertanyaan",
      subtitle: "Kirim pertanyaan pribadi ke tim dukungan/pengetahuan.",
      topicLabel: "TOPIK",
      questionLabel: "PERTANYAAN",
      detailsLabel: "DETAIL · OPSIONAL",
      submit: "Kirim pertanyaan",
      submitting: "Mengirim…",
      validationError: "Masukkan pertanyaan Anda.",
      failedBanner:
        "Pertanyaan Anda tidak dapat dikirim. Draf Anda masih tersimpan.",
      tryAgain: "Coba lagi",
      offlineBanner:
        "Tidak ada koneksi internet. Anda dapat meninjau draf, tetapi belum dapat mengirimkannya.",
      privacyEyebrow: "PERTANYAAN PRIBADI",
      privacyTitle: "Pertanyaan Anda tetap pribadi.",
      privacyBody:
        "Tidak diposting secara publik. Jangan sertakan kata sandi atau informasi sensitif yang tidak terkait.",
      privacyMobile:
        "Pertanyaan Anda bersifat pribadi dan tidak diposting secara publik. Jangan sertakan kata sandi atau informasi sensitif yang tidak terkait.",
      overlayTitle: "Topik pertanyaan",
      overlayHelper: "Pilih topik yang paling sesuai dengan pertanyaan Anda.",
      unsavedTitle: "Buang pertanyaan ini?",
      unsavedBody:
        "Pertanyaan dan detail Anda yang belum tersimpan akan hilang.",
      keepEditing: "Lanjutkan mengedit",
      discardChanges: "Buang perubahan",
      submittedTitle: "Pertanyaan terkirim",
      submittedSubtitle:
        "Pertanyaan Anda bersifat pribadi dan telah ditambahkan ke Pertanyaan saya.",
      submittedCardTitle: "Kami menerima pertanyaan Anda",
      submittedCardBody:
        "Anda dapat meninggalkan layar ini. Jawaban akan muncul di Pertanyaan saya saat tersedia.",
      viewMyQuestions: "Lihat pertanyaan saya",
    },
    questions: {
      title: "Pertanyaan saya",
      subtitle:
        "Pertanyaan pribadi yang Anda kirim melalui Pengetahuan & Q&A.",
      loadingSubtitle: "Memuat riwayat pertanyaan pribadi Anda.",
      emptySubtitle: "Pertanyaan yang Anda kirim akan muncul di sini.",
      offlineSubtitle:
        "Status pertanyaan tersimpan tetap tersedia selama Anda menyambung kembali.",
      waiting: "Menunggu jawaban",
      answered: "Terjawab",
      emptyTitle: "Belum ada pertanyaan",
      emptyBody:
        "Cari panduan resmi lebih dulu, atau ajukan pertanyaan pribadi jika Anda masih perlu bantuan.",
      askButton: "Ajukan pertanyaan",
      offlineBanner:
        "Tidak ada koneksi internet. Jawaban baru mungkin belum muncul sampai Anda menyambung kembali.",
      cachedStatus: (status) => `${status} · tersimpan`,
    },
    detail: {
      title: "Detail pertanyaan",
      waitingSubtitle: "Menunggu jawaban dari tim dukungan/pengetahuan.",
      answeredSubtitle: "Dijawab oleh tim dukungan/pengetahuan.",
      offlineSubtitle: "Informasi pertanyaan tersimpan",
      yourQuestion: "PERTANYAAN ANDA",
      answerLabel: "JAWABAN",
      waitingMeta: (date, topic) => `Dikirim ${date} · ${topic}`,
      answeredMeta: (date, topic) => `Dijawab ${date} · ${topic}`,
      basedOn: (month) =>
        `Berdasarkan panduan EMENDA · Diperbarui ${month}`,
      viewRelated: "Lihat panduan terkait",
      askAnother: "Ajukan pertanyaan lain",
      offlineBanner:
        "Anda sedang offline. Status ini mungkin belum memuat jawaban terbaru.",
      cachedAnswer: "Jawaban tersimpan",
      backToMyQuestions: "Kembali ke Pertanyaan saya",
      notFound: "Pertanyaan tidak ditemukan",
    },
  },
  ja: {
    crumbHome: "ヘッドレスホーム",
    crumbKnowledge: "ナレッジ & Q&A",
    crumbMyQuestions: "自分の質問",
    updatedMeta: (date) => `${date}更新`,
    officialGuidance: "公式ガイダンス",
    topics: {
      visaResidence: "ビザ & 在留",
      japanPreparation: "日本準備",
      documentsIdentity: "書類 & 本人確認",
      workEmployment: "仕事 & 雇用",
      other: "その他",
    },
    searchCategory: {
      japanPreparation: "日本準備",
      residence: "在留",
      documents: "書類",
      visaResidence: "ビザ & 在留",
    },
    hub: {
      title: "ナレッジ & Q&A",
      subtitle:
        "公式ガイダンスを探すか、答えが見つからないときは非公開の質問を送ってください。",
      loadingSubtitle:
        "公式ガイダンスと質問の状態を読み込んでいます。",
      searchPlaceholder: "ビザ、在留、仕事、書類を検索…",
      askTitle: "質問する",
      askBody: "サポート/ナレッジチームに非公開の質問を送ります。",
      myQuestionsTitle: "自分の質問",
      myQuestionsBody: "送信済みの質問を確認します。",
      popularGuidance: "人気のガイダンス",
      privacyFooter:
        "質問は非公開です。公開コミュニティには投稿されません。",
      offlineSubtitle:
        "再接続するまで、キャッシュ済みのガイダンスを利用できます。",
      offlineBanner:
        "インターネット接続がありません。検索と新しい質問は利用できません。",
      cachedGuidance: "キャッシュ済みガイダンス",
      cachedArticle: "キャッシュ済み記事",
    },
    search: {
      baseTitle: "ナレッジを検索",
      baseSubtitle:
        "新しい質問を送る前に、公式の労働者向けガイダンスを検索してください。",
      resultsTitle: "検索結果",
      resultsFor: (count, query) => `「${query}」の検索結果 ${count}件。`,
      searchButton: "検索",
      searchingSubtitle: "公式ガイダンスを検索しています…",
      tipTitle: "まず公式ガイダンスを検索",
      tipBody:
        "「在留資格」「住所登録」「書類」「仕事」などのキーワードをお試しください。",
      noResultsTitle: "結果が見つかりません",
      noResultsBody:
        "この検索に一致する公式ガイダンスは見つかりませんでした。",
      noMatchTitle: "一致するガイダンスはありません",
      noMatchSubtitle:
        "別の検索を試すか、非公開の質問を送ってください。",
      offlineSubtitle:
        "検索にはインターネット接続が必要です。",
      askEscape: "見つかりませんか？質問する",
      offlineBanner:
        "インターネット接続がありません。ナレッジ & Q&A からキャッシュ済み記事を引き続き利用できます。",
      backToKnowledge: "ナレッジ & Q&Aに戻る",
    },
    article: {
      emendaGuidance: "EMENDAガイダンス",
      headings: {
        whatToDo: "やること",
        whatToPrepare: "準備するもの",
        whatItMeans: "これは何を意味するか",
        whatToCheck: "確認すること",
        whenToAct: "いつ手続きするか",
        commonItems: "よく求められるもの",
        beforeYouGo: "出かける前に",
      },
      disclaimers: {
        localGovernment:
          "最終的な要件は自治体の公式案内をご確認ください。EMENDAは公式の指示に代わるものではありません。",
        immigration:
          "最終的な要件は公式の入管ガイダンスをご確認ください。EMENDAは公式の指示に代わるものではありません。",
        timing:
          "最終的な期限と必要書類は自治体の公式案内をご確認ください。EMENDAは公式の指示に代わるものではありません。",
        documentList:
          "最終的な必要書類一覧は自治体の公式案内をご確認ください。EMENDAは公式の指示に代わるものではありません。",
      },
      railLabel: "公式ガイダンス",
      railBody: "最終的な要件は最新の公式案内をご利用ください。",
      askQuestion: "質問する",
      stillUnsure: "まだ不安ですか？質問する",
      offlineSubtitle: "キャッシュ済みの公式ガイダンス",
      offlineBanner:
        "オフラインです。このキャッシュ版には最新の更新が含まれていない場合があります。",
      cachedVersion: "キャッシュ版",
      offlineDisclaimer:
        "オンラインに戻ったら公式の自治体案内をご利用ください。",
      notFound: "記事が見つかりません",
    },
    ask: {
      title: "質問する",
      subtitle: "サポート/ナレッジチームに非公開の質問を送ります。",
      topicLabel: "トピック",
      questionLabel: "質問",
      detailsLabel: "詳細 · 任意",
      submit: "質問を送信",
      submitting: "送信中…",
      validationError: "質問を入力してください。",
      failedBanner:
        "質問を送信できませんでした。下書きはこのまま残っています。",
      tryAgain: "もう一度試す",
      offlineBanner:
        "インターネット接続がありません。下書きは確認できますが、まだ送信できません。",
      privacyEyebrow: "非公開の質問",
      privacyTitle: "質問は非公開のままです。",
      privacyBody:
        "公開されることはありません。パスワードや関係のない機密情報は含めないでください。",
      privacyMobile:
        "質問は非公開で、公開されることはありません。パスワードや関係のない機密情報は含めないでください。",
      overlayTitle: "質問のトピック",
      overlayHelper: "質問に最も合うトピックを選んでください。",
      unsavedTitle: "この質問を破棄しますか？",
      unsavedBody: "未保存の質問と詳細は失われます。",
      keepEditing: "編集を続ける",
      discardChanges: "変更を破棄",
      submittedTitle: "質問を送信しました",
      submittedSubtitle:
        "質問は非公開で、「自分の質問」に追加されました。",
      submittedCardTitle: "質問を受け付けました",
      submittedCardBody:
        "この画面を離れてもかまいません。回答が用意でき次第「自分の質問」に表示されます。",
      viewMyQuestions: "自分の質問を見る",
    },
    questions: {
      title: "自分の質問",
      subtitle: "ナレッジ & Q&Aから送信した非公開の質問。",
      loadingSubtitle: "非公開の質問履歴を読み込んでいます。",
      emptySubtitle: "送信した質問はここに表示されます。",
      offlineSubtitle:
        "再接続するまで、キャッシュ済みの質問ステータスを利用できます。",
      waiting: "回答待ち",
      answered: "回答済み",
      emptyTitle: "まだ質問はありません",
      emptyBody:
        "まず公式ガイダンスを検索し、それでも必要なら非公開の質問を送ってください。",
      askButton: "質問する",
      offlineBanner:
        "インターネット接続がありません。再接続するまで新しい回答は表示されない場合があります。",
      cachedStatus: (status) => `${status} · キャッシュ済み`,
    },
    detail: {
      title: "質問の詳細",
      waitingSubtitle:
        "サポート/ナレッジチームからの回答を待っています。",
      answeredSubtitle: "サポート/ナレッジチームが回答しました。",
      offlineSubtitle: "キャッシュ済みの質問情報",
      yourQuestion: "あなたの質問",
      answerLabel: "回答",
      waitingMeta: (date, topic) => `${date}送信 · ${topic}`,
      answeredMeta: (date, topic) => `${date}回答 · ${topic}`,
      basedOn: (month) => `EMENDAガイダンスに基づく · ${month}更新`,
      viewRelated: "関連ガイダンスを見る",
      askAnother: "別の質問をする",
      offlineBanner:
        "オフラインです。このステータスには新しい回答が含まれていない場合があります。",
      cachedAnswer: "キャッシュ済みの回答",
      backToMyQuestions: "自分の質問に戻る",
      notFound: "質問が見つかりません",
    },
  },
});
