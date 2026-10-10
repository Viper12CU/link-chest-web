"use client";

import { useEffect } from "react";
import { AppQrCode } from "@/components/atoms/AppQrCode";
import { ModalShell } from "@/components/molecules/ModalShell";

type QrDownloadModalProps = {
  apkUrl: string;
  fileName: string;
  onClose: () => void;
};

export function QrDownloadModal({ apkUrl, fileName, onClose }: QrDownloadModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <ModalShell eyebrow="Descarga móvil" title="Escanea para descargar" onClose={onClose} small>
      <div className="grid place-items-center">
        <a
          href={apkUrl}
          download={fileName}
          aria-label={`Descargar ${fileName}`}
          className="grid h-[216px] w-[216px] place-items-center rounded-[14px] bg-white p-[14px] transition-transform duration-200 hover:-translate-y-px"
        >
          <AppQrCode data={apkUrl} size={188} />
        </a>
        <p className="mt-4 truncate font-mono text-[12px] text-muted">{fileName}</p>
        <p className="mt-2 text-center text-[13px] leading-5 text-muted">
          Apunta la cámara de tu móvil al código para descargar la aplicación.
        </p>
      </div>
    </ModalShell>
  );
}
