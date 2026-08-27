import { useState } from "react";
import { Copy, RefreshCw } from "lucide-react";
import { EMPLOYER } from "@/data/caregiverReport";
import { useSectionCopy } from "@/i18n/copy";
import { WORKSPACE_COPY } from "../workspace.copy";
import { INVITE } from "../workspaceMock";
import { WorkspaceButton } from "./WorkspaceButtons";

/* MD-04B "INVITE WORKER" card (1213:445…455): a 650x278 white card that
   states the code as two plain lines — "Invite code" over KIT-CF-24A8 — then
   the sentence that the worker accepts the connection from their own account
   and the employer never takes ownership of the worker EMENDA ID, and the
   "Copy invite code" / "Regenerate" pair on the card floor. The tinted
   monospace field, the INVITE STATUS / EMPLOYMENT CONNECTION rows and the
   portability doctrine are the 390px surface (EM-04B).
   The code itself is DATA — it is never translated. */
export function InviteWorkerCard() {
  const c = useSectionCopy(WORKSPACE_COPY);
  const [code, setCode] = useState<string>(INVITE.code);
  const [toast, setToast] = useState<string | null>(null);

  const copyCode = () => {
    void navigator.clipboard?.writeText(code);
    setToast(c.invite.copiedToast);
  };

  const regenerate = () => {
    const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
    setCode(`KIT-CF-${suffix}`);
    setToast(c.invite.regeneratedToast);
  };

  return (
    <section className="rounded-[12px] border border-[#dbe3de] bg-white px-[18px] py-[18px] lg:flex lg:min-h-[278px] lg:flex-col lg:px-[24px] lg:pt-[28px] lg:pb-[31px]">
      <h2 className="hidden text-[13px] font-semibold text-[#083d2d] lg:block lg:text-[14px]">
        {c.invite.cardTitle}
      </h2>

      <p className="text-[10px] font-semibold tracking-[0.04em] text-[#66736b] uppercase lg:mt-[21px] lg:text-[11px] lg:font-normal lg:normal-case lg:tracking-normal">
        {c.invite.inviteCodeLabel}
      </p>
      <p className="mt-[8px] rounded-[10px] border border-[#dbe3de] bg-[#f7f9f6] px-[16px] py-[13px] font-display text-[18px] font-bold tracking-[0.08em] text-[#083d2d] lg:hidden">
        {code}
      </p>
      <p className="hidden text-[12px] leading-[16px] text-[#17241f] lg:block">
        {code}
      </p>

      <p className="mt-[16px] text-[12px] leading-[19px] text-[#66736b] lg:leading-[16px]">
        {c.invite.inviteBody}
      </p>

      <div className="mt-[18px] flex flex-col gap-[10px] lg:mt-auto lg:flex-row lg:gap-[17px]">
        <WorkspaceButton
          tone="dark"
          onClick={copyCode}
          className="w-full lg:h-[40px] lg:w-[169px]"
        >
          <Copy aria-hidden="true" className="mr-[8px] size-[14px] lg:hidden" />
          {c.invite.copyInviteCode}
        </WorkspaceButton>
        <WorkspaceButton
          onClick={regenerate}
          className="w-full lg:h-[40px] lg:w-[149px]"
        >
          <RefreshCw
            aria-hidden="true"
            className="mr-[8px] size-[14px] lg:hidden"
          />
          {c.invite.regenerate}
        </WorkspaceButton>
      </div>

      {toast && (
        <p
          role="status"
          className="mt-[12px] text-[11px] font-semibold text-[#0c5941]"
        >
          {toast}
        </p>
      )}

      <dl className="mt-[20px] space-y-[12px] border-t border-[#dbe3de] pt-[18px] lg:hidden">
        <div className="flex items-baseline justify-between gap-[12px]">
          <dt className="text-[10px] font-semibold tracking-[0.04em] text-[#66736b] uppercase">
            {c.invite.inviteStatusLabel}
          </dt>
          <dd className="text-[12px] font-semibold text-[#0c5941]">
            {c.invite.inviteStatusValue}
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-[12px]">
          <dt className="text-[10px] font-semibold tracking-[0.04em] text-[#66736b] uppercase">
            {c.invite.employmentConnectionLabel}
          </dt>
          <dd className="text-right text-[12px] text-[#17241f]">
            {EMPLOYER.name} · {EMPLOYER.facility}
          </dd>
        </div>
      </dl>

      <p className="mt-[18px] rounded-[10px] border border-[#c9ded4] bg-[#e8f5f0] px-[14px] py-[12px] text-[11px] leading-[17px] font-semibold text-[#083d2d] lg:hidden">
        {c.invite.doctrine}
      </p>
    </section>
  );
}
