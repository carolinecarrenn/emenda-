import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { JAPAN_COPY } from "../../japan.copy";
import { VISA_PLAN } from "../../japanMock";

/** Pale-mint plan summary card.
 *
 *  Mobile (W-32F `636:16`) leads with the uppercase PLANNED STATUS tag, then
 *  the planned-status headline and label / value rows with the value
 *  right-aligned against the card edge.
 *
 *  Desktop (WD-32F `1014:389`, 520×216) lays the same content out as one
 *  stacked column — headline, then each label on its own 22px line above its
 *  value, with the PLANNED STATUS tag as the closing line.
 */
export function PlanSummaryCard() {
  const c = useSectionCopy(JAPAN_COPY);
  const { language } = useLanguage();

  const rows: [string, string][] = [
    [c.visaPlan.rowEntryDocument, VISA_PLAN.entryDocument],
    [
      c.visaPlan.rowPlannedArrival,
      formatDisplayDate(VISA_PLAN.plannedArrival, language),
    ],
    [c.visaPlan.rowPlanningSource, c.visaPlan.planningSourceSelfAdded],
  ];

  const tagClass =
    "text-[10px] leading-[16px] font-semibold tracking-[0.04em] text-[#5e7066] uppercase lg:text-[13px] lg:leading-[22px] lg:font-normal";

  return (
    <div className="min-h-[270px] rounded-[16px] border border-[#c9ded4] bg-[#eaf5f0] p-[15px] lg:min-h-[216px] lg:rounded-[14px]">
      <p className={`${tagClass} lg:hidden`}>{c.visaPlan.plannedStatusTag}</p>
      <p className="mt-[6px] text-[14px] leading-[22px] font-semibold text-[#131f1a] lg:mt-0 lg:text-[15px]">
        {VISA_PLAN.plannedStatus}
      </p>

      {/* Mobile rows */}
      <dl className="mt-[14px] space-y-[14px] lg:hidden">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="flex items-baseline justify-between gap-[12px]"
          >
            <dt className="text-[11px] leading-[18px] font-semibold text-[#5e7066]">
              {label}
            </dt>
            <dd className="text-right text-[12px] leading-[22px] text-[#131f1a]">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      {/* WD-32F stacked column — one 22px line per label and per value,
          2px apart, with the tag closing the block. */}
      <div className="hidden lg:mt-[6px] lg:block lg:space-y-[2px]">
        {rows.flat().map((line, index) => (
          <p
            key={`${line}-${index}`}
            className="text-[13px] leading-[22px] text-[#5e7066]"
          >
            {line}
          </p>
        ))}
        <p className={tagClass}>{c.visaPlan.plannedStatusTag}</p>
      </div>
    </div>
  );
}
