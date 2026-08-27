import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { EDIT_CV_COPY } from "../editCv.copy";
import type { CvSectionKey } from "../editCvMock";
import { SheetOverlay } from "../../preferences/sections/SheetOverlay";

/* WD-31D section-visibility sheet: per-section Include (96px) / Hide (104px)
   pill pair and a solid green Done. The active choice is highlighted with
   the soft-green selected tint. */
export function SectionVisibilitySheet({
  order,
  visibility,
  onChange,
  onDone,
}: {
  order: CvSectionKey[];
  visibility: Record<CvSectionKey, boolean>;
  onChange: (key: CvSectionKey, included: boolean) => void;
  onDone: () => void;
}) {
  const c = useSectionCopy(EDIT_CV_COPY);
  const common = useCommonCopy();

  const pill = (active: boolean) =>
    `flex h-[34px] items-center justify-center rounded-[12px] border text-[12px] font-semibold ${
      active
        ? "border-[#9dbbad] bg-brand-soft text-[#0b5842]"
        : "border-[#d1ddd7] bg-white text-[#0b5842] hover:bg-[#ebf5ef]"
    }`;

  return (
    <SheetOverlay onScrimClick={onDone}>
      <p className="text-[20px] leading-[28px] font-semibold text-[#17231f]">
        {c.visibilitySheet.title}
      </p>
      <p className="mt-[8px] text-[13px] text-[#65746d]">
        {c.visibilitySheet.body}
      </p>
      <div className="mt-[22px] space-y-[14px]">
        {order.map((key) => (
          <div key={key} className="flex items-center justify-between gap-3">
            <p className="text-[13px] font-semibold text-[#17231f]">
              {c.sections[key]}
            </p>
            <div className="flex gap-[9px] lg:gap-[13px]">
              <button
                type="button"
                onClick={() => onChange(key, true)}
                className={`w-[72px] lg:w-[96px] ${pill(visibility[key])}`}
              >
                {c.visibilitySheet.include}
              </button>
              <button
                type="button"
                onClick={() => onChange(key, false)}
                className={`w-[79px] lg:w-[104px] ${pill(!visibility[key])}`}
              >
                {c.visibilitySheet.hide}
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={onDone}
        className="mt-[18px] flex h-[36px] w-full items-center justify-center rounded-[12px] bg-[#0c664b] text-[12px] font-semibold text-white hover:bg-[#0b5842]"
      >
        {common.action.done}
      </button>
    </SheetOverlay>
  );
}
