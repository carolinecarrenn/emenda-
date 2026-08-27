interface DetailFieldProps {
  label: string;
  value: string;
  /** Multi-line note bodies grow instead of staying on the single-line box. */
  multiline?: boolean;
  /** WD-61G / K / P print the NOTE body as plain text inside the detail card
   *  — the boxed input only exists on the mobile frames. */
  plainOnDesktop?: boolean;
}

/* Read-only field behind W-61F / 61G / 61K / 61P / 61M6 / 61O1.
   Mobile (W-61F · 1167:340): a 10px semibold #596b61 caption over a 50px white
   box (98px when multiline), radius 12, 1px #d6e0d9, 11px #141f1a value inset
   13px, the caption 7px above it.
   Desktop (WD-61F) keeps the 11px green caption over a 64px / 84px box with a
   13px value inset 15px. */
export function DetailField({
  label,
  value,
  multiline = false,
  plainOnDesktop = false,
}: DetailFieldProps) {
  /* WD-61G/K/P print the note straight onto the card — no box, no inset. */
  const boxClasses = plainOnDesktop
    ? "border border-lp-line bg-white px-[13px] lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0"
    : "px-[13px] border border-lp-line bg-white lg:px-[15px]";
  const sizeClasses = multiline
    ? plainOnDesktop
      ? "min-h-[98px] items-start py-[11px] lg:min-h-[54px] lg:py-0"
      : "min-h-[98px] items-start py-[11px] lg:min-h-[84px] lg:py-[15px]"
    : "min-h-[50px] items-center py-[8px] lg:min-h-[64px] lg:py-[10px]";

  return (
    <div>
      <p className="text-[10px] leading-[14px] font-semibold text-lp-muted lg:text-[11px] lg:leading-normal lg:text-lp-green">
        {label}
      </p>
      <div
        className={`mt-[7px] flex rounded-[12px] lg:mt-[6px] ${boxClasses} ${sizeClasses}`}
      >
        <p className="text-[11px] leading-[15px] text-lp-ink lg:text-[13px] lg:leading-[20px]">
          {value}
        </p>
      </div>
    </div>
  );
}
