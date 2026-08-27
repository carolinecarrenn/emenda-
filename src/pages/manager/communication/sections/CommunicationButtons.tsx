import type { ReactNode } from "react";
import { Link } from "react-router-dom";

/* Section 04 CTAs.
   Desktop (MD-06 1225:81 · MD-07 1225:135/138/140/142 · MD-08 1225:213/215 ·
   MD-08A 1225:257/259 · MD-07B 1225:300/302 · MD-07C 1225:336/338/340):
   42px tall, radius 9, 12px semibold label — primary #0c5941 on white text,
   secondary white on a #dbe3de hairline with #083d2d text.
   Mobile: full-width 350px stack — primary #06634f radius 12, secondary
   white on #d6e3de. The 390px mocks size the label per frame, so `mobile`
   carries the override: EM-08 994:2829 and EM-08A 994:2873 keep 46px/12px,
   EM-08A's "Back to edit" 994:2875 is 46px/11px, EM-07B 994:2912 is
   46px/11px with a 44px/10px follow-up key (1021:16), and EM-07C
   994:2949–2953 runs 46px/11px, 46px/11px, 42px/10px. */

const BASE =
  "flex items-center justify-center rounded-[12px] px-4 text-center font-semibold lg:h-[42px] lg:justify-start lg:rounded-[9px] lg:text-left";
const PRIMARY = "bg-[#06634f] text-white hover:bg-brand-deep lg:bg-[#0c5941]";
const SECONDARY =
  "border border-[#d6e3de] bg-white text-[#094033] hover:border-brand lg:border-[#dbe3de] lg:text-[#083d2d]";

/** Full-width mobile primary that becomes a 220px rail button on desktop. */
export function CommunicationPrimaryLink({
  to,
  children,
  desktopWidth = "lg:w-[220px]",
  mobile = "h-[46px] text-[12px]",
}: {
  to: string;
  children: ReactNode;
  desktopWidth?: string;
  /** Mobile height + label size for the frame that owns this key. */
  mobile?: string;
}) {
  return (
    <Link
      to={to}
      className={`${BASE} ${PRIMARY} w-full lg:text-[12px] ${mobile} ${desktopWidth}`}
    >
      {children}
    </Link>
  );
}

/** Full-width mobile outline CTA that becomes a rail button on desktop. */
export function CommunicationSecondaryLink({
  to,
  children,
  desktopWidth = "lg:w-[220px]",
  mobile = "h-[42px] text-[11px]",
}: {
  to: string;
  children: ReactNode;
  desktopWidth?: string;
  /** Mobile height + label size for the frame that owns this key. */
  mobile?: string;
}) {
  return (
    <Link
      to={to}
      className={`${BASE} ${SECONDARY} w-full lg:text-[12px] ${mobile} ${desktopWidth}`}
    >
      {children}
    </Link>
  );
}

/** Desktop-only rail button pair (MD-07B 1225:300/302, MD-07C 1225:336…). */
export function CommunicationButtonRow({
  children,
  mobileSpace = "space-y-[10px]",
}: {
  children: ReactNode;
  /** Gap between the stacked mobile keys; EM-08A (994:2873/2875) uses 12px. */
  mobileSpace?: string;
}) {
  return (
    <div
      className={`${mobileSpace} lg:flex lg:flex-wrap lg:gap-[20px] lg:space-y-0`}
    >
      {children}
    </div>
  );
}
