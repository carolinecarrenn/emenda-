import { defineSectionCopy } from "@/i18n/copy";

/**
 * UI copy for Logs & Records (WD-61 family, section 1187:253 · mobile W-61,
 * 1163:253). This section's mocks are Indonesian-first with deliberate English
 * data-style labels mixed in ("Verified", "Private", "PRIVAT · HEALTH",
 * "VERIFIED WORK RECORDS") — the `id` dictionary carries the verbatim mock
 * text (including those English fragments), while `en`/`ja` are faithful
 * translations. Record/note contents stay raw in logsMock.ts.
 */

/** Replaces "{key}" placeholders in a copy template. */
export function fillLogsCopy(
  template: string,
  vars: Record<string, string>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? vars[key] : match,
  );
}

export interface LogsCopy {
  privateLabel: string;
  todayLabel: string;
  overview: {
    /** Hub eyebrow above the H1 — the section name, not a back link. */
    eyebrow: string;
    /** WD-61Z / Z1 / Z2 headless eyebrow. */
    headlessEyebrow: string;
    title: string;
    subtitle: string;
    /** WD-61Z headless subtitle. */
    headlessSubtitle: string;
    workTitle: string;
    workBody: string;
    dailyTitle: string;
    dailyBody: string;
    healthTitle: string;
    healthBody: string;
    lifeTitle: string;
    lifeBody: string;
    open: string;
    headlessNote: string;
    /** WD-61Z availability rows. */
    headlessWorkBody: string;
    headlessDailyBody: string;
    unavailable: string;
    accessEndedTitle: string;
    accessEndedBody: string;
    /** W-61Z2 lead line and row captions once employer access ends. */
    accessEndedSubtitle: string;
    accessEndedWorkMeta: string;
    accessEndedDailyMeta: string;
    accessEndedPrivateMeta: string;
    /** W-61Z1 offline lead line and banner body. */
    offlineSubtitle: string;
    offlineBannerBody: string;
  };
  states: {
    offlineTitle: string;
    offlineBody: string;
    saveFailedTitle: string;
    saveFailedBody: string;
    /** W-61D hub loading lead line. */
    loadingSubtitle: string;
    /** W-61U/V/W offline "add" action label. */
    offlineDraftCta: string;
  };
  work: {
    title: string;
    subtitle: string;
    tabAll: string;
    tabVerified: string;
    tabPersonal: string;
    verifiedLabel: string;
    personalLabel: string;
    verifiedTag: string;
    personalNoteMeta: string;
    activeSince: string;
    addCta: string;
    parityTitle: string;
    parityBody: string;
    emptyTitle: string;
    emptyBody: string;
    /** W-61J lead line above the empty card. */
    emptySubtitle: string;
    /** W-61U/V/W offline lead line. */
    offlineSubtitle: string;
  };
  record: {
    title: string;
    subtitle: string;
    notFound: string;
    employerLabel: string;
    roleLabel: string;
    statusLabel: string;
    statusValue: string;
    eventLabel: string;
    sourceLabel: string;
    sourceValue: string;
    activeStatus: string;
    readOnlyLabel: string;
    /** WD-61F Ownership strip — the literal Figma sentence. */
    ownership: string;
    readOnlyBody: string;
  };
  noteForm: {
    titleLabel: string;
    categoryLabel: string;
    noteLabel: string;
    dateLabel: string;
    metaLine: string;
    titlePlaceholder: string;
    categoryPlaceholder: string;
    saveLabel: string;
    privacyTitle: string;
    privacyBody: string;
    /** W-61I / 61R primary button — the edit frames say "Save changes". */
    editSaveLabel: string;
  };
  careerNote: {
    addTitle: string;
    addSubtitle: string;
    editTitle: string;
    detailTitle: string;
    detailSubtitle: string;
    notePlaceholder: string;
    /** W-61G privacy card above the career note fields. */
    privacyTitle: string;
    privacyBody: string;
    /** W-61I lead line — the edit frame carries its own privacy sentence. */
    editSubtitle: string;
    /** W-61AN header title while the note is a local offline draft. */
    draftTitle: string;
  };
  healthNote: {
    /** W-61K labels the first field TYPE, not CATEGORY. */
    typeLabel: string;
    typePlaceholder: string;
    addTitle: string;
    addSubtitle: string;
    editTitle: string;
    detailTitle: string;
    detailSubtitle: string;
    notePlaceholder: string;
    /** W-61AD lead line. */
    editSubtitle: string;
    /** W-61AO header title while the note is a local offline draft. */
    draftTitle: string;
    /** W-61L form privacy card — "PRIVAT BY DEFAULT". */
    privacyTitle: string;
    privacyBody: string;
    /** W-61K detail privacy sentence. */
    detailPrivacyBody: string;
  };
  lifeNote: {
    addTitle: string;
    addSubtitle: string;
    editTitle: string;
    detailTitle: string;
    detailSubtitle: string;
    notePlaceholder: string;
    /** W-61AF lead line. */
    editSubtitle: string;
    /** W-61AP header title while the note is a local offline draft. */
    draftTitle: string;
    /** W-61Q / 61P privacy caption — "ONLY YOU". */
    privacyTitle: string;
  };
  /** WD-61S1 / S2 / S3 full-page delete review. */
  deleteReview: {
    title: string;
    subtitle: string;
    careerBody: string;
    healthBody: string;
    lifeBody: string;
    keep: string;
    confirm: string;
  };
  /** WD-61T save-failed screen (the form is replaced by this review). */
  saveFailed: {
    title: string;
    subtitle: string;
    backToEdit: string;
    retry: string;
    /** W-61T pink card. */
    cardTitle: string;
    cardBody: string;
  };
  noteActions: {
    edit: string;
    delete: string;
    /** W-61G trailing line: "Created {created} · Updated {updated}". */
    timestamps: string;
  };
  deleteModal: {
    careerTitle: string;
    healthTitle: string;
    lifeTitle: string;
    body: string;
    confirm: string;
  };
  /** W-61S4 / S5 / S6 — the confirmation screen shown after a note is deleted. */
  deleted: {
    careerTitle: string;
    healthTitle: string;
    lifeTitle: string;
    subtitle: string;
    cardTitle: string;
    careerBody: string;
    healthBody: string;
    lifeBody: string;
    backCta: string;
  };
  unsaved: {
    title: string;
    body: string;
    keep: string;
    discard: string;
  };
  health: {
    title: string;
    subtitle: string;
    privacyTitle: string;
    privacyBody: string;
    entriesLabel: string;
    stressRowTitle: string;
    /** W-61B appends this to the stress row title on mobile only. */
    stressRowMobileSuffix: string;
    manageCta: string;
    stressCta: string;
    addCta: string;
    emptyTitle: string;
    emptyBody: string;
    /** W-61X lead line above the empty card. */
    emptySubtitle: string;
    /** W-61U/V/W offline lead line. */
    offlineSubtitle: string;
  };
  consent: {
    accessTitle: string;
    accessSubtitle: string;
    defaultTitle: string;
    defaultBody: string;
    providersLabel: string;
    noAccess: string;
    activeUntil: string;
    expiredOn: string;
    setAccess: string;
    explicitTitle: string;
    explicitBody: string;
    reviewTitle: string;
    reviewSubtitle: string;
    recipientLabel: string;
    sharedLabel: string;
    sharedValue: string;
    durationLabel: string;
    durationValue: string;
    notShared: string;
    allow: string;
    grantedTitle: string;
    grantedSubtitle: string;
    grantedEyebrow: string;
    grantedHeading: string;
    grantedBody: string;
    activeEyebrow: string;
    activeHeading: string;
    activeBody: string;
    revokeCta: string;
    revokeTitle: string;
    revokeSubtitle: string;
    revokedTitle: string;
    revokedSubtitle: string;
    revokedEyebrow: string;
    revokedHeading: string;
    revokedBody: string;
    grantFailedTitle: string;
    grantFailedBody: string;
    expiredTitle: string;
    expiredBody: string;
    /** W-61O2 / O6 / O7 lead lines and actions. */
    grantedDoneCta: string;
    activeSubtitle: string;
    expiredSubtitle: string;
    /** W-61O3 revoke review card. */
    revokeCardAccess: string;
    revokeCardBody: string;
    keepAccess: string;
    /** W-61O4 revoked confirmation card. */
    revokedCardTitle: string;
    revokedCardBody: string;
    /** W-61O5 grant-failed review. */
    grantFailedScreenTitle: string;
    grantFailedSubtitle: string;
    grantFailedRetry: string;
    grantFailedBack: string;
  };
  stress: {
    title: string;
    subtitle: string;
    eyebrow: string;
    intro: string;
    q1: string;
    q2: string;
    q3: string;
    stressOptions: [string, string, string];
    energyOptions: [string, string, string];
    sleepOptions: [string, string, string];
    optionalLabel: string;
    optionalPlaceholder: string;
    save: string;
    resultTitle: string;
    resultSubtitle: string;
    savedEyebrow: string;
    resultSummary: string;
    resultDisclaimer: string;
    notDiagnosis: string;
    historyCta: string;
    historyTitle: string;
    historySubtitle: string;
    historyLabel: string;
    selfCheckTitle: string;
    selfCheckBody: string;
    historySummary: string;
    detailTitle: string;
    detailSubtitle: string;
    detailNoteLabel: string;
    emptyTitle: string;
    emptyBody: string;
    /** W-61M1 primary button. */
    newCta: string;
    /** W-61M3 — offline replaces the questionnaire with the cached row. */
    offlineSubtitle: string;
    offlineTitle: string;
    offlineBody: string;
    offlineRetryCta: string;
    cachedMeta: string;
    /** W-61M4 save-failed review. */
    saveFailedSubtitle: string;
    saveFailedCardTitle: string;
    saveFailedCardBody: string;
  };
  sync: {
    draftTitle: string;
    draftBody: string;
    openCta: string;
    /** W-61AN/AO/AP save label while offline. */
    saveDraftCta: string;
    title: string;
    subtitle: string;
    rowCareer: string;
    rowHealth: string;
    rowLife: string;
    syncing: string;
    waiting: string;
    synced: string;
    syncFailedTag: string;
    doneTitle: string;
    doneBody: string;
    failedTitle: string;
    failedBody: string;
    retryCta: string;
    /** W-61AR primary button — finishes the run and lands on W-61AT. */
    completeCta: string;
    /** W-61AS / AT lead lines; W-61AT gets its own header title. */
    failedSubtitle: string;
    doneScreenTitle: string;
    doneSubtitle: string;
  };
  life: {
    title: string;
    subtitle: string;
    privacyTitle: string;
    privacyBody: string;
    notesLabel: string;
    addCta: string;
    emptyTitle: string;
    emptyBody: string;
    /** W-61Y lead line above the empty card. */
    emptySubtitle: string;
    /** W-61U/V/W offline lead line. */
    offlineSubtitle: string;
    /** W-61W cached row caption. */
    cachedMeta: string;
  };
}

