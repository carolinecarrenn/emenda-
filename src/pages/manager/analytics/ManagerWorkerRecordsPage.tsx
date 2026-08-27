import { useParams } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useScreenState } from "@/hooks/useScreenState";
import { ANALYTICS_COPY } from "./analytics.copy";
import { findManagedWorker } from "./analytics.mock";
import { RecordsScreenHeader } from "./sections/RecordsScreenHeader";
import { RecordsIdentityCard } from "./sections/RecordsIdentityCard";
import { ContinuityMetricTiles } from "./sections/ContinuityMetricTiles";
import { RecentWorkLogCard } from "./sections/RecentWorkLogCard";
import { CareerAssetsSummaryCard } from "./sections/CareerAssetsSummaryCard";
import { ContinuityActions } from "./sections/ContinuityActions";
import { RecordsFooterNote } from "./sections/RecordsFooterNote";
import { RecordsRestrictedState } from "./sections/RecordsRestrictedState";
import { RecordsEmptyState } from "./sections/RecordsEmptyState";

/** Manager Professional Continuity (Figma EM-R2-01, node 761:2427 — desktop
 *  derived from the mobile IA inside the MD shell; the desktop Analytics
 *  section 1192:952 is still a Figma placeholder).
 *  ?state=restricted → EM-R2-04, ?state=empty → EM-R2-06 (Manager 11). */
export function ManagerWorkerRecordsPage() {
  const { workerId } = useParams();
  const state = useScreenState();
  const c = useSectionCopy(ANALYTICS_COPY);
  const worker = findManagedWorker(workerId);

  if (state === "restricted") return <RecordsRestrictedState worker={worker} />;
  if (state === "empty") return <RecordsEmptyState worker={worker} />;

  return (
    <div className="max-w-[1060px]">
      <RecordsScreenHeader
        title={c.continuity.title}
        subtitle={c.continuity.subtitle}
      />

      <div className="mt-[18px] space-y-[16px]">
        <RecordsIdentityCard worker={worker} variant="continuity" />
        <ContinuityMetricTiles worker={worker} />
        <RecentWorkLogCard worker={worker} />
        <CareerAssetsSummaryCard worker={worker} />
        <ContinuityActions worker={worker} />
        <RecordsFooterNote text={c.continuity.footer} />
      </div>
    </div>
  );
}
