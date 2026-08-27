import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { MANAGER_IDENTITY } from "../accountData";

/* EM-MORE mint identity card (761:1031) on mobile — name · role, facility ·
   operational access, the unfilled 72x44 "Switch" pill (761:1034 carries the
   card's own mint, not a white fill) and the "Manager Profile ›" link at
   y+59 (965:66).
   MD-MORE (1223:35) on desktop — 104px mint banner with the outlined
   "Open Manager Profile" button on the right. */
export function MoreIdentityBanner() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <>
      <div className="h-[75px] rounded-[12px] border border-[#d1e0d9] bg-[#e6f4ed] px-[14px] pt-[13px] lg:hidden">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[13px] leading-[16px] font-bold text-[#094033]">
              {MANAGER_IDENTITY.name} · {MANAGER_IDENTITY.role}
            </p>
            <p className="mt-[10px] text-[10px] leading-[12px] text-[#6e8a82]">
              {c.more.identityCaption.replace(
                "{facility}",
                MANAGER_IDENTITY.facility,
              )}
            </p>
          </div>
          <button
            type="button"
            className="h-[44px] w-[72px] shrink-0 rounded-[16px] border border-[#dfece7] text-[10px] font-bold text-[#094033] hover:border-brand"
          >
            {c.more.switchPill}
          </button>
        </div>
        <Link
          to="/manager/profile"
          className="mt-[2px] flex w-fit items-center gap-[4px] text-[11px] leading-[13px] font-semibold text-[#094033]"
        >
          {c.more.managerProfileLink}
          <ChevronRight size={12} strokeWidth={2} />
        </Link>
      </div>

      <div className="hidden h-[104px] items-center justify-between rounded-[12px] bg-[#e3f0e8] pl-[24px] pr-[30px] lg:flex">
        {/* 1223:36 sits at y+24 and 1223:37 at y+54 — top-anchored, not
            centred against the 104px banner. */}
        <div className="self-start pt-[24px]">
          <p className="text-[18px] leading-[20px] font-semibold text-brand-deep">
            {MANAGER_IDENTITY.name} · {MANAGER_IDENTITY.role}
          </p>
          <p className="mt-[10px] text-[12px] leading-[20px] text-[#65746d]">
            {MANAGER_IDENTITY.organization} · {MANAGER_IDENTITY.facility}
          </p>
        </div>
        <Link
          to="/manager/profile"
          className="flex h-[42px] w-[180px] items-center justify-center rounded-[9px] border border-[#dbe3de] bg-white text-[12px] font-semibold text-brand-deep hover:border-brand"
        >
          {c.more.openManagerProfile}
        </Link>
      </div>
    </>
  );
}
