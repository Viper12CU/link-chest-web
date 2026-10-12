"use client";

import { Icon } from "@/components/atoms/Icon";
import { IconButton } from "@/components/atoms/IconButton";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";
import { TopbarSearch } from "@/components/molecules/TopbarSearch";
import { useDashboard } from "@/components/templates/DashboardProvider";

type TopbarProps = {
  onOpenSidebar: () => void;
};

export function Topbar({ onOpenSidebar }: TopbarProps) {
  const { dark, toggleTheme, openNewLink } = useDashboard();

  return (
    <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between gap-5 border-b border-line bg-[rgba(245,247,242,.85)] px-[34px] backdrop-blur-[10px] transition-colors duration-200 dark:bg-[#161d17] max-[820px]:px-[18px]">
      <IconButton
        type="button"
        aria-label="Abrir menú"
        onClick={onOpenSidebar}
        className="hidden max-[820px]:inline-grid max-[820px]:place-items-center"
      >
        <Icon name="menu" />
      </IconButton>
      <TopbarSearch />
      <div className="flex items-center gap-[9px] max-[620px]:gap-[3px]">
        <IconButton type="button" title="Cambiar tema" onClick={toggleTheme}>
          <Icon name={dark ? "moon" : "sun"} />
        </IconButton>
        <PrimaryButton type="button" onClick={openNewLink} className="add-link-top">
          <Icon name="plus" className="min-[620px]:mr-3 inline-block align-[-2px] text-[14px]" />
          <span className="max-[620px]:hidden">Nuevo enlace</span>
        </PrimaryButton>
      </div>
    </header>
  );
}
