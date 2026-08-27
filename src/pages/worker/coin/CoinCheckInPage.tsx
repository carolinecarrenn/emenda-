import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { COIN_COPY } from "./coin.copy";
import { formatSignedCoin } from "./coinFormat";
import {
  CHECK_IN_DATE,
  DAILY_CHECK_IN_REWARD,
  STREAK_LENGTH,
  claimDailyCheckIn,
  useCoinState,
} from "./coinMock";
import { CoinPageHeader } from "./sections/CoinPageHeader";
import { CheckInHeroCard } from "./sections/CheckInHeroCard";
import { CoinStateBanner } from "./sections/CoinStateBanner";
import { CheckInSuccessCard } from "./sections/CheckInSuccessCard";
import { ActionNoticeCard } from "./sections/ActionNoticeCard";
import { InfoCard } from "./sections/InfoCard";
import { PillLink } from "./sections/PillLink";

/** Daily check-in (Figma mobile W-60F 1158:314 · checked in W-60G 1158:406 ·
 *  failed W-60H 1158:497 · offline W-60I 1158:571; desktop WD-60F 1186:1725 …).
 *  Every state is the same 12px-gap stack: an 11px subtitle, the state's own
 *  hero card with the action inside it, then one secondary card.
 *  Claiming adds +10 to the mock balance store, so the overview reflects the
 *  new balance and streak. */
