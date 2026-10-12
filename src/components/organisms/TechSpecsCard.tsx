import type { GithubRelease } from "@/lib/releases";
import {
  formatBytes,
  formatDateShort,
  getApkAsset,
  getHashShort,
  isPrerelease,
} from "@/lib/releases";

type TechSpecsCardProps = {
  release: GithubRelease | null;
};

export function TechSpecsCard({ release }: TechSpecsCardProps) {
  const apk = release ? getApkAsset(release) : undefined;
  const prerelease = release ? isPrerelease(release) : false;

  return (
    <div className="animate-download-in relative overflow-hidden rounded-[18px] bg-dark text-white shadow-[0_18px_50px_rgba(25,35,27,0.18)] [animation-delay:150ms] after:pointer-events-none after:absolute after:-right-[40px] after:-top-[40px] after:h-[110px] after:w-[110px] after:rounded-full after:bg-accent after:opacity-15 after:content-['']">
      <div className="space-y-6 p-8">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-[13px] font-medium uppercase leading-4 tracking-[0.05em] text-white/50">
              Publicado el
            </p>
            <p className="mt-1 font-display text-[17px] font-semibold text-white">
              {release ? formatDateShort(release.published_at) : "—"}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[13px] font-medium uppercase leading-4 tracking-[0.05em] text-white/50">
              Tamaño
            </p>
            <p className="mt-1 font-display text-[17px] font-semibold text-accent">
              {apk ? formatBytes(apk.size) : "N/A"}
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="mb-2 text-[13px] font-medium uppercase leading-4 tracking-[0.05em] text-white/50">
              Hash de compilación
            </p>
            <code className="block truncate rounded-[10px] bg-black/40 px-3 py-2 font-mono text-[13px] text-accent">
              {release ? getHashShort(release.target_commitish) : "sha256:..."}
            </code>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[12px] bg-white/5 p-4">
              <p className="text-[13px] font-medium uppercase leading-4 tracking-[0.05em] text-white/50">
                Descargas
              </p>
              <p className="mt-1 font-display text-[24px] font-bold leading-8 text-white">
                {apk ? apk.download_count.toLocaleString() : "0"}
              </p>
            </div>
            <div className="rounded-[12px] bg-white/5 p-4">
              <p className="text-[13px] font-medium uppercase leading-4 tracking-[0.05em] text-white/50">
                Estado
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${prerelease ? "bg-amber-400" : "bg-accent"}`}
                />
                <p className={`font-semibold ${prerelease ? "text-amber-400" : "text-white"}`}>
                  {release ? (prerelease ? "Prelanzamiento" : "Estable") : "—"}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-1">
          <div className="mb-2 flex items-end justify-between gap-3">
            <p className="truncate font-mono text-[12px] text-white/50">
              {apk ? apk.name : "APK no disponible"}
            </p>
            <p className="shrink-0 font-mono text-[12px] text-accent">100% verificado</p>
          </div>
          <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div className="download-progress-track h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
