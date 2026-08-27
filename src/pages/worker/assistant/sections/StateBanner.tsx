/* Top-of-thread state banner (Figma WD-59F · 1186:1104 offline and
   WD-59G · 1186:1183 send failed): 746x62, radius 14, 13px body.
   Offline = #fff5d6 fill / #ed911a border / #804d0d text.
   Send failed = #fff0ed fill / #c72924 border / #c72924 text. */
export function StateBanner({
  tone,
  message,
}: {
  tone: "offline" | "error";
  message: string;
}) {
  const skin =
    tone === "offline"
      ? "border-[#ed911a] bg-[#fff5d6] text-[#804d0d]"
      : "border-[#c72924] bg-[#fff0ed] text-[#c72924]";

  return (
    <div
      className={`flex min-h-[62px] items-center rounded-[14px] border px-[17px] py-3 text-[13px] leading-[20px] lg:max-w-[746px] ${skin}`}
    >
      {message}
    </div>
  );
}
