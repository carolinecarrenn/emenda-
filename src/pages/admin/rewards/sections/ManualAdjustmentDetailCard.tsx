import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINREWARDS_COPY } from "../rewards.copy";
import { ADJUSTMENT_DETAIL_RECORD } from "../rewards.mock";
import { RewardsDetailPanel } from "./RewardsDetailPanel";
import { RewardsDetailField } from "./RewardsDetailField";
import { RewardsDetailNote } from "./RewardsDetailNote";

/* AD-07D "Manual coin adjustment" (1239:619): the ADJUST panel — the required
   Employee / Type · amount / Reason fields plus the optional Reference, the
   #fcebe8 "Negative adjustment" guardrail, the Cancel (86x34) / "Confirm +20
   coin" (140x34, #0a5740) pair and the new-transaction footnote.
   Cancel returns to AD-07. */
export function ManualAdjustmentDetailCard() {
  const c = useSectionCopy(ADMINREWARDS_COPY);
  const adjust = c.detail.adjust;

  const typeAmount = `${c.adjust.types.add} · ${ADJUSTMENT_DETAIL_RECORD.delta}`;
  const confirm = adjust.confirm.replace(
    "{amount}",
    ADJUSTMENT_DETAIL_RECORD.delta,
  );

  return (
    <RewardsDetailPanel
      pill={adjust.pill}
      title={adjust.title}
      subtitle={adjust.subtitle}
      footnote={adjust.footnote}
    >
      <RewardsDetailField
        label={adjust.labels.employee}
        value={ADJUSTMENT_DETAIL_RECORD.employee}
      />
      <RewardsDetailField label={adjust.labels.typeAmount} value={typeAmount} />
      <RewardsDetailField
        label={adjust.labels.reason}
        value={ADJUSTMENT_DETAIL_RECORD.reason}
      />
      <RewardsDetailField
        label={adjust.labels.reference}
        value={ADJUSTMENT_DETAIL_RECORD.reference}
      />

      <RewardsDetailNote
        tone="negative"
        title={adjust.noteTitle}
        body={adjust.noteBody}
      />

      <div className="flex items-center gap-[24px]">
        <Link
          to="/admin/rewards"
          className="flex h-[34px] flex-1 items-center justify-center rounded-[8px] border border-[#d1e3db] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#13332b] lg:w-[86px] lg:flex-none lg:justify-start"
        >
          {adjust.cancel}
        </Link>
        <button
          type="button"
          className="flex h-[34px] flex-1 items-center justify-center rounded-[8px] border border-[#0a5740] bg-[#0a5740] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white lg:w-[140px] lg:flex-none lg:justify-start"
        >
          {confirm}
        </button>
      </div>
    </RewardsDetailPanel>
  );
}
