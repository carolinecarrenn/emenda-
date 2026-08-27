import {
  ListChecks,
  Navigation,
  Phone,
  SquareCheck,
  type LucideIcon,
} from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { MOCKS_COPY } from "@/pages/marketing/mocks.copy";

const ACTION_ICONS: LucideIcon[] = [Navigation, ListChecks, SquareCheck, Phone];

/** The four shapes an answer can end in, drawn as the rows EMENDA actually
 *  offers once it has finished explaining. */
export function ActionListCard() {
  const m = useSectionCopy(MOCKS_COPY);

  return (
    <div className="flex h-full flex-col justify-center rounded-[18px] border border-lp-line bg-lp-bg p-3.5">
      <p className="rounded-[12px] bg-lp-mint px-3.5 py-2.5 text-[12.5px] font-semibold text-lp-green">
        {m.actions.question}
      </p>
      <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
        {m.actions.items.map((action, index) => {
          const Icon = ACTION_ICONS[index];
          return (
            <li
              key={action}
              className="flex items-center gap-2.5 rounded-[12px] border border-lp-line bg-white px-3 py-2.5"
            >
              <span className="flex size-7 shrink-0 items-center justify-center rounded-[9px] bg-lp-tint text-lp-green">
                <Icon size={14} strokeWidth={1.85} aria-hidden="true" />
              </span>
              <span className="text-[12.5px] leading-[1.4] text-lp-ink">
                {action}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
