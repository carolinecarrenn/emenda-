import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { OFFLINE_BLOCKED_KEYS } from "../auditData";
import { AuditSectionHeading } from "./AuditSectionHeading";

/* EM-STATE-01 "UNAVAILABLE WHILE OFFLINE" (1109:134-136): white card
   listing every write verb that is blocked — Send Message, Save Settings,
   Generate Operational Report, Generate Audit Export, Resolve Follow-up. */
export function UnavailableOfflineCard() {
  const c = useSectionCopy(AUDIT_COPY).offline;

  return (
    <section>
      <AuditSectionHeading>{c.unavailableHeading}</AuditSectionHeading>
      <ul className="mt-[7px] min-h-[112px] rounded-[12px] border border-[#ccded6] bg-white px-[14px] py-[12px] text-[9px] leading-[11px] text-[#667a73] lg:mt-[10px] lg:min-h-0 lg:px-5 lg:py-4 lg:text-[11px] lg:leading-[20px]">
        {OFFLINE_BLOCKED_KEYS.map((key) => (
          <li key={key} className="flex items-start gap-[6px]">
            <span aria-hidden="true">•</span>
            <span>{c.blocked[key]}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
