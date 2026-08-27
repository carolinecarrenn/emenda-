import { useHelpCopy } from "../help.copy";

/* WD-48 "Privacy card" right rail (node 1182:165 / 1182:224): 284×250 pale
   mint #f2f9f5 card, radius 16, border #d1ded6, inset 17px — 11px semibold
   #054d3d eyebrow, 18px semibold #0f1f1a headline, 13px #63756b body.
   While the topic overlay is open (WD-48F node 1182:531) the card shrinks to
   220px and swaps in the shorter copy variant. Desktop only; mobile W-48 uses
   the inline mint note instead. */
interface PrivateSupportRailProps {
  /** WD-48F copy variant shown behind the Support topic overlay. */
  overlayVariant?: boolean;
}

export function PrivateSupportRail({
  overlayVariant = false,
}: PrivateSupportRailProps) {
  const c = useHelpCopy();

  return (
    <aside
      className={`hidden rounded-[16px] border border-lp-line bg-lp-tint p-[18px] lg:mt-[26px] lg:block ${
        overlayVariant ? "lg:min-h-[220px]" : "lg:min-h-[250px]"
      }`}
    >
      <p className="text-[11px] leading-[20px] font-semibold text-lp-green">
        {c.contact.railEyebrow}
      </p>
      <p className="mt-[8px] max-w-[230px] text-[18px] leading-[25px] font-semibold text-lp-ink">
        {overlayVariant ? c.contact.railTitleOverlay : c.contact.railTitle}
      </p>
      <p className="mt-[25px] max-w-[230px] text-[13px] leading-[16px] text-lp-muted">
        {overlayVariant ? c.contact.railBodyOverlay : c.contact.railBody}
      </p>
    </aside>
  );
}
