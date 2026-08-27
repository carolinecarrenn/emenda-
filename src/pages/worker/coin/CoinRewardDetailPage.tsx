import { useState, type ReactNode } from "react";
import { useParams } from "react-router-dom";
import { EMPLOYER } from "@/data/caregiverReport";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useLanguage } from "@/i18n/language";
import { COIN_COPY } from "./coin.copy";
import { formatCoinNumber, formatSignedCoin } from "./coinFormat";
import {
  INSUFFICIENT_BALANCE,
  findReward,
  spendCoin,
  useCoinState,
} from "./coinMock";
import { CoinPageHeader } from "./sections/CoinPageHeader";
import { CoinActionButton } from "./sections/CoinActionButton";
import { InfoCard } from "./sections/InfoCard";
import { PillLink } from "./sections/PillLink";

type RedeemStep = "detail" | "review" | "redeemed";

/** Reward detail and the redeem chain (Figma mobile W-60M 1186:288 → review
 *  W-60N 1186:318 → redeemed W-60O 1186:350 / failed W-60P 1186:379 /
 *  insufficient W-60Q 1186:408 / pending not eligible W-60S 1186:467; desktop
 *  WD-60M 1186:2155 …). Every frame is the same stack: an 11px subtitle, one
 *  or two body cards at a 10px gap, then the 46px body buttons. The mock
 *  balance is only reduced on the final confirmation. */
