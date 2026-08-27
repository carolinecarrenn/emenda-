import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { COIN_COPY } from "../coin.copy";
import { formatSignedCoin } from "../coinFormat";
import {
  PENDING_PIPELINE,
  PENDING_REWARD,
  PENDING_SUBMITTED_DATE,
} from "../coinMock";
import { InfoCard } from "./InfoCard";
import { PillLink } from "./PillLink";

/* W-60K "Pending Reward" (1179:466): an amber 350x156 hero (a 24px header
   row pairing the 11px/15 activity title with a 12px/16 green amount, then a
   10px/14 "STATUS · …" line and a 9px/13 submitted line), the white 350x154
   "What happens next" card of three 9px/13 outcome lines, the mint 350x78
   "No duplicate claims" card and the 350x46 outline button into W-60S — all
   at a 10px gap. Desktop WD-60K keeps the three-step
   submitted → eligibility check → Coin added pipeline instead. */
export function PendingRewardPanel() {
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();
  const amount = formatSignedCoin(PENDING_REWARD.amount, language);

  return (
    <div className="space-y-[10px] lg:space-y-[20px]">
      {/* 1179:530 — the pending activity itself */}
      <div className="rounded-[14px] border border-lp-line bg-[#fef6da] px-[14px] py-[12px] lg:min-h-[170px] lg:rounded-[16px] lg:bg-lp-tint lg:px-[22px] lg:py-[20px]">
        <div className="flex h-[24px] items-center justify-between gap-3 lg:h-auto lg:items-start">
          <p className="text-[11px] leading-[15px] font-semibold text-lp-ink lg:text-[17px] lg:leading-normal">
            {c.overview.pendingTitle(EMPLOYER.name)}
          </p>
          <p className="shrink-0 text-[12px] leading-[16px] font-semibold text-lp-green lg:text-[17px] lg:leading-normal">
            {c.coinValue(amount)}
          </p>
        </div>
        <p className="mt-[5px] text-[10px] leading-[14px] font-semibold text-lp-ink lg:mt-[14px] lg:text-[13px] lg:leading-[18px] lg:text-lp-green">
          {c.pendingReward.heroStatus}
        </p>
        <p className="mt-[5px] text-[9px] leading-[13px] text-lp-muted lg:mt-[14px] lg:text-[13px] lg:leading-[18px]">
          {c.pendingReward.heroMeta(
            formatDisplayDate(PENDING_SUBMITTED_DATE, language),
          )}
        </p>
      </div>

      {/* 1179:536 — the mobile frame states the outcomes as plain lines */}
      <div className="rounded-[14px] border border-lp-line bg-white px-[14px] py-[12px] lg:hidden">
        <p className="text-[11px] leading-[15px] font-semibold text-lp-ink">
          {c.pendingReward.nextTitle}
        </p>
        <div className="mt-[5px] space-y-[5px] text-[9px] leading-[13px] text-lp-ink">
          {c.pendingReward.nextSteps(amount).map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      {/* WD-60K pipeline — desktop only */}
      <div className="hidden rounded-[18px] border border-lp-line bg-white px-[17px] py-[17px] lg:block">
        <p className="px-[4px] text-[18px] font-semibold text-lp-ink">
          {c.pendingReward.pipelineTitle}
        </p>
        <div className="mt-[14px] space-y-[8px]">
          {PENDING_PIPELINE.map((step, index) => (
            <div
              key={step.id}
              className="flex items-start gap-[14px] rounded-[10px] bg-lp-tint px-[14px] py-[13px]"
            >
              <span
                className={`flex size-[26px] shrink-0 items-center justify-center rounded-[13px] text-[11px] font-semibold ${
                  step.status === "next"
                    ? "border border-lp-line bg-white text-lp-muted"
                    : "bg-lp-mint text-lp-green"
                }`}
              >
                {index + 1}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-[13px] font-semibold text-lp-ink">
                    {c.pendingReward.step[step.id].title}
                  </p>
                  <p
                    className={`text-[11px] font-semibold ${
                      step.status === "current"
                        ? "text-[#804d0d]"
                        : step.status === "done"
                          ? "text-lp-green"
                          : "text-lp-muted"
                    }`}
                  >
                    {c.pendingReward.stepStatus[step.status]}
                  </p>
                </div>
                <p className="mt-[6px] text-[11px] leading-[17px] text-lp-muted">
                  {c.pendingReward.step[step.id].body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <InfoCard
        tone="mint"
        density="note"
        pad="md"
        bodyGap={32}
        title={c.pendingReward.noDuplicateTitle}
        body={c.pendingReward.noDuplicateBody}
        className="lg:min-h-[82px]"
      />

      {/* W-60K "Button · Example not eligible" (1186:550) → W-60S. */}
      <PillLink
        to="/worker/coin/rewards/partner-benefit?state=pending-not-eligible"
        className="lg:w-[260px]"
      >
        {c.pendingReward.notEligibleExample}
      </PillLink>
    </div>
  );
}
