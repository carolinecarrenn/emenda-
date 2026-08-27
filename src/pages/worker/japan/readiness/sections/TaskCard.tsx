import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight, Circle } from "lucide-react";

/* Checklist card. Mobile (Figma 628:228): white 68px card, 20px status
   glyph at 14/22, 15px semibold title at 44/14, 12px grey status line
   directly under the title at 44/38, 16px chevron at 316/22. Desktop keeps
   the taller WD-34 104px card with the status line back at the left edge. */
export function TaskCard({
  title,
  statusLine,
  complete,
  to,
}: {
  title: string;
  statusLine: string;
  complete: boolean;
  to: string;
}) {
  return (
    <Link
      to={to}
      className="relative block h-[68px] rounded-[14px] border border-[#d5e0db] bg-white transition-colors hover:border-[#b9ccc2] lg:h-[104px]"
    >
      {complete ? (
        <CheckCircle2
          className="absolute top-[22px] left-[14px] size-[20px] text-[#08664d] lg:top-[16px] lg:left-[15px] lg:size-[18px]"
          strokeWidth={2}
        />
      ) : (
        <Circle
          className="absolute top-[22px] left-[14px] size-[20px] text-[#9fb2a8] lg:top-[16px] lg:left-[15px] lg:size-[18px]"
          strokeWidth={2}
        />
      )}
      <p className="absolute top-[14px] right-[44px] left-[44px] truncate text-[15px] leading-[20px] font-semibold text-[#131f1a] lg:top-[15px] lg:right-[40px] lg:left-[43px] lg:leading-[22px]">
        {title}
      </p>
      <p className="absolute top-[38px] right-[44px] left-[44px] truncate text-[12px] leading-[18px] text-[#5e7066] lg:top-[43px] lg:right-[40px] lg:left-[15px] lg:text-[13px] lg:leading-[22px]">
        {statusLine}
      </p>
      <ChevronRight
        className="absolute top-[24px] right-[18px] size-[16px] text-[#5e7066] lg:top-[17px] lg:right-[17px]"
        strokeWidth={2}
      />
    </Link>
  );
}
