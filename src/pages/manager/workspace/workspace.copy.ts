import { defineSectionCopy } from "@/i18n/copy";

/**
 * Manager 02 · Workspace & Core Ops copy.
 * EN is the Figma text verbatim (MD-02 … MD-05A / EM-02 … EM-05A).
 * Person names, organisation names, EMENDA IDs, invite codes, residence-status
 * labels and timestamps live in `workspaceMock.ts` and are never translated.
 */
export interface WorkspaceCopy {
  facility: {
    title: string;
    subtitle: string;
    mobileTitle: string;
    mobileSubtitle: string;
    managerAccess: string;
    managerAccessMeta: string;
    managerAccessCounts: string;
    currentPill: string;
    kpiAccessibleFacilities: string;
    kpiAccessibleFacilitiesCaption: string;
    kpiCurrentRole: string;
    kpiCurrentRoleCaption: string;
    kpiOpenWork: string;
    kpiOpenWorkValue: string;
    kpiOpenWorkCaption: string;
    kpiLastUsed: string;
    kpiLastUsedCaption: string;
    searchLabel: string;
    searchPlaceholder: string;
    facilitiesLabel: string;
    pillSelected: string;
    pillAvailable: string;
    metaWorkers: string;
    metaReports: string;
    metaFollowUp: string;
    metaFollowUpMobile: string;
    metaVisaAdmin: string;
    metaNoAdminAlerts: string;
    metaAdminAlert: string;
    railTitle: string;
    railRoleLabel: string;
    railModulesLabel: string;
    railModules: string[];
    railBoundLabel: string;
    railBoundBody: string;
    railExcludedLabel: string;
    railExcludedBody: string;
    contextNoteTitle: string;
    contextNoteLines: string[];
    continueWith: string;
    mobileContinue: string;
    switchNote: string;
    emptySubtitle: string;
    mobileEmptySubtitle: string;
    emptyTitle: string;
    emptyBody: string;
    emptyBodyDesktop: string;
    boundaryTitle: string;
    boundaryBody: string;
    boundaryRailTitle: string;
    boundaryRailLines: string[];
    clearSearch: string;
    backToFacilities: string;
  };
  context: {
    title: string;
    subtitle: string;
    mobileTitle: string;
    mobileSubtitle: string;
    currentWorkspace: string;
    workspaceMeta: string;
    changeFacility: string;
    kpiWorkers: string;
    kpiWorkersCaption: string;
    kpiReports: string;
    kpiReportsCaption: string;
    kpiFollowUp: string;
    kpiFollowUpCaption: string;
    kpiUnreadAdmin: string;
    kpiUnreadAdminCaption: string;
    operationalScope: string;
    scopeLines: string[];
    scopeFooter: string;
    availableModules: string;
    moduleList: string[];
    accessPrivacy: string;
    privacyIntro: string;
    neverAvailable: string;
    neverLines: string[];
    privacyFooter: string;
    contextRuleTitle: string;
    contextRuleBody: string;
    continueToDashboard: string;
    availableModulesLabel: string;
    mobileModuleLines: string[];
    mobileAccessPrivacy: string;
    mobilePrivacyLines: string[];
    mobileKpiFollowUpValue: string;
  };
  switchFacility: {
    title: string;
    subtitle: string;
    mobileSubtitle: string;
    kpiCurrentFacility: string;
    kpiCurrentFacilityCaption: string;
    kpiOpenWork: string;
    kpiOpenWorkValue: string;
    kpiOpenWorkCaption: string;
    kpiAccessibleFacilities: string;
    kpiAccessibleFacilitiesCaption: string;
    chooseNext: string;
    pillCurrent: string;
    pillSelected: string;
    pillAvailable: string;
    currentWorkspaceRow: string;
    mobileCurrentCaption: string;
    mobileSelectFacility: string;
    mobileCurrentTitle: string;
    mobileCurrentRow: string;
    mobilePillCurrent: string;
    mobilePillSelected: string;
    rulesTitle: string;
    rulesLines: string[];
    warningTitle: string;
    warningBody: string;
    switchTo: string;
  };
  roster: {
    title: string;
    subtitle: string;
    mobileSubtitle: string;
    searchPlaceholder: string;
    mobileSearchPlaceholder: string;
    mobileSearchLabel: string;
    mobileWorkersLabel: string;
    filterAll: string;
    filterNeedsReview: string;
    filterUnread: string;
    filterVisaAdmin: string;
    filterDisconnected: string;
    inviteWorker: string;
    colWorker: string;
    colRole: string;
    colConnection: string;
    colReports: string;
    colFollowUp: string;
    colVisaAdmin: string;
    colAction: string;
    roleCareWorker: string;
    roleSupport: string;
    roleWarehouse: string;
    connectionConnected: string;
    connectionNeedsReview: string;
    connectionDisconnected: string;
    reportsDone: string;
    reportsMissing: string;
    visaClear: string;
    visaReview: string;
    visaExpirySoon: string;
    chipReportAt: string;
    chipReportMissing: string;
    chipUnread: string;
    chipFollowUpPending: string;
    chipFollowUpRecommended: string;
    chipConnectionNeedsReview: string;
    chipVisaDays: string;
    chipVisaClear: string;
    privacyBanner: string;
    mobilePrivacyBannerLines: string[];
    emptySubtitle: string;
    mobileEmptySubtitle: string;
    mobileEmptyFooter: string;
    emptyTitle: string;
    emptyBody: string;
    clearFilters: string;
    backToRoster: string;
    emptyBanner: string;
  };
  invite: {
    title: string;
    subtitle: string;
    mobileTitle: string;
    mobileSubtitle: string;
    currentWorkspace: string;
    workspaceMeta: string;
    kpiActiveConnections: string;
    kpiActiveConnectionsCaption: string;
    kpiPendingInvite: string;
    kpiPendingInviteCaption: string;
    kpiInviteValidity: string;
    kpiInviteValidityValue: string;
    kpiInviteValidityCaption: string;
    kpiConnectionScope: string;
    kpiConnectionScopeValue: string;
    kpiConnectionScopeCaption: string;
    cardTitle: string;
    inviteCodeLabel: string;
    inviteBody: string;
    copyInviteCode: string;
    regenerate: string;
    copiedToast: string;
    regeneratedToast: string;
    inviteStatusLabel: string;
    inviteStatusValue: string;
    employmentConnectionLabel: string;
    doctrine: string;
    boundaryTitle: string;
    boundaryLines: string[];
    backToWorkers: string;
  };
  worker: {
    title: string;
    subtitle: string;
    mobileSubtitle: string;
    heroMeta: string;
    heroMetaId: string;
    heroMetaRole: string;
    quickActions: string;
    actionMessage: string;
    actionFollowUp: string;
    actionViewReport: string;
    actionCareerWorkLog: string;
    actionVisaAdmin: string;
    kpiDailyReport: string;
    kpiDailyReportCaption: string;
    kpiUnread: string;
    kpiUnreadCaption: string;
    kpiFollowUp: string;
    kpiFollowUpCaption: string;
    kpiVisaAdmin: string;
    kpiVisaAdminCaption: string;
    valueCompleted: string;
    valueMissing: string;
    todaySummary: string;
    mobileTodaySummary: string;
    eventReportSubmitted: string;
    eventManagerAcknowledged: string;
    eventWorkerInitiated: string;
    eventMessageRead: string;
    eventReportMissing: string;
    evidenceLine: string;
    openWorkerTimeline: string;
    workAdmin: string;
    mobileWorkAdmin: string;
    rowFacility: string;
    rowConnection: string;
    rowVisaAdmin: string;
    rowLatestReport: string;
    rowProfessionalRecords: string;
    valueActive: string;
    valueClear: string;
    valueWorkerApproved: string;
    workAdminFooter: string;
    openVisaAdmin: string;
    privacyBanner: string;
    employerAccessTitle: string;
    employerAccessBody: string;
    notFound: string;
    backToWorkers: string;
  };
  visa: {
    title: string;
    subtitle: string;
    mobileTitle: string;
    mobileSubtitle: string;
    heroMeta: string;
    statusActive: string;
    expiryLine: string;
    daysRemaining: string;
    kpiResidenceStatus: string;
    kpiResidenceStatusCaption: string;
    kpiValidUntil: string;
    kpiValidUntilCaption: string;
    kpiDocumentStatus: string;
    kpiDocumentStatusCaption: string;
    kpiResponsiblePic: string;
    kpiResponsiblePicCaption: string;
    rowVisaStatus: string;
    rowExpiry: string;
    rowRenewalWindow: string;
    rowFacility: string;
    rowDocumentStatus: string;
    valueRenewalOpen: string;
    valueOnFile: string;
    valueFacilityPic: string;
    checklistTitle: string;
    checklistDone: string[];
    checklistOpen: string[];
    checklistFooter: string;
    managerActionTitle: string;
    managerActionBody: string;
    scopeTitle: string;
    scopeLines: string[];
    createFollowUp: string;
    followUpToast: string;
    backToWorkerDetail: string;
  };
  state: {
    loadingTitle: string;
    emptyEyebrow: string;
    loadingBody: string;
    offlineTitle: string;
    offlineBody: string;
  };
}

