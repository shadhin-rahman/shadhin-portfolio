"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";

export default function About() {
    return (
        <section id="about" className="scroll-mt-32 max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16 items-start">
            {/* Title Column */}
            <div className="md:w-1/3 sticky top-32">
                <h2 className="text-xs uppercase font-mono tracking-[0.4em] text-emerald-400 font-bold mb-6">Introduction</h2>
                <h3 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">{portfolioData.about.title}</h3>
                <div className="h-1 w-20 bg-emerald-500 rounded-full" />
            </div>

            {/* Content Column */}
            <div className="md:w-2/3 space-y-8">
                {portfolioData.about.content.map((paragraph, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-lg md:text-xl text-white/70 font-light leading-relaxed"
                    >
                        {paragraph.split("**").map((part, i) =>
                            i % 2 === 1 ? <span key={i} className="text-white font-semibold">{part}</span> : part
                        )}
                    </motion.p>
                ))}
            </div>
        </section>
    );
}
