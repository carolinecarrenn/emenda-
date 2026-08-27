import { useEffect, useRef, useState } from "react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { EMPLOYER_COPY } from "./employer.copy";
import { EMPLOYER_CONNECTION } from "./employerMock";
import {
  disconnectEmployer,
  endEmployerAccess,
  useEmployerLink,
} from "./employerStatus";
import { EmployerPageHeader } from "./sections/EmployerPageHeader";
import { EmployerCard } from "./sections/EmployerCard";
import { AccessScopeCards } from "./sections/AccessScopeCards";
import { NoteStrip } from "./sections/NoteStrip";
import { StateBanner } from "./sections/StateBanner";
import { ActionButton } from "./sections/ActionButton";
import { ConfirmDialog } from "./sections/ConfirmDialog";
import { StatusPanel } from "./sections/StatusPanel";
import { ScopeSummaryCard } from "./sections/ScopeSummaryCard";
import { ScopeDetailsCard } from "./sections/ScopeDetailsCard";

type ManagePhase =
  | "connected"
  | "offline"
  | "disconnecting"
  | "disconnected"
  | "failed"
  | "access-ended";

const URL_STATES: Record<string, ManagePhase> = {
  offline: "offline",
  disconnecting: "disconnecting",
  disconnected: "disconnected",
  failed: "failed",
  "access-ended": "access-ended",
};

/** Stacked action stack — 12px apart on the W-5x mocks, a row on WD-5x. */
const ACTION_ROW = "flex flex-col gap-[12px] lg:flex-row lg:gap-4";

/** Employer connection — manage (Figma WD-51, node 1182:1178; WD-51A
 *  disconnect confirmation 1182:1237 · WD-51B disconnecting 1182:1304 ·
 *  WD-51C disconnected 1182:1353 · WD-51D failed 1182:1465 · WD-51E offline
 *  1182:1404 · WD-51F access ended 1182:1629; mobile W-51 938:2 ·
 *  W-51A 938:45 · W-51B 938:86 · W-51C 938:121 · W-51D 939:47 ·
 *  W-51E 938:197 · W-51F 946:1113). */
