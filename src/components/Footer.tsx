import React from 'react';
import { LucideIcon } from './LucideIcon';
import { CyberWiseLogo } from './CyberWiseLogo';

interface FooterProps {
  darkMode: boolean;
}

export function Footer({ darkMode }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`border-t transition-colors ${
      darkMode 
        ? 'bg-cyber-deep border-cyber-royal/20 text-slate-400' 
        : 'bg-white border-purple-100 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand block (logo + tagline) */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="flex items-center space-x-3 group">
              <CyberWiseLogo size={42} />
              <div>
                <span className={`font-display font-black tracking-tight text-base block leading-none ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  CyberWise
                </span>
                <span className="text-[9px] uppercase font-mono tracking-widest block mt-0.5 text-purple-400">
                  Skillversity
                </span>
              </div>
            </a>

            <p className="text-xs leading-relaxed max-w-sm">
              CyberWise Skillversity, Perinthalmanna is Malappuram's leading digital vocational design and media academy, shaping highly employable practitioners.
            </p>

            <p className={`text-xs font-medium font-sans italic p-2.5 rounded-xl border-l-2 border-purple-500 w-full ${
              darkMode ? 'bg-cyber-purple/10 text-purple-300' : 'bg-purple-50 text-purple-900'
            }`}>
              “Where Knowledge Meets Industry and Dreams Become Careers.”
            </p>
          </div>

          {/* Quick Links column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className={`text-xs font-mono font-bold tracking-wider uppercase ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Core Institution
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs">
              <a href="#home" className="hover:text-purple-500 transition-colors">Home Landing</a>
              <a href="#about" className="hover:text-purple-500 transition-colors">About Us</a>
              <a href="#why-us" className="hover:text-purple-500 transition-colors">Why CyberWise</a>
              <a href="#experience" className="hover:text-purple-500 transition-colors">Micro Workstations</a>
              <a href="#admissions" className="hover:text-purple-500 transition-colors">UGC Degrees</a>
            </div>
          </div>

          {/* Courses column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className={`text-xs font-mono font-bold tracking-wider uppercase ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Specialized Tracks
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs">
              <a href="#courses" className="hover:text-purple-500 transition-colors">AI-Driven Digital Marketing</a>
              <a href="#courses" className="hover:text-purple-500 transition-colors">Professional Videography</a>
              <a href="#courses" className="hover:text-purple-500 transition-colors">E-Commerce & Business Growth</a>
              <a href="#courses" className="hover:text-purple-500 transition-colors">Spoken English & Communication</a>
            </div>
          </div>

          {/* Contact Details column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className={`text-xs font-mono font-bold tracking-wider uppercase ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Perinthalmanna Hub
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2">
                <LucideIcon name="MapPin" size={14} className="text-purple-400 shrink-0 mt-0.5" />
                <span>Angadippuram, opposite of AM Honda, Perinthalmanna, Kerala - 679322</span>
              </div>
              <div className="flex items-center space-x-2">
                <LucideIcon name="Mail" size={14} className="text-purple-400 shrink-0" />
                <span>info@cyberwiseskillversity.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Base divider line */}
        <div className="mt-12 pt-8 border-t border-purple-500/10 flex flex-col sm:flex-row sm:items-center sm:justify-between text-[11px] gap-4">
          <div>
            <span>&copy; {currentYear} CyberWise Skillversity, Perinthalmanna. All rights reserved.</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-slate-500">UGC Accredited Degree Pathway Partner</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-500">NSQF Level Alignment Certified</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
