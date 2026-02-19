"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeChange = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="px-2 py-2 rounded-lg dark:border-gray-600 bg-background dark:bg-slate-800 transition-all duration-300"
    >
      {currentTheme === "dark" ? "🌙" : "☀️"}
    </button>
  );
};
export default ThemeChange;
