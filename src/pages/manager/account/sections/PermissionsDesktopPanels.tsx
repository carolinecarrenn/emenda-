import { Check } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { ALLOWED_ITEMS, MANAGER_IDENTITY } from "../accountData";
import { SectionLabel } from "./SectionLabel";

/* MD-18A role hero (1223:199…1223:201): 1060x92 mint panel — the 20px role
   over the 12px "facility · employment-scoped access" scope line. */
export function PermissionsDesktopHero() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="hidden h-[92px] rounded-[12px] bg-[#e3f0e8] px-[24px] pt-[23px] lg:block">
      <p className="text-[20px] leading-[26px] font-semibold text-brand-deep">
        {MANAGER_IDENTITY.role}
      </p>
      <p className="mt-[5px] text-[12px] leading-[16px] text-[#65746d]">
        {c.permissions.roleCaption.replace(
          "{facility}",
          MANAGER_IDENTITY.facility,
        )}
      </p>
    </div>
  );
}

/* MD-18A permission contract (1223:202…1223:210): the 640x280 white ALLOWED
   card on the left and, 30px to its right, the 390px NOT AVAILABLE column —
   the 180px peach card of red-listed private data over the 82px white
   "Future roles" note. Read-only: permissions are never editable here. */
export function PermissionsDesktopPanels() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="hidden gap-[30px] lg:flex">
      <section className="w-[640px]">
        <SectionLabel>{c.permissions.allowed}</SectionLabel>
        <ul className="mt-[2px] h-[280px] rounded-[10px] border border-[#dbe3de] bg-white px-[24px] pt-[26px]">
          {ALLOWED_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-center gap-[5px] text-[13px] leading-[16px] text-brand-deep"
            >
              <Check
                size={11}
                strokeWidth={2.5}
                className="shrink-0 text-[#0c5941]"
              />
              {c.permissions.allowedItems[item]}
            </li>
          ))}
          <li className="flex items-center gap-[5px] text-[13px] leading-[16px] text-brand-deep">
            <Check
              size={11}
              strokeWidth={2.5}
              className="shrink-0 text-[#0c5941]"
            />
            {c.permissions.desktopAllowedExtra}
          </li>
        </ul>
      </section>

      <section className="w-[390px]">
        <SectionLabel tone="red">{c.permissions.notAvailable}</SectionLabel>
        <div className="mt-[2px] h-[180px] rounded-[10px] bg-[#fce8e0] px-[24px] pt-[26px]">
          {c.permissions.desktopDeniedLines.map((line) => (
            <p
              key={line}
              className="text-[13px] leading-[16px] font-semibold text-[#c74a3d]"
            >
              {line}
            </p>
          ))}
        </div>
        <div className="mt-[18px] h-[82px] rounded-[10px] border border-[#dbe3de] bg-white px-[24px] pt-[21px]">
          <p className="text-[12px] leading-[16px] font-semibold text-brand-deep">
            {c.permissions.futureTitle}
          </p>
          <p className="mt-[8px] max-w-[330px] text-[11px] leading-[14px] text-[#65746d]">
            {c.permissions.futureBody}
          </p>
        </div>
      </section>
    </div>
  );
}
