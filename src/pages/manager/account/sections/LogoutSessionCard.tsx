import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { MANAGER_IDENTITY } from "../accountData";

/* EM-20 "CURRENT SESSION" (1133:145…1133:149): 350x102 mint card — 9px caps
   label, 11px semibold name · role, 9px organization · facility, then the
   "context preserved until sign out" status line. */
export function LogoutSessionCard() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="rounded-[10px] border border-[#d1e0d9] bg-[#e6f4ed] px-[12px] py-[14px]">
      <p className="text-[9px] font-semibold text-[#0c513b] uppercase lg:text-[11px]">
        {c.logout.currentSession}
      </p>
      <p className="mt-[8px] text-[11px] font-semibold text-brand-deep lg:text-[13px]">
        {MANAGER_IDENTITY.name} · {MANAGER_IDENTITY.role}
      </p>
      <p className="mt-[6px] text-[9px] text-[#65746d] lg:text-[11px]">
        {MANAGER_IDENTITY.organization} · {MANAGER_IDENTITY.facility}
      </p>
      <p className="mt-[10px] text-[9px] text-[#65746d] lg:text-[11px]">
        {c.logout.sessionStatus}
      </p>
    </div>
  );
}
