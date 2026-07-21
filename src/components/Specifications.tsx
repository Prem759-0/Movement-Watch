"use client";

import { motion } from "framer-motion";

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
    <section id="the-watch" className="py-32 md:py-48 bg-black relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-offwhite mb-6 uppercase tracking-widest text-center md:text-left">
            Specifications
          </h2>
          <div className="h-px w-full bg-accent/30" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
          {specs.map((group, groupIdx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: groupIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="font-sans text-xs uppercase tracking-[0.3em] text-accent mb-8">
                {group.category}
              </h3>
              <dl className="space-y-6">
                {group.details.map((item) => (
                  <div key={item.label} className="flex justify-between border-b border-white/10 pb-4">
                    <dt className="font-sans text-sm text-offwhite-muted tracking-wide">{item.label}</dt>
                    <dd className="font-sans text-sm text-offwhite text-right max-w-[60%]">{item.value}</dd>
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
