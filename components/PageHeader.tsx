import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";

export default function PageHeader({
    eyebrow,
    title,
    description,
}: {
    eyebrow: string;
    title: ReactNode;
    description?: string;
}) {
    return (
        <section className="pt-40 md:pt-44 pb-16 md:pb-20 px-6 relative overflow-hidden">
            <div className="brand-halo top-[5%] right-[-10%] w-[420px] h-[420px] opacity-50" />
            <div className="brand-halo bottom-[-10%] left-[-10%] w-[360px] h-[360px] opacity-30" />

            <div className="max-w-7xl mx-auto relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#1d1b16]/60 dark:text-white/60 hover:text-brand-700 dark:hover:text-brand-400 transition-colors mb-10"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to home
                </Link>

                <span className="text-sm font-mono font-bold uppercase tracking-[0.4em] text-brand-700 dark:text-brand-400 mb-6 block">
                    {eyebrow}
                </span>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.12] logo-text text-[#1d1b16] dark:text-[#f5f2ec] max-w-4xl">
                    {title}
                </h1>
                {description && (
                    <p className="mt-8 text-lg md:text-2xl text-[#1d1b16]/60 dark:text-white/60 font-light leading-[1.85] max-w-2xl">
                        {description}
                    </p>
                )}
            </div>
        </section>
    );
}