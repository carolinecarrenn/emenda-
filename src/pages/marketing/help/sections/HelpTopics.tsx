import {
  CircleHelp,
  KeyRound,
  Languages,
  LifeBuoy,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { useSectionCopy } from "@/i18n/copy";
import { HELP_COPY } from "../help.copy";

const ICONS: LucideIcon[] = [
  Sparkles,
  CircleHelp,
  KeyRound,
  Languages,
  ShieldCheck,
  LifeBuoy,
];

/**
 * Six doors into the FAQ below. Each is an anchor to its own group rather than
 * a separate page — the answers are short enough that splitting them across
 * six routes would cost more clicks than it saves.
 */
export function HelpTopics() {
  const c = useSectionCopy(HELP_COPY);

  return (
    <Section
      dataSection="help-topics"
      className="border-b border-lp-line bg-white"
    >
      <SectionHeading
        eyebrow={c.topics.eyebrow}
        title={c.topics.title}
        body={c.topics.body}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {c.faq.groups.map((group, index) => {
          const Icon = ICONS[index];
          return (
            <Reveal key={group.id} delay={(index % 3) * 70} className="h-full">
              <a
                href={`#${group.id}`}
                className="flex h-full flex-col rounded-[20px] border border-lp-line bg-lp-tint p-6 transition-all duration-200 ease-standard hover:-translate-y-0.5 hover:border-lp-green/30 hover:shadow-lp-md"
              >
                <span className="flex size-11 items-center justify-center rounded-[14px] bg-white text-lp-green">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <p className="mt-4 text-[16px] font-semibold text-lp-ink">
                  {group.title}
                </p>
                <p className="mt-2 text-[14px] leading-[1.6] text-lp-muted">
                  {group.summary}
                </p>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
