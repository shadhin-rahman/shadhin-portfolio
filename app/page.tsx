import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import { portfolioData } from "@/data/content";
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Layout as BehanceIcon, Facebook, MessageCircle, ArrowUp } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
    const sections = [
        { id: "about", label: "About" },
        { id: "services", label: "Services" },
        { id: "experience", label: "Experience" },
        { id: "skills", label: "Skills" },
        { id: "education", label: "Education" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <main id="top" className="min-h-screen mesh-gradient transition-colors duration-500">
            <Navbar />
            <Hero />
            <Ticker />

            <div className="max-w-7xl mx-auto px-0 sm:px-6">

                {/* About Section */}
                <About />

                {/* Stats Section */}
                <Stats />

                {/* Services Section */}
                <Services />

                {/* Experience Section */}
                <Experience />

                {/* Skills Section */}
                <Skills />

                {/* Education Section */}
                <Education />
            </div>

            {/* Portfolio Section */}
            <section id="portfolio" className="scroll-mt-32 max-w-7xl mx-auto px-6 py-24">
                <div className="bg-[#1d1b16] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group shadow-2xl shadow-black/20">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-400/15 rounded-full blur-[120px] group-hover:bg-brand-400/25 transition-all duration-1000" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-400/10 rounded-full blur-[100px]" />

                    <div className="max-w-3xl mx-auto space-y-8 relative z-10">
                        <span className="inline-block text-xs font-mono tracking-[0.5em] text-brand-400 uppercase font-bold bg-white/5 border border-white/10 px-5 py-2 rounded-full">
                            Portfolio
                        </span>
                        <h3 className="text-4xl md:text-7xl font-bold tracking-tighter leading-[1.08] text-white logo-text">
                            Dive into my <span className="text-brand-400">visual universe.</span>
                        </h3>
                        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            I believe in showing, not just telling. Click below to explore my comprehensive body of work,
                            spanning 14 years of creative professional projects and design expertise.
                        </p>

                        <div className="pt-8 flex flex-wrap justify-center gap-5">
                            <a
                                href={portfolioData.contact.behance}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-4 px-9 py-5 rounded-full bg-brand-400 text-black font-bold text-lg hover:bg-brand-500 transition-all duration-300 shadow-2xl shadow-brand-400/40 group"
                            >
                                Explore my work on Behance
                                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6">
                {/* Creative Focus Section */}
                <section className="scroll-mt-32 pb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 order-2 md:order-1">
                            <span className="text-sm font-mono font-bold uppercase tracking-[0.4em] text-brand-700 block">
                                Creative Focus
                            </span>
                            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] logo-text">
                                Design with <span className="text-brand-700 italic">purpose.</span>
                            </h3>
                            <p className="text-[#1d1b16]/60 text-xl font-light leading-relaxed max-w-xl">
                                My approach combines 14 years of professional technical expertise with a creative eye for
                                modern aesthetics. I focus on delivering results that aren't just beautiful, but
                                strategically effective.
                            </p>
                            <div className="flex items-center gap-4 pt-2">
                                <div className="h-1 w-14 rounded-full bg-brand-400" />
                                <p className="text-[#1d1b16]/40 font-mono text-sm uppercase tracking-widest font-semibold">
                                    Innovation · Excellence · Precision
                                </p>
                            </div>
                        </div>

                        <div className="relative order-1 md:order-2 px-4 md:px-0 mt-8 md:mt-0">
                            <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden bg-white border border-black/10 shadow-2xl shadow-black/10 scale-95 hover:scale-100 transition-transform duration-700 hover:border-brand-500/40 group z-10">
                                <img src="/creative_life_1.jpg" alt="Creative work" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-50" />
                            </div>

                            <div className="absolute -bottom-10 -left-6 md:-left-10 w-2/3 aspect-[4/3] rounded-[2.5rem] overflow-hidden border-8 border-[#faf9f7] bg-white shadow-2xl hidden md:block hover:scale-105 transition-transform duration-500 z-20">
                                <img src="/creative_life_2.jpg" alt="Creative focus" className="w-full h-full object-cover" />
                            </div>

                            <div className="absolute -top-12 -right-4 md:-right-8 w-1/2 aspect-square rounded-[2rem] overflow-hidden border-8 border-[#faf9f7] bg-white shadow-2xl hidden md:block hover:scale-110 transition-transform duration-500 z-30">
                                <img src="/profile_main.jpg" alt="Profile Detail" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="scroll-mt-32 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start border-t border-black/10 pt-20">
                        {/* Left Side: Contact Info */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8">
                            <div>
                                <h2 className="text-brand-700 font-mono text-sm tracking-[0.5em] uppercase mb-6 font-bold">
                                    Get In Touch
                                </h2>
                                <h3 className="text-5xl md:text-6xl font-bold tracking-tighter mb-7 logo-text">
                                    Let's create something <span className="text-brand-700">iconic.</span>
                                </h3>
                                <p className="text-[#1d1b16]/60 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                                    Feel free to contact me for professional image editing, creative design projects,
                                    or collaboration opportunities.
                                </p>
                            </div>

                            <div className="flex flex-col gap-5 text-lg text-[#1d1b16]/80">
                                <div className="flex items-center gap-3">
                                    <span className="w-11 h-11 rounded-full bg-brand-100 flex items-center justify-center">
                                        <Phone className="w-5 h-5 text-brand-700" />
                                    </span>
                                    <span>{portfolioData.contact.phone}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-11 h-11 rounded-full bg-brand-100 flex items-center justify-center">
                                        <Mail className="w-5 h-5 text-brand-700" />
                                    </span>
                                    <span>{portfolioData.contact.email}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-11 h-11 rounded-full bg-brand-100 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-brand-700" />
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

                {/* Footer */}
                <footer className="pb-10 pt-20 border-t border-black/10">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                            <div className="max-w-xl">
                                <span className="logo-text text-3xl text-[#1d1b16]">Shadhin<span className="text-brand-600">.</span></span>
                                <p className="mt-4 text-[#1d1b16]/60 font-light leading-relaxed">{portfolioData.footerBio}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-x-16 gap-y-3">
                                {sections.map((s) => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        className="text-sm font-semibold text-[#1d1b16]/70 hover:text-brand-700 transition-colors"
                                    >
                                        {s.label}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-black/10 text-[#1d1b16]/50 font-mono text-xs uppercase tracking-[0.25em]">
                            <div>© {new Date().getFullYear()} · {portfolioData.name}</div>
                            <a
                                href="#top"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1d1b16] text-white font-bold hover:bg-brand-600 transition-colors"
                            >
                                Back to top
                                <ArrowUp className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </main>
    );
}