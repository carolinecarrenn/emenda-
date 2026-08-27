import type { ReactNode } from "react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { useEmployerLink } from "@/pages/worker/employer/employerStatus";
import { COIN_COPY } from "./coin.copy";
import { formatSignedCoin } from "./coinFormat";
import { EARN_RULES, ONE_TIME_EARNED_DATE, useCoinState } from "./coinMock";
import { CoinPageHeader } from "./sections/CoinPageHeader";
import { CoinSkeleton } from "./sections/CoinSkeleton";
import { CoinStateBanner } from "./sections/CoinStateBanner";
import { EmptyCoinCard } from "./sections/EmptyCoinCard";
import { InfoCard } from "./sections/InfoCard";
import { OverviewBody } from "./sections/OverviewBody";
import { PendingRewardPanel } from "./sections/PendingRewardPanel";
import { PersonalOverview } from "./sections/PersonalOverview";
import { AccessEndedOverview } from "./sections/AccessEndedOverview";
import { PersonalOfflineOverview } from "./sections/PersonalOfflineOverview";
import { PillLink } from "./sections/PillLink";

/** Emenda Coin overview (Figma WD-60 · loading WD-60C · empty WD-60D ·
 *  offline WD-60E · pending reward WD-60K · one-time reward WD-60R ·
 *  personal WD-60U · access ended WD-60V; mobile W-60).
 *  Breadcrumb "Profile" · 32px H1 · 1012px single column. */
