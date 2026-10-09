export type Category = {
  id: number;
  name: string;
  color: string;
  emoji: string;
};

export type LinkItem = {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  date: string;
  favorite: boolean;
};

export type DashboardView = "links" | "stats" | "categories";

export type LinkFilter = "all" | "recent" | "favorites";

export const DEFAULT_CATEGORY: Category = { id: 0, name: "General", color: "#8a948a", emoji: "📁" };

export const DEFAULT_CATEGORY_ID = 0;

export const UNCATEGORIZED = DEFAULT_CATEGORY.name;

export const RECENT_DATES = ["Hoy", "Ayer"];

export const ACTIVITY_BARS = [35, 58, 43, 78, 66, 91, 74];

export const WEEK_LABELS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

export const CATEGORIES_INITIAL: Category[] = [
  DEFAULT_CATEGORY,
  { id: 1, name: "Desarrollo", color: "#5b9dff", emoji: "💻" },
  { id: 2, name: "Diseño", color: "#c084fc", emoji: "🎨" },
  { id: 3, name: "Productividad", color: "#f5b942", emoji: "⚡" },
  { id: 4, name: "Recursos", color: "#5fc98a", emoji: "📦" },
  { id: 5, name: "Inspiración", color: "#f27e8a", emoji: "💡" },
];

export const LINKS_INITIAL: LinkItem[] = [
  { id: 1, title: "Next.js Documentation", description: "Documentación oficial para construir aplicaciones web modernas con React y Next.js.", url: "https://nextjs.org/docs", category: "Desarrollo", date: "Hoy", favorite: true },
  { id: 2, title: "Linear", description: "Issue tracking y gestión de proyectos con una experiencia de usuario excelente.", url: "https://linear.app", category: "Productividad", date: "Hoy", favorite: false },
  { id: 3, title: "Dribbble", description: "Inspiración visual, interfaces y trabajos de diseñadores de todo el mundo.", url: "https://dribbble.com", category: "Inspiración", date: "Ayer", favorite: true },
  { id: 4, title: "Supabase", description: "La alternativa open source para crear backends rápidamente con Postgres.", url: "https://supabase.com", category: "Desarrollo", date: "Ayer", favorite: false },
  { id: 5, title: "Figma Community", description: "Miles de recursos y archivos gratuitos para explorar, duplicar y aprender.", url: "https://www.figma.com/community", category: "Diseño", date: "3 oct", favorite: true },
  { id: 6, title: "GitHub", description: "Plataforma para colaborar en proyectos de software y gestionar repositorios.", url: "https://github.com", category: "Desarrollo", date: "2 oct", favorite: false },
  { id: 7, title: "Ray.so", description: "Crea imágenes bonitas de tus fragmentos de código para compartirlos.", url: "https://ray.so", category: "Recursos", date: "30 sep", favorite: false },
  { id: 8, title: "Awwwards", description: "Premios y selección diaria de sitios web con diseños destacados.", url: "https://www.awwwards.com", category: "Diseño", date: "29 sep", favorite: true },
  { id: 9, title: "React.dev", description: "Aprende React desde la documentación oficial y ejemplos interactivos.", url: "https://react.dev", category: "Desarrollo", date: "28 sep", favorite: false },
  { id: 10, title: "Notion Templates", description: "Plantillas para organizar proyectos, notas, tareas y mucho más.", url: "https://www.notion.com/templates", category: "Productividad", date: "26 sep", favorite: false },
  { id: 11, title: "Canva", description: "Herramientas sencillas para crear presentaciones, piezas gráficas y contenido.", url: "https://www.canva.com", category: "Diseño", date: "24 sep", favorite: false },
  { id: 12, title: "roadmap.sh", description: "Roadmaps y guías comunitarias para aprender desarrollo de software.", url: "https://roadmap.sh", category: "Recursos", date: "22 sep", favorite: true },
  { id: 13, title: "Awesome Selfhosted", description: "Colección de software libre que puedes alojar tú mismo.", url: "https://awesome-selfhosted.net", category: "Recursos", date: "20 sep", favorite: false },
  { id: 14, title: "Mobbin", description: "Biblioteca de patrones y capturas de interfaces móviles para inspirarte.", url: "https://mobbin.com", category: "Inspiración", date: "18 sep", favorite: false },
  { id: 15, title: "TypeScript Handbook", description: "Guía completa para entender y aprovechar TypeScript en tus proyectos.", url: "https://www.typescriptlang.org/docs/handbook", category: "Desarrollo", date: "16 sep", favorite: false },
  { id: 16, title: "Unsplash", description: "Fotografías gratuitas de alta calidad para proyectos y diseños.", url: "https://unsplash.com", category: "Diseño", date: "14 sep", favorite: true },
];

export function getDomain(url: string): string {
  try {
    return new URL(url).hostname.replace("www.", "");
  } catch {
    return "link";
  }
}

export function iconForLink(link: Pick<LinkItem, "url">): string {
  return getDomain(link.url).charAt(0).toUpperCase();
}
