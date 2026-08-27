import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { useCommonCopy } from "@/i18n/common";
import { REPORTS_STATES_COPY, fillCopy } from "../reports.copy";
import { GENERAL_DRAFT } from "../reportsStatesMock";
import { ReadOnlyField } from "./ReadOnlyField";
import { ReviewReadyRow } from "./ReviewReadyRow";
import { ReviewStatusCard } from "./ReviewStatusCard";
import { ReviewVisibilityCard } from "./ReviewVisibilityCard";
import { StateBanner, StateNoteCard } from "./stateUi";
import { TemplateCard } from "./TemplateFormBody";

/** W-55Q — Review Daily Report · Offline.
 *  Mobile (node 1024:2563): a pale amber "You’re offline" CARD opens the
 *  page, the employer-visibility note sits above the pair and the submit
 *  button is disabled — there is no closing note.
 *  Desktop (WD-55Q): a thin amber banner at the top and a closing amber note
 *  carrying both the offline sentence and the employer-visibility line. */
export function ReviewOfflineState() {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();

  return (
    <>
      <Link
        to="/worker/reports/new?state=offline-draft"
        className="text-[13px] font-semibold text-lp-green hover:text-lp-button lg:hidden"
      >
        {c.review.editReport}
      </Link>
      <Link
        to="/worker/reports"
        className="hidden text-[13px] font-semibold text-lp-green hover:text-lp-button lg:block"
      >
        {common.nav.reports}
      </Link>
      <h1 className="mt-[10px] text-[27px] leading-[32px] font-bold text-lp-ink lg:mt-[14px] lg:text-[32px] lg:leading-normal">
        {c.review.title}
      </h1>
      <p className="mt-[10px] text-[11px] leading-[15px] text-lp-muted lg:mt-[7px] lg:text-[13px] lg:leading-normal">
        {GENERAL_DRAFT.employer} ·{" "}
        {formatDisplayDate(GENERAL_DRAFT.date, language)} ·{" "}
        {GENERAL_DRAFT.shift}
      </p>

      <div className="mt-[10px] space-y-[10px] lg:mt-[18px] lg:space-y-4">
        <div className="lg:hidden">
          <StateNoteCard
            tone="amber"
            title={c.offlineDraft.noteTitle}
            lines={[c.review.offlineNote]}
          />
        </div>
        <div className="hidden lg:block">
          <StateBanner tone="amber" size="form">
            {c.offlineDraft.banner}
          </StateBanner>
        </div>

        <TemplateCard
          template="general"
          bodyOverride={c.templateReview.appliedNote}
        />

        <ReviewStatusCard
          label={c.generalForm.reportStatusLabel}
          value={c.options.normal}
          body={c.review.statusDescription}
        />

        <div className="grid gap-[10px] lg:grid-cols-2 lg:gap-4 lg:gap-x-7">
          <ReadOnlyField
            label={c.detail.workSummaryLabel}
            value={GENERAL_DRAFT.workSummary}
          />
          <ReadOnlyField
            label={c.detail.followUpLabel}
            value={GENERAL_DRAFT.followUp}
          />
        </div>

        <ReviewReadyRow />

        <div className="lg:hidden">
          <ReviewVisibilityCard
            body={fillCopy(c.templateReview.readyBody, {
              employer: GENERAL_DRAFT.employer,
            })}
          />
        </div>

        <div className="flex flex-col gap-[16px] pt-[4px] lg:flex-row lg:gap-4 lg:pt-[10px]">
          <div className="flex h-[46px] w-full items-center justify-center rounded-[13px] bg-[#94b2a6] text-[12px] font-semibold text-white opacity-45 lg:h-[44px] lg:w-[300px] lg:rounded-[12px] lg:bg-lp-button lg:text-[13px] lg:opacity-100">
            {c.review.submitOffline}
          </div>
          <Link
            to="/worker/reports/new?state=offline-draft"
            className="flex h-[46px] w-full items-center justify-center rounded-[13px] border border-lp-line bg-white text-[12px] font-semibold text-lp-green hover:bg-lp-mint lg:h-[44px] lg:w-[220px] lg:rounded-[12px] lg:text-[13px]"
          >
            {c.review.editReport}
          </Link>
        </div>

        <div className="hidden lg:block">
          <StateNoteCard
            tone="amber"
            title={c.offlineDraft.noteTitle}
            lines={[
              c.review.offlineNote,
              fillCopy(c.templateReview.readyBody, {
                employer: GENERAL_DRAFT.employer,
              }),
            ]}
          />
        </div>
      </div>
    </>
  );
}
