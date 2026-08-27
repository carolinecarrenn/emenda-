import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { JAPAN_COPY } from "../../japan.copy";
import type { ResidenceRecord } from "../../japanMock";
import { SecondaryPill } from "../../sections/HubCard";

/** Mint residence record card. Mobile (Figma 626:906): status headline,
 *  then label / right-aligned value rows on a 34px pitch with the Edit pill
 *  parked bottom-right. Desktop keeps the WD-33 stacked label-over-value
 *  list. The pill is absent on the WD-33M verified record. */
export function ResidenceRecordCard({
  record,
  sourceLabel,
  editTo,
}: {
  record: ResidenceRecord;
  sourceLabel: string;
  editTo?: string;
}) {
  const c = useSectionCopy(JAPAN_COPY);
  const cc = useCommonCopy();
  const { language } = useLanguage();

  const rows: [string, string][] = [
    [c.residence.rowValidUntil, formatDisplayDate(record.validUntil, language)],
    [c.residence.rowWorkPermission, record.workPermission],
    [c.residence.rowSource, sourceLabel],
  ];

  return (
    <div
      className={`relative rounded-[16px] border border-[#c9ded4] bg-[#eaf5f0] p-[15px] lg:rounded-[14px] ${
        editTo
          ? "min-h-[224px] lg:min-h-[236px]"
          : "min-h-[192px] lg:min-h-[192px]"
      }`}
    >
      <p className="text-[14px] leading-[22px] font-semibold text-[#131f1a] lg:text-[15px]">
        {record.status}
      </p>
      <dl className="mt-[16px] space-y-[16px] lg:mt-[6px] lg:space-y-[2px]">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="flex items-baseline justify-between gap-[12px] lg:block"
          >
            <dt className="shrink-0 text-[11px] leading-[18px] font-semibold text-[#5e7066] lg:text-[13px] lg:leading-[22px] lg:font-normal">
              {label}
            </dt>
            <dd className="text-right text-[12px] leading-[18px] text-[#131f1a] lg:text-left lg:text-[13px] lg:leading-[22px] lg:text-[#5e7066]">
              {value}
            </dd>
          </div>
        ))}
      </dl>
      {editTo && (
        <div className="absolute right-[17px] bottom-[8px] lg:static lg:mt-[2px] lg:flex lg:justify-end">
          <SecondaryPill label={cc.action.edit} to={editTo} />
        </div>
      )}
    </div>
  );
}
