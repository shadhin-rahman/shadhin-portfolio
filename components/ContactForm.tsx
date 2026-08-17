"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, Loader2 } from "lucide-react";
import { portfolioData } from "@/data/content";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form) return;

        const formData = new FormData(form);
        const name = String(formData.get("name") || "");
        const email = String(formData.get("email") || "");
        const message = String(formData.get("message") || "");

        if (ACCESS_KEY) {
            setIsSubmitting(true);
            try {
                const res = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Accept: "application/json" },
                    body: JSON.stringify({
                        access_key: ACCESS_KEY,
                        subject: "New message from portfolio",
                        name,
                        email,
                        message,
                    }),
                });
                const data = await res.json();
                if (data.success) {
                    form.reset();
                    window.alert("Message sent! Thank you, I'll get back to you soon.");
                } else {
                    window.alert("Something went wrong. Please try again or reach out on WhatsApp.");
                }
            } catch {
                window.alert("Network error. Please try again or reach out on WhatsApp.");
            } finally {
                setIsSubmitting(false);
            }
            return;
        }

        const preview = `Hi Shadhin, my name is ${name}.${email ? ` My email is ${email}.` : ""} Message: ${message}`;
        window.open(
            `${portfolioData.contact.whatsapp}?text=${encodeURIComponent(preview)}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    const fieldClass =
        "w-full bg-[#faf9f7] dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl py-4 pl-12 pr-4 text-[#1d1b16] dark:text-[#f5f2ec] placeholder:text-[#1d1b16]/30 dark:placeholder:text-white/30 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-400/30 transition-all";

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-lg mx-auto"
        >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-white/[0.03] rounded-[2.5rem] border border-black/10 dark:border-white/10 p-8 md:p-10 relative overflow-hidden shadow-xl shadow-black/5">
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-300/25 dark:bg-brand-300/10 blur-[80px] rounded-full -z-0" />

                <div className="space-y-3 mb-8 relative z-10">
                    <h3 className="text-3xl font-bold tracking-tight logo-text text-[#1d1b16] dark:text-[#f5f2ec]">
                        Say Hello!
                    </h3>
                    <p className="text-[#1d1b16]/60 dark:text-white/60 font-light leading-[1.8]">
                        Have a project in mind? Let's build something awesome together.
                    </p>
                </div>

                <div className="space-y-4 relative z-10">
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1d1b16]/30 dark:text-white/30 group-focus-within:text-brand-700 dark:group-focus-within:text-brand-300 transition-colors" />
                        <input type="text" name="name" placeholder="Your Name" required className={fieldClass} />
                    </div>

                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1d1b16]/30 dark:text-white/30 group-focus-within:text-brand-700 dark:group-focus-within:text-brand-300 transition-colors" />
                        <input type="email" name="email" placeholder="Email Address" required className={fieldClass} />
                    </div>

                    <div className="relative group">
                        <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-[#1d1b16]/30 dark:text-white/30 group-focus-within:text-brand-700 dark:group-focus-within:text-brand-300 transition-colors" />
                        <textarea
                            name="message"
                            placeholder="Tell me about your project..."
                            required
                            rows={4}
                            className={`${fieldClass} resize-none`}
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative z-10 bg-brand-400 text-white dark:text-black font-black py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-500 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg shadow-brand-400/30"
                >
                    {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                        <>
                            <span>Send Message</span>
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                    )}
                </button>
                {!ACCESS_KEY && (
                    <p className="text-[#1d1b16]/40 dark:text-white/40 text-xs font-mono mt-2 text-center relative z-10">
                        Sends directly to my WhatsApp
                    </p>
                )}
            </form>
        </motion.div>
    );
}