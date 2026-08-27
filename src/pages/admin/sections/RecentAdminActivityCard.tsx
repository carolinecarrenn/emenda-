import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { ADMIN_COPY } from "../admin.copy";
import { ACTIVITY_ROWS, ADMIN_ORG, type ActivityTarget } from "../admin.mock";

/* AD-01 "Recent admin activity" (1182:5927): 732x244 white card, radius 12,
   1px #d6e3de — header with the "View activity log →" link, a #f7faf8
   column-header strip (radius 7, 8px semibold #65746d) and four 29px rows
   with 290/120/150/80 columns. */
export function RecentAdminActivityCard() {
  const c = useSectionCopy(ADMIN_COPY);

  const targetLabel = (target: ActivityTarget): string => {
    switch (target.kind) {
      case "person":
        return target.name;
      case "managerTeam":
        return `${c.activity.targets.manager} · ${target.team}`;
      case "companyRewardPolicy":
        return c.activity.targets.companyRewardPolicy;
    }
  };

  return (
    <div className="flex flex-col gap-[9px] rounded-[12px] border border-[#d6e3de] bg-white px-[16px] pt-[16px] pb-[13px] lg:h-[244px] lg:w-[732px]">
      <div className="flex h-[28px] items-center gap-[8px]">
        <div className="flex min-w-0 flex-1 flex-col gap-px lg:w-[572px] lg:flex-none">
          <p className="text-[13px] leading-none font-bold text-[#17362f]">
            {c.activity.title}
          </p>
          <p className="truncate text-[10px] leading-none text-[#65746d] lg:text-[8px]">
            {c.activity.subtitle.replace("{org}", ADMIN_ORG)}
          </p>
        </div>
        <Link
          to="/admin"
          className="shrink-0 text-[10px] font-semibold whitespace-nowrap text-[#083d2d] hover:underline lg:text-[9px]"
        >
          {c.activity.viewLog}
        </Link>
      </div>

      <div className="-mx-[16px] overflow-x-auto px-[16px]">
        {/* 1182:5933 sits at y=53 and the four rows at 88 / 126 / 164 / 202 —
            a 9px lane between the column strip and every row. */}
        <div className="flex min-w-[560px] flex-col gap-[9px]">
          <div className="flex h-[26px] items-center gap-[10px] rounded-[7px] bg-[#f7faf8] px-[8px] py-[6px] text-[9px] font-semibold text-[#65746d] lg:text-[8px]">
            <p className="w-[290px] shrink-0">{c.activity.columns.action}</p>
            <p className="w-[120px] shrink-0">{c.activity.columns.actor}</p>
            <p className="w-[150px] shrink-0">{c.activity.columns.target}</p>
            <p className="w-[80px] shrink-0">{c.activity.columns.time}</p>
          </div>

          {ACTIVITY_ROWS.map((row) => (
            <div
              key={row.id}
              className="flex h-[29px] items-center gap-[10px] px-[8px] py-[5px] text-[9px] lg:text-[8px]"
            >
              <p className="w-[290px] shrink-0 truncate font-medium text-[#17362f]">
                {row.detail
                  ? `${c.activity.actions[row.action]} · ${row.detail}`
                  : c.activity.actions[row.action]}
              </p>
              <p className="w-[120px] shrink-0 truncate text-[#65746d]">
                {row.actor}
              </p>
              <p className="w-[150px] shrink-0 truncate text-[#65746d]">
                {targetLabel(row.target)}
              </p>
              <p className="w-[80px] shrink-0 text-[#65746d]">{row.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
