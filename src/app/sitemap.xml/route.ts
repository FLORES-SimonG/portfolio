import { NextResponse } from 'next/server';

import { routing } from '@/i18n/routing';
import { getExperienceEntries } from '@/lib/experience';

const DOMAIN = 'https://sgfloreskuehn.de';

function urlEntry(loc: string, lastmod?: string) {
  return `  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`;
}

export async function GET() {
  const locales = Array.from(routing.locales);

  // basic pages per locale
  const pages = ['','/experience','/about','/certificates'];

  const entries = await getExperienceEntries();

  const urls: string[] = [];

  // localized pages
  for (const locale of locales) {
    for (const page of pages) {
      const path = page === '' ? `/${locale}` : `/${locale}${page}`;
      urls.push(urlEntry(`${DOMAIN}${path}`));
    }
  }

  // experience entries
  for (const entry of entries) {
    const slug = entry.slug.join('/');
    const locale = entry.language;
    const path = `/${locale}/experience/${slug}`;
    const lastmod = entry.publishDate ? new Date(entry.publishDate).toISOString() : undefined;
    urls.push(urlEntry(`${DOMAIN}${path}`, lastmod));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=0, s-maxage=3600'
    }
  });
}
