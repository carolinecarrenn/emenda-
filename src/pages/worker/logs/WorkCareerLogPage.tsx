import { useState } from "react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { fillLogsCopy, LOGS_COPY } from "./logs.copy";
import { WORK_RECORDS } from "./logsMock";
import { EmptyNotice } from "./sections/EmptyNotice";
import { EmptyState } from "./sections/EmptyState";
import { HeadlessNoteStrip } from "./sections/HeadlessNoteStrip";
import { InfoCard } from "./sections/InfoCard";
import { LogRow } from "./sections/LogRow";
import { LogsAction } from "./sections/LogsAction";
import { LogsHeader } from "./sections/LogsHeader";
import { SectionLabel } from "./sections/SectionLabel";
import { SkeletonBlock } from "./sections/SkeletonBlock";
import { StateBanner } from "./sections/StateBanner";
import { TabBar } from "./sections/TabBar";

/** Work & Career Log — Figma WD-61A (1187:319) · empty WD-61J · offline
 *  WD-61U · headless offline WD-61U0; mobile W-61A (1163:283).
 *  Semua / Verified / Pribadi tabs over the read-only VERIFIED WORK RECORDS
 *  group and the editable PERSONAL CAREER NOTES group, closed by the mint
 *  "Verified vs personal" explainer. */
export function WorkCareerLogPage() {
  const state = useScreenState();
  const c = useSectionCopy(LOGS_COPY);
  const { language } = useLanguage();
  const [tab, setTab] = useState("all");

  const offline = state === "offline" || state === "headless-offline";
  const headless = state === "headless" || state === "headless-offline";

  const verified = WORK_RECORDS.filter((record) => record.kind === "verified");
  const personal = WORK_RECORDS.filter((record) => record.kind === "personal");
  const showVerified = !headless && tab !== "personal";
  const showPersonal = tab !== "verified";

  const header = (
    <LogsHeader
      crumb={c.overview.eyebrow}
      crumbTo="/worker/logs"
      title={c.work.title}
      subtitle={
        state === "empty"
          ? c.work.emptySubtitle
          : offline
            ? c.work.offlineSubtitle
            : c.work.subtitle
      }
    />
  );

  if (state === "loading") {
    /* WD-61D — Work & Career loading. */
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        {header}
        <SkeletonBlock
          radiusClass="rounded-[18px] lg:rounded-[21px]"
          className="mt-[12px] h-[36px] w-full lg:mt-[50px] lg:h-[42px] lg:w-[420px]"
        />
        <div className="mt-[12px] lg:mt-[26px] space-y-[12px] lg:mt-[42px] lg:space-y-[16px]">
          <SkeletonBlock radiusClass="rounded-[14px] lg:rounded-[12px]" className="h-[66px] lg:h-[72px]" />
          <SkeletonBlock radiusClass="rounded-[14px] lg:rounded-[12px]" className="h-[66px] lg:h-[72px]" />
          <SkeletonBlock radiusClass="rounded-[14px] lg:rounded-[12px]" className="h-[66px] lg:h-[72px]" />
        </div>
      </div>
    );
  }

  if (state === "empty") {
    /* W-61J swaps the lead line for the empty-specific sentence. */
    /* WD-61J — Work & Career empty. */
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        {header}

        {/* Mobile W-61J (1167:517) — the shared card chassis plus the CTA. */}
        <div className="lg:hidden">
          <div className="mt-[12px]">
            <EmptyState
              title={c.work.emptyTitle}
              body={c.work.emptyBody}
              action={
                <LogsAction
                  to="/worker/logs/work/new"
                  label={c.work.addCta}
                />
              }
            />
          </div>
        </div>

        {/* WD-61J (1187:837) — the 1012x84 mint notice at y=300 with a single
            240x46 "Add career note" 32px below it. */}
        <div className="hidden lg:block">
          <EmptyNotice
            className="mt-[64px]"
            title={c.work.emptyTitle}
            body={c.work.emptyBody}
          />
          <div className="mt-[12px] lg:mt-[32px]">
            <LogsAction
              to="/worker/logs/work/new"
              label={c.work.addCta}
              heightClass="h-[46px]"
              widthClass="lg:w-[240px]"
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

      {/* WD-61A tab bar — 420x42 pill, Semua / Verified / Pribadi. */}
      <div className="mt-[12px] lg:mt-[50px]">
        <TabBar
          tabs={[
            { id: "all", label: c.work.tabAll },
            { id: "verified", label: c.work.tabVerified },
            { id: "personal", label: c.work.tabPersonal },
          ]}
          active={tab}
          onSelect={setTab}
        />
      </div>

      {showVerified && (
        <>
          <SectionLabel className="mt-[12px] lg:mt-[30px]">
            {c.work.verifiedLabel}
          </SectionLabel>
          <div className="mt-[12px] space-y-[12px] lg:space-y-[16px]">
            {verified.map((record) => (
              <LogRow
                key={record.id}
                to={`/worker/logs/work/${record.id}`}
                title={record.title}
                meta={
                  record.sinceMonth !== undefined && record.id === "wr-employment"
                    ? fillLogsCopy(c.work.activeSince, {
                        month: record.sinceMonth,
                      })
                    : formatDisplayDate(record.date ?? "", language)
                }
                tag={c.work.verifiedTag}
              />
            ))}
          </div>
        </>
      )}

      {showPersonal && (
        <>
          <SectionLabel className="mt-[12px] lg:mt-[36px]">
            {c.work.personalLabel}
          </SectionLabel>
          <div className="mt-[12px] space-y-[12px] lg:mt-[10px] lg:space-y-[16px]">
            {personal.map((record) => (
              <LogRow
                key={record.id}
                to={`/worker/logs/work/${record.id}`}
                title={record.title}
                meta={`${c.work.personalNoteMeta} · ${formatDisplayDate(
                  record.date ?? "",
                  language,
                )}`}
              />
            ))}
          </div>
        </>
      )}

      <div className="mt-[12px] lg:mt-[24px]">
        {/* W-61U 1167:979 — offline, the add action becomes a muted draft CTA. */}
        <LogsAction
          to="/worker/logs/work/new"
          label={offline ? c.states.offlineDraftCta : c.work.addCta}
          variant={offline ? "offline" : "primary"}
          widthClass="lg:w-[270px]"
        />
      </div>

      <InfoCard
        className="mt-[12px] lg:mt-[20px]"
        size="sm"
        title={c.work.parityTitle}
        body={c.work.parityBody}
      />

      {headless && (
        <HeadlessNoteStrip
          className="mt-[12px] lg:mt-[20px]"
          note={c.overview.headlessNote}
        />
      )}
    </div>
  );
}
