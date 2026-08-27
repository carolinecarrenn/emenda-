import { ArrowLeft } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { ADMINTEAMS_COPY } from "../teams.copy";
import { LIFECYCLE_STEP_TONES } from "../teams.mock";
import { TONE_PILL } from "./teamsTokens";

/* AD-03C "Team & manager lifecycle" (1226:2680): a white board, radius 12,
   24px padded — the END-TO-END FLOW eyebrow, the 22px title, the scope line
   ("… does not create platform roles or Super Admin accounts."), five 278x620
   step cards separated by 24px "→" arrows, and the mint flow-rule chip
   (1226:2773).

   Step chips carry the tone of the frame: 01–03 mint, 04 blue, 05 red. At 390
   the five cards stack and the arrow rotates a quarter turn, so no step or
   connector is lost. */
export function TeamLifecyclePanel({ onBack }: { onBack: () => void }) {
  const c = useSectionCopy(ADMINTEAMS_COPY);

  return (
    <section className="flex flex-col gap-[18px] rounded-[12px] border border-[#d6e3de] bg-white p-[24px]">
      <div className="flex flex-col gap-[18px] lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-[18px]">
          <p className="text-[10px] leading-none font-semibold text-[#083d2d]">
            {c.lifecycle.eyebrow}
          </p>
          <p className="text-[20px] leading-[26px] font-bold text-[#17362e] lg:text-[22px] lg:leading-none">
            {c.lifecycle.title}
          </p>
          <p className="text-[10px] leading-[15px] text-[#65746d]">
            {c.lifecycle.subtitle}
          </p>
        </div>
        <button
          type="button"
          onClick={onBack}
          className="flex h-[32px] shrink-0 items-center gap-[8px] rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] hover:bg-[#f2f7f5]"
        >
          <ArrowLeft className="size-[14px]" aria-hidden="true" />
          {c.lifecycle.backToTeams}
        </button>
      </div>

      <ol className="flex flex-col items-stretch gap-[18px] lg:flex-row lg:items-start lg:overflow-x-auto">
        {c.lifecycle.steps.map((step, index) => (
          <li
            key={step.title}
            className="flex flex-col items-center gap-[18px] lg:flex-row lg:items-start"
          >
            <div className="flex w-full flex-col gap-[10px] rounded-[12px] border border-[#d6e3de] bg-white p-[16px] lg:h-[620px] lg:w-[278px] lg:shrink-0">
              <div className="flex items-start gap-[10px]">
                <span
                  className={`flex shrink-0 items-center rounded-full px-[9px] py-[5px] text-[9px] leading-none font-semibold ${TONE_PILL[LIFECYCLE_STEP_TONES[index]]}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-[3px]">
                  <span className="text-[14px] leading-none font-bold text-[#17362e]">
                    {step.title}
                  </span>
                  <span className="text-[9px] leading-[12px] text-[#65746d] lg:text-[8px]">
                    {step.subtitle}
                  </span>
                </span>
              </div>

              {step.details.map((detail) => (
                <div
                  key={detail.label}
                  className="flex flex-col gap-[3px] rounded-[12px] bg-[#f7faf8] p-[10px]"
                >
                  <span className="text-[10px] leading-none font-semibold text-[#17362e] lg:text-[9px]">
                    {detail.label}
                  </span>
                  <span className="text-[9px] leading-[12px] text-[#65746d] lg:text-[8px]">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

            {index < c.lifecycle.steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="rotate-90 text-[24px] leading-none font-bold text-[#083d2d] lg:rotate-0 lg:pt-[280px]"
              >
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      <p className="self-start rounded-[12px] bg-[#e8f5f0] px-[12px] py-[10px] text-[10px] leading-[15px] font-semibold text-[#083d2d] lg:text-[9px]">
        {c.lifecycle.rule}
      </p>
    </section>
  );
}
