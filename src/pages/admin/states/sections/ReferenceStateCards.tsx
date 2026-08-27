import type { ReactNode } from "react";
import { useSectionCopy } from "@/i18n/copy";
import { STATES_COPY } from "../states.copy";
import { StateActionButton } from "./StateActionButton";

/* AD-10 reference cards (1225:1327): three 368x320 white cards, radius 12,
   1px #d6e3de, 20px apart across the 1144 column. Each one is a 56px tinted
   circle with a 26px glyph, an 18px bold title at y95, a 10px #65746d body at
   y127, and a 32px button pinned to y259.

   Card 1 and 2 use the mint #e8f5f0 / #083d2d pair; card 3 (1225:1343) uses
   the blue #eff5fc / #2f5e9b pair to mark the permission boundary. */

function ReferenceStateCard({
  glyph,
  glyphClassName,
  title,
  body,
  action,
}: {
  glyph: string;
  glyphClassName: string;
  title: string;
  body: string;
  action: ReactNode;
}) {
  return (
    <div className="flex flex-col rounded-[12px] border border-[#d6e3de] bg-white p-[23px] pb-[29px] lg:h-[320px]">
      <div
        className={`flex size-[56px] shrink-0 items-center justify-center rounded-full ${glyphClassName}`}
      >
        <span className="text-[26px] leading-none font-bold" aria-hidden="true">
          {glyph}
        </span>
      </div>
      <p className="mt-[16px] text-[18px] leading-[22px] font-bold text-[#17362e]">
        {title}
      </p>
      <p className="mt-[14px] text-[11px] leading-[16px] text-[#65746d] lg:text-[10px] lg:leading-[15px]">
        {body}
      </p>
      <div className="mt-[20px] flex lg:mt-auto">{action}</div>
    </div>
  );
}

export function ReferenceStateCards() {
  const c = useSectionCopy(STATES_COPY);

  return (
    <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-3">
      <ReferenceStateCard
        glyph="+"
        glyphClassName="bg-[#e8f5f0] text-[#083d2d]"
        title={c.cards.noEmployees.title}
        body={c.cards.noEmployees.body}
        action={
          <StateActionButton to="/admin/employees" variant="primary">
            {c.cards.noEmployees.action}
          </StateActionButton>
        }
      />
      <ReferenceStateCard
        glyph="✓"
        glyphClassName="bg-[#e8f5f0] text-[#083d2d]"
        title={c.cards.noReports.title}
        body={c.cards.noReports.body}
        action={
          <StateActionButton to="/admin/reports" variant="outline">
            {c.cards.noReports.action}
          </StateActionButton>
        }
      />
      <ReferenceStateCard
        glyph="!"
        glyphClassName="bg-[#eff5fc] text-[#2f5e9b]"
        title={c.cards.boundary.title}
        body={c.cards.boundary.body}
        action={
          <StateActionButton
            to="/admin/states?state=no-permission"
            variant="primary"
          >
            {c.cards.boundary.action}
          </StateActionButton>
        }
      />
    </div>
  );
}
