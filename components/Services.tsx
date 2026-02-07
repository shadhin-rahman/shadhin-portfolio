"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
    return (
        <section id="services" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-20">
                <h2 className="text-xs uppercase font-mono tracking-[0.4em] text-emerald-400 font-bold mb-6">Expertise</h2>
                <h3 className="text-5xl md:text-7xl font-bold tracking-tight">What I Do</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {portfolioData.services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group glass-card p-8 rounded-[2rem] border border-white/5 hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-full"
                    >
                        <div className="mb-6">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                            </div>
                            <h4 className="text-xl font-bold leading-tight group-hover:text-emerald-300 transition-colors">
                                {service}
                            </h4>
                        </div>
                        <div className="h-1 w-full bg-linear-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:via-emerald-500/50 transition-all duration-700" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
