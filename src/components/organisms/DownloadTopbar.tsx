import Link from "next/link";
import { BrandLogo } from "@/components/molecules/BrandLogo";
import { ThemeToggle } from "@/components/molecules/ThemeToggle";
import { Icon } from "@/components/atoms/Icon";

type DownloadTopbarProps = {
  dark: boolean;
  onToggleTheme: () => void;
};

export function DownloadTopbar({ dark, onToggleTheme }: DownloadTopbarProps) {
  return (
    <header className="sticky top-0 z-[50] border-b border-line bg-surface/85 backdrop-blur-[10px]">
      <div className="mx-auto flex h-[64px] w-full max-w-[1280px] items-center justify-between gap-4 px-6 max-[620px]:px-4">
        <BrandLogo />
        <div className="flex items-center gap-2">
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-[10px] border border-line bg-surface px-3 py-[9px] text-[13px] font-bold text-text transition-all duration-200 hover:-translate-y-px hover:border-[#c9d4c7]"
          >
            <Icon name="grid" className="text-[15px]" />
            <span className="max-[620px]:hidden">Ir al dashboard</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
