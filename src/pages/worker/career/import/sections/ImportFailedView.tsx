import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../../career.copy";
import { IMPORT_EXAMPLES } from "../../careerMock";

function SummaryCard({
  title,
  example,
  minH,
}: {
  title: string;
  example: string;
  minH: string;
}) {
  return (
    <div
      className={`${minH} rounded-[16px] border border-[#d5e0da] bg-white px-4 py-[14px]`}
    >
      <p className="text-[13px] font-semibold text-[#17231f]">{title}</p>
      <p className="mt-[7px] text-[11px] text-[#65746d]">{example}</p>
    </div>
  );
}

/** WD-23B save failed: inline import-error card, category summary cards,
 *  confirm note, solid "Try again" and a white Back pill — never a toast.
 *  Desktop keeps the frame's two independent 520px columns on an 18px
 *  rhythm (left = error / education / note · right = experience / skills /
 *  Try again / Back), so each column flows on its own card heights. */
export function ImportFailedView({ onTryAgain }: { onTryAgain?: () => void }) {
  const c = useSectionCopy(CAREER_COPY);
  const common = useCommonCopy();

  return (
    <div className="mt-[36px] flex flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
      <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
        {/* Import error */}
        <div className="min-h-[80px] rounded-[16px] border border-[#d5e0da] bg-[#feece8] px-4 py-[14px] max-lg:order-1 lg:h-[80px]">
          <p className="text-[13px] font-semibold text-[#b42318]">
            {c.import.failedTitle}
          </p>
          <p className="mt-[7px] text-[11px] text-[#65746d]">
            {c.import.failedBody}
          </p>
        </div>

        <SummaryCard
          title={c.import.educationTitle}
          example={IMPORT_EXAMPLES.education}
          minH="min-h-[82px] max-lg:order-3 lg:h-[82px]"
        />

        {/* Confirm note */}
        <div className="min-h-[72px] rounded-[16px] border border-[#d5e0da] bg-[#f3f7f5] px-4 py-[14px] max-lg:order-5 lg:h-[72px]">
          <p className="text-[13px] font-semibold text-[#0b5842]">
            {c.import.noteTitle}
          </p>
          <p className="mt-[7px] text-[11px] text-[#65746d]">
            {c.import.noteBody}
          </p>
        </div>
      </div>

      <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
        <SummaryCard
          title={c.import.experienceTitle}
          example={IMPORT_EXAMPLES.experience}
          minH="min-h-[94px] max-lg:order-2 lg:h-[94px]"
        />
        <SummaryCard
          title={c.import.skillsTitle}
          example={IMPORT_EXAMPLES.skills}
          minH="min-h-[82px] max-lg:order-4 lg:h-[82px]"
        />

        <button
          type="button"
          onClick={onTryAgain}
          className="flex h-[52px] w-full shrink-0 items-center justify-center rounded-[14px] bg-[#0c664b] text-[14px] font-semibold text-white hover:bg-lp-green max-lg:order-6"
        >
          {c.import.tryAgain}
        </button>
        <Link
          to="/worker/career/import"
          className="flex h-[52px] w-full shrink-0 items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[14px] font-semibold text-[#0b5842] hover:bg-lp-tint max-lg:order-7"
        >
          {common.action.back}
        </Link>
      </div>
    </div>
  );
}
