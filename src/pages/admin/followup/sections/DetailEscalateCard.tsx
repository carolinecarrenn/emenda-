import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { ADMINFOLLOWUP_COPY } from "../followup.copy";
import { ESCALATION_DRAFT } from "../followup.mock";
import {
  DetailField,
  DetailNote,
  DetailStateCard,
} from "./EscalationDetailPrimitives";

/* AD-05D card 2 "Confirm escalation" (1239:461): the ESCALATE pill, the four
   mandatory fields (Reason * / Escalate to * / Required next action * /
   Due by *), the amber Impact note (#fff5db) and the Cancel plus red-tinted
   "Confirm escalation" (#fcebe8 / #8c1f1a) pair. */
export function DetailEscalateCard() {
  const c = useSectionCopy(ADMINFOLLOWUP_COPY);
  const { language } = useLanguage();
  const d = c.detail.escalate;

  return (
    <DetailStateCard
      pill={d.pill}
      title={d.title}
      subtitle={d.subtitle}
      footer={d.footer}
    >
      <DetailField
        id="detail-escalate-reason"
        label={d.fields.reason}
        value={c.decision.values.reason.replace(
          "{days}",
          String(ESCALATION_DRAFT.stalledDays),
        )}
      />
      <DetailField
        id="detail-escalate-destination"
        label={d.fields.escalateTo}
        value={c.decision.values.escalateTo.replace(
          "{name}",
          ESCALATION_DRAFT.destination,
        )}
      />
      <DetailField
        id="detail-escalate-next-action"
        label={d.fields.nextAction}
        value={c.decision.values.nextAction}
      />
      <DetailField
        id="detail-escalate-due-by"
        label={d.fields.dueBy}
        value={`${formatDisplayDate(ESCALATION_DRAFT.dueDate, language)} · ${ESCALATION_DRAFT.dueTime} ${ESCALATION_DRAFT.dueTimezone}`}
      />

      <DetailNote tone="amber" title={d.note.title} body={d.note.body} />

      <div className="flex flex-wrap items-center gap-[16px]">
        <button
          type="button"
          className="flex h-[34px] items-center justify-center rounded-[8px] border border-[#d1e3db] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#13332b] hover:bg-[#f2f7f5]"
        >
          {d.cancel}
        </button>
        <button
          type="button"
          className="flex h-[34px] items-center justify-center rounded-[8px] border border-[#fcebe8] bg-[#fcebe8] px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#8c1f1a] hover:bg-[#f8ded9]"
        >
          {d.confirm}
        </button>
      </div>
    </DetailStateCard>
  );
}
