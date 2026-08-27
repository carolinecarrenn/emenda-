import { defineSectionCopy, useSectionCopy } from "@/i18n/copy";
import type { SupportTopicId } from "./helpMock";

/** UI copy for 09 · Help & Support (WD-47..WD-48, mobile W-47..W-48).
 *  EN strings are the Figma mock text verbatim; ID/JA are faithful
 *  translations. User/mock data (drafts, names, EMENDA IDs) stays in
 *  helpMock.ts and is never translated. */
export interface HelpCopy {
  hub: {
    breadcrumb: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    contactTitle: string;
    contactDesc: string;
    knowledgeTitle: string;
    knowledgeDesc: string;
    quickHelp: string;
    recoveryTitle: string;
    recoveryDesc: string;
    emergencyTitle: string;
    emergencyDesc: string;
    privacyNote: string;
    offlineSubtitle: string;
    offlineBanner: string;
    knowledgeCachedDesc: string;
    emergencySavedDesc: string;
  };
  contact: {
    breadcrumb: string;
    title: string;
    subtitle: string;
    offlineSubtitle: string;
    offlineBanner: string;
    topicLabel: string;
    issueLabel: string;
    detailsLabel: string;
    issueError: string;
    submit: string;
    submitting: string;
    tryAgain: string;
    failedBanner: string;
    railEyebrow: string;
    railTitle: string;
    railTitleOverlay: string;
    railBody: string;
    railBodyOverlay: string;
    topics: Record<SupportTopicId, string>;
  };
  overlay: {
    title: string;
    subtitle: string;
  };
  discard: {
    title: string;
    body: string;
    keep: string;
    discard: string;
  };
  sent: {
    title: string;
    subtitle: string;
    cardTitle: string;
    cardBody: string;
    backToHelp: string;
  };
}

