import { useSectionCopy } from "@/i18n/copy";
import { HOME_COPY } from "../home.copy";
import type { HomeUpdateEntry } from "../useHomeView";

/* WD-18 "Recent updates": 72px white cards, 8px green dot,
   11px semibold title, 9px body, 9px right-aligned time. The feed
   re-narrates the current lifecycle state (Today / Now / Just now /
   Offline / —). */
export function RecentUpdates({ updates }: { updates: HomeUpdateEntry[] }) {
  const c = useSectionCopy(HOME_COPY);

  return (
    <section>
      <h2 className="text-[14px] leading-[18px] font-semibold text-ink">
        {c.updates.heading}
      </h2>
      <div className="mt-2 space-y-2 lg:mt-4">
        {updates.map((update) => (
          <div
            key={update.title}
            className="flex h-[72px] items-center gap-2 rounded-[14px] border border-line bg-white p-[10px]"
          >
            <span className="size-2 shrink-0 rounded-full bg-brand" />
            <div className="flex min-w-0 flex-1 flex-col gap-px">
              <p className="text-[11px] leading-[15px] font-semibold text-ink">
                {update.title}
              </p>
              <p className="text-[9px] leading-[13px] text-ink-muted">
                {update.body}
              </p>
            </div>
            <p className="shrink-0 text-right text-[9px] leading-[13px] text-ink-muted lg:mr-5">
              {update.time}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
