import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { CHAT_COPY, fill } from "../chat.copy";
import { CONVERSATIONS } from "../chatMock";
import type { ChatConversation } from "../chatMock";
import { ChatStateBanner, TranslationNote } from "./chatUi";
import { ConversationRow } from "./ConversationRow";
import { HeadlessCard } from "./HeadlessCard";
import { HubSkeletonList, NoConversationsCard } from "./HubStates";
import { ReadOnlyNote } from "./ReadOnlyNote";

/** Chat hub — W-57 headless (1034:131), W-57A connected (1034:187),
 *  W-57B loading (1034:260), W-57C empty (1034:315), W-57D offline
 *  (1034:373), W-57E access ended (1034:444), W-57F headless offline
 *  (1037:418); desktop twins WD-57..WD-57F (1182:6078…).
 *  Mobile body is one 350px column with a uniform 12px rhythm — every mock
 *  in the family stacks title → subtitle → state block on that grid. */
export function ChatHubView({ state }: { state: string | null }) {
  const c = useSectionCopy(CHAT_COPY);
  const common = useCommonCopy();

  const headless = state === "headless" || state === "headless-offline";
  const offline = state === "offline" || state === "headless-offline";
  const headlessOffline = state === "headless-offline";
  const accessEnded = state === "access-ended";

  /* W-57B/57E/57F replace the subtitle with the state's own sentence
     (1034:xxx), while WD-57B/57E/57F keep the employer scope line and add the
     state sentence underneath as a second lead (WD-57F "Offline lead"
     1223:1712). */
  const mobileSubtitle = headlessOffline
    ? c.hub.headlessOfflineSubtitle
    : headless
      ? c.hub.headlessSubtitle
      : state === "loading"
        ? c.hub.loadingSubtitle
        : accessEnded
          ? c.banner.accessEnded
          : fill(c.hub.subtitle, { employer: EMPLOYER.name });

  const desktopSubtitle = headless
    ? c.hub.headlessSubtitle
    : fill(c.hub.subtitle, { employer: EMPLOYER.name });

  const lead = headlessOffline
    ? c.hub.headlessOfflineSubtitle
    : state === "loading"
      ? c.hub.loadingSubtitle
      : undefined;

  const rowTitle = (conversation: ChatConversation) =>
    conversation.personName ?? c.hub.employerSupportDesk;

  const rowMeta = (conversation: ChatConversation) => {
    if (conversation.id === "support") {
      return `${EMPLOYER.name} · ${c.hub.workAdminSupport}`;
    }
    return accessEnded
      ? `${common.manager.facilityManager} · ${c.hub.readOnlyHistory}`
      : `${common.manager.facilityManager} · ${conversation.language}`;
  };

  const rowLink = (conversation: ChatConversation) => {
    const suffix = offline
      ? "&state=offline"
      : accessEnded
        ? "&state=access-ended"
        : "";
    return `/worker/chat?c=${conversation.id}${suffix}`;
  };

  return (
    <div className="flex max-w-[1012px] flex-col gap-[12px] pt-2 lg:gap-0 lg:pt-[10px]">
      {/* Page title block — W-57A 1034:235 / 1034:236 */}
      <h1 className="text-[28px] leading-[34px] font-bold text-lp-ink lg:text-[34px] lg:leading-[1.2]">
        {c.hub.title}
      </h1>
      <p className="max-w-[900px] text-[12px] leading-[17px] text-lp-muted lg:hidden">
        {mobileSubtitle}
      </p>
      <p className="hidden max-w-[900px] text-lp-muted lg:mt-[13px] lg:block lg:text-[14px] lg:leading-[17px]">
        {desktopSubtitle}
      </p>
      {lead !== undefined && (
        <p className="hidden max-w-[900px] text-lp-muted lg:mt-[40px] lg:block lg:text-[13px] lg:leading-[17px]">
          {lead}
        </p>
      )}

      {offline && !headless && (
        <div className="lg:mt-[52px]">
          <ChatStateBanner
            title={c.banner.offlineTitle}
            body={c.banner.offlineBody}
          />
        </div>
      )}
      {headlessOffline && (
        <div className="lg:mt-[4px]">
          <ChatStateBanner
            title={c.banner.offlineTitle}
            body={c.banner.offlineHeadlessBody}
            detail={c.banner.offlineHeadlessDetail}
          />
        </div>
      )}
      {accessEnded && (
        <>
          {/* W-57E 1034:494 carries the read-only wording in the banner
              itself; WD-57E keeps the short lead and the mint note below. */}
          <div className="lg:hidden">
            <ChatStateBanner
              title={c.banner.readOnlyTitle}
              body={c.banner.readOnlyBody}
            />
          </div>
          <div className="hidden lg:mt-[52px] lg:block">
            <ChatStateBanner title={c.banner.accessEnded} />
          </div>
        </>
      )}

      {headless ? (
        <HeadlessCard
          offline={headlessOffline}
          className={headlessOffline ? "lg:mt-[26px]" : "lg:mt-[92px]"}
        />
      ) : state === "loading" ? (
        <HubSkeletonList />
      ) : state === "empty" ? (
        <NoConversationsCard />
      ) : (
        <>
          {/* W-57E replaces the translation note with the read-only banner;
              WD-57E keeps a mint note, so it stays on the desktop pane. */}
          {accessEnded ? (
            <div className="hidden lg:mt-[14px] lg:block">
              <ReadOnlyNote />
            </div>
          ) : (
            <TranslationNote
              className="lg:mt-[66px]"
              title={c.hub.noteTitle}
              body={c.hub.noteBody}
            />
          )}

          {/* CONVERSATIONS list — W-57A 1034:240 / WD-57A 1182:6173 */}
          {/* W-57E calls the read-only list PAST CONVERSATIONS; WD-57E
              (1182:6404) keeps the green CONVERSATIONS label. */}
          <p
            className={`text-[11px] leading-[14px] font-semibold lg:mt-[26px] lg:text-[11px] lg:leading-[18px] ${
              accessEnded ? "text-lp-muted lg:hidden" : "text-lp-green"
            }`}
          >
            {accessEnded
              ? c.hub.pastConversationsLabel
              : c.hub.conversationsLabel}
          </p>
          {accessEnded && (
            <p className="hidden text-[11px] leading-[18px] font-semibold text-lp-green lg:mt-[26px] lg:block">
              {c.hub.conversationsLabel}
            </p>
          )}
          <div className="flex flex-col gap-[12px] lg:mt-[12px] lg:gap-[14px]">
            {CONVERSATIONS.map((conversation) => (
              <ConversationRow
                key={conversation.id}
                conversation={conversation}
                title={rowTitle(conversation)}
                meta={rowMeta(conversation)}
                to={rowLink(conversation)}
                interactive={!(accessEnded && conversation.id === "support")}
                /* W-57E 1034:498 drops the status pill on read-only rows;
                   WD-57E (1182:6410) keeps it, so it returns from lg up. */
                badgeDesktopOnly={accessEnded}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
