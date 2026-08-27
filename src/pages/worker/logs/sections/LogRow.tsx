import { Link } from "react-router-dom";

interface LogRowProps {
  to: string;
  title: string;
  meta: string;
  /** Appended to the title on mobile only (W-61B stress row). */
  titleSuffix?: string;
  /** Right-aligned 12px semibold green chip — verified employer records only. */
  tag?: string;
  /** WD-61A rows are 72px tall, WD-61B/C rows 68px. Mobile rows are 66px. */
  height?: 72 | 68;
}

/* WD-61A "Verified row" / "Personal note" and WD-61B/C entry rows: full-width
   white card, 1px #d1ded6. Desktop puts the 14px semibold title in a 22px box
   (y=10 on 72px rows, y=8 on 68px rows) over an 11px muted meta box of 20px,
   with the status label right-aligned 32px in, radius 12.
   Mobile (W-61A · 1167:262, W-61C · 1167:301) is a 350x66 row at radius 14
   with a 12px title at y=11, a 10px meta at y=33 and the status label inset
   15px from the right edge. */
export function LogRow({
  to,
  title,
  meta,
  titleSuffix,
  tag,
  height = 72,
}: LogRowProps) {
  const desktopBox =
    height === 72
      ? "lg:h-[72px] lg:pt-[9px]"
      : "lg:h-[68px] lg:pt-[7px]";

  return (
    <Link
      to={to}
      className={`relative block h-[66px] rounded-[14px] border border-lp-line bg-white pt-[11px] pl-[13px] hover:border-lp-green lg:rounded-[12px] lg:pl-[15px] ${desktopBox}`}
    >
      <span className="block truncate pr-[80px] text-[12px] leading-[16px] font-semibold text-lp-ink lg:pr-[140px] lg:text-[14px] lg:leading-[22px]">
        {title}
        {titleSuffix !== undefined && (
          <span className="lg:hidden">{titleSuffix}</span>
        )}
      </span>
      <span className="mt-[6px] block truncate pr-[80px] text-[10px] leading-[14px] text-lp-muted lg:mt-[2px] lg:pr-[140px] lg:text-[11px] lg:leading-[20px]">
        {meta}
      </span>
      {tag !== undefined && (
        <span className="absolute top-0 right-[15px] flex h-full items-center text-[11px] leading-[20px] font-semibold text-lp-green lg:right-[31px] lg:text-[12px]">
          {tag}
        </span>
      )}
    </Link>
  );
}
