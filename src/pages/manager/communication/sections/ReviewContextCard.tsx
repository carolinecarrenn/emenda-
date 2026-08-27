import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY, fillCopy } from "../communication.copy";
import type { ConversationSummary } from "../communicationData";

/* MD-08A context band (1225:240–242): a full 1060x96 mint #e3f0e8 card,
   radius 12 — 17px semibold #083d2d "Putri Rahayu · Care Assistant" over an
   11px #65746d "Japanese original → Bahasa Indonesia preview · Sakura Care
   Facility" line.
   EM-08A (994:2859–2861) states the same as a 350x72 mint recipient card
   with no avatar — "Recipient · Putri Rahayu" at 13px/17 semibold #094033
   over "Worker · Bahasa Indonesia" at 10px/14 #6e8a82, both at a 14px
   inset. */
export function ReviewContextCard({
  conversation,
}: {
  conversation: ConversationSummary;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);

  return (
    <div className="min-h-[72px] rounded-[14px] border border-[#d6e3de] bg-[#e8f5f0] px-[14px] pt-[13px] pb-[20px] lg:min-h-[96px] lg:justify-center lg:rounded-[12px] lg:border-transparent lg:bg-[#e3f0e8] lg:px-[24px] lg:py-[24px]">
      {/* EM-08A · mobile */}
      <div className="min-w-0 lg:hidden">
        <p className="text-[13px] leading-[17px] font-semibold text-[#094033]">
          {fillCopy(c.review.recipient, { name: conversation.name })}
        </p>
        <p className="mt-[8px] text-[10px] leading-[14px] text-[#6e8a82]">
          {fillCopy(c.review.recipientLine, {
            language: conversation.language,
          })}
        </p>
      </div>

      {/* MD-08A · desktop */}
      <div className="hidden lg:block">
        <p className="text-[17px] font-semibold text-brand-deep">
          {conversation.name} · {conversation.role}
        </p>
        <p className="mt-[4px] text-[11px] text-[#65746d]">
          {fillCopy(c.review.contextLine, { facility: EMPLOYER.facility })}
        </p>
      </div>
    </div>
  );
}
