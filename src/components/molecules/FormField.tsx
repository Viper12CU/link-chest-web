export function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-[7px] text-[13px] font-bold text-text">
      {label}
      {children}
    </label>
  );
}
