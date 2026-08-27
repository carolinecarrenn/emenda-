import { useSearchParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "./communication.copy";
import {
  DEFAULT_CONVERSATION_ID,
  findConversation,
  findTemplate,
  parseTemplateId,
} from "./communicationData";
import { CommunicationPageHeader } from "./sections/CommunicationPageHeader";
import { ReviewContextCard } from "./sections/ReviewContextCard";
import { ReviewMessageCards } from "./sections/ReviewMessageCards";
import { ReviewChecklistCard } from "./sections/ReviewChecklistCard";
import {
  CommunicationButtonRow,
  CommunicationPrimaryLink,
  CommunicationSecondaryLink,
} from "./sections/CommunicationButtons";
import {
  CommunicationLoadingState,
  CommunicationOfflineState,
} from "./sections/CommunicationScreenStates";
import { MessageSentView } from "./sections/MessageSentView";
import { MessageFailedView } from "./sections/MessageFailedView";
import { ConversationNotFoundCard } from "./sections/ConversationNotFoundCard";

/** Message review (Figma MD-08A, node 1225:219 · EM-08A, node 797:188).
 *  "Check translation before sending" — the mint recipient context, the
 *  ORIGINAL · 日本語 and TRANSLATION PREVIEW · Bahasa Indonesia pair, the
 *  send-check list, then "Send message" + "Back to edit" with the manager
 *  responsibility line beside them.
 *  States: ?state=sent (EM-07B) · failed (EM-07C) · loading · offline. */
export function ReviewMessagePage() {
  const [params] = useSearchParams();
  const conversation =
    findConversation(params.get("to") ?? undefined) ??
    findConversation(DEFAULT_CONVERSATION_ID);
  const templateId = parseTemplateId(params.get("template"));
  const template = findTemplate(templateId);
  const c = useSectionCopy(COMMUNICATION_COPY);
  const state = useScreenState();

  if (!conversation) {
    return <ConversationNotFoundCard />;
  }
  if (state === "sent") {
    return <MessageSentView conversation={conversation} />;
  }
  if (state === "failed") {
    return (
      <MessageFailedView conversation={conversation} template={template} />
    );
  }

  const query = `to=${conversation.id}&template=${templateId}`;

  return (
    <div className="max-w-[1060px]">
      <CommunicationPageHeader
        tone="sub"
        title={c.review.title}
        desktopTitle={c.review.titleDesktop}
        subtitle={c.review.subtitle}
        desktopSubtitle={c.review.subtitleDesktop}
      />

      {state === "loading" ? (
        <div className="mt-[20px]">
          <CommunicationLoadingState />
        </div>
      ) : state === "offline" ? (
        <div className="mt-[20px]">
          <CommunicationOfflineState />
        </div>
      ) : (
        <div className="mt-[24px] lg:mt-[27px]">
          <ReviewContextCard conversation={conversation} />

          <div className="mt-[20px] lg:mt-[28px]">
            <ReviewMessageCards template={template} />
          </div>

          <div className="mt-[22px] lg:mt-[30px]">
            <ReviewChecklistCard />
          </div>

          {/* 994:2873–2876 · a 26px drop to the send key, then 12px to the
              46px outline "Back to edit". EM-08A prints the responsibility
              line inside the send-check card, so the paragraph beside the
              CTAs belongs to MD-08A alone. */}
          <div className="mt-[26px] lg:mt-[34px] lg:flex lg:items-center lg:gap-[40px]">
            <CommunicationButtonRow mobileSpace="space-y-[12px]">
              <CommunicationPrimaryLink
                to={`/manager/communication/review?${query}&state=sent`}
              >
                {c.review.sendMessage}
              </CommunicationPrimaryLink>
              <CommunicationSecondaryLink
                to={`/manager/communication/compose?${query}`}
                desktopWidth="lg:w-[180px]"
                mobile="h-[46px] text-[11px]"
              >
                {c.review.backToEdit}
              </CommunicationSecondaryLink>
            </CommunicationButtonRow>
            <p className="hidden lg:mt-0 lg:block lg:text-[10px] lg:leading-[14px] lg:text-[#65746d]">
              {c.review.responsibilityDesktop}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
