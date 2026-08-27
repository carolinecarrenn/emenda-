import { useSearchParams } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { findConversation } from "./chatMock";
import { ChatHubView } from "./sections/ChatHubView";
import { ConversationView } from "./sections/ConversationView";

/** Section 13 · Chat — one tab-level route for both screens.
 *  /worker/chat renders the hub (Figma WD-57A · 1182:6127, mobile W-57A);
 *  /worker/chat?c=sato|support opens the conversation (WD-58 · 1182:6412,
 *  mobile W-58). The thread stays on the tab route on purpose: the mobile
 *  mock keeps the bottom navigation inside the conversation, which the shell
 *  only does for tab-level paths.
 *  ?state= reaches the non-interactive variants (headless, headless-offline,
 *  loading, empty, offline, access-ended, typing, send-failed,
 *  translation-unavailable, voice-failed, review); attachment, voice capture
 *  and the review gate also run on real UI state inside the thread. */
export function ChatPage() {
  const [params] = useSearchParams();
  const state = useScreenState();
  const conversationId = params.get("c");

  const headless = state === "headless" || state === "headless-offline";
  if (conversationId === null || headless) {
    return <ChatHubView state={state} />;
  }

  return (
    <ConversationView
      conversation={findConversation(conversationId)}
      state={state}
    />
  );
}
