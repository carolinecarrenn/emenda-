import { Link, useParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { KNOWLEDGE_COPY } from "./knowledge.copy";
import { KNOWLEDGE_QUESTIONS } from "./knowledgeMock";
import { formatMonthYear } from "./monthYear";
import { AnswerCard } from "./sections/AnswerCard";
import { KnowledgeButton } from "./sections/KnowledgeButton";
import { KnowledgeHeader } from "./sections/KnowledgeHeader";
import { OfflineBanner } from "./sections/OfflineBanner";
import { QuestionStatusCard } from "./sections/QuestionStatusCard";

/** Question Detail (Figma W-46 waiting · W-46A answered · W-46B offline;
 *  desktop WD-46/46A/46B). Amber waiting card or mint answered card, the
 *  YOUR QUESTION block, the ANSWER card with EMENDA attribution and the
 *  outlined follow-up actions. Offline the mock drops the status card and the
 *  question label and shows the shortened cached answer. */
export function QuestionDetailPage() {
  const { questionId } = useParams();
  const state = useScreenState();
  const c = useSectionCopy(KNOWLEDGE_COPY);
  const { language } = useLanguage();

  const question = KNOWLEDGE_QUESTIONS.find(
    (entry) => entry.id === questionId,
  );
  const offline = state === "offline";

  if (!question) {
    return (
      <div className="max-w-[1040px] pt-[20px] lg:pt-[16px]">
        <Link
          to="/worker/knowledge/questions"
          className="text-[13px] font-semibold text-lp-green hover:text-lp-button"
        >
          {c.crumbMyQuestions}
        </Link>
        <div className="mt-[22px] rounded-[14px] border border-lp-line bg-white p-8 text-center">
          <p className="text-[15px] font-semibold text-[#0e1f18]">
            {c.detail.notFound}
          </p>
        </div>
      </div>
    );
  }

  const waiting = question.status === "waiting";
  const topicLabel = c.topics[question.topic];
  const questionLine =
    "text-[15px] leading-[22px] font-semibold text-[#17231f] lg:text-[19px] lg:leading-normal lg:text-[#0e1f18]";

  const header = (subtitle: string, reserve: string) => (
    <KnowledgeHeader
      to="/worker/knowledge/questions"
      crumb={c.crumbMyQuestions}
      title={c.detail.title}
      subtitle={subtitle}
      className={reserve}
    />
  );

  if (offline) {
    /* W-46B — cached content while offline. */
    return (
      <div className="max-w-[1040px] pt-[20px] lg:pt-[16px]">
        {header(c.detail.offlineSubtitle, "min-h-[142px]")}
        <OfflineBanner
          className="lg:mt-[32px]"
          message={c.detail.offlineBanner}
        />
        <p className={`mt-[30px] min-h-[54px] lg:mt-[42px] ${questionLine}`}>
          {question.question}
        </p>
        {question.answer !== undefined ? (
          <AnswerCard
            className="mt-[24px] min-h-[150px] lg:mt-[26px] lg:min-h-[168px]"
            eyebrow={c.detail.cachedAnswer}
            body={question.cachedAnswer ?? question.answer}
          />
        ) : (
          <p className="mt-[24px] max-w-[820px] text-[12px] leading-[19px] text-[#17231f] lg:text-[14px] lg:leading-[22px] lg:text-[#0e1f18]">
            {question.details}
          </p>
        )}
        <KnowledgeButton
          to="/worker/knowledge/questions"
          variant="secondary"
          className="mt-[30px] lg:mt-[32px] lg:h-[46px] lg:w-[300px]"
        >
          {c.detail.backToMyQuestions}
        </KnowledgeButton>
      </div>
    );
  }

  return (
    <div className="max-w-[1040px] pt-[20px] lg:pt-[16px]">
      {header(
        waiting ? c.detail.waitingSubtitle : c.detail.answeredSubtitle,
        "min-h-[140px]",
      )}

      <QuestionStatusCard
        className="lg:mt-[36px]"
        waiting={waiting}
        label={waiting ? c.questions.waiting : c.questions.answered}
        meta={
          waiting
            ? c.detail.waitingMeta(
                formatDisplayDate(question.submittedDate, language),
                topicLabel,
              )
            : c.detail.answeredMeta(
                formatDisplayDate(
                  question.answeredDate ?? question.submittedDate,
                  language,
                ),
                topicLabel,
              )
        }
      />

      <p className="mt-[24px] text-[10px] leading-[16px] font-semibold text-lp-muted lg:mt-[28px] lg:text-[11px] lg:leading-normal">
        {c.detail.yourQuestion}
      </p>
      <p
        className={`mt-[10px] min-h-[52px] max-w-[900px] lg:mt-[16px] lg:min-h-0 ${questionLine}`}
      >
        {question.question}
      </p>

      {waiting ? (
        <>
          <p className="mt-[16px] min-h-[86px] max-w-[820px] text-[12px] leading-[19px] text-[#17231f] lg:mt-[24px] lg:min-h-0 lg:text-[14px] lg:leading-[22px] lg:text-[#0e1f18]">
            {question.details}
          </p>
          <KnowledgeButton
            to={`/worker/knowledge/article/${question.relatedArticleId}`}
            variant="secondary"
            className="mt-[32px] lg:mt-[38px] lg:h-[46px] lg:w-[360px]"
          >
            {c.detail.viewRelated}
          </KnowledgeButton>
        </>
      ) : (
        <>
          <AnswerCard
            className="mt-[22px] min-h-[176px] lg:mt-[26px] lg:min-h-[190px]"
            eyebrow={c.detail.answerLabel}
            body={question.answer ?? ""}
            source={c.detail.basedOn(
              formatMonthYear(question.answerUpdatedMonth ?? "Aug 2026", language),
            )}
          />
          <div className="mt-[26px] flex flex-col gap-[12px] lg:flex-row lg:gap-4">
            <KnowledgeButton
              to={`/worker/knowledge/article/${question.relatedArticleId}`}
              variant="secondary"
              className="lg:h-[46px] lg:w-[300px]"
            >
              {c.detail.viewRelated}
            </KnowledgeButton>
            <KnowledgeButton
              to="/worker/knowledge/ask"
              variant="secondary"
              className="h-[44px] lg:h-[46px] lg:w-[300px]"
            >
              {c.detail.askAnother}
            </KnowledgeButton>
          </div>
        </>
      )}
    </div>
  );
}
