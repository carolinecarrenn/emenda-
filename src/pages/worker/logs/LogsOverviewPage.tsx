import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { LOGS_COPY } from "./logs.copy";
import { CategoryCard } from "./sections/CategoryCard";
import { InfoCard } from "./sections/InfoCard";
import { LogsAction } from "./sections/LogsAction";
import { LogsHeader } from "./sections/LogsHeader";
import { PanelList } from "./sections/PanelList";
import { SkeletonBlock } from "./sections/SkeletonBlock";
import { StateBanner } from "./sections/StateBanner";

/** Logs & Records overview — Figma WD-61 (1187:254) · loading WD-61D ·
 *  offline WD-61E · headless WD-61Z (1187:1814) · headless offline WD-61Z1 ·
 *  employer access ended WD-61Z2; mobile W-61 (1163:254, mint PRIVAT · HEALTH
 *  tile). Connected states show the 2x2 grid of 492x112 category tiles; the
 *  headless states replace it with the WD-61Z availability panel. */
export function LogsOverviewPage() {
  const state = useScreenState();
  const c = useSectionCopy(LOGS_COPY);

  const offline = state === "offline" || state === "headless-offline";
  const headless =
    state === "headless" ||
    state === "headless-offline" ||
    state === "access-ended";
  const accessEnded = state === "access-ended";

  if (state === "loading") {
    /* WD-61D — Logs & Records loading. */
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        <LogsHeader
          crumb={c.overview.eyebrow}
          title={c.overview.title}
          subtitle={c.states.loadingSubtitle}
          hubSubtitle
        />
        {/* WD-61D (1187:543) — the loading frame is four full-width 1012x92
            placeholders on a 112px rhythm, not the 2x2 category grid. */}
        <div className="mt-[12px] grid gap-[12px] lg:mt-[50px] lg:max-w-[1012px] lg:grid-cols-1 lg:gap-y-[20px]">
          <SkeletonBlock className="h-[96px] lg:h-[92px]" />
          <SkeletonBlock className="h-[96px] lg:h-[92px]" />
          <SkeletonBlock className="h-[96px] lg:h-[92px]" />
          <SkeletonBlock className="h-[96px] lg:h-[92px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
      <LogsHeader
        crumb={headless ? c.overview.headlessEyebrow : c.overview.eyebrow}
        title={c.overview.title}
        subtitle={
          accessEnded
            ? c.overview.accessEndedSubtitle
            : state === "headless-offline"
              ? c.overview.offlineSubtitle
              : headless
                ? c.overview.headlessSubtitle
                : c.overview.subtitle
        }
        hubSubtitle
      />

      {offline && (
        <>
          <StateBanner
            className="mt-[12px] lg:mt-[26px]"
            tone="amber"
            title={c.states.offlineTitle}
            body={
              state === "headless-offline"
                ? c.overview.offlineBannerBody
                : c.states.offlineBody
            }
          />
          {/* Entry into the W-61AR–AT sync run while drafts are still local. */}
          <div className="mt-[12px]">
            <LogsAction
              to="/worker/logs/sync"
              label={c.sync.openCta}
              variant="outline"
              widthClass="lg:w-[260px]"
            />
          </div>
        </>
      )}
      {accessEnded && (
        /* WD-61Z2 (1215:355) — access ending is not a failure: the notice is
           the mint 1012x84 card with a green caption, never the amber strip. */
        <InfoCard
          className="mt-[12px] lg:mt-[46px]"
          size="sm"
          title={c.overview.accessEndedTitle}
          body={c.overview.accessEndedBody}
        />
      )}

      {headless ? (
        /* W-61Z (1170:259) — four 350x96 availability cards on mobile;
           WD-61Z folds them into one 1012x328 panel of 980x64 mint rows. */
        <PanelList
          variant="card"
          className="mt-[12px] lg:mt-[50px]"
          items={[
            {
              id: "work",
              to: "/worker/logs/work",
              title: c.overview.workTitle,
              meta: accessEnded
                ? c.overview.accessEndedWorkMeta
                : c.overview.headlessWorkBody,
              right: c.overview.open,
            },
            /* W-61Z2 (1215:355) — an ended connection leaves the earlier
               reports readable, so the row opens instead of going dark. */
            accessEnded
              ? {
                  id: "daily",
                  to: "/worker/reports",
                  title: c.overview.dailyTitle,
                  meta: c.overview.accessEndedDailyMeta,
                  right: c.overview.open,
                }
              : {
                  id: "daily",
                  title: c.overview.dailyTitle,
                  meta: c.overview.headlessDailyBody,
                  right: c.overview.unavailable,
                },
            {
              id: "health",
              to: "/worker/logs/health",
              title: c.overview.healthTitle,
              meta: accessEnded
                ? c.overview.accessEndedPrivateMeta
                : c.overview.healthBody,
              right: c.overview.open,
              mint: true,
            },
            {
              id: "life",
              to: "/worker/logs/life",
              title: c.overview.lifeTitle,
              meta: accessEnded
                ? c.overview.accessEndedPrivateMeta
                : c.overview.lifeBody,
              right: c.overview.open,
            },
          ]}
        />
      ) : (
        /* WD-61 category grid — 492x112 tiles, 22px column / 20px row gutters. */
        <div className="mt-[12px] grid gap-[12px] lg:mt-[50px] lg:max-w-[1006px] lg:grid-cols-2 lg:gap-x-[22px] lg:gap-y-[20px]">
          <CategoryCard
            to="/worker/logs/work"
            title={c.overview.workTitle}
            body={c.overview.workBody}
            openLabel={c.overview.open}
          />
          <CategoryCard
            to="/worker/reports"
            title={c.overview.dailyTitle}
            body={c.overview.dailyBody}
            openLabel={c.overview.open}
          />
          <CategoryCard
            to="/worker/logs/health"
            title={c.overview.healthTitle}
            body={c.overview.healthBody}
            openLabel={c.overview.open}
            mintOnMobile
          />
          <CategoryCard
            to="/worker/logs/life"
            title={c.overview.lifeTitle}
            body={c.overview.lifeBody}
            openLabel={c.overview.open}
          />
        </div>
      )}
    </div>
  );
}
