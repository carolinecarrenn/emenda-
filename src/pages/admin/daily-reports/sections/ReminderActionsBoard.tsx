import { useSectionCopy } from "@/i18n/copy";
import { DAILY_REPORTS_COPY } from "../daily-reports.copy";
import { ReminderSentPanel } from "./ReminderSentPanel";
import { SendReminderPanel } from "./SendReminderPanel";
import { StateBoard } from "./StateBoard";

/* AD-06B "Daily Report Reminder States" (1226:1078): the INTERACTION STATES
   heading over the 320px "Send reminder" composer and the 328px "Reminder
   sent" acknowledgment. The frame draws the two side by side because they are
   the two states of one action, so the app shows the one the admin is in:
   `step="compose"` after Send reminder, `step="sent"` after submitting. */
export function ReminderActionsBoard({
  step,
  onCancel,
  onSend,
  onViewActivity,
}: {
  step: "compose" | "sent";
  onCancel: () => void;
  onSend: () => void;
  onViewActivity: () => void;
}) {
  const c = useSectionCopy(DAILY_REPORTS_COPY);

  return (
    <StateBoard
      eyebrow={c.actions.eyebrow}
      title={c.actions.title}
      subtitle={c.actions.subtitle}
    >
      {step === "compose" ? (
        <SendReminderPanel onCancel={onCancel} onSend={onSend} />
      ) : (
        <ReminderSentPanel onViewActivity={onViewActivity} />
      )}
    </StateBoard>
  );
}
