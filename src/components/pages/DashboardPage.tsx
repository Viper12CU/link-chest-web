"use client";

import { LinksView } from "@/components/organisms/LinksView";
import { StatsView } from "@/components/organisms/StatsView";
import { CategoriesView } from "@/components/organisms/CategoriesView";
import { useDashboard } from "@/components/templates/DashboardProvider";

export function DashboardPage() {
  const { currentView } = useDashboard();

  if (currentView === "stats") return <StatsView />;
  if (currentView === "categories") return <CategoriesView />;
  return <LinksView />;
}
