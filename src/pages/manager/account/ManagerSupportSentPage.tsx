import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "./account.copy";
import { AccountPageHeader } from "./sections/AccountPageHeader";
import { OutcomeHeadline } from "./sections/OutcomeHeadline";
import { SupportTicketCard } from "./sections/SupportTicketCard";
import { SupportRequestRows } from "./sections/SupportRequestRows";
import { SupportSentDesktop } from "./sections/SupportSentDesktop";
import { NoteCard } from "./sections/NoteCard";
import { AccountLinkButton } from "./sections/AccountButtons";

/** Support request sent — Figma EM-19A (761:3285) on mobile and MD-19A
 *  (1252:14037) on desktop. Mobile keeps the check headline, the mint ticket
 *  card, the REQUEST DETAILS rows and the PRIVACY CONFIRMATION card; desktop
 *  folds the same content into the centred outcome card of the MD frame. */
export function ManagerSupportSentPage() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="max-w-[1060px]">
      {/* MD-19A carries the standard page header above the outcome card
          (1252:14055/14056); EM-19A opens straight on the check headline. */}
      <div className="hidden lg:block">
        <AccountPageHeader
          title={c.supportSent.pageTitle}
          subtitle={c.supportSent.subtitle}
        />
      </div>

      <div className="lg:mt-[68px]">
        <SupportSentDesktop />
      </div>

      <div className="lg:hidden">
        <AccountPageHeader
          title={c.supportSent.pageTitle}
          subtitle={c.supportSent.subtitle}
        />

        <div className="mt-[26px]">
          <OutcomeHeadline title={c.supportSent.title} />
        </div>

        <div className="mt-[18px]">
          <SupportTicketCard />
        </div>

        <div className="mt-[24px]">
          <SupportRequestRows label={c.supportSent.requestDetails} />
        </div>

        <div className="mt-[16px]">
          <NoteCard
            tone="mint"
            className="min-h-[78px]"
            label={c.supportSent.privacyTitle}
          >
            <p>{c.supportSent.privacyBody}</p>
          </NoteCard>
        </div>

        <AccountLinkButton
          to="/manager/support"
          tone="outline"
          className="mt-[18px]"
        >
          {c.supportSent.backToSupport}
        </AccountLinkButton>
      </div>
    </div>
  );
}
