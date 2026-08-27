import { Compass } from "lucide-react";
import { CtaBand } from "@/components/marketing/CtaBand";
import { PageHero } from "@/components/marketing/PageHero";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { useSectionCopy } from "@/i18n/copy";
import { USE_CASES_COPY } from "./useCases.copy";
import { CategorySections } from "./sections/CategorySections";

/**
 * /use-cases — the scenario page.
 *
 * Scenario-based rather than feature-based: five categories, each with the
 * situations it covers and one story showing what EMENDA actually returns. The
 * homepage previews four of these as cards and links here.
 */
export function UseCasesPage() {
  const c = useSectionCopy(USE_CASES_COPY);

  return (
    <>
      <PageHero
        dataSection="use-cases-hero"
        eyebrow={c.hero.eyebrow}
        eyebrowIcon={Compass}
        title={c.hero.title}
        body={c.hero.body}
      />

      {/* Five long blocks need a way in that is not scrolling. */}
      <Section
        dataSection="use-cases-jump"
        className="border-b border-lp-line bg-white"
        padding="py-8"
      >
        <Reveal className="flex flex-wrap items-center justify-center gap-2.5">
          <span className="text-[12px] font-semibold tracking-[0.1em] text-lp-muted uppercase">
            {c.jumpLabel}
          </span>
          {c.categories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="rounded-full border border-lp-line bg-lp-tint px-4 py-2 text-[13px] font-medium text-lp-green transition-colors duration-150 hover:border-lp-green hover:bg-lp-mint"
            >
              {category.title}
            </a>
          ))}
        </Reveal>
      </Section>

      <CategorySections />

      <CtaBand
        dataSection="use-cases-cta"
        title={c.cta.title}
        body={c.cta.body}
      />
    </>
  );
}
