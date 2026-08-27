import { defineSectionCopy } from "@/i18n/copy";
import type { ProficiencyLevel } from "./skillsMock";

/** Copy for /worker/career/skills (Figma WD-27 A–K · mobile W-27).
 *  EN strings are verbatim from the fetched WD-27 / WD-27B / WD-27H frames. */
export interface SkillsCopy {
  backLink: string;
  title: string;
  subtitle: string;
  skillsCardTitle: string;
  languagesCardTitle: string;
  skillsTotal: (n: number) => string;
  moreSkills: (n: number) => string;
  editButton: string;
  /* edit mode */
  editTitle: string;
  editSubtitle: string;
  addSkillChip: string;
  addLanguageChip: string;
  editLevels: string;
  saveChanges: string;
  saving: string;
  removeSkillAria: (skill: string) => string;
  /* sheets */
  addSkillTitle: string;
  addSkillSubtitle: string;
  addSkillAction: string;
  saveSkill: string;
  offlineFormSubtitle: string;
  offlineBannerTitle: string;
  offlineBannerBody: string;
  skillLabel: string;
  skillPlaceholder: string;
  editSkillTitle: string;
  editSkillSubtitle: string;
  removeSkill: string;
  addLanguageTitle: string;
  addLanguageSubtitle: string;
  languageLabel: string;
  languagePlaceholder: string;
  proficiencyLabel: string;
  editLanguageTitle: string;
  editLanguageSubtitle: string;
  removeLanguage: string;
  proficiencyTitle: string;
  proficiencySubtitle: string;
  levelBasic: string;
  levelConversational: string;
  levelWorking: string;
  levelNative: string;
  /* states */
  emptySubtitle: string;
  savingSubtitle: string;
  saveFailedSubtitle: string;
  trySavingAgain: string;
  addLanguageCta: string;
  saveLanguage: string;
  emptyTitle: string;
  emptyBody: string;
  emptyCta: string;
  offlineTitle: string;
  offlineBody: string;
  saveFailedTitle: string;
  saveFailedBody: string;
  tryAgain: string;
  unsavedTitle: string;
  unsavedBody: string;
  keepEditing: string;
  discardChanges: string;
}

/** Maps a stored proficiency key to its localized label. */
export function levelLabel(c: SkillsCopy, level: ProficiencyLevel): string {
  switch (level) {
    case "basic":
      return c.levelBasic;
    case "conversational":
      return c.levelConversational;
    case "working":
      return c.levelWorking;
    default:
      return c.levelNative;
  }
}

