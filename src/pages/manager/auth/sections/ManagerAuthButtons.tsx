import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
}

/** Desktop fill of the pill. The MD-AUTH-01x split-screen and every state
 *  slab paint it #0c5941 (1235:14 / 1235:47 …); the white recovery cards
 *  MD-AUTH-02 / 03 / 03B / 04 paint the same pill #0b4f3f (1193:39 / 1193:58
 *  / 1193:71 / 1193:89). Mobile is #0b6b57 either way. */
export type ManagerAuthButtonTone = "panel" | "card";

const DESKTOP_FILL: Record<ManagerAuthButtonTone, string> = {
  panel: "lg:bg-[#0c5941] lg:disabled:bg-[#0c5941]",
  card: "lg:bg-[#0b4f3f] lg:disabled:bg-[#0b4f3f]",
};

/** Full-width dark-green pill CTA: mobile 350x44 r12 #0b6b57 with 12px
 *  semibold white label (842:1474); desktop MD pill r14 on #0c5941 (slabs) or
 *  #0b4f3f (recovery cards). The mobile disabled state is the #e0e8e5 /
 *  #6f8781 pill the frames draw for "Signing in…", "Sending code…",
 *  "Updating password…" and the locked "Try again in 14:32" (842:1490 / 1530
 *  / 1586 / 1664 / 1765). Desktop keeps the CTA at full strength while it
 *  waits — MD-AUTH-01A / 02A / 03A / 03G all draw "Verifying…",
 *  "Sending…", "Saving…" on the solid green pill, never dimmed. */
export function ManagerAuthPrimaryButton({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = "",
  heightClass = "h-[44px] lg:h-[48px]",
  tone = "panel",
}: ButtonProps & { heightClass?: string; tone?: ManagerAuthButtonTone }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${heightClass} flex w-full items-center justify-center rounded-[12px] bg-[#0b6b57] text-[12px] font-semibold text-white transition-colors duration-150 hover:bg-brand-deep disabled:cursor-not-allowed disabled:bg-[#e0e8e5] disabled:text-[#6f8781] disabled:hover:bg-[#e0e8e5] lg:rounded-[14px] lg:text-[13px] lg:font-bold lg:disabled:text-white ${DESKTOP_FILL[tone]} ${className}`}
    >
      {children}
    </button>
  );
}

/** White outline button used by the desktop recovery cards ("Back to login",
 *  "Demo invalid / expired code" — MD-AUTH-02 1193:41 / MD-AUTH-03A). */
export function ManagerAuthOutlineButton({
  children,
  onClick,
  disabled = false,
  type = "button",
  className = "",
  heightClass = "h-[44px] lg:h-[48px]",
}: ButtonProps & { heightClass?: string }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${heightClass} flex w-full items-center justify-center rounded-[12px] border border-[#d9e5e0] bg-white text-[12px] font-semibold text-[#0b6b57] transition-colors duration-150 hover:bg-[#f2f9f5] disabled:cursor-not-allowed disabled:opacity-60 lg:rounded-[14px] lg:border-[#d9e1dc] lg:text-[13px] lg:font-bold lg:text-[#0b4f3f] ${className}`}
    >
      {children}
    </button>
  );
}

/** Green 11px semibold text link ("Forgot password?", "Back to sign in",
 *  "Resend code", "Cancel reset"). */
export function ManagerAuthTextLink({
  children,
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer text-[11px] font-semibold text-[#0b6b57] hover:text-brand-deep disabled:cursor-not-allowed disabled:opacity-60 lg:text-[13px] lg:font-normal lg:text-[#0b4f3f] ${className}`}
    >
      {children}
    </button>
  );
}
