import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
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
          ? 'bg-background/70 backdrop-blur-xl border-white/10 py-4 shadow-2xl shadow-primary/5' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Brand */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-surface-light to-surface border border-white/10 overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Sparkles className="w-5 h-5 text-primary-light" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
            Nexus<span className="text-primary-light">.</span>
          </span>
        </motion.div>

        {/* Right: CTA */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4"
        >
          <a 
            href="https://wa.me/yournumber" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-text-muted hover:text-white transition-colors"
          >
            WhatsApp
          </a>
          <a 
            href="mailto:contact@example.com"
            className="group relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary-light to-accent-light opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span>Hire Us</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
