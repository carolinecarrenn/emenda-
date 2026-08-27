import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { useReports } from "@/data/reportsContext";
import { EMPLOYER, WORKER } from "@/data/caregiverReport";
import { HOME_COPY } from "./home.copy";
import {
  LAST_SYNCED_TIME,
  PROFILE_PERCENTS,
  resolveHomeState,
  type HomeStateName,
} from "./homeMock";

export interface HomeUpdateEntry {
  title: string;
  body: string;
  time: string;
}

export type HomeThirdCard =
  | { kind: "progress"; percent: number; percentLabel: string }
  | {
      kind: "status";
      title: string;
      badge: string;
      badgeTone: "green" | "muted";
      body: string;
    };

export interface HomePanelView {
  title: string;
  body: string;
  cta: string;
  /** Route the mint panel's single CTA opens. Every W-18 state has one — the
   *  panel is the screen's "next action", so it is never a dead control. */
  to: string;
}

export type HomeView =
  | { kind: "loading"; greeting: string; subtitle: string }
  | {
      kind: "content";
      state: HomeStateName;
      greeting: string;
      subtitle: string;
      idStatus: string;
      idStatusTone: "verified" | "muted";
      /** W-17 badge variant the "View ID" link opens, matched to the status
       *  line this state shows on the ID card. */
      idLink: string;
      /** WD-18F only: gray banner replaces the mint panel. */
      offlineBanner?: { title: string; body: string; retry: string };
      /** Absent in WD-18F (offline). */
      panel?: HomePanelView;
      thirdCard: HomeThirdCard;
      /** Fifth Explore tile per WD-18 variant. */
      exploreTile: "connect" | "connection" | "history";
      updates: HomeUpdateEntry[];
    };

/** W-17 My EMENDA ID badge variants, keyed by the ID-card status a W-18 state
 *  shows. Clicking "View ID" lands on the matching identity screen. */
const ID_LINK = {
  verified: "/onboarding/id/my-id?state=verified",
  /** W-17 base — "You can use this ID while verification is being reviewed." */
  pending: "/onboarding/id/my-id",
  notVerified: "/onboarding/id/my-id?state=not-verified",
  needsReview: "/onboarding/id/my-id?state=needs-review",
} as const;

