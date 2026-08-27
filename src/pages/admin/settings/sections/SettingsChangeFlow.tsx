import { useSectionCopy } from "@/i18n/copy";
import { ADMINSETTINGS_COPY } from "../settings.copy";

/* AD-09C "Settings Change Flow" (1226:3975) — ?state=flow.
   Five 278x620 step cards joined by 24px #083d2d arrows: edit → dirty state
   → confirm high-impact change → save → apply downstream, closed by the mint
   flow rule that draws the Company Admin / Super Admin boundary.

   The strip is 1626px wide against the 1144 admin column, so it scrolls
   horizontally on desktop; at 390 the steps stack and the arrows turn to
   point down. */

const CHIP_TONE = [
  "bg-[#e8f5f0] text-[#083d2d]",
  "bg-[#fdf7ec] text-[#b57023]",
  "bg-[#fdf0ef] text-[#b04139]",
  "bg-[#eff5fc] text-[#083d2d]",
  "bg-[#e8f5f0] text-[#083d2d]",
];

export function SettingsChangeFlow() {
  const c = useSectionCopy(ADMINSETTINGS_COPY);

  return (
    <div className="flex flex-col gap-[18px] rounded-[12px] border border-[#d6e3de] bg-white p-[24px]">
      <p className="text-[10px] leading-none font-semibold text-[#083d2d]">
        {c.flow.eyebrow}
      </p>
      <h2 className="text-[22px] leading-[28px] font-bold text-[#17362e]">
        {c.flow.title}
      </h2>
      <p className="text-[11px] leading-none text-[#65746d] lg:text-[10px]">
        {c.flow.subtitle}
      </p>

      <div className="-mx-[24px] overflow-x-auto px-[24px]">
        <ol className="flex flex-col items-stretch gap-[18px] lg:w-max lg:flex-row lg:items-start">
          {c.flow.steps.map((step, index) => (
            <li
              key={step.number}
              className="contents lg:flex lg:items-start lg:gap-[18px]"
            >
              <div className="flex flex-col gap-[10px] rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:h-[620px] lg:w-[278px] lg:shrink-0">
                <div className="flex items-start gap-[10px]">
                  <span
                    className={`shrink-0 rounded-full px-[9px] py-[5px] text-[9px] leading-none font-semibold ${CHIP_TONE[index]}`}
                  >
                    {step.number}
                  </span>
                  <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
                    <p className="text-[14px] leading-[17px] font-bold text-[#17362e]">
                      {step.title}
                    </p>
                    <p className="text-[10px] leading-[13px] text-[#65746d] lg:text-[8px]">
                      {step.subtitle}
                    </p>
                  </div>
                </div>
                {step.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex w-fit flex-col gap-[3px] rounded-[12px] bg-[#f7faf8] p-[10px]"
                  >
                    <p className="text-[11px] leading-none font-semibold text-[#17362e] lg:text-[9px]">
                      {detail.label}
                    </p>
                    <p className="text-[10px] leading-none text-[#65746d] lg:text-[8px]">
                      {detail.body}
                    </p>
                  </div>
                ))}
              </div>
              {index < c.flow.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="rotate-90 self-center text-[24px] leading-none font-bold text-[#083d2d] lg:mt-[280px] lg:rotate-0 lg:self-start"
                >
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>

      <p className="w-fit rounded-[12px] bg-[#e8f5f0] px-[12px] py-[10px] text-[10px] leading-[15px] font-semibold text-[#083d2d] lg:text-[9px]">
        {c.flow.rule}
      </p>
    </div>
  );
}
