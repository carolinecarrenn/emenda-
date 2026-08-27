import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import { RECENT_SUPPORT_REQUEST } from "../accountData";
import { SectionLabel } from "./SectionLabel";

/* EM-19 "RECENT REQUEST" (1133:75…1133:78): 350x70 mint card — the raw
   ticket id beside the topic, then the sent-time / context / status caption.
   Sits 40px below the last help topic on a 9px label-to-card gap. */
export function SupportRecentRequest() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <section>
      <SectionLabel>{c.support.recentRequest}</SectionLabel>
      <div className="mt-[9px] min-h-[70px] rounded-[10px] border border-[#d1e0d9] bg-[#e6f4ed] px-[12px] py-[13px] lg:min-h-0">
        <p className="text-[10px] font-semibold text-brand-deep lg:text-[12px]">
          {RECENT_SUPPORT_REQUEST.ticketId} · {c.support.recentTopic}
        </p>
        <p className="mt-[7px] text-[9px] text-[#65746d] lg:text-[11px]">
          {c.support.recentCaption.replace(
            "{time}",
            RECENT_SUPPORT_REQUEST.sentAt,
          )}
        </p>
      </div>
    </section>
  );
}
