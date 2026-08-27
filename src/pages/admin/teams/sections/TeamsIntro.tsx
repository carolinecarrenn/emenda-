import { useSectionCopy } from "@/i18n/copy";
import { ADMINTEAMS_COPY } from "../teams.copy";
import { PrimaryButton, SecondaryButton } from "./teamsUi";

/* AD-03 intro row (1223:1200): 44px band — "Review teams, managers, and
   workload coverage" 22px bold #17362e over the 9px #65746d line, with the
   outline "Export structure" and dark-green "Assign manager" buttons pinned
   right (radius 10, 11px semibold). */
export function TeamsIntro({
  onAssignManager,
}: {
  onAssignManager: () => void;
}) {
  const c = useSectionCopy(ADMINTEAMS_COPY);

  return (
    <div className="flex flex-col gap-[12px] lg:h-[44px] lg:flex-row lg:items-center">
      <div className="flex min-w-0 flex-1 flex-col gap-[6px]">
        <p className="text-[20px] leading-[26px] font-bold text-[#17362e] lg:text-[22px] lg:leading-none">
          {c.intro.title}
        </p>
        <p className="text-[11px] leading-none text-[#65746d] lg:text-[9px]">
          {c.intro.subtitle}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-[16px]">
        <SecondaryButton
          label={c.intro.exportStructure}
          className="flex-1 lg:w-[116px] lg:flex-none"
        />
        <PrimaryButton
          label={c.intro.assignManager}
          onClick={onAssignManager}
          className="flex-1 lg:w-[115px] lg:flex-none"
        />
      </div>
    </div>
  );
}
