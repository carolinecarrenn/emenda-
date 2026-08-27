import { Link } from "react-router-dom";
import {
  ArrowRight,
  CircleHelp,
  Download,
  FileText,
  List,
  Search,
} from "lucide-react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { KNOWLEDGE_COPY } from "./knowledge.copy";
import { KNOWLEDGE_ARTICLES } from "./knowledgeMock";
import { formatMonthYear } from "./monthYear";
import { KnowledgeHeader } from "./sections/KnowledgeHeader";
import { KnowledgeTileCard } from "./sections/KnowledgeTileCard";
import { OfflineBanner } from "./sections/OfflineBanner";
import { QuestionBubbleIcon } from "./sections/QuestionBubbleIcon";
import { SkeletonBlock } from "./sections/SkeletonBlock";

/** Knowledge & Q&A hub (Figma W-41 · loading W-41A · offline W-41B; desktop
 *  WD-41/41A/41B). Breadcrumb "Headless home" · headline · search field ·
 *  Ask/My-questions cards · POPULAR GUIDANCE · privacy footer strip. */
export function KnowledgeHubPage() {
  const state = useScreenState();
  const c = useSectionCopy(KNOWLEDGE_COPY);
  const { language } = useLanguage();
  const popular = KNOWLEDGE_ARTICLES.filter((article) => article.popular);

  const header = (subtitle: string, reserve: string) => (
    <KnowledgeHeader
      to="/worker"
      crumb={c.crumbHome}
      title={c.hub.title}
      subtitle={subtitle}
      className={reserve}
    />
  );

  if (state === "loading") {
    return (
      <div className="max-w-[1040px] pt-[20px] lg:pt-[16px]">
        {header(c.hub.loadingSubtitle, "min-h-[142px]")}
        {/* W-41A: five identical 72px placeholders on a 20px rhythm. */}
        <div className="space-y-[20px] lg:hidden">
          <SkeletonBlock className="h-[72px]" />
          <SkeletonBlock className="h-[72px]" />
          <SkeletonBlock className="h-[72px]" />
          <SkeletonBlock className="h-[72px]" />
          <SkeletonBlock className="h-[72px]" />
        </div>
        {/* WD-41A: the desktop grid mirrors the real hub blocks. */}
        <div className="hidden lg:block">
          <SkeletonBlock className="lg:mt-[40px] lg:h-[54px]" />
          <div className="lg:mt-[26px] lg:grid lg:grid-cols-[500px_1fr] lg:gap-6">
            <SkeletonBlock className="lg:h-[130px]" />
            <SkeletonBlock className="lg:h-[130px]" />
          </div>
          <div className="lg:mt-[76px] lg:grid lg:grid-cols-[500px_1fr] lg:gap-6">
            <SkeletonBlock className="lg:h-[122px]" />
            <SkeletonBlock className="lg:h-[122px]" />
          </div>
        </div>
      </div>
    );
  }

  if (state === "offline") {
    return (
      <div className="max-w-[1040px] pt-[20px] lg:pt-[16px]">
        {header(c.hub.offlineSubtitle, "min-h-[138px]")}
        <OfflineBanner
          className="lg:mt-[36px]"
          message={c.hub.offlineBanner}
        />
        {/* W-41B has no section label above the cached cards; WD-41B does. */}
        <p className="mt-[38px] hidden text-[11px] font-semibold text-lp-green lg:block lg:leading-[24px]">
          {c.hub.cachedGuidance}
        </p>
        <div className="mt-[20px] grid gap-[12px] lg:mt-[14px] lg:grid-cols-[500px_1fr] lg:gap-6">
          {popular.map((article) => (
            <KnowledgeTileCard
              key={article.id}
              to={`/worker/knowledge/article/${article.id}?state=offline`}
              icon={Download}
              mobileIcon={FileText}
              twoLineTitle
              title={article.title}
              meta={c.hub.cachedArticle}
              className="min-h-[108px] lg:min-h-[130px]"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1040px] pt-[20px] lg:pt-[16px]">
      {header(c.hub.subtitle, "min-h-[138px]")}

      <Link
        to="/worker/knowledge/search"
        className="flex h-[52px] items-center gap-[12px] rounded-[14px] border border-lp-line bg-white px-[13px] hover:border-lp-green lg:mt-[38px] lg:h-[54px] lg:gap-0 lg:rounded-[12px] lg:px-[17px]"
      >
        <Search size={20} className="shrink-0 text-lp-muted lg:hidden" />
        <span className="truncate text-[12px] text-[#0e1f18] lg:text-[14px]">
          {c.hub.searchPlaceholder}
        </span>
      </Link>

      <div className="mt-[22px] grid gap-[12px] lg:mt-[28px] lg:grid-cols-[500px_1fr] lg:gap-6">
        <KnowledgeTileCard
          to="/worker/knowledge/ask"
          icon={QuestionBubbleIcon}
          mobileIcon={CircleHelp}
          title={c.hub.askTitle}
          meta={c.hub.askBody}
          chevron
          className="min-h-[86px] lg:min-h-[130px]"
        />
        <KnowledgeTileCard
          to="/worker/knowledge/questions"
          icon={List}
          title={c.hub.myQuestionsTitle}
          meta={c.hub.myQuestionsBody}
          chevron
          className="min-h-[86px] lg:min-h-[130px]"
        />
      </div>

      <p className="mt-[28px] text-[10px] font-semibold text-ink-muted lg:mt-[38px] lg:text-[11px] lg:leading-[24px] lg:text-lp-green">
        {c.hub.popularGuidance}
      </p>
      <div className="mt-[10px] grid gap-[12px] lg:mt-[14px] lg:grid-cols-[500px_1fr] lg:gap-6">
        {popular.map((article) => (
          <KnowledgeTileCard
            key={article.id}
            to={`/worker/knowledge/article/${article.id}`}
            icon={ArrowRight}
            mobileIcon={FileText}
            twoLineTitle
            title={article.title}
            meta={`${c.searchCategory[article.categoryKey]} · ${c.updatedMeta(
              formatMonthYear(article.updatedMonth, language),
            )}`}
            className="min-h-[108px] lg:min-h-[122px]"
          />
        ))}
      </div>

      <div className="mt-[22px] lg:mt-[28px] lg:flex lg:min-h-[72px] lg:items-center lg:rounded-[12px] lg:bg-lp-tint lg:px-[18px] lg:py-3">
        <p className="text-[11px] text-lp-muted lg:text-[13px]">
          {c.hub.privacyFooter}
        </p>
      </div>
    </div>
  );
}
