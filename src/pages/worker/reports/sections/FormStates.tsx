import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useReports } from "@/data/reportsContext";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { useCommonCopy } from "@/i18n/common";
import { REPORTS_STATES_COPY, fillCopy } from "../reports.copy";
import { GENERAL_DRAFT } from "../reportsStatesMock";
import { StateBanner, StateNoteCard } from "./stateUi";
import { SubmittingScreen } from "./SubmittingScreen";
import { TemplateFormBody, TemplateFormHeader } from "./TemplateFormBody";
import type { TemplateKey } from "../reportTemplate";
import { UnsavedChangesDialog } from "./UnsavedChangesDialog";

/** W-55A — Validation Error.
 *  Mobile (node 973:150): the required WORK SUMMARY box is empty with a
 *  #cc4033 border, the error is a plain 10px #b82e24 line under it and the
 *  Review report button is disabled (#94b2a6 at 45%).
 *  Desktop (WD-55A): the error sits inside the field and a red helper card is
 *  restored under the Review report button. */
export function FormValidationErrorState({
  template,
}: {
  template: TemplateKey;
}) {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  return (
    <>
      <TemplateFormHeader template={template} />
      <TemplateFormBody
        template={template}
        invalidWorkSummary
        primaryDisabled
        footerPlacement="desktop"
        footer={<StateNoteCard tone="red" lines={[c.validationError.helper]} />}
      />
    </>
  );
}

/** W-55C — Submitting.
 *  Mobile (node 973:207) replaces the form with the dedicated SubmittingScreen
 *  (H1, two status cards, a progress bar and a disabled button).
 *  Desktop (WD-55C) keeps the form: a mint state banner above the template
 *  card and a mint "Submitting…" detail card under the button. */
export function FormSubmittingState({ template }: { template: TemplateKey }) {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  const { language } = useLanguage();
  return (
    <>
      <SubmittingScreen />
      <div className="hidden lg:block">
        <TemplateFormHeader template={template} />
        <TemplateFormBody
          template={template}
          banner={
            <StateBanner tone="mint" size="form">
              {c.submitting.banner}
            </StateBanner>
          }
          footer={
            <StateNoteCard
              tone="mint"
              title={c.submitting.noteTitle}
              lines={[
                c.submitting.noteLine1,
                c.submitting.noteLine2,
                fillCopy(c.submitting.noteLine3, {
                  date: formatDisplayDate(GENERAL_DRAFT.date, language),
                }),
              ]}
            />
          }
        />
      </div>
    </>
  );
}

/** W-55E — Submit Failed.
 *  Mobile (node 973:316): no top banner — a pale red "Couldn’t submit Daily
 *  Report" card sits between EMPLOYER VISIBILITY and a "Try again" button.
 *  Desktop (WD-55E): red banner over the untouched draft plus the red
 *  "Try again" card below the Review report button. */
export function FormSubmitFailedState({ template }: { template: TemplateKey }) {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  return (
    <>
      <TemplateFormHeader template={template} />
      <TemplateFormBody
        template={template}
        primaryLabel={c.submitFailed.noteTitle}
        banner={
          <StateBanner tone="red" size="form">
            {c.submitFailed.banner}
          </StateBanner>
        }
        footer={
          <>
            <div className="lg:hidden">
              <StateNoteCard
                tone="red"
                title={c.submitFailed.title}
                lines={[c.submitFailed.noteBody]}
              />
            </div>
            <div className="hidden lg:block">
              <StateNoteCard
                tone="red"
                title={c.submitFailed.noteTitle}
                lines={[c.submitFailed.noteBody]}
              />
            </div>
          </>
        }
      />
    </>
  );
}

/** W-55F — Offline Draft.
 *  Mobile (node 973:375): no top banner — the amber "You’re offline" card
 *  sits between EMPLOYER VISIBILITY and a disabled Review report button.
 *  Desktop (WD-55F): amber banner at the top and the same amber card below
 *  the button. */
