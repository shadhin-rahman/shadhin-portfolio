import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { portfolioData } from "@/data/content";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
    title: "Portfolio — Shadhin Rahman",
    description: "Explore 14+ years of professional image editing and creative design work by Shadhin Rahman.",
};

const showcase = [
    "High-end Photo Retouching",
    "Clipping Path & Masking",
    "Ghost Mannequin",
    "Background Removal",
    "Color Correction",
    "Creative Image Manipulation",
];

export default function PortfolioPage() {
    return (
        <main id="top" className="min-h-screen mesh-gradient transition-colors duration-500">
            <PageHeader
                eyebrow="Portfolio"
                title={
                    <>
                        Dive into my <span className="text-brand-700 dark:text-brand-400">visual universe.</span>
                    </>
                }
                description="I believe in showing, not just telling. Explore a comprehensive body of work spanning 14 years of creative professional projects and design expertise."
            />

            <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* Showcase list */}
                    <div className="bg-white dark:bg-white/[0.03] rounded-[2.5rem] border border-black/10 dark:border-white/10 p-8 md:p-12">
                        <span className="text-sm font-mono font-bold uppercase tracking-[0.4em] text-brand-700 dark:text-brand-400 block mb-8">
                            What You'll Find
                        </span>
                        <ul className="space-y-5">
                            {showcase.map((item, i) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-4 text-lg md:text-xl font-medium text-[#1d1b16]/80 dark:text-white/80 border-b border-black/5 dark:border-white/5 pb-5"
                                >
                                    <span className="font-mono text-sm font-bold text-brand-700 dark:text-brand-400">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Behance CTA panel */}
                    <div className="bg-[#1d1b16] rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group border border-white/5">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-400/20 rounded-full blur-[100px] group-hover:bg-brand-400/30 transition-all duration-1000" />
                        <div className="relative z-10">
                            <span className="inline-block text-xs font-mono tracking-[0.5em] text-brand-400 uppercase font-bold bg-white/5 border border-white/10 px-5 py-2 rounded-full">
                                Full Portfolio
                            </span>
                            <h3 className="mt-8 text-3xl md:text-4xl font-bold tracking-tight leading-[1.2] text-white logo-text">
                                Every project, <span className="text-brand-400">every detail.</span>
                            </h3>
                            <p className="mt-6 text-white/60 text-lg font-light leading-[1.85]">
                                Browse 14 years of professional work on Behance — retouching, clipping paths,
                                ghost mannequins, and creative design projects delivered for clients worldwide.
                            </p>
                        </div>
                        <a
                            href={portfolioData.contact.behance}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative z-10 mt-10 inline-flex items-center justify-center gap-4 px-8 py-5 rounded-full bg-brand-400 text-black font-bold text-lg hover:bg-brand-500 transition-all duration-300 shadow-2xl shadow-brand-400/40 group/btn"
                        >
                            Explore my work on Behance
                            <ExternalLink className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}