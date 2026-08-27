import { ChevronDown, Globe } from "lucide-react";
import { LANGUAGE_OPTIONS, useLanguage, type Language } from "@/i18n/language";

/**
 * Footer language selector. Rendered as a native <select> rather than a second
 * set of toggle buttons: it keeps the footer compact, gives mobile the OS
 * picker for free, and leaves the header switcher as the page's only
 * button-role language control.
 */
export function LanguageSelect({ label }: { label: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <label className="inline-flex h-10 items-center gap-2 rounded-full border border-white/15 bg-white/5 pr-2 pl-3.5 text-[13px] text-lp-onDark transition-colors duration-150 focus-within:border-white/40 hover:border-white/30">
      <Globe size={15} strokeWidth={1.75} aria-hidden="true" />
      <span className="sr-only">{label}</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value as Language)}
        aria-label={label}
        className="cursor-pointer appearance-none bg-transparent py-1 pr-5 text-[13px] font-medium text-white outline-none"
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <option key={option.code} value={option.code} className="text-lp-ink">
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={14}
        strokeWidth={2}
        aria-hidden="true"
        className="-ml-6 shrink-0 text-white/50"
      />
    </label>
  );
}
