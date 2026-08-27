import { useState } from "react";
import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { CAREER_COPY } from "../../career.copy";
import { EXTRACTED_QUALIFICATIONS } from "../../careerMock";
import { CareerBreadcrumb } from "../../sections/CareerBreadcrumb";

/** WD-23J per-category review — Qualifications & training: credential cards
 *  with a green provenance eyebrow and Keep / Remove choice per record. */
export function ReviewQualificationsView() {
  const c = useSectionCopy(CAREER_COPY);
  const common = useCommonCopy();
  const [removed, setRemoved] = useState<Record<string, boolean>>({});

  return (
    <>
      <CareerBreadcrumb />
      <h1 className="mt-[14px] text-[30px] leading-[1.25] font-semibold text-[#17231f] lg:text-[32px]">
        {c.import.reviewQualificationsTitle}
      </h1>
      <p className="mt-[6px] text-[13px] leading-[19px] text-[#65746d] lg:text-[16px] lg:leading-[24px]">
        {c.import.reviewQualificationsSubtitle}
      </p>

      <div className="mt-[36px] flex flex-col gap-4 lg:grid lg:grid-cols-[520px_520px] lg:items-start lg:gap-x-[40px] lg:gap-y-[18px]">
        {EXTRACTED_QUALIFICATIONS.map((q, index) => {
          const isRemoved = removed[q.id] === true;
          return (
            <div
              key={q.id}
              className={`min-h-[132px] rounded-[16px] border border-[#d1ddd7] bg-white px-[16px] lg:px-[23px] pt-[13px] pb-[9px] lg:row-start-1 lg:h-[132px] ${
                index === 0 ? "lg:col-start-1" : "lg:col-start-2"
              }`}
            >
              <p className="text-[10px] leading-[12px] font-semibold text-[#0b5842] uppercase">
                {q.type === "certification"
                  ? c.import.extractedCertificationLabel
                  : c.import.extractedTypeLabel}
              </p>
              <p className="mt-[12px] text-[15px] leading-[18px] font-semibold text-[#17231f]">
                {q.name}
              </p>
              <p className="mt-[10px] text-[12px] leading-[15px] text-[#65746d]">
                {q.issuer} · {c.import.extractedFromCv}
              </p>
              <div className="mt-[13px] flex gap-[18px]">
                <button
                  type="button"
                  onClick={() => setRemoved({ ...removed, [q.id]: false })}
                  className={`flex h-[30px] flex-1 items-center justify-center rounded-[12px] text-[12px] font-semibold ${
                    isRemoved
                      ? "border border-[#d1ddd7] bg-white text-[#0b5842] hover:bg-lp-tint"
                      : "bg-[#0c664b] text-white"
                  }`}
                >
                  {c.import.keep}
                </button>
                <button
                  type="button"
                  onClick={() => setRemoved({ ...removed, [q.id]: true })}
                  className={`flex h-[30px] flex-1 items-center justify-center rounded-[12px] text-[12px] font-semibold ${
                    isRemoved
                      ? "bg-[#0c664b] text-white"
                      : "border border-[#e4b8b3] bg-white text-[#b42318] hover:bg-[#fdf3f2]"
                  }`}
                >
                  {c.import.remove}
                </button>
              </div>
            </div>
          );
        })}

        <Link
          to="/worker/career/import"
          className="flex h-[50px] w-full items-center justify-center rounded-[12px] bg-[#0c664b] text-[12px] font-semibold text-white hover:bg-lp-green lg:col-start-1 lg:row-start-2"
        >
          {c.import.doneReviewingQualifications}
        </Link>
        <Link
          to="/worker/career/import"
          className="flex h-[46px] w-full items-center justify-center rounded-[12px] border border-[#d1ddd7] bg-white text-[12px] font-semibold text-[#0b5842] hover:bg-lp-tint lg:col-start-2 lg:row-start-2"
        >
          {common.action.back}
        </Link>
      </div>
    </>
  );
}
