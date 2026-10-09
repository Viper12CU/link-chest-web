import { sileo } from "sileo";

// Helpers centralizados para disparar toasts Sileo con copy en español,
// tipo semántico y duración coherentes en toda la app.
// El viewport (<AppToaster position="bottom-right">) vive en el root layout.

export function notifySuccess(title: string, description?: string, duration = 4000): string {
  return sileo.success({ title, description, duration });
}

export function notifyError(title: string, description?: string, duration = 6000): string {
  return sileo.error({ title, description, duration });
}

export function notifyWarning(title: string, description?: string, duration = 5000): string {
  return sileo.warning({ title, description, duration });
}

export function notifyInfo(title: string, description?: string, duration = 4000): string {
  return sileo.info({ title, description, duration });
}

// --- Enlaces ---

export function toastLinkCreated(): string {
  return notifySuccess("Enlace creado", "El enlace se guardó en tu colección.");
}

export function toastLinkUpdated(): string {
  return notifySuccess("Enlace actualizado", "Los cambios ya están guardados.");
}

export function toastLinkDeleted(): string {
  return notifySuccess("Enlace eliminado", "El enlace se quitó de tu colección.");
}

export function toastLinkCopied(): string {
  return notifySuccess("Enlace copiado", "La URL está lista para pegar donde quieras.", 2500);
}

export function toastCopyFailed(): string {
  return notifyError(
    "No se pudo copiar",
    "Tu navegador bloqueó el portapapeles. Copia la URL manualmente."
  );
}

export function toastCategoryChanged(): string {
  return notifySuccess("Categoría actualizada", "El enlace ya está en su nueva categoría.");
}

export function toastCategoryNotFound(): string {
  return notifyError("Categoría no encontrada", "Revisa el nombre e inténtalo de nuevo.");
}

export function toastFavoriteAdded(): string {
  return notifySuccess("Añadido a favoritos", undefined, 3000);
}

export function toastFavoriteRemoved(): string {
  return notifyInfo("Quitado de favoritos", undefined, 3000);
}

// --- Categorías ---

export function toastCategoryCreated(): string {
  return notifySuccess("Categoría creada", "Ya puedes guardar enlaces en ella.");
}

export function toastCategoryUpdated(): string {
  return notifySuccess("Categoría actualizada", "Los cambios ya están guardados.");
}

export function toastCategoryDeleted(): string {
  return notifySuccess("Categoría eliminada", "Sus enlaces se movieron a Sin categoría.");
}

export function toastCategoryExists(): string {
  return notifyWarning("Esa categoría ya existe", "Elige otro nombre para crearla.");
}

export function toastCategoryProtected(action: "editar" | "eliminar"): string {
  return notifyWarning(
    "Categoría protegida",
    `La categoría General no se puede ${action}.`
  );
}

// --- Otros ---

export function toastDemoDownload(): string {
  return notifyInfo("Demo", "Aquí iría el enlace a Google Play / App Store.");
}

export function toastSessionStarted(): string {
  return notifySuccess("Sesión iniciada", "Bienvenido de nuevo a Link Chest.");
}

export function toastGoogleRedirect(): string {
  return notifyInfo("Continuando con Google", "Te redirigimos al dashboard (demo).");
}
