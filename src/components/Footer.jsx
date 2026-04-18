import React from 'react';
import { QrCode, Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-400">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-slate-800 pb-12 mb-10">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-4">
              <div className="w-8 h-8 primary-gradient rounded-lg flex items-center justify-center text-white font-bold">P</div>
              <span className="font-display font-bold text-xl text-white tracking-tight">Portfolio.</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              Showcasing excellence through modern digital solutions. Scan to connect with us.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-3 bg-white rounded-2xl mb-4 shadow-xl shadow-primary/10">
              <QrCode size={40} className="text-slate-900" />
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-white mb-2">
              Scan QR to Explore More
            </p>
            <div className="h-0.5 w-10 primary-gradient rounded-full" />
          </div>

          <div className="flex flex-col items-center md:items-end gap-4 text-sm font-medium">
            <a href="mailto:contact@example.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={16} /> contact@example.com
            </a>
            <a href="https://example.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Globe size={16} /> www.example.com
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wide">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
