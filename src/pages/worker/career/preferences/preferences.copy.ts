import { defineSectionCopy } from "@/i18n/copy";

/** WD-29 Work Preferences — all UI/system strings (EN verbatim from Figma). */
export interface PreferencesCopy {
  back: string;
  title: string;
  subtitle: string;
  rows: {
    targetRole: string;
    preferredLocation: string;
    workType: string;
    availability: string;
    industry: string;
  };
  privacy: string;
  editButton: string;
  editTitle: string;
  editSubtitle: string;
  fields: {
    targetRole: string;
    preferredLocation: string;
    workType: string;
    availability: string;
    industry: string;
  };
  save: string;
  saving: string;
  savingSubtitle: string;
  /** Summary availability value, e.g. "From Apr 2027". */
  fromTemplate: string;
  availableImmediately: string;
  locationSheet: { title: string; body: string };
  workTypeSheet: { title: string; body: string };
  industrySheet: { title: string; body: string };
  availabilitySheet: { title: string; body: string };
  locations: {
    japan: string;
    tokyo: string;
    osaka: string;
    fukuoka: string;
    remote: string;
  };
  workTypes: {
    fullTime: string;
    contract: string;
    partTime: string;
    internship: string;
  };
  industries: {
    it: string;
    manufacturing: string;
    hospitality: string;
    logistics: string;
    other: string;
  };
  error: { title: string; body: string };
  tryAgain: string;
  offline: { title: string; body: string; subtitle: string };
  unsaved: {
    title: string;
    body: string;
    keepEditing: string;
    discard: string;
  };
}

