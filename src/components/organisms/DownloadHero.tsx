"use client";

import { useState } from "react";
import { DownloadButton } from "@/components/atoms/DownloadButton";
import { Icon } from "@/components/atoms/Icon";
import { QrDownloadModal } from "@/components/organisms/QrDownloadModal";
import type { GithubRelease } from "@/lib/releases";
import { RELEASES_FALLBACK_DESCRIPTION, getApkAsset } from "@/lib/releases";

type DownloadHeroProps = {
  release: GithubRelease | null;
};

export function DownloadHero({ release }: DownloadHeroProps) {
  const [qrOpen, setQrOpen] = useState(false);
  const apk = release ? getApkAsset(release) : undefined;
  const version = release?.tag_name ?? "v0.0.0";
  const description =
    release?.body?.split("\n")[0]?.trim() || RELEASES_FALLBACK_DESCRIPTION;

  return (
    <div className="space-y-7">
      <p className="animate-download-in inline-flex items-center gap-2 rounded-full border border-accent-strong/30 bg-accent/15 px-3 py-1">
        <span className="h-2 w-2 animate-pulse rounded-full bg-accent-strong dark:bg-accent" />
        <span className="text-[13px] font-medium uppercase leading-4 tracking-[0.05em] text-text">
          Última versión
        </span>
      </p>
      <h1
        id="hero-title"
        className="animate-download-in font-display text-[64px] font-bold leading-[1.0] tracking-[-0.035em] text-text [animation-delay:90ms] max-[620px]:text-[40px]"
      >
        Link Chest
        <span className="mt-2 flex items-center gap-3">
          <span className="inline-block h-[0.14em] w-[1.1em] rounded-full bg-accent-strong dark:bg-accent" />
          <span className="text-accent-strong dark:text-accent">{version}</span>
        </span>
      </h1>
      <p className="animate-download-in max-w-xl text-[17px] leading-7 text-muted [animation-delay:180ms]">
        {description}
      </p>
      <div className="animate-download-in flex flex-wrap items-center gap-4 pt-2 [animation-delay:260ms]">
        {apk ? (
          <DownloadButton
            id="hero-download-btn"
            href={apk.browser_download_url}
            download={apk.name}
          />
        ) : null}
        {apk ? (
          <button
            type="button"
            onClick={() => setQrOpen(true)}
            className="hidden cursor-pointer items-center gap-3 rounded-xl border border-line bg-surface px-8 py-4 font-bold text-text transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-strong/50 hover:shadow-[var(--shadow)] lg:inline-flex"
          >
            <Icon name="mobile" className="text-[18px]" />
            <span className="text-[13px] font-medium uppercase tracking-[0.05em]">
              Descargar en el móvil
            </span>
          </button>
        ) : null}
        <span className="inline-flex items-center gap-1.5 text-[13px] text-muted">
          <Icon name="shield" className="text-[15px] text-accent-strong dark:text-accent" />
          Solo Android · Gratis · Sin cuenta
        </span>
      </div>
      {qrOpen && apk ? (
        <QrDownloadModal
          apkUrl={apk.browser_download_url}
          fileName={apk.name}
          onClose={() => setQrOpen(false)}
        />
      ) : null}
    </div>
  );
}
