import { useEffect, useRef, useState } from "react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { EMPLOYER_COPY } from "./employer.copy";
import { EMPLOYER_CONNECTION } from "./employerMock";
import { connectEmployer } from "./employerStatus";
import { EmployerPageHeader } from "./sections/EmployerPageHeader";
import { EmployerCard } from "./sections/EmployerCard";
import { AccessScopeCards } from "./sections/AccessScopeCards";
import { ConsentRow } from "./sections/ConsentRow";
import { ActionButton } from "./sections/ActionButton";
import { ConfirmDialog } from "./sections/ConfirmDialog";
import { StatusPanel } from "./sections/StatusPanel";
import { ScopeSummaryCard } from "./sections/ScopeSummaryCard";
import { NoteStrip } from "./sections/NoteStrip";
import { StateBanner } from "./sections/StateBanner";
import { ScopeDetailsCard } from "./sections/ScopeDetailsCard";

type ReviewPhase = "review" | "connecting" | "connected" | "failed" | "declined";

const URL_STATES: Record<string, ReviewPhase> = {
  connecting: "connecting",
  connected: "connected",
  failed: "failed",
  declined: "declined",
};

/** Stacked action pair — 12px apart on the W-5x mocks, side by side on WD-5x. */
const ACTION_ROW = "flex flex-col gap-[12px] lg:flex-row lg:gap-4";

/** Review employer invite — the consent screen (Figma WD-50, node 1182:910;
 *  WD-50A consent selected 1182:967 · WD-50B connecting 1182:1026 ·
 *  WD-50C connected 1182:1076 · WD-50D failed 1182:1514 · WD-50E decline
 *  confirmation 1182:1564 · WD-50F declined 1182:1127; mobile W-50 917:258 ·
 *  W-50A 917:299 · W-50B 917:341 · W-50C 917:382 · W-50D 943:2 ·
 *  W-50E 943:42 · W-50F 917:504). */
