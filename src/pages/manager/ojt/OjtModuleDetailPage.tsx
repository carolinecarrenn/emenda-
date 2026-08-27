import { useParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { fillOjtCopy, OJT_COPY } from "./ojt.copy";
import { findOjtModule } from "./ojtMock";
import { OjtPageHeader } from "./sections/OjtPageHeader";
import { OjtStatTiles } from "./sections/OjtStatTiles";
import { OjtDetailSummaryCard } from "./sections/OjtDetailSummaryCard";
import { OjtGuidanceCard } from "./sections/OjtGuidanceCard";
import { OjtHumanReviewCard } from "./sections/OjtHumanReviewCard";
import { OjtSourceRecordsCard } from "./sections/OjtSourceRecordsCard";
import {
  OjtActionRow,
  OjtLinkButton,
  OJT_SOLO_CTA,
} from "./sections/OjtButtons";
import { OjtNotFoundCard } from "./sections/OjtNotFoundCard";
import { OJT_RAIL_ALIGN } from "./sections/OjtSectionHeading";
import { OjtLoadingState, OjtOfflineState } from "./sections/OjtScreenStates";

/** OJT Detail (Figma EM-14A, node 761:2620 — desktop derived from the mobile
 *  IA inside the MD shell). States: ?state=loading · ?state=offline. */
export function OjtModuleDetailPage() {
  const { moduleId } = useParams();
  const common = useCommonCopy();
  const c = useSectionCopy(OJT_COPY);
  const state = useScreenState();
  const module = findOjtModule(moduleId);

  if (!module) {
    return <OjtNotFoundCard />;
  }

  const tiles = [
    {
      label: c.detail.tileAssigned,
      value: String(module.assignedWorkers),
      tone: "white" as const,
    },
    {
      label: c.detail.tilePending,
      value: String(module.pendingWorkers),
      tone: "white" as const,
    },
    {
      label: c.detail.tileCompletion,
      value: module.completionRate,
      tone: "white" as const,
    },
    {
      label: c.detail.tileLanguages,
      value: module.languages,
      tone: "white" as const,
    },
  ];

  return (
    <div className="max-w-[1060px]">
      <OjtPageHeader
        variant="sub"
        backTo="/manager/knowledge-ojt"
        backLabel={common.managerNav.knowledgeOjt}
        title={c.detail.title}
        subtitle={fillOjtCopy(c.detail.subtitle, { module: module.title })}
      />

      {state === "loading" ? (
        <OjtLoadingState />
      ) : state === "offline" ? (
        <OjtOfflineState />
      ) : (
        <>
          <div className="mt-[25px]">
            <OjtDetailSummaryCard module={module} />
          </div>
          <div className="mt-[16px]">
            <OjtStatTiles tiles={tiles} scale="detail" />
          </div>
          <div className="mt-[18px] lg:mt-[22px] lg:flex lg:items-start lg:gap-[20px]">
            <div className="lg:min-w-0 lg:flex-1">
              <OjtGuidanceCard module={module} />
            </div>
            <div
              className={`mt-[14px] space-y-[14px] lg:w-[320px] lg:shrink-0 ${OJT_RAIL_ALIGN}`}
            >
              <OjtHumanReviewCard />
              <OjtSourceRecordsCard module={module} />
            </div>
          </div>
          <div className="mt-[14px]">
            <OjtActionRow>
              <OjtLinkButton
                to={`/manager/knowledge-ojt/${module.id}/review`}
                variant="primary"
              >
                {c.detail.reviewEdit}
              </OjtLinkButton>
              <OjtLinkButton to="/manager/workers">
                {c.detail.viewWorkers}
              </OjtLinkButton>
            </OjtActionRow>
          </div>
          <div className={`mt-[10px] ${OJT_SOLO_CTA}`}>
            <OjtLinkButton to="/manager/knowledge-ojt">
              {c.detail.backToOjt}
            </OjtLinkButton>
          </div>
        </>
      )}
    </div>
  );
}
