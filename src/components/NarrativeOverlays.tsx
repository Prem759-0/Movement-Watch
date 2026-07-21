"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  scrollProgress: MotionValue<number>;
}

export default function NarrativeOverlays({ scrollProgress }: Props) {
  // 0–20%: Assembled
  const opacity1 = useTransform(scrollProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  
  // 20–45%: Dial lifts away
  const opacity2 = useTransform(scrollProgress, [0.2, 0.25, 0.4, 0.45], [0, 1, 1, 0]);
  
  // 45–75%: Movement exposed
  const opacity3 = useTransform(scrollProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
  
  // 75–100%: Fully exploded
  const opacity4 = useTransform(scrollProgress, [0.75, 0.8, 0.95, 1], [0, 1, 1, 1]); // keep visible at the end

  return (
    <div className="absolute inset-0 pointer-events-none">
      
      {/* 0–20%: Assembled */}
      <motion.div 
        style={{ opacity: opacity1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-0"
      >
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-offwhite mb-4 tracking-tight drop-shadow-lg">
          Astronomia Luxe
        </h1>
        <p className="font-sans text-lg md:text-xl text-offwhite-muted tracking-wide font-light">
          Time, laid bare.
        </p>
      </motion.div>

      {/* 20–45%: Dial lifts away */}
      <motion.div 
        style={{ opacity: opacity2 }}
        className={cn(
          "absolute inset-0 flex flex-col justify-center px-6 md:px-24 lg:px-32",
          "items-center justify-end pb-24 md:items-start md:justify-center md:pb-0" // mobile bottom, desktop left
        )}
      >
        <div className="max-w-md text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-5xl text-offwhite mb-4 leading-snug">
            A perpetual calendar<br />with nothing to hide.
          </h2>
          <p className="font-sans text-base text-offwhite-muted font-light leading-relaxed">
            The skeletonized dial and celestial moonphase float above the intricate mechanics, inviting the eye deeper.
          </p>
        </div>
      </motion.div>

      {/* 45–75%: Movement exposed */}
      <motion.div 
        style={{ opacity: opacity3 }}
        className={cn(
          "absolute inset-0 flex flex-col justify-center px-6 md:px-24 lg:px-32",
          "items-center justify-end pb-24 md:items-end md:justify-center md:pb-0" // mobile bottom, desktop right
        )}
      >
        <div className="max-w-md text-center md:text-right">
          <h2 className="font-serif text-3xl md:text-5xl text-offwhite mb-4 leading-snug">
            407 components.<br />Zero shortcuts.
          </h2>
          <p className="font-sans text-base text-offwhite-muted font-light leading-relaxed">
            Twin balance wheels, ruby jewels, and hand-finished bridges orchestrated in perfect synchrony.
          </p>
        </div>
      </motion.div>

      {/* 75–100%: Fully exploded */}
      <motion.div 
        style={{ opacity: opacity4 }}
        className={cn(
          "absolute inset-0 flex flex-col justify-center px-6 md:px-0",
          "items-center justify-end pb-24 md:justify-center md:pb-0" // mobile bottom, desktop center
        )}
      >
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-offwhite mb-8 leading-snug">
            Assembled by one watchmaker,<br />start to finish.
          </h2>
          <a 
            href="#reserve" 
            className="pointer-events-auto inline-block text-accent uppercase tracking-[0.2em] text-sm border-b border-accent pb-1 hover:text-white hover:border-white transition-colors"
          >
            Reserve yours
          </a>
        </div>
      </motion.div>
      
    </div>
  );
}
