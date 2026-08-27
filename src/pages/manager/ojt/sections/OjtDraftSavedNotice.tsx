import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "../ojt.copy";

/* EM-14B "Save Draft" outcome. The mock keeps the manager on the editor and
   restates that saving is not publishing, so the confirmation is an inline
   mint strip rather than a route change: radius 12, #e8f5f0 on a #ccded6
   hairline, 10px semibold #083d2d title over a 9px #667a73 line. */
export function OjtDraftSavedNotice() {
  const c = useSectionCopy(OJT_COPY);

  return (
    <div
      role="status"
      className="rounded-[12px] border border-[#ccded6] bg-[#e8f5f0] px-[14px] py-[10px]"
    >
      <p className="text-[10px] font-semibold text-[#083d2d] lg:text-[12px]">
        {c.review.draftSavedToast}
      </p>
      <p className="mt-[5px] text-[9px] text-[#667a73] lg:text-[11px]">
        {c.review.draftSavedBody}
      </p>
    </div>
  );
}

/* EM-14B publication gate: shown when a human-review box is unchecked, so
   the "Approve & Publish" CTA is disabled. 9px #8a6116 on the caution tint. */
export function OjtPublishBlockedNotice() {
  const c = useSectionCopy(OJT_COPY);

  return (
    <p className="rounded-[12px] border border-[#ccded6] bg-[#fff5c7] px-[14px] py-[9px] text-[9px] text-[#8a6116] lg:text-[11px]">
      {c.review.blockedNote}
    </p>
  );
}