export function FormOfflineDraftState({ template }: { template: TemplateKey }) {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  return (
    <>
      <TemplateFormHeader template={template} />
      <TemplateFormBody
        template={template}
        primaryDisabled
        banner={
          <StateBanner tone="amber" size="form">
            {c.offlineDraft.banner}
          </StateBanner>
        }
        footer={
          <StateNoteCard
            tone="amber"
            title={c.offlineDraft.noteTitle}
            lines={[c.offlineDraft.noteBody]}
          />
        }
      />
    </>
  );
}

/** WD-55G (general) / 55N (caregiver) / 55O (warehouse) / 55P (food service)
 *  — Unsaved Changes: the form stays behind a scrim under the discard dialog.
 *  "Keep editing" dismisses it, "Discard changes" leaves for the hub. */
export function FormUnsavedChangesState({
  template,
}: {
  template: TemplateKey;
}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);

  return (
    <>
      <TemplateFormHeader template={template} />
      <TemplateFormBody template={template} />
      {open && (
        <UnsavedChangesDialog
          onKeepEditing={() => setOpen(false)}
          onDiscard={() => navigate("/worker/reports")}
        />
      )}
    </>
  );
}

/** WD-55D — Submitted: confirmation screen. Mint success card (radius 18,
 *  860px) then a 260px "Back to Reports" pill and a 300px outlined
 *  "View submitted report" button. */
export function FormSubmittedState() {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  const common = useCommonCopy();
  const { reports } = useReports();
  const latest = reports[0];

  return (
    <>
      <Link
        to="/worker/reports"
        className="text-[13px] font-semibold text-lp-green hover:text-lp-button"
      >
        {common.nav.reports}
      </Link>
      <h1 className="mt-[10px] max-w-[900px] text-[27px] leading-[32px] font-bold text-lp-ink lg:mt-[21px] lg:text-[34px] lg:leading-[1.2]">
        {c.submitted.title}
      </h1>
      <p className="mt-[10px] text-[12px] leading-[17px] text-lp-muted lg:mt-[21px] lg:text-[14px] lg:leading-normal">
        {c.submitted.subtitle}
      </p>

      <div className="mt-[14px] rounded-[14px] border border-lp-line bg-lp-tint p-[14px] lg:mt-[58px] lg:min-h-[184px] lg:max-w-[860px] lg:rounded-[18px] lg:bg-lp-mint lg:px-[27px] lg:py-[27px]">
        <p className="text-[13px] leading-[18px] font-semibold text-lp-ink lg:text-[20px] lg:leading-[34px] lg:text-lp-green">
          <span className="lg:hidden">{c.submitted.cardTitleShort}</span>
          <span className="hidden lg:inline">{c.submitted.cardTitle}</span>
        </p>
        <div className="mt-[6px] lg:mt-[14px] lg:flex lg:min-h-[64px] lg:items-center">
          <p className="max-w-[760px] text-[11px] leading-[16px] text-lp-muted lg:text-[14px] lg:leading-[22px]">
            <span className="lg:hidden">{c.submitted.cardBodyShort}</span>
            <span className="hidden lg:inline">{c.submitted.cardBody}</span>
          </p>
        </div>
      </div>

      <div className="mt-[17px] flex flex-col gap-[16px] lg:mt-[32px] lg:gap-[12px]">
        <Link
          to="/worker/reports"
          className="flex h-[46px] w-full items-center justify-center rounded-[13px] bg-lp-button text-[12px] font-semibold text-white hover:bg-lp-green lg:h-[48px] lg:w-[260px] lg:rounded-[12px] lg:text-[14px]"
        >
          {c.submitted.backToReports}
        </Link>
        <Link
          to={latest ? `/worker/reports/${latest.id}` : "/worker/reports"}
          className="flex h-[46px] w-full items-center justify-center rounded-[13px] border border-lp-line bg-white text-[12px] font-semibold text-lp-green hover:bg-lp-mint lg:h-[48px] lg:w-[300px] lg:rounded-[12px] lg:text-[13px]"
        >
          {c.submitted.viewReport}
        </Link>
      </div>
    </>
  );
}
