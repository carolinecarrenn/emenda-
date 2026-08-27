import type { ReactNode } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* MD-05A ADMINISTRATIVE SCOPE (1213:574…576): a 380x298 white card holding
   the three limits — this screen supports operational reminders and record
   visibility only, it does not determine legal status, submit government
   filings or expose private Health / Stress / Life data, and source
   timestamps remain unchanged. MD-05A parks the "Create Follow-up" action
   on the floor of this card, so the page hands it in as `action`. */
export function AdministrativeScopeCard({ action }: { action?: ReactNode }) {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <section className="rounded-[12px] border border-[#dbe3de] bg-white px-[18px] py-[18px] lg:flex lg:min-h-[298px] lg:flex-col lg:px-[24px] lg:pt-[24px] lg:pb-[35px]">
      <h2 className="text-[13px] font-semibold text-[#083d2d] lg:text-[14px]">
        {c.visa.scopeTitle}
      </h2>
      <div className="mt-[16px] space-y-[16px] text-[12px] leading-[18px] text-[#66736b] lg:leading-[16px]">
        {c.visa.scopeLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      {action && <div className="mt-[16px] lg:mt-auto">{action}</div>}
    </section>
  );
}
