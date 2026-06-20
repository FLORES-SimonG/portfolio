"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "./I18nProvider";
import type { iconPaths } from "./IconPaths";
import { Language } from "@/locales/interface";

interface NavProps {
  language: Language;
}

const iconLinks: {
  label: string;
  href: string;
  icon: keyof typeof iconPaths;
}[] = [
  {
    label: "GitHub",
    href: "https://github.com/FLORES-SimonG",
    icon: "github-logo",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/simongf94/",
    icon: "linkedin-logo",
  },
];
export default function Nav({ language }: NavProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const textLinks = (t: (k: string) => string) => [
    { label: t("nav.home"), href: `/${language}` },
    { label: t("nav.experience"), href: `/${language}/experience/` },
    { label: t("nav.about"), href: `/${language}/about/` },
  ];

  useEffect(() => {
    const mediaQueries = window.matchMedia("(min-width: 50em)");
    const handleViewports = (e: MediaQueryList | MediaQueryListEvent) => {
      setExpanded(e.matches);
    };

    handleViewports(mediaQueries);
    mediaQueries.addEventListener("change", handleViewports);
    return () => mediaQueries.removeEventListener("change", handleViewports);
  }, []);

  useEffect(() => {
    // mark hydrated
    setIsMounted(true);
  }, []);
  const currentPath = pathname ?? "/";
  const isActive = (href: string) =>
    currentPath === href || (href !== "/" && currentPath.startsWith(href));
  const t = useTranslations();

  return (
    <nav>
      <div className="menu-header">
        <div className="bg-red-400 p-5">
          <Link href="/" className="site-title">
            <Icon
              icon="terminal-window"
              color="var(--accent-regular)"
              size="1.6em"
              gradient
            />
            Simón G. Flores
          </Link>
          <LanguageSwitcher current={language} />
        </div>
        <button
          className="menu-button"
          aria-expanded={expanded}
          onClick={() => setExpanded((prev) => !prev)}
        >
          <span className="sr-only">Menu</span>
          <Icon icon="list" />
        </button>
      </div>
      <div
        id="menu-content"
        className={expanded ? "menu-content" : "menu-content hidden"}
      >
        <ul className="nav-items" suppressHydrationWarning>
          {textLinks(t).map(({ label, href }) => {
            const ariaCurrent = isMounted
              ? currentPath === href
                ? "page"
                : undefined
              : undefined;
            const classes = isMounted
              ? `link ${isActive(href) ? "active" : ""}`
              : "link";
            return (
              <li key={href}>
                <Link
                  aria-current={ariaCurrent}
                  className={classes}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            );
          })}
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
