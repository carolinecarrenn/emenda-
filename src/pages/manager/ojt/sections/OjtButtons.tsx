import type { ReactNode } from "react";
import { Link } from "react-router-dom";

/* Section 08 CTAs (EM-14 … EM-15A): 42px pill-radius-10 buttons.
   Primary = solid #083d2d white label · secondary = white with #ccded6
   hairline and #083d2d label. Full-width or paired 168px in the mock. */

/* `w-full` matters on <button>: a form control keeps intrinsic (fit-content)
   sizing even as a flex container, so without it EM-14B's full-width
   350px "Approve & Publish" would shrink to its label. */
const BASE =
  "flex h-[42px] w-full items-center justify-center rounded-[10px] border px-4 text-center text-[10px] font-semibold lg:h-[46px] lg:text-[12px]";
const PRIMARY = "border-[#ccded6] bg-[#083d2d] text-white hover:bg-brand";
const SECONDARY =
  "border-[#ccded6] bg-white text-[#083d2d] hover:border-brand";
const DISABLED =
  "border-[#ccded6] bg-[#eef3ef] text-[#8ba79b] cursor-not-allowed";

function classesFor(variant: "primary" | "secondary", disabled?: boolean) {
  if (disabled) return `${BASE} ${DISABLED}`;
  return `${BASE} ${variant === "primary" ? PRIMARY : SECONDARY}`;
}

export function OjtLinkButton({
  to,
  variant = "secondary",
  children,
}: {
  to: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
}) {
  return (
    <Link to={to} className={classesFor(variant)}>
      {children}
    </Link>
  );
}

export function OjtButton({
  onClick,
  variant = "secondary",
  disabled,
  children,
}: {
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={classesFor(variant, disabled)}
    >
      {children}
    </button>
  );
}

/** Paired CTA row: 2-up on the 390px mock, fixed-width row on desktop. */
export function OjtActionRow({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-[14px] lg:flex lg:[&>*]:w-[220px]">
      {children}
    </div>
  );
}

/** Desktop width of a CTA that stands on its own row. The 390px frames give
 *  it the full 350px column, which is exactly the paired row's width there
 *  (168 + 14 + 168); desktop keeps that identity by matching OjtActionRow's
 *  220 + 14 + 220, so a stacked CTA block holds one right edge instead of
 *  stepping in under the pair above it. */
export const OJT_SOLO_CTA = "lg:w-[454px]";
