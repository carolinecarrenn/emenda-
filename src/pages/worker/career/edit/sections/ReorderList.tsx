import { ArrowDown, ArrowUp } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { EDIT_CV_COPY } from "../editCv.copy";
import type { CvSectionKey } from "../editCvMock";

/* WD-31E/F reorder list: white card, one 62px row per section with
   right-aligned 64x40 outline up/down pills — the first row has no up
   button and the last row no down button. */
export function ReorderList({
  order,
  onMove,
}: {
  order: CvSectionKey[];
  onMove: (index: number, direction: -1 | 1) => void;
}) {
  const c = useSectionCopy(EDIT_CV_COPY);

  return (
    <div className="rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] py-[14px]">
      {order.map((key, index) => (
        <div
          key={key}
          className="flex h-[62px] items-center justify-between gap-3"
        >
          <p className="flex items-baseline gap-[10px] text-[14px] font-semibold text-[#17231f]">
            <span>{index + 1}.</span>
            <span>{c.sections[key]}</span>
          </p>
          <div className="flex gap-[12px] lg:gap-[16px]">
            {index > 0 ? (
              <button
                type="button"
                aria-label={`${c.moveUp} · ${c.sections[key]}`}
                onClick={() => onMove(index, -1)}
                className="flex h-[38px] w-[42px] items-center justify-center rounded-[12px] border border-[#d1ddd7] bg-white text-[#0b5842] hover:bg-[#ebf5ef] lg:h-[40px] lg:w-[64px]"
              >
                <ArrowUp size={16} strokeWidth={1.6} />
              </button>
            ) : (
              <div aria-hidden className="h-[38px] w-[42px] lg:h-[40px] lg:w-[64px]" />
            )}
            {index < order.length - 1 ? (
              <button
                type="button"
                aria-label={`${c.moveDown} · ${c.sections[key]}`}
                onClick={() => onMove(index, 1)}
                className="flex h-[38px] w-[42px] items-center justify-center rounded-[12px] border border-[#d1ddd7] bg-white text-[#0b5842] hover:bg-[#ebf5ef] lg:h-[40px] lg:w-[64px]"
              >
                <ArrowDown size={16} strokeWidth={1.6} />
              </button>
            ) : (
              <div aria-hidden className="h-[38px] w-[42px] lg:h-[40px] lg:w-[64px]" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
