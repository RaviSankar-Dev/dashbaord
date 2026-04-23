import React from 'react';
import { QrCode, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-primary/10 bg-white/50 backdrop-blur-3xl pt-24 pb-12 mt-20 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <span className="font-display font-black text-xl lg:text-2xl tracking-tighter text-text uppercase leading-none">
              CRK Visionera <br /> 
              <span className="text-primary">Technologies Pvt Ltd.</span>
            </span>
            <p className="max-w-sm text-text-muted text-sm leading-relaxed">
              Crafting state-of-the-art digital aesthetics for forward-thinking brands. 
              The intersection of design, technology, and 2026 innovation.
            </p>
          </div>

          {/* Connect Col */}
          <div className="space-y-6">
            <h4 className="font-display font-semibold text-text tracking-wide">Connect</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="mailto:crktech@gmail.com" className="text-text-muted hover:text-primary transition-colors inline-flex items-center gap-1 w-max group">
                crktech@gmail.com <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="tel:9346608305" className="text-text-muted hover:text-primary transition-colors inline-flex items-center gap-1 w-max group">
                +91 93466 08305 <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="tel:6303407430" className="text-text-muted hover:text-primary transition-colors inline-flex items-center gap-1 w-max group">
                +91 63034 07430 <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="tel:7780447363" className="text-text-muted hover:text-primary transition-colors inline-flex items-center gap-1 w-max group">
                +91 77804 47363 <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>


        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-primary/5 text-xs text-text-muted font-medium">
          <p>© {new Date().getFullYear()} CRK VISIONERA TECHNOLOGIES PRIVATE LIMITED. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
