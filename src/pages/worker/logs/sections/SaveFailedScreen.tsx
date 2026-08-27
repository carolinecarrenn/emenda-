import { useSectionCopy } from "@/i18n/copy";
import { LOGS_COPY } from "../logs.copy";
import { LogsAction } from "./LogsAction";
import { LogsHeader } from "./LogsHeader";
import { StateBanner } from "./StateBanner";

interface SaveFailedScreenProps {
  crumb: string;
  crumbTo: string;
  /** W-61M4 reuses the chassis with the stress-check wording. */
  title?: string;
  subtitle?: string;
  cardTitle?: string;
  cardBody?: string;
  /** "Back to edit" returns to the still-filled form. */
  onBackToEdit: () => void;
  onRetry: () => void;
}

/* WD-61T (1187:1347) · mobile W-61T (1167:911) — a failed save is its own
   screen, not a banner over the form: the "Couldn't save changes" H1, the
   1012x84 red failure card at y=300 and two stacked actions. Desktop puts
   "Back to edit" (200x46) above "Try saving again" (220x44); the mobile frame
   leads with the retry, so the pair is reordered with flex `order`. */
export function SaveFailedScreen({
  crumb,
  crumbTo,
  title,
  subtitle,
  cardTitle,
  cardBody,
  onBackToEdit,
  onRetry,
}: SaveFailedScreenProps) {
  const c = useSectionCopy(LOGS_COPY);

  return (
    <div className="max-w-[1012px] pt-4 lg:pt-[2px]">
      <LogsHeader
        crumb={crumb}
        crumbTo={crumbTo}
        title={title ?? c.saveFailed.title}
        subtitle={subtitle ?? c.saveFailed.subtitle}
      />

      <StateBanner
        className="mt-[12px] lg:mt-[64px] lg:min-h-[84px]"
        tone="red"
        title={cardTitle ?? c.saveFailed.cardTitle}
        body={cardBody ?? c.saveFailed.cardBody}
      />

      <div className="mt-[12px] flex flex-col gap-[12px] lg:mt-[32px] lg:gap-4">
        <LogsAction
          /* W-61T 1167:941 keeps "Back to edit" as the outline choice on
             mobile; the desktop pair stays filled. */
          variant="outline"
          className="order-2 lg:order-1 lg:border-0 lg:bg-lp-button lg:text-white lg:hover:bg-lp-green"
          label={c.saveFailed.backToEdit}
          onClick={onBackToEdit}
          heightClass="h-[46px]"
          widthClass="lg:w-[200px]"
        />
        <LogsAction
          className="order-1 lg:order-2"
          label={c.saveFailed.retry}
          onClick={onRetry}
          heightClass="h-[46px] lg:h-[44px]"
          widthClass="lg:w-[220px]"
        />
      </div>
    </div>
  );
}
