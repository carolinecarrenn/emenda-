import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "../ojt.copy";
import type { OjtModule } from "../ojtMock";
import { OjtPageHeader } from "./OjtPageHeader";
import { OjtActionRow, OjtLinkButton } from "./OjtButtons";
import { OjtPublishedGuidanceCards } from "./OjtPublishedGuidanceCards";
import {
  OjtPublicationDetailsCard,
  OjtPublishedChip,
  OjtPublishedSummaryCard,
} from "./OjtPublishedSummaryCard";
import { OjtPrivacyFootnote } from "./OjtPrivacyFootnote";
import { OJT_RAIL_ALIGN } from "./OjtSectionHeading";

/* EM-14C OJT Published (761:2679) — the success surface after a Manager
   approves a draft. Reached from the review screen's "Approve & Publish"
   and directly at ?state=published.
   Mobile order: Published chip → mint publication summary → PUBLISHED
   GUIDANCE cards → mint PUBLICATION SUMMARY → CTA pair → footer. On desktop
   the guidance column and the publication rail sit side by side inside the
   1060px manager content column. */
export function OjtPublishedView({ module }: { module: OjtModule }) {
  const common = useCommonCopy();
  const c = useSectionCopy(OJT_COPY);

  return (
    <div className="max-w-[1060px]">
      <OjtPageHeader
        variant="sub"
        backTo="/manager/knowledge-ojt"
        backLabel={common.managerNav.knowledgeOjt}
        title={c.published.title}
        subtitle={c.published.subtitle}
      />

      <div className="mt-[22px]">
        <OjtPublishedChip />
      </div>
      <div className="mt-[12px]">
        <OjtPublishedSummaryCard module={module} />
      </div>

      <div className="mt-[18px] lg:mt-[22px] lg:flex lg:items-start lg:gap-[20px]">
        <div className="lg:min-w-0 lg:flex-1">
          <OjtPublishedGuidanceCards module={module} />
        </div>
        <div
          className={`mt-[18px] lg:w-[320px] lg:shrink-0 ${OJT_RAIL_ALIGN}`}
        >
          <OjtPublicationDetailsCard module={module} />
        </div>
      </div>

      <div className="mt-[16px]">
        <OjtActionRow>
          <OjtLinkButton
            to={`/manager/knowledge-ojt/${module.id}`}
            variant="primary"
          >
            {c.published.openDetail}
          </OjtLinkButton>
          <OjtLinkButton to="/manager/knowledge-ojt">
            {c.published.backToHub}
          </OjtLinkButton>
        </OjtActionRow>
      </div>
      <div className="mt-[12px]">
        <OjtPrivacyFootnote>{c.published.footer}</OjtPrivacyFootnote>
      </div>
    </div>
  );
}