/** Resolves ?state= + copy + mock data into the WD-18 screen view model. */
export function useHomeView(): HomeView {
  const c = useSectionCopy(HOME_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();
  const { todayReport } = useReports();

  const state = resolveHomeState(useScreenState());
  const firstName = WORKER.name.split(" ")[0];
  const employer = EMPLOYER.name;

  if (state === "loading") {
    return {
      kind: "loading",
      greeting: common.nav.home,
      subtitle: c.subtitle.loading,
    };
  }

  const morning = c.greeting.morning(firstName);
  const progress = (percent: number): HomeThirdCard => ({
    kind: "progress",
    percent,
    percentLabel: c.profileCard.percent(percent),
  });
  const percent = PROFILE_PERCENTS[state] ?? 65;

  const base = {
    kind: "content" as const,
    state,
    greeting: morning,
    idStatus: c.idCard.status.verified,
    idStatusTone: "verified" as const,
    idLink: ID_LINK.verified,
    thirdCard: progress(percent),
    exploreTile: "connect" as const,
  };

  switch (state) {
    case "headless":
      return {
        ...base,
        subtitle: c.subtitle.headless,
        panel: { ...c.panel.headless, to: "/worker/employer/connect" },
        updates: [
          { ...c.updates.identityVerified, time: c.updates.time.today },
        ],
      };
    case "new-user":
      return {
        ...base,
        greeting: c.greeting.welcome(firstName),
        subtitle: c.subtitle.newUser,
        idStatus: c.idCard.status.setupNotFinished,
        idStatusTone: "muted",
        idLink: ID_LINK.notVerified,
        // W-12 is the identity-setup entry screen ("Your EMENDA ID is ready"),
        // so "Continue identity setup" opens the wizard at its first step.
        panel: { ...c.panel.newUser, to: "/onboarding/id" },
        updates: [
          { ...c.updates.emendaIdCreated, time: c.updates.time.today },
        ],
      };
    case "identity-pending":
      return {
        ...base,
        subtitle: c.subtitle.identityPending,
        idStatus: c.idCard.status.reviewInProgress,
        idStatusTone: "muted",
        idLink: ID_LINK.pending,
        panel: { ...c.panel.identityPending, to: ID_LINK.pending },
        updates: [
          { ...c.updates.identitySubmitted, time: c.updates.time.justNow },
        ],
      };
    case "needs-attention":
      return {
        ...base,
        subtitle: c.subtitle.needsAttention,
        idStatus: c.idCard.status.needsReview,
        idStatusTone: "muted",
        idLink: ID_LINK.needsReview,
        panel: { ...c.panel.needsAttention, to: "/onboarding/id/reference" },
        updates: [
          { ...c.updates.identityNeedsReview, time: c.updates.time.today },
        ],
      };
    case "profile-incomplete":
      return {
        ...base,
        subtitle: c.subtitle.profileIncomplete,
        panel: { ...c.panel.profileIncomplete, to: "/worker/career" },
        updates: [
          { ...c.updates.profileUpdate, time: c.updates.time.today },
        ],
      };
    case "employer-not-connected":
      return {
        ...base,
        subtitle: c.subtitle.employerNotConnected,
        panel: {
          ...c.panel.employerNotConnected,
          to: "/worker/employer/connect",
        },
        updates: [
          { ...c.updates.readyToConnect, time: c.updates.time.none },
        ],
      };
    case "offline":
      return {
        ...base,
        greeting: common.nav.home,
        subtitle: c.subtitle.offline,
        idStatus: c.idCard.status.verifiedCached,
        offlineBanner: c.offlineBanner,
        updates: [
          {
            title: c.updates.lastSynced.title(LAST_SYNCED_TIME),
            body: c.updates.lastSynced.body,
            time: c.updates.time.offline,
          },
        ],
      };
    case "invite-received":
      return {
        ...base,
        subtitle: c.subtitle.inviteReceived,
        panel: {
          title: c.panel.inviteReceived.title(employer),
          body: c.panel.inviteReceived.body,
          cta: c.panel.inviteReceived.cta,
          to: "/worker/employer/review",
        },
        updates: [
          {
            title: c.updates.inviteReceived.title,
            body: c.updates.inviteReceived.body(employer),
            time: c.updates.time.now,
          },
        ],
      };
    case "profile-complete":
      return {
        ...base,
        subtitle: c.subtitle.profileComplete,
        panel: { ...c.panel.profileComplete, to: "/worker/employer/connect" },
        thirdCard: {
          kind: "status",
          title: c.statusCard.profileReady.title,
          badge: c.statusCard.profileReady.badge,
          badgeTone: "green",
          body: c.statusCard.profileReady.body,
        },
        updates: [
          { ...c.updates.profileComplete, time: c.updates.time.today },
        ],
      };
    case "connected-offline":
      return {
        ...base,
        greeting: common.nav.home,
        subtitle: c.subtitle.connectedOffline(employer),
        panel: {
          title: c.panel.connectedOffline.title,
          body: c.panel.connectedOffline.body(employer),
          cta: c.panel.connectedOffline.cta,
          to: "/worker/employer",
        },
        thirdCard: {
          kind: "status",
          title: c.statusCard.workToolsOffline.title,
          badge: c.statusCard.workToolsOffline.badge,
          badgeTone: "muted",
          body: c.statusCard.workToolsOffline.body,
        },
        exploreTile: "connection",
        updates: [
          { ...c.updates.connectedOffline, time: c.updates.time.offline },
        ],
      };
    case "access-ended":
      return {
        ...base,
        subtitle: c.subtitle.accessEnded,
        panel: {
          title: c.panel.accessEnded.title(employer),
          body: c.panel.accessEnded.body,
          cta: c.panel.accessEnded.cta,
          to: "/worker/employer/connect",
        },
        exploreTile: "history",
        updates: [
          { ...c.updates.accessEnded, time: c.updates.time.none },
        ],
      };
    case "connected":
      return {
        ...base,
        subtitle: c.subtitle.connected(employer),
        panel: {
          title: c.panel.connected.title,
          body: c.panel.connected.body(employer),
          cta: c.panel.connected.cta,
          to: "/worker/career",
        },
        thirdCard: {
          kind: "status",
          title: c.statusCard.workTools.title,
          badge: common.status.connected,
          badgeTone: "green",
          body: c.statusCard.workTools.body,
        },
        exploreTile: "connection",
        updates: [
          ...(todayReport
            ? [
                {
                  title:
                    todayReport.status === "verified"
                      ? c.updates.dailyReportVerified
                      : c.updates.dailyReportSubmitted,
                  body: `${employer} · ${formatDisplayDate(todayReport.date, language)} · ${todayReport.submittedAt}.`,
                  time: c.updates.time.today,
                },
              ]
            : []),
          {
            title: c.updates.employerConnected.title,
            body: c.updates.employerConnected.body(employer),
            time: c.updates.time.now,
          },
        ],
      };
  }
}
