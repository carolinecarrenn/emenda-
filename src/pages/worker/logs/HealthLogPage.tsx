import { TODAY } from "@/data/caregiverReport";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { LOGS_COPY } from "./logs.copy";
import { HEALTH_ENTRIES } from "./logsMock";
import { EmptyNotice } from "./sections/EmptyNotice";
import { EmptyState } from "./sections/EmptyState";
import { InfoCard } from "./sections/InfoCard";
import { LogRow } from "./sections/LogRow";
import { LogsAction } from "./sections/LogsAction";
import { LogsHeader } from "./sections/LogsHeader";
import { SectionLabel } from "./sections/SectionLabel";
import { SkeletonBlock } from "./sections/SkeletonBlock";
import { StateBanner } from "./sections/StateBanner";

/** Private Health — Figma WD-61B (1187:386) · empty WD-61X · offline WD-61V;
 *  mobile W-61B (1163:306). Mint PRIVAT · HEALTH privacy card, the private
 *  entries list, then Kelola akses kesehatan / Mulai stress check / Tambah
 *  catatan kesehatan. */
export function HealthLogPage() {
  const state = useScreenState();
  const c = useSectionCopy(LOGS_COPY);
  const { language } = useLanguage();

  const offline = state === "offline";

  const header = (
    <LogsHeader
      crumb={c.overview.eyebrow}
      crumbTo="/worker/logs"
      title={c.health.title}
      subtitle={
        state === "empty"
          ? c.health.emptySubtitle
          : offline
            ? c.health.offlineSubtitle
            : c.health.subtitle
      }
    />
  );

  const privacyCard = (
    <InfoCard
      className="mt-[12px] lg:mt-[50px]"
      title={c.health.privacyTitle}
      body={c.health.privacyBody}
    />
  );

  /* W-61B puts "Kelola akses kesehatan" directly under the privacy notice. */
  const manageAction = (
    <div className="mt-[12px] lg:hidden">
      <LogsAction
        to="/worker/logs/health/access"
        label={c.health.manageCta}
        variant="outline"
      />
    </div>
  );

  /* WD-61B action row — outline / primary / outline, 260 · 240 · 300 px.
     W-61B stacks stress-check then add-note full width under the entries. */
  const actions = (
    <div className="mt-[12px] flex flex-col gap-[12px] lg:mt-[34px] lg:flex-row lg:gap-4">
      <LogsAction
        to="/worker/logs/health/access"
        label={c.health.manageCta}
        variant="outline"
        widthClass="lg:w-[260px]"
        className="hidden lg:flex"
      />
      <LogsAction
        to="/worker/logs/health/stress-check"
        label={c.health.stressCta}
        variant="outline"
        widthClass="lg:w-[240px]"
        className="lg:border-0 lg:bg-lp-button lg:text-white lg:hover:bg-lp-green"
      />
      {/* W-61V — offline, the add action becomes a muted draft CTA. */}
      <LogsAction
        to="/worker/logs/health/new"
        label={offline ? c.states.offlineDraftCta : c.health.addCta}
        variant={offline ? "offline" : "primary"}
        widthClass="lg:w-[300px]"
        className="lg:border lg:border-lp-line lg:bg-white lg:text-lp-green lg:hover:border-lp-green lg:hover:bg-white"
      />
    </div>
  );

  if (state === "loading") {
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        {header}
        <SkeletonBlock radiusClass="rounded-[16px] lg:rounded-[14px]" className="mt-[12px] h-[90px] lg:mt-[50px] lg:h-[88px]" />
        <div className="mt-[12px] lg:mt-[26px] space-y-[12px] lg:mt-[44px] lg:space-y-[16px]">
          <SkeletonBlock radiusClass="rounded-[14px] lg:rounded-[12px]" className="h-[66px] lg:h-[68px]" />
          <SkeletonBlock radiusClass="rounded-[14px] lg:rounded-[12px]" className="h-[66px] lg:h-[68px]" />
        </div>
      </div>
    );
  }

  if (state === "empty") {
    /* WD-61X — Private Health empty. */
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        {header}

        {/* Mobile W-61X (1167:1056) — the frame is the lead line, the empty
            card and the stress-check / add-note pair: no privacy notice.
            "Manage health access" stays reachable at the foot of the stack. */}
        <div className="lg:hidden">
          {/* W-61X 1167:1081 — the empty card carries no CTA of its own;
              the stress-check / add-note pair below it is the action row. */}
          <div className="mt-[12px]">
            <EmptyState
              title={c.health.emptyTitle}
              body={c.health.emptyBody}
            />
          </div>
          {actions}
          {manageAction}
        </div>

        {/* WD-61X (1187:1596) — no privacy card: the 1012x84 mint notice at
            y=300 over "Add health note" (240x46) and "Start stress check"
            (220x46). "Manage health access" keeps its desktop entry point. */}
        <div className="hidden lg:block">
          <EmptyNotice
            className="mt-[64px]"
            title={c.health.emptyTitle}
            body={c.health.emptyBody}
          />
          <div className="mt-[12px] lg:mt-[32px] flex gap-4">
            <LogsAction
              to="/worker/logs/health/new"
              label={c.health.addCta}
              heightClass="h-[46px]"
              widthClass="lg:w-[240px]"
            />
            <LogsAction
              to="/worker/logs/health/stress-check"
              label={c.health.stressCta}
              variant="outline"
              heightClass="h-[46px]"
              widthClass="lg:w-[220px]"
            />
            <LogsAction
              to="/worker/logs/health/access"
              label={c.health.manageCta}
              variant="outline"
              heightClass="h-[46px]"
              widthClass="lg:w-[260px]"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
      {header}

      {offline && (
        <StateBanner
          className="mt-[12px] lg:mt-[26px]"
          tone="amber"
          title={c.states.offlineTitle}
          body={c.states.offlineBody}
        />
      )}

      {privacyCard}
      {manageAction}

      <SectionLabel className="mt-[12px] lg:mt-[32px]">
        {c.health.entriesLabel}
      </SectionLabel>
      <div className="mt-[12px] space-y-[12px] lg:space-y-[16px]">
        {HEALTH_ENTRIES.map((entry) => (
          <LogRow
            key={entry.id}
            height={68}
            to={
              entry.kind === "stress"
                ? `/worker/logs/health/stress-check/${entry.checkId ?? ""}`
                : `/worker/logs/health/note/${entry.id}`
            }
            title={entry.kind === "stress" ? c.health.stressRowTitle : entry.title}
            titleSuffix={
              entry.kind === "stress"
                ? c.health.stressRowMobileSuffix
                : undefined
            }
            meta={`${
              entry.date === TODAY
                ? c.todayLabel
                : formatDisplayDate(entry.date, language)
            } · ${c.privateLabel}`}
          />
        ))}
      </div>

      {actions}
    </div>
  );
}
