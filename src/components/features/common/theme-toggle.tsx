"use client";

import { useEffect, useState } from "react";

import Icon from "./Icon";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const hasDark = document.documentElement.classList.contains("theme-dark");
    setIsDark(hasDark);
  }, []);

  const setTheme = (dark: boolean) => {
    document.documentElement.classList[dark ? "add" : "remove"]("theme-dark");
    localStorage.setItem("theme", dark ? "dark" : "light");
    setIsDark(dark);
  };

  return (
    <button
      type="button"
      className="theme-toggle-button"
      aria-pressed={isDark}
      onClick={() => setTheme(!isDark)}
    >
      <span className="sr-only">Dark theme</span>
      <span className="icon light">
        <Icon icon="sun" />
      </span>
      <span className="icon dark">
        <Icon icon="moon-stars" />
      </span>
    </button>
  );
}
