import { ArrowRight, Building2, LifeBuoy, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { useSectionCopy } from "@/i18n/copy";
import { HELP_COPY } from "../help.copy";

const ICONS: LucideIcon[] = [Sparkles, LifeBuoy, Building2];
const DESTINATIONS = ["/signin", "/signin", "/organizations"];

/**
 * Where to go when the FAQ is not enough. Ordered by how fast each route
 * actually resolves a problem, not by how much we would like to be contacted.
 */
export function HelpContact() {
  const c = useSectionCopy(HELP_COPY);

  return (
    <Section
      id="contact"
      dataSection="help-contact"
      className="bg-lp-bg"
      containerClassName="scroll-mt-24"
    >
      <SectionHeading
        eyebrow={c.contact.eyebrow}
        title={c.contact.title}
        body={c.contact.body}
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {c.contact.channels.map((channel, index) => {
          const Icon = ICONS[index];
          return (
            <Reveal key={channel.title} delay={index * 70} className="h-full">
              <article className="flex h-full flex-col rounded-[22px] border border-lp-line bg-white p-7 shadow-lp-sm">
                <span className="flex size-11 items-center justify-center rounded-[14px] bg-lp-mint text-lp-green">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-[17px] leading-[1.3] font-semibold text-lp-ink">
                  {channel.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-[1.65] text-lp-muted">
                  {channel.body}
                </p>
                <div className="mt-auto pt-6">
                  <Link
                    to={DESTINATIONS[index]}
                    className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-lp-green transition-colors duration-150 hover:text-lp-deep"
                  >
                    {channel.action}
                    <ArrowRight
                      size={15}
                      strokeWidth={2.2}
                      aria-hidden="true"
                      className="transition-transform duration-200 ease-standard group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
