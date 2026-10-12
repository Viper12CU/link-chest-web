import Link from "next/link";
import { BrandLogo } from "@/components/molecules/BrandLogo";
import { Icon } from "@/components/atoms/Icon";

export function ProfileTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface-2 text-text transition-colors duration-200 dark:bg-[#121813]">
      <header className="sticky top-0 z-[50] border-b border-line bg-surface/85 backdrop-blur-[10px]">
        <div className="mx-auto flex h-[64px] w-full max-w-[1080px] items-center justify-between gap-4 px-5">
          <BrandLogo />
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-[10px] border border-line bg-surface px-3 py-[9px] text-[13px] font-bold text-text transition-all duration-200 hover:-translate-y-px hover:border-[#c9d4c7]"
          >
            <Icon name="arrow-right" className="rotate-180 text-[15px]" />
            Volver al panel
          </Link>
        </div>
      </header>
      <main className="mx-auto w-full max-w-[1080px] px-5 pb-[56px] pt-[28px] max-[620px]:px-4 max-[620px]:pt-[20px]">
        {children}
      </main>
    </div>
  );
}
