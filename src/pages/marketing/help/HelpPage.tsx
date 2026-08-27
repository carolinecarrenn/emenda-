import { useState } from "react";
import { LifeBuoy, Search, X } from "lucide-react";
import { Eyebrow } from "@/components/marketing/Eyebrow";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { useSectionCopy } from "@/i18n/copy";
import { HELP_COPY } from "./help.copy";
import { HelpTopics } from "./sections/HelpTopics";
import { FaqGroups } from "./sections/FaqGroups";
import { HelpPrivacy } from "./sections/HelpPrivacy";
import { HelpContact } from "./sections/HelpContact";

/**
 * /help — the support page.
 *
 * The search is real, not decoration: it filters the FAQ below as you type. A
 * help page whose search box does nothing is worse than one without a search
 * box, so it either works or it is not there.
 *
 * Two of its blocks are link targets for the rest of the site — #privacy from
 * the homepage trust block, #contact from the organizations page — so both
 * carry stable ids.
 */
export function HelpPage() {
  const c = useSectionCopy(HELP_COPY);
  const [query, setQuery] = useState("");

  return (
    <>
      <Section
        dataSection="help-hero"
        className="border-b border-lp-line bg-lp-tint"
        padding="py-16 sm:py-20 lg:py-24"
      >
        <Reveal className="mx-auto max-w-[680px] text-center">
          <Eyebrow icon={LifeBuoy}>{c.hero.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-[32px] leading-[1.12] font-bold tracking-[-0.025em] text-lp-ink sm:text-[40px] lg:text-[48px]">
            {c.hero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-[520px] text-[17px] leading-[1.7] text-lp-muted">
            {c.hero.body}
          </p>

          <div className="mx-auto mt-8 flex h-14 max-w-[480px] items-center gap-3 rounded-full border border-lp-line bg-white px-5 shadow-lp-sm focus-within:border-lp-green">
            <Search
              size={18}
              strokeWidth={1.85}
              aria-hidden="true"
              className="shrink-0 text-lp-green"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label={c.hero.searchLabel}
              placeholder={c.hero.searchPlaceholder}
              className="min-w-0 flex-1 border-0 bg-transparent p-0 text-[15px] text-lp-ink outline-none placeholder:text-lp-muted"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label={c.faq.clearSearch}
                className="flex size-7 shrink-0 items-center justify-center rounded-full bg-lp-tint text-lp-muted transition-colors duration-150 hover:text-lp-green"
              >
                <X size={14} strokeWidth={2} aria-hidden="true" />
              </button>
            ) : null}
          </div>
        </Reveal>
      </Section>

      {/* Browsing by topic only helps while the list is intact — once someone
          is searching, the filtered answers are the whole page. */}
      {query.trim() ? null : <HelpTopics />}

      <FaqGroups query={query} onClearSearch={() => setQuery("")} />
      <HelpPrivacy />
      <HelpContact />
    </>
  );
}