export const PREFERENCES_COPY = defineSectionCopy<PreferencesCopy>({
  en: {
    back: "Career & CV",
    title: "Work preferences",
    subtitle: "Set preferences used for job discovery and future applications.",
    rows: {
      targetRole: "Target role",
      preferredLocation: "Preferred location",
      workType: "Work type",
      availability: "Availability",
      industry: "Industry",
    },
    privacy: "These preferences are not automatically shared with employers.",
    editButton: "Edit work preferences",
    editTitle: "Edit work preferences",
    editSubtitle: "Update what you are looking for.",
    fields: {
      targetRole: "TARGET ROLE",
      preferredLocation: "PREFERRED LOCATION",
      workType: "WORK TYPE",
      availability: "AVAILABILITY",
      industry: "INDUSTRY · OPTIONAL",
    },
    save: "Save preferences",
    saving: "Saving…",
    savingSubtitle: "Saving your work preferences.",
    fromTemplate: "From {date}",
    availableImmediately: "Available immediately",
    locationSheet: {
      title: "Preferred location",
      body: "Choose the location used for job discovery and future applications.",
    },
    workTypeSheet: {
      title: "Work type",
      body: "Choose the kind of work you are looking for.",
    },
    industrySheet: {
      title: "Preferred industry",
      body: "Optional. Choose an industry to improve job discovery.",
    },
    availabilitySheet: {
      title: "Available from",
      body: "Enter the date you could start a new role.",
    },
    locations: {
      japan: "Japan",
      tokyo: "Tokyo",
      osaka: "Osaka",
      fukuoka: "Fukuoka",
      remote: "Remote in Japan",
    },
    workTypes: {
      fullTime: "Full-time",
      contract: "Contract",
      partTime: "Part-time",
      internship: "Internship",
    },
    industries: {
      it: "IT / Technology",
      manufacturing: "Manufacturing",
      hospitality: "Hospitality",
      logistics: "Logistics",
      other: "Other",
    },
    error: {
      title: "Couldn’t save your preferences.",
      body: "Your edits are still here.",
    },
    tryAgain: "Try saving again",
    offline: {
      title: "No internet connection",
      body: "Reconnect before saving.",
      subtitle: "Your edits stay here while you reconnect.",
    },
    unsaved: {
      title: "Discard preference changes?",
      body: "Your unsaved work preference edits will be lost.",
      keepEditing: "Keep editing",
      discard: "Discard changes",
    },
  },
  id: {
    back: "Karier & CV",
    title: "Preferensi kerja",
    subtitle:
      "Atur preferensi yang digunakan untuk penemuan pekerjaan dan lamaran di masa depan.",
    rows: {
      targetRole: "Peran target",
      preferredLocation: "Lokasi pilihan",
      workType: "Jenis pekerjaan",
      availability: "Ketersediaan",
      industry: "Industri",
    },
    privacy:
      "Preferensi ini tidak dibagikan secara otomatis kepada pemberi kerja.",
    editButton: "Ubah preferensi kerja",
    editTitle: "Ubah preferensi kerja",
    editSubtitle: "Perbarui apa yang Anda cari.",
    fields: {
      targetRole: "PERAN TARGET",
      preferredLocation: "LOKASI PILIHAN",
      workType: "JENIS PEKERJAAN",
      availability: "KETERSEDIAAN",
      industry: "INDUSTRI · OPSIONAL",
    },
    save: "Simpan preferensi",
    saving: "Menyimpan…",
    savingSubtitle: "Menyimpan preferensi kerja Anda.",
    fromTemplate: "Mulai {date}",
    availableImmediately: "Tersedia segera",
    locationSheet: {
      title: "Lokasi pilihan",
      body: "Pilih lokasi yang digunakan untuk penemuan pekerjaan dan lamaran di masa depan.",
    },
    workTypeSheet: {
      title: "Jenis pekerjaan",
      body: "Pilih jenis pekerjaan yang Anda cari.",
    },
    industrySheet: {
      title: "Industri pilihan",
      body: "Opsional. Pilih industri untuk meningkatkan penemuan pekerjaan.",
    },
    availabilitySheet: {
      title: "Tersedia mulai",
      body: "Masukkan tanggal Anda dapat memulai peran baru.",
    },
    locations: {
      japan: "Jepang",
      tokyo: "Tokyo",
      osaka: "Osaka",
      fukuoka: "Fukuoka",
      remote: "Jarak jauh di Jepang",
    },
    workTypes: {
      fullTime: "Penuh waktu",
      contract: "Kontrak",
      partTime: "Paruh waktu",
      internship: "Magang",
    },
    industries: {
      it: "TI / Teknologi",
      manufacturing: "Manufaktur",
      hospitality: "Perhotelan",
      logistics: "Logistik",
      other: "Lainnya",
    },
    error: {
      title: "Preferensi Anda tidak dapat disimpan.",
      body: "Perubahan Anda masih ada di sini.",
    },
    tryAgain: "Coba simpan lagi",
    offline: {
      title: "Tidak ada koneksi internet",
      body: "Sambungkan kembali sebelum menyimpan.",
      subtitle: "Perubahan Anda tersimpan di sini sampai koneksi kembali.",
    },
    unsaved: {
      title: "Buang perubahan preferensi?",
      body: "Perubahan preferensi kerja yang belum disimpan akan hilang.",
      keepEditing: "Lanjut mengedit",
      discard: "Buang perubahan",
    },
  },
  ja: {
    back: "キャリア・CV",
    title: "勤務条件",
    subtitle: "求人検索と今後の応募に使われる条件を設定します。",
    rows: {
      targetRole: "希望職種",
      preferredLocation: "希望勤務地",
      workType: "雇用形態",
      availability: "就業可能時期",
      industry: "業界",
    },
    privacy: "これらの条件が雇用主に自動的に共有されることはありません。",
    editButton: "勤務条件を編集",
    editTitle: "勤務条件を編集",
    editSubtitle: "探している条件を更新します。",
    fields: {
      targetRole: "希望職種",
      preferredLocation: "希望勤務地",
      workType: "雇用形態",
      availability: "就業可能時期",
      industry: "業界 · 任意",
    },
    save: "条件を保存",
    saving: "保存中…",
    savingSubtitle: "勤務条件を保存しています。",
    fromTemplate: "{date}から",
    availableImmediately: "すぐに就業可能",
    locationSheet: {
      title: "希望勤務地",
      body: "求人検索と今後の応募に使う勤務地を選択します。",
    },
    workTypeSheet: {
      title: "雇用形態",
      body: "希望する働き方を選んでください。",
    },
    industrySheet: {
      title: "希望する業界",
      body: "任意。業界を選ぶと求人が見つけやすくなります。",
    },
    availabilitySheet: {
      title: "就業可能日",
      body: "新しい仕事を開始できる日付を入力します。",
    },
    locations: {
      japan: "日本",
      tokyo: "東京",
      osaka: "大阪",
      fukuoka: "福岡",
      remote: "日本国内リモート",
    },
    workTypes: {
      fullTime: "正社員",
      contract: "契約社員",
      partTime: "パート・アルバイト",
      internship: "インターンシップ",
    },
    industries: {
      it: "IT・テクノロジー",
      manufacturing: "製造",
      hospitality: "ホスピタリティ",
      logistics: "物流",
      other: "その他",
    },
    error: {
      title: "条件を保存できませんでした。",
      body: "編集内容はまだ残っています。",
    },
    tryAgain: "もう一度保存する",
    offline: {
      title: "インターネット接続がありません",
      body: "保存する前に再接続してください。",
      subtitle: "再接続するまで入力内容はここに残ります。",
    },
    unsaved: {
      title: "条件の変更を破棄しますか？",
      body: "保存されていない勤務条件の編集内容は失われます。",
      keepEditing: "編集を続ける",
      discard: "変更を破棄",
    },
  },
});
