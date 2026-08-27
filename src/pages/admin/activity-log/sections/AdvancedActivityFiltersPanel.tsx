import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { ADMIN_USER } from "../../admin.mock";
import { ACTIVITY_LOG_COPY } from "../activity-log.copy";
import {
  ADVANCED_FILTER_RANGE,
  ADVANCED_FILTER_TARGET_SAMPLE,
} from "../activity-log.mock";
import { AuditButton, AuditField, AuditNote, AuditPanel } from "./AuditPanelParts";

/* AD-08D "Advanced activity filters" (1239:673): the FILTER panel — date
   range, actor, category and target fields, the "Reset filters" /
   "Apply filters" pair, the amber "No results" rule (1239:694) and the
   "Filters are retained when opening and closing an event detail." footnote. */
export function AdvancedActivityFiltersPanel() {
  const c = useSectionCopy(ACTIVITY_LOG_COPY);
  const { language } = useLanguage();

  const dateRange = `${formatDisplayDate(ADVANCED_FILTER_RANGE.date, language)} · ${ADVANCED_FILTER_RANGE.from} → ${ADVANCED_FILTER_RANGE.to} ${ADVANCED_FILTER_RANGE.timeZone}`;
  const actors = [
    ADMIN_USER.name,
    c.advanced.filters.managerRole,
    c.actors.system,
  ].join(" / ");
  const categories = [
    c.filters.people,
    c.filters.reports,
    c.filters.rewards,
    c.filters.settings,
  ].join(" / ");
  const targets = `${ADVANCED_FILTER_TARGET_SAMPLE} / ${c.advanced.filters.targetKinds}`;

  return (
    <AuditPanel
      pill={c.advanced.filters.pill}
      title={c.advanced.filters.title}
      subtitle={c.advanced.filters.subtitle}
      footnote={c.advanced.filters.footnote}
    >
      <AuditField label={c.advanced.filters.dateRange} value={dateRange} />
      <AuditField label={c.advanced.filters.actor} value={actors} />
      <AuditField label={c.advanced.filters.category} value={categories} />
      <AuditField label={c.advanced.filters.target} value={targets} />
      <div className="flex flex-wrap items-center gap-[16px]">
        <AuditButton variant="outline">
          {c.advanced.filters.resetFilters}
        </AuditButton>
        <AuditButton variant="primary">
          {c.advanced.filters.applyFilters}
        </AuditButton>
      </div>
      <AuditNote
        tone="warning"
        title={c.noResults.title}
        body={c.noResults.body}
      />
    </AuditPanel>
  );
}
