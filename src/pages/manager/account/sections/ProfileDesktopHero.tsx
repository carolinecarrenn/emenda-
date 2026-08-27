import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { MANAGER_IDENTITY } from "../accountData";

/* MD-18E profile hero (1223:90…1223:94): 1060x110 mint banner — the 26px
   initials block at x=304, then the 20px name, the 12px grey work email and
   the bold 12px "role · facility" line at x=390. Desktop only; EM-18E keeps
   the compact mint identity card. */
export function ProfileDesktopHero() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="hidden h-[110px] rounded-[12px] bg-[#e3f0e8] px-[24px] pt-[20px] lg:flex">
      <p className="mt-[1px] w-[86px] shrink-0 text-[26px] leading-[32px] font-bold text-brand-deep">
        {MANAGER_IDENTITY.initials}
      </p>
      <div className="min-w-0">
        <p className="text-[20px] leading-[26px] font-semibold text-brand-deep">
          {MANAGER_IDENTITY.name}
        </p>
        <p className="mt-[3px] text-[12px] leading-[16px] text-[#8a968f]">
          {MANAGER_IDENTITY.email}
        </p>
        <p className="mt-[6px] text-[12px] leading-[16px] font-semibold text-brand-deep">
          {c.profile.headerRole
            .replace("{role}", MANAGER_IDENTITY.role)
            .replace("{facility}", MANAGER_IDENTITY.facility)}
        </p>
      </div>
    </div>
  );
}
