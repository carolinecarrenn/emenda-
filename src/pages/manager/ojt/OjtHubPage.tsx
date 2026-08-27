import { useScreenState } from "@/hooks/useScreenState";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { fillOjtCopy, OJT_COPY } from "./ojt.copy";
import { OJT_DRAFT_MODULE_ID, OJT_HUB_METRICS } from "./ojtMock";
import { OjtPageHeader } from "./sections/OjtPageHeader";
import { OjtStatTiles } from "./sections/OjtStatTiles";
import { OjtFlowCard } from "./sections/OjtFlowCard";
import { OjtModuleList } from "./sections/OjtModuleList";
import { OjtDraftQueueCard } from "./sections/OjtDraftQueueCard";
import { OjtLinkButton, OJT_SOLO_CTA } from "./sections/OjtButtons";
import { OjtPrivacyFootnote } from "./sections/OjtPrivacyFootnote";
import { OJT_RAIL_ALIGN } from "./sections/OjtSectionHeading";
import { OjtLoadingState, OjtOfflineState } from "./sections/OjtScreenStates";

/** Knowledge / OJT hub (Figma EM-14, node 761:2552 — desktop derived from
 *  the mobile IA inside the MD shell; manager desktop section 1192:956 is a
 *  Figma placeholder). States: ?state=loading · ?state=offline. */
export function OjtHubPage() {
  const common = useCommonCopy();
  const c = useSectionCopy(OJT_COPY);
  const state = useScreenState();

  const tiles = [
    {
      label: c.hub.tileModules,
      value: fillOjtCopy(c.hub.tileModulesValue, {
        count: OJT_HUB_METRICS.modules,
      }),
    },
    {
      label: c.hub.tilePending,
      value: fillOjtCopy(c.hub.tilePendingValue, {
        count: OJT_HUB_METRICS.pendingWorkers,
      }),
    },
    { label: c.hub.tileCompletion, value: OJT_HUB_METRICS.completion },
    {
      label: c.hub.tileDraftReview,
      value: String(OJT_HUB_METRICS.draftReview),
    },
  ];

  return (
    <div className="max-w-[1060px]">
      <OjtPageHeader
        title={common.managerNav.knowledgeOjt}
        subtitle={c.hub.subtitle}
      />

      {state === "loading" ? (
        <OjtLoadingState />
      ) : state === "offline" ? (
        <OjtOfflineState />
      ) : (
        <>
          <div className="mt-[24px]">
            <OjtStatTiles tiles={tiles} />
          </div>
          <div className="mt-[18px] lg:mt-[22px]">
            <OjtFlowCard />
          </div>
          <div className="mt-[18px] lg:mt-[22px] lg:flex lg:items-start lg:gap-[20px]">
            <div className="lg:min-w-0 lg:flex-1">
              <OjtModuleList />
            </div>
            <div
              className={`mt-[18px] lg:w-[320px] lg:shrink-0 ${OJT_RAIL_ALIGN}`}
            >
              <OjtDraftQueueCard />
            </div>
          </div>
          <div className={`mt-[14px] ${OJT_SOLO_CTA}`}>
            <OjtLinkButton
              to={`/manager/knowledge-ojt/${OJT_DRAFT_MODULE_ID}`}
              variant="primary"
            >
              {c.hub.reviewCta}
            </OjtLinkButton>
          </div>
          <div className="mt-[12px]">
            <OjtPrivacyFootnote>{c.hub.footer}</OjtPrivacyFootnote>
          </div>
        </>
      )}
    </div>
  );
}
