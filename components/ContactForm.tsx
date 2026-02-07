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
        // Simulate network request
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
        // Reset success message after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-lg mx-auto"
        >
            <form onSubmit={handleSubmit} className="space-y-6 glass-card p-8 md:p-10 rounded-[3rem] border border-white/10 relative overflow-hidden">

                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] -z-10 rounded-full" />

                <div className="space-y-2 mb-8">
                    <h3 className="text-3xl font-bold tracking-tight">Say Hello!</h3>
                    <p className="text-white/50 font-light">Have a project in mind? Let's build something awesome together.</p>
                </div>

                <div className="space-y-4">
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-emerald-400 transition-colors" />
                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all"
                        />
                    </div>

                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30 group-focus-within:text-emerald-400 transition-colors" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all"
                        />
                    </div>

                    <div className="relative group">
                        <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-white/30 group-focus-within:text-emerald-400 transition-colors" />
                        <textarea
                            placeholder="Tell me about your project..."
                            required
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all resize-none"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
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
