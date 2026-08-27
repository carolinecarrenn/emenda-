import { useSectionCopy } from "@/i18n/copy";
import { ADMIN_COPY } from "../admin.copy";
import {
  LIFECYCLE_STAGES,
  REPORT_LIFECYCLE,
  type LifecycleTone,
} from "../admin.mock";

/* AD-01 "Report lifecycle" (1182:5846): 676x250 white card, radius 12,
   1px #d6e3de — header with the mint "34 open" pill, four 155x86 tinted
   stage tiles (20px bold count over a 9px semibold label), then the
   "Resolved within SLA" row, a 7px #d6e3de track with a #0c5941 fill, and
   the 8px target caption. */

const STAGE_TONE: Record<LifecycleTone, string> = {
  blue: "bg-[#eff5fc] text-[#2f5e9b]",
  mint: "bg-[#e8f5f0] text-[#0c5941]",
  amber: "bg-[#fdf7ec] text-[#b57023]",
  mintDeep: "bg-[#e8f5f0] text-[#0b6b57]",
};

export function ReportLifecycleCard() {
  const c = useSectionCopy(ADMIN_COPY);

  return (
    <div className="flex flex-col gap-[14px] rounded-[12px] border border-[#d6e3de] bg-white px-[16px] pt-[16px] pb-[14px] lg:h-[250px] lg:w-[676px]">
      <div className="flex h-[28px] items-center gap-[8px]">
        <div className="flex min-w-0 flex-1 flex-col gap-px lg:w-[528px] lg:flex-none">
          <p className="text-[13px] leading-none font-bold text-[#17362f]">
            {c.lifecycle.title}
          </p>
          <p className="text-[10px] leading-none text-[#65746d] lg:text-[8px]">
            {c.lifecycle.subtitle}
          </p>
        </div>
        <div className="flex h-[22px] shrink-0 items-center rounded-full bg-[#e8f5f0] px-[9px]">
          <span className="text-[10px] leading-none font-semibold whitespace-nowrap text-[#083d2d]">
            {c.lifecycle.openPill.replace(
              "{count}",
              String(REPORT_LIFECYCLE.openCount),
            )}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-[8px] lg:grid-cols-4">
        {LIFECYCLE_STAGES.map((stage) => (
          <div
            key={stage.key}
            className={`flex h-[86px] flex-col gap-[6px] rounded-[10px] p-[10px] ${STAGE_TONE[stage.tone]}`}
          >
            <p className="text-[20px] leading-none font-bold">{stage.count}</p>
            <p className="text-[10px] leading-[14px] font-semibold text-[#17362f] lg:text-[9px]">
              {c.lifecycle.stages[stage.key]}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[7px]">
        <div className="flex h-[18px] items-center gap-[8px]">
          <p className="flex-1 text-[10px] font-semibold whitespace-nowrap text-[#17362f] lg:flex-none">
            {c.lifecycle.slaLabel}
          </p>
          {/* Figma runs a fixed 430px gap between the label and the value
              (1182:5869) rather than pushing the value to the right edge. */}
          <span aria-hidden="true" className="hidden lg:block lg:w-[430px]" />
          <p className="text-[10px] font-bold text-[#083d2d]">
            {REPORT_LIFECYCLE.slaPercent}%
          </p>
        </div>
        <div className="h-[7px] w-full overflow-hidden rounded-[4px] bg-[#d6e3de]">
          <div
            className="h-full rounded-[4px] bg-[#0c5941]"
            style={{ width: `${REPORT_LIFECYCLE.slaPercent}%` }}
          />
        </div>
        <p className="text-[10px] leading-[14px] text-[#65746d] lg:text-[8px] lg:leading-none">
          {c.lifecycle.slaCaption
            .replace("{target}", String(REPORT_LIFECYCLE.slaTarget))
            .replace("{count}", String(REPORT_LIFECYCLE.slaExceededThisWeek))}
        </p>
      </div>
    </div>
  );
}
