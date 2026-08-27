import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";
import { ALERT_RESPONSE_AGING } from "../followupMock";
import { fill } from "./followupLabels";

/* EM-12 tail (1030:284 · 287 · 288 · 290): a mint #e8f5f0 "Privacy boundary"
   card (radius 12, 54px, 9px #6e8a82 sentence-case label + body), the 9px resolved-today line
   carrying the manager response aging, and two 168x40 mint buttons
   (radius 11, #d6e3de hairline, 9px #094033) linking to the Follow-up
   Center and the worker roster. Mobile only. */
export function AlertPrivacyCard() {
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div className="lg:hidden">
      <div className="min-h-[54px] rounded-[12px] bg-[#e8f5f0] px-[14px] py-[10px]">
        <p className="text-[9px] font-semibold text-[#6e8a82]">
          {c.alerts.privacyTitle}
        </p>
        <p className="mt-[6px] text-[9px] leading-[14px] text-[#6e8a82]">
          {c.alerts.privacyBody}
        </p>
      </div>
      <p className="mt-[12px] text-[9px] text-[#6e8a82]">
        {fill(c.alerts.resolvedLine, { value: ALERT_RESPONSE_AGING })}
      </p>
      <div className="mt-[10px] grid grid-cols-2 gap-[14px]">
        <Link
          to="/manager/follow-up"
          className="flex h-[40px] items-center justify-center rounded-[11px] border border-[#d6e3de] bg-[#e8f5f0] px-2 text-center text-[9px] font-semibold text-[#094033] hover:border-brand"
        >
          {c.alerts.openFollowUpCenter}
        </Link>
        <Link
          to="/manager/workers"
          className="flex h-[40px] items-center justify-center rounded-[11px] border border-[#d6e3de] bg-[#e8f5f0] px-2 text-center text-[9px] font-semibold text-[#094033] hover:border-brand"
        >
          {c.alerts.viewAllWorkers}
        </Link>
      </div>
    </div>
  );
}
