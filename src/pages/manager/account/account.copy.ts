import { defineSectionCopy } from "@/i18n/copy";
import type {
  AllowedItemId,
  FailedRowId,
  HelpTopicId,
  LocaleRowId,
  MoreLinkId,
  PreferenceRowId,
  PreservedRowId,
  ProfileRowId,
  SavedRowId,
  SentRowId,
  SupportTopicId,
} from "./accountData";

/**
 * Copy for Manager 03 · Navigation & Account and 10 · Settings / Support /
 * Session. EN is the Figma text verbatim (MD-MORE 1223:14, EM-MORE 761:1005,
 * EM-18 761:1154, EM-18A 761:1212, EM-18B 761:1240, EM-18C 761:3107,
 * EM-18D 761:3148, EM-18E 761:1073, EM-19 761:3185, EM-19A 761:3285,
 * EM-19B 761:3324, EM-20 761:3364).
 */
export interface ManagerAccountCopy {
  more: {
    titleMobile: string;
    subtitleMobile: string;
    titleDesktop: string;
    subtitleDesktop: string;
    identityCaption: string;
    switchPill: string;
    managerProfileLink: string;
    openManagerProfile: string;
    operations: string;
    governance: string;
    descriptors: Record<MoreLinkId, string>;
    logoutTitle: string;
    logoutCaption: string;
    boundary: string;
  };
  profile: {
    title: string;
    subtitle: string;
    desktopSubtitle: string;
    headerRole: string;
    headerAccess: string;
    rows: Record<ProfileRowId, string>;
    accountSession: string;
    accountWorkspace: string;
    openSettings: string;
    switchFacility: string;
    logout: string;
    openWorkLabel: string;
    openWorkValue: string;
    openWorkMeta: string;
    sessionLabel: string;
    sessionValue: string;
    sessionMeta: string;
    offlineRecovery: string;
    boundaryTitle: string;
    boundaryBody: string;
  };
  settings: {
    title: string;
    subtitle: string;
    desktopSubtitle: string;
    identityCaption: string;
    preferences: string;
    rows: Record<PreferenceRowId, string>;
    notificationsValue: string;
    accessAccount: string;
    rolePermissions: string;
    rolePermissionsMeta: string;
    languageLocaleTimezone: string;
    languageLocaleTimezoneMeta: string;
    saveSettings: string;
    boundary: string;
  };
  saved: {
    /** EM-18C page title above the badge (1133:2). */
    pageTitle: string;
    /** MD-18C desktop outcome pill (1252:13935). */
    desktopBadge: string;
    title: string;
    subtitle: string;
    updatedPreferences: string;
    rows: Record<SavedRowId, string>;
    notificationsValue: string;
    reportDefaultsValue: string;
    boundaryTitle: string;
    boundaryBody: string;
    backToSettings: string;
    footnote: string;
  };
  saveFailed: {
    badge: string;
    title: string;
    subtitle: string;
    /** EM-18D peach summary card (1133:33…1133:35). */
    summaryTitle: string;
    summaryBody: string;
    unsavedChanges: string;
    rows: Record<FailedRowId, string>;
    notSavedValue: string;
    notificationsValue: string;
    reportDefaultsValue: string;
    retryTitle: string;
    retryBody: string;
    /** EM-18D SAFE RETRY bullet lines (1133:51). */
    retryBullets: string[];
    privacyTitle: string;
    privacyBody: string;
    returnToSettings: string;
    retrySave: string;
  };
  permissions: {
    title: string;
    desktopTitle: string;
    subtitle: string;
    desktopSubtitle: string;
    roleCaption: string;
    allowed: string;
    allowedItems: Record<AllowedItemId, string>;
    desktopAllowedExtra: string;
    notAvailable: string;
    privateTitle: string;
    privateLines: string[];
    desktopDeniedLines: string[];
    futureTitle: string;
    futureBody: string;
    backToSettings: string;
    boundary: string;
  };
  locale: {
    title: string;
    desktopTitle: string;
    subtitle: string;
    desktopSubtitle: string;
    rows: Record<LocaleRowId, string>;
    timeFormatValue: string;
    noteTitle: string;
    noteBody: string;
    saveLocale: string;
    backToSettings: string;
  };
  support: {
    title: string;
    subtitle: string;
    helpTopics: string;
    topics: Record<HelpTopicId, { title: string; body: string }>;
    recentRequest: string;
    recentTopic: string;
    recentCaption: string;
    contactSupport: string;
    topicLabel: string;
    topicOptions: Record<SupportTopicId, string>;
    chooseTopic: string;
    summaryLabel: string;
    summaryValue: string;
    contextLabel: string;
    contextValue: string;
    /** MD-19 desktop CONTEXT INCLUDED lines (1252:14032). */
    contextItems: {
      organization: string;
      facility: string;
      managerRole: string;
      currentModule: string;
    };
    /** MD-19 desktop mint strip under the recent request (1252:14022). */
    privacyStrip: string;
    warning: string;
    send: string;
    sending: string;
    footnote: string;
  };
  supportSent: {
    /** EM-19A page title above the badge (1133:88). */
    pageTitle: string;
    /** MD-19A desktop outcome pill (1252:14061). */
    desktopBadge: string;
    title: string;
    subtitle: string;
    ticketStatus: string;
    requestDetails: string;
    rows: Record<SentRowId, string>;
    topicValue: string;
    subjectValue: string;
    privacyTitle: string;
    privacyBody: string;
    backToSupport: string;
  };
  supportFailed: {
    badge: string;
    title: string;
    subtitle: string;
    /** EM-19B peach summary card (1133:118…1133:120). */
    summaryTitle: string;
    summaryBody: string;
    detailsPreserved: string;
    /** EM-19B PRESERVED REQUEST rows (1133:122…1133:133). */
    rows: Record<PreservedRowId, string>;
    values: Record<PreservedRowId, string>;
    retryTitle: string;
    retryBody: string;
    /** EM-19B SAFE RETRY bullet lines (1133:136). */
    retryBullets: string[];
    tryAgain: string;
    backToSupport: string;
    footnote: string;
  };
  logout: {
    title: string;
    subtitle: string;
    heading: string;
    intro: string;
    currentSession: string;
    sessionStatus: string;
    whenYouSignOut: string;
    bullets: string[];
    boundaryTitle: string;
    boundaryBody: string;
    signOut: string;
    cancel: string;
    footnote: string;
  };
  offline: {
    chip: string;
    body: string;
  };
}

