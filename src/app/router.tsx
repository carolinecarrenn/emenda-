import { createBrowserRouter } from "react-router-dom";

// Public marketing site — seven routes under one shared chrome.
//
// NOTE: /about, /features and /how-it-works previously served the Figma-parity
// pages in src/pages/public/**. Those files are retained on disk, unrouted, so
// restoring them is a three-line change here.
import { MarketingShell } from "@/pages/marketing/MarketingShell";
import { HomePage } from "@/pages/marketing/home/HomePage";
import { PlatformPage } from "@/pages/marketing/platform/PlatformPage";
import { WorkersPage } from "@/pages/marketing/workers/WorkersPage";
import { AssistantPage as MarketingAssistantPage } from "@/pages/marketing/assistant/AssistantPage";
import { UseCasesPage } from "@/pages/marketing/use-cases/UseCasesPage";
import { OrganizationsPage } from "@/pages/marketing/organizations/OrganizationsPage";
import { HelpPage } from "@/pages/marketing/help/HelpPage";
import { AboutPage as MarketingAboutPage } from "@/pages/marketing/about/AboutPage";
import { HowItWorksPage as MarketingHowItWorksPage } from "@/pages/marketing/how-it-works/HowItWorksPage";

// Unified access (LP-05 sign in · LP-06/07/08 post-auth routing)
import { SignInPage } from "@/pages/access/SignInPage";
import { PostAuthRoutingPage } from "@/pages/access/PostAuthRoutingPage";

// Auth (Figma section 01 · WD-01..WD-11)
import { SplashPage } from "@/pages/auth/SplashPage";
import { ChooseLanguagePage } from "@/pages/auth/ChooseLanguagePage";
import { WelcomePage } from "@/pages/auth/WelcomePage";
import { LoginPage } from "@/pages/auth/LoginPage";
import { RegisterPage } from "@/pages/auth/RegisterPage";
import { OtpPage } from "@/pages/auth/OtpPage";
import { CreatePinPage } from "@/pages/auth/CreatePinPage";
import { ForgotPinPage } from "@/pages/auth/ForgotPinPage";
import { ResetPinPage } from "@/pages/auth/ResetPinPage";
import { SessionExpiredPage } from "@/pages/auth/SessionExpiredPage";
import { LogoutPage } from "@/pages/auth/LogoutPage";

// Onboarding — EMENDA ID & Identity (Figma section 02 · WD-12..WD-17)
import { IdReadyPage } from "@/pages/onboarding/IdReadyPage";
import { IdentityDetailsPage } from "@/pages/onboarding/IdentityDetailsPage";
import { IdentityReferencePage } from "@/pages/onboarding/IdentityReferencePage";
import { IdentityReviewPage } from "@/pages/onboarding/IdentityReviewPage";
import { IdentityVerificationPage } from "@/pages/onboarding/IdentityVerificationPage";
import { MyEmendaIdPage } from "@/pages/onboarding/MyEmendaIdPage";

