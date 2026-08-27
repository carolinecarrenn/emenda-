import { useState } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage, type Language } from "@/i18n/language";
import { ADMINSETTINGS_COPY } from "../settings.copy";
import { LANGUAGE_CHOICES } from "../settings.mock";

/* AD-09E "Language settings card" (1249:4995) — ?state=language, opened by
   the AD-09 "Change language" button.

   676x680 white card, radius 18: the LANGUAGE eyebrow, the 26px title, the
   rerender warning, three 86px choice rows (ID · EN · JA) whose selected row
   turns #e8f5f0 with a #083d2d border and a filled 20px radio, the blue
   behaviour block, then Cancel / Apply language.

   Applying writes to the app-wide LanguageProvider — the single global switch
   the frame describes; there is no per-screen selector anywhere else. */
export function LanguageSettingsCard({
  onCancel,
  onApplied,
}: {
  onCancel: () => void;
  onApplied: () => void;
}) {
  const c = useSectionCopy(ADMINSETTINGS_COPY);
  const { language, setLanguage } = useLanguage();
  const [selected, setSelected] = useState<Language>(language);

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-[676px] flex-col rounded-[18px] border border-[#d6e3de] bg-white p-[31px] lg:h-[680px]">
        <p className="text-[10px] leading-none font-semibold text-[#083d2d]">
          {c.language.eyebrow}
        </p>
        <h2 className="mt-[18px] text-[26px] leading-none font-bold text-[#17362e]">
          {c.language.title}
        </h2>
        <p className="mt-[14px] text-[12px] leading-[17px] text-[#65746d] lg:text-[11px]">
          {c.language.intro}
        </p>

        <fieldset className="mt-[35px] flex flex-col gap-[16px]">
          <legend className="sr-only">{c.language.title}</legend>
          {LANGUAGE_CHOICES.map((choice) => {
            const active = selected === choice.code;
            return (
              <label
                key={choice.code}
                className={`flex h-[86px] cursor-pointer items-center gap-[12px] rounded-[12px] border px-[17px] ${
                  active
                    ? "border-[#083d2d] bg-[#e8f5f0]"
                    : "border-[#d6e3de] bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="admin-app-language"
                  value={choice.code}
                  checked={active}
                  onChange={() => setSelected(choice.code)}
                  className="sr-only"
                />
                <span className="flex min-w-0 flex-1 flex-col gap-[10px]">
                  <span className="text-[15px] leading-none font-semibold text-[#17362e]">
                    {choice.label}
                  </span>
                  <span className="text-[10px] leading-none text-[#65746d]">
                    {choice.tag}
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className={`flex size-[20px] shrink-0 items-center justify-center rounded-full border ${
                    active
                      ? "border-[#083d2d] bg-[#083d2d]"
                      : "border-[#d6e3de] bg-white"
                  }`}
                >
                  {active && (
                    <span className="size-[8px] rounded-full bg-white" />
                  )}
                </span>
              </label>
            );
          })}
        </fieldset>

        <div className="mt-[26px] rounded-[10px] bg-[#eff5fc] px-[14px] pt-[18px] pb-[20px] lg:h-[84px]">
          <p className="text-[11px] leading-none text-[#17362e] lg:text-[10px]">
            {c.language.behaviorGlobal}
          </p>
          <p className="mt-[15px] text-[11px] leading-none text-[#17362e] lg:text-[10px]">
            {c.language.behaviorNoSelector}
          </p>
        </div>

        <div className="mt-[24px] flex flex-col gap-[12px] sm:flex-row sm:items-center sm:justify-between lg:mt-auto">
          <button
            type="button"
            onClick={onCancel}
            className="flex h-[42px] items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold text-[#083d2d] hover:bg-[#f2f7f5] sm:w-[120px]"
          >
            {c.language.cancel}
          </button>
          <button
            type="button"
            onClick={() => {
              setLanguage(selected);
              onApplied();
            }}
            className="flex h-[42px] items-center justify-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold text-white hover:bg-[#0c5941] sm:w-[184px]"
          >
            {c.language.apply}
          </button>
        </div>
      </div>
    </div>
  );
}
