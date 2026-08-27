import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { MANAGER_IDENTITY } from "../accountData";

/* EM-18 identity card (761:1180): 349x71 mint card — 13px bold
   "Sato Kenji · Facility Manager" on a 16px line (761:1181) over the 10px
   "facility · Asia/Tokyo" on a 12px line at y+39 (761:1182), with the
   remaining ~20px falling out as bottom padding. */
export function SettingsIdentityCard() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="rounded-[12px] border border-[#d1e0d9] bg-[#e6f4ed] px-[14px] pt-[13px] pb-[18px] lg:px-[20px] lg:py-[18px]">
      <p className="text-[13px] leading-[16px] font-bold text-[#094033] lg:text-[18px] lg:leading-normal">
        {MANAGER_IDENTITY.name} · {MANAGER_IDENTITY.role}
      </p>
      <p className="mt-[10px] text-[10px] leading-[12px] text-[#6e8a82] lg:text-[12px] lg:leading-normal">
        {c.settings.identityCaption.replace(
          "{facility}",
          MANAGER_IDENTITY.facility,
        )}
      </p>
    </div>
  );
}
