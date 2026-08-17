const tickerItems = [
    "Professional Photo Editing",
    "Clipping Path & Masking",
    "Ghost Mannequin",
    "Background Removal",
    "Color Correction",
    "Photo Retouching",
    "Team Leadership",
    "Quality Control",
    "UI/UX Design",
];

export default function Ticker() {
    const row = [...tickerItems, ...tickerItems];
    return (
        <div className="relative border-y border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/[0.02] backdrop-blur-md overflow-hidden py-5">
            <div className="ticker-track">
                {row.map((item, i) => (
                    <span
                        key={`${item}-${i}`}
                        className="flex items-center gap-8 px-8 whitespace-nowrap text-sm md:text-base font-bold uppercase tracking-[0.2em] text-[#1d1b16]/60 dark:text-white/60"
                    >
                        {item}
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-300" />
                    </span>
                ))}
            </div>
        </div>
    );
}