import Link from "next/link";
import { portfolioData } from "@/data/content";
import { ArrowUp, Facebook, Linkedin, Layout as BehanceIcon, MessageCircle, Mail } from "lucide-react";

const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
];

const socials = [
    { label: "Email", href: `mailto:${portfolioData.contact.email}`, icon: Mail, cls: "social-btn-mail" },
    { label: "Facebook", href: portfolioData.contact.facebook, icon: Facebook, cls: "social-btn-facebook" },
    { label: "WhatsApp", href: portfolioData.contact.whatsapp, icon: MessageCircle, cls: "social-btn-whatsapp" },
    { label: "LinkedIn", href: portfolioData.contact.linkedin, icon: Linkedin, cls: "social-btn-linkedin" },
    { label: "Behance", href: portfolioData.contact.behance, icon: BehanceIcon, cls: "social-btn-behance" },
];

export default function Footer() {
    return (
        <footer className="pb-10 pt-20 md:pt-24 border-t border-black/10 dark:border-white/10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    <div className="max-w-xl">
                        <span className="logo-text text-3xl text-[#1d1b16] dark:text-[#f5f2ec]">Shadhin<span className="text-brand-600 dark:text-brand-300">.</span></span>
                        <p className="mt-4 text-[#1d1b16]/60 dark:text-white/60 font-light leading-[1.8]">{portfolioData.footerBio}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-16 gap-y-3">
                        {sections.map((s) => (
                            <Link
                                key={s.id}
                                href={`/${s.id === "home" ? "" : s.id}`}
                                className="text-sm font-semibold text-[#1d1b16]/70 dark:text-white/70 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                            >
                                {s.label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-black/10 dark:border-white/10 text-[#1d1b16]/50 dark:text-white/50 font-mono text-xs uppercase tracking-[0.25em]">
                    <div>© {new Date().getFullYear()} · {portfolioData.name}</div>
                    <a
                        href="#top"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1d1b16] dark:bg-[#1d1b16] text-white font-bold hover:bg-brand-600 hover:text-white transition-colors"
                    >
                        Back to top
                        <ArrowUp className="w-4 h-4" />
                    </a>
                </div>

                <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col items-center gap-5">
                    <span className="text-[#1d1b16]/40 dark:text-white/40 font-mono text-xs uppercase tracking-[0.4em] font-bold">
                        Find me online
                    </span>
                    <div className="flex flex-wrap justify-center gap-4">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                                rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                className={`social-icon-btn ${s.cls} group`}
                                title={s.label}
                            >
                                <s.icon className="w-5 h-5" />
                                <span className="sr-only">{s.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}