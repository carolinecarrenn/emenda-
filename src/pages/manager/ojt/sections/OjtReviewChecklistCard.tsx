import { Check } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { fillOjtCopy, OJT_COPY } from "../ojt.copy";
import type { OjtModule } from "../ojtMock";

/* EM-14B "HUMAN REVIEW · ALL REQUIRED" (1108:79): #fff5c7 on a #ccded6
   hairline, radius 12, 102px tall. Left column carries the four ✓ items on
   an 11px line (Accuracy checked · Actionable wording · Translation reviewed
   · Privacy boundary checked); the 116px right column carries the source
   note, top-aligned with the first item.
   The frame draws each tick as a light inline ✓ at the label's own colour,
   so the checked state is a check glyph rather than a filled box — but all
   four are real toggles: publication is gated on every item staying
   checked, the human-control invariant of the D11 workflow. Unchecked
   swaps the glyph for a same-size hollow marker so the state stays legible
   without shifting the row. */
export function OjtReviewChecklistCard({
  module,
  checked,
  onToggle,
}: {
  module: OjtModule;
  checked: boolean[];
  onToggle: (index: number) => void;
}) {
  const c = useSectionCopy(OJT_COPY);

  return (
    <div className="min-h-[102px] rounded-[12px] border border-[#ccded6] bg-[#fff5c7] px-[14px] py-[12px]">
      <p className="text-[9px] leading-[11px] font-semibold text-[#083d2d] uppercase lg:text-[11px] lg:leading-[14px]">
        {c.review.checklistHeading}
      </p>
      <div className="mt-[10px] flex flex-wrap items-start justify-between gap-[10px]">
        <ul className="min-w-[190px]">
          {c.review.checks.map((label, index) => (
            <li key={label}>
              <button
                type="button"
                role="checkbox"
                aria-checked={checked[index] ?? false}
                onClick={() => onToggle(index)}
                className="flex items-center gap-[4px] text-left text-[9px] leading-[11px] text-[#667a73] hover:text-[#083d2d] lg:text-[11px] lg:leading-[14px]"
              >
                {checked[index] ? (
                  <Check
                    className="size-[9px] shrink-0 text-[#667a73] lg:size-[11px]"
                    strokeWidth={2}
                  />
                ) : (
                  <span className="size-[9px] shrink-0 rounded-[2px] border border-[#c9b978] lg:size-[11px]" />
                )}
                {label}
              </button>
            </li>
          ))}
        </ul>
        <p className="max-w-[116px] text-[9px] leading-[13px] text-[#667a73] lg:max-w-[200px] lg:text-[11px] lg:leading-[16px]">
          {fillOjtCopy(c.review.sourceNote, { records: module.source.records })}
        </p>
      </div>
    </div>
  );
}
