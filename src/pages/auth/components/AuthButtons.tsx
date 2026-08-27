import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  /** Background + radius overrides (screens vary: #08745e r15, #0a8266 r14, #0c5941 r16, #0b5d4c r14). */
  className?: string;
  textClass?: string;
  /** W-11 draws its two buttons 50px tall on mobile; everything else is 54. */
  heightClass?: string;
  /** Disabled fill + radius — screens whose button is r14 keep r14 when idle. */
  disabledClass?: string;
}

/** Full-width 54px primary pill (Figma "Button · …"), 14px semibold white label. */
export function AuthPrimaryButton({
  children,
  onClick,
  disabled = false,
  className = "rounded-[15px] bg-[#08745e] hover:bg-[#0b5d4c]",
  textClass = "text-[14px]",
  heightClass = "h-[54px] lg:h-[56px]",
  disabledClass = "rounded-[15px] bg-[#c2d1c9]",
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex w-full items-center justify-center font-semibold text-white ${heightClass} ${
        disabled ? `cursor-not-allowed ${disabledClass}` : `cursor-pointer ${className}`
      } ${textClass}`}
    >
      {children}
    </button>
  );
}

/** Full-width 54px white outline secondary button with green label. */
export function AuthSecondaryButton({
  children,
  onClick,
  disabled = false,
  className = "rounded-[15px] border-[#d4e1dd] text-[#08745e]",
  heightClass = "h-[54px] lg:h-[56px]",
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex w-full cursor-pointer items-center justify-center border bg-white text-[14px] font-semibold hover:bg-lp-tint disabled:cursor-not-allowed disabled:opacity-60 ${heightClass} ${className}`}
    >
      {children}
    </button>
  );
}

interface TextLinkProps {
  children: ReactNode;
  onClick?: () => void;
  centered?: boolean;
  className?: string;
  /** W-xx links are 13px on mobile; W-05/W-08 drop to 12px. */
  sizeClass?: string;
}

/** Green 13px (mobile) / 14px (desktop) text link, no underline. */
export function AuthTextLink({
  children,
  onClick,
  centered = true,
  className = "font-medium text-[#08745e]",
  sizeClass = "text-[13px] leading-[16px] lg:text-[14px] lg:leading-[17px]",
}: TextLinkProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`block cursor-pointer hover:text-[#0b5d4c] ${sizeClass} ${
        centered ? "w-full text-center" : "text-left"
      } ${className}`}
    >
      {children}
    </button>
  );
}
