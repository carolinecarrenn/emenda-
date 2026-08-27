import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { ASSISTANT_COPY } from "./assistant.copy";
import {
  ASSISTANT_CHATS,
  ASSISTANT_SOURCES,
  SEND_FAILED_DRAFT,
  VOICE_DRAFT,
} from "./assistantMock";
import { AssistantComposer } from "./sections/AssistantComposer";
import { ChatsRail } from "./sections/ChatsRail";
import { MobileAssistantHeader } from "./sections/MobileAssistantHeader";
import { EmptyState } from "./sections/EmptyState";
import { MessageThread } from "./sections/MessageThread";
import { ThinkingIndicator } from "./sections/ThinkingIndicator";
import { StateBanner } from "./sections/StateBanner";
import { SendFailedBlock } from "./sections/SendFailedBlock";
import { AttachmentMenu } from "./sections/AttachmentMenu";
import { AttachmentReadyCard } from "./sections/AttachmentReadyCard";
import { VoiceReview } from "./sections/VoiceReview";
import { SourceDetail } from "./sections/SourceDetail";
import { ChatHistoryView } from "./sections/ChatHistoryView";

const DEFAULT_CHAT_ID = "manager-message";
/** WD-59H opens its citation from the address-registration answer. */
const SOURCE_CHAT_ID = "address-registration";

/**
 * EMENDA Assistant tab — Figma WD-59 (desktop, section 1186:553) and W-59
 * (mobile, 1084:496+). One tab-level route: desktop is the two-card split
 * (300px Chats rail + 814px workspace card with a pinned composer), mobile is
 * the full-tab screen with the Chats / title / New header row, bottom sheets
 * instead of popovers, and the composer fixed above the bottom navigation.
 *
 * Sub-views stay on the same route through query params so mobile keeps its
 * bottom nav: ?view=history (WD-59C / W-59C), ?c=<chatId> (WD-59A / W-59A),
 * ?source=<sourceId> (WD-59H / W-59H). ?state=thinking | send-failed |
 * attachment-ready keep stable URLs for states that the UI also reaches by
 * interaction (sending a message · retrying · picking a document);
 * ?state=offline is the one genuinely non-interactive variant.
 */
