"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof document === "undefined") return;
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");
    if (nextIsDark) {
      root.classList.add("dark");
      window.localStorage.setItem("theme", "dark");
      window.dispatchEvent(new CustomEvent("hzbrand:theme", { detail: "dark" }));
    } else {
      root.classList.remove("dark");
      window.localStorage.setItem("theme", "light");
      window.dispatchEvent(new CustomEvent("hzbrand:theme", { detail: "light" }));
    }
    setIsDark(nextIsDark);
  }

  return (
    <button
      onClick={toggle}
      className="inline-flex h-8 items-center gap-2 rounded-full border border-gray-700/50 px-3 text-sm text-gray-300 hover:bg-gray-800/60 dark:border-gray-300/30 dark:text-gray-100 dark:hover:bg-gray-200/10"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {isDark ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
          <path d="M21.64 13a1 1 0 0 0-1.05-.14A8 8 0 1 1 11.1 3.41a1 1 0 0 0-.14-1.05 1 1 0 0 0-1.09-.31A10 10 0 1 0 22 14.09a1 1 0 0 0-.36-1.09Z"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
          <path d="M6.995 12c0 2.761 2.246 5.005 5.005 5.005s5.005-2.244 5.005-5.005S14.761 6.995 12 6.995 6.995 9.239 6.995 12zM12 2v2m0 16v2m10-10h-2M4 12H2m15.536 6.364l-1.414-1.414M7.879 7.879L6.464 6.464m11.314 0-1.415 1.415M7.878 16.121l-1.414 1.414"/>
        </svg>
      )}
      <span className="hidden sm:inline">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}

