import { TODAY } from "@/data/caregiverReport";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { fillLogsCopy, LOGS_COPY } from "./logs.copy";
import { LIFE_NOTES } from "./logsMock";
import { EmptyState } from "./sections/EmptyState";
import { InfoCard } from "./sections/InfoCard";
import { PanelList } from "./sections/PanelList";
import { LogsAction } from "./sections/LogsAction";
import { LogsHeader } from "./sections/LogsHeader";
import { SectionLabel } from "./sections/SectionLabel";
import { SkeletonBlock } from "./sections/SkeletonBlock";
import { StateBanner } from "./sections/StateBanner";

/** Private Life — Figma WD-61C (1187:447) · empty WD-61Y · offline WD-61W;
 *  mobile W-61C. Mirrors WD-61B: an ONLY YOU privacy card, the private notes
 *  list and a single Tambah catatan pribadi action. */
export function PrivateLifePage() {
  const state = useScreenState();
  const c = useSectionCopy(LOGS_COPY);
  const { language } = useLanguage();
  const offline = state === "offline";

  const header = (
    <LogsHeader
      crumb={c.overview.title}
      crumbTo="/worker/logs"
      title={c.life.title}
      subtitle={
        state === "empty"
          ? c.life.emptySubtitle
          : state === "offline"
            ? c.life.offlineSubtitle
            : c.life.subtitle
      }
    />
  );

  const privacyCard = (
    <InfoCard
      className="mt-[12px] lg:mt-[44px]"
      size="sm"
      title={c.life.privacyTitle}
      body={c.life.privacyBody}
    />
  );

  if (state === "loading") {
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        {header}
        <SkeletonBlock radiusClass="rounded-[16px] lg:rounded-[12px]" className="mt-[12px] h-[82px] lg:mt-[44px] lg:h-[84px]" />
        <SkeletonBlock radiusClass="rounded-[16px]" className="mt-[12px] h-[178px] lg:mt-[36px] lg:h-[252px]" />
      </div>
    );
  }

  if (state === "empty") {
    /* WD-61Y — Private Life empty. */
    return (
      <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
        {header}
        {/* W-61Y (1167:1089) — the empty frame is the lead line, the empty
            card and the CTA; the ONLY YOU card belongs to the filled list. */}
        <div className="mt-[12px] lg:mt-[44px]">
          <EmptyState
            title={c.life.emptyTitle}
            body={c.life.emptyBody}
            action={
              <LogsAction
                to="/worker/logs/life/new"
                label={c.life.addCta}
                widthClass="lg:w-[230px]"
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

      {offline && (
        <StateBanner
          className="mt-[12px] lg:mt-[26px]"
          tone="amber"
          title={c.states.offlineTitle}
          body={c.states.offlineBody}
        />
      )}


      {/* W-61W (1167:1019) — offline the frame shows the amber notice straight
          over the cached rows: no ONLY YOU card and no section label. */}
      {!offline && privacyCard}

      {!offline && (
        <SectionLabel className="mt-[12px] lg:mt-[28px]">
          {c.life.notesLabel}
        </SectionLabel>
      )}

      {/* WD-61C — one 1012x252 white panel of 980x64 mint note rows, 28px
          under the section label (which Figma draws in an 18px box here). */}
      <PanelList
        className="mt-[12px] lg:mt-[8px]"
        items={(offline ? LIFE_NOTES.slice(0, 2) : LIFE_NOTES).map((note) => ({
          id: note.id,
          to: `/worker/logs/life/note/${note.id}`,
          title: note.title,
          meta: offline
            ? fillLogsCopy(c.life.cachedMeta, {
                date:
                  note.date === TODAY
                    ? c.todayLabel
                    : formatDisplayDate(note.date, language),
              })
            : `${
                note.date === TODAY
                  ? c.todayLabel
                  : formatDisplayDate(note.date, language)
              } · ${c.privateLabel}`,
        }))}
      />

      <div className="mt-[12px] lg:mt-[18px]">
        {/* W-61W 1167:1053 — offline, the add action becomes a muted draft CTA. */}
        <LogsAction
          to="/worker/logs/life/new"
          label={state === "offline" ? c.states.offlineDraftCta : c.life.addCta}
          variant={state === "offline" ? "offline" : "primary"}
          widthClass="lg:w-[230px]"
        />
      </div>
    </div>
  );
}
