import {
  CalendarRange,
  Clock,
  FileText,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMIN_COPY } from "../admin.copy";
import { ADMIN_KPIS, type AdminKpiKey, type AdminTone } from "../admin.mock";

/* AD-01 "Operational KPIs" (1182:5797): four flat white cards, 277x112,
   radius 12, 1px #d6e3de — a 30px pastel icon tile (radius 9) beside the
   10px semibold #65746d label, then the 24px bold #17362f value with its
   9px #65746d caption. The Managers tile is drawn with the same tick-less
   calendar as the sidebar's "Icon · daily" (CalendarRange, not
   CalendarCheck). */

const TONE_TILE: Record<AdminTone, string> = {
  mint: "bg-[#e8f5f0] text-[#0c5941]",
  blue: "bg-[#eff5fc] text-[#2f5e9b]",
  amber: "bg-[#fdf7ec] text-[#b57023]",
  red: "bg-[#fdf0ef] text-[#b04139]",
};

const KPI_ICONS: Record<AdminKpiKey, LucideIcon> = {
  employees: Users,
  managers: CalendarRange,
  openReports: FileText,
  overdueFollowUp: Clock,
};

export function AdminKpiRow() {
  const c = useSectionCopy(ADMIN_COPY);

  return (
    <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 xl:grid-cols-4">
      {ADMIN_KPIS.map((kpi) => {
        const Icon = KPI_ICONS[kpi.key];
        return (
          <div
            key={kpi.key}
            className="flex h-[112px] flex-col gap-[8px] rounded-[12px] border border-[#d6e3de] bg-white px-[14px] pt-[14px] pb-[12px]"
          >
            <div className="flex h-[30px] items-center gap-[8px]">
              <div
                className={`flex size-[30px] shrink-0 items-center justify-center rounded-[9px] ${TONE_TILE[kpi.tone]}`}
              >
                <Icon
                  className="size-[18px]"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </div>
              <p className="truncate text-[10px] font-semibold text-[#65746d]">
                {c.kpis.labels[kpi.key]}
              </p>
            </div>
            <div className="flex h-[40px] items-center gap-[10px]">
              <p className="text-[24px] leading-none font-bold text-[#17362f]">
                {kpi.value}
              </p>
              <p className="text-[10px] leading-[14px] text-[#65746d] lg:text-[9px]">
                {c.kpis.captions[kpi.key].replace(
                  "{count}",
                  String(kpi.captionCount),
                )}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
