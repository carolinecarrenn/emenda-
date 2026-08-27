import type { ReactNode } from "react";
import { Link } from "react-router-dom";

/* Section 05 CTAs.
   Mobile (EM-09A/09B/10/09C): full-width 350px stack — primary #06634f
   radius 12 with white label, secondary white on a #d6e3de hairline.
   Desktop (MD-09 1226:1316/1318 · MD-12 1226:1622/1624): 42px radius 9
   rail buttons — primary #0c5941, secondary white on #dbe3de. */

const BASE =
  "flex items-center justify-center rounded-[12px] px-4 text-center font-semibold lg:rounded-[9px] lg:h-[42px]";
const PRIMARY = "bg-[#06634f] text-white hover:bg-brand-deep lg:bg-[#0c5941]";
const SECONDARY =
  "border border-[#d6e3de] bg-white text-[#094033] hover:border-brand lg:border-[#dbe3de] lg:text-[#083d2d]";

/** 46px primary CTA (EM-09A 1030:181 · EM-10 1030:230 · EM-09C 1030:244). */
export function FollowUpPrimaryLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className={`${BASE} ${PRIMARY} h-[46px] w-full text-[12px] lg:w-[220px] lg:text-[12px]`}
    >
      {children}
    </Link>
  );
}

/** 42px outline CTA (EM-09A 1030:183 · EM-09C 1030:246). */
export function FollowUpSecondaryLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className={`${BASE} ${SECONDARY} h-[42px] w-full text-[11px] lg:w-[220px] lg:text-[12px]`}
    >
      {children}
    </Link>
  );
}

/** MD-09 / MD-12 right-rail button pair — a 130px primary next to a secondary
 *  that takes the rest of the 282px rail width (1226:1316/1318). Desktop only. */
export function RailButtonRow({ children }: { children: ReactNode }) {
  return <div className="flex gap-[10px]">{children}</div>;
}

export function RailPrimaryLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="flex h-[42px] w-[130px] shrink-0 items-center justify-center rounded-[9px] bg-[#0c5941] px-[16px] text-[12px] font-semibold text-white hover:bg-brand-deep"
    >
      {children}
    </Link>
  );
}

export function RailSecondaryLink({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      className="flex h-[42px] flex-1 items-center justify-center rounded-[9px] border border-[#dbe3de] bg-white px-[16px] text-[12px] font-semibold text-[#083d2d] hover:border-brand"
    >
      {children}
    </Link>
  );
}
