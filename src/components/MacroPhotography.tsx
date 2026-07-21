"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MacroPhotography() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={containerRef} className="relative h-[70vh] md:h-[100vh] w-full overflow-hidden bg-black">
      <motion.div 
        className="absolute inset-0 w-full h-[140%] -top-[20%] bg-cover bg-center"
        style={{ 
          y,
          backgroundImage: "url('/1-frames/frame-0110.png')"
        }}
      />
      
      {/* Overlay to blend with the dark theme */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Gradient fades at top and bottom to seamlessly blend with adjacent sections */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
