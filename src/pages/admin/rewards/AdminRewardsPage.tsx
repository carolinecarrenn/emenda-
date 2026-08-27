import { useScreenState } from "@/hooks/useScreenState";
import { AdminShell } from "../shell/AdminShell";
import { RewardsIntro } from "./sections/RewardsIntro";
import { RewardsStatRow } from "./sections/RewardsStatRow";
import { EarningRulesCard } from "./sections/EarningRulesCard";
import { AdjustmentHistoryCard } from "./sections/AdjustmentHistoryCard";
import { RewardAdjustmentBoard } from "./sections/RewardAdjustmentBoard";
import { RewardsLifecycleBoard } from "./sections/RewardsLifecycleBoard";
import { RewardsDetailBoard } from "./sections/RewardsDetailBoard";
import { EditEarningRuleCard } from "./sections/EditEarningRuleCard";
import { ManualAdjustmentDetailCard } from "./sections/ManualAdjustmentDetailCard";
import { TransactionDetailCard } from "./sections/TransactionDetailCard";

/** Company Admin · Rewards & Coin (Figma AD-07, node 1223:2737 on page
 *  "06 · Company Admin Experience", 1182:5690).
 *
 *  AD-07 is the screen; its lettered companions are its states, each reachable
 *  through the app's `?state=` convention and from a control on AD-07 itself:
 *
 *    (none)          AD-07  · rules + stats + adjustment history
 *    ?state=adjust        AD-07B (1226:1116) · manual adjustment interaction
 *                         state — intro "Manual adjustment"
 *    ?state=lifecycle     AD-07C (1226:3785) · rule → earning → adjustment →
 *                         ledger flow — "View policy"
 *    ?state=rule-edit     AD-07D (1239:594)  · rule editor — an earning rule row
 *    ?state=adjust-detail AD-07D (1239:619)  · detailed adjust panel — the
 *                         history card's "Manual adjustment"
 *    ?state=transaction   AD-07D (1239:644)  · ledger detail — a history row
 *
 *  Scope (Figma AD-SCOPE board): company reward rules and this company's coin
 *  ledger only — global platform economics stay outside the Company Admin role.
 */
export function AdminRewardsPage() {
  const state = useScreenState();

  if (state === "adjust") {
    return (
      <AdminShell>
        <RewardAdjustmentBoard />
      </AdminShell>
    );
  }

  if (state === "lifecycle") {
    return (
      <AdminShell>
        <div className="w-full max-w-[1144px]">
          <RewardsLifecycleBoard />
        </div>
      </AdminShell>
    );
  }

  if (state === "rule-edit") {
    return (
      <AdminShell>
        <RewardsDetailBoard>
          <EditEarningRuleCard />
        </RewardsDetailBoard>
      </AdminShell>
    );
  }

  if (state === "adjust-detail") {
    return (
      <AdminShell>
        <RewardsDetailBoard>
          <ManualAdjustmentDetailCard />
        </RewardsDetailBoard>
      </AdminShell>
    );
  }

  if (state === "transaction") {
    return (
      <AdminShell>
        <RewardsDetailBoard>
          <TransactionDetailCard />
        </RewardsDetailBoard>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      {/* AD-07 "Screen Content" (1223:3012): the 1144px column — intro row at
          22, stat row at 78, then the 560 / 568 card pair at 206. */}
      <div className="flex w-full max-w-[1144px] flex-col">
        <RewardsIntro />
        <div className="mt-[12px]">
          <RewardsStatRow />
        </div>
        <div className="mt-[16px] flex flex-col gap-[16px] lg:flex-row lg:items-start">
          <EarningRulesCard />
          <AdjustmentHistoryCard />
        </div>
      </div>
    </AdminShell>
  );
}
