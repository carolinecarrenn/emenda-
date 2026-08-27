import { useMemo, useState } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { ACTIVITY_LOG_COPY } from "../activity-log.copy";
import { ACTIVITY_LOG_ROWS, type ActivityLogRow } from "../activity-log.mock";
import { matchesQuery } from "../activityText";
import { ActivityDetailDialog } from "./ActivityDetailDialog";
import type { ActivityFilterKey } from "../activityFilters";
import { ActivityLogFilterBar } from "./ActivityLogFilterBar";
import { ActivityLogIntro } from "./ActivityLogIntro";
import { ActivityLogTable } from "./ActivityLogTable";

/* AD-08 · Activity Log — Audit (1225:345), "Screen Content" (1225:620):
   the 1144px column — intro row, the 44px filter bar 12px below it, and the
   "Company activity log" card 16px below that.

   The category pills and the search field are interactive rather than a
   `?state=` variant, per the app's screen-state convention: only states the
   admin cannot reach by using the UI get their own URL. */
export function ActivityLogScreen({
  initialQuery,
  onReset,
}: {
  initialQuery: string;
  onReset: () => void;
}) {
  const c = useSectionCopy(ACTIVITY_LOG_COPY);
  const [query, setQuery] = useState(initialQuery);
  const [filter, setFilter] = useState<ActivityFilterKey>("all");
  const [openRow, setOpenRow] = useState<ActivityLogRow | null>(null);

  const rows = useMemo(
    () =>
      ACTIVITY_LOG_ROWS.filter(
        (row) =>
          (filter === "all" || row.category === filter) &&
          matchesQuery(row, query, c),
      ),
    [c, filter, query],
  );

  const resetFilters = () => {
    setQuery("");
    setFilter("all");
    onReset();
  };

  return (
    <>
      <div className="flex w-full max-w-[1144px] flex-col">
        <ActivityLogIntro
          onViewDetails={() => setOpenRow(rows[0] ?? ACTIVITY_LOG_ROWS[0])}
        />
        <div className="mt-[16px] lg:mt-[12px]">
          <ActivityLogFilterBar
            query={query}
            onQueryChange={setQuery}
            filter={filter}
            onFilterChange={setFilter}
          />
        </div>
        <div className="mt-[16px]">
          <ActivityLogTable
            rows={rows}
            onOpenRow={setOpenRow}
            onResetFilters={resetFilters}
          />
        </div>
      </div>
      <ActivityDetailDialog row={openRow} onClose={() => setOpenRow(null)} />
    </>
  );
}
