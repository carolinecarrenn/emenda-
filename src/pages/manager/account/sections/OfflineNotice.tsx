import { WifiOff } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";

/* EM-STATE-01 offline · read-only strip reused by the account screens
   (?state=offline): white "Offline" chip + writes-disabled line. */
export function OfflineNotice() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="flex items-center gap-[10px] rounded-[10px] border border-[#d1e0d9] bg-white px-[14px] py-[11px]">
      <span className="flex items-center gap-[6px] rounded-full border border-[#d1e0d9] bg-white px-[10px] py-[4px] text-[9px] font-semibold text-brand-deep lg:text-[11px]">
        <WifiOff size={12} strokeWidth={1.5} />
        {c.offline.chip}
      </span>
      <p className="text-[9px] text-[#65746d] lg:text-[11px]">
        {c.offline.body}
      </p>
    </div>
  );
}
