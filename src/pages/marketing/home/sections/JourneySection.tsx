import {
  ClipboardList,
  LifeBuoy,
  MessagesSquare,
  Repeat,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { LearnMoreLink } from "@/components/marketing/LearnMoreLink";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { useSectionCopy } from "@/i18n/copy";
import { HOME_COPY } from "../home.copy";

const ICONS: LucideIcon[] = [
  Workflow,
  ClipboardList,
  MessagesSquare,
  LifeBuoy,
  Repeat,
];

/**
 * Connect → Work → Communicate → Get support → Follow up.
 *
 * Five steps rather than the assistant's three, because the platform's arc is
 * wider than a single question: it starts before anyone asks anything and
 * continues after the answer. "Get support" is one of the five, which is
 * exactly the weight the assistant should carry on this page.
 */
export function JourneySection() {
  const c = useSectionCopy(HOME_COPY);

  return (
    <Section dataSection="home-journey" className="bg-lp-bg">
      <SectionHeading
        eyebrow={c.journey.eyebrow}
        eyebrowIcon={Workflow}
        title={c.journey.title}
        body={c.journey.body}
      />

      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
        {c.journey.steps.map((step, index) => {
          const Icon = ICONS[index];
          return (
            <Reveal
              key={step.title}
              delay={index * 70}
              className="relative h-full"
            >
              <li className="flex h-full flex-col rounded-[20px] border border-lp-line bg-white p-5 shadow-lp-sm lg:p-6">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-[12px] bg-lp-green text-white">
                    <Icon size={16} strokeWidth={1.85} aria-hidden="true" />
                  </span>
                  <span className="font-display text-[12px] font-bold tracking-[0.08em] text-lp-green">
                    {`0${index + 1}`}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[17px] font-bold tracking-[-0.01em] text-lp-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-lp-muted">
                  {step.body}
                </p>
              </li>

              {index < 4 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 -right-[7px] z-10 hidden h-px w-3.5 -translate-y-1/2 bg-lp-line lg:block"
                />
              ) : null}
            </Reveal>
          );
        })}
      </ol>

      <Reveal delay={220} className="mt-12 flex justify-center">
        <LearnMoreLink to="/how-it-works">{c.journey.cta}</LearnMoreLink>
      </Reveal>
    </Section>
  );
}
