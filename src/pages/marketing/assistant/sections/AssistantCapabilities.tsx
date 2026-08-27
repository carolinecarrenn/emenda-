import {
  CircleArrowRight,
  Compass,
  FileText,
  Languages,
  MapPin,
  Mic,
  Repeat,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { VoiceCard } from "@/components/marketing/mockups/VoiceCard";
import { LanguageListCard } from "@/components/marketing/mockups/LanguageListCard";
import { ActionListCard } from "@/components/marketing/mockups/ActionListCard";
import { ContextCard } from "@/components/marketing/mockups/ContextCard";
import { useSectionCopy } from "@/i18n/copy";
import { ASSISTANT_PAGE_COPY } from "../assistant.copy";

const ROW_ICONS: LucideIcon[] = [Mic, Languages, CircleArrowRight, Compass];
const GRID_ICONS: LucideIcon[] = [FileText, ShieldCheck, MapPin, Repeat];

/** Four capabilities with their real UI, then four quieter ones as cards. */
export function AssistantCapabilities() {
  const c = useSectionCopy(ASSISTANT_PAGE_COPY);

  const visuals: ReactNode[] = [
    <VoiceCard key="voice" />,
    <LanguageListCard key="lang" note={c.detail.items[1].note} />,
    <ActionListCard key="actions" />,
    <ContextCard key="context" />,
  ];

  return (
    <>
      <Section dataSection="assistant-capabilities" className="bg-lp-bg">
        <SectionHeading
          eyebrow={c.detail.eyebrow}
          title={c.detail.title}
          body={c.detail.body}
        />

        <div className="mt-16 space-y-16 lg:space-y-24">
          {c.detail.items.map((item, index) => {
            const Icon = ROW_ICONS[index];
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
                  <h3 className="mt-5 font-display text-[24px] leading-[1.25] font-bold tracking-[-0.015em] text-lp-ink lg:text-[28px]">
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
                  <div className="mx-auto w-full max-w-[420px]">
                    {visuals[index]}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section
        dataSection="assistant-more"
        className="border-y border-lp-line bg-lp-tint"
      >
        <SectionHeading eyebrow={c.more.eyebrow} title={c.more.title} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {c.more.items.map((item, index) => {
            const Icon = GRID_ICONS[index];
            return (
              <Reveal
                key={item.title}
                delay={(index % 2) * 70}
                className="h-full"
              >
                <article className="flex h-full gap-4 rounded-[22px] border border-lp-line bg-white p-6 shadow-lp-sm">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] bg-lp-mint text-lp-green">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[16.5px] leading-[1.3] font-semibold text-lp-ink">
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
    </>
  );
}
