import { useEffect, useState } from "react";
import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { useCommonCopy } from "@/i18n/common";
import { CHAT_COPY, fill } from "../chat.copy";
import {
  DRAFT_MESSAGE,
  IMPORTANT_REVIEW,
  LANG_ID,
  LANG_JA,
  nowStamp,
  stubTranslation,
} from "../chatMock";
import type { ChatConversation, ChatMessage } from "../chatMock";
import { AttachmentMenu } from "./AttachmentMenu";
import { AttachmentReadyCard } from "./AttachmentReadyCard";
import { ChatAvatar, ChatStateBanner } from "./chatUi";
import { Composer } from "./Composer";
import { ImportantReviewCard } from "./ImportantReviewCard";
import { MessageBubble } from "./MessageBubble";
import { SendFailedCard, SendFailedRetry } from "./SendFailedCard";
import { TranslationUnavailableCard } from "./TranslationUnavailableCard";
import {
  VoiceFailedPanel,
  VoiceRecordingPanel,
  VoiceTranscribingPanel,
  VoiceTranslationReadyPanel,
} from "./VoicePanels";

type Stage =
  | "idle"
  | "attach-menu"
  | "attachment-ready"
  | "recording"
  | "transcribing"
  | "translation-ready"
  | "voice-failed"
  | "review";

/** The ?state= variants that open on a non-idle stage. Using them as the
 *  INITIAL stage (instead of pinning it) keeps every button inside those
 *  screens live — "Try again" really re-runs processing and the review gate
 *  really returns to the composer. */
function initialStage(state: string | null): Stage {
  if (state === "review") return "review";
  if (state === "voice-failed") return "voice-failed";
  return "idle";
}

/** Thread pane — W-58 (1035:130) plus its lettered variants: 58A typing,
 *  58B send failed, 58C offline, 58D access ended, 58E attachment menu,
 *  58F/G/H/I voice pipeline, 58J important review, 58K/58L employer support,
 *  58M attachment ready, 58N translation unavailable.
 *  Mobile is a full-height column: the 350x60 recipient card, the bubble
 *  stack on a 10px rhythm and every state panel docked at the foot of the
 *  body, directly above the composer pill.
 *  Desktop WD-58 (1182:6471) renders the same content as a 764x744 card. */
