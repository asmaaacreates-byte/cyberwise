import React, { useState } from 'react';
import { LucideIcon } from './LucideIcon';
import { TESTIMONIALS } from '../data';

interface TestimonialsProps {
  darkMode: boolean;
}

export function Testimonials({ darkMode }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section 
      id="testimonials" 
      className={`relative py-24 overflow-hidden border-t transition-colors ${
        darkMode ? 'bg-cyber-dark text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Decorative abstract visual backdrops */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-center">
        
        {/* Outline Tag items */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
          <LucideIcon name="Heart" size={13} className="text-purple-400" />
          <span className={`text-[10px] font-mono tracking-widest font-bold uppercase ${darkMode ? 'text-cyber-glow' : 'text-purple-950'}`}>
            Student Voices
          </span>
        </div>

        <h2 className="font-display font-black text-3.5xl sm:text-4.5xl leading-tight tracking-tight mb-4">
          Real Stories. <br className="sm:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-400 to-indigo-500">
            Real Transformations.
          </span>
        </h2>
        
        <p className={`text-base font-sans max-w-xl mx-auto mb-16 ${darkMode ? 'text-slate-400' : 'text-slate-600 font-medium'}`}>
          See how our hands-on, practical training prepares creative and tech students to land roles at premium agencies, studios, and startups.
        </p>

        {/* Carousel display box with slide effects */}
        <div className={`relative p-8 sm:p-12 rounded-3xl border text-left flex flex-col md:flex-row gap-8 items-start duration-500 ${
          darkMode 
            ? 'glass-effect-dark bg-cyber-deep/80 border-purple-500/15' 
            : 'bg-slate-50 border-purple-150/85 shadow-lg'
        }`}>
          
          {/* Quote large icon decorator in background */}
          <div className="absolute top-4 right-8 font-serif text-8xl text-purple-500/10 select-none pointer-events-none">
            “
          </div>

          {/* Initials profile avatar container */}
          <div className="flex-shrink-0">
            <div className={`h-16 w-16 rounded-2xl flex items-center justify-center font-display font-black text-xl tracking-tight shadow-md ${
              darkMode 
                ? 'bg-gradient-to-br from-purple-600 to-indigo-600 text-white' 
                : 'bg-gradient-to-br from-purple-700 to-violet-800 text-white'
            }`}>
              {activeTestimonial.avatar}
            </div>
          </div>

          {/* Testimonial text block */}
          <div className="space-y-4 flex-1">
            
            {/* Highly customized gold rating stars */}
            <div className="flex items-center space-x-1">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <span key={i}>
                  <LucideIcon name="Star" size={13} className="text-amber-400 fill-amber-400" />
                </span>
              ))}
            </div>

            <p className={`text-base sm:text-lg leading-relaxed font-sans italic ${
              darkMode ? 'text-slate-200' : 'text-slate-750 font-medium'
            }`}>
              “{activeTestimonial.feedback}”
            </p>

            {/* Author metrics */}
            <div className="pt-4 border-t border-purple-500/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <span className={`block font-display font-black text-sm tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {activeTestimonial.name}
                </span>
                <span className="block text-xs font-mono text-purple-400 mt-1">
                  {activeTestimonial.role}
                </span>
              </div>

              {/* Course tag badge */}
              <div className="w-fit">
                <span className={`text-[10px] font-mono tracking-wider font-bold uppercase py-1 px-3.5 rounded-full ${
                  darkMode ? 'bg-cyber-purple text-purple-300' : 'bg-purple-100 text-purple-700'
                }`}>
                  {activeTestimonial.course}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Testimonials Navigation buttons and slider indicator dots */}
        <div className="flex items-center justify-between mt-8 max-w-xs mx-auto">
          
          <button 
            onClick={handlePrev}
            className={`p-3 rounded-full border transition-all cursor-pointer ${
              darkMode ? 'border-purple-500/10 hover:bg-cyber-purple/40 text-white' : 'border-purple-150 bg-white hover:bg-slate-50 shadow-sm text-slate-800'
            }`}
          >
            <LucideIcon name="ChevronLeft" size={16} />
          </button>

          {/* Simple indicator dots */}
          <div className="flex items-center space-x-2">
            {TESTIMONIALS.map((_, i) => (
              <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full duration-300 cursor-pointer ${
                  currentIndex === i ? 'w-6 bg-purple-500' : 'w-2 bg-purple-500/25'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className={`p-3 rounded-full border transition-all cursor-pointer ${
              darkMode ? 'border-purple-500/10 hover:bg-cyber-purple/40 text-white' : 'border-purple-150 bg-white hover:bg-slate-50 shadow-sm text-slate-800'
            }`}
          >
            <LucideIcon name="ChevronRight" size={16} />
          </button>

        </div>

      </div>
    </section>
  );
}
