"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
    return (
        <section id="services" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                <div>
                    <span className="text-sm font-mono font-bold uppercase tracking-[0.4em] text-brand-700 mb-6 block">
                        What I Do
                    </span>
                    <h3 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] logo-text">
                        Core{" "}
                        <span className="text-brand-700">specialties.</span>
                    </h3>
                </div>
                <p className="text-lg text-[#1d1b16]/60 font-light leading-relaxed max-w-md md:text-right">
                    From high-end retouching to precise clipping paths —
                    professional image editing that meets international standards.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {portfolioData.services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index % 4) * 0.07, duration: 0.6 }}
                        className="group bg-white rounded-[2rem] border border-black/10 p-8 hover:border-brand-500 hover:shadow-xl hover:shadow-brand-400/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-full"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center group-hover:bg-brand-400 transition-colors duration-500">
                                    <CheckCircle2 className="w-6 h-6 text-brand-700 group-hover:text-black transition-colors duration-500" />
                                </div>
                                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#1d1b16]/30 group-hover:text-brand-700 transition-colors duration-500">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <h4 className="text-xl font-bold leading-tight text-[#1d1b16]">
                                {service}
                            </h4>
                        </div>
                        <div className="mt-10 h-1 w-full rounded-full bg-black/5 group-hover:bg-brand-400 transition-colors duration-700" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}