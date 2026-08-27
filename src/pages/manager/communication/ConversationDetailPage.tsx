import { useParams, useSearchParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "./communication.copy";
import {
  conversationsFor,
  findConversation,
  findTemplate,
  findThread,
  parseTemplateId,
} from "./communicationData";
import { CommunicationPageHeader } from "./sections/CommunicationPageHeader";
import { ThreadMiniList } from "./sections/ThreadMiniList";
import { ThreadHeader } from "./sections/ThreadHeader";
import { ThreadStatusStrip } from "./sections/ThreadStatusStrip";
import { ThreadMessages } from "./sections/ThreadMessages";
import {
  ThreadQuickActionButtons,
  ThreadQuickActionPills,
} from "./sections/ThreadQuickActions";
import { ThreadComposer } from "./sections/ThreadComposer";
import {
  CommunicationFooterNote,
  CommunicationPrivacyBand,
} from "./sections/CommunicationPrivacyBand";
import {
  CommunicationLoadingState,
  CommunicationOfflineState,
} from "./sections/CommunicationScreenStates";
import { MessageSentView } from "./sections/MessageSentView";
import { MessageFailedView } from "./sections/MessageFailedView";
import { ConversationNotFoundCard } from "./sections/ConversationNotFoundCard";

/** Conversation detail (Figma MD-07, node 1225:85 · EM-07, node 797:90).
 *  Desktop: a 300px Conversations column beside the 740px chat pane —
 *  header + Translate ON pill, the bilingual transcript, the composer, the
 *  "Japanese original → Indonesian preview" line and the Worker Detail /
 *  Report / Follow-up buttons — closing on the privacy boundary strip.
 *  Mobile: status strip → bubbles → quick-action pills → composer →
 *  the two microcopy lines.
 *  States: ?state=loading · offline · sent (EM-07B) · failed (EM-07C). */
export function ConversationDetailPage() {
  const { threadId } = useParams();
  const [params] = useSearchParams();
  const conversation = findConversation(threadId);
  const thread = findThread(threadId);
  const c = useSectionCopy(COMMUNICATION_COPY);
  const state = useScreenState();

  if (!conversation || !thread) {
    return <ConversationNotFoundCard />;
  }
  if (state === "sent") {
    return <MessageSentView conversation={conversation} />;
  }
  if (state === "failed") {
    return (
      <MessageFailedView
        conversation={conversation}
        template={findTemplate(parseTemplateId(params.get("template")))}
      />
    );
  }

  return (
    <div className="max-w-[1060px]">
      <CommunicationPageHeader
        tone="sub"
        title={conversation.name}
        desktopTitle={c.thread.title}
        subtitle={conversation.mobileRoleLine}
        desktopSubtitle={c.thread.subtitle}
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
          <div className="mt-[18px] lg:mt-[27px] lg:flex lg:items-start lg:gap-[20px]">
            {/* MD-07 lists three rows beside the thread (1225:110–118). */}
            <ThreadMiniList
              conversations={conversationsFor("desktop").slice(0, 3)}
              activeId={conversation.id}
            />

            <div className="lg:flex lg:h-[620px] lg:min-w-0 lg:flex-1 lg:flex-col lg:rounded-[12px] lg:border lg:border-[#dbe3de] lg:bg-white lg:px-[24px] lg:py-[22px]">
              <ThreadHeader conversation={conversation} thread={thread} />
              <ThreadStatusStrip thread={thread} />

              <div className="mt-[20px] lg:min-h-0 lg:flex-1 lg:overflow-y-auto">
                <ThreadMessages thread={thread} />
              </div>

              <div className="mt-[22px] lg:hidden">
                <ThreadQuickActionPills conversation={conversation} />
              </div>

              <div className="mt-[24px] lg:mt-[34px]">
                <ThreadComposer conversation={conversation} thread={thread} />
              </div>

              {/* MD-07 keeps this line under the composer; EM-07 prints its
                  own copy inside the reply card. */}
              <div className="hidden lg:mt-[13px] lg:block">
                <p className="text-[10px] text-[#65746d]">
                  {c.thread.footnoteDesktop}
                </p>
              </div>

              <div className="hidden lg:mt-[22px] lg:block">
                <ThreadQuickActionButtons conversation={conversation} />
              </div>
            </div>
          </div>

          <div className="mt-[8px] lg:mt-[54px]">
            <CommunicationFooterNote>
              {c.thread.privacyMobile}
            </CommunicationFooterNote>
            <CommunicationPrivacyBand tone="thread">
              {c.thread.privacyDesktop}
            </CommunicationPrivacyBand>
          </div>
        </>
      )}
    </div>
  );
}