// Worker shell + sections
import { WorkerShell } from "@/components/worker/WorkerShell";
import { WorkerHomePage } from "@/pages/worker/home/WorkerHomePage";
import { PersonalProfilePage } from "@/pages/worker/profile/PersonalProfilePage";
import { EditPersonalProfilePage } from "@/pages/worker/profile/EditPersonalProfilePage";
import { CareerHubPage } from "@/pages/worker/career/CareerHubPage";
import { UploadCvPage } from "@/pages/worker/career/upload/UploadCvPage";
import { ReviewImportPage } from "@/pages/worker/career/import/ReviewImportPage";
import { MyCvPage } from "@/pages/worker/career/cv/MyCvPage";
import { ExperiencePage } from "@/pages/worker/career/experience/ExperiencePage";
import { EducationPage } from "@/pages/worker/career/education/EducationPage";
import { SkillsLanguagesPage } from "@/pages/worker/career/skills/SkillsLanguagesPage";
import { QualificationsPage } from "@/pages/worker/career/qualifications/QualificationsPage";
import { WorkPreferencesPage } from "@/pages/worker/career/preferences/WorkPreferencesPage";
import { CreateCvPage } from "@/pages/worker/career/create/CreateCvPage";
import { EditCvPage } from "@/pages/worker/career/edit/EditCvPage";
import { JapanHubPage } from "@/pages/worker/japan/JapanHubPage";
import { VisaPlanPage } from "@/pages/worker/japan/visa-plan/VisaPlanPage";
import { ResidencePage } from "@/pages/worker/japan/residence/ResidencePage";
import { ReadinessPage } from "@/pages/worker/japan/readiness/ReadinessPage";
import { ReadinessTaskPage } from "@/pages/worker/japan/readiness/ReadinessTaskPage";
import { RegistrationPage } from "@/pages/worker/japan/registration/RegistrationPage";
import { DatesPage } from "@/pages/worker/japan/dates/DatesPage";
import { DocumentsHubPage } from "@/pages/worker/documents/DocumentsHubPage";
import { AddDocumentPage } from "@/pages/worker/documents/AddDocumentPage";
import { EmergencyInfoPage } from "@/pages/worker/documents/EmergencyInfoPage";
import { DocumentDetailPage } from "@/pages/worker/documents/DocumentDetailPage";
import { KnowledgeHubPage } from "@/pages/worker/knowledge/KnowledgeHubPage";
import { SearchKnowledgePage } from "@/pages/worker/knowledge/SearchKnowledgePage";
import { KnowledgeArticlePage } from "@/pages/worker/knowledge/KnowledgeArticlePage";
import { AskQuestionPage } from "@/pages/worker/knowledge/AskQuestionPage";
import { MyQuestionsPage } from "@/pages/worker/knowledge/MyQuestionsPage";
import { QuestionDetailPage } from "@/pages/worker/knowledge/QuestionDetailPage";
import { NotificationsPage } from "@/pages/worker/notifications/NotificationsPage";
import { ReportsHubPage } from "@/pages/worker/reports/ReportsHubPage";
import { NewCaregiverReportPage } from "@/pages/worker/reports/NewCaregiverReportPage";
import { ReviewReportPage } from "@/pages/worker/reports/ReviewReportPage";
import { ReportDetailPage } from "@/pages/worker/reports/ReportDetailPage";
import { HelpHubPage } from "@/pages/worker/help/HelpHubPage";
import { ContactSupportPage } from "@/pages/worker/help/ContactSupportPage";
import { SupportRequestSentPage } from "@/pages/worker/help/SupportRequestSentPage";
import { ChatPage } from "@/pages/worker/chat/ChatPage";
import { AssistantPage } from "@/pages/worker/assistant/AssistantPage";
import { EmployerConnectionPage } from "@/pages/worker/employer/EmployerConnectionPage";
import { ConnectEmployerPage } from "@/pages/worker/employer/ConnectEmployerPage";
import { ReviewEmployerInvitePage } from "@/pages/worker/employer/ReviewEmployerInvitePage";
import { AccessConsentHistoryPage } from "@/pages/worker/employer/AccessConsentHistoryPage";
import { CoinOverviewPage } from "@/pages/worker/coin/CoinOverviewPage";
import { CoinCheckInPage } from "@/pages/worker/coin/CoinCheckInPage";
import { CoinHistoryPage } from "@/pages/worker/coin/CoinHistoryPage";
import { CoinEarnPage } from "@/pages/worker/coin/CoinEarnPage";
import { CoinUsePage } from "@/pages/worker/coin/CoinUsePage";
import { CoinRewardsPage } from "@/pages/worker/coin/CoinRewardsPage";
import { CoinRewardDetailPage } from "@/pages/worker/coin/CoinRewardDetailPage";
import { CoinRulesPage } from "@/pages/worker/coin/CoinRulesPage";
import { LogsOverviewPage } from "@/pages/worker/logs/LogsOverviewPage";
import { WorkCareerLogPage } from "@/pages/worker/logs/WorkCareerLogPage";
import { CareerNoteFormPage } from "@/pages/worker/logs/CareerNoteFormPage";
import { WorkRecordDetailPage } from "@/pages/worker/logs/WorkRecordDetailPage";
import { HealthLogPage } from "@/pages/worker/logs/HealthLogPage";
import { HealthAccessPage } from "@/pages/worker/logs/HealthAccessPage";
import { HealthNoteFormPage } from "@/pages/worker/logs/HealthNoteFormPage";
import { HealthNoteDetailPage } from "@/pages/worker/logs/HealthNoteDetailPage";
import { StressCheckPage } from "@/pages/worker/logs/StressCheckPage";
import { StressCheckHistoryPage } from "@/pages/worker/logs/StressCheckHistoryPage";
import { StressCheckDetailPage } from "@/pages/worker/logs/StressCheckDetailPage";
import { PrivateLifePage } from "@/pages/worker/logs/PrivateLifePage";
import { LifeNoteFormPage } from "@/pages/worker/logs/LifeNoteFormPage";
import { LifeNoteDetailPage } from "@/pages/worker/logs/LifeNoteDetailPage";
import { DraftSyncPage } from "@/pages/worker/logs/DraftSyncPage";

