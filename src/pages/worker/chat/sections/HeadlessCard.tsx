import { useSectionCopy } from "@/i18n/copy";
import { CHAT_COPY } from "../chat.copy";
import { ChatBlockAction } from "./chatUi";

/* W-57 "No active employer connection" (1034:xxx "Availability" 350x82) and
   its offline twin W-57F (1037:426): a mint card with a 12/16 semibold lead
   over an 11/15 body, then a separate full-width 350x46 "Connect employer".
   W-57F renders that action in the offline-disabled treatment.
   Desktop WD-57 (1182:6121) keeps the centred 1012x220 white panel with the
   300px pill inside it. The MVP-scope sentence is verbatim UI copy. */
export function HeadlessCard({
  offline = false,
  className = "lg:mt-[92px]",
}: {
  offline?: boolean;
  /** WD-57F drops the panel 26px under the state banner instead. */
  className?: string;
}) {
  const c = useSectionCopy(CHAT_COPY);
  return (
    <div className={`flex flex-col gap-[12px] lg:min-h-[220px] lg:items-center lg:rounded-[18px] lg:border lg:border-lp-line lg:bg-white lg:px-[28px] lg:pt-[42px] lg:pb-[16px] lg:text-center ${className}`}>
      <div className="rounded-[14px] border border-[#d9e1dc] bg-lp-tint px-[14px] pt-[12px] pb-[19px] lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0">
        <p className="text-[12px] leading-[16px] font-semibold text-lp-ink lg:text-[20px] lg:leading-[32px]">
          {c.hub.headlessCardTitle}
        </p>
        <p className="mt-[5px] text-[11px] leading-[15px] text-lp-muted lg:mt-[14px] lg:max-w-[752px] lg:text-[14px] lg:leading-[22px]">
          {c.hub.headlessCardBody}
        </p>
      </div>

      <ChatBlockAction
        to={offline ? undefined : "/worker/employer"}
        muted={offline}
        className="lg:mt-[12px] lg:max-w-[300px]"
      >
        {c.hub.connectEmployer}
      </ChatBlockAction>
    </div>
  );
}
