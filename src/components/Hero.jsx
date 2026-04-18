import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 hero-gradient">
      {/* Background blobs for extra flair */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Portfolio Showcase
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-text mb-6 tracking-tight">
            Explore <span className="text-transparent bg-clip-text primary-gradient">Our Work</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Scan • Explore • Connect
          </p>
          
          <div className="flex justify-center">
            <div className="h-1 w-20 primary-gradient rounded-full opacity-50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
