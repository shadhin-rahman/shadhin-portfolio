"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";

export default function Experience() {
    return (
        <section id="experience" className="scroll-mt-32 max-w-5xl mx-auto px-6">
            <div className="mb-24">
                <h2 className="text-xs uppercase font-mono tracking-[0.4em] text-emerald-400 font-bold mb-6">Professional Story</h2>
                <h3 className="text-6xl md:text-8xl font-bold tracking-tight">Experience</h3>
            </div>

            <div className="relative border-t border-white/10">
                {portfolioData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        className="group relative grid grid-cols-1 md:grid-cols-[200px_1fr] py-12 border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-500 px-4 -mx-4 rounded-xl"
                    >
                        {/* Period */}
                        <div className="text-white/40 group-hover:text-emerald-400 transition-colors duration-500 font-mono text-sm tracking-tighter pt-1 font-bold">
                            {exp.period}
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row md:items-end md:gap-4">
                                <h4 className="text-3xl font-bold group-hover:translate-x-2 transition-transform duration-500 font-syne">
                                    {exp.role}
                                </h4>
                                <span className="text-white/40 font-medium italic pb-1">
                                    at {exp.company}
                                </span>
                            </div>
                            <p className="text-white/50 leading-relaxed font-light text-xl max-w-2xl group-hover:text-white/70 transition-colors duration-500">
                                {exp.description}
                            </p>
                        </div>

                        {/* Hover Accent */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
