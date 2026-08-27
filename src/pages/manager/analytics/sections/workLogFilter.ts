import type { WorkLogRecord } from "../analytics.mock";

/** EM-R2-02 (1107:171–176) chip row — one selected view at a time,
 *  "Last 30 days" being the default mint chip. */
export type WorkLogFilter = "last30" | "allRecords" | "allStatuses";

export const WORK_LOG_FILTERS: WorkLogFilter[] = [
  "last30",
  "allRecords",
  "allStatuses",
];

export function filterWorkLog(
  records: WorkLogRecord[],
  filter: WorkLogFilter,
): WorkLogRecord[] {
  if (filter === "last30") {
    return records.filter((record) => record.withinLast30Days);
  }
  return records;
}
