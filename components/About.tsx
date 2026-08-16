"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { MapPin } from "lucide-react";

const highlights = [
    "Adobe Photoshop Expert",
    "14+ Years in Image Editing",
    "Team Leadership & QC",
    "UI/UX Design Support",
];

export default function About() {
    return (
        <section id="about" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-24">
            <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
                {/* Title Column */}
                <div className="md:w-1/3 md:sticky md:top-32">
                    <span className="text-sm font-mono font-bold uppercase tracking-[0.4em] text-brand-700 mb-6 block">
                        About Me
                    </span>
                    <h3 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6 logo-text">
                        Crafting visual{" "}
                        <span className="text-brand-700">excellence</span> for 14+ years.
                    </h3>
                    <div className="w-16 h-1.5 rounded-full bg-brand-400" />
                    <div className="mt-8 flex items-center gap-3 text-[#1d1b16]/60 font-medium">
                        <MapPin className="w-5 h-5 text-brand-700" />
                        {portfolioData.contact.location}
                    </div>
                </div>

                {/* Content Column */}
                <div className="md:w-2/3 space-y-8">
                    {portfolioData.about.content.map((paragraph, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.7 }}
                            className="text-lg md:text-2xl text-[#1d1b16]/70 font-light leading-relaxed"
                        >
                            {paragraph.split("**").map((part, i) =>
                                i % 2 === 1 ? (
                                    <span key={i} className="text-[#1d1b16] font-semibold">
                                        {part}
                                    </span>
                                ) : (
                                    part
                                )
                            )}
                        </motion.p>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="flex flex-wrap gap-3 pt-4"
                    >
                        {highlights.map((item) => (
                            <span
                                key={item}
                                className="px-5 py-2.5 rounded-full bg-white border border-black/10 text-sm font-semibold text-[#1d1b16]/70 shadow-sm"
                            >
                                {item}
                            </span>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}