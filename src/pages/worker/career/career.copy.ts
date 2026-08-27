import { defineSectionCopy } from "@/i18n/copy";

/**
 * UI copy for Career & CV hub + CV pipeline (WD-21..WD-24). EN strings are the
 * Figma mock text verbatim; ID/JA are faithful translations kept consistent
 * with the shared vocabulary in i18n/common.ts. Mock data (names, employers,
 * skills, extracted CV content) stays raw in careerMock.ts.
 */

/** Replaces "{key}" placeholders in a copy template. */
export function fillCopy(
  template: string,
  vars: Record<string, string>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? vars[key] : match,
  );
}

export interface CareerCopy {
  breadcrumb: string;
  hub: {
    title: string;
    subtitle: string;
    loadingSubtitle: string;
    readyTitle: string;
    readyBody: string;
    myCvTitle: string;
    viewCv: string;
    editCv: string;
    updatedOn: string;
    profileTitle: string;
    rowExperience: string;
    rowEducation: string;
    rowSkills: string;
    rowQualifications: string;
    countExperience: string;
    countEducation: string;
    countSkills: string;
    countQualifications: string;
    profileHint: string;
    workPrefsTitle: string;
    updateTitle: string;
    updateBody: string;
    reviewUpdate: string;
    /** Hub entry point into the CV-source flows (W-22 Upload · W-30 Create). */
    sources: {
      title: string;
      body: string;
      uploadCta: string;
      createCta: string;
    };
    noCv: {
      subtitle: string;
      bannerTitle: string;
      bannerBody: string;
      uploadTitle: string;
      uploadBody: string;
      uploadCta: string;
      createTitle: string;
      createBody: string;
      createCta: string;
      privacyTitle: string;
      privacyBody: string;
    };
    offline: {
      subtitle: string;
      bannerTitle: string;
      bannerBody: string;
      lastSynced: string;
      viewCachedCv: string;
      cachedProfileTitle: string;
      cachedExperience: string;
      cachedEducation: string;
      cachedSkills: string;
      note: string;
    };
    incomplete: {
      subtitle: string;
      bannerTitle: string;
      bannerBody: string;
      completeCta: string;
      draftLabel: string;
      notReady: string;
      missingTitle: string;
      missing1: string;
      missing2: string;
      missing3: string;
      note: string;
    };
  };
  upload: {
    title: string;
    subtitle: string;
    fileCardTitle: string;
    fileMeta: string;
    chooseFile: string;
    privacyTitle: string;
    privacyBody: string;
    uploadingSubtitle: string;
    uploadingStatus: string;
    uploadingHint: string;
    uploadingButton: string;
    failedError: string;
    retryUpload: string;
    unsupportedError: string;
    offlineError: string;
    chooseSubtitle: string;
    offlineStatusTitle: string;
    offlineStatusBody: string;
    reconnectToUpload: string;
  };
  import: {
    title: string;
    subtitle: string;
    experienceTitle: string;
    educationTitle: string;
    skillsTitle: string;
    qualificationsTitle: string;
    qualificationsFound: string;
    noteTitle: string;
    noteBody: string;
    importCta: string;
    savingSubtitle: string;
    savingTitle: string;
    savingBody: string;
    savingButton: string;
    failedTitle: string;
    failedBody: string;
    tryAgain: string;
    reviewExperienceTitle: string;
    reviewExperienceSubtitle: string;
    reviewEducationTitle: string;
    reviewEducationSubtitle: string;
    reviewSkillsTitle: string;
    reviewSkillsSubtitle: string;
    reviewQualificationsTitle: string;
    reviewQualificationsSubtitle: string;
    keep: string;
    removed: string;
    kept: string;
    remove: string;
    doneReviewing: string;
    skillsCardTitle: string;
    languagesCardTitle: string;
    reviewSkillSheetTitle: string;
    reviewSkillSheetBody: string;
    keepSkill: string;
    removeSkill: string;
    reviewLanguageSheetTitle: string;
    reviewLanguageSheetBody: string;
    keepLanguage: string;
    removeLanguage: string;
    editExperienceTitle: string;
    editEducationTitle: string;
    editSubtitle: string;
    fieldRole: string;
    fieldEmployer: string;
    fieldDegree: string;
    fieldSchool: string;
    fieldStart: string;
    fieldEnd: string;
    fieldDescription: string;
    fieldFieldOfStudy: string;
    fieldStartYear: string;
    fieldEndYear: string;
    saveExtractedItem: string;
    saveExtractedExperience: string;
    saveExtractedEducation: string;
    extractedTypeLabel: string;
    extractedCertificationLabel: string;
    extractedFromCv: string;
    doneReviewingQualifications: string;
  };
  cv: {
    title: string;
    subtitle: string;
    updatedOn: string;
    rowExperience: string;
    rowEducation: string;
    rowSkills: string;
    rowLanguages: string;
    countExperience: string;
    countEducation: string;
    countSkills: string;
    countLanguages: string;
    readyCaption: string;
    snapshotTitle: string;
    snapshotBody: string;
    viewHistory: string;
    editCv: string;
    downloadPdf: string;
    backToCareer: string;
    updateAvailable: {
      pageSubtitle: string;
      eyebrow: string;
      body: string;
      reviewUpdate: string;
      notNow: string;
    };
    review: {
      title: string;
      subtitle: string;
      verifiedBy: string;
      labelRole: string;
      labelPeriod: string;
      labelSource: string;
      sourceValue: string;
      suggestedTitle: string;
      optionExperience: string;
      optionSkills: string;
      noteTitle: string;
      noteBody: string;
      applyCta: string;
      applyDisabledCta: string;
      notNow: string;
    };
    updated: {
      pageTitle: string;
      pageSubtitle: string;
      title: string;
      body: string;
      viewCta: string;
    };
    offline: {
      subtitle: string;
      bannerTitle: string;
      bannerBody: string;
      snapshotBody: string;
      downloadUnavailable: string;
    };
    history: {
      title: string;
      subtitle: string;
      currentTitle: string;
      usedFor: string;
      snapshotsTitle: string;
      snapshotMeta: string;
      footer: string;
      backToMyCv: string;
    };
    snapshot: {
      title: string;
      subtitle: string;
      submittedLine: string;
      caption: string;
      downloadPdf: string;
      backToHistory: string;
    };
  };
}

