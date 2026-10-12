import { Eyebrow } from "@/components/atoms/Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  actions,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-5 max-[620px]:flex-col max-[620px]:items-start">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="font-display text-[31px] tracking-[-.04em] text-text">{title}</h2>
        <p className="mt-[6px] text-[13px] text-muted">{subtitle}</p>
      </div>
      {actions}
    </div>
  );
}