// Manager shell + sections
import { ManagerShell } from "@/components/manager/ManagerShell";
import { ManagerDashboardPage } from "@/pages/manager/dashboard/ManagerDashboardPage";
import { ManagerReportsPage } from "@/pages/manager/reports/ManagerReportsPage";
import { ManagerReportDetailPage } from "@/pages/manager/reports/ManagerReportDetailPage";
import { ManagerLoginPage } from "@/pages/manager/auth/ManagerLoginPage";
import { ManagerForgotPasswordPage } from "@/pages/manager/auth/ManagerForgotPasswordPage";
import { ManagerResetPasswordPage } from "@/pages/manager/auth/ManagerResetPasswordPage";
import { ManagerPasswordUpdatedPage } from "@/pages/manager/auth/ManagerPasswordUpdatedPage";
import { ManagerAuthSplashPage } from "@/pages/manager/auth/ManagerAuthSplashPage";
import { ManagerMorePage } from "@/pages/manager/account/ManagerMorePage";
import { ManagerProfilePage } from "@/pages/manager/account/ManagerProfilePage";
import { ManagerSettingsPage } from "@/pages/manager/account/ManagerSettingsPage";
import { ManagerPermissionsPage } from "@/pages/manager/account/ManagerPermissionsPage";
import { ManagerLocalePage } from "@/pages/manager/account/ManagerLocalePage";
import { ManagerSupportPage } from "@/pages/manager/account/ManagerSupportPage";
import { ManagerSupportSentPage } from "@/pages/manager/account/ManagerSupportSentPage";
import { ManagerLogoutPage } from "@/pages/manager/account/ManagerLogoutPage";
import { FollowUpCenterPage } from "@/pages/manager/followup/FollowUpCenterPage";
import { FollowUpReviewPage } from "@/pages/manager/followup/FollowUpReviewPage";
import { FollowUpComposePage } from "@/pages/manager/followup/FollowUpComposePage";
import { ManagerAlertsPage } from "@/pages/manager/followup/ManagerAlertsPage";
import { ManagerAnalyticsPage } from "@/pages/manager/analytics/ManagerAnalyticsPage";
import { ManagerWorkerRecordsPage } from "@/pages/manager/analytics/ManagerWorkerRecordsPage";
import { ManagerWorkLogPage } from "@/pages/manager/analytics/ManagerWorkLogPage";
import { ManagerWorkLogDetailPage } from "@/pages/manager/analytics/ManagerWorkLogDetailPage";
import { ManagerCareerAssetsPage } from "@/pages/manager/analytics/ManagerCareerAssetsPage";
import { AuditExportPage } from "@/pages/manager/audit/AuditExportPage";
import { AuditConfirmPage } from "@/pages/manager/audit/AuditConfirmPage";
import { AuditReadyPage } from "@/pages/manager/audit/AuditReadyPage";
import { ManagerOfflineStatePage } from "@/pages/manager/audit/ManagerOfflineStatePage";
import { ManagerReconnectedStatePage } from "@/pages/manager/audit/ManagerReconnectedStatePage";
import { ManagerRestrictedStatePage } from "@/pages/manager/audit/ManagerRestrictedStatePage";

