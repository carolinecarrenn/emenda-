import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { LOGS_COPY } from "../logs.copy";
import { InfoCard } from "./InfoCard";
import { LogsAction } from "./LogsAction";

export interface NoteFormField {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

interface NoteFormProps {
  /** The two captioned inputs above NOTE, in frame order:
   *  W-61H TITLE · CATEGORY, W-61L TYPE · DATE, W-61Q CATEGORY · TITLE. */
  fields: [NoteFormField, NoteFormField];
  body: string;
  onBodyChange: (value: string) => void;
  notePlaceholder: string;
  /** Mint privacy card. W-61I / W-61R (edit) draw no card — the lead line
   *  carries the privacy sentence instead — so both props stay undefined. */
  privacyTitle?: string;
  privacyBody?: string;
  saveLabel: string;
  onSave: () => void;
  onCancel: () => void;
}

/* Note form behind W-61H / 61I / 61L / 61L1 / 61Q / 61R.
   Mobile (W-61H · 1167:411) is a single 12px-gap column: the two captioned
   fields are 50px inputs, NOTE is a 128px box, all radius 12 with a 10px
   #596b61 caption 7px above them, then the mint privacy card (add frames only)
   and the 46px Save / Cancel pair.
   Desktop (WD-61H / WD-61L1) puts the same two fields side by side in 492px
   columns with a 28px gutter over an 84px NOTE field and 240/180px actions. */
export function NoteForm({
  fields,
  body,
  onBodyChange,
  notePlaceholder,
  privacyTitle,
  privacyBody,
  saveLabel,
  onSave,
  onCancel,
}: NoteFormProps) {
  const c = useSectionCopy(LOGS_COPY);
  const common = useCommonCopy();

  const labelClasses =
    "text-[10px] leading-[14px] font-semibold text-lp-muted lg:text-[11px] lg:leading-normal lg:text-lp-green";
  const inputClasses =
    "mt-[7px] h-[50px] w-full rounded-[12px] border border-lp-line bg-white px-[13px] text-[11px] text-lp-ink outline-none placeholder:text-lp-muted focus:border-lp-green lg:mt-[6px] lg:h-[64px] lg:px-[15px] lg:text-[13px]";

  return (
    <>
      {/* WD-61H · the first field label sits at y=286, 50px under the 40px
          subtitle box — not 24px. */}
      <div className="mt-[12px] grid gap-[12px] lg:mt-[50px] lg:grid-cols-2 lg:gap-[24px] lg:gap-x-[28px]">
        {fields.map((field) => (
          <div key={field.label}>
            <p className={labelClasses}>{field.label}</p>
            <input
              type="text"
              value={field.value}
              placeholder={field.placeholder}
              onChange={(event) => field.onChange(event.target.value)}
              className={inputClasses}
            />
          </div>
        ))}
      </div>

      {/* WD-61H · NOTE label at y=398 — 24px under the 64px field row. */}
      <div className="mt-[12px] lg:mt-[24px]">
        <p className={labelClasses}>{c.noteForm.noteLabel}</p>
        <textarea
          value={body}
          placeholder={notePlaceholder}
          onChange={(event) => onBodyChange(event.target.value)}
          className="mt-[7px] h-[128px] w-full resize-none rounded-[12px] border border-lp-line bg-white px-[13px] py-[11px] text-[11px] leading-[15px] text-lp-ink outline-none placeholder:text-lp-muted focus:border-lp-green lg:mt-[6px] lg:h-[84px] lg:px-[15px] lg:py-[14px] lg:text-[13px] lg:leading-[20px]"
        />
      </div>

      {privacyTitle !== undefined && privacyBody !== undefined && (
        <InfoCard
          className="mt-[12px] lg:mt-[14px]"
          size="sm"
          title={privacyTitle}
          body={privacyBody}
        />
      )}

      <div className="mt-[12px] flex flex-col gap-[12px] lg:mt-[24px] lg:flex-row lg:gap-4">
        <LogsAction
          label={saveLabel}
          onClick={onSave}
          heightClass="h-[46px]"
          widthClass="lg:w-[240px]"
        />
        <LogsAction
          label={common.action.cancel}
          onClick={onCancel}
          variant="outline"
          heightClass="h-[46px]"
          widthClass="lg:w-[180px]"
        />
      </div>
    </>
  );
}
