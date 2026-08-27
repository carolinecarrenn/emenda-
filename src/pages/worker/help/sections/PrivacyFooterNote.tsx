import { useHelpCopy } from "../help.copy";

/* WD-47 "Privacy note" (node 1182:58): 1012×64 pale-mint #f2f9f5 strip,
   radius 12, 13px #63756b copy inset 18px — the anti-phishing footer that
   anchors the help hub. Mobile W-47 drops the strip and sets the same copy
   as plain 11px/15px text on the canvas (node 899:57 — a 350x30 two-line
   block). */
export function PrivacyFooterNote() {
  const c = useHelpCopy();

  return (
    <div className="lg:flex lg:min-h-[64px] lg:items-center lg:rounded-[12px] lg:bg-lp-tint lg:px-[18px] lg:py-[12px]">
      <p className="text-[11px] leading-[15px] text-lp-muted lg:text-[13px] lg:leading-[19px]">
        {c.hub.privacyNote}
      </p>
    </div>
  );
}
