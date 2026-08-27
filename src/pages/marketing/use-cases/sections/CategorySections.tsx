import {
  Bell,
  Briefcase,
  Check,
  ClipboardList,
  LifeBuoy,
  Plane,
  Repeat,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { useSectionCopy } from "@/i18n/copy";
import { USE_CASES_COPY } from "../useCases.copy";
import { ScenarioFlow } from "./ScenarioFlow";

const ICONS: LucideIcon[] = [
  Plane,
  Briefcase,
  ClipboardList,
  Users,
  LifeBuoy,
  Repeat,
  Bell,
];

/**
 * Seven scenarios, alternating sides. Each carries an actor badge in the
 * heading so a visitor can see at a glance that the page is not written
 * entirely from the worker's point of view — three of the seven involve the
 * organization, and that balance is the argument.
 */
export function CategorySections() {
  const c = useSectionCopy(USE_CASES_COPY);

  return (
    <>
      {c.categories.map((category, index) => {
        const Icon = ICONS[index];
        const flipped = index % 2 === 1;
        return (
          <Section
            key={category.id}
            id={category.id}
            dataSection={`use-cases-${category.id}`}
            className={
              flipped ? "border-y border-lp-line bg-lp-tint" : "bg-lp-bg"
            }
            padding="py-16 lg:py-20"
          >
            <Reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div
                className={`min-w-0 ${flipped ? "lg:order-2 lg:pl-4" : "lg:pr-4"}`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-12 items-center justify-center rounded-[15px] bg-lp-mint text-lp-green">
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-lp-line bg-white px-3 py-1.5 text-[11px] font-semibold text-lp-green">
                    {c.actorLabels[category.actor]}
                  </span>
                </div>

                <h2 className="mt-5 font-display text-[24px] leading-[1.25] font-bold tracking-[-0.015em] text-lp-ink lg:text-[30px]">
                  {category.title}
                </h2>
                <p className="mt-4 max-w-[520px] text-[15.5px] leading-[1.7] text-lp-muted lg:text-[16.5px]">
                  {category.body}
                </p>

                <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                  {category.examples.map((example) => (
                    <li
                      key={example}
                      className="flex items-start gap-2.5 rounded-[12px] border border-lp-line bg-white px-3.5 py-2.5"
                    >
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-lp-mint text-lp-green">
                        <Check size={10} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="text-[13.5px] leading-[1.45] text-lp-ink">
                        {example}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`min-w-0 ${flipped ? "lg:order-1" : ""}`}>
                <div className="mx-auto w-full max-w-[440px]">
                  <ScenarioFlow steps={category.flow} />
                </div>
              </div>
            </Reveal>
          </Section>
        );
      })}
    </>
  );
}
