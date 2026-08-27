import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { LOGS_COPY } from "./logs.copy";
import { DRAFT_SYNC_ITEMS, DRAFT_SYNC_STATUS, type DraftSyncKey } from "./logsMock";
import { InfoCard } from "./sections/InfoCard";
import { LogsAction } from "./sections/LogsAction";
import { LogsHeader } from "./sections/LogsHeader";
import { SectionLabel } from "./sections/SectionLabel";
import { StateBanner } from "./sections/StateBanner";
import { SyncRow } from "./sections/SyncRow";

/** Offline draft sync — Figma WD-61AR syncing (1205:150) · WD-61AS partial
 *  failure (1205:165) · WD-61AT complete (1205:182); mobile W-61AR–W-61AT.
 *  Local drafts stay safe on the device until every row reports Synced. */
export function DraftSyncPage() {
  const state = useScreenState();
  const c = useSectionCopy(LOGS_COPY);

  const phase =
    state === "failed" ? "failed" : state === "done" ? "done" : "syncing";
  const statuses = DRAFT_SYNC_STATUS[phase];

  const rowLabel: Record<DraftSyncKey, string> = {
    career: c.sync.rowCareer,
    health: c.sync.rowHealth,
    life: c.sync.rowLife,
  };
  const statusLabel = {
    syncing: c.sync.syncing,
    waiting: c.sync.waiting,
    synced: c.sync.synced,
    failed: c.sync.syncFailedTag,
  };

  return (
    <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
      <LogsHeader
        crumb={c.overview.title}
        crumbTo="/worker/logs"
        title={phase === "done" ? c.sync.doneScreenTitle : c.sync.title}
        subtitle={
          phase === "done"
            ? c.sync.doneSubtitle
            : phase === "failed"
              ? c.sync.failedSubtitle
              : c.sync.subtitle
        }
      />

      {phase === "failed" && (
        /* WD-61AS — partial failure; nothing is lost. */
        <StateBanner
          className="mt-[12px] lg:mt-[26px]"
          tone="red"
          title={c.sync.failedTitle}
          body={c.sync.failedBody}
        />
      )}

      <SectionLabel className="mt-[12px] lg:mt-[50px]">{c.sync.draftTitle}</SectionLabel>
      <div className="mt-[12px] space-y-[12px] lg:space-y-[16px]">
        {DRAFT_SYNC_ITEMS.map((item) => (
          <SyncRow
            key={item.key}
            label={rowLabel[item.key]}
            draftTitle={item.title}
            status={statusLabel[statuses[item.key]]}
            failed={statuses[item.key] === "failed"}
          />
        ))}
      </div>

      {phase === "done" ? (
        /* WD-61AT — every local draft is stored in the EMENDA account. */
        <InfoCard
          className="mt-[12px] lg:mt-[24px]"
          title={c.sync.doneTitle}
          body={c.sync.doneBody}
        />
      ) : (
        <InfoCard
          className="mt-[12px] lg:mt-[24px]"
          size="sm"
          title={c.sync.draftTitle}
          body={c.sync.draftBody}
        />
      )}

      <div className="mt-[12px] lg:mt-[24px] flex flex-col gap-3 lg:flex-row lg:gap-4">
        {phase === "syncing" && (
          /* W-61AR "Selesai sinkronisasi" — closes the run on WD/W-61AT. */
          <LogsAction
            to="/worker/logs/sync?state=done"
            label={c.sync.completeCta}
            widthClass="lg:w-[240px]"
          />
        )}
        {phase === "failed" && (
          <LogsAction
            to="/worker/logs/sync?state=done"
            label={c.sync.retryCta}
            widthClass="lg:w-[240px]"
          />
        )}
        <LogsAction
          to="/worker/logs"
          label={c.overview.title}
          variant="outline"
          widthClass="lg:w-[200px]"
        />
      </div>
    </div>
  );
}
