import {
  ArrowRight,
  BookOpen,
  Briefcase,
  FileText,
  Plane,
  type LucideIcon,
} from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { PLATFORM_MOCKS_COPY } from "@/pages/marketing/platformMocks.copy";
import { EmendaIdCard } from "./EmendaIdCard";

const TILE_ICONS: LucideIcon[] = [Briefcase, Plane, FileText, BookOpen];

/**
 * Worker Home (WD-18): greeting, the EMENDA ID, the one thing that needs doing
 * today, and the way into the rest of the platform. This is the still that
 * does the most work on the marketing site — it shows at a glance that a
 * worker has a home in EMENDA, not just a conversation.
 */
export function WorkerHomeCard({ className = "" }: { className?: string }) {
  const m = useSectionCopy(PLATFORM_MOCKS_COPY).worker;

  return (
    <div
      className={`overflow-hidden rounded-[22px] border border-lp-line bg-lp-bg shadow-lp-md ${className}`}
    >
      <div className="border-b border-lp-line bg-white px-5 py-4">
        <p className="font-display text-[17px] font-bold tracking-[-0.01em] text-lp-ink">
          {m.greeting}
        </p>
        <p className="mt-0.5 text-[12px] text-lp-muted">{m.subtitle}</p>
      </div>

      <div className="space-y-3 p-4">
        <EmendaIdCard />

        <div className="rounded-[16px] border border-lp-green/20 bg-lp-mint p-4">
          <p className="text-[9.5px] font-semibold tracking-[0.08em] text-lp-green">
            {m.nextLabel}
          </p>
          <p className="mt-1.5 text-[14px] leading-[1.4] font-semibold text-lp-ink">
            {m.nextTitle}
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-lp-button px-3.5 py-1.5 text-[11.5px] font-semibold text-white">
            {m.nextCta}
            <ArrowRight size={12} strokeWidth={2.3} aria-hidden="true" />
          </span>
        </div>

        <div>
          <p className="px-1 text-[9.5px] font-semibold tracking-[0.08em] text-lp-muted">
            {m.exploreLabel}
          </p>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {m.exploreTiles.map((tile, index) => {
              const Icon = TILE_ICONS[index];
              return (
                <span
                  key={tile}
                  className="flex items-center gap-2.5 rounded-[13px] border border-lp-line bg-white px-3 py-2.5"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-[9px] bg-lp-tint text-lp-green">
                    <Icon size={14} strokeWidth={1.85} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 text-[12px] leading-[1.3] font-medium text-lp-ink">
                    {tile}
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
