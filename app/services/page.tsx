import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export const metadata: Metadata = {
    title: "Services — Shadhin Rahman",
    description: "Professional photo retouching, clipping path, ghost mannequin, background removal, color correction and image editing services by Shadhin Rahman.",
};

export default function ServicesPage() {
    return (
        <main id="top" className="min-h-screen mesh-gradient transition-colors duration-500">
            <PageHeader
                eyebrow="What I Do"
                title={
                    <>
                        Core <span className="text-brand-700 dark:text-brand-400">specialties.</span>
                    </>
                }
                description="From high-end retouching to precise clipping paths — professional image editing and creative design that meets international standards."
            />
            <Services />
            <Skills />
        </main>
    );
}