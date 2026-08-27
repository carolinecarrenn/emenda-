import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { formatDisplayDate } from "@/i18n/format";
import { useCommonCopy } from "@/i18n/common";
import { REPORTS_STATES_COPY, fillCopy } from "../reports.copy";
import {
  CAREGIVER_PREVIEW,
  FOOD_PREVIEW,
  GENERAL_DRAFT,
  WAREHOUSE_PREVIEW,
} from "../reportsStatesMock";
import { OptionChip } from "./OptionChip";
import {
  ReadOnlyChipField,
  ReadOnlyField,
  ReadOnlyQuickNotes,
} from "./ReadOnlyField";
import type { TemplateKey } from "../reportTemplate";
import { TEMPLATE_CONTEXT } from "../templateDraft";
import { useTemplateFields } from "./useTemplateFields";

/* WD-55 page header: 13px semibold green "Reports" breadcrumb (mobile drops
   the shell chrome, so this link is the only way back), 32px H1 and the
   13px employer · date · shift meta line.
   `onLeave` lets the editable template form intercept the breadcrumb when the
   draft is dirty (W-55G / 55N / 55O / 55P) — it returns true to block. */
export function TemplateFormHeader({
  template,
  onLeave,
}: {
  template: TemplateKey;
  onLeave?: () => boolean;
}) {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  const common = useCommonCopy();
  const { language } = useLanguage();
  const context = TEMPLATE_CONTEXT[template];

  return (
    <>
      <Link
        to="/worker/reports"
        onClick={(event) => {
          if (onLeave?.()) event.preventDefault();
        }}
        className="text-[13px] font-semibold text-lp-green hover:text-lp-button"
      >
        {common.nav.reports}
      </Link>
      <h1 className="mt-[10px] text-[27px] leading-[32px] font-bold text-lp-ink lg:mt-[14px] lg:text-[32px] lg:leading-normal">
        {c.generalForm.title}
      </h1>
      <p className="mt-[10px] text-[11px] leading-[15px] text-lp-muted lg:mt-[7px] lg:text-[13px] lg:leading-normal">
        {context.employer} · {formatDisplayDate(context.date, language)} ·{" "}
        {context.shift}
      </p>
    </>
  );
}

/* "Template card".
   Mobile (W-55 node 978:108): #f0f8f3, border, radius 14, 13/11 padding,
   12px semibold ink title + 10px/14 muted body.
   Desktop (WD-55): same tint at 15/9/16 padding, 15px title, 12px body. */
export function TemplateCard({
  template,
  bodyOverride,
}: {
  template: TemplateKey;
  /** The review step (W-55B / 55K / 55M) swaps in its shorter applied note. */
  bodyOverride?: string;
}) {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  const employer = TEMPLATE_CONTEXT[template].employer;
  const { title } = useTemplateFields(template);

  const templateBody =
    template === "general"
      ? fillCopy(c.generalForm.templateBody, { employer })
      : template === "warehouse"
        ? c.templates.warehouseBody
        : template === "food"
          ? c.templates.foodBody
          : c.templates.caregiverBody;

  return (
    <div className="rounded-[14px] border border-lp-line bg-lp-tint px-[13px] py-[11px] lg:px-[15px] lg:pt-[9px] lg:pb-[16px]">
      <p className="text-[12px] font-semibold text-lp-ink lg:text-[15px]">
        {title}
      </p>
      <p className="mt-[4px] text-[10px] leading-[14px] text-lp-muted lg:mt-[7px] lg:text-[12px] lg:leading-normal">
        {bodyOverride === undefined ? (
          templateBody
        ) : (
          <>
            <span className="lg:hidden">{bodyOverride}</span>
            <span className="hidden lg:inline">{templateBody}</span>
          </>
        )}
      </p>
    </div>
  );
}

/* "REPORT STATUS".
   Mobile (W-55 node 978:111): caps 10px label on the canvas over a single row
   of read-only 30px pills. Desktop (WD-55): white card, radius 14. */
