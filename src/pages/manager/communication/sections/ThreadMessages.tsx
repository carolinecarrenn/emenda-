import type { ConversationThread, ThreadMessage } from "../communicationData";

/* The bilingual transcript, drawn twice because the two mocks disagree by
   design.

   EM-07 (797:90) · mobile: the manager's own words sit right-aligned in a
   solid #06634f bubble 250px wide, so the Japanese wraps — a 9px author
   line without the language tag, the original in semibold 14px white, and
   the Indonesian rendering in a lighter #0b755c pill whose "JA → ID" label
   runs inline before the text.

   MD-07 (1225:125–132) · desktop: manager bubbles are 520px #f1f6f3 blocks
   on the left, worker bubbles 530px #e3f0e8 blocks on the right, both radius
   12 — a 10px semibold #65746d author line ("Sato Kenji · 14:20 · 日本語"),
   12px #141f1a original, and the translation inline as a 10px #0c5941
   "JA → ID · …" line rather than a chip.

   Every original and every translation is raw content. */
export function ThreadMessages({ thread }: { thread: ConversationThread }) {
  return (
    <div>
      {/* EM-07 · mobile */}
      <div className="space-y-[10px] lg:hidden">
        {thread.messages.map((message) =>
          message.author === "manager" ? (
            <ManagerBubbleMobile key={message.id} message={message} />
          ) : (
            <WorkerCardMobile key={message.id} message={message} />
          ),
        )}
      </div>

      {/* MD-07 · desktop — the mock carries the opening manager line and the
          worker reply; mobile-only bubbles stay on EM-07. */}
      <div className="hidden lg:block lg:space-y-[20px]">
        {thread.messages
          .filter((message) => message.surface !== "mobile")
          .map((message) => (
            <DesktopBubble key={message.id} message={message} />
          ))}
      </div>
    </div>
  );
}

function ManagerBubbleMobile({ message }: { message: ThreadMessage }) {
  return (
    <div className="flex justify-end">
      {/* 994:2755–2759 · a 250x106 radius-16 bubble at a 16px inset; the
          #0b755c strip runs 226px wide, 4px past the text column each side. */}
      <div className="w-[250px] rounded-[16px] bg-[#06634f] px-[16px] pt-[12px] pb-[10px]">
        <p className="text-[9px] leading-[13px] text-white">
          {message.authorName} · {message.time}
        </p>
        <p className="mt-[8px] text-[14px] leading-[18px] font-semibold text-white">
          {message.original}
        </p>
        {/* 797:90 · the pair label sits inline ahead of the translation, in
            the same 9px white regular run as the sentence. */}
        <p className="mt-[3px] -mx-[4px] rounded-[10px] bg-[#0b755c] px-[10px] py-[5px] text-[9px] leading-[13px] text-white">
          <span className="mr-[8px]">{message.direction}</span>
          {message.translation}
        </p>
      </div>
    </div>
  );
}

function WorkerCardMobile({ message }: { message: ThreadMessage }) {
  return (
    <div className="flex justify-start">
      {/* 994:2765–2769 · the same geometry in white on a #d6e3de hairline,
          112px tall because its original wraps to two 18px lines. */}
      <div className="w-[250px] rounded-[16px] border border-[#d6e3de] bg-white px-[16px] pt-[12px] pb-[8px]">
        <p className="text-[9px] leading-[13px] text-[#6e8a82]">
          {message.authorName} · {message.time}
        </p>
        <p className="mt-[10px] text-[14px] leading-[18px] font-semibold text-[#094033]">
          {message.original}
        </p>
        <p className="mt-[6px] -mx-[4px] rounded-[10px] bg-[#e8f5f0] px-[10px] py-[5px] text-[9px] leading-[13px] text-[#094033]">
          <span className="mr-[8px]">{message.direction}</span>
          {message.translation}
        </p>
      </div>
    </div>
  );
}

function DesktopBubble({ message }: { message: ThreadMessage }) {
  const fromManager = message.author === "manager";

  return (
    <div className={fromManager ? "flex" : "flex justify-end"}>
      <div
        className={`w-full rounded-[12px] px-[18px] pt-[15px] pb-[9px] ${
          fromManager ? "max-w-[520px] bg-[#f1f6f3]" : "max-w-[530px] bg-[#e3f0e8]"
        }`}
      >
        <p className="text-[10px] font-semibold text-[#65746d]">
          {message.authorName} · {message.time} · {message.originalLanguage}
        </p>
        <p className="mt-[8px] text-[12px] leading-[18px] text-[#141f1a]">
          {message.original}
        </p>
        <p className="mt-[9px] text-[10px] leading-[16px] text-brand">
          {message.direction} · {message.translation}
        </p>
      </div>
    </div>
  );
}
