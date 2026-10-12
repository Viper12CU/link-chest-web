import type { Metadata } from "next";
import { LandingPage } from "@/components/pages/LandingPage";

export const metadata: Metadata = {
  title: "Link Chest — Todo lo que guardas, en un solo lugar",
  description:
    "Guarda, organiza y recupera tus enlaces desde cualquier dispositivo. Crea tu cofre gratis.",
};

export default function Page() {
  return <LandingPage />;
}
