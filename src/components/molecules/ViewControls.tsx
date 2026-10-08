"use client";

import { FilterButton } from "@/components/atoms/FilterButton";
import { useDashboard } from "@/components/templates/DashboardProvider";
import type { LinkFilter } from "@/data/dashboard";

const OPTIONS: { value: LinkFilter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "recent", label: "Recientes" },
  { value: "favorites", label: "Favoritos" },
];

export function ViewControls() {
  const { activeFilter, setActiveFilter } = useDashboard();

  return (
    <div className="flex gap-[5px] rounded-[10px] bg-[#e9eee7] p-1 dark:bg-[#252f27] max-[620px]:w-full">
      {OPTIONS.map((o) => (
        <FilterButton
          key={o.value}
          active={activeFilter === o.value}
          onClick={() => setActiveFilter(o.value)}
          className="max-[620px]:flex-1"
        >
          {o.label}
        </FilterButton>
      ))}
    </div>
  );
}
