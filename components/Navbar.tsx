"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
                    className="text-white font-bold text-2xl tracking-tighter z-[60] hover:text-emerald-500 transition-colors"
                >
                    SHADHIN<span className="text-emerald-500">.</span>
                </Link>

                {/* Desktop Menu - Always visible but minimalist */}
                <div className="hidden md:flex items-center gap-2">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`group flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500 z-[60] ${isOpen
                            ? "bg-white text-black"
                            : "glass-card text-white hover:bg-white/10"
                            }`}
                    >
                        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
                            {isOpen ? "Close" : "Menu"}
                        </span>
                        <div className="relative w-4 h-4">
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
                                className="absolute top-1/2 left-0 w-4 h-[1.5px] bg-current block"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
                                className="absolute top-1/2 left-0 w-4 h-[1.5px] bg-current block"
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-[60] p-3 glass-card rounded-xl text-white"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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

                            <div className="mt-20 pt-10 border-t border-white/10 space-y-6">
                                <span className="text-white/50 text-xs uppercase tracking-[0.5em] font-bold block">Get in touch</span>
                                <a href="mailto:shadhin005rahman@gmail.com" className="text-white hover:text-emerald-500 transition-colors block text-xl font-medium">
                                    shadhin005rahman@gmail.com
                                </a>
                                <div className="flex gap-8 pt-4">
                                    <a href="#" className="text-white/50 hover:text-emerald-500 transition-colors text-sm uppercase tracking-widest font-bold">LinkedIn</a>
                                    <a href="#" className="text-white/50 hover:text-emerald-500 transition-colors text-sm uppercase tracking-widest font-bold">Behance</a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
