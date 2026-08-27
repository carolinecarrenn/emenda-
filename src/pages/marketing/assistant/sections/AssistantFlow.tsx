import {
  ArrowRight,
  CircleArrowRight,
  Repeat,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { useSectionCopy } from "@/i18n/copy";
import { ASSISTANT_PAGE_COPY } from "../assistant.copy";

const ICONS: LucideIcon[] = [Search, Sparkles, CircleArrowRight, Repeat];

/** Discover → Understand → Act → Follow up. Four steps, with the arrow between
 *  them stopping at the last one — the flow has an end, which is the claim. */
export function AssistantFlow() {
  const c = useSectionCopy(ASSISTANT_PAGE_COPY);

  return (
    <Section
      dataSection="assistant-flow"
      className="border-y border-lp-line bg-lp-tint"
    >
      <SectionHeading
        eyebrow={c.flow.eyebrow}
        title={c.flow.title}
        body={c.flow.body}
      />

      <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {c.flow.steps.map((step, index) => {
          const Icon = ICONS[index];
          return (
            <Reveal
              key={step.title}
              delay={index * 70}
              className="relative h-full"
            >
              <li className="flex h-full flex-col rounded-[20px] border border-lp-line bg-white p-6 shadow-lp-sm">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-10 items-center justify-center rounded-[13px] bg-lp-green text-white">
                    <Icon size={18} strokeWidth={1.85} aria-hidden="true" />
                  </span>
                  <span className="font-display text-[12px] font-bold tracking-[0.08em] text-lp-green">
                    {`0${index + 1}`}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[18px] font-bold tracking-[-0.01em] text-lp-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-lp-muted">
                  {step.body}
                </p>
              </li>

              {index < 3 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 -right-[19px] z-10 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full border border-lp-line bg-white text-lp-green lg:flex"
                >
                  <ArrowRight size={14} strokeWidth={2.2} />
                </span>
              ) : null}
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