export function ReviewEmployerInvitePage() {
  const c = useSectionCopy(EMPLOYER_COPY);
  const urlState = useScreenState();
  const forcedPhase = urlState ? URL_STATES[urlState] : undefined;

  const [consent, setConsent] = useState(false);
  const [phase, setPhase] = useState<ReviewPhase>("review");
  const [declineOpen, setDeclineOpen] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const activePhase = forcedPhase ?? phase;
  const employer = EMPLOYER_CONNECTION.shortName;

  const handleConnect = () => {
    if (!consent) return;
    setPhase("connecting");
    timer.current = window.setTimeout(() => {
      /* W-50C — the connection is now the app-wide employer link, so Coin,
         the manage screen and the consent history all follow it. */
      connectEmployer();
      setPhase("connected");
    }, 1200);
  };

  /* W-50B / WD-50B — connecting */
  if (activePhase === "connecting") {
    return (
      <div className="max-w-[1012px] pt-[17px] lg:pt-0">
        <EmployerPageHeader
          title={c.review.connecting.title}
          subtitle={c.review.connecting.subtitle(employer)}
        />
        {/* W-50B node 917:357 / WD-50B node 1182:1070 keep the eyebrow
            inside the 820x180 status card on both viewports. */}
        <StatusPanel
          className="mt-[26px] max-w-[820px] lg:mt-[52px]"
          tone="tint"
          desktopHeight={180}
          icon="progress"
          eyebrow={c.review.connecting.statusEyebrow}
          eyebrowOnDesktop
          title={c.review.connecting.cardTitle(employer)}
          body={c.review.connecting.cardBody}
        />
        {/* WD-50B node 1203:38 sits 20px under the status card. */}
        <ScopeSummaryCard
          className="mt-[20px] lg:max-w-[820px]"
          eyebrow={c.review.connecting.approvedEyebrow}
          protectedLine={c.review.connecting.protectedLine}
        />
        {/* W-50B node 917:375 / WD-50B node 1182:1073 draw the pill without a
            spinner — a plain 300px outlined button on desktop. */}
        <ActionButton
          tone="progress"
          width={300}
          disabled
          className="mt-[24px] lg:mt-[20px]"
        >
          {c.review.connecting.button}
        </ActionButton>
      </div>
    );
  }

  /* W-50C / WD-50C — employer connected */
  if (activePhase === "connected") {
    return (
      <div className="max-w-[1012px] pt-[17px] lg:pt-0">
        <EmployerPageHeader
          title={c.review.connected.title}
          subtitle={c.review.connected.subtitle(employer)}
        />
        <StatusPanel
          className="mt-[38px] max-w-[860px] lg:mt-[52px]"
          tone="mint"
          desktopHeight={190}
          icon="check"
          title={c.review.connected.cardTitle(employer)}
          body={c.review.connected.cardBody}
        />
        <div className={`mt-[28px] lg:mt-[36px] ${ACTION_ROW}`}>
          <ActionButton tone="primary" width={280} to="/worker">
            {c.review.connected.continueHome}
          </ActionButton>
          <ActionButton tone="secondary" width={260} to="/worker/career">
            {c.review.connected.viewCareerCv}
          </ActionButton>
        </div>
      </div>
    );
  }

  /* W-50D (943:2) is canonical: the failed screen still shows WHO the employer
     was and the full ACCESS SCOPE pair, so the worker can see exactly what was
     — and was not — shared, then the consent note and the red banner. WD-50D
     adds a red status panel above the pair; mobile governs what the screen
     says, desktop how it is laid out, so the panel stays desktop-only. */
  if (activePhase === "failed") {
    return (
      <div className="max-w-[1012px] pt-[17px] lg:pt-0">
        <EmployerPageHeader
          title={c.review.failed.title}
          subtitle={c.review.failed.subtitle(employer)}
        />
        <EmployerCard className="mt-[18px] lg:hidden" />
        <AccessScopeCards className="mt-[18px] lg:hidden" cardMinHeight={210} />
        {/* WD-50D node 1182:1557 — the red 820x180 status card carries the
            CONNECTION STATUS eyebrow and opens the desktop stack. */}
        <StatusPanel
          className="hidden max-w-[820px] lg:mt-[52px] lg:block"
          tone="red"
          desktopHeight={180}
          eyebrow={c.review.failed.statusEyebrow}
          eyebrowOnDesktop
          title={c.review.failed.cardTitle(employer)}
          body={c.review.failed.cardBody}
        />
        {/* WD-50D nodes 1223:9 / 1203:44 fold the employer card, the scope
            pair and the consent note into one card 2px below. */}
        <ScopeDetailsCard
          className="lg:mt-[2px] lg:max-w-[820px]"
          note={c.review.failed.consentNote}
        />
        <NoteStrip size="control" className="mt-[16px] lg:hidden">
          {c.review.failed.consentNote}
        </NoteStrip>
        {/* W-50D node 943:92 — the red banner sits straight under the note. Not
            lg:hidden: WD-50D folds the employer card and the scope pair into
            ScopeDetailsCard, but it never drops the reason the connection
            failed. Mobile is canonical for what a screen tells the user, so
            desktop keeps the sentence and only its placement follows the
            desktop composition. */}
        <StateBanner tone="red" className="max-w-[860px] lg:mt-[12px]">
          {c.review.failed.errorBanner}
        </StateBanner>
        <div className={`mt-[12px] lg:mt-[20px] ${ACTION_ROW}`}>
          <ActionButton
            tone="primary"
            width={300}
            to="/worker/employer/review"
          >
            {c.review.failed.tryAgain}
          </ActionButton>
          <ActionButton
            tone="secondary"
            width={240}
            to="/worker/employer/review"
          >
            {c.review.failed.backToReview}
          </ActionButton>
        </div>
      </div>
    );
  }

  /* W-50F / WD-50F — employer invite declined */
  if (activePhase === "declined") {
    return (
      <div className="max-w-[1012px] pt-[17px] lg:pt-0">
        <EmployerPageHeader
          title={c.review.declined.title}
          subtitle={c.review.declined.subtitle(employer)}
        />
        {/* WD-50F node 1182:1170 — an 800x190 white card with an ink
            title; the mobile confirmation card keeps its tint. */}
        <StatusPanel
          className="mt-[38px] max-w-[800px] lg:mt-[52px]"
          tone="white"
          desktopHeight={190}
          icon="check"
          title={c.review.declined.cardTitle}
          body={c.review.declined.cardBody}
        />
        <div className={`mt-[28px] lg:mt-[36px] ${ACTION_ROW}`}>
          <ActionButton tone="primary" width={300} to="/worker">
            {c.review.declined.backHome}
          </ActionButton>
          <ActionButton
            tone="secondary"
            width={260}
            to="/worker/employer/connect"
          >
            {c.review.declined.enterAnother}
          </ActionButton>
        </div>
      </div>
    );
  }

  /* W-50 / W-50A / WD-50 / WD-50A — consent review */
  return (
    <div className="max-w-[1012px] pt-[17px] lg:pt-0">
      <EmployerPageHeader
        title={c.review.title}
        subtitle={c.review.subtitle}
      />

      {/* W-50 node 917:273 / WD-50 node 1182:953 — EMPLOYER card */}
      <EmployerCard className="mt-[18px] lg:mt-[53px]" />

      {/* W-50 nodes 928:2 / 917:279 / 917:283 — ACCESS SCOPE pair */}
      <AccessScopeCards className="mt-[18px] lg:mt-[5px]" />

      {/* W-50 node 917:287 — consent strip, gates the primary action */}
      <ConsentRow
        className="mt-[16px] lg:mt-[20px]"
        checked={consent}
        onToggle={() => setConsent((value) => !value)}
        label={c.review.consentLabel(employer)}
      />

      <div className={`mt-[16px] lg:mt-[20px] ${ACTION_ROW}`}>
        <ActionButton
          tone={consent ? "primary" : "muted"}
          width={260}
          onClick={handleConnect}
          disabled={!consent}
        >
          {c.review.connectEmployer}
        </ActionButton>
        <ActionButton
          tone="secondary"
          width={220}
          onClick={() => setDeclineOpen(true)}
        >
          {c.review.declineInvite}
        </ActionButton>
      </div>

      {/* W-50E node 943:83 / WD-50E node 1182:1564 — decline confirmation */}
      {declineOpen && (
        <ConfirmDialog
          title={c.review.declineConfirm.title}
          body={c.review.declineConfirm.body(employer)}
          safeLabel={c.review.declineConfirm.keepReviewing}
          destructiveLabel={c.review.declineInvite}
          onSafe={() => setDeclineOpen(false)}
          onDestructive={() => {
            setDeclineOpen(false);
            setPhase("declined");
          }}
        />
      )}
    </div>
  );
}
