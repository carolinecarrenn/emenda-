import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "./career.copy";
import { HubBaseView } from "./sections/HubBaseView";
import { HubLoadingState } from "./sections/HubLoadingState";
import { HubNoCvState } from "./sections/HubNoCvState";
import { HubOfflineState } from "./sections/HubOfflineState";
import { HubIncompleteState } from "./sections/HubIncompleteState";

/** Career & CV hub (Figma WD-21, node 994:114 · mobile W-21, 547:3).
 *  H1 32px · state-driven subtitle · two 520px card columns.
 *  States: ?state=loading (21A) · no-cv (21B) · offline (21C) ·
 *  incomplete (21D); default renders the base hub. */
export function CareerHubPage() {
  const c = useSectionCopy(CAREER_COPY);
  const state = useScreenState();

  const subtitle =
    state === "loading"
      ? c.hub.loadingSubtitle
      : state === "no-cv"
      ? c.hub.noCv.subtitle
      : state === "offline"
        ? c.hub.offline.subtitle
        : state === "incomplete"
          ? c.hub.incomplete.subtitle
          : c.hub.subtitle;

  return (
    <div className="max-w-[1080px] pt-2 lg:pt-3">
      <h1 className="text-[30px] leading-[1.25] font-semibold text-[#17231f] lg:text-[32px]">
        {c.hub.title}
      </h1>
      <p className="mt-[10px] text-[13px] leading-[19px] text-[#65746d] lg:mt-[6px] lg:text-[16px] lg:leading-[24px]">
        {subtitle}
      </p>

      {state === "loading" ? (
        <HubLoadingState />
      ) : state === "no-cv" ? (
        <HubNoCvState />
      ) : state === "offline" ? (
        <HubOfflineState />
      ) : state === "incomplete" ? (
        <HubIncompleteState />
      ) : (
        <HubBaseView />
      )}
    </div>
  );
}
