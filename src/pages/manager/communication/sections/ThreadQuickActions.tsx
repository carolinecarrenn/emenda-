import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "../communication.copy";
import type { ConversationSummary } from "../communicationData";

/* The three lateral jumps out of a thread, drawn per surface.
   EM-07: three 28px radius-14 pills — Report / Follow-up (selected, mint
   #e8f5f0) / Worker — sitting directly above the composer.
   MD-07 (1225:138–143): the same three as 42px radius-9 white buttons on a
   #dbe3de hairline, ordered Worker Detail · Report · Follow-up, below the
   composer microcopy. */

function targets(conversation: ConversationSummary) {
  return {
    report: "/manager/reports",
    followUp: "/manager/follow-up",
    worker: `/manager/workers/${conversation.id}/records`,
  };
}

export function ThreadQuickActionPills({
  conversation,
}: {
  conversation: ConversationSummary;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);
  const to = targets(conversation);
  /* 994:2770–2775 · only the selected pill is semibold; Report and Worker
     stay regular. */
  const chip =
    "flex h-[28px] items-center justify-center rounded-[14px] border border-[#d6e3de] px-[20px] text-[10px] text-[#094033]";

  return (
    <div className="flex flex-wrap gap-[8px] lg:hidden">
      <Link to={to.report} className={`${chip} bg-white`}>
        {c.thread.quickActions.report}
      </Link>
      <Link
        to={to.followUp}
        aria-current="true"
        className={`${chip} bg-[#e8f5f0] font-semibold`}
      >
        {c.thread.quickActions.followUp}
      </Link>
      <Link to={to.worker} className={`${chip} bg-white`}>
        {c.thread.quickActions.worker}
      </Link>
    </div>
  );
}

export function ThreadQuickActionButtons({
  conversation,
}: {
  conversation: ConversationSummary;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);
  const to = targets(conversation);
  const button =
    "flex h-[42px] items-center justify-start rounded-[9px] border border-[#dbe3de] bg-white px-[16px] text-[12px] font-semibold text-brand-deep hover:border-brand";

  return (
    <div className="hidden lg:flex lg:gap-[14px]">
      <Link to={to.worker} className={`${button} w-[140px]`}>
        {c.thread.quickActions.workerDetail}
      </Link>
      <Link to={to.report} className={`${button} w-[100px]`}>
        {c.thread.quickActions.report}
      </Link>
      <Link to={to.followUp} className={`${button} w-[120px]`}>
        {c.thread.quickActions.followUp}
      </Link>
    </div>
  );
}
