import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ANALYTICS_COPY } from "../analytics.copy";

/* EM-13 (1107:127–130) outline buttons: 168×42, radius 10, white,
   border #ccded6, 11px semibold #083d2d. */
export function AnalyticsActions() {
  const c = useSectionCopy(ANALYTICS_COPY);

  const actions = [
    { label: c.analytics.openReports, to: "/manager/reports" },
    { label: c.analytics.openFollowUp, to: "/manager/follow-up" },
  ];

  return (
    <div className="grid grid-cols-2 gap-[14px] lg:max-w-[350px]">
      {actions.map((action) => (
        <Link
          key={action.to}
          to={action.to}
          className="flex h-[42px] items-center justify-center rounded-[10px] border border-[#ccded6] bg-white px-4 text-center text-[11px] font-semibold text-[#083d2d] hover:border-brand"
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}
