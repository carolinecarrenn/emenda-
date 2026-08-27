/* Shared class names for the "labelled field" shape used across the Reports
   form, review and detail surfaces.
   Mobile (W-55 node 978:120, W-56A node 973:577) puts the caps label on the
   page background and gives the value its OWN bordered box.
   Desktop (WD-55 / WD-56A) wraps label + value in a single white card, so the
   `lg:` half of every constant restores that card and neutralises the box. */

/** Outer wrapper: transparent on mobile, the white card on desktop. */
export const FIELD_SHELL =
  "lg:rounded-[12px] lg:border lg:border-lp-line lg:bg-white lg:px-[13px] lg:pt-[8px]";

/** Same wrapper at the detail page's larger desktop metrics (WD-56 content card). */
export const DETAIL_SHELL =
  "lg:min-h-[88px] lg:rounded-[14px] lg:border lg:border-lp-line lg:bg-white lg:px-[19px] lg:pt-[12px] lg:pb-[18px]";

/** Caps label — muted on mobile, green on the desktop detail card. */
export const FIELD_LABEL = "text-[10px] font-semibold text-lp-muted uppercase";
export const DETAIL_LABEL =
  "text-[11px] leading-[14px] font-semibold text-lp-muted uppercase lg:leading-normal lg:text-lp-green";

/** Value box: bordered on mobile, dissolved into the desktop card. */
export const FIELD_BOX =
  "mt-[5px] rounded-[12px] border border-lp-line bg-white px-[12px] py-[10px] lg:mt-[4px] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0";
export const DETAIL_BOX =
  "mt-[6px] rounded-[14px] border border-lp-line bg-[#f6f7f6] px-[14px] py-[12px] lg:mt-[17px] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0";

/** Chip row wrapper: bare on mobile, inside the desktop card. */
export const CHIP_SHELL =
  "lg:min-h-[76px] lg:rounded-[12px] lg:border lg:border-lp-line lg:bg-white lg:px-[13px] lg:pt-[8px] lg:pb-[13px]";
export const CHIP_ROW =
  "mt-[6px] flex flex-wrap gap-[8px] lg:mt-[12px] lg:gap-[10px]";
