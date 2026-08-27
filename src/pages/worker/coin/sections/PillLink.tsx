import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface PillProps {
  to: string;
  variant?: "primary" | "outline";
  /** Mock pill heights vary per screen (46px footer, 48px "Done", 44px WD-60V). */
  heightClass?: string;
  className?: string;
  children: ReactNode;
}

/* Coin action pills. Mobile is the 350x46 body button every W-60x frame
   shares (1186:316 / 1186:348 / 1186:465): radius 14, 12px/16 semibold
   label, #0c5941 fill or a white #d9e1dc-bordered outline with a green
   label. Desktop keeps the WD-60 sizes (220-240x46 outline, #056b54 filled,
   radius 12, 13px label). */
export function PillLink({
  to,
  variant = "outline",
  heightClass = "h-[46px]",
  className = "",
  children,
}: PillProps) {
  const tone =
    variant === "primary"
      ? "bg-lp-button text-white hover:bg-lp-green"
      : "border border-lp-line bg-white text-lp-green hover:border-lp-green";
  return (
    <Link
      to={to}
      className={`flex ${heightClass} items-center justify-center rounded-[14px] text-[12px] leading-[16px] font-semibold lg:rounded-[12px] lg:text-[13px] lg:leading-normal ${tone} ${className}`}
    >
      {children}
    </Link>
  );
}
