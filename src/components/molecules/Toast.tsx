"use client";

import { useDashboard } from "@/components/templates/DashboardProvider";

export function Toast() {
  const { toast } = useDashboard();

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed bottom-6 right-6 z-[200] rounded-[10px] bg-dark px-[15px] py-3 text-[12px] font-semibold text-white shadow-[0_18px_50px_rgba(25,35,27,.08)] transition-all duration-200 ${
        toast ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      {toast ?? ""}
    </div>
  );
}
