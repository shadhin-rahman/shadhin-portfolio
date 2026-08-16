"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Facebook, Linkedin, Layout as BehanceIcon, MessageCircle } from "lucide-react";
import { portfolioData } from "@/data/content";

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

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Connect", href: "#contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-lg shadow-black/5" : "bg-transparent border-b border-transparent"}`}>
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
                                className="text-[#1d1b16]"
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

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-semibold text-[#1d1b16]/70 hover:text-[#1d1b16] transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="#contact"
                        className="px-7 py-3 rounded-full bg-brand-400 text-black font-bold hover:bg-brand-500 transition-all duration-300 shadow-lg shadow-brand-400/30"
                    >
                        Let's Talk
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-[60] w-12 h-12 rounded-full border border-black/10 bg-white text-[#1d1b16] flex items-center justify-center shadow-md"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[55]"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 220 }}
                            className="fixed top-0 right-0 h-screen w-full md:w-[420px] bg-[#faf9f7] border-l border-black/5 z-[56] p-10 flex flex-col justify-center shadow-2xl"
                        >
                            <span className="text-brand-700 font-mono text-xs uppercase tracking-[0.4em] font-bold block mb-8">Navigation</span>
                            <div className="space-y-6">
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.08 * i }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-5xl font-bold text-[#1d1b16] hover:text-brand-600 transition-colors tracking-tighter logo-text block"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-12 text-center px-8 py-4 rounded-full bg-brand-400 text-black font-bold hover:bg-brand-500 transition-colors shadow-lg shadow-brand-400/30"
                            >
                                Let's Talk
                            </a>

                            <div className="mt-10 pt-8 border-t border-black/10 space-y-6">
                                <span className="text-[#1d1b16]/50 text-xs uppercase tracking-[0.4em] font-bold block">Get in touch</span>
                                <a href={`mailto:${portfolioData.contact.email}`} className="text-[#1d1b16] hover:text-brand-700 transition-colors block text-lg font-semibold">
                                    {portfolioData.contact.email}
                                </a>
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
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}