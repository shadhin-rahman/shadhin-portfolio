import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import { portfolioData } from "@/data/content";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";

export default function Home() {
    return (
        <main id="top" className="min-h-screen mesh-gradient transition-colors duration-500">
            <Hero />
            <Ticker />

            <div className="max-w-7xl mx-auto px-0 sm:px-6">
                {/* Stats */}
                <Stats />

                {/* About Preview */}
                <section id="about" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-24 md:py-32">
                    <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
                        <div className="md:w-1/3">
                            <span className="text-sm font-mono font-bold uppercase tracking-[0.4em] text-brand-700 dark:text-brand-400 mb-6 block">
                                About Me
                            </span>
                            <h3 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.2] mb-8 logo-text text-[#1d1b16] dark:text-[#f5f2ec]">
                                A designer who <span className="text-brand-700 dark:text-brand-400">leads.</span>
                            </h3>
                            <div className="w-16 h-1.5 rounded-full bg-brand-400 mb-8" />
                            <a
                                href="/about"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1d1b16] dark:bg-[#1d1b16] text-white font-bold hover:bg-brand-600 hover:text-black transition-colors group"
                            >
                                More About Me
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                        <div className="md:w-2/3 space-y-8">
                            {portfolioData.about.content.slice(0, 2).map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="text-lg md:text-2xl text-[#1d1b16]/70 dark:text-white/70 font-light leading-[1.9]"
                                >
                                    {paragraph.split("**").map((part, i) =>
                                        i % 2 === 1 ? (
                                            <span key={i} className="text-[#1d1b16] dark:text-white font-semibold">
                                                {part}
                                            </span>
                                        ) : (
                                            part
                                        )
                                    )}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Preview */}
                <Services items={4} showCta />
            </div>

            {/* Portfolio CTA */}
            <section id="portfolio" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-24 md:py-32">
                <div className="bg-[#1d1b16] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl shadow-black/20 border border-white/5">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-400/15 rounded-full blur-[120px] group-hover:bg-brand-400/25 transition-all duration-1000" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-400/10 rounded-full blur-[100px]" />

                    <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                        <span className="inline-block text-xs font-mono tracking-[0.5em] text-brand-400 uppercase font-bold bg-white/5 border border-white/10 px-5 py-2 rounded-full">
                            Portfolio
                        </span>
                        <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-white logo-text">
                            Dive into my <span className="text-brand-400">visual universe.</span>
                        </h3>
                        <p className="text-white/60 text-lg md:text-xl font-light leading-[1.85] max-w-2xl mx-auto">
                            I believe in showing, not just telling. Click below to explore my comprehensive body of work,
                            spanning 14 years of creative professional projects and design expertise.
                        </p>
                        <div className="pt-8 flex flex-wrap justify-center gap-5">
                            <a
                                href="/portfolio"
                                className="inline-flex items-center gap-4 px-9 py-5 rounded-full bg-white text-black font-bold text-lg hover:bg-brand-400 transition-all duration-300 group"
                            >
                                Explore Portfolio
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={portfolioData.contact.behance}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 px-9 py-5 rounded-full bg-brand-400 text-black font-bold text-lg hover:bg-brand-500 transition-all duration-300 shadow-2xl shadow-brand-400/40 group"
                            >
                                View on Behance
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact CTA strip */}
            <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-32">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-[2.5rem] border border-black/10 dark:border-white/10 bg-white dark:bg-white/[0.03] p-10 md:p-14">
                    <div className="text-center md:text-left">
                        <span className="inline-flex items-center gap-3 text-brand-700 dark:text-brand-400 font-mono text-xs uppercase tracking-[0.4em] font-bold mb-4">
                            <Mail className="w-5 h-5" />
                            Ready to collaborate?
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.2] logo-text text-[#1d1b16] dark:text-[#f5f2ec]">
                            Have a project in mind? Let's talk.
                        </h3>
                    </div>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 px-9 py-5 rounded-full bg-brand-400 text-black font-bold text-lg hover:bg-brand-500 transition-all duration-300 shadow-xl shadow-brand-400/30 group shrink-0"
                    >
                        Contact Me
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </div>
            </section>
        </main>
    );
}