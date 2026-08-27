import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { AccountPageHeader } from "./AccountPageHeader";
import { StatusBadge } from "./StatusBadge";
import { SupportPreservedRows } from "./SupportPreservedRows";
import { NoteCard } from "./NoteCard";
import { AccountLinkButton } from "./AccountButtons";
import { SupportFailedDesktop } from "./SupportFailedDesktop";

/* EM-19B Support Request Failed (761:3324 · SEC10 layer 1133:115…1133:140):
   the "Request Failed" page header, the red "!" outcome badge, the peach
   summary card (350x84), the PRESERVED REQUEST rows, the cream SAFE RETRY
   bullets (350x92) and the stacked Try Again / Back to Support buttons.
   No support record is created on failure. */
export function SupportFailedView() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="max-w-[1060px]">
      <AccountPageHeader
        title={c.supportFailed.title}
        subtitle={c.supportFailed.subtitle}
      />

      <div className="lg:mt-[68px]">
        <SupportFailedDesktop />
      </div>

      <div className="lg:hidden">
        <div className="mt-[26px]">
          <StatusBadge label={c.supportFailed.badge} />
        </div>

        <div className="mt-[18px]">
          <NoteCard
            tone="alert"
            className="min-h-[84px] lg:min-h-0"
            title={c.supportFailed.summaryTitle}
          >
            <p>{c.supportFailed.summaryBody}</p>
          </NoteCard>
        </div>

        <div className="mt-[24px]">
          <SupportPreservedRows />
        </div>

        <div className="mt-[20px]">
          <NoteCard
            tone="caution"
            className="min-h-[92px] lg:min-h-0"
            label={c.supportFailed.retryTitle}
            bodyClassName="leading-[13px] lg:leading-[19px]"
          >
            <ul>
              {c.supportFailed.retryBullets.map((bullet) => (
                <li key={bullet}>· {bullet}</li>
              ))}
            </ul>
          </NoteCard>
        </div>

        <div className="mt-[18px] flex flex-col gap-[10px]">
          <AccountLinkButton to="/manager/support?state=submitting" tone="dark">
            {c.supportFailed.tryAgain}
          </AccountLinkButton>
          <AccountLinkButton to="/manager/support" tone="outline">
            {c.supportFailed.backToSupport}
          </AccountLinkButton>
        </div>

        <p className="mt-[14px] text-[9px] text-[#65746d]">
          {c.supportFailed.footnote}
        </p>
      </div>
    </div>
  );
}
