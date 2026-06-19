import { router } from 'expo-router';

export const LEGAL_DOCS = {
  terms: { slug: 'terminos-y-condiciones' },
  privacy: { slug: 'politica-de-privacidad' },
  'data-deletion': { slug: 'politica-de-eliminacion-de-datos' },
} as const;

export type LegalDoc = keyof typeof LEGAL_DOCS;

export const navigateToLegal = (doc: LegalDoc) => router.push(`/legal/${doc}`);