export const SKILLS_COPY = defineSectionCopy<SkillsCopy>({
  en: {
    backLink: "Career & CV",
    title: "Skills & languages",
    subtitle: "Manage capabilities used in your CV and applications.",
    skillsCardTitle: "Skills",
    languagesCardTitle: "Languages",
    skillsTotal: (n) => `${n} skills total`,
    moreSkills: (n) => `+${n} more`,
    editButton: "Edit skills & languages",
    editTitle: "Edit skills & languages",
    editSubtitle:
      "Keep only skills and language levels you are comfortable sharing.",
    addSkillChip: "+ Add skill",
    addLanguageChip: "+ Add language",
    editLevels: "Edit levels",
    saveChanges: "Save changes",
    saving: "Saving…",
    removeSkillAria: (skill) => `Remove ${skill}`,
    addSkillTitle: "Add skill",
    addSkillSubtitle:
      "Add a skill you are comfortable including in your career profile.",
    addSkillAction: "Add",
    saveSkill: "Save skill",
    offlineFormSubtitle: "Your edits stay here while you reconnect.",
    offlineBannerTitle: "No internet connection",
    offlineBannerBody: "Reconnect before saving.",
    skillLabel: "Skill",
    skillPlaceholder: "Type skill",
    editSkillTitle: "Edit skill",
    editSkillSubtitle: "Update or remove this skill from your career profile.",
    removeSkill: "Remove skill",
    addLanguageTitle: "Add language",
    addLanguageSubtitle: "Add a language, then set its level in the editor.",
    languageLabel: "Language",
    languagePlaceholder: "Type language",
    proficiencyLabel: "Proficiency",
    editLanguageTitle: "Edit language",
    editLanguageSubtitle:
      "Update the proficiency level or remove this language.",
    removeLanguage: "Remove language",
    proficiencyTitle: "Language proficiency",
    proficiencySubtitle:
      "Choose the level shown in your career profile and CV.",
    levelBasic: "Basic",
    levelConversational: "Conversational",
    levelWorking: "Working proficiency",
    levelNative: "Native",
    emptySubtitle:
      "Add skills and languages to improve your CV readiness.",
    savingSubtitle: "Saving your skills and language changes.",
    saveFailedSubtitle: "Your edits are still here.",
    trySavingAgain: "Try saving again",
    addLanguageCta: "Add",
    saveLanguage: "Save language",
    emptyTitle: "No skills or languages yet",
    emptyBody:
      "Add the skills you use at work and languages you can communicate in.",
    emptyCta: "Add skills & languages",
    offlineTitle: "You're offline",
    offlineBody: "Showing cached skills and languages.",
    saveFailedTitle: "Couldn’t save your changes.",
    saveFailedBody: "Your edits are still here.",
    tryAgain: "Try again",
    unsavedTitle: "Discard skills & language changes?",
    unsavedBody: "Your unsaved edits will be lost.",
    keepEditing: "Keep editing",
    discardChanges: "Discard changes",
  },
  id: {
    backLink: "Karier & CV",
    title: "Keterampilan & bahasa",
    subtitle:
      "Kelola kemampuan yang digunakan di CV dan lamaran Anda.",
    skillsCardTitle: "Keterampilan",
    languagesCardTitle: "Bahasa",
    skillsTotal: (n) => `${n} keterampilan total`,
    moreSkills: (n) => `+${n} lainnya`,
    editButton: "Ubah keterampilan & bahasa",
    editTitle: "Ubah keterampilan & bahasa",
    editSubtitle:
      "Simpan hanya keterampilan dan tingkat bahasa yang nyaman Anda bagikan.",
    addSkillChip: "+ Tambah keterampilan",
    addLanguageChip: "+ Tambah bahasa",
    editLevels: "Ubah tingkat",
    saveChanges: "Simpan perubahan",
    saving: "Menyimpan…",
    removeSkillAria: (skill) => `Hapus ${skill}`,
    addSkillTitle: "Tambah keterampilan",
    addSkillSubtitle:
      "Tambahkan keterampilan yang nyaman Anda cantumkan di profil karier Anda.",
    addSkillAction: "Tambah",
    saveSkill: "Simpan keterampilan",
    offlineFormSubtitle:
      "Perubahan Anda tersimpan di sini sampai koneksi kembali.",
    offlineBannerTitle: "Tidak ada koneksi internet",
    offlineBannerBody: "Sambungkan kembali sebelum menyimpan.",
    skillLabel: "Keterampilan",
    skillPlaceholder: "Ketik keterampilan",
    editSkillTitle: "Ubah keterampilan",
    editSkillSubtitle:
      "Perbarui atau hapus keterampilan ini dari profil karier Anda.",
    removeSkill: "Hapus keterampilan",
    addLanguageTitle: "Tambah bahasa",
    addLanguageSubtitle:
      "Tambahkan bahasa, lalu atur tingkatnya di editor.",
    languageLabel: "Bahasa",
    languagePlaceholder: "Ketik bahasa",
    proficiencyLabel: "Kemahiran",
    editLanguageTitle: "Ubah bahasa",
    editLanguageSubtitle:
      "Perbarui tingkat kemahiran atau hapus bahasa ini.",
    removeLanguage: "Hapus bahasa",
    proficiencyTitle: "Kemahiran bahasa",
    proficiencySubtitle:
      "Pilih tingkat yang ditampilkan di profil karier dan CV Anda.",
    levelBasic: "Dasar",
    levelConversational: "Percakapan",
    levelWorking: "Kemahiran kerja",
    levelNative: "Penutur asli",
    emptySubtitle:
      "Tambahkan keterampilan dan bahasa untuk meningkatkan kesiapan CV Anda.",
    savingSubtitle: "Menyimpan perubahan keterampilan dan bahasa Anda.",
    saveFailedSubtitle: "Perubahan Anda masih ada di sini.",
    trySavingAgain: "Coba simpan lagi",
    addLanguageCta: "Tambah",
    saveLanguage: "Simpan bahasa",
    emptyTitle: "Belum ada keterampilan atau bahasa",
    emptyBody:
      "Tambahkan keterampilan yang Anda pakai di tempat kerja dan bahasa yang Anda kuasai.",
    emptyCta: "Tambah keterampilan & bahasa",
    offlineTitle: "Anda sedang offline",
    offlineBody: "Menampilkan keterampilan dan bahasa dari cache.",
    saveFailedTitle: "Tidak dapat menyimpan perubahan Anda.",
    saveFailedBody: "Perubahan Anda masih ada di sini.",
    tryAgain: "Coba lagi",
    unsavedTitle: "Buang perubahan keterampilan & bahasa?",
    unsavedBody: "Perubahan yang belum disimpan akan hilang.",
    keepEditing: "Lanjut mengedit",
    discardChanges: "Buang perubahan",
  },
  ja: {
    backLink: "キャリア & CV",
    title: "スキルと言語",
    subtitle: "CVと応募で使うスキル・言語を管理します。",
    skillsCardTitle: "スキル",
    languagesCardTitle: "言語",
    skillsTotal: (n) => `スキル合計 ${n} 件`,
    moreSkills: (n) => `他 ${n} 件`,
    editButton: "スキルと言語を編集",
    editTitle: "スキルと言語を編集",
    editSubtitle: "共有してもよいスキルと言語レベルだけを残してください。",
    addSkillChip: "+ スキルを追加",
    addLanguageChip: "+ 言語を追加",
    editLevels: "レベルを編集",
    saveChanges: "変更を保存",
    saving: "保存中…",
    removeSkillAria: (skill) => `${skill} を削除`,
    addSkillTitle: "スキルを追加",
    addSkillSubtitle:
      "キャリアプロフィールに載せてもよいスキルを追加します。",
    addSkillAction: "追加",
    saveSkill: "スキルを保存",
    offlineFormSubtitle: "再接続するまで入力内容はここに残ります。",
    offlineBannerTitle: "インターネット接続がありません",
    offlineBannerBody: "保存する前に再接続してください。",
    skillLabel: "スキル",
    skillPlaceholder: "スキルを入力",
    editSkillTitle: "スキルを編集",
    editSkillSubtitle: "このスキルを更新するか、キャリアプロフィールから削除します。",
    removeSkill: "スキルを削除",
    addLanguageTitle: "言語を追加",
    addLanguageSubtitle: "言語を追加し、レベルはエディターで設定します。",
    languageLabel: "言語",
    languagePlaceholder: "言語を入力",
    proficiencyLabel: "習熟度",
    editLanguageTitle: "言語を編集",
    editLanguageSubtitle: "習熟度を更新するか、この言語を削除します。",
    removeLanguage: "言語を削除",
    proficiencyTitle: "言語の習熟度",
    proficiencySubtitle:
      "キャリアプロフィールとCVに表示するレベルを選んでください。",
    levelBasic: "基礎",
    levelConversational: "日常会話",
    levelWorking: "業務レベル",
    levelNative: "ネイティブ",
    emptySubtitle: "スキルと言語を追加してCVの充実度を高めましょう。",
    savingSubtitle: "スキルと言語の変更を保存しています。",
    saveFailedSubtitle: "編集内容はここに残っています。",
    trySavingAgain: "もう一度保存する",
    addLanguageCta: "追加",
    saveLanguage: "言語を保存",
    emptyTitle: "スキル・言語はまだありません",
    emptyBody:
      "仕事で使うスキルと、会話できる言語を追加してください。",
    emptyCta: "スキルと言語を追加",
    offlineTitle: "オフラインです",
    offlineBody: "キャッシュされたスキルと言語を表示しています。",
    saveFailedTitle: "変更を保存できませんでした。",
    saveFailedBody: "編集内容はここに残っています。",
    tryAgain: "再試行",
    unsavedTitle: "スキルと言語の変更を破棄しますか？",
    unsavedBody: "未保存の編集内容は失われます。",
    keepEditing: "編集を続ける",
    discardChanges: "変更を破棄",
  },
});
