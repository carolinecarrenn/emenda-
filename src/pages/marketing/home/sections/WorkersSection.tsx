import { Check, Users } from "lucide-react";
import { Eyebrow } from "@/components/marketing/Eyebrow";
import { LearnMoreLink } from "@/components/marketing/LearnMoreLink";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { WorkerHomeCard } from "@/components/marketing/mockups/WorkerHomeCard";
import { ReadinessCard } from "@/components/marketing/mockups/ReadinessCard";
import { CareerProfileCard } from "@/components/marketing/mockups/CareerProfileCard";
import { useSectionCopy } from "@/i18n/copy";
import { HOME_COPY } from "../home.copy";

/**
 * The worker's half of the platform, shown with three real surfaces — Home
 * with the EMENDA ID, Japan readiness, and the career profile. No chat here on
 * purpose: this section has to prove that a worker has somewhere to be in
 * EMENDA even on a day they never ask a question.
 */
export function WorkersSection() {
  const c = useSectionCopy(HOME_COPY);

  return (
    <Section
      dataSection="home-workers"
      className="border-y border-lp-line bg-lp-tint"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-16">
        <Reveal>
          <Eyebrow icon={Users}>{c.workers.eyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-[520px] font-display text-[28px] leading-[1.18] font-bold tracking-[-0.02em] text-lp-ink sm:text-[34px] lg:text-[40px]">
            {c.workers.title}
          </h2>
          <p className="mt-4 max-w-[540px] text-[16px] leading-[1.7] text-lp-muted lg:text-[17px]">
            {c.workers.body}
          </p>

          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {c.workers.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-2.5 rounded-[13px] border border-lp-line bg-white px-3.5 py-2.5"
              >
                <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-lp-mint text-lp-green">
                  <Check size={10} strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-[13.5px] leading-[1.4] text-lp-ink">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <LearnMoreLink to="/workers">{c.workers.cta}</LearnMoreLink>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:justify-self-end">
          <div className="mx-auto w-full max-w-[420px] space-y-4">
            <WorkerHomeCard />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <ReadinessCard />
              <CareerProfileCard />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
