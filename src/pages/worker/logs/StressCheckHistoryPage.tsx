import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { fillLogsCopy, LOGS_COPY } from "./logs.copy";
import { STRESS_CHECKS } from "./logsMock";
import { EmptyState } from "./sections/EmptyState";
import { InfoCard } from "./sections/InfoCard";
import { LogsAction } from "./sections/LogsAction";
import { LogsHeader } from "./sections/LogsHeader";
import { PanelList } from "./sections/PanelList";
import { SkeletonBlock } from "./sections/SkeletonBlock";
import { StateBanner } from "./sections/StateBanner";

/** Stress check history — Figma WD-61M1 (1187:2077) · empty WD-61M2 · offline
 *  WD-61M3; mobile W-61M1. One row per stored check-in, all private. */
export function StressCheckHistoryPage() {
  const state = useScreenState();
  const c = useSectionCopy(LOGS_COPY);
  const { language } = useLanguage();

  /* Raw enum indices render through the section copy, never hardcoded. */
  const summaryOf = (check: (typeof STRESS_CHECKS)[number]) =>
    fillLogsCopy(c.stress.historySummary, {
      stress: c.stress.stressOptions[check.stress].toLowerCase(),
      energy: c.stress.energyOptions[check.energy].toLowerCase(),
      sleep: c.stress.sleepOptions[check.sleep].toLowerCase(),
    });

  const header = (
    <LogsHeader
      crumb={c.health.title}
      crumbTo="/worker/logs/health"
      title={c.stress.historyTitle}
      subtitle={c.stress.historySubtitle}
    />
  );

  if (state === "loading") {
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        {header}
        <div className="mt-[12px] lg:mt-[50px] space-y-[12px] lg:space-y-[16px]">
          <SkeletonBlock radiusClass="rounded-[14px] lg:rounded-[12px]" className="h-[66px] lg:h-[68px]" />
          <SkeletonBlock radiusClass="rounded-[14px] lg:rounded-[12px]" className="h-[66px] lg:h-[68px]" />
          <SkeletonBlock radiusClass="rounded-[14px] lg:rounded-[12px]" className="h-[66px] lg:h-[68px]" />
        </div>
      </div>
    );
  }

  if (state === "empty") {
    /* WD-61M2 — no check-ins yet. */
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        {header}
        <div className="mt-[12px] lg:mt-[50px]">
          <EmptyState
            title={c.stress.emptyTitle}
            body={c.stress.emptyBody}
            action={
              <LogsAction
                to="/worker/logs/health/stress-check"
                label={c.health.stressCta}
                widthClass="lg:w-[240px]"
              />
            }
          />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
      {header}

      {state === "offline" && (
        <StateBanner
          className="mt-[12px] lg:mt-[26px]"
          tone="amber"
          title={c.states.offlineTitle}
          body={c.states.offlineBody}
        />
      )}

      {/* W-61M1 (1187:2077) — the "SELF-CHECK ONLY" notice, then one row per
          check-in (the date as the row title, the summary as its meta and
          "Private" right-aligned), then the "Start a new stress check" CTA.
          Desktop wraps the same rows in the 1012x176 panel. */}
      <InfoCard
        className="mt-[12px] lg:mt-[36px]"
        size="sm"
        title={c.stress.selfCheckTitle}
        body={c.stress.selfCheckBody}
      />
      <PanelList
        className="mt-[12px] lg:mt-[22px]"
        items={STRESS_CHECKS.map((check) => ({
          id: check.id,
          to: `/worker/logs/health/stress-check/${check.id}`,
          title: formatDisplayDate(check.date, language),
          meta: summaryOf(check),
          right: c.privateLabel,
        }))}
      />
      <div className="mt-[12px] lg:mt-[16px]">
        <LogsAction
          to="/worker/logs/health/stress-check"
          label={c.stress.newCta}
          heightClass="h-[46px]"
          widthClass="lg:w-[230px]"
        />
      </div>
    </div>
  );
}
