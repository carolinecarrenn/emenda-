import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { REPORTS_STATES_COPY, fillCopy } from "../reports.copy";
import { GENERAL_DRAFT } from "../reportsStatesMock";

/**
 * W-55C — Daily Report · Submitting, mobile only (node 973:207).
 *
 * The mobile mock replaces the form with a dedicated progress screen: a
 * 27px/32 H1, a 12px/17 lead, two #f0f8f3 status cards (radius 14, 14px
 * padding, 13px/18 ink title over an 11px/16 muted body), an 8px progress bar
 * (#e3ebe5 track, #0c5941 fill at 64%) and a disabled #94b2a6 button — all
 * stacked with a 14px gap and no breadcrumb.
 *
 * Desktop (WD-55C) keeps the form behind a banner, so FormSubmittingState
 * renders this screen only below lg.
 */
export function SubmittingScreen() {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  const { language } = useLanguage();

  return (
    <div className="flex flex-col gap-[14px] lg:hidden">
      <h1 className="text-[27px] leading-[32px] font-bold text-lp-ink">
        {c.submitting.title}
      </h1>
      <p className="text-[12px] leading-[17px] text-lp-muted">
        {c.submitting.noteLine1}
      </p>

      <div className="rounded-[14px] border border-lp-line bg-lp-tint p-[14px]">
        <p className="text-[13px] leading-[18px] font-semibold text-lp-ink">
          {c.submitting.noteTitle}
        </p>
        <p className="mt-[6px] text-[11px] leading-[16px] text-lp-muted">
          {c.submitting.noteLine2}
        </p>
      </div>

      <div className="rounded-[14px] border border-lp-line bg-lp-tint p-[14px]">
        <p className="text-[13px] leading-[18px] font-semibold text-lp-ink">
          {c.submitting.contextTitle}
        </p>
        <p className="mt-[6px] text-[11px] leading-[16px] text-lp-muted">
          {fillCopy(c.submitting.contextBody, {
            date: formatDisplayDate(GENERAL_DRAFT.date, language),
          })}
        </p>
      </div>

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={64}
        aria-label={c.submitting.noteTitle}
        className="h-[8px] w-full overflow-hidden rounded-[4px] bg-[#e3ebe5]"
      >
        <div className="h-full w-[64%] rounded-[4px] bg-[#0c5941]" />
      </div>

      <div className="flex h-[46px] w-full items-center justify-center rounded-[13px] bg-[#94b2a6] text-[12px] font-semibold text-white">
        {c.submitting.noteTitle}
      </div>
    </div>
  );
}
