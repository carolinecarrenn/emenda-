import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { COMMUNICATION_COPY, fillCopy } from "../communication.copy";
import type { ConversationSummary } from "../communicationData";
import { useConversationTime } from "./communicationTime";

/* MD-06 "CONVERSATIONS" cards (1225:51–71): an 11px semibold #0c5941 caps
   heading over 610x76 rows, radius 10 — the selected row mint #e3f0e8, the
   rest white on #dbe3de. Each pairs a 13px #083d2d name with a 10px #65746d
   language tag, then the raw last message at 11px #141f1a beside the
   "14:23 · 1 unread" meta.
   EM-06 (797:42): 350x88 rows, radius 14, a 40px #06634f circular initial
   avatar, the role + language line, a 22px unread badge, and the unread row
   tinted #e8f5f0. The two mocks carry different rosters, so each surface
   gets its own list. */
export function ConversationList({
  mobile,
  desktop,
  selectedId,
  onSelect,
}: {
  mobile: ConversationSummary[];
  desktop: ConversationSummary[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const c = useSectionCopy(COMMUNICATION_COPY);
  const time = useConversationTime();

  const metaLabel = (conversation: ConversationSummary) => {
    if (conversation.meta === "unread") {
      return fillCopy(c.list.meta.unread, { count: conversation.unreadCount });
    }
    return conversation.meta === "followUp"
      ? c.list.meta.followUp
      : c.list.meta.read;
  };

  return (
    <section>
      <h2 className="hidden text-[11px] font-semibold text-brand uppercase lg:block">
        {c.list.conversations}
      </h2>

      {/* EM-06 · mobile roster */}
      <div className="space-y-[14px] lg:hidden">
        {mobile.map((conversation) => (
          <Link
            key={conversation.id}
            to={`/manager/communication/${conversation.id}`}
            className={`flex min-h-[88px] w-full items-start gap-[14px] rounded-[14px] border border-[#d6e3de] px-[14px] pt-[12px] pb-[9px] text-left ${
              conversation.unreadCount > 0 ? "bg-[#e8f5f0]" : "bg-white"
            }`}
          >
            {/* 994:2695 · the avatar sits 20px below the card edge, 7px
                lower than the name it stands beside. */}
            <span className="mt-[7px] flex size-[40px] shrink-0 items-center justify-center rounded-full bg-[#06634f] text-[11px] font-semibold text-white">
              {conversation.initials}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-semibold text-[#094033]">
                {conversation.name}
              </p>
              <p className="mt-[2px] text-[10px] text-[#6e8a82]">
                {conversation.mobileRoleLine}
              </p>
              <p className="mt-[5px] text-[11px] text-[#6e8a82]">
                {conversation.lastMessage}
              </p>
            </div>
            {/* 994:2700/2701 · the time sits at the card top, the unread
                badge 30px under it against the preview line. */}
            <div className="flex shrink-0 flex-col items-end gap-[31px]">
              <span className="text-[9px] text-[#6e8a82]">
                {time(conversation.timestamp)}
              </span>
              {conversation.unreadCount > 0 && (
                <span className="flex size-[22px] items-center justify-center rounded-[11px] bg-[#06634f] text-[9px] font-semibold text-white">
                  {conversation.unreadCount}
                </span>
              )}
            </div>
          </Link>
        ))}
        {mobile.length === 0 && <NoMatchRow label={c.list.noMatch} />}
      </div>

      {/* MD-06 · desktop roster */}
      <div className="hidden lg:mt-[7px] lg:block lg:space-y-[12px]">
        {desktop.map((conversation) => {
          const selected = conversation.id === selectedId;
          return (
            <button
              key={conversation.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onSelect(conversation.id)}
              className={`flex min-h-[76px] w-full flex-col rounded-[10px] border px-[18px] py-[13px] text-left ${
                selected
                  ? "border-[#e3f0e8] bg-[#e3f0e8]"
                  : "border-[#dbe3de] bg-white hover:border-brand"
              }`}
            >
              {/* 1225:53–56 · the meta text boxes are left-aligned inside
                  200px / 176px columns that stop 12px short of the card
                  padding, so the language sits at x660 and the time at x684. */}
              <div className="flex items-center">
                <p className="min-w-0 flex-1 truncate text-[13px] font-semibold text-brand-deep">
                  {conversation.name}
                </p>
                <p className="mr-[12px] w-[200px] shrink-0 text-[10px] font-semibold text-[#65746d]">
                  {conversation.languageTag}
                </p>
              </div>
              <div className="mt-[3px] flex items-center">
                <p className="min-w-0 flex-1 truncate text-[11px] text-[#141f1a]">
                  {conversation.lastMessage}
                </p>
                <p className="mr-[12px] w-[176px] shrink-0 text-[10px] text-[#65746d]">
                  {time(conversation.timestamp)} · {metaLabel(conversation)}
                </p>
              </div>
            </button>
          );
        })}
        {desktop.length === 0 && <NoMatchRow label={c.list.noMatch} />}
      </div>
    </section>
  );
}

function NoMatchRow({ label }: { label: string }) {
  return (
    <div className="rounded-[14px] border border-[#d6e3de] bg-white px-[14px] py-6 text-center text-[11px] text-[#6e8a82] lg:rounded-[10px] lg:border-[#dbe3de]">
      {label}
    </div>
  );
}
