import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { AUDIT_PACKAGE } from "../auditData";
import { fill } from "../auditFormat";

/* EM-17 mint package card (1109:74-77): "Audit evidence package ready" over
   the mock file name and a records/workers/format/prototype meta line. */
export function ExportReadyPackageCard() {
  const c = useSectionCopy(AUDIT_COPY).ready;

  return (
    <section className="rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[14px] py-[12px] lg:px-5 lg:py-4">
      <p className="text-[11px] font-semibold text-[#083d2d] lg:text-[15px]">
        {c.packageTitle}
      </p>
      <p className="mt-[8px] text-[10px] font-semibold break-all text-[#083d2d] lg:text-[13px]">
        {AUDIT_PACKAGE.fileName}
      </p>
      <p className="mt-[6px] text-[9px] text-[#667a73] lg:text-[11px]">
        {fill(c.packageMeta, {
          records: AUDIT_PACKAGE.records,
          workers: AUDIT_PACKAGE.workers,
          formats: AUDIT_PACKAGE.formats,
        })}
      </p>
    </section>
  );
}
