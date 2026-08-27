import { ArrowRight, Lock, Users } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { useSectionCopy } from "@/i18n/copy";
import { ORGANIZATIONS_COPY } from "../organizations.copy";

/**
 * Where EMENDA sits in an existing support structure. The privacy line under
 * the three steps is the question every employer asks next, so it is answered
 * before it has to be asked.
 */
export function FitBand() {
  const c = useSectionCopy(ORGANIZATIONS_COPY);

  return (
    <Section
      dataSection="organizations-fit"
      className="border-y border-lp-line bg-lp-tint"
    >
      <SectionHeading
        eyebrow={c.fit.eyebrow}
        eyebrowIcon={Users}
        title={c.fit.title}
        body={c.fit.body}
      />

      <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:gap-6">
        {c.fit.steps.map((step, index) => (
          <Reveal
            key={step.title}
            delay={index * 80}
            className="relative h-full"
          >
            <article className="flex h-full flex-col rounded-[22px] border border-lp-line bg-white p-6 shadow-lp-sm lg:p-7">
              <span className="font-display text-[13px] font-bold tracking-[0.08em] text-lp-green">
                {`0${index + 1}`}
              </span>
              <h3 className="mt-3 font-display text-[19px] font-bold tracking-[-0.01em] text-lp-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-lp-muted">
                {step.body}
              </p>
            </article>

            {index < 2 ? (
              <span
                aria-hidden="true"
                className="absolute top-1/2 -right-[19px] z-10 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full border border-lp-line bg-white text-lp-green sm:flex lg:-right-[27px]"
              >
                <ArrowRight size={14} strokeWidth={2.2} />
              </span>
            ) : null}
          </Reveal>
        ))}
      </div>

      <Reveal delay={220} className="mt-10">
        <p className="mx-auto flex max-w-[640px] items-start gap-3 rounded-[18px] border border-lp-line bg-white px-5 py-4 text-[14.5px] leading-[1.6] text-lp-ink">
          <Lock
            size={16}
            strokeWidth={1.85}
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-lp-green"
          />
          {c.fit.note}
        </p>
      </Reveal>
    </Section>
  );
}
