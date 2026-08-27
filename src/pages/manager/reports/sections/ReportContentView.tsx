import type { CaregiverReport } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { MANAGER_COPY } from "../../manager.copy";

/* EM-11A "CONTENT VIEW": ORIGINAL (white) + TRANSLATED (#e8f5f0) blocks,
   plus caregiver field rows. Report content is user data (never
   auto-translated); labels and enum display values localize. */
function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-[6px]">
      <p className="text-[9px] font-semibold text-[#6b8f80] uppercase lg:text-[10px]">
        {label}
      </p>
      <p className="max-w-[65%] text-right text-[10px] text-[#1f473b] lg:text-[12px]">
        {value || "—"}
      </p>
    </div>
  );
}

export function ReportContentView({ report }: { report: CaregiverReport }) {
  const { language } = useLanguage();
  const c = useSectionCopy(MANAGER_COPY);
  const f = c.detail.fields;

  return (
    <section>
      <h2 className="text-[10px] font-semibold text-brand-deep uppercase lg:text-[11px]">
        {c.detail.contentView}
      </h2>
      <div className="mt-[10px] space-y-[10px]">
        <div className="rounded-[10px] border border-[#c9ded4] bg-white px-[14px] py-[11px]">
          <p className="text-[9px] font-semibold text-[#6b8f80] uppercase">
            {c.detail.original}
          </p>
          <p className="mt-[8px] text-[10px] leading-[16px] text-[#1f473b] lg:text-[12px] lg:leading-[19px]">
            {report.careNotes}
          </p>
        </div>
        {report.careNotesTranslated && (
          <div className="rounded-[10px] border border-[#c9ded4] bg-[#e8f5f0] px-[14px] py-[11px]">
            <p className="text-[9px] font-semibold text-[#6b8f80] uppercase">
              {c.detail.translatedId}
            </p>
            <p className="mt-[8px] text-[10px] leading-[16px] text-[#1f473b] lg:text-[12px] lg:leading-[19px]">
              {report.careNotesTranslated}
            </p>
          </div>
        )}
        <div className="rounded-[10px] border border-[#c9ded4] bg-white px-[14px] py-[8px]">
          <Row
            label={f.reportStatus}
            value={localizeTerm(report.reportFlag, language)}
          />
          <Row label={f.resident} value={report.resident} />
          <Row
            label={f.residentCondition}
            value={localizeTerm(report.residentCondition, language)}
          />
          <Row label={f.meal} value={report.meal} />
          <Row
            label={f.quickNotes}
            value={report.quickNotes
              .map((note) => localizeTerm(note, language))
              .join(" · ")}
          />
          {report.followUp.trim() !== "" && (
            <Row label={f.followUp} value={report.followUp} />
          )}
        </div>
      </div>
    </section>
  );
}
