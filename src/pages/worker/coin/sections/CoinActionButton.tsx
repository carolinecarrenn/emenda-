import type { ReactNode } from "react";

interface CoinActionButtonProps {
  variant?: "primary" | "outline";
  onClick: () => void;
  className?: string;
  children: ReactNode;
}

/* The in-page <button> twin of PillLink — used where the action changes the
   redeem step instead of navigating (W-60M "Review redemption" 1186:316,
   W-60N "Use 100 Coin" 1186:346 and "Cancel" 1186:348). Same 350x46 mobile
   body button: radius 14, 12px/16 semibold label. */
export function CoinActionButton({
  variant = "primary",
  onClick,
  className = "",
  children,
}: CoinActionButtonProps) {
  const tone =
    variant === "primary"
      ? "bg-lp-button text-white hover:bg-lp-green"
      : "border border-lp-line bg-white text-lp-green hover:border-lp-green";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[46px] w-full items-center justify-center rounded-[14px] text-[12px] leading-[16px] font-semibold lg:h-[48px] lg:rounded-[12px] lg:text-[13px] lg:leading-normal ${tone} ${className}`}
    >
      {children}
    </button>
  );
}
