import type { MouseEvent } from "react";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface LogsHeaderProps {
  /** Breadcrumb / eyebrow label. */
  crumb: string;
  /** Omit on the hub (WD-61 renders the eyebrow as plain text). */
  crumbTo?: string;
  onCrumbClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  title: string;
  subtitle: string;
  /** Mobile chevron target — defaults to crumbTo, then the Profile tab. */
  backTo?: string;
  /** W-61 hub sets the larger 12px subtitle; sub-screens use 11px. */
  hubSubtitle?: boolean;
}

/* Shared page head for every WD-61 screen.
   Desktop (WD-61 · 272/108 grid): 13px semibold #054d3d eyebrow in a 24px box,
   32px bold #0f1f1a H1 in a 48px box 12px below it, 14px #63756b subtitle in a
   40px box 4px below the H1.
   Mobile (W-61 · 1163:257): a white 350x42 header bar at y=40 — 32x28 back
   chevron centred on the left, 18px semibold title centred — with the subtitle
   14px under it (12px on the hub, 11px on every sub-screen). */
export function LogsHeader({
  crumb,
  crumbTo,
  onCrumbClick,
  title,
  subtitle,
  backTo,
  hubSubtitle = false,
}: LogsHeaderProps) {
  const back = backTo ?? crumbTo ?? "/worker/profile";
  const crumbClasses =
    "hidden text-[13px] leading-[24px] font-semibold text-lp-green lg:block";

  return (
    <>
      <div className="relative flex h-[42px] items-center justify-center bg-white lg:block lg:h-auto lg:bg-transparent">
        <Link
          to={back}
          onClick={onCrumbClick}
          aria-label={crumb}
          className="absolute left-0 flex h-[28px] w-[32px] items-center justify-center text-lp-green hover:text-lp-button lg:hidden"
        >
          <ChevronLeft size={20} strokeWidth={1.75} />
        </Link>

        {crumbTo ? (
          <Link
            to={crumbTo}
            onClick={onCrumbClick}
            className={`${crumbClasses} hover:text-lp-button`}
          >
            {crumb}
          </Link>
        ) : (
          <p className={crumbClasses}>{crumb}</p>
        )}

        <h1 className="truncate px-[42px] text-[18px] leading-[24px] font-semibold text-lp-ink lg:font-bold lg:mt-[12px] lg:max-w-[880px] lg:overflow-visible lg:px-0 lg:text-[32px] lg:leading-[48px] lg:whitespace-normal">
          {title}
        </h1>
      </div>

      <p
        className={`mt-[14px] text-lp-muted lg:mt-[4px] lg:max-w-[920px] lg:text-[14px] lg:leading-[40px] ${
          hubSubtitle
            ? "text-[12px] leading-[17px]"
            : "text-[11px] leading-[15px]"
        }`}
      >
        {subtitle}
      </p>
    </>
  );
}
