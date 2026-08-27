import { Link } from "react-router-dom";

interface CategoryCardProps {
  to: string;
  title: string;
  body: string;
  openLabel: string;
  /** W-61 fills the PRIVAT · HEALTH tile mint on mobile; WD-61 keeps it white. */
  mintOnMobile?: boolean;
}

/* WD-61 category tile (492x112, radius 16, 1px #d1ded6): the 16px semibold
   title sits in a 26px box 16px down, the 12px muted body in a 44px box at
   y=48, and the 88x34 "BUKA" chip is pinned 14px/24px from the top right.
   W-61 (mobile) shrinks the tile to 350x96 with a 15px title, drops the chip
   border and moves the action to a plain 12px green label on the title row. */
export function CategoryCard({
  to,
  title,
  body,
  openLabel,
  mintOnMobile = false,
}: CategoryCardProps) {
  return (
    <Link
      to={to}
      className={`relative block min-h-[96px] rounded-[14px] border border-lp-line px-[15px] pt-[17px] pb-[29px] hover:border-lp-green lg:h-[112px] lg:min-h-0 lg:rounded-[16px] lg:px-[19px] lg:pt-[15px] lg:pb-[19px] ${
        mintOnMobile ? "bg-lp-mint lg:bg-white" : "bg-white"
      }`}
    >
      <span className="block max-w-[250px] text-[15px] leading-[20px] font-semibold text-lp-ink lg:max-w-[340px] lg:text-[16px] lg:leading-[26px]">
        {title}
      </span>
      <span className="mt-[10px] block max-w-[318px] text-[13px] leading-[18px] text-lp-muted lg:mt-[6px] lg:max-w-[420px] lg:text-[12px] lg:leading-[44px]">
        {body}
      </span>
      <span className="absolute top-[19px] right-[15px] flex h-[16px] items-center justify-center text-[12px] font-semibold text-lp-green lg:top-[13px] lg:right-[23px] lg:h-[34px] lg:w-[88px] lg:rounded-[12px] lg:border lg:border-lp-line lg:bg-white lg:text-[13px]">
        {openLabel}
      </span>
    </Link>
  );
}
