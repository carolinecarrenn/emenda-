import { Link } from "react-router-dom";
import { useCommonCopy } from "@/i18n/common";
import { useSectionCopy } from "@/i18n/copy";
import { OJT_COPY } from "../ojt.copy";

/* Guard for an unknown :moduleId — keeps the Knowledge / OJT breadcrumb
   reachable instead of rendering an empty detail frame. */
export function OjtNotFoundCard() {
  const common = useCommonCopy();
  const c = useSectionCopy(OJT_COPY);

  return (
    <div className="max-w-[720px]">
      <Link
        to="/manager/knowledge-ojt"
        className="text-[11px] font-semibold text-brand hover:text-brand-deep"
      >
        {common.managerNav.knowledgeOjt}
      </Link>
      <div className="mt-4 rounded-[12px] border border-[#ccded6] bg-white px-[14px] py-8 text-center">
        <p className="text-[11px] font-semibold text-[#083d2d] lg:text-[13px]">
          {c.detail.notFound}
        </p>
      </div>
    </div>
  );
}
