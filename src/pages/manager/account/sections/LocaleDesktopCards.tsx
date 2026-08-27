import { Fragment } from "react";
import { useLanguage } from "@/i18n/language";
import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";
import {
  LOCALE_LANGUAGE_OPTIONS,
  LOCALE_ROWS,
  type LocaleRowId,
} from "../accountData";
import { AccountDesktopKeyValueCard } from "./AccountDesktopCard";

const WIDTH: Record<LocaleRowId, string> = {
  language: "w-[1060px]",
  timezone: "w-[1060px]",
  dateFormat: "w-[510px]",
  timeFormat: "w-[530px]",
  phoneFormat: "w-[1060px]",
};

/* MD-18B locale cards (1223:236…1223:250): five 74px cards — full-width
   Language and Timezone, the 510/530 Date format · Time format pair and the
   full-width Phone format — each a caps label over the 16px value. The
   Language value stays the live manager-side switch; MD-18B prints every
   option in one weight, so the current choice is exposed by `aria-current`
   rather than by an underline. */
export function LocaleDesktopCards() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);
  const { language, setLanguage } = useLanguage();

  const languageValue = (
    <span>
      {LOCALE_LANGUAGE_OPTIONS.map((option, index) => (
        <Fragment key={option.code}>
          {index > 0 ? <span> / </span> : null}
          <button
            type="button"
            onClick={() => setLanguage(option.code)}
            aria-current={option.code === language}
            className="cursor-pointer hover:text-[#0c5941]"
          >
            {option.label}
          </button>
        </Fragment>
      ))}
    </span>
  );

  return (
    <div className="hidden flex-wrap gap-x-[20px] gap-y-[22px] lg:flex">
      {LOCALE_ROWS.map((row) => (
        <AccountDesktopKeyValueCard
          key={row.id}
          className={WIDTH[row.id]}
          label={c.locale.rows[row.id]}
          value={
            row.id === "language"
              ? languageValue
              : (row.value ?? c.locale.timeFormatValue)
          }
        />
      ))}
    </div>
  );
}
