import { Link } from "react-router-dom";

interface LogsActionProps {
  label: string;
  /** Renders a Link when set, otherwise a button. */
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "danger" | "danger-outline" | "offline";
  /** Desktop width from the mock, e.g. "lg:w-[270px]". Mobile is full-width. */
  widthClass?: string;
  heightClass?: string;
  className?: string;
  disabled?: boolean;
}

/* W-61/WD-61 action buttons: 46px tall, radius 14 and a 12px label on mobile
   (W-61H 1167:445); 44px, radius 12 and a 13px label on desktop.
   primary = #056b54 fill, outline = white over 1px #d1ded6 with a #054d3d
   label, danger = signal fill (delete confirmations). */
export function LogsAction({
  label,
  to,
  onClick,
  variant = "primary",
  widthClass = "lg:w-[240px]",
  heightClass = "h-[46px] lg:h-[44px]",
  className = "",
  disabled = false,
}: LogsActionProps) {
  const variantClasses =
    variant === "primary"
      ? "bg-lp-button text-white hover:bg-lp-green"
      : variant === "offline"
        ? /* W-61U/V/W "Tambah draft offline" — a muted #c7d6cf fill with the
             green label; nothing is disabled, the note just becomes a draft. */
          "border border-lp-line bg-[#c7d6cf] text-lp-green hover:bg-lp-mint"
        : variant === "danger"
        ? "bg-signal text-white hover:bg-[#b23f2f]"
        : variant === "danger-outline"
          ? /* WD-61G/K/P "Hapus catatan" — white over a red hairline on
               desktop; W-61G/P (1167:402) keeps the plain green outline on
               mobile. */
            "border border-lp-line bg-white text-lp-green hover:border-lp-green lg:border-[#d8776b] lg:text-[#c0392b] lg:hover:border-[#c0392b]"
          : "border border-lp-line bg-white text-lp-green hover:border-lp-green";
  const base = `flex ${heightClass} w-full items-center justify-center rounded-[14px] px-5 text-center text-[12px] font-semibold lg:rounded-[12px] lg:text-[13px] ${variantClasses} ${widthClass} ${className}`;

  if (to !== undefined && !disabled) {
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
      className={`${base} ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {label}
    </button>
  );
}
