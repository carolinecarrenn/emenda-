import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { AUDIT_COPY } from "./audit.copy";
import { AUDIT_PACKAGE } from "./auditData";
import { formatCompactRange } from "./auditFormat";
import { AuditPageHeader } from "./sections/AuditPageHeader";
import { AuditMetricTiles } from "./sections/AuditMetricTiles";
import { PackageContentsRows } from "./sections/PackageContentsRows";
import { ExcludedByDesignCard } from "./sections/ExcludedByDesignCard";
import { ConfirmExportCard } from "./sections/ConfirmExportCard";
import { AuditLinkButton } from "./sections/AuditButtons";
import { ExportFailedView } from "./sections/ExportFailedView";

/** Manager Audit Export · confirmation step — EM-16A (Figma 761:2960,
 *  section 09 Audit & Resilience 759:1304). 2x2 mint tiles RECORDS /
 *  WORKERS / PERIOD / FORMATS, PACKAGE CONTENTS rows with counts, mint
 *  EXCLUDED BY DESIGN card, yellow CONFIRM EXPORT card, the paired
 *  Confirm Export / Back to Audit Export CTAs (168px each in the mock) and
 *  the separation footnote. `?state=failed` renders the EM-16B branch.
 *  Desktop is derived from the mobile IA inside the MD shell — the Figma
 *  desktop section 1192:960 is still a placeholder. */
export function AuditConfirmPage() {
  const state = useScreenState();
  const { language } = useLanguage();
  const c = useSectionCopy(AUDIT_COPY);

  if (state === "failed") {
    return <ExportFailedView retryTo="/manager/audit-export/confirm" />;
  }

  const tiles = [
    {
      key: "records",
      label: c.tiles.records,
      value: String(AUDIT_PACKAGE.records),
    },
    {
      key: "workers",
      label: c.tiles.workers,
      value: String(AUDIT_PACKAGE.workers),
    },
    {
      key: "period",
      label: c.tiles.period,
      value: formatCompactRange(
        AUDIT_PACKAGE.periodStart,
        AUDIT_PACKAGE.periodEndShort,
        language,
      ),
    },
    { key: "formats", label: c.tiles.formats, value: AUDIT_PACKAGE.formats },
  ];

  return (
    <div className="max-w-[1060px]">
      <AuditPageHeader title={c.confirm.title} subtitle={c.confirm.subtitle} />

      <div className="mt-[23px] lg:mt-[18px]">
        <AuditMetricTiles tiles={tiles} />
      </div>
      <div className="mt-[22px]">
        <PackageContentsRows />
      </div>
      <div className="mt-[14px]">
        <ExcludedByDesignCard />
      </div>
      <div className="mt-[14px]">
        <ConfirmExportCard />
      </div>

      {/* EM-16A CTA pair (1109:67 / 1109:69): two 168px buttons side by side. */}
      <div className="mt-[16px] grid grid-cols-2 gap-[14px] lg:max-w-[480px]">
        <AuditLinkButton to="/manager/audit-export/ready" tone="dark">
          {c.confirm.confirmCta}
        </AuditLinkButton>
        <AuditLinkButton to="/manager/audit-export" tone="outline">
          {c.confirm.backCta}
        </AuditLinkButton>
      </div>

      <p className="mt-[14px] text-[9px] text-[#667a73] lg:text-[11px]">
        {c.confirm.footnote}
      </p>
    </div>
  );
}
