import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { KNOWLEDGE_COPY } from "../knowledge.copy";
import type { KnowledgeArticle } from "../knowledgeMock";

interface ArticleBodyDesktopProps {
  article: KnowledgeArticle;
  offline: boolean;
}

/* Desktop article body.
   Online (WD-43B/43C/43D): a 720px white article card at y=286 carrying the
   green EMENDA meta line, both 17px sections over 14px/17 body copy and the
   amber #fff5d6 official-source note, beside a 296x232 OFFICIAL GUIDANCE rail
   whose button reads "Still unsure? Ask a question".
   Offline (WD-43E): the two-column layout collapses into a single 1040x260
   white card holding the cached section heading, the shortened body and the
   "Back to Knowledge & Q&A" button — the same content the mobile W-43A/E
   frames offer. */
export function ArticleBodyDesktop({
  article,
  offline,
}: ArticleBodyDesktopProps) {
  const c = useSectionCopy(KNOWLEDGE_COPY);
  const { language } = useLanguage();

  if (offline) {
    return (
      <div className="hidden lg:mt-[34px] lg:block lg:h-[260px] lg:rounded-[18px] lg:border lg:border-lp-line lg:bg-white lg:px-[23px] lg:pt-[26px]">
        <h2 className="flex h-[30px] items-center text-[17px] font-semibold text-[#0e1f18]">
          {c.article.headings[article.cachedHeading]}
        </h2>
        <p className="mt-[14px] flex h-[92px] max-w-[840px] flex-col justify-center text-[14px] leading-[17px] text-[#0e1f18]">
          {article.cachedWhatToDo}
        </p>
        <Link
          to="/worker/knowledge"
          className="mt-[22px] flex h-[46px] w-[300px] items-center justify-center rounded-[10px] border border-lp-line bg-white text-[13px] font-semibold text-lp-green hover:border-lp-green"
        >
          {c.search.backToKnowledge}
        </Link>
      </div>
    );
  }

  return (
    <div className="hidden lg:mt-[46px] lg:grid lg:grid-cols-[720px_1fr] lg:items-start lg:gap-6">
      <article className="h-[470px] rounded-[18px] border border-lp-line bg-white px-[23px] pt-[20px]">
        <p className="flex h-[46px] items-center text-[12px] font-medium text-lp-green">
          {`${c.article.emendaGuidance} · ${c.updatedMeta(
            formatDisplayDate(article.updated, language),
          )}`}
        </p>
        <h2 className="mt-[18px] flex h-[28px] items-center text-[17px] font-semibold text-[#0e1f18]">
          {c.article.headings[article.primaryHeading]}
        </h2>
        <p className="mt-[31px] max-w-[660px] text-[14px] leading-[17px] text-[#0e1f18]">
          {article.whatToDo}
        </p>
        <h2 className="mt-[43px] flex h-[28px] items-center text-[17px] font-semibold text-[#0e1f18]">
          {c.article.headings[article.secondaryHeading]}
        </h2>
        <p className="mt-[34px] max-w-[660px] text-[14px] leading-[17px] text-[#0e1f18]">
          {article.whatToPrepare}
        </p>
        <div className="mt-[45px] flex h-[78px] items-center rounded-[12px] bg-[#fff5d6] px-[18px]">
          <p className="max-w-[636px] text-[12px] leading-[18px] text-[#ad6b0a]">
            {c.article.disclaimers[article.disclaimerKey]}
          </p>
        </div>
      </article>

      <aside className="h-[232px] rounded-[18px] border border-lp-line bg-lp-tint px-[19px] pt-[20px]">
        <p className="flex h-[22px] items-center text-[11px] font-semibold text-lp-green">
          {c.article.railLabel}
        </p>
        <p className="mt-[34px] max-w-[250px] text-[13px] leading-[16px] text-lp-muted">
          {c.article.railBody}
        </p>
        <Link
          to="/worker/knowledge/ask"
          className="mt-[49px] flex h-[44px] w-[256px] items-center justify-center rounded-[10px] border border-lp-line bg-white text-[13px] font-semibold text-lp-green hover:border-lp-green"
        >
          {c.article.stillUnsure}
        </Link>
      </aside>
    </div>
  );
}
