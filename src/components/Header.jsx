import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 primary-gradient rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
            P
          </div>
          <span className="font-display font-bold text-xl text-text hidden sm:block tracking-tight">
            Portfolio<span className="text-primary italic">.</span>
          </span>
        </div>

        {/* Center: Title */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <h1 className="text-lg font-semibold text-text/80 tracking-wide uppercase">
            Our Works Dashboard
          </h1>
        </div>

        {/* Right: Buttons */}
        <div className="flex items-center gap-3">
          <a 
            href="https://wa.me/yournumber" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 hover:border-accent hover:bg-accent/5 text-slate-700 hover:text-accent transition-all duration-300 font-medium text-sm"
          >
            <MessageSquare size={18} />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>
          <a 
            href="mailto:contact@example.com"
            className="flex items-center gap-2 px-4 py-2 rounded-full primary-gradient text-white shadow-lg shadow-primary/25 hover:scale-105 transition-all duration-300 font-medium text-sm"
          >
            <Phone size={18} />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
