"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { portfolioData } from "@/data/content";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center pt-36 pb-24 px-6 relative overflow-hidden">
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
                        className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm mb-10"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse" />
                        <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-[#1d1b16]/70 dark:text-white/70">
                            {portfolioData.hero.subHeading}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.45, duration: 0.9 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.12] mb-10"
                    >
                        Hi, I'm <span className="hero-line">Shadhin</span>
                        <br />
                        Designing with{" "}
                        <span className="text-brand-700 dark:text-brand-400">pixel-perfect</span> precision.
                    </motion.h1>

                    <motion.p
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.9 }}
                        className="text-lg md:text-2xl text-[#1d1b16]/60 dark:text-white/60 mb-14 leading-[1.85] max-w-2xl"
                    >
                        {portfolioData.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.75, duration: 0.9 }}
                        className="flex flex-col sm:flex-row gap-5 items-start"
                    >
                        <Link
                            href="/portfolio"
                            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-brand-400 text-black font-bold text-lg hover:bg-brand-500 transition-all duration-300 shadow-xl shadow-brand-400/30 group"
                        >
                            View My Work
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
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
                        <div className="absolute inset-6 bg-brand-400/40 dark:bg-brand-400/25 blur-[90px] rounded-full -z-10" />

                        <div className="relative rounded-[3rem] bg-white dark:bg-[#141210] border border-black/10 dark:border-white/10 shadow-2xl shadow-black/10 overflow-hidden">
                            <img
                                src="/Shadhin.png"
                                alt={portfolioData.name}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}