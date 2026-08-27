import { Link, useParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { KNOWLEDGE_COPY } from "./knowledge.copy";
import { KNOWLEDGE_ARTICLES } from "./knowledgeMock";
import { ArticleBodyDesktop } from "./sections/ArticleBodyDesktop";
import { ArticleBodyMobile } from "./sections/ArticleBodyMobile";
import { KnowledgeHeader } from "./sections/KnowledgeHeader";
import { OfflineBanner } from "./sections/OfflineBanner";

/** Knowledge Article (Figma W-43 · W-43B/C/D content variants · W-43A/E
 *  offline; desktop WD-43/43A). Mobile flows the mint meta card, the two
 *  article sections, the amber official-source note and the outlined
 *  "Still unsure?" button; desktop lays the same content into a 720px white
 *  card beside the OFFICIAL GUIDANCE rail. */
export function KnowledgeArticlePage() {
  const { articleId } = useParams();
  const state = useScreenState();
  const c = useSectionCopy(KNOWLEDGE_COPY);

  const article = KNOWLEDGE_ARTICLES.find((entry) => entry.id === articleId);
  const offline = state === "offline";

  if (!article) {
    return (
      <div className="max-w-[1040px] pt-[20px] lg:pt-[16px]">
        <Link
          to="/worker/knowledge"
          className="text-[13px] font-semibold text-lp-green hover:text-lp-button"
        >
          {c.crumbKnowledge}
        </Link>
        <div className="mt-[22px] rounded-[14px] border border-lp-line bg-white p-8 text-center">
          <p className="text-[15px] font-semibold text-[#0e1f18]">
            {c.article.notFound}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1040px] pt-[20px] lg:pt-[16px]">
      <KnowledgeHeader
        to="/worker/knowledge"
        crumb={c.crumbKnowledge}
        title={article.title}
        subtitle={
          offline
            ? c.article.offlineSubtitle
            : `${c.officialGuidance} · ${c.searchCategory[article.categoryKey]}`
        }
        titleLines={2}
        className="min-h-[138px]"
      />

      {offline && (
        <OfflineBanner className="lg:mt-[30px]" message={c.article.offlineBanner} />
      )}

      <ArticleBodyMobile article={article} offline={offline} />
      <ArticleBodyDesktop article={article} offline={offline} />
    </div>
  );
}
