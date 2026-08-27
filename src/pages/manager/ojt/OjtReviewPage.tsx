import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "./ojt.copy";
import { findOjtModule } from "./ojtMock";
import { OjtPageHeader } from "./sections/OjtPageHeader";
import { OjtReviewStatusCard } from "./sections/OjtReviewStatusCard";
import { OjtContentEditorCard } from "./sections/OjtContentEditorCard";
import { OjtReviewChecklistCard } from "./sections/OjtReviewChecklistCard";
import {
  OjtDraftSavedNotice,
  OjtPublishBlockedNotice,
} from "./sections/OjtDraftSavedNotice";
import {
  OjtActionRow,
  OjtButton,
  OjtLinkButton,
  OJT_SOLO_CTA,
} from "./sections/OjtButtons";
import { OjtPublishedView } from "./sections/OjtPublishedView";
import { OjtPrivacyFootnote } from "./sections/OjtPrivacyFootnote";
import { OjtNotFoundCard } from "./sections/OjtNotFoundCard";
import { OJT_RAIL_ALIGN } from "./sections/OjtSectionHeading";
import { OjtLoadingState, OjtOfflineState } from "./sections/OjtScreenStates";

/** Review OJT Draft (Figma EM-14B, node 761:2723) — the mandatory human
 *  review gate of the D11 workflow. Mint status card → CONTENT EDITOR with
 *  the three editable draft sections → yellow "HUMAN REVIEW · ALL REQUIRED"
 *  checklist → Approve & Publish / Save Draft / Back to OJT Detail.
 *  Desktop is derived from this mobile IA inside the MD shell (the manager
 *  desktop section 1192:956 is still a Figma placeholder): the editor keeps
 *  the main column and the checklist moves into a 320px governance rail.
 *  States: ?state=published (EM-14C, also reached by approving) · loading ·
 *  offline. Approval is interactive — unchecking any review item disables
 *  publication, which is the invariant the frame exists to express. */
export function OjtReviewPage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const c = useSectionCopy(OJT_COPY);
  const state = useScreenState();
  const module = findOjtModule(moduleId);

  const [drafts, setDrafts] = useState<string[]>(() =>
    (module?.editorSections ?? []).map((section) => section.lines.join("\n")),
  );
  const [checked, setChecked] = useState<boolean[]>([true, true, true, true]);
  const [draftSaved, setDraftSaved] = useState(false);

  if (!module) {
    return <OjtNotFoundCard />;
  }
  if (state === "published") {
    return <OjtPublishedView module={module} />;
  }

  const allChecked = checked.every(Boolean);

  const changeDraft = (index: number, value: string) => {
    setDrafts((current) =>
      current.map((entry, position) => (position === index ? value : entry)),
    );
    setDraftSaved(false);
  };

  const toggleCheck = (index: number) => {
    setChecked((current) =>
      current.map((entry, position) => (position === index ? !entry : entry)),
    );
    setDraftSaved(false);
  };

  return (
    <div className="max-w-[1060px]">
      <OjtPageHeader
        variant="sub"
        backTo={`/manager/knowledge-ojt/${module.id}`}
        backLabel={c.detail.title}
        title={c.review.title}
        subtitle={c.review.subtitle}
      />

      {state === "loading" ? (
        <OjtLoadingState />
      ) : state === "offline" ? (
        <OjtOfflineState />
      ) : (
        <>
          <div className="mt-[22px]">
            <OjtReviewStatusCard module={module} />
          </div>

          <div className="mt-[14px] lg:mt-[18px] lg:flex lg:items-start lg:gap-[20px]">
            <div className="lg:min-w-0 lg:flex-1">
              <OjtContentEditorCard
                sections={module.editorSections}
                drafts={drafts}
                onChangeDraft={changeDraft}
              />
            </div>
            <div
              className={`mt-[14px] lg:w-[320px] lg:shrink-0 ${OJT_RAIL_ALIGN}`}
            >
              <OjtReviewChecklistCard
                module={module}
                checked={checked}
                onToggle={toggleCheck}
              />
            </div>
          </div>

          {!allChecked && (
            <div className="mt-[14px] lg:max-w-[520px]">
              <OjtPublishBlockedNotice />
            </div>
          )}
          {draftSaved && (
            <div className="mt-[14px] lg:max-w-[520px]">
              <OjtDraftSavedNotice />
            </div>
          )}

          <div className={`mt-[16px] ${OJT_SOLO_CTA}`}>
            <OjtButton
              variant="primary"
              disabled={!allChecked}
              onClick={() =>
                navigate(
                  `/manager/knowledge-ojt/${module.id}/review?state=published`,
                )
              }
            >
              {c.review.approvePublish}
            </OjtButton>
          </div>
          <div className="mt-[10px]">
            <OjtActionRow>
              <OjtButton onClick={() => setDraftSaved(true)}>
                {c.review.saveDraft}
              </OjtButton>
              <OjtLinkButton to={`/manager/knowledge-ojt/${module.id}`}>
                {c.review.backToDetail}
              </OjtLinkButton>
            </OjtActionRow>
          </div>
          <div className="mt-[14px]">
            <OjtPrivacyFootnote>{c.review.footer}</OjtPrivacyFootnote>
          </div>
        </>
      )}
    </div>
  );
}
