import { LoginBrandMark } from "@/components/atoms/LoginBrandMark";

// Logo exclusivo del login: textos fijos en claro.
export function LoginBrandLogo({ large = false }: { large?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2.5 font-display text-[21px] font-bold tracking-[-.04em] text-[#182019] ${
        large ? "mb-[42px]" : ""
      }`}
    >
      <LoginBrandMark />
      <span className="text-[#182019]">
        link<span className="font-medium text-[#8e9890]">chest</span>
      </span>
    </div>
  );
}
