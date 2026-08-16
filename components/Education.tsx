"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="text-center mb-16 md:mb-20">
                <span className="text-sm font-mono font-bold uppercase tracking-[0.4em] text-brand-700 dark:text-brand-400 mb-6 block">
                    Qualifications
                </span>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2] logo-text">
                    Education & <span className="text-brand-700 dark:text-brand-400">training.</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Academic/Education Col */}
                <div className="bg-white dark:bg-white/[0.03] rounded-[2.5rem] border border-black/10 dark:border-white/10 p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-brand-100 dark:bg-brand-400/15 rounded-2xl text-brand-700 dark:text-brand-400">
                            <GraduationCap className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold logo-text text-[#1d1b16] dark:text-[#f5f2ec]">Education</h3>
                    </div>

                    <div className="space-y-10 border-l-2 border-black/10 dark:border-white/10 pl-8 ml-2">
                        {portfolioData.education?.academic.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="relative"
                            >
                                <div className="absolute -left-[38px] top-1.5 w-3.5 h-3.5 rounded-full bg-brand-400 border-[3px] border-white dark:border-[#141210] shadow" />
                                <h4 className="text-xl font-bold text-[#1d1b16] dark:text-[#f5f2ec] mb-2 leading-snug">{edu.degree}</h4>
                                <p className="text-[#1d1b16]/60 dark:text-white/60 text-base">{edu.institution}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Training Col */}
                <div className="bg-white dark:bg-white/[0.03] rounded-[2.5rem] border border-black/10 dark:border-white/10 p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-brand-100 dark:bg-brand-400/15 rounded-2xl text-brand-700 dark:text-brand-400">
                            <Award className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold logo-text text-[#1d1b16] dark:text-[#f5f2ec]">Professional Training</h3>
                    </div>

                    <div className="space-y-10 border-l-2 border-black/10 dark:border-white/10 pl-8 ml-2">
                        {portfolioData.education?.training.map((train, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="relative"
                            >
                                <div className="absolute -left-[38px] top-1.5 w-3.5 h-3.5 rounded-full bg-brand-400 border-[3px] border-white dark:border-[#141210] shadow" />
                                <h4 className="text-xl font-bold text-[#1d1b16] dark:text-[#f5f2ec] mb-2 leading-snug">{train.course}</h4>
                                <p className="text-[#1d1b16]/60 dark:text-white/60 text-base">{train.institution}</p>
                                {train.year && (
                                    <span className="inline-block mt-3 text-xs font-bold text-brand-800 dark:text-brand-300 font-mono bg-brand-100 dark:bg-brand-400/15 px-3 py-1 rounded-full">
                                        {train.year}
                                    </span>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}