export const MANAGER_ACCOUNT_COPY = defineSectionCopy<ManagerAccountCopy>({
  en: {
    more: {
      titleMobile: "More",
      subtitleMobile: "Manager tools · {facility}",
      titleDesktop: "Navigation & Account",
      subtitleDesktop:
        "Desktop account navigation, manager workspace controls, and governance entry points.",
      identityCaption: "{facility} · operational access",
      switchPill: "Switch",
      managerProfileLink: "Manager Profile",
      openManagerProfile: "Open Manager Profile",
      operations: "OPERATIONS",
      governance: "GOVERNANCE & ACCOUNT",
      descriptors: {
        reports: "Generated operational reports",
        alerts: "2 open items",
        analytics: "Weekly operational trends",
        knowledgeOjt: "3 active modules",
        humanRightsDd: "Evidence completeness",
        auditExport: "Privacy-safe evidence package",
        settings: "Language, facility, access",
        support: "Help and request history",
      },
      logoutTitle: "Logout",
      logoutCaption: "End Manager session",
      boundary:
        "Operational access only · Manager account controls do not expand access to private Health / Stress / Life data or private eCoin.",
    },
    profile: {
      title: "Manager Profile",
      subtitle: "Account and current workspace",
      desktopSubtitle:
        "Account, workspace, role, locale, and session controls.",
      headerRole: "{role} · {facility}",
      headerAccess: "Operational manager access",
      rows: {
        managerId: "Manager ID",
        organization: "Organization",
        currentFacility: "Current facility",
        language: "Language",
        timezone: "Timezone",
      },
      accountSession: "ACCOUNT & SESSION",
      accountWorkspace: "ACCOUNT & WORKSPACE",
      openSettings: "Open Settings",
      switchFacility: "Switch Facility",
      logout: "Logout",
      openWorkLabel: "Open work",
      openWorkValue: "9 items",
      openWorkMeta: "4 follow-up · 3 unread · 2 admin",
      sessionLabel: "Session",
      sessionValue: "Active",
      sessionMeta: "last sign-in today 09:18",
      offlineRecovery: "Offline / recovery states",
      boundaryTitle: "Access boundary",
      boundaryBody:
        "Manager can access employment-scoped operational and worker-approved professional records only. Health Log, Stress Check, Life Log, family data, emergency contacts, and private eCoin remain unavailable.",
    },
    settings: {
      title: "Settings",
      subtitle: "Manager preferences · workspace and locale",
      desktopSubtitle:
        "Manager account, locale, notifications, facility preferences, and access controls.",
      identityCaption: "{facility} · Asia/Tokyo",
      preferences: "PREFERENCES",
      rows: {
        language: "Language",
        timezone: "Timezone",
        notifications: "Notifications",
        defaultFacility: "Default facility",
      },
      notificationsValue: "Operational alerts ON",
      accessAccount: "ACCESS & ACCOUNT",
      rolePermissions: "Role & permissions",
      rolePermissionsMeta: "Facility-scoped operational access",
      languageLocaleTimezone: "Language / locale / timezone",
      languageLocaleTimezoneMeta:
        "Display-only preferences; source timestamps unchanged",
      saveSettings: "Save settings",
      boundary:
        "Settings do not expand Manager access to worker-private records.",
    },
    saved: {
      pageTitle: "Settings Saved",
      desktopBadge: "SAVED",
      title: "Settings saved",
      subtitle: "Changes applied to the current manager workspace",
      updatedPreferences: "UPDATED PREFERENCES",
      rows: {
        language: "Language",
        timezone: "Timezone",
        notifications: "Notifications",
        defaultFacility: "Default facility",
        reportDefaults: "Report defaults",
      },
      notificationsValue: "Unread · reports · visa/admin · follow-up ON",
      reportDefaultsValue: "Operational Summary · PDF",
      boundaryTitle: "ACCESS BOUNDARY UNCHANGED",
      boundaryBody:
        "Worker-private Health / Stress / Life / family / private eCoin access was not expanded.",
      backToSettings: "Back to Settings",
      footnote:
        "Locale changes affect display only; source timestamps remain unchanged.",
    },
    saveFailed: {
      badge: "Settings were not saved",
      title: "Settings Not Saved",
      subtitle: "Previous preferences are still active",
      summaryTitle: "Previous configuration remains active",
      summaryBody:
        "No preference change is treated as successful until the save is confirmed.",
      unsavedChanges: "UNSAVED CHANGES",
      rows: {
        languageTimezone: "Language / timezone",
        notifications: "Notifications",
        defaultFacility: "Default facility",
        reportDefaults: "Report defaults",
      },
      notSavedValue: "Pending",
      notificationsValue: "Unread · reports · visa/admin · follow-up ON",
      reportDefaultsValue: "Operational Summary · PDF",
      retryTitle: "SAFE RETRY",
      retryBody:
        "Reconnect and confirm the current facility before saving again.",
      retryBullets: [
        "reconnect if needed",
        "confirm current facility context",
        "retry from Settings",
        "never show a false saved state",
      ],
      privacyTitle: "ACCESS BOUNDARY UNCHANGED",
      privacyBody:
        "Access/privacy permissions remain unchanged while save is pending.",
      returnToSettings: "Return to Settings",
      retrySave: "Retry Save",
    },
    permissions: {
      title: "Role & permissions",
      desktopTitle: "Role & Permissions",
      subtitle: "Manager · MVP operational access",
      desktopSubtitle:
        "Manager MVP operational access for the current organization and facility.",
      roleCaption: "{facility} · employment-scoped access",
      allowed: "ALLOWED",
      allowedItems: {
        workers: "Workers & operational status",
        communication: "Communication & translation preview",
        reports: "Daily Reports & Follow-up",
        records: "Professional records / Work Log",
        governance: "OJT, HRDD and Audit Export",
      },
      desktopAllowedExtra: "Visa / administrative records",
      notAvailable: "NOT AVAILABLE",
      privateTitle: "Private worker data",
      privateLines: [
        "Health Log · Stress Check · Life Log",
        "Family and private personal data",
        "Private eCoin balance and transfers",
      ],
      desktopDeniedLines: [
        "Private worker data",
        "Health Log · Stress Check · Life Log",
        "Family/private data · Emergency Contacts",
        "Private eCoin",
      ],
      futureTitle: "Future roles",
      futureBody:
        "Facility Admin and Organization Admin are not part of this MVP.",
      backToSettings: "Back to Settings",
      boundary:
        "Changing preferences never broadens access scope; role permissions are policy-controlled.",
    },
    locale: {
      title: "Language & regional format",
      desktopTitle: "Language & Regional Format",
      subtitle: "Display preferences for Manager workspace",
      desktopSubtitle: "Display preferences for the Manager workspace.",
      rows: {
        language: "Language",
        timezone: "Timezone",
        dateFormat: "Date format",
        timeFormat: "Time format",
        phoneFormat: "Phone format",
      },
      timeFormatValue: "24-hour",
      noteTitle: "Source timestamps stay unchanged",
      noteBody:
        "Locale changes affect display only. Original source timestamps and audit evidence remain unchanged.",
      saveLocale: "Save locale settings",
      backToSettings: "Back to Settings",
    },
    support: {
      title: "Support",
      subtitle: "Help for permitted operational workflows and account access",
      helpTopics: "HELP TOPICS",
      topics: {
        communication: {
          title: "Using Communication",
          body: "Messages, translation preview, worker reply context",
        },
        dailyReports: {
          title: "Daily Reports",
          body: "Submission status, detail, operational output",
        },
        followUp: {
          title: "Follow-up",
          body: "Human-reviewed queue and worker communication",
        },
        auditExport: {
          title: "Audit Export",
          body: "Evidence package and privacy exclusions",
        },
      },
      recentRequest: "RECENT REQUEST",
      recentTopic: "Access guidance",
      recentCaption:
        "Sent today {time} · facility context attached · awaiting response",
      contactSupport: "CONTACT SUPPORT",
      topicLabel: "Topic",
      topicOptions: {
        accessWorkflow: "Access / workflow question",
        operationalSupport: "Operational support",
        reportingWorkflow: "Reporting / workflow question",
      },
      chooseTopic: "Choose topic",
      summaryLabel: "Summary",
      summaryValue: "Need guidance about facility-bound actions",
      contextLabel: "Context included",
      contextValue: "Organization · Facility · Manager role · Current module",
      contextItems: {
        organization: "Organization",
        facility: "Facility",
        managerRole: "Manager role",
        currentModule: "Current module",
      },
      privacyStrip: "No private worker content was included.",
      warning:
        "Do not include private Health / Stress / Life / family / private eCoin data.",
      send: "Send support request",
      sending: "Sending support request…",
      footnote:
        "Product/account/workflow support only · not legal, immigration, medical, or financial advice.",
    },
    supportSent: {
      pageTitle: "Request Sent",
      desktopBadge: "SENT",
      title: "Support request sent",
      subtitle: "Manager support request · prototype state",
      ticketStatus: "Submitted · awaiting support review",
      requestDetails: "REQUEST DETAILS",
      rows: {
        topic: "Topic",
        subject: "Subject",
        organization: "Organization",
        facility: "Facility",
        managerRole: "Manager role",
      },
      topicValue: "Operational support",
      subjectValue: "Reporting / workflow question",
      privacyTitle: "PRIVACY CONFIRMATION",
      privacyBody:
        "No private worker content was included. Request context stays limited to product/account/workflow support.",
      backToSupport: "Back to Support",
    },
    supportFailed: {
      badge: "Request not sent",
      title: "Request Failed",
      subtitle: "Your entered topic and details remain saved",
      summaryTitle: "No support request was created",
      summaryBody:
        "Entered information remains available so the Manager can retry safely.",
      detailsPreserved: "PRESERVED REQUEST",
      rows: {
        topic: "Topic",
        subject: "Subject",
        context: "Context",
        privacy: "Privacy",
      },
      values: {
        topic: "Operational support",
        subject: "Reporting / workflow question",
        context: "Current organization / facility",
        privacy: "Private worker data excluded",
      },
      retryTitle: "SAFE RETRY",
      retryBody:
        "Reconnect and confirm the current facility before sending again.",
      retryBullets: [
        "confirm connectivity",
        "keep the same facility context",
        "review topic/details before retry",
        "do not duplicate a request unless submission is confirmed",
      ],
      tryAgain: "Try Again",
      backToSupport: "Back to Support",
      footnote: "No support record is created on failure.",
    },
    logout: {
      title: "Sign out?",
      subtitle: "Manager session boundary",
      heading: "Sign out of Manager?",
      intro:
        "You will return to Manager Login. Worker and Manager sessions remain separate.",
      currentSession: "CURRENT SESSION",
      sessionStatus:
        "Session active · current facility context preserved until sign out",
      whenYouSignOut: "WHEN YOU SIGN OUT",
      bullets: [
        "Manager session ends",
        "return to Manager Login",
        "worker session remains separate",
        "no pending action is claimed as completed",
        "private worker data access does not expand",
      ],
      boundaryTitle: "PRIVACY-SAFE SESSION BOUNDARY",
      boundaryBody:
        "Signing out clears the Manager session context; it does not merge Manager and Worker access.",
      signOut: "Sign out",
      cancel: "Cancel",
      footnote:
        "Cancel returns to the current Manager workspace without ending the session.",
    },
    offline: {
      chip: "Offline",
      body: "Cached operational context is viewable; writes are disabled.",
    },
  },
  id: {
    more: {
      titleMobile: "Lainnya",
      subtitleMobile: "Alat manajer · {facility}",
      titleDesktop: "Navigasi & Akun",
      subtitleDesktop:
        "Navigasi akun desktop, kontrol ruang kerja manajer, dan pintu masuk tata kelola.",
      identityCaption: "{facility} · akses operasional",
      switchPill: "Ganti",
      managerProfileLink: "Profil Manajer",
      openManagerProfile: "Buka Profil Manajer",
      operations: "OPERASIONAL",
      governance: "TATA KELOLA & AKUN",
      descriptors: {
        reports: "Laporan operasional yang dihasilkan",
        alerts: "2 item terbuka",
        analytics: "Tren operasional mingguan",
        knowledgeOjt: "3 modul aktif",
        humanRightsDd: "Kelengkapan bukti",
        auditExport: "Paket bukti aman-privasi",
        settings: "Bahasa, fasilitas, akses",
        support: "Bantuan dan riwayat permintaan",
      },
      logoutTitle: "Keluar",
      logoutCaption: "Akhiri sesi Manajer",
      boundary:
        "Akses operasional saja · Kontrol akun manajer tidak memperluas akses ke data Health / Stress / Life pribadi atau eCoin pribadi.",
    },
    profile: {
      title: "Profil Manajer",
      subtitle: "Akun dan ruang kerja saat ini",
      desktopSubtitle: "Kontrol akun, ruang kerja, peran, lokal, dan sesi.",
      headerRole: "{role} · {facility}",
      headerAccess: "Akses manajer operasional",
      rows: {
        managerId: "ID Manajer",
        organization: "Organisasi",
        currentFacility: "Fasilitas saat ini",
        language: "Bahasa",
        timezone: "Zona waktu",
      },
      accountSession: "AKUN & SESI",
      accountWorkspace: "AKUN & RUANG KERJA",
      openSettings: "Buka Pengaturan",
      switchFacility: "Ganti Fasilitas",
      logout: "Keluar",
      openWorkLabel: "Pekerjaan terbuka",
      openWorkValue: "9 item",
      openWorkMeta: "4 tindak lanjut · 3 belum dibaca · 2 admin",
      sessionLabel: "Sesi",
      sessionValue: "Aktif",
      sessionMeta: "masuk terakhir hari ini 09:18",
      offlineRecovery: "Status luring / pemulihan",
      boundaryTitle: "Batas akses",
      boundaryBody:
        "Manajer hanya dapat mengakses catatan operasional dalam lingkup ketenagakerjaan dan catatan profesional yang disetujui pekerja. Health Log, Stress Check, Life Log, data keluarga, kontak darurat, dan eCoin pribadi tetap tidak tersedia.",
    },
    settings: {
      title: "Pengaturan",
      subtitle: "Preferensi manajer · ruang kerja dan lokal",
      desktopSubtitle:
        "Akun manajer, lokal, notifikasi, preferensi fasilitas, dan kontrol akses.",
      identityCaption: "{facility} · Asia/Tokyo",
      preferences: "PREFERENSI",
      rows: {
        language: "Bahasa",
        timezone: "Zona waktu",
        notifications: "Notifikasi",
        defaultFacility: "Fasilitas bawaan",
      },
      notificationsValue: "Peringatan operasional AKTIF",
      accessAccount: "AKSES & AKUN",
      rolePermissions: "Peran & izin",
      rolePermissionsMeta: "Akses operasional lingkup fasilitas",
      languageLocaleTimezone: "Bahasa / lokal / zona waktu",
      languageLocaleTimezoneMeta:
        "Preferensi tampilan saja; stempel waktu sumber tidak berubah",
      saveSettings: "Simpan pengaturan",
      boundary:
        "Pengaturan tidak memperluas akses Manajer ke catatan privat pekerja.",
    },
    saved: {
      pageTitle: "Pengaturan Tersimpan",
      desktopBadge: "TERSIMPAN",
      title: "Pengaturan tersimpan",
      subtitle: "Perubahan diterapkan pada ruang kerja manajer saat ini",
      updatedPreferences: "PREFERENSI DIPERBARUI",
      rows: {
        language: "Bahasa",
        timezone: "Zona waktu",
        notifications: "Notifikasi",
        defaultFacility: "Fasilitas bawaan",
        reportDefaults: "Bawaan laporan",
      },
      notificationsValue:
        "Belum dibaca · laporan · visa/admin · tindak lanjut AKTIF",
      reportDefaultsValue: "Ringkasan Operasional · PDF",
      boundaryTitle: "BATAS AKSES TIDAK BERUBAH",
      boundaryBody:
        "Akses ke Health / Stress / Life / keluarga / eCoin pribadi milik pekerja tidak diperluas.",
      backToSettings: "Kembali ke Pengaturan",
      footnote:
        "Perubahan lokal hanya memengaruhi tampilan; stempel waktu sumber tetap tidak berubah.",
    },
    saveFailed: {
      badge: "Pengaturan belum tersimpan",
      title: "Pengaturan Belum Tersimpan",
      subtitle: "Preferensi sebelumnya masih aktif",
      summaryTitle: "Konfigurasi sebelumnya tetap aktif",
      summaryBody:
        "Tidak ada perubahan preferensi yang dianggap berhasil sampai penyimpanan dikonfirmasi.",
      unsavedChanges: "PERUBAHAN BELUM TERSIMPAN",
      rows: {
        languageTimezone: "Bahasa / zona waktu",
        notifications: "Notifikasi",
        defaultFacility: "Fasilitas bawaan",
        reportDefaults: "Bawaan laporan",
      },
      notSavedValue: "Tertunda",
      notificationsValue:
        "Belum dibaca · laporan · visa/admin · tindak lanjut AKTIF",
      reportDefaultsValue: "Ringkasan Operasional · PDF",
      retryTitle: "COBA ULANG AMAN",
      retryBody:
        "Sambungkan kembali dan konfirmasi fasilitas saat ini sebelum menyimpan lagi.",
      retryBullets: [
        "sambungkan kembali jika perlu",
        "konfirmasi konteks fasilitas saat ini",
        "coba lagi dari Pengaturan",
        "jangan pernah menampilkan status tersimpan yang keliru",
      ],
      privacyTitle: "BATAS AKSES TIDAK BERUBAH",
      privacyBody:
        "Izin akses/privasi tetap tidak berubah selama penyimpanan tertunda.",
      returnToSettings: "Kembali ke Pengaturan",
      retrySave: "Coba Simpan Lagi",
    },
    permissions: {
      title: "Peran & izin",
      desktopTitle: "Peran & Izin",
      subtitle: "Manajer · akses operasional MVP",
      desktopSubtitle:
        "Akses operasional MVP Manajer untuk organisasi dan fasilitas saat ini.",
      roleCaption: "{facility} · akses lingkup ketenagakerjaan",
      allowed: "DIIZINKAN",
      allowedItems: {
        workers: "Pekerja & status operasional",
        communication: "Komunikasi & pratinjau terjemahan",
        reports: "Laporan Harian & Tindak Lanjut",
        records: "Catatan profesional / Work Log",
        governance: "OJT, HRDD, dan Ekspor Audit",
      },
      desktopAllowedExtra: "Catatan visa / administratif",
      notAvailable: "TIDAK TERSEDIA",
      privateTitle: "Data pribadi pekerja",
      privateLines: [
        "Health Log · Stress Check · Life Log",
        "Data keluarga dan pribadi",
        "Saldo dan transfer eCoin pribadi",
      ],
      desktopDeniedLines: [
        "Data privat pekerja",
        "Health Log · Stress Check · Life Log",
        "Data keluarga/pribadi · Kontak Darurat",
        "eCoin pribadi",
      ],
      futureTitle: "Peran mendatang",
      futureBody:
        "Facility Admin dan Organization Admin bukan bagian dari MVP ini.",
      backToSettings: "Kembali ke Pengaturan",
      boundary:
        "Mengubah preferensi tidak pernah memperluas cakupan akses; izin peran dikendalikan kebijakan.",
    },
    locale: {
      title: "Bahasa & format regional",
      desktopTitle: "Bahasa & Format Regional",
      subtitle: "Preferensi tampilan untuk ruang kerja Manajer",
      desktopSubtitle: "Preferensi tampilan untuk ruang kerja Manajer.",
      rows: {
        language: "Bahasa",
        timezone: "Zona waktu",
        dateFormat: "Format tanggal",
        timeFormat: "Format waktu",
        phoneFormat: "Format telepon",
      },
      timeFormatValue: "24 jam",
      noteTitle: "Stempel waktu sumber tetap tidak berubah",
      noteBody:
        "Perubahan lokal hanya memengaruhi tampilan. Stempel waktu sumber asli dan bukti audit tetap tidak berubah.",
      saveLocale: "Simpan pengaturan lokal",
      backToSettings: "Kembali ke Pengaturan",
    },
    support: {
      title: "Dukungan",
      subtitle: "Bantuan untuk alur kerja operasional yang diizinkan dan akses akun",
      helpTopics: "TOPIK BANTUAN",
      topics: {
        communication: {
          title: "Menggunakan Komunikasi",
          body: "Pesan, pratinjau terjemahan, konteks balasan pekerja",
        },
        dailyReports: {
          title: "Laporan Harian",
          body: "Status pengiriman, detail, keluaran operasional",
        },
        followUp: {
          title: "Tindak Lanjut",
          body: "Antrean tinjauan manusia dan komunikasi pekerja",
        },
        auditExport: {
          title: "Ekspor Audit",
          body: "Paket bukti dan pengecualian privasi",
        },
      },
      recentRequest: "PERMINTAAN TERBARU",
      recentTopic: "Panduan akses",
      recentCaption:
        "Dikirim hari ini {time} · konteks fasilitas terlampir · menunggu respons",
      contactSupport: "HUBUNGI DUKUNGAN",
      topicLabel: "Topik",
      topicOptions: {
        accessWorkflow: "Pertanyaan akses / alur kerja",
        operationalSupport: "Dukungan operasional",
        reportingWorkflow: "Pertanyaan pelaporan / alur kerja",
      },
      chooseTopic: "Pilih topik",
      summaryLabel: "Ringkasan",
      summaryValue: "Butuh panduan tentang tindakan yang terikat fasilitas",
      contextLabel: "Konteks disertakan",
      contextValue: "Organisasi · Fasilitas · Peran manajer · Modul saat ini",
      contextItems: {
        organization: "Organisasi",
        facility: "Fasilitas",
        managerRole: "Peran manajer",
        currentModule: "Modul saat ini",
      },
      privacyStrip: "Tidak ada konten pekerja yang bersifat pribadi disertakan.",
      warning:
        "Jangan sertakan data Health / Stress / Life / keluarga / eCoin pribadi.",
      send: "Kirim permintaan dukungan",
      sending: "Mengirim permintaan dukungan…",
      footnote:
        "Hanya dukungan produk/akun/alur kerja · bukan nasihat hukum, imigrasi, medis, atau keuangan.",
    },
    supportSent: {
      pageTitle: "Permintaan Terkirim",
      desktopBadge: "TERKIRIM",
      title: "Permintaan dukungan terkirim",
      subtitle: "Permintaan dukungan manajer · status prototipe",
      ticketStatus: "Terkirim · menunggu tinjauan dukungan",
      requestDetails: "DETAIL PERMINTAAN",
      rows: {
        topic: "Topik",
        subject: "Subjek",
        organization: "Organisasi",
        facility: "Fasilitas",
        managerRole: "Peran manajer",
      },
      topicValue: "Dukungan operasional",
      subjectValue: "Pertanyaan pelaporan / alur kerja",
      privacyTitle: "KONFIRMASI PRIVASI",
      privacyBody:
        "Tidak ada konten pribadi pekerja yang disertakan. Konteks permintaan tetap terbatas pada dukungan produk/akun/alur kerja.",
      backToSupport: "Kembali ke Dukungan",
    },
    supportFailed: {
      badge: "Permintaan tidak terkirim",
      title: "Permintaan Gagal",
      subtitle: "Topik dan detail yang Anda masukkan tetap tersimpan",
      summaryTitle: "Tidak ada permintaan dukungan yang dibuat",
      summaryBody:
        "Informasi yang dimasukkan tetap tersedia sehingga Manajer dapat mencoba lagi dengan aman.",
      detailsPreserved: "PERMINTAAN DIPERTAHANKAN",
      rows: {
        topic: "Topik",
        subject: "Subjek",
        context: "Konteks",
        privacy: "Privasi",
      },
      values: {
        topic: "Dukungan operasional",
        subject: "Pertanyaan pelaporan / alur kerja",
        context: "Organisasi / fasilitas saat ini",
        privacy: "Data pribadi pekerja dikecualikan",
      },
      retryTitle: "COBA ULANG AMAN",
      retryBody:
        "Sambungkan kembali dan konfirmasi fasilitas saat ini sebelum mengirim lagi.",
      retryBullets: [
        "konfirmasi konektivitas",
        "pertahankan konteks fasilitas yang sama",
        "tinjau topik/detail sebelum mencoba lagi",
        "jangan menduplikasi permintaan kecuali pengiriman dikonfirmasi",
      ],
      tryAgain: "Coba Lagi",
      backToSupport: "Kembali ke Dukungan",
      footnote: "Tidak ada catatan dukungan yang dibuat saat gagal.",
    },
    logout: {
      title: "Keluar?",
      subtitle: "Batas sesi Manajer",
      heading: "Keluar dari Manajer?",
      intro:
        "Anda akan kembali ke Login Manajer. Sesi Pekerja dan Manajer tetap terpisah.",
      currentSession: "SESI SAAT INI",
      sessionStatus:
        "Sesi aktif · konteks fasilitas saat ini dipertahankan sampai keluar",
      whenYouSignOut: "SAAT ANDA KELUAR",
      bullets: [
        "Sesi Manajer berakhir",
        "kembali ke Login Manajer",
        "sesi pekerja tetap terpisah",
        "tidak ada tindakan tertunda yang diklaim selesai",
        "akses data pribadi pekerja tidak diperluas",
      ],
      boundaryTitle: "BATAS SESI AMAN-PRIVASI",
      boundaryBody:
        "Keluar akan menghapus konteks sesi Manajer; ini tidak menggabungkan akses Manajer dan Pekerja.",
      signOut: "Keluar",
      cancel: "Batal",
      footnote:
        "Batal mengembalikan Anda ke ruang kerja Manajer saat ini tanpa mengakhiri sesi.",
    },
    offline: {
      chip: "Luring",
      body: "Konteks operasional tersimpan dapat dilihat; penulisan dinonaktifkan.",
    },
  },
  ja: {
    more: {
      titleMobile: "その他",
      subtitleMobile: "マネージャーツール · {facility}",
      titleDesktop: "ナビゲーション & アカウント",
      subtitleDesktop:
        "デスクトップのアカウントナビゲーション、マネージャーのワークスペース管理、ガバナンスへの入口。",
      identityCaption: "{facility} · 業務アクセス",
      switchPill: "切り替え",
      managerProfileLink: "マネージャープロフィール",
      openManagerProfile: "マネージャープロフィールを開く",
      operations: "業務",
      governance: "ガバナンス & アカウント",
      descriptors: {
        reports: "生成された業務レポート",
        alerts: "未対応 2件",
        analytics: "週次の業務トレンド",
        knowledgeOjt: "有効モジュール 3件",
        humanRightsDd: "証跡の網羅性",
        auditExport: "プライバシー保護された証跡パッケージ",
        settings: "言語・施設・アクセス",
        support: "ヘルプと申請履歴",
      },
      logoutTitle: "ログアウト",
      logoutCaption: "マネージャーセッションを終了",
      boundary:
        "業務アクセスのみ · マネージャーのアカウント設定では、個人のHealth / Stress / Lifeデータや個人eCoinへのアクセスは拡大しません。",
    },
    profile: {
      title: "マネージャープロフィール",
      subtitle: "アカウントと現在のワークスペース",
      desktopSubtitle:
        "アカウント、ワークスペース、ロール、ロケール、セッションの管理。",
      headerRole: "{role} · {facility}",
      headerAccess: "業務マネージャーアクセス",
      rows: {
        managerId: "マネージャーID",
        organization: "組織",
        currentFacility: "現在の施設",
        language: "言語",
        timezone: "タイムゾーン",
      },
      accountSession: "アカウント & セッション",
      accountWorkspace: "アカウント & ワークスペース",
      openSettings: "設定を開く",
      switchFacility: "施設を切り替え",
      logout: "ログアウト",
      openWorkLabel: "未完了の作業",
      openWorkValue: "9件",
      openWorkMeta: "フォローアップ4 · 未読3 · 管理2",
      sessionLabel: "セッション",
      sessionValue: "有効",
      sessionMeta: "最終サインイン 本日 09:18",
      offlineRecovery: "オフライン / 復旧の状態",
      boundaryTitle: "アクセス境界",
      boundaryBody:
        "マネージャーは雇用範囲の業務記録とワーカーが承認した職務記録のみにアクセスできます。Health Log、Stress Check、Life Log、家族データ、緊急連絡先、個人のeCoinは引き続き利用できません。",
    },
    settings: {
      title: "設定",
      subtitle: "マネージャー設定 · ワークスペースとロケール",
      desktopSubtitle:
        "マネージャーのアカウント、ロケール、通知、施設設定、アクセス管理。",
      identityCaption: "{facility} · Asia/Tokyo",
      preferences: "環境設定",
      rows: {
        language: "言語",
        timezone: "タイムゾーン",
        notifications: "通知",
        defaultFacility: "既定の施設",
      },
      notificationsValue: "業務アラート ON",
      accessAccount: "アクセス & アカウント",
      rolePermissions: "ロールと権限",
      rolePermissionsMeta: "施設範囲の業務アクセス",
      languageLocaleTimezone: "言語 / ロケール / タイムゾーン",
      languageLocaleTimezoneMeta:
        "表示専用の設定です。元のタイムスタンプは変更されません",
      saveSettings: "設定を保存",
      boundary:
        "設定を変更しても、ワーカーの非公開記録へのマネージャーアクセスは拡大しません。",
    },
    saved: {
      pageTitle: "設定を保存",
      desktopBadge: "保存済み",
      title: "設定を保存しました",
      subtitle: "現在のマネージャーワークスペースに変更を適用しました",
      updatedPreferences: "更新された環境設定",
      rows: {
        language: "言語",
        timezone: "タイムゾーン",
        notifications: "通知",
        defaultFacility: "既定の施設",
        reportDefaults: "レポート既定値",
      },
      notificationsValue: "未読 · レポート · ビザ/管理 · フォローアップ ON",
      reportDefaultsValue: "業務サマリー · PDF",
      boundaryTitle: "アクセス境界は変更なし",
      boundaryBody:
        "ワーカー個人のHealth / Stress / Life / 家族 / 個人eCoinへのアクセスは拡大していません。",
      backToSettings: "設定に戻る",
      footnote:
        "ロケール変更は表示のみに影響し、元のタイムスタンプは変更されません。",
    },
    saveFailed: {
      badge: "設定は保存されませんでした",
      title: "設定は未保存",
      subtitle: "以前の設定が引き続き有効です",
      summaryTitle: "以前の構成が引き続き有効です",
      summaryBody:
        "保存が確認されるまで、設定の変更は成功として扱われません。",
      unsavedChanges: "未保存の変更",
      rows: {
        languageTimezone: "言語 / タイムゾーン",
        notifications: "通知",
        defaultFacility: "既定の施設",
        reportDefaults: "レポート既定値",
      },
      notSavedValue: "保留中",
      notificationsValue: "未読 · レポート · ビザ/管理 · フォローアップ ON",
      reportDefaultsValue: "業務サマリー · PDF",
      retryTitle: "安全な再試行",
      retryBody: "再接続し、現在の施設を確認してから再度保存してください。",
      retryBullets: [
        "必要に応じて再接続する",
        "現在の施設コンテキストを確認する",
        "設定から再試行する",
        "誤った保存済み状態を決して表示しない",
      ],
      privacyTitle: "アクセス境界は変更なし",
      privacyBody:
        "保存が保留中の間、アクセス/プライバシー権限は変更されません。",
      returnToSettings: "設定に戻る",
      retrySave: "保存を再試行",
    },
    permissions: {
      title: "ロールと権限",
      desktopTitle: "ロールと権限",
      subtitle: "マネージャー · MVP業務アクセス",
      desktopSubtitle:
        "現在の組織および施設に対するマネージャーMVPの業務アクセス。",
      roleCaption: "{facility} · 雇用範囲のアクセス",
      allowed: "許可",
      allowedItems: {
        workers: "ワーカーと業務ステータス",
        communication: "コミュニケーションと翻訳プレビュー",
        reports: "日報とフォローアップ",
        records: "職務記録 / ワークログ",
        governance: "OJT・HRDD・監査エクスポート",
      },
      desktopAllowedExtra: "ビザ / 管理記録",
      notAvailable: "利用不可",
      privateTitle: "ワーカーの個人データ",
      privateLines: [
        "Health Log · Stress Check · Life Log",
        "家族および個人のデータ",
        "個人eCoinの残高と送金",
      ],
      desktopDeniedLines: [
        "ワーカーの個人データ",
        "Health Log · Stress Check · Life Log",
        "家族/個人データ · 緊急連絡先",
        "個人 eCoin",
      ],
      futureTitle: "将来のロール",
      futureBody:
        "Facility Admin と Organization Admin は本MVPには含まれません。",
      backToSettings: "設定に戻る",
      boundary:
        "設定の変更でアクセス範囲が広がることはありません。ロール権限はポリシーで管理されます。",
    },
    locale: {
      title: "言語と地域フォーマット",
      desktopTitle: "言語と地域フォーマット",
      subtitle: "マネージャーワークスペースの表示設定",
      desktopSubtitle: "マネージャーワークスペースの表示設定。",
      rows: {
        language: "言語",
        timezone: "タイムゾーン",
        dateFormat: "日付形式",
        timeFormat: "時刻形式",
        phoneFormat: "電話番号形式",
      },
      timeFormatValue: "24時間",
      noteTitle: "元のタイムスタンプは変更されません",
      noteBody:
        "ロケールの変更は表示にのみ影響します。元のタイムスタンプと監査証跡は変更されません。",
      saveLocale: "ロケール設定を保存",
      backToSettings: "設定に戻る",
    },
    support: {
      title: "サポート",
      subtitle: "許可された業務ワークフローとアカウントアクセスのヘルプ",
      helpTopics: "ヘルプトピック",
      topics: {
        communication: {
          title: "コミュニケーションの使い方",
          body: "メッセージ、翻訳プレビュー、ワーカー返信の文脈",
        },
        dailyReports: {
          title: "日報",
          body: "提出状況、詳細、業務出力",
        },
        followUp: {
          title: "フォローアップ",
          body: "人によるレビュー待ちキューとワーカーとの連絡",
        },
        auditExport: {
          title: "監査エクスポート",
          body: "証跡パッケージとプライバシー除外項目",
        },
      },
      recentRequest: "最近の申請",
      recentTopic: "アクセスに関する案内",
      recentCaption: "本日 {time} 送信 · 施設コンテキスト添付 · 回答待ち",
      contactSupport: "サポートに連絡",
      topicLabel: "トピック",
      topicOptions: {
        accessWorkflow: "アクセス / ワークフローの質問",
        operationalSupport: "業務サポート",
        reportingWorkflow: "レポート / ワークフローの質問",
      },
      chooseTopic: "トピックを選択",
      summaryLabel: "概要",
      summaryValue: "施設に紐づくアクションについて案内が必要です",
      contextLabel: "含まれるコンテキスト",
      contextValue: "組織 · 施設 · マネージャーロール · 現在のモジュール",
      contextItems: {
        organization: "組織",
        facility: "施設",
        managerRole: "マネージャーロール",
        currentModule: "現在のモジュール",
      },
      privacyStrip: "ワーカーの非公開コンテンツは含まれていません。",
      warning:
        "個人のHealth / Stress / Life / 家族 / 個人eCoinデータは含めないでください。",
      send: "サポート申請を送信",
      sending: "サポート申請を送信中…",
      footnote:
        "製品/アカウント/ワークフローのサポートのみ · 法務・入管・医療・金融の助言ではありません。",
    },
    supportSent: {
      pageTitle: "申請を送信",
      desktopBadge: "送信済み",
      title: "サポート申請を送信しました",
      subtitle: "マネージャーサポート申請 · プロトタイプ状態",
      ticketStatus: "送信済み · サポート確認待ち",
      requestDetails: "申請の詳細",
      rows: {
        topic: "トピック",
        subject: "件名",
        organization: "組織",
        facility: "施設",
        managerRole: "マネージャーロール",
      },
      topicValue: "業務サポート",
      subjectValue: "レポート / ワークフローの質問",
      privacyTitle: "プライバシー確認",
      privacyBody:
        "ワーカーの個人的な内容は含まれていません。申請のコンテキストは製品/アカウント/ワークフローのサポートに限定されます。",
      backToSupport: "サポートに戻る",
    },
    supportFailed: {
      badge: "申請は送信されませんでした",
      title: "申請の送信に失敗",
      subtitle: "入力したトピックと詳細は保持されています",
      summaryTitle: "サポート申請は作成されていません",
      summaryBody:
        "入力内容は保持されているため、マネージャーは安全に再試行できます。",
      detailsPreserved: "保持された申請",
      rows: {
        topic: "トピック",
        subject: "件名",
        context: "コンテキスト",
        privacy: "プライバシー",
      },
      values: {
        topic: "業務サポート",
        subject: "レポート / ワークフローの質問",
        context: "現在の組織 / 施設",
        privacy: "ワーカー個人データは除外",
      },
      retryTitle: "安全な再試行",
      retryBody: "再接続し、現在の施設を確認してから再度送信してください。",
      retryBullets: [
        "接続を確認する",
        "同じ施設コンテキストを維持する",
        "再試行前にトピック/詳細を確認する",
        "送信が確認されない限り申請を重複させない",
      ],
      tryAgain: "再試行",
      backToSupport: "サポートに戻る",
      footnote: "失敗時にサポート記録は作成されません。",
    },
    logout: {
      title: "ログアウトしますか？",
      subtitle: "マネージャーセッションの境界",
      heading: "マネージャーからログアウトしますか？",
      intro:
        "マネージャーログインに戻ります。ワーカーとマネージャーのセッションは分離されたままです。",
      currentSession: "現在のセッション",
      sessionStatus:
        "セッション有効 · サインアウトまで現在の施設コンテキストを保持",
      whenYouSignOut: "サインアウトすると",
      bullets: [
        "マネージャーセッションが終了します",
        "マネージャーログインに戻ります",
        "ワーカーセッションは分離されたままです",
        "保留中のアクションが完了扱いになることはありません",
        "ワーカーの個人データへのアクセスは拡大しません",
      ],
      boundaryTitle: "プライバシー保護されたセッション境界",
      boundaryBody:
        "サインアウトはマネージャーのセッションコンテキストを消去します。マネージャーとワーカーのアクセスが統合されることはありません。",
      signOut: "サインアウト",
      cancel: "キャンセル",
      footnote:
        "キャンセルするとセッションを終了せずに現在のマネージャーワークスペースに戻ります。",
    },
    offline: {
      chip: "オフライン",
      body: "キャッシュされた業務コンテキストは閲覧できますが、書き込みは無効です。",
    },
  },
});
