"use client";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = localStorage.getItem("theme");
        setIsDark(saved === "dark");
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle("dark", next);
        localStorage.setItem("theme", next ? "dark" : "light");
    };

    if (!mounted) {
        return (
            <button
                aria-label="Toggle theme"
                className="inline-flex items-center justify-center gap-2.5 px-5 h-12 rounded-full bg-brand-400 text-black font-black hover:bg-brand-500 transition-colors shadow-lg shadow-brand-400/30"
            >
                <Moon className="w-5 h-5" />
                <span className="hidden md:inline uppercase text-xs tracking-[0.2em]">Dark</span>
            </button>
        );
    }

    return (
        <button
            onClick={toggle}
            aria-label="Toggle theme"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex items-center justify-center gap-2.5 px-5 h-12 rounded-full bg-brand-400 text-black font-black hover:bg-brand-500 transition-colors shadow-lg shadow-brand-400/30 group"
        >
            {isDark ? <Sun className="w-5 h-5 group-hover:rotate-45 transition-transform" /> : <Moon className="w-5 h-5" />}
            <span className="hidden md:inline uppercase text-xs tracking-[0.2em]">
                {isDark ? "Light" : "Dark"}
            </span>
        </button>
    );
}