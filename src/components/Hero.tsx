import React, { useState } from 'react';
import { LucideIcon } from './LucideIcon';
import heroImg from '../assets/images/cyberwise_hero_1781506177465.jpg';

interface HeroProps {
  darkMode: boolean;
}

export function Hero({ darkMode }: HeroProps) {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section 
      id="home" 
      className={`relative min-h-[90vh] flex items-center overflow-hidden pt-12 pb-20 ${
        darkMode ? 'bg-cyber-deep cyber-grid-overlay text-white' : 'bg-slate-50 cyber-grid-overlay-light text-slate-900'
      }`}
    >
      {/* Absolute Ambient Pulsing Globals under the grid */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-purple-600/10 blur-3xl pointer-events-none animate-glowing-orbit" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute top-12 right-12 w-48 h-48 rounded-full bg-fuchsia-600/10 blur-3xl pointer-events-none" />

      {/* Futuristic floating digital particles decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-24 left-1/2 w-2 h-2 rounded-full bg-purple-500 animate-bounce duration-1000" />
        <div className="absolute top-1/2 right-12 w-3 h-3 rounded-full bg-indigo-400 animate-ping duration-1500" />
        <div className="absolute bottom-24 left-16 w-2 h-2 bg-indigo-500 rounded-sm rotate-45 animate-pulse" />
        <div className="absolute top-40 left-10 text-[10px] font-mono text-purple-400/50 hidden md:block">
          &lt;CW_AI_TRANSFORM_ENG_INIT_ON&gt;
        </div>
        <div className="absolute bottom-40 right-10 text-[10px] font-mono text-purple-400/50 hidden md:block">
          STATUS: SYS_GROWTH_ACTIVE
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left copy-block */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Institution Tagline badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full border border-purple-500/20 bg-purple-500/10 backdrop-blur-xl animate-float">
              <span className="flex h-2 w-2 rounded-full bg-cyber-glow animate-pulse" />
              <span className={`text-xs font-mono font-bold tracking-widest uppercase ${
                darkMode ? 'text-cyber-glow' : 'text-purple-900'
              }`}>
                Admissions Now Open • UGC Degree pathways
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
              Transform Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 antialiased font-extrabold pr-2">
                Passion
              </span> 
              Into a <br className="hidden sm:inline" />
              <span className={`relative ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Professional Career
                <svg className="absolute left-0 bottom-[-8px] w-full h-2.5 text-purple-600" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Beautiful Sub-text */}
            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans ${
              darkMode ? 'text-slate-300' : 'text-slate-700 font-medium'
            }`}>
              CyberWise Skillversity, Perinthalmanna bridges academic learning with real-world industry expertise. Master future-ready skills through practical training, expert mentorship, and UGC-accredited degree pathways.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="#courses"
                className={`w-full sm:w-auto px-8 py-4 rounded-xl font-display font-bold text-sm tracking-tight text-center duration-300 transform hover:-translate-y-1 shadow-lg cursor-pointer ${
                  darkMode 
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 shadow-purple-900/40 hover:shadow-purple-500/25'
                    : 'bg-gradient-to-r from-purple-700 to-indigo-700 text-white hover:from-purple-800 hover:to-indigo-800 shadow-purple-200'
                }`}
              >
                Explore Courses
              </a>
              <a 
                href="#contact"
                className={`w-full sm:w-auto px-8 py-4 rounded-xl font-display font-bold text-sm tracking-tight text-center duration-300 transform hover:-translate-y-1 border cursor-pointer ${
                  darkMode 
                    ? 'border-cyber-royal/30 bg-cyber-purple/10 text-white hover:bg-cyber-purple/30'
                    : 'border-purple-200 bg-white text-purple-950 hover:bg-purple-50'
                }`}
              >
                Apply Now
              </a>
            </div>

            {/* Social Proof Stats Overlay */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-purple-500/10 max-w-lg mx-auto lg:mx-0">
              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-purple-500 block">100%</span>
                <span className={`text-[11px] font-mono tracking-wider uppercase block mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Practical Syllabus
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-indigo-500 block">15+</span>
                <span className={`text-[11px] font-mono tracking-wider uppercase block mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Expert Coaches
                </span>
              </div>
              <div>
                <span className="font-display font-bold text-2xl sm:text-3xl text-pink-500 block">UGC MD</span>
                <span className={`text-[11px] font-mono tracking-wider uppercase block mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Degree Pathways
                </span>
              </div>
            </div>

          </div>

          {/* Right graphics card */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Main Holographic visual box */}
            <div className={`relative rounded-3xl p-3 z-10 max-w-md w-full duration-500 transition-all transform hover:scale-[1.02] ${
              darkMode 
                ? 'bg-gradient-to-b from-indigo-500/20 to-purple-600/5 border border-purple-500/25 shadow-2xl shadow-purple-950/20' 
                : 'bg-white border border-purple-100 shadow-xl'
            }`}>
              
              <div className="relative rounded-2xl overflow-hidden aspect-video sm:aspect-square w-full bg-slate-900 group">
                <img 
                  src={heroImg} 
                  alt="Futuristic Educational Classroom at CyberWise Skillversity" 
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating holographic overlays over image */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                  <div className="flex items-center space-x-2 mb-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-purple-600 text-[10px] uppercase font-mono tracking-widest font-bold">
                      Perinthalmanna Main Studio
                    </span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  </div>
                  <h3 className="font-display font-bold text-sm sm:text-base leading-tight">
                    Next-Gen Practical Classrooms & Editing Workstations
                  </h3>
                </div>

                {/* Simulated Play button for interactive tour */}
                <button 
                  onClick={() => setShowVideoModal(true)}
                  className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-600/90 text-white shadow-xl backdrop-blur-sm cursor-pointer border border-white/20 transition-transform hover:scale-110 active:scale-95 z-20"
                >
                  <LucideIcon name="Play" size={22} className="ml-1 fill-white" />
                </button>

              </div>

              {/* Extra glass-floating card */}
              <div className={`absolute -bottom-6 -right-6 lg:-right-8 p-4 rounded-2xl border flex items-center space-x-4 max-w-[200px] animate-float ${
                darkMode 
                  ? 'glass-effect-dark border-purple-500/30' 
                  : 'glass-effect-light border-purple-100 shadow-lg'
              }`}>
                <div className="h-10 w-10 rounded-xl bg-purple-500/25 flex items-center justify-center text-purple-400">
                  <LucideIcon name="Award" size={20} className="text-purple-600 dark:text-purple-300" />
                </div>
                <div>
                  <span className="block font-display font-black text-sm text-purple-600 dark:text-purple-300 leading-none">UGC Approved</span>
                  <span className="block text-[10px] text-slate-500 font-mono mt-1">Official Degree Paths</span>
                </div>
              </div>

              {/* Secondary decorative code tag */}
              <div className={`absolute -top-6 -left-6 p-3 rounded-2xl border flex items-center space-x-2.5 max-w-[180px] ${
                darkMode ? 'glass-effect-dark border-purple-500/30' : 'glass-effect-light border-purple-100 shadow-md'
              }`}>
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className={`text-[10px] font-mono tracking-wider ${darkMode ? 'text-slate-300' : 'text-slate-600 font-bold'}`}>
                  AI_COURSEWORK_V4_2
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Video Interactive Tour Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-deep/80 backdrop-blur-md p-4">
          <div className="relative w-full max-w-3xl bg-slate-900 rounded-2xl overflow-hidden border border-purple-500/30 shadow-2xl">
            <button 
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 text-white/75 hover:text-white bg-black/40 hover:bg-black/60 p-2 rounded-full z-40 transition-colors cursor-pointer"
            >
              <LucideIcon name="X" size={20} />
            </button>
            <div className="aspect-video w-full">
              {/* Fallback elegant video-tour card or actual stream simulation */}
              <div className="h-full w-full bg-gradient-to-br from-cyber-deep via-cyber-purple/40 to-cyber-deep flex flex-col items-center justify-center p-8 text-center text-white">
                <LucideIcon name="Tv" size={48} className="text-purple-400 mb-4 animate-bounce" />
                <h3 className="font-display font-bold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-200">
                  CyberWise Skillversity Virtual Tour
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-md">
                  Step inside our modern practical labs in Perinthalmanna. Experience real digital media rooms, videography soundstages, and high-performance coding spaces.
                </p>
                <div className="mt-6 flex flex-wrap gap-3 justify-center">
                  <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30">
                    🎬 Editing Suites
                  </span>
                  <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30">
                    🎙️ Spoken Labs
                  </span>
                  <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30">
                    💻 Tech Classrooms
                  </span>
                </div>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="mt-8 px-6 py-2 rounded-xl bg-purple-600 text-xs font-bold hover:bg-purple-700 transition"
                >
                  Close Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
