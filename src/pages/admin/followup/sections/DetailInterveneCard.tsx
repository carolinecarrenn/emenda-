import { useSectionCopy } from "@/i18n/copy";
import { ADMINFOLLOWUP_COPY } from "../followup.copy";
import { ESCALATION_DRAFT } from "../followup.mock";
import {
  DetailField,
  DetailNote,
  DetailStateCard,
} from "./EscalationDetailPrimitives";

/* AD-05D card 1 "Admin intervention" (1239:436): the INTERVENE pill, four
   #edf7f2 fields (Case / Current owner / Action / Reason *), the outline
   "Request evidence" and solid #0a5740 "Reassign" buttons, the amber
   "No silent escalation" note (#fff5db) and the case-history footer. */
export function DetailInterveneCard() {
  const c = useSectionCopy(ADMINFOLLOWUP_COPY);
  const d = c.detail.intervene;

  return (
    <DetailStateCard
      pill={d.pill}
      title={d.title}
      subtitle={d.subtitle}
      footer={d.footer}
    >
      <DetailField
        id="detail-intervene-case"
        label={d.fields.case}
        value={d.values.case
          .replace("{id}", ESCALATION_DRAFT.caseId)
          .replace("{days}", String(ESCALATION_DRAFT.stalledDays))}
      />
      <DetailField
        id="detail-intervene-owner"
        label={d.fields.currentOwner}
        value={ESCALATION_DRAFT.currentOwner}
      />
      <DetailField
        id="detail-intervene-action"
        label={d.fields.action}
        value={d.values.action}
      />
      <DetailField
        id="detail-intervene-reason"
        label={d.fields.reason}
        value={d.values.reason}
      />

      <div className="flex flex-wrap items-center gap-[16px]">
        <button
          type="button"
          className="flex h-[34px] items-center justify-center rounded-[8px] border border-[#d1e3db] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#13332b] hover:bg-[#f2f7f5]"
        >
          {d.requestEvidence}
        </button>
        <button
          type="button"
          className="flex h-[34px] items-center justify-center rounded-[8px] border border-[#0a5740] bg-[#0a5740] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white hover:bg-[#083d2d]"
        >
          {d.reassign}
        </button>
      </div>

      <DetailNote tone="amber" title={d.note.title} body={d.note.body} />
    </DetailStateCard>
  );
}
