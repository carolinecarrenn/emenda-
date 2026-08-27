import { Check } from "lucide-react";

/* The ✓ rows inside EM-09A "Manager decision" (1030:180) and EM-09B
   "Before sending" (1030:209): 9px #06634f wrapping across the 390px frame,
   the rows stacked on an 11px pitch as in both mocks. Desktop keeps the same
   two-row block by packing the ticks into three max-content columns. */
export function FollowUpCheckList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-[16px] lg:grid lg:grid-cols-[repeat(3,max-content)]">
      {items.map((item) => (
        <li
          key={item}
          className="flex h-[11px] items-center gap-[4px] text-[9px] leading-[11px] font-normal text-[#06634f] lg:h-auto lg:text-[11px]"
        >
          <Check aria-hidden="true" className="h-[11px] w-[11px] shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}
