// Paso numerado de "Cómo funciona": número en accent lima, texto fijo en claro.
export function LandingStepItem({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex gap-4">
      <span
        aria-hidden="true"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#172019] font-display text-[15px] font-bold text-[#b9ef72]"
      >
        {step}
      </span>
      <div>
        <h3 className="mb-1 font-display text-[17px] font-bold tracking-[-.02em] text-[#182019]">
          {title}
        </h3>
        <p className="text-[14px] leading-[1.6] text-[#7b847d]">{desc}</p>
      </div>
    </li>
  );
}
