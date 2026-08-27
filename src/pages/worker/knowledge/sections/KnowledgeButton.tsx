import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface KnowledgeButtonProps {
  /** Renders a router link when given, a <button> otherwise. */
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  /** Filled brand button (W-42/44/45) vs outlined white button (W-42B/43/46). */
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
}

/* Shared Knowledge action button. Mobile (W-42..W-46): full width, 48px tall,
   14px radius, 12px semibold label — filled #0c5941 on white text for the
   primary, white with a #d7e2dc hairline and green label for the secondary.
   Desktop keeps the section's 10px-radius 13px pill via `className`. */
export function KnowledgeButton({
  to,
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
  children,
}: KnowledgeButtonProps) {
  const tone =
    variant === "primary"
      ? "border border-brand bg-brand text-white hover:bg-lp-green lg:border-lp-button lg:bg-lp-button"
      : "border border-lp-line bg-white text-brand hover:border-lp-green lg:text-lp-green";
  const base = `flex h-[48px] w-full items-center justify-center rounded-[14px] text-[12px] font-semibold lg:rounded-[10px] lg:text-[13px] ${tone} ${className}`;

  if (to !== undefined) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={base}
    >
      {children}
    </button>
  );
}
