import { useSectionCopy } from "@/i18n/copy";
import { STATES_COPY } from "../states.copy";
import { StateActionButton } from "./StateActionButton";
import {
  RecoveryDetailPanel,
  type DetailBlock,
} from "./RecoveryDetailPanel";

/* AD-10D "Recovery Detailed States" (1239:827): a tinted board, radius 16,
   1px border — the "CONCRETE OPERATIONAL STATES" eyebrow, the 23px title,
   its 11px line, and the three 760x720 panels READ STATES / ERROR / BOUNDARY.

   The drawn row is ~2446px wide — more than twice the 1144 Company Admin
   content column — so the three panels share the column instead of scrolling
   sideways; each panel's own vertical order is untouched. */
export function RecoveryDetailBoard() {
  const c = useSectionCopy(STATES_COPY);

  const readBlocks: DetailBlock[] = [
    ...c.detail.read.rows.map(
      (row): DetailBlock => ({
        kind: "field",
        label: row.label,
        detail: row.detail,
        tone: "mint",
      }),
    ),
    {
      kind: "note",
      label: c.detail.read.note.label,
      detail: c.detail.read.note.detail,
      tone: "info",
    },
  ];

  const errorBlocks: DetailBlock[] = [
    {
      kind: "field",
      label: c.detail.error.rows[0].label,
      detail: c.detail.error.rows[0].detail,
      tone: "error",
    },
    {
      kind: "field",
      label: c.detail.error.rows[1].label,
      detail: c.detail.error.rows[1].detail,
      tone: "error",
    },
    {
      kind: "field",
      label: c.detail.error.rows[2].label,
      detail: c.detail.error.rows[2].detail,
      tone: "mint",
    },
    {
      kind: "note",
      label: c.detail.error.note.label,
      detail: c.detail.error.note.detail,
      tone: "warning",
    },
  ];

  const boundaryBlocks: DetailBlock[] = [
    {
      kind: "field",
      label: c.detail.boundary.noPermission.label,
      detail: c.detail.boundary.noPermission.detail,
      tone: "error",
    },
    {
      kind: "note",
      label: c.detail.boundary.privacy.label,
      detail: c.detail.boundary.privacy.detail,
      tone: "error",
    },
    {
      kind: "field",
      label: c.detail.boundary.destructiveAction.label,
      detail: c.detail.boundary.destructiveAction.detail,
      tone: "mint",
    },
    {
      kind: "field",
      label: c.detail.boundary.confirmation.label,
      detail: c.detail.boundary.confirmation.detail,
      tone: "mint",
    },
    {
      kind: "note",
      label: c.detail.boundary.success.label,
      detail: c.detail.boundary.success.detail,
      tone: "info",
    },
  ];

  return (
    <section className="rounded-[16px] border border-[#d6e3de] bg-[#f7faf8] p-[23px]">
      <p className="text-[10px] leading-none font-semibold tracking-[0.04em] text-[#083d2d]">
        {c.detail.eyebrow}
      </p>
      <h3 className="mt-[16px] text-[20px] leading-[28px] font-semibold text-[#17362e] lg:text-[23px] lg:leading-[30px]">
        {c.detail.title}
      </h3>
      <p className="mt-[10px] text-[11px] leading-[16px] text-[#65746d]">
        {c.detail.subtitle}
      </p>

      <div className="mt-[20px] grid grid-cols-1 gap-[20px] lg:grid-cols-3">
        <RecoveryDetailPanel
          pill={c.detail.read.pill}
          title={c.detail.read.title}
          subtitle={c.detail.read.subtitle}
          blocks={readBlocks}
          footer={c.detail.read.footer}
          actions={
            <>
              <StateActionButton to="/admin/states" variant="outline">
                {c.detail.read.resetFilters}
              </StateActionButton>
              <StateActionButton to="/admin/employees" variant="primary">
                {c.detail.read.primaryAction}
              </StateActionButton>
            </>
          }
        />
        <RecoveryDetailPanel
          pill={c.detail.error.pill}
          title={c.detail.error.title}
          subtitle={c.detail.error.subtitle}
          blocks={errorBlocks}
          footer={c.detail.error.footer}
          actions={
            <>
              <StateActionButton to="/admin/states" variant="outline">
                {c.detail.error.cancel}
              </StateActionButton>
              <StateActionButton
                to="/admin/states?state=error"
                variant="primary"
              >
                {c.detail.error.retryFailed}
              </StateActionButton>
            </>
          }
        />
        <RecoveryDetailPanel
          pill={c.detail.boundary.pill}
          title={c.detail.boundary.title}
          subtitle={c.detail.boundary.subtitle}
          blocks={boundaryBlocks}
          footer={c.detail.boundary.footer}
          actions={
            <>
              <StateActionButton to="/admin/states" variant="outline">
                {c.detail.boundary.returnAction}
              </StateActionButton>
              <StateActionButton to="/admin/activity-log" variant="primary">
                {c.detail.boundary.viewActivity}
              </StateActionButton>
            </>
          }
        />
      </div>
    </section>
  );
}
