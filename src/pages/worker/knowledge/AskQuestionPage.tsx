import { useEffect, useRef, useState, type MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, CircleHelp } from "lucide-react";
import { useScreenState } from "@/hooks/useScreenState";
import { useSectionCopy } from "@/i18n/copy";
import { KNOWLEDGE_COPY } from "./knowledge.copy";
import { ASK_DRAFT, type KnowledgeTopicId } from "./knowledgeMock";
import { AskSubmittedPanel } from "./sections/AskSubmittedPanel";
import { KnowledgeButton } from "./sections/KnowledgeButton";
import { KnowledgeHeader } from "./sections/KnowledgeHeader";
import { NoteCard } from "./sections/NoteCard";
import { OfflineBanner } from "./sections/OfflineBanner";
import { SubmitErrorBanner } from "./sections/SubmitErrorBanner";
import { TopicOverlay } from "./sections/TopicOverlay";
import { UnsavedChangesModal } from "./sections/UnsavedChangesModal";

/** Ask a Question (Figma W-44 · validation W-44A · submitting W-44B · failed
 *  W-44C · offline W-44D · unsaved-changes W-44E · topic overlay W-44F ·
 *  submitted W-44G; desktop WD-44*). TOPIC/QUESTION/DETAILS form with the
 *  mint PRIVATE QUESTION rail on desktop and an inline mint privacy note on
 *  mobile. W-44C parks the failure banner under the privacy note, directly
 *  above the "Try again" button. */
