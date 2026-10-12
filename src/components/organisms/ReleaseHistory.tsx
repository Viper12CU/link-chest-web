import { ReleaseCard } from "@/components/organisms/ReleaseCard";
import type { GithubRelease } from "@/lib/releases";

type ReleaseHistoryProps = {
  releases: GithubRelease[];
  loading: boolean;
  error: string | null;
};

function ReleaseSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="download-skeleton col-span-12 h-64 rounded-[18px] md:col-span-6 lg:col-span-4"
    />
  );
}

export function ReleaseHistory({ releases, loading, error }: ReleaseHistoryProps) {
  const showList = !loading && !error && releases.length > 0;

  return (
    <section aria-labelledby="history-title">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mb-1 text-[13px] font-medium uppercase leading-4 tracking-[0.05em] text-muted">
            Archivo
          </p>
          <h2 id="history-title" className="font-display text-[32px] font-bold leading-9 tracking-[-0.02em] text-text">
            Historial de versiones
          </h2>
        </div>
        {showList ? (
          <span className="rounded-full border border-line bg-surface px-3 py-1 text-[13px] font-semibold text-muted">
            {releases.length} anteriores
          </span>
        ) : null}
      </div>
      <div id="release-list" role="list" className="grid grid-cols-12 gap-6">
        {loading ? (
          <>
            <ReleaseSkeleton />
            <ReleaseSkeleton />
            <ReleaseSkeleton />
            <ReleaseSkeleton />
            <ReleaseSkeleton />
            <ReleaseSkeleton />
          </>
        ) : error ? (
          <p className="col-span-full rounded-[18px] border border-line bg-surface px-6 py-10 text-center text-danger">
            {error}
          </p>
        ) : releases.length === 0 ? (
          <p className="col-span-full rounded-[18px] border border-line bg-surface px-6 py-10 text-center text-muted">
            No hay versiones disponibles
          </p>
        ) : (
          releases.map((release) => (
            <ReleaseCard key={release.tag_name} release={release} />
          ))
        )}
      </div>
    </section>
  );
}
