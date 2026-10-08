import type { ButtonHTMLAttributes } from "react";

export function IconButton({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded-lg bg-transparent p-[5px] text-[19px] leading-none text-muted transition-all duration-200 hover:bg-surface-2 hover:text-text ${className}`}
    />
  );
}
