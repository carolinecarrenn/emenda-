import { Check } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { ALLOWED_ITEMS } from "../accountData";
import { SectionLabel } from "./SectionLabel";

/* EM-18A "ALLOWED" checklist (761:1220…761:1226): five ticked 11px #094033
   lines set straight on the canvas — no card — on a 13px pitch. Read-only:
   permissions are informational, never editable. */
export function PermissionsAllowedList() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <section>
      <SectionLabel>{c.permissions.allowed}</SectionLabel>
      <ul className="mt-[9px] lg:mt-[24px]">
        {ALLOWED_ITEMS.map((item) => (
          <li
            key={item}
            className="flex items-center gap-[4px] text-[11px] leading-[13px] text-[#094033] lg:text-[13px] lg:leading-[19px]"
          >
            <Check
              size={10}
              strokeWidth={2.5}
              className="shrink-0 text-[#0c513b]"
            />
            {c.permissions.allowedItems[item]}
          </li>
        ))}
      </ul>
    </section>
  );
}
