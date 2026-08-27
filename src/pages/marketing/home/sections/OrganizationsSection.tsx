import { Building2, Check } from "lucide-react";
import { Eyebrow } from "@/components/marketing/Eyebrow";
import { LearnMoreLink } from "@/components/marketing/LearnMoreLink";
import { Reveal } from "@/components/marketing/Reveal";
import { Section } from "@/components/marketing/Section";
import { ManagerOverviewCard } from "@/components/marketing/mockups/ManagerOverviewCard";
import { ReportReviewCard } from "@/components/marketing/mockups/ReportReviewCard";
import { useSectionCopy } from "@/i18n/copy";
import { HOME_COPY } from "../home.copy";

/**
 * The organization's half. Deliberately framed as coordination and
 * follow-through, never as monitoring people: the manager still shows counts
 * of work reaching its end, and the review card offers a reply, not a verdict
 * on a person.
 */
export function OrganizationsSection() {
  const c = useSectionCopy(HOME_COPY);

  return (
    <Section dataSection="home-organizations" className="bg-lp-bg">
      <div className="grid items-center gap-12 lg:grid-cols-[440px_minmax(0,1fr)] lg:gap-16">
        <Reveal delay={120} className="lg:order-1">
          <div className="mx-auto w-full max-w-[420px] space-y-4">
            <ManagerOverviewCard />
            <ReportReviewCard />
          </div>
        </Reveal>

        <Reveal className="lg:order-2">
          <Eyebrow icon={Building2}>{c.organizations.eyebrow}</Eyebrow>
          <h2 className="mt-5 max-w-[520px] font-display text-[28px] leading-[1.18] font-bold tracking-[-0.02em] text-lp-ink sm:text-[34px] lg:text-[40px]">
            {c.organizations.title}
          </h2>
          <p className="mt-4 max-w-[540px] text-[16px] leading-[1.7] text-lp-muted lg:text-[17px]">
            {c.organizations.body}
          </p>

          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {c.organizations.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-center gap-2.5 rounded-[13px] border border-lp-line bg-white px-3.5 py-2.5"
              >
                <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-lp-mint text-lp-green">
                  <Check size={10} strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-[13.5px] leading-[1.4] text-lp-ink">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <LearnMoreLink to="/organizations">
              {c.organizations.cta}
            </LearnMoreLink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
