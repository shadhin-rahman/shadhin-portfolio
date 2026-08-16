"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { portfolioData } from "@/data/content";

export default function WhatsAppFloat() {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 1600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 40, scale: 0.8 }}
                    transition={{ type: "spring", damping: 24, stiffness: 240 }}
                    className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3"
                >
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="w-72 rounded-3xl bg-white dark:bg-[#141210] border border-black/10 dark:border-white/10 shadow-2xl shadow-black/15 overflow-hidden"
                            >
                                <div className="bg-brand-400 px-6 py-5 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="w-11 h-11 rounded-full bg-black text-brand-400 flex items-center justify-center">
                                            <MessageCircle className="w-6 h-6" />
                                        </span>
                                        <div>
                                            <p className="font-black text-black text-sm tracking-tight">Shadhin</p>
                                            <p className="text-black/70 text-xs font-bold">Online</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="w-9 h-9 rounded-full bg-black/10 hover:bg-black/20 transition-colors flex items-center justify-center text-black"
                                        aria-label="Close chat"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                                <div className="p-6">
                                    <div className="bg-[#faf9f7] dark:bg-white/[0.04] rounded-2xl rounded-tl-sm px-5 py-4 text-sm text-[#1d1b16]/80 dark:text-white/80 font-medium leading-relaxed">
                                        Hi! Need help with photo editing or design? I usually reply within a few hours.
                                    </div>
                                    <a
                                        href={`${portfolioData.contact.whatsapp}?text=${encodeURIComponent("Hi Shadhin! I'd like to know more about your services.")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 w-full inline-flex items-center justify-center gap-2 bg-brand-400 text-black font-black py-3.5 rounded-2xl hover:bg-brand-500 transition-colors"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        Start Chat
                                    </a>
                                    <p className="mt-3 text-center text-xs font-mono text-[#1d1b16]/40 dark:text-white/40">
                                        {portfolioData.contact.phone}
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <button
                        onClick={() => setOpen(!open)}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 hover:rotate-6 transition-all duration-300 relative"
                        aria-label="Chat on WhatsApp"
                    >
                        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
                        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 relative" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}