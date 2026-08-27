import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { CREATE_CV_COPY } from "./createCv.copy";
import { CvSourcesCard } from "./sections/CvSourcesCard";
import { MissingDataState } from "./sections/MissingDataState";
import { CreatingCard } from "./sections/CreatingCard";
import { CreatedCard } from "./sections/CreatedCard";

type Phase = "idle" | "creating" | "created";

const PATH = "/worker/career/create";

/** WD-30 Create CV (Figma 995:4883): CV-sources checklist + Create CV.
 *  States: ?state=missing-data (30A) · creating (30B) · created (30C) ·
 *  create-failed (30D) · offline (30E). Pressing "Create CV" runs the
 *  interactive creating → created flow. */
export function CreateCvPage() {
  const c = useSectionCopy(CREATE_CV_COPY);
  const forced = useScreenState();
  const navigate = useNavigate();

  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );
  const [phase, setPhase] = useState<Phase>("idle");

  const missingData = forced === "missing-data";
  const creating = forced === "creating" || phase === "creating";
  const created = forced === "created" || phase === "created";
  const failed = forced === "create-failed";
  const offline = forced === "offline";

  const title = created
    ? c.created.pageTitle
    : offline
      ? c.offline.pageTitle
      : failed
        ? c.failed.pageTitle
        : c.title;

  const subtitle = missingData
    ? c.missing.subtitle
    : created
      ? c.created.subtitle
      : offline
        ? c.offline.pageSubtitle
        : failed
          ? c.failed.pageSubtitle
          : creating
            ? c.creating.pageSubtitle
            : c.subtitle;

  const handleCreate = () => {
    setPhase("creating");
    timerRef.current = window.setTimeout(() => setPhase("created"), 1400);
  };

  const handleRecover = () => {
    setPhase("idle");
    navigate(PATH);
  };

  return (
    <div className="max-w-[1080px] pt-2 lg:pt-0">
      <Link
        to="/worker/career"
        className="inline-flex items-center gap-[6px] py-[4px] text-[13px] font-semibold text-[#0b684f] hover:text-[#0c664b]"
      >
        <ArrowLeft size={18} strokeWidth={2} />
        {c.back}
      </Link>
      <h1 className="mt-[12px] text-[30px] leading-[1.25] font-semibold text-[#17231f] lg:text-[32px] lg:leading-[40px]">
        {title}
      </h1>
      <p className="mt-[6px] text-[13px] leading-[19px] text-[#65746d] lg:text-[16px] lg:leading-[24px]">
        {subtitle}
      </p>

      {missingData ? (
        <MissingDataState />
      ) : creating ? (
        <div className="mt-[38px] grid gap-4 lg:grid-cols-[520px_520px] lg:gap-x-[40px]">
          <CreatingCard
            title={c.creating.title}
            body={c.creating.body}
            buttonLabel={c.creating.button}
            showProgress
          />
        </div>
      ) : failed ? (
        <div className="mt-[38px] grid gap-4 lg:grid-cols-[520px_520px] lg:gap-x-[40px]">
          <CreatingCard
            title={c.failed.title}
            body={c.failed.body}
            buttonLabel={c.failed.button}
            showProgress={false}
            onAction={handleRecover}
          />
        </div>
      ) : offline ? (
        <div className="mt-[38px] grid gap-4 lg:grid-cols-[520px_520px] lg:gap-x-[40px]">
          <CreatingCard
            title={c.offline.title}
            body={c.offline.body}
            buttonLabel={c.offline.button}
            showProgress={false}
            offline
            onAction={handleRecover}
          />
        </div>
      ) : created ? (
        <div className="mt-[38px] grid gap-4 lg:grid-cols-[520px_520px] lg:gap-x-[40px]">
          <CreatedCard />
        </div>
      ) : (
        <div className="mt-[38px] grid gap-4 lg:grid-cols-[520px_520px] lg:gap-x-[40px]">
          <CvSourcesCard />
          <div>
            <button
              type="button"
              onClick={handleCreate}
              className="flex h-[52px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-[#0b5842]"
            >
              {c.createButton}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
