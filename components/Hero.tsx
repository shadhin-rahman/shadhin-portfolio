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

            {/* Main Content Container - Split Layout */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl z-10 gap-12 md:gap-20">

                {/* Left Column - Profile Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full md:w-1/2 relative order-1"
                >
                    <div className="relative w-full aspect-[4/5] max-w-lg mx-auto md:mr-auto rounded-[3rem] glass-card border border-white/10 group overflow-visible">
                        {/* Internal Gradient for Transparent Image Support */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-[3rem]" />

                        {/* Glow effect behind image */}
                        <div className="absolute top-10 left-10 right-10 bottom-10 bg-emerald-500/30 blur-[80px] -z-10 rounded-full" />

                        <img
                            src="/Shadhin.png"
                            alt={portfolioData.name}
                            className="w-full h-full object-contain object-bottom scale-[1.15] -translate-y-4 group-hover:scale-[1.2] transition-transform duration-1000 origin-bottom"
                        />

                        {/* Overlay gradient for text readability and aesthetic */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40 rounded-[3rem] pointer-events-none" />

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="absolute bottom-8 right-8 p-4 bg-emerald-500/90 backdrop-blur-md rounded-2xl shadow-xl shadow-emerald-500/20 border border-white/20 z-20"
                        >
                            <MousePointer2 className="w-6 h-6 text-black" />
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right Column - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="w-full md:w-1/2 text-left order-2"
                >
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <span className="text-emerald-500 font-mono text-sm tracking-[0.3em] uppercase mb-6 block font-bold">
                            Based in {portfolioData.contact.location}
                        </span>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.05]">
                            Transforming <span className="text-white/60">visions</span> <br />
                            into digital <span className="gradient-text">excellence.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl font-light">
                            Hello, I'm <span className="text-white font-medium">{portfolioData.name}</span>.
                            {portfolioData.bio}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 items-start">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="#portfolio"
                                className="px-10 py-5 bg-white text-black rounded-full font-bold flex items-center gap-3 transition-colors hover:bg-emerald-400 group shadow-lg shadow-white/5"
                            >
                                View Projects
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="#contact"
                                className="px-10 py-5 glass-card rounded-full font-bold flex items-center gap-3 border-white/10 text-white hover:bg-white/5 transition-colors"
                            >
                                Get in touch
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
}
