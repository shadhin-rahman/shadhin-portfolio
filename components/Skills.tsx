"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";

export default function Skills() {
    return (
        <section id="skills" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-24">
            <div className="mb-16">
                <span className="text-sm font-mono font-bold uppercase tracking-[0.4em] text-brand-700 mb-6 block">
                    Core Capabilities
                </span>
                <h3 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] logo-text">
                    My <span className="text-brand-700">toolkit.</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(portfolioData.skills).map(([category, items], idx) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.7 }}
                        className="bg-white rounded-[2rem] border border-black/10 p-8 hover:border-brand-500/60 transition-colors duration-500"
                    >
                        <h4 className="text-sm uppercase font-mono tracking-[0.3em] text-[#1d1b16]/40 border-b border-black/10 pb-5 mb-6 font-bold flex items-center justify-between">
                            {category}
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 text-sm font-medium text-[#1d1b16]/80 border border-black/10 rounded-full bg-[#faf9f7] hover:border-brand-500 hover:text-brand-800 hover:bg-brand-100 transition-all duration-300 cursor-default"
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