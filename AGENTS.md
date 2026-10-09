<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack & comandos

- Next.js 16 (App Router, Cache Components) · React 19 · TypeScript strict · Tailwind CSS v4 · pnpm.
- Scripts: `pnpm dev`, `pnpm build`, `pnpm lint`. Typecheck: `npx tsc --noEmit`. Ejecutar `lint` + `tsc` + `build` antes de dar por terminada una tarea.
- Alias de rutas: `@/*` → `src/*` (tsconfig.json). Usar siempre `@/components/...`, `@/app/...`.

## Estructura

- `src/app/` — rutas App Router: `/`, `/login`, `/dashboard`, `/profile`. Cada una con `page.tsx`; `metadata` exportado desde el route file.
- `src/components/` — Atomic Design: `atoms/`, `molecules/`, `organisms/`, `templates/`, `pages/`. Un componente por archivo, PascalCase, export nombrado (`export function X()`).
- Regla de composición: `app/route/page.tsx` → `components/pages/*` → `templates/*` → `organisms/*` → `molecules/*` → `atoms/*`.

## Verificación tras implementar (obligatorio)

- Tras cada implementación, comprobar la consola del navegador con MCP `chrome-devtools` en busca de errores antes de dar la tarea por terminada:
  1) `list_pages` para localizar la página (`pnpm dev` debe estar corriendo).
  2) `navigate_page` a cada ruta afectada (`/`, `/login`, `/dashboard`, `/profile`) y `list_console_messages` filtrando `types: ["error"]` (incluir `includePreservedMessages: true` si hubo navegación/redirect).
  3) Si hay errores, obtener el detalle con `get_console_message` (msgid) y corregir la causa raíz en el código.
- Cerrar el ciclo con `pnpm lint` + `npx tsc --noEmit` + `pnpm build` sin errores.

## Hidratación SSR (regla aprendida)

- Prohibido leer `localStorage` / `window` / `document` en el inicializador de `useState` (causa `Hydration failed...` cuando el valor persistido difiere del SSR). Patrón obligatorio:
  - Estado inicial con valor determinista idéntico en servidor y cliente.
  - Restaurar el valor persistido en un `useEffect` tras el montaje (una sola vez).
  - Retrasar las escrituras a `localStorage` / `document.classList` hasta después de hidratar (flag `hydrated`).
  - El `useEffect` de sincronización con `localStorage` requiere `/* eslint-disable react-hooks/set-state-in-effect -- hidratación SSR-segura, una sola vez */` (es el caso de uso sancionado: sincronizar con un sistema externo).
- Afectados históricamente: `DashboardProvider` (`activeCategory`, `dark`), `InstallAppBanner` (`dismissed`), `ProfilePreferences` (`dark`, `compact`, `digest`, `defaultView`).

## Límites cliente/servidor

- Server component por defecto. `"use client"` solo en componentes con estado/efectos/handlers (hoy: `PasswordField`, `RememberForgotRow`, `LoginForm`). No envolver el árbol completo en client.

## Estilo y fuentes

- Fuentes globales vía `next/font/google` en `src/app/layout.tsx`: **DM Sans** (`font-sans`, cuerpo) y **Space Grotesk** (`font-display`, títulos/marcas). No reintroducir Geist.
- Tokens de diseño del prototipo en `src/app/globals.css`: `:root` (valores hex) + `@theme inline` (nombres Tailwind: `surface`, `surface-2`, `text`, `muted`, `line`, `accent`, `accent-strong`, `dark`, `danger`). Preferir tokens (`bg-surface`, `text-muted`) sobre colores hardcodeados.
- Estilos con utilidades Tailwind (incluidas arbitrarias `p-[42px]`, variantes `max-[620px]:`). Sin CSS Modules ni CSS global nuevo fuera de `globals.css`.
- Mobile-first; el prototipo usa `@media (max-width: 620px)` → replicar con `max-[620px]:`.

## Fuente de verdad de diseño

- `link-chest-prototype-single.html` (raíz del repo): prototipo HTML/CSS/JS completo. Al recrear pantallas, extraer solo el CSS/HTML relevante de su sección y copiar valores literalmente (colores, spacing, tipografía, breakpoints). El login está implementado en `/login` siguiendo este flujo.
- Comportamiento demo del login: credenciales precargadas (`demo@linkchest.app` / `12345678`), submit → `router.push("/dashboard")`, toggle de visibilidad de contraseña. El login es solo claro (el prototipo no define dark mode ahí).

## Iconos (Reicon, obligatorio)

- Todos los iconos **UI** salen de `src/components/atoms/Icon.tsx` (`export function Icon({ name }: { name: IconName })`). Prohibido usar caracteres-símbolo (`☰ × + ☼ ⌕ ✎ ⌫ ★ ↗ •••`…), emojis o SVGs inline fuera de `Icon.tsx` para UI.
- Colección: **Reicon** (licencia MIT) vía MCP `icons0` (config en `opencode.json`): `search-icons` con `collection: "reicon"` para hallar el id, `get-icon` en formato `react` para copiar el path literalmente (`currentColor`, `viewBox="0 0 24"`). Estilo: **outline** por defecto, variante `-filled` solo para estados (favorito, activo).
- `Icon` hereda tamaño/color del padre (`1em`, `currentColor`, `aria-hidden`); no fijar `width/height` donde se usa.
- Excepción: los **emojis de categorías** (`Category.emoji`, `CATEGORIES_INITIAL`, `EmojiPickerField`, `emoji-picker-react`) no se tocan y no usan `Icon`. `NavItem` y `StatCard` reciben `icon: IconName`; `CategoryListItem` y `CategoryProgressRow` siguen recibiendo `icon: string` (emoji).
- Excepción documentada en `Icon.tsx`: `more` (tres puntos) es fallback local estilo Reicon porque la colección no trae ellipsis.
- Al añadir un icono: 1) buscar id en Reicon, 2) añadirlo a `IconName` + mapa `ICONS` en `Icon.tsx`, 3) usar `<Icon name="..." />`.
