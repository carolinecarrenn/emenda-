interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

/** Full-width dark-green primary pill (54px, radius 14, 14px label —
 *  Figma W-12..W-17 mobile / WD-12..WD-17 desktop). */
export function PrimaryButton({ label, onClick, disabled = false }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`flex h-[54px] w-full items-center justify-center rounded-[14px] text-[14px] font-semibold lg:text-[14.7px] ${
        disabled
          ? "cursor-not-allowed bg-[#eef2ef] text-[#98a39c]"
          : "bg-brand text-white hover:bg-brand-deep"
      }`}
    >
      {label}
    </button>
  );
}

type SecondaryTone = "outline" | "tinted" | "white";

/** 50px secondary button. Tones per Figma:
 *  outline = WD-16 "Back to EMENDA ID" (border #d9e1dc, text #084734)
 *  tinted  = WD-15 "Edit identity details" (bg #f7faf8, border #c7d4cf)
 *  white   = WD-17B "Cancel" (bg white, border #d6e1db, text #0c5941) */
export function SecondaryButton({
  label,
  onClick,
  tone = "outline",
}: ButtonProps & { tone?: SecondaryTone }) {
  const toneClass =
    tone === "tinted"
      ? "border-[#c7d4cf] bg-[#f7faf8] text-[13px] text-brand-deep lg:text-[13.7px]"
      : tone === "white"
        ? "border-[#d6e1db] bg-white text-[14px] text-brand lg:text-[14.7px]"
        : "border-line bg-transparent text-[13px] text-[#084734] lg:text-[13.7px]";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[50px] w-full items-center justify-center rounded-[14px] border font-semibold hover:bg-white ${toneClass}`}
    >
      {label}
    </button>
  );
}

/** Centered bare green text link ("Do this later" / "Back"). */
export function TextLinkButton({ label, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="block w-full text-center text-[13px] leading-[19px] font-semibold text-brand-deep hover:text-brand lg:text-[14px] lg:leading-[17px]"
    >
      {label}
    </button>
  );
}