export function CoinCheckInPage() {
  const screenState = useScreenState();
  const c = useSectionCopy(COIN_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();
  const coin = useCoinState();
  const navigate = useNavigate();

  const reward = formatSignedCoin(DAILY_CHECK_IN_REWARD, language);
  const dateLabel = c.checkIn.today(formatDisplayDate(CHECK_IN_DATE, language));
  const streakLine = c.checkIn.currentStreak(String(coin.streak));

  const shell = (children: ReactNode) => (
    <div className="max-w-[1012px] pt-2 lg:pt-0">{children}</div>
  );

  /* gap (not space-y) so the breakpoint-scoped cards leave no empty slot */
  const body = (children: ReactNode) => (
    <div className="mt-[12px] flex flex-col gap-[12px] lg:mt-[50px] lg:gap-[26px]">
      {children}
    </div>
  );

  /* W-60H (1158:562 rose failure card with the retry button inside it ·
     1158:567 "Current streak · 4 days") — nothing is deducted and the day
     stays open. */
  if (screenState === "failed") {
    return shell(
      <>
        <CoinPageHeader
          crumb={c.crumbProfile}
          crumbTo="/worker/profile"
          title={c.checkIn.title}
          subtitle={c.checkIn.failedSubtitle}
        />
        {body(
          <>
            {/* mobile W-60H rose card */}
            <ActionNoticeCard
              tone="rose"
              title={c.checkIn.failedTitle}
              body={c.checkIn.failedBody}
              action={c.checkIn.retry}
              onAction={() => navigate("/worker/coin/check-in")}
              className="lg:hidden"
            />
            {/* WD-60H 1186:1905 — red-bordered card, red 22px title */}
            <ActionNoticeCard
              tone="rose"
              redOutline
              title={c.checkIn.failedHeroTitle}
              body={c.checkIn.failedHeroBody}
              action={c.checkIn.retryLong}
              onAction={() => navigate("/worker/coin/check-in")}
              className="hidden lg:block"
            />
            <InfoCard
              tone="white"
              density="note"
              title={streakLine}
              body={c.checkIn.failedStatusBody}
              className="lg:hidden"
            />
            {/* WD-60H 1205:1169 — the mint streak note */}
            <InfoCard
              tone="mint"
              pad="md"
              title={c.checkIn.failedTitle}
              lines={[streakLine, c.checkIn.failedStatusBody]}
              className="hidden lg:block lg:min-h-[90px]"
            />
            {/* WD-60H 1205:1310 — the exact-outcome strip */}
            <InfoCard
              tone="rose"
              pad="md"
              body={c.checkIn.failedBody}
              className="hidden lg:block lg:min-h-[74px]"
            />
          </>,
        )}
      </>,
    );
  }

  /* W-60I (1158:636 amber "You're offline" card whose CTA is inert ·
     1158:641 "Current streak · 4 days"). The frame replaces the hero with the
     offline card, so the check-in control survives as the disabled button. */
  if (screenState === "offline") {
    return shell(
      <>
        <CoinPageHeader
          crumb={c.crumbProfile}
          crumbTo="/worker/profile"
          title={c.checkIn.title}
          subtitle={c.checkIn.offlineSubtitle}
        />
        {body(
          <>
            {/* WD-60I 1186:1955 — the amber strip above unchanged content */}
            <CoinStateBanner
              message={c.checkIn.offlineBanner}
              className="hidden lg:flex"
            />
            {/* mobile W-60I amber card with the inert CTA */}
            <ActionNoticeCard
              tone="amber"
              title={c.checkIn.offlineTitle}
              body={c.checkIn.offlineNote}
              action={c.checkIn.offlineButton}
              actionDisabled
              className="lg:hidden"
            />
            {/* WD-60I 1186:1957 — the full hero stays, its CTA inert */}
            <div className="hidden lg:block">
              <CheckInHeroCard
                dateLabel={dateLabel}
                rewardLabel={c.checkIn.reward(reward)}
                streakLabel={streakLine}
                filled={coin.streak}
                note={c.checkIn.note}
                cta={c.checkIn.checkInToday}
                disabled
              />
            </div>
            <InfoCard
              tone="white"
              density="note"
              title={streakLine}
              body={c.checkIn.offlineReassurance}
              className="lg:hidden"
            />
            {/* WD-60I 1205:1172 — what offline check-in actually does */}
            <InfoCard
              tone="mint"
              pad="md"
              lines={[
                c.checkIn.offlineNote,
                c.checkIn.offlineButton,
                c.checkIn.offlineReassurance,
              ]}
              className="hidden lg:block lg:min-h-[68px]"
            />
            {/* WD-60I 1186:1978 — the streak rule stays visible */}
            <InfoCard
              tone="mint"
              pad="md"
              bodyGap={12}
              title={c.checkIn.streakTitle}
              body={c.checkIn.streakBody}
              className="hidden lg:block lg:min-h-[96px]"
            />
          </>,
        )}
      </>,
    );
  }

  /* W-60G (1158:471 success card ending in Done · 1158:493 "Come back
     tomorrow"). The ?state= override shows the streak the claim would grow to. */
  if (screenState === "checked-in" || coin.checkedInToday) {
    const streak = coin.checkedInToday
      ? coin.streak
      : Math.min(coin.streak + 1, STREAK_LENGTH);
    return shell(
      <>
        <CoinPageHeader
          crumb={c.crumbProfile}
          crumbTo="/worker/profile"
          title={c.checkIn.title}
          subtitle={c.checkIn.doneSubtitle}
        />
        {body(
          <>
            <CheckInSuccessCard
              eyebrow={c.checkIn.checkedInEyebrow}
              amount={reward}
              coinAdded={c.checkIn.coinAdded}
              streakLabel={c.checkIn.streakDays(String(streak))}
              filled={streak}
              doneLabel={common.action.done}
              onDone={() => navigate("/worker/coin")}
            />
            {/* WD-60G 1186:1855/1186:1857 — the 280px Done pill sits on the
                same row as the 716px "Come back tomorrow" card */}
            <div className="hidden lg:flex lg:items-start lg:gap-[16px]">
              <PillLink
                to="/worker/coin"
                variant="primary"
                heightClass="h-[46px] lg:h-[48px]"
                className="lg:w-[280px] lg:shrink-0"
              >
                {common.action.done}
              </PillLink>
              <InfoCard
                tone="white"
                pad="md"
                title={c.checkIn.nextTitle}
                body={c.checkIn.nextCardBody}
                className="lg:min-h-[84px] lg:flex-1"
              />
            </div>
            <InfoCard
              tone="white"
              density="note"
              title={c.checkIn.nextTitle}
              body={c.checkIn.nextBody}
              className="lg:hidden"
            />
            {/* WD-60G 1205:1167 — the calendar-day rule strip */}
            <InfoCard
              tone="mint"
              pad="md"
              body={c.checkIn.nextBody}
              className="hidden lg:block lg:min-h-[68px]"
            />
          </>,
        )}
      </>,
    );
  }

  /* W-60F (1158:379 mint hero holding the timezone note and the check-in
     button · 1158:402 white "How streaks work"). */
  return shell(
    <>
      <CoinPageHeader
        crumb={c.crumbProfile}
        crumbTo="/worker/profile"
        title={c.checkIn.title}
        subtitle={c.checkIn.subtitle}
      />
      {body(
        <>
          <CheckInHeroCard
            dateLabel={dateLabel}
            rewardLabel={c.checkIn.reward(reward)}
            streakLabel={streakLine}
            filled={coin.streak}
            note={c.checkIn.note}
            cta={c.checkIn.checkInToday}
            onCheckIn={() => claimDailyCheckIn()}
          />
          <InfoCard
            tone="white"
            lgTone="mint"
            density="note"
            title={c.checkIn.streakTitle}
            body={c.checkIn.streakBody}
            bodyGap={12}
            className="lg:min-h-[96px]"
          />
        </>,
      )}
    </>,
  );
}
