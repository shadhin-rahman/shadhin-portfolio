import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import CreativeFocus from "@/components/CreativeFocus";

export const metadata: Metadata = {
    title: "About — Shadhin Rahman",
    description: "Meet Shadhin Rahman — Senior Graphic Designer & Service Manager with 14+ years of experience in professional image editing and creative design.",
};

export default function AboutPage() {
    return (
        <main id="top" className="min-h-screen mesh-gradient transition-colors duration-500">
            <PageHeader
                eyebrow="About Me"
                title={
                    <>
                        Crafting visual{" "}
                        <span className="text-brand-700 dark:text-brand-300">excellence</span> for 14+ years.
                    </>
                }
                description="Senior Graphic Designer & Service Manager based in Dhaka, Bangladesh — specializing in high-end image editing, creative design, and team leadership."
            />
            <About />
            <Experience />
            <Education />
            <CreativeFocus />
        </main>
    );
}