"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  CATEGORIES_INITIAL,
  DEFAULT_CATEGORY,
  DEFAULT_CATEGORY_ID,
  LINKS_INITIAL,
  RECENT_DATES,
  UNCATEGORIZED,
  type Category,
  type DashboardView,
  type LinkFilter,
  type LinkItem,
} from "@/data/dashboard";

export type LinkPayload = {
  title: string;
  description: string;
  url: string;
  category: string;
};

export type CategoryPayload = {
  name: string;
  color: string;
  emoji: string;
};

const HEX_COLOR = /^#[0-9a-fA-F]{6}$/;

type DashboardContextValue = {
  categories: Category[];
  links: LinkItem[];
  filteredLinks: LinkItem[];
  currentView: DashboardView;
  activeCategory: string;
  activeFilter: LinkFilter;
  searchQuery: string;
  dark: boolean;
  openMenuId: number | null;
  linkModal: { open: boolean; editingId: number | null };
  categoryModal: { open: boolean; editingId: number | null };
  toast: string | null;
  setCurrentView: (view: DashboardView) => void;
  setActiveCategory: (category: string) => void;
  setActiveFilter: (filter: LinkFilter) => void;
  setSearchQuery: (query: string) => void;
  setOpenMenuId: (id: number | null) => void;
  toggleTheme: () => void;
  showToast: (message: string) => void;
  openNewLink: () => void;
  openEditLink: (id: number) => void;
  closeLinkModal: () => void;
  saveLink: (payload: LinkPayload, editingId: number | null) => void;
  copyLink: (id: number) => void;
  promptChangeCategory: (id: number) => void;
  toggleFavorite: (id: number) => void;
  requestDeleteLink: (id: number) => void;
  openNewCategory: () => void;
  openEditCategory: (id: number) => void;
  closeCategoryModal: () => void;
  saveCategory: (payload: CategoryPayload, editingId: number | null) => void;
  requestDeleteCategory: (id: number) => void;
  openCategoryLinks: (name: string) => void;
  closeAllOverlays: () => void;
  focusSearch: () => void;
  countByCategory: (name: string) => number;
};

const DashboardContext = createContext<DashboardContextValue | null>(null);

const THEME_STORAGE_KEY = "link-chest:theme";
const ACTIVE_CATEGORY_STORAGE_KEY = "link-chest:activeCategory";

function readStoredTheme(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY) === "dark";
  } catch {
    return false;
  }
}

