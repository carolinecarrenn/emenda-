import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { SENT_ROWS, SENT_SUPPORT_TICKET } from "../accountData";
import { AccountDesktopLinkButton } from "./AccountButtons";
import {
  OutcomeDesktopActions,
  OutcomeDesktopCard,
  OutcomeDesktopPanel,
  OutcomeDesktopPill,
} from "./OutcomeDesktopCard";

/* MD-19A Support Request Sent (1252:14059…1252:14068): one 840x400 white card
   centred in the content column — the 296x38 mint "SENT" pill (1252:14060),
   the 24px centred headline (1252:14062), the raw ticket id (1252:14063), the
   centred request summary block (1252:14064), the 720x64 mint context strip
   (1252:14065/14066) and the dark 160x40 "Back to Support" pill 36px under
   the card (1252:14067). The canonical EM-19A rows (Topic, Subject,
   Organization, Facility, Manager role) all stay — the desktop frame simply
   centres them as one block. */
export function SupportSentDesktop() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="hidden lg:block">
      <OutcomeDesktopCard
        width="w-[840px]"
        minHeight="min-h-[400px]"
        padding="px-[60px]"
      >
        <OutcomeDesktopPill>{c.supportSent.desktopBadge}</OutcomeDesktopPill>

        <h2 className="mt-[30px] text-center text-[24px] leading-[30px] font-bold text-brand-deep">
          {c.supportSent.title}
        </h2>
        <p className="mt-[24px] text-center text-[15px] leading-[20px] font-semibold text-brand-deep">
          {SENT_SUPPORT_TICKET.ticketId}
        </p>

        <div className="mt-[22px] space-y-[3px] text-center text-[13px] leading-[19px] text-[#65746d]">
          {SENT_ROWS.map((row) => (
            <p key={row.id}>
              {c.supportSent.rows[row.id]} ·{" "}
              {row.value ??
                (row.id === "topic"
                  ? c.supportSent.topicValue
                  : c.supportSent.subjectValue)}
            </p>
          ))}
          <p>{c.supportSent.ticketStatus}</p>
        </div>

        <OutcomeDesktopPanel tone="mint" className="mt-[30px]">
          <p className="text-center text-[13px] leading-[19px] text-[#65746d]">
            {c.supportSent.privacyTitle} · {c.supportSent.privacyBody}
          </p>
        </OutcomeDesktopPanel>
      </OutcomeDesktopCard>

      <OutcomeDesktopActions className="mx-auto mt-[36px] w-[840px] justify-start px-[60px]">
        <AccountDesktopLinkButton
          to="/manager/support"
          tone="dark"
          className="w-[160px]"
        >
          {c.supportSent.backToSupport}
        </AccountDesktopLinkButton>
      </OutcomeDesktopActions>
    </div>
  );
}