export function ThreadCard({
  conversation,
  state,
}: {
  conversation: ChatConversation;
  state: string | null;
}) {
  const c = useSectionCopy(CHAT_COPY);
  const common = useCommonCopy();

  const offline = state === "offline";
  const accessEnded = state === "access-ended";
  const typing = state === "typing";
  const isSupport = conversation.id === "support";

  const [stage, setStage] = useState<Stage>(() => initialStage(state));
  /* W-58B / W-58N open on the failure, but "Retry send" and
     "Retry translation" clear it — the recovery is a real control. */
  const [sendFailed, setSendFailed] = useState(state === "send-failed");
  const [translationUnavailable, setTranslationUnavailable] = useState(
    state === "translation-unavailable",
  );

  const [draft, setDraft] = useState(
    typing || state === "send-failed" || state === "translation-unavailable"
      ? DRAFT_MESSAGE
      : "",
  );
  const [touched, setTouched] = useState(false);
  /* Messages composed in-session, appended after the review gate (W-58J). */
  const [sent, setSent] = useState<ChatMessage[]>([]);
  /* The pair under review when the gate was opened from the composer;
     null keeps the W-58J mock pair (the voice pipeline's own gate). */
  const [pending, setPending] = useState<{
    original: string;
    translation: string;
  } | null>(null);

  /* W-58G → W-58H: transcription finishes on its own; nothing is sent. */
  useEffect(() => {
    if (stage !== "transcribing") return;
    const timer = window.setTimeout(() => setStage("translation-ready"), 1600);
    return () => window.clearTimeout(timer);
  }, [stage]);

  const title = conversation.personName ?? c.hub.employerSupportDesk;
  const contextLine = isSupport
    ? `${c.hub.workAdminSupport} · ${conversation.language}`
    : accessEnded
      ? `${common.manager.facilityManager} · ${c.thread.accessEndedContext}`
      : `${common.manager.facilityManager} · ${conversation.language} · ${c.thread.autoTranslation}`;

  /* WD-58C 1182:6770 keeps the plain "Message …" prompt in the offline pill
     and moves "Draft preserved" into the status block below; W-58C puts it in
     the field, so the two viewports get different prompts. */
  const basePlaceholder =
    stage === "attachment-ready"
      ? c.composer.addMessagePlaceholder
      : conversation.personName === null
        ? c.composer.messageSupportPlaceholder
        : fill(c.composer.messagePlaceholder, {
            name: conversation.personName,
          });

  const placeholder = offline
    ? c.composer.draftPreserved
    : accessEnded
      ? c.composer.messagingUnavailable
      : basePlaceholder;

  const messages = [...conversation.messages, ...sent];
  /* W-58H and WD-58H both put the worker's own turn aside: the voice step
     shows only what has already been delivered. */
  const visibleMessages =
    stage === "translation-ready"
      ? messages.filter((message) => message.side === "manager")
      : messages;
  /* W-58I / W-58N drop the outgoing bubble as well, but WD-58I (1182:7245)
     and WD-58N (1182:7747) keep the delivered history next to the state card,
     so from lg up the worker turn returns and the untranslated stand-in
     bubble goes away. */
  const workerTurnDesktopOnly =
    stage === "voice-failed" || translationUnavailable;

  const lastWorkerId = [...messages]
    .reverse()
    .find((message) => message.side === "worker")?.id;

  /* W-58N 1053:715 — the draft that came back without a translation. */
  const untranslatedDraft: ChatMessage = {
    id: "draft-untranslated",
    side: "worker",
    originalLanguage: LANG_ID,
    original: draft.trim() === "" ? DRAFT_MESSAGE : draft,
    translatedLanguage: LANG_JA,
    translated: c.unavailable.originalKept,
    time: nowStamp(),
  };

  /* W-58F..58I replace the composer with the step's own panel. */
  const voiceStage =
    stage === "recording" ||
    stage === "transcribing" ||
    stage === "translation-ready" ||
    stage === "voice-failed";

  /* W-58K/58L label the incoming side by the desk, not by a manager. */
  const incomingLabel = isSupport ? c.thread.labelEmployerSupport : undefined;

  /* W-58J is the send path: nothing leaves the composer without a human
     confirming the translation first. */
  const openReview = () => {
    const original = draft.trim();
    if (original === "") return;
    setPending({ original, translation: stubTranslation(original) });
    setStage("review");
  };

  const sendReviewed = () => {
    const payload = pending ?? {
      original: IMPORTANT_REVIEW.original,
      translation: IMPORTANT_REVIEW.translation,
    };
    setSent((prev) => [
      ...prev,
      {
        id: `sent-${prev.length + 1}`,
        side: "worker",
        originalLanguage: LANG_ID,
        original: payload.original,
        translatedLanguage: LANG_JA,
        translated: payload.translation,
        time: nowStamp(),
      },
    ]);
    setDraft("");
    setTouched(false);
    setPending(null);
    setStage("idle");
  };

  const editOriginal = () => {
    if (pending !== null) {
      setDraft(pending.original);
      setPending(null);
    }
    setStage("idle");
  };

  return (
    <div className="flex flex-1 flex-col lg:h-[744px] lg:flex-none lg:rounded-[16px] lg:border lg:border-lp-line lg:bg-white">
      {/* Recipient context card — W-58 1051:448 */}
      <div className="flex h-[60px] items-center gap-[10px] rounded-[14px] border border-[#d9e1dc] bg-white px-[12px] py-[10px] lg:h-auto lg:items-start lg:gap-[16px] lg:rounded-none lg:border-0 lg:border-b lg:border-lp-line lg:bg-transparent lg:px-[23px] lg:pt-[14px] lg:pb-[1px]">
        <span className="lg:mt-[4px]">
          <ChatAvatar initials={conversation.initials} thread />
        </span>
        <div className="min-w-0">
          <p className="truncate text-[12px] leading-[16px] font-semibold text-[#131f1a] lg:text-[16px] lg:leading-[24px]">
            {title}
          </p>
          <p className="truncate text-[10px] leading-[14px] text-[#596b61] lg:text-[12px] lg:leading-[20px]">
            {contextLine}
          </p>
          {/* W-58 carries the employer scope in the page subtitle instead;
              WD-58K (1182:7470) leaves it off the support desk header. */}
          {!isSupport && (
            <p className="hidden truncate text-[12px] leading-[16px] font-semibold text-[#0a4738] lg:block">
              {fill(c.hub.subtitle, { employer: EMPLOYER.name })}
            </p>
          )}
        </div>
      </div>

      {stage === "review" ? (
        /* W-58J replaces the thread body with the consent gate. */
        <div className="flex flex-1 items-end pt-[10px] lg:items-start lg:px-[23px] lg:pt-[74px]">
          <ImportantReviewCard
            onEdit={editOriginal}
            onSend={sendReviewed}
            original={pending?.original}
            translation={pending?.translation}
          />
        </div>
      ) : (
        <>
          <div className="flex flex-1 flex-col gap-[10px] pt-[10px] pb-[12px] lg:gap-[20px] lg:overflow-y-auto lg:px-[23px] lg:pt-[20px] lg:pb-[14px]">
            {/* W-58C/58D carry the whole notice in the banner; WD-58C
                (1182:6752) / WD-58D (1182:6844) keep a one-line strip here and
                repeat the detail as plain text above the composer. */}
            {offline && (
              <>
                <div className="lg:hidden">
                  <ChatStateBanner
                    dense
                    title={c.banner.offlineTitle}
                    body={
                      isSupport
                        ? c.banner.offlineSupportBody
                        : c.banner.offlineThreadBody
                    }
                  />
                </div>
                <div className="hidden lg:block">
                  <ChatStateBanner title={c.banner.threadOfflineBanner} />
                </div>
              </>
            )}
            {accessEnded && (
              <>
                <div className="lg:hidden">
                  <ChatStateBanner
                    dense
                    title={c.banner.threadAccessEndedTitle}
                    body={c.banner.threadAccessEndedBody}
                  />
                </div>
                <div className="hidden lg:block">
                  <ChatStateBanner title={c.banner.threadAccessEndedBanner} />
                </div>
              </>
            )}

            {visibleMessages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                failed={sendFailed && message.id === lastWorkerId}
                /* W-58C/58L stamp only the worker's own turn "Cached". */
                cached={offline && message.side === "worker"}
                hiddenOnMobile={
                  workerTurnDesktopOnly && message.side === "worker"
                }
                speakerLabel={
                  message.side === "manager" ? incomingLabel : undefined
                }
              />
            ))}
            {translationUnavailable && (
              <div className="lg:hidden">
                <MessageBubble
                  message={untranslatedDraft}
                  untranslatedNote={c.unavailable.originalKept}
                />
              </div>
            )}

            {sendFailed && (
              <SendFailedCard onRetry={() => setSendFailed(false)} />
            )}

            {/* Every state panel docks at the foot of the body on mobile,
                just above the composer (W-58B/58E/58F..58I/58M/58N); the
                desktop mocks let it follow the last bubble instead
                (WD-58F 1182:6963 … WD-58N 1182:7747). */}
            <div
              className={`mt-auto flex flex-col gap-[12px] empty:hidden ${
                stage === "attach-menu" ? "lg:mt-auto" : "lg:mt-[46px]"
              }`}
            >
              {stage === "attachment-ready" && (
                <AttachmentReadyCard onRemove={() => setStage("idle")} />
              )}
              {stage === "recording" && (
                <VoiceRecordingPanel onStop={() => setStage("transcribing")} />
              )}
              {stage === "transcribing" && <VoiceTranscribingPanel />}
              {stage === "translation-ready" && (
                <VoiceTranslationReadyPanel onReview={() => setStage("review")} />
              )}
              {stage === "voice-failed" && (
                <VoiceFailedPanel onRetry={() => setStage("transcribing")} />
              )}
              {translationUnavailable && (
                <TranslationUnavailableCard
                  onRetry={() => setTranslationUnavailable(false)}
                />
              )}
              {sendFailed && (
                <SendFailedRetry onRetry={() => setSendFailed(false)} />
              )}
              {stage === "attach-menu" && (
                <AttachmentMenu
                  onSelect={() => setStage("attachment-ready")}
                  onDismiss={() => setStage("idle")}
                />
              )}
            </div>

            {/* WD-58C 1223:1729-31 / WD-58D 1223:1732-33 spell the state out
                again as plain text above the composer. */}
            {(offline || accessEnded) && (
              <div className="hidden lg:mt-[46px] lg:block">
                {offline && (
                  <p className="text-[14px] leading-[24px] font-semibold text-[#0a4738]">
                    {c.banner.offlineTitle}
                  </p>
                )}
                <p className="mt-[9px] max-w-[690px] text-[12px] leading-[20px] text-lp-muted">
                  {offline
                    ? isSupport
                      ? c.banner.offlineSupportBody
                      : c.banner.offlineThreadBody
                    : c.banner.threadAccessEndedBody}
                </p>
                <p className="mt-[11px] text-[12px] leading-[20px] font-semibold text-[#0a4738]">
                  {offline
                    ? c.composer.draftPreserved
                    : c.composer.messagingUnavailable}
                </p>
              </div>
            )}
          </div>

          <div
            className={`relative z-50 lg:z-auto lg:px-[19px] lg:pb-[21px] ${
              voiceStage ? "hidden lg:block" : ""
            }`}
          >
            {/* WD-58A echoes the draft above the pill; W-58A keeps it in the
                input itself. */}
            {(typing || touched) && draft.trim() !== "" && (
              <p className="mb-[8px] hidden text-[13px] leading-[26px] text-[#0a4738] lg:block lg:pl-[64px]">
                {draft}
              </p>
            )}
            {accessEnded || offline ? (
              /* WD-58D drops the composer entirely; W-58C/58D keep a greyed
                 one that still names what is happening to the draft. */
              <div className={accessEnded ? "lg:hidden" : ""}>
                <Composer
                  placeholder={placeholder}
                  desktopPlaceholder={basePlaceholder}
                  value=""
                  onChange={() => undefined}
                  disabled
                />
              </div>
            ) : (
              <Composer
                placeholder={placeholder}
                value={draft}
                /* WD-58A 1182:6583 / WD-58N leave the pill on its prompt and
                   show the staged draft above it or inside the state card. */
                desktopValue={
                  typing || translationUnavailable
                    ? touched
                      ? draft
                      : ""
                    : undefined
                }
                onChange={(value) => {
                  setTouched(true);
                  setDraft(value);
                }}
                onAdd={() => setStage("attach-menu")}
                onMic={() => setStage("recording")}
                onSend={openReview}
                canSend={draft.trim() !== ""}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}
