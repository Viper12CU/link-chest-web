export function AuthDivider({ label = "o continúa con" }: { label?: string }) {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1 bg-line" />
      <span className="text-[12px] font-bold text-muted">{label}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
