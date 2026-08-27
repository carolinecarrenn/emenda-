import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINREPORTS_COPY } from "../reports.copy";

/* AD-04 screen intro (1223:1593): a 1144x44 row — the 22px bold #17362e
   headline with its 9px #65746d caption on the left, and the "Export queue"
   (white, 1px #d6e3de) / "Open report" (#083d2d) 32px button pair sitting
   32px apart and 43px in from the content edge, exactly as the frame places
   them at x876 and x1008 of the 1144 column. */
export function ReportsIntro() {
  const c = useSectionCopy(ADMINREPORTS_COPY);

  return (
    <div className="flex flex-col gap-[12px] lg:h-[44px] lg:flex-row lg:items-center lg:gap-0">
      <div className="min-w-0 flex-1">
        <h2 className="text-[20px] leading-[26px] font-bold text-[#17362e] lg:text-[22px] lg:leading-[27px]">
          {c.intro.title}
        </h2>
        <p className="mt-[4px] text-[11px] leading-[14px] text-[#65746d] lg:mt-[2px] lg:text-[9px] lg:leading-[12px]">
          {c.intro.subtitle}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-[12px] lg:mr-[43px] lg:gap-[32px]">
        <button
          type="button"
          className="flex h-[32px] items-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d]"
        >
          {c.intro.exportQueue}
        </button>
        <Link
          to="/admin/reports?state=detail"
          className="flex h-[32px] items-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white"
        >
          {c.intro.openReport}
        </Link>
      </div>
    </div>
  );
}
