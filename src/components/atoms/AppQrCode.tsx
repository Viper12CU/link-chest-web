"use client";

import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

export const INSTALL_APP_URL = "https://viper12cu.github.io/Link-Chest-Release-Web/";

type AppQrCodeProps = {
  data?: string;
  size?: number;
};

export function AppQrCode({ data = INSTALL_APP_URL, size = 176 }: AppQrCodeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = containerRef.current;
    if (!host) return;
    host.innerHTML = "";

    const qr = new QRCodeStyling({
      width: size,
      height: size,
      type: "svg",
      data,
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
  }, [data, size]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={`Código QR para instalar la app: ${data}`}
      className="grid h-full w-full place-items-center overflow-hidden [&>svg]:h-full [&>svg]:w-full"
    />
  );
}
