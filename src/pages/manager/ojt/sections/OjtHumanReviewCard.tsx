import { Check } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "../ojt.copy";

/* EM-14A (761:2620) yellow "HUMAN REVIEW" card: #fff5c7, 350x70, caps
   heading over four checkmarked review dimensions in a 2x2 text grid. The
   frame draws the ticks as light inline ✓ glyphs at the label's own weight
   and colour, on an 11px line — not as filled checkboxes. 1108:57 sets the
   four items as one wrapped text run, so the second column starts right
   after the widest label rather than at the card's half-width. Read-only on the
   detail screen; the editable gate lives on EM-14B. */
export function OjtHumanReviewCard() {
  const c = useSectionCopy(OJT_COPY);

  return (
    <div className="min-h-[70px] rounded-[12px] border border-[#ccded6] bg-[#fff5c7] px-[14px] py-[11px]">
      <p className="text-[9px] leading-[11px] font-semibold text-[#083d2d] uppercase lg:text-[11px] lg:leading-[14px]">
        {c.detail.humanReviewHeading}
      </p>
      <ul className="mt-[9px] grid grid-cols-[auto_auto] justify-start gap-x-[7px] lg:mt-[10px] lg:gap-x-[9px]">
        {c.detail.checks.map((check) => (
          <li
            key={check}
            className="flex items-center gap-[4px] text-[9px] leading-[11px] text-[#667a73] lg:text-[11px] lg:leading-[14px]"
          >
            <Check
              className="size-[9px] shrink-0 text-[#667a73] lg:size-[11px]"
              strokeWidth={2}
            />
            {check}
          </li>
        ))}
      </ul>
    </div>
  );
}
