export default function Home() {
  // La redirección "/" → "/login" se maneja en next.config.ts (redirects).
  // No usar redirect() aquí: con `cacheComponents: true` la página "/" se
  // prerenderiza como estática y `redirect()` rompe la validación `instant`
  // con el error NEXT_REDIRECT.
  return null;
}
