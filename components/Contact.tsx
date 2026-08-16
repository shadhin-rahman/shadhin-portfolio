import { portfolioData } from "@/data/content";
import { Mail, Phone, MapPin, Linkedin, Layout as BehanceIcon, Facebook, MessageCircle } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-32 max-w-7xl mx-auto px-6 pb-20 md:pb-28">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start border-t border-black/10 dark:border-white/10 pt-20 md:pt-24">
                {/* Left Side: Contact Info */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
                    <div>
                        <h2 className="text-brand-700 dark:text-brand-400 font-mono text-sm tracking-[0.5em] uppercase mb-6 font-bold">
                            Get In Touch
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-8 logo-text text-[#1d1b16] dark:text-[#f5f2ec]">
                            Let's create something <span className="text-brand-700 dark:text-brand-400">iconic.</span>
                        </h3>
                        <p className="text-[#1d1b16]/60 dark:text-white/60 text-lg leading-[1.85] max-w-md mx-auto md:mx-0">
                            Feel free to contact me for professional image editing, creative design projects,
                            or collaboration opportunities.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 text-lg text-[#1d1b16]/80 dark:text-white/80">
                        <div className="flex items-center gap-3">
                            <span className="w-11 h-11 rounded-full bg-brand-100 dark:bg-brand-400/15 flex items-center justify-center">
                                <Phone className="w-5 h-5 text-brand-700 dark:text-brand-400" />
                            </span>
                            <span>{portfolioData.contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-11 h-11 rounded-full bg-brand-100 dark:bg-brand-400/15 flex items-center justify-center">
                                <Mail className="w-5 h-5 text-brand-700 dark:text-brand-400" />
                            </span>
                            <span>{portfolioData.contact.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-11 h-11 rounded-full bg-brand-100 dark:bg-brand-400/15 flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-brand-700 dark:text-brand-400" />
                            </span>
                            <span>{portfolioData.contact.location}</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-5 pt-4">
                        <a href={`mailto:${portfolioData.contact.email}`} className="social-icon-btn social-btn-mail group" title="Email">
                            <Mail className="w-5 h-5" />
                            <span className="sr-only">Email</span>
                        </a>
                        <a href={portfolioData.contact.facebook} target="_blank" rel="noopener noreferrer" className="social-icon-btn social-btn-facebook group" title="Facebook">
                            <Facebook className="w-5 h-5" />
                            <span className="sr-only">Facebook</span>
                        </a>
                        <a href={portfolioData.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="social-icon-btn social-btn-whatsapp group" title="WhatsApp">
                            <MessageCircle className="w-5 h-5" />
                            <span className="sr-only">WhatsApp</span>
                        </a>
                        <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn social-btn-linkedin group" title="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href={portfolioData.contact.behance} target="_blank" rel="noopener noreferrer" className="social-icon-btn social-btn-behance group" title="Behance">
                            <BehanceIcon className="w-5 h-5" />
                            <span className="sr-only">Behance</span>
                        </a>
                    </div>
                </div>

                {/* Right Side: Contact Form */}
                <div className="w-full">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}