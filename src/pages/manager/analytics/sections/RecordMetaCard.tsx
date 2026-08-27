import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { ANALYTICS_COPY } from "../analytics.copy";
import type { WorkLogRecord } from "../analytics.mock";

/* EM-R2-03 (1107:213–216) record meta card: white 350×70, radius 12,
   border #ccded6 — 10px semibold #0c5941 caps record title with a 9px
   semibold #0c5941 status tag on the right, over a 10px semibold #083d2d
   "date · source · category" line. The mock's 70px rect puts the title ink
   10px below the card top and leaves 22px under the meta line. */
export function RecordMetaCard({ record }: { record: WorkLogRecord }) {
  const { language } = useLanguage();
  const common = useCommonCopy();
  const c = useSectionCopy(ANALYTICS_COPY);

  const metaLine = c.recordDetail.metaLine
    .replace("{date}", formatDisplayDate(record.date, language))
    .replace("{source}", c.workLog.sources[record.source])
    .replace("{category}", c.recordDetail.category);

  return (
    <div className="rounded-[12px] border border-[#ccded6] bg-white px-[14px] pt-[10px] pb-[22px] lg:py-[12px]">
      <div className="flex items-start justify-between gap-4">
        <p className="text-[10px] font-semibold text-brand uppercase lg:text-[12px]">
          {record.title}
        </p>
        <p className="shrink-0 text-right text-[9px] font-semibold text-brand lg:text-[11px]">
          {record.status === "verified"
            ? common.status.verified
            : c.status.recorded}
        </p>
      </div>
      <p className="mt-[6px] text-[10px] font-semibold text-[#083d2d] lg:mt-[4px] lg:text-[12px]">
        {metaLine}
      </p>
    </div>
  );
}
