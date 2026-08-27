import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";

/* EM-16B pale-pink failure card (1109:103-105): "Export could not be
   prepared" — no file, configuration untouched. */
export function ExportFailureCard() {
  const c = useSectionCopy(AUDIT_COPY).failed;

  return (
    <section className="rounded-[12px] border border-[#ccded6] bg-[#ffe8e0] px-[14px] py-[12px] lg:px-5 lg:py-4">
      <p className="text-[11px] font-semibold text-[#083d2d] lg:text-[15px]">
        {c.failureTitle}
      </p>
      <p className="mt-[8px] text-[9px] leading-[14px] text-[#667a73] lg:text-[11px] lg:leading-[18px]">
        {c.failureBody}
      </p>
    </section>
  );
}
