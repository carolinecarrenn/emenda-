import { Route } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { useSectionCopy } from "@/i18n/copy";
import { HOW_IT_WORKS_COPY } from "../howItWorks.copy";
import { JourneyStepVisual } from "./JourneyStepVisual";

/**
 * The five steps as alternating rows, each with the piece of product that does
 * the work. A continuous rule runs behind the number column on desktop so the
 * five read as one journey rather than five features.
 */
export function JourneySteps() {
  const c = useSectionCopy(HOW_IT_WORKS_COPY);

  return (
    <Section dataSection="how-steps" className="bg-lp-bg">
      <SectionHeading
        eyebrow={c.steps.eyebrow}
        eyebrowIcon={Route}
        title={c.steps.title}
        body={c.steps.body}
      />

      <ol className="relative mt-16 space-y-14 lg:space-y-20">
        <span
          aria-hidden="true"
          className="absolute top-4 bottom-16 left-[27px] hidden w-px bg-lp-line lg:block"
        />

        {c.steps.items.map((step, index) => (
          <li key={step.title}>
            <Reveal className="grid gap-8 lg:grid-cols-[56px_minmax(0,1fr)_minmax(0,420px)] lg:items-start lg:gap-10">
              <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-[18px] bg-lp-green font-display text-[16px] font-bold text-white">
                {`0${index + 1}`}
              </span>

              <div className="min-w-0">
                <span className="inline-flex rounded-full border border-lp-line bg-white px-3 py-1.5 text-[11px] font-semibold text-lp-green">
                  {step.actor}
                </span>
                <h3 className="mt-3 font-display text-[24px] leading-[1.25] font-bold tracking-[-0.015em] text-lp-ink lg:text-[28px]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[520px] text-[15.5px] leading-[1.7] text-lp-muted lg:text-[16px]">
                  {step.body}
                </p>
              </div>

              <div className="min-w-0">
                <JourneyStepVisual index={index} />
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
