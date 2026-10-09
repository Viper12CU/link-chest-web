// Label exclusivo del login: texto fijo en claro, sin token `text-text`.
export function LoginField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-[7px] text-[13px] font-bold text-[#182019]">
      {label}
      {children}
    </label>
  );
}
