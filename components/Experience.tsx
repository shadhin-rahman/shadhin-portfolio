"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";

export default function Experience() {
    return (
        <section id="experience" className="scroll-mt-32 max-w-4xl mx-auto">
            <div className="mb-20">
                <h2 className="text-xs uppercase font-mono tracking-[0.4em] text-emerald-400 font-bold mb-6">Professional Story</h2>
                <h3 className="text-6xl md:text-7xl font-bold tracking-tight">Experience</h3>
            </div>

            <div className="space-y-24">
                {portfolioData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 group"
                    >
                        <div className="text-white/60 text-sm font-mono pt-2 font-bold tracking-wider">
                            {exp.period}
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <h4 className="text-2xl font-bold group-hover:text-emerald-400 transition-colors duration-500">
                                    {exp.role}
                                </h4>
                                <div className="h-px flex-1 bg-white/5 group-hover:bg-emerald-500/20 transition-all duration-500" />
                            </div>
                            <p className="text-white/60 font-medium tracking-wide italic">
                                {exp.company}
                            </p>
                            <p className="text-white/60 leading-relaxed font-light text-lg">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
