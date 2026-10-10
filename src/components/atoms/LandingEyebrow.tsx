// Eyebrow exclusivo de la landing: paleta fija en claro (misma que /login),
// sin tokens temáticos ni variante `dark:`.
export function LandingEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-[14px] inline-flex items-center gap-2 rounded-full border border-[#e3e8e1] bg-[rgba(255,255,255,.85)] px-3 py-1.5 text-[10px] font-bold tracking-[.16em] text-[#889288]">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-[#8ddc38]"
      />
      {children}
    </p>
  );
}
