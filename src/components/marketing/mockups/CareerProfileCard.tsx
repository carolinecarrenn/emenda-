import { IdCard } from "lucide-react";
import { useSectionCopy } from "@/i18n/copy";
import { PLATFORM_MOCKS_COPY } from "@/pages/marketing/platformMocks.copy";

/**
 * The career side of the profile — experience, qualification, languages. It is
 * what makes the EMENDA ID more than a login: a record that travels with the
 * person across employers.
 */
export function CareerProfileCard({ className = "" }: { className?: string }) {
  const m = useSectionCopy(PLATFORM_MOCKS_COPY).career;

  return (
    <div
      className={`rounded-[18px] border border-lp-line bg-white p-4 shadow-lp-sm ${className}`}
    >
      <div className="flex items-center gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-[12px] bg-lp-mint text-lp-green">
          <IdCard size={17} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-[9.5px] font-semibold tracking-[0.08em] text-lp-muted">
            {m.label}
          </p>
          <p className="text-[13.5px] font-semibold text-lp-ink">{m.title}</p>
        </div>
      </div>

      <dl className="mt-3.5 space-y-2 border-t border-lp-line pt-3.5">
        {m.rows.map((row) => (
          <div
            key={row.label}
            className="flex items-baseline justify-between gap-3"
          >
            <dt className="shrink-0 text-[11.5px] text-lp-muted">
              {row.label}
            </dt>
            <dd className="min-w-0 truncate text-right text-[12px] font-medium text-lp-ink">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
