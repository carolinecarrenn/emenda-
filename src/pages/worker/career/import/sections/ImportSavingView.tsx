import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../../career.copy";

/** WD-23A saving state: status card on the left, muted disabled button on the
 *  right while the reviewed data is imported. */
export function ImportSavingView() {
  const c = useSectionCopy(CAREER_COPY);

  return (
    <div className="mt-[36px] flex flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
      <div className="min-h-[130px] rounded-[16px] border border-[#d5e0da] bg-[#f3f7f5] px-4 py-[14px] lg:col-start-1 lg:row-start-1">
        <p className="text-[14px] font-semibold text-[#17231f]">
          {c.import.savingTitle}
        </p>
        <p className="mt-[8px] text-[11px] text-[#65746d]">
          {c.import.savingBody}
        </p>
      </div>
      <button
        type="button"
        disabled
        className="flex h-[52px] w-full cursor-not-allowed items-center justify-center rounded-[14px] bg-[#eef2ef] text-[14px] font-semibold text-[#9eada6] lg:col-start-2 lg:row-start-1"
      >
        {c.import.savingButton}
      </button>
    </div>
  );
}
