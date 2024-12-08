import { useEffect, useState } from "react";

export function ToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
    <div className="relative w-24 mx-auto my-4" onClick={toggleTheme}>
      <button
        type="button"
        className="absolute w-12 h-12 bg-white bg-center bg-no-repeat bg-moon-stars dark:bg-sun border-0 rounded-full top-1/2 left-0 z-[1] transform -translate-y-1/2 hover:outline hover:outline-4 hover:outline-[var(--highlight-color)] transition-transform duration-200 animate-slide-in dark:animate-slide-back"
      />

      <span
        className="block w-24 h-10 bg-[var(--surface-color)] border border-[var(--stroke-color)] rounded-full backdrop-blur-[4px] webkit-backdrop-blur-[4px]"
      />
    </div>
  )
}