import { useSectionCopy } from "@/i18n/copy";
import { ADMINEMPLOYEES_COPY } from "../employees.copy";

/* AD-02 header block (1223:811): a 1144x44 row — the 22px bold #17362f
   headline over its 9px #65746d line, with the outlined "Export list" (82x32)
   and the filled #083d2d "Invite employee" (112x32) pushed to the right.
   Below lg the pair wraps under the heading, full width. */
export function EmployeesIntro({ onInvite }: { onInvite: () => void }) {
  const c = useSectionCopy(ADMINEMPLOYEES_COPY);

  return (
    <div className="flex flex-col gap-[12px] lg:h-[44px] lg:flex-row lg:items-start lg:gap-[16px]">
      <div className="flex min-w-0 flex-1 flex-col gap-[7px]">
        <h2 className="text-[20px] leading-none font-bold text-[#17362f] lg:text-[22px]">
          {c.intro.title}
        </h2>
        <p className="text-[11px] leading-none text-[#65746d] lg:text-[9px]">
          {c.intro.subtitle}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-[12px] lg:mt-[6px] lg:gap-[50px]">
        <button
          type="button"
          className="h-[32px] rounded-[10px] border border-[#d6e3de] bg-white px-[13px] text-[11px] font-semibold text-[#083d2d]"
        >
          {c.intro.exportList}
        </button>
        <button
          type="button"
          onClick={onInvite}
          className="h-[32px] rounded-[10px] border border-[#083d2d] bg-[#083d2d] px-[13px] text-[11px] font-semibold text-white"
        >
          {c.intro.inviteEmployee}
        </button>
      </div>
    </div>
  );
}
