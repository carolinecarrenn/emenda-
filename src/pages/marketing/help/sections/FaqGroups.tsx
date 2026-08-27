import { useMemo } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { useSectionCopy } from "@/i18n/copy";
import { HELP_COPY } from "../help.copy";

/**
 * The FAQ, grouped by topic and filtered live by the hero search. Built on
 * native <details> so a question can be opened without JavaScript state, stays
 * keyboard-operable for free, and is findable by the browser's own in-page
 * search — which is what people reach for on a help page.
 *
 * While a search is active every match is forced open: hiding the answer
 * behind another click after someone has already told you what they want is
 * the wrong side of helpful.
 */
export function FaqGroups({
  query,
  onClearSearch,
}: {
  query: string;
  onClearSearch: () => void;
}) {
  const c = useSectionCopy(HELP_COPY);
  const normalized = query.trim().toLowerCase();

  const groups = useMemo(() => {
    if (!normalized) return c.faq.groups;
    return c.faq.groups
      .map((group) => ({
        ...group,
        items: group.items.filter(
          (item) =>
            item.q.toLowerCase().includes(normalized) ||
            item.a.toLowerCase().includes(normalized),
        ),
      }))
      .filter((group) => group.items.length > 0);
  }, [c.faq.groups, normalized]);

  const matchCount = groups.reduce(
    (total, group) => total + group.items.length,
    0,
  );

  return (
    <Section id="faq" dataSection="help-faq" className="bg-lp-bg">
      <SectionHeading
        eyebrow={c.faq.eyebrow}
        title={c.faq.title}
        body={c.faq.body}
      />

      {normalized ? (
        <Reveal className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <p className="text-[14px] text-lp-muted" aria-live="polite">
            <span className="font-semibold text-lp-ink">{matchCount}</span>{" "}
            {c.faq.resultsLabel}
          </p>
          <button
            type="button"
            onClick={onClearSearch}
            className="rounded-full border border-lp-line bg-white px-3.5 py-1.5 text-[13px] font-medium text-lp-green transition-colors duration-150 hover:border-lp-green"
          >
            {c.faq.clearSearch}
          </button>
        </Reveal>
      ) : null}

      {groups.length === 0 ? (
        <Reveal className="mx-auto mt-12 max-w-[520px] rounded-[22px] border border-lp-line bg-white p-8 text-center shadow-lp-sm">
          <span className="mx-auto flex size-12 items-center justify-center rounded-[15px] bg-lp-mint text-lp-green">
            <Search size={22} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <p className="mt-5 text-[17px] font-semibold text-lp-ink">
            {c.faq.noResultsTitle}
          </p>
          <p className="mt-2.5 text-[14.5px] leading-[1.65] text-lp-muted">
            {c.faq.noResultsBody}
          </p>
        </Reveal>
      ) : (
        <div className="mx-auto mt-12 max-w-[860px] space-y-12">
          {groups.map((group) => (
            <Reveal key={group.id} id={group.id} className="scroll-mt-28">
              <div className="border-b border-lp-line pb-4">
                <h3 className="font-display text-[21px] font-bold tracking-[-0.01em] text-lp-ink">
                  {group.title}
                </h3>
                <p className="mt-1.5 text-[14px] text-lp-muted">
                  {group.summary}
                </p>
              </div>

              <div className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <details
                    key={item.q}
                    open={Boolean(normalized)}
                    className="group rounded-[18px] border border-lp-line bg-white px-5 py-4 shadow-lp-sm open:shadow-lp-md"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[15.5px] font-semibold text-lp-ink marker:hidden">
                      {item.q}
                      <ChevronDown
                        size={18}
                        strokeWidth={2}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-lp-green transition-transform duration-200 ease-standard group-open:rotate-180"
                      />
                    </summary>
                    <p className="mt-3 max-w-[720px] text-[14.5px] leading-[1.7] text-lp-muted">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
