"use client";

import { motion } from "framer-motion";

export default function Craftsmanship() {
  return (
    <section id="movement" className="py-32 md:py-48 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-offwhite mb-6 uppercase tracking-widest text-center md:text-left">
            The Movement
          </h2>
          <div className="h-px w-full bg-accent/30" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-serif text-xl md:text-2xl text-offwhite leading-relaxed mb-8">
              At the heart of the Astronomia Luxe lies a movement that transcends mere timekeeping, venturing into the realm of kinetic sculpture.
            </p>
            <p className="font-sans text-base text-offwhite-muted font-light leading-loose">
              Every bridge is hand-beveled, every jewel meticulously set by a single master watchmaker. The skeletonized architecture is not simply an aesthetic choice, but a philosophy of total transparency. We strip away the superfluous to reveal the pulsating heart of the machine—a twin-axis flying tourbillon that dances against gravity.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-sans text-base text-offwhite-muted font-light leading-loose mb-8">
              The perpetual calendar module is engineered to track the celestial mechanics of our solar system without requiring adjustment for over a century. It is a testament to the enduring pursuit of absolute precision. 
            </p>
            <p className="font-sans text-base text-offwhite-muted font-light leading-loose">
              Forged in 18K rose gold, the case frames this mechanical ballet like a museum vitrine. It requires over 300 hours of hand-finishing to achieve the warm, flawless luster that defines the Luxe signature. Time is no longer just measured; it is laid bare.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
