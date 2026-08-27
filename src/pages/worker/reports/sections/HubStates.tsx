import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { REPORTS_STATES_COPY, fillCopy } from "../reports.copy";
import { RecentHistory } from "./RecentHistory";
import { HubHeading } from "./HubHeading";
import { HubNoticeCard } from "./HubNoticeCard";
import { HubPrimaryAction } from "./HubPrimaryAction";
import { HubSectionLabel } from "./HubSectionLabel";

/* Every hub state stacks its blocks on a 12px rhythm (mobile Body frames use
   `gap: 12` — 972:72 / 972:296 / 972:368 / 972:445 / 975:111), widening to the
   desktop rhythm at lg. */
const STACK = "mt-[26px] flex flex-col gap-[12px] lg:mt-[34px] lg:gap-[16px]";

/** W-54 (972:67) — Reports Headless: no-employer notice, "Connect employer"
 *  action, WORK HISTORY label and the portable-history note. */
export function HubHeadlessState() {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  return (
    <>
      <HubHeading
        sentence={c.headless.title}
        desktopSubtitle={c.headless.subtitle}
      />
      <div className={STACK}>
        <HubNoticeCard
          title={c.headless.subtitle}
          desktopTitle={c.headless.cardTitle}
          desktopWhite
        >
          <p className="lg:hidden">{c.headless.portableLine1}</p>
          <p className="hidden lg:block">{c.headless.cardBody}</p>
        </HubNoticeCard>
        <HubPrimaryAction
          to="/worker/employer/connect"
          label={c.connectEmployer}
        />
        <HubSectionLabel>{c.hubLabels.workHistory}</HubSectionLabel>
        <HubNoticeCard title={c.headless.portableTitle}>
          <p>{c.headless.portableLine2}</p>
        </HubNoticeCard>
      </div>
    </>
  );
}

/** W-54H (975:106) — Reports Headless · Offline: the headless stack behind an
 *  amber offline banner, with the connect action inert (Figma renders it at
 *  45% opacity) because connecting an employer needs a connection. */
export function HubHeadlessOfflineState() {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  return (
    <>
      <HubHeading
        sentence={c.headlessOffline.subtitle}
        desktopSubtitle={c.headlessOffline.bannerTitle}
      />
      <div className={STACK}>
        <HubNoticeCard tone="amber" title={c.headlessOffline.bannerTitle}>
          <p>{c.headlessOffline.bannerBody}</p>
        </HubNoticeCard>
        <HubNoticeCard title={c.headless.subtitle}>
          <p>{c.headless.portableLine1}</p>
        </HubNoticeCard>
        <HubPrimaryAction
          to="/worker/employer/connect"
          label={c.connectEmployer}
          disabled
        />
        <HubSectionLabel>{c.hubLabels.workHistory}</HubSectionLabel>
        <HubNoticeCard title={c.headless.portableTitle}>
          <p>{c.headless.portableLine2}</p>
        </HubNoticeCard>
      </div>
    </>
  );
}

/** W-54B (972:223) — Loading: the hub heading over five skeleton rows
 *  (first 92px, the rest 76px, 12px gaps, radius 14, #f4f6f5).
 *  WD-54B (1182:3535) draws the same placeholder as four 1012x92 rows on a
 *  20px rhythm starting at y=292, in #edf2f0 — so at lg every row grows to
 *  92px and the fifth (decorative) row drops out. */
export function HubLoadingState() {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  return (
    <>
      <HubHeading sentence={c.loading.subtitle} />
      <div
        className="mt-[26px] flex flex-col gap-[12px] lg:mt-[91px] lg:gap-[20px]"
        aria-hidden="true"
      >
        {["h-[92px]", "h-[76px]", "h-[76px]", "h-[76px]", "h-[76px]"].map(
          (height, row) => (
            <div
              key={`${height}-${row}`}
              className={`animate-pulse rounded-[14px] bg-[#f4f6f5] lg:h-[92px] lg:bg-[#edf2f0] ${height} ${
                row === 4 ? "lg:hidden" : ""
              }`}
            />
          ),
        )}
      </div>
    </>
  );
}

/** W-54C (972:291) — No Reports Yet: today card, New Daily Report action,
 *  a 24px gap and the empty work-history card. */
export function HubEmptyState() {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  return (
    <>
      <HubHeading
        sentence={fillCopy(c.empty.title, { employer: EMPLOYER.name })}
        desktopSubtitle={c.empty.subtitle}
      />
      <div className={STACK}>
        <HubNoticeCard
          title={c.empty.subtitle}
          desktopTitle={c.empty.emptyTitle}
          desktopWhite
        >
          <p className="lg:hidden">{c.empty.noteLine1}</p>
          <p className="hidden lg:block">{c.empty.emptyBody}</p>
        </HubNoticeCard>
        <HubPrimaryAction to="/worker/reports/new" label={c.newDailyReport} />
        <div className="h-[24px]" />
        <HubNoticeCard title={c.empty.noteTitle}>
          <p>{c.empty.noteLine2}</p>
        </HubNoticeCard>
      </div>
    </>
  );
}

/** W-54D (972:363) — Offline: amber offline banner over the cached work
 *  history. Submitting is unavailable offline, so the frame carries no today
 *  card and no action. */
export function HubOfflineState() {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  return (
    <>
      <HubHeading
        sentence={c.offline.title}
        desktopSubtitle={c.offline.subtitle}
      />
      <div className={STACK}>
        <HubNoticeCard tone="amber" title={c.offline.banner}>
          <p>{c.offline.cachedNote}</p>
        </HubNoticeCard>
        <RecentHistory label={c.hubLabels.cachedWorkHistory} cached />
      </div>
    </>
  );
}

/** W-54E (972:440) — Employer Access Ended: amber access-ended notice over the
 *  retained work history. No today card: new reports cannot be submitted. */
export function HubAccessEndedState() {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  return (
    <>
      <HubHeading
        sentence={c.accessEnded.title}
        desktopSubtitle={fillCopy(c.accessEnded.subtitle, {
          employer: EMPLOYER.name,
        })}
      />
      <div className={STACK}>
        <HubNoticeCard
          tone="amber"
          title={fillCopy(c.accessEnded.subtitle, { employer: EMPLOYER.name })}
        >
          <p className="lg:hidden">{c.accessEnded.noticeBody}</p>
          <p className="hidden lg:block">{c.accessEnded.banner}</p>
        </HubNoticeCard>
        <RecentHistory label={c.accessEnded.retainedLabel} />
      </div>
    </>
  );
}
