import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { ADMINSETTINGS_COPY } from "../settings.copy";
import { languageSummary } from "../settings.mock";

/* AD-09 "Global Language" (1249:4988): the 352x120 white sub-card at the foot
   of the access column — "App language" 12px bold over the 9px global scope
   line, the current language written out ("English (EN)") and the 42px
   "Change language" button that opens AD-09E.

   The endonym + tag pair is data, not copy: it reads the same in every
   language and comes from settings.mock.ts. */
export function AppLanguageCard({ onChange }: { onChange: () => void }) {
  const c = useSectionCopy(ADMINSETTINGS_COPY);
  const { language } = useLanguage();

  return (
    <div className="rounded-[12px] border border-[#d6e3de] bg-white p-[15px] lg:h-[120px]">
      <p className="text-[12px] leading-none font-bold text-[#17362e]">
        {c.languageCard.title}
      </p>
      <p className="mt-[10px] text-[10px] leading-none text-[#65746d] lg:text-[9px]">
        {c.languageCard.subtitle}
      </p>
      <div className="mt-[16px] flex flex-col gap-[12px] sm:flex-row sm:items-center sm:justify-between sm:gap-[10px]">
        <p className="text-[13px] leading-none font-semibold text-[#17362e]">
          {languageSummary(language)}
        </p>
        <button
          type="button"
          onClick={onChange}
          className="flex h-[42px] items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] hover:bg-[#f2f7f5] sm:w-[148px]"
        >
          {c.languageCard.change}
        </button>
      </div>
    </div>
  );
}
