export type ReleaseAsset = {
  name: string;
  size: number;
  download_count: number;
  browser_download_url: string;
};

export type GithubRelease = {
  tag_name: string;
  name: string | null;
  body: string | null;
  published_at: string;
  prerelease: boolean;
  draft: boolean;
  target_commitish?: string | null;
  assets: ReleaseAsset[];
};

export const RELEASES_FALLBACK_DESCRIPTION =
  "El organizador de enlaces que necesitabas: guarda, clasifica y encuentra tus links favoritos al instante. Con bóveda privada protegida por biometría y todo almacenado localmente en tu dispositivo.";

export function getApkAsset(release: GithubRelease): ReleaseAsset | undefined {
  return release.assets.find((asset) =>
    asset.name.toLowerCase().endsWith(".apk"),
  );
}

export function formatDateShort(date: string): string {
  return new Date(date).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

export function getHashShort(hash: string | null | undefined): string {
  if (!hash) return "sha256:...";
  return hash.length > 40 ? `${hash.substring(0, 40)}...` : hash;
}

export function isPrerelease(release: GithubRelease): boolean {
  return release.prerelease || release.draft;
}
