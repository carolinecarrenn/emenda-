import { useEffect, useRef, useState } from "react";
import type { MouseEvent, ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { EDIT_CV_COPY } from "./editCv.copy";
import { CV_DRAFT } from "./editCvMock";
import type { CvDraft } from "./editCvMock";
import { CvSectionsCard } from "./sections/CvSectionsCard";
import { SectionVisibilitySheet } from "./sections/SectionVisibilitySheet";
import { ReorderList } from "./sections/ReorderList";
import { SaveErrorCard } from "../preferences/sections/SaveErrorCard";
import { OfflineBanner } from "../preferences/sections/OfflineBanner";
import { UnsavedChangesSheet } from "../preferences/sections/UnsavedChangesSheet";

type Flow = null | "saving" | "save-failed" | "unsaved";

const PATH = "/worker/career/edit";

/** WD-31 Edit My CV (Figma 995:5169): HEADLINE + PROFESSIONAL SUMMARY
 *  fields, CV sections card with "Included" pills, section-visibility sheet
 *  (31D), reorder mode with up/down buttons (31E/31F), plus saving (31A),
 *  save-failed (31B), unsaved (31C) and offline (31G) states. */
export function EditCvPage() {
  const c = useSectionCopy(EDIT_CV_COPY);
  const common = useCommonCopy();
  const forced = useScreenState();
  const navigate = useNavigate();

  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const [saved, setSaved] = useState<CvDraft>(CV_DRAFT);
  const [draft, setDraft] = useState<CvDraft>(CV_DRAFT);
  const [reordering, setReordering] = useState(false);
  const [visibilityOpen, setVisibilityOpen] = useState(false);
  const [flow, setFlow] = useState<Flow>(null);

  const reorderMode = forced === "reorder" || reordering;
  const saving = forced === "saving" || flow === "saving";
  const saveFailed = forced === "save-failed" || flow === "save-failed";
  const offline = forced === "offline";
  const unsavedOpen = forced === "unsaved" || flow === "unsaved";
  const dirty = JSON.stringify(draft) !== JSON.stringify(saved);

  const clearForced = () => navigate(PATH);

  const handleBack = (event: MouseEvent) => {
    if (dirty || unsavedOpen) {
      event.preventDefault();
      if (forced) return;
      setFlow("unsaved");
    }
  };

  const handleSave = () => {
    if (saving) return;
    setFlow("saving");
    timerRef.current = window.setTimeout(() => {
      setSaved(draft);
      setFlow(null);
    }, 900);
  };

  const handleMove = (index: number, direction: -1 | 1) => {
    const next = [...draft.order];
    const target = index + direction;
    if (target < 0 || target >= next.length) return;
    [next[index], next[target]] = [next[target], next[index]];
    setDraft({ ...draft, order: next });
  };

  if (reorderMode) {
    return (
      <div className="max-w-[1080px] pt-2 lg:pt-0">
        <Link
          to="/worker/career"
          onClick={handleBack}
          className="inline-flex items-center gap-[6px] py-[4px] text-[13px] font-semibold text-[#0b684f] hover:text-[#0c664b]"
        >
          <ArrowLeft size={18} strokeWidth={2} />
          {c.back}
        </Link>
        <h1 className="mt-[12px] text-[30px] leading-[1.25] font-semibold text-[#17231f] lg:text-[32px] lg:leading-[40px]">
          {c.reorderTitle}
        </h1>
        <p className="mt-[6px] text-[13px] leading-[19px] text-[#65746d] lg:text-[16px] lg:leading-[24px]">
          {c.reorderSubtitle}
        </p>
        <div className="mt-[38px] grid gap-4 lg:grid-cols-[520px_520px] lg:gap-x-[40px]">
          <ReorderList order={draft.order} onMove={handleMove} />
          <div>
            <button
              type="button"
              onClick={() => {
                setReordering(false);
                if (forced === "reorder") clearForced();
              }}
              className="flex h-[48px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-[#0b5842]"
            >
              {common.action.done}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1080px] pt-2 lg:pt-0">
      <Link
        to="/worker/career"
        onClick={handleBack}
        className="inline-flex items-center gap-[6px] py-[4px] text-[13px] font-semibold text-[#0b684f] hover:text-[#0c664b]"
      >
        <ArrowLeft size={18} strokeWidth={2} />
        {c.back}
      </Link>
      <h1 className="mt-[12px] text-[30px] leading-[1.25] font-semibold text-[#17231f] lg:text-[32px] lg:leading-[40px]">
        {c.title}
      </h1>
      <p className="mt-[6px] text-[13px] leading-[19px] text-[#65746d] lg:text-[16px] lg:leading-[24px]">
        {saving ? c.savingCard.subtitle : c.subtitle}
      </p>

      <div className="mt-[38px] grid gap-y-[22px] lg:grid-cols-[520px_520px] lg:gap-x-[40px]">
        <Field label={c.headlineLabel}>
          <input
            type="text"
            value={draft.headline}
            disabled={saving}
            onChange={(event) =>
              setDraft({ ...draft, headline: event.target.value })
            }
            className="h-[52px] w-full rounded-[16px] border border-[#d5e0da] bg-white px-[20px] text-[13px] text-[#17231f] outline-none focus:border-[#0c664b]"
          />
        </Field>
        <Field label={c.summaryLabel}>
          <textarea
            rows={2}
            value={draft.professionalSummary}
            disabled={saving}
            onChange={(event) =>
              setDraft({ ...draft, professionalSummary: event.target.value })
            }
            className="h-[52px] w-full resize-none rounded-[16px] border border-[#d5e0da] bg-white px-[20px] py-[8px] text-[13px] leading-[18px] text-[#17231f] outline-none focus:border-[#0c664b] lg:h-[52px]"
          />
        </Field>
      </div>

      <div className="mt-[40px] grid gap-4 lg:grid-cols-[520px_520px] lg:gap-x-[40px]">
        {saving ? (
          <div className="rounded-[16px] border border-[#d5e0da] bg-[#f3f7f5] px-[16px] lg:px-[23px] pt-[18px] pb-[10px]">
            <p className="text-[14px] font-semibold text-[#17231f]">
              {c.savingCard.title}
            </p>
            <p className="mt-[12px] text-[13px] text-[#65746d]">
              {c.savingCard.body}
            </p>
            <div className="mt-[8px] flex h-[32px] w-full cursor-default items-center justify-center rounded-[12px] bg-[#9dbbad] text-[12px] font-semibold text-white">
              {c.saving}
            </div>
          </div>
        ) : (
          <CvSectionsCard
            order={draft.order}
            visibility={draft.visibility}
            onToggleClick={() => setVisibilityOpen(true)}
            onReorderClick={() => setReordering(true)}
          />
        )}
        {!saving && (
          <div>
            {saveFailed ? (
              <>
                <SaveErrorCard title={c.error.title} body={c.error.body} />
                <button
                  type="button"
                  onClick={() => {
                    setFlow(null);
                    if (forced) clearForced();
                    handleSave();
                  }}
                  className="mt-[16px] flex h-[50px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-[#0b5842]"
                >
                  {c.tryAgain}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFlow(null);
                    setDraft(saved);
                    if (forced) clearForced();
                  }}
                  className="mt-[16px] flex h-[44px] w-full items-center justify-center rounded-[14px] border border-[#d1ddd7] bg-white text-[13px] font-semibold text-[#0b5842] hover:bg-[#ebf5ef]"
                >
                  {common.action.cancel}
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  onClick={handleSave}
                  className="flex h-[52px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white hover:bg-[#0b5842]"
                >
                  {c.save}
                </button>
                {offline && (
                  <div className="mt-[16px]">
                    <OfflineBanner
                      title={c.offline.title}
                      body={c.offline.body}
                      onRetry={clearForced}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {visibilityOpen && (
        <SectionVisibilitySheet
          order={draft.order}
          visibility={draft.visibility}
          onChange={(key, included) =>
            setDraft({
              ...draft,
              visibility: { ...draft.visibility, [key]: included },
            })
          }
          onDone={() => setVisibilityOpen(false)}
        />
      )}
      {unsavedOpen && (
        <UnsavedChangesSheet
          title={c.unsaved.title}
          body={c.unsaved.body}
          keepLabel={c.unsaved.keepEditing}
          discardLabel={c.unsaved.discard}
          onKeep={() => {
            setFlow(null);
            if (forced) clearForced();
          }}
          onDiscard={() => {
            setDraft(saved);
            setFlow(null);
            navigate("/worker/career");
          }}
        />
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-[11px] font-semibold tracking-[0.04em] text-[#65746d]">
        {label}
      </p>
      <div className="mt-[6px]">{children}</div>
    </div>
  );
}
