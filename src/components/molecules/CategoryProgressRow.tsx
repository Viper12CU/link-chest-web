export function CategoryProgressRow({
  icon,
  name,
  percent,
}: {
  icon: string;
  name: string;
  percent: number;
}) {
  return (
    <div className="mb-4">
      <div className="mb-[6px] flex justify-between text-[11px] text-text">
        <span>
          {icon} {name}
        </span>
        <strong>{percent}%</strong>
      </div>
      <div className="h-[7px] overflow-hidden rounded-full bg-[#edf1eb] dark:bg-[#252f27]">
        <i className="block h-full rounded-full bg-accent-strong" style={{ width: `${Math.max(percent, 3)}%` }} />
      </div>
    </div>
  );
}
