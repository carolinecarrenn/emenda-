import { CircleCheck } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { KNOWLEDGE_COPY } from "../knowledge.copy";
import { KnowledgeButton } from "./KnowledgeButton";

/* Question submitted confirmation (W-44G / WD-44G). Mobile: a mint 16px-radius
   card with a 24px check, a 14px title and an 11px body, then the filled
   "View my questions" button over the outlined "Back to Knowledge & Q&A"
   below the card. Desktop (WD-44G) keeps the same two buttons but sits them
   INSIDE the 250px panel, 159px down and aligned with the title column, so
   the row is rendered per viewport. */
export function AskSubmittedPanel() {
  const c = useSectionCopy(KNOWLEDGE_COPY);

  return (
    <>
      <div className="min-h-[152px] rounded-[16px] border border-[#c7ded3] bg-[#eef5f1] px-[15px] py-[21px] lg:mt-[60px] lg:min-h-0 lg:h-[250px] lg:rounded-[18px] lg:border-lp-line lg:bg-lp-mint lg:px-[42px] lg:pt-[39px] lg:pb-[42px]">
        <div className="flex items-start gap-[16px] lg:gap-[35px]">
          <CircleCheck
            size={24}
            className="shrink-0 text-lp-green lg:mt-[3px] lg:size-[18px]"
          />
          <div className="min-w-0">
            <p className="text-[14px] leading-[22px] font-semibold text-[#17231f] lg:text-[18px] lg:leading-normal lg:text-[#0e1f18]">
              {c.ask.submittedCardTitle}
            </p>
            <p className="mt-[8px] text-[11px] leading-[19px] text-lp-muted lg:mt-[30px] lg:text-[14px] lg:leading-normal">
              {c.ask.submittedCardBody}
            </p>
            {/* WD-44G keeps both actions inside the panel on desktop. */}
            <div className="hidden lg:mt-[42px] lg:flex lg:gap-[16px]">
              <KnowledgeButton
                to="/worker/knowledge/questions"
                className="lg:h-[46px] lg:w-[220px]"
              >
                {c.ask.viewMyQuestions}
              </KnowledgeButton>
              <KnowledgeButton
                to="/worker/knowledge"
                variant="secondary"
                className="lg:h-[46px] lg:w-[260px]"
              >
                {c.search.backToKnowledge}
              </KnowledgeButton>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[28px] flex flex-col gap-[12px] lg:hidden">
        <KnowledgeButton to="/worker/knowledge/questions">
          {c.ask.viewMyQuestions}
        </KnowledgeButton>
        <KnowledgeButton
          to="/worker/knowledge"
          variant="secondary"
          className="h-[44px]"
        >
          {c.search.backToKnowledge}
        </KnowledgeButton>
      </div>
    </>
  );
}
