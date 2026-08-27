import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "../ojt.copy";

/* EM-15 filter chips (1108:114 · 1108:116): 28px pills, radius 14 on a
   #ccded6 hairline. The active period chip is mint #e8f5f0 with a 9px
   semibold #083d2d label; the inactive scope chip is white with a 9px
   regular #083d2d label. The period label is data — it stays raw. */
export function HrddFilterChips({
  period,
  periodActive,
  facilityActive,
  onTogglePeriod,
  onToggleFacility,
}: {
  period: string;
  periodActive: boolean;
  facilityActive: boolean;
  onTogglePeriod: () => void;
  onToggleFacility: () => void;
}) {
  const c = useSectionCopy(OJT_COPY);

  const chipClass = (active: boolean, width: string) =>
    `flex h-[28px] ${width} items-center justify-center rounded-[14px] border border-[#ccded6] text-[9px] lg:text-[11px] ${
      active
        ? "bg-[#e8f5f0] font-semibold text-[#083d2d]"
        : "bg-white text-[#083d2d] hover:border-brand"
    }`;

  return (
    <div className="flex gap-[8px] lg:gap-[12px]">
      <button
        type="button"
        aria-pressed={periodActive}
        onClick={onTogglePeriod}
        className={chipClass(periodActive, "w-[88px]")}
      >
        {period}
      </button>
      <button
        type="button"
        aria-pressed={facilityActive}
        onClick={onToggleFacility}
        className={chipClass(facilityActive, "w-[116px]")}
      >
        {c.hrdd.chipFacility}
      </button>
    </div>
  );
}
