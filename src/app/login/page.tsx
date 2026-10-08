import type { Metadata } from "next";
import { LoginPage } from "@/components/pages/LoginPage";

export const metadata: Metadata = {
  title: "Iniciar sesión — Link Chest",
  description: "Accede a tu colección de enlaces desde cualquier dispositivo.",
};

export default function Page() {
  return <LoginPage />;
}
