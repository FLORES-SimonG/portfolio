import type { Metadata } from 'next';
import Script from 'next/script';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { I18nProvider } from '@/components/I18nProvider';
import { loadMessages, isSupportedLocale, getDefaultLocale, type Locale } from '@/lib/i18n';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Simón G. Flores: Personal Site',
  description: 'The personal site of Simón G. Flores',
};

const themeInitScript = `
const getThemePreference = () => {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};
const isDark = getThemePreference() === 'dark';
document.documentElement.classList[isDark ? 'add' : 'remove']('theme-dark');
if (typeof localStorage !== 'undefined') {
  const observer = new MutationObserver(() => {
    const dark = document.documentElement.classList.contains('theme-dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
}
`;

const loadedClassScript = `
addEventListener('load', () => document.documentElement.classList.add('loaded'));
`;

export default function RootLayout({ children, params }: { children: React.ReactNode; params?: { locale?: string } }) {
  const localeParam = params?.locale;
  const locale: Locale = isSupportedLocale(localeParam) ? localeParam : getDefaultLocale();
  const messages = loadMessages(locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,400&family=Rubik:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Script id="loaded-class" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: loadedClassScript }} />
        <I18nProvider messages={messages}>
          <div className="stack backgrounds">
            <Nav language={locale} />
            {children}
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
