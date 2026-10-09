import { Eyebrow } from "@/components/atoms/Eyebrow";
import { Icon } from "@/components/atoms/Icon";
import { AvatarUploader } from "@/components/molecules/AvatarUploader";

const STATS = [
  { value: "248", label: "Enlaces" },
  { value: "12", label: "Categorías" },
  { value: "36", label: "Favoritos" },
];

export function ProfileHeader({ name, email }: { name: string; email: string }) {
  return (
    <section
      aria-labelledby="profile-title"
      className="relative overflow-hidden rounded-[18px] border border-line bg-surface p-[26px] shadow-[var(--shadow)] max-[620px]:p-[20px]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[70px] -top-[70px] h-[190px] w-[190px] rounded-full bg-accent/25 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[50px] -bottom-[80px] h-[150px] w-[150px] rounded-full bg-accent/15 blur-2xl"
      />
      <div className="relative">
        <Eyebrow>Mi cuenta</Eyebrow>
        <h2 id="profile-title" className="sr-only">
          Información de tu perfil
        </h2>
        <div className="flex flex-wrap items-start justify-between gap-5">
          <AvatarUploader name={name} email={email} />
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-dark px-3 py-[6px] text-[11px] font-bold uppercase tracking-[.08em] text-accent">
              <Icon name="star-filled" className="text-[13px]" />
              Plan Pro
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-2 px-3 py-[6px] text-[11px] font-bold uppercase tracking-[.08em] text-muted">
              Desde 2024
            </span>
          </div>
        </div>
        <dl className="mt-[22px] grid grid-cols-3 gap-3 max-[620px]:grid-cols-3 max-[620px]:gap-2">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-[13px] border border-line bg-[#fbfcfa] px-4 py-[13px] text-center dark:bg-[#1b231d]"
            >
              <dt className="order-2 mt-[2px] block text-[11px] font-bold uppercase tracking-[.1em] text-muted">
                {s.label}
              </dt>
              <dd className="font-display text-[24px] font-bold tracking-[-.03em] text-text">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