function ReportStatusPreview() {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  const options = [
    c.options.normal,
    c.options.needsAttention,
    c.options.urgent,
  ];

  return (
    <div className="lg:rounded-[14px] lg:border lg:border-lp-line lg:bg-white lg:px-[15px] lg:pt-[7px] lg:pb-[9px]">
      <p className="text-[10px] font-semibold text-lp-muted uppercase lg:text-[11px]">
        {c.generalForm.reportStatusLabel}
      </p>
      <div className="mt-[6px] flex flex-wrap gap-[8px] lg:mt-[9px] lg:gap-3">
        {options.map((option) => (
          <OptionChip
            key={option}
            label={option}
            readOnly
            selected={option === c.options.normal}
          />
        ))}
      </div>
    </div>
  );
}

/* "EMPLOYER VISIBILITY".
   Mobile (W-55 node 978:128): #f0f8f3 card, radius 14, 13/11 padding, caps
   12px ink label + 10px/14 muted body.
   Desktop (WD-55): radius 12 strip, caps 10px #054d3d label, 12px body. */
export function EmployerVisibilityPreview() {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  return (
    <div className="rounded-[14px] border border-lp-line bg-lp-tint px-[13px] py-[11px] lg:rounded-[12px] lg:px-[15px] lg:pt-[8px] lg:pb-[15px]">
      <p className="text-[12px] font-semibold text-lp-ink uppercase lg:text-[10px] lg:text-lp-green">
        {c.generalForm.visibilityLabel}
      </p>
      <p className="mt-[4px] text-[10px] leading-[14px] text-lp-muted lg:mt-[10px] lg:text-[12px] lg:leading-normal">
        {c.generalForm.visibilityBody}
      </p>
    </div>
  );
}

function FieldGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-[10px] lg:grid-cols-2 lg:gap-4 lg:gap-x-7">
      {children}
    </div>
  );
}

/**
 * Read-only body of an employer-assigned report template.
 * `banner` renders above the template card (WD-55C / 55E / 55F state banners)
 * and `footer` below the 300px "Review report" button (the restored helper /
 * note cards of WD-55A / 55C / 55E / 55F).
 */
