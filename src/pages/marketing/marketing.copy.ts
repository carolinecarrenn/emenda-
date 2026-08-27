import { defineSectionCopy } from "@/i18n/copy";

/**
 * Chrome shared by every marketing page: navigation, footer, and the closing
 * call-to-action band. Page-specific copy lives with its page — this file only
 * holds the strings that must read identically on all seven routes.
 */
export interface MarketingChromeCopy {
  nav: {
    home: string;
    platform: string;
    workers: string;
    organizations: string;
    howItWorks: string;
    useCases: string;
    assistant: string;
    about: string;
    help: string;
    signIn: string;
    tryCta: string;
    openMenu: string;
    closeMenu: string;
    menuTitle: string;
  };
  cta: {
    title: string;
    body: string;
    primary: string;
    secondary: string;
    languageNote: string;
  };
  footer: {
    tagline: string;
    groups: { title: string; links: { label: string; href: string }[] }[];
    languageLabel: string;
    copyright: string;
  };
}

const EN: MarketingChromeCopy = {
  nav: {
    home: "Home",
    platform: "Platform",
    workers: "For Workers",
    organizations: "For Organizations",
    howItWorks: "How It Works",
    useCases: "Use Cases",
    assistant: "EMENDA Assistant",
    about: "About",
    help: "Help",
    signIn: "Sign in",
    tryCta: "Try EMENDA",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    menuTitle: "Site menu",
  },
  cta: {
    title: "You don't have to figure everything out alone.",
    body: "Ask EMENDA and know what to do next.",
    primary: "Start with EMENDA",
    secondary: "Explore the demo",
    languageNote: "English · 日本語 · Bahasa Indonesia",
  },
  footer: {
    tagline:
      "AI-powered support for living and working in Japan.",
    groups: [
      {
        title: "Product",
        links: [
          { label: "Platform", href: "/platform" },
          { label: "For Workers", href: "/workers" },
          { label: "For Organizations", href: "/organizations" },
          { label: "EMENDA Assistant", href: "/assistant" },
        ],
      },
      {
        title: "EMENDA",
        links: [
          { label: "How It Works", href: "/how-it-works" },
          { label: "Use Cases", href: "/use-cases" },
          { label: "About", href: "/about" },
        ],
      },
      {
        title: "Support",
        links: [
          { label: "Help Center", href: "/help" },
          { label: "FAQ", href: "/help#faq" },
          { label: "Contact", href: "/help#contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/help#privacy" },
          { label: "Terms", href: "#" },
        ],
      },
    ],
    languageLabel: "Language",
    copyright: "© 2026 EMENDA",
  },
};

const JA: MarketingChromeCopy = {
  nav: {
    home: "ホーム",
    platform: "プラットフォーム",
    workers: "働く人へ",
    organizations: "組織の方へ",
    howItWorks: "使い方",
    useCases: "活用シーン",
    assistant: "EMENDAアシスタント",
    about: "EMENDAについて",
    help: "ヘルプ",
    signIn: "ログイン",
    tryCta: "EMENDAを試す",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    menuTitle: "サイトメニュー",
  },
  cta: {
    title: "ぜんぶを、ひとりで抱えなくていい。",
    body: "EMENDAに聞けば、次にすることがわかります。",
    primary: "EMENDAをはじめる",
    secondary: "デモを見る",
    languageNote: "English・日本語・Bahasa Indonesia",
  },
  footer: {
    tagline: "日本で暮らし、働くためのAIサポート。",
    groups: [
      {
        title: "プロダクト",
        links: [
          { label: "プラットフォーム", href: "/platform" },
          { label: "働く人へ", href: "/workers" },
          { label: "組織の方へ", href: "/organizations" },
          { label: "EMENDAアシスタント", href: "/assistant" },
        ],
      },
      {
        title: "EMENDA",
        links: [
          { label: "使い方", href: "/how-it-works" },
          { label: "活用シーン", href: "/use-cases" },
          { label: "EMENDAについて", href: "/about" },
        ],
      },
      {
        title: "サポート",
        links: [
          { label: "ヘルプセンター", href: "/help" },
          { label: "よくある質問", href: "/help#faq" },
          { label: "お問い合わせ", href: "/help#contact" },
        ],
      },
      {
        title: "規約",
        links: [
          { label: "プライバシー", href: "/help#privacy" },
          { label: "利用規約", href: "#" },
        ],
      },
    ],
    languageLabel: "言語",
    copyright: "© 2026 EMENDA",
  },
};

const ID: MarketingChromeCopy = {
  nav: {
    home: "Beranda",
    platform: "Platform",
    workers: "Untuk Pekerja",
    organizations: "Untuk Organisasi",
    howItWorks: "Cara Kerja",
    useCases: "Contoh Penggunaan",
    assistant: "EMENDA Assistant",
    about: "Tentang",
    help: "Bantuan",
    signIn: "Masuk",
    tryCta: "Coba EMENDA",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    menuTitle: "Menu situs",
  },
  cta: {
    title: "Kamu tidak harus memikirkan semuanya sendirian.",
    body: "Tanya EMENDA dan tahu apa langkah berikutnya.",
    primary: "Mulai dengan EMENDA",
    secondary: "Lihat demonya",
    languageNote: "English · 日本語 · Bahasa Indonesia",
  },
  footer: {
    tagline: "Dukungan berbasis AI untuk hidup dan bekerja di Jepang.",
    groups: [
      {
        title: "Produk",
        links: [
          { label: "Platform", href: "/platform" },
          { label: "Untuk Pekerja", href: "/workers" },
          { label: "Untuk Organisasi", href: "/organizations" },
          { label: "EMENDA Assistant", href: "/assistant" },
        ],
      },
      {
        title: "EMENDA",
        links: [
          { label: "Cara Kerja", href: "/how-it-works" },
          { label: "Contoh Penggunaan", href: "/use-cases" },
          { label: "Tentang", href: "/about" },
        ],
      },
      {
        title: "Dukungan",
        links: [
          { label: "Pusat Bantuan", href: "/help" },
          { label: "FAQ", href: "/help#faq" },
          { label: "Kontak", href: "/help#contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privasi", href: "/help#privacy" },
          { label: "Ketentuan", href: "#" },
        ],
      },
    ],
    languageLabel: "Bahasa",
    copyright: "© 2026 EMENDA",
  },
};

export const MARKETING_COPY = defineSectionCopy<MarketingChromeCopy>({
  en: EN,
  ja: JA,
  id: ID,
});
