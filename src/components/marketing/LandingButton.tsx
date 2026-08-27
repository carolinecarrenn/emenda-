import type { ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "onDark" | "onDarkGhost";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-lp-button text-white shadow-lp-md hover:bg-lp-green hover:shadow-lp-lg",
  secondary:
    "border border-lp-line bg-white text-lp-green hover:border-lp-green hover:bg-lp-tint",
  onDark: "bg-white text-lp-green shadow-lp-lg hover:bg-lp-mint",
  onDarkGhost: "border border-white/25 text-white hover:bg-white/10",
};

const SIZES: Record<Size, string> = {
  md: "h-11 px-5 text-[14px]",
  lg: "h-[52px] px-7 text-[15px]",
};

const BASE =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-[14px] font-semibold transition-all duration-200 ease-standard focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lp-button";

/**
 * The landing page's single call-to-action primitive. Marketing CTAs point at
 * three kinds of target — an app route, an in-page anchor, or nothing at all
 * (the mockups) — so this renders a router <Link>, a plain <a>, or a <button>
 * depending on which prop it is given.
 */
export function LandingButton({
  to,
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}) {
  const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
