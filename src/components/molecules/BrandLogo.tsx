import { BrandMark } from "@/components/atoms/BrandMark";

export function BrandLogo({ large = false }: { large?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2.5 font-display text-[21px] font-bold tracking-[-.04em] text-text ${
        large ? "mb-[42px]" : ""
      }`}
    >
      <BrandMark />
      <span className="text-[#1a1a1a] dark:text-[#eef3ed]">
        link<span className="font-medium text-[#8e9890]">chest</span>
      </span>
    </div>
  );
}
