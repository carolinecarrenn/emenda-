import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";

/* MD-MORE footer privacy banner (1223:67/68): 1060x64 #e3f0e8 panel,
   radius 10, 11px semibold #083d2d line. Desktop-only — EM-MORE ends at the
   Logout row. */
export function MoreBoundaryBanner() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="hidden min-h-[64px] items-center rounded-[10px] bg-[#e3f0e8] px-[20px] py-[16px] lg:flex">
      <p className="text-[11px] leading-[18px] font-semibold text-brand-deep">
        {c.more.boundary}
      </p>
    </div>
  );
}
