"use client";;
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import React, { useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  gradientFrom = "#34d399", // emerald-400
  gradientTo = "#8b5cf6"   // violet-600
}) {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  const handleMouseMove = useCallback((e) => {
    if (cardRef.current) {
      const { left, top } = cardRef.current.getBoundingClientRect();
      const clientX = e.clientX;
      const clientY = e.clientY;
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
  }, [mouseX, mouseY]);

  const handleMouseOut = useCallback((e) => {
    if (!e.relatedTarget) {
      document.removeEventListener("mousemove", handleMouseMove);
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
    }
  }, [handleMouseMove, mouseX, gradientSize, mouseY]);

  const handleMouseEnter = useCallback(() => {
    document.addEventListener("mousemove", handleMouseMove);
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [handleMouseMove, mouseX, gradientSize, mouseY]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [handleMouseEnter, handleMouseMove, handleMouseOut]);

  useEffect(() => {
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  }, [gradientSize, mouseX, mouseY]);

  return (
    <div
      ref={cardRef}
      className={cn("group relative rounded-[inherit]", className)}>
      {/* Normal border */}
      <div className="absolute inset-0 rounded-[inherit] border border-border pointer-events-none z-0" />
      {/* Glowing animated border only under the spotlight, visible only in the border area */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-10"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, white 80%, transparent 100%)
          `,
          maskImage: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, white 80%, transparent 100%)
          `,
          border: '2px solid transparent',
          borderImage: useMotionTemplate`
            linear-gradient(90deg, ${gradientFrom}, #38bdf8, ${gradientTo}) 1
          `,
          borderRadius: 'inherit',
          boxSizing: 'border-box',
          pointerEvents: 'none',
          // Only show the border area, not the fill
          background: 'none',
        }}
      />
      {/* Card background */}
      <div className="absolute inset-px rounded-[inherit] bg-background z-0" />
      {/* Optional: subtle spotlight overlay for content */}
      <motion.div
        className="pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
}