export function AssistantPage() {
  const c = useSectionCopy(ASSISTANT_COPY);
  const state = useScreenState();
  const [params, setParams] = useSearchParams();
  const [attachmentMenuOpen, setAttachmentMenuOpen] = useState(false);
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [draft, setDraft] = useState("");

  const historyView = params.get("view") === "history";
  const chatParam = params.get("c");
  const sourceParam = params.get("source");

  function updateParams(next: Record<string, string | null>) {
    const merged = new URLSearchParams(params);
    for (const [key, value] of Object.entries(next)) {
      if (value === null) merged.delete(key);
      else merged.set(key, value);
    }
    setParams(merged);
  }

  function closeOverlays() {
    setAttachmentMenuOpen(false);
    setVoiceOpen(false);
  }

  function openChat(chatId: string) {
    closeOverlays();
    updateParams({ c: chatId, view: null, source: null });
  }

  function startNewChat() {
    closeOverlays();
    setParams(new URLSearchParams());
  }

  function openHistory() {
    closeOverlays();
    updateParams({ view: "history", source: null });
  }

  /* Sending is a real interaction: the message joins the thread and the
     assistant goes into WD-59B / W-59B "Thinking" until an answer lands.
     Offline, the same press lands on WD-59G / W-59G instead — the send never
     reaches Emenda and the draft is preserved. */
  function sendMessage() {
    const failed = params.get("state") === "offline";
    closeOverlays();
    if (!failed) setDraft("");
    updateParams({
      c: params.get("c") ?? DEFAULT_CHAT_ID,
      view: null,
      source: null,
      state: failed ? "send-failed" : "thinking",
    });
  }

  /* WD-59G / W-59G Retry — resend without duplicating the request. */
  function retrySend() {
    updateParams({ state: "thinking" });
  }

  const source = sourceParam
    ? (ASSISTANT_SOURCES.find((item) => item.id === sourceParam) ?? null)
    : null;

  const overlayOpen = attachmentMenuOpen || voiceOpen;
  const showThread =
    Boolean(chatParam) || Boolean(state) || Boolean(source) || overlayOpen;
  const fallbackChatId = source ? SOURCE_CHAT_ID : DEFAULT_CHAT_ID;
  const activeChat = showThread
    ? (ASSISTANT_CHATS.find(
        (chat) => chat.id === (chatParam ?? fallbackChatId),
      ) ?? null)
    : null;

  const attachmentReady = state === "attachment-ready";
  const composerHidden = historyView;
  /* WD-59F / WD-59G start the banner 18px under the workspace hairline; the
     plain thread and the empty state start 40px under it (WD-59 / WD-59A). */
  const bannerLead = state === "offline" || state === "send-failed";

  return (
    <div className="max-w-[1132px] pt-2 lg:pt-0">
      <MobileAssistantHeader
        historyView={historyView}
        onOpenHistory={openHistory}
        onNewChat={startNewChat}
        onBack={() => updateParams({ view: null })}
      />

      <div className="mt-[15px] lg:mt-0 lg:flex lg:gap-[18px]">
        <ChatsRail
          activeChatId={activeChat?.id ?? null}
          historyView={historyView}
          onOpenChat={openChat}
          onNewChat={startNewChat}
          onSearch={openHistory}
          onBack={() => updateParams({ view: null })}
        />

        {/* Workspace card (WD-59 · 1186:613): 814x744, radius 18, 64px header
            with a 20px semibold title over a #d1ded6 hairline. On mobile the
            card chrome falls away and the thread runs on the canvas. */}
        <section className="min-w-0 flex-1 lg:flex lg:h-[744px] lg:max-w-[814px] lg:flex-col lg:rounded-[18px] lg:border lg:border-lp-line lg:bg-white">
          <header className="hidden h-[64px] shrink-0 items-center border-b border-lp-line px-[24px] lg:flex">
            <h1 className="text-[20px] font-semibold text-lp-ink">
              {historyView ? c.historyTitle : c.workspaceTitle}
            </h1>
          </header>

          <div
            className={`lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:px-[34px] lg:pb-[24px] ${
              historyView
                ? "lg:pt-[28px]"
                : bannerLead
                  ? "lg:pt-[18px]"
                  : "lg:pt-[40px]"
            } ${composerHidden ? "" : "pb-[87px] lg:pb-[24px]"}`}
          >
            {historyView ? (
              <ChatHistoryView onOpenChat={openChat} />
            ) : (
              <div className="space-y-[18px] lg:space-y-[26px]">
                {state === "offline" && (
                  <StateBanner tone="offline" message={c.offlineBanner} />
                )}
                {state === "send-failed" && (
                  <div className="hidden lg:block">
                    <StateBanner tone="error" message={c.sendFailedBanner} />
                  </div>
                )}

                {activeChat ? (
                  <>
                    <div className={voiceOpen ? "hidden lg:block" : ""}>
                      <MessageThread
                        messages={activeChat.messages}
                        onOpenSource={(sourceId) =>
                          updateParams({ source: sourceId })
                        }
                      />
                    </div>
                    {state === "send-failed" && (
                      <SendFailedBlock
                        prompt={draft.trim() || SEND_FAILED_DRAFT}
                        onRetry={retrySend}
                      />
                    )}
                    {state === "thinking" && <ThinkingIndicator />}
                  </>
                ) : (
                  <EmptyState onPrompt={() => openChat(DEFAULT_CHAT_ID)} />
                )}

                {/* WD-59H sets the citation card 36px under the assistant
                    bubble — 10px more than the 26px the stack gives every
                    other desktop block. The wrapper is display:contents on
                    mobile so the bottom sheet keeps its own rhythm. */}
                {source && (
                  <div className="contents lg:block lg:pt-[10px]">
                    <SourceDetail
                      source={source}
                      onBack={() => updateParams({ source: null })}
                    />
                  </div>
                )}

                {voiceOpen && (
                  <VoiceReview
                    onUseTranscript={sendMessage}
                    onEdit={() => {
                      setVoiceOpen(false);
                      setDraft(VOICE_DRAFT.transcript);
                    }}
                  />
                )}

                {attachmentReady && (
                  <AttachmentReadyCard
                    onRemove={() => updateParams({ state: null })}
                  />
                )}

                {attachmentMenuOpen && (
                  <AttachmentMenu
                    onSelectDocument={() => {
                      setAttachmentMenuOpen(false);
                      updateParams({ state: "attachment-ready" });
                    }}
                    onClose={() => setAttachmentMenuOpen(false)}
                  />
                )}
              </div>
            )}
          </div>

          {/* WD-59H drops the composer while the citation card is open on
              desktop; the mobile sheet keeps it visible under the scrim. */}
          {!composerHidden && (
            <AssistantComposer
              placeholder={
                attachmentReady ? c.addMessagePlaceholder : c.askPlaceholder
              }
              value={draft}
              onValueChange={setDraft}
              onSend={sendMessage}
              sendDisabled={draft.trim() === ""}
              flatSend={state === "offline"}
              className={source ? "lg:hidden" : ""}
              onAddAttachment={() => {
                setVoiceOpen(false);
                setAttachmentMenuOpen((open) => !open);
              }}
              onVoiceInput={() => {
                setAttachmentMenuOpen(false);
                setVoiceOpen(true);
              }}
            />
          )}
        </section>
      </div>
    </div>
  );
}
