import type { ReactNode } from "react";
import { Calendar } from "lucide-react";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { JAPAN_COPY } from "../japan.copy";

/** Overlay chassis for selects / date pickers / confirmations.
 *  Desktop (per WD-32M..O, WD-33S..U): centered 520px card over a scrim.
 *  Mobile (W-xx mocks): the same card docks to the bottom as a sheet. */
export function SheetShell({
  onClose,
  bottomClass = "lg:pb-[12px]",
  children,
}: {
  onClose: () => void;
  /** Each WD- sheet frame has its own foot below the last control:
   *  option 8px (WD-32M/33S), date 36px (WD-32O/33U), discard 13px. */
  bottomClass?: string;
  children: ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center lg:items-center">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-[#131f1a]/18 lg:bg-black/28"
      />
      <div
        className={`relative w-full rounded-t-[16px] border border-[#d6e0da] bg-white p-[20px] pb-[30px] lg:w-[520px] lg:rounded-[18px] lg:p-[23px] lg:pt-[21px] ${bottomClass}`}
      >
        {children}
      </div>
    </div>
  );
}

export function SheetHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <p className="text-[20px] leading-[28px] font-semibold text-[#131f1a] lg:text-[22px] lg:leading-[30px]">
        {title}
      </p>
      <p className="mt-[6px] text-[13px] leading-[19px] text-[#5e7066] lg:mt-[8px] lg:min-h-[44px] lg:leading-[22px]">
        {description}
      </p>
    </>
  );
}

/** Stacked white option buttons with green labels (WD-32M/N, WD-33S/T). */
export function OptionSheet({
  title,
  description,
  options,
  onSelect,
  onClose,
}: {
  title: string;
  description: string;
  options: readonly string[];
  onSelect: (option: string) => void;
  onClose: () => void;
}) {
  return (
    <SheetShell onClose={onClose} bottomClass="lg:pb-[7px]">
      <SheetHeading title={title} description={description} />
      <div className="mt-[16px] space-y-[8px] lg:mt-[8px]">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className="flex h-[44px] w-full items-center justify-center rounded-[11px] border border-[#d6e0da] bg-white px-[14px] text-[13px] font-semibold text-[#08664d] hover:border-[#08664d]"
          >
            <span className="truncate">{option}</span>
          </button>
        ))}
      </div>
    </SheetShell>
  );
}

/** Free date entry sheet with hint + Done (WD-32O, WD-33U). */
export function DateSheet({
  title,
  description,
  hint,
  value,
  onChange,
  onDone,
  onClose,
}: {
  title: string;
  description: string;
  hint: string;
  value: string;
  onChange: (value: string) => void;
  onDone: () => void;
  onClose: () => void;
}) {
  const cc = useCommonCopy();
  return (
    <SheetShell onClose={onClose} bottomClass="lg:pb-[35px]">
      <SheetHeading title={title} description={description} />
      <div className="mt-[14px] flex h-[52px] w-full items-center justify-between rounded-[12px] border border-[#d6e0da] bg-white px-[16px]">
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full bg-transparent text-[13px] text-[#131f1a] outline-none"
        />
        <Calendar className="h-[18px] w-[18px] shrink-0 text-[#08664d]" />
      </div>
      <p className="mt-[12px] min-h-[28px] text-[11px] leading-[15px] text-[#5e7066] lg:min-h-[30px]">
        {hint}
      </p>
      <button
        type="button"
        onClick={onDone}
        className="mt-[16px] flex h-[46px] w-full items-center justify-center rounded-[11px] bg-[#08664d] text-[13px] font-semibold text-white hover:bg-[#0b6b57] lg:mt-[8px] lg:h-[44px]"
      >
        {cc.action.done}
      </button>
    </SheetShell>
  );
}

/** Unsaved-changes confirmation. Mobile (Figma 626:1081) is a centred
 *  350×230 card inset 20px from the screen edges — not a bottom sheet:
 *  20px title, 13px body, solid Keep editing (46px) and a red-outline
 *  Discard changes (42px). Desktop keeps the WD-32K 520px dialog. */
export function DiscardSheet({
  title,
  body,
  onKeep,
  onDiscard,
}: {
  title: string;
  body: string;
  onKeep: () => void;
  onDiscard: () => void;
}) {
  const c = useSectionCopy(JAPAN_COPY);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-[20px]">
      <button
        type="button"
        aria-label="Close"
        onClick={onKeep}
        className="absolute inset-0 bg-[#131f1a]/18 lg:bg-black/28"
      />
      <div className="relative w-full max-w-[350px] rounded-[16px] border border-[#d6e0da] bg-white p-[16px] lg:max-w-[520px] lg:rounded-[18px] lg:p-[23px] lg:pt-[21px] lg:pb-[12px]">
        <p className="text-[20px] leading-[24px] font-semibold text-[#131f1a] lg:text-[22px] lg:leading-[30px]">
          {title}
        </p>
        <p className="mt-[10px] text-[13px] leading-[21px] text-[#5e7066] lg:mt-[8px] lg:min-h-[44px] lg:leading-[22px]">
          {body}
        </p>
        <button
          type="button"
          onClick={onKeep}
          className="mt-[20px] flex h-[46px] w-full items-center justify-center rounded-[12px] bg-[#08664d] text-[13px] font-semibold text-white hover:bg-[#0b6b57] lg:mt-[14px] lg:rounded-[11px]"
        >
          {c.sheet.keepEditing}
        </button>
        <button
          type="button"
          onClick={onDiscard}
          className="mt-[10px] flex h-[42px] w-full items-center justify-center rounded-[12px] border border-[#c7261f] bg-white text-[13px] font-semibold text-[#c7261f] hover:bg-[#fdecea] lg:mt-[70px] lg:h-[46px] lg:rounded-[11px]"
        >
          {c.sheet.discardChanges}
        </button>
      </div>
    </div>
  );
}
