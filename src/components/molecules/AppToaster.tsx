"use client";

import { Toaster } from "sileo";
import "sileo/styles.css";

// Viewport global de Sileo. Se monta una sola vez en el root layout:
// cubre login + dashboard y fija la posición bottom-right en toda la app.
// Fondo oscuro fijo (#172019 = token --dark) en ambos temas; la semántica
// (success/error/warning/info) vive en el badge de estado de Sileo.
export function AppToaster() {
  return (
    <Toaster
      position="bottom-right"
      offset={20}
      options={{
        fill: "#172019",
        roundness: 16,
        styles: {
          title: "text-white!",
          description: "text-white/75!",
          badge: "bg-white/10!",
          button: "bg-accent! text-dark! hover:bg-accent-strong!",
        },
      }}
    />
  );
}
