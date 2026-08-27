import { useSectionCopy } from "@/i18n/copy";
import { HOME_COPY } from "../home.copy";
import { GreetingHeader } from "./GreetingHeader";

/* WD-18G loading skeleton: H1 falls back to generic "Home" with subtitle
   "Your EMENDA account"; every content card becomes a solid pale-mint
   rounded block (no shimmer) while the "Explore" and "Recent updates"
   headings stay real text. Blocks inherit the card positions and radii. */
export function HomeSkeleton({
  greeting,
  subtitle,
}: {
  greeting: string;
  subtitle: string;
}) {
  const c = useSectionCopy(HOME_COPY);

  return (
    <div className="lg:pt-2">
      <GreetingHeader title={greeting} subtitle={subtitle} />
      <div className="mt-2 flex flex-col gap-2 lg:mt-[43px] lg:flex-row lg:gap-8">
        <div className="flex w-full max-w-[620px] flex-col gap-2 lg:gap-5">
          <div className="h-[96px] rounded-[14px] bg-brand-soft" />
          <div className="h-[128px] rounded-[14px] bg-brand-soft" />
          <div className="h-[88px] rounded-[14px] bg-brand-soft" />
        </div>
        <div className="flex w-full max-w-[460px] flex-col gap-2 lg:gap-[50px]">
          <section>
            <h2 className="text-[14px] leading-[18px] font-semibold text-ink">
              {c.explore.heading}
            </h2>
            <div className="mt-2 h-[146px] rounded-[14px] bg-brand-soft lg:mt-4 lg:h-[196px]" />
          </section>
          <section>
            <h2 className="text-[14px] leading-[18px] font-semibold text-ink">
              {c.updates.heading}
            </h2>
            <div className="mt-2 h-[72px] rounded-[14px] bg-brand-soft lg:mt-4" />
          </section>
        </div>
      </div>
    </div>
  );
}
