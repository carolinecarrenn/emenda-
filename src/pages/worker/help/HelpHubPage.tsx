import { Link } from "react-router-dom";
import {
  ChevronLeft,
  CircleHelp,
  ContactRound,
  KeyRound,
  List,
} from "lucide-react";
import { useScreenState } from "@/hooks/useScreenState";
import { useHelpCopy } from "./help.copy";
import { HELP_LINKS } from "./helpMock";
import { HelpCard } from "./sections/HelpCard";
import { HelpSearchField } from "./sections/HelpSearchField";
import { HubOffline } from "./sections/HubOffline";
import { PrivacyFooterNote } from "./sections/PrivacyFooterNote";

/** Help & Support hub (Figma WD-47 node 1182:3 · offline WD-47A node 1182:61;
 *  mobile W-47 node 899:3). "Headless home" breadcrumb · 34px H1 · subtitle ·
 *  1012px search field · Contact support + Knowledge & Q&A cards · QUICK HELP
 *  label with Account & access recovery + Emergency information · mint
 *  anti-phishing footer strip. */
export function HelpHubPage() {
  const state = useScreenState();
  const c = useHelpCopy();
  const offline = state === "offline";

  return (
    <div className="max-w-[1012px] pt-2 lg:pt-[2px]">
      {/* W-47 draws the back chevron after the label inside a 170px row
          (node 899:58/899:60); WD-47 is the bare text breadcrumb. */}
      <Link
        to={HELP_LINKS.headlessHome}
        className="inline-flex w-[170px] items-center text-[13px] font-semibold text-lp-green hover:text-lp-button lg:w-auto lg:leading-[26px]"
      >
        {c.hub.breadcrumb}
        <ChevronLeft
          size={20}
          strokeWidth={1.8}
          className="ml-auto shrink-0 lg:hidden"
        />
      </Link>
      <h1 className="mt-[14px] text-[22px] font-semibold text-[#083d2d] lg:mt-[12px] lg:font-bold lg:text-[34px] lg:leading-[54px] lg:text-lp-ink">
        {c.hub.title}
      </h1>
      <p className="mt-[14px] text-[12px] text-lp-muted lg:mt-[4px] lg:text-[14px] lg:leading-[34px]">
        {offline ? c.hub.offlineSubtitle : c.hub.subtitle}
      </p>

      {offline ? (
        <HubOffline />
      ) : (
        <>
          <div className="mt-[43px] lg:mt-[10px]">
            <HelpSearchField />
          </div>

          {/* WD-47 action row — nodes 1182:46 / 1182:49 */}
          <div className="mt-[20px] grid gap-[12px] lg:mt-[24px] lg:max-w-[1006px] lg:grid-cols-2 lg:gap-x-[22px]">
            <HelpCard
              to={HELP_LINKS.contact}
              icon={CircleHelp}
              title={c.hub.contactTitle}
              desc={c.hub.contactDesc}
              chevron
            />
            <HelpCard
              to={HELP_LINKS.knowledge}
              icon={List}
              title={c.hub.knowledgeTitle}
              desc={c.hub.knowledgeDesc}
              chevron
            />
          </div>

          {/* WD-47 QUICK HELP group — nodes 1200:256 / 1182:52 / 1182:55 */}
          <p className="mt-[27px] text-[10px] font-semibold text-lp-muted lg:mt-[16px] lg:text-[11px] lg:leading-[18px] lg:text-lp-green">
            {c.hub.quickHelp}
          </p>
          <div className="mt-[12px] grid gap-[12px] lg:mt-[8px] lg:max-w-[1006px] lg:grid-cols-2 lg:gap-x-[22px]">
            <HelpCard
              to={HELP_LINKS.accountRecovery}
              icon={KeyRound}
              title={c.hub.recoveryTitle}
              desc={c.hub.recoveryDesc}
              quickHelp
            />
            <HelpCard
              to={HELP_LINKS.emergency}
              icon={ContactRound}
              title={c.hub.emergencyTitle}
              desc={c.hub.emergencyDesc}
              quickHelp
            />
          </div>

          <div className="mt-[21px] lg:mt-[32px]">
            <PrivacyFooterNote />
          </div>
        </>
      )}
    </div>
  );
}
