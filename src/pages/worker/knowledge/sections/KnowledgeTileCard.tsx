import type { ComponentType } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

type TileIcon = ComponentType<{ size?: number; className?: string }>;

interface KnowledgeTileCardProps {
  to: string;
  icon: TileIcon;
  /** W-41 uses a different bare glyph than the desktop mint tile. */
  mobileIcon?: TileIcon;
  title: string;
  meta: string;
  /** W-41 action cards carry a trailing chevron; guidance cards do not. */
  chevron?: boolean;
  /** W-41 guidance cards reserve two title lines above the meta line. */
  twoLineTitle?: boolean;
  className?: string;
}

/* Shared card chassis. Desktop (WD-41/41B/42B): white 16px-radius card with a
   42px mint icon tile, 16px semibold title and 13px muted meta line. Mobile
   (W-41/41B/42B): 14px radius on a #d7e2dc hairline, 15px side padding, a
   bare 22px green glyph, a 13px title, a 10px meta line under a two-line
   title reserve (11px on the single-line action cards) and — on action
   cards — a green chevron on the right edge, no mint tile. */
export function KnowledgeTileCard({
  to,
  icon: Icon,
  mobileIcon,
  title,
  meta,
  chevron = false,
  twoLineTitle = false,
  className = "",
}: KnowledgeTileCardProps) {
  const MobileIcon = mobileIcon ?? Icon;

  return (
    <Link
      to={to}
      className={`flex items-start gap-[14px] rounded-[14px] border border-lp-line bg-white px-[15px] pt-[13px] pb-[14px] hover:border-lp-green lg:gap-[18px] lg:rounded-[16px] lg:p-[17px] lg:pt-[18px] ${className}`}
    >
      <MobileIcon
        size={22}
        className="mt-[4px] shrink-0 text-lp-green lg:hidden"
      />
      <span className="hidden shrink-0 lg:mt-[2px] lg:flex lg:size-[42px] lg:items-center lg:justify-center lg:rounded-[12px] lg:bg-lp-mint">
        <Icon size={18} className="text-lp-green" />
      </span>
      <span className="min-w-0 flex-1">
        <span
          className={`block text-[13px] leading-[20px] font-semibold text-[#0e1f18] lg:min-h-0 lg:text-[16px] lg:leading-normal ${
            twoLineTitle ? "min-h-[40px]" : ""
          }`}
        >
          {title}
        </span>
        <span
          className={`mt-[4px] block leading-[17px] text-lp-muted lg:mt-[27px] lg:text-[13px] lg:leading-normal ${
            twoLineTitle ? "text-[10px]" : "text-[11px]"
          }`}
        >
          {meta}
        </span>
      </span>
      {chevron && (
        <ChevronRight
          size={18}
          className="mt-[18px] -ml-[10px] shrink-0 text-lp-green lg:hidden"
        />
      )}
    </Link>
  );
}
