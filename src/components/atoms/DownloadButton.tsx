import type { AnchorHTMLAttributes } from "react";
import { Icon } from "@/components/atoms/Icon";

type DownloadButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  full?: boolean;
};

export function DownloadButton({ full = false, className = "", children, ...props }: DownloadButtonProps) {
  return (
    <a
      {...props}
      className={`group inline-flex cursor-pointer items-center justify-center gap-3 rounded-xl bg-dark px-8 py-4 font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(141,220,56,.35)] dark:bg-accent dark:text-dark dark:hover:bg-accent-strong ${
        full ? "w-full px-6 py-3 text-[13px]" : ""
      } ${className}`}
    >
      <Icon name="download" className="text-[18px]" />
      {children ?? (
        <span className="text-[13px] font-medium uppercase tracking-[0.05em]">
          Descargar APK
        </span>
      )}
    </a>
  );
}