/** Replaces `{token}` placeholders with values — copy stays translatable. */
export function fill(
  template: string,
  vars: Record<string, string | number>,
): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in vars ? String(vars[key]) : match,
  );
}

export const WORKSPACE_COPY = defineSectionCopy<WorkspaceCopy>({
  en: {
    facility: {
      title: "Organization / Facility Access",
      subtitle:
        "Choose a facility and review operational context before entering the workspace.",
      mobileTitle: "Choose Facility",
      mobileSubtitle:
        "Select active workplace · {workers} workers across {facilities} facilities",
      managerAccess: "Manager access",
      managerAccessMeta: "{org} · {role}",
      managerAccessCounts:
        "{facilities} facilities · {workers} workers · {open} open work",
      currentPill: "Current",
      kpiAccessibleFacilities: "ACCESSIBLE FACILITIES",
      kpiAccessibleFacilitiesCaption: "Manager access under {org}",
      kpiCurrentRole: "CURRENT ROLE",
      kpiCurrentRoleCaption: "Operational scope only",
      kpiOpenWork: "OPEN WORK",
      kpiOpenWorkValue: "{count} items",
      kpiOpenWorkCaption: "{followUp} follow-up · {unread} unread · {admin} admin",
      kpiLastUsed: "LAST USED",
      kpiLastUsedCaption: "Today · {time}",
      searchLabel: "FACILITY SEARCH",
      searchPlaceholder: "Search facility or location",
      facilitiesLabel: "FACILITIES",
      pillSelected: "SELECTED",
      pillAvailable: "AVAILABLE",
      metaWorkers: "{count} workers",
      metaReports: "Reports {pct}%",
      metaFollowUp: "{count} follow-up",
      metaFollowUpMobile: "Follow-up {count}",
      metaVisaAdmin: "{count} visa/admin",
      metaNoAdminAlerts: "no admin alerts",
      metaAdminAlert: "{count} admin alert",
      railTitle: "ACCESS BEFORE ENTRY",
      railRoleLabel: "ROLE",
      railModulesLabel: "PERMITTED MODULES",
      railModules: [
        "Dashboard · Workers · Communication",
        "Reports · Alerts · Analytics",
        "Knowledge / OJT · HRDD · Audit Export",
      ],
      railBoundLabel: "FACILITY-BOUND ACTIONS",
      railBoundBody:
        "Pending follow-up and report actions stay attached to their origin facility.",
      railExcludedLabel: "EXCLUDED",
      railExcludedBody:
        "Private Health / Stress / Life data and private eCoin are never available to Manager.",
      contextNoteTitle: "Facility context",
      contextNoteLines: [
        "Pending actions stay bound to their origin facility.",
        "Private Health / Stress / Life data and private eCoin stay unavailable.",
      ],
      continueWith: "Continue with {facility}",
      mobileContinue: "Continue with selected facility",
      switchNote: "You can switch facility later without logging out.",
      emptySubtitle:
        "Search state when no accessible facility matches the current keyword.",
      mobileEmptySubtitle: "Search permitted workplaces for this manager account.",
      emptyTitle: "No facilities found",
      emptyBody:
        "No permitted facility matches this search. Clear the search to return to your accessible facilities.",
      emptyBodyDesktop:
        "No accessible facility matches “{query}”. Try a different facility name or location. Your manager scope has not changed.",
      boundaryTitle: "Access boundary",
      boundaryBody:
        "Search only shows facilities permitted for this manager account. It does not expand organization access.",
      boundaryRailTitle: "ACCESS BOUNDARY",
      boundaryRailLines: [
        "Search only covers facilities already assigned to this Manager account.",
        "No result does not expose facilities outside the organization or role scope.",
        "Private worker data remains unavailable.",
      ],
      clearSearch: "Clear search",
      backToFacilities: "Back to facilities",
    },
    context: {
      title: "Organization / Facility Context",
      subtitle:
        "Confirm organization, facility, role, and operational access scope.",
      mobileTitle: "Facility Context",
      mobileSubtitle: "Confirm organization, facility and Manager scope",
      currentWorkspace: "CURRENT WORKSPACE",
      workspaceMeta: "{role} · operational access only",
      changeFacility: "Change facility",
      kpiWorkers: "WORKERS",
      kpiWorkersCaption: "Active at this facility",
      kpiReports: "REPORTS",
      kpiReportsCaption: "Daily completion",
      kpiFollowUp: "FOLLOW-UP",
      kpiFollowUpCaption: "Pending review",
      kpiUnreadAdmin: "UNREAD / ADMIN",
      kpiUnreadAdminCaption: "Communication / admin",
      operationalScope: "OPERATIONAL SCOPE",
      scopeLines: [
        "Workers & employment status",
        "Communication & translation preview",
        "Daily Reports & Follow-up",
        "Professional records / Work Log",
        "Knowledge / OJT · HRDD · Audit Export",
      ],
      scopeFooter: "All actions remain bound to {facility}.",
      availableModules: "Available modules",
      moduleList: [
        "Communication",
        "Reports",
        "Follow-up",
        "Analytics",
        "Knowledge / OJT",
        "Human Rights DD",
        "Audit Export",
      ],
      accessPrivacy: "ACCESS & PRIVACY",
      privacyIntro:
        "Manager sees operational and worker-approved professional evidence only.",
      neverAvailable: "Never available:",
      neverLines: [
        "Private Health · Stress · Life notes",
        "Private eCoin / personal-only records",
      ],
      privacyFooter: "Switching facility does not merge records.",
      contextRuleTitle: "Facility context rule",
      contextRuleBody:
        "Pending actions remain bound to this facility. Switching never mixes worker, report, follow-up, or audit data.",
      continueToDashboard: "Continue to Dashboard",
      availableModulesLabel: "AVAILABLE MODULES",
      mobileModuleLines: [
        "Communication · Reports · Follow-up · Analytics",
        "Knowledge/OJT · Human Rights DD · Audit Export",
      ],
      mobileAccessPrivacy: "Access & privacy",
      mobilePrivacyLines: [
        "Manager: operational records · permitted professional evidence · visa/admin status.",
        "Not available: Health / Stress / Life / private personal data / eCoin.",
      ],
      mobileKpiFollowUpValue: "{count} open",
    },
    switchFacility: {
      title: "Switch Facility",
      subtitle:
        "Change workspace without mixing facility-bound records or pending actions.",
      mobileSubtitle: "Change active workplace without logging out",
      kpiCurrentFacility: "CURRENT FACILITY",
      kpiCurrentFacilityCaption: "{workers} workers · {followUp} pending follow-up",
      kpiOpenWork: "OPEN WORK",
      kpiOpenWorkValue: "{count} items",
      kpiOpenWorkCaption: "stays with origin facility",
      kpiAccessibleFacilities: "ACCESSIBLE FACILITIES",
      kpiAccessibleFacilitiesCaption: "within {org}",
      chooseNext: "CHOOSE NEXT FACILITY",
      pillCurrent: "CURRENT",
      pillSelected: "SELECTED",
      pillAvailable: "AVAILABLE",
      currentWorkspaceRow: "Current workspace",
      mobileCurrentCaption:
        "{workers} workers · {followUp} follow-up · {unread} unread",
      mobileSelectFacility: "SELECT FACILITY",
      mobileCurrentTitle: "Current · {facility}",
      mobileCurrentRow: "{workers} workers · current",
      mobilePillCurrent: "Current",
      mobilePillSelected: "Selected",
      rulesTitle: "SWITCH RULES",
      rulesLines: [
        "Pending Follow-up and Report work remains attached to the facility where it originated.",
        "Unread/admin counts refresh after switching.",
        "Private worker data is never expanded by switching.",
      ],
      warningTitle: "Pending work stays bound",
      warningBody:
        "Actions created in one facility are not mixed into another facility context.",
      switchTo: "Switch to {facility}",
    },
    roster: {
      title: "Workers",
      subtitle:
        "Facility-scoped worker roster, connection status, reports, and administrative context.",
      mobileSubtitle:
        "Manager roster · {workers} workers · operational status + follow-up",
      searchPlaceholder: "Search worker, EMENDA ID, role, or status",
      mobileSearchPlaceholder: "Name or EMENDA ID",
      mobileSearchLabel: "Search worker",
      mobileWorkersLabel: "WORKERS",
      filterAll: "All {count}",
      filterNeedsReview: "Needs review {count}",
      filterUnread: "Unread {count}",
      filterVisaAdmin: "Visa/Admin {count}",
      filterDisconnected: "Disconnected {count}",
      inviteWorker: "Invite worker",
      colWorker: "WORKER",
      colRole: "ROLE",
      colConnection: "CONNECTION",
      colReports: "REPORTS",
      colFollowUp: "FOLLOW-UP",
      colVisaAdmin: "VISA/ADMIN",
      colAction: "ACTION",
      roleCareWorker: "Care Worker",
      roleSupport: "Support",
      roleWarehouse: "Warehouse",
      connectionConnected: "Connected",
      connectionNeedsReview: "Needs review",
      connectionDisconnected: "Disconnected",
      reportsDone: "Done",
      reportsMissing: "Missing",
      visaClear: "Clear",
      visaReview: "Review",
      visaExpirySoon: "Expiry soon",
      chipReportAt: "Report {time}",
      chipReportMissing: "Daily Report missing",
      chipUnread: "{count} unread",
      chipFollowUpPending: "Follow-up pending",
      chipFollowUpRecommended: "Follow-up recommended",
      chipConnectionNeedsReview: "Connection needs review",
      chipVisaDays: "Visa {days}d",
      chipVisaClear: "Visa clear",
      privacyBanner:
        "Worker-owned identity remains portable. Manager sees employment-scoped operational records and worker-approved professional evidence only.",
      mobilePrivacyBannerLines: [
        "Facility context · {count} active workers · worker-owned IDs stay portable.",
        "Employment-scoped access · private Health / Stress / Life data unavailable.",
      ],
      emptySubtitle: "Filtered roster state with no matching workers.",
      mobileEmptySubtitle: "Manager roster · search and filter results",
      mobileEmptyFooter:
        "Operational access only · private worker Health / Stress / Life data unavailable.",
      emptyTitle: "No workers found",
      emptyBody:
        "No worker matches the current search and filters in {facility}. Clearing filters does not change manager permissions or expose workers from another facility.",
      clearFilters: "Clear filters",
      backToRoster: "Back to roster",
      emptyBanner:
        "No-results state never expands facility scope or exposes private worker data.",
    },
    invite: {
      title: "Worker Invite & Employment Connection",
      mobileTitle: "Worker Invite & Connection",
      mobileSubtitle: "Employment connection · current facility",
      subtitle:
        "Connect a worker to this facility without transferring ownership of their EMENDA identity.",
      currentWorkspace: "Current workspace",
      workspaceMeta: "{role} · employment-scoped connection",
      kpiActiveConnections: "ACTIVE CONNECTIONS",
      kpiActiveConnectionsCaption: "Current facility",
      kpiPendingInvite: "PENDING INVITE",
      kpiPendingInviteCaption: "Waiting for worker",
      kpiInviteValidity: "INVITE VALIDITY",
      kpiInviteValidityValue: "{hours} h",
      kpiInviteValidityCaption: "Regenerate after expiry",
      kpiConnectionScope: "CONNECTION SCOPE",
      kpiConnectionScopeValue: "Employment",
      kpiConnectionScopeCaption: "Worker-owned identity stays portable",
      cardTitle: "INVITE WORKER",
      inviteCodeLabel: "Invite code",
      inviteBody:
        "Worker accepts the organization/facility connection from their own account. The employer does not take ownership of the worker EMENDA ID.",
      copyInviteCode: "Copy invite code",
      regenerate: "Regenerate",
      copiedToast: "Invite code copied",
      regeneratedToast: "Invite code regenerated",
      inviteStatusLabel: "INVITE STATUS",
      inviteStatusValue: "Connected",
      employmentConnectionLabel: "EMPLOYMENT CONNECTION",
      doctrine:
        "Worker-owned identity remains portable. Employer connection is employment-scoped. Private Health / Stress / Life data are not part of this connection.",
      boundaryTitle: "CONNECTION BOUNDARY",
      boundaryLines: [
        "Employer connection is employment-scoped.",
        "Worker-owned identity remains portable.",
        "Private Health / Stress / Life and private eCoin are never shared through an invite.",
        "Disconnecting employment does not delete the worker identity.",
      ],
      backToWorkers: "Back to Workers",
    },
    worker: {
      title: "Worker Detail",
      subtitle:
        "Operational worker context, evidence, reports, communication, and administrative actions.",
      mobileSubtitle: "Employment-scoped operational information only",
      heroMeta: "EMENDA ID · {id} · {role} · {connection}",
      heroMetaId: "{id} · Worker-owned ID",
      heroMetaRole: "{role} · {facility} · {connection}",
      quickActions: "QUICK ACTIONS",
      actionMessage: "Message",
      actionFollowUp: "Follow-up",
      actionViewReport: "View report",
      actionCareerWorkLog: "Career / Work Log",
      actionVisaAdmin: "Visa / Admin",
      kpiDailyReport: "DAILY REPORT",
      kpiDailyReportCaption: "Today · {time}",
      kpiUnread: "UNREAD",
      kpiUnreadCaption: "Worker message",
      kpiFollowUp: "FOLLOW-UP",
      kpiFollowUpCaption: "Awaiting reply",
      kpiVisaAdmin: "VISA/ADMIN",
      kpiVisaAdminCaption: "Valid until {date}",
      valueCompleted: "Completed",
      valueMissing: "Missing",
      todaySummary: "TODAY SUMMARY",
      mobileTodaySummary: "Today",
      eventReportSubmitted: "Daily report submitted",
      eventManagerAcknowledged: "Manager acknowledged report",
      eventWorkerInitiated: "Worker initiated message",
      eventMessageRead: "Message read",
      eventReportMissing: "Daily report not submitted",
      evidenceLine:
        "Professional evidence available: {count} verified work-log entries.",
      openWorkerTimeline: "Open Worker Timeline",
      workAdmin: "WORK & ADMINISTRATION",
      mobileWorkAdmin: "Work & administration",
      rowFacility: "Facility",
      rowConnection: "Connection",
      rowVisaAdmin: "Visa/Admin",
      rowLatestReport: "Latest report",
      rowProfessionalRecords: "Professional records",
      valueActive: "Active",
      valueClear: "Clear",
      valueWorkerApproved: "Worker-approved",
      workAdminFooter: "Private personal categories are not available.",
      openVisaAdmin: "Open Visa / Admin",
      privacyBanner:
        "Manager can use worker-approved professional evidence. Private Health / Stress / Life and private eCoin remain unavailable.",
      employerAccessTitle: "Employer access",
      employerAccessBody:
        "Operational records + worker-approved professional evidence. Health / Stress / Life / private personal data / eCoin unavailable.",
      notFound: "Worker not found",
      backToWorkers: "Back to Workers",
    },
    visa: {
      title: "Visa / Administrative Detail",
      mobileTitle: "Visa / Administration",
      mobileSubtitle: "{worker} · employer-visible administration",
      subtitle:
        "Administrative employment context only — not private health or legal filing advice.",
      heroMeta: "{facility} · {role} · {connection}",
      statusActive: "Current status active",
      expiryLine: "Expiry {date}",
      daysRemaining: "{days} days remaining",
      kpiResidenceStatus: "RESIDENCE STATUS",
      kpiResidenceStatusCaption: "Operational reference",
      kpiValidUntil: "VALID UNTIL",
      kpiValidUntilCaption: "Renewal window tracked",
      kpiDocumentStatus: "DOCUMENT STATUS",
      kpiDocumentStatusCaption: "Worker-provided reference",
      kpiResponsiblePic: "RESPONSIBLE PIC",
      kpiResponsiblePicCaption: "Manager follow-up only",
      rowVisaStatus: "Visa / status",
      rowExpiry: "Expiry",
      rowRenewalWindow: "Renewal window",
      rowFacility: "Facility",
      rowDocumentStatus: "Document status",
      valueRenewalOpen: "Open",
      valueOnFile: "On file",
      valueFacilityPic: "Facility PIC",
      checklistTitle: "ADMIN CHECKLIST",
      checklistDone: [
        "Residence status reference on file",
        "Expiry date captured",
        "Facility connection active",
      ],
      checklistOpen: [
        "Confirm required renewal documents with responsible PIC",
        "Create follow-up if worker action is needed",
      ],
      checklistFooter: "Do not request private health information.",
      managerActionTitle: "Manager action",
      managerActionBody:
        "Plan renewal · confirm responsible PIC + required documents. Operational administration only · no private health or legal filing.",
      scopeTitle: "ADMINISTRATIVE SCOPE",
      scopeLines: [
        "This screen supports operational reminders and record visibility only.",
        "It does not determine legal status, submit government filings, or expose private Health / Stress / Life data.",
        "Source timestamps remain unchanged.",
      ],
      createFollowUp: "Create Follow-up",
      followUpToast: "Follow-up created",
      backToWorkerDetail: "Back to Worker Detail",
    },
    state: {
      loadingTitle: "Loading workspace…",
      emptyEyebrow: "EMPTY STATE",
      loadingBody: "Facility scope is confirmed before any record is shown.",
      offlineTitle: "You are offline",
      offlineBody:
        "Facility and roster data refresh when the connection returns. No cached private worker data is stored on this device.",
    },
  },

  id: {
    facility: {
      title: "Akses Organisasi / Fasilitas",
      subtitle:
        "Pilih fasilitas dan tinjau konteks operasional sebelum masuk ke ruang kerja.",
      mobileTitle: "Pilih Fasilitas",
      mobileSubtitle:
        "Pilih tempat kerja aktif · {workers} pekerja di {facilities} fasilitas",
      managerAccess: "Akses manajer",
      managerAccessMeta: "{org} · {role}",
      managerAccessCounts:
        "{facilities} fasilitas · {workers} pekerja · {open} pekerjaan terbuka",
      currentPill: "Saat ini",
      kpiAccessibleFacilities: "FASILITAS YANG DAPAT DIAKSES",
      kpiAccessibleFacilitiesCaption: "Akses manajer di bawah {org}",
      kpiCurrentRole: "PERAN SAAT INI",
      kpiCurrentRoleCaption: "Hanya cakupan operasional",
      kpiOpenWork: "PEKERJAAN TERBUKA",
      kpiOpenWorkValue: "{count} item",
      kpiOpenWorkCaption:
        "{followUp} tindak lanjut · {unread} belum dibaca · {admin} admin",
      kpiLastUsed: "TERAKHIR DIPAKAI",
      kpiLastUsedCaption: "Hari ini · {time}",
      searchLabel: "PENCARIAN FASILITAS",
      searchPlaceholder: "Cari fasilitas atau lokasi",
      facilitiesLabel: "FASILITAS",
      pillSelected: "DIPILIH",
      pillAvailable: "TERSEDIA",
      metaWorkers: "{count} pekerja",
      metaReports: "Laporan {pct}%",
      metaFollowUp: "{count} tindak lanjut",
      metaFollowUpMobile: "Tindak lanjut {count}",
      metaVisaAdmin: "{count} visa/admin",
      metaNoAdminAlerts: "tanpa peringatan admin",
      metaAdminAlert: "{count} peringatan admin",
      railTitle: "AKSES SEBELUM MASUK",
      railRoleLabel: "PERAN",
      railModulesLabel: "MODUL YANG DIIZINKAN",
      railModules: [
        "Dasbor · Pekerja · Komunikasi",
        "Laporan · Peringatan · Analitik",
        "Pengetahuan / OJT · HRDD · Ekspor Audit",
      ],
      railBoundLabel: "TINDAKAN TERIKAT FASILITAS",
      railBoundBody:
        "Tindak lanjut dan tindakan laporan yang tertunda tetap melekat pada fasilitas asalnya.",
      railExcludedLabel: "DIKECUALIKAN",
      railExcludedBody:
        "Data Health / Stress / Life pribadi dan eCoin pribadi tidak pernah tersedia bagi Manajer.",
      contextNoteTitle: "Konteks fasilitas",
      contextNoteLines: [
        "Tindakan tertunda tetap terikat pada fasilitas asalnya.",
        "Data Health / Stress / Life pribadi dan eCoin pribadi tetap tidak tersedia.",
      ],
      continueWith: "Lanjut dengan {facility}",
      mobileContinue: "Lanjut dengan fasilitas terpilih",
      switchNote: "Anda dapat berganti fasilitas nanti tanpa keluar akun.",
      emptySubtitle:
        "Kondisi pencarian saat tidak ada fasilitas yang cocok dengan kata kunci.",
      mobileEmptySubtitle: "Cari tempat kerja yang diizinkan untuk akun manajer ini.",
      emptyTitle: "Fasilitas tidak ditemukan",
      emptyBody:
        "Tidak ada fasilitas berizin yang cocok dengan pencarian ini. Bersihkan pencarian untuk kembali ke fasilitas yang dapat Anda akses.",
      emptyBodyDesktop:
        "Tidak ada fasilitas yang dapat diakses cocok dengan “{query}”. Coba nama atau lokasi fasilitas lain. Cakupan manajer Anda tidak berubah.",
      boundaryTitle: "Batas akses",
      boundaryBody:
        "Pencarian hanya menampilkan fasilitas yang diizinkan untuk akun manajer ini. Pencarian tidak memperluas akses organisasi.",
      boundaryRailTitle: "BATAS AKSES",
      boundaryRailLines: [
        "Pencarian hanya mencakup fasilitas yang sudah ditetapkan untuk akun Manajer ini.",
        "Hasil kosong tidak menampilkan fasilitas di luar cakupan organisasi atau peran.",
        "Data pribadi pekerja tetap tidak tersedia.",
      ],
      clearSearch: "Bersihkan pencarian",
      backToFacilities: "Kembali ke daftar fasilitas",
    },
    context: {
      title: "Konteks Organisasi / Fasilitas",
      subtitle:
        "Konfirmasi organisasi, fasilitas, peran, dan cakupan akses operasional.",
      mobileTitle: "Konteks Fasilitas",
      mobileSubtitle: "Konfirmasi organisasi, fasilitas, dan cakupan Manajer",
      currentWorkspace: "RUANG KERJA SAAT INI",
      workspaceMeta: "{role} · hanya akses operasional",
      changeFacility: "Ganti fasilitas",
      kpiWorkers: "PEKERJA",
      kpiWorkersCaption: "Aktif di fasilitas ini",
      kpiReports: "LAPORAN",
      kpiReportsCaption: "Penyelesaian harian",
      kpiFollowUp: "TINDAK LANJUT",
      kpiFollowUpCaption: "Menunggu tinjauan",
      kpiUnreadAdmin: "BELUM DIBACA / ADMIN",
      kpiUnreadAdminCaption: "Komunikasi / admin",
      operationalScope: "CAKUPAN OPERASIONAL",
      scopeLines: [
        "Pekerja & status kerja",
        "Komunikasi & pratinjau terjemahan",
        "Laporan Harian & Tindak Lanjut",
        "Catatan profesional / Log Kerja",
        "Pengetahuan / OJT · HRDD · Ekspor Audit",
      ],
      scopeFooter: "Semua tindakan tetap terikat pada {facility}.",
      availableModules: "Modul tersedia",
      moduleList: [
        "Komunikasi",
        "Laporan",
        "Tindak Lanjut",
        "Analitik",
        "Pengetahuan / OJT",
        "Uji Tuntas HAM",
        "Ekspor Audit",
      ],
      accessPrivacy: "AKSES & PRIVASI",
      privacyIntro:
        "Manajer hanya melihat bukti operasional dan profesional yang disetujui pekerja.",
      neverAvailable: "Tidak pernah tersedia:",
      neverLines: [
        "Catatan Health · Stress · Life pribadi",
        "eCoin pribadi / catatan khusus pribadi",
      ],
      privacyFooter: "Berganti fasilitas tidak menggabungkan catatan.",
      contextRuleTitle: "Aturan konteks fasilitas",
      contextRuleBody:
        "Tindakan tertunda tetap terikat pada fasilitas ini. Berganti fasilitas tidak pernah mencampur data pekerja, laporan, tindak lanjut, atau audit.",
      continueToDashboard: "Lanjut ke Dasbor",
      availableModulesLabel: "MODUL YANG TERSEDIA",
      mobileModuleLines: [
        "Komunikasi · Laporan · Tindak lanjut · Analitik",
        "Pengetahuan/OJT · Human Rights DD · Ekspor Audit",
      ],
      mobileAccessPrivacy: "Akses & privasi",
      mobilePrivacyLines: [
        "Manajer: catatan operasional · bukti profesional yang diizinkan · status visa/admin.",
        "Tidak tersedia: Health / Stress / Life / data pribadi / eCoin.",
      ],
      mobileKpiFollowUpValue: "{count} terbuka",
    },
    switchFacility: {
      title: "Ganti Fasilitas",
      subtitle:
        "Ubah ruang kerja tanpa mencampur catatan atau tindakan tertunda yang terikat fasilitas.",
      mobileSubtitle: "Ubah tempat kerja aktif tanpa keluar akun",
      kpiCurrentFacility: "FASILITAS SAAT INI",
      kpiCurrentFacilityCaption:
        "{workers} pekerja · {followUp} tindak lanjut tertunda",
      kpiOpenWork: "PEKERJAAN TERBUKA",
      kpiOpenWorkValue: "{count} item",
      kpiOpenWorkCaption: "tetap di fasilitas asal",
      kpiAccessibleFacilities: "FASILITAS YANG DAPAT DIAKSES",
      kpiAccessibleFacilitiesCaption: "di dalam {org}",
      chooseNext: "PILIH FASILITAS BERIKUTNYA",
      pillCurrent: "SAAT INI",
      pillSelected: "DIPILIH",
      pillAvailable: "TERSEDIA",
      currentWorkspaceRow: "Ruang kerja saat ini",
      mobileCurrentCaption:
        "{workers} pekerja · {followUp} tindak lanjut · {unread} belum dibaca",
      mobileSelectFacility: "PILIH FASILITAS",
      mobileCurrentTitle: "Saat ini · {facility}",
      mobileCurrentRow: "{workers} pekerja · saat ini",
      mobilePillCurrent: "Saat ini",
      mobilePillSelected: "Dipilih",
      rulesTitle: "ATURAN PERGANTIAN",
      rulesLines: [
        "Tindak Lanjut dan Laporan yang tertunda tetap melekat pada fasilitas tempat asalnya.",
        "Jumlah belum dibaca/admin diperbarui setelah berganti.",
        "Data pribadi pekerja tidak pernah diperluas oleh pergantian.",
      ],
      warningTitle: "Pekerjaan tertunda tetap terikat",
      warningBody:
        "Tindakan yang dibuat di satu fasilitas tidak dicampur ke konteks fasilitas lain.",
      switchTo: "Beralih ke {facility}",
    },
    roster: {
      title: "Pekerja",
      subtitle:
        "Daftar pekerja dalam cakupan fasilitas, status koneksi, laporan, dan konteks administratif.",
      mobileSubtitle:
        "Daftar manajer · {workers} pekerja · status operasional + tindak lanjut",
      searchPlaceholder: "Cari pekerja, EMENDA ID, peran, atau status",
      mobileSearchPlaceholder: "Nama atau EMENDA ID",
      mobileSearchLabel: "Cari pekerja",
      mobileWorkersLabel: "PEKERJA",
      filterAll: "Semua {count}",
      filterNeedsReview: "Perlu tinjauan {count}",
      filterUnread: "Belum dibaca {count}",
      filterVisaAdmin: "Visa/Admin {count}",
      filterDisconnected: "Terputus {count}",
      inviteWorker: "Undang pekerja",
      colWorker: "PEKERJA",
      colRole: "PERAN",
      colConnection: "KONEKSI",
      colReports: "LAPORAN",
      colFollowUp: "TINDAK LANJUT",
      colVisaAdmin: "VISA/ADMIN",
      colAction: "AKSI",
      roleCareWorker: "Pekerja Perawatan",
      roleSupport: "Dukungan",
      roleWarehouse: "Gudang",
      connectionConnected: "Terhubung",
      connectionNeedsReview: "Perlu tinjauan",
      connectionDisconnected: "Terputus",
      reportsDone: "Selesai",
      reportsMissing: "Belum ada",
      visaClear: "Aman",
      visaReview: "Tinjau",
      visaExpirySoon: "Segera kedaluwarsa",
      chipReportAt: "Laporan {time}",
      chipReportMissing: "Laporan Harian belum ada",
      chipUnread: "{count} belum dibaca",
      chipFollowUpPending: "Tindak lanjut tertunda",
      chipFollowUpRecommended: "Tindak lanjut disarankan",
      chipConnectionNeedsReview: "Koneksi perlu ditinjau",
      chipVisaDays: "Visa {days} hr",
      chipVisaClear: "Visa aman",
      privacyBanner:
        "Identitas milik pekerja tetap portabel. Manajer hanya melihat catatan operasional dalam cakupan kerja dan bukti profesional yang disetujui pekerja.",
      mobilePrivacyBannerLines: [
        "Konteks fasilitas · {count} pekerja aktif · ID milik pekerja tetap portabel.",
        "Akses dalam cakupan kerja · data Health / Stress / Life pribadi tidak tersedia.",
      ],
      emptySubtitle: "Status daftar terfilter tanpa pekerja yang cocok.",
      mobileEmptySubtitle: "Roster manajer · hasil pencarian dan filter",
      mobileEmptyFooter:
        "Hanya akses operasional · data Health / Stress / Life pribadi pekerja tidak tersedia.",
      emptyTitle: "Pekerja tidak ditemukan",
      emptyBody:
        "Tidak ada pekerja yang cocok dengan pencarian dan filter saat ini di {facility}. Membersihkan filter tidak mengubah izin manajer atau menampilkan pekerja dari fasilitas lain.",
      clearFilters: "Bersihkan filter",
      backToRoster: "Kembali ke daftar",
      emptyBanner:
        "Status tanpa hasil tidak pernah memperluas cakupan fasilitas atau menampilkan data pribadi pekerja.",
    },
    invite: {
      title: "Undangan Pekerja & Koneksi Kerja",
      mobileTitle: "Undangan Pekerja & Koneksi",
      mobileSubtitle: "Koneksi kerja · fasilitas saat ini",
      subtitle:
        "Hubungkan pekerja ke fasilitas ini tanpa memindahkan kepemilikan identitas EMENDA mereka.",
      currentWorkspace: "Ruang kerja saat ini",
      workspaceMeta: "{role} · koneksi dalam cakupan kerja",
      kpiActiveConnections: "KONEKSI AKTIF",
      kpiActiveConnectionsCaption: "Fasilitas saat ini",
      kpiPendingInvite: "UNDANGAN TERTUNDA",
      kpiPendingInviteCaption: "Menunggu pekerja",
      kpiInviteValidity: "MASA BERLAKU UNDANGAN",
      kpiInviteValidityValue: "{hours} j",
      kpiInviteValidityCaption: "Buat ulang setelah kedaluwarsa",
      kpiConnectionScope: "CAKUPAN KONEKSI",
      kpiConnectionScopeValue: "Ketenagakerjaan",
      kpiConnectionScopeCaption: "Identitas milik pekerja tetap portabel",
      cardTitle: "UNDANG PEKERJA",
      inviteCodeLabel: "Kode undangan",
      inviteBody:
        "Pekerja menerima koneksi organisasi/fasilitas dari akun mereka sendiri. Employer tidak mengambil kepemilikan EMENDA ID pekerja.",
      copyInviteCode: "Salin kode undangan",
      regenerate: "Buat ulang",
      copiedToast: "Kode undangan disalin",
      regeneratedToast: "Kode undangan dibuat ulang",
      inviteStatusLabel: "STATUS UNDANGAN",
      inviteStatusValue: "Terhubung",
      employmentConnectionLabel: "KONEKSI KETENAGAKERJAAN",
      doctrine:
        "Identitas milik pekerja tetap portabel. Koneksi employer terbatas pada cakupan kerja. Data Health / Stress / Life pribadi bukan bagian dari koneksi ini.",
      boundaryTitle: "BATAS KONEKSI",
      boundaryLines: [
        "Koneksi employer terbatas pada cakupan kerja.",
        "Identitas milik pekerja tetap portabel.",
        "Health / Stress / Life pribadi dan eCoin pribadi tidak pernah dibagikan melalui undangan.",
        "Memutus hubungan kerja tidak menghapus identitas pekerja.",
      ],
      backToWorkers: "Kembali ke Pekerja",
    },
    worker: {
      title: "Detail Pekerja",
      subtitle:
        "Konteks operasional pekerja, bukti, laporan, komunikasi, dan tindakan administratif.",
      mobileSubtitle: "Hanya informasi operasional dalam cakupan kerja",
      heroMeta: "EMENDA ID · {id} · {role} · {connection}",
      heroMetaId: "{id} · ID milik pekerja",
      heroMetaRole: "{role} · {facility} · {connection}",
      quickActions: "AKSI CEPAT",
      actionMessage: "Pesan",
      actionFollowUp: "Tindak lanjut",
      actionViewReport: "Lihat laporan",
      actionCareerWorkLog: "Karier / Log Kerja",
      actionVisaAdmin: "Visa / Admin",
      kpiDailyReport: "LAPORAN HARIAN",
      kpiDailyReportCaption: "Hari ini · {time}",
      kpiUnread: "BELUM DIBACA",
      kpiUnreadCaption: "Pesan pekerja",
      kpiFollowUp: "TINDAK LANJUT",
      kpiFollowUpCaption: "Menunggu balasan",
      kpiVisaAdmin: "VISA/ADMIN",
      kpiVisaAdminCaption: "Berlaku hingga {date}",
      valueCompleted: "Selesai",
      valueMissing: "Belum ada",
      todaySummary: "RINGKASAN HARI INI",
      mobileTodaySummary: "Hari ini",
      eventReportSubmitted: "Laporan harian terkirim",
      eventManagerAcknowledged: "Manajer mengonfirmasi laporan",
      eventWorkerInitiated: "Pekerja memulai pesan",
      eventMessageRead: "Pesan dibaca",
      eventReportMissing: "Laporan harian belum dikirim",
      evidenceLine:
        "Bukti profesional tersedia: {count} entri log kerja terverifikasi.",
      openWorkerTimeline: "Buka Linimasa Pekerja",
      workAdmin: "KERJA & ADMINISTRASI",
      mobileWorkAdmin: "Kerja & administrasi",
      rowFacility: "Fasilitas",
      rowConnection: "Koneksi",
      rowVisaAdmin: "Visa/Admin",
      rowLatestReport: "Laporan terakhir",
      rowProfessionalRecords: "Catatan profesional",
      valueActive: "Aktif",
      valueClear: "Aman",
      valueWorkerApproved: "Disetujui pekerja",
      workAdminFooter: "Kategori pribadi tidak tersedia.",
      openVisaAdmin: "Buka Visa / Admin",
      privacyBanner:
        "Manajer dapat menggunakan bukti profesional yang disetujui pekerja. Health / Stress / Life pribadi dan eCoin pribadi tetap tidak tersedia.",
      employerAccessTitle: "Akses employer",
      employerAccessBody:
        "Catatan operasional + bukti profesional yang disetujui pekerja. Health / Stress / Life / data pribadi / eCoin tidak tersedia.",
      notFound: "Pekerja tidak ditemukan",
      backToWorkers: "Kembali ke Pekerja",
    },
    visa: {
      title: "Detail Visa / Administrasi",
      mobileTitle: "Visa / Administrasi",
      mobileSubtitle: "{worker} · administrasi yang terlihat pemberi kerja",
      subtitle:
        "Hanya konteks administrasi ketenagakerjaan — bukan nasihat kesehatan pribadi atau pengajuan hukum.",
      heroMeta: "{facility} · {role} · {connection}",
      statusActive: "Status saat ini aktif",
      expiryLine: "Kedaluwarsa {date}",
      daysRemaining: "{days} hari tersisa",
      kpiResidenceStatus: "STATUS TINGGAL",
      kpiResidenceStatusCaption: "Referensi operasional",
      kpiValidUntil: "BERLAKU HINGGA",
      kpiValidUntilCaption: "Jendela perpanjangan dipantau",
      kpiDocumentStatus: "STATUS DOKUMEN",
      kpiDocumentStatusCaption: "Referensi dari pekerja",
      kpiResponsiblePic: "PIC PENANGGUNG JAWAB",
      kpiResponsiblePicCaption: "Hanya tindak lanjut manajer",
      rowVisaStatus: "Visa / status",
      rowExpiry: "Kedaluwarsa",
      rowRenewalWindow: "Jendela perpanjangan",
      rowFacility: "Fasilitas",
      rowDocumentStatus: "Status dokumen",
      valueRenewalOpen: "Terbuka",
      valueOnFile: "Tersimpan",
      valueFacilityPic: "PIC Fasilitas",
      checklistTitle: "DAFTAR PERIKSA ADMIN",
      checklistDone: [
        "Referensi status tinggal tersimpan",
        "Tanggal kedaluwarsa tercatat",
        "Koneksi fasilitas aktif",
      ],
      checklistOpen: [
        "Konfirmasi dokumen perpanjangan yang diperlukan dengan PIC penanggung jawab",
        "Buat tindak lanjut jika tindakan pekerja diperlukan",
      ],
      checklistFooter: "Jangan meminta informasi kesehatan pribadi.",
      managerActionTitle: "Tindakan manajer",
      managerActionBody:
        "Rencanakan perpanjangan · konfirmasi PIC penanggung jawab + dokumen yang diperlukan. Hanya administrasi operasional · tanpa kesehatan pribadi atau pengajuan hukum.",
      scopeTitle: "CAKUPAN ADMINISTRATIF",
      scopeLines: [
        "Layar ini hanya mendukung pengingat operasional dan visibilitas catatan.",
        "Layar ini tidak menentukan status hukum, mengajukan dokumen pemerintah, atau menampilkan data Health / Stress / Life pribadi.",
        "Cap waktu sumber tetap tidak berubah.",
      ],
      createFollowUp: "Buat Tindak Lanjut",
      followUpToast: "Tindak lanjut dibuat",
      backToWorkerDetail: "Kembali ke Detail Pekerja",
    },
    state: {
      loadingTitle: "Memuat ruang kerja…",
      emptyEyebrow: "STATUS KOSONG",
      loadingBody:
        "Cakupan fasilitas dikonfirmasi sebelum catatan apa pun ditampilkan.",
      offlineTitle: "Anda sedang offline",
      offlineBody:
        "Data fasilitas dan daftar pekerja diperbarui saat koneksi kembali. Tidak ada data pribadi pekerja yang disimpan di perangkat ini.",
    },
  },

  ja: {
    facility: {
      title: "組織 / 施設アクセス",
      subtitle: "ワークスペースに入る前に施設を選び、業務コンテキストを確認します。",
      mobileTitle: "施設を選択",
      mobileSubtitle: "稼働先を選択 · {facilities}施設で{workers}名のワーカー",
      managerAccess: "マネージャーアクセス",
      managerAccessMeta: "{org} · {role}",
      managerAccessCounts: "{facilities}施設 · {workers}名 · 未処理{open}件",
      currentPill: "現在",
      kpiAccessibleFacilities: "アクセス可能な施設",
      kpiAccessibleFacilitiesCaption: "{org}配下のマネージャーアクセス",
      kpiCurrentRole: "現在の役割",
      kpiCurrentRoleCaption: "業務範囲のみ",
      kpiOpenWork: "未処理業務",
      kpiOpenWorkValue: "{count}件",
      kpiOpenWorkCaption:
        "フォローアップ{followUp} · 未読{unread} · 管理{admin}",
      kpiLastUsed: "最終利用",
      kpiLastUsedCaption: "本日 · {time}",
      searchLabel: "施設検索",
      searchPlaceholder: "施設名または所在地で検索",
      facilitiesLabel: "施設一覧",
      pillSelected: "選択中",
      pillAvailable: "利用可能",
      metaWorkers: "ワーカー{count}名",
      metaReports: "レポート{pct}%",
      metaFollowUp: "フォローアップ{count}件",
      metaFollowUpMobile: "フォローアップ{count}件",
      metaVisaAdmin: "ビザ/管理{count}件",
      metaNoAdminAlerts: "管理アラートなし",
      metaAdminAlert: "管理アラート{count}件",
      railTitle: "入室前のアクセス範囲",
      railRoleLabel: "役割",
      railModulesLabel: "許可されたモジュール",
      railModules: [
        "ダッシュボード · ワーカー · コミュニケーション",
        "レポート · アラート · 分析",
        "ナレッジ / OJT · HRDD · 監査エクスポート",
      ],
      railBoundLabel: "施設に紐づく操作",
      railBoundBody:
        "保留中のフォローアップとレポート操作は、発生元の施設に紐づいたままです。",
      railExcludedLabel: "対象外",
      railExcludedBody:
        "個人のHealth / Stress / Lifeデータと個人eCoinはマネージャーには一切利用できません。",
      contextNoteTitle: "施設コンテキスト",
      contextNoteLines: [
        "保留中の操作は発生元の施設に紐づいたままです。",
        "個人のHealth / Stress / Lifeデータと個人eCoinは利用できません。",
      ],
      continueWith: "{facility}で続行",
      mobileContinue: "選択した施設で続行",
      switchNote: "ログアウトせずに後から施設を切り替えできます。",
      emptySubtitle: "現在のキーワードに一致する施設がない検索状態です。",
      mobileEmptySubtitle: "このマネージャーアカウントで許可された勤務先を検索します。",
      emptyTitle: "施設が見つかりません",
      emptyBody:
        "この検索に一致する許可された施設はありません。検索をクリアすると、アクセス可能な施設一覧に戻ります。",
      emptyBodyDesktop:
        "「{query}」に一致するアクセス可能な施設はありません。別の施設名または場所でお試しください。マネージャーの権限範囲は変わりません。",
      boundaryTitle: "アクセス範囲",
      boundaryBody:
        "検索では、このマネージャーアカウントに許可された施設のみが表示されます。組織のアクセス範囲が広がることはありません。",
      boundaryRailTitle: "アクセスの境界",
      boundaryRailLines: [
        "検索の対象は、このマネージャーアカウントにすでに割り当てられた施設のみです。",
        "結果がない場合でも、組織や役割の範囲外の施設が開示されることはありません。",
        "ワーカーのプライベート情報は引き続き参照できません。",
      ],
      clearSearch: "検索をクリア",
      backToFacilities: "施設一覧に戻る",
    },
    context: {
      title: "組織 / 施設コンテキスト",
      subtitle: "組織・施設・役割・業務アクセス範囲を確認します。",
      mobileTitle: "施設コンテキスト",
      mobileSubtitle: "組織・施設・マネージャー範囲を確認します",
      currentWorkspace: "現在のワークスペース",
      workspaceMeta: "{role} · 業務アクセスのみ",
      changeFacility: "施設を変更",
      kpiWorkers: "ワーカー",
      kpiWorkersCaption: "この施設で稼働中",
      kpiReports: "レポート",
      kpiReportsCaption: "日次提出率",
      kpiFollowUp: "フォローアップ",
      kpiFollowUpCaption: "確認待ち",
      kpiUnreadAdmin: "未読 / 管理",
      kpiUnreadAdminCaption: "コミュニケーション / 管理",
      operationalScope: "業務範囲",
      scopeLines: [
        "ワーカーと雇用ステータス",
        "コミュニケーションと翻訳プレビュー",
        "日報とフォローアップ",
        "職務記録 / ワークログ",
        "ナレッジ / OJT · HRDD · 監査エクスポート",
      ],
      scopeFooter: "すべての操作は{facility}に紐づきます。",
      availableModules: "利用可能なモジュール",
      moduleList: [
        "コミュニケーション",
        "レポート",
        "フォローアップ",
        "分析",
        "ナレッジ / OJT",
        "人権DD",
        "監査エクスポート",
      ],
      accessPrivacy: "アクセスとプライバシー",
      privacyIntro:
        "マネージャーが見られるのは業務記録とワーカーが承認した職務証跡のみです。",
      neverAvailable: "常に利用不可:",
      neverLines: [
        "個人のHealth · Stress · Lifeノート",
        "個人eCoin / 個人専用の記録",
      ],
      privacyFooter: "施設を切り替えても記録は統合されません。",
      contextRuleTitle: "施設コンテキストのルール",
      contextRuleBody:
        "保留中のアクションはこの施設に紐づいたままです。施設を切り替えても、ワーカー・レポート・フォローアップ・監査のデータが混ざることはありません。",
      continueToDashboard: "ダッシュボードへ進む",
      availableModulesLabel: "利用可能なモジュール",
      mobileModuleLines: [
        "コミュニケーション · レポート · フォローアップ · 分析",
        "ナレッジ/OJT · Human Rights DD · 監査エクスポート",
      ],
      mobileAccessPrivacy: "アクセスとプライバシー",
      mobilePrivacyLines: [
        "マネージャー: 業務記録 · 許可された職務エビデンス · ビザ/管理ステータス。",
        "利用不可: Health / Stress / Life / 個人データ / eCoin。",
      ],
      mobileKpiFollowUpValue: "{count}件対応中",
    },
    switchFacility: {
      title: "施設の切り替え",
      subtitle:
        "施設に紐づく記録や保留中の操作を混在させずにワークスペースを変更します。",
      mobileSubtitle: "ログアウトせずに稼働先を変更します",
      kpiCurrentFacility: "現在の施設",
      kpiCurrentFacilityCaption:
        "ワーカー{workers}名 · 保留フォローアップ{followUp}件",
      kpiOpenWork: "未処理業務",
      kpiOpenWorkValue: "{count}件",
      kpiOpenWorkCaption: "発生元の施設に残ります",
      kpiAccessibleFacilities: "アクセス可能な施設",
      kpiAccessibleFacilitiesCaption: "{org}内",
      chooseNext: "次の施設を選択",
      pillCurrent: "現在",
      pillSelected: "選択中",
      pillAvailable: "利用可能",
      currentWorkspaceRow: "現在のワークスペース",
      mobileCurrentCaption:
        "ワーカー{workers}名 · フォローアップ{followUp}件 · 未読{unread}件",
      mobileSelectFacility: "施設を選択",
      mobileCurrentTitle: "現在 · {facility}",
      mobileCurrentRow: "ワーカー{workers}名 · 現在",
      mobilePillCurrent: "現在",
      mobilePillSelected: "選択中",
      rulesTitle: "切り替えルール",
      rulesLines: [
        "保留中のフォローアップとレポート業務は、発生した施設に紐づいたままです。",
        "未読 / 管理の件数は切り替え後に更新されます。",
        "切り替えによってワーカーの個人データが広がることはありません。",
      ],
      warningTitle: "保留中の業務は紐づいたまま",
      warningBody:
        "ある施設で作成された操作が、別の施設のコンテキストに混ざることはありません。",
      switchTo: "{facility}に切り替え",
    },
    roster: {
      title: "ワーカー",
      subtitle: "施設単位のワーカー名簿・接続状況・レポート・管理コンテキスト。",
      mobileSubtitle:
        "マネージャー名簿 · ワーカー{workers}名 · 業務ステータス + フォローアップ",
      searchPlaceholder: "ワーカー、EMENDA ID、役割、ステータスを検索",
      mobileSearchPlaceholder: "氏名またはEMENDA ID",
      mobileSearchLabel: "ワーカーを検索",
      mobileWorkersLabel: "ワーカー",
      filterAll: "すべて {count}",
      filterNeedsReview: "要確認 {count}",
      filterUnread: "未読 {count}",
      filterVisaAdmin: "ビザ/管理 {count}",
      filterDisconnected: "未接続 {count}",
      inviteWorker: "ワーカーを招待",
      colWorker: "ワーカー",
      colRole: "役割",
      colConnection: "接続",
      colReports: "レポート",
      colFollowUp: "フォローアップ",
      colVisaAdmin: "ビザ/管理",
      colAction: "操作",
      roleCareWorker: "介護ワーカー",
      roleSupport: "サポート",
      roleWarehouse: "倉庫",
      connectionConnected: "接続済み",
      connectionNeedsReview: "要確認",
      connectionDisconnected: "未接続",
      reportsDone: "完了",
      reportsMissing: "未提出",
      visaClear: "問題なし",
      visaReview: "確認",
      visaExpirySoon: "期限接近",
      chipReportAt: "レポート {time}",
      chipReportMissing: "日報が未提出",
      chipUnread: "未読{count}件",
      chipFollowUpPending: "フォローアップ保留",
      chipFollowUpRecommended: "フォローアップ推奨",
      chipConnectionNeedsReview: "接続の確認が必要",
      chipVisaDays: "ビザ 残り{days}日",
      chipVisaClear: "ビザ問題なし",
      privacyBanner:
        "労働者所有のIDはポータブルなままです。マネージャーが見られるのは雇用範囲の業務記録と、ワーカーが承認した職務証跡のみです。",
      mobilePrivacyBannerLines: [
        "施設コンテキスト · 稼働中ワーカー{count}名 · 労働者所有IDはポータブル。",
        "雇用範囲のアクセス · 個人のHealth / Stress / Lifeデータは利用できません。",
      ],
      emptySubtitle: "一致するワーカーがいない絞り込み状態です。",
      mobileEmptySubtitle: "マネージャーロスター · 検索とフィルター結果",
      mobileEmptyFooter:
        "業務アクセスのみ · ワーカー個人のHealth / Stress / Lifeデータは利用できません。",
      emptyTitle: "ワーカーが見つかりません",
      emptyBody:
        "{facility}の現在の検索と絞り込みに一致するワーカーはいません。絞り込みを解除しても、マネージャーの権限が変わったり、別の施設のワーカーが表示されることはありません。",
      clearFilters: "絞り込みを解除",
      backToRoster: "名簿に戻る",
      emptyBanner:
        "検索結果なしの状態でも、施設の範囲が広がったり、ワーカーの個人データが表示されることはありません。",
    },
    invite: {
      title: "ワーカー招待と雇用接続",
      mobileTitle: "ワーカー招待と接続",
      mobileSubtitle: "雇用接続 · 現在の施設",
      subtitle:
        "ワーカーのEMENDAアイデンティティの所有権を移さずに、この施設へ接続します。",
      currentWorkspace: "現在のワークスペース",
      workspaceMeta: "{role} · 雇用範囲の接続",
      kpiActiveConnections: "有効な接続",
      kpiActiveConnectionsCaption: "現在の施設",
      kpiPendingInvite: "保留中の招待",
      kpiPendingInviteCaption: "ワーカーの承認待ち",
      kpiInviteValidity: "招待の有効期間",
      kpiInviteValidityValue: "{hours}時間",
      kpiInviteValidityCaption: "期限後に再発行",
      kpiConnectionScope: "接続の範囲",
      kpiConnectionScopeValue: "雇用",
      kpiConnectionScopeCaption: "労働者所有のIDはポータブルなまま",
      cardTitle: "ワーカーを招待",
      inviteCodeLabel: "招待コード",
      inviteBody:
        "ワーカーは自分のアカウントから組織 / 施設への接続を承認します。雇用主がワーカーのEMENDA IDの所有権を取得することはありません。",
      copyInviteCode: "招待コードをコピー",
      regenerate: "再発行",
      copiedToast: "招待コードをコピーしました",
      regeneratedToast: "招待コードを再発行しました",
      inviteStatusLabel: "招待ステータス",
      inviteStatusValue: "接続済み",
      employmentConnectionLabel: "雇用接続",
      doctrine:
        "労働者所有のIDはポータブルなままです。雇用主の接続は雇用範囲に限定されます。個人のHealth / Stress / Lifeデータはこの接続に含まれません。",
      boundaryTitle: "接続の境界",
      boundaryLines: [
        "雇用主の接続は雇用範囲に限定されます。",
        "労働者所有のIDはポータブルなままです。",
        "個人のHealth / Stress / Lifeと個人eCoinが招待を通じて共有されることはありません。",
        "雇用の接続を解除してもワーカーのIDは削除されません。",
      ],
      backToWorkers: "ワーカー一覧に戻る",
    },
    worker: {
      title: "ワーカー詳細",
      subtitle: "ワーカーの業務コンテキスト、証跡、レポート、連絡、管理操作。",
      mobileSubtitle: "雇用範囲の業務情報のみ",
      heroMeta: "EMENDA ID · {id} · {role} · {connection}",
      heroMetaId: "{id} · 労働者所有のID",
      heroMetaRole: "{role} · {facility} · {connection}",
      quickActions: "クイックアクション",
      actionMessage: "メッセージ",
      actionFollowUp: "フォローアップ",
      actionViewReport: "レポートを見る",
      actionCareerWorkLog: "キャリア / ワークログ",
      actionVisaAdmin: "ビザ / 管理",
      kpiDailyReport: "日報",
      kpiDailyReportCaption: "本日 · {time}",
      kpiUnread: "未読",
      kpiUnreadCaption: "ワーカーからのメッセージ",
      kpiFollowUp: "フォローアップ",
      kpiFollowUpCaption: "返信待ち",
      kpiVisaAdmin: "ビザ/管理",
      kpiVisaAdminCaption: "{date}まで有効",
      valueCompleted: "完了",
      valueMissing: "未提出",
      todaySummary: "本日のサマリー",
      mobileTodaySummary: "本日",
      eventReportSubmitted: "日報が提出されました",
      eventManagerAcknowledged: "マネージャーがレポートを承認",
      eventWorkerInitiated: "ワーカーがメッセージを送信",
      eventMessageRead: "メッセージ既読",
      eventReportMissing: "日報は未提出です",
      evidenceLine: "利用可能な職務証跡: 検証済みワークログ{count}件。",
      openWorkerTimeline: "ワーカータイムラインを開く",
      workAdmin: "業務と管理",
      mobileWorkAdmin: "業務と管理",
      rowFacility: "施設",
      rowConnection: "接続",
      rowVisaAdmin: "ビザ/管理",
      rowLatestReport: "最新レポート",
      rowProfessionalRecords: "職務記録",
      valueActive: "有効",
      valueClear: "問題なし",
      valueWorkerApproved: "ワーカー承認済み",
      workAdminFooter: "個人カテゴリーは利用できません。",
      openVisaAdmin: "ビザ / 管理を開く",
      privacyBanner:
        "マネージャーはワーカーが承認した職務証跡を利用できます。個人のHealth / Stress / Lifeと個人eCoinは引き続き利用できません。",
      employerAccessTitle: "雇用主アクセス",
      employerAccessBody:
        "業務記録 + ワーカーが承認した職務証跡。Health / Stress / Life / 個人データ / eCoinは利用できません。",
      notFound: "ワーカーが見つかりません",
      backToWorkers: "ワーカー一覧に戻る",
    },
    visa: {
      title: "ビザ / 管理詳細",
      mobileTitle: "ビザ / 管理",
      mobileSubtitle: "{worker} · 雇用者が閲覧できる管理情報",
      subtitle:
        "雇用上の管理コンテキストのみ — 個人の健康情報や法的申請の助言ではありません。",
      heroMeta: "{facility} · {role} · {connection}",
      statusActive: "現在のステータスは有効",
      expiryLine: "期限 {date}",
      daysRemaining: "残り{days}日",
      kpiResidenceStatus: "在留資格",
      kpiResidenceStatusCaption: "業務上の参照",
      kpiValidUntil: "有効期限",
      kpiValidUntilCaption: "更新期間を管理",
      kpiDocumentStatus: "書類ステータス",
      kpiDocumentStatusCaption: "ワーカー提供の参照",
      kpiResponsiblePic: "担当PIC",
      kpiResponsiblePicCaption: "マネージャーのフォローアップのみ",
      rowVisaStatus: "ビザ / 資格",
      rowExpiry: "期限",
      rowRenewalWindow: "更新期間",
      rowFacility: "施設",
      rowDocumentStatus: "書類ステータス",
      valueRenewalOpen: "受付中",
      valueOnFile: "保管済み",
      valueFacilityPic: "施設PIC",
      checklistTitle: "管理チェックリスト",
      checklistDone: [
        "在留資格の参照を保管済み",
        "有効期限を記録済み",
        "施設との接続が有効",
      ],
      checklistOpen: [
        "担当PICと必要な更新書類を確認する",
        "ワーカーの対応が必要な場合はフォローアップを作成する",
      ],
      checklistFooter: "個人の健康情報を求めないでください。",
      managerActionTitle: "マネージャーの対応",
      managerActionBody:
        "更新を計画 · 担当PICと必要書類を確認。業務上の管理のみ · 個人の健康情報や法的申請は扱いません。",
      scopeTitle: "管理の範囲",
      scopeLines: [
        "この画面は業務上のリマインダーと記録の可視化のみをサポートします。",
        "法的ステータスを決定したり、行政への申請を行ったり、個人のHealth / Stress / Lifeデータを公開したりはしません。",
        "元のタイムスタンプは変更されません。",
      ],
      createFollowUp: "フォローアップを作成",
      followUpToast: "フォローアップを作成しました",
      backToWorkerDetail: "ワーカー詳細に戻る",
    },
    state: {
      loadingTitle: "ワークスペースを読み込み中…",
      emptyEyebrow: "空の状態",
      loadingBody: "記録を表示する前に施設の範囲を確認します。",
      offlineTitle: "オフラインです",
      offlineBody:
        "施設と名簿のデータは接続が回復すると更新されます。ワーカーの個人データはこの端末に保存されません。",
    },
  },
});
