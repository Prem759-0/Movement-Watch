"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  scrollProgress: MotionValue<number>;
}

export default function TertiaryOverlays({ scrollProgress }: Props) {
  // 0–20%
  const opacity1 = useTransform(scrollProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
  
  // 20–45%
  const opacity2 = useTransform(scrollProgress, [0.2, 0.25, 0.4, 0.45], [0, 1, 1, 0]);
  
  // 45–75%
  const opacity3 = useTransform(scrollProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
  
  // 75–100%
  const opacity4 = useTransform(scrollProgress, [0.75, 0.8, 0.95, 1], [0, 1, 1, 1]); 

  return (
    <div className="absolute inset-0 pointer-events-none">
      
      {/* 0–20% */}
      <motion.div 
        style={{ opacity: opacity1 }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-0"
      >
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-offwhite mb-4 tracking-tight drop-shadow-lg">
          A New Dimension
        </h2>
        <p className="font-sans text-lg md:text-xl text-offwhite-muted tracking-wide font-light">
          The profile of perfection.
        </p>
      </motion.div>

      {/* 20–45% */}
      <motion.div 
        style={{ opacity: opacity2 }}
        className={cn(
          "absolute inset-0 flex flex-col justify-center px-6 md:px-24 lg:px-32",
          "items-center justify-end pb-24 md:items-start md:justify-center md:pb-0" 
        )}
      >
        <div className="max-w-md text-center md:text-left">
          <h2 className="font-serif text-3xl md:text-5xl text-offwhite mb-4 leading-snug">
            Multi-axis<br />Tourbillon
          </h2>
          <p className="font-sans text-base text-offwhite-muted font-light leading-relaxed">
            Defying gravity from every conceivable angle, the twin-axis tourbillon commands the lower hemisphere.
          </p>
        </div>
      </motion.div>

      {/* 45–75% */}
      <motion.div 
        style={{ opacity: opacity3 }}
        className={cn(
          "absolute inset-0 flex flex-col justify-center px-6 md:px-24 lg:px-32",
          "items-center justify-end pb-24 md:items-end md:justify-center md:pb-0" 
        )}
      >
        <div className="max-w-md text-center md:text-right">
          <h2 className="font-serif text-3xl md:text-5xl text-offwhite mb-4 leading-snug">
            Sapphire<br />Architecture
          </h2>
          <p className="font-sans text-base text-offwhite-muted font-light leading-relaxed">
            The domed crystal acts as a lens, letting light dictate form and revealing unparalleled mechanical depth.
          </p>
        </div>
      </motion.div>

      {/* 75–100% */}
      <motion.div 
        style={{ opacity: opacity4 }}
        className={cn(
          "absolute inset-0 flex flex-col justify-center px-6 md:px-0",
          "items-center justify-end pb-24 md:justify-center md:pb-0" 
        )}
      >
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-5xl text-offwhite mb-8 leading-snug">
            Unparalleled Depth.
          </h2>
        </div>
      </motion.div>
      
    </div>
  );
}
