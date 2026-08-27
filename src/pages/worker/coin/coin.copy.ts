import { defineSectionCopy } from "@/i18n/copy";
import type {
  EarnRuleId,
  LedgerFilter,
  LedgerTitleId,
  PendingStepId,
  RewardId,
} from "./coinMock";

/**
 * UI copy for 15 · Emenda Coin (Figma WD-60 … WD-60V).
 * EN strings are the Figma mock text verbatim; ID/JA are faithful translations
 * kept consistent with i18n/common.ts vocabulary. Mock DATA (employer name,
 * amounts, dates, reward ids) stays raw in coinMock.ts.
 */

interface EarnRuleCopy {
  /** Rule name — "Daily check-in". */
  title: string;
  /** WD-60 "Ways to earn" trailing note; empty for the check-in rule. */
  waysNote: string;
  /** W-60 mobile "Ways to earn" row sub-line — "Available today · manual claim". */
  waysStatus: string;
  /** WD-60B rule-row body — "Available daily · manual claim". */
  frequency: string;
  /** W-60B (1151:340) "HOW:" line — what the worker actually does. */
  how: string;
  /** W-60B "LIMIT:" line — how often it can be earned. */
  limit: string;
  /** W-60B "WHEN ADDED:" line — when the Coin lands. */
  whenAdded: string;
}

interface PolicyCardCopy {
  title: string;
  body: string;
}

export interface CoinCopy {
  crumbProfile: string;
  unit: string;
  /** "1,240 Coin" */
  coinValue: (amount: string) => string;
  /** "+20 pending" */
  pendingAmount: (amount: string) => string;
  earnRule: Record<EarnRuleId, EarnRuleCopy>;
  ledgerTitle: Record<LedgerTitleId, string>;
  ledgerMeta: {
    pendingEligibility: string;
    streak: (days: string) => string;
    personalProfile: string;
    partnerBenefit: string;
    /** W-60A node 1151:338 — the identity reward's source. */
    emendaId: string;
  };
  ledgerFilter: Record<LedgerFilter, string>;
  reward: Record<
    RewardId,
    {
      name: string;
      body: string;
      /** W-60M "You receive: …" (1186:312) — what the reward hands over. */
      receive: string;
      availableNow: string;
      unavailable: string;
    }
  >;
  overview: {
    title: string;
    subtitle: string;
    availableBalance: string;
    earnedThisMonth: string;
    dailyCheckIn: string;
    dailyReward: (amount: string) => string;
    dailyRule: string;
    checkInToday: string;
    checkedInToday: string;
    waysToEarn: string;
    seeRules: string;
    currentRewardStatus: string;
    pendingBody: (employer: string) => string;
    /** W-60 mobile status header action — "1 pending". */
    pendingCount: (count: string) => string;
    /** W-60 mobile pending row title — "Daily report · Sakura Care". */
    pendingTitle: (employer: string) => string;
    /** W-60 mobile pending row meta — "Submitted today · eligibility check". */
    pendingMeta: string;
    history: string;
    howToUseCoin: string;
  };
  loading: { title: string; subtitle: string };
  empty: {
    /** W-60D node 1151:391 — the line above the empty card. */
    subtitle: string;
    title: string;
    body: string;
    cta: string;
    /** W-60D node 1151:395 — the empty state's primary action. */
    seeHowToEarn: string;
    /** W-60D node 1158:289 — streak line before the first check-in. */
    zeroStreak: string;
  };
  offline: { banner: string };
  pendingReward: {
    title: string;
    subtitle: string;
    /** W-60K node 1179:534 — "STATUS · Pending eligibility check". */
    heroStatus: string;
    /** W-60K node 1179:535 — "Submitted 25 Aug 2026. No action is required…". */
    heroMeta: (date: string) => string;
    /** W-60K node 1179:537 — the white "What happens next" card. */
    nextTitle: string;
    /** W-60K nodes 1179:538–540 — the three plain outcome lines. */
    nextSteps: (amount: string) => string[];
    pipelineTitle: string;
    step: Record<PendingStepId, { title: string; body: string }>;
    stepStatus: { done: string; current: string; next: string };
    noDuplicateTitle: string;
    noDuplicateBody: string;
    /** WD-60K "Button · Example not eligible" — opens WD-60S. */
    notEligibleExample: string;
  };
  oneTimeEarned: {
    /** W-60R app bar (1186:443) and the WD-60R H1 (1205:1264) — both read
     *  "Earning status". */
    mobileTitle: string;
    subtitle: string;
    /** W-60R node 1186:460 — "Identity verification · +100 Coin". */
    noticeTitle: (amount: string) => string;
    /** W-60R node 1186:461 — "Earned 21 Aug 2026. This reward is granted…". */
    noticeBody: (date: string) => string;
    whyTitle: string;
    whyBody: string;
    backToRules: string;
  };
  personal: {
    title: string;
    subtitle: string;
    availableBalance: string;
    balanceValue: (amount: string) => string;
    dailyCheckIn: (amount: string) => string;
    dailyBody: string;
    checkInToday: string;
    waysToEarnNow: string;
    stillEligible: string;
    identityVerification: string;
    workProgramTitle: string;
    workProgramBody: string;
    history: string;
    coinRules: string;
  };
  /** W-60W · Emenda Coin — Personal Offline (1258:253). */
  personalOffline: {
    subtitle: string;
    bannerTitle: string;
    bannerBody: string;
    checkInBody: string;
    checkInButton: string;
    cachedBalanceEyebrow: string;
    cachedBalanceMeta: (time: string) => string;
    activityTitle: string;
    cachedPreviouslyEarned: string;
    cachedOn: (date: string) => string;
  };
  accessEnded: {
    title: string;
    subtitle: string;
    availableBalance: string;
    balanceValue: (amount: string) => string;
    endedTitle: (employer: string) => string;
    endedBody: (employer: string) => string;
    pendingTitle: string;
    pendingBody: string;
    dailyCheckIn: string;
    history: string;
    coinRules: string;
  };
  checkIn: {
    title: string;
    subtitle: string;
    today: (date: string) => string;
    reward: (amount: string) => string;
    currentStreak: (days: string) => string;
    note: string;
    checkInToday: string;
    streakTitle: string;
    streakBody: string;
    timezoneNote: string;
    doneSubtitle: string;
    checkedInEyebrow: string;
    coinAdded: string;
    streakDays: (days: string) => string;
    nextTitle: string;
    nextBody: string;
    /** WD-60G node 1186:1859 — the desktop "Come back tomorrow" card body. */
    nextCardBody: string;
    failedSubtitle: string;
    failedTitle: string;
    failedBody: string;
    retry: string;
    /** WD-60H nodes 1186:1906/1186:1907/1186:1909 — the desktop failure card
     *  states the outcome in one line and spells the retry out in full. */
    failedHeroTitle: string;
    failedHeroBody: string;
    retryLong: string;
    /** WD-60H "Check-in status" card under the failure card. */
    failedStatusTitle: string;
    failedStatusBody: string;
    offlineSubtitle: string;
    /** W-60I node 1158:637 — the amber card's own title. */
    offlineTitle: string;
    offlineBanner: string;
    offlineNote: string;
    offlineButton: string;
    /** WD-60I "Streak preserved" card. */
    offlineStreakTitle: string;
    offlineReassurance: string;
  };
  history: {
    title: string;
    /** W-60A app-bar title (1151:302) — the section name, not the page name. */
    mobileTitle: string;
    subtitle: string;
    cardTitle: string;
    emptyFilter: string;
  };
  earn: {
    title: string;
    /** W-60B app-bar title (1151:346). */
    mobileTitle: string;
    subtitle: string;
    cardTitle: string;
    /** W-60B node 1182:2033 — the mint card naming the rule in force now. */
    activeProgram: {
      eyebrow: (employer: string) => string;
      rule: (amount: string) => string;
      note: string;
    };
    /** W-60B node 1179:388 — the amber closing notice. */
    programNotice: { title: string; body: string };
  };
  use: {
    title: string;
    subtitle: string;
    howTitle: string;
    steps: string[];
    partnerTitle: string;
    partnerCost: (amount: string) => string;
    partnerBody: string;
    noRewardTitle: string;
    noRewardBody: string;
    rulesButton: string;
  };
  rewards: {
    title: string;
    subtitle: string;
    availableBalance: string;
    balanceValue: (amount: string) => string;
    dash: string;
    beforeTitle: string;
    beforeBody: string;
    back: string;
  };
  rewardDetail: {
    /** W-60M app-bar title (1186:294) — "Reward detail". */
    title: string;
    subtitle: string;
    /** W-60M card lines (1186:312). */
    costLine: (amount: string) => string;
    receiveLine: (what: string) => string;
    availabilityLine: string;
    /** W-60M "Your balance" card (1186:314/315). */
    balanceTitle: string;
    currentLine: (amount: string) => string;
    afterRedemptionLine: (amount: string) => string;
    /** W-60M primary action (1186:317). */
    reviewRedemption: string;
    balanceAfterTitle: string;
    availableNowRow: string;
    costRow: string;
    afterRow: string;
    use: (amount: string) => string;
    reviewTitle: string;
    reviewSubtitle: string;
    /** W-60N review card lines (1186:342). */
    currentBalanceLine: (amount: string) => string;
    balanceAfterLine: (amount: string) => string;
    reviewCardTitle: string;
    reviewCardBody: (amount: string) => string;
    confirm: string;
    redeemedTitle: string;
    redeemedSubtitle: string;
    redeemedCardTitle: string;
    /** W-60O card lines (1186:374). */
    redeemedUsedLine: (amount: string) => string;
    redeemedBalanceLine: (amount: string) => string;
    redeemedAvailableLine: (reward: string) => string;
    redeemedCardBody: string;
    done: string;
    viewHistory: string;
    backToCoin: string;
    failedTitle: string;
    failedSubtitle: string;
    failedCardTitle: string;
    failedCardBody: (amount: string) => string;
    retryRedemption: string;
    backToReward: string;
    insufficientTitle: string;
    insufficientSubtitle: string;
    insufficientCardTitle: (amount: string) => string;
    insufficientAvailableLine: (amount: string) => string;
    insufficientNeedLine: (amount: string) => string;
    insufficientCardBody: string;
    seeWaysToEarn: string;
    notEligibleTitle: string;
    notEligibleSubtitle: string;
    /** W-60S amber card (1186:490/491). */
    notEligibleActivity: (employer: string) => string;
    notEligibleReason: string;
    notEligibleWhyTitle: string;
    notEligibleWhyBody: string;
    notEligibleCardTitle: string;
    notEligibleCardBody: string;
    viewActiveRule: string;
    seeEarningRules: string;
    backToRewards: string;
    unavailableTitle: string;
    unavailableBody: string;
    notFoundTitle: string;
    notFoundBody: string;
  };
  rules: {
    title: string;
    /** W-60T app-bar title (1186:503) — "Coin rules". */
    mobileTitle: string;
    subtitle: string;
    cards: PolicyCardCopy[];
  };
}

