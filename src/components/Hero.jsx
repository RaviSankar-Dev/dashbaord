import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CinematicJourney from './CinematicJourney';

const Hero = () => {
  // Staggered Text Animation Variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 6.5 },
    },
  };

  const fadeUpVars = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-screen">
      <CinematicJourney />


      {/* 4. Content Layer */}
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-30 text-center flex flex-col items-center"
      >
        
        {/* Animated Pill Component */}
        <motion.div 
          variants={fadeUpVars}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full mb-10 border border-primary/20 bg-primary/5 backdrop-blur-xl shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Premium Saas Experience
          </span>
        </motion.div>

        {/* Direct Title Reveal */}
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <motion.h1 
            variants={fadeUpVars}
            className="text-5xl sm:text-7xl lg:text-[6rem] font-bold text-text font-display leading-[1.1] tracking-tight mb-8"
          >
            Designing the <br className="hidden sm:block" />
            <span className="animate-gradient-shift bg-gradient-to-r from-primary via-primary-light to-primary bg-[size:200%_auto] text-transparent bg-clip-text inline-block pb-2">
              Future of Web.
            </span>
          </motion.h1>

          <motion.p 
            variants={fadeUpVars}
            className="text-lg sm:text-xl text-text-muted max-w-2xl mx-auto font-medium leading-relaxed mb-14"
          >
            A curated showcase of high-performance, aesthetically driven digital experiences 
            built for the 2026 standard. Calm, futuristic, and impressively minimal.
          </motion.p>
        </div>

        {/* Button Animation */}
        <motion.div
           variants={fadeUpVars}
           className="relative group"
        >
          {/* Outer glow layer */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
          
          <button 
            onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} 
            className="relative px-8 py-4 bg-primary text-white border border-primary/20 rounded-full flex items-center justify-center space-x-3 transition-all duration-300 group-hover:scale-105 active:scale-95 shadow-2xl"
          >
            <span className="font-semibold text-white tracking-wide text-sm">Explore Our Projects</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-[#94A3B8] uppercase tracking-[0.3em] font-semibold">Scroll</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
           className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
