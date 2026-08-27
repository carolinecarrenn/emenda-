import { FIELD_LABEL } from "./fieldShell";

/* Editable twin of ReadOnlyQuickNotes — W-55H / 55J / 55L "QUICK NOTES".
   Mobile (W-55J node 989:114): caps label on the canvas over a two-column
   grid of white 30px pills. Desktop (WD-55J): #f2f9f5 strip, radius 12,
   white 26px chips with #054d3d labels; a selected chip fills mint.
   Chip labels are mock data, never translated. */
export function TemplateQuickNotes({
  label,
  notes,
  selected,
  onToggle,
}: {
  label: string;
  notes: readonly string[];
  selected: readonly string[];
  onToggle: (note: string) => void;
}) {
  return (
    <div className="lg:rounded-[12px] lg:border lg:border-lp-line lg:bg-lp-tint lg:px-[13px] lg:pt-[8px] lg:pb-[9px]">
      <p className={FIELD_LABEL}>{label}</p>
      <div className="mt-[6px] grid grid-cols-2 gap-[8px] lg:mt-[10px] lg:flex lg:flex-wrap lg:gap-[10px]">
        {notes.map((note) => {
          const isSelected = selected.includes(note);
          return (
            <button
              key={note}
              type="button"
              aria-pressed={isSelected}
              onClick={() => onToggle(note)}
              className={`flex h-[30px] items-center justify-center rounded-[15px] border border-lp-line px-[10px] text-[10px] font-medium text-lp-ink hover:border-lp-green lg:h-[26px] lg:min-w-[116px] lg:shrink-0 lg:rounded-[13px] lg:px-[23px] lg:font-semibold lg:text-lp-green ${
                isSelected ? "bg-lp-mint" : "bg-white"
              }`}
            >
              {note}
            </button>
          );
        })}
      </div>
    </div>
  );
}