import { FacilitySelectionPage } from "@/pages/manager/workspace/FacilitySelectionPage";
import { FacilityContextPage } from "@/pages/manager/workspace/FacilityContextPage";
import { SwitchFacilityPage } from "@/pages/manager/workspace/SwitchFacilityPage";
import { WorkerRosterPage } from "@/pages/manager/workspace/WorkerRosterPage";
import { WorkerInvitePage } from "@/pages/manager/workspace/WorkerInvitePage";
import { WorkerDetailPage } from "@/pages/manager/workspace/WorkerDetailPage";
import { WorkerVisaAdminPage } from "@/pages/manager/workspace/WorkerVisaAdminPage";
import { CommunicationPage } from "@/pages/manager/communication/CommunicationPage";
import { ConversationDetailPage } from "@/pages/manager/communication/ConversationDetailPage";
import { ComposeMessagePage } from "@/pages/manager/communication/ComposeMessagePage";
import { ReviewMessagePage } from "@/pages/manager/communication/ReviewMessagePage";
import { OjtHubPage } from "@/pages/manager/ojt/OjtHubPage";
import { OjtModuleDetailPage } from "@/pages/manager/ojt/OjtModuleDetailPage";
import { OjtReviewPage } from "@/pages/manager/ojt/OjtReviewPage";
import { HumanRightsDdPage } from "@/pages/manager/ojt/HumanRightsDdPage";
import { HrddEvidencePage } from "@/pages/manager/ojt/HrddEvidencePage";

// Company Admin (AD-00 … AD-10). The orphan scan found the whole role drawn in
// Figma with only AD-01 built, so each area now has its own route and folder.
import { AdminDashboardPage } from "@/pages/admin/AdminDashboardPage";
import { AdminAccessPage } from "@/pages/admin/access/AdminAccessPage";
import { AdminEmployeesPage } from "@/pages/admin/employees/AdminEmployeesPage";
import { AdminTeamsPage } from "@/pages/admin/teams/AdminTeamsPage";
import { AdminReportsPage } from "@/pages/admin/reports/AdminReportsPage";
import { AdminFollowUpPage } from "@/pages/admin/followup/AdminFollowUpPage";
import { AdminDailyReportsPage } from "@/pages/admin/daily-reports/AdminDailyReportsPage";
import { AdminRewardsPage } from "@/pages/admin/rewards/AdminRewardsPage";
import { AdminActivityLogPage } from "@/pages/admin/activity-log/AdminActivityLogPage";
import { AdminSettingsPage } from "@/pages/admin/settings/AdminSettingsPage";
import { AdminStatesPage } from "@/pages/admin/states/AdminStatesPage";

// LP-03 keeps its audited implementation on /features. LP-02 and LP-04 are
// confirmed intentional departures — /about and /how-it-works now serve the
// marketing pages — but their audited implementations are RETAINED here on
// disk, deliberately and permanently: they are the evidence that those Figma
// designs were in fact built, and they must not be deleted to tidy a folder.
// An active product route is not the same thing as a retained Figma
// implementation, and the parity matrix records the two separately.
import { FeaturesPage as PublicFeaturesPage } from "@/pages/public/FeaturesPage";


