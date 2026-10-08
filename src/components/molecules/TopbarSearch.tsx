"use client";

import { useDashboard } from "@/components/templates/DashboardProvider";

export function TopbarSearch() {
  const { searchQuery, setSearchQuery } = useDashboard();

  return (
    <div className="flex w-[min(480px,55%)] items-center gap-2.5 text-[#9ba39b] max-[820px]:w-auto max-[820px]:flex-1">
      <span aria-hidden="true">⌕</span>
      <input
        id="searchInput"
        type="search"
        placeholder="Buscar enlaces..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="min-w-0 flex-1 border-0 bg-transparent p-2 text-text shadow-none outline-none placeholder:text-[#9ba39b] focus:shadow-none"
      />
      <kbd className="whitespace-nowrap rounded-[5px] border border-line px-1.5 py-1 text-[9px] text-[#a4aca4] max-[820px]:hidden">
        Ctrl K
      </kbd>
    </div>
  );
}
