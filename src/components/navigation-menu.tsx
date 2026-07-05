"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";;
import type { iconPaths } from "./IconPaths";
import { Language } from "@/messages/interface";
import { useTranslations } from "next-intl";

interface NavProps {
  language: Language;
}

function normalize(path: string) {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path;
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

export default function NavigationMenu({ language }: NavProps) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  const t = useTranslations();

  const textLinks = [
    { label: t("nav.home"), href: `/${language}` },
    { label: t("nav.experience"), href: `/${language}/experience` },
    { label: t("nav.about"), href: `/${language}/about` },
    { label: t("nav.certificates"), href: `/${language}/certificates` },
  ];

  useEffect(() => {
    const mediaQueries = window.matchMedia("(min-width: 50em)");

    const handleViewports = (e: MediaQueryList | MediaQueryListEvent) => {
      setExpanded(e.matches);
    };

    handleViewports(mediaQueries);

    mediaQueries.addEventListener("change", handleViewports);

    return () => {
      mediaQueries.removeEventListener("change", handleViewports);
    };
  }, []);

  const currentPath = pathname ?? "/";


  const isActive = (href: string) => {
    const normalizedHref = normalize(href);
    const normalizedPath = normalize(currentPath);

    // Home
    if (normalizedHref === `/${language}`) {
      return normalizedPath === normalizedHref;
    }

    // Secciones y subsecciones
    return (
      normalizedPath === normalizedHref ||
      normalizedPath.startsWith(`${normalizedHref}/`)
    );
  };

  return (
    <nav>
      <div className="menu-header max-lg:items-center">
        <div className="p-5 flex flex-col max-lg:items-center">
          <Link href="/" className="site-title">
            <Icon
              icon="terminal-window"
              color="bg-gradient-to-r from-blue-500 to-purple-500"
              size="1.6em"
              gradient
            />
            Simón G. Flores
          </Link>

          <LanguageSwitcher current={language} />
        </div>

        <button
          type="button"
          className="menu-button h-fit"
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
        <ul className="nav-items">
          {textLinks.map(({ label, href }) => (
            <li key={href} className="flex items-center">
              <Link
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={`link ${isActive(href) ? "active" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="menu-footer">
          <div className="socials">
            {iconLinks.map(({ href, icon, label }) => (
              <a
                key={href}
                href={href}
                className="social"
                target="_blank"
                rel="noopener noreferrer"
              >
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
