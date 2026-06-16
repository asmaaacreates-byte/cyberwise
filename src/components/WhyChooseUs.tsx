import React from 'react';
import { LucideIcon } from './LucideIcon';
import { FEATURES } from '../data';

interface WhyChooseUsProps {
  darkMode: boolean;
}

export function WhyChooseUs({ darkMode }: WhyChooseUsProps) {
  return (
    <section 
      id="why-us" 
      className={`relative py-24 border-t transition-colors ${
        darkMode ? 'bg-cyber-dark text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Background visual orb */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25">
            <LucideIcon name="ShieldCheck" size={14} className="text-purple-400" />
            <span className={`text-[10px] font-mono tracking-widest font-bold uppercase ${darkMode ? 'text-cyber-glow' : 'text-purple-900'}`}>
              The Cyberwise Advantage
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
            Why Choose <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
              CyberWise
            </span> Skillversity
          </h2>

          <p className={`text-sm sm:text-base font-sans max-w-2xl mx-auto ${darkMode ? 'text-slate-350' : 'text-slate-600 font-medium'}`}>
            We deliver a futuristic ecosystem centered strictly around professional portfolio construction, real studio hardware deployment, and dual UGC credentials.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <div 
              key={feature.id}
              className={`group p-6 rounded-3xl border transition-all duration-300 hover:scale-[1.03] hover:shadow-xl flex flex-col justify-between ${
                darkMode 
                  ? 'bg-cyber-deep/80 border-purple-500/15 hover:border-purple-500/35 hover:bg-cyber-purple/20' 
                  : 'bg-slate-50 border-purple-100 hover:border-purple-200 hover:bg-purple-50/50'
              }`}
            >
              
              <div className="space-y-4">
                {/* Custom Gradient Accent Indicator */}
                <span className={`block w-8 h-1 rounded-full bg-gradient-to-r ${feature.accentColor}`} />
                
                {/* Features Custom Icon container */}
                <div className={`h-11 w-11 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 ${
                  darkMode ? 'bg-cyber-purple/60 text-purple-300' : 'bg-purple-100 text-purple-700'
                }`}>
                  <LucideIcon name={feature.icon} size={22} />
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg tracking-tight leading-snug">
                  {feature.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {feature.description}
                </p>
              </div>

              {/* Static numeric decorative tag */}
              <div className="pt-6 border-t border-purple-100/5 mt-6 flex items-center justify-between text-[11px] font-mono text-purple-400">
                <span>QUAL_ASSURED</span>
                <span>[0{idx + 1}]</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
