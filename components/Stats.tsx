"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const duration = 1600;
        const start = performance.now();
        let raf: number;
        const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, value]);

    return (
        <span ref={ref}>
            {display}
            {suffix}
        </span>
    );
}

const stats = [
    { value: 14, suffix: "+", label: "Years of Experience" },
    { value: 3, suffix: "", label: "Leadership Roles" },
    { value: 8, suffix: "", label: "Core Specialties" },
    { value: 100, suffix: "%", label: "Quality Commitment" },
];

export default function Stats() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 rounded-[2.5rem] bg-[#1d1b16] p-8 md:p-12 overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-400/20 rounded-full blur-[100px] -z-0" />
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.7 }}
                        className="relative z-10 text-center lg:text-left"
                    >
                        <div className="text-5xl md:text-7xl font-black tracking-tighter logo-text text-white">
                            <CountUp value={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="mt-3 flex items-center justify-center lg:justify-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                            <p className="text-sm md:text-base font-semibold uppercase tracking-[0.15em] text-white/60">
                                {stat.label}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}