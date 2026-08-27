import {
  Building2,
  Eye,
  Languages,
  Repeat,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { useSectionCopy } from "@/i18n/copy";
import { ORGANIZATIONS_COPY } from "../organizations.copy";

const ICONS: LucideIcon[] = [Building2, Languages, Repeat, Eye, Sparkles];

/**
 * Five reasons an organization adopts EMENDA. Squarer and more sober than the
 * consumer pages — this is the one audience reading it as a decision rather
 * than a discovery.
 */
export function ValueGrid() {
  const c = useSectionCopy(ORGANIZATIONS_COPY);

  return (
    <Section dataSection="organizations-values" className="bg-lp-bg">
      <SectionHeading
        eyebrow={c.values.eyebrow}
        title={c.values.title}
        body={c.values.body}
      />

      {/* Three across, then two across — five items in a three-column grid
          would leave a hole in the second row. */}
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {c.values.items.map((item, index) => {
          const Icon = ICONS[index];
          return (
            <Reveal
              key={item.title}
              delay={(index % 3) * 70}
              className={`h-full ${index < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <article className="flex h-full flex-col rounded-[22px] border border-lp-line bg-white p-7 shadow-lp-sm">
                <span className="flex size-11 items-center justify-center rounded-[14px] bg-lp-mint text-lp-green">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[17px] leading-[1.3] font-semibold text-lp-ink">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.65] text-lp-muted">
                  {item.body}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
