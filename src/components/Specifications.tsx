"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const specs = [
  {
    category: "Movement",
    details: [
      { label: "Caliber", value: "AL-800 Hand-wound skeletonized" },
      { label: "Components", value: "407" },
      { label: "Power Reserve", value: "72 hours" },
      { label: "Frequency", value: "3 Hz (21,600 vph)" },
    ]
  },
  {
    category: "Complications",
    details: [
      { label: "Primary", value: "Perpetual Calendar" },
      { label: "Astronomical", value: "3D Moonphase, Star Chart" },
      { label: "Tourbillon", value: "Twin-axis flying tourbillon" },
    ]
  },
  {
    category: "Case",
    details: [
      { label: "Material", value: "18K Rose Gold" },
      { label: "Diameter", value: "43.5 mm" },
      { label: "Thickness", value: "12.8 mm" },
      { label: "Crystal", value: "Domed Sapphire, anti-reflective" },
    ]
  },
  {
    category: "Additional",
    details: [
      { label: "Water Resistance", value: "30 meters (3 ATM)" },
      { label: "Strap", value: "Hand-stitched brown alligator" },
      { label: "Buckle", value: "18K Rose Gold folding clasp" },
    ]
  }
];

export default function Specifications() {
  return (
    <section id="the-watch" className="py-32 md:py-48 bg-transparent relative z-10 border-t border-accent/20 overflow-hidden">
      {/* Subtle ambient glow behind the specs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-6 uppercase tracking-widest text-center md:text-left drop-shadow-md bg-clip-text text-transparent bg-gradient-to-r from-white via-offwhite to-accent-bright">
            Specifications
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-accent/50 via-accent/20 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {specs.map((group, groupIdx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: groupIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group rounded-xl p-8 bg-black/40 backdrop-blur-md border border-white/5 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(201,160,92,0.05)] hover:-translate-y-1"
            >
              {/* Subtle top edge highlight */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-accent-bright mb-8 flex items-center">
                <span className="w-6 h-px bg-accent/50 mr-4"></span>
                {group.category}
              </h3>
              <dl className="space-y-1">
                {group.details.map((item) => (
                  <div 
                    key={item.label} 
                    className="group/row flex justify-between border-b border-accent/10 py-4 px-2 hover:bg-white/[0.03] transition-colors rounded-sm border-l-2 border-l-transparent hover:border-l-accent-bright"
                  >
                    <dt className="font-sans text-sm text-offwhite-muted tracking-wide transition-colors duration-300 group-hover/row:text-offwhite">{item.label}</dt>
                    <dd className="font-sans text-sm text-offwhite text-right max-w-[60%] transition-colors duration-300 group-hover/row:text-white font-light">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
