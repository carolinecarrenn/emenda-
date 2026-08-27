import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { FOLLOW_UP_COPY } from "../followup.copy";
import type { FollowUpSignal } from "../followupMock";
import {
  fill,
  signalCurrentLower,
  signalExpected,
  signalLogLine,
} from "./followupLabels";

/* EM-09A "SIGNAL CONTEXT" (1030:169 heading · 1030:170 card): white card,
   radius 14, #d6e3de hairline — two 10px #094033 columns contrasting
   "Expected · 08:00 today" with "Current · not submitted", then the 10px
   #6e8a82 mini-log (last report / marked missing / no worker message) set
   tight on a 12px leading. */
export function SignalContextCard({ signal }: { signal: FollowUpSignal }) {
  const c = useSectionCopy(FOLLOW_UP_COPY);
  const { language } = useLanguage();

  return (
    <section>
      <h2 className="text-[10px] font-semibold text-[#094033] uppercase lg:text-[11px]">
        {c.review.contextTitle}
      </h2>
      <div className="mt-[5px] rounded-[14px] border border-[#d6e3de] bg-white px-[14px] py-[14px]">
        <div className="grid grid-cols-2 gap-x-[12px] gap-y-[6px]">
          <p className="text-[10px] font-semibold text-[#094033] lg:text-[12px]">
            {fill(c.review.expectedLabel, { value: signalExpected(c, signal) })}
          </p>
          <p className="text-[10px] font-semibold text-[#094033] lg:text-[12px]">
            {fill(c.review.currentLabel, {
              value: signalCurrentLower(c, signal),
            })}
          </p>
        </div>
        <div className="mt-[12px]">
          {signal.log.map((entry) => (
            <p
              key={`${entry.time}-${entry.kind}`}
              className="text-[10px] leading-[12px] text-[#6e8a82] lg:text-[11px] lg:leading-[16px]"
            >
              {signalLogLine(c, entry, language)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
