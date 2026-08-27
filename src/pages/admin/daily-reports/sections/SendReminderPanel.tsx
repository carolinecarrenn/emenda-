import { useSectionCopy } from "@/i18n/copy";
import { DAILY_REPORTS_COPY } from "../daily-reports.copy";
import { REMINDER_DRAFT } from "../daily-reports.mock";

/* AD-06B "Send reminder" (1226:1082): 320x520 white panel, radius 12, 1px
   #d6e3de — 16px bold title, 9px #65746d line, then four label + 272x36
   read-back fields (radius 10, 1px #d6e3de, 10px #65746d value). Below them
   the 280x76 mint #e8f5f0 note (radius 10) and the outline "Cancel" /
   dark-green "Send reminder" pair (32px, radius 10).
   Below lg the panel goes full-width; its 272px fields follow. */
export function SendReminderPanel({
  onCancel,
  onSend,
}: {
  onCancel: () => void;
  onSend: () => void;
}) {
  const c = useSectionCopy(DAILY_REPORTS_COPY);

  const fields = [
    {
      label: c.reminder.recipients,
      value: c.reminder.recipientsValue.replace(
        "{count}",
        String(REMINDER_DRAFT.missingCount),
      ),
    },
    { label: c.reminder.channel, value: c.reminder.channelValue },
    { label: c.reminder.message, value: REMINDER_DRAFT.message },
    {
      label: c.reminder.dueTime,
      value: c.reminder.dueTimeValue.replace("{time}", REMINDER_DRAFT.dueTime),
    },
  ];

  return (
    <div className="w-full max-w-[320px] rounded-[12px] border border-[#d6e3de] bg-white px-[19px] pt-[19px] pb-[19px] lg:h-[520px] lg:w-[320px]">
      <p className="text-[16px] leading-none font-bold text-[#17362e]">
        {c.reminder.title}
      </p>
      <p className="mt-[9px] text-[9px] leading-[13px] text-[#65746d]">
        {c.reminder.subtitle}
      </p>

      <div className="mt-[22px] flex flex-col gap-[14px] px-[4px]">
        {fields.map((field) => (
          <div key={field.label} className="flex flex-col gap-[9px]">
            <p className="text-[9px] leading-none font-semibold text-[#65746d]">
              {field.label}
            </p>
            <div className="flex h-[36px] items-center rounded-[10px] border border-[#d6e3de] bg-white px-[11px]">
              <p className="truncate text-[10px] text-[#65746d]">
                {field.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[19px] rounded-[10px] bg-[#e8f5f0] px-[12px] py-[14px]">
        <p className="text-[10px] leading-none font-semibold text-[#083d2d]">
          {c.reminder.noticeTitle.replace(
            "{count}",
            String(REMINDER_DRAFT.missingCount),
          )}
        </p>
        <p className="mt-[14px] text-[9px] leading-none text-[#65746d]">
          {c.reminder.noticeBody}
        </p>
      </div>

      <div className="mt-[16px] flex items-center gap-[27px]">
        <button
          type="button"
          onClick={onCancel}
          className="flex h-[32px] items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] hover:bg-[#f2f7f5] lg:w-[65px] lg:px-0"
        >
          {c.reminder.cancel}
        </button>
        <button
          type="button"
          onClick={onSend}
          className="flex h-[32px] items-center justify-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white hover:bg-[#0c5941] lg:w-[106px] lg:px-0"
        >
          {c.reminder.send}
        </button>
      </div>
    </div>
  );
}
