import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY, fillCopy } from "./communication.copy";
import {
  DEFAULT_CONVERSATION_ID,
  findConversation,
  findTemplate,
  parseTemplateId,
  type MessageTemplateId,
} from "./communicationData";
import { CommunicationPageHeader } from "./sections/CommunicationPageHeader";
import { ComposeContextCards } from "./sections/ComposeContextCards";
import { ComposeCard } from "./sections/ComposeCard";
import { ComposeReviewPanel } from "./sections/ComposeReviewPanel";
import { ComposeRecipientCard } from "./sections/ComposeRecipientCard";
import { ComposeTemplateChips } from "./sections/ComposeTemplateChips";
import { ComposeMessageBlocks } from "./sections/ComposeMessageBlocks";
import { BeforeSendingCard } from "./sections/BeforeSendingCard";
import { CommunicationContextStrip } from "./sections/CommunicationContextStrip";
import { CommunicationPrimaryLink } from "./sections/CommunicationButtons";
import { CommunicationFooterNote } from "./sections/CommunicationPrivacyBand";
import {
  CommunicationLoadingState,
  CommunicationOfflineState,
} from "./sections/CommunicationScreenStates";
import { MessageSentView } from "./sections/MessageSentView";
import { MessageFailedView } from "./sections/MessageFailedView";
import { ConversationNotFoundCard } from "./sections/ConversationNotFoundCard";

/** Send message (Figma MD-08, node 1225:144 · EM-08, node 797:139).
 *  Desktop: the RECIPIENT / LANGUAGE / MESSAGE TYPE / CONTEXT quad above the
 *  720px COMPOSE MESSAGE card and the 320px BEFORE SENDING rail.
 *  Mobile: mint recipient card → TEMPLATE chips → MANAGER ORIGINAL · 日本語
 *  → TRANSLATION PREVIEW → the "Before sending" checklist → COMMUNICATION
 *  CONTEXT strip → full-width green "Send message" → the human-review note.
 *  The recipient comes from `?to=`, defaulting to the unread thread.
 *  States: ?state=sent (EM-07B) · failed (EM-07C) · loading · offline. */
export function ComposeMessagePage() {
  const [params] = useSearchParams();
  const conversation =
    findConversation(params.get("to") ?? undefined) ??
    findConversation(DEFAULT_CONVERSATION_ID);
  const [templateId, setTemplateId] = useState<MessageTemplateId>(
    parseTemplateId(params.get("template")),
  );
  const c = useSectionCopy(COMMUNICATION_COPY);
  const state = useScreenState();

  if (!conversation) {
    return <ConversationNotFoundCard />;
  }

  const template = findTemplate(templateId);

  if (state === "sent") {
    return <MessageSentView conversation={conversation} />;
  }
  if (state === "failed") {
    return (
      <MessageFailedView conversation={conversation} template={template} />
    );
  }

  const reviewHref = `/manager/communication/review?to=${conversation.id}&template=${templateId}`;

  return (
    <div className="max-w-[1060px]">
      <CommunicationPageHeader
        tone="sub"
        title={c.compose.title}
        desktopTitle={c.compose.titleDesktop}
        subtitle={fillCopy(c.compose.subtitle, { name: conversation.name })}
        desktopSubtitle={c.compose.subtitleDesktop}
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
        <>
          <div className="hidden lg:mt-[27px] lg:block">
            <ComposeContextCards conversation={conversation} />
          </div>

          {/* MD-08 · desktop compose + review rail */}
          <div className="hidden lg:mt-[24px] lg:flex lg:items-start lg:gap-[20px]">
            <ComposeCard
              conversation={conversation}
              template={template}
              templateId={templateId}
              onTemplate={setTemplateId}
            />
            <ComposeReviewPanel
              conversation={conversation}
              templateId={templateId}
            />
          </div>

          {/* EM-08 · mobile stack */}
          <div className="mt-[20px] lg:hidden">
            <ComposeRecipientCard conversation={conversation} />
            <div className="mt-[18px]">
              <ComposeTemplateChips
                surface="mobile"
                template={templateId}
                onTemplate={setTemplateId}
              />
            </div>
            <div className="mt-[18px]">
              {/* 994:2826 · the "Before sending" card is drawn over the last
                  14px of the mint preview block, so the two read flush. */}
              <ComposeMessageBlocks template={template} />
              <div className="-mt-[14px]">
                <BeforeSendingCard />
              </div>
            </div>
            <div className="mt-[12px]">
              <CommunicationContextStrip />
            </div>
            <div className="mt-[10px]">
              <CommunicationPrimaryLink to={reviewHref}>
                {c.compose.sendMessage}
              </CommunicationPrimaryLink>
            </div>
            <div className="mt-[6px]">
              <CommunicationFooterNote>
                {c.compose.footnote}
              </CommunicationFooterNote>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
