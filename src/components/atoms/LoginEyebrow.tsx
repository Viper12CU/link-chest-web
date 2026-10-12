// Eyebrow exclusivo del login: color fijo, sin variante `dark:`.
export function LoginEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-[7px] text-[10px] font-bold tracking-[.16em] text-[#889288]">
      {children}
    </p>
  );
}
