import {
  ManagerAuthBanner,
  type ManagerAuthBannerTone,
} from "./ManagerAuthCallouts";
import {
  ManagerAuthOutlineButton,
  ManagerAuthPrimaryButton,
  ManagerAuthTextLink,
} from "./ManagerAuthButtons";

interface ManagerAuthResultPanelProps {
  tone: ManagerAuthBannerTone;
  bannerTitle: string;
  bannerBody: string;
  /** 02D / 02E draw the 84px banner; every other frame is 78px. */
  bannerHeightClass?: string;
  ctaLabel: string;
  onCta: () => void;
  /** 03I offers the white outline pill instead of the green one. */
  ctaVariant?: "primary" | "outline";
  /** Banner-to-CTA gap: 26–40px depending on the frame. */
  ctaGapClass?: string;
  /** Left-aligned text link 20px under the CTA (absent on 01E / 03H / 04). */
  linkLabel?: string;
  onLink?: () => void;
}

/** The banner-over-CTA body every terminal EM-AUTH state shares — 01D Offline
 *  (842:1541-1546), 01E Access Verified (842:1555-1559), 02B Reset Code Sent
 *  (842:1597-1602), 02E No Work Email (842:1903-1908), 03C Code Expired
 *  (842:1695-1700), 03E Update Failed (842:1732-1737), 03F Offline
 *  (842:1746-1751), 03H New Code Sent (842:1775-1779), 03I Too Many Requests
 *  (842:1788-1792) and 04 Password Updated (842:1801-1805). The form is not
 *  removed by these states — it is the base screen that still carries it. */
export function ManagerAuthResultPanel({
  tone,
  bannerTitle,
  bannerBody,
  bannerHeightClass,
  ctaLabel,
  onCta,
  ctaVariant = "primary",
  ctaGapClass = "mt-[30px]",
  linkLabel,
  onLink,
}: ManagerAuthResultPanelProps) {
  const Cta =
    ctaVariant === "outline"
      ? ManagerAuthOutlineButton
      : ManagerAuthPrimaryButton;

  return (
    <div className="lg:w-[641px]">
      <ManagerAuthBanner
        tone={tone}
        title={bannerTitle}
        body={bannerBody}
        heightClass={bannerHeightClass}
      />
      <Cta className={ctaGapClass} onClick={onCta}>
        {ctaLabel}
      </Cta>
      {linkLabel ? (
        <div className="mt-[20px] flex h-[24px] items-start">
          <ManagerAuthTextLink onClick={onLink}>
            {linkLabel}
          </ManagerAuthTextLink>
        </div>
      ) : null}
    </div>
  );
}
