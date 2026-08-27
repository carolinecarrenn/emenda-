/**
 * Mock records for the EMENDA Assistant tab (Figma WD-59 / W-59).
 * Everything here is user/mock DATA — chat titles, previews, message bodies,
 * official-source names and domains, the attached file name and the voice
 * transcripts — so it is never translated. UI/system strings live in
 * assistant.copy.ts.
 */

export interface AssistantSource {
  id: string;
  /** Official body name — WD-59H "Immigration Services Agency". */
  title: string;
  /** WD-59H "moj.go.jp". */
  domain: string;
}

export const ASSISTANT_SOURCES: AssistantSource[] = [
  {
    id: "immigration-services-agency",
    title: "Immigration Services Agency",
    domain: "moj.go.jp",
  },
];

export type AssistantRole = "user" | "assistant";

export interface AssistantMessage {
  id: string;
  role: AssistantRole;
  text: string;
  /** Assistant answers grounded in an official source carry a citation pill. */
  sourceId?: string;
}

/** Rail/history rows show a relative label (Today / Yesterday) or a raw date. */
export type ChatDateKind = "today" | "yesterday" | "date";

export interface AssistantChat {
  id: string;
  title: string;
  preview: string;
  dateKind: ChatDateKind;
  /** Raw date string for dateKind "date" — formatted per language on render. */
  date?: string;
  messages: AssistantMessage[];
}

/** WD-59G — the message that never reached Emenda, echoed above Retry when
 *  the failed state is opened directly instead of by sending. */
export const SEND_FAILED_DRAFT = "Can you explain this document?";

export const ASSISTANT_CHATS: AssistantChat[] = [
  {
    id: "manager-message",
    title: "Manager message",
    preview: "Explain this Japanese message and help me reply.",
    dateKind: "today",
    messages: [
      {
        id: "manager-message-1",
        role: "user",
        text: "I got a message from my manager. What does it mean?",
      },
      {
        id: "manager-message-2",
        role: "assistant",
        text: "Send me the message or attach a screenshot. I can explain the meaning and help you draft a reply in the language you prefer.",
        sourceId: "immigration-services-agency",
      },
    ],
  },
  {
    id: "address-registration",
    title: "Address registration",
    preview: "What should I bring to the city office?",
    dateKind: "yesterday",
    messages: [
      {
        id: "address-registration-1",
        role: "user",
        text: "What documents do I need for address registration?",
      },
      {
        id: "address-registration-2",
        role: "assistant",
        text: "Bring your residence card and confirm the municipal office requirements for your city or ward.",
        sourceId: "immigration-services-agency",
      },
    ],
  },
  {
    id: "shift-question",
    title: "Shift question",
    preview: "Help me ask about tomorrow’s schedule.",
    dateKind: "date",
    date: "22 Aug",
    messages: [
      {
        id: "shift-question-1",
        role: "user",
        text: "Help me ask about tomorrow’s schedule.",
      },
      {
        id: "shift-question-2",
        role: "assistant",
        text: "Tell me which shift you want to confirm. I can draft a short, polite message in Japanese for your manager.",
      },
    ],
  },
];

/** WD-59I / W-59I — the file already picked and waiting above the composer. */
export const READY_ATTACHMENT = {
  name: "Shift notice.pdf",
};

/**
 * Voice input mocks. Desktop WD-59E reviews a single Indonesian line; mobile
 * W-59E adds the spoken utterance bubble and the Japanese translation.
 */
export const VOICE_DRAFT = {
  desktopTranscript: "Besok saya bisa datang pukul 9.",
  utterance: "Besok saya masuk shift pagi jam sembilan.",
  transcript: "Besok saya masuk shift pagi jam sembilan.",
  translation: "明日は午前9時から早番に入ります。",
};
