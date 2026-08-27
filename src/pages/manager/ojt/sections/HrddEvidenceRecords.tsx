import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { fillOjtCopy, OJT_COPY } from "../ojt.copy";
import { HRDD_EVIDENCE_RECORDS, type EvidenceRecord } from "../ojtMock";
import { OjtSectionHeading } from "./OjtSectionHeading";

/* EM-15A "EVIDENCE RECORDS" (1108:166 · 170 · 174 · 178 · 182): five 50px
   rows, radius 12 on a #ccded6 hairline. A 9px semibold #083d2d type label
   sits over the 9px #667a73 record meta line; the status chip is a right-
   aligned 9px semibold #0c5941 word. The follow-up row awaiting human
   review sits on the pale-yellow #fff5c7 fill. */
export function HrddEvidenceRecords() {
  const c = useSectionCopy(OJT_COPY);
  const { language } = useLanguage();

  const metaFor = (record: EvidenceRecord) => {
    const source =
      record.source === "openItems"
        ? fillOjtCopy(c.evidence.sources.openItems, {
            count: record.openItems ?? 0,
          })
        : c.evidence.sources[record.source];
    return [
      record.person,
      record.date ? formatDisplayDate(record.date, language) : null,
      source,
    ]
      .filter((part): part is string => Boolean(part))
      .join(" · ");
  };

  return (
    <section>
      <OjtSectionHeading>{c.evidence.recordsHeading}</OjtSectionHeading>
      <div className="mt-[9px] space-y-[8px] lg:mt-[11px]">
        {HRDD_EVIDENCE_RECORDS.map((record) => (
          <div
            key={record.id}
            className={`flex min-h-[50px] items-center justify-between gap-4 rounded-[12px] border border-[#ccded6] px-[14px] py-[9px] lg:min-h-[58px] ${
              record.status === "needsReview" ? "bg-[#fff5c7]" : "bg-white"
            }`}
          >
            <div className="min-w-0">
              <p className="text-[9px] leading-[12px] font-semibold text-[#083d2d] lg:text-[11px] lg:leading-[15px]">
                {c.evidence.types[record.type]}
              </p>
              <p className="mt-[6px] text-[9px] leading-[12px] text-[#667a73] lg:mt-[7px] lg:text-[11px] lg:leading-[15px]">
                {metaFor(record)}
              </p>
            </div>
            <p className="shrink-0 text-right text-[9px] leading-[12px] font-semibold text-[#0c5941] lg:text-[11px] lg:leading-[15px]">
              {c.evidence.statuses[record.status]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
