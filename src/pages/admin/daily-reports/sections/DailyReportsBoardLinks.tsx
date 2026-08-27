import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { DAILY_REPORTS_COPY } from "../daily-reports.copy";

/* AD-06C and AD-06D are boards about this screen, and Figma draws no entry
   point for them anywhere in AD-06. This quiet row is the app's own
   affordance so both stay reachable by clicking from the admin shell; the
   link labels are the boards' own Figma titles, so no copy is invented. */
export function DailyReportsBoardLinks() {
  const c = useSectionCopy(DAILY_REPORTS_COPY);

  const links = [
    { to: "/admin/daily-reports?state=flow", label: c.flow.title },
    { to: "/admin/daily-reports?state=detail", label: c.detail.title },
  ];

  return (
    <div className="flex flex-col gap-[10px] lg:flex-row lg:items-center lg:gap-[24px]">
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="flex items-center gap-[6px] text-[10px] font-semibold text-[#083d2d] hover:underline lg:text-[9px]"
        >
          {link.label}
          <ArrowRight className="size-[12px] shrink-0" aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}
