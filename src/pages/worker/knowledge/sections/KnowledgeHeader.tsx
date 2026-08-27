import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

interface KnowledgeHeaderProps {
  to: string;
  crumb: string;
  title: string;
  subtitle: string;
  /** W-44E intercepts the breadcrumb to raise the unsaved-changes guard. */
  onCrumbClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  /** W-43 headlines wrap to two lines on a tighter leading. */
  titleLines?: 1 | 2;
  /** Mobile reserve for the whole block, so the first body element lands on
   *  the y the mock gives it whatever the headline and subtitle wrap to. */
  className?: string;
}

/* Shared Knowledge screen header (W-41..W-46). Mobile: a 170px breadcrumb row
   with the label on the left and a 20px chevron on the right, a 22px semibold
   #083d2d headline and a 12px muted subtitle. Desktop (WD-41..WD-46) keeps
   the 34px bold headline, the 14px subtitle and a plain inline breadcrumb. */
export function KnowledgeHeader({
  to,
  crumb,
  title,
  subtitle,
  onCrumbClick,
  titleLines = 1,
  className = "",
}: KnowledgeHeaderProps) {
  return (
    <div className={`lg:min-h-0 ${className}`}>
      <Link
        to={to}
        onClick={onCrumbClick}
        className="flex w-[170px] items-center text-[13px] font-semibold text-lp-green hover:text-lp-button lg:inline lg:w-auto"
      >
        <span className="flex-1">{crumb}</span>
        <ChevronLeft size={20} className="shrink-0 lg:hidden" aria-hidden />
      </Link>
      <h1
        className={`text-[22px] font-semibold text-brand-deep lg:mt-[14px] lg:min-h-0 lg:text-[34px] lg:leading-normal lg:font-bold lg:text-[#0e1f18] ${
          titleLines === 2
            ? "mt-[14px] leading-[27px]"
            : "mt-[11px] leading-[33px]"
        }`}
      >
        {title}
      </h1>
      <p
        className={`text-[12px] leading-[15px] text-lp-muted lg:mt-[14px] lg:text-[14px] lg:leading-normal ${
          titleLines === 2 ? "mt-[8px]" : "mt-[14px]"
        }`}
      >
        {subtitle}
      </p>
    </div>
  );
}
