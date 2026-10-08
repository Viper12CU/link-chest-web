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
