import { useSectionCopy } from "@/i18n/copy";
import { EDIT_CV_COPY } from "../editCv.copy";
import type { CvSectionKey } from "../editCvMock";

/* WD-31 "CV sections" card: 14px semibold title, four 13px rows each with
   a 28px outline "Included" pill (green 12px semibold), then a full-width
   "Reorder sections" pill. Clicking a visibility pill opens the WD-31D
   section-visibility sheet. */
export function CvSectionsCard({
  order,
  visibility,
  onToggleClick,
  onReorderClick,
}: {
  order: CvSectionKey[];
  visibility: Record<CvSectionKey, boolean>;
  onToggleClick: () => void;
  onReorderClick: () => void;
}) {
  const c = useSectionCopy(EDIT_CV_COPY);

  return (
    <div className="min-h-[236px] rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] pt-[14px] pb-[16px]">
      <p className="text-[14px] leading-[20px] font-semibold text-[#17231f]">
        {c.sectionsTitle}
      </p>
      <div className="mt-[8px]">
        {order.map((key) => (
          <div
            key={key}
            className="flex h-[34px] items-center justify-between gap-3"
          >
            <p className="text-[13px] text-[#17231f]">{c.sections[key]}</p>
            <button
              type="button"
              onClick={onToggleClick}
              className={`flex h-[28px] w-[131px] items-center justify-center rounded-[12px] border border-[#d1ddd7] bg-white text-[12px] font-semibold hover:bg-[#ebf5ef] ${
                visibility[key] ? "text-[#0b5842]" : "text-[#65746d]"
              }`}
            >
              {visibility[key] ? c.included : c.hidden}
            </button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={onReorderClick}
        className="mt-[6px] flex h-[36px] w-full items-center justify-center rounded-[12px] border border-[#d1ddd7] bg-white text-[12px] font-semibold text-[#0b5842] hover:bg-[#ebf5ef]"
      >
        {c.reorder}
      </button>
    </div>
  );
}
