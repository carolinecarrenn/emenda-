import { defineSectionCopy } from "@/i18n/copy";

/** WD-30 Create CV — all UI/system strings (EN verbatim from Figma). */
export interface CreateCvCopy {
  back: string;
  title: string;
  subtitle: string;
  sourcesTitle: string;
  sources: {
    personalProfile: string;
    experience: string;
    education: string;
    skills: string;
    qualifications: string;
  };
  sourcesHint: string;
  createButton: string;
  missing: {
    subtitle: string;
    experienceTitle: string;
    experienceBody: string;
    addExperience: string;
    addEducation: string;
    skillsTitle: string;
    skillsBody: string;
    addSkills: string;
    hint: string;
    backToCareer: string;
  };
  creating: {
    pageSubtitle: string;
    title: string;
    body: string;
    button: string;
  };
  created: {
    pageTitle: string;
    subtitle: string;
    title: string;
    builtFrom: string;
    ready: string;
    review: string;
  };
  failed: {
    pageTitle: string;
    pageSubtitle: string;
    title: string;
    body: string;
    button: string;
  };
  offline: {
    pageTitle: string;
    pageSubtitle: string;
    title: string;
    body: string;
    button: string;
  };
}

export const CREATE_CV_COPY = defineSectionCopy<CreateCvCopy>({
  en: {
    back: "Career & CV",
    title: "Create CV",
    subtitle: "Build a master CV from your worker-owned career profile.",
    sourcesTitle: "Include in your CV",
    sources: {
      personalProfile: "Personal profile",
      experience: "Experience · 3 roles",
      education: "Education · 2 entries",
      skills: "Skills & languages",
      qualifications: "Qualifications & training · 3",
    },
    sourcesHint: "You can edit what appears after the CV is created.",
    createButton: "Create CV",
    missing: {
      subtitle: "Complete the missing career details before creating a CV.",
      experienceTitle: "Experience or education missing",
      experienceBody: "Add at least one work experience or education entry.",
      addExperience: "Add experience",
      addEducation: "Add education",
      skillsTitle: "Skills missing",
      skillsBody: "Add at least one skill before creating your CV.",
      addSkills: "Add skills",
      hint: "Create CV becomes available when all required items are complete.",
      backToCareer: "Back to Career & CV",
    },
    creating: {
      pageSubtitle: "Building your CV from approved career-profile data.",
      title: "Creating your CV…",
      body: "Organizing your profile, experience, education and skills.",
      button: "Creating…",
    },
    created: {
      pageTitle: "CV created",
      subtitle: "Your new master CV is ready to review.",
      title: "CV created",
      builtFrom: "Built from your career profile",
      ready: "Ready for applications after review",
      review: "Review My CV",
    },
    failed: {
      pageTitle: "Couldn’t create your CV",
      pageSubtitle:
        "Your career profile is unchanged. Try creating the CV again.",
      title: "CV creation failed",
      body:
        "We couldn’t finish creating your CV. Your saved career data is unchanged.",
      button: "Try again",
    },
    offline: {
      pageTitle: "No internet connection",
      pageSubtitle:
        "Reconnect before creating your CV. Your career profile stays saved.",
      title: "No internet connection",
      body:
        "Reconnect to create your CV. Your saved career data is still available.",
      button: "Retry",
    },
  },
  id: {
    back: "Karier & CV",
    title: "Buat CV",
    subtitle: "Bangun CV utama dari profil karier milik Anda sebagai pekerja.",
    sourcesTitle: "Sertakan dalam CV Anda",
    sources: {
      personalProfile: "Profil pribadi",
      experience: "Pengalaman · 3 peran",
      education: "Pendidikan · 2 entri",
      skills: "Keterampilan & bahasa",
      qualifications: "Kualifikasi & pelatihan · 3",
    },
    sourcesHint: "Anda dapat mengedit apa yang ditampilkan setelah CV dibuat.",
    createButton: "Buat CV",
    missing: {
      subtitle: "Lengkapi detail karier yang kurang sebelum membuat CV.",
      experienceTitle: "Pengalaman atau pendidikan belum ada",
      experienceBody:
        "Tambahkan minimal satu entri pengalaman kerja atau pendidikan.",
      addExperience: "Tambah pengalaman",
      addEducation: "Tambah pendidikan",
      skillsTitle: "Keterampilan belum ada",
      skillsBody: "Tambahkan minimal satu keterampilan sebelum membuat CV Anda.",
      addSkills: "Tambah keterampilan",
      hint: "Buat CV akan tersedia saat semua item wajib telah lengkap.",
      backToCareer: "Kembali ke Karier & CV",
    },
    creating: {
      pageSubtitle: "Menyusun CV Anda dari data profil karier yang disetujui.",
      title: "Membuat CV Anda…",
      body: "Menyusun profil, pengalaman, pendidikan, dan keahlian Anda.",
      button: "Membuat…",
    },
    created: {
      pageTitle: "CV dibuat",
      subtitle: "CV utama baru Anda siap ditinjau.",
      title: "CV dibuat",
      builtFrom: "Dibuat dari profil karier Anda",
      ready: "Siap untuk lamaran setelah ditinjau",
      review: "Tinjau CV Saya",
    },
    failed: {
      pageTitle: "CV Anda tidak dapat dibuat",
      pageSubtitle:
        "Profil karier Anda tidak berubah. Coba buat CV lagi.",
      title: "Pembuatan CV gagal",
      body:
        "Kami tidak dapat menyelesaikan pembuatan CV Anda. Data karier tersimpan Anda tidak berubah.",
      button: "Coba lagi",
    },
    offline: {
      pageTitle: "Tidak ada koneksi internet",
      pageSubtitle:
        "Sambungkan kembali sebelum membuat CV. Profil karier Anda tetap tersimpan.",
      title: "Tidak ada koneksi internet",
      body:
        "Sambungkan kembali untuk membuat CV. Data karier tersimpan Anda tetap tersedia.",
      button: "Coba lagi",
    },
  },
  ja: {
    back: "キャリア・CV",
    title: "CVを作成",
    subtitle: "ワーカー自身のキャリアプロフィールからマスターCVを作成します。",
    sourcesTitle: "CVに含める内容",
    sources: {
      personalProfile: "個人プロフィール",
      experience: "職歴 · 3件",
      education: "学歴 · 2件",
      skills: "スキル・言語",
      qualifications: "資格・研修 · 3",
    },
    sourcesHint: "CV作成後に表示される内容を編集できます。",
    createButton: "CVを作成",
    missing: {
      subtitle: "CVを作成する前に、不足しているキャリア情報を入力してください。",
      experienceTitle: "職歴または学歴がありません",
      experienceBody: "職歴または学歴を少なくとも1件追加してください。",
      addExperience: "職歴を追加",
      addEducation: "学歴を追加",
      skillsTitle: "スキルがありません",
      skillsBody: "CVを作成する前にスキルを少なくとも1つ追加してください。",
      addSkills: "スキルを追加",
      hint: "必須項目がすべて揃うとCVを作成できるようになります。",
      backToCareer: "キャリア・CVに戻る",
    },
    creating: {
      pageSubtitle: "承認済みのキャリアプロフィール情報からCVを作成しています。",
      title: "CVを作成しています…",
      body: "プロフィール・職歴・学歴・スキルを整理しています。",
      button: "作成中…",
    },
    created: {
      pageTitle: "CVを作成しました",
      subtitle: "新しいマスターCVを確認できます。",
      title: "CVを作成しました",
      builtFrom: "キャリアプロフィールから作成",
      ready: "確認後に応募で利用できます",
      review: "マイCVを確認",
    },
    failed: {
      pageTitle: "CVを作成できませんでした",
      pageSubtitle:
        "キャリアプロフィールは変更されていません。もう一度CVを作成してください。",
      title: "CVの作成に失敗しました",
      body:
        "CVの作成を完了できませんでした。保存済みのキャリア情報は変更されていません。",
      button: "もう一度試す",
    },
    offline: {
      pageTitle: "インターネット接続がありません",
      pageSubtitle:
        "CVを作成する前に再接続してください。キャリアプロフィールは保存されています。",
      title: "インターネット接続がありません",
      body:
        "再接続するとCVを作成できます。保存済みのキャリア情報は利用できます。",
      button: "再試行",
    },
  },
});
