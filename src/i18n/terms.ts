import type { Language } from "./language";

/**
 * Display localization for enum-like DATA values (report flags, conditions,
 * quick notes, shifts). Raw stored values stay English — only presentation
 * changes. Unknown values render as-is (documented fallback).
 */
const TERMS: Record<string, Record<Language, string>> = {
  Normal: { en: "Normal", id: "Normal", ja: "通常" },
  "Needs attention": {
    en: "Needs attention",
    id: "Perlu perhatian",
    ja: "要注意",
  },
  Urgent: { en: "Urgent", id: "Mendesak", ja: "緊急" },
  Stable: { en: "Stable", id: "Stabil", ja: "安定" },
  "Condition normal": {
    en: "Condition normal",
    id: "Kondisi normal",
    ja: "状態は通常",
  },
  "Meal reduced": { en: "Meal reduced", id: "Makan berkurang", ja: "食事減少" },
  "Looks tired": { en: "Looks tired", id: "Tampak lelah", ja: "疲れ気味" },
  Monitor: { en: "Monitor", id: "Pantau", ja: "経過観察" },
  "Day shift": { en: "Day shift", id: "Shift siang", ja: "日勤" },

  /* Company Admin vocabulary. Six of the ten Admin areas independently asked
     for these: the same status words appear in the employee directory, the
     team coverage board, the report queue and the daily-report table, so they
     belong to the shared table rather than to any one area's copy file.
     Stored values stay English; only the display changes. */
  Active: { en: "Active", id: "Aktif", ja: "有効" },
  "Pending profile": {
    en: "Pending profile",
    id: "Profil tertunda",
    ja: "プロフィール未完了",
  },
  Invited: { en: "Invited", id: "Diundang", ja: "招待済み" },
  Incomplete: { en: "Incomplete", id: "Belum lengkap", ja: "未完了" },
  Inactive: { en: "Inactive", id: "Nonaktif", ja: "無効" },
  Worker: { en: "Worker", id: "Pekerja", ja: "労働者" },
  Manager: { en: "Manager", id: "Manajer", ja: "マネージャー" },
  Unassigned: { en: "Unassigned", id: "Belum ditugaskan", ja: "未割り当て" },
  Submitted: { en: "Submitted", id: "Terkirim", ja: "提出済み" },
  Late: { en: "Late", id: "Terlambat", ja: "遅延" },
  Missing: { en: "Missing", id: "Belum ada", ja: "未提出" },
  Pending: { en: "Pending", id: "Tertunda", ja: "保留中" },
  "In progress": { en: "In progress", id: "Sedang berjalan", ja: "対応中" },
  Resolved: { en: "Resolved", id: "Selesai", ja: "解決済み" },
  High: { en: "High", id: "Tinggi", ja: "高" },
  Medium: { en: "Medium", id: "Sedang", ja: "中" },
  Low: { en: "Low", id: "Rendah", ja: "低" },
  Healthy: { en: "Healthy", id: "Sehat", ja: "良好" },
  "Low load": { en: "Low load", id: "Beban rendah", ja: "負荷低" },
  "No owner": { en: "No owner", id: "Tanpa penanggung jawab", ja: "担当者なし" },
  Enabled: { en: "Enabled", id: "Aktif", ja: "有効" },
  Disabled: { en: "Disabled", id: "Nonaktif", ja: "無効" },
  Harassment: { en: "Harassment", id: "Pelecehan", ja: "ハラスメント" },
  "Work schedule": {
    en: "Work schedule",
    id: "Jadwal kerja",
    ja: "勤務スケジュール",
  },
  "Document support": {
    en: "Document support",
    id: "Dukungan dokumen",
    ja: "書類サポート",
  },
  "Housing issue": {
    en: "Housing issue",
    id: "Masalah tempat tinggal",
    ja: "住居の問題",
  },
  Payroll: { en: "Payroll", id: "Penggajian", ja: "給与" },
};

export function localizeTerm(value: string, language: Language): string {
  return TERMS[value]?.[language] ?? value;
}
