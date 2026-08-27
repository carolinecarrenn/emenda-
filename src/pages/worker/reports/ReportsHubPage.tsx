import { useSearchParams } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { CAREGIVER_COPY } from "./caregiver.copy";
import { useReports } from "@/data/reportsContext";
import { EMPLOYER } from "@/data/caregiverReport";
import { useScreenState } from "@/hooks/useScreenState";
import { isTemplateKey } from "./reportTemplate";
import { TodayPanel } from "./sections/TodayPanel";
import { RecentHistory } from "./sections/RecentHistory";
import { TemplateAssignmentStrip } from "./sections/TemplateAssignmentStrip";
import { TemplateExamplesCard } from "./sections/TemplateExamplesCard";
import { TemplateHubView } from "./sections/TemplateHubView";
import { HubHeading } from "./sections/HubHeading";
import {
  HubAccessEndedState,
  HubEmptyState,
  HubHeadlessOfflineState,
  HubHeadlessState,
  HubLoadingState,
  HubOfflineState,
} from "./sections/HubStates";

const HUB_STATES = [
  "headless",
  "headless-offline",
  "loading",
  "empty",
  "offline",
  "access-ended",
] as const;

type HubState = (typeof HUB_STATES)[number];

function isHubState(value: string | null): value is HubState {
  return (HUB_STATES as readonly string[]).includes(value ?? "");
}

/** Worker Reports hub — Caregiver template (Figma WD-54I / WD-54F / WD-54G).
 *  Eyebrow 13px · H1 34px · state-driven subtitle · 1012px content column.
 *  Lettered state variants (WD-54 headless · WD-54B loading · WD-54C empty ·
 *  WD-54D offline · WD-54E employer access ended · W-54H headless offline)
 *  render via ?state=; ?template=general|warehouse|food renders the hub of
 *  the other employer-assigned templates (W-54J / W-54K). */
export function ReportsHubPage() {
  const state = useScreenState();
  const [searchParams] = useSearchParams();
  const { todayReport } = useReports();
  const c = useSectionCopy(CAREGIVER_COPY);

  if (isHubState(state)) {
    return (
      <div className="max-w-[1012px] pt-2 lg:pt-[4px]">
        {state === "headless" && <HubHeadlessState />}
        {state === "headless-offline" && <HubHeadlessOfflineState />}
        {state === "loading" && <HubLoadingState />}
        {state === "empty" && <HubEmptyState />}
        {state === "offline" && <HubOfflineState />}
        {state === "access-ended" && <HubAccessEndedState />}
      </div>
    );
  }

  const templateParam = searchParams.get("template");
  if (isTemplateKey(templateParam) && templateParam !== "caregiver") {
    return <TemplateHubView template={templateParam} />;
  }

  const subtitle = !todayReport
    ? c.form.templateTitle(EMPLOYER.name)
    : todayReport.status === "verified"
      ? c.hub.todayVerified
      : c.hub.todaySubmitted;

  return (
    <div className="max-w-[1012px] pt-2 lg:pt-[4px]">
      <HubHeading sentence={c.hub.headline} desktopSubtitle={subtitle} />

      <div className="mt-[26px] lg:mt-[52px]">
        <TodayPanel />
      </div>
      <div className="mt-[40px] lg:mt-[36px]">
        <RecentHistory />
      </div>
      <div className="mt-[20px] lg:mt-[14px]">
        <TemplateAssignmentStrip />
      </div>
      <div className="mt-[26px]">
        <TemplateExamplesCard current="caregiver" />
      </div>
    </div>
  );
}
