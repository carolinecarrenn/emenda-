/* EM-R2-xx page head: 18px bold #083d2d title over a 10px #65746d subtitle
   (nodes 761:2432/2433, 761:2473/2474, 761:2515/2516, 761:2383/2384). The
   desktop pair follows the manager-desktop rhythm of MD-09/MD-12 (30px title
   with the subtitle riding 9px under its baseline). */
export function RecordsScreenHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h1 className="text-[18px] font-bold text-brand-deep lg:mt-[8px] lg:text-[30px]">
        {title}
      </h1>
      <p className="mt-[16px] text-[10px] text-[#65746d] lg:mt-[-2px] lg:text-[13px]">
        {subtitle}
      </p>
    </div>
  );
}
