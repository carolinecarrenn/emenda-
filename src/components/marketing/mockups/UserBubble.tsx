/** The person's turn in a mockup conversation — solid brand green, right
 *  aligned, matching the assistant surface on mobile (W-59A). */
export function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <p className="max-w-[82%] rounded-[18px] rounded-br-[6px] bg-brand px-4 py-2.5 text-[13px] leading-[1.55] text-white shadow-lp-sm">
        {children}
      </p>
    </div>
  );
}
