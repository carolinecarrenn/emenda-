/* Section 09 caps list heading (EM-16 "EXPORT SCOPE" 1109:14, EM-16A
   "PACKAGE CONTENTS" 1109:48, EM-17 "PACKAGE SUMMARY" 1109:78, EM-STATE-01
   "UNAVAILABLE WHILE OFFLINE" 1109:134, EM-STATE-02 "PENDING ACTION REVIEW"
   1109:147): 9px semibold #0c5941, uppercase. */
export function AuditSectionHeading({ children }: { children: string }) {
  return (
    <h2 className="text-[9px] font-semibold text-[#0c5941] uppercase lg:text-[11px]">
      {children}
    </h2>
  );
}
