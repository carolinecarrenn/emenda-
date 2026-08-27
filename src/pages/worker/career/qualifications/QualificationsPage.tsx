import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { QUALIFICATIONS_COPY } from "./qualifications.copy";
import { CareerSubHeader, PrimaryButton } from "../experience/careerUi";
import { QualificationsList } from "./sections/QualificationsList";
import {
  QualificationForm,
  type ProofState,
  type QualificationFormPhase,
} from "./sections/QualificationForm";
import { ReviewCredential } from "./sections/ReviewCredential";
import { ReportCredentialIssue } from "./sections/ReportCredentialIssue";

type View =
  | "list"
  | "empty"
  | "offline"
  | "credential-available"
  | "review"
  | "report"
  | "issue-submitted"
  | "add"
  | "edit";

const FORCED_STATES = [
  "empty", "offline", "credential-available", "review-credential", "report",
  "issue-submitted", "add", "edit", "record-type", "add-proof",
  "proof-uploading", "proof-ready", "proof-failed", "proof-unsupported",
  "saving", "save-failed", "unsaved", "remove-confirm",
] as const;

/** Qualifications & Training — Figma WD-28 A–R · mobile W-28. The deepest
 *  flow: provenance record cards, add/edit with record-type selector sheet
 *  and proof-upload states, employer-credential review with the
 *  report-incorrect dispute path, remove confirmation, saving/offline/
 *  unsaved states. */
export function QualificationsPage() {
  const c = useSectionCopy(QUALIFICATIONS_COPY);
  const screenState = useScreenState();
  const navigate = useNavigate();
  const location = useLocation();
  const [view, setView] = useState<View>("list");
  /* W-28D: the employer credential arrives from outside the app, so it is
     pending on first visit and the list keeps its "Review" entry until the
     worker accepts it or dismisses it with "Not now" (which lands on the
     plain W-28 list). ?state=credential-available forces it back on. */
  const [credentialPending, setCredentialPending] = useState(true);

  const go = (v: View) => {
    setView(v);
    if (location.search) navigate(location.pathname, { replace: true });
  };

  const forced =
    screenState !== null &&
    (FORCED_STATES as readonly string[]).includes(screenState)
      ? screenState
      : null;

  /* Map forced URL states onto a view + form config. */
  let active: View = view;
  let formPhase: QualificationFormPhase = "editing";
  let formProof: ProofState | undefined;
  let formSheetOpen = false;
  if (forced !== null) {
    switch (forced) {
      case "empty":
      case "credential-available":
      case "review":
      case "report":
      case "issue-submitted":
      case "add":
      case "edit":
        active = forced as View;
        break;
      case "review-credential":
        active = "review";
        break;
      case "offline":
        active = "add";
        formPhase = "offline";
        break;
      case "record-type":
        active = "add";
        formSheetOpen = true;
        break;
      case "add-proof":
        active = "add";
        formProof = "chooser";
        break;
      case "proof-uploading":
        active = "add";
        formProof = "uploading";
        break;
      case "proof-ready":
        active = "add";
        formProof = "ready";
        break;
      case "proof-failed":
        active = "add";
        formProof = "failed";
        break;
      case "proof-unsupported":
        active = "add";
        formProof = "unsupported";
        break;
      case "saving":
        active = "add";
        formPhase = "saving";
        break;
      case "save-failed":
        active = "add";
        formPhase = "save-failed";
        formProof = "ready";
        break;
      case "unsaved":
        active = "edit";
        formPhase = "unsaved";
        break;
      case "remove-confirm":
        active = "edit";
        formPhase = "remove-confirm";
        break;
    }
  }

  if (active === "add" || active === "edit") {
    return (
      <div className="max-w-[1080px] pt-2 lg:pt-0">
        <QualificationForm
          key={`${active}-${forced ?? "interactive"}`}
          mode={active}
          initialPhase={formPhase}
          initialProof={formProof}
          initialSheetOpen={formSheetOpen}
          onExit={() => go("list")}
        />
      </div>
    );
  }

  if (active === "review") {
    return (
      <div className="max-w-[1080px] pt-2 lg:pt-0">
        <ReviewCredential
          onAccept={() => {
            setCredentialPending(false);
            go("list");
          }}
          onNotNow={() => {
            setCredentialPending(false);
            go("list");
          }}
          onReport={() => go("report")}
        />
      </div>
    );
  }

  if (active === "report") {
    return (
      <div className="max-w-[1080px] pt-2 lg:pt-0">
        <ReportCredentialIssue onSubmit={() => go("issue-submitted")} />
      </div>
    );
  }

  if (active === "issue-submitted") {
    return (
      <div className="max-w-[1080px] pt-2 lg:pt-0">
        <CareerSubHeader
          backLabel={c.backLink}
          title={c.issueSubmittedTitle}
          subtitle={c.issueSubmittedBody}
          bold
        />
        {/* WD-28O: confirmation card left, "Back to Qualifications &
            Training" in the right column on the same row. */}
        <div className="mt-[38px] grid gap-4 lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
          <div className="rounded-[16px] border border-[#cfe3d8] bg-[#e9f2ec] px-[16px] pt-[16px] pb-[24px]">
            <p className="text-[14px] leading-[20px] font-semibold text-[#0b5842]">
              {c.reportReceivedTitle}
            </p>
            <p className="mt-[10px] text-[13px] leading-[20px] text-[#65746d]">
              {c.reportReceivedBody}
            </p>
          </div>
          <div>
            <PrimaryButton
              label={c.backToQualifications}
              onClick={() => go("list")}
              tall
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1080px] pt-2 lg:pt-0">
      <CareerSubHeader
        backLabel={c.backLink}
        title={c.title}
        subtitle={active === "empty" ? c.emptySubtitle : c.subtitle}
        bold
        compactTitle
      />
      <div className="mt-[38px]">
        {active === "empty" ? (
          /* WD-28A: the empty-state card keeps the left 520px column and the
             "Add qualification or training" CTA sits at the top of the right
             one — it is not stacked under the card. */
          <div className="grid gap-[18px] lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
            <div className="rounded-[16px] border border-[#dfe7e3] bg-white px-[16px] pt-[19px] pb-[60px] lg:px-[23px]">
              <p className="text-[17px] leading-[24px] font-semibold text-[#17231f]">
                {c.emptyTitle}
              </p>
              <p className="mt-[12px] text-[13px] leading-[20px] text-[#65746d]">
                {c.emptyBody}
              </p>
              <p className="mt-[30px] text-[13px] leading-[20px] font-medium text-[#0b684f]">
                {c.emptyHint}
              </p>
            </div>
            <div>
              <PrimaryButton
                label={c.addButton}
                onClick={() => go("add")}
                tall
              />
            </div>
          </div>
        ) : (
          <QualificationsList
            credentialAvailable={
              active === "credential-available" || credentialPending
            }
            onEdit={() => go("edit")}
            onAdd={() => go("add")}
            onReviewCredential={() => go("review")}
            onDismissCredential={() => {
              setCredentialPending(false);
              go("list");
            }}
          />
        )}
      </div>
    </div>
  );
}
