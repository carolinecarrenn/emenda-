import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { PREFERENCES_COPY } from "../preferences.copy";
import { SheetOverlay } from "./SheetOverlay";

/* WD-29G Availability selector: date input with calendar glyph, an
   "Available immediately" option pill, and a solid green Done button. */
export function AvailabilitySheet({
  initialDate,
  onDone,
  onImmediately,
  onCancel,
}: {
  initialDate: string;
  onDone: (date: string) => void;
  onImmediately: () => void;
  onCancel: () => void;
}) {
  const c = useSectionCopy(PREFERENCES_COPY);
  const common = useCommonCopy();
  const [date, setDate] = useState(initialDate);

  return (
    <SheetOverlay onScrimClick={onCancel}>
      <p className="text-[20px] leading-[28px] font-semibold text-[#17231f]">
        {c.availabilitySheet.title}
      </p>
      <p className="mt-[8px] text-[13px] text-[#65746d]">
        {c.availabilitySheet.body}
      </p>
      <div className="relative mt-[20px]">
        <input
          type="text"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className="h-[52px] w-full rounded-[14px] border border-[#d1ddd7] bg-white pr-[44px] pl-[18px] text-[13px] text-[#17231f] outline-none focus:border-[#0c664b]"
        />
        <CalendarDays
          size={18}
          className="pointer-events-none absolute top-[17px] right-[15px] text-[#65746d]"
        />
      </div>
      <button
        type="button"
        onClick={onImmediately}
        className="mt-[12px] flex h-[44px] w-full items-center justify-center rounded-[12px] border border-[#d1ddd7] bg-white text-[12px] font-semibold text-[#0b5842] hover:bg-[#ebf5ef]"
      >
        {c.availableImmediately}
      </button>
      <button
        type="button"
        onClick={() => onDone(date)}
        className="mt-[10px] flex h-[46px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-[#0b5842]"
      >
        {common.action.done}
      </button>
    </SheetOverlay>
  );
}
