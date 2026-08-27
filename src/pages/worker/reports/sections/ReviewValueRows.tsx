import {
  ReadOnlyChipField,
  ReadOnlyField,
  ReadOnlyQuickNotes,
} from "./ReadOnlyField";
import { FIELD_LABEL } from "./fieldShell";

/**
 * Review-step twins of the chip and quick-note rows (W-55B / 55I / 55K / 55M).
 *
 * The mobile review mock (node 989:180) is a read-back, not a picker: the
 * condition row collapses to a plain value box and the quick notes collapse to
 * a #f0f8f3 card listing the notes as one "·"-joined line. The desktop review
 * (WD-55K) keeps the chip row and the chip strip, so both renderings are kept
 * and each is shown at its own breakpoint — nothing is dropped.
 */

export function ReviewConditionRow({
  label,
  options,
  selected,
}: {
  label: string;
  options: readonly string[];
  selected: string;
}) {
  return (
    <>
      <div className="lg:hidden">
        <ReadOnlyField label={label} value={selected} size="sm" />
      </div>
      <div className="hidden lg:block">
        <ReadOnlyChipField
          label={label}
          options={options}
          selected={selected}
        />
      </div>
    </>
  );
}

export function ReviewQuickNotesRow({
  label,
  notes,
}: {
  label: string;
  notes: readonly string[];
}) {
  return (
    <>
      <div className="rounded-[14px] border border-lp-line bg-lp-tint px-[13px] py-[11px] lg:hidden">
        <p className={`${FIELD_LABEL} text-[12px] text-lp-ink`}>{label}</p>
        <p className="mt-[4px] text-[11px] leading-[16px] text-lp-muted">
          {notes.join(" · ")}
        </p>
      </div>
      <div className="hidden lg:block">
        <ReadOnlyQuickNotes label={label} notes={notes} />
      </div>
    </>
  );
}
