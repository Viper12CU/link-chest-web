import { Icon } from "@/components/atoms/Icon";
import { LinkCardMenu } from "@/components/molecules/LinkCardMenu";
import { getDomain, iconForLink, type LinkDensity, type LinkItem } from "@/data/dashboard";

function categoryIcon(categories: { name: string; emoji: string }[], name: string): string {
  return categories.find((c) => c.name === name)?.emoji ?? "•";
}

export function LinkCard({
  link,
  categories,
  layout = "grid",
  density = "comfortable",
}: {
  link: LinkItem;
  categories: { name: string; emoji: string }[];
  layout?: "grid" | "list";
  density?: LinkDensity;
}) {
  const compact = density === "compact";

  if (layout === "list") {
    return (
      <article
        className={`relative flex items-center gap-3 rounded-[14px] border border-line bg-surface shadow-[0_3px_15px_rgba(25,35,27,.025)] transition-all duration-200 hover:shadow-[0_18px_50px_rgba(25,35,27,.08)] ${
          compact ? "px-3 py-2" : "px-[15px] py-3"
        }`}
      >
        <div
          className={`grid shrink-0 place-items-center rounded-[10px] bg-surface-2 font-extrabold text-text transition-colors duration-200 ${
            compact ? "h-[28px] w-[28px] text-[11px]" : "h-[34px] w-[34px] text-[13px]"
          }`}
        >
          {iconForLink(link)}
        </div>
        <div className="min-w-0 flex-1">
          <h3
            className={`truncate font-display tracking-[-.02em] text-text transition-colors duration-200 ${
              compact ? "text-[13px]" : "text-[15px]"
            }`}
          >
            {link.title}
          </h3>
          <p className="truncate text-[11px] text-muted">
            {getDomain(link.url)} • {link.category} • {link.date}
          </p>
          {!compact && (
            <p className="truncate text-[12px] leading-[1.55] text-[#7a847b] transition-colors duration-200 dark:text-muted">
              {link.description}
            </p>
          )}
        </div>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir ${link.title}`}
          className="grid shrink-0 place-items-center rounded-[9px] border border-[#e8ede6] bg-[#f4f7f2] p-2 text-[13px] text-[#59645b] transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-dark dark:border-line dark:bg-surface-2 dark:text-muted"
        >
          <Icon name="external" />
        </a>
        <LinkCardMenu linkId={link.id} favorite={link.favorite} />
      </article>
    );
  }

  return (
    <article
      className={`relative mb-4 break-inside-avoid rounded-[18px] border border-line bg-surface shadow-[0_3px_15px_rgba(25,35,27,.025)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(25,35,27,.08)] ${
        compact ? "p-3" : "p-[17px]"
      }`}
    >
      <div className="flex items-start justify-between gap-[10px]">
        <div
          className={`grid place-items-center rounded-[10px] bg-surface-2 font-extrabold text-text transition-colors duration-200 ${
            compact ? "h-[28px] w-[28px] text-[11px]" : "h-[34px] w-[34px] text-[13px]"
          }`}
        >
          {iconForLink(link)}
        </div>
        <LinkCardMenu linkId={link.id} favorite={link.favorite} />
      </div>
      <h3
        className={`font-display tracking-[-.02em] text-text transition-colors duration-200 ${
          compact ? "mb-[4px] mt-[10px] text-[14px]" : "mb-[7px] mt-[15px] text-[16px]"
        }`}
      >
        {link.title}
      </h3>
      {!compact && (
        <p className="mb-[14px] text-[12px] leading-[1.55] text-[#7a847b] transition-colors duration-200 dark:text-muted">
          {link.description}
        </p>
      )}
      <div className={`flex items-center justify-between gap-2 ${compact ? "mb-[9px]" : "mb-[13px]"}`}>
        <span className="rounded-[5px] bg-[#eff4eb] px-[7px] py-1 text-[9px] font-bold text-[#73806f] transition-colors duration-200 dark:bg-surface-2 dark:text-muted">
          {categoryIcon(categories, link.category)} {link.category}
        </span>
        <span className="text-[9px] text-[#a2aaa2] transition-colors duration-200 dark:text-muted">{link.date}</span>
      </div>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between rounded-[9px] border border-[#e8ede6] bg-[#f4f7f2] px-[10px] py-[9px] text-[10px] font-bold text-[#59645b] transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-dark dark:border-line dark:bg-surface-2 dark:text-muted"
      >
        <span>{getDomain(link.url)}</span>
        <Icon name="external" className="text-[13px]" />
      </a>
    </article>
  );
}
