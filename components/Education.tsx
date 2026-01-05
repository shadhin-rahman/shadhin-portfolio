"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
    return (
        <section id="education" className="scroll-mt-32 max-w-5xl mx-auto px-6 py-20">
            <h2 className="text-xs uppercase font-mono tracking-[0.4em] text-emerald-400 font-bold mb-16 text-center">Qualifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">

                {/* Academic/Education Col */}
                <div>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-white/5 rounded-xl text-emerald-400">
                            <GraduationCap className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold">Education</h3>
                    </div>

                    <div className="space-y-12 border-l border-white/10 pl-8 ml-4">
                        {portfolioData.education?.academic.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-900 border-2 border-emerald-500/50" />
                                <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                                <p className="text-white/50 text-base">{edu.institution}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Training Col */}
                <div>
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-white/5 rounded-xl text-emerald-400">
                            <Award className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-bold">Professional Training</h3>
                    </div>

                    <div className="space-y-12 border-l border-white/10 pl-8 ml-4">
                        {portfolioData.education?.training.map((train, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-900 border-2 border-emerald-500/50" />
                                <h4 className="text-xl font-bold text-white mb-2">{train.course}</h4>
                                <p className="text-white/50 text-base">{train.institution}</p>
                                {train.year && <span className="text-xs text-emerald-500 font-mono mt-2 block">{train.year}</span>}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
