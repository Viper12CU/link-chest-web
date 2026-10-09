import type { Metadata } from "next";
import { DashboardTemplate } from "@/components/templates/DashboardTemplate";

export const metadata: Metadata = {
  title: "Dashboard — Link Chest",
  description: "Gestiona tu colección de enlaces desde tu panel de control.",
};

const THEME_STORAGE_KEY = "link-chest:theme";

// Aplica el tema guardado antes de la hidratación para evitar parpadeo.
const themeScript = `(function(){try{if(localStorage.getItem("${THEME_STORAGE_KEY}")==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})();`;

export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      <DashboardTemplate>{children}</DashboardTemplate>
    </>
  );
}
