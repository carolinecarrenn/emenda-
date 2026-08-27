import { useSectionCopy } from "@/i18n/copy";
import { ADMIN_ORG } from "../../admin.mock";
import { ACTIVITY_LOG_COPY } from "../activity-log.copy";
import { EXPORT_EVENT_COUNT } from "../activity-log.mock";
import { AuditButton, AuditField, AuditNote, AuditPanel } from "./AuditPanelParts";

/* AD-08D "Export audit log" (1239:723): the EXPORT panel — scope, range,
   format and column list, the red "Privacy boundary" note (1239:740) and the
   "Cancel" / "Export CSV" pair. The scope line is the company itself: AD-08C's
   flow rule keeps every cross-company and platform event out of the file. */
export function ExportAuditLogPanel() {
  const c = useSectionCopy(ACTIVITY_LOG_COPY);

  const scope = `${ADMIN_ORG} · ${c.advanced.export.companyOnly}`;
  const range = `${c.advanced.export.currentFilteredResults} · ${c.advanced.export.eventsCount.replace(
    "{count}",
    String(EXPORT_EVENT_COUNT),
  )}`;

  return (
    <AuditPanel
      pill={c.advanced.export.pill}
      title={c.advanced.export.title}
      subtitle={c.advanced.export.subtitle}
      footnote={c.advanced.export.footnote}
    >
      <AuditField label={c.advanced.export.scope} value={scope} />
      <AuditField label={c.advanced.export.range} value={range} />
      <AuditField
        label={c.advanced.export.format}
        value={c.advanced.export.formatValue}
      />
      <AuditField
        label={c.advanced.export.columns}
        value={c.advanced.export.columnsValue}
      />
      <AuditNote
        tone="error"
        title={c.advanced.export.privacyTitle}
        body={c.advanced.export.privacyBody}
      />
      <div className="flex flex-wrap items-center gap-[16px]">
        <AuditButton variant="outline">{c.advanced.export.cancel}</AuditButton>
        <AuditButton variant="primary">
          {c.advanced.export.exportCsv}
        </AuditButton>
      </div>
    </AuditPanel>
  );
}