export function EmployerConnectionPage() {
  const c = useSectionCopy(EMPLOYER_COPY);
  const urlState = useScreenState();
  const forcedPhase = urlState ? URL_STATES[urlState] : undefined;

  /* null = follow the shared employer link; a value = this visit's own flow. */
  const [phase, setPhase] = useState<ManagePhase | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  const link = useEmployerLink();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  /* ?state=access-ended stands in for the employer-side termination we cannot
     trigger from this device — record it so Coin (W-60V) and the consent
     history (W-52A) stay consistent afterwards. */
  useEffect(() => {
    if (forcedPhase === "access-ended") endEmployerAccess();
  }, [forcedPhase]);

  const linkPhase: ManagePhase =
    link.status === "headless"
      ? "disconnected"
      : link.status === "access-ended"
        ? "access-ended"
        : "connected";

  const activePhase = forcedPhase ?? phase ?? linkPhase;
  const employer = EMPLOYER_CONNECTION.shortName;

  /* W-51B / WD-51B — disconnecting */
  if (activePhase === "disconnecting") {
    return (
      <div className="max-w-[1012px] pt-[17px] lg:pt-0">
        <EmployerPageHeader
          title={c.manage.disconnecting.title}
          subtitle={c.manage.disconnecting.subtitle(employer)}
        />
        {/* WD-51B node 1182:1347 is an 820x180 tinted card whose title is
            ink; its eyebrow is mobile-only (W-51B node 938:97). */}
        <StatusPanel
          className="mt-[26px] max-w-[820px] lg:mt-[52px]"
          tone="tint"
          desktopHeight={180}
          icon="progress"
          eyebrow={c.manage.disconnecting.statusEyebrow}
          title={c.manage.disconnecting.cardTitle(employer)}
          body={c.manage.disconnecting.cardBody}
        />
        {/* WD-51B node 1203:41 sits 20px under the status card. */}
        <ScopeSummaryCard
          className="mt-[20px] lg:max-w-[820px]"
          eyebrow={c.manage.disconnecting.currentEyebrow}
          protectedLine={c.manage.disconnecting.protectedLine}
        />
        {/* W-51B / WD-51B node 1182:1350 draw the in-progress pill without a
            spinner — a plain 300px outlined button on desktop. */}
        <ActionButton
          tone="progress"
          width={300}
          disabled
          className="mt-[24px] lg:mt-[20px]"
        >
          {c.manage.disconnecting.button}
        </ActionButton>
      </div>
    );
  }

  /* W-51C / WD-51C — employer disconnected */
  if (activePhase === "disconnected") {
    return (
      <div className="max-w-[1012px] pt-[17px] lg:pt-0">
        <EmployerPageHeader
          title={c.manage.disconnected.title}
          subtitle={c.manage.disconnected.subtitle(employer)}
        />
        {/* WD-51C node 1182:1396 — an 860x180 white card with an ink
            title; the mobile confirmation card keeps its tint. */}
        <StatusPanel
          className="mt-[38px] max-w-[860px] lg:mt-[52px]"
          tone="white"
          desktopHeight={180}
          icon="check"
          title={c.manage.disconnected.cardTitle}
          body={c.manage.disconnected.cardBody}
        />
        {/* W-51C nodes 938:142 / 938:144 — access history first, reconnect after */}
        <div className={`mt-[28px] lg:mt-[36px] ${ACTION_ROW}`}>
          <ActionButton
            tone="primary"
            width={280}
            to="/worker/employer/history"
          >
            {c.manage.viewAccessHistory}
          </ActionButton>
          <ActionButton
            tone="secondary"
            width={300}
            to="/worker/employer/connect"
          >
            {c.manage.disconnected.connectAnother}
          </ActionButton>
        </div>
      </div>
    );
  }

  /* W-51D is canonical: a failed disconnect still shows the employer and the
     full ACCESS SCOPE pair, because the access it describes is exactly what
     stayed in force, then the fail note and the red banner. WD-51D adds a red
     status panel above the pair; mobile governs the content, desktop the
     presentation, so that panel stays desktop-only. */
  if (activePhase === "failed") {
    return (
      <div className="max-w-[1012px] pt-[17px] lg:pt-0">
        <EmployerPageHeader
          title={c.manage.failed.title}
          subtitle={c.manage.failed.subtitle(employer)}
        />
        <EmployerCard className="mt-[18px] lg:hidden" minHeight={96} />
        <AccessScopeCards className="mt-[18px] lg:hidden" cardMinHeight={200} />
        {/* WD-51D node 1182:1508 — the red 820x180 card opens the desktop
            stack and carries no eyebrow. */}
        <StatusPanel
          className="hidden max-w-[820px] lg:mt-[52px] lg:block"
          tone="red"
          desktopHeight={180}
          title={c.manage.failed.cardTitle(employer)}
          body={c.manage.failed.cardBody}
        />
        {/* WD-51D nodes 1223:6 / 1203:47 fold the employer card, the scope
            pair and the fail note into one card 2px below. */}
        <ScopeDetailsCard
          className="lg:mt-[2px] lg:max-w-[820px]"
          note={c.manage.failed.failNote(employer)}
        />
        <NoteStrip size="control" className="mt-[16px] lg:hidden">
          {c.manage.failed.failNote(employer)}
        </NoteStrip>
        {/* W-51D — the red banner sits straight under the note. It is NOT
            lg:hidden: WD-51D folds the employer card, the scope pair and the
            fail note into ScopeDetailsCard, but it never removes the reason
            the action failed. Mobile is canonical for what a screen tells the
            user, so a desktop visitor gets the same sentence; only its
            placement follows the desktop composition. */}
        <StateBanner tone="red" className="max-w-[860px] lg:mt-[12px]">
          {c.manage.failed.errorBanner(employer)}
        </StateBanner>
        <div className={`mt-[12px] lg:mt-[20px] ${ACTION_ROW}`}>
          <ActionButton tone="primary" width={300} to="/worker/employer">
            {c.manage.failed.tryAgain}
          </ActionButton>
          <ActionButton tone="secondary" width={260} to="/worker/employer">
            {c.manage.failed.backToConnection}
          </ActionButton>
        </div>
      </div>
    );
  }

  /* W-51F / WD-51F — employer access ended (terminated employer-side) */
  if (activePhase === "access-ended") {
    return (
      <div className="max-w-[1012px] pt-[17px] lg:pt-0">
        <EmployerPageHeader
          title={c.manage.accessEnded.title}
          subtitle={c.manage.accessEnded.subtitle}
        />
        {/* WD-51F node 1182:1672 — an 860x180 white card that restates the
            outcome and drops the mobile card body (W-51F node 946:1133) to
            the 12px retention note at node 1223:12. */}
        <StatusPanel
          className="mt-[38px] max-w-[860px] lg:mt-[52px]"
          tone="white"
          desktopHeight={180}
          icon="check"
          title={c.manage.accessEnded.cardTitle}
          body={c.manage.accessEnded.cardBody}
          desktopTitle={c.manage.accessEnded.title}
          desktopBody={c.manage.accessEnded.desktopBody}
          note={c.manage.accessEnded.cardBody}
        />
        {/* W-51F nodes 946:1125 — same pair as W-51C */}
        <div className={`mt-[28px] lg:mt-[36px] ${ACTION_ROW}`}>
          <ActionButton
            tone="primary"
            width={280}
            to="/worker/employer/history"
          >
            {c.manage.viewAccessHistory}
          </ActionButton>
          <ActionButton
            tone="secondary"
            width={300}
            to="/worker/employer/connect"
          >
            {c.manage.disconnected.connectAnother}
          </ActionButton>
        </div>
      </div>
    );
  }

  /* W-51 / W-51A / W-51E / WD-51 / WD-51A / WD-51E — active connection */
  const offline = activePhase === "offline";

  return (
    <div className="max-w-[1012px] pt-[17px] lg:pt-0">
      <EmployerPageHeader
        title={c.manage.title}
        subtitle={
          offline ? c.manage.subtitleOffline : c.manage.subtitle(employer)
        }
      />

      {offline && (
        /* W-51E node 939:92 — the amber strip sits 6px under the subtitle */
        <StateBanner tone="amber" className="mt-[6px] lg:mt-[26px]">
          {c.manage.offlineBanner}
        </StateBanner>
      )}

      {/* W-51 node 938:17 / WD-51 node 1182:1221 — EMPLOYER card */}
      <EmployerCard
        minHeight={96}
        className={
          offline ? "mt-[16px] lg:mt-[22px]" : "mt-[18px] lg:mt-[53px]"
        }
      />

      {/* W-51 nodes 938:32 / 938:20 / 938:23 — ACCESS SCOPE pair */}
      <AccessScopeCards
        cardMinHeight={200}
        className="mt-[18px] lg:mt-[9px]"
      />

      {/* W-51 node 938:26 / WD-51 node 1203:34 — connection control note */}
      <NoteStrip size="control" className="mt-[16px] lg:mt-[14px]">
        {c.manage.controlNote(employer)}
      </NoteStrip>

      <div className={`mt-[0px] lg:mt-[26px] ${ACTION_ROW}`}>
        <ActionButton tone="primaryMobile" width={230} to="/worker/career">
          {c.manage.viewCareerCv}
        </ActionButton>
        <ActionButton
          tone="secondary"
          width={230}
          to="/worker/employer/history"
        >
          {c.manage.viewAccessHistory}
        </ActionButton>
        <ActionButton
          tone="danger"
          width={260}
          onClick={() => setConfirmOpen(true)}
          disabled={offline}
        >
          {c.manage.disconnectEmployer}
        </ActionButton>
      </div>

      {/* W-51A node 938:239 / WD-51A node 1182:1296 — disconnect confirmation */}
      {confirmOpen && (
        <ConfirmDialog
          title={c.manage.modal.title(employer)}
          body={c.manage.modal.body(employer)}
          safeLabel={c.manage.modal.keepConnected}
          destructiveLabel={c.manage.disconnectEmployer}
          onSafe={() => setConfirmOpen(false)}
          onDestructive={() => {
            setConfirmOpen(false);
            setPhase("disconnecting");
            timer.current = window.setTimeout(() => {
              /* W-51C — record the revocation so the history switches to its
                 W-52A "Ended" variant and Coin drops to its personal
                 overview (W-60U). */
              disconnectEmployer();
              setPhase("disconnected");
            }, 1200);
          }}
        />
      )}
    </div>
  );
}
