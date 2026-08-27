import { Check } from "lucide-react";

/** "What to bring" — the documents an answer says you need, rendered the way
 *  the product renders them: a caption over ticked rows. */
export function ChecklistBlock({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  return (
    <div className="mt-3 rounded-[14px] bg-lp-tint p-3">
      <p className="text-[10px] font-semibold tracking-[0.08em] text-lp-green uppercase">
        {label}
      </p>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-lp-mint text-lp-green">
              <Check size={10} strokeWidth={3} aria-hidden="true" />
            </span>
            <span className="text-[12px] leading-[1.5] text-lp-ink">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
