import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import {
  HELP_TOPICS,
  MANAGER_IDENTITY,
  RECENT_SUPPORT_REQUEST,
  type SupportTopicId,
} from "../accountData";
import { AccountDesktopActionButton } from "./AccountButtons";
import { SupportTopicSelector } from "./SupportTopicSelector";

const PANEL =
  "rounded-[12px] border border-[#dbe3de] bg-white px-[22px] pt-[20px] pb-[22px]";
const CAPS =
  "text-[11px] leading-[16px] font-semibold tracking-[0.04em] text-[#65746d] uppercase";

/* MD-19 "HELP TOPICS" panel (1252:14007…1252:14016): a 440x250 white card
   whose four rows print the topic name on the left and its descriptor in the
   right column on a 44px pitch. The canonical EM-19 rows stay links into the
   module they explain, so the desktop row keeps the chevron. */
export function SupportDesktopHelpTopics() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <section className={`${PANEL} min-h-[250px]`}>
      <p className={CAPS}>{c.support.helpTopics}</p>
      <div className="mt-[18px]">
        {HELP_TOPICS.map((topic) => (
          <Link
            key={topic.id}
            to={topic.to}
            className="flex min-h-[44px] items-center gap-[12px] py-[4px] hover:text-brand"
          >
            <span className="w-[150px] shrink-0 text-[13px] leading-[19px] font-semibold text-brand-deep">
              {c.support.topics[topic.id].title}
            </span>
            <span className="min-w-0 flex-1 text-right text-[11px] leading-[16px] text-[#65746d]">
              {c.support.topics[topic.id].body}
            </span>
            <ChevronRight
              size={14}
              strokeWidth={2}
              className="shrink-0 text-[#0c513b]"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

/* MD-19 "RECENT REQUEST" panel (1252:14017…1252:14022): a 476x250 white card
   with the raw ticket id beside its topic, the sent/awaiting caption and the
   mint strip stating that no private worker content was included. */
export function SupportDesktopRecentRequest() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <section className={`${PANEL} min-h-[250px]`}>
      <p className={CAPS}>{c.support.recentRequest}</p>
      <p className="mt-[24px] text-[13px] leading-[19px] font-semibold text-brand-deep">
        {RECENT_SUPPORT_REQUEST.ticketId} · {c.support.recentTopic}
      </p>
      <p className="mt-[12px] text-[11px] leading-[16px] text-[#65746d]">
        {c.support.recentCaption.replace(
          "{time}",
          RECENT_SUPPORT_REQUEST.sentAt,
        )}
      </p>
      <div className="mt-[24px] flex min-h-[70px] items-center rounded-[10px] bg-[#e3f0e8] px-[18px] py-[16px]">
        <p className="text-[11px] leading-[16px] text-[#65746d]">
          {c.support.privacyStrip}
        </p>
      </div>
    </section>
  );
}

/* MD-19 "CONTACT SUPPORT" panel (1252:14023…1252:14035): a 940x280 white card
   with the Topic and Summary fields side by side on a 44px row, the
   CONTEXT INCLUDED lines on the left, the do-not-include warning on the right
   and the dark 180x40 send pill flush to the panel's right inset. */
export function SupportDesktopContactForm({
  topic,
  onTopicChange,
  submitting,
  offline,
  onSend,
}: {
  topic: SupportTopicId;
  onTopicChange: (topic: SupportTopicId) => void;
  submitting: boolean;
  offline: boolean;
  onSend: () => void;
}) {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);
  const locked = submitting || offline;

  const contextLines = [
    `${c.support.contextItems.organization} · ${MANAGER_IDENTITY.organization}`,
    `${c.support.contextItems.facility} · ${MANAGER_IDENTITY.facility}`,
    `${c.support.contextItems.managerRole} · ${MANAGER_IDENTITY.role}`,
    `${c.support.contextItems.currentModule} · ${c.support.title}`,
  ];

  return (
    <section className={`${PANEL} min-h-[280px]`}>
      <p className={CAPS}>{c.support.contactSupport}</p>

      <div className="mt-[22px] grid grid-cols-[406px_1fr] gap-[27px]">
        <div>
          <p className="text-[11px] leading-[16px] text-[#65746d]">
            {c.support.topicLabel}
          </p>
          <div className="mt-[8px] flex h-[44px] items-center rounded-[10px] border border-[#dbe3de] bg-[#f4f7f4] px-[16px]">
            <SupportTopicSelector
              value={topic}
              onChange={onTopicChange}
              disabled={locked}
              variant="field"
            />
          </div>
        </div>
        <div>
          <p className="text-[11px] leading-[16px] text-[#65746d]">
            {c.support.summaryLabel}
          </p>
          <div className="mt-[8px] flex h-[44px] items-center rounded-[10px] border border-[#dbe3de] bg-[#f4f7f4] px-[16px]">
            <p className="truncate text-[13px] leading-[19px] text-brand-deep">
              {c.support.summaryValue}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-[28px] grid grid-cols-[1fr_370px] gap-[27px]">
        <div>
          <p className={CAPS}>{c.support.contextLabel}</p>
          <div className="mt-[10px] space-y-[2px] text-[13px] leading-[19px] text-brand-deep">
            {contextLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end justify-between gap-[18px] pt-[26px]">
          <p className="text-[13px] leading-[19px] text-[#a62e1a]">
            {c.support.warning}
          </p>
          <AccountDesktopActionButton
            tone="dark"
            disabled={locked}
            onClick={onSend}
            className="w-[180px] whitespace-nowrap"
          >
            {submitting ? c.support.sending : c.support.send}
          </AccountDesktopActionButton>
        </div>
      </div>
    </section>
  );
}
