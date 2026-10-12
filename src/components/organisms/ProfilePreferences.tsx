"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Icon } from "@/components/atoms/Icon";
import { SettingToggle } from "@/components/molecules/SettingToggle";
import { notifySuccess } from "@/lib/toasts";
import { useDensity, useViewMode } from "@/lib/view-prefs";

const THEME_KEY = "link-chest:theme";

function readStorage(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Sin almacenamiento: la preferencia solo vive en memoria.
  }
}

export function ProfilePreferences() {
  // Estado inicial SSR-seguro (idéntico en servidor y cliente).
  // Los valores persistidos se restauran tras el montaje para no romper la hidratación.
  const [dark, setDark] = useState(false);
  // Vista y densidad: store externo (localStorage). Sin estado duplicado:
  // perfil y dashboard siempre ven lo mismo.
  const { viewMode: defaultView, setViewMode } = useViewMode();
  const { density, setDensity } = useDensity();
  const compact = density === "compact";

  // Sincroniza con localStorage tras la hidratación (render inicial SSR-seguro).
  /* eslint-disable react-hooks/set-state-in-effect -- hidratación SSR-segura, una sola vez */
  useEffect(() => {
    setDark(
      document.documentElement.classList.contains("dark") || readStorage(THEME_KEY) === "dark"
    );
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  function toggleTheme(next: boolean) {
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    writeStorage(THEME_KEY, next ? "dark" : "light");
    notifySuccess(next ? "Tema oscuro activado" : "Tema claro activado", undefined, 2500);
  }

  function toggleCompact(next: boolean) {
    setDensity(next ? "compact" : "comfortable");
    notifySuccess(next ? "Vista compacta activada" : "Vista compacta desactivada", undefined, 2500);
  }

  function changeDefaultView(view: "grid" | "list") {
    setViewMode(view);
    notifySuccess(
      view === "grid" ? "Vista cuadrícula activada" : "Vista lista activada",
      undefined,
      2500
    );
  }

  return (
    <section
      aria-labelledby="prefs-title"
      className="rounded-[18px] border border-line bg-surface p-[26px] shadow-[var(--shadow)] max-[620px]:p-[20px]"
    >
      <Eyebrow>Preferencias</Eyebrow>
      <h2 id="prefs-title" className="font-display text-[21px] font-bold tracking-[-.03em] text-text">
        Cómo se ve tu Chest
      </h2>
      <p className="mb-[20px] mt-[6px] text-[13px] leading-[1.55] text-muted">
        Estos ajustes se guardan en este dispositivo.
      </p>
      <div className="grid gap-3">
        <SettingToggle
          label={dark ? "Tema oscuro" : "Tema claro"}
          description="Igual que el interruptor del dashboard"
          checked={dark}
          onChange={toggleTheme}
        />
        <SettingToggle
          label="Vista compacta"
          description="Más enlaces por pantalla en Mis enlaces"
          checked={compact}
          onChange={toggleCompact}
        />
        <div
          role="group"
          aria-label="Vista por defecto"
          className="grid grid-cols-2 gap-2 rounded-[13px] border border-line bg-[#fbfcfa] p-[6px] dark:bg-[#1b231d]"
        >
          {(["grid", "list"] as const).map((view) => (
            <button
              key={view}
              type="button"
              aria-pressed={defaultView === view}
              onClick={() => changeDefaultView(view)}
              className={`inline-flex cursor-pointer items-center justify-center gap-2 rounded-[9px] px-3 py-[10px] text-[13px] font-bold transition-all duration-200 ${
                defaultView === view ? "bg-dark text-white dark:bg-accent dark:text-dark" : "text-muted hover:text-text"
              }`}
            >
              <Icon name={view === "grid" ? "grid" : "list"} className="text-[15px]" />
              {view === "grid" ? "Cuadrícula" : "Lista"}
            </button>
          ))}
        </div>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center gap-2 rounded-[9px] px-3 py-[10px] text-[13px] font-bold text-muted transition-all duration-200 hover:text-text"
        >
          Ver en Mis enlaces
          <Icon name="arrow-right" className="text-[15px]" />
        </Link>
      </div>
    </section>
  );
}
