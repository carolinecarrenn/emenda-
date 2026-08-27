import { useEffect, useRef } from "react";
import { useCommonCopy } from "@/i18n/common";
import { useProfileCopy } from "../profile.copy";
import { ProfileOverlay } from "./ProfileOverlay";

/** WD-19D / W-19D — "Profile photo" avatar options (modal / bottom sheet). */
export function AvatarOptionsOverlay({
  onChooseFromPhotos,
  onUseInitials,
  onClose,
}: {
  onChooseFromPhotos: () => void;
  onUseInitials: () => void;
  onClose: () => void;
}) {
  const c = useProfileCopy();
  const common = useCommonCopy();
  return (
    <ProfileOverlay onScrimClick={onClose}>
      <p className="text-[18px] font-semibold text-ink">
        {c.profilePhotoTitle}
      </p>
      <p className="mt-[8px] text-[13px] text-ink-muted">
        {c.profilePhotoSubtitle}
      </p>
      <div className="mt-[20px] flex flex-col gap-[10px]">
        <button
          type="button"
          onClick={onChooseFromPhotos}
          className="flex h-[48px] w-full items-center justify-center rounded-[14px] bg-brand text-[14px] font-semibold text-white hover:bg-brand-deep"
        >
          {c.chooseFromPhotos}
        </button>
        <button
          type="button"
          onClick={onUseInitials}
          className="flex h-[48px] w-full items-center justify-center rounded-[14px] border border-line bg-white text-[14px] font-semibold text-brand-deep hover:bg-brand-soft"
        >
          {c.useInitials}
        </button>
        <button
          type="button"
          onClick={onClose}
          className="flex h-[48px] w-full items-center justify-center rounded-[14px] border border-line bg-white text-[14px] font-semibold text-brand-deep hover:bg-brand-soft"
        >
          {common.action.cancel}
        </button>
      </div>
    </ProfileOverlay>
  );
}

/** WD-19E / W-19E — "Photo access is off" permission-required overlay. */
export function PhotoPermissionOverlay({
  onOpenSettings,
  onUseInitials,
  onBack,
}: {
  onOpenSettings: () => void;
  onUseInitials: () => void;
  onBack: () => void;
}) {
  const c = useProfileCopy();
  const common = useCommonCopy();
  return (
    <ProfileOverlay onScrimClick={onBack}>
      <p className="text-[18px] font-semibold text-ink">{c.photoAccessOff}</p>
      <p className="mt-[8px] text-[13px] text-ink-muted">{c.photoAccessBody}</p>
      <div className="mt-[20px] flex flex-col gap-[10px]">
        <button
          type="button"
          onClick={onOpenSettings}
          className="flex h-[48px] w-full items-center justify-center rounded-[14px] bg-brand text-[14px] font-semibold text-white hover:bg-brand-deep"
        >
          {c.openSettings}
        </button>
        <button
          type="button"
          onClick={onUseInitials}
          className="flex h-[48px] w-full items-center justify-center rounded-[14px] border border-line bg-white text-[14px] font-semibold text-brand-deep hover:bg-brand-soft"
        >
          {c.useInitialsInstead}
        </button>
        <button
          type="button"
          onClick={onBack}
          className="flex h-[48px] w-full items-center justify-center rounded-[14px] border border-line bg-white text-[14px] font-semibold text-brand-deep hover:bg-brand-soft"
        >
          {common.action.back}
        </button>
      </div>
    </ProfileOverlay>
  );
}

/** WD-19F / W-19F — "Updating profile photo" progress overlay.
 *  When the upload was started by the worker (`onDone` supplied) the mock
 *  upload settles on its own and hands over to WD-19G; seeded straight from
 *  ?state=photo-updating it stays put so the state keeps a stable URL. */
export function PhotoUpdatingOverlay({ onDone }: { onDone?: () => void }) {
  const c = useProfileCopy();
  const doneRef = useRef(onDone);
  const running = Boolean(onDone);

  useEffect(() => {
    doneRef.current = onDone;
  });

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => doneRef.current?.(), 1400);
    return () => window.clearTimeout(timer);
  }, [running]);

  return (
    <ProfileOverlay background="#f9fbf8">
      <p className="text-[20px] font-semibold text-[#17231f]">
        {c.updatingPhotoTitle}
      </p>
      <p className="mt-[10px] text-[13px] text-[#65746d]">
        {c.updatingPhotoBody}
      </p>
      <div className="mt-[24px] h-[8px] w-full rounded-[4px] bg-[#dce9e3]">
        <div className="h-[8px] w-[45%] rounded-[4px] bg-[#0c664b]" />
      </div>
      <button
        type="button"
        disabled
        className="mt-[24px] flex h-[48px] w-full cursor-not-allowed items-center justify-center rounded-[14px] bg-[#0c664b] text-[13px] font-semibold text-white"
      >
        {c.updatingLabel}
      </button>
    </ProfileOverlay>
  );
}

/** WD-19G / W-19G — "Couldn’t update profile photo" failure overlay. */
export function PhotoUpdateFailedOverlay({
  onTryAgain,
  onUseInitials,
  onBack,
}: {
  onTryAgain: () => void;
  onUseInitials: () => void;
  onBack: () => void;
}) {
  const c = useProfileCopy();
  const common = useCommonCopy();
  return (
    <ProfileOverlay background="#f9fbf8" onScrimClick={onBack}>
      <p className="text-[20px] font-semibold text-[#17231f]">
        {c.photoFailedTitle}
      </p>
      <p className="mt-[10px] text-[13px] text-[#65746d]">{c.photoFailedBody}</p>
      <div className="mt-[20px] flex flex-col gap-[10px]">
        <button
          type="button"
          onClick={onTryAgain}
          className="flex h-[48px] w-full items-center justify-center rounded-[14px] bg-[#0c664b] text-[14px] font-semibold text-white hover:bg-brand-deep"
        >
          {c.tryAgain}
        </button>
        <button
          type="button"
          onClick={onUseInitials}
          className="flex h-[48px] w-full items-center justify-center rounded-[14px] border border-[#d1ddd7] bg-white text-[14px] font-semibold text-[#0b5842] hover:bg-brand-soft"
        >
          {c.useInitialsInstead}
        </button>
        <button
          type="button"
          onClick={onBack}
          className="flex h-[36px] w-full items-center justify-center rounded-[14px] border border-[#d1ddd7] bg-white text-[14px] font-semibold text-[#0b5842] hover:bg-brand-soft"
        >
          {common.action.back}
        </button>
      </div>
    </ProfileOverlay>
  );
}
