import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useScreenState } from "@/hooks/useScreenState";
import { ANALYTICS_COPY } from "./analytics.copy";
import { findManagedWorker, WORK_LOG_RECORDS } from "./analytics.mock";
import { RecordsScreenHeader } from "./sections/RecordsScreenHeader";
import { RecordsIdentityCard } from "./sections/RecordsIdentityCard";
import { WorkLogFilterChips } from "./sections/WorkLogFilterChips";
import { WorkLogRows } from "./sections/WorkLogRows";
import { MintNoteCard } from "./sections/MintNoteCard";
import { WorkLogActions } from "./sections/WorkLogActions";
import { RecordsFooterNote } from "./sections/RecordsFooterNote";
import { RecordsRestrictedState } from "./sections/RecordsRestrictedState";
import { RecordsEmptyState } from "./sections/RecordsEmptyState";
import { filterWorkLog, type WorkLogFilter } from "./sections/workLogFilter";

/** Manager Worker Work Log (Figma EM-R2-02, node 761:2468 — desktop derived
 *  from the mobile IA inside the MD shell).
 *  ?state=restricted → EM-R2-04, ?state=empty → EM-R2-06 (Manager 11). */
export function ManagerWorkLogPage() {
  const { workerId } = useParams();
  const [filter, setFilter] = useState<WorkLogFilter>("last30");
  const state = useScreenState();
  const c = useSectionCopy(ANALYTICS_COPY);
  const worker = findManagedWorker(workerId);

  if (state === "restricted") return <RecordsRestrictedState worker={worker} />;
  if (state === "empty") return <RecordsEmptyState worker={worker} />;

  const records = filterWorkLog(WORK_LOG_RECORDS, filter);

  return (
    <div className="max-w-[1060px]">
      <RecordsScreenHeader
        title={c.workLog.title}
        subtitle={c.workLog.subtitle}
      />

      <div className="mt-[18px] space-y-[16px]">
        <RecordsIdentityCard worker={worker} variant="log" />
        <WorkLogFilterChips filter={filter} onFilter={setFilter} />
        <WorkLogRows worker={worker} records={records} />
        <MintNoteCard title={c.workLog.accessScopeTitle}>
          <p>{c.workLog.accessScopeBody}</p>
        </MintNoteCard>
        <WorkLogActions worker={worker} />
        <RecordsFooterNote text={c.workLog.footer} />
      </div>
    </div>
  );
}
