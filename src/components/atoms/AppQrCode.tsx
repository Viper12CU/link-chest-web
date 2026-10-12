"use client";

import { useEffect, useRef, useState } from "react";
import QRCodeStyling from "qr-code-styling";

export const INSTALL_APP_URL = "/download";

type AppQrCodeProps = {
  data?: string;
  size?: number;
};

export function AppQrCode({ data, size = 176 }: AppQrCodeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  // SSR-seguro: el QR absoluto (origin + /download) solo se resuelve en cliente.
  const [resolved, setResolved] = useState<string | null>(data ?? null);

  /* eslint-disable react-hooks/set-state-in-effect -- hidratación SSR-segura, una sola vez */
  useEffect(() => {
    if (data) {
      setResolved(data);
      return;
    }
    try {
      setResolved(`${window.location.origin}${INSTALL_APP_URL}`);
    } catch {
      setResolved(INSTALL_APP_URL);
    }
  }, [data]);
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    const host = containerRef.current;
    if (!host || !resolved) return;
    host.innerHTML = "";

    const qr = new QRCodeStyling({
      width: size,
      height: size,
      type: "svg",
      data: resolved,
      margin: 0,
      qrOptions: { errorCorrectionLevel: "M" },
      backgroundOptions: { color: "#ffffff" },
      dotsOptions: { color: "#172019", type: "rounded" },
      cornersSquareOptions: { color: "#172019", type: "extra-rounded" },
      cornersDotOptions: { color: "#8ddc38", type: "dot" },
    });

    qr.append(host);

    return () => {
      host.innerHTML = "";
    };
  }, [resolved, size]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={`Código QR para instalar la app: ${resolved ?? INSTALL_APP_URL}`}
      className="grid h-full w-full place-items-center overflow-hidden [&>svg]:h-full [&>svg]:w-full"
    />
  );
}
