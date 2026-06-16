import React from 'react';
import { LucideIcon } from './LucideIcon';
import { STATS } from '../data';

interface AboutProps {
  darkMode: boolean;
}

export function About({ darkMode }: AboutProps) {
  return (
    <section 
      id="about" 
      className={`relative py-24 overflow-hidden border-t ${
        darkMode ? 'bg-cyber-dark border-cyber-royal/20 text-white' : 'bg-white border-purple-100 text-slate-850'
      }`}
    >
      {/* Background blobs */}
      <div className="absolute top-1/2 right-0 w-72 h-72 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block with interactive Stats Grid */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {STATS.map((stat, i) => (
                <div 
                  key={i}
                  className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    darkMode 
                      ? 'bg-cyber-deep/80 border-purple-500/15 text-white hover:border-purple-500/35 hover:bg-cyber-purple/20' 
                      : 'bg-purple-50/50 border-purple-100/80 text-slate-850 hover:bg-purple-50 hover:border-purple-200'
                  }`}
                >
                  <div className="flex items-baseline space-x-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-indigo-500">
                      {stat.value}
                    </span>
                    {stat.suffix && (
                      <span className="font-display font-black text-xl text-purple-500">
                        {stat.suffix}
                      </span>
                    )}
                  </div>
                  <p className={`text-xs sm:text-sm font-sans font-semibold mt-2 leading-snug ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Extra interactive visual banner below stats */}
            <div className={`mt-6 p-5 rounded-2xl border flex items-center space-x-4 ${
              darkMode 
                ? 'bg-gradient-to-r from-purple-950/40 to-indigo-950/20 border-purple-500/10' 
                : 'bg-gradient-to-r from-purple-50 to-indigo-50/50 border-purple-100 shadow-sm'
            }`}>
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                <LucideIcon name="MapPin" size={18} />
              </div>
              <div className="text-left">
                <span className={`block text-xs font-mono tracking-wider uppercase font-bold ${darkMode ? 'text-cyber-glow' : 'text-purple-900'}`}>
                  Academic Hub
                </span>
                <span className={`block text-sm font-sans font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  Perinthalmanna, Kerala, India
                </span>
              </div>
            </div>
          </div>

          {/* Right Block for detailed copy */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            
            {/* Outline tag */}
            <div className="flex items-center space-x-2">
              <span className="h-0.5 w-6 bg-purple-500 rounded" />
              <span className={`text-[11px] font-mono tracking-widest font-extrabold uppercase ${
                darkMode ? 'text-cyber-glow' : 'text-purple-850'
              }`}>
                Institutional Core
              </span>
            </div>

            {/* Main Headline */}
            <h2 className={`font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Where Education <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 antialiased font-black">
                Meets Industry
              </span>
            </h2>

            {/* Content paragraph (first part) */}
            <p className={`text-base sm:text-lg leading-relaxed font-sans ${
              darkMode ? 'text-slate-300' : 'text-slate-700 font-medium'
            }`}>
              CyberWise Skillversity is a next-generation skill development institution dedicated to closing the gap between traditional education and modern career requirements. Our programs combine academic excellence with practical, industry-focused training, helping students become confident professionals ready for the digital world.
            </p>

            {/* Content paragraph (second part) */}
            <div className={`p-5 rounded-2xl border-l-4 border-purple-500 ${
              darkMode ? 'bg-cyber-purple/20 text-slate-300 border-purple-500/30' : 'bg-purple-50/50 text-slate-700 font-medium border-purple-200'
            }`}>
              Through hands-on projects, expert guidance, and real-world learning experiences, we prepare students to thrive in fast-growing industries.
            </div>

            {/* Practical key highlights list with sleek check icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              <div className="flex items-center space-x-2.5">
                <span className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <LucideIcon name="Check" size={14} />
                </span>
                <span className={`text-xs font-sans font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Live Client Budgets
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <LucideIcon name="Check" size={14} />
                </span>
                <span className={`text-xs font-sans font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Real Studio Equipments
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <LucideIcon name="Check" size={14} />
                </span>
                <span className={`text-xs font-sans font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Executive Public Speaking
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="h-6 w-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <LucideIcon name="Check" size={14} />
                </span>
                <span className={`text-xs font-sans font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  UGC Accredited Accolades
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
