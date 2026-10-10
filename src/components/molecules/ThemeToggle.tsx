"use client";

import { Icon } from "@/components/atoms/Icon";
import { IconButton } from "@/components/atoms/IconButton";

type ThemeToggleProps = {
  dark: boolean;
  onToggle: () => void;
};

export function ThemeToggle({ dark, onToggle }: ThemeToggleProps) {
  return (
    <IconButton
      type="button"
      title="Cambiar tema"
      aria-label="Cambiar tema"
      onClick={onToggle}
    >
      <Icon name={dark ? "moon" : "sun"} />
    </IconButton>
  );
}
