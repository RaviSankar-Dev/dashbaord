import React from 'react';
import { QrCode, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-surface-light/30 backdrop-blur-3xl pt-24 pb-12 mt-20 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <span className="font-display font-bold text-3xl tracking-tighter text-white">
              Nexus<span className="text-primary-light">.</span>
            </span>
            <p className="max-w-sm text-text-muted text-sm leading-relaxed">
              Crafting state-of-the-art digital aesthetics for forward-thinking brands. 
              The intersection of design, technology, and 2026 innovation.
            </p>
          </div>

          {/* Connect Col */}
          <div className="space-y-6">
            <h4 className="font-display font-semibold text-white tracking-wide">Connect</h4>
            <div className="flex flex-col gap-4 text-sm font-medium">
              <a href="mailto:hello@example.com" className="text-text-muted hover:text-white transition-colors inline-flex items-center gap-1 w-max group">
                hello@example.com <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#" className="text-text-muted hover:text-white transition-colors inline-flex items-center gap-1 w-max group">
                Twitter <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#" className="text-text-muted hover:text-white transition-colors inline-flex items-center gap-1 w-max group">
                LinkedIn <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* QR Col */}
          <div className="space-y-6">
            <h4 className="font-display font-semibold text-white tracking-wide">Explore</h4>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 w-max group hover:border-primary-light/50 transition-colors">
              <QrCode size={48} className="text-white group-hover:text-primary-light transition-colors" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
              Scan to view on mobile
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-xs text-text-muted font-medium">
          <p>© {new Date().getFullYear()} Nexus Studio. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
