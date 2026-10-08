import type { Metadata } from "next";
import { DashboardTemplate } from "@/components/templates/DashboardTemplate";

export const metadata: Metadata = {
  title: "Dashboard — Link Chest",
  description: "Gestiona tu colección de enlaces desde tu panel de control.",
};

export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  return <DashboardTemplate>{children}</DashboardTemplate>;
}
