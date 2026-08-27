import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "./audit.copy";
import { OFFLINE_SNAPSHOT } from "./auditData";
import { fill } from "./auditFormat";
import { StateScreenLayout } from "./sections/StateScreenLayout";
import { AuditStatusChip } from "./sections/AuditStatusChip";
import { AuditMetricTiles } from "./sections/AuditMetricTiles";
import { ReadOnlyModeCard } from "./sections/ReadOnlyModeCard";
import { UnavailableOfflineCard } from "./sections/UnavailableOfflineCard";
import { NoSilentWritesCard } from "./sections/NoSilentWritesCard";
import { AuditLinkButton } from "./sections/AuditButtons";

/** App-wide offline interstitial — EM-STATE-01 Offline · Read-only
 *  (Figma 761:3013, section 09 Audit & Resilience 759:1304). Full-screen,
 *  no bottom nav: white "Offline" chip, 2x2 tiles FACILITY / WORKERS /
 *  PENDING (yellow) / DATA SCOPE, mint READ-ONLY MODE card, white
 *  UNAVAILABLE WHILE OFFLINE list of blocked write verbs, yellow
 *  NO SILENT WRITES card and the single dark Retry Connection CTA, which
 *  continues into the EM-STATE-02 reconnect review. */
export function ManagerOfflineStatePage() {
  const c = useSectionCopy(AUDIT_COPY);

  const tiles = [
    {
      key: "facility",
      label: c.tiles.facility,
      value: c.offline.facilityValue,
    },
    {
      key: "workers",
      label: c.tiles.workers,
      value: fill(c.offline.workersValue, {
        count: OFFLINE_SNAPSHOT.cachedWorkers,
      }),
    },
    {
      key: "pending",
      label: c.tiles.pending,
      value: fill(c.offline.pendingValue, {
        count: OFFLINE_SNAPSHOT.pendingActions,
      }),
      tone: "caution" as const,
    },
    {
      key: "dataScope",
      label: c.tiles.dataScope,
      value: c.offline.dataScopeValue,
    },
  ];

  return (
    <StateScreenLayout
      title={c.offline.title}
      subtitle={c.offline.subtitle}
      chip={<AuditStatusChip label={c.offline.chip} tone="plain" />}
    >
      <div className="mt-[14px]">
        <AuditMetricTiles tiles={tiles} columns={2} />
      </div>
      <div className="mt-[22px]">
        <ReadOnlyModeCard />
      </div>
      <div className="mt-[18px]">
        <UnavailableOfflineCard />
      </div>
      <div className="mt-[14px]">
        <NoSilentWritesCard />
      </div>

      <AuditLinkButton
        to="/manager/state/reconnected"
        tone="dark"
        className="mt-[16px] w-full"
      >
        {c.offline.retryCta}
      </AuditLinkButton>
    </StateScreenLayout>
  );
}
