import { useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { HubCard } from "../sections/HubCard";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { READINESS_COPY } from "./readiness.copy";
import {
  READINESS_OUTSIDE_TASKS,
  READINESS_TASKS,
  READINESS_TRAILING_TASK,
  type ReadinessChecklistItem,
} from "./readinessMock";
import { TaskCard } from "./sections/TaskCard";
import {
  JapanSubPageHeader,
  PrimaryButton,
  SecondaryButton,
  SystemBanner,
} from "./sections/primitives";

function taskHref(item: ReadinessChecklistItem): string {
  if (item.to === "registration") return "/worker/japan/registration";
  if (item.to === "visa-plan") return "/worker/japan/visa-plan";
  if (item.to === "hub") return "/worker/japan";
  return `/worker/japan/readiness/${item.to}`;
}

/** Japan readiness setup checklist (Figma WD-34, node 1017:2).
 *  Six task cards in a 2-col 520px grid — five cards, the planning-record
 *  microcopy strip, then the trailing Pension / tax card — with
 *  Outside-Japan / Already-in-Japan / Updating / Update-Failed / Offline
 *  variants (WD-34A..E). */
export function ReadinessPage() {
  const c = useSectionCopy(READINESS_COPY);
  const common = useCommonCopy();
  const state = useScreenState();
  const navigate = useNavigate();

  const statusLine = (item: ReadinessChecklistItem) =>
    item.status === "complete"
      ? c.statusComplete
      : item.status === "afterArrival"
        ? c.statusAfterArrival
        : c.statusNeedsAction;

  const renderChecklist = (
    tasks: ReadinessChecklistItem[],
    trailing: ReadinessChecklistItem | null,
  ) => (
    /* Mobile (Figma 628:13) runs all six tasks together and drops the
       planning-record note near the foot of the screen; the WD-34 desktop
       layout keeps the note between the fifth and the trailing card. */
    <div className="flex flex-col lg:block">
      <div className="grid gap-y-[10px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
        {tasks.map((item) => (
          <TaskCard
            key={item.titleKey}
            title={c.taskTitles[item.titleKey]}
            statusLine={statusLine(item)}
            complete={item.status === "complete"}
            to={taskHref(item)}
          />
        ))}
      </div>
      <p
        className={`order-3 text-[11px] leading-[20px] text-[#5e7066] lg:order-none lg:mt-[24px] lg:text-[12px] lg:leading-[17px] ${trailing ? "mt-[94px]" : "mt-[18px]"}`}
      >
        {c.checklistNote}
      </p>
      {trailing && (
        <div className="order-2 mt-[10px] grid gap-y-[10px] lg:order-none lg:mt-[16px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
          <TaskCard
            title={c.taskTitles[trailing.titleKey]}
            statusLine={statusLine(trailing)}
            complete={trailing.status === "complete"}
            to={taskHref(trailing)}
          />
        </div>
      )}
    </div>
  );

  const clearState = () => navigate("/worker/japan/readiness");

  let content;
  if (state === "updating") {
    /* WD-34C — single system card replacing the checklist. */
    content = (
      <div className="grid gap-y-[10px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
        {/* W-34C 628:323 — pale-mint 350×136 card with a muted, disabled
            318×30 "Updating…" action, not a grey system banner. */}
        <HubCard
          tone="mint"
          title={c.updatingTitle}
          titleClassName="text-[15px] text-[#131f1a]"
          lines={[c.updatingBody]}
          blockAction={{
            label: c.updatingTag,
            tone: "muted",
            heightClass: "h-[30px]",
            disabled: true,
            /* WD-34C shows the Updating… tag as a plain grey line. */
            desktopClass: "lg:mt-[2px] lg:h-auto lg:justify-start lg:rounded-none lg:bg-transparent lg:text-[13px] lg:leading-[22px] lg:font-normal lg:text-[#5e7066]",
          }}
          minHClass="min-h-[136px] lg:min-h-[104px]"
        />
      </div>
    );
  } else if (state === "update-failed") {
    /* WD-34D — failed banner + Try again / Back to checklist. */
    content = (
      <div className="grid gap-y-[10px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
        <SystemBanner
          tone="danger"
          title={c.updateFailedTitle}
          body={c.updateFailedBody}
        />
        <div>
          <PrimaryButton label={c.tryAgain} onClick={clearState} />
        </div>
        <SecondaryButton label={c.backToChecklist} onClick={clearState} />
      </div>
    );
  } else if (state === "offline") {
    /* WD-34E — offline banner with a right-aligned Retry pill. */
    content = (
      <div className="grid gap-y-[10px] lg:grid-cols-2 lg:gap-x-[40px] lg:gap-y-[24px]">
        <SystemBanner
          title={c.offlineTitle}
          body={c.offlineBody}
          action={{ label: common.action.retry, onClick: clearState }}
        />
      </div>
    );
  } else if (state === "outside-japan") {
    /* WD-34A — pre-arrival checklist. */
    content = renderChecklist(READINESS_OUTSIDE_TASKS, null);
  } else {
    /* WD-34 base and WD-34B Already in Japan. */
    content = renderChecklist(READINESS_TASKS, READINESS_TRAILING_TASK);
  }

  /* W-34A/C/E swap the page subtitle with the state (628:255/322/338). */
  const subtitle =
    state === "outside-japan"
      ? c.subtitleOutside
      : state === "updating"
        ? c.subtitleUpdating
        : state === "offline"
          ? c.subtitleOffline
          : state === "update-failed"
            ? c.subtitleUpdateFailed
            : c.pageSubtitle;

  return (
    <div className="max-w-[1080px] pt-[20px] lg:pt-0">
      <JapanSubPageHeader
        backLabel={c.japanPreparation}
        title={c.pageTitle}
        subtitle={subtitle}
      />
      <div className="mt-[18px]">{content}</div>
    </div>
  );
}
