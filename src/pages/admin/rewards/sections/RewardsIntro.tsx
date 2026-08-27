import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINREWARDS_COPY } from "../rewards.copy";

/* AD-07 intro row (1223:3013): a 44px band across the 1144px content column —
   22px bold #17362e title over the 9px #65746d scope line, with the white
   "Export history" button (104x32, radius 10, 1px #d6e3de) and the #083d2d
   "Manual adjustment" button (130x32) pinned right.

   "Manual adjustment" opens AD-07B (?state=adjust); below lg the two buttons
   drop under the heading and share the row. */
export function RewardsIntro() {
  const c = useSectionCopy(ADMINREWARDS_COPY);

  return (
    <div className="flex flex-col gap-[12px] lg:h-[44px] lg:flex-row lg:items-center lg:gap-[16px]">
      <div className="flex min-w-0 flex-1 flex-col gap-[5px]">
        <h2 className="text-[20px] leading-none font-bold text-[#17362e] lg:text-[22px]">
          {c.intro.title}
        </h2>
        <p className="text-[11px] leading-none text-[#65746d] lg:text-[9px]">
          {c.intro.subtitle}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-[10px] lg:gap-[28px]">
        <button
          type="button"
          className="flex h-[32px] flex-1 items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] lg:w-[104px] lg:flex-none lg:justify-start"
        >
          {c.intro.exportHistory}
        </button>
        <Link
          to="/admin/rewards?state=adjust"
          className="flex h-[32px] flex-1 items-center justify-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white lg:w-[130px] lg:flex-none lg:justify-start"
        >
          {c.intro.manualAdjustment}
        </Link>
      </div>
    </div>
  );
}
