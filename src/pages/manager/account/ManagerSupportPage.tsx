import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "./account.copy";
import type { SupportTopicId } from "./accountData";
import { AccountPageHeader } from "./sections/AccountPageHeader";
import { SupportHelpTopics } from "./sections/SupportHelpTopics";
import { SupportRecentRequest } from "./sections/SupportRecentRequest";
import { SupportContactForm } from "./sections/SupportContactForm";
import {
  SupportDesktopContactForm,
  SupportDesktopHelpTopics,
  SupportDesktopRecentRequest,
} from "./sections/SupportDesktopPanels";
import { SupportFailedView } from "./sections/SupportFailedView";
import { OfflineNotice } from "./sections/OfflineNotice";

/** Manager Support — Figma EM-19 (761:3185) on mobile and MD-19 (1252:13985)
 *  on desktop. Mobile stacks HELP TOPICS, the mint RECENT REQUEST card and
 *  the CONTACT SUPPORT form; desktop pairs the two reference panels on one
 *  row and gives the form its own full-width card with the Topic and Summary
 *  fields side by side. `?state=submitting` holds the sending button,
 *  `?state=failed` renders EM-19B / MD-19B, `?state=offline` blocks writes. */
export function ManagerSupportPage() {
  const state = useScreenState();
  const navigate = useNavigate();
  const [topic, setTopic] = useState<SupportTopicId>("accessWorkflow");
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  if (state === "failed") return <SupportFailedView />;

  const submitting = state === "submitting";
  const offline = state === "offline";
  const send = () => navigate("/manager/support/sent");

  return (
    <div className="max-w-[1060px]">
      <AccountPageHeader title={c.support.title} subtitle={c.support.subtitle} />

      {offline && (
        <div className="mt-[16px]">
          <OfflineNotice />
        </div>
      )}

      {/* MD-19 desktop — the two reference panels share one row above the
          full-width contact card (1252:14007 / 1252:14017 / 1252:14023). */}
      <div className="hidden lg:mt-[27px] lg:block">
        <div className="grid grid-cols-[520px_1fr] gap-[20px]">
          <SupportDesktopHelpTopics />
          <SupportDesktopRecentRequest />
        </div>

        <div className="mt-[30px]">
          <SupportDesktopContactForm
            topic={topic}
            onTopicChange={setTopic}
            submitting={submitting}
            offline={offline}
            onSend={send}
          />
        </div>

        <p className="mt-[16px] text-[11px] leading-[16px] text-[#65746d]">
          {c.support.footnote}
        </p>
      </div>

      {/* EM-19 mobile — the canonical stack */}
      <div className="lg:hidden">
        <div className="mt-[31px]">
          <SupportHelpTopics />
        </div>

        <div className="mt-[16px]">
          <SupportRecentRequest />
        </div>

        <div className="mt-[24px]">
          <SupportContactForm
            topic={topic}
            onTopicChange={setTopic}
            submitting={submitting}
            offline={offline}
            onSend={send}
          />
        </div>

        <p className="mt-[14px] text-[8px] text-[#65746d]">
          {c.support.footnote}
        </p>
      </div>
    </div>
  );
}
