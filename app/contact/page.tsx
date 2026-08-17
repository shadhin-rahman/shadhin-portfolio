import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
    title: "Contact — Shadhin Rahman",
    description: "Get in touch with Shadhin Rahman for professional image editing, creative design projects, or collaboration opportunities.",
};

export default function ContactPage() {
    return (
        <main id="top" className="min-h-screen mesh-gradient transition-colors duration-500">
            <PageHeader
                eyebrow="Get In Touch"
                title={
                    <>
                        Let's create something{" "}
                        <span className="text-brand-700 dark:text-brand-300">iconic.</span>
                    </>
                }
                description="Feel free to contact me for professional image editing, creative design projects, or collaboration opportunities."
            />
            <Contact />
        </main>
    );
}