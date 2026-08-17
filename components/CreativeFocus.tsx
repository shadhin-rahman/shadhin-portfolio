"use client";
import { motion } from "framer-motion";

export default function CreativeFocus() {
    return (
        <section className="scroll-mt-32 max-w-7xl mx-auto px-6 pb-24 md:pb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
                <div className="space-y-8 order-2 md:order-1">
                    <span className="text-sm font-mono font-bold uppercase tracking-[0.4em] text-brand-700 dark:text-brand-300 block">
                        Creative Focus
                    </span>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] logo-text text-[#1d1b16] dark:text-[#f5f2ec]">
                        Design with <span className="text-brand-700 dark:text-brand-300 italic">purpose.</span>
                    </h3>
                    <p className="text-[#1d1b16]/60 dark:text-white/60 text-xl font-light leading-[1.85] max-w-xl">
                        My approach combines 14 years of professional technical expertise with a creative eye for
                        modern aesthetics. I focus on delivering results that aren't just beautiful, but
                        strategically effective.
                    </p>
                    <div className="flex items-center gap-4 pt-2">
                        <div className="h-1 w-14 rounded-full bg-brand-300" />
                        <p className="text-[#1d1b16]/40 dark:text-white/40 font-mono text-sm uppercase tracking-widest font-semibold">
                            Innovation · Excellence · Precision
                        </p>
                    </div>
                </div>

                <div className="relative order-1 md:order-2 px-4 md:px-0 mt-8 md:mt-0">
                    <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden bg-white dark:bg-[#141210] border border-black/10 dark:border-white/10 shadow-2xl shadow-black/10 scale-95 hover:scale-100 transition-transform duration-700 hover:border-brand-500/40 group z-10">
                        <img src="/creative_life_1.jpg" alt="Creative work" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50" />
                    </div>

                    <div className="absolute -bottom-10 -left-6 md:-left-10 w-2/3 aspect-[4/3] rounded-[2.5rem] overflow-hidden border-8 border-[#faf9f7] dark:border-[#0b0a09] bg-white shadow-2xl hidden md:block hover:scale-105 transition-transform duration-500 z-20">
                        <img src="/creative_life_2.jpg" alt="Creative focus" className="w-full h-full object-cover" />
                    </div>

                    <div className="absolute -top-12 -right-4 md:-right-8 w-1/2 aspect-square rounded-[2rem] overflow-hidden border-8 border-[#faf9f7] dark:border-[#0b0a09] bg-white shadow-2xl hidden md:block hover:scale-110 transition-transform duration-500 z-30">
                        <img src="/profile_main.jpg" alt="Profile Detail" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
}