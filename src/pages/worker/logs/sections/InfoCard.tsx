interface InfoCardProps {
  title: string;
  body: string;
  /** WD-61O "Akses selalu eksplisit" uses an ink title on desktop; mobile
   *  keeps every card title green (#096145) per W-61A/B/C/H/J/O. */
  tone?: "green" | "ink";
  /** sm = 1012x84 (WD-61A parity note, WD-61C privacy notice);
   *  md = 1012x88 (WD-61B privacy notice, WD-61O cards). */
  size?: "sm" | "md";
  /** Mobile fill. mint = privacy / confirmation cards (#e8f5ed),
   *  white = W-61J/Y empty, W-61N disclaimer, W-61O rule card,
   *  amber = offline notices (#fef6d6), red = save failures (#fcedeb). */
  fill?: "mint" | "white" | "amber" | "red";
  /** W-61AN offline-draft notice (1196:624): a 13px ink title over an 11px
   *  body instead of the 11px green / 10px card default. */
  lead?: boolean;
  className?: string;
}

/* Mobile card chassis (W-61A · 1167:276, W-61C · 1167:297, W-61H · 1167:442,
   W-61J · 1167:517, W-61O · 1167:733/742): 350px wide, radius 16, 1px #d6e0d9,
   14px side / 12px vertical padding, an 11px semibold #096145 title and a 10px
   #596b61 body 6px under it.
   Desktop keeps the WD-61 mint card (#f2f9f5): the title sits in a 22px box
   10px (sm) / 12px (md) down from the top and the 12px body in a 44px (sm) /
   36px (md) box under it, 18px in from the left. */
export function InfoCard({
  title,
  body,
  tone = "green",
  size = "md",
  fill = "mint",
  lead = false,
  className = "",
}: InfoCardProps) {
  const box =
    size === "sm"
      ? "lg:min-h-[84px] lg:rounded-[12px] lg:pt-[9px] lg:pb-[7px]"
      : "lg:min-h-[90px] lg:rounded-[14px] lg:pt-[11px] lg:pb-[15px]";
  const bodyBox =
    size === "sm" ? "lg:mt-0 lg:leading-[44px]" : "lg:mt-[2px] lg:leading-[36px]";
  const titleSize = size === "sm" ? "lg:text-[13px]" : "lg:text-[14px]";
  const fillClasses =
    fill === "mint"
      ? "bg-lp-mint"
      : fill === "amber"
        ? "bg-[#fef6d6]"
        : fill === "red"
          ? "bg-[#fcedeb]"
          : "bg-white";

  return (
    <div
      className={`rounded-[16px] border border-lp-line px-[14px] py-[12px] lg:bg-lp-tint lg:px-[17px] ${fillClasses} ${box} ${className}`}
    >
      <p
        className={`font-semibold lg:leading-[22px] ${
          lead
            ? "text-[13px] leading-[18px] text-lp-ink"
            : "text-[11px] leading-[15px] text-lp-green"
        } ${titleSize} ${tone === "ink" ? "lg:text-lp-ink" : "lg:text-lp-green"}`}
      >
        {title}
      </p>
      <p
        className={`mt-[6px] text-lp-muted lg:text-[12px] ${
          lead ? "text-[11px] leading-[16px]" : "text-[10px] leading-[14px]"
        } ${bodyBox}`}
      >
        {body}
      </p>
    </div>
  );
}