export const LOGS_COPY = defineSectionCopy<LogsCopy>({
  en: {
    privateLabel: "Private",
    todayLabel: "Today",
    overview: {
      eyebrow: "Profile",
      headlessEyebrow: "Your Notes",
      title: "Your Notes",
      subtitle: "All your work and personal records, with clear access boundaries.",
      headlessSubtitle:
        "Your private records stay yours. Health and Life are not shared with your employer or manager without explicit permission.",
      workTitle: "Work & Career Log",
      workBody: "Verified work records and professional history",
      dailyTitle: "Daily Reports",
      dailyBody: "Messages + Daily Reports",
      healthTitle: "PRIVATE · HEALTH",
      healthBody: "Health Log + Stress Check · only you and licensed health professionals",
      lifeTitle: "PRIVATE · LIFE",
      lifeBody: "Personal, family & housing notes · only you",
      open: "OPEN",
      headlessNote:
        "Work-specific verified records may be limited without an active employer connection. Private records remain yours.",
      headlessWorkBody:
        "Personal career notes · employer records appear once connected",
      headlessDailyBody: "Available once an employer connection is active",
      unavailable: "NOT AVAILABLE",
      accessEndedTitle: "WORK ACCESS ENDED",
      accessEndedBody: 
        "Earlier work records and reports stay read-only. Your private notes are unaffected.",
      accessEndedSubtitle:
        "Employer access has ended. Your past history stays available.",
      accessEndedWorkMeta: "Past employer history · read-only",
      accessEndedDailyMeta: "Historic reports · read-only",
      accessEndedPrivateMeta: "Still private and available",
      offlineSubtitle: "Cached private records stay available offline.",
      offlineBannerBody:
        "Locally stored notes stay readable. Anything that needs the employer or a sync waits for the reconnect.",
    },
    states: {
      offlineTitle: "You are offline",
      offlineBody:
        "Showing cached data. Changes will sync once you are back online.",
      saveFailedTitle: "Save failed",
      saveFailedBody:
        "Your note is still in this form. Check your connection and try again.",
      loadingSubtitle: "Loading your notes…",
      offlineDraftCta: "Add offline draft",
    },
    work: {
      title: "Work & Career Log",
      subtitle: "Your verified work history and personal career notes.",
      tabAll: "All",
      tabVerified: "Verified",
      tabPersonal: "Personal",
      verifiedLabel: "VERIFIED WORK RECORDS",
      personalLabel: "PERSONAL CAREER NOTES",
      verifiedTag: "Verified",
      personalNoteMeta: "Personal note",
      activeSince: "Active since {month}",
      addCta: "Add career note",
      parityTitle: "Verified vs personal",
      parityBody:
        "Verified employer records are read-only. Only you can edit your personal notes.",
      emptyTitle: "No work history yet",
      emptyBody: 
        "Employer records appear once the employer connection is active. You can still keep private career notes.",
      emptySubtitle: "Your work history and career notes will appear here.",
      offlineSubtitle: "Cached records stay available offline.",
    },
    record: {
      title: "Work record",
      subtitle: "A verified work record from your employer.",
      notFound: "Record not found",
      employerLabel: "EMPLOYER",
      roleLabel: "ROLE",
      statusLabel: "STATUS",
      statusValue: "Verified",
      eventLabel: "LATEST VERIFIED EVENT",
      sourceLabel: "SOURCE",
      sourceValue: "{employer} employer connection · audit trail available.",
      activeStatus: "Active · since {month}",
      readOnlyLabel: "VERIFIED · READ ONLY",
      ownership: "Verified employer record — read-only.",
      readOnlyBody:
        "This record comes from the employer connection and cannot be edited by the worker.",
    },
    noteForm: {
      titleLabel: "TITLE",
      categoryLabel: "CATEGORY",
      noteLabel: "NOTE",
      dateLabel: "DATE",
      metaLine: "Created {created} · Updated {updated}",
      titlePlaceholder: "Give this note a title…",
      categoryPlaceholder: "Choose a category…",
      saveLabel: "Save note",
      privacyTitle: "PRIVATE",
      privacyBody: "Not shared with your employer or manager.",
      editSaveLabel: "Save changes",
    },
    careerNote: {
      addTitle: "Add career note",
      addSubtitle:
        "This note is private and does not become an employer record.",
      editTitle: "Edit career note",
      detailTitle: "Career note",
      detailSubtitle: "Private career note.",
      notePlaceholder: "Write your career note…",
      privacyTitle: "PRIVATE NOTE",
      privacyBody: "Only you can see and change this note.",
      editSubtitle: "Changes apply only to your private note.",
      draftTitle: "Career note draft",
    },
    healthNote: {
      typeLabel: "TYPE",
      typePlaceholder: "Choose a note type…",
      addTitle: "Add health note",
      addSubtitle: "This note is private by default.",
      editTitle: "Edit health note",
      detailTitle: "Health note",
      detailSubtitle: "Private health note.",
      notePlaceholder: "Write your health note…",
      editSubtitle: "Changes stay private.",
      draftTitle: "Health note draft",
      privacyTitle: "PRIVATE BY DEFAULT",
      privacyBody:
        "Not automatically shared with your employer, manager, or health professional.",
      detailPrivacyBody:
        "Only you and the health professionals you allow can see it.",
    },
    lifeNote: {
      addTitle: "Add private note",
      addSubtitle: "This note is available only to you.",
      editTitle: "Edit private note",
      detailTitle: "Private Life note",
      detailSubtitle: "A private note just for you.",
      notePlaceholder: "Write your note…",
      editSubtitle: "Changes stay private.",
      draftTitle: "Private life draft",
      privacyTitle: "ONLY YOU",
    },
    deleteReview: {
      title: "Delete note?",
      subtitle: "This action cannot be undone.",
      careerBody: "This personal career note will be permanently deleted.",
      healthBody: "This health note will be permanently deleted.",
      lifeBody: "This Private Life note will be permanently deleted.",
      keep: "Keep note",
      confirm: "Delete permanently",
    },
    saveFailed: {
      title: "Couldn’t save",
      subtitle: "Your note has not been lost.",
      backToEdit: "Back to edit",
      retry: "Try saving again",
      cardTitle: "Couldn’t save changes",
      cardBody:
        "What you entered is still on this screen. Try again without creating a duplicate.",
    },
    noteActions: {
      edit: "Edit note",
      delete: "Delete note",
      timestamps: "Created {created} · Updated {updated}",
    },
    deleteModal: {
      careerTitle: "Delete career note?",
      healthTitle: "Delete health note?",
      lifeTitle: "Delete private note?",
      body: "This note will be permanently deleted from your EMENDA account. This action cannot be undone.",
      confirm: "Delete note",
    },
    deleted: {
      careerTitle: "Career note deleted",
      healthTitle: "Health note deleted",
      lifeTitle: "Private note deleted",
      subtitle: "Deletion complete.",
      cardTitle: "Done",
      careerBody: "The personal note has been deleted from your Work & Career Log.",
      healthBody:
        "Your private health note has been deleted. Provider access does not bring back deleted notes.",
      lifeBody: "The Private Life note has been permanently deleted.",
      backCta: "Back to list",
    },
    unsaved: {
      title: "Unsaved changes",
      body: "If you leave now, your changes will be lost.",
      keep: "Keep editing",
      discard: "Discard changes",
    },
    health: {
      title: "Private Health",
      subtitle: "Only you and the licensed health professionals you authorize.",
      privacyTitle: "PRIVATE · HEALTH",
      privacyBody:
        "Your employer and manager cannot see these records without your explicit permission.",
      entriesLabel: "YOUR PRIVATE ENTRIES",
      stressRowTitle: "Stress check",
      stressRowMobileSuffix: " · personal self-check",
      manageCta: "Manage health access",
      stressCta: "Start stress check",
      addCta: "Add health note",
      emptyTitle: "No health log yet",
      emptyBody: 
        "Add a health note or run a stress check if you want to keep a private self-record.",
      emptySubtitle: "No private health records yet.",
      offlineSubtitle: "Cached health records stay available offline.",
    },
    consent: {
      accessTitle: "Health access",
      accessSubtitle: "Manage who is allowed to see your Health Log.",
      defaultTitle: "PRIVATE BY DEFAULT",
      defaultBody: "No employer or manager has access.",
      providersLabel: "AUTHORIZED HEALTH PROFESSIONALS",
      noAccess: "No active access",
      activeUntil: "Active until {date}",
      expiredOn: "Access expired · {date}",
      setAccess: "Set access",
      explicitTitle: "Access is always explicit",
      explicitBody:
        "Choose the data, recipient, and duration before granting access. You can revoke it at any time.",
      reviewTitle: "Review health access",
      reviewSubtitle:
        "Check the data, recipient, and duration before granting access.",
      recipientLabel: "RECIPIENT",
      sharedLabel: "SHARED DATA",
      sharedValue: "Health notes + Stress check history",
      durationLabel: "DURATION",
      durationValue: "7 days · expires {date}",
      notShared:
        "NOT SHARED · Private Life, work records, Daily Reports, identity documents, and chat remain excluded.",
      allow: "Allow access",
      grantedTitle: "Health access",
      grantedSubtitle: "Access granted successfully.",
      grantedEyebrow: "ACCESS GRANTED",
      grantedHeading: "{provider} now has limited access.",
      grantedBody:
        "Access ends automatically on {date}. You can revoke it at any time.",
      activeEyebrow: "ACCESS ACTIVE",
      activeHeading: "Active until {date}",
      activeBody:
        "{provider} can see Health notes + Stress check history. Your employer and manager still have no access.",
      revokeCta: "Revoke access",
      revokeTitle: "Revoke health access",
      revokeSubtitle: "Confirm the access you are about to stop.",
      revokedTitle: "Access revoked",
      revokedSubtitle: "The health access change has been applied.",
      revokedEyebrow: "ACCESS REVOKED",
      revokedHeading: "{provider} no longer has access.",
      revokedBody: "You can grant access again at any time.",
      grantFailedTitle: "Couldn’t grant access",
      grantFailedBody: 
        "The connection or the service could not store the permission. Try again — the permission stays inactive until it succeeds.",
      expiredTitle: "Access expired",
      expiredBody:
        "{provider}'s access expired on {date}. Your records are fully private again.",
      grantedDoneCta: "Done",
      activeSubtitle: "Active access you have granted.",
      expiredSubtitle: "The previous access ended automatically.",
      revokeCardAccess: "Access to: {shared}",
      revokeCardBody:
        "Once revoked, the provider cannot see new updates.",
      keepAccess: "Keep access",
      revokedCardTitle: "Health access is not active",
      revokedCardBody:
        "{provider} can no longer see Health notes or Stress check history.",
      grantFailedScreenTitle: "Access not granted",
      grantFailedSubtitle: "No health data has been shared.",
      grantFailedRetry: "Try again",
      grantFailedBack: "Back",
    },
    stress: {
      title: "Stress check",
      subtitle: "A short private check-in. This is not a medical diagnosis.",
      eyebrow: "PRIVATE · SELF CHECK",
      intro: "Answers are saved as a private note.",
      q1: "How is your stress level today?",
      q2: "How is your energy?",
      q3: "How is your sleep?",
      stressOptions: ["Low", "Medium", "High"],
      energyOptions: ["Good", "Fair", "Low"],
      sleepOptions: ["Good", "Fair", "Poor"],
      optionalLabel: "OPTIONAL NOTE",
      optionalPlaceholder: "Add context if needed…",
      save: "Save check-in",
      resultTitle: "Stress check",
      resultSubtitle: "Check-in saved privately.",
      savedEyebrow: "CHECK-IN SAVED",
      resultSummary:
        "Today you selected {stress} stress, {energy} energy, and {sleep} sleep.",
      resultDisclaimer:
        "This result is only a self-check summary and does not replace an assessment by a health professional.",
      notDiagnosis: "Not a diagnosis",
      historyCta: "View stress check history",
      historyTitle: "Stress check history",
      historySubtitle: 
        "Your private self-check history. This is not a medical diagnosis.",
      historyLabel: "HISTORY",
      selfCheckTitle: "SELF-CHECK ONLY",
      selfCheckBody: "This history is not a medical diagnosis.",
      historySummary: "Stress {stress} · Energy {energy} · Sleep {sleep}",
      detailTitle: "Stress check detail",
      detailSubtitle: "Private self-check.",
      detailNoteLabel: "NOTE",
      emptyTitle: "No stress checks yet",
      emptyBody: 
        "Run a short self-check to start building a private history.",
      newCta: "Start a new stress check",
      offlineSubtitle:
        "A new self-check needs a connection to be stored safely.",
      offlineTitle: "You are offline",
      offlineBody:
        "History that is already stored stays readable. A new stress check will not be sent until you reconnect.",
      offlineRetryCta: "Try after reconnect",
      cachedMeta: "Cached · Private",
      saveFailedSubtitle: "Your answers have not been lost.",
      saveFailedCardTitle: "Stress check not saved",
      saveFailedCardBody:
        "Your answers are kept for a retry. No duplicate entry until the save succeeds.",
    },
    sync: {
      draftTitle: "Offline draft",
      draftBody:
        "The draft is saved on this device and will sync after you reconnect. It has not been shared with anyone.",
      openCta: "Open draft sync",
      saveDraftCta: "Save draft on this device",
      title: "Draft sync",
      subtitle: "Local drafts are syncing now that the connection is back.",
      rowCareer: "Career note",
      rowHealth: "Health note",
      rowLife: "Private note",
      syncing: "Syncing…",
      waiting: "Waiting…",
      synced: "Synced",
      syncFailedTag: "Sync failed",
      doneTitle: "Sync complete",
      doneBody: "All local drafts are saved to your EMENDA account.",
      failedTitle: "Sync failed · your drafts are safe on this device",
      failedBody:
        "Some drafts have not synced yet. Try again once your connection is stable.",
      retryCta: "Try syncing again",
      completeCta: "Finish sync",
      failedSubtitle: "Some drafts have not synced yet.",
      doneScreenTitle: "Sync complete",
      doneSubtitle: "All local drafts are now saved to your EMENDA account.",
    },
    life: {
      title: "Private Life",
      subtitle: "Personal notes only you can see.",
      privacyTitle: "PRIVATE · LIFE",
      privacyBody:
        "Not shared with your employer, manager, or work contacts.",
      notesLabel: "YOUR PRIVATE NOTES",
      addCta: "Add private note",
      emptyTitle: "No Private Life notes yet",
      emptyBody: 
        "Use this area for personal, family, or housing notes only you can see.",
      emptySubtitle: "No private notes yet.",
      offlineSubtitle: "Cached private notes stay available.",
      cachedMeta: "Cached · {date}",
    },
  },
  id: {
    privateLabel: "Private",
    todayLabel: "Today",
    overview: {
      eyebrow: "Profile",
      headlessEyebrow: "Catatan Anda",
      title: "Catatan Anda",
      subtitle:
        "Semua catatan kerja dan pribadi Anda, dengan batas akses yang jelas.",
      headlessSubtitle:
        "Catatan pribadi tetap milik Anda. Health dan Life tidak dibagikan ke employer/manager tanpa izin eksplisit.",
      workTitle: "Log Kerja & Karier",
      workBody: "Catatan kerja terverifikasi dan riwayat profesional",
      dailyTitle: "Laporan Harian",
      dailyBody: "Pesan + Laporan Harian",
      healthTitle: "PRIVAT · HEALTH",
      healthBody:
        "Health Log + Stress Check · hanya Anda dan tenaga kesehatan resmi",
      lifeTitle: "PRIVAT · LIFE",
      lifeBody: "Catatan pribadi, keluarga & tempat tinggal · hanya Anda",
      open: "BUKA",
      headlessNote:
        "Catatan kerja terverifikasi dapat terbatas tanpa koneksi employer yang aktif. Catatan pribadi tetap milik Anda.",
      headlessWorkBody:
        "Catatan karier pribadi · record employer muncul setelah terhubung",
      headlessDailyBody: "Tersedia setelah employer connection aktif",
      unavailable: "BELUM TERSEDIA",
      accessEndedTitle: "WORK ACCESS ENDED",
      accessEndedBody: 
        "Record kerja dan laporan sebelumnya tetap read-only. Catatan pribadi Anda tidak terpengaruh.",
      accessEndedSubtitle:
        "Employer access telah berakhir. Riwayat lama tetap tersedia.",
      accessEndedWorkMeta: "Riwayat employer lama · read-only",
      accessEndedDailyMeta: "Laporan historis · read-only",
      accessEndedPrivateMeta: "Tetap privat dan tersedia",
      offlineSubtitle: "Cached private records tetap tersedia saat offline.",
      offlineBannerBody:
        "Catatan lokal yang sudah tersimpan tetap bisa dibaca. Fitur yang butuh employer atau sinkronisasi menunggu reconnect.",
    },
    states: {
      offlineTitle: "Anda sedang offline",
      offlineBody:
        "Data ditampilkan dari cache. Perubahan akan disinkronkan setelah kembali online.",
      saveFailedTitle: "Gagal menyimpan",
      saveFailedBody:
        "Catatan Anda tetap ada di formulir ini. Periksa koneksi lalu coba lagi.",
      loadingSubtitle: "Memuat catatan Anda…",
      offlineDraftCta: "Tambah draft offline",
    },
    work: {
      title: "Log Kerja & Karier",
      subtitle: "Riwayat kerja terverifikasi dan catatan karier pribadi Anda.",
      tabAll: "Semua",
      tabVerified: "Verified",
      tabPersonal: "Pribadi",
      verifiedLabel: "VERIFIED WORK RECORDS",
      personalLabel: "PERSONAL CAREER NOTES",
      verifiedTag: "Verified",
      personalNoteMeta: "Catatan pribadi",
      activeSince: "Aktif sejak {month}",
      addCta: "Tambah catatan karier",
      parityTitle: "Verified vs personal",
      parityBody:
        "Catatan employer terverifikasi bersifat read-only. Catatan pribadi hanya Anda yang dapat ubah.",
      emptyTitle: "Belum ada riwayat kerja",
      emptyBody: 
        "Record employer akan muncul setelah employer connection aktif. Anda tetap bisa menyimpan catatan karier pribadi.",
      emptySubtitle: "Riwayat kerja dan catatan karier Anda akan muncul di sini.",
      offlineSubtitle: "Cached records tersedia saat offline.",
    },
    record: {
      title: "Work record",
      subtitle: "Catatan kerja terverifikasi dari employer.",
      notFound: "Record tidak ditemukan",
      employerLabel: "EMPLOYER",
      roleLabel: "ROLE",
      statusLabel: "STATUS",
      statusValue: "Verified",
      eventLabel: "LATEST VERIFIED EVENT",
      sourceLabel: "SOURCE",
      sourceValue: "{employer} employer connection · audit trail available.",
      activeStatus: "Active · since {month}",
      readOnlyLabel: "VERIFIED · READ ONLY",
      ownership: "Verified employer record — read-only.",
      readOnlyBody:
        "Record ini berasal dari employer connection dan tidak dapat diedit oleh worker.",
    },
    noteForm: {
      titleLabel: "TITLE",
      categoryLabel: "CATEGORY",
      noteLabel: "NOTE",
      dateLabel: "DATE",
      metaLine: "Dibuat {created} · Diperbarui {updated}",
      titlePlaceholder: "Beri judul catatan ini…",
      categoryPlaceholder: "Pilih kategori…",
      saveLabel: "Simpan catatan",
      privacyTitle: "PRIVAT",
      privacyBody: "Tidak dibagikan ke employer atau manager.",
      editSaveLabel: "Simpan perubahan",
    },
    careerNote: {
      addTitle: "Tambah catatan karier",
      addSubtitle:
        "Catatan ini bersifat pribadi dan tidak menjadi record employer.",
      editTitle: "Edit catatan karier",
      detailTitle: "Catatan karier",
      detailSubtitle: "Catatan karier pribadi.",
      notePlaceholder: "Tulis catatan karier Anda…",
      privacyTitle: "PRIVATE NOTE",
      privacyBody: "Hanya Anda yang dapat melihat dan mengubah catatan ini.",
      editSubtitle: "Perubahan hanya berlaku untuk catatan pribadi Anda.",
      draftTitle: "Draft catatan karier",
    },
    healthNote: {
      typeLabel: "TYPE",
      typePlaceholder: "Pilih jenis catatan…",
      addTitle: "Tambah catatan kesehatan",
      addSubtitle: "Catatan ini privat secara default.",
      editTitle: "Edit catatan kesehatan",
      detailTitle: "Catatan kesehatan",
      detailSubtitle: "Catatan kesehatan pribadi.",
      notePlaceholder: "Tulis catatan kesehatan Anda…",
      editSubtitle: "Perubahan tetap privat.",
      draftTitle: "Draft catatan kesehatan",
      privacyTitle: "PRIVAT BY DEFAULT",
      privacyBody:
        "Tidak otomatis dibagikan ke employer, manager, atau tenaga kesehatan.",
      detailPrivacyBody:
        "Hanya Anda dan tenaga kesehatan yang Anda izinkan yang dapat melihatnya.",
    },
    lifeNote: {
      addTitle: "Tambah catatan pribadi",
      addSubtitle: "Catatan ini hanya tersedia untuk Anda.",
      editTitle: "Edit catatan pribadi",
      detailTitle: "Catatan Private Life",
      detailSubtitle: "Catatan pribadi hanya untuk Anda.",
      notePlaceholder: "Tulis catatan Anda…",
      editSubtitle: "Perubahan tetap privat.",
      draftTitle: "Draft Private Life",
      privacyTitle: "ONLY YOU",
    },
    deleteReview: {
      title: "Hapus catatan?",
      subtitle: "Tindakan ini tidak dapat dibatalkan.",
      careerBody: "Catatan karier pribadi ini akan dihapus permanen.",
      healthBody: "Catatan kesehatan ini akan dihapus permanen.",
      lifeBody: "Catatan Private Life ini akan dihapus permanen.",
      keep: "Pertahankan catatan",
      confirm: "Hapus permanen",
    },
    saveFailed: {
      title: "Tidak dapat menyimpan",
      subtitle: "Catatan Anda belum hilang.",
      backToEdit: "Kembali edit",
      retry: "Coba simpan lagi",
      cardTitle: "Tidak dapat menyimpan perubahan",
      cardBody:
        "Isi yang Anda masukkan tetap tersimpan di layar ini. Coba lagi tanpa membuat duplikat.",
    },
    noteActions: {
      edit: "Edit catatan",
      delete: "Hapus catatan",
      timestamps: "Created {created} · Updated {updated}",
    },
    deleteModal: {
      careerTitle: "Hapus catatan karier?",
      healthTitle: "Hapus catatan kesehatan?",
      lifeTitle: "Hapus catatan pribadi?",
      body: "Catatan ini akan dihapus permanen dari akun EMENDA Anda. Tindakan ini tidak dapat dibatalkan.",
      confirm: "Hapus catatan",
    },
    deleted: {
      careerTitle: "Catatan karier dihapus",
      healthTitle: "Catatan kesehatan dihapus",
      lifeTitle: "Catatan pribadi dihapus",
      subtitle: "Penghapusan selesai.",
      cardTitle: "Selesai",
      careerBody: "Catatan pribadi sudah dihapus dari Log Kerja & Karier.",
      healthBody:
        "Catatan kesehatan pribadi sudah dihapus. Akses provider tidak mengembalikan catatan yang telah dihapus.",
      lifeBody: "Catatan Private Life sudah dihapus permanen.",
      backCta: "Kembali ke daftar",
    },
    unsaved: {
      title: "Perubahan belum disimpan",
      body: "Jika keluar sekarang, perubahan Anda akan hilang.",
      keep: "Tetap edit",
      discard: "Buang perubahan",
    },
    health: {
      title: "Private Health",
      subtitle: "Hanya Anda dan tenaga kesehatan resmi yang Anda izinkan.",
      privacyTitle: "PRIVAT · HEALTH",
      privacyBody:
        "Employer dan manager tidak dapat melihat catatan ini tanpa izin eksplisit dari Anda.",
      entriesLabel: "YOUR PRIVATE ENTRIES",
      stressRowTitle: "Stress check",
      stressRowMobileSuffix: " · self-check pribadi",
      manageCta: "Kelola akses kesehatan",
      stressCta: "Mulai stress check",
      addCta: "Tambah catatan kesehatan",
      emptyTitle: "Belum ada Health Log",
      emptyBody: 
        "Tambahkan catatan kesehatan atau lakukan stress check jika Anda ingin menyimpan self-record pribadi.",
      emptySubtitle: "Belum ada catatan kesehatan pribadi.",
      offlineSubtitle: "Cached health records tetap tersedia.",
    },
    consent: {
      accessTitle: "Akses kesehatan",
      accessSubtitle: "Kelola siapa yang boleh melihat Health Log Anda.",
      defaultTitle: "PRIVATE BY DEFAULT",
      defaultBody: "Tidak ada employer atau manager yang memiliki akses.",
      providersLabel: "AUTHORIZED HEALTH PROFESSIONALS",
      noAccess: "No active access",
      activeUntil: "Aktif hingga {date}",
      expiredOn: "Akses berakhir · {date}",
      setAccess: "Atur akses",
      explicitTitle: "Akses selalu eksplisit",
      explicitBody:
        "Pilih data, penerima, dan durasi sebelum memberikan akses. Anda dapat mencabutnya kapan saja.",
      reviewTitle: "Review akses kesehatan",
      reviewSubtitle:
        "Periksa data, penerima, dan durasi sebelum memberi akses.",
      recipientLabel: "RECIPIENT",
      sharedLabel: "SHARED DATA",
      sharedValue: "Health notes + Stress check history",
      durationLabel: "DURATION",
      durationValue: "7 hari · expires {date}",
      notShared:
        "NOT SHARED · Private Life, work records, Daily Reports, identity documents, and chat remain excluded.",
      allow: "Izinkan akses",
      grantedTitle: "Akses kesehatan",
      grantedSubtitle: "Akses berhasil diberikan.",
      grantedEyebrow: "ACCESS GRANTED",
      grantedHeading: "{provider} kini memiliki akses terbatas.",
      grantedBody:
        "Akses berakhir otomatis pada {date}. Anda dapat mencabutnya kapan saja.",
      activeEyebrow: "AKSES AKTIF",
      activeHeading: "Aktif hingga {date}",
      activeBody:
        "{provider} dapat melihat Health notes + Stress check history. Employer dan manager tetap tidak memiliki akses.",
      revokeCta: "Cabut akses",
      revokeTitle: "Cabut akses kesehatan",
      revokeSubtitle: "Pastikan akses yang akan dihentikan.",
      revokedTitle: "Akses dicabut",
      revokedSubtitle: "Perubahan akses kesehatan berhasil diterapkan.",
      revokedEyebrow: "AKSES DICABUT",
      revokedHeading: "{provider} tidak lagi memiliki akses.",
      revokedBody: "Anda dapat memberikan akses lagi kapan saja.",
      grantFailedTitle: "Tidak dapat memberikan akses",
      grantFailedBody: 
        "Koneksi atau layanan gagal menyimpan izin. Coba lagi; izin tidak aktif sampai proses berhasil.",
      expiredTitle: "Akses berakhir",
      expiredBody:
        "Akses {provider} berakhir pada {date}. Catatan Anda kembali privat sepenuhnya.",
      grantedDoneCta: "Selesai",
      activeSubtitle: "Akses aktif yang Anda berikan.",
      expiredSubtitle: "Akses sebelumnya telah berakhir otomatis.",
      revokeCardAccess: "Akses ke: {shared}",
      revokeCardBody:
        "Setelah dicabut, provider tidak dapat melihat pembaruan baru.",
      keepAccess: "Pertahankan akses",
      revokedCardTitle: "Akses kesehatan tidak aktif",
      revokedCardBody:
        "{provider} tidak lagi dapat melihat Health notes atau Stress check history.",
      grantFailedScreenTitle: "Akses belum diberikan",
      grantFailedSubtitle: "Tidak ada data kesehatan yang dibagikan.",
      grantFailedRetry: "Coba lagi",
      grantFailedBack: "Kembali",
    },
    stress: {
      title: "Stress check",
      subtitle: "Check-in pribadi singkat. Ini bukan diagnosis medis.",
      eyebrow: "PRIVAT · SELF CHECK",
      intro: "Jawaban disimpan sebagai catatan pribadi.",
      q1: "Bagaimana tingkat stres Anda hari ini?",
      q2: "Bagaimana energi Anda?",
      q3: "Bagaimana tidur Anda?",
      stressOptions: ["Rendah", "Sedang", "Tinggi"],
      energyOptions: ["Baik", "Cukup", "Rendah"],
      sleepOptions: ["Baik", "Cukup", "Kurang"],
      optionalLabel: "CATATAN OPSIONAL",
      optionalPlaceholder: "Tambahkan konteks jika perlu…",
      save: "Simpan check-in",
      resultTitle: "Stress check",
      resultSubtitle: "Check-in tersimpan secara privat.",
      savedEyebrow: "CHECK-IN SAVED",
      resultSummary:
        "Hari ini Anda memilih tingkat stres {stress}, energi {energy}, dan tidur {sleep}.",
      resultDisclaimer:
        "Hasil ini hanya rangkuman self-check dan tidak menggantikan penilaian tenaga kesehatan.",
      notDiagnosis: "Bukan diagnosis",
      historyCta: "Lihat riwayat stress check",
      historyTitle: "Riwayat stress check",
      historySubtitle: 
        "Riwayat self-check pribadi Anda. Ini bukan diagnosis medis.",
      historyLabel: "RIWAYAT",
      selfCheckTitle: "SELF-CHECK ONLY",
      selfCheckBody: "Riwayat ini bukan diagnosis medis.",
      historySummary: "Stress {stress} · Energi {energy} · Tidur {sleep}",
      detailTitle: "Stress check detail",
      detailSubtitle: "Self-check pribadi.",
      detailNoteLabel: "CATATAN",
      emptyTitle: "Belum ada stress check",
      emptyBody: 
        "Lakukan self-check singkat untuk mulai membangun riwayat pribadi.",
      newCta: "Mulai stress check baru",
      offlineSubtitle:
        "Self-check baru memerlukan koneksi agar tersimpan dengan aman.",
      offlineTitle: "Anda sedang offline",
      offlineBody:
        "Riwayat yang sudah tersimpan tetap dapat dibaca. Stress check baru tidak akan dikirim sampai Anda terhubung kembali.",
      offlineRetryCta: "Coba setelah reconnect",
      cachedMeta: "Cached · Private",
      saveFailedSubtitle: "Jawaban Anda belum hilang.",
      saveFailedCardTitle: "Stress check belum tersimpan",
      saveFailedCardBody:
        "Jawaban tetap ada untuk dicoba lagi. Tidak ada duplicate entry sampai penyimpanan berhasil.",
    },
    sync: {
      draftTitle: "Draft offline",
      draftBody:
        "Draft disimpan di perangkat ini dan akan disinkronkan setelah reconnect. Belum dibagikan ke pihak lain.",
      saveDraftCta: "Simpan draft di perangkat",
      openCta: "Buka sinkronisasi draft",
      title: "Sinkronisasi draft",
      subtitle: "Draft lokal sedang disinkronkan setelah koneksi kembali.",
      rowCareer: "Catatan karier",
      rowHealth: "Catatan kesehatan",
      rowLife: "Catatan pribadi",
      syncing: "Syncing…",
      waiting: "Waiting…",
      synced: "Synced",
      syncFailedTag: "Sync failed",
      doneTitle: "Selesai sinkronisasi",
      doneBody: "Semua draft lokal sudah tersimpan ke akun EMENDA.",
      failedTitle: "Sync failed · draft tetap aman di perangkat",
      failedBody:
        "Sebagian draft belum tersinkron. Coba lagi setelah koneksi stabil.",
      retryCta: "Coba sinkronkan lagi",
      completeCta: "Selesai sinkronisasi",
      failedSubtitle: "Sebagian draft belum berhasil disinkronkan.",
      doneScreenTitle: "Sinkronisasi selesai",
      doneSubtitle: "Semua draft lokal sudah tersimpan ke akun EMENDA.",
    },
    life: {
      title: "Private Life",
      subtitle: "Catatan pribadi yang hanya bisa Anda lihat.",
      privacyTitle: "PRIVAT · LIFE",
      privacyBody:
        "Tidak dibagikan ke employer, manager, atau contact kerja.",
      notesLabel: "YOUR PRIVATE NOTES",
      addCta: "Tambah catatan pribadi",
      emptyTitle: "Belum ada Private Life notes",
      emptyBody: 
        "Gunakan area ini untuk catatan personal, keluarga, atau tempat tinggal yang hanya Anda yang dapat lihat.",
      emptySubtitle: "Belum ada catatan pribadi.",
      offlineSubtitle: "Cached private notes tetap tersedia.",
      cachedMeta: "Cached · {date}",
    },
  },
  ja: {
    privateLabel: "非公開",
    todayLabel: "今日",
    overview: {
      eyebrow: "プロフィール",
      headlessEyebrow: "あなたの記録",
      title: "あなたの記録",
      subtitle: "仕事と個人の記録すべてを、明確なアクセス境界で管理します。",
      headlessSubtitle:
        "個人の記録はあなたのものです。HealthとLifeは明示的な許可なく雇用先やマネージャーに共有されません。",
      workTitle: "仕事・キャリアログ",
      workBody: "確認済みの勤務記録と職務履歴",
      dailyTitle: "日報",
      dailyBody: "メッセージ + 日報",
      healthTitle: "プライベート · HEALTH",
      healthBody: "健康ログ + ストレスチェック · あなたと許可された医療従事者のみ",
      lifeTitle: "プライベート · LIFE",
      lifeBody: "個人・家族・住まいのメモ · あなたのみ",
      open: "開く",
      headlessNote:
        "雇用主との接続がない間、仕事に関する確認済み記録は制限される場合があります。プライベートな記録はあなたのものとして残ります。",
      headlessWorkBody: "個人キャリアメモ · 雇用先の記録は接続後に表示されます",
      headlessDailyBody: "雇用先との接続が有効になると利用できます",
      unavailable: "利用不可",
      accessEndedTitle: "勤務アクセス終了",
      accessEndedBody: 
        "以前の勤務記録とレポートは読み取り専用のまま残ります。個人メモには影響しません。",
      accessEndedSubtitle:
        "雇用主のアクセスは終了しました。過去の履歴は引き続き利用できます。",
      accessEndedWorkMeta: "過去の雇用主履歴 · 読み取り専用",
      accessEndedDailyMeta: "過去のレポート · 読み取り専用",
      accessEndedPrivateMeta: "引き続き非公開で利用できます",
      offlineSubtitle: "キャッシュされた非公開記録はオフラインでも利用できます。",
      offlineBannerBody:
        "ローカルに保存されたメモは引き続き読めます。雇用主や同期が必要な機能は再接続を待ちます。",
    },
    states: {
      offlineTitle: "オフラインです",
      offlineBody:
        "キャッシュされたデータを表示しています。オンラインに戻ると変更が同期されます。",
      saveFailedTitle: "保存に失敗しました",
      saveFailedBody:
        "メモはこのフォームに残っています。接続を確認して再試行してください。",
      loadingSubtitle: "メモを読み込んでいます…",
      offlineDraftCta: "オフライン下書きを追加",
    },
    work: {
      title: "仕事・キャリアログ",
      subtitle: "確認済みの勤務履歴と個人のキャリアメモ。",
      tabAll: "すべて",
      tabVerified: "確認済み",
      tabPersonal: "個人",
      verifiedLabel: "確認済み勤務記録",
      personalLabel: "個人キャリアメモ",
      verifiedTag: "確認済み",
      personalNoteMeta: "個人メモ",
      activeSince: "{month} から在籍",
      addCta: "キャリアメモを追加",
      parityTitle: "確認済みと個人メモの違い",
      parityBody:
        "雇用主の確認済み記録は閲覧のみです。個人メモはあなただけが編集できます。",
      emptyTitle: "勤務履歴はまだありません",
      emptyBody: 
        "雇用主の記録は雇用主接続が有効になると表示されます。個人のキャリアメモは引き続き保存できます。",
      emptySubtitle: "勤務履歴とキャリアメモがここに表示されます。",
      offlineSubtitle: "キャッシュされた記録はオフラインでも閲覧できます。",
    },
    record: {
      title: "確認済み勤務記録",
      subtitle: "雇用主による確認済みの勤務記録です。",
      notFound: "記録が見つかりません",
      employerLabel: "雇用主",
      roleLabel: "職種",
      statusLabel: "ステータス",
      statusValue: "確認済み",
      eventLabel: "最新の確認済みイベント",
      sourceLabel: "ソース",
      sourceValue: "{employer} の雇用主接続 · 監査証跡あり。",
      activeStatus: "在籍中 · {month} から",
      readOnlyLabel: "確認済み · 閲覧のみ",
      ownership: "雇用主による確認済み記録 — 閲覧のみ。",
      readOnlyBody:
        "この記録は雇用主接続に基づくもので、ワーカーは編集できません。",
    },
    noteForm: {
      titleLabel: "タイトル",
      categoryLabel: "カテゴリー",
      noteLabel: "メモ",
      dateLabel: "日付",
      metaLine: "作成 {created} · 更新 {updated}",
      titlePlaceholder: "メモのタイトルを入力…",
      categoryPlaceholder: "カテゴリーを選択…",
      saveLabel: "メモを保存",
      privacyTitle: "プライベート",
      privacyBody: "雇用主やマネージャーには共有されません。",
      editSaveLabel: "変更を保存",
    },
    careerNote: {
      addTitle: "キャリアメモを追加",
      addSubtitle: "このメモは個人用で、雇用主の記録にはなりません。",
      editTitle: "キャリアメモを編集",
      detailTitle: "キャリアメモ",
      detailSubtitle: "個人のキャリアメモ。",
      notePlaceholder: "キャリアメモを入力…",
      privacyTitle: "プライベートメモ",
      privacyBody: "このメモを見て編集できるのはあなただけです。",
      editSubtitle: "変更はあなたの個人メモにのみ適用されます。",
      draftTitle: "キャリアメモの下書き",
    },
    healthNote: {
      typeLabel: "種類",
      typePlaceholder: "メモの種類を選択…",
      addTitle: "健康メモを追加",
      addSubtitle: "このメモはデフォルトで非公開です。",
      editTitle: "健康メモを編集",
      detailTitle: "健康メモ",
      detailSubtitle: "個人の健康メモ。",
      notePlaceholder: "健康メモを入力…",
      editSubtitle: "変更は非公開のままです。",
      draftTitle: "健康メモの下書き",
      privacyTitle: "デフォルトで非公開",
      privacyBody:
        "雇用主・マネージャー・医療従事者に自動的に共有されることはありません。",
      detailPrivacyBody:
        "閲覧できるのはあなたと、あなたが許可した医療従事者だけです。",
    },
    lifeNote: {
      addTitle: "個人メモを追加",
      addSubtitle: "このメモはあなただけが利用できます。",
      editTitle: "個人メモを編集",
      detailTitle: "Private Life のメモ",
      detailSubtitle: "あなただけの個人メモ。",
      notePlaceholder: "メモを入力…",
      editSubtitle: "変更は非公開のままです。",
      draftTitle: "個人メモの下書き",
      privacyTitle: "あなただけ",
    },
    deleteReview: {
      title: "メモを削除しますか？",
      subtitle: "この操作は取り消せません。",
      careerBody: "この個人のキャリアメモは完全に削除されます。",
      healthBody: "この健康メモは完全に削除されます。",
      lifeBody: "この Private Life のメモは完全に削除されます。",
      keep: "メモを残す",
      confirm: "完全に削除",
    },
    saveFailed: {
      title: "保存できませんでした",
      subtitle: "メモはまだ失われていません。",
      backToEdit: "編集に戻る",
      retry: "もう一度保存する",
      cardTitle: "変更を保存できませんでした",
      cardBody:
        "入力内容はこの画面に残っています。重複を作らずにもう一度お試しください。",
    },
    noteActions: {
      edit: "メモを編集",
      delete: "メモを削除",
      timestamps: "作成 {created} · 更新 {updated}",
    },
    deleteModal: {
      careerTitle: "キャリアメモを削除しますか？",
      healthTitle: "健康メモを削除しますか？",
      lifeTitle: "個人メモを削除しますか？",
      body: "このメモはEMENDAアカウントから完全に削除されます。この操作は取り消せません。",
      confirm: "メモを削除",
    },
    deleted: {
      careerTitle: "キャリアメモを削除しました",
      healthTitle: "健康メモを削除しました",
      lifeTitle: "個人メモを削除しました",
      subtitle: "削除が完了しました。",
      cardTitle: "完了",
      careerBody: "個人メモは仕事・キャリアログから削除されました。",
      healthBody:
        "プライベートな健康メモは削除されました。提供者のアクセスでも削除されたメモは戻りません。",
      lifeBody: "Private Lifeのメモは完全に削除されました。",
      backCta: "一覧に戻る",
    },
    unsaved: {
      title: "変更が保存されていません",
      body: "今離れると変更は失われます。",
      keep: "編集を続ける",
      discard: "変更を破棄",
    },
    health: {
      title: "プライベートヘルス",
      subtitle: "あなたと、あなたが許可した正規の医療従事者のみ。",
      privacyTitle: "プライベート · HEALTH",
      privacyBody:
        "雇用主やマネージャーは、あなたの明示的な許可なしにこれらの記録を見ることはできません。",
      entriesLabel: "あなたのプライベート記録",
      stressRowTitle: "ストレスチェック",
      stressRowMobileSuffix: " · 個人セルフチェック",
      manageCta: "健康アクセスを管理",
      stressCta: "ストレスチェックを開始",
      addCta: "健康メモを追加",
      emptyTitle: "ヘルスログはまだありません",
      emptyBody: 
        "個人のセルフ記録を残したい場合は、健康メモを追加するかストレスチェックを実施してください。",
      emptySubtitle: "個人の健康記録はまだありません。",
      offlineSubtitle: "キャッシュされた健康記録は引き続き閲覧できます。",
    },
    consent: {
      accessTitle: "健康アクセス",
      accessSubtitle: "健康ログを閲覧できる相手を管理します。",
      defaultTitle: "デフォルトで非公開",
      defaultBody: "雇用主やマネージャーはアクセスできません。",
      providersLabel: "許可された医療従事者",
      noAccess: "有効なアクセスはありません",
      activeUntil: "{date} まで有効",
      expiredOn: "アクセス期限切れ · {date}",
      setAccess: "アクセスを設定",
      explicitTitle: "アクセスは常に明示的です",
      explicitBody:
        "アクセスを許可する前に、データ・相手・期間を選択します。いつでも取り消せます。",
      reviewTitle: "健康アクセスの確認",
      reviewSubtitle: "許可する前にデータ・相手・期間を確認してください。",
      recipientLabel: "共有先",
      sharedLabel: "共有データ",
      sharedValue: "健康メモ + ストレスチェック履歴",
      durationLabel: "期間",
      durationValue: "7日間 · {date} に終了",
      notShared:
        "共有されないもの · プライベートライフ、勤務記録、日報、身分証明書、チャットは含まれません。",
      allow: "アクセスを許可",
      grantedTitle: "健康アクセス",
      grantedSubtitle: "アクセスが正常に許可されました。",
      grantedEyebrow: "アクセス許可済み",
      grantedHeading: "{provider} に限定的なアクセスを許可しました。",
      grantedBody:
        "アクセスは {date} に自動的に終了します。いつでも取り消せます。",
      activeEyebrow: "アクセス有効",
      activeHeading: "{date} まで有効",
      activeBody:
        "{provider} は健康メモとストレスチェック履歴を閲覧できます。雇用主とマネージャーは引き続きアクセスできません。",
      revokeCta: "アクセスを取り消す",
      revokeTitle: "健康アクセスを取り消す",
      revokeSubtitle: "停止するアクセスを確認してください。",
      revokedTitle: "アクセスを取り消しました",
      revokedSubtitle: "健康アクセスの変更が適用されました。",
      revokedEyebrow: "アクセス取り消し済み",
      revokedHeading: "{provider} はアクセスできなくなりました。",
      revokedBody: "いつでも再度アクセスを許可できます。",
      grantFailedTitle: "アクセスを許可できませんでした",
      grantFailedBody: 
        "接続またはサービスが権限を保存できませんでした。もう一度お試しください。成功するまで権限は無効のままです。",
      expiredTitle: "アクセス期限切れ",
      expiredBody:
        "{provider} のアクセスは {date} に終了しました。記録は再び完全に非公開です。",
      grantedDoneCta: "完了",
      activeSubtitle: "あなたが許可した有効なアクセス。",
      expiredSubtitle: "以前のアクセスは自動的に終了しました。",
      revokeCardAccess: "アクセス対象: {shared}",
      revokeCardBody:
        "取り消すと、提供者は新しい更新を見ることができなくなります。",
      keepAccess: "アクセスを維持",
      revokedCardTitle: "健康アクセスは無効です",
      revokedCardBody:
        "{provider} は健康メモやストレスチェック履歴を閲覧できなくなりました。",
      grantFailedScreenTitle: "アクセスは許可されていません",
      grantFailedSubtitle: "健康データは共有されていません。",
      grantFailedRetry: "もう一度試す",
      grantFailedBack: "戻る",
    },
    stress: {
      title: "ストレスチェック",
      subtitle: "短いプライベートなチェックインです。医療診断ではありません。",
      eyebrow: "プライベート · セルフチェック",
      intro: "回答は個人メモとして保存されます。",
      q1: "今日のストレスはどのくらいですか？",
      q2: "エネルギーはどうですか？",
      q3: "睡眠はどうですか？",
      stressOptions: ["低い", "普通", "高い"],
      energyOptions: ["良い", "普通", "低い"],
      sleepOptions: ["良い", "普通", "不足"],
      optionalLabel: "任意メモ",
      optionalPlaceholder: "必要なら補足を追加…",
      save: "チェックインを保存",
      resultTitle: "ストレスチェック",
      resultSubtitle: "チェックインは非公開で保存されました。",
      savedEyebrow: "チェックイン保存済み",
      resultSummary:
        "今日はストレス「{stress}」、エネルギー「{energy}」、睡眠「{sleep}」を選択しました。",
      resultDisclaimer:
        "この結果はセルフチェックの要約であり、医療従事者の評価に代わるものではありません。",
      notDiagnosis: "診断ではありません",
      historyCta: "ストレスチェック履歴を見る",
      historyTitle: "ストレスチェック履歴",
      historySubtitle: 
        "あなたの非公開セルフチェック履歴です。医学的診断ではありません。",
      historyLabel: "履歴",
      selfCheckTitle: "セルフチェックのみ",
      selfCheckBody: "この履歴は医学的診断ではありません。",
      historySummary: "ストレス {stress} · エネルギー {energy} · 睡眠 {sleep}",
      detailTitle: "ストレスチェックの詳細",
      detailSubtitle: "プライベートなセルフチェック。",
      detailNoteLabel: "メモ",
      emptyTitle: "ストレスチェックはまだありません",
      emptyBody: 
        "短いセルフチェックを行って、非公開の履歴を作り始めましょう。",
      newCta: "新しいストレスチェックを開始",
      offlineSubtitle:
        "新しいセルフチェックを安全に保存するには接続が必要です。",
      offlineTitle: "オフラインです",
      offlineBody:
        "保存済みの履歴は引き続き閲覧できます。新しいストレスチェックは再接続するまで送信されません。",
      offlineRetryCta: "再接続後に再試行",
      cachedMeta: "キャッシュ済み · 非公開",
      saveFailedSubtitle: "回答は失われていません。",
      saveFailedCardTitle: "ストレスチェックを保存できませんでした",
      saveFailedCardBody:
        "回答は再試行のために保持されます。保存が成功するまで重複記録は作成されません。",
    },
    sync: {
      draftTitle: "オフラインの下書き",
      draftBody:
        "下書きはこの端末に保存され、再接続後に同期されます。誰にも共有されていません。",
      openCta: "下書きの同期を開く",
      saveDraftCta: "この端末に下書きを保存",
      title: "下書きの同期",
      subtitle: "接続が戻ったため、ローカルの下書きを同期しています。",
      rowCareer: "キャリアメモ",
      rowHealth: "健康メモ",
      rowLife: "個人メモ",
      syncing: "同期中…",
      waiting: "待機中…",
      synced: "同期済み",
      syncFailedTag: "同期失敗",
      doneTitle: "同期完了",
      doneBody: "すべてのローカル下書きがEMENDAアカウントに保存されました。",
      failedTitle: "同期失敗 · 下書きは端末に安全に保存されています",
      failedBody:
        "一部の下書きがまだ同期されていません。接続が安定してから再試行してください。",
      retryCta: "もう一度同期する",
      completeCta: "同期を完了",
      failedSubtitle: "一部の下書きはまだ同期されていません。",
      doneScreenTitle: "同期が完了しました",
      doneSubtitle: "すべてのローカル下書きがEMENDAアカウントに保存されました。",
    },
    life: {
      title: "プライベートライフ",
      subtitle: "あなただけが見られる個人メモ。",
      privacyTitle: "プライベート · LIFE",
      privacyBody: "雇用主・マネージャー・仕事の連絡先には共有されません。",
      notesLabel: "あなたの個人メモ",
      addCta: "個人メモを追加",
      emptyTitle: "Private Life のメモはまだありません",
      emptyBody: 
        "個人・家族・住まいに関するメモを、あなただけが見られる形でここに残せます。",
      emptySubtitle: "個人メモはまだありません。",
      offlineSubtitle: "キャッシュされた個人メモは引き続き閲覧できます。",
      cachedMeta: "キャッシュ済み · {date}",
    },
  },
});
