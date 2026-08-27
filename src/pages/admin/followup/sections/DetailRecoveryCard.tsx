import { useSectionCopy } from "@/i18n/copy";
import { ADMINFOLLOWUP_COPY } from "../followup.copy";
import {
  DetailField,
  DetailNote,
  DetailStateCard,
} from "./EscalationDetailPrimitives";

/* AD-05D card 3 "Recovery checkpoint" (1239:486): the RECOVERY pill, three
   #edf7f2 fields (Latest update / Employee outcome / Admin decision), the red
   "No progress" note (#fcebe8), the "Continue follow-up" and solid #0a5740
   "Close with outcome" buttons, and the blue "Context invariant" note
   (#ebf5fc). */
export function DetailRecoveryCard() {
  const c = useSectionCopy(ADMINFOLLOWUP_COPY);
  const d = c.detail.recovery;

  return (
    <DetailStateCard
      pill={d.pill}
      title={d.title}
      subtitle={d.subtitle}
      footer={d.footer}
    >
      <DetailField
        id="detail-recovery-update"
        label={d.fields.latestUpdate}
        value={d.values.latestUpdate}
      />
      <DetailField
        id="detail-recovery-outcome"
        label={d.fields.employeeOutcome}
        value={d.values.employeeOutcome}
      />
      <DetailField
        id="detail-recovery-decision"
        label={d.fields.adminDecision}
        value={d.values.adminDecision}
      />

      <DetailNote
        tone="red"
        title={d.noProgress.title}
        body={d.noProgress.body}
      />

      <div className="flex flex-wrap items-center gap-[16px]">
        <button
          type="button"
          className="flex h-[34px] items-center justify-center rounded-[8px] border border-[#d1e3db] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#13332b] hover:bg-[#f2f7f5]"
        >
          {d.continueFollowUp}
        </button>
        <button
          type="button"
          className="flex h-[34px] items-center justify-center rounded-[8px] border border-[#0a5740] bg-[#0a5740] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white hover:bg-[#083d2d]"
        >
          {d.closeWithOutcome}
        </button>
      </div>

      <DetailNote
        tone="blue"
        title={d.contextInvariant.title}
        body={d.contextInvariant.body}
      />
    </DetailStateCard>
  );
}
