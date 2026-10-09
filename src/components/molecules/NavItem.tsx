import type { ButtonHTMLAttributes } from "react";
import { Icon, type IconName } from "@/components/atoms/Icon";

type NavItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: IconName;
  label: string;
  active?: boolean;
};

export function NavItem({ icon, label, active = false, className = "", ...props }: NavItemProps) {
  return (
    <button
      {...props}
      className={`flex w-full items-center gap-3 rounded-[10px] bg-transparent px-[11px] py-[10px] text-left font-display font-semibold transition-colors duration-200 ${
        active
          ? "bg-surface-2 text-text"
          : "text-[#697269] hover:bg-surface-2 hover:text-text"
      } ${className}`}
    >
      <span className="grid w-5 place-items-center text-[17px]">
        <Icon name={icon} />
      </span>
      {label}
    </button>
  );
}
