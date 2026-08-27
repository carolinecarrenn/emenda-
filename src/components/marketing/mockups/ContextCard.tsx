import { useSectionCopy } from "@/i18n/copy";
import { MOCKS_COPY } from "@/pages/marketing/mocks.copy";

/**
 * What is shaping the answer, shown in full. Three rows and nothing more —
 * the point is that a visitor can see the whole of what EMENDA is working
 * from, not that EMENDA knows a lot about them.
 */
export function ContextCard() {
  const m = useSectionCopy(MOCKS_COPY);

  return (
    <div className="flex h-full flex-col justify-center rounded-[18px] border border-lp-line bg-lp-bg p-3.5">
      <p className="px-1 text-[9.5px] font-semibold tracking-[0.08em] text-lp-green uppercase">
        {m.context.label}
      </p>
      <dl className="mt-2.5 space-y-2">
        {m.context.rows.map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between gap-3 rounded-[12px] border border-lp-line bg-white px-3.5 py-2.5"
          >
            <dt className="text-[12px] text-lp-muted">{row.label}</dt>
            <dd className="text-right text-[12.5px] font-semibold text-lp-ink">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
