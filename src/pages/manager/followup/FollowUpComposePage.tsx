import { useState } from "react";
import { useParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { FOLLOW_UP_COPY } from "./followup.copy";
import { findSignal, type TemplateId } from "./followupMock";
import { FollowUpPageHeader } from "./sections/FollowUpPageHeader";
import { ComposeRecipientCard } from "./sections/ComposeRecipientCard";
import { ComposeTemplateChips } from "./sections/ComposeTemplateChips";
import { ComposeMessageCards } from "./sections/ComposeMessageCards";
import { ManagerNoteCard } from "./sections/ManagerNoteCard";
import { BeforeSendingCard } from "./sections/BeforeSendingCard";
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
import { composeReasonLong, fill } from "./sections/followupLabels";

/** Compose follow-up (Figma EM-09B, node 761:1737 · MD-09B, node 1226:1379).
 *  Recipient card → TEMPLATE chips → ORIGINAL MESSAGE · Bahasa Indonesia →
 *  TRANSLATION PREVIEW · 日本語 → "Manager note · not sent to worker" →
 *  yellow "Before sending" checklist → Send / Back CTAs.
 *  "Send follow-up" resolves to EM-10 (?state=sent); the delivery failure
 *  is EM-09C (?state=not-sent). Also: ?state=loading · offline. */
export function FollowUpComposePage() {
  const { signalId } = useParams();
  const signal = findSignal(signalId);
  const [template, setTemplate] = useState<TemplateId>(
    signal?.template ?? "daily",
  );
  const c = useSectionCopy(FOLLOW_UP_COPY);
  const state = useScreenState();

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
        title={c.compose.title}
        subtitle={fill(c.compose.subtitle, {
          worker: signal.workerName,
          reason: composeReasonLong(c, signal),
        })}
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
          <ComposeRecipientCard signal={signal} />
          <div className="mt-[14px]">
            <ComposeTemplateChips
              template={template}
              onTemplate={setTemplate}
            />
          </div>
          <div className="mt-[14px]">
            <ComposeMessageCards signal={signal} />
          </div>
          <div className="mt-[16px]">
            <ManagerNoteCard signal={signal} />
          </div>
          <div className="mt-[14px]">
            <BeforeSendingCard />
          </div>
          <div className="mt-[16px] space-y-[10px] lg:flex lg:gap-[12px] lg:space-y-0">
            <FollowUpPrimaryLink
              to={`/manager/follow-up/${signal.id}/compose?state=sent`}
            >
              {c.compose.sendCta}
            </FollowUpPrimaryLink>
            <FollowUpSecondaryLink
              to={`/manager/follow-up/${signal.id}/review`}
            >
              {c.compose.backCta}
            </FollowUpSecondaryLink>
          </div>
          <div className="mt-[8px]">
            <FollowUpFooterNote>{c.compose.footer}</FollowUpFooterNote>
            <p className="hidden text-[11px] text-[#65746d] lg:block">
              {c.compose.footer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
