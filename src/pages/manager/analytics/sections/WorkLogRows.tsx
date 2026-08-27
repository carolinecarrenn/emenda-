import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { ManagedWorker, WorkLogRecord } from "../analytics.mock";

/* EM-R2-02 (1107:177–202) "WORK LOG": 350×60 rows, radius 12, border #ccded6 —
   the newest row is mint (#e8f5f0), the rest white. Left column: 9px semibold
   #667a73 date over a 10px semibold #083d2d title. Right column: 9px regular
   #667a73 source type over a right-aligned 9px semibold #0c5941 status link
   with a chevron. */
export function WorkLogRows({
  worker,
  records,
}: {
  worker: ManagedWorker;
  records: WorkLogRecord[];
}) {
  const { language } = useLanguage();
  const common = useCommonCopy();
  const c = useSectionCopy(ANALYTICS_COPY);

  return (
    <section>
      <h2 className="text-[10px] font-semibold text-brand uppercase lg:text-[11px]">
        {c.workLog.sectionTitle}
      </h2>
      <div className="mt-[10px] space-y-[8px]">
        {records.length === 0 ? (
          <div className="rounded-[12px] border border-[#ccded6] bg-white px-[14px] py-[16px]">
            <p className="text-[10px] text-[#667a73] lg:text-[12px]">
              {c.workLog.noMatch}
            </p>
          </div>
        ) : (
          records.map((record, index) => (
            <Link
              key={record.id}
              to={`/manager/workers/${worker.id}/records/log/${record.id}`}
              className={`flex min-h-[60px] items-center justify-between gap-4 rounded-[12px] border border-[#ccded6] px-[14px] py-[10px] hover:border-brand ${
                index === 0 ? "bg-[#e8f5f0]" : "bg-white"
              }`}
            >
              <div className="min-w-0">
                <p className="text-[9px] font-semibold text-[#667a73] lg:text-[11px]">
                  {formatDisplayDate(record.date, language)}
                </p>
                <p className="mt-[2px] text-[10px] font-semibold text-[#083d2d] lg:text-[12px]">
                  {record.title}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-[9px] text-[#667a73] lg:text-[11px]">
                  {c.workLog.sources[record.source]}
                </p>
                <p className="mt-[2px] flex items-center justify-end gap-[3px] text-[9px] font-semibold text-brand lg:text-[11px]">
                  {record.status === "verified"
                    ? common.status.verified
                    : c.status.recorded}
                  <ChevronRight className="h-[11px] w-[11px]" strokeWidth={2} />
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
