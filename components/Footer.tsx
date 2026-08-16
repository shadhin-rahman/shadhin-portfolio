import Link from "next/link";
import { portfolioData } from "@/data/content";
import { ArrowUp } from "lucide-react";

const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
];

export default function Footer() {
    return (
        <footer className="pb-10 pt-20 md:pt-24 border-t border-black/10 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="max-w-xl">
                        <span className="logo-text text-3xl text-[#1d1b16] dark:text-[#f5f2ec]">Shadhin<span className="text-brand-600 dark:text-brand-400">.</span></span>
                        <p className="mt-4 text-[#1d1b16]/60 dark:text-white/60 font-light leading-[1.8]">{portfolioData.footerBio}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-16 gap-y-3">
                        {sections.map((s) => (
                            <Link
                                key={s.id}
                                href={`/${s.id === "home" ? "" : s.id}`}
                                className="text-sm font-semibold text-[#1d1b16]/70 dark:text-white/70 hover:text-brand-700 dark:hover:text-brand-400 transition-colors"
                            >
                                {s.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-black/10 dark:border-white/10 text-[#1d1b16]/50 dark:text-white/50 font-mono text-xs uppercase tracking-[0.25em]">
                    <div>© {new Date().getFullYear()} · {portfolioData.name}</div>
                    <a
                        href="#top"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1d1b16] dark:bg-[#1d1b16] text-white font-bold hover:bg-brand-600 hover:text-black transition-colors"
                    >
                        Back to top
                        <ArrowUp className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </footer>
    );
}