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
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-700",
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 h-24 flex items-center justify-between">
        <Link 
          href="/" 
          className="font-serif text-2xl tracking-wide text-offwhite hover:text-white transition-colors"
        >
          ASTRONOMIA
        </Link>
        <ul className="flex items-center gap-8 md:gap-12">
          {["The Watch", "Movement"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-xs uppercase tracking-[0.2em] text-offwhite-muted hover:text-offwhite transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#reserve"
              className="text-xs uppercase tracking-[0.2em] text-accent hover:text-white transition-colors"
            >
              Reserve
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
