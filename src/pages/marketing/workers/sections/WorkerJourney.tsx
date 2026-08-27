import { Check, Route } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { EmendaIdCard } from "@/components/marketing/mockups/EmendaIdCard";
import { CareerProfileCard } from "@/components/marketing/mockups/CareerProfileCard";
import { ReadinessCard } from "@/components/marketing/mockups/ReadinessCard";
import { WorkerHomeCard } from "@/components/marketing/mockups/WorkerHomeCard";
import { DailyReportCard } from "@/components/marketing/mockups/DailyReportCard";
import { NotificationsCard } from "@/components/marketing/mockups/NotificationsCard";
import { AssistantConversation } from "@/components/marketing/mockups/AssistantConversation";
import { LifecycleTrail } from "@/components/marketing/mockups/LifecycleTrail";
import { useSectionCopy } from "@/i18n/copy";
import { WORKERS_COPY } from "../workers.copy";

/**
 * Six stages down a single spine, each with the real surface that serves it.
 * The assistant appears at stage five of six — the same position it holds in
 * a worker's actual week, which is the honest way to show it.
 */
export function WorkerJourney() {
  const c = useSectionCopy(WORKERS_COPY);

  const visuals: ReactNode[] = [
    <div key="identity" className="space-y-4">
      <EmendaIdCard />
      <CareerProfileCard />
    </div>,
    <ReadinessCard key="readiness" />,
    <WorkerHomeCard key="home" />,
    <div key="work" className="space-y-4">
      <DailyReportCard />
      <NotificationsCard />
    </div>,
    <AssistantConversation key="support" />,
    <LifecycleTrail key="outcome" />,
  ];

  return (
    <Section dataSection="workers-journey" className="bg-lp-bg">
      <SectionHeading
        eyebrow={c.journey.eyebrow}
        eyebrowIcon={Route}
        title={c.journey.title}
        body={c.journey.body}
      />

      <ol className="relative mt-16 space-y-14 lg:space-y-20">
        <span
          aria-hidden="true"
          className="absolute top-4 bottom-16 left-[27px] hidden w-px bg-lp-line lg:block"
        />

        {c.journey.stages.map((stage, index) => (
          <li key={stage.title}>
            <Reveal className="grid gap-8 lg:grid-cols-[56px_minmax(0,1fr)_minmax(0,400px)] lg:items-start lg:gap-10">
              <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-[18px] bg-lp-green font-display text-[16px] font-bold text-white">
                {`0${index + 1}`}
              </span>

              <div className="min-w-0">
                <h3 className="font-display text-[22px] leading-[1.25] font-bold tracking-[-0.015em] text-lp-ink lg:text-[26px]">
                  {stage.title}
                </h3>
                <p className="mt-3 max-w-[520px] text-[15.5px] leading-[1.7] text-lp-muted">
                  {stage.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {stage.items.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-lp-line bg-white px-3.5 py-2 text-[13px] text-lp-ink"
                    >
                      <Check
                        size={12}
                        strokeWidth={2.6}
                        aria-hidden="true"
                        className="text-lp-green"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-0">{visuals[index]}</div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
