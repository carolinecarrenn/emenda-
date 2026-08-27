import { useSectionCopy } from "@/i18n/copy";
import { STATES_COPY } from "../states.copy";
import { StateActionButton } from "./StateActionButton";

/* AD-10 intro row (1225:1320): a 44px band across the 1144 column —
   "Reference states for empty and permission boundaries" 22px bold #17362e
   over the 9px #65746d line, with the outline "Review scope" and dark-green
   "Invite employee" buttons pinned right. */
export function StatesIntro() {
  const c = useSectionCopy(STATES_COPY);

  return (
    <div className="flex flex-col gap-[12px] lg:h-[44px] lg:flex-row lg:items-start">
      <div className="flex min-w-0 flex-1 flex-col gap-[7px]">
        <h2 className="text-[20px] leading-none font-bold text-[#17362e] lg:text-[22px]">
          {c.screen.heading}
        </h2>
        <p className="text-[11px] leading-[15px] text-[#65746d] lg:text-[9px] lg:leading-none">
          {c.screen.subheading}
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-[10px] lg:mt-[6px]">
        <StateActionButton to="/admin/states?state=no-permission" variant="outline">
          {c.screen.reviewScope}
        </StateActionButton>
        <StateActionButton to="/admin/employees" variant="primary">
          {c.screen.inviteEmployee}
        </StateActionButton>
      </div>
    </div>
  );
}
