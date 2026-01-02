"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { damping: 25, stiffness: 200 };
    const cursorX = useSpring(0, springConfig);
    const cursorY = useSpring(0, springConfig);

    useEffect(() => {
        const moveMouse = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest("a, button, [role='button']")) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveMouse);
        window.addEventListener("mouseover", handleHover);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mouseover", handleHover);
        };
    }, []);

    return (
        <motion.div
            style={{
                translateX: cursorX,
                translateY: cursorY,
            }}
            animate={{
                scale: isHovering ? 2 : 1,
                backgroundColor: isHovering ? "rgba(16, 185, 129, 0.3)" : "rgba(16, 185, 129, 0.15)",
                border: isHovering ? "1px solid rgba(16, 185, 129, 0.5)" : "1px solid rgba(16, 185, 129, 0.3)",
            }}
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] hidden md:block backdrop-blur-[2px]"
        />
    );
}
