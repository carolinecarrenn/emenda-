import { Check } from "lucide-react";

/* Check rows shared by the "Before sending" card (EM-08), the "Send check"
   card (EM-08A), the MD-08 BEFORE SENDING panel (1225:202–209) and the
   MD-08A REVIEW CHECKLIST (1225:253–256). On desktop the tick is a 12px
   #0c5941 mark set 26px left of an 11px #083d2d line; the 390px mocks
   (994:2828 · 994:2872) print it inline with the row, in the same 10px/14
   regular #6e8a82 as the sentence. A lucide Check, never an emoji. */
export function CommunicationCheckList({
  items,
  columns = 1,
  strongOnDesktop = false,
}: {
  items: string[];
  /** MD-08A lays its four checks out two-up inside the #f1f6f3 strip. */
  columns?: 1 | 2;
  /** MD-08A sets its checks semibold; the MD-08 rail keeps them regular. */
  strongOnDesktop?: boolean;
}) {
  const desktopWeight = strongOnDesktop
    ? "lg:font-semibold"
    : "lg:font-normal";

  return (
    <ul
      className={
        columns === 2
          ? "grid gap-[0px] lg:grid-cols-[500fr_512fr] lg:gap-x-0 lg:gap-y-[16px]"
          : "space-y-[0px] lg:space-y-[26px]"
      }
    >
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-[2px] ${
            columns === 2 ? "lg:gap-[4px]" : "lg:gap-[14px]"
          }`}
        >
          {/* The mocks set the tick as a glyph inside the check line, so it
              stays small and close: 10px of lead on the 390px cards and on
              the two-up MD-08A strip, 26px only in the MD-08 rail. */}
          <Check
            aria-hidden="true"
            className={`mt-[3px] size-[8px] shrink-0 text-[#6e8a82] lg:text-[#0c5941] ${
              columns === 2 ? "lg:mt-[4px]" : "lg:mt-[1px] lg:size-[12px]"
            }`}
            strokeWidth={3}
          />
          <span
            className={`text-[10px] leading-[14px] font-normal text-[#6e8a82] lg:text-[11px] lg:leading-[16px] lg:text-[#083d2d] ${desktopWeight}`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
