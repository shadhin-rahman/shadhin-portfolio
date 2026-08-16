import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const bodyFont = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
});

const displayFont = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-display",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Shadhin Rahman — Senior Graphic Designer & Service Manager",
    description: "Creative portfolio of Shadhin Rahman — Senior Graphic Designer & Service Manager with 14+ years of experience in professional image editing, photo retouching, clipping path and creative design.",
    icons: {
        icon: "/favicon.png",
        shortcut: "/favicon.png",
        apple: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"){document.documentElement.classList.add("dark");}}catch(e){}})();`,
                    }}
                />
            </head>
            <body className={`${bodyFont.variable} ${displayFont.variable}`}>
                <div className="grain" />
                <Cursor />
                <Navbar />
                {children}
                <Footer />
                <WhatsAppFloat />
            </body>
        </html>
    );
}