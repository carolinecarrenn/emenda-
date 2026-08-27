import { useState, type MouseEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useScreenState } from "@/hooks/useScreenState";
import { useHelpCopy } from "./help.copy";
import {
  HELP_LINKS,
  SUPPORT_DRAFT,
  isSupportTopicId,
  type SupportTopicId,
} from "./helpMock";
import { ContactFormFields } from "./sections/ContactFormFields";
import { DiscardSupportRequestModal } from "./sections/DiscardSupportRequestModal";
import { PrivateSupportNote } from "./sections/PrivateSupportNote";
import { PrivateSupportRail } from "./sections/PrivateSupportRail";
import { SupportStateBanner } from "./sections/SupportStateBanner";
import { SupportTopicOverlay } from "./sections/SupportTopicOverlay";

/** Contact Support (Figma WD-48 node 1182:113 · validation WD-48A 1182:172 ·
 *  submitting WD-48B 1182:231 · submit failed WD-48C 1182:290 · offline
 *  WD-48D 1182:351 · unsaved changes WD-48E 1182:412 · topic overlay WD-48F
 *  1182:479 · submitted WD-48G 1182:546; mobile W-48 node 899:101).
 *  700px form column + 284px PRIVATE SUPPORT rail inside the 1012px content
 *  column; mobile drops the rail for the inline mint note. */
export function ContactSupportPage() {
  const state = useScreenState();
  const navigate = useNavigate();
  const c = useHelpCopy();
  const [params] = useSearchParams();

  // "Account & access recovery" (WD-47 quick help) arrives with ?topic=.
  const topicSeed = params.get("topic");

  const failed = state === "failed" || state === "submit-failed";
  const offline = state === "offline";

  // Snapshot taken once so the discard guard compares against what the form
  // actually opened with — a ?topic= seed or an empty WD-48A issue included.
  const [initial] = useState(() => ({
    topic: isSupportTopicId(topicSeed) ? topicSeed : SUPPORT_DRAFT.topic,
    issue: state === "validation-error" ? "" : SUPPORT_DRAFT.issue,
    details: SUPPORT_DRAFT.details,
  }));
  const [topic, setTopic] = useState<SupportTopicId>(initial.topic);
  const [issue, setIssue] = useState(initial.issue);
  const [details, setDetails] = useState(initial.details);
  const [topicOverlayOpen, setTopicOverlayOpen] = useState(
    state === "topic-overlay",
  );
  const [discardOpen, setDiscardOpen] = useState(state === "unsaved-changes");
  const [issueError, setIssueError] = useState(state === "validation-error");
  const [localSubmitting, setLocalSubmitting] = useState(false);

  const submitting = state === "submitting" || localSubmitting;

  const dirty =
    topic !== initial.topic ||
    issue !== initial.issue ||
    details !== initial.details;

  const handleSubmit = () => {
    if (submitting || offline) return;
    if (issue.trim() === "") {
      setIssueError(true);
      return;
    }
    setIssueError(false);
    // WD-48B: the form locks into "Submitting…" before the WD-48G receipt.
    setLocalSubmitting(true);
    window.setTimeout(() => navigate(HELP_LINKS.sent), 800);
  };

  const handleBreadcrumb = (event: MouseEvent<HTMLAnchorElement>) => {
    if (dirty) {
      event.preventDefault();
      setDiscardOpen(true);
    }
  };

  return (
    <div className="max-w-[1012px] pt-2 lg:pt-[2px]">
      {/* W-48 draws the back chevron after the label inside a 170px row
          (nodes 899:138/899:140); WD-48 is the bare text breadcrumb. */}
      <Link
        to={HELP_LINKS.help}
        onClick={handleBreadcrumb}
        className="inline-flex w-[170px] items-center text-[13px] font-semibold text-lp-green hover:text-lp-button lg:w-auto lg:leading-[26px]"
      >
        {c.contact.breadcrumb}
        <ChevronLeft
          size={20}
          strokeWidth={1.8}
          className="ml-auto shrink-0 lg:hidden"
        />
      </Link>
      <h1 className="mt-[14px] text-[22px] font-semibold text-[#083d2d] lg:mt-[12px] lg:font-bold lg:text-[34px] lg:leading-[54px] lg:text-lp-ink">
        {c.contact.title}
      </h1>
      <p className="mt-[14px] text-[12px] text-lp-muted lg:mt-[4px] lg:text-[14px] lg:leading-[34px]">
        {offline ? c.contact.offlineSubtitle : c.contact.subtitle}
      </p>

      {/* WD-48D offline strip sits above the form column, node 1200:267 */}
      {offline && (
        <SupportStateBanner
          tone="formOffline"
          message={c.contact.offlineBanner}
          className="mt-[27px] lg:mt-[24px] lg:max-w-[700px]"
        />
      )}

      <div
        className={`lg:grid lg:grid-cols-[700px_284px] lg:items-start lg:gap-[28px] ${
          offline ? "mt-[4px] lg:mt-[20px]" : "mt-[31px] lg:mt-[44px]"
        }`}
      >
        <div>
          <ContactFormFields
            topic={topic}
            issue={issue}
            details={details}
            issueError={issueError}
            disabled={submitting}
            onOpenTopic={() => setTopicOverlayOpen(true)}
            onIssueChange={(value) => {
              setIssue(value);
              if (value.trim() !== "") setIssueError(false);
            }}
            onDetailsChange={setDetails}
          />

          {/* W-48 node 899:130 hangs the mint note straight off the DETAILS
              field; WD-48 hides it for the PRIVATE SUPPORT rail. */}
          <PrivateSupportNote />

          {/* Failure strip — W-48C node 899:265 (below the note on mobile) ·
              WD-48C node 1200:264 (below the fields on desktop). */}
          {failed && (
            <SupportStateBanner
              tone="formError"
              message={c.contact.failedBanner}
              className="mt-[12px] lg:mt-[20px]"
            />
          )}

          <button
            type="button"
            disabled={submitting || offline}
            onClick={handleSubmit}
            className={`flex h-[48px] w-full items-center justify-center rounded-[14px] border border-transparent text-[12px] font-semibold lg:rounded-[12px] lg:text-[14px] ${
              failed ? "mt-[14px] lg:mt-[16px]" : "mt-[18px] lg:mt-[100px]"
            } ${
              submitting
                ? "cursor-default bg-brand text-white opacity-45 lg:border-lp-line lg:bg-[#baccc4] lg:text-lp-green lg:opacity-100"
                : offline
                  ? "cursor-not-allowed bg-brand text-white opacity-45 lg:bg-lp-button lg:opacity-100"
                  : issueError
                    ? "bg-brand text-white opacity-45 lg:bg-lp-button lg:opacity-100"
                    : "bg-brand text-white hover:bg-lp-green lg:bg-lp-button"
            }`}
          >
            {submitting
              ? c.contact.submitting
              : failed
                ? c.contact.tryAgain
                : c.contact.submit}
          </button>
        </div>

        <PrivateSupportRail overlayVariant={topicOverlayOpen} />
      </div>

      {topicOverlayOpen && (
        <SupportTopicOverlay
          selected={topic}
          onSelect={(next) => {
            setTopic(next);
            setTopicOverlayOpen(false);
          }}
          onClose={() => setTopicOverlayOpen(false)}
        />
      )}
      {discardOpen && (
        <DiscardSupportRequestModal
          onKeepEditing={() => setDiscardOpen(false)}
          onDiscard={() => navigate(HELP_LINKS.help)}
        />
      )}
    </div>
  );
}
