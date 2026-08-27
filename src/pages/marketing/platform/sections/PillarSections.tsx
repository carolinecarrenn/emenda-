import {
  ClipboardList,
  IdCard,
  MessagesSquare,
  Repeat,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { EmendaIdCard } from "@/components/marketing/mockups/EmendaIdCard";
import { CareerProfileCard } from "@/components/marketing/mockups/CareerProfileCard";
import { ReadinessCard } from "@/components/marketing/mockups/ReadinessCard";
import { DailyReportCard } from "@/components/marketing/mockups/DailyReportCard";
import { ReportReviewCard } from "@/components/marketing/mockups/ReportReviewCard";
import { NotificationsCard } from "@/components/marketing/mockups/NotificationsCard";
import { LanguageListCard } from "@/components/marketing/mockups/LanguageListCard";
import { AssistantConversation } from "@/components/marketing/mockups/AssistantConversation";
import { LifecycleTrail } from "@/components/marketing/mockups/LifecycleTrail";
import { useSectionCopy } from "@/i18n/copy";
import { PLATFORM_COPY } from "../platform.copy";

const ICONS: LucideIcon[] = [
  IdCard,
  ClipboardList,
  MessagesSquare,
  Sparkles,
  Repeat,
];

/**
 * The five pillars, one block each: what the pillar is for, the modules inside
 * it, and the real surfaces that make it up. Every pillar carries a product
 * still — including Support, where the assistant finally appears at full size,
 * as one of five pillars rather than as the product.
 */
export function PillarSections() {
  const c = useSectionCopy(PLATFORM_COPY);

  const visuals: ReactNode[] = [
    <div key="identity" className="space-y-4">
      <EmendaIdCard />
      <CareerProfileCard />
      <ReadinessCard />
    </div>,
    <div key="work" className="space-y-4">
      <DailyReportCard />
      <ReportReviewCard />
    </div>,
    <NotificationsCard key="communication" />,
    <div key="support" className="space-y-4">
      <AssistantConversation />
      <LanguageListCard />
    </div>,
    <LifecycleTrail key="continuity" />,
  ];

  return (
    <Section dataSection="platform-pillars" className="bg-lp-bg">
      <SectionHeading
        eyebrow={c.pillars.eyebrow}
        title={c.pillars.title}
        body={c.pillars.body}
      />

      <div className="mt-16 space-y-16 lg:space-y-24">
        {c.pillars.items.map((pillar, index) => {
          const Icon = ICONS[index];
          const flipped = index % 2 === 1;
          return (
            <Reveal
              key={pillar.id}
              id={pillar.id}
              className="grid scroll-mt-28 items-start gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={`min-w-0 ${flipped ? "lg:order-2 lg:pl-4" : "lg:pr-4"}`}
              >
                <span className="flex size-12 items-center justify-center rounded-[15px] bg-lp-mint text-lp-green">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-[24px] leading-[1.25] font-bold tracking-[-0.015em] text-lp-ink lg:text-[30px]">
                  {pillar.title}
                </h3>
                <p className="mt-4 max-w-[520px] text-[15.5px] leading-[1.7] text-lp-muted lg:text-[16.5px]">
                  {pillar.body}
                </p>

                <ul className="mt-7 space-y-2.5">
                  {pillar.modules.map((module) => (
                    <li
                      key={module.title}
                      className="rounded-[16px] border border-lp-line bg-white px-4 py-3.5"
                    >
                      <p className="text-[14.5px] font-semibold text-lp-ink">
                        {module.title}
                      </p>
                      <p className="mt-1 text-[13.5px] leading-[1.55] text-lp-muted">
                        {module.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`min-w-0 ${flipped ? "lg:order-1" : ""}`}>
                <div className="mx-auto w-full max-w-[420px]">
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
