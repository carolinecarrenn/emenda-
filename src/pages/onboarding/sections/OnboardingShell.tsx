import type { ReactNode } from "react";

interface OnboardingShellProps {
  title: string;
  subtitle: string;
  /** W-17A/B/C use a softer heading treatment (semibold · #18231f / #65746d). */
  soft?: boolean;
  /** Desktop-only top offset for the right rail, e.g. "lg:pt-[194px]".
   *  Must be a full literal class so Tailwind can see it. */
  railClassName?: string;
  /** Desktop-only minimum height of the headline text block. WD-12 reserves a
   *  two-line title box (100px) before the subtitle; the rest are single line. */
  titleBlockClassName?: string;
  /** Gap between the headline and its subtitle. Mobile W-13/W-14/W-17 use 14,
   *  W-16 and the soft W-17A/B/C use 18, W-15 uses 20. */
  subtitleGapClassName?: string;
  /** Extra classes on the subtitle itself — W-16 reserves a fixed 40px box so
   *  its "What you'll need" block always starts at y=212 (Figma 468:112). */
  subtitleClassName?: string;
  /** Gap between the headline block and the rail below it on mobile. */
  railGapClassName?: string;
  children: ReactNode;
}

/** Onboarding chrome (Figma W-12..W-17 mobile 390×844 / WD-12..WD-17 desktop):
 *  no app shell — dark-green EMENDA wordmark top-left (18px, x=20 y=40), then
 *  a single 350px column starting at y=92 with 20px margins on mobile, and a
 *  two-column split on desktop (heading block left at x=120/y=286, 520px
 *  interactive rail right, 160px right margin on the 1440 canvas). */
export function OnboardingShell({
  title,
  subtitle,
  soft = false,
  railClassName = "",
  titleBlockClassName = "",
  subtitleGapClassName = "mt-[14px] lg:mt-[18px]",
  subtitleClassName = "",
  railGapClassName = "mt-[14px] lg:mt-0",
  children,
}: OnboardingShellProps) {
  return (
    <div className="min-h-screen bg-canvas">
      <div className="mx-auto max-w-[1440px]">
        <p className="px-5 pt-[40px] text-[18px] leading-[24px] font-bold text-brand-deep lg:px-[96px] lg:pt-[72px] lg:text-[22px] lg:leading-[30px]">
          EMENDA
        </p>
        <div className="px-5 pb-16 lg:flex lg:items-start lg:justify-between lg:px-0 lg:pb-[80px]">
          <div className="pt-[28px] lg:box-content lg:w-[500px] lg:shrink-0 lg:pt-[184px] lg:pl-[120px]">
            <h1
              className={`${
                soft
                  ? "text-[28px] leading-[34px] font-semibold text-[#18231f] lg:text-[40px] lg:leading-[48px]"
                  : "text-[30px] leading-[36px] font-bold text-ink lg:text-[40px] lg:leading-[48px]"
              } ${titleBlockClassName}`}
            >
              {title}
            </h1>
            <p
              className={`${subtitleGapClassName} text-[13px] lg:text-[16px] lg:leading-[24px] ${
                soft
                  ? "leading-[20px] text-[#65746d]"
                  : "leading-[19px] text-ink-muted"
              } ${subtitleClassName}`}
            >
              {subtitle}
            </p>
          </div>
          <div
            className={`${railGapClassName} lg:box-content lg:w-[520px] lg:shrink-0 lg:pr-[160px] ${railClassName}`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
