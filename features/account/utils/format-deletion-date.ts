/**
 * Formats an ISO-8601 date in Guatemalan Spanish locale (es-GT),
 * e.g. "12 de mayo de 2026".
 * Falls back to the raw string if parsing fails.
 */
export const formatDeletionDate = (iso: string): string => {
  try {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return iso;
    return new Intl.DateTimeFormat('es-GT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  } catch {
    return iso;
  }
};
