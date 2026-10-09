// Marca exclusiva del login: accent y texto fijos en claro.
export function LoginBrandMark({ letter = "L" }: { letter?: string }) {
  return (
    <div className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-[#b9ef72] font-display font-bold text-[#172019] shadow-[0_6px_15px_rgba(141,220,56,.25)]">
      {letter}
    </div>
  );
}
