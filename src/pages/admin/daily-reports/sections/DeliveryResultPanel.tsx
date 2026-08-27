import { useSectionCopy } from "@/i18n/copy";
import { DAILY_REPORTS_COPY } from "../daily-reports.copy";
import { REMINDER_DELIVERY } from "../daily-reports.mock";
import {
  DetailButton,
  DetailButtonRow,
  DetailField,
  DetailNote,
  DetailPanel,
} from "./DetailPanelParts";

/* AD-06D "Reminder delivery result" (1239:540): the DELIVERY pill, the
   Delivered / Pending mint fields and the red #fcebe8 Failed field, the amber
   #fff5db "Partial failure" note, the View recipients / Retry failed pair,
   the Activity Log read-back and the batch-vs-submission footnote. */
export function DeliveryResultPanel() {
  const c = useSectionCopy(DAILY_REPORTS_COPY);
  const d = c.detail.delivery;

  return (
    <DetailPanel
      pill={d.pill}
      title={d.title}
      subtitle={d.subtitle}
      footnote={d.footnote}
    >
      <DetailField
        label={d.delivered}
        value={d.deliveredValue.replace(
          "{count}",
          String(REMINDER_DELIVERY.deliveredCount),
        )}
      />
      <DetailField
        label={d.pending}
        value={d.pendingValue.replace(
          "{count}",
          String(REMINDER_DELIVERY.pendingCount),
        )}
      />
      <DetailField
        label={d.failed}
        tone="red"
        value={d.failedValue.replace(
          "{count}",
          String(REMINDER_DELIVERY.failedCount),
        )}
      />
      <DetailNote title={d.noteTitle} body={d.noteBody} tone="warning" />
      <DetailButtonRow>
        <DetailButton label={d.viewRecipients} tone="outline" />
        <DetailButton label={d.retryFailed} tone="solid" />
      </DetailButtonRow>
      <DetailField label={d.activityLog} value={d.activityLogValue} />
    </DetailPanel>
  );
}
