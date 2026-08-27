import { useSectionCopy } from "@/i18n/copy";
import { DAILY_REPORTS_COPY } from "../daily-reports.copy";
import { ComposeReminderPanel } from "./ComposeReminderPanel";
import { DeliveryResultPanel } from "./DeliveryResultPanel";
import { StateBoard } from "./StateBoard";
import { SubmissionDetailPanel } from "./SubmissionDetailPanel";

/* AD-06D "Daily Report Detailed States" (1239:511): three 760x720 panels —
   Compose reminder, Reminder delivery result, Employee submission detail —
   laid out on a 60px pitch under the board heading.

   `focus` narrows the board to the single panel the app navigated to:
   "compose" from a Send reminder button, "delivery" from the AD-06B
   acknowledgment's View activity, "submission" from a Late & missing row.
   "all" renders the frame as drawn; its 2360px row scrolls horizontally
   inside the 1144px admin content column. */

export type DetailFocus = "all" | "compose" | "delivery" | "submission";

export function DetailedStatesBoard({
  focus,
  onCancelCompose,
  onSendCompose,
}: {
  focus: DetailFocus;
  onCancelCompose?: () => void;
  onSendCompose?: () => void;
}) {
  const c = useSectionCopy(DAILY_REPORTS_COPY);

  const compose = (
    <ComposeReminderPanel
      onCancel={onCancelCompose}
      onSend={onSendCompose}
      key="compose"
    />
  );
  const delivery = <DeliveryResultPanel key="delivery" />;
  const submission = <SubmissionDetailPanel key="submission" />;

  const panels =
    focus === "compose"
      ? [compose]
      : focus === "delivery"
        ? [delivery]
        : focus === "submission"
          ? [submission]
          : [compose, delivery, submission];

  return (
    <StateBoard
      eyebrow={c.detail.eyebrow}
      title={c.detail.title}
      subtitle={c.detail.subtitle}
      titleClassName="text-[22px] leading-[28px] font-bold text-[#13332b]"
    >
      <div className="-mx-4 overflow-x-auto px-4 lg:-mx-[32px] lg:px-[32px]">
        <div className="flex flex-col gap-[24px] lg:w-max lg:flex-row lg:gap-[60px]">
          {panels}
        </div>
      </div>
    </StateBoard>
  );
}
