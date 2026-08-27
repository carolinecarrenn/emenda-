import { useSectionCopy } from "@/i18n/copy";
import { formatDisplayDate } from "@/i18n/format";
import { useLanguage } from "@/i18n/language";
import { ADMIN_COPY } from "../admin.copy";
import { ADMIN_ORG, ADMIN_TODAY, ADMIN_USER } from "../admin.mock";

/* AD-01 "Dashboard Intro" (1182:5789): 42px row — "Good evening, Nadia"
   22px bold #17362f over the 9px #65746d dated meta line, then the outline
   "Export summary" and dark-green "Invite employee" buttons (radius 10,
   14/9 padding, 11px semibold). */
export function DashboardIntro() {
  const c = useSectionCopy(ADMIN_COPY);
  const { language } = useLanguage();

  const meta = [
    `${c.intro.weekday}, ${formatDisplayDate(ADMIN_TODAY, language)}`,
    ADMIN_ORG,
    c.intro.syncedJustNow,
  ].join(" · ");

  return (
    <div className="flex flex-col gap-[12px] lg:h-[42px] lg:flex-row lg:items-center">
      <div className="flex min-w-0 flex-1 flex-col gap-[2px]">
        <p className="text-[22px] leading-none font-bold text-[#17362f]">
          {c.intro.greeting.replace("{name}", ADMIN_USER.name)}
        </p>
        <p className="text-[11px] leading-[16px] text-[#65746d] lg:text-[9px] lg:leading-none">
          {meta}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-[12px] lg:mr-[32px]">
        <button
          type="button"
          className="flex items-center justify-center rounded-[10px] border border-[#d6e3de] bg-white px-[14px] py-[9px] text-[11px] font-semibold whitespace-nowrap text-[#083d2d] hover:bg-[#f2f7f5] lg:h-[31px] lg:w-[116px] lg:px-0 lg:py-0"
        >
          {c.intro.exportSummary}
        </button>
        <button
          type="button"
          className="flex items-center justify-center rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[14px] py-[9px] text-[11px] font-semibold whitespace-nowrap text-white hover:bg-[#0c5941] lg:h-[31px] lg:w-[112px] lg:px-0 lg:py-0"
        >
          {c.intro.inviteEmployee}
        </button>
      </div>
    </div>
  );
}
