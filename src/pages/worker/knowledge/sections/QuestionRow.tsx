import { Link } from "react-router-dom";
import { ChevronRight, CircleCheck, Clock } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { KNOWLEDGE_COPY } from "../knowledge.copy";
import type { KnowledgeQuestion } from "../knowledgeMock";

interface QuestionRowProps {
  question: KnowledgeQuestion;
  cached?: boolean;
}

/* Question card. Mobile (W-45/45C): 104px white card on a #d7e2dc hairline,
   14px radius, a 22px amber clock (Waiting for answer) or green check
   (Answered) at 15px from the left edge, a 13px semibold title over a
   two-line reserve, then a 10px status label with the date right-aligned on
   the same line and an 18px green chevron. Desktop (WD-45) keeps the 15px
   title and 12px status line. The offline variant turns the status label into
   "Answered · cached" and carries the offline state into the detail screen,
   so W-46B is reached by opening a cached row rather than only by URL. */
export function QuestionRow({ question, cached = false }: QuestionRowProps) {
  const c = useSectionCopy(KNOWLEDGE_COPY);
  const { language } = useLanguage();
  const waiting = question.status === "waiting";
  const StatusIcon = waiting ? Clock : CircleCheck;
  const statusLabel = waiting ? c.questions.waiting : c.questions.answered;

  return (
    <Link
      to={`/worker/knowledge/questions/${question.id}${
        cached ? "?state=offline" : ""
      }`}
      className="flex min-h-[104px] items-start gap-[14px] rounded-[14px] border border-lp-line bg-white px-[15px] py-[13px] hover:border-lp-green lg:h-[104px] lg:items-center lg:gap-[20px] lg:rounded-[16px] lg:py-[17px] lg:pl-[27px] lg:pr-[20px]"
    >
      <StatusIcon
        size={22}
        className={`mt-[4px] shrink-0 lg:mt-0 lg:size-[18px] ${
          waiting ? "text-[#8a5a12] lg:text-[#ad6b0a]" : "text-lp-green"
        }`}
      />
      <span className="min-w-0 flex-1">
        <span className="block min-h-[40px] text-[13px] leading-[20px] font-semibold text-[#0e1f18] lg:min-h-0 lg:text-[15px] lg:leading-normal">
          {question.question}
        </span>
        <span className="mt-[4px] flex items-center gap-[14px] lg:mt-[12px]">
          <span
            className={`text-[10px] leading-[18px] font-semibold lg:text-[12px] ${
              waiting ? "text-[#8a5a12] lg:text-[#ad6b0a]" : "text-lp-green"
            }`}
          >
            {cached ? c.questions.cachedStatus(statusLabel) : statusLabel}
          </span>
          <span className="ml-auto shrink-0 pl-[10px] text-[10px] leading-[18px] text-lp-muted lg:text-[12px]">
            {formatDisplayDate(question.listDate, language)}
          </span>
        </span>
      </span>
      <ChevronRight
        size={18}
        className="mt-[28px] shrink-0 text-lp-green lg:mt-0"
      />
    </Link>
  );
}
