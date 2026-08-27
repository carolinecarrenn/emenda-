import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { FollowUpSignal } from "../followupMock";
import {
  fill,
  signalCurrent,
  signalExpected,
  signalTitle,
} from "./followupLabels";
import {
  RailButtonRow,
  RailPrimaryLink,
  RailSecondaryLink,
} from "./FollowUpButtons";

/* MD-09 "SELECTED SIGNAL" rail (1226:1308): 330px white card, radius 12,
   #dbe3de hairline, 24px padding — 11px #0c5941 caps heading, 16px #083d2d
   worker name, 12px #083d2d signal title, three 11px #65746d fact lines set
   tight on a 13px leading, the mint #e3f0e8 "Human review only" note
   (radius 10) and the "Review signal" / "Compose" pair that fills the 282px
   inner width. Desktop only. */
export function SelectedSignalRail({ signal }: { signal: FollowUpSignal }) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <aside className="hidden rounded-[12px] border border-[#dbe3de] bg-white p-[24px] lg:block lg:w-[330px] lg:shrink-0 lg:pb-[19px]">
      <h2 className="text-[11px] font-semibold text-[#0c5941] uppercase">
        {c.center.selectedTitle}
      </h2>
      <p className="mt-[18px] text-[16px] font-semibold text-[#083d2d]">
        {signal.workerName}
      </p>
      <p className="mt-[2px] text-[12px] font-semibold text-[#083d2d]">
        {signalTitle(c, signal)}
      </p>
      <div className="mt-[18px] text-[11px] leading-[13px] text-[#65746d]">
        <p>{fill(c.center.factSource, { value: signal.sourceLabel })}</p>
        <p>
          {fill(c.center.factExpected, { value: signalExpected(c, signal) })}
        </p>
        <p>{fill(c.center.factCurrent, { value: signalCurrent(c, signal) })}</p>
      </div>

      <div className="mt-[45px] rounded-[10px] bg-[#e3f0e8] px-[16px] py-[18px]">
        <p className="text-[12px] font-semibold text-[#083d2d]">
          {c.center.humanReviewTitle}
        </p>
        <p className="mt-[7px] max-w-[240px] text-[10px] leading-[16px] text-[#65746d]">
          {c.center.humanReviewDesktop}
        </p>
      </div>

      <div className="mt-[26px]">
        <RailButtonRow>
          <RailPrimaryLink to={`/manager/follow-up/${signal.id}/review`}>
            {c.center.reviewSignal}
          </RailPrimaryLink>
          <RailSecondaryLink to={`/manager/follow-up/${signal.id}/compose`}>
            {c.center.composeButton}
          </RailSecondaryLink>
        </RailButtonRow>
      </div>
    </aside>
  );
}
