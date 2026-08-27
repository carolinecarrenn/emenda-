import { useState } from "react";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "./analytics.copy";
import { ANALYTICS_SNAPSHOTS, type AnalyticsScope } from "./analytics.mock";
import { AnalyticsScopeChips } from "./sections/AnalyticsScopeChips";
import { AnalyticsMetricTiles } from "./sections/AnalyticsMetricTiles";
import { EfficiencyRetentionRows } from "./sections/EfficiencyRetentionRows";
import { OperationalTrendCard } from "./sections/OperationalTrendCard";
import { MintNoteCard } from "./sections/MintNoteCard";
import { AnalyticsActions } from "./sections/AnalyticsActions";

/** Manager Analytics (Figma EM-13, node 761:2260 — desktop derived from the
 *  mobile IA inside the MD shell; the desktop Analytics section 1192:952 is
 *  still a Figma placeholder). */
export function ManagerAnalyticsPage() {
  const [scope, setScope] = useState<AnalyticsScope>("sevenDays");
  const common = useCommonCopy();
  const c = useSectionCopy(ANALYTICS_COPY);
  const snapshot = ANALYTICS_SNAPSHOTS[scope];

  return (
    <div className="max-w-[1060px]">
      <h1 className="text-[18px] font-bold text-brand-deep lg:mt-[8px] lg:text-[30px]">
        {common.managerNav.analytics}
      </h1>
      <p className="mt-[16px] text-[10px] text-[#65746d] lg:mt-[-2px] lg:text-[13px]">
        {c.analytics.subtitle}
      </p>

      <div className="mt-[20px]">
        <AnalyticsScopeChips scope={scope} onScope={setScope} />
      </div>
      <div className="mt-[14px]">
        <AnalyticsMetricTiles snapshot={snapshot} />
      </div>
      <div className="mt-[18px]">
        <EfficiencyRetentionRows snapshot={snapshot} />
      </div>
      <div className="mt-[16px]">
        <OperationalTrendCard snapshot={snapshot} />
      </div>
      <div className="mt-[12px]">
        <MintNoteCard title={c.analytics.privacyTitle}>
          <p>{c.analytics.privacyBody}</p>
        </MintNoteCard>
      </div>
      <div className="mt-[12px]">
        <AnalyticsActions />
      </div>
    </div>
  );
}
