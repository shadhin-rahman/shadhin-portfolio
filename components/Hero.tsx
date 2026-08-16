"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { ArrowRight, ArrowUpRight, Award } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center pt-36 pb-20 px-6 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="brand-halo top-[12%] left-[-8%] w-[480px] h-[480px] opacity-60" />
            <div className="brand-halo bottom-[8%] right-[-6%] w-[420px] h-[420px] opacity-40" />

            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl z-10 gap-16 md:gap-20">

                {/* Left Column - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full md:w-[55%] text-left order-2 md:order-1"
                >
                    <motion.div
                        initial={{ y: 24, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/10 bg-white shadow-sm mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                        <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#1d1b16]/70">
                            {portfolioData.hero.subHeading}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.45, duration: 0.9 }}
                        className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.04] mb-8"
                    >
                        Hi, I'm <span className="hero-line">Shadhin</span>
                        <br />
                        Designing with{" "}
                        <span className="text-brand-700">pixel-perfect</span> precision.
                    </motion.h1>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.9 }}
                        className="text-lg md:text-2xl text-[#1d1b16]/60 mb-12 leading-relaxed max-w-2xl"
                    >
                        {portfolioData.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.75, duration: 0.9 }}
                        className="flex flex-col sm:flex-row gap-5 items-start"
                    >
                        <a
                            href="#portfolio"
                            className="inline-flex items-center gap-3 px-9 py-5 rounded-full bg-brand-400 text-black font-bold text-lg hover:bg-brand-500 transition-all duration-300 shadow-xl shadow-brand-400/30 group"
                        >
                            View My Work
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-3 px-9 py-5 rounded-full border border-black/15 bg-white text-[#1d1b16] font-bold text-lg hover:border-brand-600 hover:text-brand-700 transition-all duration-300 group"
                        >
                            Let's Talk
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Column - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="w-full md:w-[45%] relative order-1 md:order-2"
                >
                    <div className="relative w-full max-w-md mx-auto group">
                        {/* Glow behind portrait */}
                        <div className="absolute inset-6 bg-brand-400/40 blur-[90px] rounded-full -z-10" />

                        <div className="relative rounded-[3rem] bg-white border border-black/10 shadow-2xl shadow-black/10 overflow-hidden">
                            <img
                                src="/Shadhin.png"
                                alt={portfolioData.name}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>

                        {/* Floating badge - experience */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute -top-5 -left-4 md:-left-8 flex items-center gap-3 px-5 py-4 bg-[#1d1b16] text-white rounded-2xl shadow-xl z-20"
                        >
                            <Award className="w-6 h-6 text-brand-400" />
                            <div>
                                <div className="text-lg font-black leading-none">14+ yrs</div>
                                <div className="text-[11px] text-white/60 font-medium mt-1">Experience</div>
                            </div>
                        </motion.div>

                        {/* Floating badge - approach */}
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                            className="absolute -bottom-5 -right-4 md:-right-8 px-5 py-4 bg-white rounded-2xl border border-black/10 shadow-xl z-20"
                        >
                            <div className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1d1b16]/50">Quality</div>
                            <div className="text-lg font-black text-brand-700 leading-tight mt-0.5">Pixel Perfect</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}