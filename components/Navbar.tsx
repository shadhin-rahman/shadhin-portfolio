"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Facebook, Linkedin, Layout as BehanceIcon, MessageCircle, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/content";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 24);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const navItems = [
        { name: "Home", href: "/", no: "01" },
        { name: "About", href: "/about", no: "02" },
        { name: "Services", href: "/services", no: "03" },
        { name: "Portfolio", href: "/portfolio", no: "04" },
        { name: "Contact", href: "/contact", no: "05" },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/80 dark:bg-black/60 backdrop-blur-xl border-b border-black/5 dark:border-white/10 shadow-lg shadow-black/5" : "bg-transparent border-b border-transparent"}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
                {/* Logo */}
                <Link href="/" className="logo-text z-[60] text-3xl flex items-center group">
                    <motion.div className="flex overflow-hidden">
                        {"Shadhin".split("").map((letter, i) => (
                            <motion.span
                                key={`${letter}-${i}`}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ delay: 0.3 + i * 0.08, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                                className="text-[#1d1b16] dark:text-[#f5f2ec]"
                            >
                                {letter}
                            </motion.span>
                        ))}
                        <motion.span
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.1, duration: 0.4 }}
                            className="text-brand-500 ml-0.5"
                        >
                            .
                        </motion.span>
                    </motion.div>
                </Link>

                {/* Right Cluster */}
                <div className="flex items-center gap-3 z-[60]">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`group flex items-center gap-3 px-5 md:px-8 py-3.5 rounded-full transition-all duration-500 border font-bold ${
                            isOpen
                                ? "bg-[#1d1b16] dark:bg-[#f5f2ec] text-white dark:text-[#1d1b16] border-[#1d1b16] dark:border-[#f5f2ec]"
                                : "bg-white text-[#1d1b16] border-black/10 dark:bg-[#191715] dark:text-[#f5f2ec] dark:border-white/10 hover:border-brand-500"
                        }`}
                        aria-label="Toggle menu"
                    >
                        <span className="text-xs uppercase tracking-[0.3em] font-black">
                            {isOpen ? "Close" : "Menu"}
                        </span>
                        <div className="relative w-5 h-5">
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                                className="absolute top-1/2 left-0 w-5 h-[2px] bg-current block"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                                className="absolute top-1/2 left-0 w-5 h-[2px] bg-current block"
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Fullscreen Overlay Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                        className="fixed inset-0 top-0 z-[55] bg-[#faf9f7] dark:bg-[#0c0b0a] overflow-y-auto"
                    >
                        <div className="min-h-full flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 py-32">
                            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-24">
                                {/* Links */}
                                <div className="space-y-2 md:space-y-4">
                                    <span className="text-brand-700 dark:text-brand-400 font-mono text-xs uppercase tracking-[0.4em] font-bold block mb-8">
                                        Navigation
                                    </span>
                                    {navItems.map((item, i) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, y: 24 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1 + i * 0.07, duration: 0.6 }}
                                            className="group flex items-baseline gap-4 md:gap-6 border-b border-black/5 dark:border-white/5 pb-3 md:pb-4"
                                        >
                                            <span className="font-mono text-sm font-bold text-brand-700 dark:text-brand-400">
                                                {item.no}
                                            </span>
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="logo-text text-4xl md:text-6xl font-bold leading-[1.15] text-[#1d1b16] dark:text-[#f5f2ec] hover:text-brand-600 dark:hover:text-brand-400 transition-colors tracking-tight"
                                            >
                                                {item.name}
                                            </Link>
                                            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-[#1d1b16]/30 dark:text-white/30 group-hover:text-brand-600 dark:group-hover:text-brand-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Contact block */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                    className="self-center space-y-8"
                                >
                                    <div>
                                        <span className="text-[#1d1b16]/50 dark:text-white/50 text-xs uppercase tracking-[0.4em] font-bold block mb-4">
                                            Get in touch
                                        </span>
                                        <a
                                            href={`mailto:${portfolioData.contact.email}`}
                                            className="text-2xl md:text-3xl font-bold text-[#1d1b16] dark:text-[#f5f2ec] hover:text-brand-700 dark:hover:text-brand-400 transition-colors leading-snug"
                                        >
                                            {portfolioData.contact.email}
                                        </a>
                                        <p className="mt-3 text-[#1d1b16]/60 dark:text-white/50 font-medium">
                                            {portfolioData.contact.location}
                                        </p>
                                    </div>

                                    <div className="flex gap-4 pt-2">
                                        <a href={portfolioData.contact.facebook} target="_blank" rel="noopener noreferrer" className="social-icon-btn social-btn-facebook" title="Facebook">
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a href={portfolioData.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="social-icon-btn social-btn-whatsapp" title="WhatsApp">
                                            <MessageCircle className="w-5 h-5" />
                                        </a>
                                        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn social-btn-linkedin" title="LinkedIn">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href={portfolioData.contact.behance} target="_blank" rel="noopener noreferrer" className="social-icon-btn social-btn-behance" title="Behance">
                                            <BehanceIcon className="w-5 h-5" />
                                        </a>
                                    </div>

                                    <a
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-400 text-black font-bold hover:bg-brand-500 transition-colors shadow-lg shadow-brand-400/30"
                                    >
                                        Let's Talk
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}