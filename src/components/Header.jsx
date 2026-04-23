import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = ({ onHome }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-background/80 backdrop-blur-xl border-black/5 py-4 shadow-xl' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Brand */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onHome}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-14 h-14 md:w-20 md:h-20 flex items-center justify-center rounded-2xl md:rounded-3xl bg-primary border border-primary/10 overflow-hidden shadow-2xl shrink-0">
            <Sparkles className="w-7 h-7 md:w-10 md:h-10 text-white" />
          </div>
          <div className="flex flex-col -space-y-1 md:-space-y-2">
            <span className="font-display font-black text-2xl md:text-4xl lg:text-5xl tracking-tighter text-text leading-none uppercase">
              CRK Visionera
            </span>
            <span className="font-display font-bold text-lg md:text-2xl lg:text-3xl tracking-[0.2em] text-primary uppercase leading-tight">
              Technologies Pvt Ltd
            </span>
          </div>
        </motion.div>

        {/* Right: CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <a 
            href="https://wa.me/9346608305" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-text-muted hover:text-primary transition-colors"
          >
            WhatsApp
          </a>
          <a 
            href="mailto:crktech@gmail.com"
            className="group relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-white font-semibold text-sm overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-lg"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
