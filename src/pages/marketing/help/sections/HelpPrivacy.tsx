import { Check, ShieldCheck } from "lucide-react";
import { Eyebrow } from "@/components/marketing/Eyebrow";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { PermissionCard } from "@/components/marketing/mockups/PermissionCard";
import { useSectionCopy } from "@/i18n/copy";
import { HELP_COPY } from "../help.copy";

/**
 * The privacy explanation the homepage's trust block links to. It is the one
 * place on the site that states the permission rules in full — kept plain and
 * reassuring rather than legal, because this is where a worried person lands.
 */
export function HelpPrivacy() {
  const c = useSectionCopy(HELP_COPY);

  return (
    <Section
      id="privacy"
      dataSection="help-privacy"
      className="border-y border-lp-line bg-lp-tint"
      containerClassName="scroll-mt-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
        <Reveal>
          <Eyebrow icon={ShieldCheck}>{c.privacy.eyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-[520px] font-display text-[26px] leading-[1.2] font-bold tracking-[-0.02em] text-lp-ink sm:text-[32px] lg:text-[38px]">
            {c.privacy.title}
          </h2>
          <p className="mt-4 max-w-[540px] text-[16px] leading-[1.7] text-lp-muted lg:text-[17px]">
            {c.privacy.body}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {c.privacy.points.map((point) => (
              <li
                key={point.title}
                className="rounded-[18px] border border-lp-line bg-white p-5"
              >
                <p className="flex items-center gap-2 text-[15px] font-semibold text-lp-ink">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-lp-mint text-lp-green">
                    <Check size={12} strokeWidth={3} aria-hidden="true" />
                  </span>
                  {point.title}
                </p>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-lp-muted">
                  {point.body}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={110} className="lg:justify-self-end">
          <div className="mx-auto flex w-full justify-center lg:justify-end">
            <PermissionCard />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
