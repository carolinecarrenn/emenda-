import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { PENDING_ACTIONS } from "../auditData";
import { AuditSectionHeading } from "./AuditSectionHeading";

/* EM-STATE-02 "PENDING ACTION REVIEW" (1109:147-159): 58px rows —
   Follow-up draft / Settings changes on mint #e8f5f0, Report generation on
   yellow #fff5c7 because it needs a fresh data check. */
export function PendingActionRows() {
  const c = useSectionCopy(AUDIT_COPY).reconnected;

  return (
    <section>
      <AuditSectionHeading>{c.pendingHeading}</AuditSectionHeading>
      <div className="mt-[6px] space-y-[8px] lg:mt-[10px]">
        {PENDING_ACTIONS.map((action) => (
          <div
            key={action.key}
            className={`min-h-[58px] rounded-[12px] border border-[#ccded6] px-[14px] py-[11px] lg:px-5 lg:py-[14px] ${
              action.tone === "caution" ? "bg-[#fff5c7]" : "bg-[#e8f5f0]"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-[10px] font-semibold text-[#083d2d] lg:text-[13px]">
                {c.actionLabels[action.key]}
              </p>
              <p className="text-right text-[9px] font-semibold text-[#0c5941] lg:text-[11px]">
                {c.actionStatuses[action.key]}
              </p>
            </div>
            <p className="mt-[5px] text-[9px] text-[#667a73] lg:text-[11px]">
              {c.actionCaptions[action.key]}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
