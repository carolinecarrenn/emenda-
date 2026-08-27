import { Check, Lock, MonitorCheck } from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { ManagerOverviewCard } from "@/components/marketing/mockups/ManagerOverviewCard";
import { ReportReviewCard } from "@/components/marketing/mockups/ReportReviewCard";
import { LifecycleTrail } from "@/components/marketing/mockups/LifecycleTrail";
import { useSectionCopy } from "@/i18n/copy";
import { ORGANIZATIONS_COPY } from "../organizations.copy";

/**
 * The manager's actual surfaces. This section carries the page's honesty
 * burden: it shows real counts and a real review action, and states plainly
 * underneath that this is coordination, not monitoring. Employers deserve to
 * see the product; workers deserve the framing to be true.
 */
export function ManagerSurfaces() {
  const c = useSectionCopy(ORGANIZATIONS_COPY);

  return (
    <Section
      dataSection="organizations-surfaces"
      className="border-y border-lp-line bg-lp-tint"
    >
      <SectionHeading
        eyebrow={c.surfaces.eyebrow}
        eyebrowIcon={MonitorCheck}
        title={c.surfaces.title}
        body={c.surfaces.body}
      />

      <div className="mt-14 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16">
        <Reveal>
          <ul className="grid gap-2 sm:grid-cols-2">
            {c.surfaces.capabilities.map((capability) => (
              <li
                key={capability}
                className="flex items-center gap-2.5 rounded-[13px] border border-lp-line bg-white px-4 py-3"
              >
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-lp-mint text-lp-green">
                  <Check size={11} strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-[14px] leading-[1.4] text-lp-ink">
                  {capability}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 flex items-start gap-3 rounded-[18px] border border-lp-line bg-white px-5 py-4 text-[14px] leading-[1.65] text-lp-ink">
            <Lock
              size={16}
              strokeWidth={1.85}
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-lp-green"
            />
            {c.surfaces.note}
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:justify-self-end">
          <div className="mx-auto w-full max-w-[420px] space-y-4">
            <ManagerOverviewCard />
            <ReportReviewCard />
            <LifecycleTrail orientation="horizontal" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
