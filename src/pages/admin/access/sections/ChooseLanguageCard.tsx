import { useNavigate } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { ADMINACCESS_COPY } from "../access.copy";
import { ADMIN_ACCESS_LANGUAGES } from "../access.mock";
import { accessHref } from "../accessStates";
import {
  AccessBrand,
  AccessCard,
  AccessPrimaryButton,
  AccessSubtitle,
  AccessTitle,
} from "./AccessPrimitives";

/** AD-00A · Choose Language (1249:4862) — 676px card at y=110 on the #f7faf8
 *  canvas: EMENDA, "Pilih bahasa", three 86px language rows with a 20px radio
 *  on the right, the blue global-language note, then "Lanjutkan".
 *
 *  Selecting a row calls the app-wide setLanguage, so the card (and the rest
 *  of the Admin experience) re-renders in the chosen language — which is what
 *  the note under the rows promises. */
export function ChooseLanguageCard() {
  const navigate = useNavigate();
  const c = useSectionCopy(ADMINACCESS_COPY).language;
  const { language, setLanguage } = useLanguage();

  return (
    <AccessCard width={676}>
      <AccessBrand />
      <div className="mt-[26px] lg:mt-[35px]">
        <AccessTitle>{c.title}</AccessTitle>
      </div>
      <div className="mt-[8px]">
        <AccessSubtitle>{c.subtitle}</AccessSubtitle>
      </div>

      <div className="mt-[28px] flex flex-col gap-[12px] lg:mt-[47px] lg:gap-[16px]">
        {ADMIN_ACCESS_LANGUAGES.map((option) => {
          const selected = language === option.code;
          return (
            <button
              key={option.code}
              type="button"
              onClick={() => setLanguage(option.code)}
              aria-pressed={selected}
              className={`relative h-[86px] w-full rounded-[12px] border px-[17px] pt-[15px] text-left ${
                selected
                  ? "border-[#083d2d] bg-[#e8f5f0]"
                  : "border-[#d6e3de] bg-white hover:border-[#b9c9c0]"
              }`}
            >
              <span className="block text-[15px] font-semibold text-[#17362e]">
                {option.name}
              </span>
              <span className="mt-[13px] block text-[10px] text-[#65746d]">
                {option.english}
              </span>
              <span
                className={`absolute top-[26px] right-[25px] flex size-[20px] items-center justify-center rounded-[10px] border ${
                  selected
                    ? "border-[#083d2d] bg-[#083d2d]"
                    : "border-[#d6e3de] bg-white"
                }`}
              >
                {selected ? (
                  <span className="size-[8px] rounded-[4px] bg-white" />
                ) : null}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-[20px] rounded-[10px] bg-[#eff5fc] px-[14px] py-[18px] lg:mt-[28px]">
        <p className="text-[11px] leading-[1.5] text-[#17362e] lg:text-[10px]">
          {c.note}
        </p>
      </div>

      <div className="mt-[20px] lg:mt-[28px]">
        <AccessPrimaryButton
          className="w-full"
          onClick={() => navigate(accessHref("signin"))}
        >
          {c.continueLabel}
        </AccessPrimaryButton>
      </div>
    </AccessCard>
  );
}
