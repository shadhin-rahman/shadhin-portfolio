import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import { portfolioData } from "@/data/content";
import { Mail, Phone, MapPin, ExternalLink, Linkedin, Layout as BehanceIcon, Facebook, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
    return (
        <main className="min-h-screen mesh-gradient transition-colors duration-500">
            <Navbar />
            <Hero />

            <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">

                {/* About Section */}
                <About />

                {/* Services Section */}
                <Services />

                {/* Experience Section */}
                <Experience />

                {/* Skills Section */}
                <Skills />

                {/* Education Section */}
                <Education />

                {/* Portfolio Section */}
                <section id="portfolio" className="scroll-mt-32">
                    <div className="glass-card p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden group">
                        {/* Background accent */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] -z-10 group-hover:bg-emerald-500/10 transition-all duration-1000" />

                        <div className="max-w-3xl mx-auto space-y-12">
                            <h2 className="text-xs font-mono tracking-[0.5em] text-emerald-400 uppercase font-bold">Portfolio</h2>
                            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1]">
                                Dive into my <br />
                                <span className="gradient-text">Visual Universe.</span>
                            </h3>
                            <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed">
                                I believe in showing, not just telling. Click below to explore my comprehensive body of work on Behance, featuring 14 years of creative professional projects and design expertise.
                            </p>

                            <div className="pt-10">
                                <a
                                    href={portfolioData.contact.behance}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-6 px-12 py-6 bg-white text-black rounded-full text-xl font-bold hover:scale-105 hover:bg-emerald-400 transition-all duration-500 group shadow-2xl shadow-emerald-500/10"
                                >
                                    Explore my work on Behance
                                    <ExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Creative Focus Section */}
                <section className="scroll-mt-32 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10 order-2 md:order-1">
                            <h2 className="text-xs font-mono tracking-[0.5em] text-emerald-400 uppercase font-bold">Creative Focus</h2>
                            <h3 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight">
                                Design with <br />
                                <span className="text-white/40 italic">purpose.</span>
                            </h3>
                            <p className="text-white/50 text-xl font-light leading-relaxed max-w-xl">
                                My approach combines 14 years of professional technical expertise with a creative eye for modern aesthetics. I focus on delivering results that aren't just beautiful, but strategically effective.
                            </p>
                            <div className="flex gap-4">
                                <div className="h-0.5 w-12 bg-emerald-500 mt-4" />
                                <p className="text-white/30 font-mono text-sm uppercase tracking-widest">Innovation · Excellence · Precision</p>
                            </div>
                        </div>
                        <div className="relative order-1 md:order-2 px-4 md:px-0 mt-10 md:mt-0">
                            <div className="aspect-[4/5] relative rounded-[3rem] overflow-hidden glass-card scale-95 hover:scale-100 transition-transform duration-700 hover:border-emerald-500/30 group z-10">
                                <img src="/creative_life_1.jpg" alt="Creative work" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                            </div>

                            {/* Original floating image */}
                            <div className="absolute -bottom-10 -left-10 w-2/3 aspect-[4/3] rounded-[2.5rem] overflow-hidden border-[12px] border-background glass-card hidden md:block hover:scale-105 transition-transform duration-500 shadow-2xl z-20">
                                <img src="/creative_life_2.jpg" alt="Creative focus" className="w-full h-full object-cover" />
                            </div>

                            {/* New added image (Old Hero Image) */}
                            <div className="absolute -top-12 -right-8 w-1/2 aspect-square rounded-[2rem] overflow-hidden border-[8px] border-background glass-card hidden md:block hover:scale-110 transition-transform duration-500 shadow-2xl z-30">
                                <img src="/profile_main.jpg" alt="Profile Detail" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="scroll-mt-32 pt-20 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start border-t border-white/5 pt-20">
                        {/* Left Side: Contact Info */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-10">
                            <div>
                                <h2 className="text-emerald-400 font-mono text-xs tracking-[0.5em] uppercase mb-6 font-bold">Get In Touch</h2>
                                <h3 className="text-6xl md:text-7xl font-bold tracking-tighter mb-8">Let's create something <span className="gradient-text">iconic.</span></h3>
                                <p className="text-white/60 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                                    Feel free to contact me for professional image editing, creative design projects, or collaboration opportunities.
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 text-lg text-white/80">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-emerald-400" />
                                    <span>{portfolioData.contact.phone}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-emerald-400" />
                                    <span>{portfolioData.contact.email}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
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
                <footer className="flex flex-col md:flex-row justify-between items-center pt-20 pb-10 border-t border-white/5 text-white/50 font-mono text-xs uppercase tracking-[0.3em] gap-6">
                    <div className="max-w-xl text-center md:text-left">{portfolioData.footerBio}</div>
                    <div>© {new Date().getFullYear()} · {portfolioData.name}</div>
                </footer>
            </div>
        </main>
    );
}
