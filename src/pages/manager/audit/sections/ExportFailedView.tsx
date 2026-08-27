import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "../audit.copy";
import { AuditPageHeader } from "./AuditPageHeader";
import { AuditStatusChip } from "./AuditStatusChip";
import { AuditLinkButton } from "./AuditButtons";
import { ExportFailureCard } from "./ExportFailureCard";
import { ConfigurationPreservedCard } from "./ConfigurationPreservedCard";
import { SafeRetryCard } from "./SafeRetryCard";

/* EM-16B Audit Export Failed (761:3067) — the failure branch shared by the
   builder and the confirmation step (?state=failed). White "Failed" chip,
   pale-pink error card, preserved configuration, safe-retry rule, the
   stacked full-width Try Again / Back to Audit Export CTAs, and the
   no-false-success footnote. */
export function ExportFailedView({ retryTo }: { retryTo: string }) {
  const c = useSectionCopy(AUDIT_COPY).failed;

  return (
    <div className="max-w-[1060px]">
      <AuditPageHeader
        title={c.title}
        subtitle={c.subtitle}
        chip={<AuditStatusChip label={c.chip} tone="plain" />}
      />

      <div className="mt-[14px]">
        <ExportFailureCard />
      </div>
      <div className="mt-[14px]">
        <ConfigurationPreservedCard />
      </div>
      <div className="mt-[14px]">
        <SafeRetryCard />
      </div>

      {/* EM-16B CTA stack (1109:112 / 1109:114): unlike EM-16A / EM-17 the
          failure branch stacks two full-width 350x42 buttons 10px apart. */}
      <div className="mt-[16px] flex flex-col gap-[10px] lg:max-w-[350px]">
        <AuditLinkButton to={retryTo} tone="dark">
          {c.retryCta}
        </AuditLinkButton>
        <AuditLinkButton to="/manager/audit-export" tone="outline">
          {c.backCta}
        </AuditLinkButton>
      </div>

      <p className="mt-[12px] text-[9px] text-[#667a73] lg:mt-[14px] lg:text-[11px]">
        {c.footnote}
      </p>
    </div>
  );
}
