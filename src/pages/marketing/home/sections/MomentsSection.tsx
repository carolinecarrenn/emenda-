import {
  Bell,
  Briefcase,
  ClipboardList,
  LifeBuoy,
  Plane,
  Repeat,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { useSectionCopy } from "@/i18n/copy";
import { HOME_COPY } from "../home.copy";

const ICONS: LucideIcon[] = [
  Plane,
  Briefcase,
  ClipboardList,
  Bell,
  LifeBuoy,
  Repeat,
];

/**
 * Six moments in one account's life, in order. The section closes the platform
 * argument by showing continuity: the same EMENDA before arrival, during a
 * shift, and after an issue has been dealt with.
 */
export function MomentsSection() {
  const c = useSectionCopy(HOME_COPY);

  return (
    <Section dataSection="home-moments" className="bg-lp-bg">
      <SectionHeading
        eyebrow={c.moments.eyebrow}
        title={c.moments.title}
        body={c.moments.body}
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {c.moments.cards.map((card, index) => {
          const Icon = ICONS[index];
          return (
            <Reveal key={card.title} delay={(index % 3) * 70} className="h-full">
              <article className="flex h-full flex-col rounded-[22px] border border-lp-line bg-white p-6 shadow-lp-sm transition-shadow duration-200 ease-standard hover:shadow-lp-md">
                <span className="flex size-11 items-center justify-center rounded-[14px] bg-lp-mint text-lp-green">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[17px] leading-[1.3] font-semibold text-lp-ink">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-[1.65] text-lp-muted">
                  {card.body}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
