import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { ANALYTICS_COPY } from "../analytics.copy";
import {
  CAREER_EVIDENCE_IDS,
  WORK_LOG_RECORDS,
  withoutYear,
  type ManagedWorker,
} from "../analytics.mock";

/* EM-R2-05 (1107:253–262) "VERIFIED PROFESSIONAL EVIDENCE": 9px caps #0c5941
   label over white 350×38 rows, radius 12, border #ccded6 — "08 Aug ·
   Warehouse receiving" 9px semibold #083d2d with a right-aligned 9px semibold
   #0c5941 "Verified" tag on every entry. */
export function VerifiedEvidenceList({ worker }: { worker: ManagedWorker }) {
  const { language } = useLanguage();
  const common = useCommonCopy();
  const c = useSectionCopy(ANALYTICS_COPY);

  const rows = WORK_LOG_RECORDS.filter((record) =>
    CAREER_EVIDENCE_IDS.includes(record.id),
  );

  return (
    <section>
      <h2 className="text-[9px] font-semibold text-brand uppercase lg:text-[11px]">
        {c.careerAssets.evidenceTitle}
      </h2>
      <div className="mt-[8px] space-y-[8px]">
        {rows.map((record) => (
          <Link
            key={record.id}
            to={`/manager/workers/${worker.id}/records/log/${record.id}`}
            className="flex min-h-[38px] items-center justify-between gap-4 rounded-[12px] border border-[#ccded6] bg-white px-[14px] py-[9px] hover:border-brand"
          >
            <p className="text-[9px] font-semibold text-[#083d2d] lg:text-[11px]">
              {formatDisplayDate(withoutYear(record.date), language)} ·{" "}
              {record.title}
            </p>
            <p className="shrink-0 text-right text-[9px] font-semibold text-brand lg:text-[11px]">
              {common.status.verified}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
