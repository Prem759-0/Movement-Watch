"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="reserve" className="bg-[#030303] pt-32 md:pt-48 pb-12 relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-offwhite mb-6 uppercase tracking-widest">
            Private Appointment
          </h2>
          <p className="font-sans text-base text-offwhite-muted font-light max-w-lg mx-auto">
            These pieces are strictly limited in production. Register your interest to arrange a private viewing at our Geneva manufacture or via an exclusive digital consultation.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12 mb-32"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <input 
                type="text" 
                id="name"
                className="w-full bg-transparent border-b border-white/20 py-4 font-sans text-offwhite placeholder-transparent focus:outline-none focus:border-accent peer transition-colors"
                placeholder="Full Name"
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 top-4 font-sans text-sm text-offwhite-muted uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs"
              >
                Full Name
              </label>
            </div>
            <div className="relative">
              <input 
                type="email" 
                id="email"
                className="w-full bg-transparent border-b border-white/20 py-4 font-sans text-offwhite placeholder-transparent focus:outline-none focus:border-accent peer transition-colors"
                placeholder="Email Address"
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 top-4 font-sans text-sm text-offwhite-muted uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs"
              >
                Email Address
              </label>
            </div>
          </div>
          <div className="relative">
            <input 
              type="text" 
              id="location"
              className="w-full bg-transparent border-b border-white/20 py-4 font-sans text-offwhite placeholder-transparent focus:outline-none focus:border-accent peer transition-colors"
              placeholder="City, Country"
            />
            <label 
              htmlFor="location" 
              className="absolute left-0 top-4 font-sans text-sm text-offwhite-muted uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-accent peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-xs"
            >
              City, Country
            </label>
          </div>
          
          <div className="pt-8 text-center">
            <button 
              type="submit" 
              className="bg-accent/10 border border-accent/50 text-accent font-sans text-xs uppercase tracking-[0.3em] py-5 px-12 hover:bg-accent hover:text-black transition-colors duration-500"
            >
              Request Invitation
            </button>
          </div>
        </motion.form>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-serif text-xl tracking-wide text-offwhite-muted">
            HAUTE HORLOGERIE
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-sans text-xs uppercase tracking-widest text-offwhite-muted hover:text-white transition-colors">Privacy</a>
            <a href="#" className="font-sans text-xs uppercase tracking-widest text-offwhite-muted hover:text-white transition-colors">Terms</a>
            <a href="#" className="font-sans text-xs uppercase tracking-widest text-offwhite-muted hover:text-white transition-colors">Contact</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
