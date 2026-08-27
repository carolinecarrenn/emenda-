import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";

/* MD-04B right card "CONNECTION BOUNDARY": the four rules that make the
   employer link employment-scoped — the connection covers employment only,
   worker-owned identity stays portable, private Health / Stress / Life and
   private eCoin are never shared through an invite, and disconnecting
   employment does not delete the worker identity. */
export function ConnectionBoundaryCard() {
  const c = useSectionCopy(WORKSPACE_COPY);

  return (
    <section className="rounded-[12px] border border-[#dbe3de] bg-white px-[18px] py-[18px] lg:h-full lg:px-[24px] lg:py-[24px]">
      <h2 className="text-[13px] font-semibold text-[#083d2d] lg:text-[14px]">
        {c.invite.boundaryTitle}
      </h2>
      <ul className="mt-[16px] space-y-[14px] text-[12px] leading-[18px] text-[#66736b]">
        {c.invite.boundaryLines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </section>
  );
}
