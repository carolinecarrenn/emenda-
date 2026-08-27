import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface CoinPageHeaderProps {
  crumb: string;
  crumbTo: string;
  title: string;
  /** Several W-60x app bars carry the section name ("Emenda Coin") while the
   *  desktop twin sets a page H1 ("Coin history"); pass both when they differ. */
  mobileTitle?: string;
  subtitle?: string;
  /** WD-60C carries no Subtitle node — the loading line is a card instead,
   *  so the mobile W-60C subtitle is suppressed above lg. */
  subtitleMobileOnly?: boolean;
}

/* Shared Coin page head. Desktop (Figma WD-60 nodes 1186:1400/1401/1402):
   13px semibold green breadcrumb · 32px bold #0f1f1a title · 14px gray
   subtitle. Mobile uses the "Coin header" app bar every W-60x frame shares
   (node 1151:257): a white 42px bar at y=40 with the 44x32 back target on
   the left and the centred 16px title, then the 11px subtitle at y=96. */
export function CoinPageHeader({
  crumb,
  crumbTo,
  title,
  mobileTitle,
  subtitle,
  subtitleMobileOnly = false,
}: CoinPageHeaderProps) {
  return (
    <>
      {/* W-60 node 1151:257 — mobile app bar */}
      <div className="relative flex h-[42px] items-center bg-white lg:hidden">
        <Link
          to={crumbTo}
          aria-label={crumb}
          className="flex h-[32px] w-[44px] items-center justify-center text-lp-green hover:text-lp-button"
        >
          <ChevronLeft aria-hidden className="size-[20px]" strokeWidth={2} />
        </Link>
        <span className="pointer-events-none absolute inset-x-0 text-center text-[16px] leading-[22px] font-semibold text-lp-ink">
          {mobileTitle ?? title}
        </span>
      </div>

      <Link
        to={crumbTo}
        className="hidden text-[13px] font-semibold text-lp-green hover:text-lp-button lg:inline"
      >
        {crumb}
      </Link>
      <h1 className="hidden max-w-[900px] text-[24px] leading-[1.2] font-bold text-lp-ink lg:mt-[18px] lg:block lg:text-[32px]">
        {title}
      </h1>
      {subtitle !== undefined && (
        <p
          className={`mt-[14px] max-w-[930px] text-[11px] leading-[15px] text-lp-muted lg:mt-[19px] lg:text-[14px] lg:leading-[20px] ${subtitleMobileOnly ? "lg:hidden" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </>
  );
}
