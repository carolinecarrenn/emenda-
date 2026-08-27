import { useState } from "react";
import { useScreenState } from "@/hooks/useScreenState";
import { useProfileCopy } from "./profile.copy";
import { ProfileSummaryCard } from "./sections/ProfileSummaryCard";
import { PersonalInfoCard } from "./sections/PersonalInfoCard";
import {
  CompleteProfileCard,
  EmendaCoinStrip,
  IdentityDocumentsCard,
  LegalIdentityCard,
  PrivacyCard,
} from "./sections/ProfileRailCards";
import {
  ProfileSkeleton,
  ProfileUpdatedToast,
} from "./sections/ProfileStateBits";
import {
  AvatarOptionsOverlay,
  PhotoPermissionOverlay,
  PhotoUpdateFailedOverlay,
  PhotoUpdatingOverlay,
} from "./sections/AvatarOverlays";

type PhotoOverlay =
  | "avatar-options"
  | "photo-permission"
  | "photo-updating"
  | "photo-update-failed";

/** Personal Profile view — Figma WD-19 (desktop, node 966:2) / W-19 (mobile,
 *  node 544:3). States via ?state=: loading (WD-19A), incomplete (WD-19B),
 *  updated (WD-19C), offline (W-19H), photo-updating (WD-19F),
 *  photo-update-failed (WD-19G).
 *  The whole photo journey is clickable on both viewports — Change photo →
 *  avatar options (WD-19D) → Open photo settings (WD-19E) → updating
 *  (WD-19F) → update failed (WD-19G) → Try again — as desktop centered
 *  modals and mobile bottom sheets. */
export function PersonalProfilePage() {
  const screenState = useScreenState();
  const c = useProfileCopy();
  // null = follow ?state seed; "closed" = user dismissed the seeded overlay.
  const [overlayOverride, setOverlayOverride] = useState<
    PhotoOverlay | "closed" | null
  >(null);
  // Set once the avatar change lands (initials fallback or a retried upload)
  // — confirmed with the WD-19C "Profile updated" toast.
  const [avatarUpdated, setAvatarUpdated] = useState(false);
  // The mocked upload fails the first time (WD-19G) and lands on retry.
  const [photoRetried, setPhotoRetried] = useState(false);

  const loading = screenState === "loading";
  const incomplete = screenState === "incomplete";
  const offline = screenState === "offline";
  const updated = screenState === "updated" || avatarUpdated;

  const seededOverlay: PhotoOverlay | null =
    screenState === "photo-updating"
      ? "photo-updating"
      : screenState === "photo-update-failed"
        ? "photo-update-failed"
        : null;
  const overlay: PhotoOverlay | null =
    overlayOverride === "closed"
      ? null
      : (overlayOverride ?? seededOverlay);
  const close = () => setOverlayOverride("closed");
  const confirmAvatar = () => {
    setOverlayOverride("closed");
    setAvatarUpdated(true);
  };
  const finishUpload = () => {
    if (photoRetried) {
      confirmAvatar();
      return;
    }
    setPhotoRetried(true);
    setOverlayOverride("photo-update-failed");
  };

  return (
    <div className="relative max-w-[1112px] lg:pt-3">
      {updated && <ProfileUpdatedToast />}

      <h1 className="text-[30px] leading-[1.2] font-bold text-ink lg:text-[32px] lg:leading-[42px]">
        {c.pageTitle}
      </h1>
      {/* W-19A drops the subtitle 14px below the H1; the loaded frames
          (W-19 / W-19B / W-19H) use 10px. */}
      <p
        className={`${loading ? "mt-[14px]" : "mt-[10px]"} text-[13px] leading-[18px] text-ink-muted lg:mt-1 lg:text-[16px] lg:leading-[28px]`}
      >
        {loading
          ? c.subtitleLoading
          : offline
            ? c.subtitleOffline
            : incomplete
              ? c.subtitleIncomplete
              : c.subtitle}
      </p>

      {loading ? (
        <ProfileSkeleton />
      ) : (
        <div className="mt-[10px] flex flex-col gap-[10px] lg:mt-[28px] lg:flex-row lg:gap-8">
          <div className="flex w-full flex-col gap-[10px] lg:w-[620px] lg:gap-5">
            <ProfileSummaryCard
              incomplete={incomplete}
              photoDisabled={offline}
              onChangePhoto={() => setOverlayOverride("avatar-options")}
            />
            {incomplete && (
              <div className="lg:hidden">
                <CompleteProfileCard />
              </div>
            )}
            <PersonalInfoCard incomplete={incomplete} editDisabled={offline} />
            {/* Mobile W-19 stacks the rail cards under the main column. */}
            <div className="flex flex-col gap-[10px] lg:hidden">
              {incomplete ? (
                <LegalIdentityCard incomplete />
              ) : (
                <IdentityDocumentsCard />
              )}
              <PrivacyCard />
              {!incomplete && <EmendaCoinStrip />}
            </div>
          </div>
          <div className="hidden w-[460px] shrink-0 flex-col gap-5 lg:flex">
            <LegalIdentityCard incomplete={incomplete} />
            <PrivacyCard />
            {incomplete && <CompleteProfileCard />}
          </div>
        </div>
      )}

      {overlay === "avatar-options" && (
        <AvatarOptionsOverlay
          onChooseFromPhotos={() => setOverlayOverride("photo-permission")}
          onUseInitials={confirmAvatar}
          onClose={close}
        />
      )}
      {overlay === "photo-permission" && (
        <PhotoPermissionOverlay
          // Granting photo access resumes the upload — WD-19E → WD-19F.
          onOpenSettings={() => setOverlayOverride("photo-updating")}
          onUseInitials={confirmAvatar}
          onBack={() => setOverlayOverride("avatar-options")}
        />
      )}
      {overlay === "photo-updating" && (
        <PhotoUpdatingOverlay
          onDone={
            overlayOverride === "photo-updating" ? finishUpload : undefined
          }
        />
      )}
      {overlay === "photo-update-failed" && (
        <PhotoUpdateFailedOverlay
          onTryAgain={() => setOverlayOverride("photo-updating")}
          onUseInitials={confirmAvatar}
          onBack={close}
        />
      )}
    </div>
  );
}
