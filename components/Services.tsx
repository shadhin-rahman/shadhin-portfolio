"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Services({ items, showCta = false }: { items?: number; showCta?: boolean }) {
    const services = items ? portfolioData.services.slice(0, items) : portfolioData.services;

    return (
        <section id="services" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-24 md:py-32">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
                <div>
                    <span className="text-sm font-mono font-bold uppercase tracking-[0.4em] text-brand-700 dark:text-brand-300 mb-6 block">
                        What I Do
                    </span>
                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] logo-text">
                        Core{" "}
                        <span className="text-brand-700 dark:text-brand-300">specialties.</span>
                    </h3>
                </div>
                <div className="flex flex-col gap-4 items-start md:items-end">
                    <p className="text-lg text-[#1d1b16]/60 dark:text-white/60 font-light leading-[1.8] max-w-md md:text-right">
                        From high-end retouching to precise clipping paths —
                        professional image editing that meets international standards.
                    </p>
                    {showCta && (
                        <a
                            href="/services"
                            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-400 text-white dark:text-black font-bold hover:bg-brand-500 transition-colors shadow-lg shadow-brand-400/30 group"
                        >
                            View All Services
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (index % 4) * 0.07, duration: 0.6 }}
                        className="group bg-white dark:bg-white/[0.03] rounded-[2rem] border border-black/10 dark:border-white/10 p-8 hover:border-brand-500 hover:shadow-xl hover:shadow-brand-400/10 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between h-full"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <div className="w-12 h-12 rounded-full bg-brand-100 dark:bg-brand-300/15 flex items-center justify-center group-hover:bg-brand-400 transition-colors duration-500">
                                    <CheckCircle2 className="w-6 h-6 text-brand-700 dark:text-brand-300 group-hover:text-white dark:group-hover:text-black transition-colors duration-500" />
                                </div>
                                <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#1d1b16]/30 dark:text-white/30 group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors duration-500">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                            </div>
                            <h4 className="text-xl font-bold leading-snug text-[#1d1b16] dark:text-[#f5f2ec]">
                                {service}
                            </h4>
                        </div>
                        <div className="mt-10 h-1 w-full rounded-full bg-black/5 dark:bg-white/10 group-hover:bg-brand-300 transition-colors duration-700" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}