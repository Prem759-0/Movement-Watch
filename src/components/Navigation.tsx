"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // custom cubic-bezier
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        isScrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 h-24 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-serif text-xl tracking-wide transition-all drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-offwhite via-white to-offwhite hover:from-accent hover:via-accent-bright hover:to-accent bg-[length:200%_auto] hover:animate-shimmer"
        >
          HAUTE HORLOGERIE
        </Link>
        <ul className="flex items-center gap-8 md:gap-12">
          {["The Watch", "Movement"].map((item) => (
            <li key={item} className="relative group">
              <Link
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-xs uppercase tracking-[0.2em] text-offwhite-muted hover:text-offwhite transition-colors"
              >
                {item}
              </Link>
              {/* Subtle underline animation on hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
          <li>
            <Link
              href="#reserve"
              className="relative overflow-hidden group text-xs uppercase tracking-[0.2em] text-accent transition-all duration-500 border border-accent/40 px-6 py-2.5 rounded-sm hover:border-accent hover:shadow-[0_0_20px_rgba(201,160,92,0.4)] hover:text-white flex items-center justify-center bg-black/20"
            >
              <span className="relative z-10">Reserve</span>
              {/* Sweeping light reflection animation */}
              <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-accent-bright/30 to-transparent skew-x-12 group-hover:animate-[shimmer_1.5s_infinite] transition-all duration-700 ease-in-out group-hover:translate-x-[150%]" />
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
