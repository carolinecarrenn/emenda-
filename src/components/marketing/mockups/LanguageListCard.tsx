import { Check, RefreshCw } from "lucide-react";
import { LANGUAGE_OPTIONS, useLanguage } from "@/i18n/language";

/**
 * The language list, with the visitor's own choice shown as selected. It
 * demonstrates the multilingual claim instead of asserting it: whichever
 * language they picked in the header is the one ticked here.
 */
export function LanguageListCard({ note }: { note?: string }) {
  const { language } = useLanguage();

  return (
    <div className="flex h-full flex-col justify-center rounded-[18px] border border-lp-line bg-lp-bg p-3">
      <ul className="space-y-2">
        {LANGUAGE_OPTIONS.map((option) => {
          const active = option.code === language;
          return (
            <li
              key={option.code}
              className={`flex h-10 items-center justify-between rounded-[12px] border px-3.5 text-[13px] font-medium ${
                active
                  ? "border-lp-green/25 bg-lp-mint text-lp-green"
                  : "border-lp-line bg-white text-lp-muted"
              }`}
            >
              {option.label}
              {active ? (
                <Check size={15} strokeWidth={2.4} aria-hidden="true" />
              ) : null}
            </li>
          );
        })}
      </ul>
      {note ? (
        <p className="mt-3 flex items-center gap-2 px-1 text-[11.5px] text-lp-muted">
          <RefreshCw size={12} strokeWidth={1.9} aria-hidden="true" />
          {note}
        </p>
      ) : null}
    </div>
  );
}
