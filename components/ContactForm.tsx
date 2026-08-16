"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Loader2 } from "lucide-react";

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => setIsSuccess(false), 3000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-lg mx-auto"
        >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-[2.5rem] border border-black/10 p-8 md:p-10 relative overflow-hidden shadow-xl shadow-black/5">
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-400/25 blur-[80px] rounded-full -z-0" />

                <div className="space-y-2 mb-8 relative z-10">
                    <h3 className="text-3xl font-bold tracking-tight logo-text">Say Hello!</h3>
                    <p className="text-[#1d1b16]/60 font-light">
                        Have a project in mind? Let's build something awesome together.
                    </p>
                </div>

                <div className="space-y-4 relative z-10">
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1d1b16]/30 group-focus-within:text-brand-700 transition-colors" />
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="w-full bg-[#faf9f7] border border-black/10 rounded-2xl py-4 pl-12 pr-4 text-[#1d1b16] placeholder:text-[#1d1b16]/30 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-400/30 transition-all"
                        />
                    </div>

                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1d1b16]/30 group-focus-within:text-brand-700 transition-colors" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            className="w-full bg-[#faf9f7] border border-black/10 rounded-2xl py-4 pl-12 pr-4 text-[#1d1b16] placeholder:text-[#1d1b16]/30 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-400/30 transition-all"
                        />
                    </div>

                    <div className="relative group">
                        <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-[#1d1b16]/30 group-focus-within:text-brand-700 transition-colors" />
                        <textarea
                            placeholder="Tell me about your project..."
                            required
                            rows={4}
                            className="w-full bg-[#faf9f7] border border-black/10 rounded-2xl py-4 pl-12 pr-4 text-[#1d1b16] placeholder:text-[#1d1b16]/30 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-400/30 transition-all resize-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative z-10 bg-brand-400 text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-500 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg shadow-brand-400/30"
                >
                    {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : isSuccess ? (
                        <span>Message Sent!</span>
                    ) : (
                        <>
                            <span>Send Message</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                    )}
                </button>
            </form>
        </motion.div>
    );
}