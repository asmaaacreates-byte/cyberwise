import React, { useState, useEffect } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { WhyChooseUs } from './components/WhyChooseUs';
import { LearningExperience } from './components/LearningExperience';
import { Testimonials } from './components/Testimonials';
import { AdmissionUgc } from './components/AdmissionUgc';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AICareerAdvisor } from './components/AICareerAdvisor';
import { WhatsAppButton } from './components/WhatsAppButton';
import { FAQS } from './data';
import { LucideIcon } from './components/LucideIcon';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('cyberwise_dark_mode');
    return saved ? JSON.parse(saved) : true; // Default to luxury dark theme!
  });

  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem('cyberwise_dark_mode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div id="cyberwise-root" className={`min-h-screen font-sans duration-300 overflow-x-hidden ${
      darkMode ? 'bg-cyber-deep text-white' : 'bg-slate-50 text-slate-905'
    }`}>
      
      {/* Premium Header navigation space */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Home Hero section */}
      <Hero darkMode={darkMode} />

      {/* About segment */}
      <About darkMode={darkMode} />

      {/* Course academy board */}
      <Programs 
        darkMode={darkMode} 
        selectedCourseId={selectedCourseId} 
        setSelectedCourseId={setSelectedCourseId} 
      />

      {/* Bento feature advantage grid */}
      <WhyChooseUs darkMode={darkMode} />

      {/* Classrooms & active workshop split block */}
      <LearningExperience darkMode={darkMode} />

      {/* Testimonials success review carousel */}
      <Testimonials darkMode={darkMode} />

      {/* UGC pathway accredited certifications */}
      <AdmissionUgc darkMode={darkMode} />

      {/* FAQ section item */}
      <section 
        id="faq" 
        className={`relative py-24 border-t transition-colors ${
          darkMode ? 'bg-cyber-dark text-white' : 'bg-white text-slate-900 border-purple-50'
        }`}
      >
        <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/25">
              <LucideIcon name="HelpCircle" size={13} className="text-purple-400" />
              <span className={`text-[10px] font-mono tracking-widest font-bold uppercase ${darkMode ? 'text-cyber-glow' : 'text-purple-900'}`}>
                Answers Database
              </span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4.5xl leading-tight tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Queries</span>
            </h2>
            
            <p className={`text-sm sm:text-base font-sans max-w-xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
              Check answers below regarding UGC validation structures, scheduling modules, and creative gear distribution lists.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  darkMode 
                    ? 'bg-cyber-deep/80 border-purple-500/10' 
                    : 'bg-slate-50 border-purple-150/90 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex justify-between items-center cursor-pointer hover:bg-purple-500/5 duration-150"
                >
                  <span className={`font-display font-bold text-sm sm:text-base ${
                    darkMode ? 'text-slate-100' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </span>
                  
                  <div className={`p-1.5 rounded-lg text-purple-400 bg-purple-500/10 transition-transform duration-300 ${
                    openFaqIndex === idx ? 'rotate-185' : 'rotate-0'
                  }`}>
                    <LucideIcon name="ChevronDown" size={16} />
                  </div>
                </button>

                {openFaqIndex === idx && (
                  <div className={`px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                    darkMode ? 'text-slate-350 border-purple-500/5' : 'text-slate-650 font-medium border-purple-100'
                  }`}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Main geographical Contact form and coordinates */}
      <Contact darkMode={darkMode} />

      {/* Website standard information bottom foot */}
      <Footer darkMode={darkMode} />

      {/* Floating active carrier consultant */}
      <AICareerAdvisor darkMode={darkMode} />

      {/* Floating interactive WhatsApp consultant */}
      <WhatsAppButton darkMode={darkMode} />

      {/* Vercel Speed Insights */}
      <SpeedInsights />

    </div>
  );
}
