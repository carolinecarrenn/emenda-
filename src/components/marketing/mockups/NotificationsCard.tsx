import { BadgeCheck, Bell, CalendarClock, Megaphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { PLATFORM_MOCKS_COPY } from "@/pages/marketing/platformMocks.copy";

const ICONS: LucideIcon[] = [BadgeCheck, CalendarClock, Megaphone];

/**
 * The notification feed — the surface that makes EMENDA a place a worker comes
 * back to rather than a box they open with a question. The three rows are
 * deliberately different kinds: a response from a person, a date approaching,
 * and something the workplace sent.
 */
export function NotificationsCard({ className = "" }: { className?: string }) {
  const m = useSectionCopy(PLATFORM_MOCKS_COPY).notifications;

  return (
    <div
      className={`rounded-[18px] border border-lp-line bg-white p-4 shadow-lp-sm ${className}`}
    >
      <p className="flex items-center gap-2 text-[9.5px] font-semibold tracking-[0.08em] text-lp-muted">
        <Bell size={12} strokeWidth={2} aria-hidden="true" />
        {m.label}
      </p>

      <ul className="mt-3 space-y-2">
        {m.items.map((item, index) => {
          const Icon = ICONS[index];
          return (
            <li
              key={item.title}
              className="flex items-start gap-2.5 rounded-[13px] border border-lp-line bg-lp-bg px-3 py-2.5"
            >
              <span className="mt-px flex size-6 shrink-0 items-center justify-center rounded-full bg-lp-mint text-lp-green">
                <Icon size={12} strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[12px] leading-[1.4] font-medium text-lp-ink">
                  {item.title}
                </span>
                <span className="mt-0.5 block text-[10.5px] text-lp-muted">
                  {item.meta}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
