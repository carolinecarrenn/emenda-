import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../../career.copy";
import { IMPORT_EXAMPLES } from "../../careerMock";

function CategoryCard({
  title,
  example,
  reviewTo,
  reviewLabel,
  exampleLower,
  className,
}: {
  title: string;
  example: string;
  reviewTo: string;
  reviewLabel: string;
  exampleLower?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative min-h-[106px] rounded-[16px] border border-[#d5e0da] bg-white px-[16px] lg:px-[23px] pt-[14px] pb-[48px] lg:h-[106px] ${className ?? ""}`}
    >
      <p className="max-w-[327px] text-[14px] leading-[17px] font-semibold text-[#17231f]">
        {title}
      </p>
      <p
        className={`${exampleLower ? "mt-[17px]" : "mt-[9px]"} text-[12px] leading-[15px] text-[#65746d]`}
      >
        {example}
      </p>
      <Link
        to={reviewTo}
        className="absolute right-[24px] bottom-[10px] flex h-[30px] w-[143px] items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint"
      >
        {reviewLabel}
      </Link>
    </div>
  );
}

/** WD-23 base review-import content: four category summary cards with Review
 *  pills, green "Nothing changes until you confirm" note, solid Import
 *  reviewed data primary and a white Back pill. */
export function ImportBaseView({ onImport }: { onImport?: () => void }) {
  const c = useSectionCopy(CAREER_COPY);
  const common = useCommonCopy();

  return (
    /* WD-23 desktop: two 520px columns that flow independently on an 18px
       rhythm (left = experience / skills / Back · right = education / note /
       Import / qualifications). `contents` keeps the W-23 mobile order, which
       `max-lg:order-*` restores where it differs from the desktop order. */
    <div className="mt-[36px] flex flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px]">
      <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
        <CategoryCard
          title={c.import.experienceTitle}
          example={IMPORT_EXAMPLES.experience}
          reviewTo="/worker/career/import?state=experience"
          reviewLabel={common.status.review}
          className="max-lg:order-1"
        />
        <CategoryCard
          title={c.import.skillsTitle}
          example={IMPORT_EXAMPLES.skills}
          reviewTo="/worker/career/import?state=skills"
          reviewLabel={common.status.review}
          className="max-lg:order-3"
        />
        <Link
          to="/worker/career/upload"
          className="flex h-[44px] w-full items-center justify-center rounded-[14px] border border-[#d5e0da] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-lp-tint max-lg:order-7"
        >
          {common.action.back}
        </Link>
      </div>

      <div className="contents lg:flex lg:flex-col lg:gap-[18px]">
        <CategoryCard
          title={c.import.educationTitle}
          example={IMPORT_EXAMPLES.education}
          reviewTo="/worker/career/import?state=education"
          reviewLabel={common.status.review}
          className="max-lg:order-2"
        />

        {/* Consent-first reassurance note */}
        <div className="min-h-[72px] rounded-[16px] border border-[#d5e0da] bg-[#f3f7f5] px-[16px] lg:px-[23px] pt-[14px] pb-[16px] max-lg:order-5">
          <p className="text-[13px] leading-[16px] font-semibold text-[#0b5842]">
            {c.import.noteTitle}
          </p>
          <p className="mt-[9px] text-[11px] leading-[13px] text-[#65746d]">
            {c.import.noteBody}
          </p>
        </div>

        <button
          type="button"
          onClick={onImport}
          className="flex h-[52px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-lp-green max-lg:order-6"
        >
          {c.import.importCta}
        </button>

        <CategoryCard
          title={c.import.qualificationsTitle}
          example={`${c.import.qualificationsFound} · ${IMPORT_EXAMPLES.qualifications}`}
          reviewTo="/worker/career/import?state=qualifications"
          reviewLabel={common.status.review}
          exampleLower
          className="max-lg:order-4"
        />
      </div>
    </div>
  );
}
