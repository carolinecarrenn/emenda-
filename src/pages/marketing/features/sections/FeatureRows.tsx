import {
  CircleArrowRight,
  Compass,
  Languages,
  Mic,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { AssistantConversation } from "@/components/marketing/mockups/AssistantConversation";
import { LanguageListCard } from "@/components/marketing/mockups/LanguageListCard";
import { VoiceCard } from "@/components/marketing/mockups/VoiceCard";
import { ActionListCard } from "@/components/marketing/mockups/ActionListCard";
import { ContextCard } from "@/components/marketing/mockups/ContextCard";
import { useSectionCopy } from "@/i18n/copy";
import { FEATURES_COPY } from "../features.copy";

const ICONS: LucideIcon[] = [
  Sparkles,
  Languages,
  Mic,
  CircleArrowRight,
  Compass,
];

/**
 * The five core capabilities, one row each: headline, one short explanation,
 * and the actual UI beside it. Rows alternate sides on desktop so the page
 * scans as a rhythm rather than a stack of identical blocks.
 */
export function FeatureRows() {
  const c = useSectionCopy(FEATURES_COPY);

  const visuals: ReactNode[] = [
    <AssistantConversation key="assistant" />,
    <LanguageListCard key="language" note={c.detailed.items[1].note} />,
    <VoiceCard key="voice" />,
    <ActionListCard key="actions" />,
    <ContextCard key="context" />,
  ];

  return (
    <Section dataSection="features-core" className="bg-lp-bg">
      <SectionHeading
        eyebrow={c.detailed.eyebrow}
        title={c.detailed.title}
        body={c.detailed.body}
      />

      <div className="mt-16 space-y-16 lg:space-y-24">
        {c.detailed.items.map((item, index) => {
          const Icon = ICONS[index];
          const flipped = index % 2 === 1;
          return (
            <Reveal
              key={item.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={`min-w-0 ${flipped ? "lg:order-2 lg:pl-4" : "lg:pr-4"}`}
              >
                <span className="flex size-12 items-center justify-center rounded-[15px] bg-lp-mint text-lp-green">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-[24px] leading-[1.25] font-bold tracking-[-0.015em] text-lp-ink lg:text-[30px]">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-[520px] text-[15.5px] leading-[1.7] text-lp-muted lg:text-[16.5px]">
                  {item.body}
                </p>
                <p className="mt-5 inline-flex rounded-full border border-lp-line bg-white px-3.5 py-1.5 text-[12.5px] font-semibold text-lp-green">
                  {item.note}
                </p>
              </div>

              <div className={`min-w-0 ${flipped ? "lg:order-1" : ""}`}>
                <div className="mx-auto w-full max-w-[440px]">
                  {visuals[index]}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
