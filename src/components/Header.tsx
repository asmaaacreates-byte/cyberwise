import React, { useState } from 'react';
import { LucideIcon } from './LucideIcon';
import { CyberWiseLogo } from './CyberWiseLogo';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Experience', href: '#experience' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Faq', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      darkMode 
        ? 'glass-effect-dark bg-cyber-deep/85 border-b border-cyber-royal/20 text-white' 
        : 'glass-effect-light bg-white/85 border-b border-purple-100 text-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <a href="#home" className="flex items-center space-x-3 group">
            <CyberWiseLogo size={46} />
            <div>
              <span className="font-display font-bold tracking-tight text-lg block leading-none">
                CyberWise
              </span>
              <span className={`text-[10px] uppercase font-mono tracking-widest block mt-0.5 ${
                darkMode ? 'text-cyber-glow' : 'text-purple-700'
              }`}>
                Skillversity
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  darkMode
                    ? 'text-slate-300 hover:text-white hover:bg-cyber-royal/25'
                    : 'text-slate-600 hover:text-purple-900 hover:bg-purple-50'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Utilites */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Dark Mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-xl transition-all duration-300 cursor-pointer ${
                darkMode 
                  ? 'bg-cyber-royal/20 text-amber-300 hover:bg-cyber-royal/40 border border-cyber-royal/30' 
                  : 'bg-purple-50 text-indigo-700 hover:bg-purple-100 border border-purple-200'
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              <LucideIcon name={darkMode ? "Sun" : "Moon"} size={18} />
            </button>

            <a
              href="#contact"
              className={`px-5 py-2.5 rounded-xl font-display text-sm font-semibold tracking-tight transition-all duration-300 shadow-md ${
                darkMode 
                  ? 'bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-500 hover:to-fuchsia-500 text-white shadow-purple-950/50 hover:shadow-lg hover:shadow-purple-500/20' 
                  : 'bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white shadow-purple-200 hover:shadow-lg'
              }`}
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Right Utilities */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                darkMode ? 'bg-cyber-purple/40 text-amber-300' : 'bg-purple-100 text-purple-900'
              }`}
            >
              <LucideIcon name={darkMode ? "Sun" : "Moon"} size={18} />
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 rounded-xl transition-all duration-200 ${
                darkMode ? 'bg-cyber-purple/30 text-white' : 'bg-slate-100 text-slate-800'
              }`}
            >
              <LucideIcon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer menu */}
      {mobileMenuOpen && (
        <div className={`lg:hidden transition-all duration-300 animate-slide-in border-t ${
          darkMode 
            ? 'bg-cyber-dark/95 border-cyber-royal/20 text-white' 
            : 'bg-white border-purple-100 text-slate-800'
        }`}>
          <div className="px-4 pt-4 pb-6 space-y-2 max-w-lg mx-auto">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  darkMode 
                    ? 'hover:bg-cyber-purple/50 hover:text-cyber-glow' 
                    : 'hover:bg-purple-50 hover:text-purple-900'
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-700/20">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-xl font-display font-semibold bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white shadow-lg"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
