import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { FollowUpSignal } from "../followupMock";
import { fill, signalTitle } from "./followupLabels";
import { FollowUpPageHeader } from "./FollowUpPageHeader";
import {
  FollowUpPrimaryLink,
  FollowUpSecondaryLink,
} from "./FollowUpButtons";
import { FollowUpFooterNote } from "./FollowUpPrivacyBand";
import { FollowUpNotSentDesktop } from "./FollowUpNotSentDesktop";

/* EM-09C Follow-up Send Failed (761:1791 · 1030:232 …): peach "Not sent"
   pill, a peach #ffe8de failure card whose third line is the red
   "Delivery failed · queue item remains open", a white "Draft preserved"
   card, the yellow #fff4cc "Safe retry" card, "Return to Compose" +
   "Back to Queue" CTAs, and the footer "No success state is shown until
   delivery succeeds." Nothing on this screen reads as success. The frame
   goes EMENDA → title → subtitle with no back link above the title, and its
   cards measure 88 / 82 / 92px with their bodies on a 12px leading. */
export function FollowUpNotSentView({ signal }: { signal: FollowUpSignal }) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div className="max-w-[1060px]">
      <FollowUpPageHeader
        tone="failed"
        title={c.notSent.title}
        subtitle={c.notSent.subtitle}
        desktopSubtitle={c.notSent.subtitleDesktop}
      />

      <FollowUpNotSentDesktop signal={signal} />

      <div className="mt-[18px] lg:hidden">
        <span className="flex h-[28px] w-fit min-w-[82px] items-center justify-center rounded-[14px] border border-[#d6e3de] bg-[#ffe8de] px-[14px] text-[10px] font-semibold text-[#b54a32]">
          {c.notSent.pill}
        </span>

        <div className="mt-[16px] min-h-[88px] rounded-[14px] border border-[#d6e3de] bg-[#ffe8de] px-[14px] py-[11px]">
          <p className="text-[13px] font-semibold text-[#094033]">
            {signal.workerName}
          </p>
          <p className="mt-[7px] text-[10px] text-[#6e8a82]">
            {fill(c.notSent.reviewRequired, { title: signalTitle(c, signal) })}
          </p>
          <p className="mt-[7px] text-[10px] font-semibold text-[#b54a32]">
            {c.notSent.failedLine}
          </p>
        </div>

        <div className="mt-[18px] min-h-[82px] rounded-[14px] border border-[#d6e3de] bg-white px-[14px] py-[14px]">
          <p className="text-[11px] font-semibold text-[#094033]">
            {c.notSent.draftTitle}
          </p>
          <p className="mt-[10px] text-[10px] leading-[12px] text-[#6e8a82]">
            {c.notSent.draftBody}
          </p>
        </div>

        <div className="mt-[18px] min-h-[92px] rounded-[14px] border border-[#d6e3de] bg-[#fff4cc] px-[14px] py-[14px]">
          <p className="text-[11px] font-semibold text-[#094033]">
            {c.notSent.retryTitle}
          </p>
          <p className="mt-[10px] text-[10px] leading-[12px] text-[#6e8a82]">
            {c.notSent.retryBody}
          </p>
        </div>

        <div className="mt-[24px] space-y-[12px] lg:flex lg:space-y-0 lg:gap-[10px]">
          <FollowUpPrimaryLink
            to={`/manager/follow-up/${signal.id}/compose`}
          >
            {c.notSent.returnCta}
          </FollowUpPrimaryLink>
          <FollowUpSecondaryLink to="/manager/follow-up">
            {c.notSent.backCta}
          </FollowUpSecondaryLink>
        </div>

        <div className="mt-[18px]">
          <FollowUpFooterNote>{c.notSent.footer}</FollowUpFooterNote>
        </div>
      </div>
    </div>
  );
}
