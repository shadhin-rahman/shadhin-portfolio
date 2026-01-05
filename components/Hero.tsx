"use client";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/content";
import { ArrowRight, Download, MousePointer2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center pt-32 px-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="premium-blur top-[10%] left-[-5%] w-[500px] h-[500px] opacity-40 blur-[120px]" />
            <div className="premium-blur bottom-[10%] right-[-5%] w-[500px] h-[500px] opacity-20 blur-[120px]" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="text-center z-10 max-w-5xl"
            >
                {/* Refined Profile Image Arrangement */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-32 h-32 mx-auto mb-12"
                >
                    <div className="absolute inset-0 bg-emerald-500/10 rounded-[2.5rem] rotate-6 blur-xl" />
                    <div className="relative w-full h-full rounded-[3rem] border border-white/10 overflow-hidden glass-card transition-all duration-700 group-hover:scale-[1.02] group-hover:border-emerald-500/30">
                        <img
                            src="/profile_main.jpg"
                            alt={portfolioData.name}
                            className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-1000 grayscale-0"
                        />
                    </div>
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="absolute -bottom-4 -right-4 p-2.5 bg-emerald-500 rounded-2xl shadow-xl shadow-emerald-500/20"
                    >
                        <MousePointer2 className="w-5 h-5 text-black" />
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                >
                    <span className="text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase mb-6 block">
                        Based in {portfolioData.contact.location}
                    </span>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
                        Transforming <span className="text-white/60">visions</span> <br />
                        into digital <span className="gradient-text">excellence.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/70 mb-12 leading-relaxed max-w-3xl mx-auto font-light">
                        Hello, I'm <span className="text-white font-medium">{portfolioData.name}</span>.
                        {portfolioData.bio}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="#portfolio"
                            className="px-10 py-5 bg-white text-black rounded-full font-bold flex items-center gap-3 transition-colors hover:bg-emerald-400 group"
                        >
                            View Projects
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="#contact"
                            className="px-10 py-5 glass-card rounded-full font-bold flex items-center gap-3 border-white/10 text-white"
                        >
                            Get in touch
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>

        </section>
    );
}
