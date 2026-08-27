import { useSectionCopy } from "@/i18n/copy";
import { DAILY_REPORTS_COPY } from "../daily-reports.copy";
import { REMINDER_DRAFT } from "../daily-reports.mock";
import {
  DetailButton,
  DetailButtonRow,
  DetailField,
  DetailNote,
  DetailPanel,
} from "./DetailPanelParts";

/* AD-06D "Compose reminder" (1239:515): the REMINDER pill, a 19px semibold
   title over its 11px line, the four required read-back fields, the blue
   #ebf5fc "Guardrail" note, the Cancel / Send reminder pair and the
   per-recipient logging footnote. */
export function ComposeReminderPanel({
  onCancel,
  onSend,
}: {
  onCancel?: () => void;
  onSend?: () => void;
}) {
  const c = useSectionCopy(DAILY_REPORTS_COPY);
  const d = c.detail.compose;

  return (
    <DetailPanel
      pill={d.pill}
      title={d.title}
      subtitle={d.subtitle}
      footnote={d.footnote}
    >
      <DetailField
        label={d.recipients}
        value={d.recipientsValue.replace(
          "{count}",
          String(REMINDER_DRAFT.missingCount),
        )}
      />
      <DetailField label={d.channel} value={d.channelValue} />
      <DetailField label={d.message} value={REMINDER_DRAFT.message} />
      <DetailField
        label={d.dueTime}
        value={d.dueTimeValue.replace("{time}", REMINDER_DRAFT.dueTime)}
      />
      <DetailNote title={d.noteTitle} body={d.noteBody} />
      <DetailButtonRow>
        <DetailButton label={d.cancel} tone="outline" onClick={onCancel} />
        <DetailButton label={d.send} tone="solid" onClick={onSend} />
      </DetailButtonRow>
    </DetailPanel>
  );
}
