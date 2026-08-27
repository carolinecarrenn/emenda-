import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { ANALYTICS_COPY } from "../analytics.copy";
import {
  RECENT_WORK_LOG_IDS,
  WORK_LOG_RECORDS,
  withoutYear,
  type ManagedWorker,
} from "../analytics.mock";

/* EM-R2-01 (1107:147–156) "RECENT WORK LOG": white 350×46 rows, radius 12,
   border #ccded6 — "08 Aug · Warehouse receiving" 10px semibold #083d2d with
   a right-aligned 9px semibold status in #0c5941. */
export function RecentWorkLogCard({ worker }: { worker: ManagedWorker }) {
  const { language } = useLanguage();
  const common = useCommonCopy();
  const c = useSectionCopy(ANALYTICS_COPY);

  const rows = WORK_LOG_RECORDS.filter((record) =>
    RECENT_WORK_LOG_IDS.includes(record.id),
  );

  return (
    <section>
      <h2 className="text-[10px] font-semibold text-brand uppercase lg:text-[11px]">
        {c.continuity.recentWorkLog}
      </h2>
      <div className="mt-[10px] space-y-[8px]">
        {rows.map((record) => (
          <Link
            key={record.id}
            to={`/manager/workers/${worker.id}/records/log/${record.id}`}
            className="flex min-h-[46px] items-center justify-between gap-4 rounded-[12px] border border-[#ccded6] bg-white px-[14px] py-[11px] hover:border-brand"
          >
            <p className="text-[10px] font-semibold text-[#083d2d] lg:text-[12px]">
              {formatDisplayDate(withoutYear(record.date), language)} ·{" "}
              {record.recentTitle ?? record.title}
            </p>
            <p className="shrink-0 text-right text-[9px] font-semibold text-brand lg:text-[11px]">
              {record.status === "verified"
                ? common.status.verified
                : c.status.recorded}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
