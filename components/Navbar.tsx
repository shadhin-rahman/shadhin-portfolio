"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Facebook, Linkedin, Layout as BehanceIcon, MessageCircle, ArrowUpRight, ArrowRight } from "lucide-react";
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
        <nav className={`fixed top-0 left-0 w-full z-50 py-4 md:py-6 transition-all duration-500 ${scrolled ? "bg-white/80 dark:bg-black/60 backdrop-blur-xl shadow-lg shadow-black/5" : "bg-transparent"}`}>
            <div className="flex justify-between items-center px-5 md:px-10">
                {/* Logo */}
                <Link href="/" className="logo-text z-[60] text-xl md:text-2xl font-bold tracking-tight text-[#1d1b16] dark:text-[#f5f2ec]">
                    Shadhin<span className="text-brand-600 dark:text-brand-400">.</span>
                </Link>

                {/* Right Cluster */}
                <div className="hidden md:flex items-center gap-3">
                    <ThemeToggle />
                    <a
                        href="/contact"
                        className="px-8 py-4 rounded-full bg-brand-400 text-black font-black hover:bg-brand-500 transition-all duration-300 text-xs uppercase tracking-[0.4em] whitespace-nowrap shadow-lg shadow-brand-400/30"
                    >
                        Let's Talk
                    </a>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`group flex items-center gap-4 px-8 py-4 rounded-full transition-all duration-500 z-[60] border ${isOpen
                            ? "bg-[#1d1b16] dark:bg-white text-white dark:text-black border-[#1d1b16] dark:border-white"
                            : "bg-brand-400 text-black border-transparent hover:bg-brand-500"
                            }`}
                        aria-label="Toggle menu"
                    >
                        <span className="text-xs uppercase tracking-[0.4em] font-black">
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

                {/* Mobile Cluster */}
                <div className="md:hidden flex items-center gap-2.5">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`group flex items-center gap-3 px-5 py-3.5 rounded-full transition-all duration-500 z-[60] border ${isOpen
                            ? "bg-[#1d1b16] dark:bg-white text-white dark:text-black border-[#1d1b16] dark:border-white"
                            : "bg-brand-400 text-black border-transparent hover:bg-brand-500"
                            }`}
                        aria-label="Toggle menu"
                    >
                        <span className="text-xs uppercase tracking-[0.3em] font-black">
                            {isOpen ? "Close" : "Menu"}
                        </span>
                        <div className="relative w-4 h-4">
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -3 }}
                                className="absolute top-1/2 left-0 w-4 h-[2px] bg-current block"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 3 }}
                                className="absolute top-1/2 left-0 w-4 h-[2px] bg-current block"
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Right-Side Drawer Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55]"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 32, stiffness: 220 }}
                            className="fixed top-0 right-0 h-screen w-full md:w-[460px] bg-[#faf9f7] dark:bg-[#0c0b0a] border-l border-black/10 dark:border-white/10 z-[56] flex flex-col overflow-y-auto"
                        >
                            <div className="flex-1 px-8 md:px-12 py-10 flex flex-col">
                                <span className="text-brand-700 dark:text-brand-400 font-mono text-xs uppercase tracking-[0.4em] font-bold block mb-8">
                                    Navigation
                                </span>

                                <nav className="space-y-1">
                                    {navItems.map((item, i) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 30 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="group flex items-center justify-between gap-4 py-4 border-b border-black/5 dark:border-white/5 transition-colors"
                                            >
                                                <span className="flex items-baseline gap-4">
                                                    <span className="font-mono text-sm font-bold text-brand-700 dark:text-brand-400">
                                                        {item.no}
                                                    </span>
                                                    <span className="logo-text text-3xl md:text-4xl font-bold text-[#1d1b16] dark:text-[#f5f2ec] group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors tracking-tight">
                                                        {item.name}
                                                    </span>
                                                </span>
                                                <ArrowUpRight className="w-6 h-6 text-[#1d1b16]/30 dark:text-white/30 group-hover:text-brand-600 dark:group-hover:text-brand-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.45, duration: 0.5 }}
                                    className="mt-auto pt-10 space-y-6"
                                >
                                    <div className="pt-8 border-t border-black/10 dark:border-white/10">
                                        <span className="text-[#1d1b16]/50 dark:text-white/50 text-xs uppercase tracking-[0.4em] font-bold block mb-4">
                                            Get in touch
                                        </span>
                                        <a
                                            href={`mailto:${portfolioData.contact.email}`}
                                            className="text-xl font-bold text-[#1d1b16] dark:text-[#f5f2ec] hover:text-brand-700 dark:hover:text-brand-400 transition-colors leading-snug break-all"
                                        >
                                            {portfolioData.contact.email}
                                        </a>
                                        <p className="mt-2 text-[#1d1b16]/60 dark:text-white/50 font-medium">
                                            {portfolioData.contact.location}
                                        </p>
                                    </div>

                                    <div className="flex gap-3">
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

                                    <Link
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="inline-flex items-center justify-center gap-3 w-full px-8 py-4 rounded-full bg-brand-400 text-black font-black hover:bg-brand-500 transition-colors uppercase text-xs tracking-[0.4em] shadow-lg shadow-brand-400/30"
                                    >
                                        Let's Talk
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}