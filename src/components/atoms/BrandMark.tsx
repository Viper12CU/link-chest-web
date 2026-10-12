export function BrandMark({ letter = "L" }: { letter?: string }) {
  return (
    <div className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-accent font-display font-bold text-dark shadow-[0_6px_15px_rgba(141,220,56,.25)]">
      {letter}
    </div>
  );
}
