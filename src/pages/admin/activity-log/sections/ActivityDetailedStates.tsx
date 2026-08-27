import { useSectionCopy } from "@/i18n/copy";
import { ACTIVITY_LOG_COPY } from "../activity-log.copy";
import type { ActivityLogRow } from "../activity-log.mock";
import { AdvancedActivityFiltersPanel } from "./AdvancedActivityFiltersPanel";
import { AuditEventDetailPanel } from "./AuditEventDetailPanel";
import { ExportAuditLogPanel } from "./ExportAuditLogPanel";

/* AD-08D · Activity Detailed States (1239:669): the #fafcfb board, radius 16,
   1px #d1e3db — "CONCRETE OPERATIONAL STATES" eyebrow, the 23px title, the
   11px read-only note, then the three 760x720 panels side by side.

   The frame is 2423px wide, so the panels keep their drawn 760px width inside
   a horizontal scroll track rather than being squeezed into the 1144px admin
   content column. Below lg they stack. */
export function ActivityDetailedStates({ row }: { row: ActivityLogRow }) {
  const c = useSectionCopy(ACTIVITY_LOG_COPY);

  return (
    <section className="rounded-[16px] border border-[#d1e3db] bg-[#fafcfb] p-[16px] lg:p-[23px]">
      <p className="text-[10px] leading-none font-semibold tracking-[0.04em] text-[#0a5740]">
        {c.advanced.eyebrow}
      </p>
      <h2 className="mt-[16px] text-[19px] leading-[26px] font-semibold text-[#13332b] lg:text-[23px] lg:leading-none">
        {c.advanced.title}
      </h2>
      <p className="mt-[11px] text-[11px] leading-[15px] text-[#63756e]">
        {c.advanced.subtitle}
      </p>
      <div className="mt-[25px] -mx-[16px] flex flex-col gap-[16px] overflow-x-auto px-[16px] lg:-mx-[23px] lg:flex-row lg:items-start lg:gap-[60px] lg:px-[23px] lg:pb-[8px]">
        <AdvancedActivityFiltersPanel />
        <AuditEventDetailPanel row={row} />
        <ExportAuditLogPanel />
      </div>
    </section>
  );
}
