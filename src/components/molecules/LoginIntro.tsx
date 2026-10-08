import { Eyebrow } from "@/components/atoms/Eyebrow";

export function LoginIntro() {
  return (
    <>
      <Eyebrow>YOUR LINKS. YOUR CHEST.</Eyebrow>
      <h1 className="mb-[14px] font-display text-[40px] font-bold leading-[1.03] tracking-[-.05em] text-text max-[620px]:text-[32px]">
        Todo lo que guardas,
        <br />
        <span className="text-[#758171]">en un solo lugar.</span>
      </h1>
      <p className="mt-4 mb-7 leading-[1.6] text-muted">
        Accede a tu colección de enlaces desde cualquier dispositivo.
      </p>
    </>
  );
}
