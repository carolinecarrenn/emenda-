import { Fragment } from "react";
import { useLanguage } from "@/i18n/language";
import { LOCALE_LANGUAGE_OPTIONS } from "../accountData";

/* EM-18B Language row (761:1245) — the live manager-side language switch.
   The value column prints the mock's "日本語 / English / Indonesia" string
   with each name selectable; the active one is underlined. Switching keeps
   the current route and every screen state. */
export function LocaleLanguageRow({ label }: { label: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex min-h-[51px] items-center justify-between gap-4 rounded-[10px] border border-[#d1e0d9] bg-white px-[14px] py-[10px]">
      <span className="text-[10px] text-[#6e8a82] lg:text-[12px]">{label}</span>
      <span className="text-right text-[11px] font-bold lg:text-[13px]">
        {LOCALE_LANGUAGE_OPTIONS.map((option, index) => (
          <Fragment key={option.code}>
            {index > 0 ? <span className="text-[#6e8a82]"> / </span> : null}
            <button
              type="button"
              onClick={() => setLanguage(option.code)}
              className={`cursor-pointer transition-colors hover:text-[#094033] ${
                option.code === language
                  ? "text-[#094033] underline underline-offset-[3px]"
                  : "text-[#6e8a82]"
              }`}
            >
              {option.label}
            </button>
          </Fragment>
        ))}
      </span>
    </div>
  );
}
