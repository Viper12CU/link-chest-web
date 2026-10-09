"use client";

import { Chip } from "@/components/atoms/Chip";
import { useDashboard } from "@/components/templates/DashboardProvider";

export function CategoryChips() {
  const { categories, activeCategory, setActiveCategory, countByCategory } = useDashboard();

  return (
    <div className="flex gap-[7px] overflow-x-auto pb-5">
      {categories.map((c) => (
        <Chip
          key={c.id}
          active={activeCategory === c.name}
          onClick={() => setActiveCategory(c.name)}
          title={`${countByCategory(c.name)} enlaces`}
        >
          {c.emoji} {c.name}
        </Chip>
      ))}
    </div>
  );
}
