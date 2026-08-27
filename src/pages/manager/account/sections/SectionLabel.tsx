/* Uppercase micro-label used across sections 03 / 10 (OPERATIONS,
   GOVERNANCE & ACCOUNT, PREFERENCES, ACCESS & ACCOUNT, ALLOWED, …):
   10px bold #094033 caps on mobile (761:1036), 11px #0c5941 on the desktop
   frames — red #c74a3d for MD-18A's "NOT AVAILABLE" (1223:205). */
export function SectionLabel({
  children,
  tone = "green",
}: {
  children: React.ReactNode;
  tone?: "green" | "red";
}) {
  return (
    <h2
      className={`text-[10px] font-bold uppercase lg:text-[11px] lg:leading-[20px] ${
        tone === "red"
          ? "text-[#c24529] lg:text-[#c74a3d]"
          : "text-[#094033] lg:text-[#0c5941]"
      }`}
    >
      {children}
    </h2>
  );
}
