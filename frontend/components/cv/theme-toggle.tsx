"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("pf-theme");
    const initial: Theme = saved === "light" ? "light" : "dark";
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("pf-theme", next);
  };

  return (
    <button className="theme-toggle" id="themeToggle" onClick={toggle} aria-label="Toggle tema">
      <i className={`fa-solid ${theme === "dark" ? "fa-moon" : "fa-sun"} ti`} id="themeIcon" />
      <span className="tl" id="themeLabel">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
    </button>
  );
}
