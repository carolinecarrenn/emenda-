import { useSectionCopy } from "@/i18n/copy";
import { ADMIN_COPY } from "../admin.copy";

/* Derived loading placeholder for AD-01 (?state=loading). The Figma frame
   1182:5692 draws a single populated state — no lettered variants — so this
   is not a mock screen: it only repeats the frame's own geometry (112px KPI
   cards, the 250px 676/452 pair, the 244px 396/732 pair) as quiet #eef3ef
   blocks while the company snapshot loads. */
export function AdminDashboardSkeleton() {
  const c = useSectionCopy(ADMIN_COPY);

  return (
    <div
      role="status"
      aria-label={c.shell.loading}
      aria-busy="true"
      className="flex w-full max-w-[1144px] animate-pulse flex-col gap-[16px]"
    >
      <div className="flex flex-col gap-[12px] lg:h-[42px] lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-[6px]">
          <div className="h-[22px] w-[220px] rounded-[6px] bg-[#eef3ef]" />
          <div className="h-[10px] w-[320px] max-w-full rounded-[4px] bg-[#eef3ef]" />
        </div>
        {/* Same 116/112 x 31 pair, on the same 32px inset, that DashboardIntro
            resolves to (1182:5793 / :5795) — so nothing shifts on load. */}
        <div className="flex gap-[12px] lg:mr-[32px]">
          <div className="h-[32px] w-[120px] rounded-[10px] bg-[#eef3ef] lg:h-[31px] lg:w-[116px]" />
          <div className="h-[32px] w-[120px] rounded-[10px] bg-[#eef3ef] lg:h-[31px] lg:w-[112px]" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 xl:grid-cols-4">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="h-[112px] rounded-[12px] border border-[#d6e3de] bg-white p-[14px]"
          >
            <div className="size-[30px] rounded-[9px] bg-[#eef3ef]" />
            <div className="mt-[14px] h-[24px] w-[80px] rounded-[6px] bg-[#eef3ef]" />
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-[16px] lg:flex-row">
        <div className="h-[250px] rounded-[12px] border border-[#d6e3de] bg-white lg:w-[676px]" />
        <div className="h-[250px] rounded-[12px] border border-[#d6e3de] bg-white lg:w-[452px]" />
      </div>

      <div className="flex flex-col gap-[16px] lg:flex-row">
        <div className="h-[244px] rounded-[12px] border border-[#d6e3de] bg-white lg:w-[396px]" />
        <div className="h-[244px] rounded-[12px] border border-[#d6e3de] bg-white lg:w-[732px]" />
      </div>
    </div>
  );
}
