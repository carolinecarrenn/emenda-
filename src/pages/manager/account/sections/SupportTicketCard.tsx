import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { SENT_SUPPORT_TICKET } from "../accountData";

/* EM-19A ticket card (1133:91…1133:93): 350x80 mint card whose title is the
   raw ticket id (SUP-DEMO-2026-021) over "Submitted · awaiting support
   review". */
export function SupportTicketCard() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="min-h-[80px] rounded-[10px] border border-[#d1e0d9] bg-[#e6f4ed] px-[12px] py-[13px] lg:min-h-0">
      <p className="text-[11px] font-semibold text-brand-deep lg:text-[13px]">
        {SENT_SUPPORT_TICKET.ticketId}
      </p>
      <p className="mt-[10px] text-[9px] text-[#65746d] lg:text-[11px]">
        {c.supportSent.ticketStatus}
      </p>
    </div>
  );
}
