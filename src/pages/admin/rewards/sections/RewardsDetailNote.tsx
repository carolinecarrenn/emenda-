/* AD-07D note block: the 720x74 "Impact preview" panel (1239:611, #fff5db)
 * and the "Negative adjustment" panel (1239:636, #fcebe8), radius 10 — an
 * 11px semibold #13332b title over the 10px #63756e body. */
export function RewardsDetailNote({
  tone,
  title,
  body,
}: {
  tone: "impact" | "negative";
  title: string;
  body: string;
}) {
  return (
    <div
      className={`rounded-[10px] px-[11px] py-[11px] lg:h-[74px] ${
        tone === "impact" ? "bg-[#fff5db]" : "bg-[#fcebe8]"
      }`}
    >
      <p className="text-[11px] leading-none font-semibold text-[#13332b]">
        {title}
      </p>
      <p className="mt-[9px] text-[10px] leading-[14px] text-[#63756e]">
        {body}
      </p>
    </div>
  );
}
