import { useSectionCopy } from "@/i18n/copy";
import { ADMINFOLLOWUP_COPY } from "../followup.copy";

/* AD-05 "Admin playbook" (1223:2361): 288x244 #f7faf8 panel, radius 10 —
   a 10px semibold #65746d label over four bullet rows, each a 7px dot with
   its 9px #17362e rule, 38px apart. */
export function AdminPlaybookPanel() {
  const c = useSectionCopy(ADMINFOLLOWUP_COPY);

  const rules = [
    c.queue.playbook.assignOwner,
    c.queue.playbook.escalateNoUpdate,
    c.queue.playbook.closeAfterOutcome,
    c.queue.playbook.captureEvidence,
  ];

  return (
    <div className="flex flex-col gap-[16px] rounded-[10px] bg-[#f7faf8] p-[12px] lg:h-[244px]">
      <p className="text-[10px] leading-none font-semibold text-[#65746d]">
        {c.queue.playbook.title}
      </p>
      <ul className="flex flex-col gap-[14px] lg:gap-[29px]">
        {rules.map((rule) => (
          <li key={rule} className="flex items-start gap-[9px]">
            <span
              className="mt-[3px] size-[7px] shrink-0 rounded-full bg-[#083d2d]"
              aria-hidden="true"
            />
            <span className="text-[10px] leading-[13px] text-[#17362e] lg:text-[9px]">
              {rule}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
