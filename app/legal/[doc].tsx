import { useLocalSearchParams, Redirect } from 'expo-router';
import { LegalWebView } from '@/components/legal-web-view';
import { LEGAL_DOCS, type LegalDoc } from '@/consts/legal';

export default function LegalDocScreen() {
  const { doc } = useLocalSearchParams<{ doc: string }>();

  const entry = LEGAL_DOCS[doc as LegalDoc];
  if (!entry) {
    return <Redirect href="/" />;
  }

  return <LegalWebView slug={entry.slug} />;
}
