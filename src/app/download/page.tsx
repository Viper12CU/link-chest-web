import type { Metadata } from "next";
import { DownloadPage } from "@/components/pages/DownloadPage";

export const metadata: Metadata = {
  title: "Descargar app — Link Chest",
  description:
    "Descarga la última versión de Link Chest para Android y consulta el historial de releases.",
};

export default function Page() {
  return <DownloadPage />;
}
