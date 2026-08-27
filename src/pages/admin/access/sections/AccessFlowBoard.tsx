import { Fragment } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINACCESS_COPY } from "../access.copy";
import {
  ADMIN_ACCESS_FLOW_PASSWORD_MASK,
  ADMIN_ACCESS_ORG,
} from "../access.mock";

/** AD-00 · Admin Access End-to-End (1226:2426): the white 12px-radius board,
 *  24px padded, holding the four 280x620 flow cards — Sign in → Verify / reset
 *  → First-time setup → Enter workspace — separated by the 26px deep-green
 *  arrows that hang 280px down the column.
 *
 *  Step 02's index chip is the blue #eff5fc tint in Figma (it is the
 *  conditional branch); the other three are mint #e8f5f0. */

const CHIP_TONE = ["bg-[#e8f5f0]", "bg-[#eff5fc]", "bg-[#e8f5f0]", "bg-[#e8f5f0]"];

export function AccessFlowBoard() {
  const c = useSectionCopy(ADMINACCESS_COPY).flow;

  return (
    <div className="flex w-full flex-col gap-[18px] rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:p-[24px]">
      <div className="flex flex-col gap-[4px]">
        <p className="text-[10px] font-semibold text-[#083d2d]">{c.eyebrow}</p>
        <h1 className="text-[20px] font-bold text-[#17362e] lg:text-[22px]">
          {c.title}
        </h1>
        <p className="text-[11px] text-[#65746d] lg:text-[10px]">
          {c.subtitle}
        </p>
      </div>

      <div className="flex flex-col items-stretch gap-[18px] lg:flex-row lg:items-start lg:overflow-x-auto">
        {c.steps.map((step, index) => (
          <Fragment key={step.index}>
            {index > 0 ? (
              <div className="flex shrink-0 justify-center lg:flex-col lg:items-start lg:justify-start lg:pt-[280px]">
                <p
                  aria-hidden="true"
                  className="rotate-90 text-[22px] font-bold text-[#083d2d] lg:rotate-0 lg:text-[26px]"
                >
                  →
                </p>
              </div>
            ) : null}
            <div className="flex shrink-0 flex-col gap-[10px] rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:h-[620px] lg:w-[280px]">
              <div className="flex items-start gap-[10px]">
                <span
                  className={`rounded-[999px] px-[9px] py-[5px] text-[9px] font-semibold text-[#083d2d] ${CHIP_TONE[index] ?? CHIP_TONE[0]}`}
                >
                  {step.index}
                </span>
                <span className="flex flex-col gap-[3px]">
                  <span className="text-[15px] font-bold text-[#17362e]">
                    {step.title}
                  </span>
                  <span className="text-[10px] text-[#65746d] lg:text-[9px]">
                    {step.subtitle}
                  </span>
                </span>
              </div>
              {step.rows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-[3px] rounded-[9px] bg-[#f7faf8] p-[10px]"
                >
                  <p className="text-[10px] font-semibold text-[#17362e] lg:text-[9px]">
                    {row.label}
                  </p>
                  <p className="text-[9px] text-[#65746d] lg:text-[8px]">
                    {row.value
                      .replace("{company}", ADMIN_ACCESS_ORG)
                      .replace("{password}", ADMIN_ACCESS_FLOW_PASSWORD_MASK)}
                  </p>
                </div>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
