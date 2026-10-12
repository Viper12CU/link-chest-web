export function AvatarUploader({ name, email }: { name: string; email: string }) {
  const initial = (name.trim().charAt(0) || "L").toUpperCase();

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <div
          aria-hidden="true"
          className="grid h-[76px] w-[76px] place-items-center overflow-hidden rounded-full bg-dark font-display text-[30px] font-bold text-accent ring-4 ring-accent/60"
        >
          {initial}
        </div>
      </div>
      <div className="min-w-0">
        <p className="truncate font-display text-[22px] font-bold tracking-[-.03em] text-text">{name}</p>
        <p className="truncate text-[13px] text-muted">{email}</p>
      </div>
    </div>
  );
}
