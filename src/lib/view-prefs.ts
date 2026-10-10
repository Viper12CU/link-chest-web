import { useSyncExternalStore } from "react";
import type { LinkDensity, LinkViewMode } from "@/data/dashboard";

// Claves compartidas con /profile. Fuente única de verdad: localStorage.
// El store se lee en cada render -> imposible estado viejo (nav cliente,
// bfcache, multi-pestaña). Solo los setters escriben: sin write-back,
// sin clobber.
export const VIEW_MODE_STORAGE_KEY = "link-chest:default-view";
export const DENSITY_STORAGE_KEY = "link-chest:density";

export function readStoredViewMode(): LinkViewMode {
  if (typeof window === "undefined") return "grid";
  try {
    return window.localStorage.getItem(VIEW_MODE_STORAGE_KEY) === "list" ? "list" : "grid";
  } catch {
    return "grid";
  }
}

export function readStoredDensity(): LinkDensity {
  if (typeof window === "undefined") return "comfortable";
  try {
    return window.localStorage.getItem(DENSITY_STORAGE_KEY) === "compact"
      ? "compact"
      : "comfortable";
  } catch {
    return "comfortable";
  }
}

function writeStored(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Sin almacenamiento: la preferencia solo vive en memoria.
  }
}

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  const onVisibility = () => {
    if (document.visibilityState === "visible") callback();
  };
  // storage nativo = multi-pestaña. pageshow = bfcache + carga.
  // visibilitychange (visible) = vuelta a la pestaña.
  window.addEventListener("storage", notify);
  window.addEventListener("pageshow", notify);
  document.addEventListener("visibilitychange", onVisibility);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", notify);
    window.removeEventListener("pageshow", notify);
    document.removeEventListener("visibilitychange", onVisibility);
  };
}

export function useViewMode(): {
  viewMode: LinkViewMode;
  setViewMode: (mode: LinkViewMode) => void;
} {
  const viewMode = useSyncExternalStore(subscribe, readStoredViewMode, (): LinkViewMode => "grid");
  return {
    viewMode,
    setViewMode: (mode) => {
      writeStored(VIEW_MODE_STORAGE_KEY, mode);
      notify();
    },
  };
}

export function useDensity(): {
  density: LinkDensity;
  setDensity: (density: LinkDensity) => void;
} {
  const density = useSyncExternalStore(subscribe, readStoredDensity, (): LinkDensity => "comfortable");
  return {
    density,
    setDensity: (next) => {
      writeStored(DENSITY_STORAGE_KEY, next === "compact" ? "compact" : "comfortable");
      notify();
    },
  };
}
