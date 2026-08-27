import { useState } from "react";
import { Check } from "lucide-react";
import { useCommonCopy } from "@/i18n/common";
import { useProfileCopy } from "../profile.copy";
import { PROFILE_COUNTRIES } from "../profileMock";
import { ProfileOverlay } from "./ProfileOverlay";

/** WD Overlay · Country Selector (desktop modal, node 966:1282) /
 *  568:142 mobile bottom sheet: title, search field, plain country list with
 *  a green check on the selected row, outline Cancel. */
export function CountrySelectorOverlay({
  selected,
  onSelect,
  onClose,
}: {
  selected: string;
  onSelect: (country: string) => void;
  onClose: () => void;
}) {
  const c = useProfileCopy();
  const common = useCommonCopy();
  const [search, setSearch] = useState("");

  const countries = PROFILE_COUNTRIES.filter((country) =>
    country.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <ProfileOverlay
      background="#ffffff"
      panelClassName="w-full rounded-t-[24px] px-5 pt-5 pb-3 lg:w-[520px] lg:rounded-[18px] lg:px-6 lg:pb-6"
      onScrimClick={onClose}
    >
      <p className="text-[20px] leading-[26px] font-semibold text-[#121f1a] lg:leading-[30px]">
        {c.selectCountryTitle}
      </p>
      <p className="mt-[6px] text-[13px] leading-[18px] text-[#61756e] lg:leading-[19.5px]">
        {c.selectCountrySubtitle}
      </p>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={c.searchCountry}
        className="mt-[14px] h-[48px] w-full rounded-[14px] border border-[#d1dbd6] bg-white px-[13px] text-[13px] text-ink outline-none placeholder:text-[#61756e] focus:border-brand"
      />
      <div className="mt-3 flex flex-col gap-[2px] lg:gap-0">
        {countries.map((country) => {
          const isSelected = country === selected;
          return (
            <button
              key={country}
              type="button"
              onClick={() => onSelect(country)}
              className="flex h-[46px] items-center justify-between rounded-[10px] pl-3 text-left hover:bg-brand-soft pr-[30px] lg:pr-3"
            >
              <span
                className={`text-[14px] ${
                  isSelected
                    ? "font-semibold text-[#121f1a]"
                    : "text-[#121f1a]"
                }`}
              >
                {country}
              </span>
              {isSelected && <Check size={16} className="text-[#085b41]" />}
            </button>
          );
        })}
      </div>
      <button
        type="button"
        onClick={onClose}
        className="mt-0 flex h-[36px] w-full items-center justify-center rounded-[14px] border border-[#d1dbd6] bg-white text-[14px] font-semibold text-[#085b41] hover:bg-brand-soft lg:mt-[10px]"
      >
        {common.action.cancel}
      </button>
    </ProfileOverlay>
  );
}
