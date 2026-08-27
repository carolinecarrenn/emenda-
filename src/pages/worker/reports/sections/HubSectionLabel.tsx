/**
 * Mobile hub record-list micro-label — "WORK HISTORY" (W-54 972:134),
 * "CACHED WORK HISTORY" (W-54D 972:428), "RETAINED WORK HISTORY"
 * (W-54E 972:505), "RECENT WORK HISTORY" (W-54J 1024:2210).
 * Figma: 11px/14px semibold, uppercase, muted (#596b61). The desktop hub
 * draws the same label in the brand green.
 */
export function HubSectionLabel({ children }: { children: string }) {
  return (
    <h2 className="text-[11px] leading-[14px] font-semibold text-lp-muted uppercase lg:text-lp-green">
      {children}
    </h2>
  );
}
