import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { ACTIVITY_LOG_COPY } from "../activity-log.copy";
import type { ActivityLogRow } from "../activity-log.mock";
import {
  actionLabel,
  actorLabel,
  changeInlineLabel,
  openObjectLabel,
  sourceLabel,
  timestampLabel,
} from "../activityText";
import { AuditButton, AuditField, AuditPanel } from "./AuditPanelParts";

/* AD-08D "Audit event detail" (1239:698): the EVENT DETAIL panel — action,
   actor/time, before → after, reason and source/request ID as read-only
   fields, then "Close" / "Open report" and the footnote that spells out the
   boundary: "Audit detail is read-only; no edit/delete/hide action exists." */
export function AuditEventDetailPanel({ row }: { row: ActivityLogRow }) {
  const c = useSectionCopy(ACTIVITY_LOG_COPY);
  const { language } = useLanguage();

  const actorTime = `${actorLabel(row, c)} · ${timestampLabel(row, language)}`;
  const sourceRequestId = `${sourceLabel(row, c)} · ${row.id}`;
  /* AD-08C step 3: a reason exists only "when the action required one". */
  const reason = row.change.reason
    ? c.detail.reasons[row.change.reason]
    : null;

  return (
    <AuditPanel
      pill={c.advanced.event.pill}
      title={c.advanced.event.title}
      subtitle={c.advanced.event.subtitle}
      footnote={c.advanced.event.footnote}
    >
      <AuditField
        label={c.advanced.event.action}
        value={actionLabel(row, c)}
      />
      <AuditField label={c.advanced.event.actorTime} value={actorTime} />
      <AuditField
        label={c.advanced.event.beforeAfter}
        value={changeInlineLabel(row, c)}
      />
      {reason ? (
        <AuditField label={c.advanced.event.reason} value={reason} />
      ) : null}
      <AuditField
        label={c.advanced.event.sourceRequestId}
        value={sourceRequestId}
      />
      <div className="flex flex-wrap items-center gap-[16px]">
        <AuditButton variant="outline">{c.detail.close}</AuditButton>
        <AuditButton variant="primary">{openObjectLabel(row, c)}</AuditButton>
      </div>
    </AuditPanel>
  );
}
