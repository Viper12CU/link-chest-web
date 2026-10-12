export function CategoryProgressRow({
  icon,
  name,
  percent,
  color,
}: {
  icon: string;
  name: string;
  percent: number;
  color: string;
}) {
  return (
    <div className="mb-4">
      <div className="mb-[6px] flex justify-between text-[11px] text-text">
        <span>
          {icon} {name}
        </span>
        <strong>{percent}%</strong>
      </div>
      <div className="h-[7px] overflow-hidden rounded-full bg-[#edf1eb]">
        <i className="block h-full rounded-full" style={{ width: `${Math.max(percent, 3)}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}
