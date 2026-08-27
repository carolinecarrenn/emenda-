import { Fragment } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { MANAGER_AUTH_COPY } from "../managerAuth.copy";
import { MANAGER_AUTH_LANGUAGES } from "../managerAuthMock";

interface ManagerLanguageRowProps {
  className?: string;
}

/** "Language · 日本語 / Bahasa Indonesia / English" (EM-AUTH-01 node 914:3 at
 *  y=610, MD-AUTH-01 node 1193:24). The frame prints it as one 11px semibold
 *  #0b6b57 line with plain " / " separators — the active language carries no
 *  visual marker, so the current choice is exposed through `aria-current`
 *  only. Live switch: it never changes the route or resets the form state. */
export function ManagerLanguageRow({ className = "" }: ManagerLanguageRowProps) {
  const c = useSectionCopy(MANAGER_AUTH_COPY);
  const { language, setLanguage } = useLanguage();

  return (
    <p
      className={`text-[11px] font-semibold text-[#0b6b57] lg:text-[13px] lg:font-normal lg:text-[#596b61] ${className}`}
    >
      {c.languageLabel} ·{" "}
      {MANAGER_AUTH_LANGUAGES.map((option, index) => (
        <Fragment key={option.code}>
          {index > 0 ? <span aria-hidden="true">{" / "}</span> : null}
          <button
            type="button"
            onClick={() => setLanguage(option.code)}
            aria-current={language === option.code}
            className="cursor-pointer hover:text-brand-deep"
          >
            {option.label}
          </button>
        </Fragment>
      ))}
    </p>
  );
}
