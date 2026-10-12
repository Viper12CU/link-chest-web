import type { ButtonHTMLAttributes } from "react";

type CategoryListItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: string;
  name: string;
  count: number;
};

export function CategoryListItem({
  icon,
  name,
  count,
  className = "",
  ...props
}: CategoryListItemProps) {
  return (
    <button
      {...props}
      className={`flex w-full items-center gap-[9px] rounded-[9px] bg-transparent px-[10px] py-2 text-left text-[13px] text-[#697269] transition-colors duration-200 hover:bg-surface-2 hover:text-text ${className}`}
    >
      <span>{icon}</span>
      {name}
      <span className="ml-auto text-[11px] text-[#a2aaa2]">{count}</span>
    </button>
  );
}