export const HELP_COPY = defineSectionCopy<HelpCopy>({
  en: {
    hub: {
      breadcrumb: "Headless home",
      title: "Help & support",
      subtitle: "Get help with your EMENDA account, identity, or app issues.",
      searchPlaceholder: "Search official guidance in Knowledge & Q&A…",
      contactTitle: "Contact support",
      contactDesc: "Send a private request for account, identity, or technical help.",
      knowledgeTitle: "Knowledge & Q&A",
      knowledgeDesc: "Find official guidance or ask a guidance question.",
      quickHelp: "QUICK HELP",
      recoveryTitle: "Account & access recovery",
      recoveryDesc: "PIN, phone number, and sign-in help",
      emergencyTitle: "Emergency information",
      emergencyDesc: "Your saved emergency contact details",
      privacyNote:
        "Support requests are private. Never share your PIN or OTP code with support.",
      offlineSubtitle: "Some help remains available while you reconnect.",
      offlineBanner: "No internet connection. New support requests cannot be sent.",
      knowledgeCachedDesc: "Cached guidance may still be available",
      emergencySavedDesc: "Saved on this device",
    },
    contact: {
      breadcrumb: "Help & support",
      title: "Contact support",
      subtitle: "Send a private support request to the EMENDA support team.",
      offlineSubtitle: "Your draft stays here while you reconnect.",
      offlineBanner:
        "No internet connection. You can review your draft, but it cannot be submitted yet.",
      topicLabel: "TOPIC",
      issueLabel: "ISSUE",
      detailsLabel: "DETAILS · OPTIONAL",
      issueError: "Describe the issue.",
      submit: "Submit support request",
      submitting: "Submitting…",
      tryAgain: "Try again",
      failedBanner:
        "Couldn’t submit your support request. Your draft is still here.",
      railEyebrow: "PRIVATE SUPPORT",
      railTitle: "Keep sensitive information private.",
      railTitleOverlay: "Keep secrets out of support.",
      railBody:
        "Support requests are private. Never include passwords, PINs, OTP codes, or full identity document numbers.",
      railBodyOverlay:
        "Never include passwords, PINs, OTP codes, or full identity document numbers.",
      topics: {
        account: "Account & access",
        identity: "EMENDA ID & identity",
        technical: "App / technical issue",
        privacy: "Privacy & data",
        other: "Other",
      },
    },
    overlay: {
      title: "Support topic",
      subtitle: "Choose the topic that best matches your support request.",
    },
    discard: {
      title: "Discard this support request?",
      body: "Your unsaved support request and details will be lost.",
      keep: "Keep editing",
      discard: "Discard changes",
    },
    sent: {
      title: "Support request sent",
      subtitle: "Your private support request was sent to the EMENDA support team.",
      cardTitle: "We received your request",
      cardBody:
        "You can leave this screen. EMENDA will notify you when there is an update.",
      backToHelp: "Back to Help & support",
    },
  },
  id: {
    hub: {
      breadcrumb: "Beranda headless",
      title: "Bantuan & dukungan",
      subtitle:
        "Dapatkan bantuan untuk akun EMENDA, identitas, atau masalah aplikasi Anda.",
      searchPlaceholder: "Cari panduan resmi di Knowledge & Q&A…",
      contactTitle: "Hubungi dukungan",
      contactDesc:
        "Kirim permintaan pribadi untuk bantuan akun, identitas, atau teknis.",
      knowledgeTitle: "Knowledge & Q&A",
      knowledgeDesc: "Temukan panduan resmi atau ajukan pertanyaan panduan.",
      quickHelp: "BANTUAN CEPAT",
      recoveryTitle: "Pemulihan akun & akses",
      recoveryDesc: "Bantuan PIN, nomor telepon, dan masuk",
      emergencyTitle: "Informasi darurat",
      emergencyDesc: "Detail kontak darurat yang Anda simpan",
      privacyNote:
        "Permintaan dukungan bersifat pribadi. Jangan pernah membagikan PIN atau kode OTP Anda kepada dukungan.",
      offlineSubtitle: "Sebagian bantuan tetap tersedia saat Anda menyambung kembali.",
      offlineBanner:
        "Tidak ada koneksi internet. Permintaan dukungan baru tidak dapat dikirim.",
      knowledgeCachedDesc: "Panduan tersimpan mungkin masih tersedia",
      emergencySavedDesc: "Tersimpan di perangkat ini",
    },
    contact: {
      breadcrumb: "Bantuan & dukungan",
      title: "Hubungi dukungan",
      subtitle: "Kirim permintaan dukungan pribadi ke tim dukungan EMENDA.",
      offlineSubtitle: "Draf Anda tetap di sini saat Anda menyambung kembali.",
      offlineBanner:
        "Tidak ada koneksi internet. Anda dapat meninjau draf, tetapi belum dapat mengirimkannya.",
      topicLabel: "TOPIK",
      issueLabel: "MASALAH",
      detailsLabel: "DETAIL · OPSIONAL",
      issueError: "Jelaskan masalahnya.",
      submit: "Kirim permintaan dukungan",
      submitting: "Mengirim…",
      tryAgain: "Coba lagi",
      failedBanner:
        "Tidak dapat mengirim permintaan dukungan Anda. Draf Anda masih di sini.",
      railEyebrow: "DUKUNGAN PRIBADI",
      railTitle: "Jaga kerahasiaan informasi sensitif.",
      railTitleOverlay: "Jangan sertakan rahasia dalam dukungan.",
      railBody:
        "Permintaan dukungan bersifat pribadi. Jangan pernah menyertakan kata sandi, PIN, kode OTP, atau nomor lengkap dokumen identitas.",
      railBodyOverlay:
        "Jangan pernah menyertakan kata sandi, PIN, kode OTP, atau nomor lengkap dokumen identitas.",
      topics: {
        account: "Akun & akses",
        identity: "EMENDA ID & identitas",
        technical: "Masalah aplikasi / teknis",
        privacy: "Privasi & data",
        other: "Lainnya",
      },
    },
    overlay: {
      title: "Topik dukungan",
      subtitle: "Pilih topik yang paling sesuai dengan permintaan dukungan Anda.",
    },
    discard: {
      title: "Buang permintaan dukungan ini?",
      body: "Permintaan dukungan dan detail yang belum disimpan akan hilang.",
      keep: "Lanjutkan mengedit",
      discard: "Buang perubahan",
    },
    sent: {
      title: "Permintaan dukungan terkirim",
      subtitle:
        "Permintaan dukungan pribadi Anda telah dikirim ke tim dukungan EMENDA.",
      cardTitle: "Kami telah menerima permintaan Anda",
      cardBody:
        "Anda dapat meninggalkan layar ini. EMENDA akan memberi tahu Anda saat ada pembaruan.",
      backToHelp: "Kembali ke Bantuan & dukungan",
    },
  },
  ja: {
    hub: {
      breadcrumb: "ヘッドレスホーム",
      title: "ヘルプとサポート",
      subtitle:
        "EMENDAアカウント、本人確認、アプリの問題についてサポートを受けられます。",
      searchPlaceholder: "ナレッジ＆Q&Aで公式ガイダンスを検索…",
      contactTitle: "サポートに問い合わせ",
      contactDesc:
        "アカウント、本人確認、技術的なサポートのプライベートリクエストを送信します。",
      knowledgeTitle: "ナレッジ＆Q&A",
      knowledgeDesc: "公式ガイダンスを探すか、ガイダンスに関する質問をしてください。",
      quickHelp: "クイックヘルプ",
      recoveryTitle: "アカウントとアクセスの復旧",
      recoveryDesc: "PIN・電話番号・サインインのヘルプ",
      emergencyTitle: "緊急情報",
      emergencyDesc: "保存された緊急連絡先の詳細",
      privacyNote:
        "サポートリクエストはプライベートです。PINやOTPコードは絶対にサポートに共有しないでください。",
      offlineSubtitle: "再接続するまでの間も、一部のヘルプは利用できます。",
      offlineBanner:
        "インターネットに接続されていません。新しいサポートリクエストは送信できません。",
      knowledgeCachedDesc: "キャッシュされたガイダンスは引き続き利用できる場合があります",
      emergencySavedDesc: "この端末に保存済み",
    },
    contact: {
      breadcrumb: "ヘルプとサポート",
      title: "サポートに問い合わせ",
      subtitle: "EMENDAサポートチームにプライベートなサポートリクエストを送信します。",
      offlineSubtitle: "再接続するまでの間、下書きはここに保存されます。",
      offlineBanner:
        "インターネットに接続されていません。下書きの確認はできますが、まだ送信できません。",
      topicLabel: "トピック",
      issueLabel: "問題",
      detailsLabel: "詳細 · 任意",
      issueError: "問題を記入してください。",
      submit: "サポートリクエストを送信",
      submitting: "送信中…",
      tryAgain: "もう一度試す",
      failedBanner:
        "サポートリクエストを送信できませんでした。下書きはまだここにあります。",
      railEyebrow: "プライベートサポート",
      railTitle: "機密情報は共有しないでください。",
      railTitleOverlay: "サポートに機密情報を送らないでください。",
      railBody:
        "サポートリクエストはプライベートです。パスワード、PIN、OTPコード、身分証明書のフル番号は絶対に含めないでください。",
      railBodyOverlay:
        "パスワード、PIN、OTPコード、身分証明書のフル番号は絶対に含めないでください。",
      topics: {
        account: "アカウントとアクセス",
        identity: "EMENDA IDと本人確認",
        technical: "アプリ／技術的な問題",
        privacy: "プライバシーとデータ",
        other: "その他",
      },
    },
    overlay: {
      title: "サポートトピック",
      subtitle: "サポートリクエストに最も合うトピックを選択してください。",
    },
    discard: {
      title: "このサポートリクエストを破棄しますか？",
      body: "保存されていないサポートリクエストと詳細は失われます。",
      keep: "編集を続ける",
      discard: "変更を破棄",
    },
    sent: {
      title: "サポートリクエストを送信しました",
      subtitle:
        "プライベートなサポートリクエストがEMENDAサポートチームに送信されました。",
      cardTitle: "リクエストを受け付けました",
      cardBody:
        "この画面から離れても大丈夫です。更新があればEMENDAからお知らせします。",
      backToHelp: "ヘルプとサポートに戻る",
    },
  },
});

export function useHelpCopy(): HelpCopy {
  return useSectionCopy(HELP_COPY);
}
