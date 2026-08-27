import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "../communication.copy";

/* EM-08 "COMMUNICATION CONTEXT" strip (797:139): a mint #e8f5f0 radius-12
   band carrying a 9px caps label over the 9px #6e8a82 line "Sender: Japanese
   → Recipient: Bahasa Indonesia · original preserved". Mobile only — MD-08
   states the same direction in its LANGUAGE context card. */
export function CommunicationContextStrip() {
  const c = useSectionCopy(COMMUNICATION_COPY);

  return (
    <div className="rounded-[12px] bg-[#e8f5f0] px-[14px] pt-[8px] pb-[3px] lg:hidden">
      <p className="text-[9px] leading-[14px] font-semibold text-[#094033] uppercase">
        {c.compose.contextLabel}
      </p>
      <p className="mt-[5px] text-[9px] leading-[14px] text-[#6e8a82]">
        {c.compose.contextLine}
      </p>
    </div>
  );
}