export const CAREER_COPY = defineSectionCopy<CareerCopy>({
  en: {
    breadcrumb: "Career & CV",
    hub: {
      title: "Career & CV",
      subtitle: "Keep your career profile ready for CVs and applications.",
      loadingSubtitle: "Loading your career profile",
      readyTitle: "Ready for applications",
      readyBody: "Your career profile and current CV are ready to use.",
      myCvTitle: "My CV",
      viewCv: "View CV",
      editCv: "Edit CV",
      updatedOn: "Updated {date}",
      profileTitle: "Career profile",
      rowExperience: "Experience",
      rowEducation: "Education",
      rowSkills: "Skills & languages",
      rowQualifications: "Qualifications & training",
      countExperience: "3 roles",
      countEducation: "2 entries",
      countSkills: "12 skills · 3 langs",
      countQualifications: "3 records",
      profileHint: "Tap a section to review or update it.",
      workPrefsTitle: "Work preferences",
      updateTitle: "Verified work update available",
      updateBody: "Review verified work before adding it to your CV.",
      reviewUpdate: "Review update",
      sources: {
        title: "CV sources",
        body: "Upload an existing CV file or build one from your career profile.",
        uploadCta: "Upload CV",
        createCta: "Create CV",
      },
      noCv: {
        subtitle: "Build a reusable career profile for CVs and applications.",
        bannerTitle: "Your CV is not created yet",
        bannerBody: "Start from an existing file or build one from your profile.",
        uploadTitle: "Upload an existing CV",
        uploadBody: "Upload PDF or DOCX, then review what EMENDA extracts.",
        uploadCta: "Upload CV",
        createTitle: "Create CV from your profile",
        createBody: "Use your experience, education, skills and languages.",
        createCta: "Create CV",
        privacyTitle: "Your CV stays private",
        privacyBody: "It is shared only when you explicitly submit or share it.",
      },
      offline: {
        subtitle: "Cached career information is still available.",
        bannerTitle: "No internet connection",
        bannerBody: "Some actions are unavailable until you reconnect.",
        lastSynced: "Last synced {date} · cached",
        viewCachedCv: "View cached CV",
        cachedProfileTitle: "Career profile · cached",
        cachedExperience: "Experience · 3 roles",
        cachedEducation: "Education · 2 entries",
        cachedSkills: "Skills & languages · 12 skills · 3 langs",
        note: "Edits, uploads and CV updates become available after reconnecting.",
      },
      incomplete: {
        subtitle:
          "Complete a few details before using this CV for applications.",
        bannerTitle: "Your CV needs a few details",
        bannerBody: "Add one work or education entry and confirm your skills.",
        completeCta: "Complete career profile",
        draftLabel: "Draft CV",
        notReady: "Not ready for applications",
        missingTitle: "Missing from career profile",
        missing1: "Experience or education",
        missing2: "Skills",
        missing3: "Work preferences recommended",
        note: "Nothing is submitted to an employer until you review and apply.",
      },
    },
    upload: {
      title: "Upload CV",
      subtitle: "Import an existing CV into your career profile.",
      fileCardTitle: "CV file",
      fileMeta: "PDF or DOCX · up to 10 MB",
      chooseFile: "Choose file",
      privacyTitle: "Private by default",
      privacyBody:
        "The uploaded file is not shared with employers unless you choose to share or apply.",
      uploadingSubtitle: "Uploading your CV securely.",
      uploadingStatus: "Uploading…",
      uploadingHint: "Keep EMENDA open for a moment.",
      uploadingButton: "Uploading…",
      failedError: "Upload failed. Check your connection and try again.",
      retryUpload: "Retry upload",
      unsupportedError:
        "This file type is not supported. Use PDF or DOCX up to 10 MB.",
      offlineError: "You're offline. Reconnect to upload your CV file.",
      chooseSubtitle: "Choose a CV file to continue.",
      offlineStatusTitle: "No internet connection",
      offlineStatusBody: "Reconnect before uploading your CV.",
      reconnectToUpload: "Reconnect to upload",
    },
    import: {
      title: "Review CV import",
      subtitle:
        "Check and correct what EMENDA found before it changes your career profile.",
      experienceTitle: "Experience · 3 found",
      educationTitle: "Education · 2 found",
      skillsTitle: "Skills & languages · 15 found",
      qualificationsTitle: "Qualifications & training",
      qualificationsFound: "2 found",
      noteTitle: "Nothing changes until you confirm",
      noteBody: "Edit, keep or remove extracted items before importing.",
      importCta: "Import reviewed data",
      savingSubtitle: "Saving approved career details.",
      savingTitle: "Updating your career profile…",
      savingBody: "Your original CV file remains private.",
      savingButton: "Saving…",
      failedTitle: "Career profile wasn’t updated.",
      failedBody: "Your reviewed details are still here. Try again.",
      tryAgain: "Try again",
      reviewExperienceTitle: "Review experience",
      reviewExperienceSubtitle:
        "Keep, edit or remove work history extracted from your CV.",
      reviewEducationTitle: "Review education",
      reviewEducationSubtitle:
        "Keep, edit or remove education extracted from your CV.",
      reviewSkillsTitle: "Review skills & languages",
      reviewSkillsSubtitle: "Keep only capabilities that correctly describe you.",
      reviewQualificationsTitle: "Review qualifications & training",
      reviewQualificationsSubtitle:
        "Keep only qualifications and training records that are correct.",
      keep: "Keep",
      kept: "✓ Keep",
      removed: "Removed",
      remove: "Remove",
      doneReviewing: "Done",
      skillsCardTitle: "Skills · 12 found",
      languagesCardTitle: "Languages · 3 found",
      reviewSkillSheetTitle: "Review skill",
      reviewSkillSheetBody:
        "Choose whether this extracted skill should be imported.",
      keepSkill: "Keep in import",
      removeSkill: "Remove from import",
      reviewLanguageSheetTitle: "Review language",
      reviewLanguageSheetBody:
        "Choose whether this extracted language should be imported.",
      keepLanguage: "Keep in import",
      removeLanguage: "Remove from import",
      editExperienceTitle: "Edit extracted experience",
      editEducationTitle: "Edit extracted education",
      editSubtitle:
        "Correct this CV item before importing it to your career profile.",
      fieldRole: "Role",
      fieldEmployer: "Employer",
      fieldDegree: "Degree",
      fieldSchool: "School",
      fieldStart: "Start",
      fieldEnd: "End",
      fieldDescription: "Description · optional",
      fieldFieldOfStudy: "Field of study",
      fieldStartYear: "Start year",
      fieldEndYear: "End year",
      saveExtractedItem: "Save extracted item",
      saveExtractedExperience: "Save extracted experience",
      saveExtractedEducation: "Save extracted education",
      extractedTypeLabel: "External qualification",
      extractedCertificationLabel: "Certification",
      extractedFromCv: "Extracted from CV",
      doneReviewingQualifications: "Done reviewing",
    },
    cv: {
      title: "My CV",
      subtitle: "Current approved version used for new applications.",
      updatedOn: "Updated {date}",
      rowExperience: "Experience",
      rowEducation: "Education",
      rowSkills: "Skills",
      rowLanguages: "Languages",
      countExperience: "3 roles",
      countEducation: "2 entries",
      countSkills: "12 skills",
      countLanguages: "3 languages",
      readyCaption: "Ready for new applications",
      snapshotTitle: "Applications use a snapshot",
      snapshotBody:
        "Later CV edits never change a CV already submitted to an employer.",
      viewHistory: "View history",
      editCv: "Edit CV",
      downloadPdf: "Download PDF",
      backToCareer: "Back to Career & CV",
      updateAvailable: {
        pageSubtitle: "A verified work record is ready to review.",
        eyebrow: "CV update available",
        body: "This verified role can be added to your master CV.",
        reviewUpdate: "Review update",
        notNow: "Not now",
      },
      review: {
        title: "Review CV update",
        subtitle:
          "Choose what verified work should be added to your master CV.",
        verifiedBy: "Verified by {employer}",
        labelRole: "Role",
        labelPeriod: "Period",
        labelSource: "Source",
        sourceValue: "Employer verified",
        suggestedTitle: "Suggested changes",
        optionExperience: "Add this verified experience",
        optionSkills: "Add verified skills",
        noteTitle: "Existing applications stay unchanged",
        noteBody: "Only your master CV is updated after you confirm.",
        applyCta: "Apply selected updates",
        applyDisabledCta: "Select at least one update",
        notNow: "Not now",
      },
      updated: {
        pageTitle: "CV updated",
        pageSubtitle:
          "Your approved work record is now included in your master CV.",
        title: "Update complete",
        body: "{item} is now included in your current CV.",
        viewCta: "View updated CV",
      },
      offline: {
        subtitle: "Your latest approved CV is available offline.",
        bannerTitle: "No internet connection",
        bannerBody: "Updates and downloads need a connection.",
        snapshotBody:
          "Updating your master CV never changes a CV already submitted to an employer.",
        downloadUnavailable: "Download unavailable",
      },
      history: {
        title: "CV history",
        subtitle:
          "See the master CV and immutable copies used for applications.",
        currentTitle: "Current master CV",
        usedFor: "Used for new applications",
        snapshotsTitle: "Application snapshots",
        snapshotMeta: "Submitted copy · cannot be changed",
        footer: "Updating the master CV never rewrites these copies.",
        backToMyCv: "Back to My CV",
      },
      snapshot: {
        title: "Submitted CV",
        subtitle: "Exact CV copy sent to {employer} on {date}.",
        submittedLine: "Submitted {date} · {employer}",
        caption: "Submitted snapshot · cannot be edited",
        downloadPdf: "Download submitted PDF",
        backToHistory: "Back to CV history",
      },
    },
  },
  id: {
    breadcrumb: "Karier & CV",
    hub: {
      title: "Karier & CV",
      subtitle: "Jaga profil karier Anda siap untuk CV dan lamaran.",
      loadingSubtitle: "Memuat profil karier Anda",
      readyTitle: "Siap untuk lamaran",
      readyBody: "Profil karier dan CV Anda saat ini siap digunakan.",
      myCvTitle: "CV Saya",
      viewCv: "Lihat CV",
      editCv: "Ubah CV",
      updatedOn: "Diperbarui {date}",
      profileTitle: "Profil karier",
      rowExperience: "Pengalaman",
      rowEducation: "Pendidikan",
      rowSkills: "Keahlian & bahasa",
      rowQualifications: "Kualifikasi & pelatihan",
      countExperience: "3 peran",
      countEducation: "2 entri",
      countSkills: "12 keahlian · 3 bahasa",
      countQualifications: "3 catatan",
      profileHint: "Ketuk bagian untuk meninjau atau memperbaruinya.",
      workPrefsTitle: "Preferensi kerja",
      updateTitle: "Pembaruan kerja terverifikasi tersedia",
      updateBody:
        "Tinjau kerja terverifikasi sebelum menambahkannya ke CV Anda.",
      reviewUpdate: "Tinjau pembaruan",
      sources: {
        title: "Sumber CV",
        body: "Unggah berkas CV yang sudah ada atau buat dari profil karier Anda.",
        uploadCta: "Unggah CV",
        createCta: "Buat CV",
      },
      noCv: {
        subtitle:
          "Bangun profil karier yang dapat dipakai ulang untuk CV dan lamaran.",
        bannerTitle: "CV Anda belum dibuat",
        bannerBody:
          "Mulai dari berkas yang sudah ada atau buat dari profil Anda.",
        uploadTitle: "Unggah CV yang sudah ada",
        uploadBody:
          "Unggah PDF atau DOCX, lalu tinjau apa yang diekstrak EMENDA.",
        uploadCta: "Unggah CV",
        createTitle: "Buat CV dari profil Anda",
        createBody:
          "Gunakan pengalaman, pendidikan, keahlian, dan bahasa Anda.",
        createCta: "Buat CV",
        privacyTitle: "CV Anda tetap privat",
        privacyBody:
          "CV hanya dibagikan saat Anda secara eksplisit mengirim atau membagikannya.",
      },
      offline: {
        subtitle: "Informasi karier tersimpan masih tersedia.",
        bannerTitle: "Tidak ada koneksi internet",
        bannerBody:
          "Beberapa tindakan tidak tersedia sampai Anda terhubung kembali.",
        lastSynced: "Terakhir disinkronkan {date} · tersimpan",
        viewCachedCv: "Lihat CV tersimpan",
        cachedProfileTitle: "Profil karier · tersimpan",
        cachedExperience: "Pengalaman · 3 peran",
        cachedEducation: "Pendidikan · 2 entri",
        cachedSkills: "Keahlian & bahasa · 12 keahlian · 3 bahasa",
        note: "Ubahan, unggahan, dan pembaruan CV tersedia setelah terhubung kembali.",
      },
      incomplete: {
        subtitle:
          "Lengkapi beberapa detail sebelum memakai CV ini untuk lamaran.",
        bannerTitle: "CV Anda butuh beberapa detail",
        bannerBody:
          "Tambahkan satu entri kerja atau pendidikan dan konfirmasi keahlian Anda.",
        completeCta: "Lengkapi profil karier",
        draftLabel: "CV Draf",
        notReady: "Belum siap untuk lamaran",
        missingTitle: "Belum ada di profil karier",
        missing1: "Pengalaman atau pendidikan",
        missing2: "Keahlian",
        missing3: "Preferensi kerja disarankan",
        note: "Tidak ada yang dikirim ke pemberi kerja sampai Anda meninjau dan menerapkannya.",
      },
    },
    upload: {
      title: "Unggah CV",
      subtitle: "Impor CV yang sudah ada ke profil karier Anda.",
      fileCardTitle: "Berkas CV",
      fileMeta: "PDF atau DOCX · maksimum 10 MB",
      chooseFile: "Pilih berkas",
      privacyTitle: "Privat secara bawaan",
      privacyBody:
        "Berkas yang diunggah tidak dibagikan ke pemberi kerja kecuali Anda memilih membagikan atau melamar.",
      uploadingSubtitle: "Mengunggah CV Anda dengan aman.",
      uploadingStatus: "Mengunggah…",
      uploadingHint: "Biarkan EMENDA terbuka sebentar.",
      uploadingButton: "Mengunggah…",
      failedError: "Unggahan gagal. Periksa koneksi Anda dan coba lagi.",
      retryUpload: "Coba unggah lagi",
      unsupportedError:
        "Tipe berkas ini tidak didukung. Gunakan PDF atau DOCX maksimum 10 MB.",
      offlineError:
        "Anda sedang offline. Hubungkan kembali untuk mengunggah berkas CV.",
      chooseSubtitle: "Pilih berkas CV untuk melanjutkan.",
      offlineStatusTitle: "Tidak ada koneksi internet",
      offlineStatusBody: "Sambungkan kembali sebelum mengunggah CV Anda.",
      reconnectToUpload: "Sambungkan untuk mengunggah",
    },
    import: {
      title: "Tinjau impor CV",
      subtitle:
        "Periksa dan koreksi temuan EMENDA sebelum mengubah profil karier Anda.",
      experienceTitle: "Pengalaman · 3 ditemukan",
      educationTitle: "Pendidikan · 2 ditemukan",
      skillsTitle: "Keahlian & bahasa · 15 ditemukan",
      qualificationsTitle: "Kualifikasi & pelatihan",
      qualificationsFound: "2 ditemukan",
      noteTitle: "Tidak ada yang berubah sampai Anda konfirmasi",
      noteBody:
        "Ubah, pertahankan, atau hapus item hasil ekstraksi sebelum mengimpor.",
      importCta: "Impor data yang ditinjau",
      savingSubtitle: "Menyimpan detail karier yang disetujui.",
      savingTitle: "Memperbarui profil karier Anda…",
      savingBody: "Berkas CV asli Anda tetap privat.",
      savingButton: "Menyimpan…",
      failedTitle: "Impor gagal",
      failedBody:
        "Tidak ada perubahan pada profil karier Anda. Coba lagi.",
      tryAgain: "Coba lagi",
      reviewExperienceTitle: "Tinjau pengalaman",
      reviewExperienceSubtitle:
        "Pertahankan, ubah, atau hapus riwayat kerja hasil ekstraksi CV Anda.",
      reviewEducationTitle: "Tinjau pendidikan",
      reviewEducationSubtitle:
        "Pertahankan, ubah, atau hapus pendidikan hasil ekstraksi CV Anda.",
      reviewSkillsTitle: "Tinjau keahlian & bahasa",
      reviewSkillsSubtitle:
        "Pertahankan hanya kemampuan yang benar-benar menggambarkan Anda.",
      reviewQualificationsTitle: "Tinjau kualifikasi & pelatihan",
      reviewQualificationsSubtitle:
        "Pertahankan hanya kualifikasi dan pelatihan yang sudah benar.",
      keep: "Pertahankan",
      kept: "✓ Dipertahankan",
      removed: "Dihapus",
      remove: "Hapus",
      doneReviewing: "Selesai",
      skillsCardTitle: "Keahlian · 12 ditemukan",
      languagesCardTitle: "Bahasa · 3 ditemukan",
      reviewSkillSheetTitle: "Tinjau keahlian",
      reviewSkillSheetBody:
        "Pilih apakah keahlian hasil ekstraksi ini akan diimpor.",
      keepSkill: "Pertahankan dalam impor",
      removeSkill: "Hapus dari impor",
      reviewLanguageSheetTitle: "Tinjau bahasa",
      reviewLanguageSheetBody:
        "Pilih apakah bahasa hasil ekstraksi ini harus diimpor.",
      keepLanguage: "Pertahankan dalam impor",
      removeLanguage: "Hapus dari impor",
      editExperienceTitle: "Ubah pengalaman hasil ekstraksi",
      editEducationTitle: "Ubah pendidikan hasil ekstraksi",
      editSubtitle:
        "Koreksi item CV ini sebelum mengimpornya ke profil karier Anda.",
      fieldRole: "Peran",
      fieldEmployer: "Pemberi kerja",
      fieldDegree: "Gelar",
      fieldSchool: "Sekolah",
      fieldStart: "Mulai",
      fieldEnd: "Selesai",
      fieldDescription: "Deskripsi · opsional",
      fieldFieldOfStudy: "Bidang studi",
      fieldStartYear: "Tahun mulai",
      fieldEndYear: "Tahun selesai",
      saveExtractedItem: "Simpan item hasil ekstraksi",
      saveExtractedExperience: "Simpan pengalaman hasil ekstraksi",
      saveExtractedEducation: "Simpan pendidikan hasil ekstraksi",
      extractedTypeLabel: "Kualifikasi eksternal",
      extractedCertificationLabel: "Sertifikasi",
      extractedFromCv: "Hasil ekstraksi CV",
      doneReviewingQualifications: "Selesai meninjau",
    },
    cv: {
      title: "CV Saya",
      subtitle: "Versi terkini yang disetujui untuk lamaran baru.",
      updatedOn: "Diperbarui {date}",
      rowExperience: "Pengalaman",
      rowEducation: "Pendidikan",
      rowSkills: "Keahlian",
      rowLanguages: "Bahasa",
      countExperience: "3 peran",
      countEducation: "2 entri",
      countSkills: "12 keahlian",
      countLanguages: "3 bahasa",
      readyCaption: "Siap untuk lamaran baru",
      snapshotTitle: "Lamaran memakai salinan (snapshot)",
      snapshotBody:
        "Ubahan CV berikutnya tidak pernah mengubah CV yang sudah dikirim ke pemberi kerja.",
      viewHistory: "Lihat riwayat",
      editCv: "Ubah CV",
      downloadPdf: "Unduh PDF",
      backToCareer: "Kembali ke Karier & CV",
      updateAvailable: {
        pageSubtitle: "Catatan kerja terverifikasi siap ditinjau.",
        eyebrow: "Pembaruan CV tersedia",
        body: "Peran terverifikasi ini dapat ditambahkan ke CV utama Anda.",
        reviewUpdate: "Tinjau pembaruan",
        notNow: "Nanti saja",
      },
      review: {
        title: "Tinjau pembaruan CV",
        subtitle:
          "Pilih kerja terverifikasi mana yang ditambahkan ke CV utama Anda.",
        verifiedBy: "Diverifikasi oleh {employer}",
        labelRole: "Peran",
        labelPeriod: "Periode",
        labelSource: "Sumber",
        sourceValue: "Terverifikasi pemberi kerja",
        suggestedTitle: "Perubahan yang disarankan",
        optionExperience: "Tambahkan pengalaman terverifikasi ini",
        optionSkills: "Tambahkan keahlian terverifikasi",
        noteTitle: "Lamaran yang sudah ada tetap tidak berubah",
        noteBody:
          "Hanya CV utama Anda yang diperbarui setelah Anda konfirmasi.",
        applyCta: "Terapkan pembaruan terpilih",
        applyDisabledCta: "Pilih minimal satu pembaruan",
        notNow: "Nanti saja",
      },
      updated: {
        pageTitle: "CV diperbarui",
        pageSubtitle:
          "Catatan kerja yang Anda setujui kini termasuk dalam CV utama Anda.",
        title: "Pembaruan selesai",
        body: "{item} kini termasuk dalam CV Anda saat ini.",
        viewCta: "Lihat CV terbaru",
      },
      offline: {
        subtitle: "CV Anda yang terakhir disetujui tersedia secara offline.",
        bannerTitle: "Tidak ada koneksi internet",
        bannerBody: "Pembaruan dan unduhan memerlukan koneksi.",
        snapshotBody:
          "Memperbarui CV utama tidak pernah mengubah CV yang sudah dikirim ke pemberi kerja.",
        downloadUnavailable: "Unduhan tidak tersedia",
      },
      history: {
        title: "Riwayat CV",
        subtitle:
          "Lihat CV utama dan salinan permanen yang dipakai untuk lamaran.",
        currentTitle: "CV utama saat ini",
        usedFor: "Dipakai untuk lamaran baru",
        snapshotsTitle: "Salinan lamaran",
        snapshotMeta: "Salinan terkirim · tidak dapat diubah",
        footer: "Memperbarui CV utama tidak pernah menulis ulang salinan ini.",
        backToMyCv: "Kembali ke CV Saya",
      },
      snapshot: {
        title: "CV Terkirim",
        subtitle:
          "Salinan CV persis yang dikirim ke {employer} pada {date}.",
        submittedLine: "Dikirim {date} · {employer}",
        caption: "Salinan terkirim · tidak dapat diubah",
        downloadPdf: "Unduh PDF terkirim",
        backToHistory: "Kembali ke riwayat CV",
      },
    },
  },
  ja: {
    breadcrumb: "キャリア & CV",
    hub: {
      title: "キャリア & CV",
      subtitle: "CVと応募にすぐ使えるよう、キャリアプロフィールを整えておきましょう。",
      loadingSubtitle: "キャリアプロフィールを読み込み中",
      readyTitle: "応募の準備ができています",
      readyBody: "キャリアプロフィールと現在のCVは利用可能です。",
      myCvTitle: "マイCV",
      viewCv: "CVを表示",
      editCv: "CVを編集",
      updatedOn: "{date} 更新",
      profileTitle: "キャリアプロフィール",
      rowExperience: "職歴",
      rowEducation: "学歴",
      rowSkills: "スキル & 言語",
      rowQualifications: "資格 & 研修",
      countExperience: "3件の職務",
      countEducation: "2件",
      countSkills: "スキル12 · 言語3",
      countQualifications: "3件の記録",
      profileHint: "セクションをタップして確認・更新できます。",
      workPrefsTitle: "希望条件",
      updateTitle: "確認済みの勤務更新があります",
      updateBody: "CVに追加する前に、確認済みの勤務内容を確認してください。",
      reviewUpdate: "更新を確認",
      sources: {
        title: "CVのソース",
        body: "既存のCVファイルをアップロードするか、キャリアプロフィールから作成します。",
        uploadCta: "CVをアップロード",
        createCta: "CVを作成",
      },
      noCv: {
        subtitle: "CVと応募に再利用できるキャリアプロフィールを作成しましょう。",
        bannerTitle: "CVはまだ作成されていません",
        bannerBody: "既存のファイルから始めるか、プロフィールから作成できます。",
        uploadTitle: "既存のCVをアップロード",
        uploadBody: "PDFまたはDOCXをアップロードし、EMENDAの抽出結果を確認します。",
        uploadCta: "CVをアップロード",
        createTitle: "プロフィールからCVを作成",
        createBody: "職歴・学歴・スキル・言語を使って作成します。",
        createCta: "CVを作成",
        privacyTitle: "CVは非公開のままです",
        privacyBody: "あなたが明示的に提出または共有した場合にのみ共有されます。",
      },
      offline: {
        subtitle: "保存済みのキャリア情報は引き続き利用できます。",
        bannerTitle: "インターネット接続がありません",
        bannerBody: "再接続するまで一部の操作は利用できません。",
        lastSynced: "最終同期 {date} · キャッシュ",
        viewCachedCv: "保存済みCVを表示",
        cachedProfileTitle: "キャリアプロフィール · キャッシュ",
        cachedExperience: "職歴 · 3件の職務",
        cachedEducation: "学歴 · 2件",
        cachedSkills: "スキル & 言語 · スキル12 · 言語3",
        note: "編集・アップロード・CVの更新は再接続後に利用できます。",
      },
      incomplete: {
        subtitle: "このCVを応募に使う前に、いくつかの項目を入力してください。",
        bannerTitle: "CVにいくつかの情報が必要です",
        bannerBody: "職歴か学歴を1件追加し、スキルを確認してください。",
        completeCta: "キャリアプロフィールを完成させる",
        draftLabel: "下書きCV",
        notReady: "応募にはまだ使えません",
        missingTitle: "キャリアプロフィールに不足している項目",
        missing1: "職歴または学歴",
        missing2: "スキル",
        missing3: "希望条件(推奨)",
        note: "確認して適用するまで、雇用主には何も送信されません。",
      },
    },
    upload: {
      title: "CVをアップロード",
      subtitle: "既存のCVをキャリアプロフィールに取り込みます。",
      fileCardTitle: "CVファイル",
      fileMeta: "PDFまたはDOCX · 最大10 MB",
      chooseFile: "ファイルを選択",
      privacyTitle: "初期設定で非公開",
      privacyBody:
        "アップロードしたファイルは、共有または応募を選択しない限り雇用主に共有されません。",
      uploadingSubtitle: "CVを安全にアップロードしています。",
      uploadingStatus: "アップロード中…",
      uploadingHint: "しばらくEMENDAを開いたままにしてください。",
      uploadingButton: "アップロード中…",
      failedError: "アップロードに失敗しました。接続を確認して再試行してください。",
      retryUpload: "再アップロード",
      unsupportedError:
        "このファイル形式はサポートされていません。最大10 MBのPDFまたはDOCXを使用してください。",
      offlineError: "オフラインです。再接続してCVファイルをアップロードしてください。",
      chooseSubtitle: "続けるにはCVファイルを選んでください。",
      offlineStatusTitle: "インターネット接続がありません",
      offlineStatusBody: "CVをアップロードする前に再接続してください。",
      reconnectToUpload: "再接続してアップロード",
    },
    import: {
      title: "CVインポートの確認",
      subtitle:
        "キャリアプロフィールを変更する前に、EMENDAの抽出結果を確認・修正してください。",
      experienceTitle: "職歴 · 3件検出",
      educationTitle: "学歴 · 2件検出",
      skillsTitle: "スキル & 言語 · 15件検出",
      qualificationsTitle: "資格 & 研修",
      qualificationsFound: "2件検出",
      noteTitle: "確認するまで何も変わりません",
      noteBody: "インポート前に抽出項目を編集・保持・削除できます。",
      importCta: "確認済みデータをインポート",
      savingSubtitle: "承認したキャリア情報を保存しています。",
      savingTitle: "キャリアプロフィールを更新中…",
      savingBody: "アップロードしたCVファイル自体は非公開のままです。",
      savingButton: "保存中…",
      failedTitle: "インポートに失敗しました",
      failedBody: "キャリアプロフィールは変更されていません。再試行してください。",
      tryAgain: "再試行",
      reviewExperienceTitle: "職歴の確認",
      reviewExperienceSubtitle:
        "CVから抽出された職務経歴を保持・編集・削除します。",
      reviewEducationTitle: "学歴の確認",
      reviewEducationSubtitle: "CVから抽出された学歴を保持・編集・削除します。",
      reviewSkillsTitle: "スキル & 言語の確認",
      reviewSkillsSubtitle: "ご自身に本当に当てはまる能力だけを残してください。",
      reviewQualificationsTitle: "資格 & 研修の確認",
      reviewQualificationsSubtitle: "内容が正しい資格・研修だけを残してください。",
      keep: "保持",
      kept: "✓ 保持",
      removed: "削除済み",
      remove: "削除",
      doneReviewing: "完了",
      skillsCardTitle: "スキル · 12件検出",
      languagesCardTitle: "言語 · 3件検出",
      reviewSkillSheetTitle: "スキルの確認",
      reviewSkillSheetBody: "抽出されたこのスキルをインポートするか選択してください。",
      keepSkill: "インポートに保持",
      removeSkill: "インポートから削除",
      reviewLanguageSheetTitle: "言語の確認",
      reviewLanguageSheetBody: "抽出されたこの言語をインポートするか選択します。",
      keepLanguage: "インポートに残す",
      removeLanguage: "インポートから削除",
      editExperienceTitle: "抽出された職歴を編集",
      editEducationTitle: "抽出された学歴を編集",
      editSubtitle:
        "キャリアプロフィールにインポートする前に、このCV項目を修正してください。",
      fieldRole: "職務",
      fieldEmployer: "雇用主",
      fieldDegree: "学位",
      fieldSchool: "学校",
      fieldStart: "開始",
      fieldEnd: "終了",
      fieldDescription: "説明 · 任意",
      fieldFieldOfStudy: "専攻分野",
      fieldStartYear: "開始年",
      fieldEndYear: "終了年",
      saveExtractedItem: "抽出された項目を保存",
      saveExtractedExperience: "抽出された職歴を保存",
      saveExtractedEducation: "抽出された学歴を保存",
      extractedTypeLabel: "外部資格",
      extractedCertificationLabel: "認定資格",
      extractedFromCv: "CVから抽出",
      doneReviewingQualifications: "確認完了",
    },
    cv: {
      title: "マイCV",
      subtitle: "新規応募に使用される現在の承認済みバージョンです。",
      updatedOn: "{date} 更新",
      rowExperience: "職歴",
      rowEducation: "学歴",
      rowSkills: "スキル",
      rowLanguages: "言語",
      countExperience: "3件の職務",
      countEducation: "2件",
      countSkills: "スキル12",
      countLanguages: "言語3",
      readyCaption: "新規応募の準備ができています",
      snapshotTitle: "応募にはスナップショットを使用します",
      snapshotBody:
        "後からCVを編集しても、雇用主に提出済みのCVは変わりません。",
      viewHistory: "履歴を表示",
      editCv: "CVを編集",
      downloadPdf: "PDFをダウンロード",
      backToCareer: "キャリア & CVに戻る",
      updateAvailable: {
        pageSubtitle: "確認済みの勤務記録を確認できます。",
        eyebrow: "CVの更新があります",
        body: "この確認済みの職務はマスターCVに追加できます。",
        reviewUpdate: "更新を確認",
        notNow: "今はしない",
      },
      review: {
        title: "CV更新の確認",
        subtitle: "マスターCVに追加する確認済みの勤務内容を選択してください。",
        verifiedBy: "{employer} が確認済み",
        labelRole: "職務",
        labelPeriod: "期間",
        labelSource: "情報源",
        sourceValue: "雇用主確認済み",
        suggestedTitle: "提案された変更",
        optionExperience: "この確認済み職歴を追加",
        optionSkills: "確認済みスキルを追加",
        noteTitle: "既存の応募は変更されません",
        noteBody: "確認後に更新されるのはマスターCVのみです。",
        applyCta: "選択した更新を適用",
        applyDisabledCta: "更新を1つ以上選択してください",
        notNow: "今はしない",
      },
      updated: {
        pageTitle: "CVを更新しました",
        pageSubtitle: "承認した勤務記録がマスターCVに含まれました。",
        title: "更新が完了しました",
        body: "{item} が現在のCVに含まれました。",
        viewCta: "更新後のCVを表示",
      },
      offline: {
        subtitle: "最後に承認されたCVはオフラインでも表示できます。",
        bannerTitle: "インターネット接続がありません",
        bannerBody: "更新とダウンロードには接続が必要です。",
        snapshotBody:
          "マスターCVを更新しても、すでに雇用主へ提出したCVは変わりません。",
        downloadUnavailable: "ダウンロードは利用できません",
      },
      history: {
        title: "CV履歴",
        subtitle: "マスターCVと応募に使われた変更不可の控えを確認できます。",
        currentTitle: "現在のマスターCV",
        usedFor: "新規応募に使用",
        snapshotsTitle: "応募スナップショット",
        snapshotMeta: "提出済みの控え · 変更不可",
        footer: "マスターCVを更新してもこれらの控えは書き換えられません。",
        backToMyCv: "マイCVに戻る",
      },
      snapshot: {
        title: "提出済みCV",
        subtitle: "{date} に {employer} へ送付されたCVの控えです。",
        submittedLine: "提出 {date} · {employer}",
        caption: "提出済みスナップショット · 編集不可",
        downloadPdf: "提出済みPDFをダウンロード",
        backToHistory: "CV履歴に戻る",
      },
    },
  },
});
