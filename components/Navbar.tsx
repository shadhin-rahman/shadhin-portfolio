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
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Portfolio", href: "#portfolio" },
        { name: "Experience", href: "#experience" },
        { name: "Skills", href: "#skills" },
        { name: "Connect", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 font-mono">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link
                    href="/"
                    className="logo-text z-[60] text-3xl md:text-4xl flex items-center group"
                >
                    <motion.div className="flex overflow-hidden">
                        {"Shadhin".split("").map((letter, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{
                                    delay: 0.5 + i * 0.1,
                                    duration: 0.8,
                                    ease: [0.33, 1, 0.68, 1]
                                }}
                                className={letter === "S" ? "text-white" : "text-white/90"}
                            >
                                {letter}
                            </motion.span>
                        ))}
                        <motion.span
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                            className="text-emerald-500 ml-0.5"
                        >
                            .
                        </motion.span>
                    </motion.div>
                </Link>

                {/* Desktop Menu - Always visible but minimalist */}
                <div className="hidden md:flex items-center gap-2">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`group flex items-center gap-4 px-8 py-4 rounded-full transition-all duration-500 z-[60] border ${isOpen
                            ? "bg-white text-black border-white"
                            : "bg-black/20 backdrop-blur-md text-white border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/5"
                            }`}
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

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-[60] p-4 glass-card rounded-2xl text-white border border-white/10"
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Overlay Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-[55]"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 200 }}
                            className="fixed top-0 right-0 h-screen w-full md:w-[500px] bg-[#080808] border-l border-white/5 z-[56] p-12 flex flex-col justify-center"
                        >
                            <div className="space-y-10">
                                <span className="text-emerald-400 text-xs uppercase tracking-[0.5em] font-bold block mb-6">Navigation</span>
                                {navItems.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-6xl md:text-7xl font-bold text-white hover:text-emerald-500 transition-colors tracking-tighter"
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-20 pt-10 border-t border-white/10 space-y-8">
                                <span className="text-white/50 text-xs uppercase tracking-[0.5em] font-bold block">Get in touch</span>
                                <a href={`mailto:${portfolioData.contact.email}`} className="text-white hover:text-emerald-500 transition-colors block text-xl font-medium">
                                    {portfolioData.contact.email}
                                </a>
                                <div className="flex gap-4 pt-4">
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
