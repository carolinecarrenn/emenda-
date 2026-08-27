import { FollowUpIntro } from "./FollowUpIntro";
import { FollowUpStatRow } from "./FollowUpStatRow";
import { FollowUpBoardCard } from "./FollowUpBoardCard";
import { EscalationQueueCard } from "./EscalationQueueCard";

/* AD-05 "Screen Content" (1223:2272): a 1144px column — the 44px intro row,
   the four-up stat strip, then the 808/320 board + escalation-queue pair
   16px apart. */
export function FollowUpBoardView() {
  return (
    <div className="flex w-full max-w-[1144px] flex-col gap-[16px]">
      <FollowUpIntro />
      <FollowUpStatRow />
      <div className="flex flex-col gap-[16px] lg:flex-row lg:items-start">
        <FollowUpBoardCard />
        <EscalationQueueCard />
      </div>
    </div>
  );
}