export const router = createBrowserRouter([
  {
    element: <MarketingShell />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/platform", element: <PlatformPage /> },
      { path: "/workers", element: <WorkersPage /> },
      { path: "/assistant", element: <MarketingAssistantPage /> },
      { path: "/about", element: <MarketingAboutPage /> },
      { path: "/how-it-works", element: <MarketingHowItWorksPage /> },
      { path: "/use-cases", element: <UseCasesPage /> },
      { path: "/organizations", element: <OrganizationsPage /> },
      { path: "/help", element: <HelpPage /> },
    ],
  },

  // /features is NOT part of the marketing departure: the newest brief drops
  // it in favour of /platform, so this route keeps the audited LP-03 page.
  { path: "/features", element: <PublicFeaturesPage /> },
  { path: "/signin", element: <SignInPage /> },
  { path: "/welcome", element: <PostAuthRoutingPage /> },
  { path: "/admin", element: <AdminDashboardPage /> },
  { path: "/admin/access", element: <AdminAccessPage /> },
  { path: "/admin/employees", element: <AdminEmployeesPage /> },
  { path: "/admin/teams", element: <AdminTeamsPage /> },
  { path: "/admin/reports", element: <AdminReportsPage /> },
  { path: "/admin/follow-up", element: <AdminFollowUpPage /> },
  { path: "/admin/daily-reports", element: <AdminDailyReportsPage /> },
  { path: "/admin/rewards", element: <AdminRewardsPage /> },
  { path: "/admin/activity-log", element: <AdminActivityLogPage /> },
  { path: "/admin/settings", element: <AdminSettingsPage /> },
  { path: "/admin/states", element: <AdminStatesPage /> },

  // Manager entry & recovery + full-screen resilience interstitials
  { path: "/manager/auth", element: <ManagerLoginPage /> },
  { path: "/manager/auth/splash", element: <ManagerAuthSplashPage /> },
  { path: "/manager/auth/forgot", element: <ManagerForgotPasswordPage /> },
  { path: "/manager/auth/reset", element: <ManagerResetPasswordPage /> },
  { path: "/manager/auth/updated", element: <ManagerPasswordUpdatedPage /> },
  { path: "/manager/state/offline", element: <ManagerOfflineStatePage /> },
  {
    path: "/manager/state/reconnected",
    element: <ManagerReconnectedStatePage />,
  },
  { path: "/manager/state/restricted", element: <ManagerRestrictedStatePage /> },
  { path: "/manager/facility", element: <FacilitySelectionPage /> },
  { path: "/manager/facility/context", element: <FacilityContextPage /> },
  { path: "/manager/facility/switch", element: <SwitchFacilityPage /> },

  // Worker auth funnel — standalone chrome (no app shell)
  { path: "/auth", element: <SplashPage /> },
  { path: "/auth/language", element: <ChooseLanguagePage /> },
  { path: "/auth/welcome", element: <WelcomePage /> },
  { path: "/auth/login", element: <LoginPage /> },
  { path: "/auth/register", element: <RegisterPage /> },
  { path: "/auth/otp", element: <OtpPage /> },
  { path: "/auth/create-pin", element: <CreatePinPage /> },
  { path: "/auth/forgot-pin", element: <ForgotPinPage /> },
  { path: "/auth/reset-pin", element: <ResetPinPage /> },
  { path: "/auth/session-expired", element: <SessionExpiredPage /> },
  { path: "/auth/logout", element: <LogoutPage /> },

  // Identity onboarding — standalone chrome
  { path: "/onboarding/id", element: <IdReadyPage /> },
  { path: "/onboarding/id/details", element: <IdentityDetailsPage /> },
  { path: "/onboarding/id/reference", element: <IdentityReferencePage /> },
  { path: "/onboarding/id/review", element: <IdentityReviewPage /> },
  { path: "/onboarding/id/verification", element: <IdentityVerificationPage /> },
  { path: "/onboarding/id/my-id", element: <MyEmendaIdPage /> },

  {
    path: "/worker",
    element: <WorkerShell />,
    children: [
      { index: true, element: <WorkerHomePage /> },

      { path: "profile", element: <PersonalProfilePage /> },
      { path: "profile/edit", element: <EditPersonalProfilePage /> },

      { path: "career", element: <CareerHubPage /> },
      { path: "career/upload", element: <UploadCvPage /> },
      { path: "career/import", element: <ReviewImportPage /> },
      { path: "career/cv", element: <MyCvPage /> },
      { path: "career/experience", element: <ExperiencePage /> },
      { path: "career/education", element: <EducationPage /> },
      { path: "career/skills", element: <SkillsLanguagesPage /> },
      { path: "career/qualifications", element: <QualificationsPage /> },
      { path: "career/preferences", element: <WorkPreferencesPage /> },
      { path: "career/create", element: <CreateCvPage /> },
      { path: "career/edit", element: <EditCvPage /> },

      { path: "japan", element: <JapanHubPage /> },
      { path: "japan/visa-plan", element: <VisaPlanPage /> },
      { path: "japan/residence", element: <ResidencePage /> },
      { path: "japan/readiness", element: <ReadinessPage /> },
      { path: "japan/readiness/:task", element: <ReadinessTaskPage /> },
      { path: "japan/registration", element: <RegistrationPage /> },
      { path: "japan/dates", element: <DatesPage /> },

      { path: "documents", element: <DocumentsHubPage /> },
      { path: "documents/add", element: <AddDocumentPage /> },
      { path: "documents/emergency", element: <EmergencyInfoPage /> },
      { path: "documents/:documentId", element: <DocumentDetailPage /> },

      { path: "knowledge", element: <KnowledgeHubPage /> },
      { path: "knowledge/search", element: <SearchKnowledgePage /> },
      { path: "knowledge/article/:articleId", element: <KnowledgeArticlePage /> },
      { path: "knowledge/ask", element: <AskQuestionPage /> },
      { path: "knowledge/questions", element: <MyQuestionsPage /> },
      { path: "knowledge/questions/:questionId", element: <QuestionDetailPage /> },

      { path: "notifications", element: <NotificationsPage /> },

      { path: "reports", element: <ReportsHubPage /> },
      { path: "reports/new", element: <NewCaregiverReportPage /> },
      { path: "reports/review", element: <ReviewReportPage /> },
      { path: "reports/:reportId", element: <ReportDetailPage /> },

      { path: "chat", element: <ChatPage /> },
      { path: "assistant", element: <AssistantPage /> },

      { path: "help", element: <HelpHubPage /> },
      { path: "help/contact", element: <ContactSupportPage /> },
      { path: "help/contact/sent", element: <SupportRequestSentPage /> },

      { path: "employer", element: <EmployerConnectionPage /> },
      { path: "employer/connect", element: <ConnectEmployerPage /> },
      { path: "employer/review", element: <ReviewEmployerInvitePage /> },
      { path: "employer/history", element: <AccessConsentHistoryPage /> },

      { path: "coin", element: <CoinOverviewPage /> },
      { path: "coin/check-in", element: <CoinCheckInPage /> },
      { path: "coin/history", element: <CoinHistoryPage /> },
      { path: "coin/earn", element: <CoinEarnPage /> },
      { path: "coin/use", element: <CoinUsePage /> },
      { path: "coin/rewards", element: <CoinRewardsPage /> },
      { path: "coin/rewards/:rewardId", element: <CoinRewardDetailPage /> },
      { path: "coin/rules", element: <CoinRulesPage /> },

      { path: "logs", element: <LogsOverviewPage /> },
      { path: "logs/work", element: <WorkCareerLogPage /> },
      { path: "logs/work/new", element: <CareerNoteFormPage /> },
      { path: "logs/work/:noteId", element: <WorkRecordDetailPage /> },
      { path: "logs/work/:noteId/edit", element: <CareerNoteFormPage /> },
      { path: "logs/health", element: <HealthLogPage /> },
      { path: "logs/health/access", element: <HealthAccessPage /> },
      { path: "logs/health/new", element: <HealthNoteFormPage /> },
      { path: "logs/health/note/:noteId", element: <HealthNoteDetailPage /> },
      { path: "logs/health/note/:noteId/edit", element: <HealthNoteFormPage /> },
      { path: "logs/health/stress-check", element: <StressCheckPage /> },
      {
        path: "logs/health/stress-check/history",
        element: <StressCheckHistoryPage />,
      },
      {
        path: "logs/health/stress-check/:checkId",
        element: <StressCheckDetailPage />,
      },
      { path: "logs/life", element: <PrivateLifePage /> },
      { path: "logs/life/new", element: <LifeNoteFormPage /> },
      { path: "logs/life/note/:noteId", element: <LifeNoteDetailPage /> },
      { path: "logs/life/note/:noteId/edit", element: <LifeNoteFormPage /> },
      { path: "logs/sync", element: <DraftSyncPage /> },
    ],
  },

  {
    path: "/manager",
    element: <ManagerShell />,
    children: [
      { index: true, element: <ManagerDashboardPage /> },
      { path: "reports", element: <ManagerReportsPage /> },
      { path: "reports/:reportId", element: <ManagerReportDetailPage /> },

      { path: "follow-up", element: <FollowUpCenterPage /> },
      { path: "follow-up/:signalId/review", element: <FollowUpReviewPage /> },
      { path: "follow-up/:signalId/compose", element: <FollowUpComposePage /> },
      { path: "alerts", element: <ManagerAlertsPage /> },

      { path: "analytics", element: <ManagerAnalyticsPage /> },
      {
        path: "workers/:workerId/records",
        element: <ManagerWorkerRecordsPage />,
      },
      {
        path: "workers/:workerId/records/log",
        element: <ManagerWorkLogPage />,
      },
      {
        path: "workers/:workerId/records/log/:recordId",
        element: <ManagerWorkLogDetailPage />,
      },
      {
        path: "workers/:workerId/records/assets",
        element: <ManagerCareerAssetsPage />,
      },

      { path: "audit-export", element: <AuditExportPage /> },
      { path: "audit-export/confirm", element: <AuditConfirmPage /> },
      { path: "audit-export/ready", element: <AuditReadyPage /> },

      { path: "more", element: <ManagerMorePage /> },
      { path: "profile", element: <ManagerProfilePage /> },
      { path: "settings", element: <ManagerSettingsPage /> },
      { path: "settings/permissions", element: <ManagerPermissionsPage /> },
      { path: "settings/locale", element: <ManagerLocalePage /> },
      { path: "support", element: <ManagerSupportPage /> },
      { path: "support/sent", element: <ManagerSupportSentPage /> },
      { path: "logout", element: <ManagerLogoutPage /> },

      { path: "workers", element: <WorkerRosterPage /> },
      { path: "workers/invite", element: <WorkerInvitePage /> },
      { path: "workers/:workerId", element: <WorkerDetailPage /> },
      { path: "workers/:workerId/visa", element: <WorkerVisaAdminPage /> },

      { path: "communication", element: <CommunicationPage /> },
      { path: "communication/compose", element: <ComposeMessagePage /> },
      { path: "communication/review", element: <ReviewMessagePage /> },
      { path: "communication/:threadId", element: <ConversationDetailPage /> },

      { path: "knowledge-ojt", element: <OjtHubPage /> },
      { path: "knowledge-ojt/:moduleId", element: <OjtModuleDetailPage /> },
      { path: "knowledge-ojt/:moduleId/review", element: <OjtReviewPage /> },
      { path: "human-rights-dd", element: <HumanRightsDdPage /> },
      { path: "human-rights-dd/evidence", element: <HrddEvidencePage /> },
    ],
  },
]);
