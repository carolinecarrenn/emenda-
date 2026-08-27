import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, FileText, Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { KNOWLEDGE_COPY } from "./knowledge.copy";
import {
  DEFAULT_SEARCH_QUERY,
  searchKnowledgeArticles,
} from "./knowledgeMock";
import { EmptyStateCard } from "./sections/EmptyStateCard";
import { KnowledgeButton } from "./sections/KnowledgeButton";
import { KnowledgeHeader } from "./sections/KnowledgeHeader";
import { KnowledgeTileCard } from "./sections/KnowledgeTileCard";
import { OfflineBanner } from "./sections/OfflineBanner";
import { SearchField } from "./sections/SearchField";
import { SkeletonBlock } from "./sections/SkeletonBlock";

/** Search Knowledge (Figma W-42 base · W-42A searching · W-42B results ·
 *  W-42C no results · W-42D offline; desktop WD-42A–D). Mobile stacks the
 *  search field over a full-width Search button; once a search has run the
 *  mobile mocks show only the outcome, while desktop keeps the field beside
 *  the button on every state. */
export function SearchKnowledgePage() {
  const state = useScreenState();
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  /* W-42 shows the base screen with a query already typed in the field, so
     the untouched input seeds from the mock query and Search submits it. */
  const [input, setInput] = useState(query || DEFAULT_SEARCH_QUERY);
  /* Submitting runs through W-42A "Searching" for a beat before W-42B/C, so
     the searching state is reachable by pressing Search — not only through
     ?state=searching. */
  const [pending, setPending] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const c = useSectionCopy(KNOWLEDGE_COPY);

  const searching = state === "searching" || pending;
  const offline = state === "offline";
  const forcedNoResults = state === "no-results";

  const effectiveQuery = forcedNoResults
    ? query || DEFAULT_SEARCH_QUERY
    : query;
  const results =
    !searching && !offline && !forcedNoResults && effectiveQuery !== ""
      ? searchKnowledgeArticles(effectiveQuery)
      : [];
  const hasSearched = effectiveQuery !== "" && !searching && !offline;
  const noResults = hasSearched && (forcedNoResults || results.length === 0);

  /* W-42C gives the no-results screen its own headline and subtitle rather
     than reusing the "Search results" pair. */
  const title = offline
    ? c.search.baseTitle
    : noResults
      ? c.search.noMatchTitle
      : hasSearched
        ? c.search.resultsTitle
        : c.search.baseTitle;
  const subtitle = offline
    ? c.search.offlineSubtitle
    : searching
      ? c.search.searchingSubtitle
      : noResults
        ? c.search.noMatchSubtitle
        : hasSearched
          ? c.search.resultsFor(results.length, effectiveQuery)
          : c.search.baseSubtitle;

  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = input.trim();
    if (next === "" || pending) return;
    setPending(true);
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      setPending(false);
      setParams({ q: next });
    }, 450);
  };

  /* Every state parks its first body element on the y the mock gives it, so
     the header block carries the mobile reserve instead of each element
     carrying a bespoke top margin. */
  const headerReserve = offline
    ? "min-h-[146px]"
    : noResults
      ? "min-h-[156px]"
      : hasSearched
        ? "min-h-[142px]"
        : "min-h-[138px]";

  return (
    <div className="max-w-[1040px] pt-[20px] lg:pt-[16px]">
      <KnowledgeHeader
        to="/worker/knowledge"
        crumb={c.crumbKnowledge}
        title={title}
        subtitle={subtitle}
        className={headerReserve}
      />

      {offline ? (
        <>
          <OfflineBanner
            className="lg:mt-[46px]"
            message={c.search.offlineBanner}
          />
          <KnowledgeButton
            to="/worker/knowledge"
            variant="secondary"
            className="mt-[22px] lg:mt-[32px] lg:h-[44px] lg:w-[260px]"
          >
            {c.search.backToKnowledge}
          </KnowledgeButton>
        </>
      ) : (
        <>
          <form
            onSubmit={submitSearch}
            className={`flex flex-col gap-[20px] lg:mt-[40px] lg:flex-row ${
              hasSearched ? "hidden lg:flex" : ""
            }`}
          >
            <SearchField
              value={input}
              placeholder={c.hub.searchPlaceholder}
              onChange={setInput}
            />
            {/* W-42A drops the Search button while the query runs; WD-42A
                keeps it disabled beside the field. */}
            <button
              type="submit"
              disabled={searching}
              className={`h-[48px] w-full shrink-0 rounded-[14px] border border-brand bg-brand text-[12px] font-semibold text-white lg:h-[54px] lg:w-[160px] lg:rounded-[10px] lg:border-lp-button lg:bg-lp-button lg:text-[13px] ${
                searching
                  ? "hidden cursor-default lg:block"
                  : "hover:bg-lp-green"
              }`}
            >
              {c.search.searchButton}
            </button>
          </form>

          {searching && (
            <div className="mt-[26px] space-y-[26px] lg:mt-[46px] lg:space-y-[24px]">
              <SkeletonBlock className="h-[92px]" />
              <SkeletonBlock className="h-[92px]" />
              <SkeletonBlock className="h-[92px]" />
            </div>
          )}

          {/* The mobile mock W-42 has no keyword tip; WD-42 keeps it. */}
          {!searching && !hasSearched && (
            <div className="mt-[46px] hidden min-h-[120px] rounded-[16px] bg-lp-tint p-[20px] lg:block lg:pt-[22px]">
              <p className="text-[15px] font-semibold text-[#0e1f18]">
                {c.search.tipTitle}
              </p>
              <p className="mt-[8px] text-[13px] text-lp-muted lg:mt-[21px]">
                {c.search.tipBody}
              </p>
            </div>
          )}

          {!searching && hasSearched && !noResults && (
            <>
              <div className="space-y-[12px] lg:mt-[40px] lg:space-y-[20px]">
                {results.map((article) => (
                  <KnowledgeTileCard
                    key={article.id}
                    to={`/worker/knowledge/article/${article.id}`}
                    icon={ArrowRight}
                    mobileIcon={FileText}
                    twoLineTitle
                    title={article.title}
                    meta={`${c.searchCategory[article.categoryKey]} · ${c.officialGuidance}`}
                    className="min-h-[108px] lg:h-[96px] lg:min-h-0"
                  />
                ))}
              </div>
              <KnowledgeButton
                to="/worker/knowledge/ask"
                variant="secondary"
                className="mt-[30px] lg:mt-[40px] lg:h-[44px] lg:w-[260px]"
              >
                {c.search.askEscape}
              </KnowledgeButton>
            </>
          )}

          {!searching && noResults && (
            <div className="lg:mt-[56px]">
              {/* W-42C pairs the empty result with the search glyph inside a
                  174px white card, then a filled Ask-a-question button. */}
              <EmptyStateCard
                icon={Search}
                title={c.search.noResultsTitle}
                body={c.search.noResultsBody}
                className="min-h-[174px] lg:h-[210px] lg:min-h-0 lg:px-0 lg:py-0"
                iconClassName="lg:mt-[38px]"
                titleClassName="mt-[26px] lg:mt-[27px]"
                bodyClassName="mt-[8px] lg:mt-[20px] lg:max-w-[680px]"
              />
              <KnowledgeButton
                to="/worker/knowledge/ask"
                className="mx-auto mt-[24px] lg:mt-[26px] lg:w-[300px]"
              >
                {c.questions.askButton}
              </KnowledgeButton>
            </div>
          )}
        </>
      )}
    </div>
  );
}
