import { DownloadButton } from "@/components/atoms/DownloadButton";
import { Icon } from "@/components/atoms/Icon";
import type { GithubRelease } from "@/lib/releases";
import { formatBytes, formatDateShort, getApkAsset } from "@/lib/releases";

export function ReleaseCard({ release }: { release: GithubRelease }) {
  const apk = getApkAsset(release);
  const tagName = release.tag_name || "Desconocida";
  const releaseName = release.name || tagName;
  const body = release.body || "Sin descripción disponible";

  return (
    <div
      role="listitem"
      className="group col-span-12 flex flex-col rounded-[18px] border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent-strong/40 hover:shadow-[var(--shadow)] md:col-span-6 lg:col-span-4"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent-strong/30 bg-accent/15 px-2.5 py-1 text-[13px] text-text">
            <Icon name="tag" className="text-xs" />
            <span>{tagName}</span>
          </span>
          <h3 className="truncate font-display text-[24px] font-semibold leading-8 text-text">
            {releaseName}
          </h3>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-3 text-[13px] text-muted">
        <span className="flex items-center gap-1.5">
          <Icon name="calendar" className="text-sm" />
          <span>{formatDateShort(release.published_at)}</span>
        </span>
        {apk ? (
          <span className="flex items-center gap-1.5">
            <Icon name="database" className="text-sm" />
            <span>{formatBytes(apk.size)}</span>
          </span>
        ) : null}
      </div>

      <p className="mb-6 line-clamp-3 flex-1 leading-relaxed text-muted">{body}</p>

      <div className="border-t border-line pt-4">
        {apk ? (
          <DownloadButton full href={apk.browser_download_url} download={apk.name}>
            <span className="text-[13px] font-medium uppercase tracking-[0.05em]">
              Descargar APK
            </span>
          </DownloadButton>
        ) : (
          <span className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-surface-2 px-6 py-3 text-[13px] text-muted">
            <Icon name="ban" />
            <span>APK no disponible</span>
          </span>
        )}
      </div>
    </div>
  );
}