export const COIN_COPY = defineSectionCopy<CoinCopy>({
  en: {
    crumbProfile: "Profile",
    unit: "Emenda Coin",
    coinValue: (amount) => `${amount} Coin`,
    pendingAmount: (amount) => `${amount} pending`,
    earnRule: {
      dailyCheckIn: {
        title: "Daily check-in",
        waysNote: "",
        waysStatus: "Available today · manual claim",
        frequency: "Available daily · manual claim",
        how: "HOW: Open Coin and tap Check in today",
        limit: "LIMIT: Once per calendar day · EMENDA account timezone",
        whenAdded: "WHEN ADDED: Immediately after a successful check-in",
      },
      eligibleDailyReport: {
        title: "Eligible daily report",
        waysNote: "Automatic after eligibility is confirmed",
        waysStatus: "Automatic after eligibility is confirmed",
        frequency: "Automatic after eligibility is confirmed",
        how: "HOW: Submit the first eligible report under your active work scope",
        limit: "LIMIT: Current program · 1 reward per workday",
        whenAdded: "WHEN ADDED: Automatically after eligibility/verification is confirmed",
      },
      profileMilestone: {
        title: "Profile milestone",
        waysNote: "One-time milestone · earned",
        waysStatus: "One-time milestone · earned",
        frequency: "One-time milestone",
        how: "HOW: Reach an eligible profile milestone",
        limit: "LIMIT: One-time per milestone",
        whenAdded: "WHEN ADDED: Automatically when the milestone is completed",
      },
      identityVerified: {
        title: "Identity verified",
        waysNote: "One-time reward · earned",
        waysStatus: "One-time reward · earned",
        frequency: "One-time reward",
        how: "HOW: Complete eligible identity verification",
        limit: "LIMIT: One-time",
        whenAdded: "WHEN ADDED: Automatically after verification succeeds",
      },
    },
    ledgerTitle: {
      dailyReport: "Daily report",
      dailyCheckIn: "Daily check-in",
      dailyReportCompleted: "Daily report completed",
      profileMilestone: "Profile milestone",
      rewardUsed: "Reward used",
      identityVerified: "Identity verified",
    },
    ledgerMeta: {
      pendingEligibility: "Pending eligibility",
      streak: (days) => `${days} day streak`,
      personalProfile: "Personal profile",
      partnerBenefit: "Partner benefit",
      emendaId: "EMENDA ID",
    },
    ledgerFilter: {
      all: "All",
      earned: "Earned",
      pending: "Pending",
      used: "Used",
    },
    reward: {
      "partner-benefit": {
        name: "Partner benefit",
        body: "Example reward offered by an active employer/program. Availability may vary.",
        receive: "Example partner benefit",
        availableNow: "available now",
        unavailable: "Not currently available",
      },
      "transport-voucher": {
        name: "Transport voucher",
        body: "This reward is not offered by your active program right now.",
        receive: "Transport voucher",
        availableNow: "available now",
        unavailable: "Not currently available",
      },
    },
    overview: {
      title: "Emenda Coin",
      subtitle:
        "See your balance, what can earn Coin, and what is still pending.",
      availableBalance: "AVAILABLE BALANCE",
      earnedThisMonth: "Earned this month",
      dailyCheckIn: "Daily check-in",
      dailyReward: (amount) => `${amount} today`,
      dailyRule:
        "Claim manually · once per calendar day · added instantly after success.",
      checkInToday: "Check in today",
      checkedInToday: "Checked in today",
      waysToEarn: "Ways to earn",
      seeRules: "See rules",
      currentRewardStatus: "Current reward status",
      pendingBody: (employer) =>
        `Daily report · ${employer} · Submitted today · eligibility check`,
      pendingCount: (count) => `${count} pending`,
      pendingTitle: (employer) => `Daily report · ${employer}`,
      pendingMeta: "Submitted today · eligibility check",
      history: "History",
      howToUseCoin: "How to use Coin",
    },
    loading: { title: "Emenda Coin", subtitle: "Loading your balance…" },
    empty: {
      subtitle: "Your reward activity will appear here.",
      title: "No Emenda Coin yet",
      body: "When you complete an eligible activity, your coin balance and history will appear here.",
      cta: "Daily check-in",
      seeHowToEarn: "See how to earn",
      zeroStreak: "0 day streak · start your first check-in",
    },
    offline: {
      banner:
        "No internet connection. Balance and activity are from your last sync.",
    },
    pendingReward: {
      title: "Pending reward",
      subtitle: "This activity is complete, but the Coin is not available yet.",
      heroStatus: "STATUS · Pending eligibility check",
      heroMeta: (date) =>
        `Submitted ${date}. No action is required from you right now.`,
      nextTitle: "What happens next",
      nextSteps: (amount) => [
        "1. EMENDA checks the active program rule.",
        `2. If eligible, ${amount} Coin is added automatically.`,
        "3. If not eligible, History shows the reason. No Coin is deducted.",
      ],
      pipelineTitle: "How this reward resolves",
      step: {
        submitted: {
          title: "Report submitted",
          body: "Your daily report reached the employer.",
        },
        eligibility: {
          title: "Eligibility check",
          body: "The report is checked against the active program rule.",
        },
        added: {
          title: "Coin added",
          body: "Coin moves from pending to your available balance.",
        },
      },
      stepStatus: { done: "Done", current: "In progress", next: "Next" },
      noDuplicateTitle: "No duplicate claims",
      noDuplicateBody:
        "You do not need to resubmit or claim this reward manually.",
      notEligibleExample: "See not-eligible outcome",
    },
    oneTimeEarned: {
      mobileTitle: "Earning status",
      subtitle: "This one-time reward has already been received.",
      noticeTitle: (amount) => `Identity verification · ${amount} Coin`,
      noticeBody: (date) =>
        `Earned ${date}. This reward is granted once and cannot be earned again by repeating verification.`,
      whyTitle: "One-time reward",
      whyBody:
        "The earning rule remains visible so you can see why it is no longer available.",
      backToRules: "Back to earning rules",
    },
    personal: {
      title: "Emenda Coin",
      subtitle:
        "Your Coin belongs to your EMENDA account, independent of any single employer connection.",
      availableBalance: "Available balance",
      balanceValue: (amount) => `${amount} Coin · includes previously earned Coin`,
      dailyCheckIn: (amount) => `Daily check-in · ${amount}`,
      dailyBody: "Available today · manual claim · once per account calendar day",
      checkInToday: "Check in today",
      waysToEarnNow: "Ways to earn now",
      stillEligible: "if still eligible",
      identityVerification: "Identity verification",
      workProgramTitle: "Work program rewards",
      workProgramBody:
        "Work-report rewards appear only when an eligible employer/program is active. Open Coin from connected Home to see the current rule.",
      history: "History",
      coinRules: "Coin rules",
    },
    personalOffline: {
      subtitle: "Your personal Coin balance is cached while you reconnect.",
      bannerTitle: "You’re offline",
      bannerBody:
        "Balance and personal activity may be out of date. Work-program rewards appear only when an eligible employer is active.",
      checkInBody:
        "Reconnect to check in. Offline activity will not claim or duplicate a daily reward.",
      checkInButton: "Check in after reconnecting",
      cachedBalanceEyebrow: "LAST SYNCED BALANCE",
      cachedBalanceMeta: (time) => `Emenda Coin · last synced ${time}`,
      activityTitle: "Recent personal activity",
      cachedPreviouslyEarned: "Cached · previously earned",
      cachedOn: (date) => `Cached · ${date}`,
    },
    accessEnded: {
      title: "Emenda Coin",
      subtitle: "Your balance remains available after employer access ends.",
      availableBalance: "Available balance",
      balanceValue: (amount) => `${amount} Coin · already-earned Coin is preserved`,
      endedTitle: (employer) => `${employer} access ended`,
      endedBody: (employer) =>
        `New ${employer} work-report rewards are no longer available.`,
      pendingTitle: "Pending reward continues",
      pendingBody:
        "A reward submitted before access ended can still resolve under the rule active at submission.",
      dailyCheckIn: "Daily check-in",
      history: "History",
      coinRules: "Coin rules & ownership",
    },
    checkIn: {
      title: "Daily check-in",
      subtitle: "Check in once today to keep your streak going.",
      today: (date) => `Today · ${date}`,
      reward: (amount) => `${amount} Coin`,
      currentStreak: (days) => `Current streak · ${days} days`,
      note: "One reward per calendar day in your EMENDA account timezone.",
      checkInToday: "Check in today",
      streakTitle: "How streaks work",
      streakBody:
        "Check in on consecutive days to grow your streak. Missing a day starts a new streak.",
      timezoneNote:
        "One reward per calendar day in your EMENDA account timezone.",
      doneSubtitle: "Today's check-in is complete.",
      checkedInEyebrow: "CHECKED IN",
      coinAdded: "Emenda Coin added",
      streakDays: (days) => `${days} day streak`,
      nextTitle: "Come back tomorrow",
      nextBody:
        "Your next check-in opens on the next calendar day in your EMENDA account timezone.",
      nextCardBody:
        "Your next daily check-in becomes available on the next calendar day.",
      failedSubtitle: "Your streak is safe while we retry.",
      failedTitle: "Couldn’t complete check-in",
      failedBody:
        "No Coin was added and today was not marked as checked in. Retry without creating a duplicate reward.",
      retry: "Retry check-in",
      failedHeroTitle: "Daily check-in failed",
      failedHeroBody: "Your reward was not added. Try again.",
      retryLong: "Retry daily check-in",
      failedStatusTitle: "Check-in status",
      failedStatusBody:
        "Your existing streak stays unchanged until a check-in succeeds.",
      offlineSubtitle: "Daily check-in needs an internet connection.",
      offlineTitle: "You’re offline",
      offlineBanner: "No internet connection. Check-in is unavailable.",
      offlineNote:
        "Reconnect before checking in. The app will not queue or auto-claim a reward in the background.",
      offlineButton: "Check in after reconnecting",
      offlineStreakTitle: "Streak preserved",
      offlineReassurance:
        "A temporary connection issue does not immediately change the streak shown here.",
    },
    history: {
      title: "Coin history",
      mobileTitle: "Emenda Coin",
      subtitle: "Earned, pending, and used Coin activity.",
      cardTitle: "Coin history",
      emptyFilter: "No Coin activity in this filter.",
    },
    earn: {
      title: "How to earn Coin",
      mobileTitle: "Emenda Coin",
      subtitle:
        "Know exactly what earns Coin, how often, and when it is added.",
      cardTitle: "Ways to earn",
      activeProgram: {
        eyebrow: (employer) => `ACTIVE PROGRAM · ${employer}`,
        rule: (amount) =>
          `Daily report: ${amount} Coin · first eligible report per workday`,
        note: "Added automatically after eligibility is confirmed.",
      },
      programNotice: {
        title: "Rules are visible before you earn",
        body: "Other employers/programs may use different rewards or limits. EMENDA shows the active rule before you complete the activity.",
      },
    },
    use: {
      title: "How to use Coin",
      subtitle:
        "Coin stays in your balance until you use it on an available reward.",
      howTitle: "How using Coin works",
      steps: [
        "1. Open an available reward or partner benefit.",
        "2. Review the Coin cost and what you receive.",
        "3. Confirm before Coin is deducted.",
        "4. Used Coin appears in History.",
      ],
      partnerTitle: "Partner benefit",
      partnerCost: (amount) => `${amount} Coin`,
      partnerBody:
        "Example reward offered by an active employer/program. Availability may vary.",
      noRewardTitle: "If no reward is available",
      noRewardBody:
        "Your Coin remains in your balance. Coin is never deducted just for viewing a reward.",
      rulesButton: "Coin rules & ownership",
    },
    rewards: {
      title: "Rewards",
      subtitle: "Available rewards depend on your active EMENDA program.",
      availableBalance: "Available balance",
      balanceValue: (amount) => `${amount} Coin available to use`,
      dash: "—",
      beforeTitle: "Before you use Coin",
      beforeBody:
        "The exact Coin cost and what you receive are shown before confirmation. Availability can change by program.",
      back: "How to use Coin",
    },
    rewardDetail: {
      title: "Reward detail",
      subtitle: "Review the reward before using any Coin.",
      costLine: (amount) => `Cost: ${amount} Coin`,
      receiveLine: (what) => `You receive: ${what}`,
      availabilityLine: "Availability: Current active program",
      balanceTitle: "Your balance",
      currentLine: (amount) => `Current: ${amount} Coin`,
      afterRedemptionLine: (amount) => `After redemption: ${amount} Coin`,
      reviewRedemption: "Review redemption",
      balanceAfterTitle: "Balance after use",
      availableNowRow: "Available now",
      costRow: "Reward cost",
      afterRow: "Balance after use",
      use: (amount) => `Use ${amount} Coin`,
      reviewTitle: "Confirm reward",
      reviewSubtitle: "Coin is not deducted until you confirm.",
      currentBalanceLine: (amount) => `Current balance: ${amount} Coin`,
      balanceAfterLine: (amount) => `Balance after: ${amount} Coin`,
      reviewCardTitle: "This action uses Coin",
      reviewCardBody: () =>
        "After confirmation, the reward appears in History as Used.",
      confirm: "Confirm and use Coin",
      redeemedTitle: "Reward redeemed",
      redeemedSubtitle: "Your Coin and reward history are updated.",
      redeemedCardTitle: "Reward redeemed successfully",
      redeemedUsedLine: (amount) => `${amount} Coin used`,
      redeemedBalanceLine: (amount) => `New balance: ${amount} Coin`,
      redeemedAvailableLine: (reward) => `${reward} is now available.`,
      redeemedCardBody:
        "The reward appears in your Coin history as Used, with the exact amount deducted.",
      done: "Done",
      viewHistory: "View History",
      backToCoin: "Back to Emenda Coin",
      failedTitle: "Couldn’t redeem",
      failedSubtitle: "Your Coin was not deducted.",
      failedCardTitle: "Redemption failed",
      failedCardBody: (amount) =>
        `The reward could not be completed. Your balance remains ${amount} Coin. Retry safely without duplicate deduction.`,
      retryRedemption: "Retry redemption",
      backToReward: "Back to reward",
      insufficientTitle: "Not enough Coin",
      insufficientSubtitle:
        "This reward costs more than your available balance.",
      insufficientCardTitle: (amount) => `${amount} Coin required`,
      insufficientAvailableLine: (amount) => `Available balance: ${amount} Coin`,
      insufficientNeedLine: (amount) =>
        `You need ${amount} more Coin before this reward can be used.`,
      insufficientCardBody:
        "Coin is never partly deducted. Earn the remaining Coin and the reward stays available.",
      seeWaysToEarn: "See ways to earn",
      notEligibleTitle: "Reward not added",
      notEligibleSubtitle:
        "This completed activity did not meet the active reward rule.",
      notEligibleActivity: (employer) => `Daily report · ${employer}`,
      notEligibleReason:
        "No Coin was added. Reason: this was not the first eligible report for the workday. Your submitted report remains valid.",
      notEligibleWhyTitle: "Eligibility was not met",
      notEligibleWhyBody:
        "The submitted report did not match the reward rule of the active program, so the pending Coin was not added.",
      notEligibleCardTitle: "Nothing was deducted",
      notEligibleCardBody:
        "You do not lose existing Coin when an activity is not eligible for a reward.",
      viewActiveRule: "View active rule",
      seeEarningRules: "See earning rules",
      backToRewards: "Back to rewards",
      unavailableTitle: "Not currently available",
      unavailableBody:
        "This reward is not offered by your active program right now. Your Coin stays in your balance.",
      notFoundTitle: "Reward not available",
      notFoundBody: "This reward is not part of your active EMENDA program.",
    },
    rules: {
      title: "Coin rules & ownership",
      mobileTitle: "Coin rules",
      subtitle:
        "What happens to Coin over time and across employer connections.",
      cards: [
        {
          title: "Earned Coin stays with your EMENDA account",
          body: "Ending an employer connection does not remove Coin that is already available in your balance.",
        },
        {
          title: "Pending activity continues to resolution",
          body: "A reward submitted before access ended is evaluated using the rule active when the activity was submitted.",
        },
        {
          title: "Coin expiration",
          body: "Available Emenda Coin does not expire under current EMENDA rules. If a future program adds an expiry, the date must be shown before you earn or use that Coin.",
        },
        {
          title: "Rules can change for future activity",
          body: "A changed program rule never silently changes Coin already earned. New rules apply only after they are shown to you.",
        },
      ],
    },
  },

  id: {
    crumbProfile: "Profil",
    unit: "Emenda Coin",
    coinValue: (amount) => `${amount} Coin`,
    pendingAmount: (amount) => `${amount} menunggu`,
    earnRule: {
      dailyCheckIn: {
        title: "Check-in harian",
        waysNote: "",
        waysStatus: "Tersedia hari ini · klaim manual",
        frequency: "Tersedia setiap hari · klaim manual",
        how: "CARA: Buka Coin lalu ketuk Check-in hari ini",
        limit: "BATAS: Sekali per hari kalender · zona waktu akun EMENDA",
        whenAdded: "KAPAN DITAMBAHKAN: Segera setelah check-in berhasil",
      },
      eligibleDailyReport: {
        title: "Laporan harian yang memenuhi syarat",
        waysNote: "Otomatis setelah kelayakan dikonfirmasi",
        waysStatus: "Otomatis setelah kelayakan dikonfirmasi",
        frequency: "Otomatis setelah kelayakan dikonfirmasi",
        how: "CARA: Kirim laporan pertama yang memenuhi syarat dalam lingkup kerja aktif Anda",
        limit: "BATAS: Program saat ini · 1 reward per hari kerja",
        whenAdded: "KAPAN DITAMBAHKAN: Otomatis setelah kelayakan/verifikasi dikonfirmasi",
      },
      profileMilestone: {
        title: "Pencapaian profil",
        waysNote: "Pencapaian sekali · diperoleh",
        waysStatus: "Pencapaian sekali · diperoleh",
        frequency: "Pencapaian sekali",
        how: "CARA: Capai milestone profil yang memenuhi syarat",
        limit: "BATAS: Sekali per milestone",
        whenAdded: "KAPAN DITAMBAHKAN: Otomatis saat milestone selesai",
      },
      identityVerified: {
        title: "Identitas terverifikasi",
        waysNote: "Hadiah sekali · diperoleh",
        waysStatus: "Hadiah sekali · diperoleh",
        frequency: "Hadiah sekali",
        how: "CARA: Selesaikan verifikasi identitas yang memenuhi syarat",
        limit: "BATAS: Sekali saja",
        whenAdded: "KAPAN DITAMBAHKAN: Otomatis setelah verifikasi berhasil",
      },
    },
    ledgerTitle: {
      dailyReport: "Laporan harian",
      dailyCheckIn: "Check-in harian",
      dailyReportCompleted: "Laporan harian selesai",
      profileMilestone: "Pencapaian profil",
      rewardUsed: "Hadiah digunakan",
      identityVerified: "Identitas terverifikasi",
    },
    ledgerMeta: {
      pendingEligibility: "Menunggu kelayakan",
      streak: (days) => `Rentetan ${days} hari`,
      personalProfile: "Profil pribadi",
      partnerBenefit: "Manfaat mitra",
      emendaId: "ID EMENDA",
    },
    ledgerFilter: {
      all: "Semua",
      earned: "Diperoleh",
      pending: "Menunggu",
      used: "Terpakai",
    },
    reward: {
      "partner-benefit": {
        name: "Manfaat mitra",
        body: "Contoh hadiah yang ditawarkan oleh pemberi kerja/program aktif. Ketersediaan dapat berbeda.",
        receive: "Contoh manfaat mitra",
        availableNow: "tersedia sekarang",
        unavailable: "Saat ini tidak tersedia",
      },
      "transport-voucher": {
        name: "Voucher transportasi",
        body: "Hadiah ini tidak ditawarkan oleh program aktif Anda saat ini.",
        receive: "Voucher transportasi",
        availableNow: "tersedia sekarang",
        unavailable: "Saat ini tidak tersedia",
      },
    },
    overview: {
      title: "Emenda Coin",
      subtitle:
        "Lihat saldo Anda, apa yang bisa menghasilkan Coin, dan apa yang masih menunggu.",
      availableBalance: "SALDO TERSEDIA",
      earnedThisMonth: "Diperoleh bulan ini",
      dailyCheckIn: "Check-in harian",
      dailyReward: (amount) => `${amount} hari ini`,
      dailyRule:
        "Klaim manual · sekali per hari kalender · ditambahkan langsung setelah berhasil.",
      checkInToday: "Check-in hari ini",
      checkedInToday: "Sudah check-in hari ini",
      waysToEarn: "Cara memperoleh",
      seeRules: "Lihat aturan",
      currentRewardStatus: "Status hadiah saat ini",
      pendingBody: (employer) =>
        `Laporan harian · ${employer} · Dikirim hari ini · pemeriksaan kelayakan`,
      pendingCount: (count) => `${count} menunggu`,
      pendingTitle: (employer) => `Laporan harian · ${employer}`,
      pendingMeta: "Dikirim hari ini · pemeriksaan kelayakan",
      history: "Riwayat",
      howToUseCoin: "Cara memakai Coin",
    },
    loading: { title: "Emenda Coin", subtitle: "Memuat saldo Anda…" },
    empty: {
      subtitle: "Aktivitas rewardmu akan muncul di sini.",
      title: "Belum ada Emenda Coin",
      body: "Saat Anda menyelesaikan aktivitas yang memenuhi syarat, saldo dan riwayat coin Anda akan muncul di sini.",
      cta: "Check-in harian",
      seeHowToEarn: "Lihat cara memperoleh",
      zeroStreak: "Rentetan 0 hari · mulai check-in pertama Anda",
    },
    offline: {
      banner:
        "Tidak ada koneksi internet. Saldo dan aktivitas berasal dari sinkronisasi terakhir.",
    },
    pendingReward: {
      title: "Hadiah menunggu",
      subtitle: "Aktivitas ini selesai, tetapi Coin belum tersedia.",
      heroStatus: "STATUS · Menunggu pemeriksaan kelayakan",
      heroMeta: (date) =>
        `Dikirim ${date}. Tidak ada tindakan yang perlu Anda lakukan sekarang.`,
      nextTitle: "Apa yang terjadi berikutnya",
      nextSteps: (amount) => [
        "1. EMENDA memeriksa aturan program yang aktif.",
        `2. Jika memenuhi syarat, ${amount} Coin ditambahkan otomatis.`,
        "3. Jika tidak memenuhi syarat, Riwayat menampilkan alasannya. Tidak ada Coin yang dipotong.",
      ],
      pipelineTitle: "Bagaimana hadiah ini diselesaikan",
      step: {
        submitted: {
          title: "Laporan dikirim",
          body: "Laporan harian Anda sampai ke pemberi kerja.",
        },
        eligibility: {
          title: "Pemeriksaan kelayakan",
          body: "Laporan diperiksa terhadap aturan program yang aktif.",
        },
        added: {
          title: "Coin ditambahkan",
          body: "Coin berpindah dari menunggu ke saldo tersedia Anda.",
        },
      },
      stepStatus: { done: "Selesai", current: "Berjalan", next: "Berikutnya" },
      noDuplicateTitle: "Tanpa klaim ganda",
      noDuplicateBody:
        "Anda tidak perlu mengirim ulang atau mengklaim hadiah ini secara manual.",
      notEligibleExample: "Lihat hasil tidak memenuhi syarat",
    },
    oneTimeEarned: {
      mobileTitle: "Status perolehan",
      subtitle: "Hadiah sekali ini sudah pernah diterima.",
      noticeTitle: (amount) => `Verifikasi identitas · ${amount} Coin`,
      noticeBody: (date) =>
        `Diperoleh ${date}. Hadiah ini diberikan sekali dan tidak dapat diperoleh lagi dengan mengulang verifikasi.`,
      whyTitle: "Hadiah sekali",
      whyBody:
        "Aturan perolehan tetap terlihat agar Anda tahu mengapa hadiah ini tidak lagi tersedia.",
      backToRules: "Kembali ke aturan perolehan",
    },
    personal: {
      title: "Emenda Coin",
      subtitle:
        "Coin Anda milik akun EMENDA Anda, terlepas dari koneksi pemberi kerja mana pun.",
      availableBalance: "Saldo tersedia",
      balanceValue: (amount) =>
        `${amount} Coin · termasuk Coin yang sudah diperoleh`,
      dailyCheckIn: (amount) => `Check-in harian · ${amount}`,
      dailyBody: "Tersedia hari ini · klaim manual · sekali per hari kalender akun",
      checkInToday: "Check-in hari ini",
      waysToEarnNow: "Cara memperoleh sekarang",
      stillEligible: "jika masih memenuhi syarat",
      identityVerification: "Verifikasi identitas",
      workProgramTitle: "Hadiah program kerja",
      workProgramBody:
        "Hadiah laporan kerja hanya muncul saat pemberi kerja/program yang memenuhi syarat aktif. Buka Coin dari Beranda yang terhubung untuk melihat aturan saat ini.",
      history: "Riwayat",
      coinRules: "Aturan Coin",
    },
    personalOffline: {
      subtitle:
        "Saldo Coin pribadi Anda tersimpan sementara sambil Anda menyambung kembali.",
      bannerTitle: "Anda sedang offline",
      bannerBody:
        "Saldo dan aktivitas pribadi mungkin sudah tidak terbaru. Hadiah program kerja hanya muncul saat pemberi kerja yang memenuhi syarat aktif.",
      checkInBody:
        "Sambungkan kembali untuk check-in. Aktivitas offline tidak akan mengklaim atau menggandakan hadiah harian.",
      checkInButton: "Check-in setelah tersambung kembali",
      cachedBalanceEyebrow: "SALDO SINKRON TERAKHIR",
      cachedBalanceMeta: (time) => `Emenda Coin · sinkron terakhir ${time}`,
      activityTitle: "Aktivitas pribadi terbaru",
      cachedPreviouslyEarned: "Tersimpan · sudah diperoleh sebelumnya",
      cachedOn: (date) => `Tersimpan · ${date}`,
    },
    accessEnded: {
      title: "Emenda Coin",
      subtitle: "Saldo Anda tetap tersedia setelah akses pemberi kerja berakhir.",
      availableBalance: "Saldo tersedia",
      balanceValue: (amount) =>
        `${amount} Coin · Coin yang sudah diperoleh tetap dipertahankan`,
      endedTitle: (employer) => `Akses ${employer} berakhir`,
      endedBody: (employer) =>
        `Hadiah laporan kerja ${employer} yang baru tidak lagi tersedia.`,
      pendingTitle: "Hadiah menunggu tetap berjalan",
      pendingBody:
        "Hadiah yang dikirim sebelum akses berakhir masih dapat diselesaikan menurut aturan yang berlaku saat pengiriman.",
      dailyCheckIn: "Check-in harian",
      history: "Riwayat",
      coinRules: "Aturan & kepemilikan Coin",
    },
    checkIn: {
      title: "Check-in harian",
      subtitle: "Check-in sekali hari ini untuk menjaga rentetan Anda.",
      today: (date) => `Hari ini · ${date}`,
      reward: (amount) => `${amount} Coin`,
      currentStreak: (days) => `Rentetan saat ini · ${days} hari`,
      note: "Satu hadiah per hari kalender di zona waktu akun EMENDA Anda.",
      checkInToday: "Check-in hari ini",
      streakTitle: "Cara kerja rentetan",
      streakBody:
        "Check-in pada hari berturut-turut untuk menumbuhkan rentetan. Melewatkan satu hari memulai rentetan baru.",
      timezoneNote:
        "Satu hadiah per hari kalender di zona waktu akun EMENDA Anda.",
      doneSubtitle: "Check-in hari ini sudah selesai.",
      checkedInEyebrow: "SUDAH CHECK-IN",
      coinAdded: "Emenda Coin ditambahkan",
      streakDays: (days) => `Rentetan ${days} hari`,
      nextTitle: "Kembali lagi besok",
      nextBody:
        "Check-in berikutnya terbuka pada hari kalender berikutnya di zona waktu akun EMENDA Anda.",
      nextCardBody:
        "Check-in harian Anda berikutnya tersedia pada hari kalender berikutnya.",
      failedSubtitle: "Rentetan Anda aman selama kami mencoba lagi.",
      failedTitle: "Check-in tidak dapat diselesaikan",
      failedBody:
        "Tidak ada Coin yang ditambahkan dan hari ini belum ditandai sudah check-in. Coba lagi tanpa membuat hadiah ganda.",
      retry: "Coba check-in lagi",
      failedHeroTitle: "Check-in harian gagal",
      failedHeroBody: "Hadiah Anda tidak ditambahkan. Coba lagi.",
      retryLong: "Coba check-in harian lagi",
      failedStatusTitle: "Status check-in",
      failedStatusBody:
        "Rentetan Anda yang ada tidak berubah sampai check-in berhasil.",
      offlineSubtitle: "Check-in harian memerlukan koneksi internet.",
      offlineTitle: "Anda sedang offline",
      offlineBanner: "Tidak ada koneksi internet. Check-in tidak tersedia.",
      offlineNote:
        "Sambungkan kembali sebelum check-in. Aplikasi tidak akan mengantre atau mengklaim hadiah secara otomatis di latar belakang.",
      offlineButton: "Check-in setelah tersambung kembali",
      offlineStreakTitle: "Rentetan terjaga",
      offlineReassurance:
        "Masalah koneksi sementara tidak langsung mengubah rentetan yang ditampilkan di sini.",
    },
    history: {
      title: "Riwayat Coin",
      mobileTitle: "Emenda Coin",
      subtitle: "Aktivitas Coin yang diperoleh, menunggu, dan terpakai.",
      cardTitle: "Riwayat Coin",
      emptyFilter: "Tidak ada aktivitas Coin pada filter ini.",
    },
    earn: {
      title: "Cara memperoleh Coin",
      mobileTitle: "Emenda Coin",
      subtitle:
        "Ketahui persis apa yang menghasilkan Coin, seberapa sering, dan kapan ditambahkan.",
      cardTitle: "Cara memperoleh",
      activeProgram: {
        eyebrow: (employer) => `PROGRAM AKTIF · ${employer}`,
        rule: (amount) =>
          `Laporan harian: ${amount} Coin · laporan pertama yang memenuhi syarat per hari kerja`,
        note: "Ditambahkan otomatis setelah kelayakan dikonfirmasi.",
      },
      programNotice: {
        title: "Aturan terlihat sebelum Anda memperoleh",
        body: "Pemberi kerja/program lain dapat menggunakan reward atau batas yang berbeda. EMENDA menampilkan aturan yang berlaku sebelum Anda menyelesaikan aktivitas.",
      },
    },
    use: {
      title: "Cara memakai Coin",
      subtitle:
        "Coin tetap di saldo Anda sampai Anda memakainya untuk hadiah yang tersedia.",
      howTitle: "Cara memakai Coin bekerja",
      steps: [
        "1. Buka hadiah atau manfaat mitra yang tersedia.",
        "2. Tinjau biaya Coin dan apa yang Anda terima.",
        "3. Konfirmasi sebelum Coin dipotong.",
        "4. Coin yang terpakai muncul di Riwayat.",
      ],
      partnerTitle: "Manfaat mitra",
      partnerCost: (amount) => `${amount} Coin`,
      partnerBody:
        "Contoh hadiah yang ditawarkan oleh pemberi kerja/program aktif. Ketersediaan dapat berbeda.",
      noRewardTitle: "Jika tidak ada hadiah tersedia",
      noRewardBody:
        "Coin Anda tetap di saldo. Coin tidak pernah dipotong hanya karena melihat hadiah.",
      rulesButton: "Aturan & kepemilikan Coin",
    },
    rewards: {
      title: "Hadiah",
      subtitle: "Hadiah yang tersedia tergantung program EMENDA aktif Anda.",
      availableBalance: "Saldo tersedia",
      balanceValue: (amount) => `${amount} Coin siap dipakai`,
      dash: "—",
      beforeTitle: "Sebelum Anda memakai Coin",
      beforeBody:
        "Biaya Coin persis dan apa yang Anda terima ditampilkan sebelum konfirmasi. Ketersediaan dapat berubah menurut program.",
      back: "Cara memakai Coin",
    },
    rewardDetail: {
      title: "Detail hadiah",
      subtitle: "Tinjau hadiah sebelum memakai Coin.",
      costLine: (amount) => `Biaya: ${amount} Coin`,
      receiveLine: (what) => `Anda terima: ${what}`,
      availabilityLine: "Ketersediaan: Program aktif saat ini",
      balanceTitle: "Saldo Anda",
      currentLine: (amount) => `Saat ini: ${amount} Coin`,
      afterRedemptionLine: (amount) => `Setelah penukaran: ${amount} Coin`,
      reviewRedemption: "Tinjau penukaran",
      balanceAfterTitle: "Saldo setelah pemakaian",
      availableNowRow: "Tersedia sekarang",
      costRow: "Biaya hadiah",
      afterRow: "Saldo setelah pemakaian",
      use: (amount) => `Pakai ${amount} Coin`,
      reviewTitle: "Konfirmasi hadiah",
      reviewSubtitle: "Coin tidak dipotong sampai Anda konfirmasi.",
      currentBalanceLine: (amount) => `Saldo saat ini: ${amount} Coin`,
      balanceAfterLine: (amount) => `Saldo setelah: ${amount} Coin`,
      reviewCardTitle: "Tindakan ini memakai Coin",
      reviewCardBody: () =>
        "Setelah konfirmasi, hadiah muncul di Riwayat sebagai Terpakai.",
      confirm: "Konfirmasi dan pakai Coin",
      redeemedTitle: "Hadiah ditukarkan",
      redeemedSubtitle: "Coin dan riwayat hadiah Anda sudah diperbarui.",
      redeemedCardTitle: "Hadiah berhasil ditukarkan",
      redeemedUsedLine: (amount) => `${amount} Coin terpakai`,
      redeemedBalanceLine: (amount) => `Saldo baru: ${amount} Coin`,
      redeemedAvailableLine: (reward) => `${reward} kini tersedia.`,
      redeemedCardBody:
        "Hadiah muncul di riwayat Coin Anda sebagai Terpakai, dengan jumlah persis yang dipotong.",
      done: "Selesai",
      viewHistory: "Lihat Riwayat",
      backToCoin: "Kembali ke Emenda Coin",
      failedTitle: "Tidak dapat ditukarkan",
      failedSubtitle: "Coin Anda tidak dipotong.",
      failedCardTitle: "Penukaran gagal",
      failedCardBody: (amount) =>
        `Hadiah tidak dapat diselesaikan. Saldo Anda tetap ${amount} Coin. Coba lagi dengan aman tanpa pemotongan ganda.`,
      retryRedemption: "Coba tukarkan lagi",
      backToReward: "Kembali ke hadiah",
      insufficientTitle: "Coin tidak cukup",
      insufficientSubtitle:
        "Hadiah ini membutuhkan lebih banyak Coin daripada saldo tersedia Anda.",
      insufficientCardTitle: (amount) => `Butuh ${amount} Coin`,
      insufficientAvailableLine: (amount) => `Saldo tersedia: ${amount} Coin`,
      insufficientNeedLine: (amount) =>
        `Anda butuh ${amount} Coin lagi sebelum hadiah ini dapat dipakai.`,
      insufficientCardBody:
        "Coin tidak pernah dipotong sebagian. Kumpulkan sisa Coin dan hadiah tetap tersedia.",
      seeWaysToEarn: "Lihat cara memperoleh",
      notEligibleTitle: "Hadiah tidak ditambahkan",
      notEligibleSubtitle:
        "Aktivitas yang selesai ini tidak memenuhi aturan hadiah yang aktif.",
      notEligibleActivity: (employer) => `Laporan harian · ${employer}`,
      notEligibleReason:
        "Tidak ada Coin yang ditambahkan. Alasan: ini bukan laporan pertama yang memenuhi syarat pada hari kerja tersebut. Laporan yang Anda kirim tetap sah.",
      notEligibleWhyTitle: "Kelayakan tidak terpenuhi",
      notEligibleWhyBody:
        "Laporan yang dikirim tidak sesuai dengan aturan hadiah pada program aktif, sehingga Coin yang menunggu tidak ditambahkan.",
      notEligibleCardTitle: "Tidak ada yang dipotong",
      notEligibleCardBody:
        "Anda tidak kehilangan Coin yang sudah ada saat sebuah aktivitas tidak memenuhi syarat hadiah.",
      viewActiveRule: "Lihat aturan aktif",
      seeEarningRules: "Lihat aturan perolehan",
      backToRewards: "Kembali ke hadiah",
      unavailableTitle: "Saat ini tidak tersedia",
      unavailableBody:
        "Hadiah ini tidak ditawarkan oleh program aktif Anda saat ini. Coin Anda tetap di saldo.",
      notFoundTitle: "Hadiah tidak tersedia",
      notFoundBody: "Hadiah ini bukan bagian dari program EMENDA aktif Anda.",
    },
    rules: {
      title: "Aturan & kepemilikan Coin",
      mobileTitle: "Aturan Coin",
      subtitle:
        "Apa yang terjadi pada Coin seiring waktu dan di berbagai koneksi pemberi kerja.",
      cards: [
        {
          title: "Coin yang diperoleh tetap milik akun EMENDA Anda",
          body: "Mengakhiri koneksi pemberi kerja tidak menghapus Coin yang sudah tersedia di saldo Anda.",
        },
        {
          title: "Aktivitas menunggu tetap berlanjut sampai selesai",
          body: "Hadiah yang dikirim sebelum akses berakhir dinilai memakai aturan yang berlaku saat aktivitas dikirim.",
        },
        {
          title: "Kedaluwarsa Coin",
          body: "Emenda Coin yang tersedia tidak kedaluwarsa menurut aturan EMENDA saat ini. Jika program mendatang menambahkan masa berlaku, tanggalnya harus ditampilkan sebelum Anda memperoleh atau memakai Coin tersebut.",
        },
        {
          title: "Aturan dapat berubah untuk aktivitas mendatang",
          body: "Perubahan aturan program tidak pernah diam-diam mengubah Coin yang sudah diperoleh. Aturan baru hanya berlaku setelah ditampilkan kepada Anda.",
        },
      ],
    },
  },

  ja: {
    crumbProfile: "プロフィール",
    unit: "Emenda Coin",
    coinValue: (amount) => `${amount} コイン`,
    pendingAmount: (amount) => `${amount} 保留中`,
    earnRule: {
      dailyCheckIn: {
        title: "デイリーチェックイン",
        waysNote: "",
        waysStatus: "本日利用可能 · 手動で受け取り",
        frequency: "毎日利用可能 · 手動で受け取り",
        how: "方法: コインを開き「今日のチェックイン」をタップ",
        limit: "上限: 暦日ごとに1回 · EMENDAアカウントのタイムゾーン",
        whenAdded: "付与時期: チェックイン成功後ただちに",
      },
      eligibleDailyReport: {
        title: "対象となる日報",
        waysNote: "対象確認後に自動付与",
        waysStatus: "対象確認後に自動付与",
        frequency: "対象確認後に自動付与",
        how: "方法: 有効な業務範囲で対象となる最初のレポートを提出",
        limit: "上限: 現在のプログラム · 1営業日につき1件",
        whenAdded: "付与時期: 対象要件・確認が承認された後に自動で付与",
      },
      profileMilestone: {
        title: "プロフィール達成",
        waysNote: "一度きりの達成 · 獲得済み",
        waysStatus: "一度きりの達成 · 獲得済み",
        frequency: "一度きりの達成",
        how: "方法: 対象となるプロフィールのマイルストーンを達成",
        limit: "上限: マイルストーンごとに1回",
        whenAdded: "付与時期: マイルストーン完了時に自動で付与",
      },
      identityVerified: {
        title: "本人確認完了",
        waysNote: "一度きりの報酬 · 獲得済み",
        waysStatus: "一度きりの報酬 · 獲得済み",
        frequency: "一度きりの報酬",
        how: "方法: 対象となる本人確認を完了",
        limit: "上限: 1回のみ",
        whenAdded: "付与時期: 本人確認の成功後に自動で付与",
      },
    },
    ledgerTitle: {
      dailyReport: "日報",
      dailyCheckIn: "デイリーチェックイン",
      dailyReportCompleted: "日報の提出完了",
      profileMilestone: "プロフィール達成",
      rewardUsed: "特典を利用",
      identityVerified: "本人確認完了",
    },
    ledgerMeta: {
      pendingEligibility: "対象確認待ち",
      streak: (days) => `${days}日連続`,
      personalProfile: "個人プロフィール",
      partnerBenefit: "パートナー特典",
      emendaId: "EMENDA ID",
    },
    ledgerFilter: {
      all: "すべて",
      earned: "獲得",
      pending: "保留中",
      used: "利用済み",
    },
    reward: {
      "partner-benefit": {
        name: "パートナー特典",
        body: "有効な雇用主・プログラムが提供する特典の例です。提供状況は変わることがあります。",
        receive: "パートナー特典の例",
        availableNow: "今すぐ利用可能",
        unavailable: "現在は利用できません",
      },
      "transport-voucher": {
        name: "交通費バウチャー",
        body: "この特典は現在、有効なプログラムでは提供されていません。",
        receive: "交通費バウチャー",
        availableNow: "今すぐ利用可能",
        unavailable: "現在は利用できません",
      },
    },
    overview: {
      title: "Emenda Coin",
      subtitle:
        "残高、コインを獲得できる方法、保留中の内容を確認できます。",
      availableBalance: "利用可能残高",
      earnedThisMonth: "今月の獲得",
      dailyCheckIn: "デイリーチェックイン",
      dailyReward: (amount) => `本日 ${amount}`,
      dailyRule:
        "手動で受け取り · 1暦日につき1回 · 成功後すぐに加算されます。",
      checkInToday: "今日チェックインする",
      checkedInToday: "本日チェックイン済み",
      waysToEarn: "獲得の方法",
      seeRules: "ルールを見る",
      currentRewardStatus: "現在の報酬ステータス",
      pendingBody: (employer) =>
        `日報 · ${employer} · 本日提出 · 対象確認中`,
      pendingCount: (count) => `${count} 保留中`,
      pendingTitle: (employer) => `日報 · ${employer}`,
      pendingMeta: "本日提出 · 対象確認中",
      history: "履歴",
      howToUseCoin: "コインの使い方",
    },
    loading: { title: "Emenda Coin", subtitle: "残高を読み込んでいます…" },
    empty: {
      subtitle: "報酬のアクティビティがここに表示されます。",
      title: "Emenda Coinはまだありません",
      body: "対象となるアクティビティを完了すると、コイン残高と履歴がここに表示されます。",
      cta: "デイリーチェックイン",
      seeHowToEarn: "獲得方法を見る",
      zeroStreak: "連続0日 · 最初のチェックインを始めましょう",
    },
    offline: {
      banner:
        "インターネット接続がありません。残高と履歴は最後の同期時点のものです。",
    },
    pendingReward: {
      title: "保留中の報酬",
      subtitle: "このアクティビティは完了していますが、コインはまだ利用できません。",
      heroStatus: "ステータス · 対象確認中",
      heroMeta: (date) => `${date}に提出。現在、あなたが行う操作はありません。`,
      nextTitle: "このあとの流れ",
      nextSteps: (amount) => [
        "1. EMENDAが有効なプログラムのルールを確認します。",
        `2. 対象であれば ${amount} コインが自動で付与されます。`,
        "3. 対象外の場合は履歴に理由が表示されます。コインが引かれることはありません。",
      ],
      pipelineTitle: "この報酬が確定するまで",
      step: {
        submitted: {
          title: "日報を提出",
          body: "あなたの日報が雇用主に届きました。",
        },
        eligibility: {
          title: "対象確認",
          body: "有効なプログラムのルールに照らして確認されます。",
        },
        added: {
          title: "コインを付与",
          body: "コインが保留中から利用可能残高に移ります。",
        },
      },
      stepStatus: { done: "完了", current: "進行中", next: "次" },
      noDuplicateTitle: "重複した受け取りはありません",
      noDuplicateBody:
        "この報酬を再提出したり、手動で受け取ったりする必要はありません。",
      notEligibleExample: "対象外になった場合の表示を見る",
    },
    oneTimeEarned: {
      mobileTitle: "獲得ステータス",
      subtitle: "この一度きりの報酬はすでに受け取り済みです。",
      noticeTitle: (amount) => `本人確認 · ${amount} コイン`,
      noticeBody: (date) =>
        `${date}に獲得。この報酬は1回だけ付与され、本人確認を繰り返しても再度獲得することはできません。`,
      whyTitle: "一度きりの報酬",
      whyBody:
        "獲得ルールは引き続き表示され、なぜ利用できなくなったのかを確認できます。",
      backToRules: "獲得ルールに戻る",
    },
    personal: {
      title: "Emenda Coin",
      subtitle:
        "コインはあなたのEMENDAアカウントに属し、特定の雇用主との接続とは無関係です。",
      availableBalance: "利用可能残高",
      balanceValue: (amount) => `${amount} コイン · これまでの獲得分を含みます`,
      dailyCheckIn: (amount) => `デイリーチェックイン · ${amount}`,
      dailyBody: "本日利用可能 · 手動で受け取り · アカウントの1暦日につき1回",
      checkInToday: "今日チェックインする",
      waysToEarnNow: "今すぐ獲得できる方法",
      stillEligible: "対象の場合",
      identityVerification: "本人確認",
      workProgramTitle: "就労プログラムの報酬",
      workProgramBody:
        "業務報告の報酬は、対象となる雇用主・プログラムが有効な場合にのみ表示されます。接続済みのホームからコインを開くと現在のルールを確認できます。",
      history: "履歴",
      coinRules: "コインのルール",
    },
    personalOffline: {
      subtitle: "再接続するまで、個人のコイン残高はキャッシュを表示します。",
      bannerTitle: "オフラインです",
      bannerBody:
        "残高と個人のアクティビティは最新でない場合があります。就労プログラムの報酬は、対象となる雇用主が有効な場合にのみ表示されます。",
      checkInBody:
        "チェックインするには再接続してください。オフラインの操作でデイリー報酬が受け取られたり重複したりすることはありません。",
      checkInButton: "再接続後にチェックイン",
      cachedBalanceEyebrow: "最終同期時の残高",
      cachedBalanceMeta: (time) => `Emenda Coin · 最終同期 ${time}`,
      activityTitle: "最近の個人アクティビティ",
      cachedPreviouslyEarned: "キャッシュ · これまでの獲得分",
      cachedOn: (date) => `キャッシュ · ${date}`,
    },
    accessEnded: {
      title: "Emenda Coin",
      subtitle: "雇用主のアクセス終了後も残高は利用できます。",
      availableBalance: "利用可能残高",
      balanceValue: (amount) => `${amount} コイン · 獲得済みのコインは保持されます`,
      endedTitle: (employer) => `${employer}のアクセスが終了しました`,
      endedBody: (employer) =>
        `${employer}の新しい業務報告の報酬は利用できなくなりました。`,
      pendingTitle: "保留中の報酬は継続します",
      pendingBody:
        "アクセス終了前に提出された報酬は、提出時点で有効だったルールに従って確定します。",
      dailyCheckIn: "デイリーチェックイン",
      history: "履歴",
      coinRules: "コインのルールと所有権",
    },
    checkIn: {
      title: "デイリーチェックイン",
      subtitle: "連続記録を続けるため、今日1回チェックインしましょう。",
      today: (date) => `本日 · ${date}`,
      reward: (amount) => `${amount} コイン`,
      currentStreak: (days) => `現在の連続記録 · ${days}日`,
      note: "EMENDAアカウントのタイムゾーンで1暦日につき報酬は1つです。",
      checkInToday: "今日チェックインする",
      streakTitle: "連続記録のしくみ",
      streakBody:
        "連続した日にチェックインすると記録が伸びます。1日抜けると新しい記録が始まります。",
      timezoneNote: "EMENDAアカウントのタイムゾーンで1暦日につき報酬は1つです。",
      doneSubtitle: "本日のチェックインは完了しました。",
      checkedInEyebrow: "チェックイン済み",
      coinAdded: "Emenda Coin を付与しました",
      streakDays: (days) => `${days}日連続`,
      nextTitle: "また明日",
      nextBody:
        "次のチェックインは、EMENDAアカウントのタイムゾーンで翌暦日に開きます。",
      nextCardBody: "次のデイリーチェックインは翌暦日から利用できます。",
      failedSubtitle: "再試行の間も連続記録は保たれます。",
      failedTitle: "チェックインを完了できませんでした",
      failedBody:
        "コインは付与されず、本日はチェックイン済みになっていません。報酬が重複しないよう安全に再試行できます。",
      retry: "チェックインを再試行",
      failedHeroTitle: "デイリーチェックインに失敗しました",
      failedHeroBody: "報酬は付与されませんでした。もう一度お試しください。",
      retryLong: "デイリーチェックインを再試行",
      failedStatusTitle: "チェックインの状態",
      failedStatusBody:
        "チェックインが成功するまで、現在の連続記録は変わりません。",
      offlineSubtitle: "デイリーチェックインにはインターネット接続が必要です。",
      offlineTitle: "オフラインです",
      offlineBanner:
        "インターネット接続がありません。チェックインは利用できません。",
      offlineNote:
        "チェックインの前に再接続してください。アプリがバックグラウンドで報酬を予約したり自動で受け取ったりすることはありません。",
      offlineButton: "再接続後にチェックイン",
      offlineStreakTitle: "連続記録は保持されます",
      offlineReassurance:
        "一時的な接続の問題で、ここに表示される連続記録がすぐに変わることはありません。",
    },
    history: {
      title: "コイン履歴",
      mobileTitle: "Emenda Coin",
      subtitle: "獲得・保留中・利用済みのコインの記録です。",
      cardTitle: "コイン履歴",
      emptyFilter: "このフィルターに該当するコイン履歴はありません。",
    },
    earn: {
      title: "コインの獲得方法",
      mobileTitle: "Emenda Coin",
      subtitle:
        "何でコインが貯まるか、頻度、付与のタイミングを正確に確認できます。",
      cardTitle: "獲得の方法",
      activeProgram: {
        eyebrow: (employer) => `実施中のプログラム · ${employer}`,
        rule: (amount) => `日報: ${amount} コイン · 1営業日につき対象となる最初のレポート`,
        note: "対象要件が確認された後に自動で付与されます。",
      },
      programNotice: {
        title: "獲得前にルールを確認できます",
        body: "他の雇用主・プログラムでは報酬や上限が異なる場合があります。EMENDAはアクティビティを完了する前に、適用されるルールを表示します。",
      },
    },
    use: {
      title: "コインの使い方",
      subtitle:
        "コインは、利用可能な特典に使うまで残高に残ります。",
      howTitle: "コインを使う流れ",
      steps: [
        "1. 利用可能な特典またはパートナー特典を開く。",
        "2. コインの費用と受け取る内容を確認する。",
        "3. コインが引かれる前に確定する。",
        "4. 利用したコインは履歴に表示される。",
      ],
      partnerTitle: "パートナー特典",
      partnerCost: (amount) => `${amount} コイン`,
      partnerBody:
        "有効な雇用主・プログラムが提供する特典の例です。提供状況は変わることがあります。",
      noRewardTitle: "利用できる特典がない場合",
      noRewardBody:
        "コインは残高に残ります。特典を見ただけでコインが引かれることはありません。",
      rulesButton: "コインのルールと所有権",
    },
    rewards: {
      title: "特典",
      subtitle: "利用できる特典は、有効なEMENDAプログラムによって異なります。",
      availableBalance: "利用可能残高",
      balanceValue: (amount) => `${amount} コインが利用可能`,
      dash: "—",
      beforeTitle: "コインを使う前に",
      beforeBody:
        "正確なコイン費用と受け取る内容は、確定前に表示されます。提供状況はプログラムによって変わることがあります。",
      back: "コインの使い方",
    },
    rewardDetail: {
      title: "特典の詳細",
      subtitle: "コインを使う前に特典を確認してください。",
      costLine: (amount) => `費用: ${amount} コイン`,
      receiveLine: (what) => `受け取る内容: ${what}`,
      availabilityLine: "提供状況: 現在有効なプログラム",
      balanceTitle: "あなたの残高",
      currentLine: (amount) => `現在: ${amount} コイン`,
      afterRedemptionLine: (amount) => `利用後: ${amount} コイン`,
      reviewRedemption: "利用内容を確認する",
      balanceAfterTitle: "利用後の残高",
      availableNowRow: "現在の残高",
      costRow: "特典の費用",
      afterRow: "利用後の残高",
      use: (amount) => `${amount} コインを使う`,
      reviewTitle: "特典を確定する",
      reviewSubtitle: "確定するまでコインは引かれません。",
      currentBalanceLine: (amount) => `現在の残高: ${amount} コイン`,
      balanceAfterLine: (amount) => `利用後の残高: ${amount} コイン`,
      reviewCardTitle: "この操作でコインを使います",
      reviewCardBody: () =>
        "確定すると、特典は履歴に「利用済み」として表示されます。",
      confirm: "確定してコインを使う",
      redeemedTitle: "特典を交換しました",
      redeemedSubtitle: "コインと特典の履歴が更新されました。",
      redeemedCardTitle: "特典の交換が完了しました",
      redeemedUsedLine: (amount) => `${amount} コインを利用`,
      redeemedBalanceLine: (amount) => `新しい残高: ${amount} コイン`,
      redeemedAvailableLine: (reward) => `${reward}が利用できます。`,
      redeemedCardBody:
        "特典はコイン履歴に「利用済み」として、引かれた正確な金額とともに表示されます。",
      done: "完了",
      viewHistory: "履歴を見る",
      backToCoin: "Emenda Coin に戻る",
      failedTitle: "交換できませんでした",
      failedSubtitle: "コインは引かれていません。",
      failedCardTitle: "交換に失敗しました",
      failedCardBody: (amount) =>
        `特典を完了できませんでした。残高は ${amount} コインのままです。二重に引かれることなく安全に再試行できます。`,
      retryRedemption: "交換を再試行",
      backToReward: "特典に戻る",
      insufficientTitle: "コインが足りません",
      insufficientSubtitle: "この特典は利用可能残高より多くのコインが必要です。",
      insufficientCardTitle: (amount) => `${amount} コインが必要です`,
      insufficientAvailableLine: (amount) => `利用可能残高: ${amount} コイン`,
      insufficientNeedLine: (amount) =>
        `この特典を使うには、あと ${amount} コイン必要です。`,
      insufficientCardBody:
        "コインが部分的に引かれることはありません。残りのコインを獲得すれば、特典はそのまま利用できます。",
      seeWaysToEarn: "獲得の方法を見る",
      notEligibleTitle: "報酬は付与されませんでした",
      notEligibleSubtitle:
        "完了したこのアクティビティは、有効な報酬ルールを満たしませんでした。",
      notEligibleActivity: (employer) => `日報 · ${employer}`,
      notEligibleReason:
        "コインは付与されませんでした。理由: その営業日で対象となる最初のレポートではなかったためです。提出したレポート自体は有効です。",
      notEligibleWhyTitle: "対象条件を満たしませんでした",
      notEligibleWhyBody:
        "提出された報告が有効なプログラムの報酬ルールに一致しなかったため、保留中のコインは付与されませんでした。",
      notEligibleCardTitle: "差し引かれたものはありません",
      notEligibleCardBody:
        "アクティビティが報酬の対象外でも、すでに持っているコインが失われることはありません。",
      viewActiveRule: "有効なルールを見る",
      seeEarningRules: "獲得ルールを見る",
      backToRewards: "特典一覧に戻る",
      unavailableTitle: "現在は利用できません",
      unavailableBody:
        "この特典は現在、有効なプログラムでは提供されていません。コインは残高に残ります。",
      notFoundTitle: "特典を利用できません",
      notFoundBody: "この特典は有効なEMENDAプログラムに含まれていません。",
    },
    rules: {
      title: "コインのルールと所有権",
      mobileTitle: "コインのルール",
      subtitle:
        "時間の経過や雇用主との接続をまたいで、コインがどうなるかを説明します。",
      cards: [
        {
          title: "獲得したコインはEMENDAアカウントに残ります",
          body: "雇用主との接続を終了しても、すでに残高で利用できるコインが失われることはありません。",
        },
        {
          title: "保留中のアクティビティは最後まで処理されます",
          body: "アクセス終了前に提出された報酬は、提出時点で有効だったルールで判定されます。",
        },
        {
          title: "コインの有効期限",
          body: "現在のEMENDAのルールでは、利用可能なEmenda Coinに有効期限はありません。今後のプログラムで有効期限が設けられる場合は、そのコインを獲得・利用する前に期限を表示する必要があります。",
        },
        {
          title: "今後のアクティビティにはルール変更が適用されます",
          body: "プログラムのルール変更によって、すでに獲得したコインが黙って変わることはありません。新しいルールは表示された後にのみ適用されます。",
        },
      ],
    },
  },
});
