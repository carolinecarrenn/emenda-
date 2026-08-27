import { REPORT_STATUSES, type ReportStatusFlag } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { CAREGIVER_COPY } from "../caregiver.copy";
import { OptionChip } from "./OptionChip";

/* WD-55H "Report status": white card, radius 14, caps 11px label,
   three 130x26 chips. The status VALUES are enum data: they display
   through localizeTerm and stay English when stored. */
export function ReportStatusCard({
  value,
  onChange,
}: {
  value: ReportStatusFlag;
  onChange: (value: ReportStatusFlag) => void;
}) {
  const c = useSectionCopy(CAREGIVER_COPY);
  const { language } = useLanguage();

  return (
    <div className="rounded-[14px] border border-lp-line bg-white px-[15px] pt-[7px] pb-[9px]">
      <p className="text-[11px] font-semibold text-lp-muted uppercase">
        {c.form.reportStatus}
      </p>
      <div className="mt-[9px] flex flex-wrap gap-3">
        {REPORT_STATUSES.map((status) => (
          <OptionChip
            key={status}
            label={localizeTerm(status, language)}
            selected={value === status}
            onClick={() => onChange(status)}
          />
        ))}
      </div>
    </div>
  );
}
