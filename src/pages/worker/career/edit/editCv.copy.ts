import { defineSectionCopy } from "@/i18n/copy";

/** WD-31 Edit My CV — all UI/system strings (EN verbatim from Figma). */
export interface EditCvCopy {
  back: string;
  title: string;
  subtitle: string;
  headlineLabel: string;
  summaryLabel: string;
  sectionsTitle: string;
  sections: {
    experience: string;
    education: string;
    skills: string;
    qualifications: string;
  };
  included: string;
  hidden: string;
  reorder: string;
  save: string;
  saving: string;
  visibilitySheet: {
    title: string;
    body: string;
    include: string;
    hide: string;
  };
  reorderTitle: string;
  reorderSubtitle: string;
  moveUp: string;
  moveDown: string;
  savingCard: { subtitle: string; title: string; body: string };
  error: { title: string; body: string };
  tryAgain: string;
  offline: { title: string; body: string };
  unsaved: {
    title: string;
    body: string;
    keepEditing: string;
    discard: string;
  };
}

export const EDIT_CV_COPY = defineSectionCopy<EditCvCopy>({
  en: {
    back: "Career & CV",
    title: "Edit My CV",
    subtitle: "Control the content shown in your master CV.",
    headlineLabel: "HEADLINE",
    summaryLabel: "PROFESSIONAL SUMMARY · OPTIONAL",
    sectionsTitle: "CV sections",
    sections: {
      experience: "Experience",
      education: "Education",
      skills: "Skills & languages",
      qualifications: "Qualifications & training",
    },
    included: "Included",
    hidden: "Hidden",
    reorder: "Reorder sections",
    save: "Save CV changes",
    saving: "Saving…",
    visibilitySheet: {
      title: "Manage section visibility",
      body: "Include or hide sections in your master CV.",
      include: "Include",
      hide: "Hide",
    },
    reorderTitle: "Reorder CV sections",
    reorderSubtitle:
      "Move sections up or down. This changes only your master CV layout.",
    moveUp: "Move up",
    moveDown: "Move down",
    savingCard: {
      subtitle: "Saving your master CV changes.",
      title: "Saving CV changes…",
      body: "Keep EMENDA open for a moment.",
    },
    error: {
      title: "Couldn’t save your CV changes.",
      body: "Your edits are still here.",
    },
    tryAgain: "Try saving again",
    offline: {
      title: "You’re offline",
      body: "Reconnect to save your CV changes.",
    },
    unsaved: {
      title: "Discard CV changes?",
      body: "Your unsaved CV edits will be lost.",
      keepEditing: "Keep editing",
      discard: "Discard changes",
    },
  },
  id: {
    back: "Karier & CV",
    title: "Ubah CV Saya",
    subtitle: "Kendalikan konten yang ditampilkan dalam CV utama Anda.",
    headlineLabel: "JUDUL",
    summaryLabel: "RINGKASAN PROFESIONAL · OPSIONAL",
    sectionsTitle: "Bagian CV",
    sections: {
      experience: "Pengalaman",
      education: "Pendidikan",
      skills: "Keterampilan & bahasa",
      qualifications: "Kualifikasi & pelatihan",
    },
    included: "Disertakan",
    hidden: "Disembunyikan",
    reorder: "Urutkan ulang bagian",
    save: "Simpan perubahan CV",
    saving: "Menyimpan…",
    visibilitySheet: {
      title: "Kelola visibilitas bagian",
      body: "Sertakan atau sembunyikan bagian dalam CV utama Anda.",
      include: "Sertakan",
      hide: "Sembunyikan",
    },
    reorderTitle: "Urutkan ulang bagian CV",
    reorderSubtitle:
      "Pindahkan bagian ke atas atau bawah. Ini hanya mengubah tata letak CV utama Anda.",
    moveUp: "Naikkan",
    moveDown: "Turunkan",
    savingCard: {
      subtitle: "Menyimpan perubahan CV utama Anda.",
      title: "Menyimpan perubahan CV…",
      body: "Biarkan EMENDA tetap terbuka sebentar.",
    },
    error: {
      title: "Perubahan CV Anda tidak dapat disimpan.",
      body: "Perubahan Anda masih ada di sini.",
    },
    tryAgain: "Coba simpan lagi",
    offline: {
      title: "Anda sedang offline",
      body: "Sambungkan kembali untuk menyimpan perubahan CV Anda.",
    },
    unsaved: {
      title: "Buang perubahan CV?",
      body: "Perubahan CV yang belum disimpan akan hilang.",
      keepEditing: "Lanjut mengedit",
      discard: "Buang perubahan",
    },
  },
  ja: {
    back: "キャリア・CV",
    title: "マイCVを編集",
    subtitle: "マスターCVに表示される内容を管理します。",
    headlineLabel: "ヘッドライン",
    summaryLabel: "職務要約 · 任意",
    sectionsTitle: "CVのセクション",
    sections: {
      experience: "職歴",
      education: "学歴",
      skills: "スキル・言語",
      qualifications: "資格・研修",
    },
    included: "掲載中",
    hidden: "非表示",
    reorder: "セクションを並べ替え",
    save: "CVの変更を保存",
    saving: "保存中…",
    visibilitySheet: {
      title: "セクションの表示を管理",
      body: "マスターCVのセクションを掲載または非表示にします。",
      include: "掲載",
      hide: "非表示",
    },
    reorderTitle: "CVセクションの並べ替え",
    reorderSubtitle:
      "セクションを上下に移動します。マスターCVのレイアウトのみが変わります。",
    moveUp: "上へ移動",
    moveDown: "下へ移動",
    savingCard: {
      subtitle: "マスターCVの変更を保存しています。",
      title: "CVの変更を保存しています…",
      body: "しばらくEMENDAを開いたままにしてください。",
    },
    error: {
      title: "CVの変更を保存できませんでした。",
      body: "編集内容はまだ残っています。",
    },
    tryAgain: "もう一度保存する",
    offline: {
      title: "オフラインです",
      body: "再接続するとCVの変更を保存できます。",
    },
    unsaved: {
      title: "CVの変更を破棄しますか？",
      body: "保存されていないCVの編集内容は失われます。",
      keepEditing: "編集を続ける",
      discard: "変更を破棄",
    },
  },
});
