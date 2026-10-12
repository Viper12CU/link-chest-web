export function NavLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-2.5 mb-2 text-[10px] font-bold uppercase tracking-[.13em] text-[#a0a8a0]">
      {children}
    </p>
  );
}
