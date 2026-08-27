/** Mint icon container used across LP-02/03/04 (e.g. Figma 1147:53, 1147:158). */
export function PublicIconTile({
  src,
  size = 48,
  iconSize = 22,
  radius = 13,
}: {
  src: string;
  size?: number;
  iconSize?: number;
  radius?: number;
}) {
  return (
    <div
      className="flex shrink-0 items-center justify-center bg-[#e8f6f0]"
      style={{ width: size, height: size, borderRadius: radius }}
    >
      <img src={src} alt="" style={{ width: iconSize, height: iconSize }} />
    </div>
  );
}
