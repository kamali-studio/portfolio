"use client";

import { Globe, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar({
  lang,
  toggleLang,
}: {
  lang: "en" | "fa";
  toggleLang: () => void;
}) {
  const isFa = lang === "fa";
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${scrolled ? "bg-white/90 dark:bg-[#050505]/90 backdrop-blur-md border-b border-black/10 dark:border-white/5 py-4 shadow-lg" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center">
        <div className="text-2xl font-black tracking-widest text-zinc-900 dark:text-white transition-colors duration-500">
          <span className="text-cyan-600 dark:text-cyan-500">M</span>K
        </div>

        <div className="hidden md:flex items-center gap-10">
          <a
            href="#about"
            className="text-xs font-bold tracking-[0.2em] text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-105 transition-all uppercase cursor-none"
          >
            {isFa ? "معرفی" : "About"}
          </a>
          <a
            href="#works"
            className="text-xs font-bold tracking-[0.2em] text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-105 transition-all uppercase cursor-none"
          >
            {isFa ? "پروژه‌ها" : "Works"}
          </a>
          <a
            href="#contact"
            className="text-xs font-bold tracking-[0.2em] text-zinc-500 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-105 transition-all uppercase cursor-none"
          >
            {isFa ? "تماس با من" : "Contact"}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 w-10 h-10 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all group cursor-none"
            title={isFa ? "تغییر تم" : "Toggle Theme"}
          >
            {theme === "dark" ? (
              <Sun
                size={16}
                className="text-cyan-500 group-hover:animate-spin"
              />
            ) : (
              <Moon
                size={16}
                className="text-cyan-600 group-hover:animate-bounce"
              />
            )}
          </button>
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-5 py-2 h-10 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-all group cursor-none"
          >
            <Globe
              size={16}
              className="text-cyan-600 dark:text-cyan-500 group-hover:animate-spin"
            />
            <span className="text-xs font-bold tracking-widest text-zinc-800 dark:text-zinc-100">
              {isFa ? "EN" : "فا"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
