import type { ReactNode } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* MD-02C facility-search no-results and MD-04A "No workers found"
   (1213:167 / 1213:378): one white card, radius 12, #dbe3de hairline, whose
   desktop rhythm differs per surface, so the two are drawn as variants
   instead of one averaged card.

   `roster` — MD-04A (1213:408…414): a 1060x410 card with a 48px gutter, the
   title 67px down, the 13px #66736b body and the two 190px recovery buttons
   at y=220, the card holding its quiet space underneath.

   `facility` — MD-02C (1213:206…212): the narrower 700x300 card that sits
   under the 700px FACILITY SEARCH field, with a 24px gutter, the title 36px
   down, and a 180px "Clear search" beside a 190px "Back to facilities" at
   y=176.

   EM-02C (949:4) and EM-04A (932:5) draw the same card at 390px with a
   10px uppercase "EMPTY STATE" eyebrow above the title, the title and body
   left-aligned, and the recovery action as one full-width dark button —
   never a centred stack. `desktopBody` carries MD-02C's keyword-aware
   sentence while 390px keeps EM-02C's shorter one.
   Nothing about the empty result widens facility scope. */

export type WorkspaceEmptyVariant = "roster" | "facility";

const CARD = {
  roster: "lg:px-[48px] lg:pt-[67px] lg:pb-[148px]",
  facility: "lg:px-[24px] lg:pt-[36px] lg:pb-[82px]",
} as const;

const BODY = {
  roster: "lg:mt-[17px] lg:max-w-[765px]",
  facility: "lg:mt-[15px] lg:max-w-[602px]",
} as const;

const ACTIONS = {
  roster: "lg:mt-[68px] lg:gap-[18px] lg:[&>*]:w-[190px]",
  facility:
    "lg:mt-[57px] lg:gap-[16px] lg:[&>*:first-child]:w-[180px] lg:[&>*:last-child]:w-[190px]",
} as const;

export function WorkspaceEmptyState({
  title,
  body,
  desktopBody,
  actions,
  variant = "roster",
}: {
  title: string;
  body: string;
  /** MD-02C names the keyword that matched nothing; EM-02C does not. */
  desktopBody?: string;
  actions?: ReactNode;
  variant?: WorkspaceEmptyVariant;
}) {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <div
      className={`rounded-[12px] border border-[#dbe3de] bg-white px-[20px] py-[24px] ${CARD[variant]}`}
    >
      <p className="text-[10px] font-semibold tracking-[0.08em] text-[#66736b] uppercase lg:hidden">
        {c.state.emptyEyebrow}
      </p>
      <p className="mt-[16px] text-[19px] font-semibold text-[#083d2d] lg:mt-0 lg:text-[24px]">
        {title}
      </p>
      <p
        className={`mt-[12px] max-w-[520px] text-[12px] leading-[18px] text-[#66736b] lg:text-[13px] lg:leading-[16px] ${BODY[variant]}`}
      >
        {desktopBody ? (
          <>
            <span className="lg:hidden">{body}</span>
            <span className="hidden lg:inline">{desktopBody}</span>
          </>
        ) : (
          body
        )}
      </p>
      {actions && (
        <div
          className={`mt-[20px] flex flex-col gap-[6px] lg:flex-row lg:justify-start ${ACTIONS[variant]}`}
        >
          {actions}
        </div>
      )}
    </div>
  );
}
