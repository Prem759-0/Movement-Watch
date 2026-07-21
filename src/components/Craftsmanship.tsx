"use client";

import { motion } from "framer-motion";

export default function Craftsmanship() {
  return (
    <section id="movement" className="py-32 md:py-48 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-offwhite mb-6 uppercase tracking-widest text-center md:text-left drop-shadow-md">
            The Movement
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-accent/50 via-accent/20 to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">
          
          {/* Decorative vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/30 via-accent/10 to-transparent transform -translate-x-1/2" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:pr-12"
          >
            <p className="font-serif text-2xl md:text-3xl text-white leading-relaxed mb-8 drop-shadow-sm">
              At the heart of the Bugatti Chiron Tourbillon lies a movement that transcends mere timekeeping, venturing into the realm of kinetic sculpture.
            </p>
            <p className="font-sans text-lg text-offwhite-muted font-light leading-loose text-justify">
              Every bridge is hand-beveled, every jewel meticulously set by a single master watchmaker. The skeletonized architecture is not simply an aesthetic choice, but a philosophy of total transparency. We strip away the superfluous to reveal the pulsating heart of the machine—a twin-axis flying tourbillon that dances against gravity.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:pl-12 flex flex-col justify-center"
          >
            <p className="font-sans text-lg text-offwhite-muted font-light leading-loose mb-8 text-justify">
              The perpetual calendar module is engineered to track the celestial mechanics of our solar system without requiring adjustment for over a century. It is a testament to the enduring pursuit of absolute precision. 
            </p>
            <div className="pl-6 border-l-2 border-accent/40 my-4">
              <p className="font-serif text-xl italic text-offwhite/90 leading-relaxed drop-shadow-sm">
                "Time is no longer just measured; it is laid bare."
              </p>
            </div>
            <p className="font-sans text-lg text-offwhite-muted font-light leading-loose mt-4 text-justify">
              Forged in 18K rose gold, the case frames this mechanical ballet like a museum vitrine. It requires over 300 hours of hand-finishing to achieve the warm, flawless luster that defines the Luxe signature.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
