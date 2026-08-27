import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { MANAGER_IDENTITY } from "../accountData";

/* EM-18A role card (761:1217): 349x71 mint card — 14px bold "Facility
   Manager" over the 10px "facility · employment-scoped access" caption. */
export function PermissionsRoleCard() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="h-[71px] rounded-[12px] border border-[#d1e0d9] bg-[#e6f4ed] px-[14px] py-[13px]">
      <p className="text-[14px] leading-[17px] font-bold text-[#094033]">
        {MANAGER_IDENTITY.role}
      </p>
      <p className="mt-[8px] text-[10px] leading-[12px] text-[#6e8a82]">
        {c.permissions.roleCaption.replace(
          "{facility}",
          MANAGER_IDENTITY.facility,
        )}
      </p>
    </div>
  );
}
