import { Link } from "react-router-dom";

/** Solid dark-green column-width action (52px tall) from WD-32F/WD-33 —
 *  520px on desktop, matching the section's left grid column. */
export function PrimaryButton({
  label,
  to,
  onClick,
  disabled,
  busy = false,
  sizeClass = "h-[48px] rounded-[13px] lg:h-[52px] lg:rounded-[12px]",
  className = "",
}: {
  label: string;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
  /** In-flight save: WD-32H / WD-33E draw "Saving…" at full #08664d, so the
   *  button goes inert without the disabled tint. */
  busy?: boolean;
  /** Height + radius pair, so mobile frames can differ from the WD- ones. */
  sizeClass?: string;
  className?: string;
}) {
  const base = `flex w-full items-center justify-center bg-[#08664d] text-[13px] font-semibold text-white hover:bg-[#0b6b57] lg:w-[520px] ${sizeClass} ${className}`;
  if (to && !disabled) {
    return (
      <Link to={to} className={base}>
        {label}
      </Link>
    );
  }
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${base} disabled:cursor-not-allowed ${
        busy ? "disabled:bg-[#08664d]" : "disabled:bg-[#8fbcab]"
      }`}
    >
      {label}
    </button>
  );
}

/** White column-width secondary action (Cancel on WD-33N). */
export function SecondaryButton({
  label,
  to,
  onClick,
  sizeClass = "h-[48px] rounded-[13px] lg:h-[52px] lg:rounded-[12px]",
  className = "",
}: {
  label: string;
  to?: string;
  onClick?: () => void;
  /** Height + radius pair, so mobile frames can differ from the WD- ones. */
  sizeClass?: string;
  className?: string;
}) {
  const base = `flex w-full items-center justify-center border border-[#d6e0da] bg-white text-[13px] font-semibold text-[#08664d] hover:border-[#08664d] lg:w-[520px] ${sizeClass} ${className}`;
  if (to) {
    return (
      <Link to={to} className={base}>
        {label}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={base}>
      {label}
    </button>
  );
}
