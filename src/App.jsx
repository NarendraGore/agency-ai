import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const App = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
};

export default App;
