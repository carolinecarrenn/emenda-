/* Section 08 caps micro-heading: 9px semibold #0c5941 on an 11px line, no
   tracking (EM-14 sets "HUMAN-CONTROLLED FLOW" 127px wide at 9px, which is
   the untracked width). The frames leave 9px between the heading box and
   the card below it — EM-14 puts the flow card at y=260 under a heading
   box that opens at y=240. */
export function OjtSectionHeading({ children }: { children: string }) {
  return (
    <h2 className="text-[9px] leading-[11px] font-semibold text-[#0c5941] uppercase lg:text-[11px] lg:leading-[14px]">
      {children}
    </h2>
  );
}

/** Top offset that lines a desktop rail card up with the first card of a
 *  main column that opens with an `OjtSectionHeading` (14px line + 11px). */
export const OJT_RAIL_ALIGN = "lg:mt-[25px]";
