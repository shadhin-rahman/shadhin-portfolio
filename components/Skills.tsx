"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-32 max-w-5xl mx-auto py-20">
            <div className="mb-24">
                <h2 className="text-xs uppercase font-mono tracking-[0.4em] text-emerald-400 font-bold mb-6">Core Capabilities</h2>
                <h3 className="text-6xl md:text-7xl font-bold tracking-tight">Expertise</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {Object.entries(portfolioData.skills).map(([category, items], idx) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.8 }}
                        className="space-y-10"
                    >
                        <h4 className="text-sm uppercase font-mono tracking-[0.3em] text-white/80 border-b border-white/10 pb-6 font-bold">
                            {category}
                        </h4>
                        <div className="flex flex-wrap gap-4">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-5 py-2.5 text-sm font-light text-white/90 border border-white/10 rounded-full hover:border-emerald-500/30 hover:text-emerald-400 hover:bg-emerald-500/[0.02] transition-all duration-500 bg-white/5"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
