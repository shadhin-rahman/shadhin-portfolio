import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Cursor from "@/components/Cursor";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Motiur Rahman Shadhin | Portfolio",
    description: "Service Manager & Senior Graphic Designer Portfolio",
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
        <html lang="en">
            <body className={inter.className}>
                <div className="grain" />
                <Cursor />
                {children}
            </body>
        </html>
    );
}
