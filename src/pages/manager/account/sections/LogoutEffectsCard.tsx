import { useSectionCopy } from "@/i18n/copy";
import { MANAGER_ACCOUNT_COPY } from "../account.copy";

/* EM-20 "WHEN YOU SIGN OUT" (1133:150…1133:152): 350x140 white card with the
   five bulleted 9px #65746d effect lines — including the guarantee that no
   pending action is claimed as completed. */
export function LogoutEffectsCard() {
  const c = useSectionCopy(MANAGER_ACCOUNT_COPY);

  return (
    <div className="min-h-[140px] rounded-[10px] border border-[#d1e0d9] bg-white px-[12px] py-[14px] lg:min-h-0">
      <p className="text-[9px] font-semibold text-[#0c513b] uppercase lg:text-[11px]">
        {c.logout.whenYouSignOut}
      </p>
      <ul className="mt-[8px] text-[9px] leading-[12px] text-[#65746d] lg:space-y-[4px] lg:text-[11px] lg:leading-[19px]">
        {c.logout.bullets.map((bullet) => (
          <li key={bullet}>• {bullet}</li>
        ))}
      </ul>
    </div>
  );
}
