import React, { useState } from 'react';
import { LucideIcon } from './LucideIcon';
import sessionImg from '../assets/images/learning_experience_1781506192649.jpg';

interface LearningExperienceProps {
  darkMode: boolean;
}

export function LearningExperience({ darkMode }: LearningExperienceProps) {
  const [activeTab, setActiveTab] = useState<'studios' | 'marketing' | 'workshops'>('studios');

  const tabsData = {
    studios: {
      title: "Cinematic Media Production Studio",
      detail: "Armed with cinema grade mirrorless cameras, multiple lenses (prime, zoom), multi-directional microphones, physical softlight flags, gimbal stabilizers, and professional green screen suites.",
      icon: "Video",
      tag: "Broadcast Ready Studio"
    },
    marketing: {
      title: "Digital Marketing Analytics Room",
      detail: "Equipped with live ad spend accounts, SEO crawl softwares, programmatic metrics matrices, automated email CRM dashboards, and generative copywriting intelligence terminals.",
      icon: "TrendingUp",
      tag: "Live Performance Laboratories"
    },
    workshops: {
      title: "UGC Collaborative Workshop Room",
      detail: "Interactive, high-speed Wi-Fi enabled collaboration docks where students gather for client project briefs, CV preparation, executive accent exercises, and presentation clinics.",
      icon: "Users",
      tag: "Global Collaboration Arena"
    }
  };

  return (
    <section 
      id="experience" 
      className={`relative py-24 border-t transition-colors ${
        darkMode ? 'bg-cyber-deep text-white cyber-grid-overlay' : 'bg-slate-50 text-slate-900 cyber-grid-overlay-light'
      }`}
    >
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Split visual & Tab Switcher */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Outline Header tags */}
            <div className="flex items-center space-x-2">
              <span className="h-0.5 w-6 bg-purple-500" />
              <span className={`text-[11px] font-mono tracking-widest font-extrabold uppercase ${
                darkMode ? 'text-cyber-glow' : 'text-purple-950'
              }`}>
                Dynamic Ecosystem
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-display font-black text-3.5xl sm:text-4.5xl leading-[1.15] tracking-tight">
              Learn. Create. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 antialiased font-black">
                Innovate. Succeed.
              </span>
            </h2>

            {/* Structured paragraph content */}
            <p className={`text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700 font-medium'}`}>
              At CyberWise Skillversity, education goes beyond textbooks. Our practical approach ensures every student gains the skills, confidence, and experience needed to succeed in the modern professional landscape.
            </p>

            {/* Custom Interactive Tab System */}
            <div className="space-y-3 pt-4">
              {(Object.keys(tabsData) as Array<keyof typeof tabsData>).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center space-x-4 cursor-pointer ${
                    activeTab === key
                      ? darkMode
                        ? 'bg-cyber-purple/40 border-purple-500/50 shadow-lg shadow-purple-500/10'
                        : 'bg-white border-purple-300 shadow-md shadow-purple-100'
                      : darkMode
                        ? 'bg-cyber-dark/40 border-purple-500/10 opacity-70 hover:opacity-100'
                        : 'bg-transparent border-purple-100 hover:bg-white/50'
                  }`}
                >
                  <div className={`p-2 rounded-xl ${
                    activeTab === key
                      ? 'bg-purple-600 text-white'
                      : darkMode ? 'bg-cyber-deep text-purple-400' : 'bg-purple-50 text-purple-700'
                  }`}>
                    <LucideIcon name={tabsData[key].icon} size={18} />
                  </div>
                  <div>
                    <span className="block text-xs font-mono font-bold text-purple-400">
                      {tabsData[key].tag}
                    </span>
                    <span className={`block text-xs sm:text-sm font-display font-bold mt-0.5 ${
                      darkMode ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      {tabsData[key].title}
                    </span>
                  </div>
                </button>
              ))}
            </div>

          </div>

          {/* Right Block: Image Preview Frame & interactive tabs detail description */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Split Media Display Frame */}
            <div className={`relative p-3 rounded-3xl border ${
              darkMode ? 'bg-cyber-dark border-purple-500/15' : 'bg-white border-purple-100 shadow-xl'
            }`}>
              <div className="rounded-2xl overflow-hidden aspect-video relative group bg-black">
                <img 
                  src={sessionImg} 
                  alt="Students collaborating at CyberWise Skillversity Production suite"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual glass overlay inside image indicating active tab attributes */}
                <div className="absolute top-4 left-4 bg-lime-500/90 backdrop-blur-sm text-black py-1 px-3 rounded-full text-[9px] font-mono font-bold tracking-widest uppercase shadow-md flex items-center space-x-1">
                  <span className="h-1 text-black animate-ping" />
                  <span>Interactive Practical Lab Active</span>
                </div>
              </div>

              {/* Detail display card corresponding to selected tab */}
              <div className={`p-6 mt-3 rounded-2xl ${
                darkMode ? 'bg-cyber-deep/90' : 'bg-purple-50/40'
              }`}>
                <h4 className="font-display font-bold text-sm sm:text-base text-purple-400 flex items-center space-x-2">
                  <LucideIcon name="Shield" size={16} />
                  <span>{tabsData[activeTab].title}</span>
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed mt-2.5 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600 font-medium'
                }`}>
                  {tabsData[activeTab].detail}
                </p>

                {/* Simulated workspace elements Checklist tag */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-purple-500/10">
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Real-world assets</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[11px] text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span>Live counselor assistance</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
