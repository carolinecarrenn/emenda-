/** Standalone solid-green pill used where the mocks put the action outside
 *  its card — W-37D Retry, W-38E Open settings, W-38O Choose another type,
 *  W-38P View document. The mobile frames (803:48, 758:683, 803:118,
 *  863:216) draw it 48px tall with a 14px radius; desktop WD-37D 1024:1955
 *  tightens it to 44 x 12. */
export function ActionButton({
  label,
  onClick,
  className = "",
}: {
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-[48px] w-full items-center justify-center rounded-[14px] bg-brand text-[12px] font-semibold text-white hover:bg-brand-deep lg:h-[44px] lg:rounded-[12px] ${className}`}
    >
      {label}
    </button>
  );
}

/** The white companion pill — Figma 758:685 (muted hairline, 48px) and
 *  803:120 (green hairline, 46px). */
export function SecondaryButton({
  label,
  onClick,
  tone = "muted",
  className = "",
}: {
  label: string;
  onClick?: () => void;
  tone?: "muted" | "brand";
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-center rounded-[14px] border bg-white text-[12px] font-semibold text-brand hover:border-brand ${
        tone === "brand" ? "h-[46px] border-brand" : "h-[48px] border-[#d7e2dc]"
      } ${className}`}
    >
      {label}
    </button>
  );
}
