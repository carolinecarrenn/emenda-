interface AvailableBalanceBarProps {
  title: string;
  value: string;
  /** WD-60L (node 1205:1195) draws the same bar as a compact 82px card at
   *  radius 14 whose 15px title sits over a 13px muted value line instead of
   *  the WD-60U display numeral. */
  variant?: "display" | "compact";
}

/* Slim mint balance bar used by WD-60U (1197:4), WD-60V (1197:24) and the
   WD-60L rewards catalog: 14px semibold green title over a 22px bold green
   value line, radius 18. */
export function AvailableBalanceBar({
  title,
  value,
  variant = "display",
}: AvailableBalanceBarProps) {
  if (variant === "compact") {
    /* W-60L "Catalog balance" (1190:261): 350x66, radius 14, 14/11px padding,
       an 11px/15 semibold ink title over a 10px/14 muted value at a 4px gap. */
    return (
      <div className="rounded-[14px] border border-lp-line bg-lp-tint px-[14px] py-[11px] lg:h-[82px] lg:px-[19px] lg:py-[8px]">
        <p className="text-[11px] leading-[15px] font-semibold text-lp-ink lg:text-[15px] lg:leading-normal">
          {title}
        </p>
        <p className="mt-[4px] text-[10px] leading-[14px] text-lp-muted lg:mt-[19px] lg:text-[13px] lg:leading-normal">
          {value}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[18px] border border-lp-line bg-lp-tint px-[19px] py-[14px] lg:min-h-[118px]">
      <p className="text-[14px] font-semibold text-lp-green">{title}</p>
      <p className="mt-[13px] text-[18px] leading-[1.25] font-bold text-lp-green lg:text-[22px]">
        {value}
      </p>
    </div>
  );
}
