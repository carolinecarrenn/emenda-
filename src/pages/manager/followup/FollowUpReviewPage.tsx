import { useParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "./followup.copy";
import { findSignal } from "./followupMock";
import { FollowUpPageHeader } from "./sections/FollowUpPageHeader";
import { ReviewSignalHeaderCard } from "./sections/ReviewSignalHeaderCard";
import { SignalContextCard } from "./sections/SignalContextCard";
import { RelatedRecordsStrip } from "./sections/RelatedRecordsStrip";
import { ManagerDecisionCard } from "./sections/ManagerDecisionCard";
import {
  FollowUpPrimaryLink,
  FollowUpSecondaryLink,
} from "./sections/FollowUpButtons";
import { FollowUpFooterNote } from "./sections/FollowUpPrivacyBand";
import {
  FollowUpLoadingState,
  FollowUpOfflineState,
} from "./sections/FollowUpScreenStates";
import { FollowUpSentView } from "./sections/FollowUpSentView";
import { FollowUpNotSentView } from "./sections/FollowUpNotSentView";
import { SignalNotFoundCard } from "./sections/SignalNotFoundCard";

/** Review follow-up (Figma EM-09A, node 761:1648 · MD-09A, node 1226:1322).
 *  Mint signal header with the HIGH pill → SIGNAL CONTEXT compare card and
 *  mini-log → RELATED RECORDS strip → yellow "Manager decision" card with the
 *  three checks → Compose / Back CTAs.
 *  States: ?state=loading · offline · sent (EM-10) · not-sent (EM-09C). */
export function FollowUpReviewPage() {
  const { signalId } = useParams();
  const c = useSectionCopy(FOLLOW_UP_COPY);
  const state = useScreenState();
  const signal = findSignal(signalId);

  if (!signal) {
    return <SignalNotFoundCard />;
  }
  if (state === "sent") {
    return <FollowUpSentView signal={signal} />;
  }
  if (state === "not-sent") {
    return <FollowUpNotSentView signal={signal} />;
  }

  return (
    <div className="max-w-[1060px]">
      <FollowUpPageHeader
        tone="sub"
        title={c.review.title}
        subtitle={c.review.subtitle}
      />

      {state === "loading" ? (
        <div className="mt-[20px]">
          <FollowUpLoadingState />
        </div>
      ) : state === "offline" ? (
        <div className="mt-[20px]">
          <FollowUpOfflineState />
        </div>
      ) : (
        <div className="mt-[18px] lg:max-w-[560px]">
          <ReviewSignalHeaderCard signal={signal} />
          <div className="mt-[18px]">
            <SignalContextCard signal={signal} />
          </div>
          <div className="mt-[16px]">
            <RelatedRecordsStrip />
          </div>
          <div className="mt-[16px]">
            <ManagerDecisionCard />
          </div>
          <div className="mt-[22px] space-y-[12px] lg:flex lg:gap-[12px] lg:space-y-0">
            <FollowUpPrimaryLink
              to={`/manager/follow-up/${signal.id}/compose`}
            >
              {c.review.composeCta}
            </FollowUpPrimaryLink>
            <FollowUpSecondaryLink to="/manager/follow-up">
              {c.review.backCta}
            </FollowUpSecondaryLink>
          </div>
          <div className="mt-[14px]">
            <FollowUpFooterNote>{c.review.footer}</FollowUpFooterNote>
            <p className="hidden text-[11px] text-[#65746d] lg:block">
              {c.review.footer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
