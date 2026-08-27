import { QUICK_NOTES, type QuickNote } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useLanguage } from "@/i18n/language";
import { localizeTerm } from "@/i18n/terms";
import { CAREGIVER_COPY } from "../caregiver.copy";
import { FIELD_LABEL } from "./fieldShell";

/* "Quick notes".
   Mobile (W-55H node 978:408): caps label on the canvas over a two-column
   grid of white 30px pills. Desktop (WD-55H): #f2f9f5 strip, radius 12,
   white 26px chips with #054d3d labels; selected = mint fill. */
export function QuickNotesStrip({
  selected,
  onToggle,
  readOnly = false,
}: {
  selected: readonly QuickNote[];
  onToggle?: (note: QuickNote) => void;
  readOnly?: boolean;
}) {
  const c = useSectionCopy(CAREGIVER_COPY);
  const { language } = useLanguage();

  return (
    <div className="lg:rounded-[12px] lg:border lg:border-lp-line lg:bg-lp-tint lg:px-[13px] lg:pt-[8px] lg:pb-[9px]">
      <p className={FIELD_LABEL}>{c.form.quickNotes}</p>
      <div className="mt-[6px] grid grid-cols-2 gap-[8px] lg:mt-[10px] lg:flex lg:flex-wrap lg:gap-[10px]">
        {QUICK_NOTES.map((note) => {
          const isSelected = selected.includes(note);
          const base = `flex h-[30px] items-center justify-center rounded-[15px] border border-lp-line px-[10px] text-[10px] font-medium lg:h-[26px] lg:min-w-[116px] lg:shrink-0 lg:rounded-[13px] lg:px-[23px] lg:font-semibold lg:text-lp-green ${
            isSelected
              ? "bg-lp-mint text-lp-green"
              : "bg-white text-lp-ink lg:text-lp-green"
          }`;
          if (readOnly) {
            return (
              <span key={note} className={base}>
                {localizeTerm(note, language)}
              </span>
            );
          }
          return (
            <button
              key={note}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onToggle?.(note)}
              className={`${base} hover:border-lp-green`}
            >
              {localizeTerm(note, language)}
            </button>
          );
        })}
      </div>
    </div>
  );
}