export function TemplateFormBody({
  template,
  banner,
  footer,
  invalidWorkSummary = false,
  primaryLabel,
  primaryDisabled = false,
  footerPlacement = "both",
}: {
  template: TemplateKey;
  banner?: ReactNode;
  footer?: ReactNode;
  invalidWorkSummary?: boolean;
  /** W-55E replaces the mobile button label with "Try again". */
  primaryLabel?: string;
  /** W-55F / W-55A render the mobile button in its disabled treatment. */
  primaryDisabled?: boolean;
  /** W-55A keeps its helper card on desktop only — mobile carries the inline
   *  field error instead. */
  footerPlacement?: "both" | "desktop";
}) {
  const c = useSectionCopy(REPORTS_STATES_COPY);
  const statusOptions = [
    c.options.normal,
    c.options.needsAttention,
    c.options.urgent,
  ];

  return (
    <div className="mt-[10px] lg:mt-[18px]">
      {banner !== undefined && <div className="hidden lg:block">{banner}</div>}
      <div className={banner === undefined ? "" : "lg:mt-[18px]"}>
        <TemplateCard template={template} />
      </div>
      <div className="mt-[10px] lg:mt-[18px]">
        <ReportStatusPreview />
      </div>

      {template === "general" && (
        <div className="mt-[10px] lg:mt-4">
          <FieldGrid>
            {invalidWorkSummary ? (
              <>
                {/* W-55A mobile (node 978:147): the box is EMPTY and the error
                    is a plain 10px/14 red line under it. WD-55A keeps the error
                    inside the field. */}
                <div className="lg:hidden">
                  <ReadOnlyField
                    surface="form"
                    label={c.generalForm.workSummaryLabel}
                    value=""
                    tone="error"
                  />
                  <p className="mt-[5px] text-[10px] leading-[14px] text-[#b82e24]">
                    {c.validationError.helper}
                  </p>
                </div>
                <div className="hidden lg:block">
                  <ReadOnlyField
                    surface="form"
                    label={c.generalForm.workSummaryLabel}
                    value={c.validationError.fieldError}
                    tone="error"
                  />
                </div>
              </>
            ) : (
              <ReadOnlyField
                surface="form"
                label={c.generalForm.workSummaryLabel}
                value={GENERAL_DRAFT.workSummary}
              />
            )}
            <ReadOnlyField
              surface="form"
              label={c.generalForm.followUpLabel}
              value={GENERAL_DRAFT.followUp}
            />
          </FieldGrid>
        </div>
      )}

      {template === "warehouse" && (
        <>
          <div className="mt-[10px] lg:mt-4">
            <FieldGrid>
              <ReadOnlyField
                surface="form"
                label={c.templates.workAreaLabel}
                value={WAREHOUSE_PREVIEW.workArea}
                size="sm"
              />
              <ReadOnlyChipField
                label={c.templates.safetyStatusLabel}
                options={statusOptions}
                selected={c.options.normal}
              />
              <ReadOnlyField
                surface="form"
                label={c.templates.quantityLabel}
                value={WAREHOUSE_PREVIEW.quantity}
                size="sm"
              />
              <ReadOnlyField
                surface="form"
                label={c.templates.operationalNotesLabel}
                value={WAREHOUSE_PREVIEW.notes}
                size="sm"
              />
            </FieldGrid>
          </div>
          <div className="mt-[10px] lg:mt-4">
            <ReadOnlyQuickNotes
              label={c.templates.quickNotesLabel}
              notes={WAREHOUSE_PREVIEW.quickNotes}
            />
          </div>
        </>
      )}

      {template === "food" && (
        <>
          <div className="mt-[10px] lg:mt-4">
            <FieldGrid>
              <ReadOnlyField
                surface="form"
                label={c.templates.stationAreaLabel}
                value={FOOD_PREVIEW.stationArea}
                size="sm"
              />
              <ReadOnlyChipField
                label={c.templates.serviceConditionLabel}
                options={statusOptions}
                selected={c.options.normal}
              />
              <ReadOnlyField
                surface="form"
                label={c.templates.stockStatusLabel}
                value={FOOD_PREVIEW.stockStatus}
                size="sm"
              />
              <ReadOnlyField
                surface="form"
                label={c.templates.handoverNotesLabel}
                value={FOOD_PREVIEW.handoverNotes}
                size="sm"
              />
            </FieldGrid>
          </div>
          <div className="mt-[10px] lg:mt-4">
            <ReadOnlyQuickNotes
              label={c.templates.quickNotesLabel}
              notes={FOOD_PREVIEW.quickNotes}
            />
          </div>
        </>
      )}

      {template === "caregiver" && (
        <>
          <div className="mt-[10px] lg:mt-4">
            <FieldGrid>
              <ReadOnlyField
                surface="form"
                label={c.templates.residentLabel}
                value={CAREGIVER_PREVIEW.resident}
                size="sm"
              />
              <ReadOnlyChipField
                label={c.templates.residentConditionLabel}
                options={[
                  c.options.stable,
                  c.options.needsAttention,
                  c.options.urgent,
                ]}
                selected={c.options.stable}
              />
              <ReadOnlyField
                surface="form"
                label={c.templates.mealLabel}
                value={CAREGIVER_PREVIEW.meal}
                size="sm"
              />
              <ReadOnlyField
                surface="form"
                label={c.templates.careNotesLabel}
                value={CAREGIVER_PREVIEW.careNotes}
                size="sm"
              />
            </FieldGrid>
          </div>
          <div className="mt-[10px] lg:mt-4">
            <ReadOnlyQuickNotes
              label={c.templates.quickNotesLabel}
              notes={CAREGIVER_PREVIEW.quickNotes}
            />
          </div>
        </>
      )}

      <div
        className={
          template === "general"
            ? "mt-[10px] lg:mt-4"
            : "mt-[10px] lg:mt-[14px]"
        }
      >
        <EmployerVisibilityPreview />
      </div>
      {footer !== undefined && footerPlacement === "both" && (
        <div className="mt-[10px] lg:hidden">{footer}</div>
      )}
      <div className="mt-[10px] lg:mt-[24px]">
        <div
          className={`flex h-[46px] w-full items-center justify-center rounded-[13px] text-[12px] font-semibold text-white lg:h-[44px] lg:w-[300px] lg:rounded-[12px] lg:bg-lp-button lg:text-[13px] lg:opacity-100 ${
            primaryDisabled ? "bg-[#94b2a6] opacity-45" : "bg-lp-button"
          }`}
        >
          <span className="lg:hidden">
            {primaryLabel ?? c.generalForm.reviewReport}
          </span>
          <span className="hidden lg:inline">{c.generalForm.reviewReport}</span>
        </div>
      </div>
      {footer !== undefined && (
        <div className="mt-4 hidden lg:mt-[14px] lg:block">{footer}</div>
      )}
    </div>
  );
}
