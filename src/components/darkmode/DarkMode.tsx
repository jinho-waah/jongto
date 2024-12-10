import { useState, useEffect } from "react";

const DarkMode = () => {
  const initialDarkMode = () => localStorage.getItem("theme") === "dark";
  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    const htmlElement = document.documentElement;

    if (isDarkMode) {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button
      className="fixed bottom-4 right-4 w-12 h-12 bg-blue-500 text-white rounded-full dark:bg-yellow-500 dark:text-gray-900 shadow-lg flex items-center justify-center hover:opacity-80 transition-opacity duration-300"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <span className="text-lg">☀️</span>
      ) : (
        <span className="text-lg">🌙</span>
      )}
    </button>
  );
};

export default DarkMode;
