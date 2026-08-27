import { BookText, Info } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { KNOWLEDGE_COPY } from "../knowledge.copy";
import type { KnowledgeArticle } from "../knowledgeMock";
import { KnowledgeButton } from "./KnowledgeButton";
import { NoteCard } from "./NoteCard";

interface ArticleBodyMobileProps {
  article: KnowledgeArticle;
  offline: boolean;
}

/* Mobile article body (W-43 · W-43B/C/D content variants · W-43A/E offline).
   Online: a mint meta card carrying the EMENDA attribution and the article
   scope, two 15px sections, the amber official-source note and the outlined
   "Still unsure?" button. Offline the mock keeps one shortened section and
   swaps the closing button for "Back to Knowledge & Q&A". */
export function ArticleBodyMobile({ article, offline }: ArticleBodyMobileProps) {
  const c = useSectionCopy(KNOWLEDGE_COPY);
  const { language } = useLanguage();

  const heading = "text-[15px] leading-[22px] font-semibold text-[#17231f]";
  const paragraph = "text-[12px] leading-[19px] text-[#17231f]";

  if (offline) {
    return (
      <div className="lg:hidden">
        <h2 className={`mt-[28px] ${heading}`}>
          {c.article.headings[article.cachedHeading]}
        </h2>
        <p className={`mt-[10px] ${paragraph}`}>{article.cachedWhatToDo}</p>
        <KnowledgeButton
          to="/worker/knowledge"
          variant="secondary"
          className="mt-[53px]"
        >
          {c.search.backToKnowledge}
        </KnowledgeButton>
      </div>
    );
  }

  return (
    <div className="lg:hidden">
      <NoteCard
        icon={BookText}
        tone="mint"
        title={`${c.article.emendaGuidance} · ${c.updatedMeta(
          formatDisplayDate(article.updated, language),
        )}`}
        body={article.scope}
        className="min-h-[74px]"
      />
      <h2 className={`mt-[24px] ${heading}`}>
        {c.article.headings[article.primaryHeading]}
      </h2>
      <p className={`mt-[10px] ${paragraph}`}>{article.whatToDo}</p>
      <h2 className={`mt-[35px] ${heading}`}>
        {c.article.headings[article.secondaryHeading]}
      </h2>
      <p className={`mt-[10px] ${paragraph}`}>{article.whatToPrepare}</p>
      <NoteCard
        icon={Info}
        tone="amber"
        body={c.article.disclaimers[article.disclaimerKey]}
        className="mt-[37px] min-h-[88px]"
        bodyClassName="text-[11px] leading-[19px] text-[#8a5a12]"
      />
      <KnowledgeButton
        to="/worker/knowledge/ask"
        variant="secondary"
        className="mt-[26px]"
      >
        {c.article.stillUnsure}
      </KnowledgeButton>
    </div>
  );
}
