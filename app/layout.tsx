import type { Metadata } from "next";
import Cursor from "@/components/Cursor";
import "./globals.css";

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
        <html lang="en">
            <body>
                <div className="grain" />
                <Cursor />
                {children}
            </body>
        </html>
    );
}
