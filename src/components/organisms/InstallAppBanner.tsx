"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/atoms/Icon";
import { IconButton } from "@/components/atoms/IconButton";
import { AppQrCode, INSTALL_APP_URL } from "@/components/atoms/AppQrCode";
import { toastDemoDownload } from "@/lib/toasts";

const DISMISS_KEY = "link-chest:hide-install-banner";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export function InstallAppBanner() {
  // SSR-seguro: servidor y primer render del cliente coinciden (null).
  // El valor persistido se lee tras el montaje para no romper la hidratación.
  const [dismissed, setDismissed] = useState(true);
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);

  // Sincroniza con localStorage tras la hidratación (render inicial SSR-seguro).
  /* eslint-disable react-hooks/set-state-in-effect -- hidratación SSR-segura, una sola vez */
  useEffect(() => {
    try {
      setDismissed(localStorage.getItem(DISMISS_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    const onPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferred(e);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  if (dismissed) return null;

  async function onInstall() {
    if (deferred) {
      await deferred.prompt();
      const choice = await deferred.userChoice;
      if (choice.outcome === "accepted") {
        setDeferred(null);
        dismiss();
      }
      return;
    }
    toastDemoDownload();
  }

  function dismiss() {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // Sin almacenamiento: solo se oculta en memoria.
    }
    setDismissed(true);
  }

  return (
    <section
      aria-labelledby="install-title"
      className="relative overflow-hidden rounded-[18px] bg-dark p-[26px] text-white shadow-[var(--shadow)] after:pointer-events-none after:absolute after:-right-[45px] after:-top-[45px] after:h-[130px] after:w-[130px] after:rounded-full after:bg-[rgba(185,239,114,.16)] after:content-[''] max-[620px]:p-[20px]"
    >
      <IconButton
        type="button"
        aria-label="Ocultar recomendación de instalación"
        onClick={dismiss}
        className="absolute right-3 top-3 z-10 text-[#aab3ab] hover:bg-white/10 hover:text-white"
      >
        <Icon name="close" />
      </IconButton>
      <div className="relative flex flex-wrap items-center gap-5">
        <div className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[15px] bg-accent text-[26px] text-dark">
          <Icon name="mobile" />
        </div>
        <div className="min-w-[220px] flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[.16em] text-accent">Link Chest en tu móvil</p>
          <h2 id="install-title" className="mt-[4px] font-display text-[22px] font-bold leading-[1.15] tracking-[-.02em]">
            Instala la app y guarda enlaces donde estés
          </h2>
          <p className="mb-[16px] mt-[7px] max-w-[46ch] text-[13px] leading-[1.55] text-[#aab3ab]">
            Acceso directo, modo sin conexión y para compartir desde cualquier app. Tarda menos de un minuto.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onInstall}
              className="inline-flex cursor-pointer items-center gap-2 rounded-[11px] bg-accent px-4 py-[11px] text-[13.5px] font-bold text-dark transition-transform duration-200 hover:-translate-y-px"
            >
              <Icon name="download" className="text-[16px]" />
              {deferred ? "Instalar ahora" : "Descargar app"}
            </button>
            <button
              type="button"
              onClick={() => toastDemoDownload()}
              className="inline-flex cursor-pointer items-center gap-2 rounded-[11px] border border-white/20 px-4 py-[11px] text-[13.5px] font-bold text-white transition-colors duration-200 hover:bg-white/10"
            >
              Ver en tiendas
              <Icon name="external" className="text-[14px]" />
            </button>
          </div>
        </div>
        <figure className="flex shrink-0 flex-col items-center gap-2 max-[620px]:hidden mr-4">
          <a
            href={INSTALL_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir página de instalación de la app"
            title="Escanea o toca para instalar"
            className="grid h-[118px] w-[118px] place-items-center rounded-[14px] border border-white/15 bg-white p-[10px]  transition-transform duration-200 hover:-translate-y-px"
          >
            <AppQrCode />
          </a>
          <figcaption className="text-[11px] font-semibold uppercase tracking-[.14em] text-[#aab3ab]">
            Escanéame
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
