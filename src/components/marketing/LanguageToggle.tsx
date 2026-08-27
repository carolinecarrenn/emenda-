import { LANGUAGE_OPTIONS, useLanguage, type Language } from "@/i18n/language";

/** Compact labels — the header has to hold this at 390px next to the logo. */
const SHORT: Record<Language, string> = {
  en: "EN",
  ja: "日本語",
  id: "ID",
};

/**
 * Header language switcher. The visible label is abbreviated, so each button
 * carries the full language name as its accessible name — that name is the
 * contract the i18n end-to-end suite selects on, and it is what a screen
 * reader should announce regardless of how tight the header gets.
 */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border border-lp-line bg-white/80 p-1 ${className}`}
    >
      {LANGUAGE_OPTIONS.map((option) => {
        const active = language === option.code;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLanguage(option.code)}
            aria-label={option.label}
            aria-pressed={active}
            className={`rounded-full px-2 py-1 text-[12px] font-semibold whitespace-nowrap transition-colors duration-150 sm:px-2.5 ${
              active
                ? "bg-lp-mint text-lp-green"
                : "text-lp-muted hover:text-lp-green"
            }`}
          >
            {SHORT[option.code]}
          </button>
        );
      })}
    </div>
  );
}
