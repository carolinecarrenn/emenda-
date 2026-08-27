import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { ADMINREWARDS_COPY } from "../rewards.copy";
import { RULE_EDIT_RECORD } from "../rewards.mock";
import { RewardsDetailPanel } from "./RewardsDetailPanel";
import { RewardsDetailField } from "./RewardsDetailField";
import { RewardsDetailNote } from "./RewardsDetailNote";

/* AD-07D "Edit earning rule" (1239:594): the RULE EDIT panel — Rule, Reward
   amount ("+1 coin → +2 coin"), Eligibility and Effective from, the #fff5db
   "Impact preview" note, the Cancel (86x34) / "Save rule" (91x34, #0a5740)
   pair and the Activity Log footnote. Cancel returns to AD-07. */
export function EditEarningRuleCard() {
  const c = useSectionCopy(ADMINREWARDS_COPY);
  const { language } = useLanguage();
  const rule = c.detail.ruleEdit;

  const amount = `${c.coinAmount.replace("{amount}", RULE_EDIT_RECORD.amountBefore)} → ${c.coinAmount.replace("{amount}", RULE_EDIT_RECORD.amountAfter)}`;
  const effective = `${formatDisplayDate(RULE_EDIT_RECORD.effectiveFrom, language)} · ${rule.futureEventsOnly}`;

  return (
    <RewardsDetailPanel
      pill={rule.pill}
      title={rule.title}
      subtitle={rule.subtitle}
      footnote={rule.footnote}
    >
      <RewardsDetailField
        label={rule.labels.rule}
        value={RULE_EDIT_RECORD.rule}
      />
      <RewardsDetailField label={rule.labels.rewardAmount} value={amount} />
      <RewardsDetailField
        label={rule.labels.eligibility}
        value={RULE_EDIT_RECORD.eligibility}
      />
      <RewardsDetailField
        label={rule.labels.effectiveFrom}
        value={effective}
      />

      <RewardsDetailNote
        tone="impact"
        title={rule.noteTitle}
        body={rule.noteBody}
      />

      <div className="flex items-center gap-[24px]">
        <Link
          to="/admin/rewards"
          className="flex h-[34px] flex-1 items-center justify-center rounded-[8px] border border-[#d1e3db] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#13332b] lg:w-[86px] lg:flex-none lg:justify-start"
        >
          {rule.cancel}
        </Link>
        <button
          type="button"
          className="flex h-[34px] flex-1 items-center justify-center rounded-[8px] border border-[#0a5740] bg-[#0a5740] px-[13px] text-[11px] font-semibold whitespace-nowrap text-white lg:w-[91px] lg:flex-none lg:justify-start"
        >
          {rule.save}
        </button>
      </div>
    </RewardsDetailPanel>
  );
}
