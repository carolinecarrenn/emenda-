import { useNavigate } from "react-router-dom";
import type { Language } from "@/i18n/language";
import { useLanguage } from "@/i18n/language";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { AUTH_COPY } from "./auth.copy";
import { AuthLayout } from "./components/AuthLayout";
import { AuthPrimaryButton } from "./components/AuthButtons";

/** Language option names/tags are proper names — identical across languages. */
const LANGUAGE_CARDS: { code: Language; name: string; tag: string }[] = [
  { code: "id", name: "Bahasa Indonesia", tag: "ID" },
  { code: "en", name: "English", tag: "EN" },
  { code: "ja", name: "日本語", tag: "JA" },
];

/** WD-02 Choose Language (744:7) + 02A/02B via selection · W-02 (480:2).
 *  Three selectable cards (selected = mint fill + 1px deep-green border);
 *  selecting calls the global setLanguage so the whole app switches. */
export function ChooseLanguagePage() {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const c = useSectionCopy(AUTH_COPY).language;
  const common = useCommonCopy();

  return (
    <AuthLayout
      title={c.title}
      subtitle={c.subtitle}
      railTopClass="lg:pt-[246px]"
      railMobileTopClass="mt-[12px]"
      subtitleGapClass="mt-[12px] lg:mt-[15px]"
      titleSizeClass="text-[26px] leading-[31px] lg:text-[44px] lg:leading-[1.12]"
      titleClass="text-ink"
      subtitleClass="text-ink-muted"
    >
      <div className="space-y-[12px] lg:space-y-[20px]">
        {LANGUAGE_CARDS.map((option) => {
          const selected = language === option.code;
          return (
            <button
              key={option.code}
              type="button"
              onClick={() => setLanguage(option.code)}
              className={`flex h-[68px] w-full cursor-pointer flex-col items-start gap-[3px] rounded-[16px] border px-[16px] pt-[12px] text-left lg:h-[72px] ${
                selected
                  ? "border-brand-deep bg-brand-soft"
                  : "border-line bg-white hover:border-[#b9c9c0]"
              }`}
            >
              <span
                className={`text-[14px] leading-[17px] font-semibold ${
                  selected ? "text-brand-deep" : "text-ink"
                }`}
              >
                {option.name}
              </span>
              <span
                className={`text-[11px] leading-[13px] ${
                  selected ? "text-brand-deep" : "text-ink-muted"
                }`}
              >
                {option.tag}
                {selected ? ` · ${c.selected}` : ""}
              </span>
            </button>
          );
        })}
      </div>
      <div className="mt-[12px] lg:mt-[40px]">
        <AuthPrimaryButton
          onClick={() => navigate("/auth/welcome")}
          className="rounded-[16px] bg-brand hover:bg-brand-deep"
        >
          {common.action.continue}
        </AuthPrimaryButton>
      </div>
      <p className="mt-[12px] text-center text-[13px] leading-[13px] text-ink-muted lg:mt-[20px] lg:leading-[16px]">
        {c.caption}
      </p>
    </AuthLayout>
  );
}
