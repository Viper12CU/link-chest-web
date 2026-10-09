import { Icon, type IconName } from "@/components/atoms/Icon";

export function StatCard({
  icon,
  value,
  label,
  trend,
}: {
  icon: IconName;
  value: number | string;
  label: string;
  trend?: string;
}) {
  return (
    <div className="rounded-[18px] border border-line bg-surface p-5 max-[620px]:p-[15px]">
      <div className="mb-[18px] grid h-[35px] w-[35px] place-items-center rounded-[10px] bg-surface-2 text-[19px] text-text">
        <Icon name={icon} />
      </div>
      <strong className="block font-display text-[27px] font-bold text-text max-[620px]:text-[23px]">
        {value}
      </strong>
      <span className="text-[11px] text-muted">
        {label} {trend ? <b className="ml-[5px] font-bold text-[#6fa92e]">{trend}</b> : null}
      </span>
    </div>
  );
}
