'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Icon from './Icon';
import ThemeToggle from './ThemeToggle';
import type { iconPaths } from './IconPaths';

const textLinks = [
  { label: 'Home', href: '/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'About Me', href: '/about/' },
];

const iconLinks: { label: string; href: string; icon: keyof typeof iconPaths }[] = [
  { label: 'GitHub', href: 'https://github.com/FLORES-SimonG', icon: 'github-logo' },
  { label: 'linkedin-logo', href: 'https://www.linkedin.com/in/simongf94/', icon: 'linkedin-logo' },
];

export default function Nav() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const mediaQueries = window.matchMedia('(min-width: 50em)');
    const handleViewports = (e: MediaQueryList | MediaQueryListEvent) => {
      setExpanded(e.matches);
    };

    handleViewports(mediaQueries);
    mediaQueries.addEventListener('change', handleViewports);
    return () => mediaQueries.removeEventListener('change', handleViewports);
  }, []);

  const currentPath = pathname ?? '/';
  const isActive = (href: string) => currentPath === href || (href !== '/' && currentPath.startsWith(href));

  return (
    <nav>
      <div className="menu-header">
        <Link href="/" className="site-title">
          <Icon icon="terminal-window" color="var(--accent-regular)" size="1.6em" gradient />
          Simón G. Flores
        </Link>
        <button className="menu-button" aria-expanded={expanded} onClick={() => setExpanded((prev) => !prev)}>
          <span className="sr-only">Menu</span>
          <Icon icon="list" />
        </button>
      </div>
      <div id="menu-content" className={expanded ? 'menu-content' : 'menu-content hidden'}>
        <ul className="nav-items">
          {textLinks.map(({ label, href }) => (
            <li key={href}>
              <Link aria-current={currentPath === href ? 'page' : undefined} className={`link ${isActive(href) ? 'active' : ''}`} href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="menu-footer">
          <div className="socials">
            {iconLinks.map(({ href, icon, label }) => (
              <a key={href} href={href} className="social">
                <span className="sr-only">{label}</span>
                <Icon icon={icon} />
              </a>
            ))}
          </div>

          <div className="theme-toggle">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
