import { BellRing } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { MOCKS_COPY } from "@/pages/marketing/mocks.copy";
import { BrandMark } from "../BrandMark";

/**
 * Continuity mockup: EMENDA comes back to the thing you were trying to do, you
 * say it did not happen yet, and the next message already accounts for that.
 * The middle option is drawn as chosen so the exchange reads in one glance
 * instead of needing a caption.
 */
export function FollowUpCard() {
  const m = useSectionCopy(MOCKS_COPY);

  return (
    <div className="space-y-3">
      <div className="rounded-[22px] border border-lp-line bg-white p-5 shadow-lp-md">
        <div className="flex items-center gap-2.5">
          <BrandMark size={26} />
          <p className="text-[12px] font-semibold text-lp-ink">
            {m.assistant.appName}
          </p>
        </div>
        <p className="mt-3.5 text-[14px] leading-[1.55] font-medium text-lp-ink">
          {m.followUp.question}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {m.followUp.options.map((option, index) => (
            <span
              key={option}
              className={`rounded-full px-3.5 py-2 text-[12px] font-semibold ${
                index === 1
                  ? "bg-lp-button text-white shadow-lp-sm"
                  : "border border-lp-line bg-lp-tint text-lp-green"
              }`}
            >
              {option}
            </span>
          ))}
        </div>
      </div>

      <div className="ml-6 rounded-[22px] rounded-tl-[8px] border border-lp-line bg-lp-tint p-5 sm:ml-10">
        <p className="text-[13.5px] leading-[1.6] text-lp-ink">
          {m.followUp.reply}
        </p>
        <span className="mt-3.5 inline-flex items-center gap-2 rounded-full border border-lp-line bg-white px-3.5 py-2 text-[12px] font-semibold text-lp-green">
          <BellRing size={14} strokeWidth={1.9} aria-hidden="true" />
          {m.followUp.replyAction}
        </span>
      </div>
    </div>
  );
}
