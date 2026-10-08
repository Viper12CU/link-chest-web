"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "@/components/organisms/Sidebar";
import { Topbar } from "@/components/organisms/Topbar";
import { LinkModal } from "@/components/organisms/LinkModal";
import { CategoryModal } from "@/components/organisms/CategoryModal";
import { Toast } from "@/components/molecules/Toast";
import { DashboardProvider, useDashboard } from "@/components/templates/DashboardProvider";

function DashboardShell({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { closeAllOverlays, focusSearch, setOpenMenuId } = useDashboard();

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        focusSearch();
      }
      if (e.key === "Escape") closeAllOverlays();
    };
    const onClick = () => setOpenMenuId(null);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
    };
  }, [closeAllOverlays, focusSearch, setOpenMenuId]);

  return (
    <div className="flex min-h-screen bg-[#f5f7f2] text-text dark:bg-[#121813]">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="min-w-0 flex-1">
        <Topbar onOpenSidebar={() => setSidebarOpen(true)} />
        {children}
      </div>
      <LinkModal />
      <CategoryModal />
      <Toast />
    </div>
  );
}

export function DashboardTemplate({ children }: { children: React.ReactNode }) {
  return (
    <DashboardProvider>
      <DashboardShell>{children}</DashboardShell>
    </DashboardProvider>
  );
}
