import { Link } from "react-router-dom";
import { LANGUAGE_OPTIONS, useLanguage } from "@/i18n/language";

/* Auth-boundary header (Figma LP-05 nodes 1107:2/1107:3/1107:7 and
   LP-06/07/08 nodes 1053:983/1053:984/1053:988): the marketing nav is gone —
   only the EMENDA wordmark and the English/日本語/Bahasa pill remain, above a
   1px #d1ded6 divider. LP-05 draws a 96px bar with a 244x42 pill whose right
   edge lands at x=1332; the routing frames draw a 100px bar with a 250x44
   pill ending at x=1370. */

interface AccessHeaderProps {
  variant: "signin" | "routing";
}

const VARIANT = {
  signin: {
    bar: "lg:h-[96px] lg:pt-[10px] lg:pr-[108px] lg:pl-[62px]",
    wordmark: "text-[#054d3d]",
    pill: "h-[42px] lg:w-[244px] lg:gap-[2px] lg:px-[14px]",
    option: ["lg:w-[72px]", "lg:w-[68px]", "lg:w-[72px]"],
    active: "text-[#054d3d]",
    idle: "text-[#63756b] hover:text-[#054d3d]",
  },
  routing: {
    bar: "lg:h-[100px] lg:pt-[8px] lg:pr-[70px] lg:pl-[64px]",
    wordmark: "text-[#064a38]",
    pill: "h-[44px] lg:w-[250px] lg:gap-[6px] lg:px-[14px]",
    option: ["lg:w-[70px]", "lg:w-[65px]", "lg:w-[74px]"],
    active: "text-[#064a38]",
    idle: "text-[#5c6e63] hover:text-[#064a38]",
  },
} as const;

export function AccessHeader({ variant }: AccessHeaderProps) {
  const { language, setLanguage } = useLanguage();
  const v = VARIANT[variant];

  return (
    <header className="border-b border-[#d1ded6]">
      <div
        className={`mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-5 py-5 ${v.bar} lg:py-0`}
      >
        <Link to="/" className={`text-[22px] font-bold ${v.wordmark}`}>
          EMENDA
        </Link>
        <div
          className={`flex items-center justify-center gap-[22px] rounded-[22px] border border-[#d1ded6] bg-white px-[16px] ${v.pill}`}
        >
          {LANGUAGE_OPTIONS.map((option, index) => (
            <button
              key={option.code}
              type="button"
              onClick={() => setLanguage(option.code)}
              aria-pressed={language === option.code}
              className={`text-[13px] ${v.option[index]} ${
                language === option.code
                  ? `font-semibold ${v.active}`
                  : `transition-colors duration-150 ${v.idle}`
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
