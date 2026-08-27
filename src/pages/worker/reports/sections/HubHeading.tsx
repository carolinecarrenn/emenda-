import { useCommonCopy } from "@/i18n/common";

/**
 * Reports hub heading, shared by every hub state.
 *
 * Worker MOBILE (W-54 · 54B · 54C · 54D · 54E · 54H · 54J · 54K, Body frames
 * 972:72 / 972:296 / 972:368 / 972:445 / 975:111 / 1024:2199) draws a single
 * 28px/34px bold "Reports" title with a 12px/17px muted sentence under it and
 * NO green eyebrow. The desktop frames (WD-54, 1182:3426) keep the 13px green
 * "Reports" eyebrow, promote that sentence to the 34px H1 and drop a short
 * status line underneath — same words, different arrangement, so both are
 * rendered from the same strings and swapped at the lg breakpoint.
 *
 * WD-54 sizes the desktop H1 as a fixed 54px box (y 146→200) with the text
 * vertically centred, so a one-line title (WD-54B loading, WD-54C empty) sits
 * 20px lower than a two-line one and the subtitle keeps its y=204 baseline
 * either way. `lg:h-[54px]` + `lg:items-center` reproduces that.
 */
export function HubHeading({
  sentence,
  desktopSubtitle,
}: {
  /** The mobile subtitle — also the desktop H1. */
  sentence: string;
  /** Short desktop-only status line under the desktop H1. */
  desktopSubtitle?: string;
}) {
  const common = useCommonCopy();

  return (
    <>
      <p className="hidden text-[13px] font-semibold text-lp-green lg:block">
        {common.nav.reports}
      </p>
      <h1 className="max-w-[900px] text-[28px] leading-[34px] font-bold text-lp-ink lg:mt-[15px] lg:flex lg:h-[54px] lg:items-center lg:text-[34px] lg:leading-[1.2]">
        <span className="lg:hidden">{common.nav.reports}</span>
        <span className="hidden lg:inline">{sentence}</span>
      </h1>
      <p
        className={`mt-[12px] text-[12px] leading-[17px] text-lp-muted lg:mt-[16px] lg:text-[14px] ${
          desktopSubtitle === undefined ? "lg:hidden" : ""
        }`}
      >
        <span className="lg:hidden">{sentence}</span>
        {desktopSubtitle !== undefined && (
          <span className="hidden lg:inline">{desktopSubtitle}</span>
        )}
      </p>
    </>
  );
}
