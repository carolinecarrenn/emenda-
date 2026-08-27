import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "./audit.copy";
import { AUDIT_PACKAGE } from "./auditData";
import { AuditPageHeader } from "./sections/AuditPageHeader";
import { AuditMetricTiles } from "./sections/AuditMetricTiles";
import { ExportScopeRows } from "./sections/ExportScopeRows";
import { IncludedExcludedCard } from "./sections/IncludedExcludedCard";
import { ReviewChecklistCard } from "./sections/ReviewChecklistCard";
import { AuditLinkButton } from "./sections/AuditButtons";
import { ExportFailedView } from "./sections/ExportFailedView";

/** Manager Audit Export — EM-16 export builder (Figma 761:2892, section 09
 *  Audit & Resilience 759:1304). 2x2 mint tiles, EXPORT SCOPE rows, mint
 *  INCLUDED/EXCLUDED card, yellow REVIEW BEFORE GENERATE checklist and the
 *  dark generate pill. `?state=failed` renders the EM-16B failure branch.
 *  Desktop is derived from the mobile IA inside the MD shell — the Figma
 *  desktop section 1192:960 is still a placeholder. */
export function AuditExportPage() {
  const state = useScreenState();
  const c = useSectionCopy(AUDIT_COPY);

  if (state === "failed") {
    return <ExportFailedView retryTo="/manager/audit-export" />;
  }

  const tiles = [
    { key: "records", label: c.tiles.records, value: String(AUDIT_PACKAGE.records) },
    { key: "workers", label: c.tiles.workers, value: String(AUDIT_PACKAGE.workers) },
    { key: "formats", label: c.tiles.formats, value: AUDIT_PACKAGE.formats },
    { key: "privacy", label: c.tiles.privacy, value: c.export.privacyEnforced },
  ];

  return (
    <div className="max-w-[1060px]">
      <AuditPageHeader title={c.export.title} subtitle={c.export.subtitle} />

      <div className="mt-[23px] lg:mt-[18px]">
        <AuditMetricTiles tiles={tiles} />
      </div>
      <div className="mt-[22px]">
        <ExportScopeRows />
      </div>
      <div className="mt-[14px]">
        <IncludedExcludedCard />
      </div>
      <div className="mt-[14px]">
        <ReviewChecklistCard />
      </div>

      <AuditLinkButton
        to="/manager/audit-export/confirm"
        tone="dark"
        className="mt-[16px] w-full lg:w-[350px]"
      >
        {c.export.cta}
      </AuditLinkButton>

      <p className="mt-[11px] text-[9px] text-[#667a73] lg:mt-[14px] lg:text-[11px]">
        {c.export.footnote}
      </p>
    </div>
  );
}
