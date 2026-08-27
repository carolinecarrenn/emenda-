import { useSectionCopy } from "@/i18n/copy";
import { REPORTS_STATES_COPY, fillCopy } from "../reports.copy";
import type { TemplateKey } from "../reportTemplate";
import { TEMPLATE_CONTEXT } from "../templateDraft";
import { RecentHistory } from "./RecentHistory";
import { HubHeading } from "./HubHeading";
import { HubNoticeCard } from "./HubNoticeCard";
import { HubPrimaryAction } from "./HubPrimaryAction";
import { EmployerTemplateStrip } from "./EmployerTemplateStrip";
import { TemplateExamplesCard } from "./TemplateExamplesCard";
import { useTemplateFields } from "./useTemplateFields";

/**
 * Reports hub with a non-caregiver employer-assigned template applied —
 * W-54J warehouse (1024:2194) and W-54K food service (1024:2253), plus the
 * general-template hub behind W-55.
 *
 * Mobile order (canonical): heading · employer report template strip ·
 * today status card · full-width New Daily Report · RECENT WORK HISTORY.
 * The template-examples card stays below the history as the click path into
 * the other employer-assigned template hubs.
 */
export function TemplateHubView({ template }: { template: TemplateKey }) {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  const fields = useTemplateFields(template);
  const context = TEMPLATE_CONTEXT[template];

  return (
    <div className="max-w-[1012px] pt-2 lg:pt-[4px]">
      <HubHeading sentence={c.loading.title} desktopSubtitle={fields.title} />

      <div className="mt-[26px] flex flex-col gap-[12px] lg:mt-[34px] lg:gap-[16px]">
        <EmployerTemplateStrip
          title={fields.title}
          body={c.templateHub.assignedNote}
        />
        <HubNoticeCard
          title={fillCopy(c.templateHub.todayTitle, { template: fields.name })}
        >
          <p>
            {fillCopy(c.templateHub.todayBody, {
              employer: context.employer,
              template: fields.name,
            })}
          </p>
        </HubNoticeCard>
        <HubPrimaryAction
          to={`/worker/reports/new?template=${template}`}
          label={c.newDailyReport}
        />
        <RecentHistory />
      </div>

      <div className="mt-[26px]">
        <TemplateExamplesCard current={template} />
      </div>
    </div>
  );
}
