import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { FollowUpSignal } from "../followupMock";
import { fill, signalTitle } from "./followupLabels";
import { NotSentInfoBlock } from "./NotSentInfoBlock";

/* MD-09C failure card (1226:1527): a 920px white panel, radius 14 on a
   #dbe3de hairline, holding the 840x86 peach #fce8e0 banner (20px #c74a3d
   headline over an 11px #65746d line), the 15px #083d2d worker with its 11px
   #65746d signal line, and the #f1f6f3 guidance blocks. EM-09C also states
   that the draft survives the failure, so DRAFT PRESERVED keeps its block
   above SAFE RETRY here. Desktop only. */
export function NotSentFailureCard({
  signal,
  children,
}: {
  signal: FollowUpSignal;
  children: React.ReactNode;
}) {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div className="w-[920px] rounded-[14px] border border-[#dbe3de] bg-white px-[40px] pt-[36px] pb-[18px]">
      <div className="h-[86px] rounded-[12px] bg-[#fce8e0] px-[24px] pt-[20px]">
        <p className="text-[20px] font-semibold text-[#c74a3d]">
          {c.notSent.bannerTitle}
        </p>
        <p className="mt-[2px] text-[11px] text-[#65746d]">
          {c.notSent.bannerBody}
        </p>
      </div>

      <p className="mt-[38px] text-[15px] font-semibold text-[#083d2d]">
        {signal.workerName}
      </p>
      <p className="mt-[6px] text-[11px] text-[#65746d]">
        {fill(c.notSent.reviewRequired, { title: signalTitle(c, signal) })}
      </p>

      <div className="mt-[22px] space-y-[16px]">
        <NotSentInfoBlock title={c.notSent.draftTitleDesktop}>
          {c.notSent.draftBody}
        </NotSentInfoBlock>
        <NotSentInfoBlock title={c.notSent.retryTitleDesktop}>
          {c.notSent.retryBodyDesktop}
        </NotSentInfoBlock>
      </div>

      <div className="mt-[30px]">{children}</div>
    </div>
  );
}