export function CoinRewardDetailPage() {
  const { rewardId } = useParams();
  const screenState = useScreenState();
  const c = useSectionCopy(COIN_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();
  const coin = useCoinState();
  const [step, setStep] = useState<RedeemStep>(
    screenState === "redeemed"
      ? "redeemed"
      : screenState === "review"
        ? "review"
        : "detail",
  );
  /* The ?state=redeemed override lands on W-60O without spending, so the
     success card still has to show the post-redemption balance. */
  const [spent, setSpent] = useState(false);

  const reward = findReward(rewardId);
  const detailPath = `/worker/coin/rewards/${rewardId ?? ""}`;

  const shell = (children: ReactNode) => (
    <div className="max-w-[1012px] pt-2 lg:pt-[16px]">{children}</div>
  );

  /* W-60x body stack: 10px between every card and button on mobile. */
  const body = (children: ReactNode) => (
    <div className="mt-[10px] space-y-[10px] lg:mt-[52px] lg:space-y-[24px]">
      {children}
    </div>
  );

  if (reward === undefined) {
    return shell(
      <>
        <CoinPageHeader
          crumb={c.rewards.title}
          crumbTo="/worker/coin/rewards"
          title={c.rewardDetail.notFoundTitle}
          subtitle={c.rewardDetail.notFoundBody}
        />
        {body(
          <PillLink to="/worker/coin/rewards" className="lg:w-[240px]">
            {c.rewardDetail.backToRewards}
          </PillLink>,
        )}
      </>,
    );
  }

  const rewardCopy = c.reward[reward.id];
  const cost = reward.cost ?? 0;
  const coinAmount = (value: number): string =>
    formatCoinNumber(value, language);

  /* WD-60L's disabled row — the detail explains why nothing can be used. */
  if (!reward.available) {
    return shell(
      <>
        <CoinPageHeader
          crumb={c.rewards.title}
          crumbTo="/worker/coin/rewards"
          title={rewardCopy.name}
          subtitle={c.rewardDetail.unavailableTitle}
        />
        {body(
          <>
            <InfoCard
              tone="mint"
              title={
                reward.fromEmployer
                  ? `${rewardCopy.name} · ${EMPLOYER.name}`
                  : rewardCopy.name
              }
              body={rewardCopy.body}
            />
            <InfoCard
              tone="white"
              title={c.rewardDetail.unavailableTitle}
              body={c.rewardDetail.unavailableBody}
            />
            <PillLink to="/worker/coin/rewards" className="lg:w-[240px]">
              {c.rewardDetail.backToRewards}
            </PillLink>
          </>,
        )}
      </>,
    );
  }

  /* W-60P (1186:401 rose failure card · 1186:404 Retry · 1186:406 Back). */
  if (screenState === "failed") {
    return shell(
      <>
        <CoinPageHeader
          crumb={c.rewards.title}
          crumbTo="/worker/coin/rewards"
          title={c.rewardDetail.failedTitle}
          subtitle={c.rewardDetail.failedSubtitle}
        />
        {body(
          <>
            <InfoCard
              tone="rose"
              pad="md"
              bodyGap={32}
              title={c.rewardDetail.failedCardTitle}
              body={c.rewardDetail.failedCardBody(coinAmount(coin.balance))}
              className="lg:min-h-[160px]"
            />
            {/* WD-60P (1205:1249 / 1205:1251) sets both pills on one row */}
            <div className="flex flex-col gap-[10px] lg:flex-row lg:gap-[16px]">
              <PillLink
                to={`${detailPath}?state=review`}
                variant="primary"
                className="lg:w-[240px]"
              >
                {c.rewardDetail.retryRedemption}
              </PillLink>
              <PillLink to={detailPath} className="lg:w-[220px]">
                {c.rewardDetail.backToReward}
              </PillLink>
            </div>
          </>,
        )}
      </>,
    );
  }

  /* W-60S (1186:489 amber "Daily report · <employer>" · 1186:492 "Nothing was
     deducted" · 1186:495 "View active rule"). */
  if (screenState === "pending-not-eligible") {
    return shell(
      <>
        <CoinPageHeader
          crumb={c.overview.title}
          crumbTo="/worker/coin"
          title={c.rewardDetail.notEligibleTitle}
          subtitle={c.rewardDetail.notEligibleSubtitle}
        />
        {body(
          <>
            <InfoCard
              tone="amber"
              pad="md"
              bodyGap={32}
              title={c.rewardDetail.notEligibleActivity(EMPLOYER.name)}
              body={c.rewardDetail.notEligibleReason}
              className="lg:min-h-[160px]"
            />
            <InfoCard
              tone="white"
              lgTone="mint"
              pad="md"
              bodyGap={32}
              title={c.rewardDetail.notEligibleCardTitle}
              body={c.rewardDetail.notEligibleCardBody}
              className="lg:min-h-[112px]"
            />
            {/* WD-60S 1205:1283 draws "View active rule" as a 220px outline */}
            <PillLink to="/worker/coin/earn" className="lg:w-[220px]">
              {c.rewardDetail.viewActiveRule}
            </PillLink>
          </>,
        )}
      </>,
    );
  }

  /* W-60Q (1186:430 amber shortfall card · 1186:433 See ways to earn ·
     1186:435 Back to rewards). The frame is drawn at a 60 Coin balance, so
     the ?state= override uses that mock figure. */
  if (
    step === "detail" &&
    (screenState === "insufficient-balance" || coin.balance < cost)
  ) {
    const available =
      screenState === "insufficient-balance"
        ? INSUFFICIENT_BALANCE
        : coin.balance;
    return shell(
      <>
        <CoinPageHeader
          crumb={c.rewards.title}
          crumbTo="/worker/coin/rewards"
          title={c.rewardDetail.insufficientTitle}
          subtitle={c.rewardDetail.insufficientSubtitle}
        />
        {body(
          <>
            <InfoCard
              tone="amber"
              pad="md"
              bodyGap={32}
              title={c.rewardDetail.insufficientCardTitle(coinAmount(cost))}
              lines={[
                c.rewardDetail.insufficientAvailableLine(coinAmount(available)),
                c.rewardDetail.insufficientNeedLine(
                  coinAmount(cost - available),
                ),
              ]}
              className="lg:min-h-[160px]"
            />
            {/* WD-60Q 1205:1259 / 1205:1261 — 220px pills on one row */}
            <div className="flex flex-col gap-[10px] lg:flex-row lg:gap-[16px]">
              <PillLink
                to="/worker/coin/earn"
                variant="primary"
                className="lg:w-[220px]"
              >
                {c.rewardDetail.seeWaysToEarn}
              </PillLink>
              <PillLink to="/worker/coin/rewards" className="lg:w-[220px]">
                {c.rewardDetail.backToRewards}
              </PillLink>
            </div>
          </>,
        )}
      </>,
    );
  }

  /* W-60O (1186:372 success card · 1186:375 Done · 1186:377 View History) —
     Coin has just been deducted from the mock balance store. */
  if (step === "redeemed") {
    return shell(
      <>
        <CoinPageHeader
          crumb={c.overview.title}
          crumbTo="/worker/coin"
          title={c.rewardDetail.redeemedTitle}
          subtitle={c.rewardDetail.redeemedSubtitle}
        />
        {body(
          <>
            <InfoCard
              tone="mint"
              pad="md"
              bodyGap={32}
              title={c.rewardDetail.redeemedCardTitle}
              lines={[
                c.rewardDetail.redeemedUsedLine(
                  formatSignedCoin(-cost, language),
                ),
                c.rewardDetail.redeemedBalanceLine(
                  coinAmount(spent ? coin.balance : coin.balance - cost),
                ),
                c.rewardDetail.redeemedAvailableLine(rewardCopy.name),
              ]}
              className="lg:min-h-[180px]"
            />
            {/* WD-60O 1205:1239 / 1205:1241 — Done 180px, History 220px */}
            <div className="flex flex-col gap-[10px] lg:flex-row lg:gap-[16px]">
              <PillLink
                to="/worker/coin"
                variant="primary"
                className="lg:w-[180px]"
              >
                {c.rewardDetail.done}
              </PillLink>
              <PillLink to="/worker/coin/history" className="lg:w-[220px]">
                {c.rewardDetail.viewHistory}
              </PillLink>
            </div>
          </>,
        )}
      </>,
    );
  }

  /* W-60N (1186:340 review card · 1186:343 amber "This action uses Coin" ·
     1186:346 Use <cost> Coin · 1186:348 Cancel). */
  if (step === "review") {
    return shell(
      <>
        <CoinPageHeader
          crumb={c.rewards.title}
          crumbTo="/worker/coin/rewards"
          title={c.rewardDetail.reviewTitle}
          subtitle={c.rewardDetail.reviewSubtitle}
        />
        {body(
          <>
            <InfoCard
              tone="mint"
              lgTone="white"
              pad="md"
              bodyGap={32}
              title={rewardCopy.name}
              lines={[
                c.rewardDetail.costLine(coinAmount(cost)),
                c.rewardDetail.currentBalanceLine(coinAmount(coin.balance)),
                c.rewardDetail.balanceAfterLine(coinAmount(coin.balance - cost)),
              ]}
              className="lg:min-h-[160px]"
            />
            <InfoCard
              tone="amber"
              pad="md"
              bodyGap={32}
              title={c.rewardDetail.reviewCardTitle}
              body={c.rewardDetail.reviewCardBody(coinAmount(cost))}
              className="lg:min-h-[94px]"
            />
            {/* WD-60N 1205:1229 / 1205:1231 — Use 240px, Cancel 180px */}
            <div className="flex flex-col gap-[10px] lg:flex-row lg:gap-[16px]">
              <CoinActionButton
                onClick={() => {
                  spendCoin(cost);
                  setSpent(true);
                  setStep("redeemed");
                }}
                className="lg:w-[240px]"
              >
                {c.rewardDetail.use(coinAmount(cost))}
              </CoinActionButton>
              <CoinActionButton
                variant="outline"
                onClick={() => setStep("detail")}
                className="lg:w-[180px]"
              >
                {common.action.cancel}
              </CoinActionButton>
            </div>
          </>,
        )}
      </>,
    );
  }

  /* W-60M (1186:310 reward detail card · 1186:313 "Your balance" ·
     1186:316 "Review redemption"). */
  return shell(
    <>
      <CoinPageHeader
        crumb={c.rewards.title}
        crumbTo="/worker/coin/rewards"
        title={c.rewardDetail.title}
        subtitle={c.rewardDetail.subtitle}
      />
      {body(
        <>
          <InfoCard
            tone="mint"
            lgTone="white"
            pad="md"
            bodyGap={32}
            title={
              reward.fromEmployer
                ? `${rewardCopy.name} · ${EMPLOYER.name}`
                : rewardCopy.name
            }
            lines={[
              c.rewardDetail.costLine(coinAmount(cost)),
              c.rewardDetail.receiveLine(rewardCopy.receive),
              c.rewardDetail.availabilityLine,
            ]}
            className="lg:min-h-[170px]"
          />
          <InfoCard
            tone="white"
            lgTone="mint"
            pad="md"
            bodyGap={32}
            title={c.rewardDetail.balanceTitle}
            lines={[
              c.rewardDetail.currentLine(coinAmount(coin.balance)),
              c.rewardDetail.afterRedemptionLine(
                coinAmount(coin.balance - cost),
              ),
            ]}
            className="lg:min-h-[120px]"
          />
          <CoinActionButton
            onClick={() => setStep("review")}
            className="lg:w-[260px]"
          >
            {c.rewardDetail.reviewRedemption}
          </CoinActionButton>
        </>,
      )}
    </>,
  );
}