function readStoredActiveCategory(): string {
  const fallback = CATEGORIES_INITIAL[0]?.name ?? DEFAULT_CATEGORY.name;
  if (typeof window === "undefined") return fallback;
  try {
    const stored = window.localStorage.getItem(ACTIVE_CATEGORY_STORAGE_KEY);
    if (!stored || stored === "all") return fallback;
    if (!CATEGORIES_INITIAL.some((c) => c.name === stored)) return fallback;
    return stored;
  } catch {
    return fallback;
  }
}

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<Category[]>(CATEGORIES_INITIAL);
  const [links, setLinks] = useState<LinkItem[]>(LINKS_INITIAL);
  const [currentView, setCurrentView] = useState<DashboardView>("links");
  const [activeCategory, setActiveCategory] = useState<string>(readStoredActiveCategory);
  const [activeFilter, setActiveFilter] = useState<LinkFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  // Init diferido: en servidor devuelve false y en cliente lee localStorage.
  // No produce parpadeo porque el script theme-init ya aplicó la clase .dark
  // antes del primer pintado, y la clase vive fuera del árbol React.
  const [dark, setDark] = useState<boolean>(readStoredTheme);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [linkModal, setLinkModal] = useState<{ open: boolean; editingId: number | null }>({
    open: false,
    editingId: null,
  });
  const [categoryModal, setCategoryModal] = useState<{ open: boolean; editingId: number | null }>({
    open: false,
    editingId: null,
  });
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
    } catch {
      // Almacenamiento no disponible: se mantiene el tema en memoria.
    }
  }, [dark]);

  useEffect(() => {
    try {
      window.localStorage.setItem(ACTIVE_CATEGORY_STORAGE_KEY, activeCategory);
    } catch {
      // Almacenamiento no disponible: se mantiene la categoría en memoria.
    }
  }, [activeCategory]);

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const showToast = useCallback((message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2300);
  }, []);

  const toggleTheme = useCallback(() => setDark((v) => !v), []);

  const openNewLink = useCallback(() => {
    setOpenMenuId(null);
    setLinkModal({ open: true, editingId: null });
  }, []);

  const openEditLink = useCallback((id: number) => {
    setOpenMenuId(null);
    setLinkModal({ open: true, editingId: id });
  }, []);

  const closeLinkModal = useCallback(() => {
    setLinkModal({ open: false, editingId: null });
  }, []);

  const saveLink = useCallback(
    (payload: LinkPayload, editingId: number | null) => {
      if (editingId !== null) {
        setLinks((prev) => prev.map((l) => (l.id === editingId ? { ...l, ...payload } : l)));
        showToast("Enlace actualizado");
      } else {
        setLinks((prev) => [{ id: Date.now(), ...payload, date: "Ahora", favorite: false }, ...prev]);
        showToast("Enlace creado");
      }
      setLinkModal({ open: false, editingId: null });
    },
    [showToast]
  );

  const copyLink = useCallback(
    async (id: number) => {
      const link = links.find((l) => l.id === id);
      if (!link) return;
      try {
        await navigator.clipboard.writeText(link.url);
        showToast("Enlace copiado al portapapeles");
      } catch {
        showToast("No se pudo copiar el enlace");
      }
      setOpenMenuId(null);
    },
    [links, showToast]
  );

  const promptChangeCategory = useCallback(
    (id: number) => {
      const link = links.find((l) => l.id === id);
      if (!link) return;
      const names = categories.map((c) => c.name).join(", ");
      const selected = prompt(`Nueva categoría para "${link.title}"\n\nDisponibles: ${names}`, link.category);
      if (selected) {
        const match = categories.find((c) => c.name.toLowerCase() === selected.toLowerCase());
        if (match) {
          setLinks((prev) => prev.map((l) => (l.id === id ? { ...l, category: match.name } : l)));
          showToast("Categoría actualizada");
        } else {
          showToast("Categoría no encontrada");
        }
      }
      setOpenMenuId(null);
    },
    [categories, links, showToast]
  );

  const toggleFavorite = useCallback(
    (id: number) => {
      let next = false;
      setLinks((prev) =>
        prev.map((l) => {
          if (l.id !== id) return l;
          next = !l.favorite;
          return { ...l, favorite: next };
        })
      );
      showToast(next ? "Añadido a favoritos" : "Quitado de favoritos");
      setOpenMenuId(null);
    },
    [showToast]
  );

  const requestDeleteLink = useCallback(
    (id: number) => {
      const link = links.find((l) => l.id === id);
      if (!link) return;
      if (confirm(`¿Eliminar "${link.title}"?`)) {
        setLinks((prev) => prev.filter((l) => l.id !== id));
        showToast("Enlace eliminado");
      }
      setOpenMenuId(null);
    },
    [links, showToast]
  );

  const openNewCategory = useCallback(() => {
    setCategoryModal({ open: true, editingId: null });
  }, []);

  const openEditCategory = useCallback(
    (id: number) => {
      if (id === DEFAULT_CATEGORY_ID) {
        showToast("La categoría General no se puede editar");
        return;
      }
      setCategoryModal({ open: true, editingId: id });
    },
    [showToast]
  );

  const closeCategoryModal = useCallback(() => {
    setCategoryModal({ open: false, editingId: null });
  }, []);

  const saveCategory = useCallback(
    (payload: CategoryPayload, editingId: number | null) => {
      const trimmed = payload.name.trim();
      if (!trimmed) return;
      const color = HEX_COLOR.test(payload.color) ? payload.color : "#8a948a";
      const emoji = payload.emoji.trim() || "📁";
      if (editingId !== null) {
        if (editingId === DEFAULT_CATEGORY_ID) {
          showToast("La categoría General no se puede editar");
          return;
        }
        const cat = categories.find((c) => c.id === editingId);
        if (!cat) return;
        const oldName = cat.name;
        setCategories((prev) =>
          prev.map((c) => (c.id === editingId ? { ...c, name: trimmed, color, emoji } : c))
        );
        setLinks((prev) => prev.map((l) => (l.category === oldName ? { ...l, category: trimmed } : l)));
        if (oldName === activeCategory) setActiveCategory(trimmed);
        showToast("Categoría actualizada");
      } else {
        if (categories.some((c) => c.name.toLowerCase() === trimmed.toLowerCase())) {
          showToast("Esa categoría ya existe");
          return;
        }
        setCategories((prev) => [...prev, { id: Date.now(), name: trimmed, color, emoji }]);
        showToast("Categoría creada");
      }
      setCategoryModal({ open: false, editingId: null });
    },
    [categories, activeCategory, showToast]
  );

  const requestDeleteCategory = useCallback(
    (id: number) => {
      if (id === DEFAULT_CATEGORY_ID) {
        showToast("La categoría General no se puede eliminar");
        return;
      }
      const cat = categories.find((c) => c.id === id);
      if (!cat) return;
      const count = links.filter((l) => l.category === cat.name).length;
      if (!confirm(`¿Eliminar "${cat.name}"?${count ? ` Sus ${count} enlaces se moverán a "${UNCATEGORIZED}".` : ""}`)) return;
      setLinks((prev) => prev.map((l) => (l.category === cat.name ? { ...l, category: UNCATEGORIZED } : l)));
      const remaining = categories.filter((c) => c.id !== id);
      setCategories(remaining);
      if (cat.name === activeCategory) {
        setActiveCategory(remaining[0]?.name ?? DEFAULT_CATEGORY.name);
      }
      showToast("Categoría eliminada");
    },
    [categories, links, activeCategory, showToast]
  );

  const openCategoryLinks = useCallback((name: string) => {
    setActiveCategory(name);
    setCurrentView("links");
  }, []);

  const closeAllOverlays = useCallback(() => {
    setOpenMenuId(null);
    setLinkModal({ open: false, editingId: null });
    setCategoryModal({ open: false, editingId: null });
  }, []);

  const focusSearch = useCallback(() => {
    document.getElementById("searchInput")?.focus();
  }, []);

  const countByCategory = useCallback(
    (name: string) => links.filter((l) => l.category === name).length,
    [links]
  );

  const filteredLinks = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return links.filter((l) => {
      const matchQuery =
        !query || `${l.title} ${l.description} ${l.category} ${l.url}`.toLowerCase().includes(query);
      const matchCat = l.category === activeCategory;
      const matchFilter =
        activeFilter === "all" ||
        (activeFilter === "favorites" && l.favorite) ||
        (activeFilter === "recent" && RECENT_DATES.includes(l.date));
      return matchQuery && matchCat && matchFilter;
    });
  }, [links, searchQuery, activeCategory, activeFilter]);

  const value: DashboardContextValue = {
    categories,
    links,
    filteredLinks,
    currentView,
    activeCategory,
    activeFilter,
    searchQuery,
    dark,
    openMenuId,
    linkModal,
    categoryModal,
    toast,
    setCurrentView,
    setActiveCategory,
    setActiveFilter,
    setSearchQuery,
    setOpenMenuId,
    toggleTheme,
    showToast,
    openNewLink,
    openEditLink,
    closeLinkModal,
    saveLink,
    copyLink,
    promptChangeCategory,
    toggleFavorite,
    requestDeleteLink,
    openNewCategory,
    openEditCategory,
    closeCategoryModal,
    saveCategory,
    requestDeleteCategory,
    openCategoryLinks,
    closeAllOverlays,
    focusSearch,
    countByCategory,
  };

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}

export function useDashboard(): DashboardContextValue {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard debe usarse dentro de DashboardProvider");
  return ctx;
}
