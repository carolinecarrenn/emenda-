import { List } from "lucide-react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { KNOWLEDGE_COPY } from "./knowledge.copy";
import { KNOWLEDGE_QUESTIONS } from "./knowledgeMock";
import { EmptyStateCard } from "./sections/EmptyStateCard";
import { KnowledgeButton } from "./sections/KnowledgeButton";
import { KnowledgeHeader } from "./sections/KnowledgeHeader";
import { OfflineBanner } from "./sections/OfflineBanner";
import { QuestionRow } from "./sections/QuestionRow";
import { SkeletonBlock } from "./sections/SkeletonBlock";

/** My Questions (Figma W-45 · loading W-45A · empty W-45B · offline W-45C;
 *  desktop WD-45/45A/45B/45C). White question cards with amber-clock Waiting
 *  vs green-check Answered status, then a filled Ask-a-question button. Every
 *  state carries its own subtitle line. */
export function MyQuestionsPage() {
  const state = useScreenState();
  const c = useSectionCopy(KNOWLEDGE_COPY);

  const header = (subtitle: string, reserve: string) => (
    <KnowledgeHeader
      to="/worker/knowledge"
      crumb={c.crumbKnowledge}
      title={c.questions.title}
      subtitle={subtitle}
      className={reserve}
    />
  );

  if (state === "loading") {
    return (
      <div className="max-w-[1040px] pt-[20px] lg:pt-[16px]">
        {header(c.questions.loadingSubtitle, "min-h-[146px]")}
        <div className="space-y-[20px] lg:mt-[60px] lg:space-y-[22px]">
          <SkeletonBlock className="h-[96px] lg:h-[104px]" />
          <SkeletonBlock className="h-[96px] lg:h-[104px]" />
          <SkeletonBlock className="h-[96px] lg:h-[104px]" />
        </div>
      </div>
    );
  }

  if (state === "empty") {
    /* W-45B — the empty state sits inside a white card with the filled
       Ask-a-question button below it. */
    return (
      <div className="max-w-[1040px] pt-[20px] lg:pt-[16px]">
        {header(c.questions.emptySubtitle, "min-h-[160px]")}
        <EmptyStateCard
          icon={List}
          title={c.questions.emptyTitle}
          body={c.questions.emptyBody}
          className="min-h-[166px] lg:mt-[80px] lg:h-[260px] lg:min-h-0 lg:px-0 lg:py-0"
          iconClassName="lg:mt-[42px]"
          titleClassName="mt-[26px] lg:mt-[31px]"
          bodyClassName="mt-[8px] lg:mt-[27px] lg:max-w-[620px]"
        />
        <KnowledgeButton
          to="/worker/knowledge/ask"
          className="mx-auto mt-[28px] lg:mt-[34px] lg:w-[440px]"
        >
          {c.questions.askButton}
        </KnowledgeButton>
      </div>
    );
  }

  if (state === "offline") {
    const cachedQuestion = KNOWLEDGE_QUESTIONS.find(
      (question) => question.status === "answered",
    );
    return (
      <div className="max-w-[1040px] pt-[20px] lg:pt-[16px]">
        {header(c.questions.offlineSubtitle, "min-h-[144px]")}
        <OfflineBanner
          className="lg:mt-[42px]"
          message={c.questions.offlineBanner}
        />
        {cachedQuestion && (
          <div className="mt-[22px] lg:mt-[44px]">
            <QuestionRow question={cachedQuestion} cached />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-[1040px] pt-[20px] lg:pt-[16px]">
      {header(c.questions.subtitle, "min-h-[146px]")}
      <div className="space-y-[12px] lg:mt-[60px] lg:space-y-[22px]">
        {KNOWLEDGE_QUESTIONS.map((question) => (
          <QuestionRow key={question.id} question={question} />
        ))}
      </div>
      <KnowledgeButton
        to="/worker/knowledge/ask"
        className="mt-[36px] lg:mt-[48px] lg:h-[46px] lg:w-[220px]"
      >
        {c.questions.askButton}
      </KnowledgeButton>
    </div>
  );
}
