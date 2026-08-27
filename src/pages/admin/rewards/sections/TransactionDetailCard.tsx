import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINREWARDS_COPY } from "../rewards.copy";
import { TRANSACTION_RECORD } from "../rewards.mock";
import { RewardsDetailPanel } from "./RewardsDetailPanel";
import { RewardsDetailField } from "./RewardsDetailField";

/* AD-07D "Transaction detail" (1239:644): the LEDGER panel — Transaction,
   Employee, Before → after, Actor / reason and Reference, then the
   "Open employee" (119x34) / "View audit" (98x34, #0a5740) pair and the
   compensating-correction footnote. The two buttons leave the area for the
   employee record and the Activity Log, as their labels say. */
export function TransactionDetailCard() {
  const c = useSectionCopy(ADMINREWARDS_COPY);
  const tx = c.detail.transaction;

  const transaction = `${TRANSACTION_RECORD.id} · ${tx.kindManualAdjustment}`;
  const employee = `${TRANSACTION_RECORD.employee} · ${c.coinAmount.replace("{amount}", TRANSACTION_RECORD.delta)}`;
  const beforeAfter = `${TRANSACTION_RECORD.balanceBefore} → ${c.coinAmount.replace("{amount}", TRANSACTION_RECORD.balanceAfter)}`;
  const actorReason = `${TRANSACTION_RECORD.actor} · ${TRANSACTION_RECORD.reason}`;

  return (
    <RewardsDetailPanel
      pill={tx.pill}
      title={tx.title}
      subtitle={tx.subtitle}
      footnote={tx.footnote}
    >
      <RewardsDetailField
        label={tx.labels.transaction}
        value={transaction}
      />
      <RewardsDetailField label={tx.labels.employee} value={employee} />
      <RewardsDetailField label={tx.labels.beforeAfter} value={beforeAfter} />
      <RewardsDetailField label={tx.labels.actorReason} value={actorReason} />
      <RewardsDetailField
        label={tx.labels.reference}
        value={TRANSACTION_RECORD.reference}
      />

      <div className="flex items-center gap-[16px]">
        <Link
          to="/admin/employees"
          className="flex h-[34px] flex-1 items-center justify-center rounded-[8px] border border-[#d1e3db] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#13332b] lg:w-[119px] lg:flex-none lg:justify-start"
        >
          {tx.openEmployee}
        </Link>
        <Link
          to="/admin/activity-log"
          className="flex h-[34px] flex-1 items-center justify-center rounded-[8px] border border-[#0a5740] bg-[#0a5740] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white lg:w-[98px] lg:flex-none lg:justify-start"
        >
          {tx.viewAudit}
        </Link>
      </div>
    </RewardsDetailPanel>
  );
}
