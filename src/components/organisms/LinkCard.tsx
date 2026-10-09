import { LinkCardMenu } from "@/components/molecules/LinkCardMenu";
import { getDomain, iconForLink, type LinkItem } from "@/data/dashboard";

function categoryIcon(categories: { name: string; emoji: string }[], name: string): string {
  return categories.find((c) => c.name === name)?.emoji ?? "•";
}

export function LinkCard({
  link,
  categories,
}: {
  link: LinkItem;
  categories: { name: string; emoji: string }[];
}) {
  return (
    <article className="relative mb-4 break-inside-avoid rounded-[18px] border border-line bg-surface p-[17px] shadow-[0_3px_15px_rgba(25,35,27,.025)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(25,35,27,.08)]">
      <div className="flex items-start justify-between gap-[10px]">
        <div className="grid h-[34px] w-[34px] place-items-center rounded-[10px] bg-surface-2 text-[13px] font-extrabold text-text">
          {iconForLink(link)}
        </div>
        <LinkCardMenu linkId={link.id} favorite={link.favorite} />
      </div>
      <h3 className="mb-[7px] mt-[15px] font-display text-[16px] tracking-[-.02em] text-text">{link.title}</h3>
      <p className="mb-[14px] text-[12px] leading-[1.55] text-[#7a847b]">{link.description}</p>
      <div className="mb-[13px] flex items-center justify-between gap-2">
        <span className="rounded-[5px] bg-[#eff4eb] px-[7px] py-1 text-[9px] font-bold text-[#73806f]">
          {categoryIcon(categories, link.category)} {link.category}
        </span>
        <span className="text-[9px] text-[#a2aaa2]">{link.date}</span>
      </div>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between rounded-[9px] border border-[#e8ede6] bg-[#f4f7f2] px-[10px] py-[9px] text-[10px] font-bold text-[#59645b] transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-dark dark:bg-[#1b231d]"
      >
        <span>{getDomain(link.url)}</span>
        <span>↗</span>
      </a>
    </article>
  );
}
