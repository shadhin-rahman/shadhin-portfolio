"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <section id="experience" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-24">
            <div className="mb-16">
                <span className="text-sm font-mono font-bold uppercase tracking-[0.4em] text-brand-700 mb-6 block">
                    Professional Story
                </span>
                <h3 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] logo-text">
                    Experience{" "}
                    <span className="text-brand-700">that speaks.</span>
                </h3>
            </div>

            <div className="relative border-t border-black/10">
                {portfolioData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.7 }}
                        className="group relative grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 md:gap-10 py-12 border-b border-black/10 px-4 -mx-4 rounded-2xl hover:bg-white/80 transition-colors duration-500"
                    >
                        {/* Period */}
                        <div className="flex items-center gap-3 md:pt-1.5">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-800 text-xs md:text-sm font-bold font-mono tracking-tight">
                                <Briefcase className="w-3.5 h-3.5" />
                                {exp.period}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="space-y-3">
                            <div className="flex flex-col md:flex-row md:items-end md:gap-4">
                                <h4 className="text-2xl md:text-3xl font-bold group-hover:translate-x-2 transition-transform duration-500">
                                    {exp.role}
                                </h4>
                                <span className="text-[#1d1b16]/50 font-semibold italic pb-1">
                                    @ {exp.company}
                                </span>
                            </div>
                            <p className="text-[#1d1b16]/60 leading-relaxed text-lg max-w-3xl">
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