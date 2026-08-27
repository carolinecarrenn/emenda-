import { Link } from "react-router-dom";
import { useSectionCopy } from "@/i18n/copy";
import { CREATE_CV_COPY } from "../createCv.copy";
import { CREATED_CV } from "../createCvMock";

/* WD-30C "CV created" success card: pale-green confirmation card leading with
   the worker identity line (raw data), the source line, the green readiness
   caption and a solid "Review My CV" pill linking to My CV. */
export function CreatedCard() {
  const c = useSectionCopy(CREATE_CV_COPY);

  return (
    <div className="rounded-[16px] border border-[#c7dbd1] bg-[#e7f0ea] px-[16px] pt-[17px] pb-[16px] lg:h-[177px] lg:px-[23px]">
      <p className="text-[14px] leading-[17px] font-semibold text-[#17231f]">
        {CREATED_CV.name} · {CREATED_CV.headline}
      </p>
      <p className="mt-[10px] text-[12px] leading-[15px] text-[#65746d]">
        {c.created.builtFrom}
      </p>
      <p className="mt-[19px] text-[13px] leading-[16px] font-semibold text-[#0b684f]">
        {c.created.ready}
      </p>
      <Link
        to="/worker/career/cv"
        className="mt-[19px] flex h-[40px] w-full items-center justify-center rounded-[12px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-[#0b5842]"
      >
        {c.created.review}
      </Link>
    </div>
  );
}
