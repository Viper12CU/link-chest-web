export function LoginTemplate({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden bg-[#eaf0e7] p-[30px]">
      <div
        aria-hidden="true"
        className="absolute -left-[120px] -top-[100px] h-[380px] w-[380px] rounded-full bg-[#c9f58e] opacity-75 blur-[2px]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-[220px] -right-[200px] h-[500px] w-[500px] rounded-full bg-[#dce8d6] opacity-75 blur-[2px]"
      />
      {children}
    </section>
  );
}
