import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import type { SupportTopicId } from "../accountData";
import { SectionLabel } from "./SectionLabel";
import { SupportTopicSelector } from "./SupportTopicSelector";
import { AccountActionButton } from "./AccountButtons";

/* EM-19 "CONTACT SUPPORT" (1133:79…1133:86): 350x130 white card holding the
   Topic line, the Summary line, the attached-context line and the literal red
   warning against private Health / Stress / Life / family / eCoin content,
   then the dark 44px "Send support request" pill, whose label sits left at
   12px in rather than centred (1133:86 against 1133:85). The desktop frame lays the
   same fields out in `SupportDesktopPanels`, so the selected topic is owned
   by the page and shared between both renderings. */
export function SupportContactForm({
  topic,
  onTopicChange,
  submitting = false,
  offline = false,
  onSend,
}: {
  topic: SupportTopicId;
  onTopicChange: (topic: SupportTopicId) => void;
  submitting?: boolean;
  offline?: boolean;
  onSend: () => void;
}) {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <section>
      <SectionLabel>{c.support.contactSupport}</SectionLabel>

      <div className="mt-[9px] min-h-[130px] rounded-[10px] border border-[#d1e0d9] bg-white px-[12px] py-[13px] lg:mt-[16px] lg:min-h-0 lg:py-[12px]">
        <SupportTopicSelector
          value={topic}
          onChange={onTopicChange}
          disabled={submitting || offline}
        />
        <p className="mt-[10px] text-[9px] text-[#65746d]">
          {c.support.summaryLabel} · {c.support.summaryValue}
        </p>
        <p className="mt-[12px] text-[9px] text-[#65746d]">
          {c.support.contextLabel} · {c.support.contextValue}
        </p>
        <p className="mt-[20px] text-[9px] text-[#a62e1a]">
          {c.support.warning}
        </p>
      </div>

      <AccountActionButton
        tone="dark"
        align="start"
        disabled={submitting || offline}
        onClick={onSend}
        className="mt-[16px]"
      >
        {submitting ? c.support.sending : c.support.send}
      </AccountActionButton>
    </section>
  );
}
