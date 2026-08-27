import { Link } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { useHelpCopy } from "../help.copy";
import { HELP_LINKS } from "../helpMock";

/* Support Request Sent confirmation block.

   Mobile is canonical (W-48G nodes 899:398–899:407): 350×152 #eef5f1 card,
   radius 16, border #c7ded3 — 24px circled check glyph at inset 15/21, 14px semibold
   #17231f title at 55/19 and 11px #65746d body at 55/49 — then, 28px below,
   the 350×48 filled #0c5941 "Back to Help & support" (radius 14, 12px label)
   and the 350×44 outlined #d7e2dc / #0c5941 "Knowledge & Q&A" 12px apart.

   Desktop keeps WD-48G (nodes 1182:589–1182:595): 760×180 mint #e8f5ed card,
   radius 18, border #d1ded6, inset 27px — 19px semibold #054d3d title and
   14px #63756b body — followed 30px below by the 320×48 filled button and the
   260×48 outlined one, both radius 12, side by side. */
export function SupportReceivedCard() {
  const c = useHelpCopy();

  return (
    <div>
      <div className="min-h-[152px] rounded-[16px] border border-[#c7ded3] bg-[#eef5f1] p-[15px] lg:min-h-[180px] lg:max-w-[760px] lg:rounded-[18px] lg:border-lp-line lg:bg-lp-mint lg:p-[27px]">
        <div className="flex items-start gap-[16px] lg:gap-0">
          <CircleCheck
            size={24}
            strokeWidth={2}
            className="mt-[6px] shrink-0 text-lp-green lg:hidden"
          />
          <div className="mt-[4px] min-w-0 lg:mt-0">
            <p className="text-[14px] leading-[22px] font-semibold text-[#17231f] lg:text-[19px] lg:leading-[30px] lg:text-lp-green">
              {c.sent.cardTitle}
            </p>
            <p className="mt-[8px] text-[11px] leading-[18px] text-lp-muted lg:mt-[12px] lg:text-[14px] lg:leading-[52px]">
              {c.sent.cardBody}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[28px] flex flex-col gap-[12px] lg:mt-[30px] lg:flex-row lg:gap-[16px]">
        <Link
          to={HELP_LINKS.help}
          className="flex h-[48px] w-full items-center justify-center rounded-[14px] bg-brand text-[12px] font-semibold text-white hover:bg-lp-green lg:w-[320px] lg:rounded-[12px] lg:bg-lp-button lg:text-[14px]"
        >
          {c.sent.backToHelp}
        </Link>
        <Link
          to={HELP_LINKS.knowledge}
          className="flex h-[44px] w-full items-center justify-center rounded-[14px] border border-[#d7e2dc] bg-white text-[12px] font-semibold text-[#0c5941] hover:border-lp-green lg:h-[48px] lg:w-[260px] lg:rounded-[12px] lg:border-lp-line lg:text-[14px] lg:text-lp-green"
        >
          {c.hub.knowledgeTitle}
        </Link>
      </div>
    </div>
  );
}
