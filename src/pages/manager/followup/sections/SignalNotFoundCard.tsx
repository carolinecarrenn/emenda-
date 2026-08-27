import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "../followup.copy";

/* Guard for an unknown :signalId — mirrors the manager report-detail
   fallback so a stale deep link never renders an empty review screen. */
export function SignalNotFoundCard() {
  const common = useCommonCopy();
  const c = useSectionCopy(FOLLOW_UP_COPY);

  return (
    <div className="max-w-[560px]">
      <Link
        to="/manager/follow-up"
        className="text-[11px] font-semibold text-brand hover:text-brand-deep"
      >
        {common.managerNav.followUp}
      </Link>
      <div className="mt-4 rounded-[14px] border border-[#d6e3de] bg-white p-8 text-center">
        <p className="text-[13px] font-semibold text-[#094033]">
          {c.review.notFound}
        </p>
      </div>
    </div>
  );
}
