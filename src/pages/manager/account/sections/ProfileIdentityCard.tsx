import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { MANAGER_IDENTITY } from "../accountData";

/* EM-18E mint header card (761:1097): 349x91, radius 12 — 13px bold name
   over two 10px #6f8881 lines (761:1099 / 761:1100) tight-stacked on a 12px
   line 8px under the name, with the remaining ~30px as bottom padding. */
export function ProfileIdentityCard() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="rounded-[12px] border border-[#d1e0d9] bg-[#e6f4ed] px-[14px] pt-[13px] pb-[28px] lg:px-[20px] lg:py-[18px]">
      <p className="text-[13px] leading-[16px] font-bold text-[#0d4a3e] lg:text-[18px] lg:leading-normal">
        {MANAGER_IDENTITY.name}
      </p>
      <p className="mt-[8px] text-[10px] leading-[12px] text-[#6f8881] lg:text-[12px] lg:leading-normal">
        {c.profile.headerRole
          .replace("{role}", MANAGER_IDENTITY.role)
          .replace("{facility}", MANAGER_IDENTITY.facility)}
      </p>
      <p className="text-[10px] leading-[12px] text-[#6f8881] lg:text-[12px] lg:leading-normal">
        {c.profile.headerAccess}
      </p>
    </div>
  );
}
