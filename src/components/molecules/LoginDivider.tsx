// Divisor "o continúa con" exclusivo del login, colores fijos.
export function LoginDivider({
  label = "o continúa con",
}: {
  label?: string;
}) {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1 bg-[#e3e8e1]" />
      <span className="text-[12px] font-bold text-[#7b847d]">{label}</span>
      <span className="h-px flex-1 bg-[#e3e8e1]" />
    </div>
  );
}