export function AskQuestionPage() {
  const state = useScreenState();
  const navigate = useNavigate();
  const c = useSectionCopy(KNOWLEDGE_COPY);

  const [topic, setTopic] = useState<KnowledgeTopicId>(ASK_DRAFT.topic);
  const [question, setQuestion] = useState(ASK_DRAFT.question);
  const [details, setDetails] = useState(ASK_DRAFT.details);
  const [topicOverlayOpen, setTopicOverlayOpen] = useState(false);
  const [unsavedOpen, setUnsavedOpen] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [submittedLocally, setSubmittedLocally] = useState(false);
  /* Pressing Submit passes through W-44B "Submitting…" before landing on
     W-44G, so that state is reachable by acting, not only via
     ?state=submitting. */
  const [submittingLocally, setSubmittingLocally] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );

  const submitting = state === "submitting" || submittingLocally;
  const failed = state === "failed";
  const offline = state === "offline";
  const submitted = state === "submitted" || submittedLocally;

  const dirty =
    topic !== ASK_DRAFT.topic ||
    question !== ASK_DRAFT.question ||
    details !== ASK_DRAFT.details;

  if (submitted) {
    /* W-44G — Question submitted confirmation. */
    return (
      <div className="max-w-[1040px] pt-[20px] lg:pt-[16px]">
        <KnowledgeHeader
          to="/worker/knowledge"
          crumb={c.crumbKnowledge}
          title={c.ask.submittedTitle}
          subtitle={c.ask.submittedSubtitle}
          className="min-h-[158px]"
        />
        <AskSubmittedPanel />
      </div>
    );
  }

  const handleSubmit = () => {
    if (submitting || offline) return;
    if (question.trim() === "") {
      setValidationError(true);
      return;
    }
    setValidationError(false);
    setSubmittingLocally(true);
    timerRef.current = window.setTimeout(() => {
      timerRef.current = null;
      setSubmittingLocally(false);
      setSubmittedLocally(true);
    }, 600);
  };

  const handleBreadcrumb = (event: MouseEvent<HTMLAnchorElement>) => {
    if (dirty) {
      event.preventDefault();
      setUnsavedOpen(true);
    }
  };

  const fieldLabel =
    "text-[10px] leading-[14px] font-semibold text-lp-muted lg:text-[11px] lg:leading-normal";
  const fieldBox =
    "w-full rounded-[12px] border bg-white px-[13px] text-[12px] text-[#17231f] outline-none focus:border-lp-green lg:rounded-[10px] lg:px-[15px] lg:text-[14px] lg:text-[#0e1f18]";

  return (
    <div className="max-w-[1040px] pt-[20px] lg:pt-[16px]">
      <KnowledgeHeader
        to="/worker/knowledge"
        crumb={c.crumbKnowledge}
        title={c.ask.title}
        subtitle={c.ask.subtitle}
        onCrumbClick={handleBreadcrumb}
        className={offline ? "min-h-[126px]" : "min-h-[130px]"}
      />

      {offline && (
        <OfflineBanner className="lg:mt-[24px]" message={c.ask.offlineBanner} />
      )}

      <div className="lg:mt-[18px] lg:grid lg:grid-cols-[760px_1fr] lg:items-start lg:gap-6">
        <div>
          <p className={`${fieldLabel} ${offline ? "mt-[4px]" : ""} lg:mt-[5px]`}>
            {c.ask.topicLabel}
          </p>
          <button
            type="button"
            onClick={() => setTopicOverlayOpen(true)}
            className={`mt-[6px] flex h-[46px] items-center justify-between border-lp-line hover:border-lp-green lg:h-[52px] ${fieldBox}`}
          >
            {c.topics[topic]}
            <ChevronDown size={20} className="text-lp-green lg:size-[18px]" />
          </button>

          <p className={`mt-[12px] ${fieldLabel} lg:mt-[29px]`}>
            {c.ask.questionLabel}
          </p>
          <textarea
            value={question}
            rows={3}
            onChange={(event) => setQuestion(event.target.value)}
            className={`mt-[6px] block h-[88px] resize-none py-[13px] leading-[19px] lg:mt-[7px] lg:h-[52px] lg:py-[15px] lg:leading-normal ${fieldBox} ${
              validationError ? "border-[#a5382b] lg:border-signal" : "border-lp-line"
            }`}
          />
          {validationError && (
            <p className="mt-[4px] text-[10px] leading-[16px] text-[#a5382b] lg:mt-[8px] lg:text-[12px] lg:font-medium lg:text-signal">
              {c.ask.validationError}
            </p>
          )}

          <p
            className={`${fieldLabel} lg:mt-[29px] ${
              validationError ? "mt-[18px]" : ""
            }`}
          >
            {c.ask.detailsLabel}
          </p>
          <textarea
            value={details}
            rows={3}
            onChange={(event) => setDetails(event.target.value)}
            className={`mt-[6px] block h-[88px] resize-none border-lp-line py-[13px] leading-[19px] lg:h-[108px] lg:py-[12px] lg:leading-[22px] ${fieldBox}`}
          />

          {/* Mobile W-44: inline mint privacy note above the submit button. */}
          <NoteCard
            icon={CircleHelp}
            tone="mint"
            body={c.ask.privacyMobile}
            className="min-h-[78px] lg:mt-4 lg:hidden"
          />

          {/* W-44C parks the failure banner between the privacy note and the
              "Try again" button. */}
          {failed && !submitting && (
            <SubmitErrorBanner
              className="mt-[12px]"
              message={c.ask.failedBanner}
            />
          )}

          <div className={failed && !submitting ? "mt-[14px]" : "mt-[18px]"}>
            {failed && !submitting ? (
              /* W-44C keeps the draft and swaps the primary to "Try again";
                 retrying runs the same submit path (W-44B → W-44G). */
              <KnowledgeButton
                onClick={handleSubmit}
                className="lg:h-[50px] lg:w-[220px]"
              >
                {c.ask.tryAgain}
              </KnowledgeButton>
            ) : (
              <KnowledgeButton
                onClick={handleSubmit}
                disabled={submitting || offline}
                className={`lg:h-[50px] ${
                  validationError && question.trim() === ""
                    ? "opacity-45"
                    : ""
                } ${
                  offline
                    ? "cursor-not-allowed opacity-45"
                    : submitting
                      ? "cursor-default opacity-45"
                      : ""
                }`}
              >
                {submitting ? c.ask.submitting : c.ask.submit}
              </KnowledgeButton>
            )}
          </div>
        </div>

        <aside className="hidden min-h-[258px] rounded-[16px] border border-lp-line bg-lp-tint p-[17px] lg:mt-[28px] lg:block">
          <p className="text-[11px] leading-[22px] font-semibold text-lp-green">
            {c.ask.privacyEyebrow}
          </p>
          <p className="mt-[16px] text-[17px] leading-[21px] font-semibold text-[#0e1f18]">
            {c.ask.privacyTitle}
          </p>
          <p className="mt-[36px] text-[13px] leading-[16px] text-lp-muted">
            {c.ask.privacyBody}
          </p>
        </aside>
      </div>

      {topicOverlayOpen && (
        <TopicOverlay
          selected={topic}
          onSelect={(next) => {
            setTopic(next);
            setTopicOverlayOpen(false);
          }}
          onClose={() => setTopicOverlayOpen(false)}
        />
      )}
      {unsavedOpen && (
        <UnsavedChangesModal
          onKeepEditing={() => setUnsavedOpen(false)}
          onDiscard={() => navigate("/worker/knowledge")}
        />
      )}
    </div>
  );
}
