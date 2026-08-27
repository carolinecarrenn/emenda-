import { useSectionCopy } from "@/i18n/copy";
import { AUDIT_COPY } from "./audit.copy";
import { AuditPageHeader } from "./sections/AuditPageHeader";
import { AuditStatusChip } from "./sections/AuditStatusChip";
import { ExportReadyPackageCard } from "./sections/ExportReadyPackageCard";
import { PackageSummaryRows } from "./sections/PackageSummaryRows";
import { PrivacySafePackageCard } from "./sections/PrivacySafePackageCard";
import { PrototypeStateCard } from "./sections/PrototypeStateCard";
import { AuditActionButton, AuditLinkButton } from "./sections/AuditButtons";

/** Manager Audit Export · success — EM-17 Export Ready (Figma 761:3032,
 *  section 09 Audit & Resilience 759:1304). Mint "Ready" chip, mint package
 *  card with the mock file name, PACKAGE SUMMARY rows, mint PRIVACY-SAFE
 *  PACKAGE card, yellow PROTOTYPE STATE card and the paired
 *  Download Demo / Back to Audit Export CTAs. Download Demo is deliberately
 *  inert: the mock file is prototype-only, so no file record is claimed.
 *  Desktop is derived from the mobile IA inside the MD shell — the Figma
 *  desktop section 1192:960 is still a placeholder. */
export function AuditReadyPage() {
  const c = useSectionCopy(AUDIT_COPY).ready;

  return (
    <div className="max-w-[1060px]">
      <AuditPageHeader
        title={c.title}
        subtitle={c.subtitle}
        chip={<AuditStatusChip label={c.chip} tone="mint" />}
      />

      <div className="mt-[14px]">
        <ExportReadyPackageCard />
      </div>
      <div className="mt-[18px]">
        <PackageSummaryRows />
      </div>
      <div className="mt-[14px]">
        <PrivacySafePackageCard />
      </div>
      <div className="mt-[14px]">
        <PrototypeStateCard />
      </div>

      {/* EM-17 CTA pair (1109:97 / 1109:99): two 168px buttons side by side. */}
      <div className="mt-[16px] grid grid-cols-2 gap-[14px] lg:max-w-[480px]">
        <AuditActionButton tone="dark">{c.downloadCta}</AuditActionButton>
        <AuditLinkButton to="/manager/audit-export" tone="outline">
          {c.backCta}
        </AuditLinkButton>
      </div>
    </div>
  );
}
