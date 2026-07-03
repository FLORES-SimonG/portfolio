import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const messages = await import(`@/messages/${locale}.json`).then((m) => (m && (m as any).default ? (m as any).default : m));

  return {
    title: messages?.hero?.greeting ?? 'Simón G. Flores',
    description: messages?.hero?.tagline ?? 'FullStack Developer',
  };
}
