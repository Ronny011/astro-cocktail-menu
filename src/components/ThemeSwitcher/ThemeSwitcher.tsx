import { useState, useEffect } from "react";
import { themes, navStyles, type ThemeId } from "./ThemeSwitcher.styles";

export const ThemeSwitcher = () => {
  const [activeTheme, setActiveTheme] = useState<ThemeId>("classic-dark");

  useEffect(() => {
    const saved = localStorage.getItem("cocktail-theme") as ThemeId | null;
    if (saved && themes.some((theme) => theme.id === saved)) {
      setActiveTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      document.documentElement.setAttribute("data-theme", "classic-dark");
    }
  }, []);

  const handleThemeChange = (themeId: ThemeId) => {
    setActiveTheme(themeId);
    localStorage.setItem("cocktail-theme", themeId);
    document.documentElement.setAttribute("data-theme", themeId);
  };

  const style = navStyles[activeTheme];

  return (
    <nav
      className={`${style.nav} sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="mx-auto max-w-lg px-4">
        <div className="flex gap-1 overflow-x-auto py-2 no-scrollbar">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => handleThemeChange(theme.id)}
              className={`shrink-0 cursor-pointer rounded-md px-3 py-2 text-xs font-medium transition-all ${
                activeTheme === theme.id ? style.activeButton : style.button
              }`}
            >
              {theme.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
