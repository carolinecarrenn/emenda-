import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { EMPLOYER_COPY } from "../employer.copy";

interface EmployerPageHeaderProps {
  title: string;
  subtitle: string;
}

/* Shared page header for WD-49 / WD-50 / WD-51 / WD-52 (nodes 1182:639-641,
   1182:951-952, 1182:1219-1220, 1182:1721-1722): 13px semibold green
   "Headless home" breadcrumb · 34px bold H1 · 14px muted subtitle. On mobile
   the breadcrumb is the "Back · Headless home" row (W-49 node 917:39): the
   140px label followed by the 20px back chevron at x=146. */
export function EmployerPageHeader({
  title,
  subtitle,
}: EmployerPageHeaderProps) {
  const c = useSectionCopy(EMPLOYER_COPY);

  return (
    <>
      <Link
        to="/worker"
        className="inline-flex items-center text-[13px] font-semibold text-lp-green hover:text-lp-button"
      >
        <span className="w-[140px] lg:w-auto">{c.breadcrumb}</span>
        <ChevronLeft
          aria-hidden
          className="ml-[6px] size-[20px] lg:hidden"
          strokeWidth={2}
        />
      </Link>
      <h1 className="mt-[14px] max-w-[900px] text-[22px] leading-[1.2] font-semibold text-lp-ink lg:mt-[22px] lg:text-[34px] lg:font-bold">
        {title}
      </h1>
      {/* The W-49..W-52 mobile frames reserve a fixed 42px subtitle block
          (e.g. W-51 node 938:16), so a shorter sentence still holds the
          stack below it in place. */}
      <p className="mt-[16px] max-w-[920px] min-h-[42px] text-[12px] leading-[15px] text-lp-muted lg:mt-[18px] lg:min-h-0 lg:text-[14px] lg:leading-[21px]">
        {subtitle}
      </p>
    </>
  );
}
