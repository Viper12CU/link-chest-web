"use client";

import { NavLabel } from "@/components/atoms/NavLabel";
import { IconButton } from "@/components/atoms/IconButton";
import { BrandLogo } from "@/components/molecules/BrandLogo";
import { NavItem } from "@/components/molecules/NavItem";
import { CategoryListItem } from "@/components/molecules/CategoryListItem";
import { DownloadPromo } from "@/components/molecules/DownloadPromo";
import { SidebarUser } from "@/components/molecules/SidebarUser";
import { useDashboard } from "@/components/templates/DashboardProvider";
import type { DashboardView } from "@/data/dashboard";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const NAV: { view: DashboardView; icon: string; label: string }[] = [
  { view: "links", icon: "▦", label: "Mis enlaces" },
  { view: "stats", icon: "◔", label: "Estadísticas" },
  { view: "categories", icon: "◈", label: "Categorías" },
];

export function Sidebar({ open, onClose }: SidebarProps) {
  const { categories, currentView, setCurrentView, openCategoryLinks, openNewCategory, countByCategory } =
    useDashboard();

  return (
    <aside
      className={`sticky top-0 z-[80] flex h-screen w-[255px] flex-[0_0_255px] flex-col border-r border-line bg-[#fbfcfa] px-4 pb-[17px] pt-6 dark:bg-[#161d17] max-[1100px]:w-[225px] max-[1100px]:flex-[0_0_225px] max-[820px]:fixed max-[820px]:inset-y-0 max-[820px]:left-0 max-[820px]:h-auto max-[820px]:w-[270px] max-[820px]:shadow-[20px_0_50px_rgba(0,0,0,.12)] max-[820px]:transition-transform max-[820px]:duration-[250ms] ${
        open ? "max-[820px]:translate-x-0" : "max-[820px]:translate-x-[-105%]"
      }`}
    >
      <div className="px-[9px] pb-7 max-[820px]:flex max-[820px]:items-center max-[820px]:justify-between">
        <BrandLogo />
        <IconButton
          type="button"
          aria-label="Cerrar menú"
          onClick={onClose}
          className="hidden max-[820px]:inline-grid max-[820px]:place-items-center"
        >
          ×
        </IconButton>
      </div>

      <nav className="grid gap-1">
        <NavLabel>Workspace</NavLabel>
        {NAV.map((item) => (
          <NavItem
            key={item.view}
            icon={item.icon}
            label={item.label}
            active={currentView === item.view}
            onClick={() => {
              setCurrentView(item.view);
              onClose();
            }}
          />
        ))}
      </nav>

      <div className="mt-7">
        <div className="flex items-center justify-between">
          <NavLabel>Categorías</NavLabel>
          <IconButton type="button" aria-label="Añadir categoría" onClick={openNewCategory} className="text-[#8a948a]">
            +
          </IconButton>
        </div>
        <div>
          {categories.map((category) => (
            <CategoryListItem
              key={category.id}
              icon={category.emoji}
              name={category.name}
              count={countByCategory(category.name)}
              onClick={() => {
                openCategoryLinks(category.name);
                onClose();
              }}
            />
          ))}
        </div>
      </div>

      <DownloadPromo />
      <SidebarUser />
    </aside>
  );
}
