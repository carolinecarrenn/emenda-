import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINFOLLOWUP_COPY } from "../followup.copy";

/* AD-05 intro row (1223:2273): 44px band — "Move cases forward with clear
   next actions" 22px bold #17362e over the 9px #65746d "Escalate only when
   needed" line, then the outline "Export board" (98x32) and dark-green
   "Escalate case" (102x32) buttons, radius 10, 11px semibold.

   "Escalate case" opens the AD-05B escalation decision (1226:131). */
export function FollowUpIntro() {
  const c = useSectionCopy(ADMINFOLLOWUP_COPY);

  return (
    <div className="flex flex-col gap-[12px] lg:h-[44px] lg:flex-row lg:items-center">
      <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
        <h2 className="text-[22px] leading-[28px] font-bold text-[#17362e]">
          {c.intro.title}
        </h2>
        <p className="text-[11px] leading-[16px] text-[#65746d] lg:text-[9px] lg:leading-none">
          {c.intro.subtitle}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-[12px]">
        <button
          type="button"
          className="flex items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[14px] py-[9px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] hover:bg-[#f2f7f5] lg:h-[32px] lg:w-[98px] lg:px-0 lg:py-0"
        >
          {c.intro.exportBoard}
        </button>
        <Link
          to="/admin/follow-up?state=escalate"
          className="flex items-center justify-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[14px] py-[9px] text-[11px] font-semibold whitespace-nowrap text-white hover:bg-[#0c5941] lg:h-[32px] lg:w-[102px] lg:px-0 lg:py-0"
        >
          {c.intro.escalateCase}
        </Link>
      </div>
    </div>
  );
}
