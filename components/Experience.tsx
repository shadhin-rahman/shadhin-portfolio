"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="mb-16 md:mb-20">
                <span className="text-sm font-mono font-bold uppercase tracking-[0.4em] text-brand-700 dark:text-brand-400 mb-6 block">
                    Professional Story
                </span>
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] logo-text">
                    Experience{" "}
                    <span className="text-brand-700 dark:text-brand-400">that speaks.</span>
                </h3>
            </div>

            <div className="relative border-t border-black/10 dark:border-white/10">
                {portfolioData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.7 }}
                        className="group relative grid grid-cols-1 md:grid-cols-[240px_1fr] gap-5 md:gap-10 py-14 border-b border-black/10 dark:border-white/10 px-4 -mx-4 rounded-2xl hover:bg-white/80 dark:hover:bg-white/[0.02] transition-colors duration-500"
                    >
                        {/* Period */}
                        <div className="flex items-center md:pt-1.5">
                            <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-brand-100 dark:bg-brand-400/15 text-brand-800 dark:text-brand-300 text-sm md:text-base font-bold font-mono tracking-tight">
                                <Briefcase className="w-4 h-4" />
                                {exp.period}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row md:items-end md:gap-4">
                                <h4 className="text-2xl md:text-3xl font-bold leading-snug group-hover:translate-x-2 transition-transform duration-500 text-[#1d1b16] dark:text-[#f5f2ec]">
                                    {exp.role}
                                </h4>
                                <span className="text-[#1d1b16]/50 dark:text-white/50 font-semibold italic pb-1">
                                    @ {exp.company}
                                </span>
                            </div>
                            <p className="text-[#1d1b16]/60 dark:text-white/60 leading-[1.85] text-lg max-w-3xl">
                                {exp.description}
                            </p>
                        </div>

                        {/* Hover Accent */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top rounded-full" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}