import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "../communication.copy";
import { CommunicationCheckList } from "./CommunicationCheckList";

/* EM-08 "Before sending" card (994:2826–2828): a 350x90 white card, radius
   14, #d6e3de hairline — a 12px/16 #094033 title over three 10px/14 #6e8a82
   ✓ rows (Recipient and language checked / Translation reviewed / No private
   Health-Stress-Life data). Mobile only; MD-08 promotes the same idea into
   its BEFORE SENDING rail. */
export function BeforeSendingCard() {
  const c = useSectionCopy(COMMUNICATION_COPY);

  return (
    <div className="relative rounded-[14px] border border-[#d6e3de] bg-white px-[14px] pt-[13px] pb-[2px] lg:hidden">
      <p className="text-[12px] leading-[16px] font-semibold text-[#094033]">
        {c.compose.beforeSending}
      </p>
      <div className="mt-[17px]">
        <CommunicationCheckList items={c.compose.beforeSendingChecks} />
      </div>
    </div>
  );
}
