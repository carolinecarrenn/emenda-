import {
  FileText,
  Repeat,
  ShieldCheck,
  Waypoints,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { useSectionCopy } from "@/i18n/copy";
import { FEATURES_COPY } from "../features.copy";

const ICONS: LucideIcon[] = [Waypoints, Repeat, ShieldCheck, FileText];

/**
 * The remaining capabilities, catalogued rather than argued. They are on the
 * page because the feature list has to be complete — the case for follow-up
 * and permissions is made on the homepage, and repeating it here would be the
 * duplication the site is structured to avoid.
 */
export function FeatureGrid() {
  const c = useSectionCopy(FEATURES_COPY);

  return (
    <Section
      dataSection="features-more"
      className="border-y border-lp-line bg-lp-tint"
    >
      <SectionHeading
        eyebrow={c.compact.eyebrow}
        title={c.compact.title}
        body={c.compact.body}
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {c.compact.items.map((item, index) => {
          const Icon = ICONS[index];
          return (
            <Reveal key={item.title} delay={(index % 2) * 70} className="h-full">
              <article className="flex h-full gap-4 rounded-[22px] border border-lp-line bg-white p-6 shadow-lp-sm lg:p-7">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-lp-mint text-lp-green">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[17px] leading-[1.3] font-semibold text-lp-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-[1.65] text-lp-muted">
                    {item.body}
                  </p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
