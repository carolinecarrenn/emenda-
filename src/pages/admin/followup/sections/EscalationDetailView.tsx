import { useSectionCopy } from "@/i18n/copy";
import { ADMINFOLLOWUP_COPY } from "../followup.copy";
import { BackToBoardLink } from "./BackToBoardLink";
import { DetailInterveneCard } from "./DetailInterveneCard";
import { DetailEscalateCard } from "./DetailEscalateCard";
import { DetailRecoveryCard } from "./DetailRecoveryCard";

/* AD-05D "Escalation Detailed States" (1239:432): a #fafcfb board, radius 16,
   1px #d1e3db — the "CONCRETE OPERATIONAL STATES" eyebrow, the 23px semibold
   title and its 11px caption, then the three 760x720 state cards 60px apart.

   The three cards total 2400px, well past the 1144px admin content column,
   so the row scrolls horizontally on desktop and stacks on mobile. */
export function EscalationDetailView() {
  const c = useSectionCopy(ADMINFOLLOWUP_COPY);

  return (
    <div className="flex w-full max-w-[1144px] flex-col gap-[16px]">
      <BackToBoardLink />

      <div className="flex flex-col gap-[18px] rounded-[16px] border border-[#d1e3db] bg-[#fafcfb] p-[23px]">
        <div className="flex flex-col gap-[10px]">
          <p className="text-[10px] leading-none font-semibold tracking-[0.04em] text-[#0a5740]">
            {c.detail.eyebrow}
          </p>
          <h2 className="text-[20px] leading-[26px] font-semibold text-[#13332b] lg:text-[23px] lg:leading-[30px]">
            {c.detail.title}
          </h2>
          <p className="text-[11px] leading-[15px] text-[#63756e]">
            {c.detail.subtitle}
          </p>
        </div>

        <div className="-mx-[23px] overflow-x-auto px-[23px] lg:pb-[6px]">
          <div className="flex flex-col gap-[24px] lg:w-max lg:flex-row lg:items-start lg:gap-[60px]">
            <DetailInterveneCard />
            <DetailEscalateCard />
            <DetailRecoveryCard />
          </div>
        </div>
      </div>
    </div>
  );
}
