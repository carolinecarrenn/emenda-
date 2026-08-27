import type { ReactNode } from "react";
import { AuthWordmark } from "./AuthWordmark";

interface AuthLayoutProps {
  title: ReactNode;
  subtitle: ReactNode;
  children: ReactNode;
  /** lg padding-top of the form rail, matching the Figma y of its first element. */
  railTopClass?: string;
  /** Mobile margin-top of the rail — W-xx frames start it at y=188..202. */
  railMobileTopClass?: string;
  /** Mobile padding-top of the heading block (W-11 lifts its title to y=88). */
  headTopClass?: string;
  /** Desktop padding-top of the heading block — WD-xx put the title at y=306,
   *  except the two-line WD-08C headline which starts at y=292. */
  headDesktopTopClass?: string;
  /** Mobile gap between title and subtitle (W-11 uses 7px under a 26px title). */
  subtitleGapClass?: string;
  /** Mobile/desktop heading size (W-02, W-10 and W-11 use a 26px mobile title). */
  titleSizeClass?: string;
  /** Heading color. */
  titleClass?: string;
  /** Mobile/desktop subtitle size (W-11 uses 12px/18 on mobile). */
  subtitleSizeClass?: string;
  subtitleClass?: string;
}

/** Pre-auth shell shared by every WD-01..WD-11 screen: EMENDA wordmark
 *  top-left (x=96 y=72), two-column hero split on desktop — left 500px
 *  headline block at x=120 y=306 (44px bold #173a32 + 18px #7c918b), right
 *  520px form rail at x=760.
 *
 *  Mobile (W-xx) is the canonical single column and is measured off the
 *  frames: wordmark 20px bold #0b5d4c at y=40, title 30px bold #173a32 at
 *  y=92 (line box 36), subtitle 13px #7c918b at y=134 (line box 16), first
 *  rail element at y=188. */
export function AuthLayout({
  title,
  subtitle,
  children,
  railTopClass = "lg:pt-[238px]",
  railMobileTopClass = "mt-[38px]",
  headTopClass = "pt-7",
  headDesktopTopClass = "lg:pt-[306px]",
  subtitleGapClass = "mt-[6px] lg:mt-[15px]",
  titleSizeClass = "text-[30px] leading-[36px] lg:text-[44px] lg:leading-[1.12]",
  titleClass = "text-[#173a32]",
  subtitleSizeClass = "text-[13px] leading-[16px] lg:text-[18px] lg:leading-[27px]",
  subtitleClass = "text-[#7c918b]",
}: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen bg-canvas">
      <AuthWordmark className="inline-block px-5 pt-[40px] font-display text-[20px] leading-[24px] font-bold text-[#0b5d4c] lg:absolute lg:left-[64px] lg:top-[72px] lg:px-0 lg:pt-0 lg:font-sans lg:text-[24px] lg:leading-[29px] xl:left-[96px]" />
      <div className="px-5 pb-16 lg:flex lg:gap-[48px] lg:px-[64px] lg:pb-[80px] xl:justify-between xl:gap-0 xl:pl-[120px] xl:pr-[160px]">
        <div
          className={`${headTopClass} ${headDesktopTopClass} lg:max-w-[500px] lg:flex-1`}
        >
          <h1
            className={`font-display font-bold lg:font-sans ${titleSizeClass} ${titleClass}`}
          >
            {title}
          </h1>
          <p
            className={`${subtitleSizeClass} ${subtitleGapClass} ${subtitleClass}`}
          >
            {subtitle}
          </p>
        </div>
        <div
          className={`lg:mt-0 lg:w-[520px] lg:shrink-0 ${railMobileTopClass} ${railTopClass}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
