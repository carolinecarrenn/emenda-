import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { ADMINFOLLOWUP_COPY } from "../followup.copy";
import { ESCALATION_DRAFT } from "../followup.mock";
import { BackToBoardLink } from "./BackToBoardLink";

/* AD-05B "Escalation Decision States" (1226:131): a 720px #f7faf8 board,
   radius 14, 1px #d6e3de — the "INTERACTION STATES" eyebrow, 18px bold
   "Escalation decision" and its 10px caption, then the 536x560 white
   decision card (radius 12) holding four pre-filled fields, the amber Impact
   panel (#fdf7ec, radius 10) and the Cancel / Confirm escalation pair. */
export function EscalationDecisionView() {
  const c = useSectionCopy(ADMINFOLLOWUP_COPY);
  const { language } = useLanguage();

  const fields = [
    {
      id: "escalation-reason",
      label: c.decision.fields.reason,
      value: c.decision.values.reason.replace(
        "{days}",
        String(ESCALATION_DRAFT.stalledDays),
      ),
    },
    {
      id: "escalation-destination",
      label: c.decision.fields.escalateTo,
      value: c.decision.values.escalateTo.replace(
        "{name}",
        ESCALATION_DRAFT.destination,
      ),
    },
    {
      id: "escalation-next-action",
      label: c.decision.fields.nextAction,
      value: c.decision.values.nextAction,
    },
    {
      id: "escalation-due-by",
      label: c.decision.fields.dueBy,
      value: `${formatDisplayDate(ESCALATION_DRAFT.dueDate, language)} · ${ESCALATION_DRAFT.dueTime}`,
    },
  ];

  return (
    <div className="flex w-full max-w-[720px] flex-col gap-[16px]">
      <BackToBoardLink />

      <div className="flex flex-col gap-[24px] rounded-[14px] border border-[#d6e3de] bg-[#f7faf8] p-[23px]">
        <div className="flex flex-col gap-[6px]">
          <p className="text-[10px] leading-none font-semibold tracking-[0.04em] text-[#083d2d]">
            {c.decision.eyebrow}
          </p>
          <h2 className="text-[18px] leading-none font-bold text-[#17362e]">
            {c.decision.title}
          </h2>
          <p className="text-[10px] leading-[14px] text-[#65746d]">
            {c.decision.subtitle}
          </p>
        </div>

        <div className="mx-auto flex w-full max-w-[536px] flex-col gap-[20px] rounded-[12px] border border-[#d6e3de] bg-white p-[23px]">
          <div className="flex flex-col gap-[6px]">
            <h3 className="text-[17px] leading-none font-bold text-[#17362e]">
              {c.decision.cardTitle.replace("{id}", ESCALATION_DRAFT.caseId)}
            </h3>
            <p className="text-[9px] leading-[13px] text-[#65746d]">
              {c.decision.cardSubtitle}
            </p>
          </div>

          <div className="flex flex-col gap-[14px]">
            {fields.map((field) => (
              <div key={field.id} className="flex flex-col gap-[6px]">
                <label
                  htmlFor={field.id}
                  className="text-[9px] leading-none font-semibold text-[#65746d]"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  readOnly
                  value={field.value}
                  className="h-[36px] w-full rounded-[10px] border border-[#d6e3de] bg-white px-[11px] text-[10px] text-[#65746d] outline-none"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[6px] rounded-[10px] bg-[#fdf7ec] p-[12px] lg:h-[92px]">
            <p className="text-[10px] leading-none font-bold text-[#b57023]">
              {c.decision.impact.title}
            </p>
            <p className="text-[9px] leading-[14px] text-[#65746d]">
              {c.decision.impact.body}
            </p>
          </div>

          <div className="flex items-center gap-[27px]">
            <Link
              to="/admin/follow-up"
              className="flex h-[32px] items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] hover:bg-[#f2f7f5]"
            >
              {c.decision.cancel}
            </Link>
            <Link
              to="/admin/follow-up"
              className="flex h-[32px] items-center justify-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white hover:bg-[#0c5941]"
            >
              {c.decision.confirm}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
