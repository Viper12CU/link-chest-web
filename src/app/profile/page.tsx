import type { Metadata } from "next";
import { ProfilePage } from "@/components/pages/ProfilePage";

export const metadata: Metadata = {
  title: "Perfil — Link Chest",
  description: "Edita tu perfil, actualiza tu contraseña e instala la app de Link Chest.",
};

export default function Page() {
  return <ProfilePage />;
}
