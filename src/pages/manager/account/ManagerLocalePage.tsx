import { useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "./account.copy";
import { AccountPageHeader } from "./sections/AccountPageHeader";
import { LocaleRows } from "./sections/LocaleRows";
import { LocaleDesktopCards } from "./sections/LocaleDesktopCards";
import { NoteCard } from "./sections/NoteCard";
import { AccountActionButton, AccountLinkButton } from "./sections/AccountButtons";
import { AccountDesktopNotePanel } from "./sections/AccountDesktopCard";
import { OfflineNotice } from "./sections/OfflineNotice";

/** Language · Locale · Timezone — Figma EM-18B (761:1240) on mobile and
 *  MD-18B (1223:215) on desktop. Display-only preferences: the Language row
 *  is the manager-side global switch (it persists and never resets the
 *  route), and the note states that audit and source timestamps are never
 *  rewritten. Desktop adds the "Back to Settings" companion button. */
export function ManagerLocalePage() {
  const state = useScreenState();
  const navigate = useNavigate();
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);
  const offline = state === "offline";

  return (
    <div className="max-w-[1060px]">
      <AccountPageHeader
        title={c.locale.title}
        subtitle={c.locale.subtitle}
        desktopTitle={c.locale.desktopTitle}
        desktopSubtitle={c.locale.desktopSubtitle}
      />

      {offline && (
        <div className="mt-[16px]">
          <OfflineNotice />
        </div>
      )}

      <div className="mt-[21px] lg:mt-[37px]">
        <div className="lg:hidden">
          <LocaleRows />
        </div>
        <LocaleDesktopCards />
      </div>

      <div className="mt-[18px] lg:mt-[28px]">
        <div className="lg:hidden">
          <NoteCard tone="mint" title={c.locale.noteTitle}>
            <p>{c.locale.noteBody}</p>
          </NoteCard>
        </div>
        <AccountDesktopNotePanel
          className="hidden lg:block"
          heightClass="h-[100px]"
          title={c.locale.noteTitle}
          body={c.locale.noteBody}
        />
      </div>

      <div className="mt-[26px] flex flex-col lg:mt-[40px] lg:flex-row lg:items-start lg:gap-[20px]">
        <AccountActionButton
          tone="dark"
          disabled={offline}
          onClick={() => navigate("/manager/settings?state=settings-saved")}
          className="lg:h-[42px] lg:justify-start lg:pl-[18px] lg:text-left lg:w-[300px]"
        >
          {c.locale.saveLocale}
        </AccountActionButton>
        <AccountLinkButton
          to="/manager/settings"
          tone="outline"
          className="mt-[10px] hidden lg:mt-0 lg:flex lg:h-[42px] lg:justify-start lg:pl-[18px] lg:text-left lg:w-[220px]"
        >
          {c.locale.backToSettings}
        </AccountLinkButton>
      </div>
    </div>
  );
}
