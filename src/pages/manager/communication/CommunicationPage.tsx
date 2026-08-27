import { useState } from "react";
import { useScreenState } from "@/hooks/useScreenState";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY } from "./communication.copy";
import {
  DEFAULT_CONVERSATION_ID,
  conversationsFor,
  findConversation,
  findThread,
} from "./communicationData";
import { CommunicationPageHeader } from "./sections/CommunicationPageHeader";
import { CommunicationKpiRow } from "./sections/CommunicationKpiRow";
import { CommunicationStatTiles } from "./sections/CommunicationStatTiles";
import { CommunicationToolbar } from "./sections/CommunicationToolbar";
import { ConversationList } from "./sections/ConversationList";
import { ConversationPreviewRail } from "./sections/ConversationPreviewRail";
import {
  CommunicationFooterNote,
  CommunicationPrivacyBand,
} from "./sections/CommunicationPrivacyBand";
import {
  CommunicationEmptyState,
  CommunicationLoadingState,
  CommunicationOfflineState,
} from "./sections/CommunicationScreenStates";
import {
  matchesFilter,
  matchesSearch,
  type ConversationFilter,
} from "./sections/conversationFilter";

/** Communication inbox (Figma MD-06, node 1225:2 · EM-06, node 797:42).
 *  Desktop: KPI quad → search + All/Unread/Needs reply/Broadcast chips +
 *  Send → CONVERSATIONS cards beside the selected-thread preview rail →
 *  the mint boundary band. Mobile: counted chips + search → conversation
 *  cards → footer notes → the two stat tiles.
 *  States: ?state=loading · empty · offline. */
export function CommunicationPage() {
  const [filter, setFilter] = useState<ConversationFilter>("all");
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(DEFAULT_CONVERSATION_ID);
  const c = useSectionCopy(COMMUNICATION_COPY);
  const common = useCommonCopy();
  const state = useScreenState();

  /* EM-06 chips count the mobile roster only — All 4 / Unread 1 / Follow-up 1. */
  const mobileRoster = conversationsFor("mobile");
  const counts = {
    all: mobileRoster.length,
    unread: mobileRoster.filter((conversation) => conversation.unreadCount > 0)
      .length,
    followUp: mobileRoster.filter(
      (conversation) => conversation.meta === "followUp",
    ).length,
  };

  const visible = (surface: "desktop" | "mobile") =>
    conversationsFor(surface).filter(
      (conversation) =>
        matchesFilter(conversation, filter) &&
        matchesSearch(conversation, search),
    );

  const desktopConversations = visible("desktop");
  const mobileConversations = visible("mobile");
  const selected =
    findConversation(selectedId) ??
    desktopConversations[0] ??
    findConversation(DEFAULT_CONVERSATION_ID);

  return (
    <div className="max-w-[1060px]">
      <CommunicationPageHeader
        title={common.managerNav.messages}
        desktopTitle={common.managerNav.communication}
        subtitle={c.list.subtitleMobile}
        desktopSubtitle={c.list.subtitle}
      />

      {state === "loading" ? (
        <div className="mt-[20px]">
          <CommunicationLoadingState />
        </div>
      ) : (
        <>
          {/* MD-STATE-01 keeps the cached context on screen and only disables
              the actions that would write, so the offline inbox carries the
              banner above the still-readable conversations. */}
          {state === "offline" && (
            <div className="mt-[20px] lg:mt-[27px]">
              <CommunicationOfflineState />
            </div>
          )}

          <div className="hidden lg:mt-[27px] lg:block">
            <CommunicationKpiRow />
          </div>

          <div className="mt-[18px] lg:mt-[20px]">
            <CommunicationToolbar
              search={search}
              onSearch={setSearch}
              filter={filter}
              onFilter={setFilter}
              counts={counts}
              offline={state === "offline"}
            />
          </div>

          {state === "empty" ? (
            <div className="mt-[20px]">
              <CommunicationEmptyState />
            </div>
          ) : (
            <div className="mt-[18px] lg:mt-[28px] lg:flex lg:items-start lg:gap-[30px]">
              <div className="lg:min-w-0 lg:flex-1">
                <ConversationList
                  mobile={mobileConversations}
                  desktop={desktopConversations}
                  selectedId={selectedId}
                  onSelect={setSelectedId}
                />
              </div>
              {selected && (
                <ConversationPreviewRail
                  conversation={selected}
                  thread={findThread(selected.id)}
                />
              )}
            </div>
          )}

          <div className="mt-[12px] lg:mt-[56px]">
            {/* 994:2724 · EM-06 sets its closing pair at 10px, one size up
                from the 9px note the other 390px frames use. */}
            <CommunicationFooterNote size="md">
              {c.list.privacyMobileLine1}
            </CommunicationFooterNote>
            <CommunicationFooterNote size="md">
              {c.list.privacyMobileLine2}
            </CommunicationFooterNote>
            <CommunicationPrivacyBand>
              {c.list.privacyDesktop}
            </CommunicationPrivacyBand>
          </div>

          <div className="mt-[12px] lg:hidden">
            <CommunicationStatTiles />
          </div>
        </>
      )}
    </div>
  );
}
