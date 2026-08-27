import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { JAPAN_COPY } from "../japan.copy";
import { BackLink } from "../sections/BackLink";
import { DiscardSheet } from "../sections/Overlays";
import { SecondaryButton } from "../sections/PrimaryButton";
import { MilestoneCard } from "./sections/MilestoneCard";
import { PlanSummaryCard } from "./sections/PlanSummaryCard";
import { VisaPlanForm } from "./sections/VisaPlanForm";

const EDIT_STATES = new Set([
  "edit",
  "saving",
  "save-failed",
  "offline",
  "validation-error",
  "unsaved",
  "planned-status",
  "entry-status",
  "arrival-date",
]);

/** Pre-arrival Visa Plan (Figma WD-32F, node 1014:381) and its edit flow
 *  (WD-32G..O). View: mint plan summary + amber milestone callout +
 *  stacked green actions between disclaimers. */
export function VisaPlanPage() {
  const state = useScreenState();
  const c = useSectionCopy(JAPAN_COPY);
  const navigate = useNavigate();

  const isEdit = state !== null && EDIT_STATES.has(state);

  const editSubtitle =
    state === "saving"
      ? c.visaPlan.subtitleSaving
      : state === "save-failed"
        ? c.visaPlan.subtitleSaveFailed
        : state === "offline"
          ? c.visaPlan.subtitleOffline
          : state === "validation-error"
            ? c.visaPlan.subtitleValidation
            : c.visaPlan.editSubtitle;

  const [discardOverride, setDiscardOverride] = useState<boolean | null>(null);
  const discardOpen = discardOverride ?? state === "unsaved";

  return (
    <div className="max-w-[1080px] pt-[20px] lg:pt-0">
      <BackLink
        onIntercept={isEdit ? () => setDiscardOverride(true) : undefined}
      />
      <h1 className="mt-[14px] text-[30px] leading-[42px] font-bold text-[#131f1a] lg:mt-[12px] lg:text-[32px]">
        {isEdit && state !== "saving" ? c.visaPlan.editTitle : c.visaPlan.title}
      </h1>
      <p className="mt-[4px] text-[13px] leading-[22px] text-[#5e7066] lg:mt-[6px] lg:min-h-[44px] lg:text-[15px]">
        {isEdit ? editSubtitle : c.visaPlan.subtitle}
      </p>

      <div className="mt-[18px]">
        {isEdit ? (
          <VisaPlanForm state={state ?? "edit"} />
        ) : (
          /* W-32F order: plan summary → Edit plan → milestone → Manage
             important dates → disclaimer. Desktop keeps the WD-32F pairing
             of summary + milestone with the actions below. */
          <div className="flex flex-col gap-y-[20px] lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-[40px] lg:gap-y-[24px]">
            <PlanSummaryCard />
            <MilestoneCard className="order-3 lg:order-2" />
            <SecondaryButton
              label={c.visaPlan.editPlan}
              to="/worker/japan/visa-plan?state=edit"
              sizeClass="h-[44px] rounded-[14px] lg:h-[52px] lg:rounded-[12px]"
              className="order-2 lg:order-5 lg:col-span-2 lg:border-transparent lg:bg-[#08664d] lg:text-white lg:hover:bg-[#0b6b57]"
            />
            <SecondaryButton
              label={c.visaPlan.manageImportantDates}
              to="/worker/japan/dates"
              sizeClass="h-[48px] rounded-[13px] lg:h-[52px] lg:rounded-[12px]"
              className="order-4 lg:order-3 lg:col-span-2 lg:border-transparent lg:bg-[#08664d] lg:text-white lg:hover:bg-[#0b6b57]"
            />
            <p className="order-5 text-[11px] leading-[19px] text-[#5e7066] lg:order-4 lg:col-span-2 lg:text-[12px]">
              {c.visaPlan.disclaimer}
            </p>
          </div>
        )}
      </div>

      {discardOpen && (
        <DiscardSheet
          title={c.visaPlan.discardTitle}
          body={c.visaPlan.discardBody}
          onKeep={() => setDiscardOverride(false)}
          onDiscard={() => navigate("/worker/japan")}
        />
      )}
    </div>
  );
}
