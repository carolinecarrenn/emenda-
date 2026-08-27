import { BookText, ContactRound } from "lucide-react";
import { useHelpCopy } from "../help.copy";
import { HELP_LINKS } from "../helpMock";
import { HelpCard } from "./HelpCard";
import { SupportStateBanner } from "./SupportStateBanner";

/* W-47A Help & Support — Offline (mobile frame 899:63 · desktop WD-47A frame
   1182:61): amber banner "No internet connection. New support requests cannot
   be sent." above only two cards —
   Knowledge & Q&A ("Cached guidance may still be available") and Emergency
   information ("Saved on this device"). The search field, Contact support
   card, QUICK HELP label and the mint privacy strip are absent in this
   state. Mobile draws both cards in the 108px quick-help geometry (nodes
   899:82 / 899:89 — 22px glyph at 15/17, 13px title, 10px body, no chevron),
   with the banner 39px under the subtitle and the cards 20px under it. */
export function HubOffline() {
  const c = useHelpCopy();

  return (
    <div>
      <SupportStateBanner
        tone="hubOffline"
        message={c.hub.offlineBanner}
        className="mt-[39px] lg:mt-[12px]"
      />
      <div className="mt-[20px] grid gap-[12px] lg:mt-[16px] lg:max-w-[1006px] lg:grid-cols-2 lg:gap-x-[22px]">
        <HelpCard
          to={HELP_LINKS.knowledge}
          icon={BookText}
          title={c.hub.knowledgeTitle}
          desc={c.hub.knowledgeCachedDesc}
          quickHelp
        />
        <HelpCard
          to={HELP_LINKS.emergency}
          icon={ContactRound}
          title={c.hub.emergencyTitle}
          desc={c.hub.emergencySavedDesc}
          quickHelp
        />
      </div>
    </div>
  );
}