export function CoinOverviewPage() {
  const state = useScreenState();
  const c = useSectionCopy(COIN_COPY);
  const { language } = useLanguage();
  const coin = useCoinState();
  const link = useEmployerLink();

  /* Which overview the worker owns right now: connected (W-60), personal /
     headless (W-60U) or employer access ended (W-60V). Disconnecting the
     employer in W-51 is what flips it — the ?state= URLs stay as overrides. */
  const variant =
    state === "personal-headless" || state === "personal-offline"
      ? "personal"
      : state === "access-ended"
        ? "ended"
        : link.status === "headless"
          ? "personal"
          : link.status === "access-ended"
            ? "ended"
            : "connected";

  const shell = (children: ReactNode) => (
    <div className="max-w-[1012px] pt-4 lg:pt-0">{children}</div>
  );

  /* W-60C (1151:368): the loading frame keeps its own "Loading your balance…"
     line above the skeleton stack. WD-60C (1186:1557) has no Subtitle node —
     it carries the same sentence in a 1012x68 mint card (1205:1157) above the
     four 1012x90 skeletons. */
  if (state === "loading") {
    return shell(
      <>
        <CoinPageHeader
          crumb={c.crumbProfile}
          crumbTo="/worker/profile"
          title={c.loading.title}
          subtitle={c.loading.subtitle}
          subtitleMobileOnly
        />
        <div className="mt-[12px] flex flex-col gap-[12px] lg:mt-[92px] lg:gap-[22px]">
          <InfoCard
            tone="mint"
            pad="md"
            body={c.loading.subtitle}
            className="hidden lg:block lg:min-h-[68px]"
          />
          <CoinSkeleton />
        </div>
      </>,
    );
  }

  /* W-60D (1151:382): the empty frame replaces the overview subtitle with
     "Your reward activity will appear here." */
  if (state === "empty") {
    return shell(
      <>
        <CoinPageHeader
          crumb={c.crumbProfile}
          crumbTo="/worker/profile"
          title={c.overview.title}
          subtitle={c.empty.subtitle}
        />
        <div className="mt-[12px] lg:mt-[58px]">
          <EmptyCoinCard />
        </div>
      </>,
    );
  }

  /* W-60W (1258:253) — offline while headless: cached balance and activity
     instead of the live employer-connected body. */
  if (
    state === "personal-offline" ||
    (state === "offline" && variant === "personal")
  ) {
    return shell(
      <>
        <CoinPageHeader
          crumb={c.crumbProfile}
          crumbTo="/worker/profile"
          title={c.personal.title}
          subtitle={c.personalOffline.subtitle}
        />
        <div className="mt-[12px] lg:mt-[38px]">
          <PersonalOfflineOverview state={coin} />
        </div>
      </>,
    );
  }

  if (state === "offline") {
    return shell(
      <>
        <CoinPageHeader
          crumb={c.crumbProfile}
          crumbTo="/worker/profile"
          title={c.overview.title}
          subtitle={c.overview.subtitle}
        />
        <CoinStateBanner message={c.offline.banner} className="mt-[26px]" />
        <div className="mt-[36px]">
          <OverviewBody state={coin} offline />
        </div>
      </>,
    );
  }

  if (state === "pending-reward") {
    return shell(
      <>
        <CoinPageHeader
          crumb={c.overview.title}
          crumbTo="/worker/coin"
          title={c.pendingReward.title}
          subtitle={c.pendingReward.subtitle}
        />
        <div className="mt-[10px] lg:mt-[46px]">
          <PendingRewardPanel />
        </div>
      </>,
    );
  }

  /* W-60R (1186:437): "Earning status" — the one-time identity reward that
     has already landed, its rule kept visible, and the way back to W-60B. */
  if (state === "one-time-earned") {
    const identityRule = EARN_RULES.find((r) => r.id === "identityVerified");
    return shell(
      <>
        {/* WD-60R 1205:1263/1205:1264 — breadcrumb "Emenda Coin", H1
            "Earning status" (the same wording as the mobile app bar) */}
        <CoinPageHeader
          crumb={c.overview.title}
          crumbTo="/worker/coin"
          title={c.oneTimeEarned.mobileTitle}
          subtitle={c.oneTimeEarned.subtitle}
        />
        <div className="mt-[10px] space-y-[10px] lg:mt-[58px] lg:space-y-[20px]">
          <InfoCard
            tone="mint"
            pad="md"
            bodyGap={32}
            title={c.oneTimeEarned.noticeTitle(
              formatSignedCoin(identityRule?.amount ?? 0, language),
            )}
            body={c.oneTimeEarned.noticeBody(
              formatDisplayDate(ONE_TIME_EARNED_DATE, language),
            )}
            className="lg:min-h-[150px]"
          />
          <InfoCard
            tone="white"
            pad="md"
            bodyGap={32}
            title={c.oneTimeEarned.whyTitle}
            body={c.oneTimeEarned.whyBody}
            className="lg:min-h-[118px]"
          />
          <PillLink to="/worker/coin/earn" className="lg:w-[240px]">
            {c.oneTimeEarned.backToRules}
          </PillLink>
        </div>
      </>,
    );
  }

  /* W-60U (1190:264) — no employer connected */
  if (variant === "personal") {
    return shell(
      <>
        <CoinPageHeader
          crumb={c.crumbProfile}
          crumbTo="/worker/profile"
          title={c.personal.title}
          subtitle={c.personal.subtitle}
        />
        <div className="mt-[38px] lg:mt-[48px]">
          <PersonalOverview state={coin} />
        </div>
      </>,
    );
  }

  /* W-60V (1190:349) — the employer connection ended */
  if (variant === "ended") {
    return shell(
      <>
        <CoinPageHeader
          crumb={c.crumbProfile}
          crumbTo="/worker/profile"
          title={c.accessEnded.title}
          subtitle={c.accessEnded.subtitle}
        />
        <div className="mt-[38px]">
          <AccessEndedOverview state={coin} />
        </div>
      </>,
    );
  }

  return shell(
    <>
      <CoinPageHeader
        crumb={c.crumbProfile}
        crumbTo="/worker/profile"
        title={c.overview.title}
        subtitle={c.overview.subtitle}
      />
      <div className="mt-[10px] lg:mt-[58px]">
        <OverviewBody state={coin} />
      </div>
    </>,
  );
}
