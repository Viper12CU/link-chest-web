"use client";

import { useCallback, useEffect, useState } from "react";
import { DownloadHero } from "@/components/organisms/DownloadHero";
import { DownloadTopbar } from "@/components/organisms/DownloadTopbar";
import { ReleaseHistory } from "@/components/organisms/ReleaseHistory";
import { TechSpecsCard } from "@/components/organisms/TechSpecsCard";
import type { GithubRelease } from "@/lib/releases";

const THEME_STORAGE_KEY = "link-chest:theme";

function readStoredTheme(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY) === "dark";
  } catch {
    return false;
  }
}

export function DownloadTemplate() {
  // Estado inicial SSR-seguro: idéntico en servidor y cliente.
  const [dark, setDark] = useState<boolean>(false);
  const [hydrated, setHydrated] = useState(false);
  const [releases, setReleases] = useState<GithubRelease[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- hidratación SSR-segura, una sola vez */
    setDark(readStoredTheme());
    setHydrated(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.classList.toggle("dark", dark);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
    } catch {
      // Almacenamiento no disponible: se mantiene el tema en memoria.
    }
  }, [dark, hydrated]);

  useEffect(() => {
    let cancelled = false;
    async function loadReleases() {
      try {
        const res = await fetch("/api/releases");
        if (!res.ok) throw new Error("No se pudieron obtener las versiones");
        const data: GithubRelease[] = await res.json();
        if (!cancelled) {
          setReleases(data);
          setError(null);
          setLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "No se pudieron obtener las versiones");
          setLoading(false);
        }
      }
    }
    loadReleases();
    return () => {
      cancelled = true;
    };
  }, []);

  const toggleTheme = useCallback(() => setDark((v) => !v), []);

  const latest = releases[0] ?? null;
  const history = releases.slice(1);
  const empty = !loading && !error && releases.length === 0;

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-background text-text transition-colors duration-200">
      {/* Atmósfera: glow lima + retícula de puntos */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-[42rem] max-w-none -translate-x-1/2 rounded-full bg-accent/15 blur-[130px] dark:bg-accent/10" />
        <div className="download-dotgrid absolute inset-0 opacity-60" />
      </div>

      {/* Cabecera estilo profile: marca + toggle de tema + acceso al dashboard */}
      <DownloadTopbar dark={dark} onToggleTheme={toggleTheme} />

      <main className="relative mx-auto w-full max-w-[1280px] flex-1 px-6 py-16 max-[620px]:py-10">
        <section className="relative mb-20 max-[620px]:mb-12" aria-labelledby="hero-title">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              {loading ? (
                <div className="space-y-6">
                  <div className="download-skeleton h-8 w-40 rounded-full" />
                  <div className="download-skeleton h-16 w-3/4 rounded-xl" />
                  <div className="download-skeleton h-20 w-full max-w-xl rounded-xl" />
                  <div className="download-skeleton h-14 w-56 rounded-xl" />
                </div>
              ) : error ? (
                <div className="animate-download-in space-y-6">
                  <h1 className="font-display text-[56px] font-bold leading-[1.02] tracking-[-0.03em] text-text max-[620px]:text-[38px]">
                    Link Chest <span className="text-danger">Error</span>
                  </h1>
                  <p className="max-w-xl text-muted">{error}</p>
                </div>
              ) : empty ? (
                <div className="animate-download-in space-y-6">
                  <h1 className="font-display text-[56px] font-bold leading-[1.02] tracking-[-0.03em] text-text max-[620px]:text-[38px]">
                    Link Chest <span>Sin versiones</span>
                  </h1>
                  <p className="max-w-xl text-muted">No hay versiones disponibles.</p>
                </div>
              ) : (
                <DownloadHero release={latest} />
              )}
            </div>
            <div className="lg:col-span-5">
              {loading || error || empty ? (
                <div aria-hidden="true" className="download-skeleton h-[430px] rounded-[18px]" />
              ) : (
                <TechSpecsCard release={latest} />
              )}
            </div>
          </div>
        </section>

        <ReleaseHistory releases={history} loading={loading} error={error} />
      </main>
    </div>
  );
}
