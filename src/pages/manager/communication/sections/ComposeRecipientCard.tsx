import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY, fillCopy } from "../communication.copy";
import type { ConversationSummary } from "../communicationData";

/* EM-08 recipient card (994:2812–2816): a 350x64 mint #e8f5f0 card, radius
   14, on a #d6e3de hairline — a 40px #06634f circular initial avatar at a
   12px inset beside a 13px/17 #094033 name over the 10px/14 #6e8a82
   "Warehouse Operator · JA → ID" line. Mobile only; MD-08 states the same
   facts in its RECIPIENT / LANGUAGE context cards. */
export function ComposeRecipientCard({
  conversation,
}: {
  conversation: ConversationSummary;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);

  return (
    <div className="flex min-h-[64px] items-center gap-[12px] rounded-[14px] border border-[#d6e3de] bg-[#e8f5f0] px-[12px] py-[12px] lg:hidden">
      <span className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#06634f] text-[11px] font-semibold text-white">
        {conversation.initials}
      </span>
      <div className="min-w-0">
        <p className="text-[13px] leading-[17px] font-semibold text-[#094033]">
          {conversation.name}
        </p>
        <p className="mt-[5px] text-[10px] leading-[14px] text-[#6e8a82]">
          {fillCopy(c.compose.recipientContext, {
            role: conversation.mobileRole ?? conversation.role,
          })}
        </p>
      </div>
    </div>
  );
}
